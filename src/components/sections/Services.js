import Card from "@/components/ui/Card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Services() {
  const services = [
    {
      title: "Fundraising & Capital Advisory",
      desc: "We support founders across the fundraising lifecycle — from preparing investor-ready materials to managing introductions and negotiations.",
      painPoints: "Noisy intros, unclear valuation, poor negotiation outcomes.",
      solve: "Thesis-aligned outreach, intro packages, term negotiation support.",
      deliverables: "Investor list, outreach campaign, intro notes, term sheet negotiation support.",
      color: "from-brand-pink to-brand-rose"
    },
    {
      title: "Valuation & Financial Modeling",
      desc: "Investor-grade models and valuation analysis to help founders price rounds and communicate growth plans.",
      painPoints: "Opaque expectations, weak models.",
      solve: "Build 3-statement models, DCFs, comparables, scenario analysis.",
      deliverables: "Investor-ready model, valuation memo, sensitivity analysis.",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "M&A & Strategic Transactions",
      desc: "Buy-side and sell-side advisory with a focus on strategic fit, diligence, and deal execution.",
      painPoints: "Fragmented buyers, slow processes.",
      solve: "Target mapping, outreach, negotiation, diligence coordination.",
      deliverables: "Buyer list, process management, term guidance, closing support.",
      color: "from-purple-600 to-indigo-600"
    },
    {
      title: "Investment Research & Market Insights",
      desc: "Deep-dive research to inform strategy, positioning, and investor conversations.",
      painPoints: "Shallow market narratives, weak TAM arguments.",
      solve: "Competitive mapping, TAM/SAM analysis, go-to-market benchmarking.",
      deliverables: "Market note, competitive matrix, go-to-market framework.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Pitch Deck & Storytelling Development",
      desc: "We build investor narratives that align story and metrics to win credibility and interest.",
      painPoints: "Scattered story, weak investor hooks.",
      solve: "Narrative design, data-led storytelling, investor-ready slides.",
      deliverables: "Structured deck, investor one-pager, outreach copy.",
      isWide: true,
      color: "from-brand-pink to-purple-600"
    }
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[25rem] h-[25rem] bg-brand-pink/3 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[5%] w-[30rem] h-[30rem] bg-blue-900/3 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-20 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Our Services</span>
            </div>
            
            <div className="flex flex-col items-center justify-center mb-6">
              <TextGenerateEffect 
                words="End-to-End" 
                className="text-4xl md:text-5xl font-bold text-white text-center"
              />
              <div className="mt-2">
                <TextGenerateEffect 
                  words="Strategic Support." 
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-brand-pink pb-1"
                />
              </div>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              End-to-end capital and strategic services for startups and growth companies.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ScrollReveal 
              key={i} 
              delay={i * 0.1} // Stagger effect
              className={`relative group ${service.isWide ? 'md:col-span-2' : ''}`}
            >
              <div 
                className={`
                  absolute inset-0 
                  bg-gradient-to-br ${service.color} 
                  blur-[60px] 
                  opacity-0 group-hover:opacity-10 
                  transition-opacity duration-700 
                  -z-10
                `} 
              />

              <Card className="p-8 flex flex-col h-full group-hover:border-brand-pink/20 transition-all duration-500">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-pink transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed border-b border-white/5 pb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="space-y-5 mt-auto">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Founder Pain Points</span>
                    <p className="text-slate-400 text-sm leading-relaxed">{service.painPoints}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">How We Solve</span>
                    <p className="text-slate-400 text-sm leading-relaxed">{service.solve}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/5 mt-2">
                    <span className="text-[10px] font-bold text-brand-pink uppercase tracking-wider block mb-1">Deliverables</span>
                    <p className="text-white text-sm font-medium leading-relaxed">{service.deliverables}</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}