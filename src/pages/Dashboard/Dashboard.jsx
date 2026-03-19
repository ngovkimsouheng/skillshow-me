// import { useState } from "react";
// import { Outlet, NavLink, useParams } from "react-router-dom";
// import IC from "./components/IC";
// import Profile from "../../auth/Profile";
// import Logo from "./components/LogoComponent";
// import PortfolioPreviewModal from "./components/PortfolioPreviewModal";
// import PreviewToggle from "./components/PreviewToggle";
// import { templates } from "../../portfolios/templates";

// /* ── Sidebar item ── */
// function SideItem({ to, label, icon, closeSidebarOnMobile }) {
//   return (
//     <NavLink
//       to={to}
//       onClick={closeSidebarOnMobile}
//       className={({ isActive }) =>
//         `relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-all duration-150 text-left
//         ${isActive
//           ? "bg-white/[0.11] text-white"
//           : "text-white/45 hover:bg-white/[0.07] hover:text-white/80"
//         }`
//       }
//     >
//       {({ isActive }) => (
//         <>
//           {isActive && (
//             <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[18px] bg-white/80 rounded-r-full" />
//           )}
//           <span className={isActive ? "text-white/90" : "text-white/40"}>
//             {IC[icon]}
//           </span>
//           {label}
//         </>
//       )}
//     </NavLink>
//   );
// }

// /* ── Sidebar group ── */
// function SideGroup({
//   id,
//   label,
//   icon,
//   items,
//   expanded,
//   onToggle,
//   closeSidebarOnMobile,
// }) {
//   const open = expanded.includes(id);

//   return (
//     <div>
//       <button
//         onClick={() => onToggle(id)}
//         className="relative w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-all duration-150 text-left text-white/45 hover:bg-white/[0.07] hover:text-white/80"
//       >
//         <div className="flex items-center gap-3">
//           <span className="text-white/40">{IC[icon]}</span>
//           {label}
//         </div>

//         <span
//           className={`text-white/30 transition-transform duration-200 ${open ? "rotate-180" : ""
//             }`}
//         >
//           {IC.chevron}
//         </span>
//       </button>

//       <div
//         className="overflow-hidden transition-all duration-200 ease-in-out"
//         style={{
//           maxHeight: open ? `${items.length * 52}px` : "0px",
//           opacity: open ? 1 : 0,
//         }}
//       >
//         <div
//           className="ml-3 mt-0.5 pl-3 pb-1 space-y-0.5"
//           style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}
//         >
//           {items.map((c) => (
//             <NavLink
//               key={c.to}
//               to={c.to}
//               onClick={closeSidebarOnMobile}
//               className={({ isActive }) =>
//                 `w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-[12.5px] font-medium transition-all duration-150 text-left
//                 ${isActive
//                   ? "bg-white/[0.11] text-white"
//                   : "text-white/38 hover:text-white/70 hover:bg-white/[0.05]"
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <>
//                   <span
//                     className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? "bg-white/80" : "bg-white/20"
//                       }`}
//                   />
//                   {c.label}
//                 </>
//               )}
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ── Section label ── */
// const SideSection = ({ label }) => (
//   <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/25 px-3 pt-4 pb-1.5">
//     {label}
//   </p>
// );

// /* ══════════════════════════════════ DASHBOARD ══════════════════════════════════ */
// export default function Dashboard() {
//   const { id } = useParams();

//   const template = templates.find((t) => t.id === Number(id));

//   if (id && !template) return <div>No template</div>;

//   const [dark, setDark] = useState(false);
//   const [sideOpen, setSideOpen] = useState(true);
//   const [expanded, setExpanded] = useState([]);
//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [selectedTemplate, setSelectedTemplate] = useState("template1");
//   const [previewDevice, setPreviewDevice] = useState("desktop");

//   const closeSidebarOnMobile = () => {
//     if (window.innerWidth < 768) {
//       setSideOpen(false);
//     }
//   };

