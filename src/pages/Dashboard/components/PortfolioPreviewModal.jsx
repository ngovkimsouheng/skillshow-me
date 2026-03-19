// import { motion } from "framer-motion";
// import { useMemo } from "react";

// // 👇 IMPORT YOUR TEMPLATE COMPONENTS HERE
// // import GetPortfolio4 from "../../../portfolios/Portfolio/GetPortfolio4";
// // import GetPortfolio8 from "../../../portfolios/Portfolio/GetPortfolio8";
// import Portfolio8 from "../../../portfolios/Portfolio-static/Portfolio8";
// import Portfolio4 from "../../../portfolios/Portfolio-static/Portfolio4";
// import UserPortfolio from "../user-portfolio/UserPortfolio";
// import GetPortfolio8 from "../../../portfolios/Portfolio/GetPortfolio8";
// export default function PortfolioPreviewModal({
//     onClose,
//     template,
//     setTemplate,
//     device,
//     setDevice,
// }) {
//     // ✅ Render Template Dynamically
//     const renderTemplate = useMemo(() => {
//         switch (template) {
//             case "template1":
//                 return <UserPortfolio />;
//             case "template2":
//                 return <GetPortfolio8 />;
//             case "template3":
//                 return <Portfolio8 />;

//             default:
//                 return <UserPortfolio />;
//         }
//     }, [template]);

//     return (
//         <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-xl flex justify-center items-center">

//             <motion.div
//                 initial={{ scale: 0.85, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="bg-white w-[95%] h-[95%] rounded-3xl shadow-2xl flex flex-col"
//             >

//                 {/* ================= HEADER ================= */}
//                 <div className="flex justify-between items-center p-4 border-b">

//                     {/* Device Buttons */}
//                     <div className="flex gap-3">
//                         <button
//                             className={`px-3 py-1 md:block max-md:hidden rounded ${device === "desktop" ? "bg-black text-white" : "bg-gray-200"
//                                 }`}
//                             onClick={() => setDevice("desktop")}
//                         >
//                             Desktop
//                         </button>

//                         <button
//                             className={`px-3 py-1 sm:block max-sm:hidden  rounded ${device === "tablet" ? "bg-black text-white" : "bg-gray-200"
//                                 }`}
//                             onClick={() => setDevice("tablet")}
//                         >
//                             Tablet
//                         </button>

//                         <button
//                             className={`px-3 py-1 rounded ${device === "mobile" ? "bg-black text-white" : "bg-gray-200"
//                                 }`}
//                             onClick={() => setDevice("mobile")}
//                         >
//                             Mobile
//                         </button>
//                     </div>

//                     {/* Template Switch */}
//                     <div className="flex justify-center ">
//                         <div className="relative w-30">

//                             <select
//                                 value={template}
//                                 onChange={(e) => setTemplate(e.target.value)}
//                                 className="
//         w-full
//         appearance-none
//         px-2 py-1
//         border border-gray-300
//         rounded-lg
//         bg-white
//         text-gray-700
//         shadow-sm
//         focus:outline-none
//         focus:ring-2
//         focus:ring-primary
//         pr-10
//         cursor-pointer
//       "
//                             >
//                                 <option value="template1">Template 1</option>
//                                 <option value="template2">Template 2</option>
//                                 <option value="template3">Template 3</option>
//                             </select>

//                             {/* Custom Arrow */}
//                             <svg
//                                 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                             </svg>

//                         </div>
//                     </div>

//                     {/* Close */}
//                     <button
//                         onClick={onClose}
//                         className="bg-red-500 text-white px-4 py-1 rounded-lg"
//                     >
//                         Close
//                     </button>

//                 </div>

//                 {/* ================= PREVIEW AREA ================= */}
//                 {/* <div className="flex-1 overflow-auto flex justify-center items-start bg-gray-100 p-6">

//                     <div
//                         className={`transition-all duration-300 ${device === "desktop"
//                                 ? "w-full"
//                                 : device === "tablet"
//                                     ? "w-[768px]"
//                                     : "w-[375px]"
//                             }`}
//                     >
//                         {renderTemplate}
//                     </div>

