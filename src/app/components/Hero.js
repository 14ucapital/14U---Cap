import Link from 'next/link';
import Button from './ui/Button';

// --- SVG Icons for features (can be replaced with actual images/illustrations later) ---
const UsersIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="h-6 w-6 text-brand-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// --- End Icons ---


export default function Hero() {
  return (
    <>
      {/* ======================================= */}
      {/* 1. HERO SECTION - Text-Centric & Focused */}
      {/* ======================================= */}
      <section className="relative w-full bg-brand-surface pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          
          {/* Centered Text Layout */}
          {/* We set opacity-0 here, and the animation will make it visible */}
          <div className="text-center max-w-3xl mx-auto opacity-0 motion-safe:animate-fadeInUp will-change-[opacity,transform]">
            
            {/* Trust/Credibility Tag */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
              Validated Connections
            </span>

            {/* We apply a delay to stagger the animations */}
            <h1 
              className="mt-6 text-4xl font-bold tracking-tight text-brand-text sm:text-5xl lg:text-6xl opacity-0 motion-safe:animate-fadeInUp will-change-[opacity,transform]"
              style={{ animationDelay: '100ms' }} // Fast stagger
            >
              Connect. <span className="text-brand-primary">Grow.</span> Succeed.
            </h1>

            <p 
              className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-brand-muted opacity-0 motion-safe:animate-fadeInUp will-change-[opacity,transform]"
              style={{ animationDelay: '200ms' }} // Fast stagger
            >
              14U is the premier professional platform designed to directly link groundbreaking companies with strategic investors, fostering transparent and impactful partnerships.
            </p>

            <div 
              className="mt-10 flex flex-wrap gap-4 justify-center opacity-0 motion-safe:animate-fadeInUp will-change-[opacity,transform]"
              style={{ animationDelay: '300ms' }} // Fast stagger
            >
              <Button href="/signup" variant="primary" size="lg">
                Join 14U Today
              </Button>
              <Button href="/investors" variant="secondary" size="lg">
                Explore Opportunities
              </Button>
            </div>

            {/* Trust Features / Quick Benefits */}
            <div 
              className="mt-8 text-sm text-brand-muted flex flex-wrap gap-x-6 gap-y-2 justify-center opacity-0 motion-safe:animate-fadeInUp will-change-[opacity,transform]"
              style={{ animationDelay: '400ms' }} // Fast stagger
            >
              <span className="inline-flex items-center">
                <CheckCircleIcon />
                <span className="ml-2">Verified Profiles</span>
              </span>
              <span className="inline-flex items-center">
                <CheckCircleIcon />
                <span className="ml-2">Secure Platform</span>
              </span>
              <span className="inline-flex items-center">
                <CheckCircleIcon />
                <span className="ml-2">Direct Connections</span>
              </span>
            </div>
          </div>
          
        </div>
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="w-[80rem] h-[30rem] bg-gradient-radial from-brand-primary/10 via-brand-surface/0 to-transparent blur-3xl opacity-60" />
        </div>
      </section>

      {/* ======================================= */}
      {/* 2. ABOUT THE PROJECT SECTION - Refined Messaging */}
      {/* ======================================= */}
      <section className="w-full bg-brand-bg py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center max-w-3xl mx-auto opacity-0 motion-safe:animate-fadeInUp will-change-[opacity,transform]"
            style={{ animationDelay: '100ms' }} // Start this section's animation
          >
            <span className="font-semibold text-brand-primary uppercase tracking-wide">Our Mission</span>
            <h2 
              className="mt-2 text-3xl font-bold tracking-tight text-brand-text sm:text-4xl opacity-0 motion-safe:animate-fadeInUp will-change-[opacity,transform]"
              style={{ animationDelay: '200ms' }}
            >
              Elevating Fundraising and Investment
            </h2>
            <p 
              className="mt-4 text-xl text-brand-muted opacity-0 motion-safe:animate-fadeInUp will-change-[opacity,transform]"
              style={{ animationDelay: '300ms' }}
            >
              At 14U, we believe great ideas deserve great capital, and smart capital deserves great opportunities. We streamline discovery, due diligence, and deal-making.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1: Clarity on Verified Profiles */}
            <div 
              className="text-center bg-brand-surface p-8 rounded-xl shadow-lg border border-brand-border transform motion-safe:hover:scale-105 transition-transform duration-300 opacity-0 motion-safe:animate-fadeInUp will-change-[opacity,transform]"
              style={{ animationDelay: '400ms' }} // Staggering the cards
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary text-white mx-auto">
                <UsersIcon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-brand-text">Curated Network</h3>
              <p className="mt-2 text-base text-brand-muted">
                Access a highly-vetted community of serious investors and innovative companies, ensuring quality connections from day one.
              </p>
            </div>
            
            {/* Feature 2: Emphasize Precision Matching */}
            <div 
              className="text-center bg-brand-surface p-8 rounded-xl shadow-lg border border-brand-border transform motion-safe:hover:scale-105 transition-transform duration-300 opacity-0 motion-safe:animate-fadeInUp will-change-[opacity,transform]"
              style={{ animationDelay: '500ms' }} // Staggering the cards
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary text-white mx-auto">
                <SearchIcon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-brand-text">Precision Matching</h3>
              <p className="mt-2 text-base text-brand-muted">
                Utilize advanced search and filtering tools to pinpoint partners aligning perfectly with your investment criteria or funding needs.
              </p>
            </div>
            
            {/* Feature 3: Focus on Streamlined Process */}
            <div 
              className="text-center bg-brand-surface p-8 rounded-xl shadow-lg border border-brand-border transform motion-safe:hover:scale-105 transition-transform duration-300 opacity-0 motion-safe:animate-fadeInUp will-change-[opacity,transform]"
              style={{ animationDelay: '600ms' }} // Staggering the cards
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary text-white mx-auto">
                <DocumentIcon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-brand-text">Streamlined Operations</h3>
              <p className="mt-2 text-base text-brand-muted">
                From initial contact to secure document exchange, our platform simplifies every step of the deal-making process.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ======================================= */}
      {/* 3. Zth COLLABORATION SECTION - Text + Stats Layout */}
      {/* ======================================= */}
      <section className="w-full bg-brand-surface py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
            
            {/* Left Column: Text */}
            <div 
              className="space-y-8 opacity-0 motion-safe:animate-fadeInUp will-change-[opacity,transform]"
              style={{ animationDelay: '100ms' }} // Start this section's animation
            >
              <span className="font-semibold text-brand-accent uppercase tracking-wide">Our Technology Partner</span>
              <h2 className="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
                Built on the Foundation of <span className="text-brand-accent">Zth</span>
              </h2>
              <p className="text-lg text-brand-muted">
                To deliver a truly robust and performant platform, 14U proudly leverages core technologies and infrastructure from Zth, a leader in scalable and secure digital solutions. This partnership ensures unparalleled reliability and a future-proof foundation for your growth.
              </p>
              <Button href="/zth-partnership" variant="primary" size="lg">
                Learn More About Our Tech
              </Button>
            </div>

            {/* Right Column: Key Stats (Text-based) */}
            <div className="space-y-6 mt-12 lg:mt-0">
              {/* Stat 1 */}
              <div 
                className="p-6 bg-brand-bg rounded-xl shadow-sm border border-brand-border opacity-0 motion-safe:animate-fadeInUp will-change-[opacity,transform]"
                style={{ animationDelay: '200ms' }}
              >
                <p className="text-4xl font-bold text-brand-primary">99.99%</p>
                <p className="mt-2 text-base text-brand-muted">Guaranteed Uptime & Availability</p>
              </div>
              {/* Stat 2 */}
              <div 
                className="p-6 bg-brand-bg rounded-xl shadow-sm border border-brand-border opacity-0 motion-safe:animate-fadeInUp will-change-[opacity,transform]"
                style={{ animationDelay: '300ms' }}
              >
                <p className="text-4xl font-bold text-brand-accent">Enterprise-Grade</p>
                <p className="mt-2 text-base text-brand-muted">Security & Data Protection</p>
              </div>
              {/* Stat 3 (Added for balance) */}
              <div 
                className="p-6 bg-brand-bg rounded-xl shadow-sm border border-brand-border opacity-0 motion-safe:animate-fadeInUp will-change-[opacity,transform]"
                style={{ animationDelay: '400ms' }}
              >
                <p className="text-4xl font-bold text-brand-primary">24/7</p>
                <p className="mt-2 text-base text-brand-muted">Dedicated Platform Support</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}