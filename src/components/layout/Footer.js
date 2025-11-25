export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
        <div>© {new Date().getFullYear()} 14U Capital. All rights reserved.</div>
        <div className="mt-2 md:mt-0">
          Reachable at{" "}
          <a
            href="mailto:hello@14ucapital.in"
            className="text-pink-600 hover:text-pink-500 transition-colors"
          >
            hello@14ucapital.in
          </a>
        </div>
      </div>
    </footer>
  );
}