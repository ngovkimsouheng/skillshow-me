import { useState, useRef, useCallback } from "react";
import { useCreateSocialAccountMutation } from "../src/api/socialAccountApi";
import { useUploadFileMutation } from "../src/api/authApi";
import { useNavigate } from "react-router";

const SocialAccountForm = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    url: "",
    image_url: "",
    is_public: true,
  });

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [uploadFile] = useUploadFileMutation();
  const [createSocialAccount, { isLoading, isSuccess, isError, error }] =
    useCreateSocialAccountMutation();

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

    setForm((prev) => ({
      ...prev,
      image_url: "",
    }));

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

    try {
      let uploadedUrl = "";

      /* ✅ Upload Image First */
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

      console.log("🚀 Social Payload:", finalPayload);
      navigate("/dashboard/portfolio/1#socail-account");
      await createSocialAccount(finalPayload).unwrap();

      /* Reset */
      setForm({
        name: "",
        url: "",
        image_url: "",
        is_public: true,
      });

      setImageFile(null);
      setPreview(null);
    } catch (err) {
      console.error("❌ Error:", err);
    }
  };

  /* ================= UI STYLE ================= */

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm " +
    "focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e] " +
    "transition-all duration-200";

  const labelClass = "blockZ text-sm font-medium mb-2 text-gray-600";

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-[#1e2e3e]">Add Social Account</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className={labelClass}>
            Name <span className="text-red-500">*</span>
          </label>

          <input
            name="name"
            placeholder="Social Platform Name"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* URL */}
        <div>
          <label className={labelClass}>
            URL <span className="text-red-500">*</span>
          </label>

          <input
            name="url"
            placeholder="https://example.com"
            value={form.url}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className={labelClass}>Upload Image</label>

          <div
            className="border border-dashed rounded-xl p-6 text-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
            onClick={() => fileInputRef.current?.click()}
          >
            {preview ? (
              <img
                src={preview}
                className="w-28 h-28 object-contain mx-auto rounded-lg"
              />
            ) : (
              <p className="text-gray-400 text-sm">Click to upload image</p>
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
              className="text-red-500 text-sm mt-3 hover:underline"
            >
              Remove Image
            </button>
          )}
        </div>

        {/* Public Toggle */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="is_public"
            checked={form.is_public}
            onChange={handleChange}
            className="w-5 h-5 accent-[#1e2e3e] cursor-pointer"
          />
          <label className="text-sm text-gray-700">Public</label>
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
            Social Account Created Successfully!
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 rounded-xl font-semibold text-white
            bg-[#1e2e3e] hover:bg-[#16222f]
            active:scale-95 transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Submitting..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default SocialAccountForm;
