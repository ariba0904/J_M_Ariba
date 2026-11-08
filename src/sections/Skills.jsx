import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaCode,
  FaServer,
  FaLaptopCode,
  FaTools,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiCplusplus, SiExpress } from "react-icons/si";

const groups = [
  {
    title: "Frontend Development",
    desc: "Responsive interfaces with clean UI and smooth interactions.",
    icon: FaCode,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    desc: "Server-side logic, data storage, and application support.",
    icon: FaServer,
    skills: ["PHP", "MySQL", "Oracle"],
  },
  {
    title: "Programming",
    desc: "Core languages and structured problem solving.",
    icon: FaLaptopCode,
    skills: ["C", "C++", "Java"],
  },
  {
    title: "Tools & Design",
    desc: "Version control, editors, and design for polished products.",
    icon: FaTools,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Canva", "XAMPP"],
  },
  {
    title: "Currently Learning",
    desc: "Modern backend and motion for richer web experiences.",
    icon: FaLightbulb,
    skills: ["Node.js", "Express.js", "Framer Motion"],
  },
  {
    title: "Soft Skills",
    desc: "Collaboration and communication for effective teamwork.",
    icon: FaUsers,
    skills: ["Leadership", "Teamwork", "Problem Solving", "Communication"],
  },
];

const techIcons = [
  { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "PHP", Icon: FaPhp, color: "#777BB4" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Java", Icon: FaJava, color: "#ED8B00" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "Git", Icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", Icon: FaGithub, color: "#fadcd5" },
  { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
  { name: "Express", Icon: SiExpress, color: "#fadcd5" },
  { name: "Figma", Icon: FaFigma, color: "#F24E1E" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

function Skills() {
  const [active, setActive] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="skills" className="section" style={{ scrollMarginTop: 72 }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <span className="section-label">What I Offer</span>
          <h2 className="section-title" style={{ marginBottom: 8 }}>
            Skills & Expertise
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Tools and categories I work with — hover to interact.
          </p>
        </div>

        {/* Tech icons */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            marginBottom: 40,
          }}
        >
          {techIcons.map(({ name, Icon, color }) => (
            <motion.button
              key={name}
              type="button"
              variants={item}
              whileHover={{ y: -6, scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              onMouseEnter={() => setActive(name)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(name)}
              onBlur={() => setActive(null)}
              className="card"
              style={{
                width: 72,
                height: 78,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                cursor: "pointer",
                borderColor:
                  active === name ? "var(--border-accent)" : "var(--border)",
                boxShadow: active === name ? "0 8px 24px var(--glow)" : "none",
                background: "var(--bg-card)",
              }}
              aria-label={name}
            >
              <Icon size={26} color={color} />
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: active === name ? "var(--text)" : "var(--text-muted)",
                }}
              >
                {name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Category cards — side by side like featured projects */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="skills-cats"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "14px",
          }}
        >
          {groups.map((g) => {
            const Icon = g.icon;
            const isOn = activeCard === g.title;
            return (
              <motion.div
                key={g.title}
                variants={item}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setActiveCard(g.title)}
                onMouseLeave={() => setActiveCard(null)}
                className="card"
                style={{
                  padding: "18px 16px",
                  borderColor: isOn ? "var(--border-accent)" : "var(--border)",
                  boxShadow: isOn ? "0 10px 28px var(--glow)" : "none",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: "rgba(109,60,82,0.22)",
                    color: "var(--accent-bright)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                >
                  <Icon size={17} />
                </div>
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    marginBottom: 6,
                    color: "var(--text)",
                    lineHeight: 1.3,
                  }}
                >
                  {g.title}
                </h3>
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--text-muted)",
                    lineHeight: 1.55,
                    marginBottom: 12,
                  }}
                >
                  {g.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="tag"
                      style={{ fontSize: 10, padding: "3px 8px" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .skills-cats { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 900px) {
          .skills-cats { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (min-width: 1100px) {
          .skills-cats { grid-template-columns: repeat(6, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

export default Skills;
