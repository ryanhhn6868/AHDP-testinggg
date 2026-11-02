import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onRequestAuditClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestAuditClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Self-Assessment', href: '#calculator' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E4DA] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element in display face, no subtitles) */}
          <a
            href="#"
            className="flex items-center gap-3 font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0D1929] whitespace-nowrap shrink-0 hover:text-[#345C49] transition-colors"
            aria-label="Adelaide Hospitality Digital Partners Home"
          >
            <span className="w-9 h-9 rounded-md bg-[#0D1929] text-[#FAF8F5] flex items-center justify-center font-display text-sm font-semibold tracking-wider">
              AH
            </span>
            <span className="tracking-tight">AHDP</span>
          </a>

          {/* Zone 2: 4-5 Nav Links (Single-line, whitespace-nowrap) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#0D1929]/80" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#345C49] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#345C49]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action (Single-line button) */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={onRequestAuditClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#0D1929] hover:bg-[#182A44] rounded-md transition-colors shadow-sm whitespace-nowrap shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345C49]"
            >
              Request a Digital Audit
              <ArrowUpRight className="w-4 h-4 text-[#345C49]" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#0D1929] hover:bg-[#EFECE3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#345C49]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#E8E4DA] bg-[#FAF8F5] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-[#0D1929] hover:bg-[#EFECE3] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestAuditClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#0D1929] hover:bg-[#182A44] rounded-md transition-colors shadow-sm"
              >
                Request a Digital Audit
                <ArrowUpRight className="w-4 h-4 text-[#345C49]" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
