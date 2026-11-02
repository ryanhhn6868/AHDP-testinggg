import React from 'react';
import { ArrowUpRight, CheckCircle2, ChevronDown } from 'lucide-react';
import heroImage from '@/src/assets/images/hero_adelaide_hospitality_1793612001294.jpg';

interface HeroProps {
  onRequestAuditClick: () => void;
  onExploreServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestAuditClick, onExploreServicesClick }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tagline / Subtitle kicker (Unboxed text, no pills) */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#345C49] mb-4">
          <span>Adelaide Hospitality Digital Partners</span>
          <span aria-hidden="true" className="text-[#345C49]/40">·</span>
          <span>South Australia</span>
        </div>

        {/* 2-Column Split: Editorial Value Proposition & Real Hospitality Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Tagline, Proposition, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline requirement */}
            <p className="text-sm sm:text-base font-semibold text-[#345C49] tracking-wide">
              Smarter Marketing. Better Decisions. Sustainable Growth.
            </p>

            {/* Display Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#0D1929] tracking-tight leading-[1.15] text-balance">
              Digital Marketing & Analytics Built for Adelaide’s Independent Hospitality.
            </h1>

            {/* Body Copy */}
            <p className="text-base sm:text-lg text-[#0D1929]/80 leading-relaxed max-w-2xl">
              We help independent cafés, bistros, and restaurants across Adelaide attract high-intent local diners, eliminate third-party delivery commission traps, and build predictable repeat guest revenue through transparent data.
            </p>

            {/* Unboxed Trust Points (No pills, clean typographic layout) */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#0D1929]/75 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#345C49] shrink-0" />
                <span>Google Maps & Local Search Dominance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#345C49] shrink-0" />
                <span>Direct Table Booking & Zero-Commission Retention</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#345C49] shrink-0" />
                <span>Point-of-Sale (POS) & Real Margin Attribution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#345C49] shrink-0" />
                <span>Tailored for Adelaide CBD, Suburbs & Hills</span>
              </div>
            </div>

            {/* CTA Button Block */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onRequestAuditClick}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#0D1929] hover:bg-[#182A44] rounded-md transition-all shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345C49] group cursor-pointer"
              >
                <span>Request a Digital Audit</span>
                <ArrowUpRight className="w-4 h-4 text-[#345C49] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreServicesClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0D1929] bg-[#FAF8F5] hover:bg-[#EFECE3] border border-[#E8E4DA] rounded-md transition-colors cursor-pointer"
              >
                <span>View Our Capabilities</span>
                <ChevronDown className="w-4 h-4 text-[#0D1929]/60" />
              </button>
            </div>

            {/* Realistic Notice (No fake testimonials) */}
            <p className="text-xs text-[#0D1929]/60 pt-1">
              Complimentary 12-point diagnostic for licensed venues and cafés in South Australia. Delivered within 48 business hours.
            </p>
          </div>

          {/* Right Column: Hero Photograph & Operational Scope Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-[#E8E4DA] shadow-xl bg-[#F7F4EC]">
              <img
                src={heroImage}
                alt="Independent Adelaide café interior with heritage stone walls and specialty coffee bar"
                className="w-full h-80 sm:h-96 object-cover"
                loading="eager"
              />
              <div className="p-5 bg-[#F7F4EC] border-t border-[#E8E4DA]">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-serif font-bold text-[#0D1929] text-base">
                    Adelaide Hospitality Focus
                  </span>
                  <span className="text-xs font-semibold text-[#345C49]">
                    SA Independent Sector
                  </span>
                </div>
                <p className="text-xs text-[#0D1929]/75 leading-relaxed">
                  Supporting independent culinary businesses across Rundle Street, Gouger Street, Leigh & Peel, Norwood, Glenelg, Unley, Prospect, and the Adelaide Hills.
                </p>
                <div className="mt-4 pt-3 border-t border-[#E8E4DA] flex items-center justify-between text-xs text-[#0D1929]/60 font-mono tabular-nums">
                  <span>METRIC · COVERS & MARGINS</span>
                  <span>SA 5000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Diagnostic Focus Strip (Clean unboxed statistics/capabilities) */}
        <div className="mt-16 pt-8 border-t border-[#E8E4DA] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-[#345C49]">01. Visibility</div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#0D1929]">Local 3-Pack</div>
            <div className="text-xs text-[#0D1929]/70">Google Maps dominance when diners search nearby</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-[#345C49]">02. Profitability</div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#0D1929]">Zero-Commission</div>
            <div className="text-xs text-[#0D1929]/70">Direct table bookings without per-cover portal surcharges</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-[#345C49]">03. Retention</div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#0D1929]">Guest Lifecycle</div>
            <div className="text-xs text-[#0D1929]/70">Automated SMS & email flows for second-visit returns</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-[#345C49]">04. Attribution</div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#0D1929]">Real POS Data</div>
            <div className="text-xs text-[#0D1929]/70">True revenue tracking from ad impression to closed bill</div>
          </div>
        </div>
      </div>
    </section>
  );
};
