import { useState } from "react";
import { useSelector } from "react-redux";
import { useCreateContactMutation } from "../src/api/contact-meApi";

const ContactForm = () => {
  const user = useSelector((state) => state.auth.user);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [createContact, { isLoading, isSuccess, isError, error }] =
    useCreateContactMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.id) {
      alert("User not logged in");
      return;
    }

    try {
      await createContact({
        user_id: user.id,
        body: form,
      }).unwrap();

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= STYLE (CONSISTENT) ================= */

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm " +
    "focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e] " +
    "transition-all duration-200";

  const labelClass = "block text-sm font-medium mb-2 text-gray-600";

  return (
    <div className="space-y-8">
      {/* <h2 className="text-2xl font-bold text-[#1e2e3e]">Contact Information</h2> */}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className={labelClass}>Full Name</label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>Email Address</label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className={inputClass}
          />
        </div>

        {/* Message */}
        <div>
          <label className={labelClass}>Message</label>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
            rows="5"
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Error */}
        {isError && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
            {error?.data?.message || "Something went wrong"}
          </div>
        )}

        {/* Success */}
        {isSuccess && (
          <div className="bg-green-50 border border-green-200 text-green-600 text-sm p-3 rounded-lg">
            Message sent successfully!
          </div>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 rounded-xl font-semibold text-white
            bg-[#1e2e3e] hover:bg-[#16222f]
            active:scale-95 transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

// ============with edit
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import {
//   useCreateContactMutation,
//   useGetContactByIdQuery,
//   useUpdateContactMutation,
// } from "../src/api/contact-meApi";
// import { useParams, useNavigate } from "react-router-dom";

// const ContactForm = () => {
//   const { id } = useParams(); // 👈 if id exists → edit mode
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.auth.user);

//   const isEdit = Boolean(id);

//   /* ================= API ================= */

//   const { data } = useGetContactByIdQuery(id, {
//     skip: !isEdit, // only fetch when editing
//   });

//   const [createContact, createStatus] = useCreateContactMutation();
//   const [updateContact, updateStatus] = useUpdateContactMutation();

//   const isLoading = createStatus.isLoading || updateStatus.isLoading;
//   const isSuccess = createStatus.isSuccess || updateStatus.isSuccess;
//   const isError = createStatus.isError || updateStatus.isError;
//   const error = createStatus.error || updateStatus.error;

//   /* ================= FORM STATE ================= */

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   /* ================= LOAD DATA WHEN EDITING ================= */

//   useEffect(() => {
//     if (data?.data) {
//       setForm({
//         name: data.data.name,
//         email: data.data.email,
//         message: data.data.message,
//       });
//     }
//   }, [data]);

//   /* ================= HANDLE CHANGE ================= */

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   /* ================= SUBMIT ================= */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user?.id) {
//       alert("User not logged in");
//       return;
//     }

//     try {
//       if (isEdit) {
//         // ✅ UPDATE
//         await updateContact({
//           id,
//           body: form,
//         }).unwrap();

//         alert("Updated successfully");
//       } else {
//         // ✅ CREATE
//         await createContact({
//           user_id: user.id,
//           body: form,
//         }).unwrap();

//         setForm({
//           name: "",
//           email: "",
//           message: "",
//         });

//         alert("Created successfully");
//       }

//       navigate("/contact-list"); // ✅ redirect after success
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   /* ================= STYLE ================= */

//   const inputClass =
//     "w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm " +
//     "focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e] " +
//     "transition-all duration-200";

//   const labelClass = "block text-sm font-medium mb-2 text-gray-600";

//   return (
//     <div className="space-y-8">
//       <h2 className="text-2xl font-bold text-[#1e2e3e]">
//         {isEdit ? "Edit Contact" : "Contact Information"}
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Name */}
//         <div>
//           <label className={labelClass}>Full Name</label>
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             required
//             className={inputClass}
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label className={labelClass}>Email Address</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className={inputClass}
//           />
//         </div>

//         {/* Message */}
//         <div>
//           <label className={labelClass}>Message</label>
//           <textarea
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             required
//             rows="5"
//             className={`${inputClass} resize-none`}
//           />
//         </div>

//         {/* Error */}
//         {isError && (
//           <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
//             {error?.data?.message || "Something went wrong"}
//           </div>
//         )}

//         {/* Success */}
//         {isSuccess && (
//           <div className="bg-green-50 border border-green-200 text-green-600 text-sm p-3 rounded-lg">
//             Success!
//           </div>
//         )}

//         {/* Button */}
//         <button
//           type="submit"
//           disabled={isLoading}
//           className="w-full py-3 rounded-xl font-semibold text-white bg-[#1e2e3e] hover:bg-[#16222f] active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {isLoading
//             ? "Processing..."
//             : isEdit
//               ? "Update Message"
//               : "Send Message"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
