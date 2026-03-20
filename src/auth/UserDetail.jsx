import { useState, useEffect } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { useUpdateUserMutation } from "../api/authApi";
import { useNavigate } from "react-router";
import { useUploadFileMutation } from "../api/authApi";
export default function UserDetail({ user, onClose }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const navigate = useNavigate();
  const [editLoading, setEditLoading] = useState(false);
  const [uploadFile] = useUploadFileMutation();
  //  Fill form when user loads
  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || "",
        email: user.email || "",
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        about_me: user.about_me || "",
        profile: user.profile || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      let profileUrl = formData.profile;

      if (formData.profile instanceof File) {
        const uploadData = new FormData();
        uploadData.append("file", formData.profile);

        const uploadRes = await uploadFile(uploadData).unwrap();

        profileUrl =
          uploadRes?.files?.[0]?.url ||
          uploadRes?.data?.files?.[0]?.url ||
          null;
      }

      await updateUser({
        id: user.id,
        body: {
          username: formData.username,
          email: formData.email,
          first_name: formData.first_name,
          last_name: formData.last_name,
          about_me: formData.about_me,
          profile: profileUrl,
        },
      }).unwrap();

      setIsEditing(false);
      alert("Profile updated successfully ✅");

      //  CLOSE MODAL HERE
      onClose();

      // optional
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Update failed ❌");
    }
  };
  return (
    <div
      className="fixed top-90 inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl w-[420px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl dark:text-white text-text-description font-bold mb-6 text-center">Profile Details</h2>
        <div className="flex flex-col items-center mb-4">
          {/* Hidden File Input */}
          <input
            type="file"
            accept="image/*"
            id="profileUpload"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setFormData({
                  ...formData,
                  profile: file,
                });
              }
            }}
          />

          <label
            htmlFor={isEditing ? "profileUpload" : undefined}
            className={`relative ${isEditing ? "cursor-pointer group" : "cursor-default"
              }`}
          >
            {/* Image */}
            <img
              src={
                formData.profile instanceof File
                  ? URL.createObjectURL(formData.profile)
                  : formData.profile || "https://via.placeholder.com/100"
              }
              alt={formData.username}
              className="w-24 h-24 rounded-full object-cover border-2 border-primary transition duration-300"
            />

            {/*  Overlay ONLY WHEN Editing */}
            {isEditing && (
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                Edit Profile
              </div>
            )}
          </label>
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div className="space-y-3 text-gray-700 dark:text-gray-300 w-full">
            {/* Username */}
            {isEditing ? (
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            ) : (
              <p>
                <strong>Username:</strong> {formData.username}
              </p>
            )}


            {/* First Name */}
            {isEditing ? (
              <input
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            ) : (
              <p>
                <strong>First Name:</strong> {formData.first_name}
              </p>
            )}

            {/* Last Name */}
            {isEditing ? (
              <input
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            ) : (
              <p>
                <strong>Last Name:</strong> {formData.last_name}
              </p>
            )}

            {/* About */}
            {isEditing ? (
              <textarea
                name="about_me"
                value={formData.about_me}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            ) : (
              <p>
                <strong>About:</strong> {formData.about_me}
              </p>
            )}
          </div>

          <button
            onClick={async () => {
              if (isEditing) {
                handleSave();
              } else {
                setEditLoading(true);
                setTimeout(() => {
                  setIsEditing(true);
                  setEditLoading(false);
                }, 500);
              }
            }}
            disabled={isLoading || editLoading}
            className="bg-primary h-fit flex gap-2 items-center justify-center px-4 py-2 text-white rounded-md"
          >
            {isEditing ? <FaSave /> : <FaEdit />}

            {isEditing
              ? isLoading
                ? "Saving..."
                : "Save"
              : editLoading
                ? "Loading..."
                : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
}