//   const tog = (id) => {
//     setExpanded((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//     );
//   };

//   /* ── theme tokens ── */
//   const bg = dark ? "#0f1923" : "#f4f4e7";
//   const topbar = dark
//     ? "bg-[#0f1923]/90 border-white/[0.07]"
//     : "bg-[#f4f4e7]/90 border-black/[0.07]";
//   const iconBtn = dark
//     ? "bg-white/[0.05] border border-white/[0.08] text-white/50 hover:bg-white/[0.1] hover:text-white"
//     : "bg-black/[0.04] border border-black/[0.07] text-[#1e2e3e]/40 hover:bg-black/[0.08] hover:text-[#1e2e3e]";

//   return (
//     <div
//       style={{
//         fontFamily: "'Poppins', sans-serif",
//         background: bg,
//         minHeight: "100vh",
//       }}
//     >
//       <style>
//         {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');`}
//       </style>

//       {/* Mobile overlay */}
//       {sideOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
//           onClick={() => setSideOpen(false)}
//         />
//       )}

//       {/* SIDEBAR */}
//       <aside
//         className={`fixed bg-primary text-white top-0 left-0 h-screen w-55 z-50 flex flex-col transition-transform duration-300 ease-in-out
//           ${sideOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         {/* Logo */}
//         <div
//           className="flex items-center justify-between px-5 py-2"
//           style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
//         >
//           <NavLink to="/" className="flex items-center gap-3">
//             <Logo />
//           </NavLink>

//           <button
//             className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center bg-white text-primary transition-all"
//             onClick={() => setSideOpen(false)}
//           >
//             {IC.close}
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-0.5">
//           <SideSection label="Dashboard" />

//           <SideGroup
//             id="overview"
//             label="Template"
//             icon="template"
//             expanded={expanded}
//             onToggle={tog}
//             closeSidebarOnMobile={closeSidebarOnMobile}
//             items={[{ to: "/dashboard/overview", label: "Overview" }]}
//           />

//           <SideGroup
//             id="create-group"
//             label="Create"
//             icon="create"
//             expanded={expanded}
//             onToggle={tog}
//             closeSidebarOnMobile={closeSidebarOnMobile}
//             items={[
//               { to: "/dashboard/create-job", label: "Experience" },
//               { to: "/dashboard/create-project", label: "Project" },
//               { to: "/dashboard/create-education", label: "Education" },
//               { to: "/dashboard/create-skill", label: "Skill" },
//               {
//                 to: "/dashboard/create-social-account",
//                 label: "Social Account",
//               },
//             ]}
//           />

//           <SideGroup
//             id="template"
//             label="Edit"
//             icon="edit"
//             expanded={expanded}
//             onToggle={tog}
//             closeSidebarOnMobile={closeSidebarOnMobile}
//             items={[
//               { to: "/dashboard/portfolio/1", label: "Portfolio1" },
//               { to: "/dashboard/portfolio/2", label: "Portfolio2" },
//               { to: "/dashboard/portfolio/3", label: "Portfolio3" },
//               // {
//               //   to: id
//               //     ? `/dashboard/portfolio/1`
//               //     : "/dashboard/overview",
//               //   label: "Edit",
//               // },
//             ]}
//           />
//         </nav>

//         <PreviewToggle setPreviewOpen={setPreviewOpen} />
//       </aside>

//       {/* MAIN CONTENT */}
//       <main
//         className={`flex flex-col min-h-screen transition-all duration-300 ${sideOpen ? "ml-55" : "ml-0"
//           }`}
//       >
//         <header
//           className={`sticky w-full top-0 z-50 backdrop-blur-lg h-16 flex items-center justify-between px-5 border-b ${topbar}`}
//         >
//           <div className="flex items-center gap-3">
//             <button
//               className={`md:hidden bg-white w-9 h-9 rounded-xl flex items-center justify-center transition-all ${iconBtn}`}
//               onClick={() => setSideOpen(!sideOpen)}
//             >
//               {IC.menu}
//             </button>

