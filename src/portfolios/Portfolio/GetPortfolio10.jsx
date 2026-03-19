import { useState, useEffect } from "react";
import { useGetMyPortfolioQuery } from "../../api/portfolioApi";

export default function GetPortfolio10({ theme = {} }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("home");
    const [hoveredJob, setHoveredJob] = useState(null);
    const { data, isLoading, error } = useGetMyPortfolioQuery();
    const portfolio = data?.data;

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
            <nav className="w-full z-0 bg-white/95 backdrop-blur border-b-2 border-zinc-200">
                <div className="container mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 gap-4">
                        <button
                            onClick={() => scrollTo("home")}
                            className="flex items-center gap-2.5 shrink-0"
                        >
                            <span className="anton text-2xl text-zinc-900 uppercase">
                                {portfolio?.user?.first_name || "PORTFOLIO"}
                            </span>
                        </button>

                        <div className="hidden md:flex items-center gap-0">
                            {links.map((l) => (
                                <button
                                    key={l}
                                    onClick={() => scrollTo(l)}
                                    className={`px-3 py-2 text-xs font-bold uppercase tracking-widest capitalize transition-all duration-150 border-b-2
                    ${active === l
                                            ? "border-teal-500 text-teal-600"
                                            : "border-transparent text-zinc-400 hover:text-zinc-800 hover:bg-teal-50"
                                        }`}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => scrollTo("contact")}
                            className="hidden md:block shrink-0 px-5 py-2 bg-teal-500 text-white text-xs font-bold uppercase tracking-widest rounded-full border-2 border-zinc-900 shadow-[4px_4px_0px_#18181b] hover:shadow-[6px_6px_0px_#18181b] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Hire Me ✦
                        </button>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden w-10 h-10 border-2 border-zinc-900 flex flex-col items-center justify-center gap-1.5 rounded-lg"
                        >
                            <span className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`block w-5 h-0.5 bg-zinc-900 transition-all ${menuOpen ? "opacity-0" : ""}`} />
                            <span className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
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

            {/* ── HOME ── */}
            <section id="home" className="min-h-screen bg-white relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />
                <div className="absolute top-20 right-16 w-20 h-20 bg-orange-100 rounded-full border-2 border-orange-200 float-a hidden lg:block" />
                <div className="absolute bottom-32 left-16 w-14 h-14 bg-teal-100 rounded-full border-2 border-teal-200 float-b hidden lg:block" />
                <div className="absolute top-1/2 right-1/3 text-3xl opacity-10 spin-slow select-none hidden lg:block">✦</div>

                <div className="container mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8 py-8 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 bg-teal-50 border-2 border-teal-500 px-4 py-2 rounded-full mb-8 shadow-[3px_3px_0px_#0d9488]">
                                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                                <span className="text-xs font-black uppercase tracking-widest text-teal-700">
                                    Open to Opportunities
                                </span>
                            </div>

                            <h1 className="anton leading-none text-zinc-900 mb-0" style={{ fontSize: "clamp(3.5rem,11vw,8.5rem)" }}>
                                HEY, I'M
                            </h1>
                            <h1 className="anton leading-none text-teal-500 mb-2 uppercase" style={{ fontSize: "clamp(3.5rem,11vw,8.5rem)" }}>
                                {portfolio?.user?.first_name || "NAME"}
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
                                {portfolio?.user?.title || "DESIGNER & DEV."}
                            </h1>

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
                                {portfolio?.user?.about_me || portfolio?.user?.email}
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

                        <div className="lg:col-span-5 flex flex-col gap-5">
                            <div className="relative">
                                <div className="absolute -top-3 -right-3 w-full h-full bg-teal-100 border-2 border-teal-400 rounded-2xl" />
                                <img
                                    src={portfolio?.user?.profile || "https://static.vecteezy.com/system/resources/previews/018/765/757/non_2x/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"}
                                    alt={portfolio?.user?.first_name || "Profile"}
                                    className="relative w-full aspect-[4/5] object-cover rounded-2xl border-2 border-zinc-900"
                                />
                                <div className="absolute bottom-4 left-4 bg-orange-400 border-2 border-zinc-900 px-4 py-2 rounded-xl shadow-[3px_3px_0px_#18181b]">
                                    <p className="text-white text-xs font-black uppercase tracking-widest">
                                        {portfolio?.user?.title || "UI/UX Designer"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPERIENCE ── */}
            <section id="experience" className="py-8 bg-slate-50">
                <div className="container mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-4 border-zinc-900 pb-6">
                        <div>
                            <span className="anton text-teal-500 text-xl tracking-widest block mb-2">Experience</span>
                            <h2 className="anton text-zinc-900 leading-none" style={{ fontSize: "clamp(3rem,7vw,5.5rem)" }}>
                                MY JOURNEY
                            </h2>
                        </div>
                        <span className="anton text-zinc-100 leading-none select-none hidden lg:block" style={{ fontSize: "9rem" }}>03</span>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {portfolio?.jobs?.slice(0, 6).map((job) => {
                            const current = !job.is_ended;
                            return (
                                <div
                                    key={job.id}
                                    className={`bg-white rounded-2xl p-8 border-2 border-zinc-900 bounce transition-all duration-200 ${current ? "shadow-[5px_5px_0px_#0d9488]" : "shadow-[5px_5px_0px_#18181b]"}`}
                                >
                                    {current ? (
                                        <div className="inline-flex items-center gap-2 bg-teal-50 border-2 border-teal-500 text-teal-700 px-3 py-1 rounded-full mb-5">
                                            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
                                            <span className="text-xs font-black uppercase tracking-widest">Current</span>
                                        </div>
                                    ) : (
                                        <div className="h-8 mb-5" />
                                    )}

                                    <p className="anton font-extralight leading-none mb-1">{job.role}</p>
                                    <h3 className="text-teal-600 font-black uppercase tracking-widest mb-1">{job.company_name}</h3>
                                    <p className="text-zinc-400 text-xs font-bold uppercase mb-5">
                                        {job.started_at} – {job.is_ended ? job.ended_at : "Present"}
                                    </p>
                                    <p className="text-zinc-600 text-sm leading-relaxed">{job.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── JOB (Project Section) ── */}
            <section id="job" className="py-8 bg-teal-500 border-y-4 border-zinc-900">
                <div className="container mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
                        <div>
                            <span className="anton text-teal-200 text-xl tracking-widest block mb-2">Projects</span>
                            <h2 className="anton text-white leading-none" style={{ fontSize: "clamp(3rem,7vw,5.5rem)" }}>
                                WHAT I'VE
                                <br />
                                BUILT
                            </h2>
                        </div>
                    </div>

                    <div className="border-2 border-zinc-900 overflow-hidden rounded-2xl shadow-[6px_6px_0px_#18181b] bg-white">
                        {portfolio?.projects?.slice(0, 4).map((project, i) => {
                            const no = String(i + 1).padStart(2, "0");
                            return (
                                <a
                                    key={project.id}
                                    href={project.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onMouseEnter={() => setHoveredJob(i)}
                                    onMouseLeave={() => setHoveredJob(null)}
                                    className={`job-row flex items-center gap-6 sm:gap-10 px-6 sm:px-10 py-6 transition-all duration-200
                                        ${i < (portfolio.projects.slice(0, 4).length - 1) ? "border-b-2 border-zinc-900" : ""}
                                        ${hoveredJob === i ? "bg-teal-50" : "bg-white"}`}
                                >
                                    <span className={`job-num anton text-5xl sm:text-6xl min-w-[4rem] leading-none transition-colors ${hoveredJob === i ? "text-teal-500" : "text-zinc-200"}`}>
                                        {no}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="anton text-2xl sm:text-3xl leading-none truncate text-zinc-900">{project.name}</h4>
                                        <p className={`text-sm font-bold uppercase tracking-widest mt-1 transition-colors ${hoveredJob === i ? "text-teal-600" : "text-zinc-400"}`}>
                                            {project.description}
                                        </p>
                                        {project.technologies && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {Object.entries(project.technologies)
                                                    .filter(([_, val]) => val)
                                                    .map(([tech]) => (
                                                        <span key={tech} className="px-2 py-0.5 bg-teal-50 border border-teal-300 text-teal-700 text-xs font-bold uppercase rounded-full">
                                                            {tech}
                                                        </span>
                                                    ))}
                                            </div>
                                        )}
                                    </div>
                                    <span className={`shrink-0 text-sm font-black uppercase tracking-widest hidden sm:block transition-colors ${hoveredJob === i ? "text-teal-600" : "text-zinc-400"}`}>
                                        →
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── SCHOOL ── */}
            <section id="school" className="py-8 bg-white">
                <div className="container mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-4 border-zinc-900 pb-6">
                        <div>
                            <span className="anton text-teal-500 text-xl tracking-widest block mb-2">Education</span>
                            <h2 className="anton text-zinc-900 leading-none" style={{ fontSize: "clamp(3rem,7vw,5.5rem)" }}>
                                ACADEMIC
                                <br />
                                BACKGROUND
                            </h2>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {portfolio?.education?.map((edu) => {
                            const isCompleted = edu.is_completed;
                            const period =
                                edu.ended_at === "0001-01-01" || !edu.ended_at
                                    ? `${edu.started_at} – Present`
                                    : `${edu.started_at} – ${edu.ended_at}`;
                            const badge = isCompleted ? "Completed ✓" : "In Progress";
                            const accentColor = isCompleted ? "border-l-teal-500" : "border-l-orange-400";
                            const badgeBg = isCompleted
                                ? "bg-teal-50 border-teal-400 text-teal-700"
                                : "bg-orange-50 border-orange-400 text-orange-700";

                            return (
                                <div
                                    key={edu.id}
                                    className={`bg-white border-2 border-zinc-900 rounded-2xl shadow-[5px_5px_0px_#18181b] bounce flex gap-5 p-7 border-l-8 ${accentColor}`}
                                >
                                    <span className="text-4xl shrink-0 mt-1">🎓</span>
                                    <div>
                                        <h4 className="anton text-xl text-zinc-900 leading-tight mb-1">{edu.degree_name}</h4>
                                        <p className="text-teal-600 text-sm font-bold uppercase tracking-wide mb-1">
                                            <a href={edu.institute_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                {edu.institute_name}
                                            </a>
                                        </p>
                                        <p className="text-zinc-400 text-xs font-bold uppercase mb-4">{period}</p>
                                        <span className={`inline-block ${badgeBg} border-2 rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest`}>
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
            <section id="skill" className="py-8 bg-zinc-900 text-white">
                <div className="container mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-4 border-zinc-700 pb-6">
                        <div>
                            <span className="anton text-teal-400 text-xl tracking-widest block mb-2">Skills</span>
                            <h2 className="anton text-white leading-none" style={{ fontSize: "clamp(3rem,7vw,5.5rem)" }}>
                                WHAT I DO
                                <br />
                                <span className="text-teal-400">BEST</span>
                            </h2>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Skill bars */}
                        <div className="space-y-7">
                            {portfolio?.skills?.map((skill) => (
                                <div key={skill.id} className="group">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center gap-3">
                                            {skill.logo_url ? (
                                                <img src={skill.logo_url} alt={skill.name} className="w-6 h-6 object-contain" />
                                            ) : null}
                                            <span className="anton text-xl text-white group-hover:text-teal-400 transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                        <span className="anton text-xl text-teal-400">{skill.proficiency || 0}%</span>
                                    </div>
                                    <div className="h-4 bg-zinc-800 border-2 border-zinc-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-teal-400 to-orange-400 rounded-full border-r-2 border-zinc-900"
                                            style={{ width: `${skill.proficiency || 0}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tool grid */}
                        <div className="grid grid-cols-3 gap-0 border-2 border-zinc-700 rounded-2xl overflow-hidden self-start">
                            {portfolio?.skills?.slice(0, 6).map(({ id, name, logo_url }, i) => (
                                <div
                                    key={id}
                                    className={`p-6 text-center bg-zinc-800 hover:bg-teal-500 hover:text-zinc-900 transition-all duration-200 cursor-default group
                                        ${i % 3 !== 2 ? "border-r-2 border-zinc-700" : ""}
                                        ${i < 3 ? "border-b-2 border-zinc-700" : ""}`}
                                >
                                    {logo_url ? (
                                        <img src={logo_url} alt={name} className="w-8 h-8 mx-auto mb-2 object-contain" />
                                    ) : (
                                        <span className="text-2xl block mb-2">💻</span>
                                    )}
                                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-300 group-hover:text-zinc-900 transition-colors">
                                        {name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CONTACT ── */}
            <section id="contact" className="py-8 bg-slate-50">
                <div className="container mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left */}
                        <div>
                            <span className="anton text-teal-500 text-xl tracking-widest block mb-4">Contact</span>
                            <h2 className="anton text-zinc-900 leading-none mb-8" style={{ fontSize: "clamp(3rem,7vw,6rem)" }}>
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
                                {portfolio?.social_accounts?.slice(0, 3).map((account) => (
                                    <div key={account.id} className="flex items-center gap-4 pb-4 border-b-2 border-zinc-200">
                                        {account.image_url && (
                                            <img src={account.image_url} alt={account.name} className="w-5 h-5 object-contain rounded" />
                                        )}
                                        <span className="anton text-teal-500 text-sm tracking-widest w-24 shrink-0">
                                            {account.name}
                                        </span>
                                        <a
                                            href={account.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-zinc-600 text-sm font-bold hover:underline truncate"
                                        >
                                            {account.url?.replace(/^https?:\/\//, "")}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white border-2 border-zinc-900 rounded-2xl shadow-[6px_6px_0px_#0d9488] p-8 sm:p-10">
                            <div className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-zinc-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full bg-slate-50 border-2 border-zinc-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 text-zinc-900 placeholder-zinc-400 px-4 py-3 rounded-xl outline-none transition-all text-sm font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-zinc-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full bg-slate-50 border-2 border-zinc-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 text-zinc-900 placeholder-zinc-400 px-4 py-3 rounded-xl outline-none transition-all text-sm font-medium"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-zinc-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="What's this about?"
                                        className="w-full bg-slate-50 border-2 border-zinc-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 text-zinc-900 placeholder-zinc-400 px-4 py-3 rounded-xl outline-none transition-all text-sm font-medium"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-zinc-700 mb-2">Message</label>
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
                        {portfolio?.user?.first_name?.toUpperCase() || "PORTFOLIO"}
                        <span className="text-orange-400">.</span>
                    </span>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                        © 2026 {portfolio?.user?.first_name} — ISTAD Student
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