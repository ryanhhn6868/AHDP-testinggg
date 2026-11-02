import React from 'react';
import { Search, Compass, ShieldAlert, FileText, ArrowRight } from 'lucide-react';

interface AuditFrameworkProps {
  onRequestAuditClick: () => void;
}

export const AuditFramework: React.FC<AuditFrameworkProps> = ({ onRequestAuditClick }) => {
  const steps = [
    {
      number: '01',
      title: 'Local Visibility & Search Diagnostic',
      icon: Search,
      timeframe: 'Hours 0–12',
      focus: 'Discoverability',
      description:
        'We evaluate how your venue appears to diners across Greater Adelaide searching on Google Search, Google Maps, Apple Maps, and local directories. We audit your primary dining categories, location geocodes, menu indexing, and competitor positioning within your immediate 5km radius.',
      keyChecks: [
        'Google Business Profile category alignment and attributes',
        'Mobile local 3-pack rank tracking for top dining intent keywords',
        'Local citation consistency (Address, Phone, Operating Hours)',
      ],
    },
    {
      number: '02',
      title: 'Menu Experience & Booking Friction Audit',
      icon: Compass,
      timeframe: 'Hours 12–24',
      focus: 'Conversion',
      description:
        'A potential diner visits your website on a smartphone while standing on the pavement. Does your menu open instantly, or does it require downloading a clunky 18MB PDF? We test your booking engine flow across iOS and Android to pinpoint where hungry visitors abandon their table reservation.',
      keyChecks: [
        'Mobile page speed performance and Core Web Vitals',
        'Direct booking flow friction analysis and drop-off points',
        'Digital menu accessibility, price transparency, and dietary clarity',
      ],
    },
    {
      number: '03',
      title: 'Retention & Margin Vulnerability Review',
      icon: ShieldAlert,
      timeframe: 'Hours 24–36',
      focus: 'Profitability',
      description:
        'We calculate how much revenue you are losing to third-party delivery aggregators (25%–35% commission rates) and booking directories. We examine whether you have automated systems in place to capture diner contact details and invite them back for slow midweek services.',
      keyChecks: [
        'Delivery platform vs. direct ordering margin exposure',
        'Guest data collection compliance and database health',
        'Review velocity, sentiment patterns, and response protocols',
      ],
    },
    {
      number: '04',
      title: '90-Day Actionable Blueprint & Consultation',
      icon: FileText,
      timeframe: 'Hours 36–48',
      focus: 'Execution',
      description:
        'You receive a comprehensive, jargon-free PDF report highlighting your greatest profit opportunities, prioritized by impact and ease of implementation. We review the findings together in a focused 30-minute consultation (over coffee or video call) with zero sales pressure.',
      keyChecks: [
        '12-point prioritized diagnostic score with concrete fixes',
        'Immediate quick wins achievable in under 14 days',
        'Realistic 90-day roadmap aligned with your front-of-house capacity',
      ],
    },
  ];

  return (
    <section id="methodology" className="py-20 bg-[#F7F4EC] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#345C49] mb-3">
            Our Methodology
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D1929] tracking-tight text-balance">
            The 12-Point Hospitality Digital Diagnostic.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#0D1929]/75 leading-relaxed">
            Every partnership begins with objective diagnostic evidence. We examine your digital presence through the lens of restaurant economics: guest acquisition cost, table yield, and margin protection.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] p-6 flex flex-col justify-between shadow-sm hover:border-[#345C49]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-[#345C49]">
                      {step.number}
                    </span>
                    <span className="text-xs font-mono text-[#0D1929]/50 tracking-wider">
                      {step.timeframe}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E8E4DA] text-[#345C49] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#0D1929] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#0D1929]/70 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E4DA]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#345C49] mb-2">
                    Key Diagnostic Checks:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#0D1929]/80">
                    {step.keyChecks.map((check, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#345C49] font-bold">·</span>
                        <span>{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Audit Callout Banner */}
        <div className="mt-12 bg-[#0D1929] text-[#FAF8F5] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-[#0D1929]">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[#345C49]">
              Transparent & Objective
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF8F5]">
              No obligation. Keep the complete findings whether we work together or not.
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/75">
              We conduct this audit to prove our domain expertise upfront. If you prefer to implement the recommendations in-house, the audit is yours to keep.
            </p>
          </div>

          <button
            onClick={onRequestAuditClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#345C49] hover:bg-[#2E533F] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Request Your Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
