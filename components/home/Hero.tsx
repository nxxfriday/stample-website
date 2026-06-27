import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 pt-36 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
            Government Procurement & Partner Management
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mt-6 max-w-3xl">
            Finding
            <br />
            Opportunities.
            <br />
            <span className="text-yellow-400">Delivering Results.</span>
          </h1>

          <p className="text-zinc-400 text-xl mt-8 leading-9 max-w-xl">
            STAMPLE LLC connects qualified contractors with government,
            municipal, educational, and commercial contract opportunities while
            managing bidding, compliance, and project coordination.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-12">
            <Link
              href="#partners"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition"
            >
              Become A Partner
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#services"
              className="border border-zinc-700 hover:border-yellow-400 px-8 py-4 rounded-xl transition text-center"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-zinc-800 pt-10">
            <div>
              <p className="text-yellow-400 text-4xl font-black">15%</p>
              <p className="text-zinc-500">Flat Management Fee</p>
            </div>

            <div>
              <p className="text-yellow-400 text-4xl font-black">12+</p>
              <p className="text-zinc-500">Service Industries</p>
            </div>

            <div>
              <p className="text-yellow-400 text-4xl font-black">Nationwide</p>
              <p className="text-zinc-500">Partner Network</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-yellow-500 blur-[120px] opacity-20 rounded-full" />

          <div className="relative bg-zinc-900 border border-yellow-500/20 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Why STAMPLE?</h3>

            <div className="space-y-6">
              <div>
                <p className="text-yellow-400 text-5xl font-black">15%</p>
                <p className="text-zinc-400">Flat Management Fee</p>
              </div>

              <div>
                <p className="text-yellow-400 text-5xl font-black">50+</p>
                <p className="text-zinc-400">Government Agencies Targeted</p>
              </div>

              <div>
                <p className="text-yellow-400 text-5xl font-black">100%</p>
                <p className="text-zinc-400">Focused On Partner Success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}