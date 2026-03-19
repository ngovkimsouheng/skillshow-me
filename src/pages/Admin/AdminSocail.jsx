import { useState } from "react";
import { FaTrash, FaSearch, FaExternalLinkAlt } from "react-icons/fa";
import {
    useGetAllSocialAccountsAdminQuery,
    useDeleteSocialAccountAdminMutation,
} from "../../api/admin/AdminSocail";

export default function AdminSocial() {
    const { data, isLoading, isError } = useGetAllSocialAccountsAdminQuery();
    const [deleteSocial] = useDeleteSocialAccountAdminMutation();
    const [searchTerm, setSearchTerm] = useState("");

    const socials = data?.data?.data || [];

    const filteredSocials = socials.filter((social) =>
        social.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this social account?"))
            return;

        try {
            await deleteSocial(id).unwrap();
            alert("Social account deleted successfully");
        } catch (err) {
            console.error(err);
            alert("Failed to delete social account");
        }
    };

    if (isLoading) return <p className="p-6">Loading social accounts...</p>;
    if (isError) return <p className="p-6 text-red-500">Failed to load social accounts</p>;

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Social Accounts</h1>
                <p className="text-gray-600">Manage all social accounts in the system</p>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search social accounts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Logo
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    URL
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Public
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Created
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {filteredSocials.map((social) => (
                                <tr key={social.id} className="hover:bg-gray-50">
                                    {/* Logo */}
                                    <td className="px-6 py-4">
                                        {social.image_url ? (
                                            <img
                                                src={social.image_url}
                                                alt={social.name}
                                                className="h-10 w-10 object-cover rounded-full"
                                            />
                                        ) : (
                                            "N/A"
                                        )}
                                    </td>

                                    {/* Name */}
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        {social.name}
                                    </td>

                                    {/* URL */}
                                    <td className="px-6 py-4 text-sm text-blue-600 flex items-center gap-1">
                                        {social.url && (
                                            <a href={social.url} target="_blank" rel="noreferrer">
                                                <FaExternalLinkAlt />
                                                {social.url}
                                            </a>
                                        )}
                                    </td>

                                    {/* Public */}
                                    <td className="px-6 py-4 text-sm">
                                        {social.is_public ? (
                                            <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                                                Public
                                            </span>
                                        ) : (
                                            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                                                Private
                                            </span>
                                        )}
                                    </td>

                                    {/* Created */}
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {social.created_at
                                            ? new Date(social.created_at).toLocaleDateString()
                                            : "N/A"}
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleDelete(social.id)}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {socials.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                        No social accounts available
                    </div>
                )}
            </div>
        </div>
    );
}