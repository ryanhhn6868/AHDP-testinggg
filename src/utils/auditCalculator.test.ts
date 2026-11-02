import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateDigitalHealthScore, validateAuditForm, AuditDiagnosticInput, AuditRequestFormData } from './auditCalculator.js';

test('calculateDigitalHealthScore: correctly assesses low-digital presence venue', () => {
  const input: AuditDiagnosticInput = {
    venueType: 'cafe',
    averageWeeklyCovers: 500,
    averageSpendPerHead: 24,
    hasClaimedGoogleBusiness: false,
    hasDirectOnlineBooking: false,
    usesGuestRetentionSystem: false,
    runsPaidMetaOrSearchAds: false,
    thirdPartyDeliveryPercentage: 35,
  };

  const result = calculateDigitalHealthScore(input);

  assert.equal(result.overallScore < 40, true);
  assert.equal(result.tier, 'Critical Gaps');
  assert.equal(result.keyRecommendations.length >= 2, true);
  assert.equal(result.estimatedAnnualCommissionLoss > 0, true);
  assert.equal(result.projectedDirectBookingUpliftValue > 0, true);
});

test('calculateDigitalHealthScore: gives high score to optimized venue', () => {
  const input: AuditDiagnosticInput = {
    venueType: 'restaurant',
    averageWeeklyCovers: 800,
    averageSpendPerHead: 75,
    hasClaimedGoogleBusiness: true,
    hasDirectOnlineBooking: true,
    usesGuestRetentionSystem: true,
    runsPaidMetaOrSearchAds: true,
    thirdPartyDeliveryPercentage: 5,
  };

  const result = calculateDigitalHealthScore(input);

  assert.equal(result.overallScore >= 80, true);
  assert.equal(result.tier, 'Market Leading');
  assert.equal(result.marginProtectionScore, 25);
});

test('validateAuditForm: returns errors on empty required fields', () => {
  const emptyForm: AuditRequestFormData = {
    venueName: '',
    contactName: '',
    email: '',
    phone: '',
    suburb: '',
    venueType: '',
    primaryChallenge: '',
  };

  const validation = validateAuditForm(emptyForm);
  assert.equal(validation.isValid, false);
  assert.equal(typeof validation.errors.venueName, 'string');
  assert.equal(typeof validation.errors.email, 'string');
  assert.equal(typeof validation.errors.phone, 'string');
  assert.equal(typeof validation.errors.suburb, 'string');
});

test('validateAuditForm: approves valid Adelaide venue data', () => {
  const validForm: AuditRequestFormData = {
    venueName: 'The Norwood Botanical',
    contactName: 'Sarah Jenkins',
    email: 'sarah@norwoodbotanical.com.au',
    phone: '0412 345 678',
    suburb: 'Norwood',
    venueType: 'wine_bar',
    primaryChallenge: 'Direct Table Bookings & Weekend Capacity',
    websiteOrInstagram: '@norwoodbotanical',
  };

  const validation = validateAuditForm(validForm);
  assert.equal(validation.isValid, true);
  assert.equal(Object.keys(validation.errors).length, 0);
});
