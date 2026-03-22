import { useState } from "react";
import { FaTrash, FaSearch } from "react-icons/fa";
import {
    useGetAllEducationsAdminQuery,
    useDeleteEducationAdminMutation,
} from "../../api/admin/AdminEducation"; // your admin education API

export default function AdminEducations() {
    const { data, isLoading, isError } = useGetAllEducationsAdminQuery();
    const [deleteEducation] = useDeleteEducationAdminMutation();

    const [searchTerm, setSearchTerm] = useState("");

    // extract educations array from API response
    const educations = data?.data?.data || [];

    const filteredEducations = educations.filter((edu) => {
        if (!searchTerm) return true;
        const search = searchTerm.toLowerCase();
        return (
            edu.degree_name?.toLowerCase().includes(search) ||
            edu.institute_name?.toLowerCase().includes(search)
        );
    });

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this education?")) {
            try {
                await deleteEducation(id).unwrap();
                alert("Education deleted successfully");
            } catch (error) {
                console.error(error);
                alert("Failed to delete education");
            }
        }
    };

    if (isLoading) return <p className="p-6">Loading educations...</p>;
    if (isError) return <p className="p-6 text-red-500">Failed to load educations</p>;

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Educations</h1>
                <p className="text-gray-600">Manage all educations in the system</p>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search educations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary placeholder-gray-400"
                />
            </div>

            {/* Educations Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Degree
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Institute
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Started
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Ended
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Completed
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredEducations.length > 0 ? (
                                filteredEducations.map((edu) => (
                                    <tr key={edu.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 break-words">
                                            {edu.degree_name || "N/A"}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {edu.institute_url ? (
                                                <a
                                                    href={edu.institute_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 underline"
                                                >
                                                    {edu.institute_name || "N/A"}
                                                </a>
                                            ) : (
                                                edu.institute_name || "N/A"
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{edu.started_at || "N/A"}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {edu.ended_at && edu.ended_at !== "0001-01-01" ? edu.ended_at : "-"}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{edu.is_completed ? "Yes" : "No"}</td>
                                        <td className="px-6 py-4 text-sm font-medium">
                                            <button
                                                onClick={() => handleDelete(edu.id)}
                                                className="text-red-600 hover:text-red-900"
                                                title="Delete education"
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="text-center py-10 text-gray-500">
                                        No contacts found matching your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* API empty state */}
                {educations.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                        No educations available
                    </div>
                )}
            </div>
        </div>
    );
}