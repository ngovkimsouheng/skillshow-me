import { FiTrash2 } from "react-icons/fi";
import { useDeleteJobMutation } from "../../api/jobApi";
import { useGetJobQuery } from "../../api/jobApi";
export default function DeleteJob({ jobId }) {
  const [deleteJob, { isLoading }] = useDeleteJobMutation();

  const { data, refetch } = useGetJobQuery();
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?",
    );

    if (!confirmDelete) return;

    try {
      await deleteJob(jobId).unwrap();
      console.log("Job deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isLoading}
      className="text-red-500 hover:text-red-700 transition disabled:opacity-50"
    >
      <FiTrash2 size={20} />
    </button>
  );
}
