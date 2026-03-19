import { useState } from "react";
import { FaTrash, FaSearch, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
    useGetAllProjectsAdminQuery,
    useDeleteProjectAdminMutation,
} from "../../api/admin/AdminProject";

export default function AdminProject() {
    const { data, isLoading, isError } = useGetAllProjectsAdminQuery();
    const [deleteProject] = useDeleteProjectAdminMutation();

    const [searchTerm, setSearchTerm] = useState("");

    const projects = data?.data?.data || [];

    const filteredProjects = projects.filter((project) =>
        project.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this project?"))
            return;

        try {
            await deleteProject(id).unwrap();
            alert("Project deleted successfully");
        } catch (err) {
            console.error(err);
            alert("Failed to delete project");
        }
    };

    if (isLoading) return <p className="p-6">Loading projects...</p>;
    if (isError) return <p className="p-6 text-red-500">Failed to load projects</p>;

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
                <p className="text-gray-600">Manage all projects in the system</p>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search projects..."
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
                                    Project
                                </th>

                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Description
                                </th>

                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Status
                                </th>

                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Links
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
                            {filteredProjects.map((project) => (
                                <tr key={project.id} className="hover:bg-gray-50">
                                    {/* Project Name */}
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        {project.name}
                                    </td>

                                    {/* Description */}
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {project.description || "No description"}
                                    </td>

                                    {/* Status */}
                                    <td className="px-6 py-4 text-sm">
                                        {project.is_published ? (
                                            <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                                                Published
                                            </span>
                                        ) : (
                                            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                                                Draft
                                            </span>
                                        )}
                                    </td>

                                    {/* Links */}
                                    <td className="px-6 py-4 flex gap-3 text-sm">
                                        {project.project_url && (
                                            <a
                                                href={project.project_url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                <FaExternalLinkAlt />
                                            </a>
                                        )}

                                        {project.github_url && (
                                            <a
                                                href={project.github_url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-800 hover:text-black"
                                            >
                                                <FaGithub />
                                            </a>
                                        )}
                                    </td>

                                    {/* Created */}
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {new Date(project.created_at).toLocaleDateString()}
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleDelete(project.id)}
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

                {projects.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                        No projects available
                    </div>
                )}
            </div>
        </div>
    );
}