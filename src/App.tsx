import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AuditFramework } from './components/AuditFramework';
import { InteractiveAuditEstimator } from './components/InteractiveAuditEstimator';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [preFillData, setPreFillData] = useState<{
    venueType: string;
    weeklyCovers: number;
    challenge: string;
    notes: string;
  } | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForAudit = (serviceName: string) => {
    setPreFillData((prev) => ({
      venueType: prev?.venueType || 'Casual or Fine Dining Restaurant',
      weeklyCovers: prev?.weeklyCovers || 450,
      challenge: serviceName,
      notes: `Requested priority focus area from services overview: ${serviceName}`,
    }));
    scrollToContact();
  };

  const handlePreFillFromCalculator = (data: {
    venueType: string;
    weeklyCovers: number;
    challenge: string;
    notes: string;
  }) => {
    setPreFillData(data);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0D1929] flex flex-col font-sans selection:bg-[#345C49]/20">
      {/* Navigation */}
      <Navbar onRequestAuditClick={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onRequestAuditClick={scrollToContact}
          onExploreServicesClick={scrollToServices}
        />

        {/* Services & Capabilities */}
        <Services onSelectServiceForAudit={handleSelectServiceForAudit} />

        {/* 12-Point Audit Methodology */}
        <AuditFramework onRequestAuditClick={scrollToContact} />

        {/* Interactive Self-Assessment & Margin Diagnostic */}
        <InteractiveAuditEstimator onPreFillAuditRequest={handlePreFillFromCalculator} />

        {/* About Us & Adelaide Hospitality Ethos */}
        <AboutUs />

        {/* Contact & Audit Request Form */}
        <ContactSection preFillData={preFillData} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
