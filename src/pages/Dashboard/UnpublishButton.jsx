import { useState } from "react";
import { MdUnpublished } from "react-icons/md";
import { useUpdateMyPortfolioMutation } from "../../api/portfolioApi";

export default function UnpublishButton({ username }) {
    const [success, setSuccess] = useState(false);

    const [updateMyPortfolio, { isLoading, error }] =
        useUpdateMyPortfolioMutation();

    const handleUnpublish = async () => {
        setSuccess(false);

        try {
            await updateMyPortfolio(false).unwrap(); // ❌ UNPUBLISH
            setSuccess(true);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <button
                onClick={handleUnpublish}
                disabled={isLoading}
                className={`px-4 py-2 font-bold text-white rounded-full flex items-center gap-2 justify-center
        ${success ? "bg-gray-500" : "bg-red-600 hover:bg-red-700"}
        disabled:opacity-50`}
            >
                <MdUnpublished className="text-xl" />
                {isLoading ? "Unpublishing..." : success ? "Unpublished ❌" : "Unpublish"}
            </button>

            {success && (
                <p className="text-gray-500 text-sm">
                    Your portfolio is now private
                </p>
            )}

            {error && (
                <p className="text-red-500">
                    {error.data?.message || "Something went wrong"}
                </p>
            )}
        </div>
    );
}