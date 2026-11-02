import React, { useState } from 'react';
import { MapPin, CalendarCheck, Users, TrendingUp, BarChart3, Check, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForAudit: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForAudit }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const services = [
    {
      id: 'local-search',
      title: 'Local Search & Google Maps Dominance',
      icon: MapPin,
      subtitle: 'Be the first choice when diners search for coffee, lunch or dinner in your suburb.',
      description:
        'Over 74% of dining decisions in Adelaide start with a local mobile query ("best café near me", "Italian restaurant North Adelaide", "brunch Norwood"). We engineer your digital presence to rank consistently in the Google Maps Local 3-Pack and capture hungry diners before they scroll to chain competitors.',
      deliverables: [
        'Complete Google Business Profile architecture and dining category mapping',
        'Structured schema markup for digital menus, dietary tags, and opening hours',
        'High-authority Australian local citations and geocoded directory syndication',
        'Automated review generation workflows and reputation sentiment monitoring',
      ],
      idealFor: 'Independent cafés, breakfast spots, neighborhood wine bars, and suburban bistros.',
      adelaidePrecincts: 'Tested across Adelaide CBD, North Adelaide, Norwood, Unley & Glenelg.',
    },
    {
      id: 'direct-bookings',
      title: 'Direct Table Bookings & Menu Engineering',
      icon: CalendarCheck,
      subtitle: 'Eliminate third-party booking fees and turn casual menu browsers into confirmed covers.',
      description:
        'Third-party portals charge up to $3–$6 per seated diner or lock customer emails into their private marketplace. We configure high-converting, lightning-fast direct reservation widgets (SevenRooms, Resy, OpenTable, Now Book It) directly on your domain so you own the customer relationship forever.',
      deliverables: [
        'Mobile-first menu speed optimization (sub-1 second load time without PDFs)',
        'Frictionless booking engine embed with zero third-party domain redirects',
        'Menu psychology and layout optimization to spotlight high-margin dishes',
        'Direct booking funnel tracking from website arrival to completed reservation',
      ],
      idealFor: 'Full-service restaurants, bistros, chef-driven tasting rooms, and private dining rooms.',
      adelaidePrecincts: 'Tailored for dinner venues balancing Friday–Saturday seat turnover.',
    },
    {
      id: 'guest-retention',
      title: 'Automated Guest Retention & VIP Lifecycles',
      icon: Users,
      subtitle: 'Transform one-off Adelaide festival or weekend diners into loyal, recurring regulars.',
      description:
        'Acquiring a new guest is 5x more costly than welcoming back an existing diner. We build privacy-compliant, automated SMS and email sequences triggered by dining frequency, birthdays, anniversaries, and lapsed visits to ensure your tables remain filled through quiet midweek trade.',
      deliverables: [
        'Automated post-dining feedback loops to resolve issues before public reviews',
        'Segmented VIP guest campaigns (wine releases, seasonal menu previews)',
        'Midweek dining incentives to fill quiet Tuesday and Wednesday services',
        'Privacy Act 1988 & Australian Spam Act compliant subscriber capture',
      ],
      idealFor: 'Cafés with daily regulars, destination dining, and wine-focused hospitality groups.',
      adelaidePrecincts: 'Crucial for navigating Adelaide’s seasonal festival peaks and winter troughs.',
    },
    {
      id: 'paid-dining-ads',
      title: 'High-Intent Paid Social & Dining Campaigns',
      icon: TrendingUp,
      subtitle: 'Hyper-local Meta & Google advertising focused strictly on covers, not vanity likes.',
      description:
        'Forget boosted posts that deliver empty heart reactions. We run laser-targeted Meta (Instagram/Facebook) and Google Search campaigns targeting affluent food enthusiasts within a 3–8km radius of your venue during peak decision windows (11am for lunch, 4pm for dinner).',
      deliverables: [
        'Day-parted ad scheduling targeting nearby office workers and weekend diners',
        'Creative direction optimized for South Australia’s culinary and wine culture',
        'Event and function marketing (Christmas parties, private buyouts, wine dinners)',
        'Strict cost-per-acquisition (CPA) guardrails benchmarked to cover value',
      ],
      idealFor: 'Venues with private dining spaces, special weekend events, or launch venues.',
      adelaidePrecincts: 'Targeting inner-metro Adelaide and affluent residential corridors.',
    },
    {
      id: 'analytics-attribution',
      title: 'Hospitality Analytics & POS Attribution',
      icon: BarChart3,
      subtitle: 'Finally know exactly which marketing dollar produced which seated bill at your POS.',
      description:
        'Most marketing agencies report impressions, reach, and clicks because they have no integration with restaurant operations. We bridge the gap between your digital channels and point-of-sale data (Square, Lightspeed, Ordermate, Kounta) to give you weekly clarity on actual gross margins and return on ad spend.',
      deliverables: [
        'End-to-end POS and booking reconciliation reporting',
        'Clear dashboard tracking cost per acquired table and customer lifetime value',
        'Third-party delivery vs. direct ordering margin variance analysis',
        'Monthly strategic briefing with your Adelaide-based digital partner',
      ],
      idealFor: 'Operators operating single high-volume venues or multi-site Adelaide concepts.',
      adelaidePrecincts: 'Built for operators who demand operational truth over marketing hype.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#FAF8F5] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#345C49] mb-3">
            Core Consultancy Capabilities
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D1929] tracking-tight text-balance">
            Specialized Digital Strategies Engineered for Hospitality Margins.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#0D1929]/75 leading-relaxed">
            Unlike generic marketing agencies that apply e-commerce playbooks to dining rooms, AHDP builds marketing infrastructure around food costs, table turn times, and direct guest loyalty.
          </p>
        </div>

        {/* Interactive Service Navigation / Segmented selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Column */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#0D1929]/50 mb-3 px-2">
              Select Practice Area
            </div>
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = selectedTab === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedTab(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all border flex items-start gap-4 cursor-pointer ${
                    isActive
                      ? 'bg-[#0D1929] text-[#FAF8F5] border-[#0D1929] shadow-md'
                      : 'bg-[#F7F4EC] text-[#0D1929] border-[#E8E4DA] hover:bg-[#EFECE3]'
                  }`}
                  aria-selected={isActive}
                >
                  <div
                    className={`p-2 rounded-md shrink-0 ${
                      isActive ? 'bg-[#345C49] text-[#FAF8F5]' : 'bg-[#FAF8F5] text-[#345C49] border border-[#E8E4DA]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-serif font-semibold text-base leading-snug">
                      {service.title}
                    </div>
                    <div
                      className={`text-xs mt-1 truncate ${
                        isActive ? 'text-[#FAF8F5]/80' : 'text-[#0D1929]/70'
                      }`}
                    >
                      {service.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Deep Dive Card */}
          <div className="lg:col-span-7">
            {services[selectedTab] && (
              <div className="bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 text-xs font-mono text-[#345C49] uppercase tracking-wider mb-2">
                  <span>Capability 0{selectedTab + 1}</span>
                  <span aria-hidden="true">·</span>
                  <span>Adelaide Hospitality Focus</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D1929]">
                  {services[selectedTab].title}
                </h3>

                <p className="mt-2 text-sm sm:text-base font-medium text-[#345C49]">
                  {services[selectedTab].subtitle}
                </p>

                <p className="mt-4 text-sm sm:text-base text-[#0D1929]/80 leading-relaxed">
                  {services[selectedTab].description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-6 border-t border-[#E8E4DA]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#0D1929]/60 mb-3">
                    Core Audit & Implementation Deliverables
                  </h4>
                  <ul className="space-y-3">
                    {services[selectedTab].deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#0D1929]/85">
                        <span className="p-0.5 rounded-full bg-[#EAF1ED] text-[#345C49] shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Context & Action Bar */}
                <div className="mt-8 pt-6 border-t border-[#E8E4DA] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F7F4EC] p-4 rounded-lg">
                  <div>
                    <div className="text-xs font-semibold text-[#0D1929]">
                      Venue Applicability:
                    </div>
                    <div className="text-xs text-[#0D1929]/70 mt-0.5">
                      {services[selectedTab].idealFor}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectServiceForAudit(services[selectedTab].title)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#345C49] hover:bg-[#2E533F] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Audit This Area</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
