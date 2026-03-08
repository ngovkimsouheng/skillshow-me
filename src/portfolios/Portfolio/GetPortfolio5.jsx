import { useState, useEffect } from "react";
import { useGetMyPortfolioQuery } from "../../api/portfolioApi";
import ButtonEdit from "../Portfolio-static/ButtonEdit";
import { NavLink } from "react-router";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { templates } from "../templates";

export default function GetPortfolio5() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("home");
    const [hoveredJob, setHoveredJob] = useState(null);

    const { data, isLoading, error } = useGetMyPortfolioQuery();
    const portfolio = data?.data;
    const project0 = portfolio?.projects?.[0];

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

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
                            {portfolio?.user?.first_name}
                            <span className="text-rose-400 not-italic">✿</span>
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

            {/* {templates.map((template) => (
                <NavLink key={template.id} to={`/dashboard/portfolio/${template.id}`}>
                    <ButtonEdit />
                </NavLink>
            ))} */}

            {/* ── HOME ── */}
            <section id="home" className="min-h-screen dot-bg">
                <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex justify-between items-center">
                        {/* Text */}
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
                                {portfolio?.user?.first_name}
                            </h1>
                            <h1
                                className="cormorant font-bold leading-none text-rose-400 mb-4"
                                style={{ fontSize: "clamp(4.5rem,11vw,8.5rem)" }}
                            >
                                {portfolio?.user?.last_name}
                            </h1>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-stone-300 flex-1 max-w-[80px]" />
                                <p className="text-xs tracking-[0.25em] uppercase text-stone-500 font-medium">
                                    {portfolio?.user?.email}
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
                        </div>

                        {/* Image */}
                        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
                            <div className="relative mt-8">
                                <div className="absolute -top-4 -left-4 w-full h-full border-chic bg-rose-200/40" />
                                <div className="absolute -bottom-4 -right-4 w-full h-full border-chic-thin bg-stone-800/5" />
                                <img
                                    src={portfolio?.user?.profile}
                                    alt={portfolio?.user?.first_name}
                                    className="relative w-64 sm:w-72 lg:w-80 xl:w-115 aspect-[3/4] object-cover border-chic"
                                />
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
                                "UI DESIGN", "✿", "UX RESEARCH", "✿", "BRANDING", "✿",
                                "FRONTEND DEV", "✿", "MOTION", "✿", "TYPOGRAPHY", "✿",
                                "ART DIRECTION", "✿",
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
                            {/* Technologies from first project */}
                            <div className="flex flex-wrap gap-3">
                                {Object.keys(project0?.technologies || {}).map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 border border-stone-600 text-stone-300 text-xs tracking-[0.15em] uppercase hover:bg-rose-400 hover:text-white hover:border-rose-400 transition-all cursor-default"
                                    >
                                        {tech}
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
                                    accent: "bg-white border-chic shadow-chic-rose text-stone-800",
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

            {/* ── EXPERIENCE (Projects) ── */}
            <section id="experience" className="py-24 bg-rose-50 stripe-bg">
                <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-2 border-stone-800 pb-6">
                        <div>
                            <span className="text-xs tracking-[0.25em] uppercase text-rose-400 font-medium block mb-3">
                                Projects
                            </span>
                            <h2
                                className="cormorant font-bold text-stone-900 leading-none"
                                style={{ fontSize: "clamp(3rem,7vw,5.5rem)" }}
                            >
                                My Work
                            </h2>
                        </div>
                        <span
                            className="cormorant font-light text-stone-200 leading-none select-none hidden lg:block"
                            style={{ fontSize: "8rem" }}
                        >
                            {String(portfolio?.projects?.length || 0).padStart(2, "0")}
                        </span>
                    </div>

                    <div className="border-chic overflow-hidden bg-white/60">
                        {portfolio?.projects?.slice(0, 8).map((project, i) => {
                            const no = String(i + 1).padStart(2, "0");
                            return (
                                <div key={project.id} className="relative">
                                    {/* Edit button */}
                                    <Link
                                        to={`/dashboard/project/${project.id}`}
                                        className="absolute top-4 right-6 z-10"
                                    >
                                        <button className="flex items-center gap-1 px-3 py-1 text-xs font-medium uppercase tracking-widest border-chic bg-rose-100 text-stone-800 hover:bg-stone-800 hover:text-rose-100 transition-all">
                                            <FiEdit2 size={12} /> Edit
                                        </button>
                                    </Link>

                                    <a
                                        href={project.github_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onMouseEnter={() => setHoveredJob(i)}
                                        onMouseLeave={() => setHoveredJob(null)}
                                        className={`flex items-center gap-6 sm:gap-10 px-6 sm:px-10 py-6 transition-all duration-200
                      ${i < (portfolio?.projects?.length - 1) ? "border-b-2 border-stone-800" : ""}
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
                                                {project.name}
                                            </h4>
                                            <p
                                                className={`text-xs font-medium uppercase tracking-[0.15em] mt-1 ${hoveredJob === i ? "text-rose-300" : "text-rose-400"}`}
                                            >
                                                {project.description}
                                            </p>
                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {Object.entries(project.technologies || {})
                                                    .filter(([_, val]) => val)
                                                    .map(([tech]) => (
                                                        <span
                                                            key={tech}
                                                            className="px-2 py-0.5 bg-rose-100 text-stone-700 text-xs font-medium uppercase border border-stone-300"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                            </div>
                                        </div>
                                        <span
                                            className={`cormorant italic text-3xl shrink-0 ${hoveredJob === i ? "text-rose-300" : "text-rose-200"}`}
                                        >
                                            →
                                        </span>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── JOB ── */}
            <section id="job" className="py-24 bg-rose-200 border-y-2 border-stone-800">
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
                        {portfolio?.jobs?.slice(0, 6).map((job, i) => {
                            const no = String(i + 1).padStart(2, "0");
                            const current = !job.is_ended;
                            const isLast = i === (portfolio?.jobs?.slice(0, 6).length - 1);

                            return (
                                <div key={job.id} className="relative">
                                    {/* Edit button */}
                                    <Link
                                        to={`/dashboard/job/${job.id}`}
                                        className="absolute top-4 right-6 z-10"
                                    >
                                        <button className="flex items-center gap-1 px-3 py-1 text-xs font-medium uppercase tracking-widest border-chic bg-rose-100 text-stone-800 hover:bg-stone-800 hover:text-rose-100 transition-all">
                                            <FiEdit2 size={12} /> Edit
                                        </button>
                                    </Link>

                                    <div
                                        onMouseEnter={() => setHoveredJob(i + 100)}
                                        onMouseLeave={() => setHoveredJob(null)}
                                        className={`flex items-center gap-6 sm:gap-10 px-6 sm:px-10 py-6 transition-all duration-200 cursor-default
                      ${!isLast ? "border-b-2 border-stone-800" : ""}
                      ${hoveredJob === i + 100 ? "bg-stone-800 text-rose-50" : "bg-transparent text-stone-800"}`}
                                    >
                                        <span
                                            className={`cormorant font-light text-5xl sm:text-6xl min-w-[4rem] leading-none italic
                        ${hoveredJob === i + 100 ? "text-rose-300" : "text-rose-200"}`}
                                        >
                                            {no}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="cormorant font-bold text-2xl sm:text-3xl leading-none truncate">
                                                {job.company_name}
                                            </h4>
                                            <p
                                                className={`text-xs font-medium uppercase tracking-[0.15em] mt-1 ${hoveredJob === i + 100 ? "text-rose-300" : "text-rose-400"}`}
                                            >
                                                {job.role}
                                            </p>
                                        </div>

                                        {current && (
                                            <div className="hidden sm:flex items-center gap-2 bg-rose-400 border-chic px-3 py-1">
                                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                                <span className="text-white text-xs tracking-[0.15em] uppercase font-medium">
                                                    Current
                                                </span>
                                            </div>
                                        )}

                                        <span
                                            className={`shrink-0 text-xs font-medium uppercase tracking-widest hidden sm:block
                        ${hoveredJob === i + 100 ? "text-rose-200" : "text-stone-400"}`}
                                        >
                                            {job.started_at} – {job.is_ended ? job.ended_at : "Present"}
                                        </span>
                                        <span
                                            className={`cormorant italic text-3xl shrink-0 ${hoveredJob === i + 100 ? "text-rose-300" : "text-rose-200"}`}
                                        >
                                            →
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── SCHOOL (Education) ── */}
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
                        {portfolio?.education?.slice(0, 4).map((edu, i) => {
                            const accentColors = [
                                "border-l-4 border-l-rose-400",
                                "border-l-4 border-l-stone-800",
                                "border-l-4 border-l-rose-300",
                                "border-l-4 border-l-amber-700",
                            ];
                            const icons = ["✦", "◎", "◈", "❋"];
                            const period =
                                edu.ended_at === "0001-01-01" || !edu.ended_at
                                    ? `${edu.started_at} – Present`
                                    : `${edu.started_at} – ${edu.ended_at}`;
                            const badge = edu.is_completed ? "Completed" : "In Progress";

                            return (
                                <div
                                    key={edu.id}
                                    className={`relative bg-white border-chic shadow-chic hover-chic flex gap-5 p-7 ${accentColors[i % accentColors.length]}`}
                                >
                                    {/* Edit button */}
                                    <Link
                                        to={`/dashboard/education/${edu.id}`}
                                        className="absolute top-4 right-4"
                                    >
                                        <button className="flex items-center gap-1 px-3 py-1 text-xs font-medium uppercase tracking-widest border-chic bg-rose-100 text-stone-800 hover:bg-stone-800 hover:text-rose-100 transition-all">
                                            <FiEdit2 size={12} /> Edit
                                        </button>
                                    </Link>

                                    <span className="text-rose-300 text-3xl shrink-0 mt-1 font-light">
                                        {icons[i % icons.length]}
                                    </span>
                                    <div>
                                        <h4 className="cormorant font-bold text-xl text-stone-900 leading-tight mb-1">
                                            {edu.degree_name}
                                        </h4>
                                        <p className="text-rose-400 text-xs font-medium uppercase tracking-[0.15em] mb-1">
                                            <a
                                                href={edu.institute_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline"
                                            >
                                                {edu.institute_name}
                                            </a>
                                        </p>
                                        <p className="text-stone-400 text-xs tracking-widest mb-4">
                                            {period}
                                        </p>
                                        <span className="inline-block bg-rose-100 border-chic px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-stone-700 shadow-chic-rose">
                                            {badge}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
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
                            {portfolio?.skills?.map((skill) => (
                                <div key={skill.id} className="group">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center gap-3">
                                            <span className="cormorant font-semibold text-xl text-white group-hover:text-rose-300 transition-colors">
                                                {skill.name}
                                            </span>
                                            <span className="text-stone-500 text-xs tracking-widest uppercase">
                                                {skill.tools || "Skill"}
                                            </span>
                                        </div>
                                        <span className="cormorant font-bold text-xl text-rose-400">
                                            {skill.proficiency || 0}%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-stone-700 border border-stone-600 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-rose-400 to-rose-300 transition-all duration-500"
                                            style={{ width: `${skill.proficiency || 0}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tool grid */}
                        <div className="grid grid-cols-3 gap-0 border-chic overflow-hidden self-start">
                            {portfolio?.skills?.map((skill, i) => (
                                <div
                                    key={skill.id}
                                    className={`p-6 sm:p-8 text-center bg-stone-900 hover:bg-rose-400 transition-all duration-200 group cursor-default
                    ${i % 3 !== 2 ? "border-r-2 border-stone-700" : ""}
                    ${i < 3 ? "border-b-2 border-stone-700" : ""}`}
                                >
                                    {skill.logo_url ? (
                                        <img
                                            src={skill.logo_url}
                                            alt={skill.name}
                                            className="w-8 h-8 mx-auto mb-2 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                                        />
                                    ) : (
                                        <span className="text-rose-400 group-hover:text-white text-2xl block mb-2 font-light transition-colors">
                                            ◎
                                        </span>
                                    )}
                                    <span className="text-stone-400 group-hover:text-white text-xs tracking-[0.15em] uppercase font-medium transition-colors">
                                        {skill.name}
                                    </span>

                                    {/* Edit button */}
                                    <div className="mt-3">
                                        <NavLink to={`/dashboard/skill/${skill.id}`} className="inline-flex">
                                            <button className="flex items-center gap-1 px-2 py-1 text-xs font-medium uppercase tracking-widest border border-stone-600 bg-stone-800 text-stone-300 hover:bg-rose-400 hover:text-white hover:border-rose-400 transition-all duration-200">
                                                <FiEdit2 size={11} />
                                                Edit
                                            </button>
                                        </NavLink>
                                    </div>
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

                            {/* Social accounts from API */}
                            <div className="space-y-5">
                                {portfolio?.social_accounts?.slice(1, 3).map((account) => (
                                    <div
                                        key={account.id}
                                        className="flex items-center gap-5 border-b border-stone-200 pb-4 relative"
                                    >
                                        {account.image_url && (
                                            <img
                                                src={account.image_url}
                                                alt={account.name}
                                                className="w-5 h-5 object-cover rounded"
                                            />
                                        )}
                                        <span className="text-rose-400 text-xs font-medium uppercase tracking-[0.2em] w-20 shrink-0">
                                            {account.name}
                                        </span>
                                        <a
                                            href={account.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-stone-600 text-xs font-medium hover:underline"
                                        >
                                            {account.url.replace(/^https?:\/\//, "")}
                                        </a>

                                        {/* Edit button */}
                                        <Link to={`/dashboard/social/${account.id}`} className="ml-auto">
                                            <button className="flex items-center gap-1 px-3 py-1 text-xs font-medium uppercase tracking-widest border-chic bg-rose-100 text-stone-800 hover:bg-stone-800 hover:text-rose-100 transition-all rounded">
                                                <FiEdit2 size={11} /> Edit
                                            </button>
                                        </Link>
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
                        {portfolio?.user?.first_name}
                        <span className="text-rose-400 not-italic">✿</span>
                    </span>
                    <p className="text-stone-500 text-xs tracking-[0.2em] uppercase">
                        © 2026 {portfolio?.user?.first_name} {portfolio?.user?.last_name} — All rights reserved
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