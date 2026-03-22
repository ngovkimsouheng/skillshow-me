// // import { useParams } from "react-router-dom";
// // import { templates } from "../../portfolios/templates";

// // export default function PortfolioPreview() {
// //     const { id } = useParams();
// //     const templateId = Number(id);

// //     const template = templates.find((t) => t.id === templateId);

// //     if (!template) {
// //         return <div className="p-10">No template</div>;
// //     }

// //     const TemplateComponent = template.component;

// //     return (
// //         <div className="w-full h-full bg-white">
// //             <TemplateComponent />
// //         </div>
// //     );
// // }

// import { useParams, useLocation } from "react-router-dom";
// import { templates } from "../../portfolios/templates";

// export default function PortfolioPreview() {
//     const { id } = useParams();
//     const location = useLocation();

//     const templateId = Number(id);
//     const template = templates.find((t) => t.id === templateId);

//     const query = new URLSearchParams(location.search);
//     const mode = query.get("mode"); // edit or preview

//     if (!template) {
//         return <div>Template not found</div>;
//     }

//     const TemplateComponent = template.component;

//     return (
//         <div className="w-full min-h-screen bg-white">
//             {mode === "edit" ? (
//                 <>
//                     {/* Edit UI */}
//                     <div className="p-5 border-b bg-gray-100">
//                         Editing Template {templateId}
//                     </div>

//                     <TemplateComponent editable />
//                 </>
//             ) : (
//                 <TemplateComponent />
//             )}
//         </div>
//     );
// }
import { useEffect, useState } from "react";
import { MdPublish, MdUnpublished } from "react-icons/md";
import {
    useGetPortfolioByUsernameQuery,
    useUpdateMyPortfolioMutation,
} from "../../api/portfolioApi";

export default function PublishButton({ username }) {
    const { data, isLoading: loadingPortfolio } =
        useGetPortfolioByUsernameQuery(username);

    const [updateMyPortfolio, { isLoading }] =
        useUpdateMyPortfolioMutation();

    const [isPublic, setIsPublic] = useState(false);

    // ✅ sync with backend
    useEffect(() => {
        if (data) {
            setIsPublic(data.is_public); // 🔥 THIS IS THE KEY
        }
    }, [data]);

    const handleToggle = async () => {
        const newValue = !isPublic;

        try {
            await updateMyPortfolio(newValue).unwrap();
            setIsPublic(newValue); // update UI
        } catch (err) {
            console.error(err);
        }
    };

    if (loadingPortfolio) {
        return <p>Loading...</p>;
    }

    return (
        <button
            onClick={handleToggle}
            className={`px-4 py-2 text-white rounded-full ${isPublic ? "bg-red-600" : "bg-primary"
                }`}
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