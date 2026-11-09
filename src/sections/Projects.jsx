import projects from "../data/projects";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="section"
      style={{ scrollMarginTop: 72, background: "var(--bg-elevated)" }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div>
            <span className="section-label">Selected Work</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Featured Projects
            </h2>
          </div>
          <a
            href="https://github.com/ariba0904"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            style={{ height: 38, fontSize: 12 }}
          >
            View All Projects <FaArrowRight size={11} />
          </a>
        </div>

        {/* 5 projects side by side on large screens */}
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 14,
          }}
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="card"
              style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <div style={{ height: 130, overflow: "hidden", background: "var(--bg)" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  padding: "14px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    marginBottom: 6,
                    color: "var(--text)",
                    lineHeight: 1.35,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: 11,
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                    marginBottom: 10,
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 4,
                    marginBottom: 10,
                  }}
                >
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="tag"
                      style={{ fontSize: 10, padding: "3px 8px" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                    style={{ height: 30, fontSize: 11, padding: "0 10px" }}
                  >
                    <FaGithub size={11} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ height: 30, fontSize: 11, padding: "0 10px" }}
                  >
                    <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 12,
            marginTop: 40,
          }}
        >
          {[
            { n: "6+", l: "Projects Completed" },
            { n: "10+", l: "Technologies" },
            { n: "2+", l: "Years Learning" },
            { n: "100%", l: "Dedication" },
          ].map((s) => (
            <div
              key={s.l}
              className="card"
              style={{ padding: "20px 16px", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "var(--accent-bright)",
                  lineHeight: 1,
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  marginTop: 6,
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (min-width: 900px) {
          .projects-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (min-width: 1100px) {
          .projects-grid { grid-template-columns: repeat(5, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

export default Projects;
