import aboutImage from "../assets/images/about.png";

function About() {
  return (
    <section
      id="about"
      className="py-32 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[8px] text-violet-400 mb-4">
          About Me
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-12">
          Get to Know Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <div
            className="
              h-[580px]
              bg-white/5
              backdrop-blur-xl
              border
              border-violet-500/20
              rounded-3xl
              shadow-[0_0_35px_rgba(168,85,247,.15)]
              hover:shadow-[0_0_60px_rgba(168,85,247,.35)]
              transition-all
              duration-500
              overflow-hidden
              flex
              items-center
              justify-center
              p-6
            "
          >
            <img
              src={aboutImage}
              alt="About Ariba"
              className="
                w-full
                h-full
                object-contain
                transition-all
                duration-500
                hover:scale-105
              "
            />
          </div>

          {/* RIGHT */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Hi, I'm <span className="text-violet-400">Ariba</span>
            </h3>

            <p className="text-zinc-400 leading-8 mb-6">
              I am a Computer Science & Engineering student at
              International Islamic University Chittagong (IIUC)
              with a strong passion for research, software development,
              UI/UX design, and modern web technologies.
            </p>

            <p className="text-zinc-400 leading-8 mb-10">
              I enjoy building responsive web applications,
              solving real-world problems, and continuously
              learning new technologies. Recently, I developed
              a Disaster Relief & Resource Management System
              using PHP, MySQL, HTML, CSS & JavaScript. I also built
              desktop applications including an Airline
              Reservation System, Hotel Management System,
              and Library Management System.
            </p>

            {/* STATS */}

            <div className="grid grid-cols-2 gap-8 mt-12">

              {/* Technologies */}

              <div
                className="
                  min-h-[120px]
                  bg-white/5
                  border
                  border-violet-500/20
                  rounded-2xl
                  p-6
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  hover:border-violet-400
                  transition-all
                  duration-300
                "
              >
                <h4 className="text-4xl font-bold text-violet-400 leading-none">
                  10+
                </h4>

                <p className="text-zinc-400 mt-4">
                  Technologies
                </p>
              </div>

              {/* Projects */}

              <div
                className="
                  min-h-[120px]
                  bg-white/5
                  border
                  border-violet-500/20
                  rounded-2xl
                  p-6
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  hover:border-violet-400
                  transition-all
                  duration-300
                "
              >
                <h4 className="text-4xl font-bold text-violet-400 leading-none">
                  5+
                </h4>

                <p className="text-zinc-400 mt-4">
                  Projects
                </p>
              </div>

              {/* Years Learning */}

              <div
                className="
                  min-h-[120px]
                  bg-white/5
                  border
                  border-violet-500/20
                  rounded-2xl
                  p-6
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  hover:border-violet-400
                  transition-all
                  duration-300
                "
              >
                <h4 className="text-4xl font-bold text-violet-400 leading-none">
                  2+
                </h4>

                <p className="text-zinc-400 mt-4">
                  Years Learning
                </p>
              </div>

              {/* Passion */}

              <div
                className="
                  min-h-[120px]
                  bg-white/5
                  border
                  border-violet-500/20
                  rounded-2xl
                  p-6
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  hover:border-violet-400
                  transition-all
                  duration-300
                "
              >
                <h4 className="text-4xl font-bold text-violet-400 leading-none">
                  ∞
                </h4>

                <p className="text-zinc-400 mt-4">
                  Passion
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;