import { useState, useEffect } from "react";

export default function Portfolio7() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [hoveredJob, setHoveredJob] = useState(null);
  const [count, setCount] = useState({ years: 0, projects: 0, clients: 0 });

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
    const targets = { years: 8, projects: 64, clients: 37 };
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount({
        years: Math.floor(eased * targets.years),
        projects: Math.floor(eased * targets.projects),
        clients: Math.floor(eased * targets.clients),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
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
    <div className="bg-white text-slate-800 min-h-screen overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,700&family=IBM+Plex+Mono:wght@300;400;500;600&display=swap');
        * { font-family: 'IBM Plex Mono', monospace; }
        .condensed { font-family: 'Barlow Condensed', sans-serif; }

        :root {
          --cobalt: #1B4FD8;
          --cobalt-light: #EEF2FF;
          --cobalt-mid: #C7D2FE;
          --slate: #1e293b;
          --mist: #f8fafc;
          --line: #e2e8f0;
        }

        .bg-cobalt { background: var(--cobalt); }
        .text-cobalt { color: var(--cobalt); }
        .border-cobalt { border-color: var(--cobalt); }
        .bg-cobalt-light { background: var(--cobalt-light); }

        /* Blueprint grid overlay */
        .blueprint-grid {
          background-image:
            linear-gradient(rgba(27,79,216,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(27,79,216,0.04) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        /* Diagonal hatching */
        .hatch {
          background-image: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 4px,
            rgba(27,79,216,0.06) 4px,
            rgba(27,79,216,0.06) 5px
          );
        }

        /* Ticker */
        .ticker { animation: tick 18s linear infinite; }
        @keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* Hover lift */
        .arch-card {
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease;
        }
        .arch-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(27,79,216,0.12);
        }

        /* Underline reveal */
        .link-reveal {
          position: relative;
          text-decoration: none;
        }
        .link-reveal::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: var(--cobalt);
          transition: width 0.3s ease;
        }
        .link-reveal:hover::after { width: 100%; }

        /* Section number watermark */
        .section-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          color: rgba(27,79,216,0.04);
          font-size: 20vw;
          line-height: 1;
          position: absolute;
          right: -2vw;
          top: 50%;
          transform: translateY(-50%);
          user-select: none;
          pointer-events: none;
          letter-spacing: -0.05em;
        }

        /* Job row */
        .job-row {
          transition: all 0.2s ease;
          cursor: default;
        }
        .job-row:hover { background: var(--cobalt-light); }
        .job-row:hover .job-num { color: var(--cobalt); }
        .job-row:hover .job-arrow { transform: translateX(6px); color: var(--cobalt); }
        .job-arrow { transition: transform 0.2s ease, color 0.2s ease; }

        /* Skill tag */
        .skill-tag {
          transition: all 0.2s ease;
          cursor: default;
        }
        .skill-tag:hover {
          background: var(--cobalt);
          color: white;
          border-color: var(--cobalt);
        }

        /* Form input */
        .arch-input {
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid var(--line);
          outline: none;
        }
        .arch-input:focus {
          border-color: var(--cobalt);
          box-shadow: 0 0 0 3px rgba(27,79,216,0.08);
        }

        /* Diagonal divider */
        .diagonal-divider {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        .diagonal-divider-bottom {
          clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>

      {/* ── NAV ── */}
      <nav
        className="w-full fixed top-0 z-50 bg-white border-b border-slate-100"
        style={{ boxShadow: "0 1px 0 rgba(27,79,216,0.08)" }}
      >
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-8">
            {/* Logo */}
            <button
              onClick={() => scrollTo("home")}
              className="condensed font-black text-2xl tracking-tight text-slate-800 shrink-0 flex items-center gap-2"
            >
              <span className="w-6 h-6 bg-cobalt rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-black">A</span>
              </span>
              ARIA<span className="text-cobalt">.</span>
            </button>

            {/* Desktop nav — underline style */}
            <div className="hidden md:flex items-center gap-6">
              {links.map((l, i) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className={`link-reveal text-xs font-medium uppercase tracking-[0.15em] transition-colors pb-1
                    ${active === l ? "text-cobalt" : "text-slate-400 hover:text-slate-800"}`}
                  style={
                    active === l ? { borderBottom: "2px solid #1B4FD8" } : {}
                  }
                >
                  <span className="text-cobalt opacity-50 mr-1">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {l}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:block condensed font-bold text-sm uppercase tracking-widest px-6 py-2.5 bg-cobalt text-white hover:opacity-90 transition-opacity shrink-0"
            >
              Hire Me
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded hover:bg-slate-50 transition"
            >
              <svg
                className="w-5 h-5 text-slate-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white">
            <div className="container mx-auto md:max-w-7xl px-4 py-3 flex flex-col">
              {links.map((l, i) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className={`text-left px-4 py-3.5 text-xs font-medium uppercase tracking-[0.15em] border-b border-slate-50 transition
                    ${active === l ? "text-cobalt bg-cobalt-light" : "text-slate-500 hover:bg-slate-50"}`}
                >
                  <span className="text-cobalt opacity-40 mr-2">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {l}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ── TICKER ── */}
      <div className="bg-cobalt overflow-hidden py-2.5">
        <div className="ticker inline-flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center">
              {[
                "UI DESIGN",
                "—",
                "UX RESEARCH",
                "—",
                "BRANDING",
                "—",
                "REACT",
                "—",
                "FIGMA",
                "—",
                "MOTION",
                "—",
                "ART DIRECTION",
                "—",
              ].map((t, j) => (
                <span
                  key={j}
                  className={`mx-8 text-xs tracking-[0.25em] font-medium ${t === "—" ? "text-white/30" : "text-white/80"}`}
                >
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── HOME ── Full-bleed architectural layout */}
      <section id="home" className="blueprint-grid relative overflow-hidden">
        {/* Large section number watermark */}
        <div className="section-num">01</div>

        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Two-column full-height split */}
          <div className="grid lg:grid-cols-12 min-h-[90vh] items-stretch">
            {/* Left — narrow sidebar with vertical text */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center gap-6 py-16 border-r border-slate-100">
              <span
                className="condensed font-bold text-xs tracking-[0.3em] uppercase text-slate-300 writing-v"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                ARIA SVENSSON — 2026
              </span>
              <div className="w-px flex-1 bg-cobalt/20" />
              <span className="text-cobalt text-xs">✦</span>
            </div>

            {/* Center — hero text */}
            <div className="lg:col-span-7 flex flex-col justify-center py-16 lg:px-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-cobalt" />
                <span className="text-cobalt text-xs tracking-[0.3em] uppercase font-medium">
                  UI/UX Designer & Creative Technologist
                </span>
              </div>

              <h1
                className="condensed font-black leading-[0.85] text-slate-800 mb-6"
                style={{ fontSize: "clamp(4rem, 11vw, 9.5rem)" }}
              >
                ARIA
                <br />
                <span className="text-cobalt">SVENS</span>
                <br />
                <span
                  className="text-slate-200"
                  style={{ WebkitTextStroke: "2px #1B4FD8" }}
                >
                  SON.
                </span>
              </h1>

              <p className="text-slate-400 text-sm leading-loose max-w-md mb-10 font-light">
                I design interfaces that feel inevitable. Precision-crafted
                digital experiences at the intersection of Scandinavian clarity
                and modern technology.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <button
                  onClick={() => scrollTo("experience")}
                  className="condensed font-bold px-8 py-3.5 bg-cobalt text-white text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  VIEW WORK →
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="condensed font-bold px-8 py-3.5 border border-slate-200 text-slate-600 text-sm uppercase tracking-widest hover:border-cobalt hover:text-cobalt transition-colors"
                >
                  CONTACT
                </button>
              </div>

              {/* Stats — inline horizontal */}
              <div className="flex gap-0 border border-slate-100 overflow-hidden w-fit">
                {[
                  ["years", "Years Exp."],
                  ["projects", "Projects"],
                  ["clients", "Clients"],
                ].map(([key, label], i) => (
                  <div
                    key={key}
                    className={`px-8 py-5 text-center ${i < 2 ? "border-r border-slate-100" : ""} bg-white`}
                  >
                    <p className="condensed font-black text-4xl text-cobalt leading-none">
                      {count[key]}+
                    </p>
                    <p className="text-slate-400 text-xs tracking-[0.15em] uppercase mt-1 font-medium">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image with overlaid elements */}
            <div className="lg:col-span-4 relative flex items-center pb-0 overflow-hidden">
              {/* Hatch pattern background */}
              <div className="absolute inset-0 hatch" />

              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80"
                alt="Profile"
                className="relative w-full h-[80vh] object-cover "
                style={{ minHeight: "500px", filter: "grayscale(15%)" }}
              />

              {/* Overlay label */}
              <div className="absolute top-8 left-0 right-0 flex justify-center">
                <div className="bg-white/90 backdrop-blur px-5 py-2 border border-cobalt/20">
                  <p className="text-cobalt text-xs font-medium tracking-[0.2em] uppercase">
                    Creative Director
                  </p>
                </div>
              </div>

              {/* Corner measurement marks */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cobalt/50" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cobalt/50" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cobalt/50" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cobalt/50" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── Three-column magazine */}
      <section
        id="about"
        className="py-24 bg-slate-50 relative overflow-hidden"
      >
        <div className="section-num">02</div>
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header — wide rule */}
          <div className="flex items-center gap-6 mb-16">
            <span className="condensed font-black text-cobalt text-xs tracking-[0.4em] uppercase">
              02
            </span>
            <div className="flex-1 h-px bg-slate-200" />
            <span className="condensed font-black text-slate-200 text-xs tracking-[0.4em] uppercase">
              ABOUT
            </span>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Col 1 — large headline */}
            <div className="lg:col-span-1">
              <h2
                className="condensed font-black text-slate-800 leading-[0.85] mb-6"
                style={{ fontSize: "clamp(3rem,5vw,4.5rem)" }}
              >
                DESIGN
                <br />
                AS AN
                <br />
                <span className="text-cobalt">EXACT</span>
                <br />
                SCIENCE.
              </h2>
              <div className="w-12 h-1 bg-cobalt mb-6" />
              <div className="flex flex-wrap gap-2">
                {[
                  "Figma",
                  "React",
                  "Framer",
                  "Tailwind",
                  "After FX",
                  "Webflow",
                ].map((t) => (
                  <span
                    key={t}
                    className="skill-tag text-xs font-medium border border-slate-200 px-3 py-1.5 text-slate-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Col 2 — body text */}
            <div className="lg:col-span-1">
              <p className="text-slate-600 text-sm leading-loose mb-5 font-light">
                I specialize in designing modern web and mobile interfaces with
                systematic precision. Born in Stockholm, working globally — I
                bring a Scandinavian philosophy of radical simplicity to every
                project.
              </p>
              <p className="text-slate-600 text-sm leading-loose mb-8 font-light">
                8+ years across luxury tech, fintech, and creative studios. I
                believe the best design is invisible — it guides without
                demanding and delights without overwhelming.
              </p>
              <div className="border-l-2 border-cobalt pl-5">
                <p className="text-slate-400 text-xs italic font-light leading-loose">
                  "Simplicity is not the absence of clutter — it's the presence
                  of intention."
                </p>
              </div>
            </div>

            {/* Col 3 — cards grid */}
            <div className="lg:col-span-1 grid grid-cols-2 gap-3">
              {[
                {
                  num: "01",
                  title: "Visual Systems",
                  desc: "Scalable design languages",
                },
                {
                  num: "02",
                  title: "Motion & Feel",
                  desc: "Micro-interactions that delight",
                },
                {
                  num: "03",
                  title: "Code-Fluent",
                  desc: "React, Tailwind, Framer",
                },
                {
                  num: "04",
                  title: "Research-Led",
                  desc: "Data-informed decisions",
                },
              ].map(({ num, title, desc }) => (
                <div
                  key={num}
                  className="bg-white border border-slate-100 p-5 arch-card"
                >
                  <span className="condensed font-black text-cobalt/30 text-2xl leading-none block mb-3">
                    {num}
                  </span>
                  <h4 className="condensed font-bold text-slate-800 text-sm uppercase tracking-wide mb-1">
                    {title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── Full-width feature cards with number labels */}
      <section
        id="experience"
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="section-num">03</div>
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-6 mb-16">
            <span className="condensed font-black text-cobalt text-xs tracking-[0.4em] uppercase">
              03
            </span>
            <div className="flex-1 h-px bg-slate-100" />
            <span className="condensed font-black text-slate-200 text-xs tracking-[0.4em] uppercase">
              EXPERIENCE
            </span>
          </div>

          {/* Staggered full-width rows */}
          <div className="space-y-5">
            {[
              {
                num: "E01",
                title: "Creative Director",
                company: "Nordik Studio",
                period: "2022–Now",
                desc: "Leading design vision for global tech and lifestyle brands. Managing a 7-person design team across web, mobile, and identity.",
                tags: ["Brand Strategy", "Team Lead", "Product Design"],
                current: true,
              },
              {
                num: "E02",
                title: "Senior UI/UX Designer",
                company: "Forma Agency",
                period: "2019–2022",
                desc: "Shipped award-winning interfaces for fintech, e-commerce, and SaaS platforms. 40% avg. engagement lift across all projects.",
                tags: ["UI Systems", "Prototyping", "User Research"],
              },
              {
                num: "E03",
                title: "Visual Designer",
                company: "Freelance",
                period: "2017–2019",
                desc: "Brand identities, editorial layouts, and UI kits for 30+ international clients across Scandinavia and Western Europe.",
                tags: ["Branding", "Editorial", "UI Kits"],
              },
            ].map(({ num, title, company, period, desc, tags, current }, i) => (
              <div
                key={num}
                className={`grid lg:grid-cols-12 gap-6 p-8 arch-card border ${current ? "bg-cobalt-light border-cobalt/30" : "bg-slate-50 border-slate-100"}`}
              >
                <div className="lg:col-span-1 flex items-start">
                  <span className="condensed font-black text-cobalt/20 text-4xl leading-none">
                    {num}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h4 className="condensed font-black text-2xl text-slate-800 leading-tight mb-1">
                    {title}
                  </h4>
                  <p className="text-cobalt text-xs font-medium tracking-[0.15em] uppercase mb-1">
                    {company}
                  </p>
                  <p className="text-slate-400 text-xs">{period}</p>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-slate-500 text-sm leading-loose font-light">
                    {desc}
                  </p>
                </div>
                <div className="lg:col-span-2 flex flex-col gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-3 py-1 text-center ${current ? "bg-cobalt/10 text-cobalt border border-cobalt/20" : "bg-white border border-slate-200 text-slate-500"}`}
                    >
                      {tag}
                    </span>
                  ))}
                  {current && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="w-2 h-2 bg-cobalt rounded-full animate-pulse" />
                      <span className="text-cobalt text-xs font-medium">
                        Active
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOB ── Precision table layout */}
      <section id="job" className="py-24 bg-cobalt relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div
          className="section-num"
          style={{ color: "rgba(255,255,255,0.04)" }}
        >
          04
        </div>
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-6 mb-16">
            <span className="condensed font-black text-white/40 text-xs tracking-[0.4em] uppercase">
              04
            </span>
            <div className="flex-1 h-px bg-white/10" />
            <span className="condensed font-black text-white/10 text-xs tracking-[0.4em] uppercase">
              JOB HISTORY
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2
                className="condensed font-black text-white leading-[0.85] mb-4"
                style={{ fontSize: "clamp(3rem,6vw,5.5rem)" }}
              >
                WHERE
                <br />
                I'VE
                <br />
                <span
                  className="text-white/20"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
                >
                  WORKED.
                </span>
              </h2>
              <p className="text-white/50 text-sm leading-loose font-light max-w-xs">
                Eight years across studios, agencies, and independent projects —
                always pushing what's possible.
              </p>
            </div>

            <div className="space-y-0 border border-white/10 overflow-hidden">
              {[
                {
                  no: "01",
                  company: "Nordik Studio",
                  role: "Creative Director",
                  period: "2022–Present",
                },
                {
                  no: "02",
                  company: "Forma Agency",
                  role: "Senior UI/UX Designer",
                  period: "2019–2022",
                },
                {
                  no: "03",
                  company: "Pixel Bureau",
                  role: "UI Designer",
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
                  className={`job-row flex items-center gap-6 sm:gap-8 px-6 sm:px-8 py-5 ${i < 3 ? "border-b border-white/10" : ""}`}
                  style={{
                    background:
                      hoveredJob === i
                        ? "rgba(255,255,255,0.08)"
                        : "transparent",
                  }}
                >
                  <span
                    className={`job-num condensed font-black text-4xl min-w-[3rem] leading-none transition-colors ${hoveredJob === i ? "text-white" : "text-white/20"}`}
                  >
                    {no}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="condensed font-bold text-xl text-white truncate">
                      {company}
                    </h4>
                    <p
                      className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors ${hoveredJob === i ? "text-white/60" : "text-white/30"}`}
                    >
                      {role}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-medium hidden sm:block transition-colors ${hoveredJob === i ? "text-white/70" : "text-white/25"}`}
                  >
                    {period}
                  </span>
                  <span
                    className={`job-arrow text-xl font-light ${hoveredJob === i ? "text-white" : "text-white/20"}`}
                  >
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SCHOOL ── Architectural card grid */}
      <section id="school" className="py-24 bg-white relative overflow-hidden">
        <div className="section-num">05</div>
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-6 mb-16">
            <span className="condensed font-black text-cobalt text-xs tracking-[0.4em] uppercase">
              05
            </span>
            <div className="flex-1 h-px bg-slate-100" />
            <span className="condensed font-black text-slate-200 text-xs tracking-[0.4em] uppercase">
              EDUCATION
            </span>
          </div>

          {/* Large left card + right grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Feature education card */}
            <div className="lg:col-span-5 bg-slate-800 text-white p-10 arch-card relative overflow-hidden flex flex-col justify-between min-h-[280px]">
              <div className="absolute top-0 right-0 w-32 h-32 hatch opacity-30" />
              <div>
                <div className="w-10 h-10 bg-cobalt flex items-center justify-center mb-6">
                  <span className="text-white text-lg">✦</span>
                </div>
                <h4 className="condensed font-black text-3xl leading-tight mb-2">
                  Bachelor of Fine Arts
                </h4>
                <p className="text-cobalt text-xs font-medium tracking-widest uppercase mb-1">
                  Royal College of Art, Stockholm
                </p>
                <p className="text-white/40 text-xs mb-6">2015 – 2019</p>
                <span className="bg-cobalt text-white text-xs font-medium px-4 py-1.5 tracking-widest uppercase">
                  GPA 3.9 / 4.0
                </span>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-px bg-cobalt" />
                <span className="text-white/30 text-xs tracking-widest uppercase">
                  Foundation Degree
                </span>
              </div>
            </div>

            {/* Right 3 smaller cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-5">
              {[
                {
                  icon: "◎",
                  degree: "UX Design Cert.",
                  school: "Interaction Design Foundation",
                  period: "2020",
                  badge: "Excellence",
                  color: "border-t-cobalt",
                },
                {
                  icon: "⟡",
                  degree: "Motion Design",
                  school: "School of Motion",
                  period: "2021",
                  badge: "Advanced",
                  color: "",
                },
                {
                  icon: "◈",
                  degree: "Design Systems",
                  school: "Figma Academy",
                  period: "2022",
                  badge: "Pro Cert.",
                  color: "",
                },
              ].map(({ icon, degree, school, period, badge }) => (
                <div
                  key={degree}
                  className="bg-slate-50 border border-slate-100 p-7 arch-card flex flex-col justify-between"
                  style={{ borderTop: "3px solid #1B4FD8" }}
                >
                  <div>
                    <span className="text-cobalt text-2xl block mb-4">
                      {icon}
                    </span>
                    <h4 className="condensed font-bold text-slate-800 text-base leading-tight mb-1">
                      {degree}
                    </h4>
                    <p className="text-cobalt text-xs tracking-wide mb-1 font-medium">
                      {school}
                    </p>
                    <p className="text-slate-400 text-xs">{period}</p>
                  </div>
                  <span className="mt-5 bg-cobalt-light text-cobalt text-xs font-medium px-3 py-1.5 self-start tracking-wide uppercase">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILL ── Two-panel: text left + horizontal skill bars right */}
      <section
        id="skill"
        className="py-24 bg-slate-50 relative overflow-hidden"
      >
        <div className="section-num">06</div>
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-6 mb-16">
            <span className="condensed font-black text-cobalt text-xs tracking-[0.4em] uppercase">
              06
            </span>
            <div className="flex-1 h-px bg-slate-200" />
            <span className="condensed font-black text-slate-200 text-xs tracking-[0.4em] uppercase">
              SKILLS
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left — headline + tag grid */}
            <div className="lg:col-span-4">
              <h2
                className="condensed font-black leading-[0.85] text-slate-800 mb-8"
                style={{ fontSize: "clamp(3rem,5vw,4.5rem)" }}
              >
                WHAT
                <br />I DO
                <br />
                <span className="text-cobalt">BEST.</span>
              </h2>

              <div className="grid grid-cols-2 gap-2">
                {[
                  "Figma",
                  "Adobe XD",
                  "React",
                  "Tailwind CSS",
                  "After Effects",
                  "Framer",
                  "Webflow",
                  "Principle",
                ].map((t) => (
                  <span
                    key={t}
                    className="skill-tag text-xs font-medium border border-slate-200 bg-white px-3 py-2 text-slate-500 text-center"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — horizontal bar table */}
            <div className="lg:col-span-8">
              <div className="border border-slate-100 overflow-hidden">
                {/* Table header */}
                <div className="grid grid-cols-12 bg-slate-800 px-6 py-3">
                  <span className="col-span-3 text-white/40 text-xs tracking-[0.2em] uppercase font-medium">
                    Skill
                  </span>
                  <span className="col-span-7 text-white/40 text-xs tracking-[0.2em] uppercase font-medium">
                    Proficiency
                  </span>
                  <span className="col-span-2 text-white/40 text-xs tracking-[0.2em] uppercase font-medium text-right">
                    Level
                  </span>
                </div>

                {[
                  { name: "UI Design", pct: 96, level: "Expert" },
                  { name: "Frontend Dev", pct: 84, level: "Advanced" },
                  { name: "Art Direction", pct: 92, level: "Expert" },
                  { name: "Prototyping", pct: 88, level: "Expert" },
                  { name: "Motion Design", pct: 75, level: "Advanced" },
                  { name: "UX Research", pct: 80, level: "Advanced" },
                ].map(({ name, pct, level }, i) => (
                  <div
                    key={name}
                    className={`grid grid-cols-12 items-center px-6 py-5 gap-4 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-cobalt-light transition-colors group`}
                    style={{ borderBottom: "1px solid #f1f5f9" }}
                  >
                    <span className="col-span-3 text-slate-700 text-xs font-medium group-hover:text-cobalt transition-colors">
                      {name}
                    </span>
                    <div className="col-span-7 flex items-center gap-3">
                      <div className="flex-1 h-2 bg-slate-100 overflow-hidden">
                        <div
                          className="h-full bg-cobalt transition-all duration-700"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-slate-400 text-xs w-8 shrink-0">
                        {pct}%
                      </span>
                    </div>
                    <span className="col-span-2 text-right text-cobalt text-xs font-medium tracking-wide">
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── Full-width architectural split */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="section-num">07</div>
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-6 mb-16">
            <span className="condensed font-black text-cobalt text-xs tracking-[0.4em] uppercase">
              07
            </span>
            <div className="flex-1 h-px bg-slate-100" />
            <span className="condensed font-black text-slate-200 text-xs tracking-[0.4em] uppercase">
              CONTACT
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-0 border border-slate-100 overflow-hidden">
            {/* Left panel — cobalt */}
            <div className="lg:col-span-5 bg-cobalt p-10 sm:p-12 flex flex-col justify-between min-h-[480px] relative overflow-hidden">
              <div className="absolute inset-0 blueprint-grid opacity-20" />
              <div className="relative z-10">
                <h2
                  className="condensed font-black text-white leading-[0.85] mb-6"
                  style={{ fontSize: "clamp(2.5rem,4vw,4rem)" }}
                >
                  LET'S
                  <br />
                  BUILD
                  <br />
                  TOGETHER.
                </h2>
                <p className="text-white/60 text-sm leading-loose font-light mb-8 max-w-xs">
                  Have a project in mind? Whether it's a full brand identity or
                  a product interface — I'm ready to create something precise
                  and beautiful.
                </p>
                <div className="space-y-4">
                  {[
                    { label: "Email", val: "aria@svensson.design" },
                    { label: "LinkedIn", val: "linkedin.com/in/ariasvensson" },
                    { label: "Dribbble", val: "dribbble.com/ariasvensson" },
                  ].map(({ label, val }) => (
                    <div
                      key={label}
                      className="flex items-center gap-4"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                        paddingBottom: "12px",
                      }}
                    >
                      <span className="text-white/40 text-xs tracking-[0.2em] uppercase w-20 shrink-0">
                        {label}
                      </span>
                      <span className="text-white/80 text-xs font-medium">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom measurement marks */}
              <div className="relative z-10 flex justify-between items-end mt-8">
                <div className="w-8 h-8 border-b-2 border-l-2 border-white/30" />
                <div className="w-8 h-8 border-b-2 border-r-2 border-white/30" />
              </div>
            </div>

            {/* Right panel — form */}
            <div className="lg:col-span-7 bg-slate-50 p-10 sm:p-12">
              <div className="space-y-6 max-w-xl">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    ["Name", "Aria Svensson"],
                    ["Email", "aria@email.com"],
                  ].map(([l, p]) => (
                    <div key={l}>
                      <label className="block text-slate-400 text-xs tracking-[0.2em] uppercase mb-2 font-medium">
                        {l}
                      </label>
                      <input
                        type="text"
                        placeholder={p}
                        className="arch-input w-full bg-white text-slate-700 placeholder-slate-300 px-4 py-3 text-sm font-light rounded-none"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-slate-400 text-xs tracking-[0.2em] uppercase mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Product design project…"
                    className="arch-input w-full bg-white text-slate-700 placeholder-slate-300 px-4 py-3 text-sm font-light"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs tracking-[0.2em] uppercase mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me what you're building…"
                    className="arch-input w-full bg-white text-slate-700 placeholder-slate-300 px-4 py-3 text-sm font-light resize-none"
                  />
                </div>
                <button className="condensed font-black text-sm uppercase tracking-[0.25em] w-full py-4 bg-slate-800 text-white hover:bg-cobalt transition-colors duration-300">
                  SEND MESSAGE →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-100 py-8 bg-white">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="condensed font-black text-xl text-slate-800 flex items-center gap-2">
            <span className="w-5 h-5 bg-cobalt flex items-center justify-center">
              <span className="text-white text-xs font-black">A</span>
            </span>
            ARIA<span className="text-cobalt">.</span>
          </span>
          <p className="text-slate-400 text-xs tracking-[0.2em] uppercase">
            © 2026 Aria Svensson — All Rights Reserved
          </p>
          <button
            onClick={() => scrollTo("home")}
            className="text-slate-400 hover:text-cobalt text-xs tracking-widest uppercase font-medium transition-colors"
          >
            ↑ Top
          </button>
        </div>
      </footer>
    </div>
  );
}
