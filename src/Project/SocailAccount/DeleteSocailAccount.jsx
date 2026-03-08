import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDeleteSocialAccountMutation } from "../../api/socialAccountApi";

export default function DeleteSocialAccount({ socialId, onDeleted }) {
  const [deleteSocialAccount, { isLoading }] = useDeleteSocialAccountMutation();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this social account?"
    );

    if (!confirmDelete) return;

    try {
      await deleteSocialAccount(socialId).unwrap();
      console.log("Social account deleted successfully");
      if (onDeleted) onDeleted(); // Optional: notify parent to refresh
    } catch (error) {
      console.error("Delete failed", error);
      alert("Failed to delete social account");
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