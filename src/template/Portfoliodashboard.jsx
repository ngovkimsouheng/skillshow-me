// ============================================================
//  PortfolioDashboard.jsx
//
//  NEW FEATURE: Click-to-edit sections in the live preview.
//  - Hover any section in the preview → border highlight + "Edit" button appears
//  - Click it → editor panel jumps to that section's fields
//  - Active section being edited is highlighted in blue in the preview
// ============================================================

import { useState } from "react";
import {
  FiHome, FiUser, FiBriefcase, FiMessageSquare,
  FiDroplet, FiMenu, FiX, FiEye, FiEdit2,
  FiChevronLeft, FiCheck, FiEdit3,
} from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

// ─────────────────────────────────────────────
// THEMES & FONTS
// ─────────────────────────────────────────────
const COLOR_THEMES = [
  { label: "Default", bg: "#ffffff", text: "#0a0a0a", accent: "#f97316", card: "#f9fafb", gradient: "linear-gradient(to right, #f97316, #a855f7)" },
  { label: "Midnight", bg: "#0a0a0a", text: "#f5f5f5", accent: "#a855f7", card: "#1a1a1a", gradient: "linear-gradient(to right, #a855f7, #3b82f6)" },
  { label: "Ocean", bg: "#0d1b2a", text: "#e8f0fe", accent: "#4f8ef7", card: "#152336", gradient: "linear-gradient(to right, #4f8ef7, #06b6d4)" },
  { label: "Sage", bg: "#f2f5f0", text: "#1e2d1e", accent: "#3d6b3d", card: "#e5ebe0", gradient: "linear-gradient(to right, #3d6b3d, #84cc16)" },
  { label: "Crimson", bg: "#1a0a0a", text: "#fdf0f0", accent: "#e84040", card: "#2a1010", gradient: "linear-gradient(to right, #e84040, #f97316)" },
  { label: "Sand", bg: "#fdf6ec", text: "#3a2e1e", accent: "#c47c2b", card: "#f5ead5", gradient: "linear-gradient(to right, #c47c2b, #f97316)" },
];

const FONT_OPTIONS = [
  { label: "Poppins", value: "'Poppins', sans-serif" },
  { label: "Playfair Display", value: "'Playfair Display', serif" },
  { label: "Space Grotesk", value: "'Space Grotesk', sans-serif" },
  { label: "DM Serif Display", value: "'DM Serif Display', serif" },
  { label: "Syne", value: "'Syne', sans-serif" },
];

// ─────────────────────────────────────────────
// DEFAULT DATA — replace with your API GET
// ─────────────────────────────────────────────
const DEFAULT_DATA = {
  user: {
    first_name: "Alon",
    last_name: "Portoz",
    about_me: "I'm a passionate designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life.",
    about_me_2: "I began my journey as a web developer in 2015, and since then I've continued to grow and evolve as a developer.",
    about_me_3: "Now, 7 years later, I'm building cutting-edge web applications using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.",
    email: "info@portfolio.com",
    phone: "+(123) 456 789 00",
  },
  jobs: [
    { id: 1, company_name: "SPOTIFY", role: "Senior Product Designer", started_at: "2023", ended_at: "", is_ended: false, color: "from-green-400 to-emerald-500" },
    { id: 2, company_name: "NETFLIX", role: "User Experience Designer", started_at: "2022", ended_at: "2023", is_ended: true, color: "from-red-500 to-rose-600" },
    { id: 3, company_name: "SALESFORCE", role: "User Interface Designer", started_at: "2020", ended_at: "2022", is_ended: true, color: "from-blue-400 to-cyan-500" },
    { id: 4, company_name: "FACEBOOK", role: "Senior Graphic Designer", started_at: "2017", ended_at: "2020", is_ended: true, color: "from-blue-600 to-indigo-700" },
    { id: 5, company_name: "INSTAGRAM", role: "Senior Graphic Designer", started_at: "2015", ended_at: "2017", is_ended: true, color: "from-pink-500 to-purple-500" },
  ],
};

