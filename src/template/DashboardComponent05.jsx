// ============================================================
//  PortfolioDashboard.jsx
//  A beginner-friendly template editor with live preview.
//
//  HOW IT WORKS:
//  1. All editable content lives in ONE state object (portfolioData)
//  2. Every editor field updates that state in real time
//  3. LivePreview reads the same state → instant preview
//  4. Save button POSTs to your API via RTK Query
//
//  TO PLUG IN YOUR API:
//  - Replace `useSavePortfolioMutation` import with your real RTK hook
//  - Pass templateId as a prop or read from useParams()
// ============================================================

import { useState } from "react";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiStar,
  FiMessageSquare,
  FiDroplet,
  FiMenu,
  FiX,
  FiEye,
  FiEdit2,
  FiChevronLeft,
  FiCheck,
  FiLoader,
} from "react-icons/fi";

// ============================================================
// 1. COLOR THEMES
//    Each theme has 4 colors. Change hex values to customize.
//    Add more objects to the array to add more themes.
// ============================================================
const COLOR_THEMES = [
  {
    label: "Ivory",
    bg: "#faf8f3",
    text: "#1a1a1a",
    accent: "#1a1a1a",
    card: "#f0ede4",
  },
  {
    label: "Onyx",
    bg: "#0a0a0a",
    text: "#f5f5f5",
    accent: "#d4d4d4",
    card: "#1c1c1c",
  },
  {
    label: "Cobalt",
    bg: "#0d1b2a",
    text: "#e8f0fe",
    accent: "#4f8ef7",
    card: "#152336",
  },
  {
    label: "Sage",
    bg: "#f2f5f0",
    text: "#1e2d1e",
    accent: "#3d6b3d",
    card: "#e5ebe0",
  },
  {
    label: "Crimson",
    bg: "#1a0a0a",
    text: "#fdf0f0",
    accent: "#e84040",
    card: "#2a1010",
  },
  {
    label: "Sand",
    bg: "#fdf6ec",
    text: "#3a2e1e",
    accent: "#c47c2b",
    card: "#f5ead5",
  },
];

// ============================================================
// 2. FONT OPTIONS
//    Add any Google Font here. Just make sure to also add it
//    to the @import in the <style> tag at the bottom.
// ============================================================
const FONT_OPTIONS = [
  { label: "Poppins", value: "'Poppins', sans-serif" },
  { label: "Playfair Display", value: "'Playfair Display', serif" },
  { label: "Space Grotesk", value: "'Space Grotesk', sans-serif" },
  { label: "DM Serif Display", value: "'DM Serif Display', serif" },
  { label: "Syne", value: "'Syne', sans-serif" },
  { label: "Bebas Neue", value: "'Bebas Neue', cursive" },
];

// ============================================================
// 3. DEFAULT DATA
//    This is what fills the fields when the editor first opens.
//    In production, replace this with data fetched from your API.
// ============================================================
const DEFAULT_DATA = {
  home: {
    badge: "HELLO! I AM ALON PORTOZ",
    name: "ALON PORTOZ",
    title: "Creative designer & developer",
  },
  about: {
    p1: "I'm a passionate designer who specializes in full stack development (React.js & Node.js).",
    p2: "I began my journey as a web developer in 2015, and since then I've continued to grow.",
    p3: "Now, 7 years later, I'm building cutting-edge web applications used by thousands.",
  },
  experience: [
    {
      id: 1,
      company_name: "SPOTIFY",
      role: "Senior Product Designer",
      started_at: "2023",
      ended_at: "",
      is_ended: false,
    },
    {
      id: 2,
      company_name: "NETFLIX",
      role: "UX Designer",
      started_at: "2022",
      ended_at: "2023",
      is_ended: true,
    },
    {
      id: 3,
      company_name: "FACEBOOK",
      role: "Senior Graphic Designer",
      started_at: "2017",
      ended_at: "2022",
      is_ended: true,
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Evren Shah",
      role: "Designer",
      text: "Working with Alon was fantastic. Highly recommend!",
    },
    {
      id: 2,
      name: "Flora Sheen",
      role: "Developer",
      text: "Incredible attention to detail and creative vision.",
    },
  ],
  contact: {
    heading: "Let's create amazing stuff together!",
    email: "info@portfolio.com",
    phone: "+(123) 456 789 00",
  },
};

