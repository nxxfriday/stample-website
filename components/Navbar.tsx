import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/stample-logo.png"
            alt="STAMPLE LLC"
            width={50}
            height={50}
          />

          <div>
            <h1 className="text-white font-bold text-xl tracking-widest">
              STAMPLE
            </h1>

            <p className="text-yellow-400 text-xs tracking-[0.3em]">
              LLC
            </p>
          </div>
        </Link>

        <div className="hidden md:flex gap-8 text-white">

          <a href="#services" className="hover:text-yellow-400 transition">
            Services
          </a>

          <a href="#industries" className="hover:text-yellow-400 transition">
            Industries
          </a>

          <a href="#partners" className="hover:text-yellow-400 transition">
            Partners
          </a>

          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>

        </div>

        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl transition">
          Become A Partner
        </button>

      </div>
    </nav>
  );
}