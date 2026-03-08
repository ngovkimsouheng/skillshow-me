import { useState, useEffect } from "react";
import img from "./souheng.png";
export default function Portfolio10() {
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
    <div className="bg-white text-zinc-900 min-h-screen overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,700&display=swap');
        * { font-family: 'Plus Jakarta Sans', sans-serif; }
        .anton { font-family: 'Anton', sans-serif; letter-spacing: 0.02em; }
        .marquee { animation: marquee 16s linear infinite; }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .bounce { transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease; }
        .bounce:hover { transform: translate(-3px,-3px); box-shadow: 8px 8px 0px #0f766e; }
        .bounce-orange:hover { transform: translate(-3px,-3px); box-shadow: 8px 8px 0px #ea580c; }
        .bounce-ink:hover { transform: translate(-3px,-3px); box-shadow: 8px 8px 0px #18181b; }
        .job-row { transition: all 0.2s ease; cursor: default; }
        .job-row:hover { background: #f0fdfa; padding-left: 2.5rem; }
        .job-arrow { transition: transform 0.2s ease; }
        .job-row:hover .job-arrow { transform: translateX(6px); }
        .chip { transition: all 0.2s ease; cursor: default; }
        .chip:hover { background: #0d9488; color: white; border-color: #0d9488; }
        .float-a { animation: fa 5s ease-in-out infinite; }
        .float-b { animation: fb 6s ease-in-out infinite 1.2s; }
        @keyframes fa { 0%,100%{transform:translateY(0) rotate(-3deg)} 50%{transform:translateY(-12px) rotate(-3deg)} }
        @keyframes fb { 0%,100%{transform:translateY(0) rotate(2deg)} 50%{transform:translateY(-16px) rotate(2deg)} }
        .spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>

      {/* ── NAV ── */}
      <nav className="w-full fixed top-0 z-50 bg-white/95 backdrop-blur border-b-2 border-zinc-200">
        <div className="container mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2.5 shrink-0"
            >
              <span className="anton text-2xl text-zinc-900">SOUHENG</span>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-0">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className={`px-3 py-2 text-xs font-bold uppercase tracking-widest capitalize transition-all duration-150 border-b-2
                    ${
                      active === l
                        ? "border-teal-500 text-teal-600"
                        : "border-transparent text-zinc-400 hover:text-zinc-800 hover:bg-teal-50"
                    }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Hire Me CTA */}
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:block shrink-0 px-5 py-2 bg-teal-500 text-white text-xs font-bold uppercase tracking-widest rounded-full border-2 border-zinc-900 shadow-[4px_4px_0px_#18181b] hover:shadow-[6px_6px_0px_#18181b] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200"
            >
              Hire Me ✦
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 border-2 border-zinc-900 flex flex-col items-center justify-center gap-1.5 rounded-lg"
            >
              <span
                className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-zinc-900 transition-all ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t-2 border-zinc-200 bg-white">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`w-full text-left px-6 py-4 text-sm font-bold uppercase tracking-widest capitalize border-b border-zinc-100 transition
                  ${active === l ? "bg-teal-50 text-teal-600" : "text-zinc-600 hover:bg-teal-50 hover:text-teal-600"}`}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── MARQUEE ── */}
      {/* <div className="bg-teal-500 border-b-2 border-zinc-900 py-2.5 overflow-hidden whitespace-nowrap">
        <div className="marquee inline-flex">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center">
              {[
                "UI DESIGN",
                "✦",
                "UX RESEARCH",
                "✦",
                "BRANDING",
                "✦",
                "FRONTEND DEV",
                "✦",
                "FIGMA",
                "✦",
                "REACT",
                "✦",
                "ISTAD STUDENT",
                "✦",
              ].map((t, j) => (
                <span
                  key={j}
                  className={`mx-6 text-xs font-black uppercase tracking-[0.2em] ${t === "✦" ? "text-teal-200" : "text-white"}`}
                >
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div> */}

      {/* ── HOME ── */}
      <section
        id="home"
        className="min-h-screen bg-white relative overflow-hidden"
      >
        {/* Dot-grid background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Decorative blobs */}
        <div className="absolute top-20 right-16 w-20 h-20 bg-orange-100 rounded-full border-2 border-orange-200 float-a hidden lg:block" />
        <div className="absolute bottom-32 left-16 w-14 h-14 bg-teal-100 rounded-full border-2 border-teal-200 float-b hidden lg:block" />
        <div className="absolute top-1/2 right-1/3 text-3xl opacity-10 spin-slow select-none hidden lg:block">
          ✦
        </div>

        <div className="container mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left — 7 cols */}
            <div className="lg:col-span-7">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 bg-teal-50 border-2 border-teal-500 px-4 py-2 rounded-full mb-8 shadow-[3px_3px_0px_#0d9488]">
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-teal-700">
                  Open to Opportunities
                </span>
              </div>

              {/* Big heading */}
              <h1
                className="anton leading-none text-zinc-900 mb-0"
                style={{ fontSize: "clamp(3.5rem,11vw,8.5rem)" }}
              >
                HEY, I'M
              </h1>
              <h1
                className="anton leading-none text-teal-500 mb-2"
                style={{ fontSize: "clamp(3.5rem,11vw,8.5rem)" }}
              >
                SOUHENG
              </h1>
              <h1
                className="anton leading-none mb-8"
                style={{
                  fontSize: "clamp(2rem,6vw,5rem)",
                  color: "#0A0A0A",
                  WebkitTextStroke: "2px #18181b",
                  WebkitTextFillColor: "transparent",
                }}
              >
                DESIGNER & DEV.
              </h1>

              {/* Sub labels */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-orange-100 border-2 border-orange-400 text-orange-700 text-xs font-black px-4 py-2 rounded-full shadow-[3px_3px_0px_#ea580c]">
                  🎓 ISTAD Student
                </span>
                <span className="bg-teal-50 border-2 border-teal-400 text-teal-700 text-xs font-black px-4 py-2 rounded-full shadow-[3px_3px_0px_#0d9488]">
                  18 y/o
                </span>
                <span className="bg-violet-50 border-2 border-violet-300 text-violet-700 text-xs font-black px-4 py-2 rounded-full shadow-[3px_3px_0px_#7c3aed]">
                  🇰🇭 Phnom Penh
                </span>
              </div>

              <p className="text-zinc-500 text-base sm:text-lg max-w-lg leading-relaxed mb-10 font-medium">
                A passionate 18-year-old student at{" "}
                <strong className="text-zinc-800">ISTAD</strong> building bold,
                intentional digital experiences. I design things that work
                beautifully and look even better.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("experience")}
                  className="px-8 py-4 bg-zinc-900 text-white text-sm font-black uppercase tracking-widest border-2 border-zinc-900 rounded-xl shadow-[5px_5px_0px_#0d9488] bounce transition-all duration-200"
                >
                  My Work →
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-8 py-4 bg-orange-400 text-white text-sm font-black uppercase tracking-widest border-2 border-zinc-900 rounded-xl shadow-[5px_5px_0px_#ea580c] bounce-orange transition-all duration-200"
                >
                  Let's Talk
                </button>
              </div>
            </div>

            {/* Right — 5 cols */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Photo */}
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-full h-full bg-teal-100 border-2 border-teal-400 rounded-2xl" />
                <img
                  src={img}
                  alt="Souheng"
                  className="relative w-full aspect-[4/5] object-cover rounded-2xl border-2 border-zinc-900"
                />
                <div className="absolute bottom-4 left-4 bg-orange-400 border-2 border-zinc-900 px-4 py-2 rounded-xl shadow-[3px_3px_0px_#18181b]">
                  <p className="text-white text-xs font-black uppercase tracking-widest">
                    UI/UX Designer
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-0 border-2 border-zinc-900 rounded-xl overflow-hidden shadow-[4px_4px_0px_#18181b]">
                {[
                  ["3+", "Years"],
                  ["15+", "Projects"],
                  ["5", "Clients"],
                ].map(([n, l], i) => (
                  <div
                    key={l}
                    className={`py-5 text-center bg-white ${i < 2 ? "border-r-2 border-zinc-900" : ""}`}
                  >
                    <p className="anton text-3xl text-teal-500">{n}</p>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mt-0.5">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-zinc-900 text-white">
        <div className="container mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-teal-400 rounded-full" />
                <span className="anton text-teal-400 text-xl tracking-widest">
                  About Me
                </span>
              </div>
              <h2
                className="anton leading-none mb-8 text-white"
                style={{ fontSize: "clamp(3rem,7vw,6rem)" }}
              >
                DESIGN IS
                <br />
                MY
                <br />
                <span className="text-teal-400">PASSION.</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-5 text-base">
                I'm Souheng — an 18-year-old student at{" "}
                <span className="text-teal-400 font-bold">
                  ISTAD (Institute of Science and Technology Advanced
                  Development)
                </span>
                . I'm on a mission to master UI/UX design and frontend
                development.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8 text-base">
                I believe great design is not just about aesthetics — it's about
                solving real problems beautifully. Still learning, growing fast,
                and hungry for every opportunity to ship great work.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Figma",
                  "React",
                  "Tailwind CSS",
                  "HTML/CSS",
                  "Framer",
                  "After Effects",
                ].map((t) => (
                  <span
                    key={t}
                    className="chip px-4 py-2 bg-zinc-800 border-2 border-zinc-600 text-teal-400 text-xs font-bold uppercase tracking-widest rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — staggered feature cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "🎨",
                  title: "Visual Design",
                  desc: "Pixel-perfect interfaces that truly delight",
                  bg: "bg-teal-400",
                  extra: "",
                  shadow: "shadow-[5px_5px_0px_#0f766e]",
                },
                {
                  icon: "📱",
                  title: "Mobile First",
                  desc: "Seamless on every screen, always",
                  bg: "bg-white text-zinc-900",
                  extra: "mt-6",
                  shadow: "shadow-[5px_5px_0px_#ea580c]",
                },
                {
                  icon: "⚡",
                  title: "Fast Learner",
                  desc: "New tools, new skills — always leveling up",
                  bg: "bg-orange-400",
                  extra: "-mt-2",
                  shadow: "shadow-[5px_5px_0px_#18181b]",
                },
                {
                  icon: "🤝",
                  title: "Team Player",
                  desc: "Love collaborating on great ideas",
                  bg: "bg-zinc-800 border-zinc-600",
                  extra: "mt-4",
                  shadow: "shadow-[5px_5px_0px_#374151]",
                },
              ].map(({ icon, title, desc, bg, extra, shadow }) => (
                <div
                  key={title}
                  className={`${bg} ${extra} ${shadow} p-6 border-2 border-zinc-900 rounded-2xl bounce transition-all duration-200`}
                >
                  <span className="text-3xl mb-4 block">{icon}</span>
                  <h4 className="font-black text-sm uppercase tracking-wide mb-1">
                    {title}
                  </h4>
                  <p className="text-xs leading-relaxed opacity-70 font-medium">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-24 bg-slate-50">
        <div className="container mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-4 border-zinc-900 pb-6">
            <div>
              <span className="anton text-teal-500 text-xl tracking-widest block mb-2">
                Experience
              </span>
              <h2
                className="anton text-zinc-900 leading-none"
                style={{ fontSize: "clamp(3rem,7vw,5.5rem)" }}
              >
                MY JOURNEY
              </h2>
            </div>
            <span
              className="anton text-zinc-100 leading-none select-none hidden lg:block"
              style={{ fontSize: "9rem" }}
            >
              03
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "UI/UX Intern",
                company: "Tech Startup",
                period: "2024–Now",
                desc: "Designed mobile-first interfaces, contributed to a design system, and shipped features used by real users.",
                current: true,
              },
              {
                title: "Freelance Designer",
                company: "Self-Employed",
                period: "2023–Now",
                desc: "Built brand identities and landing pages for local businesses and online creators.",
              },
              {
                title: "Design Club Lead",
                company: "ISTAD",
                period: "2023–2024",
                desc: "Led design workshops and critique sessions for fellow students at ISTAD.",
              },
            ].map(({ title, company, period, desc, current }) => (
              <div
                key={title}
                className={`bg-white rounded-2xl p-8 border-2 border-zinc-900 bounce transition-all duration-200
                  ${current ? "shadow-[5px_5px_0px_#0d9488]" : "shadow-[5px_5px_0px_#18181b]"}`}
              >
                {current ? (
                  <div className="inline-flex items-center gap-2 bg-teal-50 border-2 border-teal-500 text-teal-700 px-3 py-1 rounded-full mb-5">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-widest">
                      Current
                    </span>
                  </div>
                ) : (
                  <div className="h-8 mb-5" />
                )}
                <h4 className="anton text-2xl text-zinc-900 leading-none mb-1">
                  {title}
                </h4>
                <p className="text-teal-600 text-sm font-black uppercase tracking-widest mb-1">
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
        className="py-24 bg-teal-500 border-y-4 border-zinc-900"
      >
        <div className="container mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <span className="anton text-teal-200 text-xl tracking-widest block mb-2">
                Job History
              </span>
              <h2
                className="anton text-white leading-none"
                style={{ fontSize: "clamp(3rem,7vw,5.5rem)" }}
              >
                WHERE I'VE
                <br />
                WORKED
              </h2>
            </div>
          </div>

          <div className="border-2 border-zinc-900 overflow-hidden rounded-2xl shadow-[6px_6px_0px_#18181b] bg-white">
            {[
              {
                no: "01",
                company: "Tech Startup",
                role: "UI/UX Intern",
                period: "2024–Present",
              },
              {
                no: "02",
                company: "Self-Employed",
                role: "Freelance Designer",
                period: "2023–Now",
              },
              {
                no: "03",
                company: "ISTAD Design Club",
                role: "Design Lead",
                period: "2023–2024",
              },
              {
                no: "04",
                company: "Side Projects",
                role: "Visual Designer",
                period: "2022–2023",
              },
            ].map(({ no, company, role, period }, i) => (
              <div
                key={company}
                onMouseEnter={() => setHoveredJob(i)}
                onMouseLeave={() => setHoveredJob(null)}
                className={`job-row flex items-center gap-6 sm:gap-10 px-6 sm:px-10 py-6 transition-all duration-200
                  ${i < 3 ? "border-b-2 border-zinc-900" : ""}
                  ${hoveredJob === i ? "bg-teal-50" : "bg-white"}`}
              >
                <span
                  className={`job-num anton text-5xl sm:text-6xl min-w-[4rem] leading-none transition-colors ${hoveredJob === i ? "text-teal-500" : "text-zinc-200"}`}
                >
                  {no}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="anton text-2xl sm:text-3xl leading-none truncate text-zinc-900">
                    {company}
                  </h4>
                  <p
                    className={`text-sm font-bold uppercase tracking-widest mt-1 transition-colors ${hoveredJob === i ? "text-teal-600" : "text-zinc-400"}`}
                  >
                    {role}
                  </p>
                </div>
                <span
                  className={`shrink-0 text-sm font-black uppercase tracking-widest hidden sm:block transition-colors ${hoveredJob === i ? "text-teal-600" : "text-zinc-400"}`}
                >
                  {period}
                </span>
                <span
                  className={`job-arrow shrink-0 text-3xl font-bold transition-colors ${hoveredJob === i ? "text-teal-500" : "text-zinc-200"}`}
                >
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOOL ── */}
      <section id="school" className="py-24 bg-white">
        <div className="container mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-4 border-zinc-900 pb-6">
            <div>
              <span className="anton text-teal-500 text-xl tracking-widest block mb-2">
                Education
              </span>
              <h2
                className="anton text-zinc-900 leading-none"
                style={{ fontSize: "clamp(3rem,7vw,5.5rem)" }}
              >
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
                degree: "Bachelor of Computer Science",
                school:
                  "ISTAD — Institute of Science and Technology Advanced Development",
                period: "2024–Present",
                badge: "Enrolled ✓",
                accent: "border-l-teal-500",
                badgeBg: "bg-teal-50 border-teal-400 text-teal-700",
              },
              {
                icon: "🎨",
                degree: "UI/UX Design Fundamentals",
                school: "Google & Coursera",
                period: "2023",
                badge: "Certified ✓",
                accent: "border-l-orange-400",
                badgeBg: "bg-orange-50 border-orange-400 text-orange-700",
              },
              {
                icon: "⚛️",
                degree: "React & Frontend Dev",
                school: "Scrimba Bootcamp",
                period: "2024",
                badge: "Completed ✓",
                accent: "border-l-violet-400",
                badgeBg: "bg-violet-50 border-violet-400 text-violet-700",
              },
              {
                icon: "🖌️",
                degree: "Figma Design Systems",
                school: "Figma Academy",
                period: "2024",
                badge: "Pro Cert. ✓",
                accent: "border-l-teal-500",
                badgeBg: "bg-teal-50 border-teal-400 text-teal-700",
              },
            ].map(
              ({ icon, degree, school, period, badge, accent, badgeBg }) => (
                <div
                  key={degree}
                  className={`bg-white border-2 border-zinc-900 rounded-2xl shadow-[5px_5px_0px_#18181b] bounce flex gap-5 p-7 border-l-8 ${accent}`}
                >
                  <span className="text-4xl shrink-0 mt-1">{icon}</span>
                  <div>
                    <h4 className="anton text-xl text-zinc-900 leading-tight mb-1">
                      {degree}
                    </h4>
                    <p className="text-teal-600 text-sm font-bold uppercase tracking-wide mb-1">
                      {school}
                    </p>
                    <p className="text-zinc-400 text-xs font-bold uppercase mb-4">
                      {period}
                    </p>
                    <span
                      className={`inline-block ${badgeBg} border-2 rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest`}
                    >
                      {badge}
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── SKILL ── */}
      <section id="skill" className="py-24 bg-zinc-900 text-white">
        <div className="container mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-4 border-zinc-700 pb-6">
            <div>
              <span className="anton text-teal-400 text-xl tracking-widest block mb-2">
                Skills
              </span>
              <h2
                className="anton text-white leading-none"
                style={{ fontSize: "clamp(3rem,7vw,5.5rem)" }}
              >
                WHAT I DO
                <br />
                <span className="text-teal-400">BEST</span>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Skill bars */}
            <div className="space-y-7">
              {[
                { name: "UI Design", pct: 88, tools: "Figma · Adobe XD" },
                { name: "Frontend Dev", pct: 75, tools: "React · Tailwind" },
                { name: "Branding", pct: 80, tools: "Logo · Identity" },
                { name: "Prototyping", pct: 85, tools: "Framer · InVision" },
                { name: "Motion Design", pct: 65, tools: "After Effects" },
              ].map(({ name, pct, tools }) => (
                <div key={name} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <span className="anton text-xl text-white group-hover:text-teal-400 transition-colors">
                        {name}
                      </span>
                      <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest hidden sm:block">
                        {tools}
                      </span>
                    </div>
                    <span className="anton text-xl text-teal-400">{pct}%</span>
                  </div>
                  <div className="h-4 bg-zinc-800 border-2 border-zinc-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-400 to-orange-400 rounded-full border-r-2 border-zinc-900"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tool grid */}
            <div className="grid grid-cols-3 gap-0 border-2 border-zinc-700 rounded-2xl overflow-hidden self-start">
              {[
                { label: "Figma", emoji: "🎨" },
                { label: "React", emoji: "⚛️" },
                { label: "Tailwind", emoji: "💨" },
                { label: "HTML/CSS", emoji: "🌐" },
                { label: "Framer", emoji: "🖱️" },
                { label: "After FX", emoji: "🎬" },
              ].map(({ label, emoji }, i) => (
                <div
                  key={label}
                  className={`p-6 text-center bg-zinc-800 hover:bg-teal-500 hover:text-zinc-900 transition-all duration-200 cursor-default group
                    ${i % 3 !== 2 ? "border-r-2 border-zinc-700" : ""}
                    ${i < 3 ? "border-b-2 border-zinc-700" : ""}`}
                >
                  <span className="text-2xl block mb-2">{emoji}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-300 group-hover:text-zinc-900 transition-colors">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <span className="anton text-teal-500 text-xl tracking-widest block mb-4">
                Contact
              </span>
              <h2
                className="anton text-zinc-900 leading-none mb-8"
                style={{ fontSize: "clamp(3rem,7vw,6rem)" }}
              >
                LET'S
                <br />
                <span className="text-teal-500">BUILD</span>
                <br />
                TOGETHER
              </h2>
              <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-sm">
                Whether it's a project, internship, or just saying hi — I'd love
                to connect! Always open to learning and collaborating.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Email", value: "souheng@istad.co" },
                  { label: "LinkedIn", value: "linkedin.com/in/souheng" },
                  { label: "GitHub", value: "github.com/souheng" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 pb-4 border-b-2 border-zinc-200"
                  >
                    <span className="anton text-teal-500 text-sm tracking-widest w-20 shrink-0">
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
            <div className="bg-white border-2 border-zinc-900 rounded-2xl shadow-[6px_6px_0px_#0d9488] p-8 sm:p-10">
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-zinc-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-slate-50 border-2 border-zinc-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 text-zinc-900 placeholder-zinc-400 px-4 py-3 rounded-xl outline-none transition-all text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-zinc-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-slate-50 border-2 border-zinc-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 text-zinc-900 placeholder-zinc-400 px-4 py-3 rounded-xl outline-none transition-all text-sm font-medium"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-zinc-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    className="w-full bg-slate-50 border-2 border-zinc-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 text-zinc-900 placeholder-zinc-400 px-4 py-3 rounded-xl outline-none transition-all text-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-zinc-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    className="w-full bg-slate-50 border-2 border-zinc-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 text-zinc-900 placeholder-zinc-400 px-4 py-3 rounded-xl outline-none transition-all text-sm font-medium resize-none"
                  />
                </div>
                <button className="w-full py-4 bg-teal-500 hover:bg-teal-600 text-white font-black text-sm uppercase tracking-widest border-2 border-zinc-900 rounded-xl shadow-[4px_4px_0px_#18181b] hover:shadow-[6px_6px_0px_#18181b] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200">
                  Send Message →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-zinc-900 border-t-4 border-zinc-700 py-8">
        <div className="container mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="anton text-2xl text-teal-400 tracking-widest">
            SOUHENG<span className="text-orange-400">.</span>
          </span>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            © 2026 Souheng — ISTAD Student
          </p>
          <button
            onClick={() => scrollTo("home")}
            className="text-zinc-500 hover:text-teal-400 text-xs font-black uppercase tracking-widest transition-colors"
          >
            ↑ Top
          </button>
        </div>
      </footer>
    </div>
  );
}
