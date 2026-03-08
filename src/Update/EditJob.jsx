import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetJobByIdQuery,
  useUpdateJobMutation,
} from "../api/jobApi";

/* =====================================================
   ROUTE BASED PROFESSIONAL EDIT JOB PAGE
===================================================== */

export default function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  /* ================= API ================= */

  const {
    data,
    isLoading: isFetching,
    isError: fetchError,
  } = useGetJobByIdQuery(id, {
    skip: !id,
  });

  const [
    updateJob,
    { isLoading, isSuccess, isError, error },
  ] = useUpdateJobMutation();

  /* ================= FORM STATE ================= */

  const [form, setForm] = useState({
    company_name: "",
    role: "",
    started_at: "",
    ended_at: "",
    is_ended: false,
  });

  /* ================= PREFILL FORM ================= */

  useEffect(() => {
    if (data?.data) {
      const job = data.data;

      setForm({
        company_name: job.company_name || "",
        role: job.role || "",
        started_at: job.started_at?.split("T")[0] || "",
        ended_at: job.ended_at?.split("T")[0] || "",
        is_ended: job.is_ended || false,
      });
    }
  }, [data]);

  /* ================= HANDLE CHANGE ================= */

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
      await updateJob({
        id,
        body: form,
      }).unwrap();

      alert("✅ Job Updated Successfully");

      navigate(-1); // go back
    } catch (err) {
      console.error("Update Failed:", err);
    }
  };

  /* ================= STYLE ================= */

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm " +
    "focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e]";

  const labelClass = "block text-sm font-medium mb-2 text-gray-600";

  /* ================= LOADING STATES ================= */

  if (!id) return <p>❌ Invalid Job ID</p>;

  if (isFetching)
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-1/2 bg-gray-300 rounded-xl" />
        <div className="h-14 bg-gray-200 rounded-xl" />
        <div className="h-14 bg-gray-200 rounded-xl" />
      </div>
    );

  if (fetchError)
    return (
      <p className="text-red-500">
        ❌ Failed to load job data
      </p>
    );

  /* ================= UI ================= */

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#1e2e3e]">
        Edit Job Experience
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company */}
        <div>
          <label className={labelClass}>Company Name</label>
          <input
            type="text"
            name="company_name"
            value={form.company_name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Role */}
        <div>
          <label className={labelClass}>Role</label>
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Started At</label>
            <input
              type="date"
              name="started_at"
              value={form.started_at}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Ended At</label>
            <input
              type="date"
              name="ended_at"
              value={form.ended_at}
              onChange={handleChange}
              disabled={!form.is_ended}
              className={`${inputClass} disabled:bg-gray-100`}
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="is_ended"
            checked={form.is_ended}
            onChange={handleChange}
            className="w-5 h-5 cursor-pointer"
          />
          <label className="text-sm font-medium">
            Job Finished
          </label>
        </div>

        {/* Error */}
        {isError && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
            {error?.data?.message || "Update failed"}
          </div>
        )}

        {/* Success */}
        {isSuccess && (
          <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm">
            Job updated successfully!
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 py-3 rounded-xl font-semibold text-white bg-[#1e2e3e] hover:bg-[#16222f] disabled:opacity-50"
          >
            {isLoading ? "Updating..." : "Update Job"}
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex-1 py-3 rounded-xl bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}