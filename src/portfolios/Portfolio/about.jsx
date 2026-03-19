   <section id="about" className="py-24 bg-zinc-900 text-zinc-50">
        <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-yellow-300" />
                <span className="bebas text-yellow-300 text-xl tracking-widest">
                  About Me
                </span>
              </div>
              <h2 className="bebas text-6xl sm:text-7xl lg:text-8xl leading-none mb-8 text-white">
                DESIGN
                <br />
                IS MY
                <br />
                <span className="text-rose-500 max-sm:text-[40px] sm:text-[80px]">LANGUAGE</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6 text-base">
                I specialize in designing modern web and mobile interfaces. I
                believe good design is simple, purposeful, and impactful —
                serving the user while expressing the brand's identity.
              </p>
              {/* <p className="text-zinc-400 leading-relaxed mb-8 text-base">
                6+ years across agencies and startups. I bring strategic
                thinking to every project — from rough sketches to polished,
                shipped products.
              </p> */}
              {/* <div key={project.id} className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-zinc-800 border-2 border-zinc-600 text-yellow-300 text-xs font-bold uppercase tracking-widest hover:bg-yellow-300 hover:text-zinc-900 hover:border-zinc-900 transition-all cursor-default">
                  {portfolio?.project?.technologies}
                </span>
              </div> */}
              {/* {portfolio?.projects?.map((project) => (
                <div key={project.id} className="flex flex-wrap gap-3">
                  {Object.keys(project.technologies[0] || {}).map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-zinc-800 border-2 border-zinc-600 text-yellow-300 text-xs font-bold uppercase tracking-widest hover:bg-yellow-300 hover:text-zinc-900 hover:border-zinc-900 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ))} */}
              <div className="flex flex-wrap gap-3">
                {Object.keys(project0?.technologies || {}).map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-zinc-800 border-2 border-zinc-600 text-yellow-300 text-xs font-bold uppercase tracking-widest hover:bg-yellow-300 hover:text-zinc-900 hover:border-zinc-900 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature boxes — staggered */}
            <div className="grid  lg:grid-cols-2 sm:gap-4">
              {[
                {
                  icon: "🎨",
                  title: "Visual Design",
                  desc: "Pixel-perfect interfaces that truly delight",
                  accent: "bg-yellow-300 border-brutal shadow-brutal",
                },
                {
                  icon: "📱",
                  title: "Mobile First",
                  desc: "Seamless on every screen, always",
                  accent:
                    "bg-white border-brutal shadow-brutal-coral text-zinc-900",
                },
                {
                  icon: "⚡",
                  title: "Fast Delivery",
                  desc: "Quality work, never compromised",
                  accent: "bg-rose-500 border-brutal shadow-brutal text-white",
                },
                {
                  icon: "🤝",
                  title: "Collaboration",
                  desc: "Devs, PMs, and stakeholders love working with me",
                  accent: "bg-zinc-800 border-2 border-zinc-600 text-zinc-100",
                },
              ].map(({ icon, title, desc, accent }, i) => (
                <div
                  key={title}
                  className={`${accent} max-sm:p-4  sm:p-6 transition-all duration-200 hover-lift `}
                >
                  <span className="text-3xl mb-4 block">{icon}</span>
                  <h4 className="font-black text-sm uppercase tracking-wide mb-1">
                    {title}
                  </h4>
                  <p className="text-xs leading-relaxed opacity-70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>