//                 </div> */}
//                 {/* <div className="flex-1 bg-gray-100 flex justify-center items-start p-4">
//                     <div
//                         className="w-full h-full rounded-xl overflow-hidden shadow-xl bg-white"
//                         style={{
//                             maxWidth:
//                                 device === "desktop"
//                                     ? "100%"
//                                     : device === "tablet"
//                                         ? "768px"
//                                         : "375px",
//                         }}
//                     >
//                         <iframe
//                             title="preview-frame"
//                             className="w-full h-full border-none"
//                             srcDoc={`<!DOCTYPE html>
//         <html>
//           <head>
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           </head>
//           <body style="margin:0;">
//             <div id="root"></div>
//             <script>
//               // Empty – we inject component via React later if needed
//             </script>
//           </body>
//         </html>`}
//                         />
//                     </div>
//                 </div> */}
//                 <div className="flex-1 bg-gray-100 flex justify-center items-start  overflow-auto">

//                     <div
//                         className="bg-white shadow-xl rounded-xl transition-all duration-300"
//                         style={{
//                             width: "100%",
//                             maxWidth:
//                                 device === "desktop"
//                                     ? "100%"
//                                     : device === "tablet"
//                                         ? "768px"
//                                         : "375px",
//                         }}
//                     >
//                         <div className="w-full">
//                             {renderTemplate}
//                         </div>
//                     </div>

//                 </div>
//             </motion.div>
//         </div>
//     );
// }


// import { motion } from "framer-motion";
// import { useMemo, useEffect } from "react";
// import { useParams } from "react-router";

// // Templates
// import Portfolio8 from "../../../portfolios/Portfolio-static/Portfolio8";
// import Portfolio4 from "../../../portfolios/Portfolio-static/Portfolio4";
// import UserPortfolio from "../user-portfolio/UserPortfolio";
// import GetPortfolio8 from "../../../portfolios/Portfolio/GetPortfolio8";
// import GetPortfolio5 from "../../../portfolios/Portfolio/GetPortfolio5";
// export default function PortfolioPreviewModal({
//     onClose,
//     template,
//     setTemplate,
//     device,
//     setDevice,
// }) {

//     // ✅ Get ID from URL
//     const { id } = useParams();

//     // ✅ Automatically select template based on URL
//     useEffect(() => {
//         const templateMap = {
//             1: "template1",
//             2: "template2",
//             3: "template3",
//         };

//         setTemplate(templateMap[id] || "template1");
//     }, [id, setTemplate]);

//     // ✅ Render Template Dynamically
//     const renderTemplate = useMemo(() => {
//         switch (template) {
//             case "template1":
//                 return <UserPortfolio />;

//             case "template2":
//                 return <GetPortfolio5 />;

//             case "template3":
//                 return <GetPortfolio8 />;

//             default:
//                 return <UserPortfolio />;
//         }
//     }, [template]);

//     return (
//         <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-xl flex justify-center items-center">

//             <motion.div
//                 initial={{ scale: 0.85, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="bg-white w-[95%] h-[95%] rounded-3xl shadow-2xl flex flex-col"
//             >

//                 {/* ================= HEADER ================= */}
//                 <div className="flex justify-between items-center p-4 border-b">

//                     {/* Device Buttons */}
//                     <div className="flex gap-3">

//                         <button
//                             className={`px-3 py-1 md:block max-md:hidden rounded ${device === "desktop" ? "bg-black text-white" : "bg-gray-200"
//                                 }`}
//                             onClick={() => setDevice("desktop")}
//                         >
//                             Desktop
//                         </button>

//                         <button
//                             className={`px-3 py-1 sm:block max-sm:hidden rounded ${device === "tablet" ? "bg-black text-white" : "bg-gray-200"
//                                 }`}
//                             onClick={() => setDevice("tablet")}
//                         >
//                             Tablet
//                         </button>

//                         <button
//                             className={`px-3 py-1 rounded ${device === "mobile" ? "bg-black text-white" : "bg-gray-200"
//                                 }`}
//                             onClick={() => setDevice("mobile")}
//                         >
//                             Mobile
//                         </button>

