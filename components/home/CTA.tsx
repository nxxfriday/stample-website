import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="partners"
      className="bg-gradient-to-r from-yellow-500 to-yellow-400 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-[0.35em] text-black font-bold mb-4">
          Become A Partner
        </p>

        <h2 className="text-5xl lg:text-6xl font-black text-black mb-8">
          Let's Win Government
          <br />
          Contracts Together.
        </h2>

        <p className="text-black/80 text-xl max-w-3xl mx-auto leading-9 mb-12">
          STAMPLE partners with qualified contractors across multiple
          industries. We handle opportunity research, proposal support,
          and contract management while you focus on delivering
          exceptional work.
        </p>

        <Link
          href="#"
          className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-xl text-lg font-bold hover:scale-105 transition"
        >
          Apply To Become A Partner

          <ArrowRight size={22} />

        </Link>

      </div>
    </section>
  );
}