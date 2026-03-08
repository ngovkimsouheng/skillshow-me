import { useState, useEffect, useRef } from "react";

export default function Portfolio2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.25 },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
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

  const skills = [
    { name: "Figma", size: "text-3xl", weight: "font-black" },
    { name: "UI Design", size: "text-xl", weight: "font-bold" },
    { name: "React", size: "text-2xl", weight: "font-black" },
    { name: "Motion", size: "text-lg", weight: "font-medium" },
    { name: "Tailwind CSS", size: "text-xl", weight: "font-bold" },
    { name: "Branding", size: "text-3xl", weight: "font-black" },
    { name: "Framer", size: "text-base", weight: "font-medium" },
    { name: "Art Direction", size: "text-2xl", weight: "font-bold" },
    { name: "Webflow", size: "text-lg", weight: "font-bold" },
    { name: "After Effects", size: "text-xl", weight: "font-medium" },
    { name: "UX Research", size: "text-base", weight: "font-medium" },
    { name: "Typography", size: "text-2xl", weight: "font-black" },
  ];

  return (
    <div className="bg-[#F5F0E8] text-[#1a1a2e] min-h-screen overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Display:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,700&family=Outfit:wght@200;300;400;500;600;700;900&display=swap');
        * { font-family: 'Outfit', sans-serif; }
        .serif { font-family: 'Noto Serif Display', serif; }
        .writing-v { writing-mode: vertical-rl; text-orientation: mixed; }
        .bg-ink { background-color: #1a1a2e; }
        .bg-cream { background-color: #F5F0E8; }
        .bg-saffron { background-color: #E8A020; }
        .bg-terracotta { background-color: #C75B3A; }
        .text-ink { color: #1a1a2e; }
        .text-saffron { color: #E8A020; }
        .text-terracotta { color: #C75B3A; }
        .text-muted { color: #8a8070; }

        .ticker { animation: ticker 16s linear infinite; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        .bento-hover { transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1); }
        .bento-hover:hover { transform: scale(1.02) rotate(-0.5deg); }

        .timeline-line::before {
          content: '';
          position: absolute;
          left: 11px; top: 28px; bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #1a1a2e 60%, transparent);
        }

        .tag-hover {
          transition: all 0.2s ease;
          cursor: default;
        }
        .tag-hover:hover {
          color: #C75B3A;
          transform: scale(1.08);
        }

        .ink-underline {
          text-decoration: none;
          background-image: linear-gradient(#E8A020, #E8A020);
          background-size: 100% 3px;
          background-repeat: no-repeat;
          background-position: 0 100%;
        }

        .float-label {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }

        .fold-corner {
          position: relative;
          overflow: hidden;
        }
        .fold-corner::after {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 0; height: 0;
          border-style: solid;
          border-width: 0 0 32px 32px;
          border-color: transparent transparent #F5F0E8 transparent;
        }

        .polaroid {
          background: white;
          padding: 12px 12px 40px 12px;
          box-shadow: 3px 3px 0 rgba(0,0,0,0.1), 8px 8px 20px rgba(0,0,0,0.08);
        }

        .circle-tag {
          border-radius: 9999px;
          transition: all 0.25s ease;
        }
        .circle-tag:hover {
          background: #1a1a2e;
          color: #F5F0E8;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-10px) rotate(-2deg); }
        }
        .float-anim { animation: float 5s ease-in-out infinite; }

        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(1.5deg); }
          50% { transform: translateY(-14px) rotate(1.5deg); }
        }
        .float-anim2 { animation: float2 6s ease-in-out infinite 1s; }
      `}</style>

      {/* ── CURSOR GLOW ── */}
      <div
        className="fixed w-64 h-64 rounded-full pointer-events-none z-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(232,160,32,0.4) 0%, transparent 70%)",
          left: mousePos.x - 128,
          top: mousePos.y - 128,
          transition: "left 0.15s ease, top 0.15s ease",
        }}
      />

      {/* ── NAV ── */}
      <nav
        className="sticky top-0 z-50 bg-[#F5F0E8]/90 backdrop-blur-md"
        style={{ borderBottom: "1px solid rgba(26,26,46,0.12)" }}
      >
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-8">
            {/* Logo — left column with vertical accent */}
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-3 shrink-0"
            >
              <div className="w-1 h-8 bg-saffron rounded-full" />
              <span className="serif text-2xl font-bold text-ink tracking-tight">
                Mia<span className="text-terracotta italic"> Chen</span>
              </span>
            </button>

            {/* Center nav — pill style */}
            <div
              className="hidden md:flex items-center gap-1 bg-white/60 rounded-full px-2 py-1.5 backdrop-blur"
              style={{ border: "1px solid rgba(26,26,46,0.08)" }}
            >
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-all duration-200
                    ${active === l ? "bg-ink text-[#F5F0E8]" : "text-muted hover:text-ink hover:bg-black/5"}`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Right CTA */}
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-terracotta text-white text-xs font-bold tracking-wide shrink-0 hover:opacity-90 transition-opacity"
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Hire Me
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-black/5 transition"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="md:hidden bg-[#F5F0E8] px-4 py-4 flex flex-col gap-2"
            style={{ borderTop: "1px solid rgba(26,26,46,0.08)" }}
          >
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-semibold capitalize transition ${active === l ? "bg-ink text-[#F5F0E8]" : "hover:bg-black/5 text-muted"}`}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HOME ── Bento magazine layout */}
      <section id="home" className="py-12 lg:py-20 relative z-10">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Ticker above hero */}
          <div className="overflow-hidden mb-8 rounded-full bg-ink py-2.5">
            <div className="ticker inline-flex whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <span key={i} className="inline-flex items-center">
                  {[
                    "UI DESIGN",
                    "·",
                    "UX RESEARCH",
                    "·",
                    "BRANDING",
                    "·",
                    "MOTION",
                    "·",
                    "FRONTEND",
                    "·",
                    "ART DIRECTION",
                    "·",
                  ].map((t, j) => (
                    <span
                      key={j}
                      className={`mx-6 text-xs font-semibold tracking-[0.2em] ${t === "·" ? "text-saffron" : "text-[#F5F0E8]/60"}`}
                    >
                      {t}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          {/* BENTO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-auto">
            {/* Hero text — col 1-7 */}
            <div className="sm:col-span-6 lg:col-span-7 bg-ink text-[#F5F0E8] rounded-3xl p-8 sm:p-10 lg:p-14 flex flex-col justify-between min-h-[420px] relative overflow-hidden bento-hover">
              <div className="absolute top-8 right-8 float-label text-[#F5F0E8]/10 font-black text-xs tracking-[0.3em] uppercase">
                UI·UX·CREATIVE
              </div>
              <div>
                <span className="inline-block bg-saffron text-ink text-xs font-black px-4 py-1.5 rounded-full tracking-widest mb-6">
                  ✦ OPEN TO WORK
                </span>
                <h1
                  className="serif font-black leading-[0.9] mb-4"
                  style={{ fontSize: "clamp(3.5rem,7vw,6.5rem)" }}
                >
                  Hello,
                  <br />
                  <em className="text-saffron not-italic">I'm Mia</em>
                  <br />
                  Chen.
                </h1>
                <p className="text-[#F5F0E8]/60 text-sm leading-relaxed max-w-sm font-light mt-4">
                  UI/UX Designer crafting thoughtful digital experiences. I live
                  at the intersection of beauty and function.
                </p>
              </div>
              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => scrollTo("experience")}
                  className="px-6 py-3 bg-saffron text-ink text-xs font-black rounded-full tracking-wide hover:opacity-90 transition"
                >
                  See My Work →
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-6 py-3 bg-white/10 text-[#F5F0E8] text-xs font-semibold rounded-full hover:bg-white/15 transition"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Photo — col 8-10 */}
            <div className="sm:col-span-3 lg:col-span-3 rounded-3xl overflow-hidden relative min-h-[280px] bento-hover">
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80"
                alt="Profile"
                className="w-full h-full object-cover absolute inset-0"
                style={{ filter: "saturate(0.9)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(26,26,46,0.6) 0%, transparent 50%)",
                }}
              />
              <div className="absolute bottom-5 left-5">
                <p className="text-white/90 text-xs font-semibold tracking-widest uppercase">
                  Creative Director
                </p>
              </div>
            </div>

            {/* Stats — col 11-12 */}
            <div className="sm:col-span-3 lg:col-span-2 grid grid-rows-3 gap-4">
              {[
                ["7+", "Years"],
                ["60+", "Projects"],
                ["40+", "Clients"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="bg-white rounded-2xl flex flex-col items-center justify-center py-4 bento-hover"
                  style={{ boxShadow: "0 2px 12px rgba(26,26,46,0.06)" }}
                >
                  <p className="serif font-black text-3xl text-terracotta">
                    {n}
                  </p>
                  <p className="text-muted text-xs font-medium tracking-widest uppercase mt-0.5">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── Split-screen with oversized quote */}
      <section
        id="about"
        className="py-20 bg-ink text-[#F5F0E8] relative overflow-hidden"
      >
        {/* Large background watermark */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 serif font-black text-white/[0.03] leading-none select-none pointer-events-none"
          style={{ fontSize: "25vw" }}
        >
          MIA
        </div>

        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header — horizontal rule style */}
          <div className="flex items-center gap-6 mb-16">
            <span className="text-saffron font-black text-xs tracking-[0.3em] uppercase shrink-0">
              02 — ABOUT
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Polaroid photos — stacked */}
            <div className="lg:col-span-4 flex justify-center relative h-72 lg:h-96">
              <div
                className="polaroid w-48 sm:w-56 absolute float-anim"
                style={{ transform: "rotate(-3deg)", top: "10%", left: "5%" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80"
                  alt=""
                  className="w-full aspect-square object-cover"
                  style={{ filter: "sepia(0.2)" }}
                />
                <p
                  className="text-center text-xs text-stone-400 mt-2 font-medium"
                  style={{ fontFamily: "cursive" }}
                >
                  at work ✨
                </p>
              </div>
              <div
                className="polaroid w-44 sm:w-52 absolute float-anim2"
                style={{
                  transform: "rotate(2deg)",
                  top: "30%",
                  right: "5%",
                  zIndex: 2,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80"
                  alt=""
                  className="w-full aspect-square object-cover"
                  style={{ filter: "sepia(0.15)" }}
                />
                <p
                  className="text-center text-xs text-stone-400 mt-2 font-medium"
                  style={{ fontFamily: "cursive" }}
                >
                  designing 🎨
                </p>
              </div>
            </div>

            {/* Text — large quote style */}
            <div className="lg:col-span-8">
              <blockquote className="serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-[#F5F0E8] mb-10">
                "I don't just make things{" "}
                <em className="text-saffron">look beautiful</em> — I make them
                feel <em className="text-terracotta">inevitable.</em>"
              </blockquote>
              <p className="text-[#F5F0E8]/50 text-sm leading-loose font-light mb-6 max-w-2xl">
                7+ years designing across luxury, tech, and fashion industries.
                I believe the best interfaces disappear — leaving only the
                experience. I work from Seoul, Paris, and wherever my laptop
                takes me.
              </p>
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                {[
                  { icon: "◎", label: "Visual Systems" },
                  { icon: "⟡", label: "Motion & Feel" },
                  { icon: "◈", label: "Code-Ready" },
                  { icon: "◬", label: "Research-Led" },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="text-saffron text-lg">{icon}</span>
                    <span className="text-[#F5F0E8]/60 text-xs font-medium tracking-wide uppercase">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── Horizontal scroll cards */}
      <section id="experience" className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-16">
            <span className="text-terracotta font-black text-xs tracking-[0.3em] uppercase shrink-0">
              03 — EXPERIENCE
            </span>
            <div className="flex-1 h-px bg-ink/10" />
            <span className="serif font-light text-ink/20 text-6xl select-none hidden sm:block">
              III
            </span>
          </div>

          {/* Large feature card for current + 2 side cards */}
          <div className="grid lg:grid-cols-12 gap-5">
            {/* Featured card */}
            <div className="lg:col-span-6 bg-terracotta text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[360px] relative overflow-hidden">
              <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-white/5" />
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-white/5" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-xs font-bold tracking-widest uppercase">
                    Current Role
                  </span>
                </div>
                <h3 className="serif font-black text-4xl leading-tight mb-2">
                  Creative
                  <br />
                  Director
                </h3>
                <p className="text-white/70 text-sm font-semibold tracking-widest uppercase mb-6">
                  Lumière Studio · 2022–Now
                </p>
                <p className="text-white/70 text-sm leading-relaxed font-light">
                  Directing creative vision for global luxury & lifestyle
                  brands. Leading a team of 6 designers across web, mobile, and
                  brand identity.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-8 relative z-10">
                <div className="flex -space-x-2">
                  {[
                    "bg-yellow-300",
                    "bg-blue-300",
                    "bg-pink-300",
                    "bg-green-300",
                  ].map((c, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-full border-2 border-terracotta ${c}`}
                    />
                  ))}
                </div>
                <span className="text-white/60 text-xs font-medium ml-2">
                  Team of 6
                </span>
              </div>
            </div>

            {/* Right stack */}
            <div className="lg:col-span-6 grid grid-rows-2 gap-5">
              {[
                {
                  title: "Senior UI/UX Designer",
                  company: "Atelier Digital",
                  period: "2019–2022",
                  desc: "Award-winning interfaces for fashion, beauty, and e-commerce clients worldwide.",
                },
                {
                  title: "Visual Designer",
                  company: "Freelance",
                  period: "2017–2019",
                  desc: "Brand identities, editorial layouts, and UI kits for 30+ international clients.",
                },
              ].map(({ title, company, period, desc }) => (
                <div
                  key={title}
                  className="bg-white rounded-3xl p-7 flex gap-5 items-start hover:-translate-y-1 transition-transform duration-300"
                  style={{ boxShadow: "0 4px 24px rgba(26,26,46,0.07)" }}
                >
                  <div className="w-10 h-10 bg-saffron/10 rounded-2xl flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-saffron text-lg">◎</span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-ink leading-tight">
                      {title}
                    </h4>
                    <p className="text-terracotta text-xs font-bold tracking-widest uppercase mt-0.5 mb-3">
                      {company} · {period}
                    </p>
                    <p className="text-muted text-sm leading-relaxed font-light">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── JOB ── Vertical timeline river */}
      <section id="job" className="py-20" style={{ background: "#EEEAE0" }}>
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-16">
            <span className="text-terracotta font-black text-xs tracking-[0.3em] uppercase shrink-0">
              04 — JOB HISTORY
            </span>
            <div className="flex-1 h-px bg-ink/10" />
          </div>

          {/* Timeline layout — alternating left/right on desktop */}
          <div className="relative max-w-3xl mx-auto">
            {/* Center spine */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-ink/10 -translate-x-1/2" />

            {[
              {
                no: "01",
                company: "Lumière Studio",
                role: "Creative Director",
                period: "2022–Present",
                side: "left",
              },
              {
                no: "02",
                company: "Atelier Digital",
                role: "Senior UI Designer",
                period: "2019–2022",
                side: "right",
              },
              {
                no: "03",
                company: "Maison Créative",
                role: "Junior Designer",
                period: "2017–2019",
                side: "left",
              },
              {
                no: "04",
                company: "Freelance",
                role: "Visual Designer",
                period: "2015–2017",
                side: "right",
              },
            ].map(({ no, company, role, period, side }, i) => (
              <div
                key={company}
                className={`relative flex items-center mb-8 ${side === "right" ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div
                  className={`w-full lg:w-5/12 bg-white rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 ${side === "right" ? "lg:ml-auto" : ""}`}
                  style={{ boxShadow: "0 4px 20px rgba(26,26,46,0.06)" }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="serif font-black text-4xl text-ink/10">
                        {no}
                      </span>
                      <h4 className="font-black text-lg text-ink -mt-1">
                        {company}
                      </h4>
                      <p className="text-terracotta text-xs font-bold tracking-widest uppercase mt-0.5">
                        {role}
                      </p>
                    </div>
                    <span className="text-muted text-xs font-medium bg-ink/5 px-3 py-1.5 rounded-full shrink-0">
                      {period}
                    </span>
                  </div>
                </div>

                {/* Spine dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-ink items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-saffron" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOOL ── Horizontal card scroll */}
      <section id="school" className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-16">
            <span className="text-terracotta font-black text-xs tracking-[0.3em] uppercase shrink-0">
              05 — EDUCATION
            </span>
            <div className="flex-1 h-px bg-ink/10" />
          </div>

          {/* Notebook-style cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "✦",
                degree: "Bachelor of Fine Arts",
                school: "École des Beaux-Arts",
                period: "2015–19",
                badge: "Mention TB",
                color: "bg-terracotta",
              },
              {
                icon: "◎",
                degree: "UX Design Cert.",
                school: "IDF Foundation",
                period: "2020",
                badge: "Excellence",
                color: "bg-saffron",
              },
              {
                icon: "⟡",
                degree: "Motion Design",
                school: "School of Motion",
                period: "2021",
                badge: "Advanced",
                color: "bg-ink",
              },
              {
                icon: "◈",
                degree: "Design Systems",
                school: "Figma Academy",
                period: "2022",
                badge: "Pro Cert.",
                color: "bg-terracotta",
              },
            ].map(({ icon, degree, school, period, badge, color }) => (
              <div
                key={degree}
                className="bg-white rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 fold-corner"
                style={{ boxShadow: "0 4px 20px rgba(26,26,46,0.07)" }}
              >
                {/* Top color band */}
                <div className={`${color} h-2 w-full`} />
                <div className="p-6">
                  <span
                    className={`${color} text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4`}
                  >
                    {badge}
                  </span>
                  <div className="text-3xl mb-3 text-ink/20">{icon}</div>
                  <h4 className="font-black text-base text-ink leading-tight mb-1">
                    {degree}
                  </h4>
                  <p className="text-terracotta text-xs font-semibold tracking-wide mb-1">
                    {school}
                  </p>
                  <p className="text-muted text-xs">{period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILL ── Tag cloud + radial rings */}
      <section
        id="skill"
        className="py-20 bg-ink text-[#F5F0E8] overflow-hidden relative"
      >
        {/* Decorative rings */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-10 pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full border border-white/30" />
          <div className="absolute inset-8 rounded-full border border-white/20" />
          <div className="absolute inset-16 rounded-full border border-white/15" />
        </div>

        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-6 mb-16">
            <span className="text-saffron font-black text-xs tracking-[0.3em] uppercase shrink-0">
              06 — SKILLS
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Tag cloud */}
            <div>
              <h2 className="serif font-black text-4xl sm:text-5xl leading-tight mb-3">
                What I<br />
                <em className="text-saffron">bring</em> to
                <br />
                your project
              </h2>
              <p className="text-[#F5F0E8]/40 text-sm font-light leading-loose mb-10">
                A rare mix of strategic thinking, technical fluency, and
                fine-art taste.
              </p>
              {/* Tag word cloud */}
              <div className="flex flex-wrap gap-3">
                {skills.map(({ name, size, weight }) => (
                  <span
                    key={name}
                    className={`${size} ${weight} tag-hover text-[#F5F0E8]/70`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Proficiency as circular gauge cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "UI Design", pct: 96 },
                { name: "Frontend", pct: 84 },
                { name: "Branding", pct: 90 },
                { name: "Motion", pct: 76 },
                { name: "Research", pct: 82 },
                { name: "Strategy", pct: 88 },
              ].map(({ name, pct }) => {
                const r = 32,
                  circ = 2 * Math.PI * r;
                const offset = circ - (pct / 100) * circ;
                return (
                  <div
                    key={name}
                    className="bg-white/5 rounded-2xl p-5 flex flex-col items-center gap-2 hover:bg-white/10 transition-all"
                  >
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <circle
                        cx="40"
                        cy="40"
                        r={r}
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="6"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r={r}
                        fill="none"
                        stroke="#E8A020"
                        strokeWidth="6"
                        strokeDasharray={circ}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        transform="rotate(-90 40 40)"
                      />
                      <text
                        x="40"
                        y="45"
                        textAnchor="middle"
                        className="font-black"
                        fill="white"
                        fontSize="14"
                        fontWeight="900"
                      >
                        {pct}%
                      </text>
                    </svg>
                    <span className="text-[#F5F0E8]/60 text-xs font-semibold tracking-wide uppercase text-center">
                      {name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── Full-bleed split with overlapping elements */}
      <section id="contact" className="py-20 bg-[#F5F0E8] relative">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-16">
            <span className="text-terracotta font-black text-xs tracking-[0.3em] uppercase shrink-0">
              07 — CONTACT
            </span>
            <div className="flex-1 h-px bg-ink/10" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left — large serif headline */}
            <div className="lg:col-span-5">
              <h2
                className="serif font-black leading-[0.9] mb-8"
                style={{ fontSize: "clamp(3rem,6vw,5.5rem)" }}
              >
                Let's
                <br />
                make
                <br />
                <em className="text-terracotta">something</em>
                <br />
                beautiful.
              </h2>
              <p className="text-muted text-sm leading-loose mb-8 font-light max-w-xs">
                Every great project starts with a conversation. Tell me what
                you're dreaming of.
              </p>

              {/* Contact items as stacked pills */}
              <div className="space-y-3">
                {[
                  { icon: "✉", label: "mia@chen.design" },
                  { icon: "◎", label: "linkedin.com/in/miachen" },
                  { icon: "⟡", label: "dribbble.com/miachen" },
                ].map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 bg-white rounded-2xl px-5 py-3.5 hover:-translate-x-1 transition-transform"
                    style={{ boxShadow: "0 2px 12px rgba(26,26,46,0.06)" }}
                  >
                    <span className="text-saffron text-lg shrink-0">
                      {icon}
                    </span>
                    <span className="text-ink text-sm font-medium">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — floating form card */}
            <div className="lg:col-span-7 bg-ink rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              {/* Decorative dot grid inside form */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #F5F0E8 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative z-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    ["Name", "Mia Chen"],
                    ["Email", "mia@email.com"],
                  ].map(([l, p]) => (
                    <div key={l}>
                      <label className="block text-[#F5F0E8]/40 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                        {l}
                      </label>
                      <input
                        type="text"
                        placeholder={p}
                        className="w-full bg-white/5 text-[#F5F0E8] placeholder-white/20 px-4 py-3 rounded-xl outline-none text-sm font-light transition-all"
                        style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#E8A020")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                        }
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-[#F5F0E8]/40 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Brand identity project…"
                    className="w-full bg-white/5 text-[#F5F0E8] placeholder-white/20 px-4 py-3 rounded-xl outline-none text-sm font-light transition-all"
                    style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                    onFocus={(e) => (e.target.style.borderColor = "#E8A020")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                    }
                  />
                </div>
                <div>
                  <label className="block text-[#F5F0E8]/40 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your vision…"
                    className="w-full bg-white/5 text-[#F5F0E8] placeholder-white/20 px-4 py-3 rounded-xl outline-none text-sm font-light resize-none transition-all"
                    style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                    onFocus={(e) => (e.target.style.borderColor = "#E8A020")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                    }
                  />
                </div>
                <button className="w-full py-4 bg-saffron text-ink font-black text-sm tracking-[0.2em] uppercase rounded-2xl hover:opacity-90 transition-all hover:-translate-y-0.5">
                  Send Message →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-ink py-8">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="serif text-2xl font-bold text-[#F5F0E8] italic">
            Mia<span className="text-saffron not-italic"> Chen</span>
          </span>
          <p className="text-[#F5F0E8]/30 text-xs tracking-[0.2em] uppercase">
            © 2026 Mia Chen — All Rights Reserved
          </p>
          <button
            onClick={() => scrollTo("home")}
            className="text-[#F5F0E8]/30 hover:text-saffron text-xs tracking-widest uppercase font-semibold transition-colors"
          >
            ↑ Top
          </button>
        </div>
      </footer>
    </div>
  );
}
