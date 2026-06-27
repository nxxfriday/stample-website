const industries = [
  "Pressure Washing",
  "Janitorial",
  "Landscaping",
  "Painting",
  "Moving & Hauling",
  "Debris Removal",
  "Courier Services",
  "Office Supplies",
  "Electrical",
  "HVAC",
  "Plumbing",
  "Light Construction",
];

export default function Industries() {
  return (
    <section id="industries" className="bg-black text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold mb-3">
          Industries We Serve
        </p>

        <h2 className="text-5xl font-black mb-6">
          Built For Multiple Contractor Categories
        </h2>

        <p className="text-zinc-400 max-w-3xl text-lg leading-8 mb-14">
          STAMPLE partners with qualified service providers across high-demand
          government and commercial service categories.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry) => (
            <div
              key={industry}
              className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6 hover:border-yellow-500 transition"
            >
              <p className="text-xl font-bold">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}