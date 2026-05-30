import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSnap from "@/components/HeroSnap";

export default function Home() {
  return (
    <>
      <HeroSnap />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
