import { useState } from "react";
import { useGetPortfolioByUsernameQuery, useUpdateMyPortfolioMutation } from "../../api/portfolioApi";
import { MdPublish } from "react-icons/md";
export default function PublishButton({ username }) {
    const [success, setSuccess] = useState(false);
    const [publicUrl, setPublicUrl] = useState("");
    const [updateMyPortfolio, { isLoading, error }] = useUpdateMyPortfolioMutation();

    const handlePublish = async () => {
        setSuccess(false);
        setPublicUrl("");

        try {
            await updateMyPortfolio().unwrap();
            // setPublicUrl(`http://localhost:5173/${username}`);
            setPublicUrl(`https://skillshow-portfolio.vercel.app/${username}`);
            setSuccess(true);
        } catch (err) {
            // Error is handled by the hook
        }
    };

    return (
        <div className="flex  flex-col gap-2">
            <button
                onClick={handlePublish}
                disabled={isLoading || success}
                className={`px-4 py-2 font-bold text-white rounded-full ${success ? "bg-green-500" : "bg-primary hover:bg-primary-dark"} disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 justify-center"
                    }`}
            >
                <MdPublish className="text-xl" />     {isLoading ? "Publishing..." : success ? "Published ✅" : "Publish"}
            </button>

            {success && publicUrl && (
                <a
                    href={publicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline"
                >
                    View Public Portfolio
                </a>
            )}

            {error && <p className="text-red-500">{error.data?.message || error.message || "Something went wrong"}</p>}
        </div>
    );
}