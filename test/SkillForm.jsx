import { useState, useRef, useCallback } from "react";
import { useCreateSkillMutation } from "../src/api/skillApi";
import { useUploadFileMutation } from "../src/api/authApi";
import { useNavigate } from "react-router";

export default function SkillForm() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    proficiency: 0,
    is_public: true,
    logo_url: "",
  });

  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

  const [uploadFile] = useUploadFileMutation();
  const [createSkill, { isLoading, isSuccess, isError, error }] =
    useCreateSkillMutation();

  /* ================= IMAGE HANDLING ================= */

  const processImage = useCallback((file) => {
    if (!file || !file.type.startsWith("image/")) return;

    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));
  }, []);

  const handleFileChange = (e) => {
    processImage(e.target.files[0]);
  };

  const removeLogo = () => {
    setLogoFile(null);
    setLogoPreview(null);
    setForm((prev) => ({ ...prev, logo_url: "" }));

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
      if (!form.name.trim()) {
        alert("Skill name is required");
        return;
      }

      let uploadedLogoUrl = "";

      if (logoFile) {
        const formData = new FormData();
        formData.append("file", logoFile);

        const uploadRes = await uploadFile(formData).unwrap();
        uploadedLogoUrl = uploadRes?.files?.[0]?.url || "";

        if (!uploadedLogoUrl) {
          alert("Image upload failed");
          return;
        }
      }

      const payload = {
        name: form.name.trim(),
        proficiency: Number(form.proficiency),
        is_public: form.is_public,
      };

      if (uploadedLogoUrl) {
        payload.logo_url = uploadedLogoUrl;
      }

      const res = await createSkill(payload).unwrap();

      /* redirect to skills section */
      navigate("/dashboard/portfolio/1#skills");

    } catch (err) {
      console.error("❌ Skill Error:", err);
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     if (!form.name.trim()) {
  //       alert("Skill name is required");
  //       return;
  //     }

  //     let uploadedLogoUrl = "";

  //     if (logoFile) {
  //       const formData = new FormData();
  //       formData.append("file", logoFile);

  //       const uploadRes = await uploadFile(formData).unwrap();
  //       uploadedLogoUrl = uploadRes?.files?.[0]?.url || "";

  //       if (!uploadedLogoUrl) {
  //         alert("Image upload failed");
  //         return;
  //       }
  //     }

  //     const payload = {
  //       name: form.name.trim(),
  //       proficiency: Number(form.proficiency),
  //       is_public: form.is_public,
  //     };

  //     if (uploadedLogoUrl) {
  //       payload.logo_url = uploadedLogoUrl;
  //     }

  //     console.log("🚀 Skill Payload:", payload);

  //     await createSkill(payload).unwrap();
  //     navigate("/dashboard/portfolio/1#skills");
  //     // Reset Form
  //     setForm({
  //       name: "",
  //       proficiency: 0,
  //       is_public: true,
  //       logo_url: "",
  //     });

  //     setLogoFile(null);
  //     setLogoPreview(null);
  //   } catch (err) {
  //     console.error("❌ Skill Error:", err);
  //   }
  // };

  /* ================= UI ================= */

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm " +
    "focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e] " +
    "transition-all duration-200";

  const labelClass = "block text-sm font-medium mb-2 text-gray-600";

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-[#1e2e3e]">Create Skill</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Skill Name */}
        <div>
          <label className={labelClass}>
            Skill Name <span className="text-red-500">*</span>
          </label>

          <input
            name="name"
            placeholder="Skill Name"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* Proficiency */}
        <div>
          <label className={labelClass}>Proficiency (0 - 100)</label>

          <input
            type="number"
            name="proficiency"
            value={form.proficiency}
            onChange={handleChange}
            min="0"
            max="100"
            className={inputClass}
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className={labelClass}>Skill Logo</label>

          <div
            className="border border-dashed rounded-xl p-6 text-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
            onClick={() => fileInputRef.current?.click()}
          >
            {logoPreview ? (
              <img
                src={logoPreview}
                className="w-24 h-24 mx-auto object-contain"
              />
            ) : (
              <p className="text-gray-500 text-sm">Click to upload logo</p>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />

          {logoPreview && (
            <button
              type="button"
              onClick={removeLogo}
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
            Skill created successfully!
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
          {isLoading ? "Creating..." : "Create Skill"}
        </button>
      </form>
    </div>
  );
}
