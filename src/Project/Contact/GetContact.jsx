import React from "react";
import { useGetMyContactsQuery } from "../../api/contact-meApi";
import { useNavigate } from "react-router-dom";

export default function GetContact() {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetMyContactsQuery();

  const contacts = data?.data?.data || []; // ✅ IMPORTANT (because your API nested it)

  if (isLoading) {
    return <div className="p-6">Loading contacts...</div>;
  }

  if (isError) {
    return <div className="p-6 text-red-500">Failed to load contacts</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">My Contact Messages</h2>

      {contacts.length === 0 && (
        <p className="text-gray-500">No messages found.</p>
      )}

      {/* ================= LIST ================= */}

      <div className="grid gap-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="border rounded-xl p-4 shadow-sm bg-white"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{contact.name}</p>
                <p className="text-sm text-gray-600">{contact.email}</p>
              </div>

              {/* Edit Button */}
              <button
                onClick={() => navigate(`/contact/edit/${contact.id}`)}
                className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm"
              >
                Edit
              </button>
            </div>

            <p className="mt-3 text-gray-700">{contact.message}</p>

            <div className="mt-2 text-xs text-gray-400">
              Created: {new Date(contact.created_at).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
