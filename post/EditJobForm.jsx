import { useState, useEffect } from "react";
import { useUpdateJobMutation } from "../src/api/jobApi";

const EditJobForm = ({ job }) => {
  const [form, setForm] = useState({
    degree_name: "",
    institute_name: "",
    institute_url: "",
    started_at: "",
    ended_at: "",
    is_completed: false,
  });

  const [updateJob, { isLoading, isSuccess, isError, error }] =
    useUpdateJobMutation();

  // Prefill form when job loads
  useEffect(() => {
    if (job) {
      setForm({
        degree_name: job.degree_name || "",
        institute_name: job.institute_name || "",
        institute_url: job.institute_url || "",
        started_at: job.started_at || "",
        ended_at: job.ended_at || "",
        is_completed: job.is_completed || false,
      });
    }
  }, [job]);

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
      await updateJob({
        id: job.id,
        body: form,
      }).unwrap();

      console.log("Updated successfully");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="degree_name"
        value={form.degree_name}
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />

      <input
        type="text"
        name="institute_name"
        value={form.institute_name}
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />

      <input
        type="date"
        name="started_at"
        value={form.started_at}
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />

      <input
        type="date"
        name="ended_at"
        value={form.ended_at}
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {isLoading ? "Updating..." : "Update"}
      </button>

      {isSuccess && <p className="text-green-600">Updated successfully!</p>}
      {isError && (
        <p className="text-red-600">
          {error?.data?.message || "Update failed"}
        </p>
      )}
    </form>
  );
};

export default EditJobForm;
