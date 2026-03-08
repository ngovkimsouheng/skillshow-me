import { useState, useEffect, useRef } from "react";

export default function Portfolio9() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [hoveredJob, setHoveredJob] = useState(null);
  const [liked, setLiked] = useState({});
  const [notifVisible, setNotifVisible] = useState(true);
  const [loadingSkill, setLoadingSkill] = useState(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (e) => e.forEach((x) => x.isIntersecting && setActive(x.target.id)),
      { threshold: 0.25 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const links = ["home", "about", "experience", "job", "school", "skill", "contact"];
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const toggleLike = (k) => setLiked((p) => ({ ...p, [k]: !p[k] }));

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#0D0D1A", color: "#F0EEFF" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@200;300;400;500;600;700&family=Cabinet+Grotesk:wght@100;200;300;400;500;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300;1,700&family=JetBrains+Mono:wght@300;400;700&display=swap');

        * { font-family: 'Urbanist', sans-serif; }
        .clash { font-family: 'Urbanist', sans-serif; font-weight: 900; }
        .mono { font-family: 'JetBrains Mono', monospace; }

        :root {
          --lavender: #B794F4;
          --coral: #FF6B6B;
          --acid: #AAFF00;
          --sky-blue: #67E8F9;
          --mid: #1A1A2E;
          --card: #16162A;
          --border: rgba(183,148,244,0.2);
          --glow-purple: rgba(183,148,244,0.3);
          --glow-coral: rgba(255,107,107,0.3);
          --glow-acid: rgba(170,255,0,0.3);
        }

        /* Holographic gradient */
        .holo {
          background: linear-gradient(135deg, #B794F4, #67E8F9, #AAFF00, #FF6B6B, #B794F4);
          background-size: 300% 300%;
          animation: holo 5s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes holo {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }

        /* Holo border */
        .holo-border {
          position: relative;
          border-radius: 16px;
        }
        .holo-border::before {
          content:'';
          position:absolute;
          inset:-1.5px;
          border-radius:17px;
          background: linear-gradient(135deg,#B794F4,#67E8F9,#AAFF00,#FF6B6B);
          background-size:300% 300%;
          animation: holo 4s ease infinite;
          z-index:0;
        }
        .holo-border > * { position:relative; z-index:1; }
        .holo-inner { background: var(--card); border-radius: 15px; }

        /* OS Window chrome */
        .os-window {
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05);
        }
        .os-titlebar {
          background: rgba(255,255,255,0.04);
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid var(--border);
        }
        .os-dot { width:12px; height:12px; border-radius:50%; }

        /* Glow card */
        .glow-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        .glow-card:hover {
          border-color: rgba(183,148,244,0.5);
          box-shadow: 0 0 30px var(--glow-purple), 0 0 60px rgba(183,148,244,0.1);
          transform: translateY(-4px);
        }
        .glow-card-coral:hover {
          border-color: rgba(255,107,107,0.5);
          box-shadow: 0 0 30px var(--glow-coral);
        }
        .glow-card-acid:hover {
          border-color: rgba(170,255,0,0.5);
          box-shadow: 0 0 30px var(--glow-acid);
        }

        /* Ticker */
        .ticker { animation: tick 14s linear infinite; }
        @keyframes tick { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .ticker-rev { animation: tick-rev 18s linear infinite; }
        @keyframes tick-rev { from{transform:translateX(-50%)} to{transform:translateX(0)} }

        /* Neon text */
        .neon-purple { color: var(--lavender); text-shadow: 0 0 20px rgba(183,148,244,0.8); }
        .neon-coral { color: var(--coral); text-shadow: 0 0 20px rgba(255,107,107,0.8); }
        .neon-acid { color: var(--acid); text-shadow: 0 0 20px rgba(170,255,0,0.8); }
        .neon-sky { color: var(--sky-blue); }

        /* Loading bar */
        @keyframes load { from{width:0%} to{width:var(--w)} }
        .skill-load { animation: load 1.5s cubic-bezier(0.34,1.2,0.64,1) forwards; }

        /* Pixel border */
        .pixel-border {
          image-rendering: pixelated;
          border: 2px solid var(--lavender);
          box-shadow: 0 0 0 2px #0D0D1A, 0 0 0 4px var(--lavender), 0 0 20px var(--glow-purple);
        }

        /* Float animations */
        .float-a { animation: fa 5s ease-in-out infinite; }
        .float-b { animation: fb 6s ease-in-out infinite 1s; }
        .float-c { animation: fc 4s ease-in-out infinite 0.5s; }
        @keyframes fa{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-12px) rotate(2deg)}}
        @keyframes fb{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-18px) rotate(-3deg)}}
        @keyframes fc{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}

        /* Glitch */
        .glitch { position:relative; }
        .glitch::before,.glitch::after {
          content:attr(data-text);
          position:absolute; top:0; left:0; width:100%;
          animation: glitch-anim 4s steps(1) infinite;
        }
        .glitch::before { color: var(--coral); clip-path:polygon(0 30%,100% 30%,100% 50%,0 50%); animation-delay:0.5s; }
        .glitch::after  { color: var(--sky-blue); clip-path:polygon(0 60%,100% 60%,100% 75%,0 75%); }
        @keyframes glitch-anim {
          0%,95%,100%{transform:translate(0)}
          96%{transform:translate(-3px,1px)}
          97%{transform:translate(3px,-1px)}
          98%{transform:translate(-2px,2px)}
        }

        /* Scroll snap on job */
        .snap-x { scroll-snap-type: x mandatory; overflow-x: auto; scrollbar-width: none; }
        .snap-x::-webkit-scrollbar { display:none; }
        .snap-child { scroll-snap-align: start; }

        /* Status dot */
        .online-dot { animation: pulse-dot 2s ease infinite; }
        @keyframes pulse-dot {
          0%,100%{box-shadow:0 0 0 0 rgba(170,255,0,0.7)}
          50%{box-shadow:0 0 0 8px rgba(170,255,0,0)}
        }

        /* Mesh gradient bg */
        .mesh-bg {
          background:
            radial-gradient(ellipse at 20% 50%, rgba(183,148,244,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(103,232,249,0.12) 0%, transparent 45%),
            radial-gradient(ellipse at 60% 80%, rgba(255,107,107,0.1) 0%, transparent 45%),
            #0D0D1A;
        }

        /* Grid lines */
        .grid-lines {
          background-image:
            linear-gradient(rgba(183,148,244,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(183,148,244,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        /* Like button */
        .like-btn { transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1); }
        .like-btn:active { transform: scale(1.4); }

        /* Job card hover */
        .job-hover { transition: all 0.25s ease; }
        .job-hover:hover { background: rgba(183,148,244,0.08); padding-left: 2rem; border-color: rgba(183,148,244,0.4); }

        /* Notif slide */
        @keyframes slide-in { from{transform:translateX(120%)} to{transform:translateX(0)} }
        .notif-in { animation: slide-in 0.5s cubic-bezier(0.34,1.2,0.64,1) forwards; }
        @keyframes slide-out { from{transform:translateX(0)} to{transform:translateX(120%)} }
        .notif-out { animation: slide-out 0.4s ease forwards; }

        /* Scrollbar custom */
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-track { background:#0D0D1A; }
        ::-webkit-scrollbar-thumb { background: var(--lavender); border-radius:4px; }
      `}</style>

      {/* ── NOTIFICATION TOAST ── */}
      {notifVisible && (
        <div className="notif-in fixed top-20 right-4 z-[100] flex items-center gap-3 rounded-2xl px-5 py-3.5 cursor-pointer"
          style={{ background: "rgba(26,26,46,0.95)", border: "1px solid rgba(183,148,244,0.3)", backdropFilter: "blur(16px)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)", maxWidth: "280px" }}
          onClick={() => setNotifVisible(false)}>
          <span className="text-2xl">👋</span>
          <div>
            <p className="text-xs font-bold" style={{ color: "var(--lavender)" }}>New Portfolio Drop</p>
            <p className="text-xs" style={{ color: "rgba(240,238,255,0.6)" }}>Zara just launched her new work ✨</p>
          </div>
          <button className="text-xs ml-2 opacity-50 hover:opacity-100">✕</button>
        </div>
      )}

      {/* ── STATUS BAR ── */}
      <div className="w-full px-6 py-1.5 flex items-center justify-between mono text-xs"
        style={{ background: "rgba(13,13,26,0.9)", borderBottom: "1px solid rgba(183,148,244,0.1)" }}>
        <div className="flex items-center gap-4">
          <span style={{ color: "var(--acid)" }}>● LIVE</span>
          <span className="opacity-40">zara.design</span>
        </div>
        <div className="flex items-center gap-4 opacity-40">
          <span>{time}</span>
          <span>▐▐▐▐▌ 4G</span>
          <span>⚡ 98%</span>
        </div>
      </div>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50" style={{ background: "rgba(13,13,26,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(183,148,244,0.15)" }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 gap-4">

            <button onClick={() => scrollTo("home")} className="clash text-xl flex items-center gap-2 font-black">
              <span className="holo" style={{ fontSize: "1.4rem" }}>ZARA</span>
              <span className="mono text-xs font-normal" style={{ color: "rgba(240,238,255,0.3)" }}>v2.0</span>
            </button>

            {/* Desktop — OS-style tab bar */}
            <div className="hidden md:flex items-center gap-0.5 rounded-xl px-1 py-1"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              {links.map((l) => (
                <button key={l} onClick={() => scrollTo(l)}
                  className={`mono px-4 py-1.5 rounded-lg text-xs uppercase tracking-widest transition-all duration-200
                    ${active === l ? "font-bold" : "opacity-40 hover:opacity-70"}`}
                  style={active === l ? { background: "var(--lavender)", color: "#0D0D1A" } : {}}>
                  {l}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 mono text-xs px-4 py-2 rounded-full"
                style={{ background: "rgba(170,255,0,0.1)", border: "1px solid rgba(170,255,0,0.3)", color: "var(--acid)" }}>
                <span className="online-dot w-2 h-2 rounded-full" style={{ background: "var(--acid)" }} />
                open to work
              </div>
              <button onClick={() => scrollTo("contact")}
                className="px-5 py-2 rounded-full font-black text-xs uppercase tracking-wider"
                style={{ background: "linear-gradient(135deg,#B794F4,#FF6B6B)", color: "white" }}>
                DM Me
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg opacity-70 hover:opacity-100"
                style={{ border: "1px solid var(--border)" }}>
                <div className="w-4 flex flex-col gap-1">
                  {[0,1,2].map(i => <span key={i} className={`block h-px transition-all`} style={{ background: "var(--lavender)", width: menuOpen && i===1 ? "0" : "100%", transform: menuOpen ? (i===0?"rotate(45deg) translateY(6px)":i===2?"-rotate(45deg) translateY(-6px)":"") : "" }} />)}
                </div>
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-4 py-3 flex flex-col gap-1" style={{ borderTop: "1px solid var(--border)", background: "#0D0D1A" }}>
            {links.map((l) => (
              <button key={l} onClick={() => scrollTo(l)}
                className={`text-left px-5 py-3 rounded-xl mono text-sm uppercase tracking-widest transition-all ${active === l ? "font-bold" : "opacity-50"}`}
                style={{ background: active === l ? "rgba(183,148,244,0.15)" : "transparent", color: active === l ? "var(--lavender)" : "inherit" }}>
                /{l}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── DUAL TICKER ── */}
      <div className="overflow-hidden py-2.5" style={{ background: "rgba(183,148,244,0.08)", borderBottom: "1px solid var(--border)" }}>
        <div className="ticker inline-flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center">
              {["UI DESIGN ✦", "FIGMA PRO ✦", "REACT 18 ✦", "MOTION ✦", "GEN Z VIBES ✦", "BRANDING ✦", "WEB3 CURIOUS ✦", "OPEN TO COLLAB ✦"].map((t, j) => (
                <span key={j} className={`mx-8 mono text-xs tracking-[0.2em] ${j % 2 === 0 ? "neon-purple" : "opacity-40"}`}>{t}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── HOME ── OS Window hero */}
      <section id="home" className="py-12 lg:py-16 mesh-bg grid-lines relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 items-start">

            {/* LEFT — Main OS window */}
            <div className="lg:col-span-7">
              <div className="os-window">
                <div className="os-titlebar">
                  <div className="os-dot" style={{ background: "#FF5F56" }} />
                  <div className="os-dot" style={{ background: "#FFBD2E" }} />
                  <div className="os-dot" style={{ background: "#27C93F" }} />
                  <span className="mono text-xs ml-3 opacity-40">~/zara-portfolio/hero.jsx</span>
                </div>
                <div className="p-8 sm:p-12" style={{ background: "var(--card)" }}>
                  <div className="mono text-xs mb-6 leading-relaxed" style={{ color: "rgba(240,238,255,0.3)" }}>
                    <span style={{ color: "var(--lavender)" }}>const</span> <span style={{ color: "var(--sky-blue)" }}>designer</span> = {"{"}
                    <br />
                    &nbsp;&nbsp;<span style={{ color: "var(--coral)" }}>name</span>: <span style={{ color: "var(--acid)" }}>"Zara Kim"</span>,
                    <br />
                    &nbsp;&nbsp;<span style={{ color: "var(--coral)" }}>role</span>: <span style={{ color: "var(--acid)" }}>"UI/UX + Creative Tech"</span>,
                    <br />
                    &nbsp;&nbsp;<span style={{ color: "var(--coral)" }}>status</span>: <span style={{ color: "var(--acid)" }}>"open_to_work ✦"</span>
                    <br />
                    {"}"};
                  </div>

                  <h1 className="clash font-black leading-[0.85] mb-6" style={{ fontSize: "clamp(3.5rem,9vw,7.5rem)" }}>
                    <span className="glitch" data-text="ZARA" style={{ display: "block", color: "#F0EEFF" }}>ZARA</span>
                    <span className="holo" style={{ display: "block" }}>KIM.</span>
                  </h1>

                  <p className="text-sm leading-loose mb-8 max-w-md font-light" style={{ color: "rgba(240,238,255,0.55)" }}>
                    Final year @ SCAD. I design things that make people go <span style={{ color: "var(--coral)" }}>"wait how did they do that"</span>. UI/UX, motion, frontend — all of it. Let's build. 🔥
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => scrollTo("experience")}
                      className="px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-wider"
                      style={{ background: "linear-gradient(135deg,#B794F4,#67E8F9)", color: "#0D0D1A" }}>
                      my work ✦
                    </button>
                    <button onClick={() => scrollTo("contact")}
                      className="px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider"
                      style={{ background: "transparent", border: "1px solid rgba(183,148,244,0.4)", color: "var(--lavender)" }}>
                      hmu 👋
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Widget cluster */}
            <div className="lg:col-span-5 flex flex-col gap-4">

              {/* Profile widget */}
              <div className="glow-card p-6 flex items-center gap-5">
                <div className="relative shrink-0">
                  <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80"
                    alt="Zara" className="w-20 h-20 rounded-2xl object-cover pixel-border" />
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs online-dot"
                    style={{ background: "var(--acid)", border: "2px solid #0D0D1A" }}>✓</span>
                </div>
                <div>
                  <h3 className="clash font-black text-xl">Zara Kim</h3>
                  <p className="mono text-xs mb-2" style={{ color: "var(--lavender)" }}>@zaradesigns</p>
                  <div className="flex gap-2">
                    <span className="mono text-xs px-3 py-1 rounded-full" style={{ background: "rgba(170,255,0,0.12)", color: "var(--acid)", border: "1px solid rgba(170,255,0,0.25)" }}>🟢 available</span>
                    <span className="mono text-xs px-3 py-1 rounded-full" style={{ background: "rgba(103,232,249,0.1)", color: "var(--sky-blue)", border: "1px solid rgba(103,232,249,0.2)" }}>NYC ✦</span>
                  </div>
                </div>
              </div>

              {/* Stats widget */}
              <div className="glow-card p-6">
                <p className="mono text-xs mb-4 opacity-40 uppercase tracking-widest">quick stats.json</p>
                <div className="grid grid-cols-3 gap-3">
                  {[["4yr", "Design Exp", "var(--lavender)"],["20+","Projects","var(--coral)"],["100%","Vibes","var(--acid)"]].map(([n,l,c]) => (
                    <div key={l} className="text-center p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)" }}>
                      <p className="clash font-black text-2xl" style={{ color: c }}>{n}</p>
                      <p className="mono text-xs opacity-40 mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Now playing widget */}
              <div className="glow-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl float-a"
                  style={{ background: "linear-gradient(135deg,#B794F4,#FF6B6B)" }}>
                  🎵
                </div>
                <div className="flex-1 min-w-0">
                  <p className="mono text-xs opacity-40 mb-0.5">now designing to</p>
                  <p className="font-bold text-sm truncate">Brat — Charli XCX</p>
                  <div className="h-1 rounded-full mt-2" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div className="h-full rounded-full" style={{ width: "62%", background: "linear-gradient(90deg,var(--lavender),var(--coral))" }} />
                  </div>
                </div>
                <span className="mono text-xs opacity-40">2:14</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── Feed-style cards */}
      <section id="about" className="py-20" style={{ background: "#0D0D1A" }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section header — os-style */}
          <div className="os-window mb-10 inline-flex items-center gap-3 px-5 py-3">
            <div className="os-dot" style={{ background: "#FF5F56" }} /><div className="os-dot" style={{ background: "#FFBD2E" }} /><div className="os-dot" style={{ background: "#27C93F" }} />
            <span className="mono text-xs opacity-50">about.md</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* Left — text post style */}
            <div>
              <h2 className="clash font-black leading-[0.88] mb-6" style={{ fontSize: "clamp(3rem,7vw,6rem)" }}>
                <span style={{ color: "#F0EEFF" }}>I'm a</span><br />
                <span className="holo">designer</span><br />
                <span style={{ color: "#F0EEFF" }}>who </span>
                <span style={{ color: "var(--coral)" }}>codes.</span>
              </h2>
              <p className="text-sm leading-loose mb-6 font-light" style={{ color: "rgba(240,238,255,0.55)", maxWidth: "420px" }}>
                Final-year student at SCAD majoring in UX Design + Interactive Design. I love making things that feel alive — interfaces with motion, personality, and purpose.
              </p>
              <p className="text-sm leading-loose mb-8 font-light" style={{ color: "rgba(240,238,255,0.55)", maxWidth: "420px" }}>
                I'm obsessed with the intersection of design & technology. If it has a cursor, I'll redesign it. 💅
              </p>
              <div className="flex flex-wrap gap-2">
                {["Figma","React","Framer","GSAP","Three.js","Tailwind","After FX","Spline"].map((t) => (
                  <span key={t} className="mono text-xs px-4 py-2 rounded-full"
                    style={{ background: "rgba(183,148,244,0.08)", border: "1px solid rgba(183,148,244,0.2)", color: "var(--lavender)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — 2×2 glow cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🎨", title: "Visual Design", desc: "Pixel perfect, no compromises", color: "var(--lavender)", mt: "" },
                { icon: "⚡", title: "Fast Learner", desc: "New stack? Give me 48hrs", color: "var(--acid)", mt: "mt-8" },
                { icon: "🎬", title: "Motion Design", desc: "Everything should animate", color: "var(--coral)", mt: "-mt-4" },
                { icon: "🤝", title: "Collab Mode", desc: "Team energy > solo grind", color: "var(--sky-blue)", mt: "mt-4" },
              ].map(({ icon, title, desc, color, mt }) => (
                <div key={title} className={`glow-card p-6 ${mt}`}>
                  <span className="text-3xl block mb-4">{icon}</span>
                  <h4 className="font-black text-sm mb-1" style={{ color }}>{title}</h4>
                  <p className="text-xs leading-relaxed opacity-50 font-light">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── TikTok-style vertical cards with likes */}
      <section id="experience" className="py-20" style={{ background: "#0A0A16" }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="mono text-xs mb-2 opacity-40 uppercase tracking-widest">// 03 experience</p>
              <h2 className="clash font-black" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", color: "#F0EEFF" }}>
                MY <span className="holo">WORK</span>
              </h2>
            </div>
            <span className="clash font-black opacity-5" style={{ fontSize: "8rem", lineHeight: 1 }}>03</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                id:"e1", handle:"@studiobright", title:"UI/UX Intern", type:"💼 Internship", period:"Summer 2024",
                desc:"Shipped 3 full product flows. Contributed to a design system used by 15 engineers. 40% jump in user retention. 🚀",
                tags:["Figma","Design Sys","User Research"], accent:"var(--lavender)", current:true
              },
              {
                id:"e2", handle:"@freelancemode", title:"Freelance Designer", type:"🧑‍💻 Self-Employed", period:"2023–Now",
                desc:"Brands, landing pages, social kits for creators and small biz. 5-star every single time ⭐. DMs always open.",
                tags:["Branding","Webflow","Motion"], accent:"var(--coral)"
              },
              {
                id:"e3", handle:"@scaddesignclub", title:"Design Lead", type:"🎓 Student Org", period:"2022–2024",
                desc:"Led 25-person design org. Ran workshops, critiques, hackathons. Grew membership 3×. This one was everything.",
                tags:["Leadership","Events","Strategy"], accent:"var(--acid)"
              },
            ].map(({ id, handle, title, type, period, desc, tags, accent, current }) => (
              <div key={id} className="glow-card overflow-hidden" style={{ borderColor: liked[id] ? "rgba(255,107,107,0.4)" : undefined }}>
                {/* Post header */}
                <div className="flex items-center justify-between px-5 pt-5 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black"
                      style={{ background: `rgba(${accent === "var(--lavender)" ? "183,148,244" : accent === "var(--coral)" ? "255,107,107" : "170,255,0"},0.2)`, color: accent }}>
                      {title[0]}
                    </div>
                    <div>
                      <p className="mono text-xs font-bold" style={{ color: accent }}>{handle}</p>
                      <p className="mono text-xs opacity-40">{period}</p>
                    </div>
                  </div>
                  {current && (
                    <span className="mono text-xs px-3 py-1 rounded-full" style={{ background: "rgba(170,255,0,0.12)", color: "var(--acid)", border: "1px solid rgba(170,255,0,0.3)" }}>
                      ● live
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="px-5 py-4">
                  <span className="mono text-xs opacity-50 block mb-1">{type}</span>
                  <h4 className="clash font-black text-xl mb-2">{title}</h4>
                  <p className="text-xs leading-loose opacity-60 font-light mb-4">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <span key={t} className="mono text-xs px-3 py-1 rounded-full"
                        style={{ background: `rgba(${accent === "var(--lavender)" ? "183,148,244" : accent === "var(--coral)" ? "255,107,107" : "170,255,0"},0.08)`, color: accent, border: `1px solid ${accent}30` }}>
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Engagement row */}
                <div className="px-5 py-3 flex items-center gap-5" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                  <button className="like-btn flex items-center gap-2 mono text-xs opacity-60 hover:opacity-100 transition-opacity"
                    onClick={() => toggleLike(id)}>
                    <span style={{ fontSize: "1.1rem" }}>{liked[id] ? "❤️" : "🤍"}</span>
                    {liked[id] ? "liked" : "like"}
                  </button>
                  <button className="flex items-center gap-2 mono text-xs opacity-40 hover:opacity-70 transition-opacity">
                    <span>💬</span> comment
                  </button>
                  <button className="flex items-center gap-2 mono text-xs opacity-40 hover:opacity-70 transition-opacity">
                    <span>🔗</span> share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOB ── Horizontal scroll cards */}
      <section id="job" className="py-20" style={{ background: "#0D0D1A" }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="mono text-xs mb-2 opacity-40 uppercase tracking-widest">// 04 job history</p>
              <h2 className="clash font-black" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", color: "#F0EEFF" }}>
                WHERE I<br /><span style={{ color: "var(--sky-blue)" }}>LEVELED UP</span>
              </h2>
            </div>
          </div>

          {/* Big left text + table */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm leading-loose mb-6 font-light" style={{ color: "rgba(240,238,255,0.5)", maxWidth: "360px" }}>
                Every role, project, and collab has been a level-up. Here's the full run. No cap. 🏆
              </p>
              {/* XP bar */}
              <div className="glow-card p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="mono text-xs" style={{ color: "var(--acid)" }}>DESIGNER XP</span>
                  <span className="mono text-xs opacity-50">LVL 8 / 10</span>
                </div>
                <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-full" style={{ width: "80%", background: "linear-gradient(90deg,var(--lavender),var(--acid))" }} />
                </div>
                <p className="mono text-xs opacity-30 mt-2">2,400 / 3,000 XP to next level</p>
              </div>
            </div>

            {/* Job list — clean lines */}
            <div className="space-y-0 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(183,148,244,0.15)" }}>
              {[
                { no: "01", company: "Studio Bright", role: "UI/UX Intern", period: "Summer 2024", accent: "var(--lavender)" },
                { no: "02", company: "Self-Employed", role: "Freelance Designer", period: "2023–Now", accent: "var(--coral)" },
                { no: "03", company: "SCAD Design Club", role: "Design Lead", period: "2022–2024", accent: "var(--acid)" },
                { no: "04", company: "Streetwear Brand", role: "Brand + Social", period: "2021–2022", accent: "var(--sky-blue)" },
              ].map(({ no, company, role, period, accent }, i) => (
                <div key={company}
                  onMouseEnter={() => setHoveredJob(i)}
                  onMouseLeave={() => setHoveredJob(null)}
                  className="job-hover flex items-center gap-5 px-6 py-5 cursor-default transition-all"
                  style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none", background: hoveredJob === i ? "rgba(183,148,244,0.05)" : "rgba(255,255,255,0.01)" }}>
                  <span className="clash font-black text-4xl min-w-[3rem] leading-none"
                    style={{ color: hoveredJob === i ? accent : "rgba(255,255,255,0.07)" }}>{no}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-black truncate" style={{ color: hoveredJob === i ? "#F0EEFF" : "rgba(240,238,255,0.8)" }}>{company}</h4>
                    <p className="mono text-xs" style={{ color: hoveredJob === i ? accent : "rgba(255,255,255,0.3)" }}>{role}</p>
                  </div>
                  <span className="mono text-xs hidden sm:block" style={{ color: "rgba(255,255,255,0.25)" }}>{period}</span>
                  <span className="text-xl transition-all" style={{ color: hoveredJob === i ? accent : "rgba(255,255,255,0.1)", transform: hoveredJob === i ? "translateX(4px)" : "none" }}>→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SCHOOL ── Browser window style */}
      <section id="school" className="py-20 mesh-bg">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="mono text-xs mb-2 opacity-40 uppercase tracking-widest">// 05 education</p>
              <h2 className="clash font-black" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", color: "#F0EEFF" }}>
                WHERE I <span style={{ color: "var(--coral)" }}>STUDIED</span>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">

            {/* Main school — browser window */}
            <div className="lg:col-span-6 os-window">
              <div className="os-titlebar">
                <div className="os-dot" style={{ background: "#FF5F56" }} /><div className="os-dot" style={{ background: "#FFBD2E" }} /><div className="os-dot" style={{ background: "#27C93F" }} />
                <div className="flex-1 mx-4">
                  <div className="flex items-center gap-2 rounded-lg px-3 py-1 mono text-xs" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(240,238,255,0.4)" }}>
                    🔒 scad.edu/zara-kim
                  </div>
                </div>
              </div>
              <div className="p-8" style={{ background: "var(--card)" }}>
                <div className="inline-flex items-center gap-2 mono text-xs px-4 py-2 rounded-full mb-6"
                  style={{ background: "rgba(170,255,0,0.12)", border: "1px solid rgba(170,255,0,0.3)", color: "var(--acid)" }}>
                  <span className="online-dot w-2 h-2 rounded-full" style={{ background: "var(--acid)" }} />
                  currently enrolled
                </div>
                <h4 className="clash font-black text-3xl leading-tight mb-2">BFA UX Design<br />+ Interactive</h4>
                <p className="mono text-sm mb-1" style={{ color: "var(--lavender)" }}>SCAD — Savannah College of Art & Design</p>
                <p className="mono text-xs opacity-40 mb-6">2021 – 2025 (Expected)</p>
                <div className="flex flex-wrap gap-3">
                  <span className="mono text-xs px-4 py-2 rounded-full" style={{ background: "rgba(183,148,244,0.1)", border: "1px solid rgba(183,148,244,0.3)", color: "var(--lavender)" }}>GPA 3.9 ⭐</span>
                  <span className="mono text-xs px-4 py-2 rounded-full" style={{ background: "rgba(255,107,107,0.1)", border: "1px solid rgba(255,107,107,0.3)", color: "var(--coral)" }}>Dean's List 🏆</span>
                  <span className="mono text-xs px-4 py-2 rounded-full" style={{ background: "rgba(103,232,249,0.1)", border: "1px solid rgba(103,232,249,0.3)", color: "var(--sky-blue)" }}>Minor: CS 💻</span>
                </div>
              </div>
            </div>

            {/* Right certs grid */}
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5">
              {[
                { icon: "🎨", title: "Google UX Design", org: "Google / Coursera", year: "2023", accent: "var(--lavender)" },
                { icon: "⚛️", title: "React + Next.js", org: "Scrimba", year: "2024", accent: "var(--sky-blue)" },
                { icon: "🎬", title: "Motion Design", org: "School of Motion", year: "2023", accent: "var(--coral)" },
                { icon: "🔮", title: "Design Systems", org: "Figma Academy", year: "2024", accent: "var(--acid)" },
              ].map(({ icon, title, org, year, accent }) => (
                <div key={title} className="glow-card p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-3xl block mb-4">{icon}</span>
                    <h4 className="font-black text-base mb-1" style={{ color: accent }}>{title}</h4>
                    <p className="mono text-xs opacity-40">{org}</p>
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <span className="mono text-xs opacity-30">{year}</span>
                    <span className="mono text-xs px-3 py-1 rounded-full" style={{ background: `rgba(${accent === "var(--lavender)" ? "183,148,244" : accent === "var(--sky-blue)" ? "103,232,249" : accent === "var(--coral)" ? "255,107,107" : "170,255,0"},0.1)`, color: accent }}>
                      certified ✓
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILL ── Loading bar terminal */}
      <section id="skill" className="py-20" style={{ background: "#0A0A16" }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="mono text-xs mb-2 opacity-40 uppercase tracking-widest">// 06 skills</p>
              <h2 className="clash font-black" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", color: "#F0EEFF" }}>
                MY <span className="holo">STACK</span>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Terminal-style skill bars */}
            <div className="os-window">
              <div className="os-titlebar">
                <div className="os-dot" style={{ background: "#FF5F56" }} /><div className="os-dot" style={{ background: "#FFBD2E" }} /><div className="os-dot" style={{ background: "#27C93F" }} />
                <span className="mono text-xs ml-3 opacity-40">skill_check.sh</span>
              </div>
              <div className="p-7 space-y-5" style={{ background: "#0D0D1A" }}>
                {[
                  { name: "UI Design", pct: 92, color: "var(--lavender)", sym: "■" },
                  { name: "Frontend Dev", pct: 78, color: "var(--sky-blue)", sym: "■" },
                  { name: "Motion Design", pct: 80, color: "var(--coral)", sym: "■" },
                  { name: "Branding", pct: 85, color: "var(--acid)", sym: "■" },
                  { name: "Prototyping", pct: 90, color: "var(--lavender)", sym: "■" },
                ].map(({ name, pct, color, sym }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-2">
                      <span className="mono text-xs" style={{ color }}>$ loading {name.toLowerCase().replace(" ", "_")}.skill</span>
                      <span className="mono text-xs opacity-50">{pct}%</span>
                    </div>
                    <div className="h-3 rounded-sm overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <div className="h-full rounded-sm" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}, ${color}99)`, transition: "width 1.5s cubic-bezier(0.34,1.2,0.64,1)" }} />
                    </div>
                    <p className="mono text-xs mt-1 opacity-25">
                      [{sym.repeat(Math.floor(pct/10))}{" ".repeat(10-Math.floor(pct/10))}] done ✓
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools — icon grid */}
            <div>
              <p className="mono text-xs mb-6 opacity-40 uppercase tracking-widest">tools i vibe with</p>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { name: "Figma", icon: "◎", color: "var(--lavender)" },
                  { name: "React", icon: "⚛", color: "var(--sky-blue)" },
                  { name: "Framer", icon: "◈", color: "var(--coral)" },
                  { name: "GSAP", icon: "⟡", color: "var(--acid)" },
                  { name: "After FX", icon: "▶", color: "var(--lavender)" },
                  { name: "Spline", icon: "◬", color: "var(--sky-blue)" },
                  { name: "Tailwind", icon: "◇", color: "var(--coral)" },
                  { name: "Webflow", icon: "⎔", color: "var(--acid)" },
                ].map(({ name, icon, color }) => (
                  <div key={name} className="glow-card p-4 text-center hover:scale-105 transition-transform cursor-default">
                    <span className="text-2xl block mb-2" style={{ color }}>{icon}</span>
                    <span className="mono text-xs opacity-50">{name}</span>
                  </div>
                ))}
              </div>

              {/* Vibe check card */}
              <div className="glow-card p-6 mt-5">
                <p className="mono text-xs opacity-40 mb-3 uppercase tracking-widest">vibe check ✓</p>
                <div className="flex flex-wrap gap-2">
                  {["night owl 🦉","dark mode always","pixel perfect","motion enthusiast","accessibility first","aesthetic > trends","ships fast","figma autolayout nerd"].map((v) => (
                    <span key={v} className="mono text-xs px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(240,238,255,0.5)" }}>
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── DM interface */}
      <section id="contact" className="py-20 mesh-bg">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="mono text-xs mb-2 opacity-40 uppercase tracking-widest">// 07 contact</p>
              <h2 className="clash font-black" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", color: "#F0EEFF" }}>
                LET'S <span className="holo">COLLAB</span> 🤝
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left — chat bubbles */}
            <div>
              <div className="space-y-4 mb-8">
                {[
                  { msg: "hey! open to internships, freelance, and collabs 👋", side: "left", accent: "var(--lavender)" },
                  { msg: "especially excited about: AI tools, motion design, and anything weird 🌀", side: "left", accent: "var(--lavender)" },
                  { msg: "response time: fast ⚡ (seriously, I'm always online)", side: "right", accent: "var(--coral)" },
                ].map(({ msg, side, accent }, i) => (
                  <div key={i} className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
                    <div className="max-w-xs px-5 py-3 rounded-2xl text-sm font-light"
                      style={{
                        background: side === "left" ? `rgba(${accent === "var(--lavender)" ? "183,148,244" : "255,107,107"},0.12)` : "rgba(255,255,255,0.06)",
                        border: `1px solid ${side === "left" ? accent : "rgba(255,255,255,0.1)"}30`,
                        borderRadius: side === "left" ? "4px 18px 18px 18px" : "18px 4px 18px 18px",
                        color: "rgba(240,238,255,0.8)"
                      }}>
                      {msg}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact links */}
              <div className="space-y-3">
                {[
                  { icon: "✉️", label: "Email", val: "zara@kim.design", color: "var(--lavender)" },
                  { icon: "💼", label: "LinkedIn", val: "/in/zarakim", color: "var(--sky-blue)" },
                  { icon: "🏀", label: "Dribbble", val: "@zaradesigns", color: "var(--coral)" },
                  { icon: "🐦", label: "Twitter/X", val: "@zarakim_", color: "var(--acid)" },
                ].map(({ icon, label, val, color }) => (
                  <div key={label} className="glow-card flex items-center gap-4 px-5 py-4 cursor-pointer hover:translate-x-1 transition-transform">
                    <span className="text-xl">{icon}</span>
                    <span className="mono text-xs opacity-40 w-16 shrink-0">{label}</span>
                    <span className="mono text-sm font-bold" style={{ color }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — DM form as chat input */}
            <div className="os-window">
              <div className="os-titlebar">
                <div className="os-dot" style={{ background: "#FF5F56" }} /><div className="os-dot" style={{ background: "#FFBD2E" }} /><div className="os-dot" style={{ background: "#27C93F" }} />
                <div className="flex items-center gap-2 ml-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black" style={{ background: "linear-gradient(135deg,#B794F4,#FF6B6B)" }}>Z</div>
                  <span className="mono text-xs opacity-50">Zara Kim</span>
                  <span className="online-dot w-2 h-2 rounded-full ml-1" style={{ background: "var(--acid)" }} />
                </div>
              </div>

              {/* Chat messages */}
              <div className="p-6 space-y-3" style={{ background: "var(--card)", minHeight: "120px" }}>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-sm font-black" style={{ background: "linear-gradient(135deg,#B794F4,#FF6B6B)" }}>Z</div>
                  <div className="px-4 py-2.5 rounded-2xl text-xs font-light" style={{ background: "rgba(183,148,244,0.1)", border: "1px solid rgba(183,148,244,0.2)", color: "rgba(240,238,255,0.7)", borderRadius: "4px 16px 16px 16px" }}>
                    hey! drop me a message — i read everything 👀
                  </div>
                </div>
              </div>

              {/* Form inputs */}
              <div className="p-5 space-y-3" style={{ background: "#0D0D1A", borderTop: "1px solid var(--border)" }}>
                <div className="grid grid-cols-2 gap-3">
                  {[["your name 👋", "text"], ["your email 📬", "email"]].map(([ph, type]) => (
                    <input key={ph} type={type} placeholder={ph}
                      className="w-full px-4 py-3 rounded-xl mono text-xs outline-none transition-all"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F0EEFF" }}
                      onFocus={e => { e.target.style.borderColor = "rgba(183,148,244,0.5)"; e.target.style.boxShadow = "0 0 15px rgba(183,148,244,0.1)"; }}
                      onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
                    />
                  ))}
                </div>
                <input type="text" placeholder="what's the vibe? 💡"
                  className="w-full px-4 py-3 rounded-xl mono text-xs outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F0EEFF" }}
                  onFocus={e => { e.target.style.borderColor = "rgba(183,148,244,0.5)"; e.target.style.boxShadow = "0 0 15px rgba(183,148,244,0.1)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
                />
                <textarea rows={3} placeholder="tell me everything 🫶 (or just the important stuff)"
                  className="w-full px-4 py-3 rounded-xl mono text-xs outline-none resize-none transition-all"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F0EEFF" }}
                  onFocus={e => { e.target.style.borderColor = "rgba(183,148,244,0.5)"; e.target.style.boxShadow = "0 0 15px rgba(183,148,244,0.1)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
                />
                <button className="w-full py-3.5 rounded-xl font-black text-sm uppercase tracking-wider transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg,#B794F4,#67E8F9,#FF6B6B)", backgroundSize: "200%", color: "#0D0D1A" }}>
                  send it 🚀
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8" style={{ background: "#070710", borderTop: "1px solid rgba(183,148,244,0.1)" }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="clash font-black text-xl flex items-center gap-2">
            <span className="holo">ZARA</span>
            <span className="mono text-xs opacity-30 font-normal">v2.0</span>
          </span>
          <p className="mono text-xs opacity-25 tracking-widest uppercase">© 2026 Zara Kim — built different 🔥</p>
          <button onClick={() => scrollTo("home")}
            className="mono text-xs opacity-30 hover:opacity-70 transition-opacity uppercase tracking-widest"
            style={{ color: "var(--lavender)" }}>
            ↑ back to top
          </button>
        </div>
      </footer>
    </div>
  );
}