// // import { useEffect, useState, useRef, useCallback } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { useUpdateSkillMutation, useGetSkillByIdQuery } from "../api/skillApi";
// // import { useUploadFileMutation } from "../api/authApi";

// // export default function EditSkill() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const fileInputRef = useRef(null);

// //   /* ================= FETCH SINGLE SKILL ================= */

// //   const { data, isLoading: isFetching } = useGetSkillByIdQuery(id);

// //   const [updateSkill, { isLoading, isSuccess, isError, error }] =
// //     useUpdateSkillMutation();

// //   const [uploadFile] = useUploadFileMutation();

// //   /* ================= FORM STATE ================= */

// //   const [form, setForm] = useState({
// //     name: "",
// //     proficiency: 0,
// //     is_public: true,
// //     logo_url: "",
// //   });

// //   const [logoFile, setLogoFile] = useState(null);
// //   const [logoPreview, setLogoPreview] = useState(null);

// //   /* ================= LOAD DATA ================= */

// //   useEffect(() => {
// //     if (data?.data) {
// //       setForm({
// //         name: data.data.name || "",
// //         proficiency: data.data.proficiency || 0,
// //         is_public: data.data.is_public ?? true,
// //         logo_url: data.data.logo_url || "",
// //       });

// //       setLogoPreview(data.data.logo_url || null);
// //     }
// //   }, [data]);

// //   /* ================= IMAGE HANDLING ================= */

// //   const processImage = useCallback((file) => {
// //     if (!file || !file.type.startsWith("image/")) return;

// //     setLogoFile(file);
// //     setLogoPreview(URL.createObjectURL(file));
// //   }, []);

// //   const handleFileChange = (e) => {
// //     processImage(e.target.files[0]);
// //   };

// //   const removeLogo = () => {
// //     setLogoFile(null);
// //     setLogoPreview(null);
// //     setForm((prev) => ({ ...prev, logo_url: "" }));

// //     if (fileInputRef.current) fileInputRef.current.value = "";
// //   };

// //   /* ================= FORM CHANGE ================= */

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;

// //     setForm((prev) => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? checked : value,
// //     }));
// //   };

// //   /* ================= SUBMIT ================= */

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       let uploadedLogoUrl = form.logo_url;

// //       /* 🔥 Upload new image if selected */
// //       if (logoFile) {
// //         const formData = new FormData();
// //         formData.append("file", logoFile);

// //         const uploadRes = await uploadFile(formData).unwrap();
// //         uploadedLogoUrl = uploadRes?.files?.[0]?.url || "";

// //         if (!uploadedLogoUrl) {
// //           alert("Image upload failed");
// //           return;
// //         }
// //       }

// //       const payload = {
// //         name: form.name.trim(),
// //         proficiency: Number(form.proficiency),
// //         is_public: form.is_public,
// //         logo_url: uploadedLogoUrl,
// //       };

// //       await updateSkill({
// //         id,
// //         body: payload,
// //       }).unwrap();

// //       alert("Skill Updated Successfully");
// //       navigate(-1);
// //     } catch (err) {
// //       console.error("❌ Update Error:", err);
// //     }
// //   };

// //   /* ================= STYLE ================= */

// //   const inputClass =
// //     "w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm " +
// //     "focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e] " +
// //     "transition-all duration-200";

// //   const labelClass = "block text-sm font-medium mb-2 text-gray-600";

// //   /* ================= LOADING ================= */

// //   if (isFetching) {
// //     return <p className="p-6">Loading skill...</p>;
// //   }

// //   return (
// //     <div className="space-y-8">
// //       {/* Title */}
// //       <h2 className="text-2xl font-bold text-[#1e2e3e]">Edit Skill</h2>

// //       {/* Form */}
// //       <form onSubmit={handleSubmit} className="space-y-6">
// //         {/* Skill Name */}
// //         <div>
// //           <label className={labelClass}>
// //             Skill Name <span className="text-red-500">*</span>
// //           </label>
// //           <input
// //             name="name"
// //             value={form.name}
// //             onChange={handleChange}
// //             required
// //             placeholder="e.g. React.js"
// //             className={inputClass}
// //           />
// //         </div>

// //         {/* Proficiency */}
// //         <div>
// //           <label className={labelClass}>
// //             Proficiency (0 - 100) <span className="text-red-500">*</span>
// //           </label>
// //           <input
// //             type="number"
// //             name="proficiency"
// //             value={form.proficiency}
// //             onChange={handleChange}
// //             min="0"
// //             max="100"
// //             placeholder="e.g. 80"
// //             className={inputClass}
// //             required
// //           />
// //         </div>

