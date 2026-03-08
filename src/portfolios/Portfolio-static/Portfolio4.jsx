import { useState, useEffect } from "react";
import img from "./souheng.png";
import ButtonEdit from "./ButtonEdit";
import { NavLink } from "react-router";
import { templates } from "../templates";
export default function Portfolio4() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [hoveredJob, setHoveredJob] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.3 },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const links = [
    "home",
    "about",
    "experience",
    "job",
    "school",
    "skill",
    "contact",
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-zinc-50 text-zinc-900 min-h-screen overflow-x-hidden">
      {templates.map((template) => (
        <NavLink key={template.id} to={`/dashboard/portfolio/1`}>
          <ButtonEdit />
        </NavLink>
      ))}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;500;600;700;800&display=swap');
        .bebas { font-family: 'Bebas Neue', cursive; letter-spacing: 0.04em; }
        .syne { font-family: 'Syne', sans-serif; }
        * { font-family: 'Syne', sans-serif; }
        .border-brutal { border: 3px solid #18181b; }
        .shadow-brutal { box-shadow: 6px 6px 0px #18181b; }
        .shadow-brutal-coral { box-shadow: 6px 6px 0px #f43f5e; }
        .shadow-brutal-yellow { box-shadow: 6px 6px 0px #eab308; }
        .hover-lift { transition: transform 0.15s ease, box-shadow 0.15s ease; }
        .hover-lift:hover { transform: translate(-3px, -3px); box-shadow: 9px 9px 0px #18181b; }
        .hover-lift-coral:hover { transform: translate(-3px, -3px); box-shadow: 9px 9px 0px #f43f5e; }
        .marquee { animation: marquee 18s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .diagonal-bg { background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(234,179,8,0.08) 10px, rgba(234,179,8,0.08) 20px); }
        .tag-pill { font-family: 'Bebas Neue', cursive; letter-spacing: 0.1em; }
      `}</style>

      <header className="w-full fixed  z-99 ">
        {/* ── NAV ── */}
        <nav className="sticky w-full top-0 z-90 bg-zinc-50 border-b-4 border-zinc-900">
          <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={() => scrollTo("home")}
                className="bebas text-3xl text-zinc-900 tracking-widest"
              >
                HENG<span className="text-rose-500">*</span>
              </button>
              {/* Desktop */}
              <div className="hidden lg:flex items-center gap-0">
                {links.map((l, i) => (
                  <button
                    key={l}
                    onClick={() => scrollTo(l)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border-r-2 border-zinc-200 transition-all duration-150
                        ${active === l ? "bg-zinc-900 text-zinc-50" : "hover:bg-yellow-300 text-zinc-600 hover:text-zinc-900"}`}
                  >
                    {l}
                  </button>
                ))}
                <button
                  onClick={() => scrollTo("contact")}
                  className="ml-4 px-5 py-2 bg-rose-500 text-white text-xs font-bold uppercase tracking-widest border-brutal shadow-brutal hover-lift"
                >
                  Hire Me
                </button>
              </div>
              {/* Mobile */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 border-brutal flex flex-col items-center justify-center gap-1.5"
              >
                <span
                  className={`block w-5 h-0.5 bg-zinc-900 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-zinc-900 transition-all ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-zinc-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden border-t-4 border-zinc-900 bg-zinc-50">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className={`w-full text-left px-6 py-4 text-sm font-bold uppercase tracking-widest border-b-2 border-zinc-200 transition
                      ${active === l ? "bg-zinc-900 text-yellow-300" : "hover:bg-yellow-300 text-zinc-700"}`}
                >
                  {l}
                </button>
              ))}
            </div>
          )}
        </nav>
        {/* ── MARQUEE STRIP ── */}
        <div className="bg-yellow-300 border-b-4 border-zinc-900 py-2 overflow-hidden whitespace-nowrap">
          <div className="marquee inline-flex gap-0">
            {[...Array(2)].map((_, i) => (
              <span
                key={i}
                className="bebas text-zinc-900 text-lg tracking-widest mr-0"
              >
                {[
                  "UI DESIGN",
                  "✦",
                  "UX RESEARCH",
                  "✦",
                  "BRANDING",
                  "✦",
                  "FRONTEND DEV",
                  "✦",
                  "MOTION",
                  "✦",
                  "PROTOTYPING",
                  "✦",
                  "DESIGN SYSTEMS",
                  "✦",
                ].map((t, j) => (
                  <span key={j} className="mx-6">
                    {t}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ── HOME ── */}
      <section id="home" className="min-h-screen pt-20 py-6  sm:py-25 max-lg:mt-18 lg:pt-35 diagonal-bg">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            {/* Big title — spans 7 cols */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-yellow-300 border-brutal px-4 py-2 mb-8 shadow-brutal">
                <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Available for Work
                </span>
              </div>

              <h1 className="bebas text-[clamp(4rem,12vw,9rem)] leading-none text-zinc-900 mb-0">
                HELLO,
              </h1>
              <h1 className="bebas text-[clamp(3rem,9vw,7rem)] leading-none mb-0">
                <span className="text-rose-500">I'M HENG</span>
              </h1>
              <h1 className="bebas text-[clamp(4rem,12vw,9rem)] leading-none text-zinc-900 mb-5">
                DESIGNER
              </h1>

              <p className="text-zinc-500 text-base sm:text-lg max-w-lg leading-relaxed mb-10 font-medium">
                user123@gmail.com
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("experience")}
                  className="px-8 py-4 bg-zinc-900 text-zinc-50 text-sm font-bold uppercase tracking-widest border-brutal shadow-brutal hover-lift"
                >
                  My Work →
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-8 py-4 bg-yellow-300 text-zinc-900 text-sm font-bold uppercase tracking-widest border-brutal shadow-brutal-coral hover-lift-coral transition-all duration-150"
                >
                  Let's Talk
                </button>
              </div>
            </div>

            {/* Right side — image + stats */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-full h-full bg-yellow-300 border-brutal" />
                <img
                  src={img}
                  alt="Profile"
                  className="relative w-full aspect-[4/5] object-cover border-brutal"
                />
                {/* Role badge */}
                <div className="absolute bottom-4 left-4 bg-rose-500 border-brutal px-4 py-2 shadow-brutal">
                  <p className="text-white text-xs font-bold uppercase tracking-widest">
                    Senior UI/UX Designer
                  </p>
                </div>
              </div>

              {/* Stats row */}
              {/* <div className="grid grid-cols-3 gap-0 border-brutal overflow-hidden">
                {[
                  ["6+", "Years"],
                  ["50+", "Projects"],
                  ["30+", "Clients"],
                ].map(([n, l], i) => (
                  <div
                    key={l}
                    className={`p-5 text-center ${i < 2 ? "border-r-4 border-zinc-900" : ""} bg-white`}
                  >
                    <p className="bebas text-4xl text-rose-500">{n}</p>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                      {l}
                    </p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-zinc-900 text-zinc-50">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-yellow-300" />
                <span className="bebas text-yellow-300 text-xl tracking-widest">
                  About Me
                </span>
              </div>
              <h2 className="bebas text-6xl sm:text-6xl lg:text-8xl leading-none mb-8 text-white">
                DESIGN
                <br />
                IS MY
                <br />
                <span className="text-rose-500 sm:text-7xl">LANGUAGE</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6 text-base">
                I specialize in designing modern web and mobile interfaces. I
                believe good design is simple, purposeful, and impactful —
                serving the user while expressing the brand's identity.
              </p>
              {/* <p className="text-zinc-400 leading-relaxed mb-8 text-base">
                6+ years across agencies and startups. I bring strategic
                thinking to every project — from rough sketches to polished,
                shipped products.
              </p> */}
              <div className="flex flex-wrap gap-3">
                {[
                  "Figma",
                  "React",
                  "Tailwind CSS",
                  "Adobe XD",
                  "Framer",

                ].map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 bg-zinc-800 border-2 border-zinc-600 text-yellow-300 text-xs font-bold uppercase tracking-widest hover:bg-yellow-300 hover:text-zinc-900 hover:border-zinc-900 transition-all cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature boxes — staggered */}
            <div className="grid place-content-start   max-lg:gap-2 sm:grid-cols-1  md:grid-cols-2 lg:gap-4">
              {[
                {
                  icon: "🎨",
                  title: "Visual Design",
                  desc: "Pixel-perfect interfaces that truly delight",
                  accent: "bg-yellow-300 border-brutal shadow-brutal",
                },
                {
                  icon: "📱",
                  title: "Mobile First",
                  desc: "Seamless on every screen, always",
                  accent:
                    "bg-white border-brutal shadow-brutal-coral text-zinc-900",
                },
                {
                  icon: "⚡",
                  title: "Fast Delivery",
                  desc: "Quality work, never compromised",
                  accent: "bg-rose-500 border-brutal shadow-brutal text-white",
                },
                {
                  icon: "🤝",
                  title: "Collaboration",
                  desc: "Devs, PMs, and stakeholders love working with me",
                  accent: "bg-zinc-800 border-2 border-zinc-600 text-zinc-100",
                },
              ].map(({ icon, title, desc, accent }, i) => (
                <div
                  key={title}
                  className={`${accent} p-6 max-lg:p-4 transition-all duration-200 hover-lift ${i === 1 ? "mt-6" : ""} ${i === 3 ? "-mt-6" : ""}`}
                >
                  <span className="text-3xl mb-4 block">{icon}</span>
                  <h4 className="font-black text-sm uppercase tracking-wide mb-1">
                    {title}
                  </h4>
                  <p className="text-xs leading-relaxed opacity-70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-24 bg-zinc-50">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-4 border-zinc-900 pb-6">
            <div>
              <span className="bebas text-rose-500 text-xl tracking-widest block mb-2">
                Experience
              </span>
              <h2 className="bebas text-6xl sm:text-7xl text-zinc-900 leading-none">
                MY JOURNEY
              </h2>
            </div>
            <span className="bebas text-9xl text-zinc-100 leading-none select-none hidden lg:block">
              03
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Senior Designer",
                company: "PixelCraft Studio",
                period: "2022–Now",
                desc: "Leading design direction for enterprise digital products. Managing a team of 4 designers.",
                current: true,
              },
              {
                title: "UI/UX Designer",
                company: "Webflow Agency",
                period: "2019–2022",
                desc: "Designed user-centered interfaces improving engagement by 40% across web and mobile.",
              },
              {
                title: "Visual Designer",
                company: "Freelance",
                period: "2017–2019",
                desc: "Brand identities, landing pages, and UI kits for 20+ international clients.",
              },
            ].map(({ title, company, period, desc, current }) => (
              <div
                key={title}
                className={`border-brutal bg-white hover-lift p-8 ${current ? "shadow-brutal-coral" : "shadow-brutal"}`}
              >
                {current && (
                  <div className="inline-flex items-center gap-2 bg-yellow-300 border-2 border-zinc-900 px-3 py-1 mb-5">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-widest">
                      Current
                    </span>
                  </div>
                )}
                {!current && <div className="h-8 mb-5" />}
                <h4 className="bebas text-3xl text-zinc-900 leading-none mb-1">
                  {title}
                </h4>
                <p className="text-rose-500 text-sm font-black uppercase tracking-widest mb-1">
                  {company}
                </p>
                <p className="text-zinc-400 text-xs font-bold uppercase mb-5">
                  {period}
                </p>
                <p className="text-zinc-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOB ── */}
      <section
        id="job"
        className="py-24 bg-yellow-300 border-y-4 border-zinc-900"
      >
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <span className="bebas text-zinc-500 text-xl tracking-widest block mb-2">
                Job History
              </span>
              <h2 className="bebas text-6xl sm:text-7xl text-zinc-900 leading-none">
                WHERE I'VE
                <br />
                WORKED
              </h2>
            </div>
          </div>

          <div className="space-y-0 border-brutal overflow-hidden">
            {[
              {
                no: "01",
                company: "PixelCraft Studio",
                role: "Lead Designer",
                period: "2022–Present",
              },
              {
                no: "02",
                company: "Webflow Agency",
                role: "Product Designer",
                period: "2019–2022",
              },
              {
                no: "03",
                company: "Creative Collective",
                role: "Junior UI Designer",
                period: "2017–2019",
              },
              {
                no: "04",
                company: "Freelance",
                role: "Visual Designer",
                period: "2015–2017",
              },
            ].map(({ no, company, role, period }, i) => (
              <div
                key={company}
                onMouseEnter={() => setHoveredJob(i)}
                onMouseLeave={() => setHoveredJob(null)}
                className={`flex items-center gap-6 sm:gap-10 px-6 sm:px-10 py-6 border-b-4 border-zinc-900 transition-all duration-200 cursor-default
                  ${hoveredJob === i ? "bg-zinc-900 text-yellow-300" : "bg-transparent text-zinc-900"}
                  ${i === 3 ? "border-b-0" : ""}`}
              >
                <span
                  className={`bebas text-5xl sm:text-6xl min-w-[4rem] leading-none ${hoveredJob === i ? "text-yellow-300" : "text-zinc-300"}`}
                >
                  {no}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="bebas text-2xl sm:text-4xl leading-none truncate">
                    {company}
                  </h4>
                  <p
                    className={`text-sm font-bold uppercase tracking-widest mt-1 ${hoveredJob === i ? "text-rose-400" : "text-zinc-500"}`}
                  >
                    {role}
                  </p>
                </div>
                <span
                  className={`shrink-0 text-sm font-black uppercase tracking-widest hidden sm:block ${hoveredJob === i ? "text-yellow-300" : "text-zinc-400"}`}
                >
                  {period}
                </span>
                <span
                  className={`shrink-0 bebas text-3xl ${hoveredJob === i ? "text-rose-400" : "text-zinc-200"}`}
                >
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOOL ── */}
      <section id="school" className="py-24 bg-zinc-50">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-4 border-zinc-900 pb-6">
            <div>
              <span className="bebas text-rose-500 text-xl tracking-widest block mb-2">
                Education
              </span>
              <h2 className="bebas text-6xl sm:text-7xl text-zinc-900 leading-none">
                ACADEMIC
                <br />
                BACKGROUND
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🎓",
                degree: "Bachelor of Design",
                school: "Royal Institute of Design",
                period: "2015–2019",
                badge: "GPA 3.9 / 4.0",
                color: "border-l-8 border-l-rose-500",
              },
              {
                icon: "🏅",
                degree: "UI/UX Bootcamp",
                school: "Interaction Design Foundation",
                period: "2020",
                badge: "Excellence Award",
                color: "border-l-8 border-l-yellow-400",
              },
              {
                icon: "🎬",
                degree: "Motion Design Course",
                school: "School of Motion",
                period: "2021",
                badge: "Advanced Level",
                color: "border-l-8 border-l-zinc-900",
              },
              {
                icon: "📐",
                degree: "Design Systems",
                school: "Figma Academy",
                period: "2022",
                badge: "Professional Cert.",
                color: "border-l-8 border-l-rose-500",
              },
            ].map(({ icon, degree, school, period, badge, color }) => (
              <div
                key={degree}
                className={`bg-white border-brutal shadow-brutal hover-lift flex gap-5 p-7 ${color}`}
              >
                <span className="text-4xl shrink-0 mt-1">{icon}</span>
                <div>
                  <h4 className="bebas text-2xl text-zinc-900 leading-tight">
                    {degree}
                  </h4>
                  <p className="text-rose-500 text-sm font-black uppercase tracking-widest mb-1">
                    {school}
                  </p>
                  <p className="text-zinc-400 text-xs font-bold uppercase mb-4">
                    {period}
                  </p>
                  <span className="inline-block bg-yellow-300 border-2 border-zinc-900 px-4 py-1 text-xs font-black uppercase tracking-widest">
                    {badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILL ── */}
      <section id="skill" className="py-24 bg-zinc-900 text-white">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-4 border-zinc-600 pb-6">
            <div>
              <span className="bebas text-yellow-300 text-xl tracking-widest block mb-2">
                Skills
              </span>
              <h2 className="bebas text-6xl sm:text-7xl text-white leading-none">
                WHAT I DO
                <br />
                <span className="text-rose-500">BEST</span>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Skill bars */}
            <div className="space-y-8">
              {[
                { name: "UI Design", pct: 95, tools: "Figma · Adobe XD" },
                { name: "Frontend Dev", pct: 85, tools: "React · Tailwind" },
                { name: "Branding", pct: 80, tools: "Logo · Identity" },
                { name: "Prototyping", pct: 90, tools: "Framer · InVision" },
                { name: "Motion Design", pct: 72, tools: "After Effects" },
              ].map(({ name, pct, tools }) => (
                <div key={name} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <span className="bebas text-2xl text-white group-hover:text-yellow-300 transition-colors">
                        {name}
                      </span>
                      <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                        {tools}
                      </span>
                    </div>
                    <span className="bebas text-2xl text-rose-500">{pct}%</span>
                  </div>
                  <div className="h-4 bg-zinc-800 border-2 border-zinc-600 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-300 to-rose-500 border-r-2 border-zinc-900"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tool grid — brutalist tiles */}
            <div className="grid grid-cols-3 gap-0 border-brutal overflow-hidden self-start">
              {[
                { label: "Figma", emoji: "🎨" },
                { label: "React", emoji: "⚛️" },
                { label: "Tailwind", emoji: "💨" },
                { label: "Adobe XD", emoji: "✏️" },
                { label: "Framer", emoji: "🖱️" },
                { label: "After FX", emoji: "🎬" },
              ].map(({ label, emoji }, i) => (
                <div
                  key={label}
                  className={`p-6 text-center border-zinc-700 hover:bg-yellow-300 hover:text-zinc-900 transition-all duration-200 cursor-default group
                    ${i % 3 !== 2 ? "border-r-2" : ""}
                    ${i < 3 ? "border-b-2" : ""}
                    bg-zinc-800`}
                >
                  <span className="text-2xl block mb-2">{emoji}</span>
                  <span className="bebas text-sm tracking-widest text-zinc-300 group-hover:text-zinc-900 transition-colors">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-zinc-50">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side */}
            <div>
              <span className="bebas text-rose-500 text-xl tracking-widest block mb-4">
                Contact
              </span>
              <h2 className="bebas text-6xl sm:text-7xl lg:text-8xl leading-none text-zinc-900 mb-8">
                LET'S
                <br />
                <span className="text-rose-500">BUILD</span>
                <br />
                TOGETHER
              </h2>
              <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-sm">
                Have a project in mind? I'd love to hear about it. Drop me a
                message and let's make something unforgettable.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Email", value: "ngovkimsouheng@design.io" },
                  { label: "LinkedIn", value: "linkedin.com/in/hengdesigner" },
                  { label: "Dribbble", value: "dribbble.com/hengdesigner" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 border-b-2 border-zinc-200 pb-4"
                  >
                    <span className="bebas text-rose-500 text-sm tracking-widest w-20">
                      {label}
                    </span>
                    <span className="text-zinc-600 text-sm font-bold">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white border-brutal shadow-brutal p-8 sm:p-10">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-zinc-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-zinc-50 border-2 border-zinc-300 focus:border-zinc-900 text-zinc-900 placeholder-zinc-400 px-4 py-3 outline-none transition-all text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-zinc-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@email.com"
                      className="w-full bg-zinc-50 border-2 border-zinc-300 focus:border-zinc-900 text-zinc-900 placeholder-zinc-400 px-4 py-3 outline-none transition-all text-sm font-medium"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-zinc-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project inquiry…"
                    className="w-full bg-zinc-50 border-2 border-zinc-300 focus:border-zinc-900 text-zinc-900 placeholder-zinc-400 px-4 py-3 outline-none transition-all text-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-zinc-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project…"
                    className="w-full bg-zinc-50 border-2 border-zinc-300 focus:border-zinc-900 text-zinc-900 placeholder-zinc-400 px-4 py-3 outline-none transition-all text-sm font-medium resize-none"
                  />
                </div>
                <button className="w-full py-4 bg-rose-500 text-white font-black text-sm uppercase tracking-widest border-brutal shadow-brutal hover-lift transition-all duration-150">
                  Send Message →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-zinc-900 border-t-4 border-zinc-700 py-8">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="bebas text-2xl text-yellow-300 tracking-widest">
            SOK<span className="text-rose-500">*</span>
          </span>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            © 2026 Sok Designer — All rights reserved
          </p>
          <button
            onClick={() => scrollTo("home")}
            className="text-zinc-500 hover:text-yellow-300 text-xs font-black uppercase tracking-widest transition-colors"
          >
            ↑ Top
          </button>
        </div>
      </footer>
    </div>
  );
}
