import {
  ArrowRight,
  Mail,
  PenTool,
  Layers,
  Globe
} from "lucide-react";

const projects = [
  {
    title: "Nexus Dashboard",
    category: ["Product Design", "SaaS"],
    image:
      "https://storage.googleapis.com/banani-generated-images/generated-images/dd4bcf91-1407-4ecb-9031-1103b4b90739.jpg",
    description:
      "A financial analytics dashboard designed for enterprise teams.",
  },
  {
    title: "Orbit Mobile App",
    category: ["Mobile Design", "Fintech"],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    description:
      "A modern mobile banking app focused on speed and simplicity.",
  },
  {
    title: "Nova Landing Page",
    category: ["Web Design", "Startup"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description:
      "High-converting SaaS landing page optimized for growth.",
  },
  {
    title: "Pulse Analytics",
    category: ["Data Visualization", "Dashboard"],
    image:
      "https://images.unsplash.com/photo-1551281044-8bcb6f1e7f0d",
    description:
      "A real-time analytics platform for monitoring business performance.",
  },
];

export default function Portfolio4() {
  return (
    <div className="bg-[#f7f8fa] text-[#0f1724] font-[Inter]">

      {/* NAVBAR */}
      <header className="sticky top-0 bg-[#f7f8fa] z-50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-6 flex justify-between items-center">

          <div className="text-[20px] font-extrabold tracking-tight cursor-pointer">
            ALEX.
          </div>

          <nav className="hidden md:flex items-center  gap-8 text-[15px] text-[#6b7280]">
            <button className="hover:text-blue-500">Work</button>
            <button className="hover:text-blue-500">Services</button>
            <button className="hover:text-blue-500">About</button>
          </nav>

          <button className="bg-[#0b6efd] text-white px-5 py-2 rounded-md text-sm font-semibold">
            Let's talk
          </button>

        </div>
      </header>


      {/* HERO */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">

          <div className="flex items-center gap-6 mb-10">

            <div className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-full overflow-hidden bg-gray-200">
              <img
                src="https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F25-35%2FEuropean%2F2"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-2 border border-black/10 rounded-xl px-4 py-2 text-sm font-semibold">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Available for new opportunities
            </div>

          </div>

          <h1 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-extrabold tracking-tight leading-[1.05] mb-8">
            Designing digital experiences that matter.
          </h1>

          <p className="text-lg md:text-2xl text-[#6b7280] max-w-[700px] mb-12 leading-relaxed">
            I'm a product designer focusing on interaction design, visual
            identity, and design systems for forward-thinking brands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <button className="flex items-center gap-2 bg-[#0b6efd] text-white px-7 py-4 rounded-md font-semibold">
              View my work
              <ArrowRight size={20} />
            </button>

            <button className="bg-[#f1f5f9] px-7 py-4 rounded-md font-semibold">
              About me
            </button>

          </div>

        </div>
      </section>


      {/* PROJECTS */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">

          <div className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-black/10 pb-10 mb-16 gap-6">

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Selected Work
            </h2>

            <p className="text-lg text-[#6b7280] max-w-[400px] md:text-right">
              A curated selection of my recent projects, case studies, and
              design explorations.
            </p>

          </div>


          {/* PROJECT ITEM */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32">

            <div className="rounded-lg overflow-hidden border border-black/10">
              <img
                src="https://storage.googleapis.com/banani-generated-images/generated-images/dd4bcf91-1407-4ecb-9031-1103b4b90739.jpg"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div>
              <div className="flex gap-4 text-xs uppercase tracking-widest text-[#6b7280] font-bold mb-3">
                <span>Product Design</span>
                <span>SaaS</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
                Nexus Dashboard
              </h3>

              <p className="text-lg text-[#6b7280] mb-8 leading-relaxed">
                A comprehensive financial analytics dashboard designed for
                enterprise teams. It streamlines complex workflows into
                intuitive visual experiences.
              </p>

              <button className="flex items-center gap-2 border-b border-black font-semibold pb-1">
                View case study
                <ArrowRight size={16} />
              </button>

            </div>

          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32">

            <div className="rounded-lg overflow-hidden border border-black/10">
              <img
                src="https://storage.googleapis.com/banani-generated-images/generated-images/c997eea6-adb4-4304-ac63-0992263a3c11.jpg"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div>
              <div className="flex gap-4 text-xs uppercase tracking-widest text-[#6b7280] font-bold mb-3">
                <span>Product Design</span>
                <span>SaaS</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
                FinTech Dashboard
              </h3>

              <p className="text-lg text-[#6b7280] mb-8 leading-relaxed">
                A complete redesign of a financial analytics platform, improving user engagement by 40%.
              </p>

              <button className="flex items-center gap-2 border-b border-black font-semibold pb-1">
                View case study
                <ArrowRight size={16} />
              </button>

            </div>

          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32">

            <div className="rounded-lg overflow-hidden border border-black/10">
              <img
                src="https://storage.googleapis.com/banani-generated-images/generated-images/19a96ef6-6b58-47de-aa7b-eb641b934e04.jpg"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div>
              <div className="flex gap-4 text-xs uppercase tracking-widest text-[#6b7280] font-bold mb-3">
                <span>Product Design</span>
                <span>SaaS</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
                Lumina E-Commerce
              </h3>

              <p className="text-lg text-[#6b7280] mb-8 leading-relaxed">
                A seamless shopping experience for a luxury lifestyle brand, optimized for mobile conversion.
              </p>

              <button className="flex items-center gap-2 border-b border-black font-semibold pb-1">
                View case study
                <ArrowRight size={16} />
              </button>

            </div>

          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32">

            <div className="rounded-lg overflow-hidden border border-black/10">
              <img
                src="https://storage.googleapis.com/banani-generated-images/generated-images/e8d879d2-fd1c-4e78-8bbf-aa8a23621ad0.jpg"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div>
              <div className="flex gap-4 text-xs uppercase tracking-widest text-[#6b7280] font-bold mb-3">
                <span>Product Design</span>
                <span>SaaS</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
                Nexus Creative Agency
              </h3>

              <p className="text-lg text-[#6b7280] mb-8 leading-relaxed">
                A bold and interactive portfolio website designed to showcase high-end creative work.
              </p>

              <button className="flex items-center gap-2 border-b border-black font-semibold pb-1">
                View case study
                <ArrowRight size={16} />
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* SKILLS */}
      <section className="bg-[#f1f5f9] py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-16">

          <div className="md:col-span-1">
            <h2 className="text-4xl font-extrabold mb-6">My Expertise</h2>

            <p className="text-lg text-[#6b7280] max-w-[320px]">
              A multi-disciplinary approach to solving complex problems and
              creating memorable digital experiences.
            </p>
          </div>


          <div className="md:col-span-2 space-y-14">

            {/* SKILL */}
            <div className="flex gap-6 border-b border-black/10 pb-10">

              <div className="w-16 h-16 flex items-center justify-center border rounded-md bg-white">
                <PenTool size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold mb-2">
                  Product Design
                </h3>

                <p className="text-lg text-[#6b7280]">
                  I design intuitive user-centric interfaces that solve real
                  business problems and delight users.
                </p>
              </div>

            </div>


            <div className="flex gap-6 border-b border-black/10 pb-10">

              <div className="w-16 h-16 flex items-center justify-center border rounded-md bg-white">
                <Layers size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold mb-2">
                  Design Systems
                </h3>

                <p className="text-lg text-[#6b7280]">
                  I build scalable design systems ensuring visual consistency
                  and faster development.
                </p>
              </div>

            </div>


            <div className="flex gap-6">

              <div className="w-16 h-16 flex items-center justify-center border rounded-md bg-white">
                <Globe size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold mb-2">
                  Web Development
                </h3>

                <p className="text-lg text-[#6b7280]">
                  I implement designs using modern frontend technologies with
                  performance and clean code in mind.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* CONTACT / FOOTER */}
      <section className="bg-[#0f1724] text-white py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">

          <h2 className="text-[40px] md:text-[64px] font-extrabold leading-tight mb-8">
            Let's build something great together.
          </h2>

          <p className="text-xl opacity-70 max-w-[600px] mx-auto mb-12">
            I'm currently available for freelance projects and open to exploring
            new full-time opportunities.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24">

            <button className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-md font-semibold">
              Send an email
              <Mail size={18} />
            </button>

            <button className="border border-white px-8 py-4 rounded-md font-semibold">
              Copy email
            </button>

          </div>


          {/* FOOTER */}
          <div className="border-t border-white/30 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

            <div className="text-left">
              <div className="text-xl font-extrabold">ALEX.</div>
              <div className="text-sm opacity-60">
                © 2025 Alex. All rights reserved.
              </div>
            </div>

            <div className="flex gap-6 text-sm">
              <button>Twitter</button>
              <button>LinkedIn</button>
              <button>Dribbble</button>
              <button>Instagram</button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}