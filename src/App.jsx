import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroScrollytelling from './components/HeroScrollytelling';
import TechStackMarquee from './components/TechStackMarquee';
import ServicesSection from './components/ServicesSection';
import ServiceDetailModal from './components/ServiceDetailModal';
import AboutSection from './components/AboutSection';
import ProjectEstimator from './components/ProjectEstimator';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);
  const [preselectedService, setPreselectedService] = useState('');
  const [prefilledScope, setPrefilledScope] = useState('');

  const handleOpenContact = (serviceName = '') => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceModal = (service) => {
    setSelectedServiceModal(service);
  };

  const handleSelectForInquiry = (serviceTitle) => {
    setSelectedServiceModal(null);
    setPreselectedService(serviceTitle);
    setTimeout(() => {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleApplyEstimation = (serviceTitle, scopeSummary) => {
    setPreselectedService(serviceTitle);
    setPrefilledScope(scopeSummary);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
        onSelectService={handleOpenContact}
      />

      {/* Hero Section with Cinematic Video-Like Canvas Scrollytelling */}
      <main className="flex-1">
        <HeroScrollytelling
          onSelectService={handleSelectServiceModal}
          onOpenContact={() => handleOpenContact()}
        />

        {/* Marquee Ticker */}
        <TechStackMarquee />

        {/* 6 Core Services with interactive card click modal */}
        <ServicesSection
          onOpenServiceModal={handleSelectServiceModal}
        />

        {/* 8 Pillars of Experience & Who We Are */}
        <AboutSection
          onOpenContact={() => handleOpenContact()}
        />

        {/* Interactive Scope & Cost Estimator */}
        <ProjectEstimator
          onApplyEstimation={handleApplyEstimation}
        />

        {/* Social Proof & Testimonials */}
        <TestimonialsSection />

        {/* Enterprise Contact & Consultation Suite */}
        <ContactSection
          preselectedService={preselectedService}
          prefilledScope={prefilledScope}
        />
      </main>

      {/* Corporate Footer */}
      <Footer
        onOpenContact={() => handleOpenContact()}
      />

      {/* Interactive Service Detail Modal */}
      {selectedServiceModal && (
        <ServiceDetailModal
          service={selectedServiceModal}
          onClose={() => setSelectedServiceModal(null)}
          onSelectForInquiry={handleSelectForInquiry}
        />
      )}
    </div>
  );
}
