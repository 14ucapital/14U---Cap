import Card from "@/components/ui/Card";

export default function Services() {
  const services = [
    {
      title: "Fundraising Advisory",
      desc: "End-to-end execution. From narrative strategy to term sheet negotiation.",
      tags: ["Deal Structuring", "Negotiation Lead", "Investor Matching"],
      deliverable: "Term Sheet",
      color: "from-brand-pink to-brand-rose"
    },
    {
      title: "Financial Modeling",
      desc: "Defensible logic. We build the mathematical backbone of your valuation.",
      tags: ["DCF Analysis", "Unit Economics", "Growth Scenarios"],
      deliverable: "Financial Model",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "M&A Execution",
      desc: "Strategic exits. Buy-side and sell-side mandates for high-growth assets.",
      tags: ["Target Mapping", "Due Diligence", "Closing Process"],
      deliverable: "Deal Close",
      color: "from-purple-600 to-indigo-600"
    },
    {
      title: "Market Intelligence",
      desc: "Data-driven conviction. We validate market depth for IC memos.",
      tags: ["TAM/SAM/SOM", "Competitive Moats", "GTM Strategy"],
      deliverable: "Market Note",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Pitch Narrative",
      desc: "Storytelling that converts. We align vision with metrics to secure capital.",
      tags: ["Master Deck", "One-Pager", "Investor Scripts"],
      deliverable: "Pitch Deck",
      isWide: true,
      color: "from-brand-pink to-purple-600"
    }
  ];

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      
      {/* Ambient Background Glows - Much softer now */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[25rem] h-[25rem] bg-brand-pink/3 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[5%] w-[30rem] h-[30rem] bg-blue-900/3 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Core Modules</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-brand-pink">Architecture.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            Precision-engineered deliverables designed to accelerate capital events and strategic exits.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className={`relative group ${service.isWide ? 'md:col-span-2' : ''}`}
            >
              {/* THE BLURRY LIGHT BEHIND THE CARD - Much lower opacity */}
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

              <Card 
                className="
                  p-8 flex flex-col justify-between h-full
                  group-hover:border-brand-pink/20 
                  transition-all duration-500 
                "
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-pink transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-medium text-slate-300 uppercase tracking-wide group-hover:border-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Metadata */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                    Core Output
                  </span>
                  <span className="text-xs font-semibold text-white bg-white/5 border border-white/10 px-3 py-1.5 rounded-full group-hover:border-brand-pink/30 group-hover:bg-brand-pink/5 transition-all duration-300">
                    {service.deliverable}
                  </span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}