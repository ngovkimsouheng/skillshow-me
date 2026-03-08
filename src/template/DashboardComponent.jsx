import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiUser,
  FiBriefcase,
  FiMessageSquare,
  FiHome,
  FiStar,
  FiMenu,
  FiX,
} from "react-icons/fi";

const NAV_ITEMS = [
  { key: "home", label: "Home", icon: FiHome },
  { key: "about", label: "About", icon: FiUser },
  { key: "experience", label: "Experience", icon: FiBriefcase },
  { key: "testimonial", label: "Testimonial", icon: FiStar },
  { key: "contact", label: "Contact", icon: FiMessageSquare },
];

// ─── Section Editors ──────────────────────────────────────────────────────────

function HomeEditor() {
  const [data, setData] = useState({
    name: "ALON PORTOZ",
    title: "Creative designer & developer",
    badge: "HELLO! I AM ALON PORTOZ",
  });
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="Home Section"
        description="Edit your hero banner content"
      />
      <Field
        label="Badge Text"
        value={data.badge}
        onChange={(v) => setData({ ...data, badge: v })}
      />
      <Field
        label="Your Name"
        value={data.name}
        onChange={(v) => setData({ ...data, name: v })}
      />
      <Field
        label="Hero Title"
        value={data.title}
        onChange={(v) => setData({ ...data, title: v })}
      />
      <SaveButton />
    </div>
  );
}

function AboutEditor() {
  const [data, setData] = useState({
    p1: "I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).",
    p2: "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer.",
    p3: "Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications.",
  });
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="About Section"
        description="Edit your about me paragraphs"
      />
      <Field
        label="Paragraph 1"
        value={data.p1}
        onChange={(v) => setData({ ...data, p1: v })}
        multiline
      />
      <Field
        label="Paragraph 2"
        value={data.p2}
        onChange={(v) => setData({ ...data, p2: v })}
        multiline
      />
      <Field
        label="Paragraph 3"
        value={data.p3}
        onChange={(v) => setData({ ...data, p3: v })}
        multiline
      />
      <SaveButton />
    </div>
  );
}

function ExperienceEditor() {
  const [jobs, setJobs] = useState([
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
  ]);

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
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="Experience Section"
        description="Manage your work history"
      />
      {jobs.map((job) => (
        <div
          key={job.id}
          className="border border-gray-100 rounded-2xl p-6 flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
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
              label="Started At"
              value={job.started_at}
              onChange={(v) => update(job.id, "started_at", v)}
              placeholder="e.g. 2021"
            />
            <Field
              label="Ended At"
              value={job.ended_at}
              onChange={(v) => update(job.id, "ended_at", v)}
              placeholder="e.g. 2023"
              disabled={!job.is_ended}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={job.is_ended}
                onChange={(e) => update(job.id, "is_ended", e.target.checked)}
                className="w-4 h-4 accent-black"
              />
              <span className="text-sm text-gray-500">Role has ended</span>
            </label>
            <button
              onClick={() => remove(job.id)}
              className="text-xs text-red-400 hover:text-red-600 font-bold uppercase tracking-widest transition-colors"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={add}
        className="w-full py-3 border-2 border-dashed border-gray-200 rounded-2xl text-sm font-bold text-gray-400 hover:border-black hover:text-black transition-colors uppercase tracking-widest"
      >
        + Add Role
      </button>
      <SaveButton />
    </div>
  );
}

function TestimonialEditor() {
  const [items, setItems] = useState([
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
  ]);

  const update = (id, field, value) =>
    setItems((prev) =>
      prev.map((t) => (t.id === id ? { ...t, [field]: value } : t)),
    );

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="Testimonial Section"
        description="Edit your client testimonials"
      />
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-gray-100 rounded-2xl p-6 flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
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
      <SaveButton />
    </div>
  );
}

function ContactEditor() {
  const [data, setData] = useState({
    email: "info@portfolio.com",
    phone: "+(123) 456 789 00",
    heading: "Let's create amazing stuff together!",
  });
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="Contact Section"
        description="Edit your contact information"
      />
      <Field
        label="Heading"
        value={data.heading}
        onChange={(v) => setData({ ...data, heading: v })}
      />
      <Field
        label="Email"
        value={data.email}
        onChange={(v) => setData({ ...data, email: v })}
      />
      <Field
        label="Phone"
        value={data.phone}
        onChange={(v) => setData({ ...data, phone: v })}
      />
      <SaveButton />
    </div>
  );
}

// ─── Shared UI Components ─────────────────────────────────────────────────────

function SectionHeader({ title, description }) {
  return (
    <div className="mb-2">
      <h2 className="text-2xl font-black text-black">{title}</h2>
      <p className="text-sm text-gray-400 mt-1">{description}</p>
    </div>
  );
}

function Field({ label, value, onChange, multiline, placeholder, disabled }) {
  const base =
    "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-black focus:bg-white transition-all disabled:opacity-40 disabled:cursor-not-allowed";
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-black uppercase tracking-widest text-gray-400">
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

function SaveButton() {
  const [saved, setSaved] = useState(false);
  const handle = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };
  return (
    <button
      onClick={handle}
      className={`self-start px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${
        saved
          ? "bg-green-500 text-white"
          : "bg-black text-white hover:bg-gray-800"
      }`}
    >
      {saved ? "✓ Saved!" : "Save Changes"}
    </button>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

const EDITORS = {
  home: <HomeEditor />,
  about: <AboutEditor />,
  experience: <ExperienceEditor />,
  testimonial: <TestimonialEditor />,
  contact: <ContactEditor />,
};

export default function DashboardComponent() {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className="min-h-screen bg-gray-50 flex"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <style>{`@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");`}</style>

      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? "w-64" : "w-0 overflow-hidden"} transition-all duration-300 bg-white border-r border-gray-100 flex flex-col flex-shrink-0`}
      >
        <div className="p-6 border-b border-gray-100">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400">
            Template Editor
          </p>
          <h1 className="text-xl font-black text-black mt-1">PORTOZ</h1>
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-1">
          {NAV_ITEMS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all text-left ${
                active === key
                  ? "bg-black text-white"
                  : "text-gray-500 hover:bg-gray-50 hover:text-black"
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 hover:text-black transition-all"
          >
            <FiArrowLeft size={16} />
            Back to Preview
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
            >
              {sidebarOpen ? <FiX size={16} /> : <FiMenu size={16} />}
            </button>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                Editing
              </p>
              <h2 className="text-base font-black text-black capitalize">
                {active} Section
              </h2>
            </div>
          </div>

          <button
            onClick={() => navigate("/template1")}
            className="flex items-center gap-2 px-5 py-2.5 bg-black text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-gray-800 transition-colors"
          >
            <FiArrowLeft size={14} />
            Preview
          </button>
        </header>

        {/* Editor Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-2xl mx-auto">{EDITORS[active]}</div>
        </div>
      </main>
    </div>
  );
}
