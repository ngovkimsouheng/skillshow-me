// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useGetMeQuery, useUpdateUserMutation } from "../api/authApi";
// import { FaSave } from "react-icons/fa";

// export default function EditUser() {
//   const navigate = useNavigate();

//   // Fetch current user
//   const { data: user, isLoading: isFetching } = useGetMeQuery();
//   const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

//   // Edit mode
//   const [isEditing, setIsEditing] = useState(false);

//   // Form state
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     first_name: "",
//     last_name: "",
//     about_me: "",
//     profile: "",
//   });

//   // Populate form when user loads
//   useEffect(() => {
//     if (user) {
//       setFormData({
//         username: user.username || "",
//         email: user.email || "",
//         first_name: user.first_name || "",
//         last_name: user.last_name || "",
//         about_me: user.about_me || "",
//         profile: user.profile || "",
//       });
//     }
//   }, [user]);

//   // Handle text inputs
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle profile image file
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData({
//         ...formData,
//         profile: file,
//       });
//     }
//   };

//   // Save changes
//   const handleSave = async () => {
//     try {
//       const data = new FormData();
//       data.append("username", formData.username);
//       data.append("email", formData.email);
//       data.append("first_name", formData.first_name);
//       data.append("last_name", formData.last_name);
//       data.append("about_me", formData.about_me);

//       // Append file if changed
//       if (formData.profile instanceof File) {
//         data.append("profile", formData.profile);
//       }

//       await updateUser({ id: user.id, body: data }).unwrap();

//       setIsEditing(false);
//       alert("Profile updated successfully ✅");
//     } catch (error) {
//       console.error(error);
//       alert("Update failed ❌");
//     }
//   };

//   if (isFetching) return <p>Loading user...</p>;

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg">
//       <h2 className="text-xl font-bold mb-4 text-center">Edit Profile</h2>

//       <div className="flex flex-col items-center gap-3 mb-4">
//         {/* Profile Preview */}
//         {/* <img
//           src={
//             formData.profile instanceof File
//               ? URL.createObjectURL(formData.profile)
//               : formData.profile
//           }
//           alt={formData.username}
//           className="w-24 h-24 rounded-full object-cover border-2 border-primary"
//         /> */}

//         {/* File Input */}
//         {isEditing && (
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleFileChange}
//             className="text-sm"
//           />
//         )}
//       </div>

//       {/* Form Fields */}
//       <div className="space-y-3">
//         <input
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//           placeholder="Username"
//           disabled={!isEditing}
//         />
//         <input
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//           placeholder="Email"
//           disabled={!isEditing}
//         />
//         <input
//           name="first_name"
//           value={formData.first_name}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//           placeholder="First Name"
//           disabled={!isEditing}
//         />
//         <input
//           name="last_name"
//           value={formData.last_name}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//           placeholder="Last Name"
//           disabled={!isEditing}
//         />
//         <textarea
//           name="about_me"
//           value={formData.about_me}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//           placeholder="About"
//           disabled={!isEditing}
//         />
//       </div>

//       {/* Edit / Save Button */}
//       <button
//         type="button"
//         onClick={isEditing ? handleSave : () => setIsEditing(true)}
//         disabled={isUpdating}
//         className="w-full mt-4 bg-primary text-white py-2 rounded flex items-center justify-center gap-2"
//       >
//         <FaSave />
//         {isEditing ? (isUpdating ? "Saving..." : "Save") : "Edit"}
//       </button>
//     </div>
//   );
// }
