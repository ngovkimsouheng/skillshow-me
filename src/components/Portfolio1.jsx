import React, { useState, useEffect, useRef } from "react";

/* ─── DATA ──────────────────────────────────────────────────────────────────── */
const data = {
  user: {
    first_name: "lyta",
    last_name: "po",
    username: "polyta",
    email: "polyta888@gmail.com",
    about_me: "Creative developer passionate about building beautiful web experiences and modern interfaces.",
    profile: "http://skillshow-api.srengchipor.dev/uploads/d55e3ea6-a605-4fbf-861e-f35df62f59e2_1773508346235132926.png",
    is_portfolio_public: true,
  },
  jobs: [
    { id: "a0ea3149", company_name: "Designer", role: "asdfasdfa", started_at: "2026-03-06", ended_at: "0001-01-01", is_ended: false },
    { id: "94f49fda", company_name: "Designer", role: "asdfasdfa", started_at: "2026-03-06", ended_at: "0001-01-01", is_ended: false },
    { id: "39b5b9d6", company_name: "Designer", role: "asdfasdfa", started_at: "2026-03-06", ended_at: "0001-01-01", is_ended: false },
  ],
  skills: [
    { id: "s1", name: "test", logo_url: "http://skillshow-api.srengchipor.dev/uploads/d55e3ea6-a605-4fbf-861e-f35df62f59e2_1773560473540151589.png", proficiency: 90, is_public: true },
    { id: "s2", name: "test", logo_url: "http://skillshow-api.srengchipor.dev/uploads/d55e3ea6-a605-4fbf-861e-f35df62f59e2_1773560473540151589.png", proficiency: 90, is_public: true },
    { id: "s3", name: "test", logo_url: "http://skillshow-api.srengchipor.dev/uploads/d55e3ea6-a605-4fbf-861e-f35df62f59e2_1773560473540151589.png", proficiency: 90, is_public: true },
    { id: "s4", name: "test", logo_url: "http://skillshow-api.srengchipor.dev/uploads/d55e3ea6-a605-4fbf-861e-f35df62f59e2_1773560473540151589.png", proficiency: 90, is_public: true },
  ],
  projects: [
    { id: "4cba2788", name: "Personal Portfolio", description: "A personal portfolio website showcasing projects and skills.", project_url: "https://username.github.io/portfolio", github_url: "https://github.com/username/portfolio", is_published: true, is_opensource: true, technologies: ["React", "Tailwind CSS", "JavaScript"] },
  ],
  education: [
    { id: "c5142100", degree_name: "Bachelor of Computer Science", institute_name: "Royal University of Phnom Penh", institute_url: "https://www.rupp.edu.kh/", started_at: "2023-03-13", ended_at: "0001-01-01", is_completed: false },
  ],
  social_accounts: [
    { id: "47d2faa1", name: "Facebook", url: "https://facebook.com/latte", image_url: "http://skillshow-api.srengchipor.dev/uploads/d55e3ea6-a605-4fbf-861e-f35df62f59e2_1773560485949052397.png", is_public: true },
    { id: "f05ae40e", name: "Twitter", url: "https://facebook.com/latte", image_url: "http://skillshow-api.srengchipor.dev/uploads/d55e3ea6-a605-4fbf-861e-f35df62f59e2_1773508936429601450.png", is_public: true },
    { id: "8f208dcf", name: "GitHub", url: "https://facebook.com/latte", image_url: "", is_public: true },
    { id: "6a526754", name: "LinkedIn", url: "https://facebook.com/latte", image_url: "http://skillshow-api.srengchipor.dev/uploads/d55e3ea6-a605-4fbf-861e-f35df62f59e2_1773505886690478913.png", is_public: true },
    { id: "5ba12361", name: "Instagram", url: "https://facebook.com/latte", image_url: "http://skillshow-api.srengchipor.dev/uploads/d55e3ea6-a605-4fbf-861e-f35df62f59e2_1773505855550540462.png", is_public: true },
  ],
};

