import { useState } from "react";
import { FaTrash, FaSearch } from "react-icons/fa";
import {
    useGetAllJobsAdminQuery,
    useDeleteJobAdminMutation,
} from "../../api/admin/AdminJob";

export default function AdminJob() {
    const { data, isLoading, isError } = useGetAllJobsAdminQuery();
    const [deleteJob] = useDeleteJobAdminMutation();

    const [searchTerm, setSearchTerm] = useState("");

    // extract jobs array from API response
    const jobs = data?.data?.data || [];
    console.log(jobs)
    const filteredJobs = jobs.filter((job) => {
        if (!searchTerm) return true;

        const search = searchTerm.toLowerCase();

        return (
            job.role?.toLowerCase().includes(search) ||
            job.company_name?.toLowerCase().includes(search)
        );
    });

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this job?")) {
            try {
                await deleteJob(id).unwrap();
                alert("Job deleted successfully");
            } catch (error) {
                console.error(error);
                alert("Failed to delete job");
            }
        }
    };

    if (isLoading) {
        return <p className="p-6">Loading jobs...</p>;
    }

    if (isError) {
        return <p className="p-6 text-red-500">Failed to load jobs</p>;
    }

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Jobs</h1>
                <p className="text-gray-600">Manage all jobs in the system</p>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />

                <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                />
            </div>

            {/* Jobs Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Job Title
                                </th>

                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Company
                                </th>

                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Started
                                </th>

                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ended
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredJobs.map((job) => (
                                <tr key={job.id} className="hover:bg-gray-50">
                                    {/* Job Title */}
                                    <td className="px-6   py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {job.role || "N/A"}
                                    </td>

                                    {/* Company */}
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {job.company_name || "N/A"}
                                    </td>

                                    {/* Location */}
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {job.started_at || "N/A"}
                                    </td>

                                    {/* Created */}
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {job.created_at
                                            ? new Date(job.created_at).toLocaleDateString()
                                            : "N/A"}
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button
                                            onClick={() => handleDelete(job.id)}
                                            className="text-red-600 hover:text-red-900"
                                            title="Delete job"
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {jobs.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                        No jobs available
                    </div>
                )}
            </div>
        </div>
    );
}