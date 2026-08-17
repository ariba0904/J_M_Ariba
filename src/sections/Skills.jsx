function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["PHP", "MySQL", "Oracel"],
    },
    {
      title: "Programming",
      skills: ["C", "C++", "Java"],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Vercel",
        "VS Code",
        "Codeblocks",
        "Apache NetBeans",
        "XAMPP",
        "Figma",
        "Canva",
      ],
    },
    {
      title: "Currently Learning",
      skills: [
        "Node.js",
        "Express.js",
        "Framer Motion",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Leadership",
        "Teamwork",
        "Problem Solving",
        "Communication",
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24">
      <div>

        <p className="text-violet-400 uppercase tracking-[8px] font-medium">
          Skills
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-20">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                rounded-3xl
                bg-gradient-to-br
                from-[#1A1325]
                to-[#0D0B12]
                border
                border-violet-500/30
                shadow-[0_0_30px_rgba(168,85,247,.15)]
                hover:shadow-[0_0_45px_rgba(168,85,247,.35)]
                hover:border-violet-400
                transition-all
                duration-300
              "
              style={{
                padding: "30px",
              }}
            >

              {/* TITLE */}

              <h3
                className="
                  text-2xl
                  font-bold
                  text-violet-400
                "
                style={{
                  margin: "0 0 24px 0",
                  lineHeight: "1.2",
                }}
              >
                {group.title}
              </h3>

              {/* SKILLS */}

              <div
                className="flex flex-wrap"
                style={{
                  gap: "14px",
                }}
              >

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      bg-violet-500/15
                      border
                      border-violet-400/30
                      text-white
                      hover:bg-violet-500
                      transition-all
                      duration-300
                    "
                    style={{
                      padding: "8px 16px",
                      lineHeight: "1.4",
                    }}
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;