// //         {/* Image Upload */}
// //         <div>
// //           <label className={labelClass}>Skill Logo</label>
// //           <div
// //             className="border border-dashed rounded-xl p-6 text-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
// //             onClick={() => fileInputRef.current?.click()}
// //           >
// //             {logoPreview ? (
// //               <img
// //                 src={logoPreview}
// //                 className="w-24 h-24 mx-auto object-contain"
// //               />
// //             ) : (
// //               <p className="text-gray-500 text-sm">Click to upload logo</p>
// //             )}
// //           </div>

// //           <input
// //             ref={fileInputRef}
// //             type="file"
// //             accept="image/*"
// //             hidden
// //             onChange={handleFileChange}
// //           />

// //           {logoPreview && (
// //             <button
// //               type="button"
// //               onClick={removeLogo}
// //               className="text-red-500 text-sm mt-3 hover:underline"
// //             >
// //               Remove Image
// //             </button>
// //           )}
// //         </div>

// //         {/* Public Toggle */}
// //         <div className="flex items-center gap-3 pt-2">
// //           <input
// //             type="checkbox"
// //             name="is_public"
// //             checked={form.is_public}
// //             onChange={handleChange}
// //             className="w-5 h-5 rounded border-gray-300 text-[#1e2e3e] focus:ring-[#1e2e3e] cursor-pointer"
// //           />
// //           <label className="text-sm font-medium text-gray-700 cursor-pointer">
// //             Public
// //           </label>
// //         </div>

// //         {/* Error */}
// //         {isError && (
// //           <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
// //             {error?.data?.message || "Update failed"}
// //           </div>
// //         )}

// //         {/* Success */}
// //         {isSuccess && (
// //           <div className="bg-green-50 border border-green-200 text-green-600 text-sm p-3 rounded-lg">
// //             Updated successfully!
// //           </div>
// //         )}

// //         {/* Submit */}
// //         <button
// //           type="submit"
// //           disabled={isLoading}
// //           className="w-full py-3 rounded-xl font-semibold text-white
// //         bg-[#1e2e3e] hover:bg-[#16222f]
// //         active:scale-95 transition-all duration-200
// //         disabled:opacity-50 disabled:cursor-not-allowed"
// //         >
// //           {isLoading ? "Updating..." : "Update Skill"}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }
// import { useEffect, useState, useRef, useCallback } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useUpdateSkillMutation, useGetSkillByIdQuery } from "../api/skillApi";
// import { useUploadFileMutation } from "../api/authApi";

// export default function EditSkill() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const fileInputRef = useRef(null);

//   /* ================= FETCH SKILL ================= */

//   const { data, isLoading: isFetching } = useGetSkillByIdQuery(id);

//   const [updateSkill, { isLoading, isSuccess, isError, error }] =
//     useUpdateSkillMutation();

//   const [uploadFile] = useUploadFileMutation();

//   /* ================= FORM STATE ================= */

//   const [form, setForm] = useState({
//     name: "",
//     proficiency: 0,
//     is_public: true,
//     logo_url: "",
//   });

//   const [originalData, setOriginalData] = useState(null);

//   const [logoFile, setLogoFile] = useState(null);
//   const [logoPreview, setLogoPreview] = useState(null);

//   /* ================= LOAD DATA ================= */

//   useEffect(() => {
//     if (data?.data) {
//       const skill = data.data;

//       const initialForm = {
//         name: skill.name || "",
//         proficiency: skill.proficiency || 0,
//         is_public: skill.is_public ?? true,
//         logo_url: skill.logo_url || "",
//       };

//       setForm(initialForm);
//       setOriginalData(initialForm); // 🔥 store original for comparison
//       setLogoPreview(skill.logo_url || null);
//     }
//   }, [data]);

//   /* ================= IMAGE HANDLING ================= */

//   const processImage = useCallback((file) => {
//     if (!file || !file.type.startsWith("image/")) return;

//     setLogoFile(file);
//     setLogoPreview(URL.createObjectURL(file));
//   }, []);

//   const handleFileChange = (e) => {
//     processImage(e.target.files[0]);
//   };

//   const removeLogo = () => {
//     setLogoFile(null);
//     setLogoPreview(null);

