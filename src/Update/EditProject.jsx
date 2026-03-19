import React, { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetProjectByIdQuery,
  useCreateProjectMutation,
  useDeleteProjectMutation,
} from "../api/projectApi";
import { useUploadFileMutation } from "../api/authApi";

/* =====================================================
   PROFESSIONAL EDIT PROJECT WITH MOCKUP UX
===================================================== */

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  /* ================= API ================= */

  const {
    data,
    isLoading: isFetching,
  } = useGetProjectByIdQuery(id, {
    skip: !id,
  });

  const [createProject, { isLoading: isCreating, isSuccess: isCreateSuccess, isError: isCreateError, error: createError }] =
    useCreateProjectMutation();

  const [deleteProject, { isLoading: isDeleting, isSuccess: isDeleteSuccess, isError: isDeleteError, error: deleteError }] =
    useDeleteProjectMutation();

  const [uploadFile] = useUploadFileMutation();

  /* ================= FORM ================= */

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

  /* ================= MOCKUP LOADING UX ================= */

  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    if (data?.data) {
      const project = data.data;

      setForm({
        name: project.name || "",
        description: project.description || "",
        github_url: project.github_url || "",
        project_url: project.project_url || "",
        is_opensource: project.is_opensource || false,
        is_published: project.is_published ?? true,
        technologies: project.technologies
          ? Array.isArray(project.technologies)
            ? project.technologies.join(", ")
            : Object.keys(project.technologies).join(", ")
          : "",
      });

      setPreview(project.project_url || null);

      setShowSkeleton(false);
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
    setForm((prev) => ({ ...prev, project_url: "" }));
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
      let uploadedUrl = form.project_url;

      /* Upload Image First */
      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);

        const uploadRes = await uploadFile(formData).unwrap();

        uploadedUrl =
          uploadRes?.files?.[0]?.url ||
          uploadRes?.data?.files?.[0]?.url ||
          "";
      }

      /* Convert technologies to array */
      const technologiesArray = form.technologies
        ? form.technologies.split(",").map(tech => tech.trim()).filter(tech => tech)
        : [];

      const payload = {
        name: form.name,
        description: form.description,
        is_opensource: form.is_opensource,
        is_published: form.is_published,
      };

      // Only add github_url if provided
      if (form.github_url.trim()) {
        payload.github_url = form.github_url.trim();
      }

      // Only add project_url if we have an uploaded image
      if (uploadedUrl) {
        payload.project_url = uploadedUrl;
      }

      // Only add technologies if we have any
      if (technologiesArray.length > 0) {
        payload.technologies = technologiesArray;
      }

      console.log("🔄 Updating project - Creating new version");
      console.log("📤 Create Payload:", payload);

      // Create new project with updated data
      await createProject(payload).unwrap();

      console.log("✅ New project created, now deleting old one");

      // Delete the old project
      await deleteProject(id).unwrap();

      console.log("✅ Old project deleted - Update complete");

      alert("✅ Project Updated Successfully!");

      navigate(-1);
    } catch (err) {
      console.error("Update Error:", err);
      alert("❌ Update failed. Please try again.");
    }
  };

  /* ================= UI STYLES ================= */

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm " +
    "focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e]";

  const labelClass = "block text-sm font-medium mb-2 text-gray-600";

  /* ================= SKELETON (MOCKUP LOADING) ================= */

  if (isFetching || showSkeleton) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-8 w-1/3 bg-gray-300 rounded-xl" />

        <div className="h-14 bg-gray-200 rounded-xl" />
        <div className="h-14 bg-gray-200 rounded-xl" />
        <div className="h-32 bg-gray-200 rounded-xl" />

        <div className="h-12 bg-gray-300 rounded-xl w-1/2" />
      </div>
    );
  }

  /* ================= MAIN UI ================= */

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-[#1e2e3e]">
        Edit Project
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className={labelClass}>Project Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* Description */}
        <div>
          <label className={labelClass}>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* GitHub */}
        <div>
          <label className={labelClass}>GitHub</label>
          <input
            name="github_url"
            value={form.github_url}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Image */}
        <div>
          <label className={labelClass}>Project Image</label>

          <div
            className="border border-dashed rounded-xl p-6 text-center cursor-pointer bg-gray-50 hover:bg-gray-100"
            onClick={() => fileInputRef.current?.click()}
          >
            {preview ? (
              <img
                src={preview}
                className="w-24 h-24 object-contain mx-auto"
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
            hidden
            accept="image/*"
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
          <label className={labelClass}>
            Technologies (comma separated)
          </label>
          <input
            name="technologies"
            value={form.technologies}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Checkboxes */}
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="is_opensource"
              checked={form.is_opensource}
              onChange={handleChange}
            />
            Open Source
          </label>

          <label className="flex items-center gap-2">
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
        {(isCreateError || isDeleteError) && (
          <div className="text-red-600 bg-red-50 p-3 rounded-xl">
            {createError?.data?.message || deleteError?.data?.message || "Update Failed"}
          </div>
        )}

        {/* Success */}
        {isCreateSuccess && (
          <div className="text-green-600 bg-green-50 p-3 rounded-xl">
            Updated Successfully!
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isCreating || isDeleting}
          className="w-full py-3 rounded-xl text-white bg-[#1e2e3e] disabled:opacity-50"
        >
          {(isCreating || isDeleting) ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditProject;