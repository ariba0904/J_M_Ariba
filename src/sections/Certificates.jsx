import { useState } from "react";
import certificates from "../data/certificates";
import { motion, AnimatePresence } from "framer-motion";

function Certificates() {
  const [active, setActive] = useState(null);

  return (
    <section id="certificates" className="section" style={{ scrollMarginTop: 72 }}>
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
            <span className="section-label">Achievements</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Certificates
            </h2>
          </div>
          <p
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              maxWidth: 320,
              margin: 0,
            }}
          >
            Academic events, competitions, and learning experiences.
          </p>
        </div>

        <div
          className="cert-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 16,
          }}
        >
          {certificates.map((c, i) => (
            <motion.article
              key={`${c.title}-${c.year}-${i}`}
              className="card"
              style={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                borderColor:
                  active === i ? "var(--border-accent)" : "var(--border)",
                boxShadow: active === i ? "0 10px 28px var(--glow)" : "none",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive((prev) => (prev === i ? null : i))}
            >
              {/* Full certificate visible — contain, not cropped */}
              <div
                className="cert-image-wrap"
                style={{
                  height: 200,
                  overflow: "hidden",
                  background: "var(--bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 12px",
                }}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                  }}
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
                <span
                  className="tag"
                  style={{
                    fontSize: 10,
                    padding: "3px 8px",
                    alignSelf: "flex-start",
                    marginBottom: 8,
                  }}
                >
                  {c.year}
                </span>
                <h3
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    marginBottom: 6,
                    color: "var(--text)",
                    lineHeight: 1.35,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: 11,
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                    marginBottom: 6,
                    flex: 1,
                  }}
                >
                  {c.event}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--text-dim)",
                    lineHeight: 1.4,
                  }}
                >
                  {c.organization}
                </p>

                <AnimatePresence>
                  {active === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{
                        fontSize: 11,
                        color: "var(--accent-bright)",
                        marginTop: 10,
                        fontWeight: 600,
                      }}
                    >
                      Verified achievement · {c.year}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .cert-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .cert-image-wrap { height: 180px !important; }
        }
        @media (min-width: 900px) {
          .cert-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .cert-image-wrap { height: 150px !important; }
        }
        @media (max-width: 639px) {
          .cert-image-wrap { height: 220px !important; }
        }
      `}</style>
    </section>
  );
}

export default Certificates;
