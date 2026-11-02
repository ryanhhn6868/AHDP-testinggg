import React, { useState, useMemo } from 'react';
import { calculateDigitalHealthScore, AuditDiagnosticInput } from '../utils/auditCalculator';
import { Calculator, AlertTriangle, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface InteractiveAuditEstimatorProps {
  onPreFillAuditRequest: (preFillData: {
    venueType: string;
    weeklyCovers: number;
    challenge: string;
    notes: string;
  }) => void;
}

export const InteractiveAuditEstimator: React.FC<InteractiveAuditEstimatorProps> = ({
  onPreFillAuditRequest,
}) => {
  const [venueType, setVenueType] = useState<AuditDiagnosticInput['venueType']>('restaurant');
  const [weeklyCovers, setWeeklyCovers] = useState<number>(450);
  const [spendPerHead, setSpendPerHead] = useState<number>(55);
  const [hasGoogleBusiness, setHasGoogleBusiness] = useState<boolean>(true);
  const [hasDirectBooking, setHasDirectBooking] = useState<boolean>(false);
  const [hasGuestRetention, setHasGuestRetention] = useState<boolean>(false);
  const [runsAds, setRunsAds] = useState<boolean>(false);
  const [deliveryPercentage, setDeliveryPercentage] = useState<number>(20);

  const diagnosticResult = useMemo(() => {
    return calculateDigitalHealthScore({
      venueType,
      averageWeeklyCovers: weeklyCovers,
      averageSpendPerHead: spendPerHead,
      hasClaimedGoogleBusiness: hasGoogleBusiness,
      hasDirectOnlineBooking: hasDirectBooking,
      usesGuestRetentionSystem: hasGuestRetention,
      runsPaidMetaOrSearchAds: runsAds,
      thirdPartyDeliveryPercentage: deliveryPercentage,
    });
  }, [
    venueType,
    weeklyCovers,
    spendPerHead,
    hasGoogleBusiness,
    hasDirectBooking,
    hasGuestRetention,
    runsAds,
    deliveryPercentage,
  ]);

  const handleApplyToForm = () => {
    const venueLabelMap: Record<string, string> = {
      cafe: 'Café / Specialty Coffee',
      restaurant: 'Casual or Fine Dining Restaurant',
      wine_bar: 'Wine Bar / Bistro',
      bakery: 'Artisan Bakery / Patisserie',
      pub: 'Pub / Gastropub',
    };

    const primaryRecommendation =
      diagnosticResult.keyRecommendations[0] || 'Comprehensive Digital & Local SEO Audit';

    const notesSummary = `Diagnostic Self-Assessment Results: Health Score: ${
      diagnosticResult.overallScore
    }/100 (${diagnosticResult.tier}). Est. Annual Commission Loss: $${diagnosticResult.estimatedAnnualCommissionLoss.toLocaleString()} AUD. Weekly covers: ${weeklyCovers}. Spend/head: $${spendPerHead}. Delivery %: ${deliveryPercentage}%.`;

    onPreFillAuditRequest({
      venueType: venueLabelMap[venueType] || venueType,
      weeklyCovers,
      challenge: primaryRecommendation,
      notes: notesSummary,
    });
  };

  return (
    <section id="calculator" className="py-20 bg-[#FAF8F5] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#345C49] mb-3">
            Interactive Diagnostic Tool
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D1929] tracking-tight text-balance">
            Adelaide Hospitality Digital Health & Margin Estimator.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#0D1929]/75 leading-relaxed">
            Test your venue’s current digital baseline in 60 seconds. See your estimated third-party commission exposure and discover where high-margin direct covers are being lost.
          </p>
        </div>

        {/* 2-Column Diagnostic Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#0D1929]/70 mb-2">
                1. Venue Classification
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'cafe', label: 'Café / Coffee' },
                  { id: 'restaurant', label: 'Restaurant / Dining' },
                  { id: 'wine_bar', label: 'Wine Bar / Bistro' },
                  { id: 'bakery', label: 'Bakery' },
                  { id: 'pub', label: 'Pub / Gastropub' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setVenueType(item.id as AuditDiagnosticInput['venueType'])}
                    className={`py-2 px-3 text-xs font-medium rounded-md border text-center transition-all cursor-pointer ${
                      venueType === item.id
                        ? 'bg-[#0D1929] text-[#FAF8F5] border-[#0D1929]'
                        : 'bg-[#FAF8F5] text-[#0D1929] border-[#E8E4DA] hover:bg-[#EFECE3]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Volume & Spend Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="weeklyCoversInput" className="text-xs font-mono uppercase tracking-wider text-[#0D1929]/70">
                    Weekly Covers / Orders
                  </label>
                  <span className="font-mono text-sm font-semibold text-[#0D1929] tabular-nums">
                    {weeklyCovers.toLocaleString()}
                  </span>
                </div>
                <input
                  id="weeklyCoversInput"
                  type="range"
                  min="50"
                  max="2500"
                  step="25"
                  value={weeklyCovers}
                  onChange={(e) => setWeeklyCovers(Number(e.target.value))}
                  className="w-full accent-[#345C49] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#0D1929]/50 font-mono mt-1">
                  <span>50</span>
                  <span>1,200</span>
                  <span>2,500+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="spendPerHeadInput" className="text-xs font-mono uppercase tracking-wider text-[#0D1929]/70">
                    Avg Spend Per Head ($ AUD)
                  </label>
                  <span className="font-mono text-sm font-semibold text-[#0D1929] tabular-nums">
                    ${spendPerHead}
                  </span>
                </div>
                <input
                  id="spendPerHeadInput"
                  type="range"
                  min="12"
                  max="220"
                  step="2"
                  value={spendPerHead}
                  onChange={(e) => setSpendPerHead(Number(e.target.value))}
                  className="w-full accent-[#345C49] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#0D1929]/50 font-mono mt-1">
                  <span>$12 (Café)</span>
                  <span>$65 (Bistro)</span>
                  <span>$220 (Fine)</span>
                </div>
              </div>
            </div>

            {/* Delivery Aggregator Share */}
            <div className="pt-2">
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="deliveryPercentInput" className="text-xs font-mono uppercase tracking-wider text-[#0D1929]/70">
                  Aggregator Order Share (UberEats / DoorDash)
                </label>
                <span className="font-mono text-sm font-semibold text-[#0D1929] tabular-nums">
                  {deliveryPercentage}% of sales
                </span>
              </div>
              <input
                id="deliveryPercentInput"
                type="range"
                min="0"
                max="70"
                step="5"
                value={deliveryPercentage}
                onChange={(e) => setDeliveryPercentage(Number(e.target.value))}
                className="w-full accent-[#345C49] cursor-pointer"
              />
              <p className="text-xs text-[#0D1929]/60 mt-1">
                Standard delivery platforms take 25%–35% of each transaction.
              </p>
            </div>

            {/* Digital Foundation Checklist */}
            <div className="pt-3 border-t border-[#E8E4DA] space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#0D1929]/70">
                Current Digital Setup
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 rounded-lg border border-[#E8E4DA] bg-[#FAF8F5] cursor-pointer hover:bg-[#EFECE3] transition-colors">
                  <input
                    type="checkbox"
                    checked={hasGoogleBusiness}
                    onChange={(e) => setHasGoogleBusiness(e.target.checked)}
                    className="w-4 h-4 rounded text-[#345C49] accent-[#345C49]"
                  />
                  <span className="text-xs font-medium text-[#0D1929]">
                    Claimed & active Google Maps profile
                  </span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-lg border border-[#E8E4DA] bg-[#FAF8F5] cursor-pointer hover:bg-[#EFECE3] transition-colors">
                  <input
                    type="checkbox"
                    checked={hasDirectBooking}
                    onChange={(e) => setHasDirectBooking(e.target.checked)}
                    className="w-4 h-4 rounded text-[#345C49] accent-[#345C49]"
                  />
                  <span className="text-xs font-medium text-[#0D1929]">
                    Direct online table booking engine
                  </span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-lg border border-[#E8E4DA] bg-[#FAF8F5] cursor-pointer hover:bg-[#EFECE3] transition-colors">
                  <input
                    type="checkbox"
                    checked={hasGuestRetention}
                    onChange={(e) => setHasGuestRetention(e.target.checked)}
                    className="w-4 h-4 rounded text-[#345C49] accent-[#345C49]"
                  />
                  <span className="text-xs font-medium text-[#0D1929]">
                    Automated email / SMS guest database
                  </span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-lg border border-[#E8E4DA] bg-[#FAF8F5] cursor-pointer hover:bg-[#EFECE3] transition-colors">
                  <input
                    type="checkbox"
                    checked={runsAds}
                    onChange={(e) => setRunsAds(e.target.checked)}
                    className="w-4 h-4 rounded text-[#345C49] accent-[#345C49]"
                  />
                  <span className="text-xs font-medium text-[#0D1929]">
                    Active paid Meta/Google ad campaigns
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-5 bg-[#0D1929] text-[#FAF8F5] rounded-xl p-6 sm:p-8 border border-[#0D1929] shadow-lg flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#FAF8F5]/10 pb-4">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#345C49]" />
                  <span className="font-serif font-bold text-lg text-[#FAF8F5]">
                    Diagnostic Score
                  </span>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#345C49]">
                  Live Calculation
                </span>
              </div>

              {/* Health Score Ring / Stat */}
              <div className="bg-[#FAF8F5]/5 rounded-lg p-5 border border-[#FAF8F5]/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-[#FAF8F5]/60 uppercase">
                    Digital Health Index
                  </div>
                  <div className="font-serif text-4xl font-bold text-[#FAF8F5] mt-1 tabular-nums">
                    {diagnosticResult.overallScore}
                    <span className="text-xl text-[#FAF8F5]/50">/100</span>
                  </div>
                  <div className="text-xs font-semibold text-[#345C49] mt-1">
                    Rating: {diagnosticResult.tier}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-mono text-[#FAF8F5]/60 uppercase">
                    Status
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-xs">
                    {diagnosticResult.overallScore < 50 ? (
                      <span className="text-amber-400 font-medium flex items-center gap-1">
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        Significant Gaps
                      </span>
                    ) : (
                      <span className="text-emerald-400 font-medium flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        Core Foundation
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Financial Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#FAF8F5]/5 border border-[#FAF8F5]/10">
                  <div className="text-[11px] font-mono text-[#FAF8F5]/60 uppercase leading-tight">
                    Est. Annual Delivery Commission Loss
                  </div>
                  <div className="font-serif text-2xl font-bold text-amber-400 mt-2 tabular-nums">
                    ${diagnosticResult.estimatedAnnualCommissionLoss.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-[#FAF8F5]/50 mt-1">
                    Paid directly to 3P apps
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#FAF8F5]/5 border border-[#FAF8F5]/10">
                  <div className="text-[11px] font-mono text-[#FAF8F5]/60 uppercase leading-tight">
                    Direct Booking Revenue Potential
                  </div>
                  <div className="font-serif text-2xl font-bold text-emerald-400 mt-2 tabular-nums">
                    +${diagnosticResult.projectedDirectBookingUpliftValue.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-[#FAF8F5]/50 mt-1">
                    Via direct guest channels
                  </div>
                </div>
              </div>

              {/* Key Recommendations */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#FAF8F5]/70 mb-2">
                  Immediate Priority for Your Venue:
                </div>
                <ul className="space-y-2">
                  {diagnosticResult.keyRecommendations.slice(0, 3).map((rec, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#FAF8F5]/85">
                      <span className="p-0.5 rounded-full bg-[#345C49]/40 text-[#FAF8F5] shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8 pt-6 border-t border-[#FAF8F5]/10">
              <button
                type="button"
                onClick={handleApplyToForm}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0D1929] bg-[#FAF8F5] hover:bg-[#EFECE3] rounded-md transition-colors shadow-md cursor-pointer"
              >
                <span>Request Full Audit With These Inputs</span>
                <ArrowRight className="w-4 h-4 text-[#345C49]" />
              </button>
              <div className="text-center mt-2 text-[11px] text-[#FAF8F5]/50">
                Smoothly populates your details into our Adelaide diagnostic intake below.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
