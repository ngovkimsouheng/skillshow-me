// import { useParams } from "react-router-dom";
// import { templates } from "../../portfolios/templates";

// export default function PortfolioPreview() {
//     const { id } = useParams();
//     const templateId = Number(id);

//     const template = templates.find((t) => t.id === templateId);

//     if (!template) {
//         return <div className="p-10">No template</div>;
//     }

//     const TemplateComponent = template.component;

//     return (
//         <div className="w-full h-full bg-white">
//             <TemplateComponent />
//         </div>
//     );
// }

import { useParams, useLocation } from "react-router-dom";
import { templates } from "../../portfolios/templates";

export default function PortfolioPreview() {
    const { id } = useParams();
    const location = useLocation();

    const templateId = Number(id);
    const template = templates.find((t) => t.id === templateId);

    const query = new URLSearchParams(location.search);
    const mode = query.get("mode"); // edit or preview

    if (!template) {
        return <div>Template not found</div>;
    }

    const TemplateComponent = template.component;

    return (
        <div className="w-full min-h-screen bg-white">
            {mode === "edit" ? (
                <>
                    {/* Edit UI */}
                    <div className="p-5 border-b bg-gray-100">
                        Editing Template {templateId}
                    </div>

                    <TemplateComponent editable />
                </>
            ) : (
                <TemplateComponent />
            )}
        </div>
    );
}