import SocialIcons from "../components/SocialIcons";
import profile from "../assets/images/home-profile.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const focusTags = [
  "Web Developer",
  "Data Analysis",
  "Robotics",
  "Space & Astronomy",
  "Researcher",
];

function Hero() {
  return (
    <section
      id="home"
      style={{
        paddingTop: "100px",
        paddingBottom: "60px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "-10%",
          top: "10%",
          width: "min(500px, 80vw)",
          height: "min(500px, 80vw)",
          background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              style={{
                fontSize: "clamp(1.15rem, 3vw, 1.55rem)",
                fontWeight: 700,
                color: "var(--accent-bright)",
                marginBottom: "14px",
                letterSpacing: "0.02em",
              }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              style={{
                fontSize: "clamp(1.85rem, 5vw, 3.2rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "var(--text)",
                marginBottom: "10px",
              }}
            >
              Jannatul{" "}
              <span style={{ color: "var(--accent-bright)" }}>Maowa Ariba</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.18 }}
              style={{
                fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)",
                fontWeight: 600,
                color: "var(--text-muted)",
                marginBottom: "14px",
                letterSpacing: "0.03em",
              }}
            >
              CSE Student · Developer · Explorer
            </motion.p>

            <p
              style={{
                fontSize: "13px",
                color: "var(--text-muted)",
                maxWidth: "460px",
                lineHeight: 1.65,
                marginBottom: "14px",
              }}
            >
              Transforming ideas into engineering & practical solutions through{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                research, code, creativity and technology.
              </strong>
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "24px",
              }}
            >
              {focusTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="tag"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25 + i * 0.05 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  style={{ cursor: "default" }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              <a href="#projects" className="btn btn-primary">
                View My Work <FaArrowRight size={12} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>

            <SocialIcons />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            style={{ display: "flex", justifyContent: "center", position: "relative" }}
          >
            <div style={{ position: "relative", width: "min(340px, 85vw)" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "-8% -5%",
                  background:
                    "linear-gradient(145deg, var(--accent-deep) 0%, var(--accent) 50%, transparent 100%)",
                  borderRadius: "24px",
                  transform: "rotate(3deg)",
                  opacity: 0.55,
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  aspectRatio: "4/5",
                }}
              >
                <img
                  src={profile}
                  alt="Jannatul Maowa Ariba"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
