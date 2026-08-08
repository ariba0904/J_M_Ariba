import { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import {
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        {
          method: "POST",
          mode: "no-cors",
          body: form,
        }
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 6000);
    } catch {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-32">
        <div
          className="max-w-7xl mx-auto"
          style={{
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <p className="uppercase tracking-[8px] text-violet-400">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-5">
            Get In Touch
          </h2>

          <p
            className="text-zinc-400 max-w-2xl leading-8"
            style={{
              marginBottom: "56px",
            }}
          >
            Have an idea, internship opportunity, collaboration,
            or simply want to say hello? I'd love to hear from you.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT CARD */}

            <div
              className="
                rounded-3xl
                border
                border-violet-500/20
                bg-gradient-to-br
                from-[#17111F]
                to-[#0C0912]
                shadow-[0_0_40px_rgba(168,85,247,.15)]
              "
              style={{
                padding: "32px",
              }}
            >
              <h3
                className="text-2xl font-bold"
                style={{
                  marginBottom: "32px",
                }}
              >
                Contact Information
              </h3>

              <div
                className="flex flex-col"
                style={{
                  gap: "28px",
                }}
              >

                <div className="flex items-start gap-4">
                  <MdEmail className="text-3xl text-violet-400 mt-1" />

                  <div>
                    <p className="text-zinc-500 text-sm">
                      Email
                    </p>

                    <p className="text-white">
                      jannatulmaowaariba0@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MdPhone className="text-3xl text-violet-400 mt-1" />

                  <div>
                    <p className="text-zinc-500 text-sm">
                      Phone
                    </p>

                    <p className="text-white">
                      +880 1856-119274
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MdLocationOn className="text-3xl text-violet-400 mt-1" />

                  <div>
                    <p className="text-zinc-500 text-sm">
                      Address
                    </p>

                    <p className="text-white">
                      DC Road, Chawkbazar, Chattogram
                    </p>
                  </div>
                </div>

              </div>

              <div
                className="flex text-3xl"
                style={{
                  gap: "24px",
                  marginTop: "40px",
                }}
              >
                <a
                  href="https://github.com/ariba0904"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-violet-400 hover:scale-110 transition-all duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/jannatul-maowa-ariba-218a0b349"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-violet-400 hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.facebook.com/jm.ariba.09"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-violet-400 hover:scale-110 transition-all duration-300"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://www.instagram.com/j_m_ariba"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-violet-400 hover:scale-110 transition-all duration-300"
                >
                  <FaInstagram />
                </a>
              </div>

            </div>


            {/* RIGHT FORM */}

            <form
              onSubmit={handleSubmit}
              className="
                rounded-3xl
                border
                border-violet-500/20
                bg-gradient-to-br
                from-[#17111F]
                to-[#0C0912]
                shadow-[0_0_40px_rgba(168,85,247,.15)]
                flex
                flex-col
              "
              style={{
                padding: "32px",
                gap: "24px",
              }}
            >

              {/* NAME */}

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="
                  w-full
                  rounded-xl
                  bg-[#221A2E]
                  border
                  border-violet-500/20
                  outline-none
                  focus:border-violet-500
                  transition-all
                  duration-300
                "
                style={{
                  padding: "16px",
                }}
              />


              {/* EMAIL */}

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="
                  w-full
                  rounded-xl
                  bg-[#221A2E]
                  border
                  border-violet-500/20
                  outline-none
                  focus:border-violet-500
                  transition-all
                  duration-300
                "
                style={{
                  padding: "16px",
                }}
              />


              {/* MESSAGE */}

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="
                  w-full
                  rounded-xl
                  bg-[#221A2E]
                  border
                  border-violet-500/20
                  outline-none
                  resize-none
                  focus:border-violet-500
                  transition-all
                  duration-300
                "
                style={{
                  padding: "16px",
                }}
              />


              {/* SEND BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-fuchsia-600
                  font-semibold
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  disabled:opacity-60
                "
                style={{
                  padding: "16px",
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>


              {/* CLEAR BUTTON */}

              <button
                type="button"
                onClick={() =>
                  setFormData({
                    name: "",
                    email: "",
                    message: "",
                  })
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-violet-500/30
                  hover:bg-violet-500/20
                  transition-all
                  duration-300
                "
                style={{
                  padding: "16px",
                }}
              >
                Clear
              </button>


              {/* SUCCESS MESSAGE */}

              {success && (
                <p className="text-green-400 text-center font-medium">
                  ✅ Message sent successfully! I'll get back to you soon.
                </p>
              )}

            </form>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;