// ============================================================
// 4. REUSABLE INPUT FIELD
//    Used by all section editors below.
// ============================================================
function Field({
  label,
  value,
  onChange,
  multiline = false,
  placeholder,
  disabled = false,
}) {
  const inputClass =
    "w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed resize-none";

  return (
    <div className="flex flex-col gap-1.5">
      {/* Label above the input */}
      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
        {label}
      </label>

      {/* Textarea for long text, input for short text */}
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className={inputClass}
          placeholder={placeholder}
          disabled={disabled}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </div>
  );
}

// ============================================================
// 5. SECTION EDITORS
//    Each editor receives `data` and `setData` as props.
//    They update the shared portfolioData state directly.
// ============================================================

// --- Home ---
function HomeEditor({ data, setData }) {
  // Helper: update one field inside data.home
  const update = (field, value) =>
    setData((prev) => ({ ...prev, home: { ...prev.home, [field]: value } }));

  return (
    <div className="flex flex-col gap-4">
      <SectionTitle title="Home Section" subtitle="Edit your hero banner" />
      <Field
        label="Badge Text"
        value={data.home.badge}
        onChange={(v) => update("badge", v)}
      />
      <Field
        label="Your Name"
        value={data.home.name}
        onChange={(v) => update("name", v)}
      />
      <Field
        label="Hero Title"
        value={data.home.title}
        onChange={(v) => update("title", v)}
      />
    </div>
  );
}

// --- About ---
function AboutEditor({ data, setData }) {
  const update = (field, value) =>
    setData((prev) => ({ ...prev, about: { ...prev.about, [field]: value } }));

  return (
    <div className="flex flex-col gap-4">
      <SectionTitle title="About Section" subtitle="Edit your bio paragraphs" />
      <Field
        label="Paragraph 1"
        value={data.about.p1}
        onChange={(v) => update("p1", v)}
        multiline
      />
      <Field
        label="Paragraph 2"
        value={data.about.p2}
        onChange={(v) => update("p2", v)}
        multiline
      />
      <Field
        label="Paragraph 3"
        value={data.about.p3}
        onChange={(v) => update("p3", v)}
        multiline
      />
    </div>
  );
}

