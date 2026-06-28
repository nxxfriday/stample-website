export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold mb-4">
            About STAMPLE
          </p>

          <h2 className="text-5xl font-black mb-8">
            Building Partnerships.
            <br />
            Delivering Opportunities.
          </h2>

          <p className="text-zinc-400 text-lg leading-9 mb-6">
            STAMPLE LLC is a technology-driven contract management company
            dedicated to connecting qualified service providers with
            government, municipal, educational, commercial, and institutional
            opportunities throughout the United States.
          </p>

          <p className="text-zinc-400 text-lg leading-9">
            From opportunity discovery and proposal preparation to partner
            coordination and project administration, our goal is to simplify
            procurement while helping businesses grow through strategic
            partnerships and innovative technology.
          </p>
        </div>

        <div className="grid gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-yellow-400 text-2xl font-bold mb-3">
              Our Mission
            </h3>

            <p className="text-zinc-400">
              Empower businesses by making government and commercial
              contracting more accessible through technology,
              organization, and trusted partnerships.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-yellow-400 text-2xl font-bold mb-3">
              Our Vision
            </h3>

            <p className="text-zinc-400">
              To become one of America's leading procurement,
              contract management, and service marketplace platforms.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}