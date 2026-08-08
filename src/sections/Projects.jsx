import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects">
      <div>

        <p className="uppercase tracking-[8px] text-violet-400 font-medium">
          Projects
        </p>

        <h2
          className="text-5xl md:text-6xl font-bold"
          style={{
            marginTop: "16px",
            marginBottom: "50px",
            lineHeight: "1.1",
          }}
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="
                group
                rounded-3xl
                overflow-hidden
                bg-gradient-to-br
                from-[#17111F]
                to-[#0C0A10]
                border
                border-violet-500/20
                hover:border-violet-500
                transition
                duration-500
                hover:-translate-y-2
                shadow-[0_0_30px_rgba(168,85,247,.12)]
                hover:shadow-[0_0_55px_rgba(168,85,247,.35)]
              "
            >

              {/* PROJECT IMAGE */}

              <div className="h-56 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-all
                    duration-500
                  "
                />

              </div>


              {/* PROJECT CONTENT */}

              <div
                style={{
                  padding: "28px",
                }}
              >

                {/* TITLE */}

                <h3
                  className="text-2xl font-bold"
                  style={{
                    marginBottom: "18px",
                    lineHeight: "1.3",
                  }}
                >
                  {project.title}
                </h3>


                {/* DESCRIPTION */}

                <p
                  className="text-gray-400 leading-8"
                  style={{
                    marginBottom: "22px",
                  }}
                >
                  {project.description}
                </p>


                {/* TECHNOLOGIES */}

                <div
                  className="flex flex-wrap"
                  style={{
                    gap: "12px",
                    marginBottom: "24px",
                  }}
                >

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="
                        rounded-full
                        bg-violet-500/10
                        border
                        border-violet-500/30
                        text-violet-200
                      "
                      style={{
                        padding: "7px 14px",
                        lineHeight: "1.4",
                      }}
                    >
                      {tech}
                    </span>

                  ))}

                </div>


                {/* BUTTONS */}

                <div
                  className="flex flex-wrap"
                  style={{
                    gap: "14px",
                  }}
                >

                  <a
                    href={project.github}
                    className="
                      rounded-xl
                      border
                      border-violet-500
                      hover:bg-violet-500
                      transition
                      flex
                      items-center
                      justify-center
                    "
                    style={{
                      padding: "9px 20px",
                    }}
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="
                      rounded-xl
                      bg-violet-600
                      hover:bg-violet-500
                      transition
                      flex
                      items-center
                      justify-center
                    "
                    style={{
                      padding: "9px 20px",
                    }}
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;