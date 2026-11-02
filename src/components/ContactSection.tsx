import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { validateAuditForm, AuditRequestFormData } from '../utils/auditCalculator';

interface ContactSectionProps {
  preFillData?: {
    venueType: string;
    weeklyCovers: number;
    challenge: string;
    notes: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preFillData }) => {
  const [formData, setFormData] = useState<AuditRequestFormData>({
    venueName: '',
    contactName: '',
    email: '',
    phone: '',
    suburb: 'Adelaide CBD',
    venueType: 'Casual or Fine Dining Restaurant',
    primaryChallenge: 'Direct Table Bookings & Reduced Aggregator Fees',
    websiteOrInstagram: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync preFillData if user came from the Interactive Calculator
  useEffect(() => {
    if (preFillData) {
      setFormData((prev) => ({
        ...prev,
        venueType: preFillData.venueType || prev.venueType,
        primaryChallenge: preFillData.challenge || prev.primaryChallenge,
        notes: preFillData.notes ? `${prev.notes ? prev.notes + '\n' : ''}${preFillData.notes}` : prev.notes,
      }));
    }
  }, [preFillData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateAuditForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate swift local processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-[#F7F4EC] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#345C49] mb-3">
            Start With Objective Data
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D1929] tracking-tight text-balance">
            Request Your Complimentary 12-Point Digital Audit.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#0D1929]/75 leading-relaxed">
            Exclusively for independent cafés, bistros, wine bars, and restaurants across Greater Adelaide. We inspect your local search visibility, booking friction, and margin leakage, then provide a detailed diagnostic report within 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Adelaide Contact & Expectation Setting */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#0D1929]">
                What Happens Next?
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#0D1929]/80">
                <div className="flex items-start gap-3">
                  <span className="font-mono font-bold text-[#345C49] text-base shrink-0">1.</span>
                  <div>
                    <span className="font-semibold text-[#0D1929] block">Immediate Intake Confirmation</span>
                    Our Adelaide team reviews your venue’s Google Maps profile, website, and current booking architecture.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono font-bold text-[#345C49] text-base shrink-0">2.</span>
                  <div>
                    <span className="font-semibold text-[#0D1929] block">12-Point Analysis in 48 Hours</span>
                    We benchmark your venue against Adelaide competitors in your cuisine category and radius.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono font-bold text-[#345C49] text-base shrink-0">3.</span>
                  <div>
                    <span className="font-semibold text-[#0D1929] block">30-Minute Debrief Consultation</span>
                    We walk you through the exact findings in person (in Adelaide) or via video call. Zero sales pressure.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E4DA] space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#345C49]">
                  Direct Practice Inquiries
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0D1929]/85">
                  <MapPin className="w-4 h-4 text-[#345C49] shrink-0" />
                  <span>Grenfell Street, Adelaide SA 5000</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0D1929]/85">
                  <Phone className="w-4 h-4 text-[#345C49] shrink-0" />
                  <span className="font-mono tabular-nums">(08) 7089 4210</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0D1929]/85">
                  <Mail className="w-4 h-4 text-[#345C49] shrink-0" />
                  <span>audit@ahdp.com.au</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0D1929]/85">
                  <Clock className="w-4 h-4 text-[#345C49] shrink-0" />
                  <span>Mon – Fri, 8:30am – 5:30pm ACST</span>
                </div>
              </div>
            </div>

            {/* Privacy & Professional Commitment */}
            <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E8E4DA] flex items-center gap-3 text-xs text-[#0D1929]/75">
              <ShieldCheck className="w-5 h-5 text-[#345C49] shrink-0" />
              <span>We never share your venue’s sales or customer data. 100% confidential under Australian privacy standards.</span>
            </div>
          </div>

          {/* Right Column: The Audit Request Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] p-6 sm:p-8 shadow-sm">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#EAF1ED] text-[#345C49] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0D1929]">
                  Audit Request Received for {formData.venueName}
                </h3>
                <p className="text-sm text-[#0D1929]/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#0D1929]">{formData.contactName}</strong>. Our hospitality analytics specialist has received your request and will prepare your venue’s 12-point diagnostic within 48 business hours.
                </p>
                <div className="p-4 bg-[#F7F4EC] rounded-lg max-w-md mx-auto text-xs text-left text-[#0D1929]/80 space-y-1 font-mono">
                  <div>CONFIRMATION · AHDP-AUDIT-2026</div>
                  <div>EMAIL SENT TO: {formData.email}</div>
                  <div>PHONE: {formData.phone}</div>
                  <div>PRECINCT: {formData.suburb}</div>
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        venueName: '',
                        contactName: '',
                        email: '',
                        phone: '',
                        suburb: 'Adelaide CBD',
                        venueType: 'Casual or Fine Dining Restaurant',
                        primaryChallenge: 'Direct Table Bookings & Reduced Aggregator Fees',
                        websiteOrInstagram: '',
                        notes: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-[#0D1929] bg-[#F7F4EC] hover:bg-[#EFECE3] border border-[#E8E4DA] rounded-md transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="border-b border-[#E8E4DA] pb-3 mb-4">
                  <h3 className="font-serif text-xl font-bold text-[#0D1929]">
                    Venue & Contact Information
                  </h3>
                  <p className="text-xs text-[#0D1929]/60 mt-0.5">
                    Please provide accurate operational details for your Adelaide business.
                  </p>
                </div>

                {/* Venue Name & Contact Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="venueName" className="block text-xs font-semibold text-[#0D1929] mb-1">
                      Venue / Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="venueName"
                      name="venueName"
                      value={formData.venueName}
                      onChange={handleChange}
                      placeholder="e.g. Leigh Street Wine Room"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                        errors.venueName ? 'border-red-500 bg-red-50/20' : 'border-[#E8E4DA] bg-[#FAF8F5]'
                      } text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/40`}
                      required
                    />
                    {errors.venueName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.venueName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contactName" className="block text-xs font-semibold text-[#0D1929] mb-1">
                      Your Name & Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="e.g. Marcus Hughes (Owner / GM)"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                        errors.contactName ? 'border-red-500 bg-red-50/20' : 'border-[#E8E4DA] bg-[#FAF8F5]'
                      } text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/40`}
                      required
                    />
                    {errors.contactName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.contactName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#0D1929] mb-1">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="marcus@venue.com.au"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#E8E4DA] bg-[#FAF8F5]'
                      } text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/40`}
                      required
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#0D1929] mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0412 345 678 or (08) 8231 ..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#E8E4DA] bg-[#FAF8F5]'
                      } text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/40`}
                      required
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Suburb & Venue Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="suburb" className="block text-xs font-semibold text-[#0D1929] mb-1">
                      Adelaide Suburb / Precinct <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="suburb"
                      name="suburb"
                      value={formData.suburb}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E8E4DA] bg-[#FAF8F5] text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/40"
                    >
                      <option value="Adelaide CBD (East End / West End / Central)">Adelaide CBD (East End / West End / Central)</option>
                      <option value="North Adelaide (O'Connell / Melbourne St)">North Adelaide (O'Connell / Melbourne St)</option>
                      <option value="Norwood & The Parade">Norwood & The Parade</option>
                      <option value="Glenelg & Coastal Suburbs">Glenelg & Coastal Suburbs</option>
                      <option value="Unley, Hyde Park & Goodwood">Unley, Hyde Park & Goodwood</option>
                      <option value="Bowden, Brompton & Hindmarsh">Bowden, Brompton & Hindmarsh</option>
                      <option value="Prospect & North Suburban">Prospect & North Suburban</option>
                      <option value="Adelaide Hills (Stirling, Crafers, Hahndorf)">Adelaide Hills (Stirling, Crafers, Hahndorf)</option>
                      <option value="Other South Australian Location">Other South Australian Location</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="venueType" className="block text-xs font-semibold text-[#0D1929] mb-1">
                      Venue Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="venueType"
                      name="venueType"
                      value={formData.venueType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E8E4DA] bg-[#FAF8F5] text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/40"
                    >
                      <option value="Café / Specialty Coffee">Café / Specialty Coffee</option>
                      <option value="Casual or Fine Dining Restaurant">Casual or Fine Dining Restaurant</option>
                      <option value="Wine Bar / Bistro">Wine Bar / Bistro</option>
                      <option value="Artisan Bakery / Patisserie">Artisan Bakery / Patisserie</option>
                      <option value="Pub / Gastropub">Pub / Gastropub</option>
                      <option value="Cellar Door / Winery Restaurant">Cellar Door / Winery Restaurant</option>
                    </select>
                  </div>
                </div>

                {/* Primary Challenge & Website/IG */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="primaryChallenge" className="block text-xs font-semibold text-[#0D1929] mb-1">
                      Primary Strategic Focus <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="primaryChallenge"
                      name="primaryChallenge"
                      value={formData.primaryChallenge}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E8E4DA] bg-[#FAF8F5] text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/40"
                    >
                      <option value="Direct Table Bookings & Reduced Aggregator Fees">Direct Table Bookings & Reduced Aggregator Fees</option>
                      <option value="Google Maps Local 3-Pack Dominance">Google Maps Local 3-Pack Dominance</option>
                      <option value="Guest Retention & Midweek Covers">Guest Retention & Midweek Covers</option>
                      <option value="Hyper-Local Paid Social Meta Ads">Hyper-Local Paid Social Meta Ads</option>
                      <option value="POS Attribution & Margin Analytics">POS Attribution & Margin Analytics</option>
                      <option value="Full Complete Digital Health Audit">Full Complete Digital Health Audit</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="websiteOrInstagram" className="block text-xs font-semibold text-[#0D1929] mb-1">
                      Website URL or Instagram Handle (Optional)
                    </label>
                    <input
                      type="text"
                      id="websiteOrInstagram"
                      name="websiteOrInstagram"
                      value={formData.websiteOrInstagram}
                      onChange={handleChange}
                      placeholder="e.g. www.venue.com.au or @venue"
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E8E4DA] bg-[#FAF8F5] text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/40"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-semibold text-[#0D1929] mb-1">
                    Specific Questions, POS System, or Booking Platform (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us any specific challenges (e.g. using SevenRooms, struggling with Tuesday night covers, heavy UberEats reliance)..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E8E4DA] bg-[#FAF8F5] text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/40"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#0D1929] hover:bg-[#182A44] rounded-md transition-all shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345C49] disabled:opacity-75 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Analyzing Venue Data...</span>
                    ) : (
                      <>
                        <span>Submit Digital Audit Request</span>
                        <ArrowRight className="w-4 h-4 text-[#345C49]" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-[#0D1929]/55 mt-2">
                    Complimentary for Adelaide hospitality businesses. Zero spam. No obligations.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
