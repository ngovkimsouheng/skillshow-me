import { useState, useEffect } from "react";
import img from "../Portfolio-static/souheng.png";
import { useGetMyPortfolioQuery } from "../../api/portfolioApi";
import { MdOutlineMail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import DeleteJob from "../../Project/Job/DeleteJob";
import DeleteSkill from "../../Project/skill/DeleteSkill";
import DeleteEducation from "../../Project/Education/DeleteEducation";
import DeleteSocialAccount from "../../Project/SocailAccount/DeleteSocailAccount";
import DeleteProject from "../../Project/ProjectUser/DeleteProject";
import ContactForm from "../../../test/ContactForm";
export default function GetPortfolio4() {


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
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  console.log("portfolio", portfolio);
  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center h-64 text-yellow-300 text-xl">
  //       Loading portfolio...
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-64 text-red-500 text-center">
  //       <p>Failed to load portfolio.</p>
  //       <pre className="text-xs mt-2">{JSON.stringify(error, null, 2)}</pre>
  //     </div>
  //   );
  // }
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
    "job",
    "project",
    "school",
    "skill",
    "contact",
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-zinc-50 text-zinc-900 min-h-screen overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;500;600;700;800&display=swap');
       
        .border-brutal { border: 3px solid #18181b; }
        .shadow-brutal { box-shadow: 6px 6px 0px #18181b; }
        .shadow-brutal-coral { box-shadow: 6px 6px 0px #f43f5e; }
        .shadow-brutal-yellow { box-shadow: 6px 6px 0px #eab308; }
        .hover-lift { transition: transform 0.15s ease, box-shadow 0.15s ease; }
        .hover-lift:hover { transform: translate(-3px, -3px); box-shadow: 9px 9px 0px #18181b; }
        .hover-lift-coral:hover { transform: translate(-3px, -3px); box-shadow: 9px 9px 0px #f43f5e; }
        .marquee { animation: marquee 18s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .diagonal-bg { background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(234,179,8,0.08) 10px, rgba(234,179,8,0.08) 20px); }
        .tag-pill { font-family: 'Bebas Neue', cursive; letter-spacing: 0.1em; }
      `}</style>

      <header className=" ">
        {/* ── NAV ── */}
        <nav className="w-full top-0 z-50 bg-zinc-50 border-b-4 border-zinc-900">
          <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={() => scrollTo("home")}
                className="bebas text-3xl text-zinc-900 tracking-widest"
              >
                {portfolio?.user?.first_name}
                <span className="text-rose-500">*</span>
              </button>
              {/* Desktop */}
              <div className="hidden lg:flex items-center gap-0">
                {links.map((l, i) => (
                  <button
                    key={l}
                    onClick={() => scrollTo(l)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border-r-2 border-zinc-200 transition-all duration-150
                        ${active === l ? "bg-zinc-900 text-zinc-50" : "hover:bg-yellow-300 text-zinc-600 hover:text-zinc-900"}`}
                  >
                    {l}
                  </button>
                ))}
                <button
                  onClick={() => scrollTo("contact")}
                  className="ml-4 px-5 py-2 bg-rose-500 text-white text-xs font-bold uppercase tracking-widest border-brutal shadow-brutal hover-lift"
                >
                  Hire Me
                </button>
              </div>
              {/* Mobile */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 border-brutal flex flex-col items-center justify-center gap-1.5"
              >
                <span
                  className={`block w-5 h-0.5 bg-zinc-900 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-zinc-900 transition-all ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-zinc-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="lg:hidden border-t-4 border-zinc-900 bg-zinc-50">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className={`w-full text-left px-6 py-4 text-sm font-bold uppercase tracking-widest border-b-2 border-zinc-200 transition
                      ${active === l ? "bg-zinc-900 text-yellow-300" : "hover:bg-yellow-300 text-zinc-700"}`}
                >
                  {l}
                </button>
              ))}
            </div>
          )}
        </nav>

      </header>

      {/* ── HOME ── */}
      <section id="home" className=" mt-10 diagonal-bg">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Big title — spans 7 cols */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-yellow-300 border-brutal px-4 py-2 mb-8 shadow-brutal">
                <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Available for Work
                </span>
              </div>

              <h1 className="bebas  leading-none text-zinc-900 mb-0">
                HELLO,
              </h1>
              <h1 className="bebas text-[clamp(3rem,9vw,7rem)] leading-none mb-0">
                <p>I'm</p>
                <span className="text-rose-500 uppercase">
                  {portfolio?.user?.first_name}
                </span>
              </h1>
              {/* <h1 className="bebas text-[clamp(4rem,12vw,9rem)] leading-none text-zinc-900 mb-8">
                DESIGNER
              </h1> */}

              <p className="text-zinc-500 flex gap-4 items-center text-base sm:text-lg max-w-lg leading-relaxed mb-10 font-medium">

                {portfolio?.user?.about_me
                }
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("experience")}
                  className="px-8 py-4 bg-zinc-900 text-zinc-50 text-sm font-bold uppercase tracking-widest border-brutal shadow-brutal hover-lift"
                >
                  My Work →
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-8 py-4 bg-yellow-300 text-zinc-900 text-sm font-bold uppercase tracking-widest border-brutal shadow-brutal-coral hover-lift-coral transition-all duration-150"
                >
                  Let's Talk
                </button>
              </div>
            </div>

            {/* Right side — image + stats */}
            <div className="lg:col-span-5  flex flex-col gap-6">
              <div className="relative">
                {/* <div className="absolute -top-3 -right-3 w-full h-full bg-yellow-300 border-brutal" />
                <img
                  src={portfolio?.user?.profile}
                  alt="Profile"
                  className="relative w-full aspect-[4/5] object-cover border-brutal"
                /> */}
                {/* Role badge */}
                {/* <div className="absolute bottom-4 left-4 bg-rose-500 border-brutal px-4 py-2 shadow-brutal">
                  <p className="text-white text-xs font-bold uppercase tracking-widest">
                    Senior UI/UX Designer
                  </p>
                </div> */}
              </div>
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-full h-full bg-yellow-300 border-brutal" />

                <img
                  src={portfolio?.user?.profile || "https://static.vecteezy.com/system/resources/previews/018/765/757/non_2x/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"}
                  alt="Profile"
                  className="relative w-full aspect-[4/5] object-cover border-brutal"
                />

                {/* Edit Button */}
                <NavLink
                  to="/dashboard/profile"
                  className="absolute top-4 right-4 inline-flex"
                >
                  <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-widest border-2 border-zinc-900 bg-yellow-300 text-zinc-900 hover:bg-zinc-900 hover:text-yellow-300 transition-all duration-200 shadow-brutal">
                    <FiEdit2 size={14} />
                    Edit
                  </button>
                </NavLink>

                {/* Role badge */}
                <div className="absolute bottom-4 left-4 bg-rose-500 border-brutal px-4 py-2 shadow-brutal">
                  <p className="text-white text-xs font-bold uppercase tracking-widest">
                    Senior UI/UX Designer
                  </p>
                </div>
              </div>

              {/* Stats row */}
              {/* <div className="grid grid-cols-3 gap-0 border-brutal overflow-hidden">
                {[
                  ["6+", "Years"],
                  ["50+", "Projects"],
                  ["30+", "Clients"],
                ].map(([n, l], i) => (
                  <div
                    key={l}
                    className={`p-5 text-center ${i < 2 ? "border-r-4 border-zinc-900" : ""} bg-white`}
                  >
                    <p className="bebas text-4xl text-rose-500">{n}</p>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                      {l}
                    </p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}


      {/* ── EXPERIENCE ── */}
      <section id="job" className="py-10 bg-zinc-50">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-4 border-zinc-900 pb-6">
            <div>
              <span className="bebas text-rose-500 text-xl tracking-widest block mb-2">
                Experience
              </span>
              <h2 className="bebas text-6xl sm:text-7xl text-zinc-900 leading-none">
                MY JOURNEY
              </h2>
            </div>
            <span className="bebas text-9xl text-zinc-100 leading-none select-none hidden lg:block">
              03
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio?.jobs?.slice(0, 6).map((job, index) => {
              const current = !job.is_ended;

              return (
                <div
                  key={job.id}
                  className={`relative border-brutal bg-white hover-lift p-8 ${current ? "shadow-brutal-coral" : "shadow-brutal"
                    }`}
                >
                  {/* ✅ EDIT BUTTON */}
                  <Link
                    to={`/dashboard/job/${job.id}`}
                    className="absolute top-4 right-4"
                  >
                    <button className="px-3 py-1 text-xs font-bold uppercase bg-zinc-900 text-white rounded-lg hover:bg-zinc-700 transition">
                      Edit
                    </button>
                  </Link>
                  <div className="absolute top-4 right-20">
                    <DeleteJob jobId={job.id} />
                  </div>
                  {current ? (
                    <div className="inline-flex items-center gap-2 bg-yellow-300 border-2 border-zinc-900 px-3 py-1 mb-5">
                      <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-widest">
                        Current Job
                      </span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 bg-green-300 border-2 border-zinc-900 px-3 py-1 ">
                      <span className="w-1.5 h-1.5 bg-green-700 rounded-full" />
                      <span className="text-xs font-black uppercase tracking-widest">
                        Finished Job
                      </span>
                    </div>
                  )}

                  {!current && <div className="h-5 " />}

                  {/* Company Name */}
                  <h4 className="bebas text-3xl text-zinc-900 leading-none mb-1">
                    {job.company_name}
                  </h4>

                  {/* Role */}
                  <p className="text-rose-500 text-sm font-black uppercase tracking-widest mb-1">
                    Role
                  </p>

                  <p className="text-zinc-700 text-sm mb-4">
                    {job.role}
                  </p>

                  {/* Date */}
                  <p className="text-zinc-400 text-xs font-bold uppercase">
                    {job.started_at} – {job.is_ended ? job.ended_at : "Present"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─Project ── */}
      <section
        id="project"
        className="py-10 bg-yellow-300 border-y-4 border-zinc-900"
      >
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <span className="bebas text-zinc-500 text-xl tracking-widest block mb-2">
                Project
              </span>
              <h2 className="bebas text-6xl sm:text-7xl text-zinc-900 leading-none">
                PROJECT
                <br />
                I USED TO DO
              </h2>
            </div>
          </div>

          {/* <div className="space-y-0 border-brutal overflow-hidden">
            {[
              {
                no: "01",
                company: "PixelCraft Studio",
                role: "Lead Designer",
                period: "2022–Present",
              },
              {
                no: "02",
                company: "Webflow Agency",
                role: "Product Designer",
                period: "2019–2022",
              },
              {
                no: "03",
                company: "Creative Collective",
                role: "Junior UI Designer",
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
                className={`flex items-center gap-6 sm:gap-10 px-6 sm:px-10 py-6 border-b-4 border-zinc-900 transition-all duration-200 cursor-default
                  ${hoveredJob === i ? "bg-zinc-900 text-yellow-300" : "bg-transparent text-zinc-900"}
                  ${i === 3 ? "border-b-0" : ""}`}
              >
                <span
                  className={`bebas text-5xl sm:text-6xl min-w-[4rem] leading-none ${hoveredJob === i ? "text-yellow-300" : "text-zinc-300"}`}
                >
                  {no}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="bebas text-2xl sm:text-4xl leading-none truncate">
                    {company}
                  </h4>
                  <p
                    className={`text-sm font-bold uppercase tracking-widest mt-1 ${hoveredJob === i ? "text-rose-400" : "text-zinc-500"}`}
                  >
                    {role}
                  </p>
                </div>

                <span
                  className={`shrink-0 bebas text-3xl ${hoveredJob === i ? "text-rose-400" : "text-zinc-200"}`}
                >
                  →
                </span>
              </div>
            ))}
          </div> */}
          <div className="space-y-0 border-brutal overflow-hidden">
            {portfolio?.projects?.slice(0, 4).map((project, i) => {
              const no = String(i + 1).padStart(2, "0");

              return (
                <div key={project.id} className="relative">
                  {/*  EDIT BUTTON */}
                  <Link
                    to={`/dashboard/project/${project.id}`}
                    className="absolute top-4 right-24 z-10" // shift right to make space for delete
                  >
                    <button className="px-3 py-1 text-xs font-bold uppercase bg-zinc-900 text-white rounded-lg hover:bg-zinc-700 transition">
                      Edit
                    </button>
                  </Link>

                  {/*  DELETE BUTTON */}
                  <div className="absolute top-4 right-6 z-10">
                    <DeleteProject projectId={project.id} />
                  </div>

                  {/*  Project Row */}
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredJob(i)}
                    onMouseLeave={() => setHoveredJob(null)}
                    className={`flex items-center gap-6 sm:gap-10 px-6 sm:px-10 py-6 border-b-4 border-zinc-900 transition-all duration-200
            ${hoveredJob === i ? "bg-zinc-900 text-yellow-300" : "bg-transparent text-zinc-900"}
          `}
                  >
                    {/* Number */}
                    <span
                      className={`bebas text-5xl sm:text-6xl min-w-[4rem] leading-none ${hoveredJob === i ? "text-yellow-300" : "text-zinc-300"}`}
                    >
                      {no}
                    </span>

                    {/* Project Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="bebas text-2xl sm:text-4xl leading-none truncate">{project.name}</h4>

                      <p className={`text-sm font-bold uppercase tracking-widest mt-1 ${hoveredJob === i ? "text-rose-400" : "text-zinc-500"}`}>
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {Object.entries(project.technologies || {})
                          .filter(([_, val]) => val)
                          .map(([tech]) => (
                            <span key={tech} className="px-2 py-1 bg-yellow-300 text-zinc-900 text-xs font-bold uppercase rounded">
                              {tech}
                            </span>
                          ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    {/* <span className={`shrink-0 bebas text-3xl ${hoveredJob === i ? "text-rose-400" : "text-zinc-200"}`}>
                      →
                    </span> */}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SCHOOL ── */}
      <section id="school" className="py-10 bg-zinc-50">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-4 border-zinc-900 pb-6">
            <div>
              <span className="bebas text-rose-500 text-xl tracking-widest block mb-2">
                Education
              </span>
              <h2 className="bebas text-6xl sm:text-7xl text-zinc-900 leading-none">
                ACADEMIC
                <br />
                BACKGROUND
              </h2>
            </div>
          </div>

          {/* <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🎓",
                degree: "Bachelor of Design",
                school: "Royal Institute of Design",
                period: "2015–2019",
                badge: "GPA 3.9 / 4.0",
                color: "border-l-8 border-l-rose-500",
              },
              {
                icon: "🏅",
                degree: "UI/UX Bootcamp",
                school: "Interaction Design Foundation",
                period: "2020",
                badge: "Excellence Award",
                color: "border-l-8 border-l-yellow-400",
              },
              {
                icon: "🎬",
                degree: "Motion Design Course",
                school: "School of Motion",
                period: "2021",
                badge: "Advanced Level",
                color: "border-l-8 border-l-zinc-900",
              },
              {
                icon: "📐",
                degree: "Design Systems",
                school: "Figma Academy",
                period: "2022",
                badge: "Professional Cert.",
                color: "border-l-8 border-l-rose-500",
              },
            ].map(({ icon, degree, school, period, badge, color }) => (
              <div
                key={degree}
                className={`bg-white border-brutal shadow-brutal hover-lift flex gap-5 p-7 ${color}`}
              >
                <span className="text-4xl shrink-0 mt-1">{icon}</span>
                <div>
                  <h4 className="bebas text-2xl text-zinc-900 leading-tight">
                    {degree}
                  </h4>
                  <p className="text-rose-500 text-sm font-black uppercase tracking-widest mb-1">
                    {school}
                  </p>
                  <p className="text-zinc-400 text-xs font-bold uppercase mb-4">
                    {period}
                  </p>
                  <span className="inline-block bg-yellow-300 border-2 border-zinc-900 px-4 py-1 text-xs font-black uppercase tracking-widest">
                    {badge}
                  </span>
                </div>
              </div>
            ))}
          </div> */}
          <div className="grid sm:grid-cols-2 gap-6">
            {portfolio?.education?.map((edu) => {
              const period =
                edu.ended_at === "0001-01-01" || !edu.ended_at
                  ? `${edu.started_at} – Present`
                  : `${edu.started_at} – ${edu.ended_at}`;

              const badge = edu.is_completed ? "Completed" : "In Progress";
              const colorClasses = edu.is_completed
                ? "border-l-8 border-l-rose-500"
                : "border-l-8 border-l-yellow-400";

              return (
                <div
                  key={edu.id}
                  className={`relative bg-white border-brutal shadow-brutal hover-lift flex gap-5 p-7 ${colorClasses}`}
                >
                  {/* ✅ EDIT BUTTON (TOP RIGHT) */}
                  <Link
                    to={`/dashboard/education/${edu.id}`}
                    className="absolute top-4 right-4"
                  >
                    <button className="px-3 py-1 text-xs font-bold uppercase bg-zinc-900 text-white rounded-lg hover:bg-zinc-700 transition">
                      Edit
                    </button>
                  </Link>
                  <div className="absolute top-4 right-25">
                    <DeleteEducation educationId={edu.id} />
                  </div>
                  <span className="text-4xl shrink-0 mt-1">🎓</span>

                  <div>
                    <h4 className="bebas text-2xl text-zinc-900 leading-tight">
                      {edu.degree_name}
                    </h4>

                    <p className="text-rose-500 text-sm font-black uppercase tracking-widest mb-1">
                      <a
                        href={edu.institute_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {edu.institute_name}
                      </a>
                    </p>

                    <p className="text-zinc-400 text-xs font-bold uppercase mb-4">
                      {period}
                    </p>

                    <span className="inline-block bg-yellow-300 border-2 border-zinc-900 px-4 py-1 text-xs font-black uppercase tracking-widest">
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
      <section id="skill" className="py-10 bg-zinc-900 text-white">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b-4 border-zinc-600 pb-6">
            <div>
              <span className="bebas text-yellow-300 text-xl tracking-widest block mb-2">
                Skills
              </span>
              <h2 className="bebas text-6xl sm:text-7xl text-white leading-none">
                WHAT I DO
                <br />
                <span className="text-rose-500">BEST</span>
              </h2>
            </div>
          </div>

          <div id="skills" className="grid lg:grid-cols-2 gap-16">
            {/* Skill bars */}
            {/* <div className="space-y-8">
              {[
                { name: "UI Design", pct: 95, tools: "Figma · Adobe XD" },
                { name: "Frontend Dev", pct: 85, tools: "React · Tailwind" },
                { name: "Branding", pct: 80, tools: "Logo · Identity" },
                { name: "Prototyping", pct: 90, tools: "Framer · InVision" },
                { name: "Motion Design", pct: 72, tools: "After Effects" },
              ].map(({ name, pct, tools }) => (
                <div key={name} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <span className="bebas text-2xl text-white group-hover:text-yellow-300 transition-colors">
                        {name}
                      </span>
                      <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                        {tools}
                      </span>
                    </div>
                    <span className="bebas text-2xl text-rose-500">{pct}%</span>
                  </div>
                  <div className="h-4 bg-zinc-800 border-2 border-zinc-600 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-300 to-rose-500 border-r-2 border-zinc-900"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div> */}

            {/* Tool grid — brutalist tiles */}
            {/* <div className="grid grid-cols-3 gap-0 border-brutal overflow-hidden self-start">
              {[
                { label: "Figma", emoji: "🎨" },
                { label: "React", emoji: "⚛️" },
                { label: "Tailwind", emoji: "💨" },
                { label: "Adobe XD", emoji: "✏️" },
                { label: "Framer", emoji: "🖱️" },
                { label: "After FX", emoji: "🎬" },
              ].map(({ label, emoji }, i) => (
                <div
                  key={label}
                  className={`p-6 text-center border-zinc-700 hover:bg-yellow-300 hover:text-zinc-900 transition-all duration-200 cursor-default group
                    ${i % 3 !== 2 ? "border-r-2" : ""}
                    ${i < 3 ? "border-b-2" : ""}
                    bg-zinc-800`}
                >
                  <span className="text-2xl block mb-2">{emoji}</span>
                  <span className="bebas text-sm tracking-widest text-zinc-300 group-hover:text-zinc-900 transition-colors">
                    {label}
                  </span>
                </div>
              ))}
            </div> */}
            <div className="grid grid-cols-3 gap-0 border-brutal overflow-hidden self-start">
              {portfolio?.skills?.map((skill, i) => (
                <div
                  key={skill.id}
                  className={`relative p-6 text-center border-zinc-700 
      hover:bg-yellow-300 hover:text-zinc-900 transition-all duration-200 
      bg-zinc-800
      ${i % 3 !== 2 ? "border-r-2" : ""}
      ${i < 3 ? "border-b-2" : ""}`}
                >
                  {/* ✅ DELETE BUTTON (TOP RIGHT) */}
                  <div className="absolute top-2 right-2">
                    <DeleteSkill skillId={skill.id} />
                  </div>

                  {/* Skill Image */}
                  {skill.logo_url ? (
                    <img
                      src={skill.logo_url}
                      alt={skill.name}
                      className="w-10 h-10 mx-auto mb-2 object-contain"
                    />
                  ) : (
                    <span className="text-2xl block mb-2">💻</span>
                  )}

                  {/* Skill Name */}
                  <span className="bebas text-sm tracking-widest text-zinc-300 group-hover:text-zinc-900 transition-colors">
                    {skill.name}
                  </span>

                  {/* ✅ EDIT BUTTON */}
                  <div className="mt-3">
                    <NavLink to={`/dashboard/skill/${skill.id}`} className="inline-flex">
                      <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-widest border-2 border-zinc-900 bg-yellow-300 text-zinc-900 hover:bg-zinc-900 hover:text-yellow-300 transition-all duration-200">
                        <FiEdit2 size={14} />
                        Edit
                      </button>
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
            {/* toolbar */}
            <div className="space-y-8">
              {portfolio?.skills?.map((skill) => (
                <div key={skill.id} className="group">

                  {/* ================= HEADER ================= */}
                  <div className="flex justify-between items-center mb-3">

                    {/* Left — Skill Name + Tool Info */}
                    <div className="flex items-center gap-3">

                      {/* Skill Name */}
                      <span className="bebas text-2xl text-white group-hover:text-yellow-300 transition-colors">
                        {skill.name}
                      </span>

                      {/* Tools / Extra Info (If You Store It) */}
                      <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                        {skill.tools || "Skill"}
                      </span>

                    </div>

                    {/* Percentage */}
                    <span className="bebas text-2xl text-rose-500">
                      {skill.proficiency || 0}%
                    </span>

                  </div>

                  {/* ================= PROGRESS BAR ================= */}
                  <div className="h-4 bg-zinc-800 border-2 border-zinc-600 overflow-hidden rounded-md">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-300 to-rose-500 border-r-2 border-zinc-900 transition-all duration-500"
                      style={{ width: `${skill.proficiency || 0}%` }}
                    />
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="socail-account" className="py-10 bg-zinc-50">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side */}
            <div>
              <span className="bebas text-rose-500 text-xl tracking-widest block mb-4">
                Contact
              </span>
              <h2 className="bebas text-6xl sm:text-7xl lg:text-8xl leading-none text-zinc-900 mb-8">
                LET'S
                <br />
                <span className="text-rose-500">BUILD</span>
                <br />
                TOGETHER
              </h2>
              <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-sm">
                Have a project in mind? I'd love to hear about it. Drop me a
                message and let's make something unforgettable.
              </p>

              <div className="space-y-4 max-sm:relative ">
                {portfolio?.social_accounts?.slice(1, 3).map((account) => (
                  <div
                    key={account.id}
                    className="flex items-center gap-4 border-b-2 border-zinc-200 pb-4 relative"
                  >
                    {account.image_url && (
                      <img
                        src={account.image_url}
                        alt={account.name}
                        className="w-6 h-6 object-cover rounded"
                      />
                    )}

                    <span className="bebas underline text-rose-500 text-sm tracking-widest w-20">
                      {/* {account.name} */}
                      <a href={account.url} target="_blank" rel="noopener noreferrer">
                        {account.name}
                      </a>
                    </span>

                    {/* <a
                      href={account.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 text-sm font-bold hover:underline"
                    >
                      {account.url.replace(/^https?:\/\//, "")}
                    </a> */}

                    {/*  EDIT BUTTON */}
                    <a href={`/dashboard/social/${account.id}`} className="sm:ml-auto max-sm:-top-6 max-sm:-right-5 max-sm:absolute max-sm:mr-10">
                      <button className="px-3 py-1 text-xs font-bold uppercase tracking-widest border-2 border-zinc-900 bg-yellow-300 text-zinc-900 hover:bg-zinc-900 hover:text-yellow-300 transition-all duration-200 rounded">
                        Edit
                      </button>
                    </a>
                    <DeleteSocialAccount socialId={account.id} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Form */}
            <div id="contact" className="">  <h2 className="bebas text-6xl sm:text-7xl lg:text-8xl leading-none text-zinc-900 mb-8">

              <span className="text-zinc-900">Contact</span>

            </h2>  <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* ── FOOTER ── */}
      < footer className="bg-zinc-900 border-t-4 border-zinc-700 py-8" >
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="bebas text-2xl text-yellow-300 tracking-widest">
            SOK<span className="text-rose-500">*</span>
          </span>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            © 2026 Sok Designer — All rights reserved
          </p>
          <button
            onClick={() => scrollTo("home")}
            className="text-zinc-500 hover:text-yellow-300 text-xs font-black uppercase tracking-widest transition-colors"
          >
            ↑ Top
          </button>
        </div>
      </ footer>
    </div >
  );
}
