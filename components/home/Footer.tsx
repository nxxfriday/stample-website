import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] text-white border-t border-zinc-800 px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-black tracking-widest">STAMPLE</h3>
          <p className="text-yellow-400 text-sm tracking-[0.3em] mb-6">LLC</p>
          <p className="text-zinc-400 leading-7">
            Government procurement and partner management for qualified service providers.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-5">Company</h4>
          <div className="space-y-3 text-zinc-400">
            <Link href="/" className="block hover:text-yellow-400">Home</Link>
            <a href="#services" className="block hover:text-yellow-400">Services</a>
            <a href="#industries" className="block hover:text-yellow-400">Industries</a>
            <a href="#partners" className="block hover:text-yellow-400">Partners</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-5">Services</h4>
          <div className="space-y-3 text-zinc-400">
            <p>Opportunity Research</p>
            <p>Bid Preparation</p>
            <p>Contract Administration</p>
            <p>Partner Management</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-5">Contact</h4>
          <div className="space-y-3 text-zinc-400">
            <a href="mailto:@gmail.com" className="block hover:text-yellow-400">
              stamplecontractingllc@gmail.com
            </a>
            <a href="tel:9802984334" className="block hover:text-yellow-400">
              980-298-4334
            </a>
            <p>Serving Government & Commercial Clients Nationwide</p>
<p className="text-sm text-zinc-500">Headquartered in Columbia, South Carolina</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between gap-4 text-zinc-500 text-sm">
        <p>© 2026 STAMPLE LLC. All rights reserved.</p>
        <p>Government Procurement & Partner Management</p>
      </div>
    </footer>
  );
}