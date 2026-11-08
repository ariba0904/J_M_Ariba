import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-elevated)",
        padding: "28px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <a href="#home" style={{ fontWeight: 700, fontSize: "15px", color: "var(--text)" }}>
          JM <span style={{ color: "var(--accent-bright)" }}>ARIBA</span>
        </a>
        <SocialIcons />
        <p style={{ fontSize: "12px", color: "var(--text-dim)", textAlign: "center" }}>
          © {new Date().getFullYear()} Jannatul Maowa Ariba. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
