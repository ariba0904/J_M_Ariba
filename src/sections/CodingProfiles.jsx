import { motion } from "framer-motion";
import { SiCodeforces, SiHackerrank, SiLeetcode } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

const profiles = [
  {
    name: "Codeforces",
    handle: "JM_Ariba",
    href: "https://codeforces.com/profile/JM_Ariba",
    Icon: SiCodeforces,
    color: "#1F8ACB",
  },
  {
    name: "HackerRank",
    handle: "jm_ariba",
    href: "https://www.hackerrank.com/profile/jm_ariba",
    Icon: SiHackerrank,
    color: "#00EA64",
  },
  {
    name: "LeetCode",
    handle: "jm_ariba",
    href: "https://leetcode.com/u/jm_ariba/",
    Icon: SiLeetcode,
    color: "#FFA116",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 22 },
  },
};

function CodingProfiles() {
  return (
    <section
      id="coding-profiles"
      className="section"
      style={{ scrollMarginTop: 72, paddingBottom: 0 }}
    >
      <div className="container">
        <div
          className="coding-creator-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {/* Coding Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="card"
            style={{ padding: "24px 20px" }}
          >
            <div style={{ marginBottom: 20 }}>
              <span className="section-label">Problem Solving</span>
              <h2
                className="section-title"
                style={{ marginBottom: 6, fontSize: "clamp(1.25rem, 2.8vw, 1.6rem)" }}
              >
                Coding Profiles
              </h2>
              <p className="section-desc" style={{ margin: 0, fontSize: 13 }}>
                Find me on competitive programming platforms.
              </p>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 14,
              }}
            >
              {profiles.map(({ name, handle, href, Icon, color }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  variants={item}
                  whileHover={{ y: -5, scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    width: "min(120px, 30vw)",
                    minWidth: 100,
                    padding: "16px 12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                    textAlign: "center",
                    cursor: "pointer",
                    borderRadius: "var(--radius)",
                    border: "1px solid var(--border)",
                    background: "var(--bg)",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-accent)";
                    e.currentTarget.style.background = "var(--bg-card-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "var(--bg)";
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(109,60,82,0.22)",
                      color: color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: 2,
                      }}
                    >
                      {name}
                    </div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                      @{handle}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Content Creator */}
          <motion.div
            id="content-creator"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="card"
            style={{
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: "rgba(255, 0, 0, 0.12)",
                color: "#FF0000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <FaYoutube size={26} />
            </div>

            <span className="section-label">Beyond Coding</span>
            <h2
              className="section-title"
              style={{ marginBottom: 10, fontSize: "clamp(1.25rem, 2.8vw, 1.6rem)" }}
            >
              Content Creator
            </h2>

            <h3
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: 10,
              }}
            >
              Figuring Forward
            </h3>

            <p
              style={{
                fontSize: 13,
                lineHeight: 1.7,
                color: "var(--text-muted)",
                marginBottom: 18,
                maxWidth: 380,
              }}
            >
              Figuring Forward is my personal channel where I share travel, cooking,
              uni-diaries and lifestyle content while developing my skills in content
              creation and video editing, with plans to explore technology-focused
              content in the future.
            </p>

            <a
              href="https://www.youtube.com/@Figuring.Forward_By_Ariba"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ gap: 8, height: 42, padding: "0 18px", fontSize: 13 }}
            >
              <FaYoutube size={16} />
              Visit YouTube Channel
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .coding-creator-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default CodingProfiles;
