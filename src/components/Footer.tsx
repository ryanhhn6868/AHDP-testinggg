import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08101C] text-[#FAF8F5] border-t border-[#162032] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FAF8F5]/10">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded bg-[#FAF8F5] text-[#08101C] flex items-center justify-center font-display text-xs font-bold tracking-wider">
                AH
              </span>
              <span className="font-serif text-xl font-bold tracking-tight text-[#FAF8F5]">
                Adelaide Hospitality Digital Partners
              </span>
            </div>

            <p className="text-xs font-semibold text-[#345C49] tracking-wider uppercase">
              Smarter Marketing. Better Decisions. Sustainable Growth.
            </p>

            <p className="text-xs text-[#FAF8F5]/70 max-w-sm leading-relaxed">
              Specialized digital marketing, local SEO, direct booking architecture, and revenue attribution consultancy for independent South Australian dining venues.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#345C49]">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80">
              <li>
                <a href="#services" className="hover:text-[#FAF8F5] transition-colors">
                  Capabilities & Deliverables
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-[#FAF8F5] transition-colors">
                  The 12-Point Audit Framework
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#FAF8F5] transition-colors">
                  Digital Health Self-Assessment
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF8F5] transition-colors">
                  About AHDP & Adelaide Ethos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FAF8F5] transition-colors">
                  Request a Digital Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Adelaide Office & Service Footprint */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#345C49]">
              Practice Footprint
            </div>
            <div className="space-y-1 text-xs text-[#FAF8F5]/80">
              <p className="font-semibold text-[#FAF8F5]">Adelaide Hospitality Digital Partners Pty Ltd</p>
              <p>Grenfell Street, Adelaide SA 5000</p>
              <p>Email: audit@ahdp.com.au</p>
              <p>Direct: (08) 7089 4210</p>
            </div>
            <div className="pt-2 text-[11px] text-[#FAF8F5]/50 leading-relaxed">
              Serving independent operators across Adelaide CBD, North Adelaide, Norwood, Unley, Glenelg, Bowden, Prospect, Henley Beach, and the Adelaide Hills.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/50">
          <div>
            &copy; {new Date().getFullYear()} Adelaide Hospitality Digital Partners. All rights reserved. ABN 48 692 814 302.
          </div>

          <div className="flex items-center gap-6">
            <span>South Australia, Australia</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#FAF8F5]/70 hover:text-[#FAF8F5] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
