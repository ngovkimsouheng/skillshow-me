import { useState, useEffect } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { useUpdateUserMutation, useUploadFileMutation } from "../src/api/authApi";
import { useNavigate } from "react-router-dom";

export default function AboutMe({ user, onClose }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [editLoading, setEditLoading] = useState(false);

  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const [uploadFile] = useUploadFileMutation();
  const navigate = useNavigate();

  /* ================= FILL DATA ================= */

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

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= SAVE ================= */

  const handleSave = async () => {
    try {
      let profileUrl = formData.profile;

      /* Upload new image if selected */
      if (formData.profile instanceof File) {
        const formDataFile = new FormData();
        formDataFile.append("file", formData.profile);

        const uploadRes = await uploadFile(formDataFile).unwrap();

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

      onClose();
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Update failed ❌");
    }
  };

  /* ================= STYLE SYSTEM ================= */

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm " +
    "focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e] " +
    "transition-all duration-200";

  const labelClass =
    "block text-sm font-medium mb-2 text-gray-600";

  /* ================= UI ================= */

  return (
    <div className="space-y-8">

      <h2 className="text-2xl font-bold text-[#1e2e3e]">
        About Me
      </h2>

      {/* ================= PROFILE IMAGE ================= */}

      <div className="flex flex-col items-center">

        <input
          type="file"
          accept="image/*"
          id="profileUpload"
          className="hidden"
          disabled={!isEditing}
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setFormData({ ...formData, profile: file });
            }
          }}
        />

        <label
          htmlFor={isEditing ? "profileUpload" : undefined}
          className={`relative ${
            isEditing ? "cursor-pointer group" : "cursor-default"
          }`}
        >
          <img
            src={
              formData.profile instanceof File
                ? URL.createObjectURL(formData.profile)
                : formData.profile ||
                  "https://via.placeholder.com/100"
            }
            alt="profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-[#1e2e3e]"
          />

          {isEditing && (
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 text-white text-sm opacity-0 group-hover:opacity-100 transition">
              Edit
            </div>
          )}
        </label>
      </div>

      {/* ================= FORM INFO ================= */}

      <div className="space-y-6">

        {/* Username */}
        <div>
          <label className={labelClass}>Username</label>

          {isEditing ? (
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={inputClass}
            />
          ) : (
            <p className="text-gray-700">
              {formData.username}
            </p>
          )}
        </div>

        {/* First Name */}
        <div>
          <label className={labelClass}>First Name</label>

          {isEditing ? (
            <input
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className={inputClass}
            />
          ) : (
            <p className="text-gray-700">
              {formData.first_name}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className={labelClass}>Last Name</label>

          {isEditing ? (
            <input
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className={inputClass}
            />
          ) : (
            <p className="text-gray-700">
              {formData.last_name}
            </p>
          )}
        </div>

        {/* About Me */}
        <div>
          <label className={labelClass}>About</label>

          {isEditing ? (
            <textarea
              name="about_me"
              value={formData.about_me}
              onChange={handleChange}
              rows="4"
              className={`${inputClass} resize-none`}
            />
          ) : (
            <p className="text-gray-700">
              {formData.about_me}
            </p>
          )}
        </div>
      </div>

      {/* ================= BUTTON ================= */}

      <button
        onClick={() => {
          if (isEditing) {
            handleSave();
          } else {
            setEditLoading(true);
            setTimeout(() => {
              setIsEditing(true);
              setEditLoading(false);
            }, 400);
          }
        }}
        disabled={isLoading || editLoading}
        className="w-full py-3 rounded-xl font-semibold text-white
          bg-[#1e2e3e] hover:bg-[#16222f]
          active:scale-95 transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
  );
}