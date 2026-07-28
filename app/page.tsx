import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skill";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

import ParticleBackground from "@/components/ui/ParticleBackground";


export default function Home() {

  return (

    <main
      className="
        bg-white
        text-gray-900
        overflow-hidden
      "
    >

      <ParticleBackground />

      <Navbar />

      <Hero />

      <About />

      <Stats />

      <Experience />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

    </main>

  );

}