// ─────────────────────────────────────────────
// CLICKABLE SECTION WRAPPER
//
// Wraps each preview section. On hover:
//   - shows a colored border outline
//   - shows a small floating "Edit" button
// On click:
//   - calls onEdit(sectionKey) → switches editor panel to that section
// The `isActive` prop highlights the section currently being edited.
// ─────────────────────────────────────────────
function EditableSection({ sectionKey, activeSection, onEdit, children }) {
  const [hovered, setHovered] = useState(false);
  const isActive = activeSection === sectionKey;

  return (
    <div
      className="relative transition-all duration-200"
      style={{
        // Blue outline when this section is being edited
        // Orange outline when just hovering
        outline: isActive
          ? "2px solid #3b82f6"
          : hovered
            ? "2px dashed #f97316"
            : "2px solid transparent",
        outlineOffset: "-2px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onEdit(sectionKey)}
    >
      {children}

      {/* Floating "Edit" button — appears on hover or when active */}
      {(hovered || isActive) && (
        <div
          className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest cursor-pointer shadow-lg transition-all"
          style={{
            background: isActive ? "#3b82f6" : "#f97316",
            color: "#fff",
          }}
          onClick={(e) => { e.stopPropagation(); onEdit(sectionKey); }}
        >
          <FiEdit3 size={10} />
          {isActive ? "Editing" : "Edit"}
        </div>
      )}

      {/* Section label badge — top left, shown on hover */}
      {hovered && !isActive && (
        <div
          className="absolute top-3 left-3 z-20 px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-widest"
          style={{ background: "#f97316", color: "#fff" }}
        >
          {sectionKey}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// REUSABLE FIELD
// ─────────────────────────────────────────────
function Field({ label, value, onChange, multiline = false, placeholder, disabled = false }) {
  const cls = "w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed resize-none";
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{label}</label>
      {multiline
        ? <textarea value={value} onChange={e => onChange(e.target.value)} rows={3} className={cls} placeholder={placeholder} disabled={disabled} />
        : <input value={value} onChange={e => onChange(e.target.value)} className={cls} placeholder={placeholder} disabled={disabled} />
      }
    </div>
  );
}

function EditorTitle({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h2 className="text-base font-black text-white">{title}</h2>
      <p className="text-xs text-zinc-600 mt-0.5">{subtitle}</p>
    </div>
  );
}

// ─────────────────────────────────────────────
// SECTION EDITORS
// ─────────────────────────────────────────────
function HomeEditor({ data, setData }) {
  const set = (f, v) => setData(d => ({ ...d, user: { ...d.user, [f]: v } }));
  return (
    <div className="flex flex-col gap-4">
      <EditorTitle title="Home Section" subtitle="Edit your hero banner" />
      <Field label="First Name" value={data.user.first_name} onChange={v => set("first_name", v)} />
      <Field label="Last Name" value={data.user.last_name} onChange={v => set("last_name", v)} />
    </div>
  );
}

function AboutEditor({ data, setData }) {
  const set = (f, v) => setData(d => ({ ...d, user: { ...d.user, [f]: v } }));
  return (
    <div className="flex flex-col gap-4">
      <EditorTitle title="About Section" subtitle="Edit your bio paragraphs" />
      <Field label="Paragraph 1" value={data.user.about_me} onChange={v => set("about_me", v)} multiline />
      <Field label="Paragraph 2" value={data.user.about_me_2} onChange={v => set("about_me_2", v)} multiline />
      <Field label="Paragraph 3" value={data.user.about_me_3} onChange={v => set("about_me_3", v)} multiline />
    </div>
  );
}

function ExperienceEditor({ data, setData }) {
  const updateJob = (id, f, v) =>
    setData(d => ({ ...d, jobs: d.jobs.map(j => j.id === id ? { ...j, [f]: v } : j) }));
  const removeJob = id =>
    setData(d => ({ ...d, jobs: d.jobs.filter(j => j.id !== id) }));
  const addJob = () =>
    setData(d => ({ ...d, jobs: [...d.jobs, { id: Date.now(), company_name: "", role: "", started_at: "", ended_at: "", is_ended: false, color: "from-gray-400 to-gray-600" }] }));

  return (
    <div className="flex flex-col gap-4">
      <EditorTitle title="Experience" subtitle="Manage your work history" />
      {data.jobs.map(job => (
        <div key={job.id} className="border border-zinc-800 rounded-xl p-4 flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <Field label="Company" value={job.company_name} onChange={v => updateJob(job.id, "company_name", v)} />
            <Field label="Role" value={job.role} onChange={v => updateJob(job.id, "role", v)} />
            <Field label="Started" value={job.started_at} onChange={v => updateJob(job.id, "started_at", v)} placeholder="2021" />
            <Field label="Ended" value={job.ended_at} onChange={v => updateJob(job.id, "ended_at", v)} placeholder="2023" disabled={!job.is_ended} />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input type="checkbox" checked={job.is_ended}
                onChange={e => updateJob(job.id, "is_ended", e.target.checked)}
                className="accent-white w-3.5 h-3.5" />
              <span className="text-xs text-zinc-500">Role has ended</span>
            </label>
            <button onClick={() => removeJob(job.id)}
              className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors">
              Remove
            </button>
          </div>
        </div>
      ))}
      <button onClick={addJob}
        className="w-full py-3 border border-dashed border-zinc-700 rounded-xl text-xs font-black text-zinc-600 hover:border-zinc-400 hover:text-white transition-colors uppercase tracking-widest">
        + Add Role
      </button>
    </div>
  );
}

function ContactEditor({ data, setData }) {
  const set = (f, v) => setData(d => ({ ...d, user: { ...d.user, [f]: v } }));
  return (
    <div className="flex flex-col gap-4">
      <EditorTitle title="Contact Section" subtitle="Edit your contact info" />
      <Field label="Email" value={data.user.email} onChange={v => set("email", v)} />
      <Field label="Phone" value={data.user.phone} onChange={v => set("phone", v)} />
    </div>
  );
}

function StyleEditor({ theme, setTheme, font, setFont }) {
  return (
    <div className="flex flex-col gap-6">
      <EditorTitle title="Style & Theme" subtitle="Customize colors and fonts" />

      {/* Font picker */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3">Font Family</p>
        <div className="grid grid-cols-2 gap-2">
          {FONT_OPTIONS.map(f => (
            <button key={f.value} onClick={() => setFont(f.value)}
              style={{ fontFamily: f.value }}
              className={`px-3 py-2 rounded-lg text-sm text-left border transition-all ${font === f.value ? "bg-white text-black border-white" : "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-500"}`}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Color presets */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3">Color Themes</p>
        <div className="grid grid-cols-3 gap-2">
          {COLOR_THEMES.map(t => (
            <button key={t.label} onClick={() => setTheme(t)}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${theme.label === t.label ? "border-white" : "border-zinc-800 hover:border-zinc-600"}`}>
              <div className="flex gap-1">
                {[t.bg, t.text, t.accent].map((c, i) => (
                  <div key={i} style={{ background: c }} className="w-4 h-4 rounded-full border border-zinc-700" />
                ))}
              </div>
              <span className="text-[10px] text-zinc-500 font-bold">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Custom color pickers */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3">Custom Colors</p>
        <div className="grid grid-cols-2 gap-3">
          {[["Background", "bg"], ["Text", "text"], ["Accent", "accent"], ["Card BG", "card"]].map(([lbl, key]) => (
            <div key={key} className="flex flex-col gap-1.5">
              <label className="text-[9px] uppercase tracking-widest text-zinc-600">{lbl}</label>
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2">
                <input type="color" value={theme[key]}
                  onChange={e => setTheme(p => ({ ...p, label: "Custom", [key]: e.target.value }))}
                  className="w-5 h-5 cursor-pointer bg-transparent border-0 p-0 shrink-0" />
                <span className="text-xs text-zinc-600 font-mono">{theme[key]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// LIVE PREVIEW
//
// Each section is wrapped in <EditableSection>.
// Hovering shows a highlight + "Edit" button.
// Clicking calls onSectionClick(key) which updates
// the active editor in the parent Dashboard.
// ─────────────────────────────────────────────
function LivePreview({ data, theme: t, font, activeSection, onSectionClick }) {
  const fullName = `${data.user.first_name} ${data.user.last_name}`.toUpperCase();

  return (
    <div style={{ background: t.bg, color: t.text, fontFamily: font }}
      className="h-full overflow-y-auto transition-all duration-300">

      {/* 
        HINT BAR — explains click-to-edit to the user 
        Only shown when no section is actively being edited yet
      */}
      {!activeSection || activeSection === "style" ? (
        <div className="sticky top-0 z-30 flex items-center justify-center gap-2 py-2 text-[10px] font-black uppercase tracking-widest"
          style={{ background: "#f97316", color: "#fff" }}>
          <FiEdit3 size={11} />
          Click any section below to edit it
        </div>
      ) : (
        <div className="sticky top-0 z-30 flex items-center justify-center gap-2 py-2 text-[10px] font-black uppercase tracking-widest"
          style={{ background: "#3b82f6", color: "#fff" }}>
          <FiEdit3 size={11} />
          Editing: {activeSection} — click another section to switch
        </div>
      )}

      {/* ── Navbar (not editable, just UI) ── */}
      <nav style={{ background: t.bg, borderBottomColor: t.card }}
        className="border-b px-6 py-4 flex items-center justify-between">
        <span style={{ color: t.text }} className="text-base font-black uppercase tracking-widest">PORTOZ</span>
        <div className="hidden sm:flex items-center gap-6 text-xs font-semibold uppercase tracking-widest"
          style={{ color: t.text, opacity: 0.5 }}>
          {["About", "Experience", "Contact"].map(s => <span key={s}>{s}</span>)}
        </div>
      </nav>

      {/* ── HOME — click to edit ── */}
      <EditableSection sectionKey="home" activeSection={activeSection} onEdit={onSectionClick}>
        <section style={{ background: t.bg }} className="flex flex-col items-center text-center pt-8 pb-14 px-6">
          <div className="mt-4 mb-4 p-px rounded-xl" style={{ background: t.gradient }}>
            <div style={{ background: t.bg, color: t.text }}
              className="px-6 py-2 rounded-xl text-xs font-semibold tracking-widest uppercase">
              HELLO! I AM {fullName}
            </div>
          </div>
          <h1 style={{ color: t.text }}
            className="text-4xl md:text-5xl font-black leading-tight tracking-tight max-w-xl mb-6">
            Creative designer<br />& developer
          </h1>
          <div style={{ background: t.card }}
            className="relative z-10 mb-8 w-56 h-64 rounded-xl overflow-hidden flex items-center justify-center">
            <span style={{ color: t.text, opacity: 0.3 }} className="text-xs uppercase tracking-widest">Profile Photo</span>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="p-px rounded-full" style={{ background: t.gradient }}>
              <button style={{ background: t.bg, color: t.text }}
                className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
                DOWNLOAD CV ↗
              </button>
            </div>
            {["Dribbble", "Behance"].map(b => (
              <button key={b} style={{ borderColor: t.card, color: t.text }}
                className="px-4 py-2 border text-xs font-bold tracking-widest uppercase rounded-full">
                {b}
              </button>
            ))}
          </div>
        </section>
      </EditableSection>

      {/* ── MARQUEE BANNER (not editable) ── */}
      <div style={{ background: t.text }} className="py-5 w-full overflow-hidden">
        <style>{`@keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}.mq-r{animation:mq 16s linear infinite;display:flex;width:max-content}`}</style>
        <div className="mq-r">
          {[...Array(8)].map((_, i) => (
            <span key={i} style={{ color: t.bg }}
              className="text-xl mx-10 whitespace-nowrap font-bold tracking-tight flex items-center gap-10">
              Pixel-Perfect Design <span style={{ opacity: 0.3 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT — click to edit ── */}
      <EditableSection sectionKey="about" activeSection={activeSection} onEdit={onSectionClick}>
        <section style={{ background: t.bg }} className="px-6 py-12">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-10 items-center">
            <div style={{ background: t.card }}
              className="w-full md:w-56 h-48 rounded-xl shrink-0 flex items-center justify-center">
              <span style={{ color: t.text, opacity: 0.3 }} className="text-xs uppercase tracking-widest">Illustration</span>
            </div>
            <div className="flex-1">
              <h2 style={{ color: t.text }} className="text-3xl font-normal mb-5">
                About <span className="font-black">Me</span>
              </h2>
              {[data.user.about_me, data.user.about_me_2, data.user.about_me_3].map((p, i) => (
                <p key={i} style={{ color: t.text }} className="text-sm leading-relaxed opacity-60 mb-3">{p}</p>
              ))}
            </div>
          </div>
        </section>
      </EditableSection>

      {/* ── EXPERIENCE — click to edit ── */}
      <EditableSection sectionKey="experience" activeSection={activeSection} onEdit={onSectionClick}>
        <section style={{ background: t.card }} className="px-6 py-12">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-block mb-4 p-px rounded-md" style={{ background: t.gradient }}>
                <div style={{ background: t.card, color: t.text }}
                  className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest">
                  CORE EXPERIENCE
                </div>
              </div>
              <h2 style={{ color: t.text }} className="text-2xl font-black leading-tight mb-4">
                I blend creativity with<br />technical expertise
              </h2>
              <button style={{ background: t.text, color: t.bg }}
                className="px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest">
                BOOK A CALL ↗
              </button>
            </div>
            <div className="flex flex-col gap-5">
              {data.jobs.map(job => (
                <div key={job.id} style={{ borderBottomColor: t.bg }}
                  className="flex items-start justify-between border-b pb-5 last:border-0 last:pb-0">
                  <div>
                    <span className={`text-xs font-black uppercase tracking-widest bg-gradient-to-r ${job.color} bg-clip-text text-transparent block mb-1`}>
                      {job.company_name}
                    </span>
                    <h3 style={{ color: t.text }} className="text-sm font-bold">{job.role}</h3>
                  </div>
                  <span style={{ color: t.text }} className="text-xs opacity-30 font-mono ml-4 whitespace-nowrap mt-0.5">
                    {job.started_at}{job.ended_at ? ` – ${job.ended_at}` : " – Present"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </EditableSection>

      {/* ── CONTACT — click to edit ── */}
      <EditableSection sectionKey="contact" activeSection={activeSection} onEdit={onSectionClick}>
        <section style={{ background: t.bg }} className="px-6 py-12">
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block mb-4 p-px rounded-md" style={{ background: t.gradient }}>
                <div style={{ background: t.bg, color: t.text }}
                  className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest">
                  LET'S TALK
                </div>
              </div>
              <h2 style={{ color: t.text }} className="text-2xl font-black leading-tight mb-4">
                Let's create amazing<br />stuff together!
              </h2>
              <p style={{ color: t.text }} className="text-xs leading-relaxed opacity-50 mb-5">
                Have a project in mind? Reach out and I'll get back to you in 48 hours.
              </p>
              <div className="flex flex-col gap-3">
                <span style={{ color: t.text }} className="flex items-center gap-2 text-xs opacity-70">
                  <IoIosMail size={14} /> {data.user.email}
                </span>
                <span style={{ color: t.text }} className="flex items-center gap-2 text-xs opacity-70">
                  <FaPhone size={12} /> {data.user.phone}
                </span>
              </div>
            </div>
            {/* Contact form — static preview */}
            <div className="flex flex-col gap-4">
              <p style={{ color: t.text }} className="text-sm font-bold">Send a message</p>
              {["Name", "Email", "Phone"].map(lbl => (
                <div key={lbl} className="flex flex-col gap-1">
                  <label style={{ color: t.text }} className="text-xs opacity-50">{lbl}</label>
                  <div style={{ borderBottomColor: t.card }} className="border-b pb-2" />
                </div>
              ))}
              <button style={{ background: t.text, color: t.bg }}
                className="w-full py-3 rounded-lg text-xs font-black uppercase tracking-widest mt-1">
                SUBMIT NOW
              </button>
            </div>
          </div>
        </section>
      </EditableSection>

    </div>
  );
}

// ─────────────────────────────────────────────
// SAVE BUTTON — plug your RTK mutation here
// ─────────────────────────────────────────────
function SaveButton({ data, theme, font, templateId }) {
  const [status, setStatus] = useState("idle");

  const handleSave = async () => {
    setStatus("saving");
    try {
      // ── PLUG YOUR RTK MUTATION HERE ──
      // const [savePortfolio] = useSavePortfolioMutation();
      // await savePortfolio({ template_id: templateId, theme, font, ...data }).unwrap();
      await new Promise(r => setTimeout(r, 1200)); // fake delay — delete this
      console.log("Saving:", { template_id: templateId, theme, font, ...data });
      // ─────────────────────────────────
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  const styles = {
    idle: "bg-white text-black hover:bg-zinc-200",
    saving: "bg-zinc-700 text-white opacity-60",
    saved: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
  };

  return (
    <button onClick={handleSave} disabled={status === "saving"}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${styles[status]}`}>
      {status === "saved" && <FiCheck size={12} />}
      {status === "saving" ? "Saving..." : status === "saved" ? "Saved!" : status === "error" ? "Retry" : "Save"}
    </button>
  );
}

// ─────────────────────────────────────────────
// SIDEBAR NAV
// ─────────────────────────────────────────────
const NAV_ITEMS = [
  { key: "home", label: "Home", icon: FiHome },
  { key: "about", label: "About", icon: FiUser },
  { key: "experience", label: "Experience", icon: FiBriefcase },
  { key: "contact", label: "Contact", icon: FiMessageSquare },
  { key: "style", label: "Style", icon: FiDroplet },
];

function SidebarNav({ active, setActive, onClose }) {
  return (
    <div className="flex flex-col h-full">
      <div className="px-5 py-5 border-b border-zinc-800 flex items-center justify-between shrink-0">
        <div>
          <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Template Editor</p>
          <h1 className="text-sm font-black text-white mt-1 tracking-widest">PORTOZ</h1>
        </div>
        {onClose && (
          <button onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
            <FiX size={14} />
          </button>
        )}
      </div>
      <nav className="flex-1 p-3 flex flex-col gap-1 overflow-y-auto">
        {NAV_ITEMS.map(({ key, label, icon: Icon }) => (
          <button key={key}
            onClick={() => { setActive(key); onClose?.(); }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-black transition-all text-left w-full ${active === key ? "bg-white text-black" : "text-zinc-500 hover:bg-zinc-800 hover:text-white"
              }`}>
            <Icon size={13} />
            {label}
            {key === "style" && (
              <span className="ml-auto text-[8px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-500 font-black uppercase">New</span>
            )}
          </button>
        ))}
      </nav>

      {/* Click-to-edit legend */}
      <div className="p-4 border-t border-zinc-800 shrink-0">
        <div className="flex flex-col gap-2 text-[9px] text-zinc-600 font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded border-2 border-dashed border-orange-400 shrink-0" />
            Hover to highlight
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded border-2 border-blue-400 shrink-0" />
            Currently editing
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN DASHBOARD
// ─────────────────────────────────────────────
export default function PortfolioDashboard({ templateId = "template_2" }) {
  const [data, setData] = useState(DEFAULT_DATA);
  const [theme, setTheme] = useState(COLOR_THEMES[0]);
  const [font, setFont] = useState(FONT_OPTIONS[0].value);
  const [active, setActive] = useState("home");
  const [mobileTab, setMobileTab] = useState("editor");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Called when user clicks a section in the live preview.
  // Switches the editor panel to that section AND
  // on mobile automatically switches tab to "editor" so they can see the fields.
  const handleSectionClick = (sectionKey) => {
    setActive(sectionKey);
    setMobileTab("editor"); // on mobile: flip to editor view so fields are visible
  };

  const renderEditor = () => {
    switch (active) {
      case "home": return <HomeEditor data={data} setData={setData} />;
      case "about": return <AboutEditor data={data} setData={setData} />;
      case "experience": return <ExperienceEditor data={data} setData={setData} />;
      case "contact": return <ContactEditor data={data} setData={setData} />;
      case "style": return <StyleEditor theme={theme} setTheme={setTheme} font={font} setFont={setFont} />;
      default: return null;
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&family=Playfair+Display:wght@700;900&family=Space+Grotesk:wght@400;600;700&family=DM+Serif+Display&family=Syne:wght@600;700;800&display=swap');
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 99px; }
      `}</style>

      <div className="h-screen flex flex-col bg-zinc-950 overflow-hidden"
        style={{ fontFamily: "'Poppins', sans-serif" }}>

        {/* ═══ MOBILE TOP BAR ═══ */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800 shrink-0">
          <button onClick={() => setDrawerOpen(true)}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-800 text-zinc-300">
            <FiMenu size={15} />
          </button>
          <span className="text-sm font-black text-white tracking-widest">PORTOZ</span>
          <div className="flex bg-zinc-800 rounded-xl p-1 gap-1">
            <button onClick={() => setMobileTab("editor")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${mobileTab === "editor" ? "bg-white text-black" : "text-zinc-500"}`}>
              <FiEdit2 size={11} /> Edit
            </button>
            <button onClick={() => setMobileTab("preview")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${mobileTab === "preview" ? "bg-white text-black" : "text-zinc-500"}`}>
              <FiEye size={11} /> Preview
            </button>
          </div>
        </div>

        {/* ═══ MOBILE DRAWER ═══ */}
        {drawerOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setDrawerOpen(false)} />
            <div className="relative w-64 bg-zinc-900 border-r border-zinc-800 z-10">
              <SidebarNav active={active} setActive={setActive} onClose={() => setDrawerOpen(false)} />
            </div>
          </div>
        )}

        {/* ═══ MAIN LAYOUT ═══ */}
        <div className="flex flex-1 overflow-hidden">

          {/* Desktop sidebar */}
          <aside className="hidden lg:flex flex-col w-52 shrink-0 bg-zinc-900 border-r border-zinc-800">
            <SidebarNav active={active} setActive={setActive} />
          </aside>

          {/* Editor panel */}
          <div className={`${mobileTab === "editor" ? "flex" : "hidden"} lg:flex flex-col w-full lg:w-80 shrink-0 bg-zinc-900 border-r border-zinc-800`}>
            <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between shrink-0">
              <div>
                <p className="text-[9px] text-zinc-600 uppercase tracking-widest font-black">Editing</p>
                <h2 className="text-sm font-black text-white capitalize mt-0.5">{active} Section</h2>
              </div>
              <SaveButton data={data} theme={theme} font={font} templateId={templateId} />
            </div>
            <div className="flex-1 overflow-y-auto p-5">
              {renderEditor()}
            </div>
            {/* Mobile: jump to preview */}
            <div className="lg:hidden px-5 pb-4 shrink-0">
              <button onClick={() => setMobileTab("preview")}
                className="w-full py-3 bg-white text-black rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2">
                <FiEye size={13} /> View & Click to Edit
              </button>
            </div>
          </div>

          {/* Preview panel */}
          <div className={`${mobileTab === "preview" ? "flex" : "hidden"} lg:flex flex-col flex-1 min-w-0`}>
            {/* Browser chrome */}
            <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center gap-3 shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 bg-zinc-950 border border-zinc-800 rounded-md px-3 py-1 text-[10px] text-zinc-600 font-mono">
                portfolio-preview.local
              </div>
              <span className="hidden sm:block text-[9px] font-black uppercase tracking-widest text-zinc-600 px-2 py-1 rounded-md bg-zinc-950 border border-zinc-800 whitespace-nowrap">
                Live Preview
              </span>
            </div>
            {/* Mobile back button */}
            <div className="lg:hidden px-4 py-2 bg-zinc-900 border-b border-zinc-800 shrink-0">
              <button onClick={() => setMobileTab("editor")}
                className="flex items-center gap-2 text-xs font-black text-zinc-500 hover:text-white transition-colors uppercase tracking-widest">
                <FiChevronLeft size={12} /> Back to Editor
              </button>
            </div>
            {/* The preview itself */}
            <div className="flex-1 overflow-hidden">
              <LivePreview
                data={data}
                theme={theme}
                font={font}
                activeSection={active}
                onSectionClick={handleSectionClick}
              />
            </div>
          </div>

        </div>

        {/* ═══ MOBILE BOTTOM NAV ═══ */}
        <div className="lg:hidden flex shrink-0 bg-zinc-900 border-t border-zinc-800 px-1 py-1.5">
          {NAV_ITEMS.map(({ key, label, icon: Icon }) => (
            <button key={key}
              onClick={() => { setActive(key); setMobileTab("editor"); }}
              className={`flex-1 flex flex-col items-center justify-center gap-1 py-1.5 rounded-lg transition-all ${active === key ? "bg-zinc-800 text-white" : "text-zinc-600"}`}>
              <Icon size={14} />
              <span className="text-[8px] font-black uppercase tracking-wider leading-none">{label}</span>
            </button>
          ))}
        </div>

      </div>
    </>
  );
}
