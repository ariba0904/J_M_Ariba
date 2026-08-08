import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className="
          mx-auto
          w-full
          rounded-3xl
          border
          border-white/10
          bg-[#15131d]/90
          backdrop-blur-xl
          shadow-lg
        "
        style={{
          padding: "20px 32px",
        }}
      >
        <div className="flex items-center justify-between">

          {/* LOGO */}

          <a
            href="#home"
            className="text-2xl font-bold tracking-wide"
          >
            JM Ariba
            <span className="text-violet-400">.</span>
          </a>


          {/* DESKTOP LINKS */}

          <ul className="hidden md:flex items-center gap-10 text-zinc-300">

            {links.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                    hover:text-violet-400
                    transition
                    duration-300
                  "
                >
                  {item}
                </a>
              </li>
            ))}

          </ul>


          {/* MOBILE BUTTON */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl"
          >
            {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>

        </div>


        {/* MOBILE MENU */}

        {open && (
          <div
            className="
              mt-5
              rounded-2xl
              bg-[#15131d]/95
              border
              border-white/10
              backdrop-blur-xl
              md:hidden
            "
            style={{
              padding: "20px",
            }}
          >
            <ul className="space-y-5">

              {links.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="
                      text-zinc-300
                      hover:text-violet-400
                      transition
                      duration-300
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;