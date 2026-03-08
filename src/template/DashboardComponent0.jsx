import { useState, createContext, useContext } from "react";
import {
  FiUser,
  FiBriefcase,
  FiMessageSquare,
  FiHome,
  FiStar,
  FiMenu,
  FiX,
  FiType,
  FiDroplet,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

// ─── Global Data Context ──────────────────────────────────────────────────────

const DataContext = createContext();
const useData = () => useContext(DataContext);

const FONT_OPTIONS = [
  { label: "Poppins", value: "'Poppins', sans-serif" },
  { label: "Playfair Display", value: "'Playfair Display', serif" },
  { label: "Space Grotesk", value: "'Space Grotesk', sans-serif" },
  { label: "DM Serif Display", value: "'DM Serif Display', serif" },
  { label: "Syne", value: "'Syne', sans-serif" },
  { label: "Bebas Neue", value: "'Bebas Neue', cursive" },
];

const THEME_PRESETS = [
  {
    label: "Onyx",
    bg: "#0a0a0a",
    text: "#f5f5f5",
    accent: "#e5e5e5",
    card: "#1a1a1a",
  },
  {
    label: "Ivory",
    bg: "#faf8f3",
    text: "#1a1a1a",
    accent: "#1a1a1a",
    card: "#f0ede4",
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

// ─── Reusable Field ───────────────────────────────────────────────────────────

function Field({ label, value, onChange, multiline, placeholder, disabled }) {
  const base =
    "w-full bg-[#111] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#555] transition-all disabled:opacity-30 disabled:cursor-not-allowed";
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-bold uppercase tracking-widest text-[#666]">
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className={`${base} resize-none`}
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

function SectionHeader({ title, description }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-black text-white tracking-tight">{title}</h2>
      <p className="text-xs text-[#555] mt-0.5">{description}</p>
    </div>
  );
}

// ─── Section Editors ──────────────────────────────────────────────────────────

function HomeEditor() {
  const { data, setData } = useData();
  const home = data.home;
  const set = (field, val) =>
    setData((d) => ({ ...d, home: { ...d.home, [field]: val } }));
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader
        title="Home Section"
        description="Edit your hero banner content"
      />
      <Field
        label="Badge Text"
        value={home.badge}
        onChange={(v) => set("badge", v)}
      />
      <Field
        label="Your Name"
        value={home.name}
        onChange={(v) => set("name", v)}
      />
      <Field
        label="Hero Title"
        value={home.title}
        onChange={(v) => set("title", v)}
      />
    </div>
  );
}

function AboutEditor() {
  const { data, setData } = useData();
  const about = data.about;
  const set = (field, val) =>
    setData((d) => ({ ...d, about: { ...d.about, [field]: val } }));
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader
        title="About Section"
        description="Edit your about me paragraphs"
      />
      <Field
        label="Paragraph 1"
        value={about.p1}
        onChange={(v) => set("p1", v)}
        multiline
      />
      <Field
        label="Paragraph 2"
        value={about.p2}
        onChange={(v) => set("p2", v)}
        multiline
      />
      <Field
        label="Paragraph 3"
        value={about.p3}
        onChange={(v) => set("p3", v)}
        multiline
      />
    </div>
  );
}

function ExperienceEditor() {
  const { data, setData } = useData();
  const jobs = data.experience;
  const setJobs = (fn) =>
    setData((d) => ({
      ...d,
      experience: typeof fn === "function" ? fn(d.experience) : fn,
    }));

  const update = (id, field, value) =>
    setJobs((prev) =>
      prev.map((j) => (j.id === id ? { ...j, [field]: value } : j)),
    );
  const remove = (id) => setJobs((prev) => prev.filter((j) => j.id !== id));
  const add = () =>
    setJobs((prev) => [
      ...prev,
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
      <SectionHeader
        title="Experience Section"
        description="Manage your work history"
      />
      {jobs.map((job) => (
        <div
          key={job.id}
          className="border border-[#2a2a2a] rounded-xl p-4 flex flex-col gap-3"
        >
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="Company"
              value={job.company_name}
              onChange={(v) => update(job.id, "company_name", v)}
            />
            <Field
              label="Role"
              value={job.role}
              onChange={(v) => update(job.id, "role", v)}
            />
            <Field
              label="Started"
              value={job.started_at}
              onChange={(v) => update(job.id, "started_at", v)}
              placeholder="2021"
            />
            <Field
              label="Ended"
              value={job.ended_at}
              onChange={(v) => update(job.id, "ended_at", v)}
              placeholder="2023"
              disabled={!job.is_ended}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={job.is_ended}
                onChange={(e) => update(job.id, "is_ended", e.target.checked)}
                className="w-3.5 h-3.5 accent-white"
              />
              <span className="text-xs text-[#555]">Role has ended</span>
            </label>
            <button
              onClick={() => remove(job.id)}
              className="text-[10px] text-red-500 hover:text-red-400 font-bold uppercase tracking-widest transition-colors"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={add}
        className="w-full py-2.5 border border-dashed border-[#2a2a2a] rounded-xl text-xs font-bold text-[#444] hover:border-[#555] hover:text-white transition-colors uppercase tracking-widest"
      >
        + Add Role
      </button>
    </div>
  );
}

function TestimonialEditor() {
  const { data, setData } = useData();
  const items = data.testimonials;
  const update = (id, field, value) =>
    setData((d) => ({
      ...d,
      testimonials: d.testimonials.map((t) =>
        t.id === id ? { ...t, [field]: value } : t,
      ),
    }));
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader
        title="Testimonial Section"
        description="Edit your client testimonials"
      />
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-[#2a2a2a] rounded-xl p-4 flex flex-col gap-3"
        >
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="Name"
              value={item.name}
              onChange={(v) => update(item.id, "name", v)}
            />
            <Field
              label="Role"
              value={item.role}
              onChange={(v) => update(item.id, "role", v)}
            />
          </div>
          <Field
            label="Testimonial Text"
            value={item.text}
            onChange={(v) => update(item.id, "text", v)}
            multiline
          />
        </div>
      ))}
    </div>
  );
}

function ContactEditor() {
  const { data, setData } = useData();
  const contact = data.contact;
  const set = (field, val) =>
    setData((d) => ({ ...d, contact: { ...d.contact, [field]: val } }));
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader
        title="Contact Section"
        description="Edit your contact information"
      />
      <Field
        label="Heading"
        value={contact.heading}
        onChange={(v) => set("heading", v)}
      />
      <Field
        label="Email"
        value={contact.email}
        onChange={(v) => set("email", v)}
      />
      <Field
        label="Phone"
        value={contact.phone}
        onChange={(v) => set("phone", v)}
      />
    </div>
  );
}

function StyleEditor() {
  const { theme, setTheme, font, setFont } = useData();
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="Style & Theme"
        description="Customize colors and typography"
      />

      {/* Font Picker */}
      <div>
        <label className="text-[10px] font-bold uppercase tracking-widest text-[#666] mb-2 block">
          Font Family
        </label>
        <div className="grid grid-cols-2 gap-2">
          {FONT_OPTIONS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFont(f.value)}
              style={{ fontFamily: f.value }}
              className={`px-3 py-2 rounded-lg text-sm border transition-all text-left ${font === f.value
                ? "border-white bg-white text-black"
                : "border-[#2a2a2a] text-[#999] hover:border-[#555]"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Color Presets */}
      <div>
        <label className="text-[10px] font-bold uppercase tracking-widest text-[#666] mb-2 block">
          Color Themes
        </label>
        <div className="grid grid-cols-3 gap-2">
          {THEME_PRESETS.map((t) => (
            <button
              key={t.label}
              onClick={() => setTheme(t)}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${theme.label === t.label
                ? "border-white"
                : "border-[#2a2a2a] hover:border-[#444]"
                }`}
            >
              <div className="flex gap-1">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ background: t.bg, border: "1px solid #333" }}
                />
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ background: t.text }}
                />
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ background: t.accent }}
                />
              </div>
              <span className="text-[10px] text-[#666]">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Colors */}
      <div>
        <label className="text-[10px] font-bold uppercase tracking-widest text-[#666] mb-2 block">
          Custom Colors
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Background", key: "bg" },
            { label: "Text Color", key: "text" },
            { label: "Accent", key: "accent" },
            { label: "Card BG", key: "card" },
          ].map(({ label, key }) => (
            <div key={key} className="flex flex-col gap-1.5">
              <label className="text-[10px] text-[#555] uppercase tracking-widest">
                {label}
              </label>
              <div className="flex items-center gap-2 bg-[#111] border border-[#2a2a2a] rounded-lg px-3 py-2">
                <input
                  type="color"
                  value={theme[key]}
                  onChange={(e) =>
                    setTheme((t) => ({
                      ...t,
                      label: "Custom",
                      [key]: e.target.value,
                    }))
                  }
                  className="w-5 h-5 rounded cursor-pointer bg-transparent border-0 p-0"
                />
                <span className="text-xs text-[#666] font-mono">
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

// ─── Live Preview ─────────────────────────────────────────────────────────────

function LivePreview() {
  const { data, theme, font, previewSection } = useData();

  const style = {
    "--bg": theme.bg,
    "--text": theme.text,
    "--accent": theme.accent,
    "--card": theme.card,
    fontFamily: font,
    background: theme.bg,
    color: theme.text,
  };

  return (
    <div
      style={style}
      className="h-full overflow-y-auto text-[var(--text)] bg-[var(--bg)] transition-all duration-300"
    >
      {/* Nav */}
      <nav
        style={{ borderBottom: `1px solid ${theme.card}` }}
        className="px-8 py-5 flex items-center justify-between sticky top-0 backdrop-blur-sm z-10"
      >
        <span className="text-lg font-black tracking-wider">
          {data.home.name}
        </span>
        <div className="flex gap-6 text-xs font-semibold opacity-60">
          {["About", "Experience", "Testimonial", "Contact"].map((s) => (
            <span
              key={s}
              className="cursor-pointer hover:opacity-100 transition-opacity"
            >
              {s}
            </span>
          ))}
        </div>
      </nav>

      {/* Home */}
      {(!previewSection || previewSection === "home") && (
        <section className="px-8 py-20 min-h-[70vh] flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: theme.accent }}
            />
            <span className="text-xs font-bold tracking-[0.2em] opacity-60">
              {data.home.badge}
            </span>
          </div>
          <h1
            className="text-6xl font-black leading-none tracking-tighter mb-4"
            style={{ color: theme.text }}
          >
            {data.home.name}
          </h1>
          <p className="text-lg opacity-50 font-light">{data.home.title}</p>
          <div className="mt-10 flex gap-4">
            <button
              className="px-7 py-3 rounded-full text-sm font-bold transition-all"
              style={{ background: theme.accent, color: theme.bg }}
            >
              View Work
            </button>
            <button
              className="px-7 py-3 rounded-full text-sm font-bold border transition-all"
              style={{ borderColor: theme.accent, color: theme.text }}
            >
              Contact Me
            </button>
          </div>
        </section>
      )}

      {/* About */}
      {(!previewSection || previewSection === "about") && (
        <section className="px-8 py-16" style={{ background: theme.card }}>
          <div className="max-w-2xl">
            <p
              className="text-xs font-black uppercase tracking-[0.2em] mb-4"
              style={{ color: theme.accent }}
            >
              About Me
            </p>
            <p className="text-2xl font-black leading-snug mb-6">Who I Am</p>
            <p className="text-sm opacity-60 leading-relaxed mb-3">
              {data.about.p1}
            </p>
            <p className="text-sm opacity-60 leading-relaxed mb-3">
              {data.about.p2}
            </p>
            <p className="text-sm opacity-60 leading-relaxed">
              {data.about.p3}
            </p>
          </div>
        </section>
      )}

      {/* Experience */}
      {(!previewSection || previewSection === "experience") && (
        <section className="px-8 py-16">
          <p
            className="text-xs font-black uppercase tracking-[0.2em] mb-2"
            style={{ color: theme.accent }}
          >
            Work History
          </p>
          <p className="text-2xl font-black mb-8">Experience</p>
          <div className="flex flex-col gap-1">
            {data.experience.map((job, i) => (
              <div
                key={job.id}
                className="flex items-center justify-between py-4 border-b"
                style={{ borderColor: theme.card }}
              >
                <div>
                  <p className="font-black text-sm tracking-wide">
                    {job.company_name}
                  </p>
                  <p className="text-xs opacity-50 mt-0.5">{job.role}</p>
                </div>
                <span className="text-xs opacity-40 font-mono">
                  {job.started_at}
                  {job.ended_at ? ` – ${job.ended_at}` : " – Present"}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {(!previewSection || previewSection === "testimonial") && (
        <section className="px-8  py-16" style={{ background: theme.card }}>
          <p
            className="text-xs font-black uppercase tracking-[0.2em] mb-2"
            style={{ color: theme.accent }}
          >
            What They Say
          </p>
          <p className="text-2xl font-black mb-8">Testimonials</p>
          <div className="grid grid-cols-1 gap-4">
            {data.testimonials.map((t) => (
              <div
                key={t.id}
                className="p-5 rounded-2xl"
                style={{ background: theme.bg }}
              >
                <p className="text-sm opacity-70 leading-relaxed mb-4">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
                    style={{ background: theme.accent, color: theme.bg }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-black">{t.name}</p>
                    <p className="text-[10px] opacity-40">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact */}
      {(!previewSection || previewSection === "contact") && (
        <section className="px-8 py-16">
          <p
            className="text-xs font-black uppercase tracking-[0.2em] mb-2"
            style={{ color: theme.accent }}
          >
            Get In Touch
          </p>
          <p className="text-3xl font-black leading-tight mb-8 max-w-sm">
            {data.contact.heading}
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${data.contact.email}`}
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              {data.contact.email}
            </a>
            <a
              href={`tel:${data.contact.phone}`}
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              {data.contact.phone}
            </a>
          </div>
        </section>
      )}
    </div>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { key: "home", label: "Home", icon: FiHome },
  { key: "about", label: "About", icon: FiUser },
  { key: "experience", label: "Experience", icon: FiBriefcase },
  { key: "testimonial", label: "Testimonial", icon: FiStar },
  { key: "contact", label: "Contact", icon: FiMessageSquare },
  { key: "style", label: "Style", icon: FiDroplet },
];

const EDITORS = {
  home: <HomeEditor />,
  about: <AboutEditor />,
  experience: <ExperienceEditor />,
  testimonial: <TestimonialEditor />,
  contact: <ContactEditor />,
  style: <StyleEditor />,
};

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function DashboardComponent() {
  const [active, setActive] = useState("home");
  const [previewVisible, setPreviewVisible] = useState(true);
  const [font, setFont] = useState("'Poppins', sans-serif");
  const [theme, setTheme] = useState(THEME_PRESETS[1]);
  const [data, setData] = useState({
    home: {
      name: "ALON PORTOZ",
      title: "Creative designer & developer",
      badge: "HELLO! I AM ALON PORTOZ",
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
        text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      },
    ],
    contact: {
      email: "info@portfolio.com",
      phone: "+(123) 456 789 00",
      heading: "Let's create amazing stuff together!",
    },
  });

  // Determine which section to highlight in preview based on active editor
  const previewSection = active === "style" ? null : active;

  return (
    <DataContext.Provider
      value={{ data, setData, theme, setTheme, font, setFont, previewSection }}
    >
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;700;900&family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Serif+Display&family=Syne:wght@400;500;600;700;800&family=Bebas+Neue&display=swap");
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 2px; }
      `}</style>

      <div
        className="h-screen flex overflow-hidden"
        style={{ fontFamily: "'Poppins', sans-serif", background: "#0a0a0a" }}
      >
        {/* Sidebar */}
        <aside className="w-56 bg-[#0d0d0d] border-r border-[#1a1a1a] flex flex-col flex-shrink-0">
          <div className="px-5 py-5 border-b border-[#1a1a1a]">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#444]">
              Template Editor
            </p>
            <h1 className="text-base font-black text-white mt-0.5 tracking-wide">
              PORTOZ
            </h1>
          </div>

          <nav className="flex-1 p-3 flex flex-col gap-0.5 overflow-y-auto">
            {NAV_ITEMS.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-bold transition-all text-left ${active === key
                  ? "bg-white text-black"
                  : "text-[#555] hover:bg-[#1a1a1a] hover:text-white"
                  }`}
              >
                <Icon size={13} />
                {label}
                {key === "style" && (
                  <span className="ml-auto text-[8px] px-1.5 py-0.5 rounded bg-[#2a2a2a] text-[#777] font-black uppercase">
                    New
                  </span>
                )}
              </button>
            ))}
          </nav>

          <div className="p-3 border-t border-[#1a1a1a]">
            <button
              onClick={() => setPreviewVisible(!previewVisible)}
              className="flex items-center gap-2 w-full px-3 py-2.5 rounded-lg text-xs font-bold text-[#555] hover:bg-[#1a1a1a] hover:text-white transition-all"
            >
              {previewVisible ? <FiEyeOff size={13} /> : <FiEye size={13} />}
              {previewVisible ? "Hide Preview" : "Show Preview"}
            </button>
          </div>
        </aside>

        {/* Editor Panel */}
        <div
          className={`${previewVisible ? "w-80" : "flex-1"} bg-[#0d0d0d] border-r border-[#1a1a1a] flex flex-col flex-shrink-0 transition-all duration-300`}
        >
          <div className="px-5 py-4 border-b border-[#1a1a1a] flex items-center justify-between">
            <div>
              <p className="text-[9px] text-[#444] uppercase tracking-widest font-bold">
                Editing
              </p>
              <h2 className="text-sm font-black text-white capitalize">
                {active} Section
              </h2>
            </div>
            {active === "style" && (
              <span className="text-[9px] px-2 py-1 rounded bg-[#1a1a1a] text-[#666] font-black uppercase tracking-widest">
                Live
              </span>
            )}
          </div>
          <div className="flex-1 overflow-y-auto p-5">{EDITORS[active]}</div>
        </div>

        {/* Preview Panel */}
        {previewVisible && (
          <div className="flex-1  flex flex-col min-w-0">
            <div className="px-5 py-4 bg-[#0d0d0d] border-b border-[#1a1a1a] flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-70" />
              </div>
              <div className="flex-1 bg-[#111] border border-[#1a1a1a] rounded-md px-3 py-1 text-[10px] text-[#444] font-mono">
                portfolio-preview.local
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-[#333] px-2 py-1 rounded bg-[#111] border border-[#1a1a1a]">
                Live Preview
              </span>
            </div>
            <div className="flex-1 overflow-hidden">
              <LivePreview />
            </div>
          </div>
        )}
      </div>
    </DataContext.Provider>
  );
}
