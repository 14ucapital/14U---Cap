export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-pink-900/20 blur-[120px] opacity-50 mix-blend-screen pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 border border-pink-500/30 bg-pink-500/10 rounded-full px-3 py-1 text-xs text-pink-300">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
            <span>Capital & Strategic Advisory</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white tracking-tight">
            We turn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600">
              vision
            </span>{" "}
            into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600">
              velocity
            </span>
            .
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
            14U Capital partners with high-quality startups and serious
            investors by combining clarity, strategy, and momentum across every
            stage of the capital journey.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Abstract Graphic Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-neutral-900 border border-white/10 rounded-2xl p-8 space-y-6 shadow-2xl">
            <h3 className="text-2xl font-bold text-white">Our Approach</h3>
            <p className="text-slate-400">
              We blend investment-banking rigor with operator-level insight —
              giving founders the speed of a startup and the precision of a
              seasoned advisor.
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-colors">
                <div className="text-pink-400 font-semibold mb-1">
                  Founder-first
                </div>
                <div className="text-sm text-slate-500">
                  We partner only with high-quality founders building defensible
                  businesses.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}