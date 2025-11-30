import Card from "@/components/ui/Card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Focus() {
  const focusAreas = [
    {
      title: "AI & Deep Tech",
      desc: "Founders building differentiated models, tooling, or infrastructure.",
      color: "from-brand-pink to-purple-600"
    },
    {
      title: "Consumer & D2C",
      desc: "Scalable brands with strong retention and channel playbooks.",
      color: "from-blue-600 to-indigo-900"
    },
    {
      title: "Space Tech & Mobility",
      desc: "Hardware-enabled plays and deep engineering teams.",
      color: "from-brand-rose to-red-600"
    },
    {
      title: "SaaS",
      desc: "B2B platforms with strong unit economics and clear expansion paths.",
      color: "from-teal-500 to-emerald-600"
    },
    {
      title: "Mobility & Future Transport",
      desc: "Capital efficient scaling and strategic partners matter here.",
      color: "from-orange-500 to-amber-700"
    },
    {
      title: "Sector Agnostic Thesis",
      desc: "We back founders with defensible differentiation and clear path to unit-economics.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="focus" className="relative py-24 overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[30rem] h-[30rem] bg-purple-900/10 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[-5%] w-[25rem] h-[25rem] bg-brand-pink/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="mb-4">
              <TextGenerateEffect 
                words="Our Current Focus" 
                className="text-3xl md:text-4xl font-bold text-white"
              />
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
              We are thesis-driven. Today we are actively working with and sourcing opportunities in sectors where <span className="text-brand-pink/90 font-medium">technology</span> and <span className="text-blue-400 font-medium">strong unit economics</span> collide.
            </p>
          </div>
        </ScrollReveal>

        {/* Focus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, i) => (
            <ScrollReveal 
              key={i} 
              delay={i * 0.05} // Faster stagger for mobile feel
              className="relative group h-full"
            >
              {/* Hover Gradient Glow */}
              <div 
                className={`
                  absolute inset-0 
                  bg-gradient-to-br ${area.color} 
                  blur-[50px] 
                  opacity-0 group-hover:opacity-15 
                  transition-opacity duration-700 
                  -z-10
                `} 
              />

              <Card className="p-8 h-full flex flex-col justify-between border-white/5 group-hover:border-white/20 transition-all duration-500 bg-white/[0.02]">
                <div>
                  {/* Colored indicator line */}
                  <div className={`w-12 h-1 bg-gradient-to-r ${area.color} rounded-full mb-6 opacity-80`} />
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                    {area.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}