//     setForm((prev) => ({
//       ...prev,
//       logo_url: "",
//     }));

//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   /* ================= FORM CHANGE ================= */

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   /* ================= DETECT CHANGES ================= */

//   const isChanged =
//     originalData &&
//     JSON.stringify(form) !== JSON.stringify(originalData);

//   /* ================= SUBMIT ================= */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       let uploadedLogoUrl = form.logo_url;

//       /* 🔥 Upload new image if selected */
//       if (logoFile) {
//         const formData = new FormData();
//         formData.append("file", logoFile);

//         const uploadRes = await uploadFile(formData).unwrap();

//         uploadedLogoUrl =
//           uploadRes?.files?.[0]?.url ||
//           uploadRes?.data?.files?.[0]?.url ||
//           "";

//         if (!uploadedLogoUrl) {
//           alert("Image upload failed");
//           return;
//         }
//       }

//       const payload = {
//         name: form.name.trim(),
//         proficiency: Number(form.proficiency),
//         is_public: form.is_public,
//         logo_url: uploadedLogoUrl,
//       };

//       await updateSkill({
//         id,
//         body: payload,
//       }).unwrap();

//       alert("Skill Updated Successfully ✅");
//       navigate(-1);
//     } catch (err) {
//       console.error("❌ Update Error:", err);
//     }
//   };

//   /* ================= LOADING ================= */

//   if (isFetching) {
//     return <p className="p-6">Loading skill...</p>;
//   }

//   /* ================= STYLES ================= */

//   const inputClass =
//     "w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm " +
//     "focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e] " +
//     "transition-all duration-200";

//   const labelClass = "block text-sm font-medium mb-2 text-gray-600";

//   /* ================= RENDER ================= */

//   return (
//     <div className="space-y-8">
//       <h2 className="text-2xl font-bold text-[#1e2e3e]">Edit Skill</h2>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Skill Name */}
//         <div>
//           <label className={labelClass}>
//             Skill Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             required
//             placeholder="e.g. React.js"
//             className={inputClass}
//           />
//         </div>

//         {/* Proficiency */}
//         <div>
//           <label className={labelClass}>
//             Proficiency (0 - 100) <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="number"
//             name="proficiency"
//             value={form.proficiency}
//             onChange={handleChange}
//             min="0"
//             max="100"
//             className={inputClass}
//             required
//           />
//         </div>

//         {/* Image Upload */}
//         <div>
//           <label className={labelClass}>Skill Logo</label>

//           <div
//             className="border border-dashed rounded-xl p-6 text-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
//             onClick={() => fileInputRef.current?.click()}
//           >
//             {logoPreview ? (
//               <img
//                 src={logoPreview}
//                 className="w-24 h-24 mx-auto object-contain"
//               />
//             ) : (
//               <p className="text-gray-500 text-sm">
//                 Click to upload logo
//               </p>
//             )}
//           </div>

//           <input
//             ref={fileInputRef}
//             type="file"
//             accept="image/*"
//             hidden
//             onChange={handleFileChange}
//           />

//           {logoPreview && (
//             <button
//               type="button"
//               onClick={removeLogo}
//               className="text-red-500 text-sm mt-3 hover:underline"
//             >
//               Remove Image
//             </button>
//           )}
//         </div>

//         {/* Public Toggle */}
//         <div className="flex items-center gap-3 pt-2">
//           <input
//             type="checkbox"
//             name="is_public"
//             checked={form.is_public}
//             onChange={handleChange}
//             className="w-5 h-5 cursor-pointer"
//           />
//           <label className="text-sm font-medium text-gray-700">
//             Public
//           </label>
//         </div>

//         {/* 🔥 Unsaved Changes Indicator */}
//         {isChanged && (
//           <div className="text-sm text-yellow-600 font-medium">
//             ⚡ You have unsaved changes
//           </div>
//         )}

//         {/* Error */}
//         {isError && (
//           <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
//             {error?.data?.message || "Update failed"}
//           </div>
//         )}

//         {/* Success */}
//         {isSuccess && (
//           <div className="bg-green-50 border border-green-200 text-green-600 text-sm p-3 rounded-lg">
//             Updated successfully!
//           </div>
//         )}

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={isLoading || !isChanged}
//           className="w-full py-3 rounded-xl font-semibold text-white
//           bg-[#1e2e3e] hover:bg-[#16222f]
//           active:scale-95 transition-all duration-200
//           disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {isLoading ? "Updating..." : "Update Skill"}
//         </button>
//       </form>
//     </div>
//   );
// }
import { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUpdateSkillMutation, useGetSkillByIdQuery } from "../api/skillApi";
import { useUploadFileMutation } from "../api/authApi";