//             <h3 className="text-primary dark:text-white">Dashboard</h3>
//           </div>

//           <div className="flex items-center gap-2">
//             <Profile />
//           </div>
//         </header>

//         <main className="lg:p-6 p-4">
//           <Outlet context={{ dark }} />

//           {previewOpen && (
//             <PortfolioPreviewModal
//               onClose={() => setPreviewOpen(false)}
//               template={selectedTemplate}
//               setTemplate={setSelectedTemplate}
//               device={previewDevice}
//               setDevice={setPreviewDevice}
//             />
//           )}
//         </main>
//       </main>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { Outlet, NavLink, useParams, useLocation, useNavigate } from "react-router-dom";
import IC from "./components/IC";
import Profile from "../../auth/Profile";
import Logo from "./components/LogoComponent";
import PortfolioPreviewModal from "./components/PortfolioPreviewModal";
import PreviewToggle from "./components/PreviewToggle";
import { useGetMeQuery } from "../../api/authApi";
import { useSelector } from "react-redux";
import { selectToken } from "../../api/authSlice";
import { templates } from "../../portfolios/templates";

/* ── Sidebar item ── */
function SideItem({ to, label, icon, closeSidebarOnMobile }) {
  return (
    <NavLink
      to={to}
      onClick={closeSidebarOnMobile}
      className={({ isActive }) =>
        `relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-all duration-150 text-left
        ${isActive
          ? "bg-white/[0.11] text-white"
          : "text-white/45 hover:bg-white/[0.07] hover:text-white/80"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[18px] bg-white/80 rounded-r-full" />
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
        className="relative w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-all duration-150 text-left text-white/45 hover:bg-white/[0.07] hover:text-white/80"
      >
        <div className="flex items-center gap-3">
          <span className="text-white/40">{IC[icon]}</span>
          {label}
        </div>

        <span
          className={`text-white/30 transition-transform duration-200 ${open ? "rotate-180" : ""
            }`}
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
                  ? "bg-white/[0.11] text-white"
                  : "text-white/38 hover:text-white/70 hover:bg-white/[0.05]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? "bg-white/80" : "bg-white/20"
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
  <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/25 px-3 pt-4 pb-1.5">
    {label}
  </p>
);

/* ══════════════════════════════════ DASHBOARD ══════════════════════════════════ */
export default function Dashboard() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const template = templates.find((t) => t.id === Number(id));

  /* ── Hooks: always at top ── */
  const [dark, setDark] = useState(false);
  const [sideOpen, setSideOpen] = useState(true);
  const [expanded, setExpanded] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("template1");
  const [previewDevice, setPreviewDevice] = useState("desktop");

  const { data: user } = useGetMeQuery();

  const token = useSelector(selectToken);

  // Check if user is logged in
  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Access Restricted</h1>
          <p className="text-lg mb-6 text-gray-600">You need to log in to access the dashboard and use the features of this website.</p>
          <NavLink to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
            Go to Login
          </NavLink>
        </div>
      </div>
    );
  }

  // Redirect admin users to admin dashboard
  useEffect(() => {
    if (user?.data?.role === 'admin') {
      navigate('/admin');
    }
  }, [user, navigate]);

  // 🔴 SYNC PREVIEW WITH CURRENT PORTFOLIO ROUTE
  useEffect(() => {
    // Extract portfolio number from URL path
    const portfolioMatch = location.pathname.match(/\/dashboard\/portfolio\/(\d+)/);
    if (portfolioMatch) {
      const portfolioNum = portfolioMatch[1];
      setSelectedTemplate(`template${portfolioNum}`);
    }
  }, [location.pathname]);

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

  const isAdmin =
    user?.data?.role === "admin" ||
    user?.data?.email === "adminskillshow@gmail.com"; // fallback when role is null


  /* ── Early return only after hooks ── */
  // if (id && !template) return <div>No template</div>;

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
          <SideSection label={isAdmin ? "Admin Panel" : "Dashboard"} />

          {isAdmin ? (
            <>
              <SideGroup
                id="admin-users"
                label="Users"
                icon="users"
                expanded={expanded}
                onToggle={tog}
                closeSidebarOnMobile={closeSidebarOnMobile}
                items={[
                  { to: "/dashboard/admin/users", label: "All Users" },
                  // { to: "/dashboard/admin/analytics", label: "Analytics" },
                ]}
              />

              <SideGroup
                id="admin-content"
                label="Content"
                icon="create"
                expanded={expanded}
                onToggle={tog}
                closeSidebarOnMobile={closeSidebarOnMobile}
                items={[
                  { to: "/dashboard/admin/contacts", label: "Contacts" },
                  { to: "/dashboard/admin/jobs", label: "Jobs" },
                  { to: "/dashboard/admin/projects", label: "Projects" },
                  { to: "/dashboard/admin/skills", label: "Skills" },
                  { to: "/dashboard/admin/socails", label: "Socails" },
                  // { to: "/dashboard/admin/portfolios", label: "Portfolios" },
                  // { to: "/dashboard/admin/settings", label: "Settings" },
                ]}
              />

              <SideGroup
                id="admin-system"
                label="System"
                icon="analytics"
                expanded={expanded}
                onToggle={tog}
                closeSidebarOnMobile={closeSidebarOnMobile}
                items={[
                  { to: "/dashboard/admin/logs", label: "System Logs" },
                  { to: "/dashboard/admin/backup", label: "Backup" },
                ]}
              />
            </>
          ) : (
            <>
              <SideGroup
                id="overview"
                label="Overview"
                icon="template"
                expanded={expanded}
                onToggle={tog}
                closeSidebarOnMobile={closeSidebarOnMobile}
                items={[{ to: "/dashboard/overview", label: "Overview" }]}
              />

              <SideGroup
                id="create-group"
                label="Create"
                icon="create"
                expanded={expanded}
                onToggle={tog}
                closeSidebarOnMobile={closeSidebarOnMobile}
                items={[
                  { to: "/dashboard/create-job", label: "Experience" },
                  { to: "/dashboard/create-project", label: "Project" },
                  { to: "/dashboard/create-education", label: "Education" },
                  { to: "/dashboard/create-skill", label: "Skill" },
                  { to: "/dashboard/create-social-account", label: "Social Account" },
                ]}
              />

              <SideGroup
                id="template"
                label="Edit"
                icon="edit"
                expanded={expanded}
                onToggle={tog}
                closeSidebarOnMobile={closeSidebarOnMobile}
                items={[
                  { to: "/dashboard/portfolio/1", label: "Portfolio1" },
                  { to: "/dashboard/portfolio/2", label: "Portfolio2" },
                  { to: "/dashboard/portfolio/3", label: "Portfolio3" },
                  { to: "/dashboard/portfolio/4", label: "Portfolio4" },
                ]}
              />
            </>
          )}

          {/* {isAdmin && (
            <SideGroup
              id="admin"
              label="Admin"
              icon="users"
              expanded={expanded}
              onToggle={tog}
              closeSidebarOnMobile={closeSidebarOnMobile}
              items={[
                { to: "/admin", label: "Full Admin Dashboard" },
              ]}
            />
          )} */}
        </nav>

        <PreviewToggle setPreviewOpen={setPreviewOpen} />
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

            <h3 className="text-primary dark:text-white">
              {isAdmin ? "Admin Dashboard" : "Dashboard"}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <Profile />
          </div>
        </header>

        <main className="lg:p-6 p-4">
          <Outlet context={{ dark }} />

          {previewOpen && (
            <PortfolioPreviewModal
              onClose={() => setPreviewOpen(false)}
              template={selectedTemplate}
              setTemplate={setSelectedTemplate}
              device={previewDevice}
              setDevice={setPreviewDevice}
            />
          )}
        </main>
      </main>
    </div>
  );
}