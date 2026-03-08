import { useDeleteEducationMutation } from "../../api/educationApi";
import { FiTrash2 } from "react-icons/fi";
export default function DeleteEducation({ educationId }) {
    const [deleteEducation, { isLoading }] = useDeleteEducationMutation();

    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this education?"
        );

        if (!confirmDelete) return;

        try {
            console.log("Deleting ID:", educationId); // ✅ Check the real UUID
            await deleteEducation(educationId).unwrap();
            // alert("Education deleted successfully!");
        } catch (error) {
            console.error("Delete failed", error);
            alert(
                "Failed to delete education. Make sure the ID is correct and try again."
            );
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