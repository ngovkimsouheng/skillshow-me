// import { useState } from "react";
// import { useGetPortfolioByUsernameQuery, useUpdateMyPortfolioMutation } from "../../api/portfolioApi";
// import { MdPublish } from "react-icons/md";
// import { useParams } from "react-router-dom";
// export default function PublishButton({ username }) {
//     const [success, setSuccess] = useState(false);
//     const [publicUrl, setPublicUrl] = useState("");
//     const [updateMyPortfolio, { isLoading, error }] = useUpdateMyPortfolioMutation();

//     const handlePublish = async () => {
//         setSuccess(false);
//         setPublicUrl("");

//         try {
//             // await updateMyPortfolio().unwrap();
//             // setPublicUrl(`http://localhost:5173/${username}`);
//             setPublicUrl(`https://skillshow-portfolio.vercel.app/${username}`);
//             setSuccess(true);
//         } catch (err) {
//             // Error is handled by the hook
//         }
//     };

//     return (
//         <div className="flex  flex-col gap-2">
//             <button
//                 onClick={handlePublish}
//                 disabled={isLoading || success}
//                 className={`px-4  flex items-center gap-2 py-2 font-bold text-white rounded-full ${success ? "bg-green-500" : "bg-primary hover:bg-primary-dark"} disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 justify-center"
//                     }`}
//             >
//                 <MdPublish className="text-xl" />     {isLoading ? "Publishing..." : success ? "Published ✅" : "Publish"}
//             </button>

//             {success && publicUrl && (
//                 <a
//                     href={publicUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-700 underline"
//                 >
//                     View Public Portfolio
//                 </a>
//             )}

//             {error && <p className="text-red-500">{error.data?.message || error.message || "Something went wrong"}</p>}
//         </div>
//     );
// }
import { useState, useEffect } from "react";
import { MdPublish, MdUnpublished } from "react-icons/md";
import {
    useGetMyPortfolioQuery,
    useUpdateMyPortfolioMutation,
} from "../../api/portfolioApi";

export default function PublishButton({ username }) {
    const { data, isLoading: loadingPortfolio } =
        useGetMyPortfolioQuery();

    const [updateMyPortfolio, { isLoading, error }] =
        useUpdateMyPortfolioMutation();

    const [isPublic, setIsPublic] = useState(false);
    const [publicUrl, setPublicUrl] = useState("");

    /* ✅ Sync with backend */
    useEffect(() => {
        if (data?.is_public !== undefined) {
            setIsPublic(data.is_public);
        }
    }, [data]);

    /* ✅ Always generate URL from state */
    useEffect(() => {
        if (isPublic && username) {
            setPublicUrl(
                `https://skillshow-portfolio.vercel.app/${username}`
            );
        } else {
            setPublicUrl("");
        }
    }, [isPublic, username]);

    const handleToggle = async () => {
        const newValue = !isPublic;

        // ✅ Optimistic UI
        setIsPublic(newValue);

        try {
            await updateMyPortfolio(newValue).unwrap();
        } catch (err) {
            setIsPublic(!newValue); // rollback
            console.error(err);
        }
    };

    if (loadingPortfolio) {
        return <p className="text-gray-500">Loading...</p>;
    }

    return (
        <div className="flex flex-col gap-2">
            <button
                onClick={handleToggle}
                disabled={isLoading}
                className={`px-4 py-2 font-bold text-white rounded-full flex items-center gap-2 justify-center transition
        ${isPublic
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-primary hover:bg-primary-dark"
                    }
        disabled:opacity-50`}
            >
                {isPublic ? (
                    <>
                        <MdUnpublished className="text-xl" />
                        {isLoading ? "Unpublishing..." : "Unpublish"}
                    </>
                ) : (
                    <>
                        <MdPublish className="text-xl" />
                        {isLoading ? "Publishing..." : "Publish"}
                    </>
                )}
            </button>

            {/* ✅ Public Link */}
            {isPublic && publicUrl && (
                <a
                    href={publicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline text-sm"
                >
                    View Public Portfolio
                </a>
            )}

            {/* ❌ Error */}
            {error && (
                <p className="text-red-500 text-sm">
                    {error.data?.message || "Something went wrong"}
                </p>
            )}
        </div>
    );
}