import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
    useGetMeQuery,
    useUpdateUserMutation,
    useUploadFileMutation,
} from "../api/authApi";

export default function EditProfile() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    /* ================= FETCH USER ================= */

    const { data, isLoading: isFetching } = useGetMeQuery();

    const [updateUser, { isLoading, isSuccess, isError, error }] =
        useUpdateUserMutation();

    const [uploadFile] = useUploadFileMutation();

    /* ================= FORM STATE ================= */

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        about_me: "",
        profile: "",
    });

    const [originalData, setOriginalData] = useState(null);

    const [profileFile, setProfileFile] = useState(null);
    const [profilePreview, setProfilePreview] = useState(null);

    /* ================= LOAD DATA ================= */

    useEffect(() => {
        if (data?.data) {
            const user = data.data;

            const initialForm = {
                first_name: user.first_name || "",
                last_name: user.last_name || "",
                username: user.username || "",
                email: user.email || "",
                about_me: user.about_me || "",
                profile: user.profile || "",
            };

            setForm(initialForm);
            setOriginalData(initialForm);
            setProfilePreview(user.profile || null);
        }
    }, [data]);

    /* ================= IMAGE HANDLING ================= */

    const processImage = useCallback((file) => {
        if (!file || !file.type.startsWith("image/")) return;

        setProfileFile(file);
        setProfilePreview(URL.createObjectURL(file));
    }, []);

    const handleFileChange = (e) => {
        processImage(e.target.files[0]);
    };

    const removeImage = () => {
        setProfileFile(null);
        setProfilePreview(null);

        setForm((prev) => ({
            ...prev,
            profile: "",
        }));

        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    /* ================= FORM CHANGE ================= */

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    /* ================= CHANGE DETECTION ================= */

    // const isChanged =
    //     originalData &&
    //     JSON.stringify(form) !== JSON.stringify(originalData);
    const isChanged =
        originalData &&
        (JSON.stringify(form) !== JSON.stringify(originalData) || profileFile);
    const handleReset = () => {
        setForm(originalData);
        setProfilePreview(originalData.profile);
        setProfileFile(null);
    };

    /* ================= SUBMIT ================= */

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let uploadedProfileUrl = form.profile;

            /* Upload image if user selected new one */

            if (profileFile) {
                const formData = new FormData();
                formData.append("file", profileFile);

                const uploadRes = await uploadFile(formData).unwrap();

                uploadedProfileUrl =
                    uploadRes?.files?.[0]?.url ||
                    uploadRes?.data?.files?.[0]?.url ||
                    "";

                if (!uploadedProfileUrl) {
                    alert("Image upload failed");
                    return;
                }
            }

            const payload = {
                first_name: form.first_name.trim(),
                last_name: form.last_name.trim(),
                username: form.username.trim(),
                email: form.email.trim(),
                about_me: form.about_me.trim(),
                profile: uploadedProfileUrl,
            };

            await updateUser({
                id: data?.data?.id,
                body: payload,
            }).unwrap();

            // alert("Profile Updated Successfully ✅");

            navigate(-1);
        } catch (err) {
            console.error("Update Error:", err);
        }
    };

    /* ================= LOADING ================= */

    if (isFetching) {
        return (
            <div className="space-y-4 animate-pulse">
                <div className="h-10 bg-gray-200 rounded-xl" />
                <div className="h-10 bg-gray-200 rounded-xl" />
                <div className="h-40 bg-gray-200 rounded-xl" />
            </div>
        );
    }

    /* ================= STYLES ================= */

    const inputClass =
        "w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm " +
        "focus:outline-none focus:ring-2 focus:ring-[#1e2e3e] focus:border-[#1e2e3e] " +
        "transition-all duration-200";

    const labelClass = "block text-sm font-medium mb-2 text-gray-600";

    /* ================= UI ================= */

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-[#1e2e3e]">Edit Profile</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* First Name */}
                <div>
                    <label className={labelClass}>First Name</label>
                    <input
                        name="first_name"
                        value={form.first_name}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label className={labelClass}>Last Name</label>
                    <input
                        name="last_name"
                        value={form.last_name}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                {/* Username */}
                <div>
                    <label className={labelClass}>Username</label>
                    <input
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                {/* Email */}
                <div>
                    <label className={labelClass}>Email</label>
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                {/* About */}
                <div>
                    <label className={labelClass}>About Me</label>
                    <textarea
                        name="about_me"
                        value={form.about_me}
                        onChange={handleChange}
                        rows={4}
                        className={inputClass}
                    />
                </div>

                {/* Profile Image */}
                <div>
                    <label className={labelClass}>Profile Image</label>

                    <div
                        className="border border-dashed rounded-xl p-6 text-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        {profilePreview ? (
                            <img
                                src={profilePreview}
                                className="w-24 h-24 mx-auto rounded-full object-cover"
                            />
                        ) : (
                            <p className="text-gray-500 text-sm">
                                Click to upload profile
                            </p>
                        )}
                    </div>

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleFileChange}
                    />

                    {profilePreview && (
                        <button
                            type="button"
                            onClick={removeImage}
                            className="text-red-500 text-sm mt-3 hover:underline"
                        >
                            Remove Image
                        </button>
                    )}
                </div>

                {/* Unsaved changes */}
                {isChanged && (
                    <div className="text-sm text-yellow-600 font-medium">
                        ⚡ You have unsaved changes
                    </div>
                )}

                {/* Error */}
                {isError && (
                    <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
                        {error?.data?.message || "Update failed"}
                    </div>
                )}

                {/* Buttons */}
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={handleReset}
                        disabled={!isChanged}
                        className="flex-1 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
                    >
                        Reset
                    </button>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex-1 py-3 rounded-xl font-semibold text-white
            bg-[#1e2e3e] hover:bg-[#16222f]
            disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Updating..." : "Update Profile"}
                    </button>
                </div>

            </form>
        </div>
    );
}