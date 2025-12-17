import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import BottomCTA from "@/components/sections/cta";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <BottomCTA />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