// --- Experience ---
function ExperienceEditor({ data, setData }) {
  // Update one field of one job by id
  const updateJob = (id, field, value) =>
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((job) =>
        job.id === id ? { ...job, [field]: value } : job,
      ),
    }));

  // Remove a job by id
  const removeJob = (id) =>
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter((job) => job.id !== id),
    }));

  // Add a new empty job
  const addJob = () =>
    setData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now(),
          company_name: "",
          role: "",
          started_at: "",
          ended_at: "",
          is_ended: false,
        },
      ],
    }));

  return (
    <div className="flex flex-col gap-4">
      <SectionTitle title="Experience" subtitle="Manage your work history" />

      {data.experience.map((job) => (
        <div
          key={job.id}
          className="border border-zinc-800 rounded-xl p-4 flex flex-col gap-3"
        >
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="Company"
              value={job.company_name}
              onChange={(v) => updateJob(job.id, "company_name", v)}
            />
            <Field
              label="Role"
              value={job.role}
              onChange={(v) => updateJob(job.id, "role", v)}
            />
            <Field
              label="Started"
              value={job.started_at}
              onChange={(v) => updateJob(job.id, "started_at", v)}
              placeholder="2021"
            />
            <Field
              label="Ended"
              value={job.ended_at}
              onChange={(v) => updateJob(job.id, "ended_at", v)}
              placeholder="2023"
              disabled={!job.is_ended}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={job.is_ended}
                onChange={(e) =>
                  updateJob(job.id, "is_ended", e.target.checked)
                }
                className="accent-white w-3.5 h-3.5"
              />
              <span className="text-xs text-zinc-500">Role has ended</span>
            </label>
            <button
              onClick={() => removeJob(job.id)}
              className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={addJob}
        className="w-full py-3 border border-dashed border-zinc-700 rounded-xl text-xs font-black text-zinc-600 hover:border-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
      >
        + Add Role
      </button>
    </div>
  );
}

// --- Testimonials ---
function TestimonialEditor({ data, setData }) {
  const updateItem = (id, field, value) =>
    setData((prev) => ({
      ...prev,
      testimonials: prev.testimonials.map((t) =>
        t.id === id ? { ...t, [field]: value } : t,
      ),
    }));

  return (
    <div className="flex flex-col gap-4">
      <SectionTitle title="Testimonials" subtitle="Edit client testimonials" />
      {data.testimonials.map((item) => (
        <div
          key={item.id}
          className="border border-zinc-800 rounded-xl p-4 flex flex-col gap-3"
        >
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="Name"
              value={item.name}
              onChange={(v) => updateItem(item.id, "name", v)}
            />
            <Field
              label="Role"
              value={item.role}
              onChange={(v) => updateItem(item.id, "role", v)}
            />
          </div>
          <Field
            label="Testimonial Text"
            value={item.text}
            onChange={(v) => updateItem(item.id, "text", v)}
            multiline
          />
        </div>
      ))}
    </div>
  );
}

// --- Contact ---
function ContactEditor({ data, setData }) {
  const update = (field, value) =>
    setData((prev) => ({
      ...prev,
      contact: { ...prev.contact, [field]: value },
    }));

  return (
    <div className="flex flex-col gap-4">
      <SectionTitle title="Contact Section" subtitle="Edit your contact info" />
      <Field
        label="Heading"
        value={data.contact.heading}
        onChange={(v) => update("heading", v)}
      />
      <Field
        label="Email"
        value={data.contact.email}
        onChange={(v) => update("email", v)}
      />
      <Field
        label="Phone"
        value={data.contact.phone}
        onChange={(v) => update("phone", v)}
      />
    </div>
  );
}

// --- Style (Colors + Fonts) ---
function StyleEditor({ theme, setTheme, font, setFont }) {
  return (
    <div className="flex flex-col gap-6">
      <SectionTitle
        title="Style & Theme"
        subtitle="Customize colors and typography"
      />

      {/* Font Picker */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3">
          Font Family
        </p>
        <div className="grid grid-cols-2 gap-2">
          {FONT_OPTIONS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFont(f.value)}
              style={{ fontFamily: f.value }}
              className={`px-3 py-2 rounded-lg text-sm text-left border transition-all ${
                font === f.value
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-500"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Color Theme Presets */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3">
          Color Themes
        </p>
        <div className="grid grid-cols-3 gap-2">
          {COLOR_THEMES.map((t) => (
            <button
              key={t.label}
              onClick={() => setTheme(t)}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${
                theme.label === t.label
                  ? "border-white"
                  : "border-zinc-800 hover:border-zinc-600"
              }`}
            >
              {/* Color swatches */}
              <div className="flex gap-1">
                {[t.bg, t.text, t.accent].map((color, i) => (
                  <div
                    key={i}
                    style={{ background: color }}
                    className="w-4 h-4 rounded-full border border-zinc-700"
                  />
                ))}
              </div>
              <span className="text-[10px] text-zinc-500 font-bold">
                {t.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Color Pickers */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3">
          Custom Colors
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["Background", "bg"],
            ["Text Color", "text"],
            ["Accent", "accent"],
            ["Card BG", "card"],
          ].map(([label, key]) => (
            <div key={key} className="flex flex-col gap-1.5">
              <label className="text-[9px] uppercase tracking-widest text-zinc-600">
                {label}
              </label>
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2">
                <input
                  type="color"
                  value={theme[key]}
                  onChange={(e) =>
                    setTheme((prev) => ({
                      ...prev,
                      label: "Custom",
                      [key]: e.target.value,
                    }))
                  }
                  className="w-5 h-5 cursor-pointer bg-transparent border-0 p-0 shrink-0"
                />
                <span className="text-xs text-zinc-600 font-mono">
                  {theme[key]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 6. SMALL HELPER COMPONENTS
// ============================================================
function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-2">
      <h2 className="text-base font-black text-white">{title}</h2>
      <p className="text-xs text-zinc-600 mt-0.5">{subtitle}</p>
    </div>
  );
}

// ============================================================
// 7. LIVE PREVIEW
//    This is your actual portfolio template.
//    It reads from portfolioData, theme, and font.
//    Replace the JSX inside with YOUR own template design.
// ============================================================
function LivePreview({ data, theme: t, font }) {
  return (
    <div
      style={{ background: t.bg, color: t.text, fontFamily: font }}
      className="h-full overflow-y-auto transition-all duration-300"
    >
      {/* ── Navbar ── */}
      <nav
        style={{ background: t.bg + "ee", borderBottom: `1px solid ${t.card}` }}
        className="sticky top-0 z-10 px-6 py-4 flex items-center justify-between backdrop-blur-sm"
      >
        <span
          style={{ color: t.text }}
          className="text-sm font-black tracking-widest"
        >
          {data.home.name}
        </span>
        <div
          style={{ color: t.text }}
          className="hidden sm:flex gap-5 text-xs font-semibold opacity-50"
        >
          {["About", "Experience", "Testimonial", "Contact"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="px-6 py-16 flex flex-col justify-center min-h-[55vh]">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-5">
          <div
            style={{ background: t.accent }}
            className="w-1.5 h-1.5 rounded-full"
          />
          <span
            style={{ color: t.text }}
            className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50"
          >
            {data.home.badge}
          </span>
        </div>
        {/* Name */}
        <h1
          style={{
            color: t.text,
            fontFamily: font,
            fontSize: "clamp(30px, 5vw, 52px)",
          }}
          className="font-black leading-none tracking-tighter mb-3"
        >
          {data.home.name}
        </h1>
        {/* Title */}
        <p
          style={{ color: t.text }}
          className="opacity-50 font-light text-base"
        >
          {data.home.title}
        </p>
        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            style={{ background: t.accent, color: t.bg }}
            className="px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest border-0 cursor-pointer"
          >
            View Work
          </button>
          <button
            style={{ borderColor: t.accent, color: t.text }}
            className="px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest bg-transparent border cursor-pointer"
          >
            Contact Me
          </button>
        </div>
      </section>

      {/* ── About ── */}
      <section style={{ background: t.card }} className="px-6 py-12">
        <p
          style={{ color: t.accent }}
          className="text-[10px] font-black uppercase tracking-[0.2em] mb-2"
        >
          About Me
        </p>
        <p style={{ color: t.text }} className="text-xl font-black mb-5">
          Who I Am
        </p>
        {[data.about.p1, data.about.p2, data.about.p3].map((paragraph, i) => (
          <p
            key={i}
            style={{ color: t.text }}
            className="text-xs leading-relaxed opacity-60 mb-2"
          >
            {paragraph}
          </p>
        ))}
      </section>

      {/* ── Experience ── */}
      <section className="px-6 py-12">
        <p
          style={{ color: t.accent }}
          className="text-[10px] font-black uppercase tracking-[0.2em] mb-1"
        >
          Work History
        </p>
        <p style={{ color: t.text }} className="text-xl font-black mb-6">
          Experience
        </p>
        {data.experience.map((job) => (
          <div
            key={job.id}
            style={{ borderBottomColor: t.card }}
            className="flex items-center justify-between py-3 border-b"
          >
            <div>
              <p
                style={{ color: t.text }}
                className="text-xs font-black tracking-wider"
              >
                {job.company_name}
              </p>
              <p
                style={{ color: t.text }}
                className="text-[11px] mt-0.5 opacity-45"
              >
                {job.role}
              </p>
            </div>
            <span
              style={{ color: t.text }}
              className="text-[10px] font-mono opacity-35"
            >
              {job.started_at}
              {job.ended_at ? ` – ${job.ended_at}` : " – Present"}
            </span>
          </div>
        ))}
      </section>

      {/* ── Testimonials ── */}
      <section style={{ background: t.card }} className="px-6 py-12">
        <p
          style={{ color: t.accent }}
          className="text-[10px] font-black uppercase tracking-[0.2em] mb-1"
        >
          What They Say
        </p>
        <p style={{ color: t.text }} className="text-xl font-black mb-6">
          Testimonials
        </p>
        <div className="flex flex-col gap-4">
          {data.testimonials.map((item) => (
            <div
              key={item.id}
              style={{ background: t.bg }}
              className="p-5 rounded-2xl"
            >
              <p
                style={{ color: t.text }}
                className="text-xs leading-relaxed opacity-65 mb-4"
              >
                "{item.text}"
              </p>
              <div className="flex items-center gap-3">
                {/* Avatar initial */}
                <div
                  style={{ background: t.accent, color: t.bg }}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                >
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p style={{ color: t.text }} className="text-xs font-black">
                    {item.name}
                  </p>
                  <p
                    style={{ color: t.text }}
                    className="text-[10px] opacity-40"
                  >
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="px-6 py-12">
        <p
          style={{ color: t.accent }}
          className="text-[10px] font-black uppercase tracking-[0.2em] mb-1"
        >
          Get In Touch
        </p>
        <p
          style={{ color: t.text }}
          className="text-2xl font-black leading-tight mb-6 max-w-xs"
        >
          {data.contact.heading}
        </p>
        <div className="flex flex-col gap-2">
          <span style={{ color: t.text }} className="text-xs opacity-55">
            {data.contact.email}
          </span>
          <span style={{ color: t.text }} className="text-xs opacity-55">
            {data.contact.phone}
          </span>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// 8. SAVE BUTTON
//    Calls your RTK Query mutation.
//    Replace `savePortfolio` with your actual mutation hook.
// ============================================================
function SaveButton({ portfolioData, theme, font, templateId }) {
  const [status, setStatus] = useState("idle"); // "idle" | "saving" | "saved" | "error"

  // ── REPLACE THIS with your real RTK Query hook ──
  // Example: const [savePortfolio, { isLoading }] = useSavePortfolioMutation();
  const savePortfolio = async (payload) => {
    // Simulated API call — delete this and use your RTK mutation
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Saving to API:", payload);
    return { success: true };
  };

  const handleSave = async () => {
    setStatus("saving");
    try {
      // This is the payload sent to your API
      await savePortfolio({
        template_id: templateId, // which template the user chose
        theme: theme, // color theme object
        font: font, // selected font string
        sections: portfolioData, // all content sections
      });
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2500);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  return (
    <button
      onClick={handleSave}
      disabled={status === "saving"}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all disabled:opacity-60 ${
        status === "saved"
          ? "bg-green-500 text-white"
          : status === "error"
            ? "bg-red-500 text-white"
            : status === "saving"
              ? "bg-zinc-700 text-white"
              : "bg-white text-black hover:bg-zinc-200"
      }`}
    >
      {status === "saving" && <FiLoader size={13} className="animate-spin" />}
      {status === "saved" && <FiCheck size={13} />}
      {status === "saving"
        ? "Saving..."
        : status === "saved"
          ? "Saved!"
          : status === "error"
            ? "Error — Retry"
            : "Save"}
    </button>
  );
}

// ============================================================
// 9. SIDEBAR NAVIGATION
//    Shared between desktop sidebar and mobile drawer.
// ============================================================
const NAV_SECTIONS = [
  { key: "home", label: "Home", icon: FiHome },
  { key: "about", label: "About", icon: FiUser },
  { key: "experience", label: "Experience", icon: FiBriefcase },
  { key: "testimonial", label: "Testimonial", icon: FiStar },
  { key: "contact", label: "Contact", icon: FiMessageSquare },
  { key: "style", label: "Style", icon: FiDroplet },
];

function SidebarNav({ activeSection, setActiveSection, onClose }) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo area */}
      <div className="px-5 py-5 border-b border-zinc-800 flex items-center justify-between">
        <div>
          <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600">
            Template Editor
          </p>
          <h1 className="text-sm font-black text-white mt-1 tracking-widest">
            PORTOZ
          </h1>
        </div>
        {/* Close button — only shown in mobile drawer */}
        {onClose && (
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <FiX size={14} />
          </button>
        )}
      </div>

      {/* Nav buttons */}
      <nav className="flex-1 p-3 flex flex-col gap-1 overflow-y-auto">
        {NAV_SECTIONS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => {
              setActiveSection(key);
              onClose?.();
            }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-black transition-all text-left w-full ${
              activeSection === key
                ? "bg-white text-black"
                : "text-zinc-500 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            <Icon size={13} />
            {label}
            {/* Badge on the Style tab */}
            {key === "style" && (
              <span className="ml-auto text-[8px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-500 font-black uppercase">
                New
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}

// ============================================================
// 10. MAIN DASHBOARD COMPONENT
//     This is the root component you render in your router.
//
//     Props:
//     - templateId: string — the template the user selected
//       e.g. <PortfolioDashboard templateId="template_1" />
// ============================================================
export default function PortfolioDashboard({ templateId = "template_1" }) {
  // ── All content data in one state ──
  const [portfolioData, setPortfolioData] = useState(DEFAULT_DATA);

  // ── Style state ──
  const [theme, setTheme] = useState(COLOR_THEMES[0]);
  const [font, setFont] = useState(FONT_OPTIONS[0].value);

  // ── UI state ──
  const [activeSection, setActiveSection] = useState("home"); // which editor is shown
  const [mobileTab, setMobileTab] = useState("editor"); // "editor" or "preview" on mobile
  const [drawerOpen, setDrawerOpen] = useState(false); // mobile nav drawer

  // ── Which editor component to show ──
  // Each editor gets portfolioData and setPortfolioData as props
  const renderEditor = () => {
    if (activeSection === "home")
      return <HomeEditor data={portfolioData} setData={setPortfolioData} />;
    if (activeSection === "about")
      return <AboutEditor data={portfolioData} setData={setPortfolioData} />;
    if (activeSection === "experience")
      return (
        <ExperienceEditor data={portfolioData} setData={setPortfolioData} />
      );
    if (activeSection === "testimonial")
      return (
        <TestimonialEditor data={portfolioData} setData={setPortfolioData} />
      );
    if (activeSection === "contact")
      return <ContactEditor data={portfolioData} setData={setPortfolioData} />;
    if (activeSection === "style")
      return (
        <StyleEditor
          theme={theme}
          setTheme={setTheme}
          font={font}
          setFont={setFont}
        />
      );
    return null;
  };

  return (
    <>
      {/* Google Fonts import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&family=Playfair+Display:wght@700;900&family=Space+Grotesk:wght@400;600;700&family=DM+Serif+Display&family=Syne:wght@600;700;800&family=Bebas+Neue&display=swap');
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 99px; }
      `}</style>

      <div
        className="h-screen flex flex-col bg-zinc-950 overflow-hidden"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* ════════════════════════════════════════════════
            MOBILE TOP BAR  (hidden on lg screens)
        ════════════════════════════════════════════════ */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800 shrink-0">
          {/* Hamburger — opens the nav drawer */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-800 text-zinc-300"
          >
            <FiMenu size={15} />
          </button>

          <span className="text-sm font-black text-white tracking-widest">
            PORTOZ
          </span>

          {/* Edit / Preview toggle */}
          <div className="flex bg-zinc-800 rounded-xl p-1 gap-1">
            <button
              onClick={() => setMobileTab("editor")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${mobileTab === "editor" ? "bg-white text-black" : "text-zinc-500"}`}
            >
              <FiEdit2 size={11} /> Edit
            </button>
            <button
              onClick={() => setMobileTab("preview")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${mobileTab === "preview" ? "bg-white text-black" : "text-zinc-500"}`}
            >
              <FiEye size={11} /> Preview
            </button>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            MOBILE DRAWER  (slides in from left)
        ════════════════════════════════════════════════ */}
        {drawerOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            {/* Dark backdrop — tap to close */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
            />
            {/* Drawer panel */}
            <div className="relative w-64 bg-zinc-900 border-r border-zinc-800 z-10">
              <SidebarNav
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                onClose={() => setDrawerOpen(false)}
              />
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════
            MAIN CONTENT AREA
        ════════════════════════════════════════════════ */}
        <div className="flex flex-1 overflow-hidden">
          {/* ── Desktop Sidebar (hidden on mobile) ── */}
          <aside className="hidden lg:flex flex-col w-52 shrink-0 bg-zinc-900 border-r border-zinc-800">
            <SidebarNav
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </aside>

          {/* ── Editor Panel ──
               Desktop: always visible, fixed 320px wide
               Mobile:  visible only when mobileTab = "editor" */}
          <div
            className={`${mobileTab === "editor" ? "flex" : "hidden"} lg:flex flex-col w-full lg:w-80 shrink-0 bg-zinc-900 border-r border-zinc-800`}
          >
            {/* Editor top bar */}
            <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between shrink-0">
              <div>
                <p className="text-[9px] text-zinc-600 uppercase tracking-widest font-black">
                  Editing
                </p>
                <h2 className="text-sm font-black text-white capitalize mt-0.5">
                  {activeSection} Section
                </h2>
              </div>
              {/* Save button lives in the header */}
              <SaveButton
                portfolioData={portfolioData}
                theme={theme}
                font={font}
                templateId={templateId}
              />
            </div>

            {/* Scrollable editor content */}
            <div className="flex-1 overflow-y-auto p-5">{renderEditor()}</div>

            {/* Mobile: button to jump to preview */}
            <div className="lg:hidden px-5 pb-4 shrink-0">
              <button
                onClick={() => setMobileTab("preview")}
                className="w-full py-3 bg-white text-black rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <FiEye size={13} /> View Live Preview
              </button>
            </div>
          </div>

          {/* ── Preview Panel ──
               Desktop: takes remaining space
               Mobile:  visible only when mobileTab = "preview" */}
          <div
            className={`${mobileTab === "preview" ? "flex" : "hidden"} lg:flex flex-col flex-1 min-w-0`}
          >
            {/* Fake browser chrome bar */}
            <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center gap-3 shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 bg-zinc-950 border border-zinc-800 rounded-md px-3 py-1 text-[10px] text-zinc-600 font-mono">
                portfolio-preview.local
              </div>
              <span className="hidden sm:block text-[9px] font-black uppercase tracking-widest text-zinc-600 px-2 py-1 rounded-md bg-zinc-950 border border-zinc-800">
                Live Preview
              </span>
            </div>

            {/* Mobile: back to editor button */}
            <div className="lg:hidden px-4 py-2 bg-zinc-900 border-b border-zinc-800 shrink-0">
              <button
                onClick={() => setMobileTab("editor")}
                className="flex items-center gap-2 text-xs font-black text-zinc-500 hover:text-white transition-colors uppercase tracking-widest"
              >
                <FiChevronLeft size={12} /> Back to Editor
              </button>
            </div>

            {/* The actual live preview */}
            <div className="flex-1 overflow-hidden">
              <LivePreview data={portfolioData} theme={theme} font={font} />
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            MOBILE BOTTOM NAV  (hidden on lg screens)
            Tap a section to jump to its editor
        ════════════════════════════════════════════════ */}
        <div className="lg:hidden flex shrink-0 bg-zinc-900 border-t border-zinc-800 px-1 py-1.5">
          {NAV_SECTIONS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => {
                setActiveSection(key);
                setMobileTab("editor");
              }}
              className={`flex-1 flex flex-col items-center justify-center gap-1 py-1.5 rounded-lg transition-all ${
                activeSection === key
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-600"
              }`}
            >
              <Icon size={14} />
              <span className="text-[8px] font-black uppercase tracking-wider leading-none">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

// ============================================================
// HOW TO USE IN YOUR ROUTER:
//
//   import PortfolioDashboard from "./PortfolioDashboard";
//
//   // Option A — hardcoded template ID
//   <PortfolioDashboard templateId="template_1" />
//
//   // Option B — from URL param
//   const { templateId } = useParams();
//   <PortfolioDashboard templateId={templateId} />
//
//   // Option C — from Redux store
//   const templateId = useSelector(state => state.template.selectedId);
//   <PortfolioDashboard templateId={templateId} />
//
// HOW TO PLUG IN YOUR RTK QUERY MUTATION:
//
//   1. Import your mutation:
//      import { useSavePortfolioMutation } from "../store/portfolioApi";
//
//   2. Inside SaveButton, replace the fake savePortfolio with:
//      const [savePortfolio, { isLoading }] = useSavePortfolioMutation();
//
//   3. Call it in handleSave:
//      await savePortfolio({ template_id, theme, font, sections }).unwrap();
// ============================================================
