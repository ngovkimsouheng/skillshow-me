import { FiTrash2 } from "react-icons/fi";
import { useDeleteProjectMutation, useGetProjectsQuery } from "../../api/projectApi";

export default function DeleteProject({ projectId }) {
    const [deleteProject, { isLoading }] = useDeleteProjectMutation();
    const { refetch } = useGetProjectsQuery();

    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this project?"
        );
        if (!confirmDelete) return;

        try {
            await deleteProject(projectId).unwrap();
            console.log("Project deleted successfully");
            // Immediately refetch projects to update UI
            refetch();
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