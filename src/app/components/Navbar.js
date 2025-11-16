"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./ui/Button"; // <-- IMPORT your new Button

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-surface/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* --- 1. LOGO --- */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link href="/">
              <span className="text-2xl font-bold text-brand-dark tracking-tight">
                14U<span className="text-brand-primary">.</span>
              </span>
            </Link>
          </div>

          {/* --- 2. SEARCH BAR --- */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-brand-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-brand-border rounded-full leading-5 bg-brand-bg text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary sm:text-sm transition-all duration-200"
                placeholder="Search for investors or companies..."
              />
            </div>
          </div>

          {/* --- 3. DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/investors" className="text-sm font-medium text-brand-muted hover:text-brand-primary transition-colors">
              Investors
            </Link>
            <Link href="/companies" className="text-sm font-medium text-brand-muted hover:text-brand-primary transition-colors">
              Companies
            </Link>
            <Link href="/about" className="text-sm font-medium text-brand-muted hover:text-brand-primary transition-colors">
              About Us
            </Link>
            
            <div className="h-6 w-px bg-brand-border mx-2"></div>

            {/* --- USE THE NEW BUTTON --- */}
            <Button href="/login" variant="ghost">
              Log in
            </Button>
            
            <Button href="/signup" variant="primary">
              Get Started
            </Button>
            {/* --- END OF UPDATE --- */}

          </div>

          {/* --- 4. MOBILE MENU BUTTON --- */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-muted hover:text-brand-primary hover:bg-brand-bg focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-surface border-t border-brand-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/investors" className="block px-3 py-2 rounded-md text-base font-medium text-brand-text hover:bg-brand-bg hover:text-brand-primary">
              Investors
            </Link>
            <Link href="/companies" className="block px-3 py-2 rounded-md text-base font-medium text-brand-text hover:bg-brand-bg hover:text-brand-primary">
              Companies
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-brand-text hover:bg-brand-bg hover:text-brand-primary">
              About Us
            </Link>

            {/* --- USE THE NEW BUTTON --- */}
            <Button href="/login" variant="secondary" className="w-full mt-2">
              Log in
            </Button>
            <Button href="/signup" variant="primary" className="w-full mt-2">
              Get Started
            </Button>
            {/* --- END OF UPDATE --- */}
            
          </div>
        </div>
      )}
    </nav>
  );
}