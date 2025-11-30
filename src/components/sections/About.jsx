import Card from "@/components/ui/Card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="mb-6 flex flex-col items-center">
              <TextGenerateEffect 
                words="About" 
                className="text-4xl md:text-5xl font-bold text-white text-center"
              />
              <div className="mt-2">
                <TextGenerateEffect 
                  words="14U Capital." 
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-purple-600 pb-1"
                />
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed">
              At 14U Capital, we onboard only high-quality startups through a rigorous qualification process before introducing them to our investor network. This ensures that every opportunity we present is thesis-aligned, defensible, and supported by strong fundamentals.
            </p>
          </div>
        </ScrollReveal>

        {/* Content Grid - Adapted for 3 items */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Item 1: Mission */}
          <ScrollReveal delay={0.2} className="h-full">
            <Card className="p-8 flex flex-col h-full border-t-4 border-t-brand-pink hover:border-brand-pink/40 transition-colors duration-500">
              <div className="mb-4">
                <div className="inline-flex items-center space-x-2 bg-brand-pink/10 px-3 py-1 rounded-full border border-brand-pink/20 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
                  </span>
                  <span className="text-[10px] font-bold text-brand-pink uppercase tracking-widest">Goal</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Mission</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Empower founders with clarity, capital, and high-velocity execution.
                </p>
              </div>
            </Card>
          </ScrollReveal>

          {/* Item 2: Philosophy */}
          <ScrollReveal delay={0.3} className="h-full">
            <Card className="p-8 flex flex-col h-full border-t-4 border-t-blue-500 hover:border-blue-500/40 transition-colors duration-500">
              <div className="mb-4">
                <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Belief</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Our Philosophy</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We believe disciplined qualification leads to better outcomes — for founders and investors.
                </p>
              </div>
            </Card>
          </ScrollReveal>

          {/* Item 3: Trust */}
          <ScrollReveal delay={0.4} className="h-full">
            <Card className="p-8 flex flex-col h-full border-t-4 border-t-purple-600 hover:border-purple-600/40 transition-colors duration-500">
              <div className="mb-4">
                <div className="inline-flex items-center space-x-2 bg-purple-600/10 px-3 py-1 rounded-full border border-purple-600/20 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                  </span>
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Value</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Why Founders Trust Us</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We don’t just advise — we execute alongside founders until results are achieved.
                </p>
              </div>
            </Card>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}