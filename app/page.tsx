import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import { NameHero } from "@/components/name-hero";
import Marquee from "@/components/Marquee";
import Kinetic from "@/components/Kinetic";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Software from "@/components/Software";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <PageTransition />
      <Navbar />
      <main>
        <NameHero />
        <Marquee />
        <Kinetic />
        <Skills />
        <Experience />
        <Software />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
