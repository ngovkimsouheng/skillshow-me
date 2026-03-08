import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import IC from "./components/IC";
import Profile from "../../auth/Profile";
import Logo from "./components/LogoComponent";
import { BsEyeFill } from "react-icons/bs";
import { RiEyeCloseLine } from "react-icons/ri";
/* ── Logo ───────────────────────────────────────────────────────── */
import PreviewToggle from "./components/PreviewToggle";
/* ── Sidebar: plain item ────────────────────────────────────────── */
function SideItem({ to, label, icon }) {

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-all duration-150 text-left
        ${isActive ? "bg-white/[0.11] text-white" : "text-white/45 hover:bg-white/[0.07] hover:text-white/80"}`
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

/* ── Sidebar: collapsible group ─────────────────────────────────── */
function SideGroup({ id, label, icon, items, expanded, onToggle }) {
  const open = expanded === id;
  const navigate = useNavigate();

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
          className={`text-white/30 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          {IC.chevron}
        </span>
      </button>

      {/* Accordion */}
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
              className={({ isActive }) =>
                `w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-[12.5px] font-medium transition-all duration-150 text-left
                ${isActive ? "bg-white/[0.11] text-white" : "text-white/38 hover:text-white/70 hover:bg-white/[0.05]"}`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? "bg-white/80" : "bg-white/20"}`}
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

/* ── Section label ──────────────────────────────────────────────── */
const SideSection = ({ label }) => (
  <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/25 px-3 pt-4 pb-1.5">
    {label}
  </p>
);

/* ══════════════════════════════════════════════════════════════════
   DASHBOARD  (Layout)
══════════════════════════════════════════════════════════════════ */
export default function Dashboard() {
  const [dark, setDark] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);
  const [expanded, setExpanded] = useState("dash-group");

  const [profOpen, setProfOpen] = useState(false);

  const tog = (id) => setExpanded((p) => (p === id ? "" : id));

  /* ── theme tokens ── */
  const bg = dark ? "#0f1923" : "#f4f4e7";
  const topbar = dark
    ? "bg-[#0f1923]/90 border-white/[0.07]"
    : "bg-[#f4f4e7]/90 border-black/[0.07]";
  const iconBtn = dark
    ? "bg-white/[0.05] border border-white/[0.08] text-white/50 hover:bg-white/[0.1] hover:text-white"
    : "bg-black/[0.04] border border-black/[0.07] text-[#1e2e3e]/40 hover:bg-black/[0.08] hover:text-[#1e2e3e]";
  const inputCls = dark
    ? "bg-white/[0.05] border-white/[0.09] text-white placeholder-white/25 focus:border-blue-500/50"
    : "bg-black/[0.04] border-black/[0.08] text-[#1e2e3e] placeholder-[#596378]/50 focus:border-blue-500/40 focus:bg-blue-50/40";
  const textH = dark ? "text-white" : "text-[#1e2e3e]";

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: bg,
        minHeight: "100vh",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');`}</style>

      {/* ── Mobile overlay ── */}
      {sideOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setSideOpen(false)}
        />
      )}

      {/* ════════════ SIDEBAR ════════════ */}
      <aside
        className={`fixed top-0 left-0 h-screen w-55 z-50 flex flex-col
          transition-transform duration-300 ease-in-out
          ${sideOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        style={{ background: "#1e2e3e" }}
      >
        {/* Logo */}
        <div
          className="flex items-center justify-between px-5 py-5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <NavLink to="/" className="flex items-center gap-3">
            <Logo />
          </NavLink>
          <button
            className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all"
            onClick={() => setSideOpen(false)}
          >
            {IC.close}
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-0.5">
          {/* DASHBOARD section */}
          <SideSection label="Dashboard" />
          {/* <SideItem to="/dashboard" label="Overview" icon="home" /> */}
          <SideGroup
            id="dash-group"
            label="My Dashboard"
            icon="dashboard"
            expanded={expanded}
            onToggle={tog}
            items={[
              // {
              //   to: "/dashboard/edit-template/:templateId",
              //   label: "Template",
              // },
              { to: "/dashboard/template", label: "Template" },
              { to: "/dashboard/favorites", label: "Favorites" },
            ]}
          />   <SideGroup
            id="create-group"
            label="Create"
            icon="create"
            expanded={expanded}
            onToggle={tog}
            items={[
              { to: "/dashboard/create-skill", label: "Skill" },
              { to: "/dashboard/create-job", label: "Job" },
              { to: "/dashboard/create-education", label: "Education" },
              { to: "/dashboard/create-project", label: "Project" },
              { to: "/dashboard/create-social-account", label: "Social account" },
            ]}
          />
          <SideGroup
            id="update-group"
            label="Edit"
            icon="edit"
            expanded={expanded}
            onToggle={tog}
            items={[
              { to: "/dashboard/Edit-skill", label: "Skill" },
              { to: "/dashboard/Edit-job", label: "Job" },
              { to: "/dashboard/Edit-education", label: "Education" },
              { to: "/dashboard/Edit-project", label: "Project" },
              { to: "/dashboard/Edit-socail-account", label: "Socail account" },
            ]}
          />{" "}

        </nav>

        {/* preview*/}
        <PreviewToggle />
      </aside>

      {/* ════════════ MAIN ════════════ */}
      <main className="md:ml-53 flex flex-col min-h-screen">

        <header
          className={`sticky top-0 z-30 h-16 flex items-center justify-between px-5 border-b backdrop-blur-xl ${topbar}`}
        >
          {/* Left */}
          <div className="flex items-center gap-3">
            <button
              className={`md:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-all ${iconBtn}`}
              onClick={() => setSideOpen(true)}
            >
              {IC.menu}
            </button>
            <div className="relative">
              <h3 className="text-primary">Dashboard</h3>
              {/* <span
                className={`absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ${dark ? "text-white/30" : "text-[#596378]/50"}`}
              >
                {IC.search}
              </span>
              <input
                className={`pl-9 pr-4 py-2 rounded-xl text-[13px] border outline-none w-44 sm:w-56 transition-all duration-200 focus:w-60 sm:focus:w-72 ${inputCls}`}
                style={{ fontFamily: "Poppins, sans-serif" }}
                placeholder="Search…"
              /> */}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            {/* Dark mode */}
            {/* <button
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${iconBtn}`}
              onClick={() => setDark((d) => !d)}
              title={dark ? "Light mode" : "Dark mode"}
            >
              {dark ? IC.sun : IC.moon}
            </button> */}

            {/* Bell */}
            {/* <div
              className={`relative w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer transition-all ${iconBtn}`}
            >
              {IC.bell}
              <span
                className="absolute top-[7px] right-[7px] w-2 h-2 bg-red-400 rounded-full border-2"
                style={{ borderColor: dark ? "#0f1923" : "#f4f4e7" }}
              />
            </div> */}

            {/* Profile */}
            <div className="relative">
              <Profile />
            </div>
          </div>
        </header>

        {/* ── Outlet: child pages render here ── */}
        <main className="px-6 pt-6">

          <Outlet context={{ dark }} />
        </main>

      </main>
    </div>
  );

