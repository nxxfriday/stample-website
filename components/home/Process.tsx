import { Search, FileText, Users, Trophy, ClipboardCheck, DollarSign } from "lucide-react";

const steps = [
  { icon: Search, title: "Find Opportunity", text: "STAMPLE identifies contract opportunities that match partner capabilities." },
  { icon: FileText, title: "Prepare Proposal", text: "We organize bid documents, requirements, pricing support, and submission details." },
  { icon: Users, title: "Select Partner", text: "Qualified partners confirm scope, availability, pricing, equipment, and insurance." },
  { icon: Trophy, title: "Award", text: "If awarded, STAMPLE coordinates the next steps with the buyer and partner." },
  { icon: ClipboardCheck, title: "Manage Project", text: "We track communication, scheduling, documentation, invoices, and compliance." },
  { icon: DollarSign, title: "Distribute Payment", text: "Payments are handled according to the written agreement and 15% flat management fee." },
];

export default function Process() {
  return (
    <section className="bg-[#0b0b0b] text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold mb-3">
          How STAMPLE Works
        </p>

        <h2 className="text-5xl font-black mb-6">
          From Opportunity To Payment
        </h2>

        <p className="text-zinc-400 max-w-3xl text-lg leading-8 mb-16">
          We simplify the contract process by giving contractors a clear,
          organized system for pursuing and managing public-sector work.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 transition"
              >
                <div className="absolute -top-4 -right-4 bg-yellow-500 text-black font-black rounded-full w-12 h-12 flex items-center justify-center">
                  {index + 1}
                </div>

                <Icon size={38} className="text-yellow-400 mb-6" />

                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>

                <p className="text-zinc-400 leading-7">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}