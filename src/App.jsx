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
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-900">
      {/* Top Navbar */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
        onSelectService={handleOpenContact}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section with Light-Theme Generative Canvas & Interactive Telemetry */}
        <HeroScrollytelling
          onSelectService={handleSelectServiceModal}
          onOpenContact={() => handleOpenContact()}
        />

        {/* Marquee Tech Stack Ticker */}
        <TechStackMarquee />

        {/* 6 Core Services */}
        <ServicesSection
          onOpenServiceModal={handleSelectServiceModal}
        />

        {/* 8 Foundational Pillars of Experience */}
        <AboutSection
          onOpenContact={() => handleOpenContact()}
        />

        {/* Scope & Delivery Estimator */}
        <ProjectEstimator
          onApplyEstimation={handleApplyEstimation}
        />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* Enterprise Contact Suite */}
        <ContactSection
          preselectedService={preselectedService}
          prefilledScope={prefilledScope}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => handleOpenContact()}
      />

      {/* Service Detail Modal */}
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
