import { useState, useEffect } from "react";
import img from "./souheng.png";

export default function Portfolio12() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("home");
    const [hoveredJob, setHoveredJob] = useState(null);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const obs = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { threshold: 0.3 }
        );
        sections.forEach((s) => obs.observe(s));
        return () => obs.disconnect();
    }, []);

    const links = ["home", "about", "experience", "job", "school", "skill", "contact"];

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <div className="bg-[#f8f9fc] my-20 text-[#0f1117] min-h-screen overflow-x-hidden">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap');
        * { font-family: 'Poppins', sans-serif; }
        .mono { font-family: 'Fira Code', monospace; }
        .nav-link { position: relative; }
        .nav-link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1.5px; background: #3b82f6; transition: width 0.25s ease; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .card { background: #fff; border-radius: 12px; border: 1px solid #e8eaf0; transition: box-shadow 0.2s ease, transform 0.2s ease; }
        .card:hover { box-shadow: 0 8px 32px rgba(15,17,23,0.08); transform: translateY(-2px); }
        .tag { background: #f0f4ff; color: #3b82f6; border-radius: 6px; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.04em; padding: 4px 10px; font-family: 'Fira Code', monospace; }
        .pill { background: #f0f4ff; border-radius: 999px; border: 1px solid #dde3f5; }
        .marquee { animation: marquee 22s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .skill-bar { height: 4px; background: #e8eaf0; border-radius: 999px; overflow: hidden; }
        .skill-fill { height: 100%; border-radius: 999px; background: linear-gradient(90deg, #3b82f6, #818cf8); }
        .dot-grid { background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px); background-size: 28px 28px; }
        .section-label { font-family: 'Fira Code', monospace; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #3b82f6; }
        .input-field { width: 100%; background: #f8f9fc; border: 1px solid #e2e6f0; border-radius: 8px; color: #0f1117; padding: 12px 16px; outline: none; transition: border 0.2s; font-size: 0.875rem; font-family: 'Poppins', sans-serif; }
        .input-field:focus { border-color: #3b82f6; background: #fff; }
        .btn-primary { background: #3b82f6; color: #fff; border-radius: 8px; font-weight: 600; font-size: 0.85rem; letter-spacing: 0.02em; padding: 12px 28px; transition: background 0.2s, transform 0.15s; border: none; cursor: pointer; font-family: 'Poppins', sans-serif; }
        .btn-primary:hover { background: #2563eb; transform: translateY(-1px); }
        .btn-secondary { background: #fff; color: #0f1117; border-radius: 8px; font-weight: 600; font-size: 0.85rem; padding: 12px 28px; border: 1px solid #e2e6f0; transition: border 0.2s, background 0.2s; cursor: pointer; font-family: 'Poppins', sans-serif; }
        .btn-secondary:hover { border-color: #3b82f6; background: #f0f4ff; }
        .job-row { border-bottom: 1px solid #e8eaf0; transition: background 0.18s; }
        .job-row:hover { background: #f5f7ff; }
        .avatar-ring { border-radius: 16px; overflow: hidden; border: 1px solid #e8eaf0; }
        .code-block { background: #1e2332; border-radius: 10px; padding: 18px 22px; font-family: 'Fira Code', monospace; font-size: 0.75rem; line-height: 1.9; border: 1px solid #2a3048; }
        .c-comment { color: #4b6070; }
        .c-keyword { color: #818cf8; }
        .c-fn { color: #60a5fa; }
        .c-str { color: #34d399; }
        .c-var { color: #f9a8d4; }
      `}</style>

            {/* ── NAV ── */}
            <header className="w-full z-50 bg-[#f8f9fc]/90 backdrop-blur border-b border-[#e8eaf0]">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14">
                        <button onClick={() => scrollTo("home")} className="mono text-sm font-600 text-[#0f1117] tracking-tight">
                            heng<span className="text-blue-500">.</span>dev
                        </button>
                        <div className="hidden lg:flex items-center gap-6">
                            {links.map((l) => (
                                <button
                                    key={l}
                                    onClick={() => scrollTo(l)}
                                    className={`nav-link ${active === l ? "active" : ""} text-xs font-500 text-[#6b7280] hover:text-[#0f1117] transition-colors capitalize`}
                                >
                                    {l}
                                </button>
                            ))}
                            <button onClick={() => scrollTo("contact")} className="btn-primary ml-2">
                                Hire Me
                            </button>
                        </div>
                        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2">
                            <div className={`w-5 h-0.5 bg-[#0f1117] mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <div className={`w-5 h-0.5 bg-[#0f1117] mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
                            <div className={`w-5 h-0.5 bg-[#0f1117] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                        </button>
                    </div>
                </div>
                {menuOpen && (
                    <div className="lg:hidden bg-white border-t border-[#e8eaf0] py-3">
                        {links.map((l) => (
                            <button key={l} onClick={() => scrollTo(l)} className="w-full text-left px-6 py-3 text-xs font-500 text-[#6b7280] hover:text-[#0f1117] capitalize">
                                {l}
                            </button>
                        ))}
                    </div>
                )}
            </header>

            {/* ── MARQUEE ── */}
            <div className="z-40 bg-blue-500/5 border-b border-blue-100 py-1.5 overflow-hidden whitespace-nowrap">
                <div className="marquee inline-flex">
                    {[...Array(2)].map((_, i) => (
                        <span key={i} className="mono text-[10px] text-blue-400 font-500 tracking-widest">
                            {["JAVASCRIPT", "//", "REACT", "//", "NODE.JS", "//", "TYPESCRIPT", "//", "NEXT.JS", "//", "POSTGRESQL", "//", "DOCKER", "//", "REST API", "//"].map((t, j) => (
                                <span key={j} className="mx-8">{t}</span>
                            ))}
                        </span>
                    ))}
                </div>
            </div>

            {/* ── HOME ── */}
            <section id="home" className="min-h-screen pt-20 pb-20 dot-grid">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[85vh]">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 pill px-4 py-1.5 mb-8">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                <span className="mono text-[10px] font-600 text-[#6b7280] uppercase tracking-widest">Open to Opportunities</span>
                            </div>
                            <h1 className="text-[clamp(2.6rem,7vw,5.5rem)] font-800 leading-[1.08] tracking-tight text-[#0f1117] mb-4">
                                Hello, I'm Heng<span className="text-blue-500">.</span><br />
                                <span className="text-blue-500">Full-Stack</span><br />
                                Developer.
                            </h1>
                            <p className="text-[#6b7280] text-base max-w-md leading-relaxed mb-2">
                                I build fast, scalable web applications — from clean REST APIs to polished React interfaces.
                            </p>
                            <p className="mono text-xs text-[#94a3b8] mb-10">heng@dev.io</p>
                            <div className="flex flex-wrap gap-3">
                                <button onClick={() => scrollTo("experience")} className="btn-primary">
                                    View Projects →
                                </button>
                                <button onClick={() => scrollTo("contact")} className="btn-secondary">
                                    Let's Talk
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex flex-col gap-4">
                            <div className="avatar-ring relative mb-2">
                                <img src={img} alt="Profile" className="w-full aspect-[4/5] object-cover" />
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg px-4 py-2 border border-[#e8eaf0]">
                                    <p className="mono text-xs font-600 text-[#0f1117]">Full-Stack Developer</p>
                                    <p className="mono text-[10px] text-[#94a3b8]">@ ByteForge Labs</p>
                                </div>
                            </div>
                            <div className="code-block hidden lg:block">
                                <p><span className="c-comment">// current status</span></p>
                                <p><span className="c-keyword">const</span> <span className="c-var">heng</span> = {"{"}</p>
                                <p>&nbsp;&nbsp;<span className="c-fn">role</span>: <span className="c-str">"Full-Stack Dev"</span>,</p>
                                <p>&nbsp;&nbsp;<span className="c-fn">stack</span>: [<span className="c-str">"React"</span>, <span className="c-str">"Node"</span>, <span className="c-str">"TS"</span>],</p>
                                <p>&nbsp;&nbsp;<span className="c-fn">available</span>: <span className="c-keyword">true</span></p>
                                <p>{"}"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section id="about" className="py-24 bg-[#0f1117] text-white">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="section-label text-blue-400 mb-4">// about me</p>
                            <h2 className="text-5xl sm:text-6xl font-700 leading-tight tracking-tight mb-6">
                                Code is my<br />
                                <span className="text-blue-400">craft.</span>
                            </h2>
                            <p className="text-[#94a3b8] leading-relaxed mb-4">
                                I'm a full-stack developer who loves building products end-to-end — from database schema design to pixel-level UI polish. I care deeply about performance, clean code, and developer experience.
                            </p>
                            <p className="text-[#94a3b8] leading-relaxed mb-6">
                                Whether it's architecting a REST API, optimizing SQL queries, or shipping a React component library — I bring focus and ownership to every layer of the stack.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Next.js"].map((t) => (
                                    <span key={t} className="mono text-[11px] font-500 px-3 py-1.5 rounded-md bg-[#1e2332] text-blue-300 border border-[#2a3048]">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: "⚛️", title: "Frontend", desc: "React, Next.js, TypeScript — responsive & accessible UIs", color: "text-blue-400" },
                                { icon: "🛠️", title: "Backend", desc: "Node.js, REST APIs, GraphQL, serverless functions", color: "text-indigo-400" },
                                { icon: "🗄️", title: "Databases", desc: "PostgreSQL, MongoDB, Redis — schema & optimization", color: "text-violet-400" },
                                { icon: "🚀", title: "DevOps", desc: "Docker, CI/CD pipelines, AWS, Vercel deployments", color: "text-sky-400" },
                            ].map(({ icon, title, desc, color }, i) => (
                                <div key={title} className="bg-[#161b27] p-6 border border-[#232840] hover:border-[#3b82f6]/40 transition-colors" style={{ borderRadius: '12px', marginTop: i % 2 === 1 ? '24px' : '0' }}>
                                    <span className={`${color} text-2xl block mb-3`}>{icon}</span>
                                    <h4 className="font-600 text-sm text-white mb-1">{title}</h4>
                                    <p className="text-[#6b7280] text-xs leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPERIENCE ── */}
            <section id="experience" className="py-24 bg-[#f8f9fc]">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between mb-14 pb-5 border-b border-[#e8eaf0]">
                        <div>
                            <p className="section-label mb-2">// experience</p>
                            <h2 className="text-4xl sm:text-5xl font-700 tracking-tight text-[#0f1117]">My Journey</h2>
                        </div>
                        <span className="mono text-7xl font-700 text-[#f0f4ff] leading-none select-none hidden lg:block">03</span>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                title: "Senior Full-Stack Dev",
                                company: "ByteForge Labs",
                                period: "2022–Now",
                                desc: "Leading backend architecture for a SaaS platform serving 50k+ users. Built microservices in Node.js with PostgreSQL.",
                                current: true,
                                stack: ["React", "Node.js", "AWS"]
                            },
                            {
                                title: "Frontend Engineer",
                                company: "Webstack Agency",
                                period: "2019–2022",
                                desc: "Built high-performance React apps, reduced load times by 40% through code splitting and lazy loading.",
                                stack: ["React", "TypeScript", "GraphQL"]
                            },
                            {
                                title: "Junior Developer",
                                company: "Freelance",
                                period: "2017–2019",
                                desc: "Developed 20+ client websites and REST APIs. Handled full project lifecycle from requirements to deployment.",
                                stack: ["Vue.js", "PHP", "MySQL"]
                            },
                        ].map(({ title, company, period, desc, current, stack }) => (
                            <div key={title} className="card p-7">
                                {current ? (
                                    <div className="inline-flex items-center gap-2 pill px-3 py-1 mb-5">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                        <span className="mono text-[10px] font-600 text-green-600 uppercase tracking-widest">Current</span>
                                    </div>
                                ) : <div className="h-7 mb-5" />}
                                <h4 className="text-lg font-700 text-[#0f1117] mb-1">{title}</h4>
                                <p className="mono text-xs text-blue-500 font-600 mb-1">{company}</p>
                                <p className="mono text-[10px] text-[#94a3b8] mb-4">{period}</p>
                                <p className="text-[#6b7280] text-sm leading-relaxed mb-5">{desc}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {stack.map(s => <span key={s} className="tag">{s}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── JOB ── */}
            <section id="job" className="py-24 bg-white">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between mb-14">
                        <div>
                            <p className="section-label mb-2">// job history</p>
                            <h2 className="text-4xl sm:text-5xl font-700 tracking-tight text-[#0f1117]">Where I've Worked</h2>
                        </div>
                    </div>

                    <div className="border border-[#e8eaf0] overflow-hidden" style={{ borderRadius: '12px' }}>
                        {[
                            { no: "01", company: "ByteForge Labs", role: "Senior Full-Stack Developer", period: "2022–Present" },
                            { no: "02", company: "Webstack Agency", role: "Frontend Engineer", period: "2019–2022" },
                            { no: "03", company: "DevNest Studio", role: "Backend Developer", period: "2017–2019" },
                            { no: "04", company: "Freelance", role: "Junior Web Developer", period: "2015–2017" },
                        ].map(({ no, company, role, period }, i) => (
                            <div
                                key={company}
                                onMouseEnter={() => setHoveredJob(i)}
                                onMouseLeave={() => setHoveredJob(null)}
                                className={`job-row flex items-center gap-6 sm:gap-10 px-8 py-6 cursor-default ${i === 3 ? "border-b-0" : ""} ${hoveredJob === i ? "bg-[#f5f7ff]" : ""}`}
                            >
                                <span className="mono text-xl font-500 text-[#d1d5e0] min-w-[3rem]">{no}</span>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-lg font-600 text-[#0f1117] truncate">{company}</h4>
                                    <p className="mono text-xs text-blue-500 mt-0.5">{role}</p>
                                </div>
                                <span className="mono text-xs text-[#94a3b8] hidden sm:block">{period}</span>
                                <span className={`text-lg transition-colors ${hoveredJob === i ? "text-blue-500" : "text-[#d1d5e0]"}`}>→</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SCHOOL ── */}
            <section id="school" className="py-24 bg-[#f8f9fc]">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between mb-14 pb-5 border-b border-[#e8eaf0]">
                        <div>
                            <p className="section-label mb-2">// education</p>
                            <h2 className="text-4xl sm:text-5xl font-700 tracking-tight text-[#0f1117]">Academic Background</h2>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {[
                            { icon: "🎓", degree: "B.Sc. Computer Science", school: "Institute of Technology Phnom Penh", period: "2015–2019", badge: "GPA 3.8 / 4.0", color: "#3b82f6" },
                            { icon: "🏅", degree: "Full-Stack Bootcamp", school: "The Odin Project / freeCodeCamp", period: "2020", badge: "Top Graduate", color: "#facc15" },
                            { icon: "☁️", degree: "AWS Cloud Practitioner", school: "Amazon Web Services", period: "2021", badge: "Certified", color: "#334155" },
                            { icon: "📐", degree: "System Design Course", school: "Educative.io", period: "2022", badge: "Advanced Level", color: "#8b5cf6" },
                        ].map(({ icon, degree, school, period, badge, color }) => (
                            <div key={degree} className="card flex gap-5 p-7 overflow-hidden" style={{ borderLeft: `3px solid ${color}` }}>
                                <span className="text-3xl shrink-0 mt-0.5">{icon}</span>
                                <div>
                                    <h4 className="font-700 text-[#0f1117] mb-0.5">{degree}</h4>
                                    <p className="mono text-xs text-blue-500 font-600 mb-1">{school}</p>
                                    <p className="mono text-[10px] text-[#94a3b8] mb-4">{period}</p>
                                    <span className="tag">{badge}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SKILL ── */}
            <section id="skill" className="py-24 bg-[#0f1117] text-white">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between mb-14 pb-5 border-b border-[#232840]">
                        <div>
                            <p className="section-label text-blue-400 mb-2">// skills</p>
                            <h2 className="text-4xl sm:text-5xl font-700 tracking-tight">What I Do <span className="text-blue-400">Best</span></h2>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-14">
                        <div className="space-y-7">
                            {[
                                { name: "React / Next.js", pct: 95, tools: "TypeScript · Hooks · SSR" },
                                { name: "Node.js / Express", pct: 90, tools: "REST · GraphQL · Auth" },
                                { name: "Databases", pct: 82, tools: "PostgreSQL · MongoDB · Redis" },
                                { name: "DevOps / Cloud", pct: 75, tools: "Docker · AWS · CI/CD" },
                                { name: "Testing", pct: 78, tools: "Jest · Cypress · RTL" },
                            ].map(({ name, pct, tools }) => (
                                <div key={name}>
                                    <div className="flex justify-between items-center mb-2.5">
                                        <div className="flex items-center gap-3">
                                            <span className="font-600 text-white text-sm">{name}</span>
                                            <span className="mono text-[10px] text-[#4b5563]">{tools}</span>
                                        </div>
                                        <span className="mono text-xs text-blue-400 font-600">{pct}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-fill" style={{ width: `${pct}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-3 self-start">
                            {[
                                { label: "React", emoji: "⚛️" },
                                { label: "Node.js", emoji: "🟩" },
                                { label: "TypeScript", emoji: "🔷" },
                                { label: "PostgreSQL", emoji: "🐘" },
                                { label: "Docker", emoji: "🐳" },
                                { label: "Git", emoji: "🌿" },
                            ].map(({ label, emoji }) => (
                                <div key={label} className="bg-[#161b27] rounded-lg p-5 text-center border border-[#232840] hover:border-blue-500/40 hover:bg-[#1a2035] transition-all cursor-default group">
                                    <span className="text-xl block mb-2">{emoji}</span>
                                    <span className="mono text-[10px] font-600 text-[#6b7280] group-hover:text-blue-400 transition-colors uppercase tracking-widest">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CONTACT ── */}
            <section id="contact" className="py-24 bg-[#f8f9fc]">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <p className="section-label mb-4">// contact</p>
                            <h2 className="text-5xl sm:text-6xl font-700 tracking-tight text-[#0f1117] mb-6 leading-tight">
                                Let's Build<br /><span className="text-blue-500">Together.</span>
                            </h2>
                            <p className="text-[#6b7280] text-base leading-relaxed mb-10 max-w-sm">
                                Have a project or role in mind? I'm always open to discussing new opportunities — let's ship something great.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { label: "Email", value: "heng@dev.io" },
                                    { label: "GitHub", value: "github.com/hengdev" },
                                    { label: "LinkedIn", value: "linkedin.com/in/hengdev" },
                                ].map(({ label, value }) => (
                                    <div key={label} className="flex items-center gap-4 py-4 border-b border-[#e8eaf0]">
                                        <span className="mono text-[10px] font-600 text-blue-500 uppercase tracking-widest w-20">{label}</span>
                                        <span className="text-[#0f1117] text-sm font-500">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card p-8 sm:p-10">
                            <div className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block mono text-[10px] font-600 uppercase tracking-widest text-[#6b7280] mb-2">Name</label>
                                        <input type="text" placeholder="John Doe" className="input-field" />
                                    </div>
                                    <div>
                                        <label className="block mono text-[10px] font-600 uppercase tracking-widest text-[#6b7280] mb-2">Email</label>
                                        <input type="email" placeholder="john@email.com" className="input-field" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block mono text-[10px] font-600 uppercase tracking-widest text-[#6b7280] mb-2">Subject</label>
                                    <input type="text" placeholder="Project or role inquiry…" className="input-field" />
                                </div>
                                <div>
                                    <label className="block mono text-[10px] font-600 uppercase tracking-widest text-[#6b7280] mb-2">Message</label>
                                    <textarea rows={5} placeholder="Tell me about your project or opportunity…" className="input-field resize-none" />
                                </div>
                                <button className="btn-primary w-full py-3.5">Send Message →</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="bg-[#0f1117] border-t border-[#232840] py-8">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span className="mono text-sm font-600 text-white">heng<span className="text-blue-400">.</span>dev</span>
                    <p className="mono text-[10px] text-[#4b5563] uppercase tracking-widest">© 2026 Heng Developer — All rights reserved</p>
                    <button onClick={() => scrollTo("home")} className="mono text-[10px] text-[#4b5563] hover:text-blue-400 uppercase tracking-widest transition-colors">
                        ↑ Top
                    </button>
                </div>
            </footer>
        </div>
    );
}