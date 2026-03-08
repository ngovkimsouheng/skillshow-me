import React, { useState } from "react";
import { useGetSocialAccountsQuery } from "../../api/socialAccountApi";
import EditSocialAccount from "../../Update/EditSocialAccount";

export default function GetSocailAccount() {
  const { data, isLoading, isError } = useGetSocialAccountsQuery();
  const [editingId, setEditingId] = useState(null);

  if (isLoading) return <p className="p-4">Loading social accounts...</p>;

  if (isError)
    return <p className="text-red-500 p-4">Failed to load accounts</p>;

  const accounts = data?.data || [];

  if (accounts.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10">
        No social accounts found.
      </p>
    );
  }

  return (
    <section className="container mx-auto max-w-7xl px-4">
      {/* Title */}
      <div>
        <h1 className="text-4xl uppercase font-bold text-primary sm:text-5xl">
          Social Accounts
        </h1>
      </div>

      {/* Cards */}
      <div className="pt-6 flex flex-wrap gap-6">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="relative border shadow-md flex flex-col items-center justify-center gap-3 w-40 h-40 rounded-2xl bg-white hover:shadow-xl transition"
          >
            {/* Image */}
            {account.image_url && (
              <img
                src={account.image_url}
                alt={account.name}
                className="w-14 h-14 object-contain"
              />
            )}

            <p className="text-sm font-semibold text-gray-700">
              {account.name}
            </p>

            {/* Edit Button */}
            <button
              onClick={() => setEditingId(account.id)}
              className="text-blue-500 text-sm"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* ✅ EDIT FORM OUTSIDE THE MAP */}
      {editingId && (
        <EditSocialAccount id={editingId} onClose={() => setEditingId(null)} />
      )}
    </section>
  );
}