//                     </div>

//                     {/* Template Switch */}
//                     <div className="flex justify-center">
//                         <div className="relative w-30">

//                             {/* <select
//                                 value={template}
//                                 onChange={(e) => setTemplate(e.target.value)}
//                                 className="
//                   w-full
//                   appearance-none
//                   px-2 py-1
//                   border border-gray-300
//                   rounded-lg
//                   bg-white
//                   text-gray-700
//                   shadow-sm
//                   focus:outline-none
//                   focus:ring-2
//                   focus:ring-primary
//                   pr-10
//                   cursor-pointer
//                 "
//                             >
//                                 <option value="template1">Template 1</option>
//                                 <option value="template2">Template 2</option>
//                                 <option value="template3">Template 3</option>
//                             </select> */}

//                             {/* Arrow */}
//                             {/* <svg
//                                 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                             </svg> */}

//                         </div>
//                     </div>

//                     {/* Close Button */}
//                     <button
//                         onClick={onClose}
//                         className="bg-red-500 text-white px-4 py-1 rounded-lg"
//                     >
//                         Close
//                     </button>

//                 </div>

//                 {/* ================= PREVIEW AREA ================= */}
//                 <div className="flex-1 bg-gray-100 flex justify-center items-start overflow-auto">

//                     <div
//                         className="bg-white shadow-xl rounded-xl transition-all duration-300"
//                         style={{
//                             width: "100%",
//                             maxWidth:
//                                 device === "desktop"
//                                     ? "100%"
//                                     : device === "tablet"
//                                         ? "768px"
//                                         : "375px",
//                         }}
//                     >
//                         <div className="w-full">
//                             {renderTemplate}
//                         </div>
//                     </div>

//                 </div>

//             </motion.div>

//         </div>
//     );
// }
// PortfolioPreviewModal.jsx
// import { motion } from "framer-motion";
// import { useMemo, useState, useEffect } from "react";
// import { useParams } from "react-router";

// // Templates
// import UserPortfolio from "../user-portfolio/UserPortfolio";
// import GetPortfolio5 from "../../../portfolios/Portfolio/GetPortfolio5";
// import GetPortfolio8 from "../../../portfolios/Portfolio/GetPortfolio8";
// import GetPortfolio10 from "../../../portfolios/Portfolio/GetPortfolio10";
// export default function PortfolioPreviewModal({
//     onClose,
//     device,
//     setDevice,
//     template,
//     setTemplate
// }) {
//     // Use template from props (passed from Dashboard)
//     // If template is not provided, use useParams as fallback
//     const { id } = useParams();

//     const [templateState, setTemplateState] = useState(() => {
//         if (template) return template;

//         switch (id) {
//             case "1":
//                 return "template1";
//             case "2":
//                 return "template2";
//             case "3":
//                 return "template3";
//             case "4":
//                 return "template4";
//             default:
//                 return "template1";
//         }
//     });

//     // Update when template prop changes
//     useEffect(() => {
//         if (template) {
//             setTemplateState(template);
//         }
//     }, [template]);

//     // 4️⃣ Render template dynamically
//     const renderTemplate = useMemo(() => {
//         switch (templateState) {
//             case "template1":
//                 return <UserPortfolio />;
//             case "template2":
//                 return <GetPortfolio5 />;
//             case "template3":
//                 return <GetPortfolio8 />;
//             case "template4":
//                 return <GetPortfolio10 />;
//             default:
//                 return <UserPortfolio />;
//         }
//     }, [templateState]);

