import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import Process from "@/components/home/Process";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}