import certificates from "../data/certificates";

function Certificates() {
  return (
    <section id="certificates" className="py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}

        <p className="uppercase tracking-[8px] text-violet-400 font-medium">
          Achievements & Certificates
        </p>

        <h2
          className="text-5xl md:text-6xl font-bold"
          style={{
            marginTop: "16px",
            marginBottom: "25px",
            lineHeight: "1.1",
          }}
        >
          My Certificates
        </h2>

        <p
          className="text-zinc-400 max-w-2xl leading-8"
          style={{
            marginBottom: "40px",
          }}
        >
          A collection of certificates and achievements from
          academic events, competitions, and learning experiences.
        </p>


        {/* CERTIFICATES */}

        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((certificate) => (

            <div
              key={certificate.title}
              className="
                group
                rounded-3xl
                overflow-hidden
                bg-gradient-to-br
                from-[#17111F]
                to-[#0C0A10]
                border
                border-violet-500/20
                hover:border-violet-500
                transition-all
                duration-500
                hover:-translate-y-2
                shadow-[0_0_30px_rgba(168,85,247,.12)]
                hover:shadow-[0_0_55px_rgba(168,85,247,.35)]
              "
            >

              {/* CERTIFICATE IMAGE */}

              <div className="h-72 overflow-hidden bg-black/20">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="
                    w-full
                    h-full
                    object-contain
                    p-4
                    group-hover:scale-105
                    transition-all
                    duration-500
                  "
                />

              </div>


              {/* CONTENT */}

              <div
                style={{
                  padding: "28px",
                }}
              >

                <p className="text-violet-400 text-sm font-medium mb-3">
                  {certificate.year}
                </p>

                <h3
                  className="text-2xl font-bold"
                  style={{
                    marginBottom: "14px",
                    lineHeight: "1.3",
                  }}
                >
                  {certificate.title}
                </h3>

                <p
                  className="text-white text-lg"
                  style={{
                    marginBottom: "10px",
                    lineHeight: "1.5",
                  }}
                >
                  {certificate.event}
                </p>

                <p className="text-zinc-400 leading-7">
                  {certificate.organization}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certificates;