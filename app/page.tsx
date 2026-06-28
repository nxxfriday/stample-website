import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import Partners from "@/components/home/Partners";
import Platforms from "@/components/home/Platforms";
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
      <Partners />
      <Platforms />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}