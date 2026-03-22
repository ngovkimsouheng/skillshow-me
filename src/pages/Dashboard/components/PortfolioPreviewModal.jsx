
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