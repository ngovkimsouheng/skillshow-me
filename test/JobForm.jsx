import { useState } from "react";
import { useCreateJobMutation } from "../src/api/jobApi";
import { useNavigate } from "react-router";

const JobForm = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    company_name: "",
    role: "",
    started_at: "",
    ended_at: "",
    is_ended: false,
  });

  const [createJob, { isLoading, isSuccess, isError, error }] =
    useCreateJobMutation();

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
      const response = await createJob(form).unwrap();

      console.log("Job Response:", response);

      setForm({
        company_name: "",
        role: "",
        started_at: "",
        ended_at: "",
        is_ended: false,
      });
      navigate("/dashboard/portfolio/1#job");

    } catch (err) {
      console.error("Failed to submit:", err);
    }
  };

  /* ✅ Consistent Input Style */
  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm " +
    "focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e] " +
    "transition-all duration-200";

  const labelClass = "block text-sm font-medium mb-2 text-gray-600";

  return (
    <div className="space-y-8">
      {/* Title */}
      <h2 className="text-2xl font-bold text-[#1e2e3e]">Add Job Experience</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company */}
        <div>
          <label className={labelClass}>
            Company Name & Role <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="company_name"
            value={form.company_name}
            onChange={handleChange}
            required
            placeholder="e.g. IT Instructor at ISTAD"
            className={inputClass}
          />
        </div>

        {/* Description */}
        <div>
          <label className={labelClass}>
            Job Description <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            placeholder="e.g. Built frontend architecture..."
            className={inputClass}
          />
        </div>

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Started */}
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

          {/* Ended */}
          <div>
            <label className={labelClass}>Ended At</label>

            <input
              type="date"
              name="ended_at"
              value={form.ended_at}
              onChange={handleChange}
              disabled={!form.is_ended}
              className={`${inputClass} disabled:bg-gray-100 disabled:cursor-not-allowed`}
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-3 pt-2">
          <input
            type="checkbox"
            id="is_ended"
            name="is_ended"
            checked={form.is_ended}
            onChange={handleChange}
            className="w-5 h-5 rounded border-gray-300 text-[#1e2e3e] focus:ring-[#1e2e3e] cursor-pointer"
          />

          <label
            htmlFor="is_ended"
            className="text-sm font-medium text-gray-700 cursor-pointer"
          >
            Job Finished
          </label>
        </div>

        {/* Error */}
        {isError && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
            {error?.data?.message || "Something went wrong. Please try again."}
          </div>
        )}

        {/* Success */}
        {isSuccess && (
          <div className="bg-green-50 border border-green-200 text-green-600 text-sm p-3 rounded-lg">
            Job added successfully!
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
          {isLoading ? "Submitting..." : "Add Job"}
        </button>
      </form>
    </div>
  );
};

export default JobForm;
