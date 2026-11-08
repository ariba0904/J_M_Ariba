import { useState } from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import SocialIcons from "../components/SocialIcons";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    const form = new FormData();
    form.append("entry.662773356", formData.name);
    form.append("entry.357391150", formData.email);
    form.append("entry.1184389512", formData.message);
    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfKCPFocmVFPWSRdtPT-m1c0_EqEdhvdVXXKde3CVixwGj-Jg/formResponse",
        { method: "POST", mode: "no-cors", body: form }
      );
      setFormData({ name: "", email: "", message: "" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 6000);
    } catch {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const field = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    fontSize: 13,
    fontWeight: 500,
    background: "var(--bg)",
    color: "var(--text)",
    border: "1px solid var(--border)",
    outline: "none",
  };

  return (
    <section
      id="contact"
      className="section"
      style={{ scrollMarginTop: 72, background: "var(--bg-elevated)" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 28,
          }}
          className="contact-grid"
        >
          {/* Left info */}
          <div>
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Let's work together</h2>
            <p className="section-desc" style={{ marginBottom: 24 }}>
              Have an idea, internship opportunity, collaboration, or just want to say hello?
              I'd love to hear from you.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
              <a
                href="mailto:jannatulmaowaariba0@gmail.com"
                className="card"
                style={{ padding: 14, display: "flex", gap: 12, alignItems: "center" }}
              >
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(109,60,82,0.2)",
                    color: "var(--accent-bright)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MdEmail size={18} />
                </span>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "var(--text-dim)" }}>Email</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", wordBreak: "break-all" }}>
                    jannatulmaowaariba0@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/8801856119274"
                target="_blank"
                rel="noreferrer"
                className="card"
                style={{ padding: 14, display: "flex", gap: 12, alignItems: "center" }}
              >
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(37,211,102,0.15)",
                    color: "#25d366",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaWhatsapp size={18} />
                </span>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "var(--text-dim)" }}>WhatsApp</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>
                    Message me on WhatsApp
                  </div>
                </div>
              </a>

              <div className="card" style={{ padding: 14, display: "flex", gap: 12, alignItems: "center" }}>
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(109,60,82,0.2)",
                    color: "var(--accent-bright)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MdLocationOn size={18} />
                </span>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "var(--text-dim)" }}>Location</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>
                    DC Road, Chawkbazar, Chattogram
                  </div>
                </div>
              </div>
            </div>

            <SocialIcons />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="card"
            style={{ padding: 22, display: "flex", flexDirection: "column", gap: 12 }}
          >
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4, color: "var(--text)" }}>
              Send a Message
            </h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={field}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={field}
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              style={{ ...field, resize: "none" }}
            />
            <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: "100%", opacity: loading ? 0.7 : 1 }}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            <button
              type="button"
              className="btn btn-outline"
              style={{ width: "100%" }}
              onClick={() => setFormData({ name: "", email: "", message: "" })}
            >
              Clear
            </button>
            {success && (
              <p style={{ textAlign: "center", fontSize: 13, fontWeight: 600, color: "var(--success)" }}>
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

export default Contact;
