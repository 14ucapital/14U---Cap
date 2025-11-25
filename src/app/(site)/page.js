import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-6 w-full">
        <Hero />
        <Services />

        {/* Quick Contact Section */}
        <section id="contact" className="py-24 border-t border-white/10">
          <div className="bg-gradient-to-br from-neutral-900 to-black p-10 rounded-3xl border border-white/10 text-center relative overflow-hidden">
            {/* Decor Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/10 blur-[80px] rounded-full -mr-16 -mt-16 pointer-events-none"></div>
            
            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
              Ready to start?
            </h2>
            <p className="text-slate-400 mb-8 relative z-10">
              Reach out with your deck or one-pager.
            </p>
            <a
              href="mailto:hello@14ucapital.in"
              className="text-pink-500 hover:text-pink-400 font-bold text-xl relative z-10 transition-colors"
            >
              hello@14ucapital.in
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}