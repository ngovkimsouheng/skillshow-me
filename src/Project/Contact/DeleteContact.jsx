// DeleteContact.jsx
import { FiTrash2 } from "react-icons/fi";
import { useDeleteContactMutation } from "../../api/contact-meApi"; // adjust path
import { useGetMyContactsQuery } from "../../api/contact-meApi";

export default function DeleteContact({ contactId }) {
    const [deleteContact, { isLoading }] = useDeleteContactMutation();
    const { refetch } = useGetMyContactsQuery();

    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this contact?"
        );

        if (!confirmDelete) return;

        try {
            await deleteContact(contactId).unwrap();
            console.log("Contact deleted successfully");

            // ✅ Refetch the contact list to update UI
            refetch();
        } catch (error) {
            console.error("Delete failed", error);
            alert("Failed to delete contact. Please try again.");
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isLoading}
            className="text-red-500 hover:text-red-700 transition disabled:opacity-50"
            title="Delete Contact"
        >
            <FiTrash2 size={20} />
        </button>
    );
}