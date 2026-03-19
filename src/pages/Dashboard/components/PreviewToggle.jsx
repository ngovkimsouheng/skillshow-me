// import { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { RiEyeCloseLine } from "react-icons/ri";

// export default function PreviewToggle() {
//     const [isPreview, setIsPreview] = useState(false);

//     const handleToggle = () => {
//         setIsPreview(!isPreview);
//     };

//     return (
//         <div
//             className="p-3"
//             style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
//         >
//             <div
//                 className="rounded-xl p-4"
//                 style={{
//                     background: "rgba(59,130,246,0.12)",
//                     border: "1px solid rgba(59,130,246,0.22)",
//                 }}
//             >
//                 <p className="text-[16px] font-semibold text-blue-300 mb-2">
//                     View Portfolio
//                 </p>

//                 <button
//                     onClick={handleToggle}
//                     className="w-full bg-secondary  flex justify-center items-center gap-2 py-2 rounded-lg text-primary text-[12px] font-semibold transition-all active:scale-95 hover:opacity-90"

//                 >
//                     {isPreview ? (
//                         <>
//                             <RiEyeCloseLine className="text-xl" />
//                             Hide
//                         </>
//                     ) : (
//                         <>
//                             <BsEyeFill className="text-xl" />
//                             Preview
//                         </>
//                     )}
//                 </button>
//             </div>
//         </div>
//     );

// }
// // }import { useState } from "react";
// import { BsEyeFill } from "react-icons/bs";
// import { RiEyeCloseLine } from "react-icons/ri";
// import GetPortfolio4 from "../../../portfolios/Portfolio/GetPortfolio4"; // your portfolio page/component
// import { useState } from "react";
// export default function PortfolioPreview() {
//     const [isPreview, setIsPreview] = useState(false);

//     const handleToggle = () => setIsPreview((prev) => !prev);

//     return (
//         <div className="space-y-4">
//             {/* Preview Card */}
//             <div
//                 className="p-3"
//                 style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
//             >
//                 <div
//                     className="rounded-xl p-4"
//                     style={{
//                         background: "rgba(59,130,246,0.12)",
//                         border: "1px solid rgba(59,130,246,0.22)",
//                     }}
//                 >
//                     <p className="text-[16px] font-semibold text-blue-300 mb-2">
//                         View Portfolio
//                     </p>

//                     <button
//                         onClick={handleToggle}
//                         className="w-full bg-secondary flex justify-center items-center gap-2 py-2 rounded-lg text-primary text-[12px] font-semibold transition-all active:scale-95 hover:opacity-90"
//                     >
//                         {isPreview ? (
//                             <>
//                                 <RiEyeCloseLine className="text-xl" />
//                                 Hide
//                             </>
//                         ) : (
//                             <>
//                                 <BsEyeFill className="text-xl" />
//                                 Preview
//                             </>
//                         )}
//                     </button>
//                 </div>
//             </div>

//             {/* Conditional Rendering of Portfolio */}
//             {isPreview && (
//                 <div className="mt-4">
//                     <GetPortfolio4 />
//                 </div>
//             )}
//         </div>
//     );
// }import { BsEyeFill } from "react-icons/bs";

export default function PreviewToggle({ setPreviewOpen }) {
    return (
        <div className="p-3 border-t border-white/10">
            <div className="rounded-xl p-4 bg-blue-500/10 border border-blue-500/20">

                {/* <p className="text-[16px] font-semibold text-blue-300 mb-3">
                    Responsive
                </p> */}

                <button
                    onClick={() => setPreviewOpen(true)}
                    className="w-full text-primary font-medium flex justify-center items-center gap-2 py-2 rounded-lg bg-secondary"
                >
                    <BsEyeFill />
                    Preview
                </button>

            </div>
        </div>
    );
}