import { useState } from "react";
import { MdWork } from "react-icons/md";
import {
  FaRocket,
  FaRobot,
  FaChartBar,
  FaGlobe,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/about.png";

const keywords = [
  { icon: FaGlobe, label: "Web Development" },
  { icon: FaChartBar, label: "Data Analysis" },
  { icon: FaRobot, label: "Robotics" },
  { icon: FaRocket, label: "Space & Astronomy" },
  { icon: FaStar, label: "Research Mindset" },
  { icon: MdWork, label: "UI / UX Design" },
];

function About() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="about"
      className="section"
      style={{ scrollMarginTop: 72, background: "var(--bg-elevated)" }}
    >
      <div className="container">
        <div style={{ marginBottom: 28 }}>
          <span className="section-label">About Me</span>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
             Space & Astronomy Enthusiast. Researcher. Web Developer
          </h2>
        </div>

        <div
          className="about-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "28px",
            alignItems: "stretch",
          }}
        >
          {/* LEFT — photo */}
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
              overflow: "hidden",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--bg-card)",
              minHeight: 320,
            }}
          >
            <img
              src={aboutImage}
              alt="Jannatul Maowa Ariba"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: 480,
                objectFit: "contain",
                objectPosition: "center",
                display: "block",
              }}
            />
          </motion.div>

          {/* RIGHT — text + keywords only */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <div>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--text-muted)",
                  marginBottom: 0,
                }}
              >
                <strong style={{ color: "var(--text)" }}>CSE student at IIUC</strong>{" "}
                passionate about research, software development, and web technologies. I enjoy
                building projects and solving real-world problems through technology. Beyond
                coding, I have a strong interest in space, astronomy, machine learning, data
                analysis, and robotics, and I am continuously exploring these fields to expand
                my knowledge and skills.
              </p>
            </div>

            <div
              className="card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 16px",
                borderColor: "var(--border-accent)",
              }}
            >
              <div
                style={{
                  fontSize: "1.7rem",
                  fontWeight: 700,
                  color: "var(--accent-bright)",
                  lineHeight: 1,
                }}
              >
                2+
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>
                  Years Learning
                </div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>
                  Continuous growth in learning, research & tech
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              {keywords.map((k) => {
                const Icon = k.icon;
                return (
                  <div
                    key={k.label}
                    className="card"
                    onMouseEnter={() => setHovered(k.label)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      padding: "11px 12px",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      borderColor:
                        hovered === k.label
                          ? "var(--border-accent)"
                          : "var(--border)",
                      boxShadow:
                        hovered === k.label ? "0 6px 18px var(--glow)" : "none",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                  >
                    <span
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(109,60,82,0.22)",
                        color: "var(--accent-bright)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={13} />
                    </span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text)" }}>
                      {k.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-layout {
            grid-template-columns: minmax(280px, 0.95fr) 1.15fr !important;
            gap: 36px !important;
            align-items: start !important;
          }
        }
      `}</style>
    </section>
  );
}

export default About;
