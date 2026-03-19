import { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetSocialAccountByIdQuery,
  useUpdateSocialAccountMutation,
} from "../api/socialAccountApi";
import { useUploadFileMutation } from "../api/authApi";

export default function EditSocialAccount() {
  const { id } = useParams(); // ✅ GET ID FROM URL
  const navigate = useNavigate();

  /* ================= FETCH ================= */

  const { data, isLoading: isFetching } =
    useGetSocialAccountByIdQuery(id, {
      skip: !id,
    });

  const [updateSocialAccount, { isLoading, isSuccess, isError, error }] =
    useUpdateSocialAccountMutation();

  const [uploadFile] = useUploadFileMutation();

  const fileInputRef = useRef(null);

  /* ================= STATE ================= */

  const [form, setForm] = useState({
    name: "",
    url: "",
    image_url: "",
    is_public: true,
  });

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  /* ================= AUTO FILL ================= */

  useEffect(() => {
    if (data?.data) {
      const social = data.data;

      setForm({
        name: social.name || "",
        url: social.url || "",
        image_url: social.image_url || "",
        is_public: social.is_public ?? true,
      });

      setPreview(social.image_url || null);
    }
  }, [data]);

  /* ================= IMAGE ================= */

  const processImage = useCallback((file) => {
    if (!file || !file.type.startsWith("image/")) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  }, []);

  const handleFileChange = (e) => {
    processImage(e.target.files[0]);
  };

  const removeImage = () => {
    setImageFile(null);
    setPreview(null);
    setForm((prev) => ({ ...prev, image_url: "" }));

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  /* ================= FORM CHANGE ================= */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) return;

    try {
      let uploadedUrl = form.image_url;

      /* Upload Image First */
      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);

        const uploadRes = await uploadFile(formData).unwrap();
        uploadedUrl = uploadRes?.files?.[0]?.url || "";
      }

      const finalPayload = {
        ...form,
        image_url: uploadedUrl,
      };

      await updateSocialAccount({
        id,
        body: finalPayload,
      }).unwrap();

      alert("✅ Updated Successfully");

      navigate(-1);
    } catch (err) {
      console.error("❌ Update Failed:", err);
    }
  };

  /* ================= UI ================= */

  if (isFetching)
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-gray-500 animate-pulse">Loading...</p>
      </div>
    );

  if (!id)
    return (
      <div className="text-red-500 font-semibold">
        Invalid Social ID
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto p-10  rounded-3xl  space-y-8">

      {/* Title */}
      <h2 className="text-3xl font-bold text-[#1e2e3e]">
        Edit Social Account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* ================= NAME ================= */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-600">
            Name *
          </label>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300
                       bg-gray-50 focus:ring-2 focus:ring-[#1e2e3e]
                       focus:border-[#1e2e3e] outline-none transition"
          />
        </div>

        {/* ================= URL ================= */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-600">
            URL *
          </label>

          <input
            name="url"
            value={form.url}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300
                       bg-gray-50 focus:ring-2 focus:ring-[#1e2e3e]
                       focus:border-[#1e2e3e] outline-none transition"
          />
        </div>

        {/* ================= IMAGE ================= */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-600">
            Image
          </label>

          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed rounded-xl p-6 text-center
                       cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
          >
            {preview ? (
              <img
                src={preview}
                className="w-28 h-28 object-contain mx-auto rounded-lg"
              />
            ) : (
              <p className="text-gray-400 text-sm">
                Click to upload image
              </p>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />

          {preview && (
            <button
              type="button"
              onClick={removeImage}
              className="mt-3 text-red-500 text-sm hover:underline"
            >
              Remove Image
            </button>
          )}
        </div>

        {/* ================= PUBLIC ================= */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="is_public"
            checked={form.is_public}
            onChange={handleChange}
            className="w-5 h-5 accent-[#1e2e3e] cursor-pointer"
          />
          <label className="text-sm text-gray-700">
            Public
          </label>
        </div>

        {/* ================= ERROR ================= */}
        {isError && (
          <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm">
            {error?.data?.message || "Update failed"}
          </div>
        )}

        {/* ================= SUCCESS ================= */}
        {isSuccess && (
          <div className="bg-green-50 text-green-600 p-3 rounded-xl text-sm">
            Updated Successfully!
          </div>
        )}

        {/* ================= BUTTONS ================= */}
        <div className="flex gap-4">

          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 py-3 rounded-xl font-semibold text-white
                       bg-[#1e2e3e] hover:bg-[#16222f]
                       disabled:opacity-50 transition"
          >
            {isLoading ? "Saving..." : "Update"}
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex-1 py-3 rounded-xl font-semibold
                       bg-gray-200 hover:bg-gray-300 transition"
          >
            Cancel
          </button>

        </div>

      </form>
    </div>
  );
}