export default function EditSkill() {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  /* ================= FETCH DATA ================= */

  const { data, isLoading: isFetching } = useGetSkillByIdQuery(id);

  const [updateSkill, { isLoading, isSuccess, isError, error }] =
    useUpdateSkillMutation();

  const [uploadFile] = useUploadFileMutation();

  /* ================= FORM STATE ================= */

  const [form, setForm] = useState({
    name: "",
    proficiency: 0,
    is_public: true,
    logo_url: "",
  });

  const [originalData, setOriginalData] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

  /* ================= LOAD DATA ================= */

  useEffect(() => {
    if (data?.data) {
      const skill = data.data;

      const initialForm = {
        name: skill.name || "",
        proficiency: skill.proficiency || 0,
        is_public: skill.is_public ?? true,
        logo_url: skill.logo_url || "",
      };

      setForm(initialForm);
      setOriginalData(initialForm);
      setLogoPreview(skill.logo_url || null);
    }
  }, [data]);

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

    setForm((prev) => ({
      ...prev,
      logo_url: "",
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

  /* ================= CHANGE DETECTION ================= */

  const isChanged =
    originalData &&
    JSON.stringify(form) !== JSON.stringify(originalData);

  const handleReset = () => {
    setForm(originalData);
    setLogoPreview(originalData.logo_url);
    setLogoFile(null);
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let uploadedLogoUrl = form.logo_url;

      /* Upload image if user selected new one */
      if (logoFile) {
        const formData = new FormData();
        formData.append("file", logoFile);

        const uploadRes = await uploadFile(formData).unwrap();

        uploadedLogoUrl =
          uploadRes?.files?.[0]?.url ||
          uploadRes?.data?.files?.[0]?.url ||
          "";

        if (!uploadedLogoUrl) {
          alert("Image upload failed");
          return;
        }
      }

      const payload = {
        name: form.name.trim(),
        proficiency: Number(form.proficiency),
        is_public: form.is_public,
        logo_url: uploadedLogoUrl,
      };

      await updateSkill({
        id,
        body: payload,
      }).unwrap();

      alert("Skill Updated Successfully ✅");

      navigate(-1);
    } catch (err) {
      console.error("Update Error:", err);
    }
  };

  /* ================= LOADING STATE ================= */

  if (isFetching) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="h-10 bg-gray-200 rounded-xl" />
        <div className="h-10 bg-gray-200 rounded-xl" />
        <div className="h-40 bg-gray-200 rounded-xl" />
      </div>
    );
  }

  /* ================= STYLES ================= */

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm " +
    "focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e] " +
    "transition-all duration-200";

  const labelClass = "block text-sm font-medium mb-2 text-gray-600";

  /* ================= UI ================= */

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-[#1e2e3e]">
        Edit Skill
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Skill Name */}
        <div>
          <label className={labelClass}>Skill Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* Proficiency */}
        <div>
          <label className={labelClass}>
            Proficiency (0 - 100)
          </label>

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
              <p className="text-gray-500 text-sm">
                Click to upload logo
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
        <div className="flex items-center gap-3 pt-2">
          <input
            type="checkbox"
            name="is_public"
            checked={form.is_public}
            onChange={handleChange}
            className="w-5 h-5 cursor-pointer"
          />
          <label className="text-sm font-medium">
            Public
          </label>
        </div>

        {/* Unsaved Changes */}
        {isChanged && (
          <div className="text-sm text-yellow-600 font-medium">
            ⚡ You have unsaved changes
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
            {error?.data?.message || "Update failed"}
          </div>
        )}

        {/* Success */}
        {isSuccess && (
          <div className="bg-green-50 border border-green-200 text-green-600 text-sm p-3 rounded-lg">
            Updated successfully!
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleReset}
            disabled={!isChanged}
            className="flex-1 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            Reset
          </button>

          <button
            type="submit"
            disabled={isLoading || !isChanged}
            className="flex-1 py-3 rounded-xl font-semibold text-white
              bg-[#1e2e3e] hover:bg-[#16222f]
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Updating..." : "Update Skill"}
          </button>
        </div>
      </form>
    </div>
  );
}