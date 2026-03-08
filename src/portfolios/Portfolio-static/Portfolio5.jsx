import { useState, useEffect } from "react";
import ButtonEdit from "./ButtonEdit";
import { NavLink } from "react-router";
import { templates } from "../templates";
export default function PortfolioGirl() {
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
    <div className="bg-rose-50 text-stone-800 min-h-screen overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Mono:wght@300;400;500&display=swap');
        * { font-family: 'DM Mono', monospace; }
        .cormorant { font-family: 'Cormorant Garamond', serif; }
        .border-chic { border: 2px solid #44403c; }
        .border-chic-thin { border: 1px solid #d6c5b8; }
        .shadow-chic { box-shadow: 5px 5px 0px #44403c; }
        .shadow-chic-rose { box-shadow: 5px 5px 0px #fb7185; }
        .shadow-chic-gold { box-shadow: 5px 5px 0px #b45309; }
        .hover-chic { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .hover-chic:hover { transform: translate(-3px, -3px); box-shadow: 8px 8px 0px #44403c; }
        .hover-chic-rose:hover { transform: translate(-3px,-3px); box-shadow: 8px 8px 0px #fb7185; }
        .marquee { animation: marquee 22s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .dot-bg { background-image: radial-gradient(circle, #d6c5b8 1px, transparent 1px); background-size: 24px 24px; }
        .line-accent { position: relative; }
        .line-accent::before { content:''; position:absolute; left:0; bottom:-6px; width:60px; height:3px; background:#fb7185; }
        .stripe-bg { background: repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(251,113,133,0.06) 8px, rgba(251,113,133,0.06) 16px); }
        .gold-text { color: #92400e; }
        .plum-bg { background-color: #3b1f2b; }
        .petal { position:absolute; border-radius:50% 0 50% 0; }
      `}</style>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-rose-50/95 backdrop-blur border-b-2 border-stone-800">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollTo("home")}
              className="cormorant text-3xl font-bold italic text-stone-800 tracking-wide"
            >
              Léa<span className="text-rose-400 not-italic">✿</span>
            </button>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className={`px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-200
                    ${active === l
                      ? "bg-stone-800 text-rose-100"
                      : "text-stone-500 hover:text-stone-800 hover:bg-rose-100"
                    }`}
                >
                  {l}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="ml-4 px-5 py-2 bg-rose-400 text-white text-xs font-medium uppercase tracking-[0.15em] border-chic shadow-chic hover-chic"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 border-chic flex flex-col items-center justify-center gap-1.5 bg-white"
            >
              <span
                className={`block w-5 h-px bg-stone-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`block w-5 h-px bg-stone-800 transition-all ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-px bg-stone-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t-2 border-stone-800 bg-rose-50">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`w-full text-left px-6 py-4 text-xs font-medium uppercase tracking-[0.15em] border-b border-stone-200 transition
                  ${active === l ? "bg-stone-800 text-rose-100" : "text-stone-600 hover:bg-rose-100"}`}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </nav>

      {templates.map((template) => (
        <NavLink key={template.id} to={`/dashboard/portfolio/2`}>
          <ButtonEdit />
        </NavLink>
      ))}

      {/* ── HOME ── */}
      <section id="home" className="min-h-screen dot-bg">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8  py-6">
          <div className="flex justify-between items-center">
            {/* Text — 7 cols */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 bg-white border-chic px-5 py-2.5 mb-10 shadow-chic-rose">
                <span className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" />
                <span className="text-xs tracking-[0.2em] uppercase font-medium text-stone-600">
                  Open to Opportunities
                </span>
              </div>

              <p className="cormorant text-xl font-light italic text-rose-400 tracking-widest mb-3">
                Hello, I'm
              </p>
              <h1
                className="cormorant font-bold leading-none text-stone-900 mb-2"
                style={{ fontSize: "clamp(4.5rem,11vw,8.5rem)" }}
              >
                Léa
              </h1>
              <h1
                className="cormorant font-bold leading-none text-rose-400 mb-4"
                style={{ fontSize: "clamp(4.5rem,11vw,8.5rem)" }}
              >
                Moreau
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-stone-300 flex-1 max-w-[80px]" />
                <p className="text-xs tracking-[0.25em] uppercase text-stone-500 font-medium">
                  UI/UX Designer & Creative Director
                </p>
              </div>

              <p className="text-stone-500 text-sm leading-loose max-w-lg mb-10 font-light">
                I craft digital experiences that feel as beautiful as they are
                intuitive. Blending fine-art sensibility with strategic design
                thinking to create work that lingers.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("experience")}
                  className="px-8 py-4 bg-stone-800 text-rose-50 text-xs font-medium uppercase tracking-[0.2em] border-chic shadow-chic hover-chic"
                >
                  View My Work →
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-8 py-4 bg-rose-100 text-stone-800 text-xs font-medium uppercase tracking-[0.2em] border-chic shadow-chic-rose hover-chic-rose transition-all duration-150"
                >
                  Let's Connect
                </button>
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-0 mt-14 border-chic overflow-hidden">
                {[
                  ["7+", "Years"],
                  ["60+", "Projects"],
                  ["40+", "Clients"],
                ].map(([n, l], i) => (
                  <div
                    key={l}
                    className={`py-6 text-center bg-white ${i < 2 ? "border-r-2 border-stone-800" : ""}`}
                  >
                    <p className="cormorant text-4xl font-bold text-rose-400">
                      {n}
                    </p>
                    <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mt-1">
                      {l}
                    </p>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Image — 5 cols */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative mt-8">
                {/* Frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border-chic bg-rose-200/40" />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-chic-thin bg-stone-800/5" />
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80"
                  alt="Profile"
                  className="relative w-64 sm:w-72 lg:w-80 xl:w-115 aspect-[3/4] object-cover border-chic"
                />
                {/* Badge */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-rose-400 border-chic px-6 py-2.5 shadow-chic whitespace-nowrap">
                  <p className="text-white text-xs tracking-[0.2em] uppercase font-medium">
                    Creative Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── MARQUEE ── */}
      <div className="bg-stone-800 border-b-2 border-stone-800 py-2.5 overflow-hidden">
        <div className="marquee inline-flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center">
              {[
                "UI DESIGN",
                "✿",
                "UX RESEARCH",
                "✿",
                "BRANDING",
                "✿",
                "FRONTEND DEV",
                "✿",
                "MOTION",
                "✿",
                "TYPOGRAPHY",
                "✿",
                "ART DIRECTION",
                "✿",
              ].map((t, j) => (
                <span
                  key={j}
                  className={`mx-6 text-xs tracking-[0.2em] font-medium ${t === "✿" ? "text-rose-400 text-base" : "text-rose-100"}`}
                >
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-stone-800 text-rose-50">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-rose-400" />
                <span className="text-xs tracking-[0.25em] uppercase text-rose-400 font-medium">
                  About Me
                </span>
              </div>
              <h2
                className="cormorant font-bold leading-none mb-8 text-white"
                style={{ fontSize: "clamp(3.5rem,8vw,6rem)" }}
              >
                Design is
                <br />
                <em className="text-rose-400">my craft,</em>
                <br />
                beauty is
                <br />
                my standard.
              </h2>
              <p className="text-stone-400 leading-loose mb-5 text-sm font-light">
                I specialize in designing modern web and mobile interfaces
                rooted in emotional resonance. I believe the best design
                whispers — it guides without demanding, delights without
                overwhelming.
              </p>
              <p className="text-stone-400 leading-loose mb-8 text-sm font-light">
                7+ years working with luxury brands, creative studios, and
                ambitious startups to shape digital identities that last.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Figma",
                  "React",
                  "Tailwind CSS",
                  "After Effects",
                  "Framer",
                  "Webflow",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 border border-stone-600 text-stone-300 text-xs tracking-[0.15em] uppercase hover:bg-rose-400 hover:text-white hover:border-rose-400 transition-all cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Staggered cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "✦",
                  title: "Visual Direction",
                  desc: "Crafting identities that stop the scroll",
                  accent: "bg-rose-400 border-chic shadow-chic text-white",
                },
                {
                  icon: "◎",
                  title: "Mobile First",
                  desc: "Fluid experiences on every device",
                  accent:
                    "bg-white border-chic shadow-chic-rose text-stone-800",
                  mt: "mt-8",
                },
                {
                  icon: "◈",
                  title: "Fast Delivery",
                  desc: "Precision without compromise",
                  accent: "bg-stone-700 border border-stone-600 text-stone-100",
                  mt: "-mt-4",
                },
                {
                  icon: "❋",
                  title: "Collaboration",
                  desc: "Seamlessly working across teams",
                  accent: "bg-rose-100 border-chic text-stone-800",
                  mt: "mt-4",
                },
              ].map(({ icon, title, desc, accent, mt = "" }) => (
                <div
                  key={title}
                  className={`${accent} ${mt} p-6 hover-chic transition-all duration-200`}
                >
                  <span className="text-2xl block mb-4 font-light">{icon}</span>
                  <h4 className="text-xs font-medium uppercase tracking-[0.15em] mb-2">
                    {title}
                  </h4>
                  <p className="text-xs leading-relaxed opacity-70 font-light">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-24 bg-rose-50 stripe-bg">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-2 border-stone-800 pb-6">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-rose-400 font-medium block mb-3">
                Experience
              </span>
              <h2
                className="cormorant font-bold text-stone-900 leading-none"
                style={{ fontSize: "clamp(3rem,7vw,5.5rem)" }}
              >
                My Journey
              </h2>
            </div>
            <span
              className="cormorant font-light text-stone-200 leading-none select-none hidden lg:block"
              style={{ fontSize: "8rem" }}
            >
              03
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Creative Director",
                company: "Lumière Studio",
                period: "2022–Now",
                desc: "Directing creative vision for global luxury and lifestyle brands. Leading a team of 6 designers.",
                current: true,
              },
              {
                title: "Senior UI/UX Designer",
                company: "Atelier Digital",
                period: "2019–2022",
                desc: "Designed award-winning interfaces for fashion, beauty, and e-commerce clients worldwide.",
              },
              {
                title: "Visual Designer",
                company: "Freelance",
                period: "2017–2019",
                desc: "Brand identities, editorial layouts, and UI kits for 30+ international clients.",
              },
            ].map(({ title, company, period, desc, current }) => (
              <div
                key={title}
                className={`bg-white border-chic hover-chic p-8 ${current ? "shadow-chic-rose" : "shadow-chic"}`}
              >
                {current ? (
                  <div className="inline-flex items-center gap-2 bg-rose-400 border-chic px-3 py-1 mb-5">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    <span className="text-white text-xs tracking-[0.15em] uppercase font-medium">
                      Current
                    </span>
                  </div>
                ) : (
                  <div className="h-7 mb-5" />
                )}
                <h4 className="cormorant font-bold text-2xl text-stone-900 leading-tight mb-1">
                  {title}
                </h4>
                <p className="text-rose-400 text-xs font-medium uppercase tracking-[0.15em] mb-1">
                  {company}
                </p>
                <p className="text-stone-400 text-xs tracking-widest mb-5">
                  {period}
                </p>
                <p className="text-stone-500 text-sm leading-loose font-light">
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
        className="py-24 bg-rose-200 border-y-2 border-stone-800"
      >
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-stone-500 font-medium block mb-3">
                Job History
              </span>
              <h2
                className="cormorant font-bold text-stone-900 leading-none"
                style={{ fontSize: "clamp(3rem,7vw,5.5rem)" }}
              >
                Where I've
                <br />
                Worked
              </h2>
            </div>
          </div>

          <div className="border-chic overflow-hidden bg-white/60">
            {[
              {
                no: "01",
                company: "Lumière Studio",
                role: "Creative Director",
                period: "2022–Present",
              },
              {
                no: "02",
                company: "Atelier Digital",
                role: "Senior UI/UX Designer",
                period: "2019–2022",
              },
              {
                no: "03",
                company: "Maison Créative",
                role: "Junior Designer",
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
                className={`flex items-center gap-6 sm:gap-10 px-6 sm:px-10 py-6 transition-all duration-200 cursor-default
                  ${i < 3 ? "border-b-2 border-stone-800" : ""}
                  ${hoveredJob === i ? "bg-stone-800 text-rose-50" : "bg-transparent text-stone-800"}`}
              >
                <span
                  className={`cormorant font-light text-5xl sm:text-6xl min-w-[4rem] leading-none italic
                  ${hoveredJob === i ? "text-rose-300" : "text-rose-200"}`}
                >
                  {no}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="cormorant font-bold text-2xl sm:text-3xl leading-none truncate">
                    {company}
                  </h4>
                  <p
                    className={`text-xs font-medium uppercase tracking-[0.15em] mt-1 ${hoveredJob === i ? "text-rose-300" : "text-rose-400"}`}
                  >
                    {role}
                  </p>
                </div>
                <span
                  className={`shrink-0 text-xs font-medium uppercase tracking-widest hidden sm:block
                  ${hoveredJob === i ? "text-rose-200" : "text-stone-400"}`}
                >
                  {period}
                </span>
                <span
                  className={`cormorant italic text-3xl shrink-0 ${hoveredJob === i ? "text-rose-300" : "text-rose-200"}`}
                >
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOOL ── */}
      <section id="school" className="py-24 bg-rose-50">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-2 border-stone-800 pb-6">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-rose-400 font-medium block mb-3">
                Education
              </span>
              <h2
                className="cormorant font-bold text-stone-900 leading-none"
                style={{ fontSize: "clamp(3rem,7vw,5.5rem)" }}
              >
                Academic
                <br />
                Background
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: "✦",
                degree: "Bachelor of Fine Arts",
                school: "École des Beaux-Arts",
                period: "2015–2019",
                badge: "Mention Très Bien",
                accent: "border-l-4 border-l-rose-400",
              },
              {
                icon: "◎",
                degree: "UX Design Certification",
                school: "Interaction Design Foundation",
                period: "2020",
                badge: "Excellence Award",
                accent: "border-l-4 border-l-stone-800",
              },
              {
                icon: "◈",
                degree: "Motion & Interaction",
                school: "School of Motion",
                period: "2021",
                badge: "Advanced Level",
                accent: "border-l-4 border-l-rose-300",
              },
              {
                icon: "❋",
                degree: "Design Systems Mastery",
                school: "Figma Academy",
                period: "2022",
                badge: "Professional Cert.",
                accent: "border-l-4 border-l-amber-700",
              },
            ].map(({ icon, degree, school, period, badge, accent }) => (
              <div
                key={degree}
                className={`bg-white border-chic shadow-chic hover-chic flex gap-5 p-7 ${accent}`}
              >
                <span className="text-rose-300 text-3xl shrink-0 mt-1 font-light">
                  {icon}
                </span>
                <div>
                  <h4 className="cormorant font-bold text-xl text-stone-900 leading-tight mb-1">
                    {degree}
                  </h4>
                  <p className="text-rose-400 text-xs font-medium uppercase tracking-[0.15em] mb-1">
                    {school}
                  </p>
                  <p className="text-stone-400 text-xs tracking-widest mb-4">
                    {period}
                  </p>
                  <span className="inline-block bg-rose-100 border-chic px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-stone-700 shadow-chic-rose">
                    {badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILL ── */}
      <section id="skill" className="py-24 bg-stone-800 text-white">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-2 border-stone-600 pb-6">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-rose-400 font-medium block mb-3">
                Skills
              </span>
              <h2
                className="cormorant font-bold leading-none text-white"
                style={{ fontSize: "clamp(3rem,7vw,5.5rem)" }}
              >
                What I Do
                <br />
                <em className="text-rose-400">Best</em>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Skill bars */}
            <div className="space-y-8">
              {[
                { name: "UI Design", pct: 96, tools: "Figma · Adobe XD" },
                { name: "Frontend Dev", pct: 84, tools: "React · Tailwind" },
                { name: "Art Direction", pct: 92, tools: "Visual Identity" },
                { name: "Prototyping", pct: 88, tools: "Framer · InVision" },
                { name: "Motion Design", pct: 75, tools: "After Effects" },
              ].map(({ name, pct, tools }) => (
                <div key={name} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <span className="cormorant font-semibold text-xl text-white group-hover:text-rose-300 transition-colors">
                        {name}
                      </span>
                      <span className="text-stone-500 text-xs tracking-widest uppercase">
                        {tools}
                      </span>
                    </div>
                    <span className="cormorant font-bold text-xl text-rose-400">
                      {pct}%
                    </span>
                  </div>
                  <div className="h-2 bg-stone-700 border border-stone-600 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-rose-400 to-rose-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tool grid */}
            <div className="grid grid-cols-3 gap-0 border-chic overflow-hidden self-start">
              {[
                { label: "Figma", icon: "◎" },
                { label: "React", icon: "◈" },
                { label: "Tailwind", icon: "✦" },
                { label: "Adobe XD", icon: "❋" },
                { label: "Framer", icon: "◇" },
                { label: "After FX", icon: "⊹" },
              ].map(({ label, icon }, i) => (
                <div
                  key={label}
                  className={`p-6 sm:p-8 text-center bg-stone-900 hover:bg-rose-400 transition-all duration-200 group cursor-default
                    ${i % 3 !== 2 ? "border-r-2 border-stone-700" : ""}
                    ${i < 3 ? "border-b-2 border-stone-700" : ""}`}
                >
                  <span className="text-rose-400 group-hover:text-white text-2xl block mb-2 font-light transition-colors">
                    {icon}
                  </span>
                  <span className="text-stone-400 group-hover:text-white text-xs tracking-[0.15em] uppercase font-medium transition-colors">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-rose-50 dot-bg">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-rose-400 font-medium block mb-4">
                Contact
              </span>
              <h2
                className="cormorant font-bold leading-none text-stone-900 mb-8"
                style={{ fontSize: "clamp(3rem,8vw,6.5rem)" }}
              >
                Let's
                <br />
                <em className="text-rose-400">Create</em>
                <br />
                Together
              </h2>
              <p className="text-stone-500 text-sm leading-loose max-w-sm mb-10 font-light">
                Have a beautiful project in mind? I'd love to hear about it.
                Every great collaboration starts with a conversation.
              </p>
              <div className="space-y-5">
                {[
                  { label: "Email", value: "lea@moreau.design" },
                  { label: "LinkedIn", value: "linkedin.com/in/leamoreau" },
                  { label: "Dribbble", value: "dribbble.com/leamoreau" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-5 border-b border-stone-200 pb-4"
                  >
                    <span className="text-rose-400 text-xs font-medium uppercase tracking-[0.2em] w-20 shrink-0">
                      {label}
                    </span>
                    <span className="text-stone-600 text-xs font-medium">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white border-chic shadow-chic p-8 sm:p-10">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-[0.15em] text-stone-600 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Sophie Dupont"
                      className="w-full bg-rose-50 border-chic-thin focus:border-stone-800 text-stone-800 placeholder-stone-300 px-4 py-3 outline-none transition-all text-xs font-light border-2"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-[0.15em] text-stone-600 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="sophie@email.com"
                      className="w-full bg-rose-50 border-chic-thin focus:border-stone-800 text-stone-800 placeholder-stone-300 px-4 py-3 outline-none transition-all text-xs font-light border-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-[0.15em] text-stone-600 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Brand identity project…"
                    className="w-full bg-rose-50 border-chic-thin focus:border-stone-800 text-stone-800 placeholder-stone-300 px-4 py-3 outline-none transition-all text-xs font-light border-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-[0.15em] text-stone-600 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your vision…"
                    className="w-full bg-rose-50 border-chic-thin focus:border-stone-800 text-stone-800 placeholder-stone-300 px-4 py-3 outline-none transition-all text-xs font-light resize-none border-2"
                  />
                </div>
                <button className="w-full py-4 bg-rose-400 hover:bg-rose-500 text-white text-xs font-medium uppercase tracking-[0.2em] border-chic shadow-chic hover-chic transition-all duration-150">
                  Send Message →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-stone-800 border-t-2 border-stone-700 py-8">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="cormorant text-2xl font-bold italic text-rose-300">
            Léa<span className="text-rose-400 not-italic">✿</span>
          </span>
          <p className="text-stone-500 text-xs tracking-[0.2em] uppercase">
            © 2026 Léa Moreau — All rights reserved
          </p>
          <button
            onClick={() => scrollTo("home")}
            className="text-stone-500 hover:text-rose-300 text-xs tracking-[0.15em] uppercase font-medium transition-colors"
          >
            ↑ Back to Top
          </button>
        </div>
      </footer>
    </div>
  );
}
