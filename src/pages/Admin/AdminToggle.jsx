import { MdPublish, MdUnpublished } from "react-icons/md";
import { useUpdatePortfolioVisibilityMutation } from "../../api/adminApi";

export default function AdminToggle({ user }) {
    const [updateVisibility, { isLoading }] =
        useUpdatePortfolioVisibilityMutation();

    const isPublic = user?.portfolio?.is_public;

    const handleToggle = async () => {
        try {
            await updateVisibility({
                userId: user.id,
                is_public: !isPublic,
            }).unwrap();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <button
            onClick={handleToggle}
            disabled={isLoading}
            className={`px-3 py-1 text-white rounded-full flex items-center gap-2
        ${isPublic ? "bg-red-600" : "bg-green-600"}
        disabled:opacity-50`}
        >
            {isPublic ? (
                <>
                    <MdUnpublished /> Unpublish
                </>
            ) : (
                <>
                    <MdPublish /> Publish
                </>
            )}
        </button>
    );
}