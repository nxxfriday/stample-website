import {
  Search,
  FileText,
  Handshake,
  ClipboardCheck,
  Briefcase,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Opportunity Research",
    description:
      "We identify government, municipal, educational, and commercial contract opportunities that match our partners' capabilities.",
  },
  {
    icon: FileText,
    title: "Bid Preparation",
    description:
      "We organize bid documents, review requirements, and help prepare professional submissions.",
  },
  {
    icon: Handshake,
    title: "Partner Management",
    description:
      "We coordinate qualified contractors and build long-term partnerships for successful project execution.",
  },
  {
    icon: ClipboardCheck,
    title: "Contract Administration",
    description:
      "We assist with documentation, compliance, communication, and project coordination.",
  },
  {
    icon: Briefcase,
    title: "Business Development",
    description:
      "Helping service companies grow by pursuing public-sector and commercial opportunities.",
  },
  {
    icon: Building2,
    title: "Government Procurement",
    description:
      "Supporting opportunities with cities, counties, school districts, universities, and state agencies.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#0b0b0b] text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold mb-3">
          What We Do
        </p>

        <h2 className="text-5xl font-black mb-6">
          Professional Procurement Support
        </h2>

        <p className="text-zinc-400 max-w-3xl text-lg leading-8 mb-16">
          STAMPLE helps qualified contractors identify opportunities,
          prepare competitive proposals, manage compliance, and
          coordinate successful projects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-zinc-900 border border-zinc-800 hover:border-yellow-500 transition rounded-2xl p-8"
              >
                <Icon
                  size={40}
                  className="text-yellow-400 mb-6"
                />

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-zinc-400 leading-7">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}