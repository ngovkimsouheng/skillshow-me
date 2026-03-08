import { useState, useEffect } from "react";

export default function Portfolio3() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.35 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
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
    { name: "UI Design", pct: 95, tools: "Figma · Adobe XD" },
    { name: "Frontend Dev", pct: 85, tools: "React · Tailwind CSS" },
    { name: "Branding", pct: 80, tools: "Logo · Identity" },
    { name: "Prototyping", pct: 90, tools: "Framer · InVision" },
    { name: "Motion Design", pct: 72, tools: "After Effects · Lottie" },
  ];

  return (
    <div className="bg-amber-50 text-stone-800 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
        .display { font-family: 'Playfair Display', serif; }
        .section-divider { border-color: #d6cfc4; }
      `}</style>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-amber-50/95 backdrop-blur border-b border-amber-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="display text-2xl font-black text-emerald-800 tracking-tight">
              Sok<span className="text-amber-500">.</span>
            </span>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <li key={l}>
                  <button
                    onClick={() => scrollTo(l)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200
                      ${
                        active === l
                          ? "bg-emerald-800 text-amber-50"
                          : "text-stone-600 hover:text-emerald-800 hover:bg-emerald-50"
                      }`}
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>

            {/* Hire Me CTA */}
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:block px-5 py-2 bg-emerald-800 hover:bg-emerald-700 text-amber-50 text-sm font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-800/20"
            >
              Hire Me
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-emerald-50 transition"
            >
              <svg
                className="w-6 h-6"
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

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-amber-200 bg-amber-50">
            <div className="container mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium capitalize transition
                    ${active === l ? "bg-emerald-800 text-amber-50" : "text-stone-600 hover:bg-emerald-50 hover:text-emerald-800"}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ── HOME ── */}
      <section
        id="home"
        className="min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-orange-50 to-emerald-50"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full mb-8 border border-emerald-200">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Available for freelance work
              </div>

              <h1 className="display text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-stone-900 mb-6">
                Hello, I'm
                <br />
                <em className="not-italic text-emerald-700">Sok Designer</em>
              </h1>

              <p className="text-stone-500 text-lg leading-relaxed mb-10 max-w-lg">
                Creative UI/UX Designer crafting clean, purposeful digital
                experiences that connect brands with their audiences
                beautifully.
              </p>

              <div className="flex flex-wrap gap-4 mb-14">
                <button
                  onClick={() => scrollTo("experience")}
                  className="px-8 py-3.5 bg-emerald-800 hover:bg-emerald-700 text-amber-50 font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-800/25"
                >
                  View My Work →
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-8 py-3.5 border-2 border-stone-300 hover:border-emerald-700 text-stone-700 hover:text-emerald-800 font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5"
                >
                  Get in Touch
                </button>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-amber-200">
                {[
                  ["6+", "Years"],
                  ["50+", "Projects"],
                  ["30+", "Clients"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <p className="display text-3xl font-black text-emerald-800">
                      {n}
                    </p>
                    <p className="text-stone-500 text-sm font-medium">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                {/* Decorative shapes */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-300/40 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-emerald-300/30 rounded-full blur-2xl" />

                {/* Dotted border frame */}
                <div className="absolute inset-0 border-2 border-dashed border-emerald-300 rounded-3xl translate-x-4 translate-y-4" />

                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80"
                  alt="Profile"
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-[420px] object-cover rounded-3xl shadow-2xl shadow-stone-300/60"
                />

                {/* Float badges */}
                <div className="absolute -bottom-5 -left-5 bg-white border border-amber-200 rounded-2xl px-5 py-3 shadow-lg">
                  <p className="text-xs text-stone-400 font-medium">
                    Current role
                  </p>
                  <p className="text-sm font-bold text-stone-800">
                    Senior UI/UX Designer
                  </p>
                </div>
                <div className="absolute -top-3 -right-3 bg-emerald-800 rounded-2xl px-4 py-3 shadow-lg">
                  <p className="text-xs text-emerald-300 font-medium">
                    Open to
                  </p>
                  <p className="text-sm font-bold text-white">Freelance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="py-24 bg-white border-t-2 border-amber-100"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-emerald-700 font-semibold text-sm uppercase tracking-widest mb-4">
                About Me
              </p>
              <h2 className="display text-4xl sm:text-5xl font-black text-stone-900 mb-6 leading-tight">
                Design with heart,
                <br />
                <span className="text-stone-400">build with care</span>
              </h2>
              <p className="text-stone-500 leading-relaxed mb-5">
                I specialize in designing modern web and mobile interfaces. I
                believe good design is simple, clean, and impactful — serving
                the user's needs while expressing the brand's identity.
              </p>
              <p className="text-stone-500 leading-relaxed mb-8">
                With 6+ years across agencies and startups, I bring a strategic
                design mindset to every project — from early wireframes all the
                way to polished, shipped products.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Figma", "React", "Tailwind", "Adobe XD", "Framer"].map(
                  (t) => (
                    <span
                      key={t}
                      className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold px-4 py-1.5 rounded-full"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "🎨",
                  title: "Visual Design",
                  desc: "Pixel-perfect interfaces that delight users",
                },
                {
                  icon: "📱",
                  title: "Mobile First",
                  desc: "Responsive on every screen size",
                },
                {
                  icon: "⚡",
                  title: "Fast Delivery",
                  desc: "Quick turnarounds without compromise",
                },
                {
                  icon: "🤝",
                  title: "Collaboration",
                  desc: "Seamless work with devs & stakeholders",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-amber-50 border-2 border-amber-100 hover:border-emerald-300 hover:bg-emerald-50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-3xl mb-4 block">{icon}</span>
                  <h4 className="font-bold text-stone-800 mb-1 text-sm">
                    {title}
                  </h4>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-24 bg-stone-900 text-amber-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Experience
            </p>
            <h2 className="display text-4xl sm:text-5xl font-black">
              My Journey
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Senior Designer",
                company: "PixelCraft Studio",
                period: "2022 – Present",
                desc: "Leading design projects and creative direction for enterprise digital products.",
                tag: "Current",
              },
              {
                title: "UI/UX Designer",
                company: "Webflow Agency",
                period: "2019 – 2022",
                desc: "Designed user-centered web and mobile interfaces, improving engagement by 40%.",
                tag: null,
              },
              {
                title: "Visual Designer",
                company: "Freelance",
                period: "2017 – 2019",
                desc: "Brand identities, landing pages, and UI kits for 20+ international clients.",
                tag: null,
              },
            ].map(({ title, company, period, desc, tag }) => (
              <div
                key={title}
                className="relative bg-stone-800 border border-stone-700 hover:border-amber-400/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-400/10"
              >
                {tag && (
                  <span className="absolute top-5 right-5 bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                    {tag}
                  </span>
                )}
                <div className="w-10 h-10 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center mb-5">
                  <span className="text-amber-400">✦</span>
                </div>
                <h4 className="text-lg font-bold mb-1 text-white">{title}</h4>
                <p className="text-amber-400 text-sm font-semibold mb-1">
                  {company}
                </p>
                <p className="text-stone-500 text-xs mb-4">{period}</p>
                <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOB ── */}
      <section id="job" className="py-24 bg-white border-t-2 border-amber-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-emerald-700 font-semibold text-sm uppercase tracking-widest mb-3">
              Job History
            </p>
            <h2 className="display text-4xl sm:text-5xl font-black text-stone-900">
              Where I've Worked
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                company: "PixelCraft Studio",
                role: "Lead Designer",
                period: "2022 – Present",
                logo: "P",
                color: "bg-emerald-100 text-emerald-800 border-emerald-200",
              },
              {
                company: "Webflow Agency",
                role: "Product Designer",
                period: "2019 – 2022",
                logo: "W",
                color: "bg-blue-100 text-blue-800 border-blue-200",
              },
              {
                company: "Creative Collective",
                role: "Junior UI Designer",
                period: "2017 – 2019",
                logo: "C",
                color: "bg-amber-100 text-amber-800 border-amber-200",
              },
              {
                company: "Freelance",
                role: "Visual Designer",
                period: "2015 – 2017",
                logo: "F",
                color: "bg-rose-100 text-rose-800 border-rose-200",
              },
            ].map(({ company, role, period, logo, color }) => (
              <div
                key={company}
                className="flex items-center gap-5 bg-amber-50 border-2 border-amber-100 hover:border-emerald-300 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald-100"
              >
                <div
                  className={`w-12 h-12 shrink-0 border-2 ${color} rounded-xl flex items-center justify-center font-black text-lg`}
                >
                  {logo}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-stone-900 truncate">
                    {company}
                  </h4>
                  <p className="text-stone-500 text-sm">{role}</p>
                </div>
                <span className="shrink-0 text-stone-500 text-sm font-medium bg-white border border-stone-200 px-3 py-1.5 rounded-full">
                  {period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOOL ── */}
      <section
        id="school"
        className="py-24 bg-gradient-to-br from-emerald-800 to-stone-900 text-white"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-300 font-semibold text-sm uppercase tracking-widest mb-3">
              Education
            </p>
            <h2 className="display text-4xl sm:text-5xl font-black">
              Academic Background
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                degree: "Bachelor of Design",
                school: "Royal Institute of Design",
                period: "2015 – 2019",
                badge: "GPA 3.9 / 4.0",
                icon: "🎓",
              },
              {
                degree: "UI/UX Bootcamp",
                school: "Interaction Design Foundation",
                period: "2020",
                badge: "Certificate of Excellence",
                icon: "🏅",
              },
              {
                degree: "Motion Design Course",
                school: "School of Motion",
                period: "2021",
                badge: "Advanced Level",
                icon: "🎬",
              },
              {
                degree: "Design Systems",
                school: "Figma Academy",
                period: "2022",
                badge: "Professional Cert.",
                icon: "📐",
              },
            ].map(({ degree, school, period, badge, icon }) => (
              <div
                key={degree}
                className="flex gap-5 bg-white/10 border border-white/20 hover:bg-white/15 hover:border-amber-400/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                <div className="w-12 h-12 shrink-0 bg-white/10 rounded-xl flex items-center justify-center text-2xl">
                  {icon}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-0.5">{degree}</h4>
                  <p className="text-amber-300 text-sm font-medium mb-1">
                    {school}
                  </p>
                  <p className="text-emerald-300 text-xs mb-3">{period}</p>
                  <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs px-3 py-1 rounded-full">
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
        className="py-24 bg-white border-t-2 border-amber-100"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-emerald-700 font-semibold text-sm uppercase tracking-widest mb-3">
              Skills
            </p>
            <h2 className="display text-4xl sm:text-5xl font-black text-stone-900">
              What I Do Best
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Bars */}
            <div className="space-y-7">
              {skills.map(({ name, pct, tools }) => (
                <div key={name}>
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <span className="font-bold text-stone-800 text-sm">
                        {name}
                      </span>
                      <span className="text-stone-400 text-xs ml-2">
                        {tools}
                      </span>
                    </div>
                    <span className="text-emerald-700 font-black text-sm">
                      {pct}%
                    </span>
                  </div>
                  <div className="h-3 bg-amber-100 rounded-full overflow-hidden border border-amber-200">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-700 to-emerald-500 rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tool badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                {
                  label: "Figma",
                  bg: "bg-pink-50 border-pink-200 text-pink-700 hover:bg-pink-100",
                },
                {
                  label: "React",
                  bg: "bg-cyan-50 border-cyan-200 text-cyan-700 hover:bg-cyan-100",
                },
                {
                  label: "Tailwind",
                  bg: "bg-sky-50 border-sky-200 text-sky-700 hover:bg-sky-100",
                },
                {
                  label: "Adobe XD",
                  bg: "bg-violet-50 border-violet-200 text-violet-700 hover:bg-violet-100",
                },
                {
                  label: "After Effects",
                  bg: "bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100",
                },
                {
                  label: "Framer",
                  bg: "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100",
                },
              ].map(({ label, bg }) => (
                <div
                  key={label}
                  className={`${bg} border-2 rounded-2xl p-5 text-center font-bold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="py-24 bg-amber-50 border-t-2 border-amber-100"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-emerald-700 font-semibold text-sm uppercase tracking-widest mb-3">
                Contact
              </p>
              <h2 className="display text-4xl sm:text-5xl font-black text-stone-900 mb-4">
                Let's Build Together
              </h2>
              <p className="text-stone-500">
                Have a project in mind? I'd love to hear about it.
              </p>
            </div>

            <div className="bg-white border-2 border-amber-200 rounded-3xl p-8 sm:p-10 shadow-xl shadow-amber-100">
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-stone-700 text-sm font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-amber-50 border-2 border-amber-200 focus:border-emerald-500 text-stone-800 placeholder-stone-400 px-4 py-3 rounded-xl outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-amber-50 border-2 border-amber-200 focus:border-emerald-500 text-stone-800 placeholder-stone-400 px-4 py-3 rounded-xl outline-none transition text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-stone-700 text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project inquiry…"
                    className="w-full bg-amber-50 border-2 border-amber-200 focus:border-emerald-500 text-stone-800 placeholder-stone-400 px-4 py-3 rounded-xl outline-none transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project…"
                    className="w-full bg-amber-50 border-2 border-amber-200 focus:border-emerald-500 text-stone-800 placeholder-stone-400 px-4 py-3 rounded-xl outline-none transition text-sm resize-none"
                  />
                </div>
                <button className="w-full py-4 bg-emerald-800 hover:bg-emerald-700 text-amber-50 font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-800/20 text-sm">
                  Send Message →
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex justify-center flex-wrap gap-5 mt-8">
              {["LinkedIn", "Dribbble", "Behance", "Twitter"].map((s) => (
                <button
                  key={s}
                  className="text-stone-400 hover:text-emerald-700 text-sm font-semibold transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t-2 border-amber-200 bg-stone-900 py-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="display text-xl font-black text-amber-400">
            Sok<span className="text-white">.</span>
          </span>
          <p className="text-stone-500 text-sm">
            © 2026 Sok Designer. All rights reserved.
          </p>
          <button
            onClick={() => scrollTo("home")}
            className="text-stone-500 hover:text-amber-400 text-sm font-semibold transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}
