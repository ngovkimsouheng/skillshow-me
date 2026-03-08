import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetContactByIdQuery,
  useUpdateContactMutation,
} from "../api/contact-meApi";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useGetContactByIdQuery(id);

  const [updateContact, { isLoading, isSuccess, isError }] =
    useUpdateContactMutation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  /* ================= Load Data ================= */
  useEffect(() => {
    if (data?.data) {
      setForm({
        name: data.data.name,
        email: data.data.email,
        message: data.data.message,
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateContact({
        id,
        body: form,
      }).unwrap();

      alert("Updated Successfully");

      navigate("/template1"); // ✅ redirect after update
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <h2 className="text-2xl font-bold text-[#1e2e3e]">Edit Job Experience</h2>

      {/* Form */}
      <form onSubmit={handleUpdate} className="space-y-6">
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
            Job updated successfully!
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
          {isLoading ? "Updating..." : "Update Job"}
        </button>
      </form>
    </div>
  );
};

export default EditContact;
