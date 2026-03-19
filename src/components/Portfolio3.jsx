import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Twitter,
  Linkedin,
  Github,
  Dribbble,
  Box,
} from "lucide-react";

/* ---------------- DATA ---------------- */

const navLinks = ["Work", "About", "Services"];

const socialIcons = [
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Dribbble, label: "Dribbble" },
  { icon: Github, label: "GitHub" },
];

const skills = [
  "UI/UX Design",
  "Prototyping",
  "Design Systems",
  "User Research",
  "Webflow",
  "Figma",
];

const projects = [
  {
    title: "FinTech Dashboard",
    desc: "A complete redesign of a financial analytics platform, improving user engagement by 40%.",
    tags: ["Product Design", "Design System", "FinTech"],
    img: "https://storage.googleapis.com/banani-generated-images/generated-images/c997eea6-adb4-4304-ac63-0992263a3c11.jpg",
  },
  {
    title: "Lumina E-Commerce",
    desc: "A seamless shopping experience for a luxury lifestyle brand, optimized for mobile conversion.",
    tags: ["UX/UI", "Mobile App", "E-Commerce"],
    img: "https://storage.googleapis.com/banani-generated-images/generated-images/19a96ef6-6b58-47de-aa7b-eb641b934e04.jpg",
  },
  {
    title: "Nexus Creative Agency",
    desc: "A bold and interactive portfolio website designed to showcase high-end creative work.",
    tags: ["Web Design", "Development", "Agency"],
    img: "https://storage.googleapis.com/banani-generated-images/generated-images/e8d879d2-fd1c-4e78-8bbf-aa8a23621ad0.jpg",
  },
  {
    title: "HealthSync Portal",
    desc: "An intuitive patient portal that simplifies appointment booking and medical records management.",
    tags: ["UX Research", "Product Design", "Healthcare"],
    img: "https://storage.googleapis.com/banani-generated-images/generated-images/41e1ee43-ab03-4a07-9202-0c16d781d5e3.jpg",
  },
];

/* ---------------- COMPONENTS ---------------- */

function Container({ children }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12">
      {children}
    </div>
  );
}

function Button({ children, primary }) {
  return (
    <button
      className={`flex items-center justify-center gap-3 px-8 py-4 rounded-[6px] text-[16px] font-medium transition-colors
      ${
        primary
          ? "bg-[#0b76ff] text-white hover:bg-[#0960d4]"
          : "bg-[#f1f5f9] text-[#334155] hover:bg-[#e2e8f0]"
      }`}
    >
      {children}
    </button>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col gap-6 cursor-pointer group">
      <div className="rounded-[8px] overflow-hidden border border-black/[0.08]">
        <img
          src={project.img}
          alt={project.title}
          className="aspect-video object-cover w-full group-hover:scale-[1.02] transition"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h3 className="text-[22px] font-semibold">{project.title}</h3>

          <div className="w-10 h-10 rounded-full border border-black/[0.08] flex items-center justify-center group-hover:bg-[#0b76ff] group-hover:text-white transition">
            <ArrowUpRight size={20} />
          </div>
        </div>

        <p className="text-[#9ca3af]">{project.desc}</p>

        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#f1f5f9] text-[#334155] text-[14px] px-4 py-1.5 rounded-xl"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- MAIN PAGE ---------------- */

export default function Portfolio3() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0f172a] font-[Inter]">
      {/* NAVBAR */}
      <Container>
        <header className="flex items-center justify-between py-8">
          <div className="flex items-center gap-2 font-bold text-[20px]">
            <div className="w-6 h-6 bg-[#0b76ff] text-white rounded flex items-center justify-center">
              <Box size={16} />
            </div>
            Jack
          </div>

          <nav className="hidden sm:flex items-center gap-10">
            {navLinks.map((link) => (
              <span
                key={link}
                className="text-[#9ca3af] hover:text-black cursor-pointer"
              >
                {link}
              </span>
            ))}

            <Button primary>Let's Talk</Button>
          </nav>

          <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </header>
      </Container>

      {/* HERO */}
      <Container>
        <section className="pt-20 sm:pt-28 md:pt-[140px] pb-16 md:pb-[100px] max-w-[860px] flex flex-col gap-6 md:gap-8">
          <div className="inline-flex items-center gap-2 bg-[#f1f5f9] px-4 py-2 rounded-xl text-[13px] sm:text-[14px]">
            <span className="w-2 h-2 bg-[#12b76a] rounded-full" />
            Available for new opportunities
          </div>

          <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-[1.1]">
            Designing digital experiences that matter.
          </h1>

          <p className="text-[16px] sm:text-[18px] md:text-[22px] text-[#9ca3af] max-w-[680px] leading-[1.6]">
            I'm a multidisciplinary product designer specializing in UI/UX,
            design systems and web development for modern startups.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
            <Button primary>
              View Projects
              <ArrowRight size={20} />
            </Button>

            <Button>About Me</Button>
          </div>
        </section>
      </Container>

      {/* PROJECTS */}
      <section className="py-20">
        <Container>
          <div className="mb-16">
            <h2 className="text-[40px] font-semibold">Selected Work</h2>
            <p className="text-[#9ca3af] mt-3">
              A collection of my recent projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <Container>
        <footer className="flex flex-col items-center text-center gap-8 py-20">
          <h2 className="text-[48px] font-semibold">
            Let's build something great together.
          </h2>

          <Button primary>hello@jack.design</Button>

          <div className="flex gap-6 mt-4">
            {socialIcons.map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="w-14 h-14 rounded-full bg-[#f1f5f9] flex items-center justify-center hover:bg-[#0b76ff] hover:text-white transition"
              >
                <Icon size={22} />
              </button>
            ))}
          </div>

          <div className="border-t border-black/10 pt-8 mt-16 w-full text-[#9ca3af] text-[14px] flex justify-between">
            <span>© 2025 Studio Design</span>
            <span>Designed with precision.</span>
          </div>
        </footer>
      </Container>
    </div>
  );
}
