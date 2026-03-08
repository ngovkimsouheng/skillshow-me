// import { useState } from "react";
// import { useCreateEducationMutation } from "../src/api/educationApi";

// const EducationForm = () => {
//   const [form, setForm] = useState({
//     degree_name: "",
//     institute_name: "",
//     institute_url: "",
//     started_at: "",
//     ended_at: "",
//     is_completed: false,
//   });

//   const [createEducation, { isLoading, isSuccess, isError, error }] =
//     useCreateEducationMutation();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createEducation(form).unwrap();
//       console.log("Experience Response:", form);
//       setForm({
//         degree_name: "",
//         institute_name: "",
//         institute_url: "",
//         started_at: "",
//         ended_at: "",
//         is_completed: false,
//       });
//     } catch (err) {
//       console.error("Failed to submit:", err);
//     }
//   };

//   const inputClass =
//     "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm";

//   const labelClass = "block text-sm font-medium text-gray-700";

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white w-full max-w-lg rounded-2xl shadow-md p-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Education</h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Degree Name */}
//           <div>
//             <label className={labelClass}>
//               Degree Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="degree_name"
//               value={form.degree_name}
//               onChange={handleChange}
//               required
//               placeholder="e.g. Bachelor of Science"
//               className={inputClass}
//             />
//           </div>

//           {/* Institute Name */}
//           <div>
//             <label className={labelClass}>
//               Institute Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="institute_name"
//               value={form.institute_name}
//               onChange={handleChange}
//               required
//               placeholder="e.g. MIT"
//               className={inputClass}
//             />
//           </div>

//           {/* Institute URL */}
//           <div>
//             <label className={labelClass}>Institute URL</label>
//             <input
//               type="url"
//               name="institute_url"
//               value={form.institute_url}
//               onChange={handleChange}
//               placeholder="https://example.edu"
//               className={inputClass}
//             />
//           </div>

//           {/* Started At & Ended At */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className={labelClass}>
//                 Started At <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="date"
//                 name="started_at"
//                 value={form.started_at}
//                 onChange={handleChange}
//                 required
//                 className={inputClass}
//               />
//             </div>
//             <div>
//               <label className={labelClass}>Ended At</label>
//               <input
//                 type="date"
//                 name="ended_at"
//                 value={form.ended_at}
//                 onChange={handleChange}
//                 disabled={form.is_completed}
//                 className={`${inputClass} disabled:bg-gray-100 disabled:cursor-not-allowed`}
//               />
//             </div>
//           </div>

//           {/* Is Completed */}
//           <div className="flex items-center gap-3">
//             <input
//               type="checkbox"
//               id="is_completed"
//               name="is_completed"
//               checked={form.is_completed}
//               onChange={handleChange}
//               className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
//             />
//             <label
//               htmlFor="is_completed"
//               className="text-sm font-medium text-gray-700 cursor-pointer"
//             >
//               Is Completed
//             </label>
//           </div>

//           {/* Error Message */}
//           {isError && (
//             <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-md px-4 py-3">
//               {error?.data?.message ||
//                 "Something went wrong. Please try again."}
//             </div>
//           )}

//           {/* Success Message */}
//           {isSuccess && (
//             <div className="bg-green-50 border border-green-200 text-green-600 text-sm rounded-md px-4 py-3">
//               Education added successfully!
//             </div>
//           )}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-semibold py-2.5 px-4 rounded-md transition-colors duration-200 text-sm"
//           >
//             {isLoading ? (
//               <span className="flex items-center justify-center gap-2">
//                 <svg
//                   className="animate-spin h-4 w-4 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   />
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8v8z"
//                   />
//                 </svg>
//                 Submitting...
//               </span>
//             ) : (
//               "Add Education"
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EducationForm;
import { useState } from "react";
import { useCreateEducationMutation } from "../src/api/educationApi";
import { useNavigate } from "react-router";

const EducationForm = () => {
  const [form, setForm] = useState({
    degree_name: "",
    institute_name: "",
    institute_url: "",
    started_at: "",
    ended_at: "",
    is_completed: false,
  });
  const navigate = useNavigate()
  const [createEducation, { isLoading, isSuccess, isError, error }] =
    useCreateEducationMutation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createEducation(form).unwrap();

      /* ✅ LOG API RESPONSE */
      console.log("🎓 Education Response:", response);
      navigate("/dashboard/portfolio/1#education");
      /* Reset form after success */
      setForm({
        degree_name: "",
        institute_name: "",
        institute_url: "",
        started_at: "",
        ended_at: "",
        is_completed: false,
      });
    } catch (err) {
      console.error("❌ Failed to submit:", err);
    }
  };
  /* 🔥 Shared Input Style */
  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm " +
    "focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e] " +
    "transition-all duration-200";

  const labelClass = "block text-sm font-medium mb-2 text-gray-600";

  return (
    <div className="space-y-8">
      {/* Title */}
      <h2 className="text-2xl font-bold text-[#1e2e3e]">Add Education</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Degree Name */}
        <div>
          <label className={labelClass}>
            Degree Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="degree_name"
            value={form.degree_name}
            onChange={handleChange}
            required
            placeholder="e.g. Bachelor of Science"
            className={inputClass}
          />
        </div>

        {/* Institute Name */}
        <div>
          <label className={labelClass}>
            Institute Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="institute_name"
            value={form.institute_name}
            onChange={handleChange}
            required
            placeholder="e.g. MIT"
            className={inputClass}
          />
        </div>

        {/* Institute URL */}
        <div>
          <label className={labelClass}>Institute URL</label>

          <input
            type="url"
            name="institute_url"
            value={form.institute_url}
            onChange={handleChange}
            placeholder="https://example.edu"
            className={inputClass}
          />
        </div>

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Started At */}
          <div>
            <label className={labelClass}>
              Started At <span className="text-red-500">*</span>
            </label>

            <input
              type="date"
              name="started_at"
              value={form.started_at}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          {/* Ended At */}
          <div>
            <label className={labelClass}>Ended At</label>

            <input
              type="date"
              name="ended_at"
              value={form.ended_at}
              onChange={handleChange}
              disabled={form.is_completed}
              className={`${inputClass} disabled:bg-gray-100 disabled:cursor-not-allowed`}
            />
          </div>
        </div>

        {/* Completed Checkbox */}
        <div className="flex items-center gap-3 pt-2">
          <input
            type="checkbox"
            id="is_completed"
            name="is_completed"
            checked={form.is_completed}
            onChange={handleChange}
            className="w-5 h-5 rounded border-gray-300 text-[#1e2e3e] focus:ring-[#1e2e3e] cursor-pointer"
          />

          <label
            htmlFor="is_completed"
            className="text-sm font-medium text-gray-700 cursor-pointer"
          >
            Mark as Completed
          </label>
        </div>

        {/* Error Message */}
        {isError && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
            {error?.data?.message || "Something went wrong. Please try again."}
          </div>
        )}

        {/* Success Message */}
        {isSuccess && (
          <div className="bg-green-50 border border-green-200 text-green-600 text-sm p-3 rounded-lg">
            Education added successfully!
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 rounded-xl font-semibold text-white
            bg-[#1e2e3e] hover:bg-[#16222f]
            active:scale-95 transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Submitting..." : "Add Education"}
        </button>
      </form>
    </div>
  );
};

export default EducationForm;
