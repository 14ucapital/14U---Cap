import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Hero2 from "@/components/sections/Hero2";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";
import Focus from "@/components/sections/Focus";
// Removed ScrollReveal import since it's no longer used here

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow w-full">
        <Hero />
        <Focus />
        <Hero2 />
        <About />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}