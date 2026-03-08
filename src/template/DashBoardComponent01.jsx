import { useState, createContext, useContext } from "react";
import Logo from "../assets/Icon/logo.PNG";
import {
  FiUser,
  FiBriefcase,
  FiMessageSquare,
  FiHome,
  FiStar,
  FiDroplet,
  FiEye,
  FiEdit2,
  FiChevronLeft,
  FiX,
  FiMenu,
} from "react-icons/fi";

// ─── Context ──────────────────────────────────────────────────────────────────
const Ctx = createContext();
const useCtx = () => useContext(Ctx);

const FONTS = [
  { label: "Poppins", value: "'Poppins', sans-serif" },
  { label: "Playfair Display", value: "'Playfair Display', serif" },
  { label: "Space Grotesk", value: "'Space Grotesk', sans-serif" },
  { label: "DM Serif Display", value: "'DM Serif Display', serif" },
  { label: "Syne", value: "'Syne', sans-serif" },
  { label: "Bebas Neue", value: "'Bebas Neue', cursive" },
];

const THEMES = [
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

const DEFAULT_DATA = {
  home: {
    name: "ALON PORTOZ",
    title: "Creative designer & developer",
    badge: "HELLO! I AM ALON PORTOZ",
    image: { Logo },
  },
  about: {
    p1: "I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).",
    p2: "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer.",
    p3: "Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications.",
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
      role: "User Experience Designer",
      started_at: "2022",
      ended_at: "2023",
      is_ended: true,
    },
    {
      id: 3,
      company_name: "SALESFORCE",
      role: "User Interface Designer",
      started_at: "2020",
      ended_at: "2022",
      is_ended: true,
    },
    {
      id: 4,
      company_name: "FACEBOOK",
      role: "Senior Graphic Designer",
      started_at: "2017",
      ended_at: "2020",
      is_ended: true,
    },
    {
      id: 5,
      company_name: "INSTAGRAM",
      role: "Senior Graphic Designer",
      started_at: "2015",
      ended_at: "2017",
      is_ended: true,
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Evren Shah",
      role: "Designer",
      text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    },
    {
      id: 2,
      name: "Flora Sheen",
      role: "Designer",
      text: "Working with Alon was a transformative experience. The attention to detail and creative vision exceeded all expectations.",
    },
  ],
  contact: {
    email: "info@portfolio.com",
    phone: "+(123) 456 789 00",
    heading: "Let's create amazing stuff together!",
  },
};

// ─── Shared Field ─────────────────────────────────────────────────────────────
function Field({ label, value, onChange, multiline, placeholder, disabled }) {
  const base =
    "w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors font-[inherit] disabled:opacity-30 disabled:cursor-not-allowed resize-none";
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-black uppercase tracking-[0.15em] text-zinc-500">
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className={base}
          placeholder={placeholder}
          disabled={disabled}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={base}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </div>
  );
}

function SecHead({ title, desc }) {
  return (
    <div className="mb-5">
      <h2 className="text-base font-black text-white tracking-tight">
        {title}
      </h2>
      <p className="text-xs text-zinc-600 mt-0.5">{desc}</p>
    </div>
  );
}

// ─── Section Editors ──────────────────────────────────────────────────────────
function HomeEditor() {
  const { data, setData } = useCtx();
  const s = (f, v) => setData((d) => ({ ...d, home: { ...d.home, [f]: v } }));
  return (
    <div className="flex flex-col gap-4">
      <SecHead title="Home Section" desc="Edit your hero banner content" />
      <Field
        label="Badge Text"
        value={data.home.badge}
        onChange={(v) => s("badge", v)}
      />
      <Field
        label="Your Name"
        value={data.home.name}
        onChange={(v) => s("name", v)}
      />
      <Field
        label="Hero Title"
        value={data.home.title}
        onChange={(v) => s("title", v)}
      />
    </div>
  );
}

function AboutEditor() {
  const { data, setData } = useCtx();
  const s = (f, v) => setData((d) => ({ ...d, about: { ...d.about, [f]: v } }));
  return (
    <div className="flex flex-col gap-4">
      <SecHead title="About Section" desc="Edit your about me paragraphs" />
      <Field
        label="Paragraph 1"
        value={data.about.p1}
        onChange={(v) => s("p1", v)}
        multiline
      />
      <Field
        label="Paragraph 2"
        value={data.about.p2}
        onChange={(v) => s("p2", v)}
        multiline
      />
      <Field
        label="Paragraph 3"
        value={data.about.p3}
        onChange={(v) => s("p3", v)}
        multiline
      />
    </div>
  );
}

