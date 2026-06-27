import { ShieldCheck, Handshake, FileCheck, TrendingUp } from "lucide-react";

const partnerBenefits = [
  {
    icon: ShieldCheck,
    title: "Qualified Partner Network",
    text: "We work with contractors who can provide the experience, equipment, insurance, and professionalism required for public-sector work.",
  },
  {
    icon: FileCheck,
    title: "Documentation Support",
    text: "STAMPLE helps organize capability details, references, insurance, licenses, and bid requirements before opportunities are pursued.",
  },
  {
    icon: Handshake,
    title: "Clear Partnership Terms",
    text: "Every project is structured in writing with responsibilities, payment terms, and STAMPLE's 15% flat management fee clearly defined.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth",
    text: "Our goal is to build repeatable systems that help contractors pursue more opportunities without drowning in paperwork.",
  },
];

export default function Partners() {
  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold mb-3">
          Our Partner Network
        </p>

        <h2 className="text-5xl font-black mb-6">
          Built For Contractors Who Want To Grow
        </h2>

        <p className="text-zinc-400 max-w-3xl text-lg leading-8 mb-16">
          STAMPLE gives service providers a professional business development
          and contract management partner for government and commercial work.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {partnerBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 transition"
              >
                <Icon size={40} className="text-yellow-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-zinc-400 leading-7">{benefit.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}