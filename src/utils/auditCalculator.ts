export interface AuditDiagnosticInput {
  venueType: 'cafe' | 'restaurant' | 'wine_bar' | 'bakery' | 'pub';
  averageWeeklyCovers: number;
  averageSpendPerHead: number;
  hasClaimedGoogleBusiness: boolean;
  hasDirectOnlineBooking: boolean;
  usesGuestRetentionSystem: boolean; // e.g., email/SMS guest loyalty
  runsPaidMetaOrSearchAds: boolean;
  thirdPartyDeliveryPercentage: number; // 0 to 100% of orders via UberEats/DoorDash
}

export interface AuditScoreResult {
  overallScore: number; // 0 to 100
  tier: 'Critical Gaps' | 'Moderate Foundation' | 'High Potential' | 'Market Leading';
  localSearchScore: number; // 0 to 25
  retentionScore: number; // 0 to 25
  analyticsScore: number; // 0 to 25
  marginProtectionScore: number; // 0 to 25
  keyRecommendations: string[];
  estimatedAnnualCommissionLoss: number;
  projectedDirectBookingUpliftValue: number;
}

export function calculateDigitalHealthScore(input: AuditDiagnosticInput): AuditScoreResult {
  let localSearch = 5;
  if (input.hasClaimedGoogleBusiness) {
    localSearch += 18;
  }

  let retention = 4;
  if (input.usesGuestRetentionSystem) {
    retention += 18;
  }

  let analytics = 4;
  if (input.runsPaidMetaOrSearchAds) {
    analytics += 10;
  }
  if (input.hasDirectOnlineBooking) {
    analytics += 9;
  }

  let marginProtection = 25;
  // Delivery aggregator commissions (typically 25-35%) erode restaurant margins
  if (input.thirdPartyDeliveryPercentage > 40) {
    marginProtection = 5;
  } else if (input.thirdPartyDeliveryPercentage > 25) {
    marginProtection = 12;
  } else if (input.thirdPartyDeliveryPercentage > 10) {
    marginProtection = 18;
  }

  const overallScore = Math.min(100, Math.max(0, localSearch + retention + analytics + marginProtection));

  let tier: AuditScoreResult['tier'] = 'Critical Gaps';
  if (overallScore >= 80) {
    tier = 'Market Leading';
  } else if (overallScore >= 60) {
    tier = 'High Potential';
  } else if (overallScore >= 40) {
    tier = 'Moderate Foundation';
  }

  const keyRecommendations: string[] = [];

  if (!input.hasClaimedGoogleBusiness || localSearch < 15) {
    keyRecommendations.push('Audit & optimize Google Business Profile, local menu schema, and Adelaide geocoded citations');
  }

  if (!input.hasDirectOnlineBooking) {
    keyRecommendations.push('Implement direct frictionless table booking engine to bypass third-party directory fees');
  }

  if (!input.usesGuestRetentionSystem) {
    keyRecommendations.push('Establish automated guest re-engagement sequences (SMS/Email) for second-visit retention');
  }

  if (input.thirdPartyDeliveryPercentage > 20) {
    keyRecommendations.push('Deploy a direct first-party order and pick-up channel to recover 25-30% platform margin losses');
  }

  if (keyRecommendations.length === 0) {
    keyRecommendations.push('Implement full-funnel POS-to-Meta ad attribution to scale high-margin weekend and private dining covers');
  }

  // Financial impact estimates
  const weeklyRevenue = input.averageWeeklyCovers * input.averageSpendPerHead;
  const annualRevenue = weeklyRevenue * 52;
  const deliveryRevenue = annualRevenue * (input.thirdPartyDeliveryPercentage / 100);
  // Average aggregator commission rate of 28%
  const estimatedAnnualCommissionLoss = Math.round(deliveryRevenue * 0.28);

  // Projected 8% to 15% shift from aggregator/walk-in dead time to direct bookings
  const projectedDirectBookingUpliftValue = Math.round(annualRevenue * 0.095);

  return {
    overallScore,
    tier,
    localSearchScore: localSearch,
    retentionScore: retention,
    analyticsScore: analytics,
    marginProtectionScore: marginProtection,
    keyRecommendations,
    estimatedAnnualCommissionLoss,
    projectedDirectBookingUpliftValue,
  };
}

export interface AuditRequestFormData {
  venueName: string;
  contactName: string;
  email: string;
  phone: string;
  suburb: string;
  venueType: string;
  primaryChallenge: string;
  websiteOrInstagram?: string;
  notes?: string;
}

export function validateAuditForm(data: AuditRequestFormData): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.venueName.trim()) {
    errors.venueName = 'Venue name is required';
  }

  if (!data.contactName.trim()) {
    errors.contactName = 'Your name is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = 'Email address is required';
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required for follow-up';
  } else if (data.phone.replace(/[^0-9]/g, '').length < 8) {
    errors.phone = 'Please enter a valid phone number (at least 8 digits)';
  }

  if (!data.suburb.trim()) {
    errors.suburb = 'Adelaide suburb / precinct is required';
  }

  if (!data.venueType) {
    errors.venueType = 'Please select your venue type';
  }

  if (!data.primaryChallenge) {
    errors.primaryChallenge = 'Please select your primary priority or challenge';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
