import { useState } from "react";

const NAV_LINKS = ["Home", "Projects", "About", "Contact"];

const PROJECTS = [
  {
    title: "Fintech Dashboard",
    description:
      "A comprehensive financial dashboard helping users track their investments and daily expenses with clear data visualization.",
    tags: ["UX Design", "Web App"],
    image:
      "https://storage.googleapis.com/banani-generated-images/generated-images/82f55b7a-b821-44b8-a65e-25aed0e85e27.jpg",
    alt: "Fintech Dashboard",
  },
  {
    title: "Botanical Shop App",
    description:
      "Mobile commerce experience for a premium plant shop, focusing on seamless checkout and plant care guides.",
    tags: ["Mobile UI", "E-commerce"],
    image:
      "https://storage.googleapis.com/banani-generated-images/generated-images/ebbc624c-dc1a-4d51-b665-5132cdfccee5.jpg",
    alt: "Botanical Shop App",
  },
  {
    title: "Lumina Brand Identity",
    description:
      "Complete brand overhaul for an AI startup, including logo design, color palette, and marketing website.",
    tags: ["Branding", "Web Design"],
    image:
      "https://storage.googleapis.com/banani-generated-images/generated-images/3ac8ef23-949d-427a-bd27-05ac294b75af.jpg",
    alt: "Lumina Brand Identity",
  },
  {
    title: "TaskFlow Landing Page",
    description:
      "High-converting landing page design for a project management tool aimed at remote creative teams.",
    tags: ["Landing Page", "SaaS"],
    image:
      "https://storage.googleapis.com/banani-generated-images/generated-images/348f24bd-df2e-4cc1-a26e-52a063d28bb4.jpg",
    alt: "TaskFlow Landing Page",
  },
];

const SKILLS = [
  "UI Design",
  "UX Research",
  "Prototyping",
  "Figma",
  "Design Systems",
  "HTML/CSS",
  "Wireframing",
  "Interaction Design",
];

const SOCIALS = [
  {
    label: "Twitter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: "Mail",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-xl bg-slate-100 text-slate-600 text-[13px] font-medium">
      {children}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col border border-black/[0.08] rounded-lg overflow-hidden bg-white cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      <div className="w-full aspect-[16/10] bg-slate-100 overflow-hidden">
        <img
          src={project.image}
          alt={project.alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[20px] font-semibold mb-2 text-slate-900">
          {project.title}
        </h3>
        <p className="text-[15px] text-slate-400 mb-6 flex-1 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio2() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen w-full bg-white text-slate-900"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Container */}
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Navbar ── */}
        <nav className="flex items-center justify-between py-6 mb-10 md:mb-16">
          {/* Logo */}
          <div className="text-[20px] font-bold tracking-tight select-none">
            Jane Doe.
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden sm:flex gap-6 md:gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => setActiveNav(link)}
                className={`text-[15px] font-medium transition-colors cursor-pointer bg-transparent border-none outline-none ${
                  activeNav === link
                    ? "text-slate-900"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="sm:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none outline-none p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[2px] bg-slate-900 rounded transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block w-5 h-[2px] bg-slate-900 rounded transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-[2px] bg-slate-900 rounded transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </nav>

        {/* Mobile Drawer */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col gap-4 pb-6 border-b border-black/[0.08] mb-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActiveNav(link);
                  setMenuOpen(false);
                }}
                className={`text-left text-[16px] font-medium transition-colors bg-transparent border-none outline-none cursor-pointer ${
                  activeNav === link
                    ? "text-slate-900"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        )}

        {/* ── Hero ── */}
        <header className="flex flex-col items-center text-center py-10 sm:py-14 md:py-16 pb-16 sm:pb-24 md:pb-32">
          <img
            src="https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FEuropean%2F2"
            alt="Jane Doe"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-[120px] md:h-[120px] rounded-full object-cover mb-6 md:mb-8 border-4 border-black/[0.08]"
          />
          <h1 className="text-[36px] sm:text-[44px] md:text-[56px] font-extrabold leading-[1.1] tracking-[-1.5px] mb-5 md:mb-6 max-w-[340px] sm:max-w-[560px] md:max-w-[800px]">
            Product Designer creating intuitive digital experiences.
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-slate-400 mb-10 md:mb-12 max-w-[280px] sm:max-w-[440px] md:max-w-[600px] leading-relaxed">
            I specialize in UX/UI design, design systems, and building products
            that users love. Currently based in San Francisco.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md text-[15px] font-medium bg-[#0ea5a4] text-white cursor-pointer border-none hover:bg-[#0c9393] transition-colors">
              View Projects
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md text-[15px] font-medium bg-transparent text-slate-900 border border-black/[0.08] cursor-pointer hover:bg-slate-50 transition-colors">
              Get in touch
            </button>
          </div>
        </header>

        {/* ── Projects ── */}
        <section className="py-12 md:py-16">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold mb-8 md:mb-12 text-center text-slate-900">
            Selected Work
          </h2>
          {/* Responsive Grid: 1 col → 2 cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* ── About ── */}
        <section className="py-16 md:py-24 flex flex-col items-center text-center">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold mb-6 md:mb-8 text-slate-900">
            About Me
          </h2>
          <p className="text-[16px] sm:text-[17px] md:text-[18px] text-slate-400 max-w-[280px] sm:max-w-[480px] md:max-w-[640px] mb-10 md:mb-12 leading-[1.8]">
            With over 5 years of experience in product design, I bridge the gap
            between user needs and business goals. I believe in clean
            aesthetics, accessible interfaces, and design systems that scale.
            When I'm not pushing pixels, you can find me hiking or learning
            about architectural history.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-[300px] sm:max-w-[520px] md:max-w-[700px]">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-[20px] bg-slate-100 text-slate-500 text-[13px] sm:text-[14px] font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-black/[0.08] py-10 md:py-12 mt-8 md:mt-16">
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 sm:gap-0">
            <p className="text-[13px] sm:text-[14px] text-slate-400 text-center sm:text-left">
              © 2025 Jane Doe. All rights reserved.
            </p>
            <div className="flex gap-5 sm:gap-6">
              {SOCIALS.map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="text-slate-400 hover:text-slate-700 transition-colors cursor-pointer bg-transparent border-none outline-none p-0"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}