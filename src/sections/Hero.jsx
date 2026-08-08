import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

import profile from "../assets/images/ariba.png";

function Hero() {
  return (
    <section id="home" className="py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div className="pr-2">

          <p className="uppercase tracking-[10px] text-violet-400 mb-8">
            Welcome to my Portfolio
          </p>

          <h1 className="text-6xl md:text-7xl xl:text-8xl font-black leading-none">
            Jannatul
            <br />
            Maowa
            <br />
            <span className="text-violet-400">
              Ariba
            </span>
          </h1>

          <h2 className="mt-10 text-3xl font-semibold text-zinc-200">
            Computer Science & Engineering Student
          </h2>

          <p className="mt-8 max-w-xl leading-9 text-zinc-400 text-lg">
            Passionate about research, creating modern web applications,
            solving real-world problems, programming, designing beautiful user
            experiences, and continuously learning new technologies.
          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-6 mt-12">

            <button
              className="
                min-w-[180px]
                h-14
                px-8
                rounded-full
                bg-violet-600
                hover:bg-violet-500
                hover:scale-105
                transition-all
                duration-300
                shadow-lg
                shadow-violet-500/30
                flex
                items-center
                justify-center
                font-semibold
              "
            >
              Download CV
            </button>

            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="
                min-w-[180px]
                h-14
                px-8
                rounded-full
                border
                border-violet-500
                hover:bg-violet-500/20
                hover:scale-105
                transition-all
                duration-300
                flex
                items-center
                justify-center
                font-semibold
              "
            >
              Contact Me
            </button>

          </div>

          {/* SOCIAL ICONS */}

          <div className="flex items-center gap-10 text-4xl mt-14">

            <a
              href="https://github.com/ariba0904"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-400 hover:scale-125 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/jannatul-maowa-ariba-218a0b349"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-400 hover:scale-125 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/jm.ariba.09"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-400 hover:scale-125 transition-all duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/j_m_ariba"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-400 hover:scale-125 transition-all duration-300"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-violet-600 blur-[140px] opacity-40 rounded-full"></div>

            <div
              className="
                relative
                w-[380px]
                h-[380px]
                md:w-[430px]
                md:h-[430px]
                rounded-full
                border-2
                border-violet-500
                bg-white/5
                backdrop-blur-xl
                overflow-hidden
                shadow-[0_0_60px_rgba(168,85,247,0.35)]
                hover:scale-105
                transition-all
                duration-500
              "
            >

              <img
                src={profile}
                alt="Jannatul Maowa Ariba"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;