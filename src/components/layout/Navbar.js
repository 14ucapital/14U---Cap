import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-600 to-rose-900 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-pink-900/20">
            14U
          </div>
          <div>
            <div className="font-bold text-white tracking-tight text-lg">
              14U Capital
            </div>
            <div className="text-[10px] uppercase tracking-widest text-pink-500 font-semibold">
              Turn vision into velocity
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
          <Link href="#home" className="hover:text-pink-400 transition-colors">
            Home
          </Link>
          <Link href="#services" className="hover:text-pink-400 transition-colors">
            Services
          </Link>
          <Link href="#contact" className="hover:text-pink-400 transition-colors">
            Contact
          </Link>
          <Link
            href="#contact"
            className="text-white bg-gradient-to-r from-pink-700 to-rose-600 px-5 py-2 rounded-full shadow-lg shadow-pink-900/40 hover:opacity-90 transition-all transform hover:scale-105"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}