function ExperienceEditor() {
  const { data, setData } = useCtx();
  const setJobs = (fn) =>
    setData((d) => ({
      ...d,
      experience: typeof fn === "function" ? fn(d.experience) : fn,
    }));
  const upd = (id, f, v) =>
    setJobs((p) => p.map((j) => (j.id === id ? { ...j, [f]: v } : j)));
  const del = (id) => setJobs((p) => p.filter((j) => j.id !== id));
  const add = () =>
    setJobs((p) => [
      ...p,
      {
        id: Date.now(),
        company_name: "",
        role: "",
        started_at: "",
        ended_at: "",
        is_ended: false,
      },
    ]);
  return (
    <div className="flex flex-col gap-4">
      <SecHead title="Experience Section" desc="Manage your work history" />
      {data.experience.map((job) => (
        <div
          key={job.id}
          className="border border-zinc-800 rounded-xl p-4 flex flex-col gap-3"
        >
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="Company"
              value={job.company_name}
              onChange={(v) => upd(job.id, "company_name", v)}
            />
            <Field
              label="Role"
              value={job.role}
              onChange={(v) => upd(job.id, "role", v)}
            />
            <Field
              label="Started"
              value={job.started_at}
              onChange={(v) => upd(job.id, "started_at", v)}
              placeholder="2021"
            />
            <Field
              label="Ended"
              value={job.ended_at}
              onChange={(v) => upd(job.id, "ended_at", v)}
              placeholder="2023"
              disabled={!job.is_ended}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={job.is_ended}
                onChange={(e) => upd(job.id, "is_ended", e.target.checked)}
                className="accent-white w-3.5 h-3.5"
              />
              <span className="text-xs text-zinc-500">Role has ended</span>
            </label>
            <button
              onClick={() => del(job.id)}
              className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={add}
        className="w-full py-3 border border-dashed border-zinc-700 rounded-xl text-xs font-black text-zinc-600 hover:border-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
      >
        + Add Role
      </button>
    </div>
  );
}

function TestimonialEditor() {
  const { data, setData } = useCtx();
  const upd = (id, f, v) =>
    setData((d) => ({
      ...d,
      testimonials: d.testimonials.map((t) =>
        t.id === id ? { ...t, [f]: v } : t,
      ),
    }));
  return (
    <div className="flex flex-col gap-4">
      <SecHead
        title="Testimonial Section"
        desc="Edit your client testimonials"
      />
      {data.testimonials.map((item) => (
        <div
          key={item.id}
          className="border border-zinc-800 rounded-xl p-4 flex flex-col gap-3"
        >
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="Name"
              value={item.name}
              onChange={(v) => upd(item.id, "name", v)}
            />
            <Field
              label="Role"
              value={item.role}
              onChange={(v) => upd(item.id, "role", v)}
            />
          </div>
          <Field
            label="Testimonial Text"
            value={item.text}
            onChange={(v) => upd(item.id, "text", v)}
            multiline
          />
        </div>
      ))}
    </div>
  );
}

function ContactEditor() {
  const { data, setData } = useCtx();
  const s = (f, v) =>
    setData((d) => ({ ...d, contact: { ...d.contact, [f]: v } }));
  return (
    <div className="flex flex-col gap-4">
      <SecHead title="Contact Section" desc="Edit your contact information" />
      <Field
        label="Heading"
        value={data.contact.heading}
        onChange={(v) => s("heading", v)}
      />
      <Field
        label="Email"
        value={data.contact.email}
        onChange={(v) => s("email", v)}
      />
      <Field
        label="Phone"
        value={data.contact.phone}
        onChange={(v) => s("phone", v)}
      />
    </div>
  );
}

function StyleEditor() {
  const { theme, setTheme, font, setFont } = useCtx();
  return (
    <div className="flex flex-col gap-6">
      <SecHead title="Style & Theme" desc="Customize colors and typography" />

      {/* Font */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-zinc-500 mb-2.5">
          Font Family
        </p>
        <div className="grid grid-cols-2 gap-2">
          {FONTS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFont(f.value)}
              style={{ fontFamily: f.value }}
              className={`px-3 py-2 rounded-lg text-sm text-left border transition-all ${font === f.value ? "bg-white text-black border-white" : "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-500"}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Presets */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-zinc-500 mb-2.5">
          Color Themes
        </p>
        <div className="grid grid-cols-3 gap-2">
          {THEMES.map((t) => (
            <button
              key={t.label}
              onClick={() => setTheme(t)}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${theme.label === t.label ? "border-white" : "border-zinc-800 hover:border-zinc-600"}`}
            >
              <div className="flex gap-1">
                {[t.bg, t.text, t.accent].map((c, i) => (
                  <div
                    key={i}
                    style={{ background: c }}
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

      {/* Custom */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-zinc-500 mb-2.5">
          Custom Colors
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["Background", "bg"],
            ["Text Color", "text"],
            ["Accent", "accent"],
            ["Card BG", "card"],
          ].map(([lbl, k]) => (
            <div key={k} className="flex flex-col gap-1.5">
              <label className="text-[9px] uppercase tracking-widest text-zinc-600">
                {lbl}
              </label>
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2">
                <input
                  type="color"
                  value={theme[k]}
                  onChange={(e) =>
                    setTheme((t) => ({
                      ...t,
                      label: "Custom",
                      [k]: e.target.value,
                    }))
                  }
                  className="w-5 h-5 rounded cursor-pointer bg-transparent border-0 p-0 shrink-0"
                />
                <span className="text-xs text-zinc-600 font-mono truncate">
                  {theme[k]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Live Preview ─────────────────────────────────────────────────────────────
function LivePreview() {
  const { data, theme: t, font } = useCtx();
  const d = data;

  return (
    <div
      style={{ background: t.bg, color: t.text, fontFamily: font }}
      className="h-full overflow-y-auto transition-all duration-300 text-sm"
    >
      {/* Navbar */}
      <nav
        style={{ background: t.bg + "dd", borderBottom: `1px solid ${t.card}` }}
        className="sticky top-0 z-10 px-6 py-4 flex items-center justify-between backdrop-blur-sm"
      >
        <span
          style={{ color: t.text }}
          className="text-sm font-black tracking-widest"
        >
          {d.home.name}
        </span>
        <div
          style={{ color: t.text }}
          className="hidden sm:flex gap-5 text-[11px] font-semibold opacity-50"
        >
          {["About", "Experience", "Testimonial", "Contact"].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-16 flex flex-col justify-center min-h-[55vh]">
        <div className="flex items-center gap-2 mb-5">
          <div
            style={{ background: t.accent }}
            className="w-1.5 h-1.5 rounded-full"
          />
          <span
            style={{ color: t.text }}
            className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50"
          >
            {d.home.badge}
          </span>
        </div>
        <h1
          style={{ color: t.text }}
          className="font-black leading-none tracking-tighter mb-3"
          style={{
            fontSize: "clamp(30px,5vw,52px)",
            color: t.text,
            fontFamily: font,
          }}
        >
          {d.home.name}
        </h1>
        <p
          style={{ color: t.text }}
          className="opacity-50 font-light text-base"
        >
          {d.home.title}
        </p>
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

      {/* About */}
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
        {[d.about.p1, d.about.p2, d.about.p3].map((p, i) => (
          <p
            key={i}
            style={{ color: t.text }}
            className="text-xs leading-relaxed opacity-60 mb-2 last:mb-0"
          >
            {p}
          </p>
        ))}
      </section>

      {/* Experience */}
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
        {d.experience.map((job) => (
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

      {/* Testimonials */}
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
          {d.testimonials.map((item) => (
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

      {/* Contact */}
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
          {d.contact.heading}
        </p>
        <div className="flex flex-col gap-2">
          <span style={{ color: t.text }} className="text-xs opacity-55">
            {d.contact.email}
          </span>
          <span style={{ color: t.text }} className="text-xs opacity-55">
            {d.contact.phone}
          </span>
        </div>
      </section>
    </div>
  );
}

// ─── Nav Config ───────────────────────────────────────────────────────────────
const NAV = [
  { key: "home", label: "Home", icon: FiHome },
  { key: "about", label: "About", icon: FiUser },
  { key: "experience", label: "Experience", icon: FiBriefcase },
  { key: "testimonial", label: "Testimonial", icon: FiStar },
  { key: "contact", label: "Contact", icon: FiMessageSquare },
  { key: "style", label: "Style", icon: FiDroplet },
];

const EDITOR_MAP = {
  home: <HomeEditor />,
  about: <AboutEditor />,
  experience: <ExperienceEditor />,
  testimonial: <TestimonialEditor />,
  contact: <ContactEditor />,
  style: <StyleEditor />,
};

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function Dashboard() {
  const [active, setActive] = useState("home");
  const [mobileTab, setMobileTab] = useState("editor"); // "editor" | "preview"
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [font, setFont] = useState(FONTS[0].value);
  const [theme, setTheme] = useState(THEMES[0]);
  const [data, setData] = useState(DEFAULT_DATA);

  return (
    <Ctx.Provider value={{ data, setData, theme, setTheme, font, setFont }}>
      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Space+Grotesk:wght@400;500;600;700&family=DM+Serif+Display&family=Syne:wght@400;600;700;800&family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        ::-webkit-scrollbar { width: 3px; height: 3px; }
        ::-webkit-scrollbar-track { background: #18181b; }
        ::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 99px; }
      `}</style> */}

      <div
        className="h-screen flex flex-col bg-zinc-950 overflow-hidden"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* ══ MOBILE TOPBAR ══════════════════════════════════════════════════ */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800 shrink-0">
          <button
            onClick={() => setDrawerOpen(true)}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-800 text-zinc-300"
          >
            <FiMenu size={15} />
          </button>
          <span className="text-sm font-black text-white tracking-widest">
            PORTOZ
          </span>
          {/* Editor / Preview toggle pill */}
          <div className="flex bg-zinc-800 rounded-xl p-1 gap-1">
            <button
              onClick={() => setMobileTab("editor")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${mobileTab === "editor" ? "bg-white text-black" : "text-zinc-500"}`}
            >
              <FiEdit2 size={11} /> Edit
            </button>
            <button
              onClick={() => setMobileTab("preview")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${mobileTab === "preview" ? "bg-white text-black" : "text-zinc-500"}`}
            >
              <FiEye size={11} /> Preview
            </button>
          </div>
        </div>

        {/* ══ MOBILE DRAWER ══════════════════════════════════════════════════ */}
        {drawerOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
            />
            <div className="relative w-64 bg-zinc-900 border-r border-zinc-800 z-10">
              <Sidebar
                active={active}
                setActive={setActive}
                onClose={() => setDrawerOpen(false)}
              />
            </div>
          </div>
        )}

        {/* ══ MAIN LAYOUT ════════════════════════════════════════════════════ */}
        <div className="flex flex-1 overflow-hidden">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:flex flex-col w-52 shrink-0 bg-zinc-900 border-r border-zinc-800">
            <Sidebar active={active} setActive={setActive} />
          </aside>

          {/* Editor Panel — shown on desktop always, on mobile only if mobileTab=editor */}
          <div
            className={`${mobileTab === "editor" ? "flex" : "hidden"} lg:flex flex-col w-full lg:w-80 shrink-0 bg-zinc-900 border-r border-zinc-800`}
          >
            {/* Editor header */}
            <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between shrink-0">
              <div>
                <p className="text-[9px] text-zinc-600 uppercase tracking-[0.2em] font-black">
                  Editing
                </p>
                <h2 className="text-sm font-black text-white capitalize mt-0.5">
                  {active} Section
                </h2>
              </div>
              {active === "style" && (
                <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500 px-2 py-1 rounded-md bg-zinc-800">
                  Live
                </span>
              )}
            </div>
            {/* Editor body */}
            <div className="flex-1 overflow-y-auto p-5">
              {EDITOR_MAP[active]}
            </div>
            {/* Mobile CTA to switch to preview */}
            <div className="lg:hidden px-5 pb-4 shrink-0">
              <button
                onClick={() => setMobileTab("preview")}
                className="w-full py-3 bg-white text-black rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <FiEye size={13} /> View Live Preview
              </button>
            </div>
          </div>

          {/* Preview Panel — shown on desktop always, on mobile only if mobileTab=preview */}
          <div
            className={`${mobileTab === "preview" ? "flex" : "hidden"} lg:flex flex-col flex-1 min-w-0`}
          >
            {/* Browser chrome bar */}
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
              <button
                onClick={() => setMobileTab("editor")}
                className="flex items-center gap-2 text-xs font-black text-zinc-500 hover:text-white transition-colors uppercase tracking-widest"
              >
                <FiChevronLeft size={12} /> Back to Editor
              </button>
            </div>
            {/* Preview content */}
            <div className="flex-1 overflow-hidden">
              <LivePreview />
            </div>
          </div>
        </div>

        {/* ══ MOBILE BOTTOM NAV ══════════════════════════════════════════════ */}
        <div className="lg:hidden flex shrink-0 bg-zinc-900 border-t border-zinc-800 px-1 py-1.5">
          {NAV.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => {
                setActive(key);
                setMobileTab("editor");
              }}
              className={`flex-1 flex flex-col items-center justify-center gap-1 py-1.5 rounded-lg transition-all ${active === key ? "bg-zinc-800 text-white" : "text-zinc-600"}`}
            >
              <Icon size={14} />
              <span className="text-[8px] font-black uppercase tracking-wider leading-none">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </Ctx.Provider>
  );
}
