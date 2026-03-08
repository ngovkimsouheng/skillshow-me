import { useState, useRef, useCallback } from "react";
import { useCreateProjectMutation } from "../src/api/projectApi";
import { useUploadFileMutation } from "../src/api/authApi";
import { useNavigate } from "react-router";

const ProjectForm = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    name: "",
    description: "",
    github_url: "",
    project_url: "",
    is_opensource: false,
    is_published: true,
    technologies: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [uploadFile, { isLoading: uploading }] = useUploadFileMutation();
  const [createProject, { isLoading, isSuccess, isError, error }] =
    useCreateProjectMutation();

  /* ================= VALIDATION ================= */

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Project name is required";
    }

    if (!form.description.trim()) {
      newErrors.description = "Description is required";
    }

    return newErrors;
  };

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* ================= IMAGE HANDLING ================= */

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
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      let uploadedUrl = "";

      /* ✅ 1. Upload Image First */
      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);

        const uploadRes = await uploadFile(formData).unwrap();

        console.log("🔥 Upload Response:", uploadRes);

        uploadedUrl =
          uploadRes?.files?.[0]?.url || uploadRes?.data?.files?.[0]?.url || "";

        console.log("✅ Image URL:", uploadedUrl);
      }

      /* ✅ 2. Convert technologies to object */
      const technologiesObject = form.technologies
        ? form.technologies.split(",").reduce((acc, tech) => {
          const key = tech.trim();
          if (key) acc[key] = true;
          return acc;
        }, {})
        : {};

      /* ✅ 3. Prepare Final Payload */
      const payload = {
        name: form.name,
        description: form.description,
        github_url: form.github_url,
        project_url: uploadedUrl, // ✅ IMAGE URL SENT HERE
        is_opensource: form.is_opensource,
        is_published: form.is_published,
        technologies: technologiesObject,
      };

      console.log("Project response:", payload);
      navigate("/dashboard/portfolio/1#project");
      await createProject(payload).unwrap();

      /* ================= RESET ================= */

      setForm({
        name: "",
        description: "",
        github_url: "",
        project_url: "",
        is_opensource: false,
        is_published: true,
        technologies: "",
      });

      setImageFile(null);
      setPreview(null);
      setErrors({});

      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error("❌ Failed:", err);
    }
  };

  /* ================= UI ================= */

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2e3e]";

  const labelClass = "block text-sm font-medium mb-2 text-gray-600";

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-[#1e2e3e]">Create Project</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Project Name */}
        <div>
          <label className={labelClass}>Project Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Description */}
        <div>
          <label className={labelClass}>Description *</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>

        {/* GitHub */}
        <div>
          <label className={labelClass}>GitHub URL</label>
          <input
            type="url"
            name="github_url"
            value={form.github_url}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className={labelClass}>Project Image</label>

          <div
            className="border border-dashed rounded-xl p-6 text-center cursor-pointer bg-gray-50"
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
              className="text-red-500 text-sm mt-2"
            >
              Remove Image
            </button>
          )}
        </div>

        {/* Technologies */}
        <div>
          <label className={labelClass}>Technologies (comma separated)</label>
          <input
            type="text"
            name="technologies"
            value={form.technologies}
            onChange={handleChange}
            placeholder="React, Node, Tailwind"
            className={inputClass}
          />
        </div>

        {/* Checkboxes */}
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="is_opensource"
              checked={form.is_opensource}
              onChange={handleChange}
            />
            Open Source
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="is_published"
              checked={form.is_published}
              onChange={handleChange}
            />
            Published
          </label>
        </div>

        {/* Error */}
        {isError && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
            {error?.data?.message || "Something went wrong"}
          </div>
        )}

        {/* Success */}
        {isSuccess && (
          <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm">
            Project created successfully!
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading || uploading}
          className="w-full py-3 rounded-xl font-semibold text-white bg-[#1e2e3e] disabled:opacity-50"
        >
          {isLoading || uploading ? "Submitting..." : "Create Project"}
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