/* ─── HELPERS ───────────────────────────────────────────────────────────────── */
function formatDate(str) {
  if (!str || str.startsWith("0001")) return null;
  return new Date(str).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
function cap(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

/* ─── SCROLL REVEAL ─────────────────────────────────────────────────────────── */
function useOnScreen() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeUp({ children, delay = 0 }) {
  const [ref, visible] = useOnScreen();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  );
}

function AnimatedBar({ pct }) {
  const [ref, visible] = useOnScreen();
  return (
    <div ref={ref} className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-orange-500 rounded-full transition-all duration-1000 ease-out"
        style={{ width: visible ? `${pct}%` : "0%" }}
      />
    </div>
  );
}

/* ─── REUSABLE: Section Header ──────────────────────────────────────────────── */
/*
  Every section uses the exact same header pattern:
  - orange label (CAPS, small)
  - bold h2
  - gray subtitle
  This guarantees visual consistency top-to-bottom.
*/
function SectionHeader({ label, title, subtitle, center = false }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-2">{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="text-gray-500 mt-3 max-w-xl leading-relaxed">{subtitle}</p>}
    </div>
  );
}

/* ─── REUSABLE: Card ────────────────────────────────────────────────────────── */
/*
  All cards share: bg-white, rounded-xl, shadow-sm hover:shadow-md, p-6, transition.
  No section deviates — keeps visual rhythm identical.
*/
function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 ${className}`}>
      {children}
    </div>
  );
}

/* ─── REUSABLE: Orange Icon Box ─────────────────────────────────────────────── */
function IconBox({ children }) {
  return (
    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
      {children}
    </div>
  );
}

/* ─── REUSABLE: Social Icon ─────────────────────────────────────────────────── */
function SocialIcon({ account }) {
  const [err, setErr] = useState(false);
  return (
    <a
      href={account.url}
      target="_blank"
      rel="noopener noreferrer"
      title={account.name}
      className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-500 transition-colors duration-200 overflow-hidden group"
    >
      {account.image_url && !err ? (
        <img src={account.image_url} alt={account.name} className="w-6 h-6 object-contain" onError={() => setErr(true)} />
      ) : (
        <span className="text-orange-500 group-hover:text-white text-xs font-bold transition-colors">
          {account.name?.[0]?.toUpperCase() ?? "S"}
        </span>
      )}
    </a>
  );
}

/* ─── MAIN ──────────────────────────────────────────────────────────────────── */
export default function Portfolio1() {
  const { user, jobs, skills, projects, education, social_accounts } = data;
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  const fullName = `${cap(user.first_name)} ${cap(user.last_name)}`;
  const publicSocials = social_accounts.filter((s) => s.is_public);
  const publicSkills = skills.filter((s) => s.is_public);
  const publishedProjects = projects.filter((p) => p.is_published);
  const navLinks = ["home", "skills", "projects", "experience", "education", "contact"];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.3 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  /* ── NAV ───────────────────────────────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-orange-50 text-gray-900">

      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="text-xl font-bold text-gray-900">
            {cap(user.first_name)}<span className="text-orange-500">.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`capitalize px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${active === l
                  ? "text-orange-500 bg-orange-50"
                  : "text-gray-500 hover:text-orange-500 hover:bg-orange-50"
                  }`}
              >
                {l}
              </button>
            ))}
            <a
              href={`mailto:${user.email}`}
              className="ml-3 bg-orange-500 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 flex flex-col gap-1.5">
            <span className={`w-5 h-0.5 bg-gray-900 rounded transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 bg-gray-900 rounded transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-gray-900 rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-3 space-y-1">
            {navLinks.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`w-full text-left px-4 py-3 capitalize text-sm font-medium rounded-lg transition-colors ${active === l ? "text-orange-500 bg-orange-50" : "text-gray-600 hover:bg-gray-50"
                  }`}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ══════════════════════════════════════════
          CONSISTENT SECTION PATTERN:
          - All sections: max-w-7xl mx-auto px-6 lg:px-10 py-20
          - All headers: <SectionHeader>
          - All cards: <Card> component (bg-white rounded-xl shadow-sm p-6)
          - All icons: <IconBox> component (orange-100 bg, rounded-xl)
          - Alternating bg: orange-50 (default) / white
      ══════════════════════════════════════════ */}

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section id="home" className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Available for work
            </div>

            <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-3">Hi, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              {fullName}
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
              {user.about_me}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => scrollTo("projects")}
                className="bg-orange-500 text-white text-sm font-semibold px-7 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200"
              >
                View My Work
              </button>
              <a
                href={`mailto:${user.email}`}
                className="border-2 border-orange-500 text-orange-500 text-sm font-semibold px-7 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200"
              >
                Contact Me
              </a>
            </div>

            {publicSocials.length > 0 && (
              <div className="flex items-center gap-3">
                {publicSocials.map((s) => <SocialIcon key={s.id} account={s} />)}
              </div>
            )}
          </div>

          {/* Right avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative offset shadow */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl bg-orange-200" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                {!imgErr ? (
                  <img
                    src={user.profile}
                    alt={fullName}
                    className="w-full h-full object-cover"
                    onError={() => setImgErr(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-orange-100 flex items-center justify-center">
                    <span className="text-6xl font-bold text-orange-300">
                      {user.first_name[0]?.toUpperCase()}{user.last_name[0]?.toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              {user.is_portfolio_public && (
                <div className="absolute -bottom-4 left-6 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-gray-700 text-xs font-semibold">Open to Work</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────── */}
      <section id="skills" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <FadeUp>
            <SectionHeader
              label="Expertise"
              title="My Skills"
              subtitle="Technologies and tools I work with every day."
            />
          </FadeUp>

          {publicSkills.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {publicSkills.map((skill, i) => (
                <FadeUp key={skill.id + i} delay={i * 80}>
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      {skill.logo_url ? (
                        <img
                          src={skill.logo_url}
                          alt={skill.name}
                          className="w-6 h-6 object-contain"
                          onError={(e) => { e.currentTarget.style.display = "none"; }}
                        />
                      ) : (
                        <span className="text-orange-500 text-xs font-bold">{skill.name[0]}</span>
                      )}
                    </div>
                    {/* Bar */}
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-800">{skill.name}</span>
                        <span className="text-sm font-semibold text-orange-500">{skill.proficiency}%</span>
                      </div>
                      <AnimatedBar pct={skill.proficiency} />
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm">No skills added yet.</p>
          )}
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────── */}
      <section id="projects" className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <FadeUp>
          <SectionHeader
            label="Portfolio"
            title="My Amazing Works"
            subtitle="A collection of projects I've built and shipped."
          />
        </FadeUp>

        {publishedProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedProjects.map((project, i) => (
              <FadeUp key={project.id} delay={i * 80}>
                <Card className="p-0 overflow-hidden">
                  {/* Card image area */}
                  <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center relative">
                    <span className="text-orange-300 text-6xl font-bold opacity-30 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {project.is_opensource && (
                      <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        Open Source
                      </span>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{project.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((t) => (
                        <span key={t} className="bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full border border-orange-100">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {/* <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      {project.project_url && (
                        <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 text-sm font-semibold transition-colors">
                          Live →
                        </a>
                      )}
                      {project.github_url && (
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 text-sm font-medium transition-colors">
                          GitHub →
                        </a>
                      )}
                    </div> */}
                  </div>
                </Card>
              </FadeUp>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400 text-sm">No projects published yet.</div>
        )}
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────── */}
      <section id="experience" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <FadeUp>
            <SectionHeader
              label="Work History"
              title="Experience"
              subtitle="Companies and roles I've been part of."
            />
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, i) => {
              const start = formatDate(job.started_at);
              const end = job.is_ended ? formatDate(job.ended_at) : "Present";
              return (
                <FadeUp key={job.id} delay={i * 80}>
                  <Card>
                    <div className="flex items-start justify-between mb-5">
                      <IconBox>
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </IconBox>
                      {!job.is_ended && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 text-base leading-tight">{job.role}</h3>
                    <p className="text-orange-500 text-sm font-medium mt-1">{job.company_name}</p>
                    <p className="text-gray-400 text-xs mt-3 font-medium uppercase tracking-wider">
                      {start} — {end}
                    </p>
                  </Card>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ────────────────────────────────────────────── */}
      <section id="education" className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <FadeUp>
          <SectionHeader
            label="Academic"
            title="Education"
            subtitle="My academic background and qualifications."
          />
        </FadeUp>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => {
            const start = formatDate(edu.started_at);
            const end = edu.is_completed ? formatDate(edu.ended_at) : "Present";
            return (
              <FadeUp key={edu.id} delay={i * 80}>
                <Card className="flex gap-5">
                  <IconBox>
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </IconBox>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base leading-tight">{edu.degree_name}</h3>
                    <a
                      href={edu.institute_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 text-sm font-medium hover:underline mt-1 inline-block"
                    >
                      {edu.institute_name} ↗
                    </a>
                    <p className="text-gray-400 text-xs mt-2 font-medium uppercase tracking-wider">
                      {start} — {end}
                    </p>
                    <span className={`mt-3 inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full ${edu.is_completed
                      ? "bg-green-50 text-green-600 border border-green-200"
                      : "bg-orange-50 text-orange-600 border border-orange-200"
                      }`}>
                      {edu.is_completed ? "Completed" : "In Progress"}
                    </span>
                  </div>
                </Card>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section id="contact" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <FadeUp>
            <SectionHeader
              label="Get in Touch"
              title="Let's Work Together"
              subtitle="Have a project in mind? I'd love to hear about it."
              center
            />
          </FadeUp>

          <FadeUp delay={100}>
            <div className="grid md:grid-cols-2 gap-6">

              {/* Left — contact list */}
              <div className="space-y-4">
                {/* Email row */}
                <a
                  href={`mailto:${user.email}`}
                  className="flex items-center gap-4 bg-orange-50 rounded-xl p-5 border border-orange-100 hover:border-orange-300 hover:shadow-md transition-all duration-200 group"
                >
                  <IconBox>
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </IconBox>
                  <div>
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">Email</p>
                    <p className="text-gray-900 font-semibold text-sm mt-0.5">{user.email}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-orange-400 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                {/* Social rows — max 3 shown to avoid repetition */}
                {publicSocials.slice(0, 3).map((account) => (
                  <a
                    key={account.id}
                    href={account.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-orange-50 rounded-xl p-5 border border-orange-100 hover:border-orange-300 hover:shadow-md transition-all duration-200 group"
                  >
                    <IconBox>
                      {account.image_url ? (
                        <img src={account.image_url} alt={account.name} className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                      ) : (
                        <span className="text-orange-500 text-sm font-bold">{account.name[0]?.toUpperCase()}</span>
                      )}
                    </IconBox>
                    <div>
                      <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">{account.name}</p>
                      <p className="text-gray-900 font-semibold text-sm mt-0.5">{account.url.replace(/^https?:\/\//, "")}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-orange-400 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Right — CTA card */}
              <div className="bg-orange-500 rounded-xl p-8 text-white relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Ready to start?</h3>
                  <p className="text-orange-100 text-sm leading-relaxed mb-6">
                    Let's discuss your project and bring your ideas to life. I'm always open to new opportunities.
                  </p>
                  <a
                    href={`mailto:${user.email}`}
                    className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold text-sm px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors duration-200"
                  >
                    Send a Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xl font-bold">
            {cap(user.first_name)}<span className="text-orange-500">.</span>
          </span>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} {fullName}. All rights reserved.</p>
          <button
            onClick={() => scrollTo("home")}
            className="text-gray-400 hover:text-orange-400 text-xs font-semibold uppercase tracking-widest transition-colors"
          >
            ↑ Back to top
          </button>
        </div>
      </footer>

    </div>
  );
}