//     return (
//         <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-xl flex justify-center items-center">
//             <motion.div
//                 initial={{ scale: 0.85, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="bg-white w-[95%] h-[95%] rounded-3xl shadow-2xl flex flex-col"
//             >
//                 {/* HEADER */}
//                 <div className="flex justify-between items-center p-4 border-b">
//                     <div className="flex gap-3">
//                         <button
//                             className={`px-3 py-1 rounded ${device === "desktop" ? "bg-black text-white" : "bg-gray-200"}`}
//                             onClick={() => setDevice("desktop")}
//                         >
//                             Desktop
//                         </button>
//                         <button
//                             className={`px-3 py-1 rounded ${device === "tablet" ? "bg-black text-white" : "bg-gray-200"}`}
//                             onClick={() => setDevice("tablet")}
//                         >
//                             Tablet
//                         </button>
//                         <button
//                             className={`px-3 py-1 rounded ${device === "mobile" ? "bg-black text-white" : "bg-gray-200"}`}
//                             onClick={() => setDevice("mobile")}
//                         >
//                             Mobile
//                         </button>
//                     </div>

//                     <button onClick={onClose} className="bg-red-500 text-white px-4 py-1 rounded-lg">
//                         Close
//                     </button>
//                 </div>

//                 {/* PREVIEW AREA */}
//                 <div className="flex-1 bg-gray-100 flex justify-center items-start overflow-auto">
//                     <div
//                         className="bg-white shadow-xl rounded-xl transition-all duration-300"
//                         style={{
//                             width: "100%",
//                             maxWidth: device === "desktop" ? "100%" : device === "tablet" ? "768px" : "375px",
//                         }}
//                     >
//                         {renderTemplate}
//                     </div>
//                 </div>
//             </motion.div>
//         </div>
//     );
// }
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MdDesktopMac, MdTabletMac, MdPhoneIphone } from "react-icons/md";
import { MdClose } from "react-icons/md";
import PublishButton from "../PublishButton";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../api/authSlice";
const DEVICE_WIDTHS = {
    desktop: "100%",
    tablet: "768px",
    mobile: "375px",
};
const DEVICE_ICONS = {
    desktop: MdDesktopMac,
    tablet: MdTabletMac,
    mobile: MdPhoneIphone,
};
// Map template keys to their preview routes
const TEMPLATE_ROUTES = {
    template1: "/preview/template1",
    template2: "/preview/template2",
    template3: "/preview/template3",
    template4: "/preview/template4",
};

export default function PortfolioPreviewModal({
    onClose,
    device,
    setDevice,
    template,
}) {
    const { id } = useParams();
    const user = useSelector(selectCurrentUser);

    const [activeTemplate, setActiveTemplate] = useState(() => {
        if (template) return template;
        const map = { "1": "template1", "2": "template2", "3": "template3", "4": "template4" };
        return map[id] || "template1";
    });

    useEffect(() => {
        if (template) setActiveTemplate(template);
    }, [template]);

    const previewUrl = TEMPLATE_ROUTES[activeTemplate];

    return (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-xl flex justify-center items-center">
            <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white w-[95%] h-[98%]  shadow-2xl flex flex-col"
            >
                {/* HEADER */}
                <div className="flex justify-between items-center p-4 border-b">
                    <div className="flex justify-between items-center p-1 border-b">
                        <div className="flex gap-2">
                            {["desktop", "tablet", "mobile"].map((d) => {
                                const Icon = DEVICE_ICONS[d];
                                return (
                                    <button
                                        key={d}
                                        title={d}
                                        className={`p-2 rounded-lg transition-colors capitalize ${device === d
                                            ? "bg-black text-white"
                                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                            }`}
                                        onClick={() => setDevice(d)}
                                    >
                                        <Icon size={20} />
                                    </button>
                                );
                            })}
                        </div>


                    </div>
                    <PublishButton username={user?.username} />
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                    >
                        <MdClose size={20} />
                    </button>
                    {/* <button onClick={onClose} className="bg-red-500 text-white px-4 py-1 rounded-lg">
                        Close
                    </button> */}
                </div>

                {/* PREVIEW AREA */}
                <div className="flex-1 bg-gray-100 flex justify-center items-start overflow-auto p-2">
                    <div
                        className="bg-white shadow-xl overflow-hidden transition-all duration-300 h-full"
                        style={{ width: DEVICE_WIDTHS[device] }}
                    >
                        <iframe
                            key={`${activeTemplate}-${device}`}
                            src={previewUrl}
                            title="Portfolio Preview"
                            className="w-full h-full border-none"
                            style={{ minHeight: "600px" }}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}