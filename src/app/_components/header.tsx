"use client";
import { useState, useEffect } from "react";
import cn from "classnames";
import Link from "next/link";
import { BASE_PATH } from "@/lib/constants";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      <div
        className={cn(
          "fixed top-0 w-full transition-all duration-300",
          scrolled
            ? "bg-gray-50/50 shadow-[0_1px_0_0_rgba(0,0,0,0.05)] backdrop-blur"
            : "bg-gray-50",
          // Ensure header is below mobile menu when open
          mobileMenuOpen ? "z-40" : "z-50"
        )}
      >
        <div className={cn(
          "h-0.5 w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0"
        )}></div>
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Logo Section */}
            <Link
              href="/"
              className="flex items-center space-x-3 group"
            >
              <span className={cn(
                "text-xl font-semibold tracking-tight text-gray-900 transition-colors duration-200",
                scrolled ? "text-gray-900" : "text-gray-900"
              )}>
                MathFin
                <span className="text-brand">.</span>
              </span>
              <span className="h-4 w-px bg-gray-900/10 mx-3"></span>
              <span className={cn(
                "text-sm transition-colors duration-200",
                scrolled ? "text-gray-600" : "text-gray-700"
              )}>
                University of Toronto
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                <NavLink href={`${BASE_PATH}/#about-us`} dimmed={scrolled} isAnchor>About</NavLink>
                <NavLink href="/people" dimmed={scrolled}>People</NavLink>
                <NavLink href="/publications" dimmed={scrolled}>Recent Publications</NavLink>
                <NavLink href="/news" dimmed={scrolled}>News</NavLink>
                <NavLink href="/media" dimmed={scrolled}>Media</NavLink>
                <NavLink href="/faq" dimmed={scrolled}>FAQ</NavLink>
              </nav>
              <div className="h-6 w-px bg-gray-900/5"></div>
              <a
                href="https://www.statistics.utoronto.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center font-medium transition-colors duration-200",
                  scrolled ? "text-brand/80 hover:text-brand" : "text-brand/90 hover:text-brand"
                )}
              >
                Statistical Sciences
                <svg className="w-4 h-4 ml-1 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Separate from header for proper z-index stacking */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          mobileMenuOpen ? "visible" : "invisible"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/60 transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="p-5 border-b border-gray-200 bg-white">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">Navigation</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto p-5 space-y-1 bg-white">
              <MobileNavLink href={`${BASE_PATH}/#about-us`} onClick={() => setMobileMenuOpen(false)} isAnchor>About</MobileNavLink>
              <MobileNavLink href="/people" onClick={() => setMobileMenuOpen(false)}>People</MobileNavLink>
              <MobileNavLink href="/publications" onClick={() => setMobileMenuOpen(false)}>Recent Publications</MobileNavLink>
              <MobileNavLink href="/news" onClick={() => setMobileMenuOpen(false)}>News</MobileNavLink>
              <MobileNavLink href="/media" onClick={() => setMobileMenuOpen(false)}>Media</MobileNavLink>
              <MobileNavLink href="/faq" onClick={() => setMobileMenuOpen(false)}>FAQ</MobileNavLink>
            </nav>

            <div className="p-5 border-t border-gray-200 bg-white">
              <a
                href="https://www.statistics.utoronto.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-brand/10 text-brand hover:bg-brand/20 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="font-medium">Statistical Sciences</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Navigation link component for desktop
const NavLink = ({ href, children, dimmed = false, isAnchor = false }: { href: string, children: React.ReactNode, dimmed?: boolean, isAnchor?: boolean }) => {
  const className = cn(
    "relative py-2 text-sm transition-colors group",
    dimmed
      ? "text-gray-600 hover:text-gray-900"
      : "text-gray-700 hover:text-gray-900"
  );

  return isAnchor ? (
    <a href={href} className={className}>
      {children}
      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent/80 group-hover:w-full transition-all duration-200" />
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent/80 group-hover:w-full transition-all duration-200" />
    </Link>
  );
};

// Navigation link component for mobile
const MobileNavLink = ({ href, children, onClick, isAnchor = false }: { href: string, children: React.ReactNode, onClick: () => void, isAnchor?: boolean }) => {
  const className = "block px-4 py-2.5 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors";

  return isAnchor ? (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Header;
