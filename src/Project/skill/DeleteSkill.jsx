import { FiTrash2 } from "react-icons/fi";
import { useDeleteSkillMutation } from "../../api/skillApi";
import { useGetSkillQuery } from "../../api/skillApi";
import { reload } from "firebase/auth";

export default function DeleteSkill({ skillId }) {
  const [deleteSkill, { isLoading }] = useDeleteSkillMutation();
  const { refetch } = useGetSkillQuery();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this skill?",
    );

    if (!confirmDelete) return;

    try {
      await deleteSkill(skillId).unwrap();
      console.log("Skill deleted successfully");

      // ✅ Refetch instead of reload
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
