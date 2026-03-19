import { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate, useParams, useLocation } from "react-router-dom";
import IC from "../../pages/Dashboard/components/IC";
import Profile from "../../auth/Profile";
import Logo from "../../pages/Dashboard/components/LogoComponent";
import { useGetMeQuery } from "../../api/authApi";

/* ── Sidebar item ── */
function SideItem({ to, label, icon, closeSidebarOnMobile }) {
    return (
        <NavLink
            to={to}
            onClick={closeSidebarOnMobile}
            className={({ isActive }) =>
                `relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-all duration-150 text-left
        ${isActive
                    ? "bg-white/11 text-white"
                    : "text-white/45 hover:bg-white/7 hover:text-white/80"
                }`
            }
        >
            {({ isActive }) => (
                <>
                    {isActive && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.75 h-4.5 bg-white/80 rounded-r-full" />
                    )}
                    <span className={isActive ? "text-white/90" : "text-white/40"}>
                        {IC[icon]}
                    </span>
                    {label}
                </>
            )}
        </NavLink>
    );
}

/* ── Sidebar group ── */
function SideGroup({
    id,
    label,
    icon,
    items,
    expanded,
    onToggle,
    closeSidebarOnMobile,
}) {
    const open = expanded.includes(id);

    return (
        <div>
            <button
                onClick={() => onToggle(id)}
                className="relative w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-all duration-150 text-left text-white/45 hover:bg-white/7 hover:text-white/80"
            >
                <div className="flex items-center gap-3">
                    <span className="text-white/40">{IC[icon]}</span>
                    {label}
                </div>

                <span
                    className={`text-white/30 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                >
                    {IC.chevron}
                </span>
            </button>

            <div
                className="overflow-hidden transition-all duration-200 ease-in-out"
                style={{
                    maxHeight: open ? `${items.length * 52}px` : "0px",
                    opacity: open ? 1 : 0,
                }}
            >
                <div
                    className="ml-3 mt-0.5 pl-3 pb-1 space-y-0.5"
                    style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}
                >
                    {items.map((c) => (
                        <NavLink
                            key={c.to}
                            to={c.to}
                            onClick={closeSidebarOnMobile}
                            className={({ isActive }) =>
                                `w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-[12.5px] font-medium transition-all duration-150 text-left
                ${isActive
                                    ? "bg-white/11 text-white"
                                    : "text-white/38 hover:text-white/70 hover:bg-white/5"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <span
                                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? "bg-white/80" : "bg-white/20"
                                            }`}
                                    />
                                    {c.label}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ── Section label ── */
const SideSection = ({ label }) => (
    <p className="text-[10px] font-semibold tracking-widest uppercase text-white/25 px-3 pt-4 pb-1.5">
        {label}
    </p>
);

export default function AdminDashboard() {
    const navigate = useNavigate();
    const { data: user } = useGetMeQuery();
    const [dark, setDark] = useState(false);
    const [sideOpen, setSideOpen] = useState(true);
    const [expanded, setExpanded] = useState([]);

    const isAdmin =
        user?.data?.role === "admin" ||
        user?.data?.email === "adminskillshow@gmail.com";

    useEffect(() => {
        if (user && !isAdmin) {
            navigate("/dashboard", { replace: true });
        }
    }, [user, isAdmin, navigate]);
    const closeSidebarOnMobile = () => {
        if (window.innerWidth < 768) {
            setSideOpen(false);
        }
    };

    const tog = (id) => {
        setExpanded((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    /* ── theme tokens ── */
    const bg = dark ? "#0f1923" : "#f4f4e7";
    const topbar = dark
        ? "bg-[#0f1923]/90 border-white/[0.07]"
        : "bg-[#f4f4e7]/90 border-black/[0.07]";
    const iconBtn = dark
        ? "bg-white/[0.05] border border-white/[0.08] text-white/50 hover:bg-white/[0.1] hover:text-white"
        : "bg-black/[0.04] border border-black/[0.07] text-[#1e2e3e]/40 hover:bg-black/[0.08] hover:text-[#1e2e3e]";

    return (
        <div
            style={{
                fontFamily: "'Poppins', sans-serif",
                background: bg,
                minHeight: "100vh",
            }}
        >
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');`}
            </style>

            {/* Mobile overlay */}
            {sideOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                    onClick={() => setSideOpen(false)}
                />
            )}

            {/* SIDEBAR */}
            <aside
                className={`fixed bg-primary text-white top-0 left-0 h-screen w-55 z-50 flex flex-col transition-transform duration-300 ease-in-out
          ${sideOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Logo */}
                <div
                    className="flex items-center justify-between px-5 py-2"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                    <NavLink to="/" className="flex items-center gap-3">
                        <Logo />
                    </NavLink>

                    <button
                        className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center bg-white text-primary transition-all"
                        onClick={() => setSideOpen(false)}
                    >
                        {IC.close}
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-0.5">
                    <SideSection label="Admin Panel" />

                    <SideGroup
                        id="users"
                        label="Users"
                        icon="users"
                        expanded={expanded}
                        onToggle={tog}
                        closeSidebarOnMobile={closeSidebarOnMobile}
                        items={[
                            { to: "/admin/users", label: "All Users" },
                            { to: "/admin/analytics", label: "Analytics" },
                        ]}
                    />

                    <SideGroup
                        id="content"
                        label="Content"
                        icon="create"
                        expanded={expanded}
                        onToggle={tog}
                        closeSidebarOnMobile={closeSidebarOnMobile}
                        items={[
                            { to: "/admin/portfolios", label: "Portfolios" },
                            { to: "/admin/templates", label: "Templates" },
                            { to: "/admin/contacts", label: "Contacts" },
                            { to: "/admin/jobs", label: "Jobs" },
                            { to: "/admin/projects", label: "Projects" },
                            { to: "/admin/skills", label: "Skills" },
                            { to: "/admin/socails", label: "Social Accounts" },
                        ]}
                    />

                    <SideGroup
                        id="settings"
                        label="Settings"
                        icon="settings"
                        expanded={expanded}
                        onToggle={tog}
                        closeSidebarOnMobile={closeSidebarOnMobile}
                        items={[
                            { to: "/admin/settings", label: "General" },
                            { to: "/admin/permissions", label: "Permissions" },
                        ]}
                    />
                </nav>

                <div className="p-3">
                    <button
                        onClick={() => setDark(!dark)}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[13.5px] font-medium text-white/45 hover:bg-white/7 hover:text-white/80"
                    >
                        <span className="text-white/40">{IC.preview}</span>
                        {dark ? "Light Mode" : "Dark Mode"}
                    </button>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main
                className={`flex flex-col min-h-screen transition-all duration-300 ${sideOpen ? "ml-55" : "ml-0"
                    }`}
            >
                <header
                    className={`sticky w-full top-0 z-50 backdrop-blur-lg h-16 flex items-center justify-between px-5 border-b ${topbar}`}
                >
                    <div className="flex items-center gap-3">
                        <button
                            className={`md:hidden bg-white w-9 h-9 rounded-xl flex items-center justify-center transition-all ${iconBtn}`}
                            onClick={() => setSideOpen(!sideOpen)}
                        >
                            {IC.menu}
                        </button>

                        <h3 className="text-primary dark:text-white">Admin</h3>
                    </div>

                    <div className="flex items-center gap-2">
                        <Profile />
                    </div>
                </header>

                <main className="lg:p-6 p-4">
                    <Outlet />
                </main>
            </main>
        </div>
    );
}