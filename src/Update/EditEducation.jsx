import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetEducationByIdQuery,
  useUpdateEducationMutation,
} from "../api/educationApi";

const EditEducation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  /* ================= FETCH DATA ================= */

  const { data, isLoading: isFetching } = useGetEducationByIdQuery(id);

  const [updateEducation, { isLoading, isError, error, isSuccess }] =
    useUpdateEducationMutation();

  /* ================= FORM STATE ================= */

  const [form, setForm] = useState({
    degree_name: "",
    started_at: "",
    ended_at: "",
    institute_name: "",
    institute_url: "",
    is_completed: false,
  });

  /* ================= LOAD DATA ================= */

  useEffect(() => {
    if (data?.data) {
      setForm({
        degree_name: data.data.degree_name || "",
        started_at: data.data.started_at || "",
        ended_at: data.data.ended_at || "",
        institute_name: data.data.institute_name || "",
        institute_url: data.data.institute_url || "",
        is_completed: data.data.is_completed || false,
      });
    }
  }, [data]);

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateEducation({
        id,
        body: form,
      }).unwrap();

      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);

      navigate(-1); // go back
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= UI ================= */

  if (isFetching) return <p>Loading education...</p>;

  return (
    <div className="space-y-8">
      {showAlert && (
        <div className="fixed bottom-5 right-5 z-50 
                   p-4 rounded-lg shadow-sm
                   bg-green-100/80 border border-cool-sky   text-green-700 animate-slide-in">
          ✅ Education updated successfully
        </div>
      )}
      <h2 className="text-2xl font-bold text-[#1e2e3e]">Edit Education</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Degree Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Degree Name <span className="text-red-500">*</span>
          </label>
          <input
            name="degree_name"
            value={form.degree_name}
            onChange={handleChange}
            placeholder="Degree Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e]"
            required
          />
        </div>

        {/* Institute Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Institute Name <span className="text-red-500">*</span>
          </label>
          <input
            name="institute_name"
            value={form.institute_name}
            onChange={handleChange}
            placeholder="Institute Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e]"
            required
          />
        </div>

        {/* Institute URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Institute URL
          </label>
          <input
            name="institute_url"
            value={form.institute_url}
            onChange={handleChange}
            placeholder="Institute URL"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e]"
          />
        </div>

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Started At <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="started_at"
              value={form.started_at}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ended At
            </label>
            <input
              type="date"
              name="ended_at"
              value={form.ended_at}
              onChange={handleChange}
              disabled={!form.is_completed}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e] disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        {/* Completed Checkbox */}
        <div className="flex items-center gap-3 pt-2">
          <input
            type="checkbox"
            name="is_completed"
            checked={form.is_completed}
            onChange={handleChange}
            className="w-5 h-5 rounded border-gray-300 text-[#1e2e3e] focus:ring-[#1e2e3e] cursor-pointer"
          />
          <label className="text-sm font-medium text-gray-700 cursor-pointer">
            Completed
          </label>
        </div>

        {/* Error */}
        {isError && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
            {error?.data?.message || "Update Failed"}
          </div>
        )}

        {/* Success */}
        {isSuccess && (
          <div className="bg-green-50 border border-green-200 text-green-600 text-sm p-3 rounded-lg">
            Updated Successfully!
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
          {isLoading ? "Updating..." : "Update Education"}
        </button>
      </form>
    </div>
  );
};

export default EditEducation;
