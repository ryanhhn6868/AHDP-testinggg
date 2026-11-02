import React from 'react';
import { ShieldCheck, HeartHandshake, Eye, Award } from 'lucide-react';
import diningImage from '@/src/assets/images/adelaide_dining_atmosphere_1793612001176.jpg';
import analyticsImage from '@/src/assets/images/hospitality_analytics_tablet_1793612003100.jpg';
import exteriorImage from '@/src/assets/images/adelaide_cafe_exterior_1793612002051.jpg';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#FAF8F5] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#345C49] mb-3">
            About AHDP
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D1929] tracking-tight text-balance">
            Rooted in Adelaide. Built Exclusively for Hospitality Operators.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#0D1929]/75 leading-relaxed">
            Adelaide Hospitality Digital Partners (AHDP) was founded on a simple observation: independent South Australian restaurateurs and café owners craft world-class culinary experiences, but are continually squeezed by tech intermediaries, third-party delivery monopolies, and agencies that do not understand food and beverage economics.
          </p>
        </div>

        {/* 2-Column Story & Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Bento Layout */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-xl overflow-hidden border border-[#E8E4DA] shadow-sm">
              <img
                src={diningImage}
                alt="Adelaide dining room and wine bar setting at dusk"
                className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-3 bg-[#F7F4EC] text-xs text-[#0D1929]/75 border-t border-[#E8E4DA]">
                Independent dining culture across Greater Adelaide.
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#E8E4DA] shadow-sm">
              <img
                src={exteriorImage}
                alt="Heritage sandstone café exterior in South Australia"
                className="w-full h-44 object-cover"
                loading="lazy"
              />
            </div>

            <div className="rounded-xl overflow-hidden border border-[#E8E4DA] shadow-sm">
              <img
                src={analyticsImage}
                alt="Hospitality analytics dashboard on tablet beside specialty coffee"
                className="w-full h-44 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Ethos & Operational Principles */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#0D1929]">
                Our Three Core Operating Principles
              </h3>
              <p className="text-sm sm:text-base text-[#0D1929]/80 leading-relaxed">
                We measure our worth by the strength of your balance sheet, the consistency of your table covers, and your independence from predatory platforms.
              </p>
            </div>

            <div className="space-y-5 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-[#F7F4EC] border border-[#E8E4DA]">
                <div className="p-2 rounded-md bg-[#FAF8F5] text-[#345C49] border border-[#E8E4DA] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#0D1929]">
                    1. Margins Over Vanity Clicks
                  </h4>
                  <p className="text-xs sm:text-sm text-[#0D1929]/75 mt-1 leading-relaxed">
                    We never report social media impressions or arbitrary "engagement" without tracing direct reservation confirmations, ticket values, or first-party pick-up revenue.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-[#F7F4EC] border border-[#E8E4DA]">
                <div className="p-2 rounded-md bg-[#FAF8F5] text-[#345C49] border border-[#E8E4DA] shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#0D1929]">
                    2. No Opaque Lock-In Retainers
                  </h4>
                  <p className="text-xs sm:text-sm text-[#0D1929]/75 mt-1 leading-relaxed">
                    We earn our keep every single month. All accounts, ad pixels, analytics properties, and domain assets remain 100% owned by your hospitality business from day one.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-[#F7F4EC] border border-[#E8E4DA]">
                <div className="p-2 rounded-md bg-[#FAF8F5] text-[#345C49] border border-[#E8E4DA] shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#0D1929]">
                    3. Deep Local Adelaide Context
                  </h4>
                  <p className="text-xs sm:text-sm text-[#0D1929]/75 mt-1 leading-relaxed">
                    We understand Adelaide’s seasonal dining rhythms: the surge of Fringe & Festival Season in March, the winter dining lull, the weekend brunch rush, and the hyper-local loyalty of neighborhood regulars.
                  </p>
                </div>
              </div>
            </div>

            {/* Adelaide Focus Note */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#0D1929]/70 font-medium">
              <Award className="w-4 h-4 text-[#345C49] shrink-0" />
              <span>Independent & local South Australian business advocacy.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
