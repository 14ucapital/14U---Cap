import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import { ScrollReveal } from "@/components/ui/ScrollReveal"; // Import the new component

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow w-full">
        {/* Hero usually doesn't need scroll reveal as it's already in view */}
        <Hero />

        {/* Wrap subsequent sections to animate them on scroll */}
        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
          <Services />
        </ScrollReveal>

        <ScrollReveal>
          <Team />
        </ScrollReveal>
        
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}