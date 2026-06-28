import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Stamp } from "lucide-react";

export default function Platforms() {
  return (
    <section className="bg-[#0b0b0b] text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold mb-3">
          The STAMPLE Ecosystem
        </p>

        <h2 className="text-5xl font-black mb-6">
          One Company. Multiple Service Branches.
        </h2>

        <p className="text-zinc-400 max-w-3xl text-lg leading-8 mb-16">
          STAMPLE LLC is building connected business platforms that support
          businesses, service providers, customers, and public-sector
          opportunities through innovative technology.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 transition duration-300">
            <BriefcaseBusiness size={42} className="text-yellow-400 mb-6" />

            <h3 className="text-3xl font-bold mb-4">STAMPLE Contracting</h3>

            <p className="text-zinc-400 leading-7 mb-8">
              Government procurement, bid preparation, proposal support,
              compliance, partner coordination, and contract management for
              public and commercial opportunities.
            </p>

            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl transition"
            >
              Explore Contracting
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 transition duration-300">
            <Stamp size={42} className="text-yellow-400 mb-6" />

            <h3 className="text-3xl font-bold mb-4">STAMPLE Notary</h3>

            <p className="text-zinc-400 leading-7 mb-8">
              Book mobile notary appointments, manage verified notary profiles,
              process secure payments, and access customer, notary, and admin
              dashboards through the STAMPLE Notary platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://stample-app.vercel.app/book"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl transition"
              >
                Book a Notary
                <ArrowRight size={18} />
              </Link>

              <Link
                href="https://stample-app.vercel.app/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-bold px-6 py-3 rounded-xl transition"
              >
                Become a Notary
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}