import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const socials = [
  { href: "https://github.com/ariba0904", label: "GitHub", Icon: FaGithub },
  {
    href: "https://www.linkedin.com/in/jannatul-maowa-ariba-218a0b349",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  { href: "https://www.facebook.com/jm.ariba.09", label: "Facebook", Icon: FaFacebook },
  { href: "https://www.instagram.com/j_m_ariba", label: "Instagram", Icon: FaInstagram },
  { href: "https://wa.me/8801856119274", label: "WhatsApp", Icon: FaWhatsapp },
];

function SocialIcons({ size = 16 }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            border: "1px solid var(--border)",
            background: "var(--bg-card)",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "color 0.2s, border-color 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--highlight)";
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-muted)";
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
