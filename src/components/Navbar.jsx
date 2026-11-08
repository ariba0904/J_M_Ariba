import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "var(--bg-elevated)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.25s, border-color 0.25s",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
          gap: "12px",
        }}
      >
        <a
          href="#home"
          onClick={() => setOpen(false)}
          style={{ fontWeight: 700, fontSize: "16px", color: "var(--text)", flexShrink: 0 }}
        >
          JM <span style={{ color: "var(--accent-bright)" }}>ARIBA</span>
        </a>

        <nav className="hidden lg:flex" style={{ alignItems: "center", gap: "4px" }}>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              style={{
                padding: "6px 12px",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--text-muted)",
                borderRadius: "8px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {theme === "dark" ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>

          <a
            href="#contact"
            className="btn btn-primary hidden sm:inline-flex"
            style={{ height: 36, padding: "0 16px", fontSize: "12px" }}
          >
            Let's Talk
          </a>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--text)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {open ? <HiOutlineX size={18} /> : <HiOutlineMenuAlt3 size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="lg:hidden"
          style={{
            background: "var(--bg-elevated)",
            borderTop: "1px solid var(--border)",
            padding: "12px 20px 16px",
          }}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "10px 8px",
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--text-muted)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary"
            style={{ width: "100%", marginTop: 8 }}
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
