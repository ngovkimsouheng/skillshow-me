import { useState, useEffect } from "react";
import { useGetMyPortfolioQuery } from "../../api/portfolioApi";
import DeleteProject from "../../Project/ProjectUser/DeleteProject";
import DeleteSkill from "../../Project/skill/DeleteSkill";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
export default function GetPortfolio8({ theme = {} }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("home");
    const [hoveredJob, setHoveredJob] = useState(null);
    const { data, isLoading, error } = useGetMyPortfolioQuery();
    const portfolio1 = data?.data;
    console.log(portfolio1)
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
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

    // Conditional rendering for loading or error comes AFTER hooks
    if (isLoading) {
        return (
            <div className="flex h-[90vh] items-center justify-center h-64 text-yellow-300 text-xl">
                {/* Loading portfolio... */}
                <div class="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                    <svg class="w-16 h-16 animate-spin text-gray-900/50" viewBox="0 0 64 64" fill="none"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path
                            d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                            stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                            stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-900">
                        </path>
                    </svg>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-red-500 text-center">
                <p>Failed to load portfolio.</p>
                <pre className="text-xs mt-2">{JSON.stringify(error, null, 2)}</pre>
            </div>
        );
    }


    return (
        <div
            className="min-h-screen overflow-x-hidden"
            style={{ background: "#FAFAF5", color: "#1C1C1C" }}
        >
            <style>{`


        :root {
          --lime: #C8F135;
          --orange: #FF6B35;
          --sky: #A8D8EA;
          --pink: #FFB5C8;
          --charcoal: #1C1C1C;
          --cream: #FAFAF5;
          --warm: #F5F0E8;
        }

        /* Ticker */
        .ticker { animation: tick 15s linear infinite; }
        @keyframes tick { from{transform:translateX(0)} to{transform:translateX(-50%)} }

        /* Wobble on hover */
        .wobble:hover { animation: wobble 0.4s ease; }
        @keyframes wobble {
          0%,100%{transform:rotate(0deg)}
          25%{transform:rotate(-3deg)}
          75%{transform:rotate(3deg)}
        }

        /* Sticker badge */
        .sticker {
          border-radius: 999px;
          border: 2px solid var(--charcoal);
          box-shadow: 3px 3px 0 var(--charcoal);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .sticker:hover { transform: translate(-2px,-2px); box-shadow: 5px 5px 0 var(--charcoal); }

        /* Card base */
        .zine-card {
          border: 2px solid var(--charcoal);
          box-shadow: 5px 5px 0 var(--charcoal);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .zine-card:hover { transform: translate(-3px,-3px); box-shadow: 8px 8px 0 var(--charcoal); }
        .zine-card-lime { border: 2px solid var(--charcoal); box-shadow: 5px 5px 0 var(--lime); }
        .zine-card-lime:hover { transform: translate(-3px,-3px); box-shadow: 8px 8px 0 var(--lime); }
        .zine-card-orange { border: 2px solid var(--charcoal); box-shadow: 5px 5px 0 var(--orange); }
        .zine-card-orange:hover { transform: translate(-3px,-3px); box-shadow: 8px 8px 0 var(--orange); }

        /* Squiggle underline */
        .squiggle {
          text-decoration: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='6'%3E%3Cpath d='M0 3 Q5 0 10 3 Q15 6 20 3' stroke='%23C8F135' stroke-width='2.5' fill='none'/%3E%3C/svg%3E");
          background-repeat: repeat-x;
          background-position: bottom;
          background-size: 20px 6px;
          padding-bottom: 6px;
        }

        /* Doodle star spin */
        .spin-slow { animation: spin 12s linear infinite; }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

        /* Float */
        .float { animation: float 4s ease-in-out infinite; }
        .float-d { animation: float 5s ease-in-out infinite 1s; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }

        /* Progress bar */
        .skill-bar { transition: width 1s ease; }

        /* Nav pill active */
        .nav-active { background: var(--lime); color: var(--charcoal); }

        /* Marquee strip */
        .strip-lime { background: var(--lime); }

        /* Job hover row */
        .job-row { transition: background 0.2s ease, padding-left 0.2s ease; }
        .job-row:hover { background: #F0FCA8; padding-left: 2.5rem; }

        /* Blob shape */
        .blob {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: morph 8s ease-in-out infinite;
        }
        @keyframes morph {
          0%,100%{border-radius:30% 70% 70% 30%/30% 30% 70% 70%}
          50%{border-radius:70% 30% 30% 70%/70% 70% 30% 30%}
        }

        /* Tape element */
        .tape {
          background: rgba(255,107,53,0.3);
          transform: rotate(-2deg);
          padding: 4px 20px;
          position: absolute;
        }
      `}</style>

            {/* ── NAV ── */}
            <nav
                className="w-full  z-50"
                style={{
                    background: "rgba(250,250,245,0.93)",
                    backdropFilter: "blur(12px)",
                    borderBottom: "2px solid #1C1C1C",
                }}
            >
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 gap-6">
                        <button
                            onClick={() => scrollTo("home")}
                            className="fraunces font-black text-2xl flex items-center gap-2 wobble"
                        >
                            <span
                                className="w-8 h-8 flex items-center justify-center text-base"
                                style={{
                                    background: "var(--lime)",
                                    border: "2px solid #1C1C1C",
                                    boxShadow: "3px 3px 0 #1C1C1C",
                                    borderRadius: "8px",
                                }}
                            >
                                ✦
                            </span>
                            KAI<span style={{ color: "var(--orange)" }}>.</span>
                        </button>

                        {/* Desktop — pill nav */}
                        <div
                            className="hidden md:flex items-center gap-1 rounded-full px-2 py-1.5"
                            style={{
                                background: "var(--warm)",
                                border: "2px solid #1C1C1C",
                                boxShadow: "3px 3px 0 #1C1C1C",
                            }}
                        >
                            {links.map((l) => (
                                <button
                                    key={l}
                                    onClick={() => scrollTo(l)}
                                    className={`px-4 py-1.5 rounded-full text-xs font-bold capitalize transition-all duration-200 ${active === l ? "nav-active" : "hover:bg-white/60"}`}
                                    style={{ color: active === l ? "#1C1C1C" : "#888" }}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => scrollTo("contact")}
                            className="hidden md:block sticker px-5 py-2 font-black text-xs uppercase tracking-wide"
                            style={{ background: "var(--orange)", color: "white" }}
                        >
                            Hire Me ✦
                        </button>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-lime-100 transition"
                            style={{ border: "2px solid #1C1C1C" }}
                        >
                            <div className="w-5 flex flex-col gap-1.5">
                                <span
                                    className={`block h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                                    style={{ background: "#1C1C1C" }}
                                />
                                <span
                                    className={`block h-0.5 transition-all ${menuOpen ? "opacity-0" : ""}`}
                                    style={{ background: "#1C1C1C" }}
                                />
                                <span
                                    className={`block h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                                    style={{ background: "#1C1C1C" }}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div
                        className="md:hidden"
                        style={{
                            borderTop: "2px solid #1C1C1C",
                            background: "var(--cream)",
                        }}
                    >
                        <div className="container  mx-auto max-w-7xl px-4 py-3 flex  gap-1">
                            {links.map((l) => (
                                <button
                                    key={l}
                                    onClick={() => scrollTo(l)}
                                    className={`text-left px-4 py-3 rounded-xl text-sm font-bold capitalize transition ${active === l ? "nav-active" : "hover:bg-lime-50"}`}
                                    style={{
                                        color: active === l ? "#1C1C1C" : "#666",
                                        border:
                                            active === l
                                                ? "2px solid #1C1C1C"
                                                : "2px solid transparent",
                                    }}
                                >
                                    {l} {active === l && "→"}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

            </nav>




            {/* ── HOME ── */}
            <section
                id="home"
                className="relative overflow-hidden"
                style={{ background: "var(--cream)" }}
            >
                {/* Floating deco elements */}
                <div
                    className="absolute top-16 right-12 w-20 h-20 float opacity-60 hidden lg:block"
                    style={{
                        background: "var(--sky)",
                        borderRadius: "50%",
                        border: "2px solid #1C1C1C",
                    }}
                />
                <div
                    className="absolute bottom-20 left-10 w-14 h-14 float-d opacity-50 hidden lg:block"
                    style={{
                        background: "var(--pink)",
                        borderRadius: "50%",
                        border: "2px solid #1C1C1C",
                    }}
                />
                <div className="absolute top-1/3 right-1/4 spin-slow opacity-20 text-4xl hidden lg:block select-none">
                    ✦
                </div>

                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4  relative z-10">
                    <div className="flex lg:flex-row max-lg:flex-col-reverse justify-between gap-8 items-center">
                        {/* Left — text block */}
                        <div className="lg:col-span-7 order-2 lg:order-1">
                            {/* Status sticker */}
                            <div
                                className="inline-flex items-center gap-2 sticker px-5 py-2 mb-8"
                                style={{ background: "var(--lime)" }}
                            >
                                <span
                                    className="w-2 h-2 rounded-full animate-pulse"
                                    style={{ background: "#1C1C1C" }}
                                />
                                <span className="text-xs font-black uppercase tracking-widest">
                                    Available for Internship & Work
                                </span>
                            </div>

                            <p
                                className="fraunces text-xl font-light italic mb-2"
                                style={{ color: "var(--orange)" }}
                            >
                                hey there! i'm
                            </p>

                            <h1
                                className="fraunces uppercase  font-black  leading-[0.88] mb-6"
                                style={{ fontSize: "clamp(4rem,11vw,9rem)", color: "#1C1C1C" }}
                            >
                                {portfolio1?.user?.first_name}
                                <br />
                                <span className="squiggle">   {portfolio1?.user?.last_name}</span>
                            </h1>
                            <div className="flex items-center gap-3 mb-6">
                                {portfolio1?.skills?.slice(0, 5).map((skill, index) => {
                                    // You can assign colors dynamically if you want
                                    const colors = ["var(--pink)", "var(--sky)", "var(--lime)"];
                                    const bgColor = colors[index % colors.length];

                                    return (
                                        <div key={skill.id} className="relative">
                                            <span
                                                className={`sticker px-4 py-1.5 text-xs font-black ${index > 1 ? "hidden sm:inline-flex" : ""}`}
                                                style={{ background: bgColor }}
                                            >
                                                {skill.name}
                                            </span>
                                            {/* Edit button */}
                                            <Link
                                                to={`/dashboard/skill/${skill.id}`}
                                                className="absolute -top-2 -right-2 z-10"
                                            >
                                                <button className="flex items-center gap-1 px-1 py-1 text-xs font-medium uppercase tracking-widest border border-stone-300 bg-white text-stone-800 hover:bg-stone-800 hover:text-white transition-all rounded">
                                                    <FiEdit2 size={8} />
                                                </button>
                                            </Link>
                                            {/* Delete button */}
                                            <div className="absolute -top-2 -right-8 z-10">
                                                <DeleteSkill skillId={skill.id} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {/* <div className="flex items-center gap-3 mb-6">
                                <span
                                    className="sticker px-4 py-1.5 text-xs font-black"
                                    style={{ background: "var(--pink)" }}
                                >
                                    🎨 UI/UX Student
                                </span>
                                <span
                                    className="sticker px-4 py-1.5 text-xs font-black"
                                    style={{ background: "var(--sky)" }}
                                >
                                    💻 Frontend Dev
                                </span>
                                <span
                                    className="hidden sm:inline-flex sticker px-4 py-1.5 text-xs font-black"
                                    style={{ background: "var(--lime)" }}
                                >
                                    ✦ Creative
                                </span>
                            </div> */}

                            {/* <p
                className="text-sm leading-loose mb-10 max-w-md font-light"
                style={{ color: "#555" }}
              >User@gmail.com
              </p> */}

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => scrollTo("experience")}
                                    className="zine-card px-8 py-3.5 font-black text-sm uppercase tracking-wide rounded-xl"
                                    style={{ background: "var(--lime)" }}
                                >
                                    See My Work →
                                </button>
                                <button
                                    onClick={() => scrollTo("contact")}
                                    className="zine-card px-8 py-3.5 font-black text-sm uppercase tracking-wide rounded-xl"
                                    style={{ background: "white" }}
                                >
                                    Say Hello!
                                </button>
                            </div>

                            {/* Mini stats */}
                            {/* <div
                className="flex flex-wrap gap-6 mt-12 pt-8"
                style={{ borderTop: "2px dashed #DDD" }}
              >
                {[
                  ["3+", "Years Learning", "var(--lime)"],
                  ["15+", "Projects Done", "var(--sky)"],
                  ["5", "Happy Clients", "var(--pink)"],
                ].map(([n, l, c]) => (
                  <div key={l} className="flex items-center gap-3">
                    <span
                      className="fraunces font-black text-3xl"
                      style={{ color: "#1C1C1C" }}
                    >
                      {n}
                    </span>
                    <span
                      className="text-xs font-medium leading-tight max-w-[70px]"
                      style={{ color: "#888" }}
                    >
                      {l}
                    </span>
                    <div
                      className="w-1.5 h-8 rounded-full"
                      style={{ background: c }}
                    />
                  </div>
                ))}
              </div> */}
                        </div>

                        {/* Right — photo with decorative frame */}
                        <div className="lg:col-span-5 order-1 items-center lg:order-2 flex justify-center">
                            <div className="relative">
                                {/* Shadow frame */}
                                <div
                                    className="absolute -bottom-4 -right-4 rounded-3xl"
                                    style={{
                                        inset: "8px -8px -8px 8px",
                                        background: "var(--lime)",
                                        border: "2px solid #1C1C1C",
                                        zIndex: 0,
                                    }}
                                />

                                <div
                                    className="relative z-10 zine-card rounded-3xl overflow-hidden"
                                    style={{
                                        width: "clamp(450px, 40vw, 320px)",
                                        aspectRatio: "4/5",
                                    }}
                                >
                                    <img
                                        src={portfolio1?.user?.profile}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Tape sticker on photo */}
                                    <div
                                        className="tape top-5 left-1/2 -translate-x-1/2 text-xs font-black"
                                        style={{ transform: "translate(-50%, 0) rotate(-2deg)" }}
                                    >
                                        it me! 📸
                                    </div>
                                </div>

                                {/* Floating skill badges */}

                                <div
                                    className="absolute z-10 -right-6 top-1/4 sticker px-3 py-2 text-xs font-black float hidden sm:block"
                                    style={{ background: "var(--orange)", color: "white" }}
                                >
                                    {portfolio1?.skills?.[0]?.name || "Skill 1"}
                                </div>

                                <div
                                    className="absolute z-10 -left-8 bottom-1/4 sticker px-3 py-2 text-xs font-black float-d hidden sm:block"
                                    style={{ background: "var(--sky)" }}
                                >
                                    {portfolio1?.skills?.[1]?.name || "Skill 2"} 💙
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="strip-lime overflow-hidden py-2.5"
                style={{ borderBottom: "2px solid #1C1C1C" }}
            >
                <div className="ticker inline-flex whitespace-nowrap">
                    {[...Array(2)].map((_, i) => (
                        <span key={i} className="inline-flex items-center">
                            {[
                                "UI DESIGN ✦",
                                "UX RESEARCH ✦",
                                "FIGMA ✦",
                                "REACT ✦",
                                "BRANDING ✦",
                                "MOTION ✦",
                                "WEB DEV ✦",
                                "OPEN TO WORK ✦",
                            ].map((t, j) => (
                                <span
                                    key={j}
                                    className="mx-6 text-xs font-black tracking-[0.2em] text-charcoal"
                                >
                                    {t}
                                </span>
                            ))}
                        </span>
                    ))}
                </div>
            </div>
            {/* ── ABOUT ── */}


            {/* ── EXPERIENCE ── */}
            <section
                id="experience"
                className="py-8"
                style={{ background: "var(--warm)" }}
            >
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-14">
                        <span
                            className="fraunces italic font-black text-4xl"
                            style={{ color: "var(--orange)" }}
                        >
                            03.
                        </span>
                        <h2 className="fraunces font-black text-4xl sm:text-5xl">
                            Experience
                        </h2>
                        <div
                            className="flex-1 h-0.5 ml-4"
                            style={{ background: "rgba(0,0,0,0.08)" }}
                        />
                    </div>

                    {/* Pinboard-style cards at different rotations */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "UI/UX Intern",
                                company: "Studio Bright",
                                period: "Summer 2024",
                                desc: "Designed 3 end-to-end product flows and contributed to a design system used by 12 engineers. Shipped features used by 10k+ users.",
                                tags: ["Figma", "Design Systems"],
                                current: true,
                                rotate: "-rotate-1",
                                accent: "var(--lime)",
                            },
                            {
                                title: "Freelance Designer",
                                company: "Self-Employed",
                                period: "2023–Now",
                                desc: "Built brand identities, landing pages, and social media kits for small businesses and creators. 5-star rated on every project. ⭐",
                                tags: ["Branding", "Web"],
                                current: false,
                                rotate: "rotate-1",
                                accent: "var(--sky)",
                            },
                            {
                                title: "Design Lead",
                                company: "Parsons Design Club",
                                period: "2022–2024",
                                desc: "Led a 20-person student design org. Organized workshops, design sprints, and critiques. Grew membership by 3×.",
                                tags: ["Leadership", "Events"],
                                current: false,
                                rotate: "-rotate-1",
                                accent: "var(--pink)",
                            },
                        ].map(
                            ({
                                title,
                                company,
                                period,
                                desc,
                                tags,
                                current,
                                rotate,
                                accent,
                            }) => (
                                <div
                                    key={title}
                                    className={`zine-card bg-white rounded-3xl p-8 ${rotate} relative`}
                                >
                                    {/* Pin dot */}
                                    <div
                                        className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full zine-card"
                                        style={{ background: accent }}
                                    />

                                    {current && (
                                        <div
                                            className="inline-flex items-center gap-2 sticker px-3 py-1 mb-4 text-xs font-black"
                                            style={{ background: "var(--lime)" }}
                                        >
                                            <span
                                                className="w-1.5 h-1.5 rounded-full animate-pulse"
                                                style={{ background: "#1C1C1C" }}
                                            />
                                            Current ✓
                                        </div>
                                    )}
                                    {!current && <div className="h-7 mb-0" />}

                                    <h4 className="fraunces font-black text-2xl leading-tight mb-1">
                                        {title}
                                    </h4>
                                    <p
                                        className="font-bold text-xs uppercase tracking-widest mb-1"
                                        style={{ color: "var(--orange)" }}
                                    >
                                        {company}
                                    </p>
                                    <p
                                        className="text-xs mb-4 font-medium"
                                        style={{ color: "#888" }}
                                    >
                                        {period}
                                    </p>
                                    <p
                                        className="text-sm leading-loose font-light"
                                        style={{ color: "#555" }}
                                    >
                                        {desc}
                                    </p>

                                    <div className="flex gap-2 mt-5 flex-wrap">
                                        {tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs font-black px-3 py-1 rounded-full"
                                                style={{
                                                    background: accent,
                                                    border: "1.5px solid #1C1C1C",
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </section>

            {/* ── JOB ── */}
            <section
                id="job"
                className="py-8"
                style={{ background: "var(--cream)" }}
            >
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-14">
                        <span
                            className="fraunces italic font-black text-4xl"
                            style={{ color: "var(--sky)" }}
                        >
                            04.
                        </span>
                        <h2 className="fraunces font-black text-4xl sm:text-5xl">
                            Work History
                        </h2>
                        <div
                            className="flex-1 h-0.5 ml-4"
                            style={{ background: "rgba(0,0,0,0.08)" }}
                        />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        {/* Left — big deco text */}
                        <div>
                            <h3
                                className="fraunces font-black leading-[0.85] mb-6"
                                style={{ fontSize: "clamp(3rem,6vw,5rem)", color: "#1C1C1C" }}
                            >
                                My
                                <br />
                                Projects
                                <br />
                                <span style={{ color: "var(--orange)" }}>portfolio. 💻</span>
                            </h3>
                            <p
                                className="text-sm leading-loose font-light mb-8"
                                style={{ color: "#777", maxWidth: "340px" }}
                            >
                                Each project taught me something new about coding, design, and creativity.
                            </p>
                            {/* Mini blob decoration */}
                            <div
                                className="w-32 h-32 blob hidden lg:block"
                                style={{
                                    background: "linear-gradient(135deg,var(--lime),var(--sky))",
                                    opacity: 0.5,
                                }}
                            />
                        </div>

                        {/* Right — project list */}
                        <div className="zine-card rounded-2xl overflow-hidden bg-white">
                            {portfolio1?.projects?.slice(0, 5).map((project, i) => (
                                <div
                                    key={project.id}
                                    className="job-row flex items-center gap-5 px-7 py-5 cursor-default relative"
                                    style={{
                                        borderBottom:
                                            i < portfolio1.projects.length - 1 ? "2px solid #F0F0EA" : "none",
                                    }}
                                >
                                    {/* Edit button */}
                                    <Link
                                        to={`/dashboard/project/${project.id}`}
                                        className="absolute top-2 right-16 z-10"
                                    >
                                        <button className="flex items-center gap-1 px-2 py-1 text-xs font-medium uppercase tracking-widest border border-stone-300 bg-white text-stone-800 hover:bg-stone-800 hover:text-white transition-all">
                                            <FiEdit2 size={10} /> Edit
                                        </button>
                                    </Link>
                                    {/* Delete button */}
                                    <div className="absolute top-2 right-2 z-10">
                                        <DeleteProject projectId={project.id} />
                                    </div>
                                    <span
                                        className="fraunces font-black text-4xl min-w-[3rem] leading-none"
                                        style={{
                                            color: "#E8E8E0",
                                        }}
                                    >
                                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-black text-base truncate">{project.name}</h4>
                                        <p className="text-xs font-medium text-zinc-500">{project.description}</p>
                                    </div>
                                    <a
                                        href={project.github_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 font-black text-xs text-rose-500"
                                    >
                                        GitHub
                                    </a>
                                    <span
                                        className="shrink-0 font-black transition-all text-zinc-300"
                                    >
                                        →
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCHOOL ── */}
            <section id="school" className="py-8" style={{ background: "#1C1C1C" }}>
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-14">
                        <span
                            className="fraunces italic font-black text-4xl"
                            style={{ color: "var(--pink)" }}
                        >
                            05.
                        </span>
                        <h2
                            className="fraunces font-black text-4xl sm:text-5xl"
                            style={{ color: "var(--cream)" }}
                        >
                            Education
                        </h2>
                        <div
                            className="flex-1 h-0.5 ml-4"
                            style={{ background: "rgba(255,255,255,0.1)" }}
                        />
                    </div>

                    {/* Featured school + 3 certs in a row */}
                    <div className="grid lg:grid-cols-12 gap-6">
                        {/* Big featured card */}
                        <div
                            className="lg:col-span-6 zine-card rounded-3xl p-10 relative overflow-hidden"
                            style={{ background: "var(--lime)", borderColor: "#1C1C1C" }}
                        >
                            <div className="spin-slow absolute -top-8 -right-8 text-8xl opacity-10 select-none">
                                ✦
                            </div>
                            <div className="relative z-10">
                                <span
                                    className="inline-block sticker px-4 py-1.5 text-xs font-black mb-6"
                                    style={{ background: "#1C1C1C", color: "var(--lime)" }}
                                >
                                    🎓 Currently Enrolled
                                </span>
                                <h4 className="fraunces font-black text-4xl leading-tight mb-2 text-charcoal">
                                    BFA Communication Design
                                </h4>
                                <p
                                    className="font-black text-sm uppercase tracking-widest mb-2"
                                    style={{ color: "rgba(28,28,28,0.6)" }}
                                >
                                    Parsons School of Design, NYC
                                </p>
                                <p
                                    className="text-sm font-medium mb-6"
                                    style={{ color: "rgba(28,28,28,0.5)" }}
                                >
                                    2021 – 2025 (Expected)
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="sticker px-4 py-1.5 text-xs font-black bg-white">
                                        GPA 3.8 / 4.0 ⭐
                                    </span>
                                    <span className="sticker px-4 py-1.5 text-xs font-black bg-white">
                                        Dean's List 🏆
                                    </span>
                                    <span className="sticker px-4 py-1.5 text-xs font-black bg-white">
                                        Minor: CS 💻
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right certs */}
                        <div className="lg:col-span-6 grid sm:grid-cols-3 gap-5">
                            {[
                                {
                                    icon: "🎨",
                                    title: "UI/UX Fundamentals",
                                    org: "Google + Coursera",
                                    year: "2023",
                                    bg: "var(--sky)",
                                },
                                {
                                    icon: "⚛️",
                                    title: "React Bootcamp",
                                    org: "Scrimba",
                                    year: "2024",
                                    bg: "var(--pink)",
                                },
                                {
                                    icon: "✏️",
                                    title: "Design Systems",
                                    org: "Figma Academy",
                                    year: "2024",
                                    bg: "var(--orange)",
                                    color: "white",
                                },
                            ].map(({ icon, title, org, year, bg, color }) => (
                                <div
                                    key={title}
                                    className="zine-card rounded-2xl p-6 flex flex-col justify-between min-h-[180px]"
                                    style={{ background: bg, borderColor: "#1C1C1C" }}
                                >
                                    <div>
                                        <span className="text-3xl block mb-4">{icon}</span>
                                        <h4
                                            className="font-black text-sm leading-tight mb-1"
                                            style={{ color: color || "#1C1C1C" }}
                                        >
                                            {title}
                                        </h4>
                                        <p
                                            className="text-xs font-medium opacity-60"
                                            style={{ color: color || "#1C1C1C" }}
                                        >
                                            {org}
                                        </p>
                                    </div>
                                    <span
                                        className="text-xs font-black mt-4 inline-block px-3 py-1 rounded-full"
                                        style={{
                                            background: "rgba(0,0,0,0.12)",
                                            color: color || "#1C1C1C",
                                        }}
                                    >
                                        {year} ✓
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SKILL ── */}
            <section
                id="skill"
                className="py-8"
                style={{ background: "var(--warm)" }}
            >
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-14">
                        <span
                            className="fraunces italic font-black text-4xl"
                            style={{ color: "var(--orange)" }}
                        >
                            06.
                        </span>
                        <h2 className="fraunces font-black text-4xl sm:text-5xl">
                            My Skills
                        </h2>
                        <div
                            className="flex-1 h-0.5 ml-4"
                            style={{ background: "rgba(0,0,0,0.08)" }}
                        />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Skill bars — chunky and colorful */}
                        <div className="space-y-6">
                            {[
                                {
                                    name: "UI Design",
                                    pct: 90,
                                    emoji: "🎨",
                                    color: "var(--lime)",
                                },
                                {
                                    name: "Frontend Dev",
                                    pct: 78,
                                    emoji: "💻",
                                    color: "var(--sky)",
                                },
                                {
                                    name: "Branding",
                                    pct: 82,
                                    emoji: "✨",
                                    color: "var(--pink)",
                                },
                                {
                                    name: "Prototyping",
                                    pct: 88,
                                    emoji: "🔧",
                                    color: "var(--orange)",
                                },
                                {
                                    name: "Motion Design",
                                    pct: 68,
                                    emoji: "🎬",
                                    color: "var(--lime)",
                                },
                            ].map(({ name, pct, emoji, color }) => (
                                <div key={name} className="group">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-2">
                                            <span>{emoji}</span>
                                            <span className="font-black text-sm">{name}</span>
                                        </div>
                                        <span
                                            className="font-black text-sm"
                                            style={{ color: "#888" }}
                                        >
                                            {pct}%
                                        </span>
                                    </div>
                                    <div
                                        className="h-4 rounded-full overflow-hidden"
                                        style={{
                                            background: "#E8E8E0",
                                            border: "2px solid #1C1C1C",
                                        }}
                                    >
                                        <div
                                            className="h-full rounded-full skill-bar transition-all duration-1000"
                                            style={{
                                                width: `${pct}%`,
                                                background: color,
                                                borderRight: "2px solid #1C1C1C",
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tools grid — sticker style */}
                        <div>
                            <h3 className="fraunces font-black text-2xl mb-6">
                                Tools I Use Daily
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { name: "Figma", emoji: "◎", bg: "var(--lime)" },
                                    { name: "VS Code", emoji: "💙", bg: "var(--sky)" },
                                    { name: "React", emoji: "⚛️", bg: "white" },
                                    { name: "After Effects", emoji: "🎬", bg: "var(--pink)" },
                                    { name: "Tailwind CSS", emoji: "💨", bg: "var(--sky)" },
                                    { name: "Framer", emoji: "🖱️", bg: "var(--lime)" },
                                    { name: "Notion", emoji: "📝", bg: "white" },
                                    {
                                        name: "Procreate",
                                        emoji: "✏️",
                                        bg: "var(--orange)",
                                        color: "white",
                                    },
                                    { name: "Webflow", emoji: "🌊", bg: "var(--sky)" },
                                    { name: "Spline 3D", emoji: "🔮", bg: "var(--pink)" },
                                ].map(({ name, emoji, bg, color }) => (
                                    <div
                                        key={name}
                                        className="wobble sticker flex items-center gap-2 px-4 py-2.5 text-sm font-black cursor-default"
                                        style={{ background: bg, color: color || "#1C1C1C" }}
                                    >
                                        <span>{emoji}</span>
                                        <span>{name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Fun fact box */}
                            <div
                                className="zine-card-lime rounded-2xl p-6 mt-8 relative"
                                style={{ background: "white" }}
                            >
                                <div
                                    className="tape -top-3 left-8 text-xs font-black"
                                    style={{ transform: "rotate(-1.5deg)", top: "-12px" }}
                                >
                                    fun fact 📌
                                </div>
                                <p
                                    className="text-sm leading-loose font-light mt-2"
                                    style={{ color: "#555" }}
                                >
                                    I once redesigned my university's entire course registration
                                    UI as a side project — and the admin team actually used it as
                                    inspiration for a real update. 🎉
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CONTACT ── */}
            <section
                id="contact"
                className="py-8"
                style={{ background: "var(--cream)" }}
            >
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-14">
                        <span
                            className="fraunces italic font-black text-4xl"
                            style={{ color: "var(--lime)" }}
                        >
                            07.
                        </span>
                        <h2 className="fraunces font-black text-4xl sm:text-5xl">
                            Say Hello!
                        </h2>
                        <div
                            className="flex-1 h-0.5 ml-4"
                            style={{ background: "rgba(0,0,0,0.08)" }}
                        />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left — personality-driven copy */}
                        <div>
                            <h3
                                className="fraunces font-black leading-tight mb-6"
                                style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}
                            >
                                Let's make
                                <br />
                                something
                                <br />
                                <span className="squiggle">awesome</span>
                                <br />
                                <span style={{ color: "var(--orange)" }}>together. 🚀</span>
                            </h3>

                            <p
                                className="text-sm leading-loose mb-8 font-light"
                                style={{ color: "#777", maxWidth: "360px" }}
                            >
                                Whether it's a full-time role, internship, freelance project, or
                                just a chat about design — I'm always down. No cold, corporate
                                emails here — just real conversations!
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: "✉️", label: "Email me", val: "kai@tanaka.design" },
                                    {
                                        icon: "💼",
                                        label: "LinkedIn",
                                        val: "linkedin.com/in/kaitanaka",
                                    },
                                    {
                                        icon: "🏀",
                                        label: "Dribbble",
                                        val: "dribbble.com/kaitanaka",
                                    },
                                ].map(({ icon, label, val }) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-white zine-card"
                                    >
                                        <span className="text-2xl">{icon}</span>
                                        <div>
                                            <p
                                                className="font-black text-xs uppercase tracking-widest"
                                                style={{ color: "#888" }}
                                            >
                                                {label}
                                            </p>
                                            <p className="font-bold text-sm">{val}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — form with personality */}
                        <div
                            className="zine-card rounded-3xl p-8 sm:p-10 relative"
                            style={{ background: "#1C1C1C" }}
                        >
                            <div
                                className="tape left-8 font-black text-xs"
                                style={{ top: "-12px" }}
                            >
                                no spam, promise! 🤝
                            </div>

                            <div className="space-y-5 mt-2">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    {[
                                        ["Your Name 👋", "text"],
                                        ["Your Email 📬", "email"],
                                    ].map(([ph, type]) => (
                                        <div key={ph}>
                                            <input
                                                type={type}
                                                placeholder={ph}
                                                className="w-full px-4 py-3 rounded-xl text-sm font-light outline-none transition-all"
                                                style={{
                                                    background: "rgba(255,255,255,0.07)",
                                                    border: "2px solid rgba(255,255,255,0.12)",
                                                    color: "var(--cream)",
                                                }}
                                                onFocus={(e) =>
                                                    (e.target.style.borderColor = "var(--lime)")
                                                }
                                                onBlur={(e) =>
                                                (e.target.style.borderColor =
                                                    "rgba(255,255,255,0.12)")
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                                <input
                                    type="text"
                                    placeholder="What's on your mind? 💡"
                                    className="w-full px-4 py-3 rounded-xl text-sm font-light outline-none transition-all"
                                    style={{
                                        background: "rgba(255,255,255,0.07)",
                                        border: "2px solid rgba(255,255,255,0.12)",
                                        color: "var(--cream)",
                                    }}
                                    onFocus={(e) => (e.target.style.borderColor = "var(--lime)")}
                                    onBlur={(e) =>
                                        (e.target.style.borderColor = "rgba(255,255,255,0.12)")
                                    }
                                />
                                <textarea
                                    rows={4}
                                    placeholder="Tell me everything! (Or just the important parts 😄)"
                                    className="w-full px-4 py-3 rounded-xl text-sm font-light outline-none resize-none transition-all"
                                    style={{
                                        background: "rgba(255,255,255,0.07)",
                                        border: "2px solid rgba(255,255,255,0.12)",
                                        color: "var(--cream)",
                                    }}
                                    onFocus={(e) => (e.target.style.borderColor = "var(--lime)")}
                                    onBlur={(e) =>
                                        (e.target.style.borderColor = "rgba(255,255,255,0.12)")
                                    }
                                />
                                <button
                                    className="w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest zine-card transition-all"
                                    style={{
                                        background: "var(--lime)",
                                        color: "#1C1C1C",
                                        borderColor: "var(--lime)",
                                    }}
                                >
                                    Send it! 🚀
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer
                style={{
                    background: "#1C1C1C",
                    borderTop: "2px solid rgba(255,255,255,0.1)",
                }}
                className="py-8"
            >
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span
                        className="fraunces font-black text-xl flex items-center gap-2"
                        style={{ color: "var(--cream)" }}
                    >
                        <span
                            className="w-7 h-7 flex items-center justify-center text-sm rounded-lg"
                            style={{
                                background: "var(--lime)",
                                border: "2px solid rgba(255,255,255,0.3)",
                            }}
                        >
                            ✦
                        </span>
                        KAI<span style={{ color: "var(--orange)" }}>.</span>
                    </span>
                    <p
                        className="text-xs font-medium tracking-widest uppercase"
                        style={{ color: "rgba(250,250,245,0.3)" }}
                    >
                        © 2026 Kai Tanaka — Made with ☕ & 🎨
                    </p>
                    <button
                        onClick={() => scrollTo("home")}
                        className="text-xs font-black uppercase tracking-widest transition-colors"
                        style={{ color: "rgba(250,250,245,0.4)" }}
                        onMouseEnter={(e) => (e.target.style.color = "var(--lime)")}
                        onMouseLeave={(e) =>
                            (e.target.style.color = "rgba(250,250,245,0.4)")
                        }
                    >
                        ↑ Back to Top
                    </button>
                </div>
            </footer>
        </div>
    );
}
