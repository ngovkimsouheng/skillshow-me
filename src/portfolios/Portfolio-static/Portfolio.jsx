import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* ================= NAVBAR ================= */}
      <header className="bg-white sticky top-0 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="font-bold text-lg">Alex.Design</h1>

          <div className="hidden md:flex gap-8 items-center text-sm">
            <a href="#" className="hover:text-blue-600">
              Work
            </a>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
            <a href="#" className="hover:text-blue-600">
              Resume
            </a>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Let’s talk
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            Available for new opportunities
          </span>

          <h2 className="text-5xl font-bold mt-6 leading-tight">
            Product Designer <br /> & Developer.
          </h2>

          <p className="text-gray-600 mt-6 max-w-md">
            I craft digital experiences that blend aesthetic simplicity with
            robust functionality. Currently building the future at Acme Corp.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              View My Work
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYj7SCuBSy4zPPm4XCKyeM9ITgCHLEC55L_g&s"
            alt="Profile"
            className="rounded-2xl w-100 shadow-lg object-cover"
          />
        </div>
      </section>

      {/* ================= WHAT I DO ================= */}
      <section className=" bg-white">
        <div className="max-w-6xl mx-auto px-6 ">
          <h3 className="text-3xl text-center font-bold">What I do</h3>
          <p className="text-gray-500 mt-4 max-w-xl text-center mx-auto">
            Specialized in building digital products from 0 to 1, bridging the
            gap between design and engineering.
          </p>

          <div className="grid md:grid-cols-3 mt-10 gap-8">
            {/* <!-- Card 1 --> */}
            <div className="bg-blue-50 p-8 rounded-2xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-palette text-white text-xl"></i>
              </div>
              <h3 className="text-xl text-blue-600 font-bold mb-3">
                UI/UX Design
              </h3>
              <p className="text-gray-600 mb-4">
                Creating intuitive and engaging user interfaces with a focus on
                user experience and modern design principles.
              </p>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="bg-blue-50 p-8 rounded-2xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fa-solid text-white fa-desktop"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Building responsive and performant websites using modern
                technologies and best practices.
              </p>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="bg-blue-50 p-8 rounded-2xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fa-regular text-white fa-lightbulb"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Product Design</h3>
              <p className="text-gray-600 mb-4">
                Developing native and cross-platform mobile applications with
                seamless user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold">Some of my projects</h3>
        <p className="text-gray-500 mt-3 max-w-xl">
          A collection of recent product design and frontend development work.
        </p>

        <div className="grid md:grid-cols-2 mt-10 gap-8 mb-12">
          {/* <!-- Project Card 1 --> */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="flex justify-center items-center w-full h-64">
              <img
                src="https://assets.justinmind.com/wp-content/uploads/2020/02/dashboard-design-example-hcare.png"
                className="rounded-lg w-full h-64 object-cover"
                alt="Dashboard"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Fintech Analytics Platform
              </h3>
              <p className="text-gray-600 mb-4">
                A complete redesign of a complex financial dashboard focusing on
                data clarity and user engagement.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Product Design
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  User Research
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Figma
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Project Card 2 --> */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="flex justify-center items-center w-full h-64">
              <img
                src="https://cdn.dribbble.com/userupload/45457033/file/bbac31748272e18b4795dbb18492b56e.png?resize=752x&vertical=center"
                className="w-full h-64 object-cover"
                alt="Dashboard"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Luxe Commerce App</h3>
              <p className="text-gray-600 mb-4">
                Mobile shopping experience for a luxury brand, increasing mobile
                conversion rate by 34%.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  UX Design
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Prototyping
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  iOS
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* <!-- Project Card 3 --> */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="flex justify-center items-center h-64 w-full">
              <img
                src="https://www.charlicheung.com/images/design%20system%20cover%20image.png"
                className="rounded-lg w-full h-64 object-cover"
                alt="Design System"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Acme Design System</h3>
              <p className="text-gray-600 mb-4">
                Scalable component library built from scratch, serving 5
                different product teams.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Design System
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Storybook
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Project Card 4 --> */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="flex justify-center items-center h-64 w-full">
              <img
                src="https://framerusercontent.com/images/h8rxuFv5Popq0ufVEQpFBzV7ycg.png?width=3249&height=2112"
                className="rounded-lg w-full h-64 object-cover"
                alt="Mobile App"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">AI Content Generator</h3>
              <p className="text-gray-600 mb-4">
                Web application interface for an AI-powered writing assistant,
                optimizing workflow speed.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  UI Design
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Frontend Dev
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Vue.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className=" bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center">Experience</h3>
          <p className="text-gray-500 text-center mt-3 mb-15">
            My professional journey over the last 6+ years.
          </p>

          {/* <!-- Timeline --> */}
          <div className="space-y-12">
            {/* <!-- Item --> */}
            <div className="grid grid-cols-12 gap-6">
              {/* <!-- Date --> */}
              <div className="col-span-3 text-gray-400 text-sm">
                2021 — Present
              </div>

              {/* <!-- Content --> */}
              <div className="col-span-9 border-b pb-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Senior Product Designer
                    </h3>
                    <p className="text-gray-500 mt-1">Acme Corp</p>
                  </div>

                  <span className="text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
                    Full-time
                  </span>
                </div>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  Leading the design of the core analytics platform. Established
                  the company's first design system, adopted by 4 engineering
                  teams. Mentoring junior designers and collaborating closely
                  with product management to define roadmap features.
                </p>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-3 text-gray-400 text-sm">
                2018 — 2021
              </div>

              <div className="col-span-9 border-b pb-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">UX/UI Designer</h3>
                    <p className="text-gray-500 mt-1">Nexus Digital Agency</p>
                  </div>

                  <span className="text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
                    Full-time
                  </span>
                </div>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  Delivered end-to-end design solutions for various clients
                  ranging from early-stage startups to Fortune 500 companies.
                  Conducted extensive user research, wireframing, and
                  interactive prototyping.
                </p>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-3 text-gray-400 text-sm">
                2016 — 2018
              </div>

              <div className="col-span-9">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Frontend Developer
                    </h3>
                    <p className="text-gray-500 mt-1">TechFlow</p>
                  </div>

                  <span className="text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
                    Full-time
                  </span>
                </div>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  Developed responsive web applications using React and Vue.
                  Worked closely with the design team to implement complex
                  interactive features and ensure technical feasibility before
                  handoff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Me Section --> */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-100 rounded-xl border border-gray-300 p-12">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* <!-- Left Content --> */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">About Me</h2>

                <p className="text-gray-600 leading-relaxed mb-6">
                  With over 6 years of experience in product design, I bridge
                  the gap between business goals and user needs. My approach is
                  rooted in empathy, research, and clean aesthetics.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  When I'm not pushing pixels, you can find me exploring new
                  coffee shops, reading sci-fi novels, or experimenting with
                  analog photography.
                </p>
              </div>

              {/* <!-- Right Skills --> */}
              <div className="grid grid-cols-2 gap-6 mt-20">
                {/* <!-- Skill Item --> */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md">
                    {/* <!-- Icon --> */}
                    <i className="fa-solid fa-palette"></i>
                  </div>
                  <span className="text-sm font-bold text-gray-700">
                    UI/UX Design
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md">
                    <i className="fa-regular fa-lightbulb"></i>
                  </div>
                  <span className="text-sm font-bold text-gray-700">
                    Product Design
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md">
                    <i className="fa-solid fa-desktop"></i>
                  </div>
                  <span className="text-sm font-bold text-gray-700">
                    Frontend Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">
        <h3 className="text-4xl font-bold">Have an idea? Let’s build it.</h3>

        <p className="text-gray-500 mt-6 max-w-xl mx-auto">
          I'm currently available for freelance projects and open to full-time
          opportunities. Feel free to reach out if you want to collaborate.
        </p>

        <button className="bg-blue-600 text-white px-8 py-4 mt-8 rounded-md hover:bg-blue-700">
          hello@alex.design
        </button>
      </section>

      {/* <!-- Footer --> */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-400">
                © 2026 Portfolio. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
