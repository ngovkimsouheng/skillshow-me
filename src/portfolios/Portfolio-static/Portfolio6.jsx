import { useState, useEffect } from "react";

export default function Portfolio6() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [hoveredJob, setHoveredJob] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

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
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,700;1,900&family=Share+Tech+Mono&display=swap');
        * { font-family: 'Exo 2', sans-serif; }
        .mono { font-family: 'Share Tech Mono', monospace; }
        .neon-mint { color: #00ffcc; }
        .neon-pink { color: #ff2d9b; }
        .bg-neon-mint { background-color: #00ffcc; }
        .bg-neon-pink { background-color: #ff2d9b; }
        .grid-bg {
          background-image:
            linear-gradient(rgba(0,255,204,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,204,0.07) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .glow-mint { box-shadow: 0 0 20px rgba(0,255,204,0.4), 0 0 60px rgba(0,255,204,0.15); }
        .glow-pink { box-shadow: 0 0 20px rgba(255,45,155,0.5), 0 0 60px rgba(255,45,155,0.2); }
        .glow-text-mint { text-shadow: 0 0 20px rgba(0,255,204,0.8), 0 0 40px rgba(0,255,204,0.4); }
        .glow-text-pink { text-shadow: 0 0 20px rgba(255,45,155,0.8), 0 0 40px rgba(255,45,155,0.4); }
        .clip-slant { clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%); }
        .clip-slant-r { clip-path: polygon(5% 0, 100% 0, 100% 100%, 0 100%); }
        .border-neon-mint { border: 1px solid rgba(0,255,204,0.5); }
        .border-neon-pink { border: 1px solid rgba(255,45,155,0.5); }
        .border-neon-mint-solid { border: 2px solid #00ffcc; }
        .border-neon-pink-solid { border: 2px solid #ff2d9b; }
        .marquee-fast { animation: marquee 12s linear infinite; }
        .marquee-slow { animation: marquee 20s linear infinite reverse; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .scanline {
          background: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,255,204,0.015) 2px, rgba(0,255,204,0.015) 4px
          );
          pointer-events: none;
        }
        .iridescent {
          background: linear-gradient(135deg, #00ffcc, #ff2d9b, #7c3aed, #00ffcc);
          background-size: 300% 300%;
          animation: iridescent 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes iridescent {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .card-cyber {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        .card-cyber:hover {
          background: rgba(0,255,204,0.05);
          box-shadow: 0 0 30px rgba(0,255,204,0.15), inset 0 0 30px rgba(0,255,204,0.05);
        }
        .tag-blink::before {
          content: '> ';
          color: #00ffcc;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        .noise {
          position: relative;
        }
        .noise::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
        }
        .hover-glow-mint { transition: all 0.25s ease; }
        .hover-glow-mint:hover { box-shadow: 0 0 25px rgba(0,255,204,0.35); border-color: #00ffcc; }
        .hover-glow-pink:hover { box-shadow: 0 0 25px rgba(255,45,155,0.35); border-color: #ff2d9b; }
        .progress-glow {
          box-shadow: 0 0 10px rgba(0,255,204,0.6), 0 0 20px rgba(0,255,204,0.3);
        }
        .diagonal-slash {
          background: linear-gradient(135deg,
            rgba(0,255,204,0.1) 0%, transparent 40%,
            transparent 60%, rgba(255,45,155,0.1) 100%
          );
        }
      `}</style>

      {/* ── NAV ── */}
      <nav
        className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl"
        style={{ borderBottom: "1px solid rgba(0,255,204,0.2)" }}
      >
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-neon-mint rounded-full glow-mint animate-pulse" />
              <span className="font-black text-xl tracking-[0.2em] uppercase">
                NOVA<span className="neon-mint">.</span>
              </span>
            </button>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className={`mono px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-200
                    ${active === l
                      ? "text-black bg-neon-mint font-bold"
                      : "text-gray-500 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {active === l ? `[${l}]` : l}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="ml-4 mono px-5 py-2 bg-transparent text-neon-pink text-xs uppercase tracking-[0.15em] font-bold border-neon-pink-solid hover:bg-neon-pink hover:text-black transition-all duration-200 glow-pink"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
            >
              <span
                className={`block w-6 h-px bg-neon-mint transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                style={{ boxShadow: "0 0 6px #00ffcc" }}
              />
              <span
                className={`block w-6 h-px bg-neon-mint transition-all ${menuOpen ? "opacity-0 w-0" : ""}`}
                style={{ boxShadow: "0 0 6px #00ffcc" }}
              />
              <span
                className={`block w-6 h-px bg-neon-mint transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                style={{ boxShadow: "0 0 6px #00ffcc" }}
              />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="md:hidden"
            style={{
              borderTop: "1px solid rgba(0,255,204,0.2)",
              background: "rgba(0,0,0,0.95)",
            }}
          >
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`w-full text-left px-6 py-4 mono text-xs uppercase tracking-[0.2em] transition-all
                  ${active === l ? "bg-neon-mint text-black font-bold" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              >
                {active === l ? `> ${l}` : `  ${l}`}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── DUAL MARQUEE ── */}
      <div
        className="overflow-hidden py-0"
        style={{ borderBottom: "1px solid rgba(255,45,155,0.3)" }}
      >
        <div
          className="marquee-fast inline-flex whitespace-nowrap py-2.5"
          style={{ background: "rgba(255,45,155,0.08)" }}
        >
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center">
              {[
                "UI DESIGN",
                "//",
                "MOTION",
                "//",
                "BRANDING",
                "//",
                "FRONTEND",
                "//",
                "PROTOTYPING",
                "//",
                "ART DIRECTION",
                "//",
              ].map((t, j) => (
                <span
                  key={j}
                  className={`mx-6 mono text-xs tracking-[0.2em] ${t === "//" ? "neon-pink opacity-60" : "text-white/50"}`}
                >
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── HOME ── */}
      <section id="home" className="min-h-screen grid-bg noise relative">
        <div className="scanline absolute inset-0 pointer-events-none" />
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Text — 7 cols */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div
                className="inline-flex items-center gap-3 mono text-xs tracking-[0.2em] uppercase mb-8"
                style={{
                  border: "1px solid rgba(0,255,204,0.4)",
                  padding: "8px 16px",
                  background: "rgba(0,255,204,0.05)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 bg-neon-mint rounded-full animate-pulse"
                  style={{ boxShadow: "0 0 8px #00ffcc" }}
                />
                <span className="neon-mint">STATUS:</span>
                <span className="text-white/70">OPEN FOR PROJECTS</span>
              </div>

              <div className="mb-4 mono text-xs neon-pink tracking-[0.3em] uppercase opacity-80">
                // HELLO_WORLD.exe
              </div>

              <h1
                className="font-black leading-none mb-2 uppercase"
                style={{ fontSize: "clamp(3.5rem,10vw,8rem)" }}
              >
                I'M
              </h1>
              <h1
                className="font-black leading-none mb-2 uppercase iridescent"
                style={{ fontSize: "clamp(3.5rem,10vw,8rem)" }}
              >
                NOVA
              </h1>
              <h1
                className="font-black leading-none uppercase mb-8"
                style={{
                  fontSize: "clamp(3.5rem,10vw,8rem)",
                  color: "rgba(255,255,255,0.12)",
                  WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                }}
              >
                KIM
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="h-px flex-1 max-w-[60px]"
                  style={{
                    background: "linear-gradient(90deg,#00ffcc,transparent)",
                  }}
                />
                <p className="mono text-xs tracking-[0.2em] uppercase text-white/50">
                  UI·UX DESIGNER & CREATIVE TECHNOLOGIST
                </p>
              </div>

              <p className="text-white/60 text-sm leading-loose max-w-lg mb-10 font-light">
                I build digital experiences that live at the edge of design and
                technology. Bold, fast, immersive — work that doesn't just look
                good but feels electric.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("experience")}
                  className="px-8 py-4 bg-neon-mint text-black font-black text-xs uppercase tracking-[0.2em] clip-slant hover:opacity-90 transition-all glow-mint"
                >
                  My Work →
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-8 py-4 bg-transparent text-white font-bold text-xs uppercase tracking-[0.2em] clip-slant-r border-neon-mint hover:bg-white/5 transition-all"
                  style={{ border: "1px solid rgba(0,255,204,0.5)" }}
                >
                  Let's Talk
                </button>
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-3 gap-0 mt-14"
                style={{ border: "1px solid rgba(0,255,204,0.2)" }}
              >
                {[
                  ["7+", "Years"],
                  ["60+", "Projects"],
                  ["40+", "Clients"],
                ].map(([n, l], i) => (
                  <div
                    key={l}
                    className="py-6 text-center"
                    style={{
                      borderRight:
                        i < 2 ? "1px solid rgba(0,255,204,0.2)" : "none",
                      background: "rgba(0,255,204,0.03)",
                    }}
                  >
                    <p className="font-black text-4xl neon-mint glow-text-mint">
                      {n}
                    </p>
                    <p className="mono text-xs tracking-[0.2em] uppercase text-white/40 mt-1">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image — 5 cols */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glowing frame layers */}
                <div
                  className="absolute -inset-3 rounded-none opacity-60"
                  style={{
                    background: "linear-gradient(135deg,#00ffcc,#ff2d9b)",
                    filter: "blur(20px)",
                  }}
                />
                <div
                  className="absolute -inset-0.5"
                  style={{
                    background:
                      "linear-gradient(135deg,#00ffcc,transparent,#ff2d9b)",
                  }}
                />
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80"
                  alt="Profile"
                  className="relative w-64 sm:w-72 lg:w-80 xl:w-96 aspect-[3/4] object-cover"
                  style={{ filter: "brightness(0.9) contrast(1.1)" }}
                />
                {/* Overlay lines */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,204,0.03) 3px,rgba(0,255,204,0.03) 4px)",
                  }}
                />
                {/* Corner accents */}
                <div
                  className="absolute top-3 left-3 w-6 h-6"
                  style={{
                    borderTop: "2px solid #00ffcc",
                    borderLeft: "2px solid #00ffcc",
                    boxShadow: "inset 2px 2px 0 rgba(0,255,204,0.2)",
                  }}
                />
                <div
                  className="absolute top-3 right-3 w-6 h-6"
                  style={{
                    borderTop: "2px solid #ff2d9b",
                    borderRight: "2px solid #ff2d9b",
                  }}
                />
                <div
                  className="absolute bottom-3 left-3 w-6 h-6"
                  style={{
                    borderBottom: "2px solid #ff2d9b",
                    borderLeft: "2px solid #ff2d9b",
                  }}
                />
                <div
                  className="absolute bottom-3 right-3 w-6 h-6"
                  style={{
                    borderBottom: "2px solid #00ffcc",
                    borderRight: "2px solid #00ffcc",
                  }}
                />
                {/* Badge */}
                <div className="absolute -bottom-5 -left-4 clip-slant px-6 py-3 bg-neon-pink glow-pink">
                  <p className="mono text-black text-xs tracking-[0.2em] uppercase font-bold">
                    Creative Tech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="py-24 diagonal-slash relative"
        style={{ background: "#0a0a0a" }}
      >
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-px bg-neon-mint"
                  style={{ boxShadow: "0 0 8px #00ffcc" }}
                />
                <span className="mono text-xs tracking-[0.25em] uppercase neon-mint">
                  // ABOUT_ME
                </span>
              </div>
              <h2
                className="font-black leading-none mb-8 uppercase"
                style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
              >
                <span className="text-white">DESIGN IS</span>
                <br />
                <span className="neon-mint glow-text-mint">MY CODE,</span>
                <br />
                <span
                  className="text-white/20"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
                >
                  BEAUTY IS
                </span>
                <br />
                <span className="neon-pink glow-text-pink">MY OUTPUT</span>
              </h2>
              <p className="text-white/50 leading-loose mb-5 text-sm font-light">
                I design at the intersection of technology and emotion. Whether
                it's a luxury app or a startup's first product — I bring
                obsessive detail, strategic thinking, and a visual signature
                that's unmistakable.
              </p>
              <p className="text-white/50 leading-loose mb-8 text-sm font-light">
                7+ years across fashion-tech, gaming, fintech, and creative
                studios worldwide.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Figma",
                  "React",
                  "Tailwind",
                  "After Effects",
                  "Framer",
                  "Three.js",
                ].map((t) => (
                  <span
                    key={t}
                    className="mono px-4 py-2 text-xs tracking-[0.1em] uppercase text-neon-mint hover:bg-neon-mint hover:text-black transition-all cursor-default"
                    style={{
                      border: "1px solid rgba(0,255,204,0.3)",
                      background: "rgba(0,255,204,0.04)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature cards — offset grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "◈",
                  title: "Visual Systems",
                  desc: "Scalable design languages that grow with your product",
                  accent: "border-neon-mint-solid",
                  glow: "hover:glow-mint",
                },
                {
                  icon: "⟡",
                  title: "Motion & Feel",
                  desc: "Micro-interactions that make users smile",
                  accent: "border-neon-pink-solid",
                  mt: "mt-8",
                },
                {
                  icon: "⎔",
                  title: "Tech-Forward",
                  desc: "I code what I design — React, Tailwind, Framer",
                  accent: "",
                  mt: "-mt-2",
                  custom: { border: "1px solid rgba(255,255,255,0.1)" },
                },
                {
                  icon: "◬",
                  title: "Speed & Craft",
                  desc: "Studio-quality work at startup velocity",
                  accent: "border-neon-mint-solid",
                  mt: "mt-4",
                },
              ].map(({ icon, title, desc, accent, mt = "", custom }) => (
                <div
                  key={title}
                  className={`card-cyber ${accent} ${mt} p-6 hover-glow-mint`}
                  style={custom || { border: "1px solid rgba(0,255,204,0.25)" }}
                >
                  <span className="neon-mint text-2xl block mb-4">{icon}</span>
                  <h4 className="font-bold text-xs uppercase tracking-[0.15em] mb-2 text-white">
                    {title}
                  </h4>
                  <p className="text-white/40 text-xs leading-relaxed font-light">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section
        id="experience"
        className="py-24 grid-bg"
        style={{ background: "#050505" }}
      >
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6"
            style={{ borderBottom: "1px solid rgba(0,255,204,0.2)" }}
          >
            <div>
              <span className="mono text-xs tracking-[0.25em] uppercase neon-pink block mb-3">
                // EXPERIENCE
              </span>
              <h2
                className="font-black leading-none text-white uppercase"
                style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
              >
                MY JOURNEY
              </h2>
            </div>
            <span
              className="font-black text-white/5 leading-none select-none hidden lg:block"
              style={{
                fontSize: "9rem",
                WebkitTextStroke: "1px rgba(0,255,204,0.1)",
              }}
            >
              03
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Creative Director",
                company: "NEON STUDIO",
                period: "2022–Now",
                desc: "Directing digital experiences for global tech and fashion brands. 6-person design team.",
                current: true,
              },
              {
                title: "Senior UI/UX Designer",
                company: "HYPER AGENCY",
                period: "2019–2022",
                desc: "Shipped interfaces for 20+ products in gaming, fintech, and fashion-tech verticals.",
              },
              {
                title: "Visual Designer",
                company: "FREELANCE",
                period: "2017–2019",
                desc: "Built brand systems, motion graphics, and UI kits for 30+ international clients.",
              },
            ].map(({ title, company, period, desc, current }) => (
              <div
                key={title}
                className="card-cyber p-8 relative overflow-hidden hover-glow-mint"
                style={{
                  border: current
                    ? "1px solid rgba(0,255,204,0.5)"
                    : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {current && (
                  <div
                    className="absolute top-0 left-0 right-0 h-px bg-neon-mint"
                    style={{ boxShadow: "0 0 10px #00ffcc" }}
                  />
                )}
                {/* Corner glow */}
                {current && (
                  <div
                    className="absolute top-0 left-0 w-16 h-16 opacity-20"
                    style={{
                      background:
                        "radial-gradient(circle at 0 0,#00ffcc,transparent)",
                    }}
                  />
                )}

                {current ? (
                  <div className="inline-flex items-center gap-2 mono text-xs tracking-[0.15em] uppercase mb-5 px-3 py-1.5 bg-neon-mint text-black font-bold">
                    <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                    CURRENT
                  </div>
                ) : (
                  <div className="h-8 mb-5" />
                )}

                <h4 className="font-black text-xl text-white uppercase leading-tight mb-1">
                  {title}
                </h4>
                <p className="mono text-xs neon-mint tracking-[0.15em] mb-1">
                  {company}
                </p>
                <p className="mono text-xs text-white/30 tracking-widest mb-5">
                  {period}
                </p>
                <p className="text-white/50 text-sm leading-loose font-light">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOB ── */}
      <section
        id="job"
        className="py-24"
        style={{
          background: "#0d0d0d",
          borderTop: "1px solid rgba(255,45,155,0.2)",
          borderBottom: "1px solid rgba(255,45,155,0.2)",
        }}
      >
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <span className="mono text-xs tracking-[0.25em] uppercase neon-pink block mb-3">
                // JOB_HISTORY
              </span>
              <h2
                className="font-black leading-none text-white uppercase"
                style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
              >
                WHERE I'VE
                <br />
                WORKED
              </h2>
            </div>
          </div>

          <div
            className="space-y-0"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {[
              {
                no: "01",
                company: "NEON STUDIO",
                role: "Creative Director",
                period: "2022–Present",
              },
              {
                no: "02",
                company: "HYPER AGENCY",
                role: "Senior UI/UX Designer",
                period: "2019–2022",
              },
              {
                no: "03",
                company: "CYBER COLLECTIVE",
                role: "UI Designer",
                period: "2017–2019",
              },
              {
                no: "04",
                company: "FREELANCE",
                role: "Visual Designer",
                period: "2015–2017",
              },
            ].map(({ no, company, role, period }, i) => (
              <div
                key={company}
                onMouseEnter={() => setHoveredJob(i)}
                onMouseLeave={() => setHoveredJob(null)}
                className="flex items-center gap-6 sm:gap-10 px-6 sm:px-10 py-7 cursor-default transition-all duration-300"
                style={{
                  borderBottom:
                    i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  background:
                    hoveredJob === i ? "rgba(0,255,204,0.06)" : "transparent",
                  boxShadow:
                    hoveredJob === i
                      ? "inset 3px 0 0 #00ffcc"
                      : "inset 3px 0 0 transparent",
                }}
              >
                <span
                  className="mono text-4xl sm:text-5xl min-w-[4rem] leading-none"
                  style={{
                    color:
                      hoveredJob === i ? "#00ffcc" : "rgba(255,255,255,0.1)",
                    textShadow: hoveredJob === i ? "0 0 20px #00ffcc" : "none",
                  }}
                >
                  {no}
                </span>
                <div className="flex-1 min-w-0">
                  <h4
                    className="font-black text-xl sm:text-3xl leading-none uppercase truncate"
                    style={{
                      color:
                        hoveredJob === i ? "#fff" : "rgba(255,255,255,0.8)",
                    }}
                  >
                    {company}
                  </h4>
                  <p
                    className="mono text-xs tracking-[0.15em] uppercase mt-1.5"
                    style={{
                      color:
                        hoveredJob === i ? "#ff2d9b" : "rgba(255,255,255,0.3)",
                    }}
                  >
                    {role}
                  </p>
                </div>
                <span
                  className="mono text-xs tracking-widest uppercase hidden sm:block"
                  style={{
                    color:
                      hoveredJob === i
                        ? "rgba(0,255,204,0.7)"
                        : "rgba(255,255,255,0.2)",
                  }}
                >
                  {period}
                </span>
                <span
                  className="text-2xl font-black shrink-0 transition-all duration-300"
                  style={{
                    color:
                      hoveredJob === i ? "#00ffcc" : "rgba(255,255,255,0.1)",
                    transform: hoveredJob === i ? "translateX(4px)" : "none",
                  }}
                >
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOOL ── */}
      <section id="school" className="py-24" style={{ background: "#050505" }}>
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6"
            style={{ borderBottom: "1px solid rgba(255,45,155,0.2)" }}
          >
            <div>
              <span className="mono text-xs tracking-[0.25em] uppercase neon-pink block mb-3">
                // EDUCATION
              </span>
              <h2
                className="font-black leading-none text-white uppercase"
                style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
              >
                ACADEMIC
                <br />
                BACKGROUND
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: "◈",
                degree: "Bachelor of Fine Arts",
                school: "Parsons School of Design",
                period: "2015–2019",
                badge: "Dean's List",
                accent: "#00ffcc",
              },
              {
                icon: "⟡",
                degree: "UX Design Certification",
                school: "Interaction Design Foundation",
                period: "2020",
                badge: "Excellence Award",
                accent: "#ff2d9b",
              },
              {
                icon: "⎔",
                degree: "Motion & Interaction",
                school: "School of Motion",
                period: "2021",
                badge: "Advanced Level",
                accent: "#00ffcc",
              },
              {
                icon: "◬",
                degree: "Design Systems",
                school: "Figma Academy",
                period: "2022",
                badge: "Pro Certified",
                accent: "#ff2d9b",
              },
            ].map(({ icon, degree, school, period, badge, accent }) => (
              <div
                key={degree}
                className="card-cyber flex gap-5 p-7 hover-glow-mint relative overflow-hidden"
                style={{
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderLeft: `3px solid ${accent}`,
                }}
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-5 rounded-full"
                  style={{
                    background: `radial-gradient(circle,${accent},transparent)`,
                    transform: "translate(30%,-30%)",
                  }}
                />
                <span
                  className="text-3xl shrink-0 mt-1"
                  style={{ color: accent }}
                >
                  {icon}
                </span>
                <div>
                  <h4 className="font-black text-lg text-white leading-tight mb-1 uppercase">
                    {degree}
                  </h4>
                  <p
                    className="mono text-xs tracking-[0.15em] mb-1"
                    style={{ color: accent }}
                  >
                    {school}
                  </p>
                  <p className="mono text-xs text-white/30 tracking-widest mb-4">
                    {period}
                  </p>
                  <span
                    className="mono inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-black"
                    style={{
                      background: accent,
                      boxShadow: `0 0 15px ${accent}60`,
                    }}
                  >
                    {badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILL ── */}
      <section
        id="skill"
        className="py-24 grid-bg"
        style={{ background: "#080808" }}
      >
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6"
            style={{ borderBottom: "1px solid rgba(0,255,204,0.2)" }}
          >
            <div>
              <span className="mono text-xs tracking-[0.25em] uppercase neon-mint block mb-3">
                // SKILLS
              </span>
              <h2
                className="font-black leading-none uppercase"
                style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
              >
                <span className="text-white">WHAT I DO</span>
                <br />
                <span className="neon-pink glow-text-pink">BEST</span>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Bars */}
            <div className="space-y-8">
              {[
                { name: "UI Design", pct: 96, tools: "Figma · XD" },
                { name: "Frontend Dev", pct: 84, tools: "React · Tailwind" },
                { name: "Art Direction", pct: 92, tools: "Visual Identity" },
                { name: "Prototyping", pct: 88, tools: "Framer · Flow" },
                { name: "Motion Design", pct: 76, tools: "After Effects" },
              ].map(({ name, pct, tools }, i) => (
                <div
                  key={name}
                  onMouseEnter={() => setHoveredSkill(i)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group cursor-default"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-black text-sm uppercase tracking-widest transition-all duration-200"
                        style={{
                          color: hoveredSkill === i ? "#00ffcc" : "#fff",
                          textShadow:
                            hoveredSkill === i ? "0 0 15px #00ffcc" : "none",
                        }}
                      >
                        {name}
                      </span>
                      <span className="mono text-xs text-white/30 tracking-widest uppercase">
                        {tools}
                      </span>
                    </div>
                    <span
                      className="mono font-bold text-sm"
                      style={{ color: "#00ffcc" }}
                    >
                      {pct}%
                    </span>
                  </div>
                  <div
                    className="h-2 relative"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <div
                      className="h-full transition-all duration-300 progress-glow"
                      style={{
                        width: `${pct}%`,
                        background: "linear-gradient(90deg,#00ffcc,#7c3aed)",
                      }}
                    />
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                      style={{
                        background: "#fff",
                        left: `${pct}%`,
                        transform: "translate(-50%,-50%)",
                        boxShadow: "0 0 8px #00ffcc",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tool grid */}
            <div
              className="grid grid-cols-3 gap-0 self-start"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {[
                { label: "Figma", icon: "◎", color: "#00ffcc" },
                { label: "React", icon: "⟡", color: "#ff2d9b" },
                { label: "Tailwind", icon: "◈", color: "#00ffcc" },
                { label: "Adobe XD", icon: "◬", color: "#ff2d9b" },
                { label: "Framer", icon: "⎔", color: "#00ffcc" },
                { label: "After FX", icon: "◇", color: "#ff2d9b" },
              ].map(({ label, icon, color }, i) => (
                <div
                  key={label}
                  className="p-6 sm:p-8 text-center transition-all duration-300 cursor-default group"
                  style={{
                    borderRight:
                      i % 3 !== 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    borderBottom:
                      i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    background: "rgba(255,255,255,0.02)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = `rgba(${color === "#00ffcc" ? "0,255,204" : "255,45,155"},0.08)`)
                  }
                  onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,255,255,0.02)")
                  }
                >
                  <span
                    className="text-2xl block mb-2 transition-all"
                    style={{ color }}
                  >
                    {icon}
                  </span>
                  <span className="mono text-xs tracking-[0.15em] uppercase text-white/40 group-hover:text-white/80 transition-colors">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="py-24 noise relative"
        style={{ background: "#0a0a0a" }}
      >
        <div className="scanline absolute inset-0 pointer-events-none" />
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <span className="mono text-xs tracking-[0.25em] uppercase neon-mint block mb-4">
                // CONTACT
              </span>
              <h2
                className="font-black leading-none text-white uppercase mb-8"
                style={{ fontSize: "clamp(2.5rem,7vw,6rem)" }}
              >
                LET'S
                <br />
                <span className="iridescent">BUILD</span>
                <br />
                TOGETHER
              </h2>
              <p className="text-white/50 text-sm leading-loose max-w-sm mb-10 font-light">
                Have something electric in mind? I'm always down for bold
                projects and impossible briefs. Drop me a message.
              </p>
              <div className="space-y-5">
                {[
                  { label: "EMAIL", value: "nova@kim.design" },
                  { label: "LINKEDIN", value: "linkedin.com/in/novakimdesign" },
                  { label: "DRIBBBLE", value: "dribbble.com/novakim" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-5 pb-4"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <span className="mono text-xs neon-mint tracking-[0.2em] uppercase w-24 shrink-0">
                      {label}
                    </span>
                    <span className="mono text-xs text-white/50">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div
              className="card-cyber p-8 sm:p-10 relative overflow-hidden"
              style={{
                border: "1px solid rgba(0,255,204,0.25)",
                boxShadow: "0 0 40px rgba(0,255,204,0.08)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px bg-neon-mint"
                style={{ boxShadow: "0 0 10px #00ffcc" }}
              />
              <div
                className="absolute top-0 left-0 w-24 h-24 opacity-10"
                style={{
                  background:
                    "radial-gradient(circle at 0 0,#00ffcc,transparent)",
                }}
              />

              <div className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    ["Name", "Nova Kim"],
                    ["Email", "nova@email.com"],
                  ].map(([l, p]) => (
                    <div key={l}>
                      <label className="mono block text-xs font-medium uppercase tracking-[0.2em] neon-mint mb-2">
                        {l}
                      </label>
                      <input
                        type="text"
                        placeholder={p}
                        className="w-full bg-white/5 text-white placeholder-white/20 px-4 py-3 outline-none mono text-xs font-light transition-all"
                        style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#00ffcc")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                        }
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="mono block text-xs font-medium uppercase tracking-[0.2em] neon-mint mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project inquiry…"
                    className="w-full bg-white/5 text-white placeholder-white/20 px-4 py-3 outline-none mono text-xs font-light transition-all"
                    style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                    onFocus={(e) => (e.target.style.borderColor = "#00ffcc")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                    }
                  />
                </div>
                <div>
                  <label className="mono block text-xs font-medium uppercase tracking-[0.2em] neon-mint mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your vision…"
                    className="w-full bg-white/5 text-white placeholder-white/20 px-4 py-3 outline-none mono text-xs font-light resize-none transition-all"
                    style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                    onFocus={(e) => (e.target.style.borderColor = "#00ffcc")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                    }
                  />
                </div>
                <button className="w-full py-4 font-black text-xs uppercase tracking-[0.25em] text-black clip-slant transition-all bg-neon-mint hover:opacity-90 glow-mint">
                  TRANSMIT MESSAGE →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-8"
        style={{
          background: "#050505",
          borderTop: "1px solid rgba(0,255,204,0.15)",
        }}
      >
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-black text-xl tracking-[0.2em] uppercase">
            NOVA<span className="neon-mint">.</span>
          </span>
          <p className="mono text-xs tracking-[0.2em] uppercase text-white/30">
            © 2026 NOVA KIM — ALL RIGHTS RESERVED
          </p>
          <button
            onClick={() => scrollTo("home")}
            className="mono text-xs tracking-[0.15em] uppercase text-white/30 hover:text-neon-mint transition-colors"
          >
            ↑ TOP
          </button>
        </div>
      </footer>
    </div>
  );
}
