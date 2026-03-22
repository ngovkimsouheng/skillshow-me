import { useState, useEffect } from "react";
import { FaTrash, FaSearch, FaPlus } from "react-icons/fa";
import { useGetAllUsersQuery, useUpdateUserMutation, useDeleteUserMutation } from "../../api/adminApi";
import { useUpdatePortfolioVisibilityMutation } from "../../api/adminApi";
import { MdPublish, MdUnpublished } from "react-icons/md";
import img from "./image.png";

export default function AdminUsers() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [usersState, setUsersState] = useState([]);
    // At the top of AdminUsers component
    const [previewUser, setPreviewUser] = useState(null); // store the user to preview
    const [showPreviewModal, setShowPreviewModal] = useState(false); // modal open/close
    const [device, setDevice] = useState("desktop"); // for device preview
    const [selectedTemplate, setSelectedTemplate] = useState("template1"); // default template
    const { data, isLoading, error } = useGetAllUsersQuery();
    const [updateUser] = useUpdateUserMutation();
    const [deleteUser] = useDeleteUserMutation();
    const handleOpenPreview = (user) => {
        setPreviewUser(user); // latest user data
        setShowPreviewModal(true);
    };
    // Initialize local state when API data changes
    useEffect(() => {
        if (data?.data && usersState.length === 0) {
            setUsersState(data.data);
        }
    }, [data, usersState.length]);

    // Filter users for search
    // const filteredUsers = usersState.filter((user) =>
    //     user.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     user.email?.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    const filteredUsers = usersState.filter((user) =>
        user.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await deleteUser(userId).unwrap();
                setUsersState(prev => prev.filter(u => u.id !== userId));
            } catch (error) {
                console.error("Failed to delete user:", error);
                alert("Failed to delete user");
            }
        }
    };

    const handlePortfolioUpdate = (userId, newStatus) => {
        setUsersState(prev =>
            prev.map(user =>
                user.id === userId
                    ? { ...user, portfolio: { ...user.portfolio, is_public: newStatus } }
                    : user
            )
        );
    };

    const handleSave = async (formData) => {
        try {
            await updateUser({ id: selectedUser.id, body: formData }).unwrap();
            setShowModal(false);
            setSelectedUser(null);
        } catch (error) {
            console.error("Failed to update user:", error);
            alert("Failed to update user");
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-8">
                <p className="text-red-600">Error loading users: {error.message}</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Search */}
            <div className="flex sticky top-20 flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search users by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Portfolio</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="shrink-0 h-10 w-10">
                                                <img
                                                    className="h-10 w-10 rounded-full object-cover"
                                                    src={user.profile || img}
                                                    alt={user.username}
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{user.username}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}>
                                            {user.role || 'user'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(user.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            className="text-red-600 hover:text-red-900 p-1"
                                            title="Delete user"
                                        >
                                            <FaTrash className="w-4 h-4" />
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap space-y-2">
                                        <span className={`block w-fit px-2 py-1 text-xs rounded-full font-semibold ${user?.portfolio?.is_public ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"}`}>
                                            {user?.portfolio?.is_public ? "Public" : "Private"}
                                        </span>
                                        <PortfolioToggle user={user} onUpdate={handlePortfolioUpdate} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredUsers.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                        No users found matching your search.
                    </div>
                )}
            </div>

            {/* Edit User Modal */}
            {showModal && selectedUser && (
                <EditUserModal
                    user={selectedUser}
                    onSave={handleSave}
                    onClose={() => {
                        setShowModal(false);
                        setSelectedUser(null);
                    }}
                />
            )}
        </div>
    );
}

function PortfolioToggle({ user, onUpdate }) {
    const [updateVisibility, { isLoading }] = useUpdatePortfolioVisibilityMutation();
    const isPublic = user?.portfolio?.is_public;

    const handleToggle = async () => {
        const newStatus = !isPublic;
        // Optimistically update UI first
        onUpdate(user.id, newStatus);

        try {
            await updateVisibility({
                userId: user.id,
                is_public: newStatus,
            }).unwrap();
        } catch (err) {
            console.error("Failed to update visibility:", err);
            // Revert UI if API fails
            onUpdate(user.id, isPublic);
        }
    };

    return (
        <button
            onClick={handleToggle}
            disabled={isLoading}
            className={`px-3 py-1 rounded-full text-white flex items-center gap-1 ${isPublic ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"} disabled:opacity-50`}
        >
            {isPublic ? <><MdUnpublished /> Unpublish</> : <><MdPublish /> Publish</>}
        </button>
    );
}

function EditUserModal({ user, onSave, onClose }) {
    const [formData, setFormData] = useState({
        username: user.username || '',
        email: user.email || '',
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        about_me: user.about_me || '',
        profile: user.profile || '',
        role: user.role || 'user',
        is_active: user.is_active ?? true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Edit User</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Form fields */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input type="text" name="username" value={formData.username} onChange={handleChange} required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image URL</label>
                        <input type="url" name="profile" value={formData.profile} onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">About Me</label>
                        <textarea name="about_me" value={formData.about_me} onChange={handleChange} rows="3"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                        <select name="role" value={formData.role} onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" name="is_active" checked={formData.is_active} onChange={handleChange} className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                        <label className="ml-2 block text-sm text-gray-700">Active</label>
                    </div>
                    <div className="flex justify-end gap-2 pt-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
}