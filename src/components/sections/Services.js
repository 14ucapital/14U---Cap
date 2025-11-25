export default function Services() {
  const services = [
    {
      title: "Fundraising & Capital Advisory",
      desc: "Support across the fundraising lifecycle — from preparing investor-ready materials to managing introductions.",
    },
    {
      title: "Valuation & Modeling",
      desc: "Investor-grade models and valuation analysis to help founders price rounds and communicate growth plans.",
    },
    {
      title: "M&A & Strategic Transactions",
      desc: "Buy-side and sell-side advisory with a focus on strategic fit, diligence, and deal execution.",
    },
    {
      title: "Pitch Deck & Storytelling",
      desc: "We build investor narratives that align story and metrics to win credibility and interest.",
    },
  ];

  return (
    <section id="services" className="py-24">
      <h2 className="text-4xl font-bold text-white mb-2">Our Services</h2>
      <p className="text-slate-400 mb-12">
        End-to-end capital and strategic services for startups.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-pink-500/40 transition-all group"
          >
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-400 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}