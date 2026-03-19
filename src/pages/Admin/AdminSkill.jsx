import { useState } from "react";
import { FaTrash, FaSearch } from "react-icons/fa";
import {
    useGetAllSkillsAdminQuery,
    useDeleteSkillAdminMutation,
} from "../../api/admin/AdminSkill";

export default function AdminSkill() {
    const { data, isLoading, isError } = useGetAllSkillsAdminQuery();
    const [deleteSkill] = useDeleteSkillAdminMutation();
    const [searchTerm, setSearchTerm] = useState("");

    // Extract skills array
    const skills = data?.data?.data || [];

    const filteredSkills = skills.filter((skill) =>
        skill.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this skill?")) return;

        try {
            await deleteSkill(id).unwrap();
            alert("Skill deleted successfully");
        } catch (err) {
            console.error(err);
            alert("Failed to delete skill");
        }
    };

    if (isLoading) return <p className="p-6">Loading skills...</p>;
    if (isError) return <p className="p-6 text-red-500">Failed to load skills</p>;

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Skills</h1>
                <p className="text-gray-600">Manage all skills in the system</p>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                />
            </div>

            {/* Skills Table */}
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
                                    Proficiency
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
                            {filteredSkills.map((skill) => (
                                <tr key={skill.id} className="hover:bg-gray-50">
                                    {/* Logo */}
                                    <td className="px-6 py-4">
                                        {skill.logo_url ? (
                                            <img
                                                src={skill.logo_url}
                                                alt={skill.name}
                                                className="h-10 w-10 object-cover rounded-full"
                                            />
                                        ) : (
                                            "N/A"
                                        )}
                                    </td>

                                    {/* Name */}
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        {skill.name}
                                    </td>

                                    {/* Proficiency */}
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {skill.proficiency ?? "N/A"}%
                                    </td>

                                    {/* Public */}
                                    <td className="px-6 py-4 text-sm">
                                        {skill.is_public ? (
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
                                        {skill.created_at && skill.created_at !== "0001-01-01T00:00:00Z"
                                            ? new Date(skill.created_at).toLocaleDateString()
                                            : "N/A"}
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleDelete(skill.id)}
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

                {skills.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                        No skills available
                    </div>
                )}
            </div>
        </div>
    );
}