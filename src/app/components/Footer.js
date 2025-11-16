import Link from 'next/link';

// Simple SVGs for social icons
const LinkedInIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.783 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.25 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);


export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* --- Column 1: Logo and Socials --- */}
          <div className="space-y-8 xl:col-span-1">
            <span className="text-3xl font-bold text-brand-dark tracking-tight">
              14U<span className="text-brand-primary">.</span>
            </span>
            <p className="text-base text-brand-muted">
              Direct connections for investors and startups.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-brand-muted hover:text-brand-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <LinkedInIcon />
              </a>
              <a href="#" className="text-brand-muted hover:text-brand-primary transition-colors">
                <span className="sr-only">Twitter (X)</span>
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* --- Column 2 & 3: Navigation Links --- */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-brand-text uppercase">Platform</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><Link href="/investors" className="text-base text-brand-muted hover:text-brand-primary transition-colors">Find Investors</Link></li>
                  <li><Link href="/companies" className="text-base text-brand-muted hover:text-brand-primary transition-colors">Find Companies</Link></li>
                  <li><Link href="/pricing" className="text-base text-brand-muted hover:text-brand-primary transition-colors">Pricing</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-brand-text uppercase">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><Link href="/about" className="text-base text-brand-muted hover:text-brand-primary transition-colors">About Us</Link></li>
                  <li><Link href="/blog" className="text-base text-brand-muted hover:text-brand-primary transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="text-base text-brand-muted hover:text-brand-primary transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-brand-text uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><Link href="/privacy" className="text-base text-brand-muted hover:text-brand-primary transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-base text-brand-muted hover:text-brand-primary transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar: Copyright --- */}
        <div className="mt-12 border-t border-brand-border pt-8">
          <p className="text-base text-brand-muted xl:text-center">
            &copy; {new Date().getFullYear()} 14U, Inc. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}