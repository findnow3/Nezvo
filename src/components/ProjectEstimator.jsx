import React, { useState } from 'react';
import { Calculator, ArrowRight, Layers, Clock, ShieldCheck } from 'lucide-react';

export default function ProjectEstimator({ onApplyEstimation }) {
  const [selectedService, setSelectedService] = useState('Enterprise Cloud & DevOps');
  const [selectedScale, setSelectedScale] = useState('Mid-Market Enterprise');
  const [complianceLevel, setComplianceLevel] = useState('SOC-2 / ISO 27001');

  const services = [
    { label: 'Custom Enterprise Software', sprints: '8-12 Sprints', architects: '4-6 Engineers' },
    { label: 'Enterprise Cloud & DevOps', sprints: '4-6 Sprints', architects: '2-4 Cloud Architects' },
    { label: 'AI & Machine Learning Engine', sprints: '6-10 Sprints', architects: '3-5 AI Engineers' },
    { label: 'Cybersecurity & Compliance', sprints: '4-6 Sprints', architects: '2-3 SecOps Specialists' },
    { label: 'Mobile Product Engineering', sprints: '6-8 Sprints', architects: '3-5 Mobile Engineers' },
    { label: 'Strategic IT Consulting', sprints: '2-4 Sprints', architects: '1-2 Principal CTOs' },
  ];

  const scales = [
    { label: 'Growth Scale-Up', desc: 'Single-region, high velocity modular setup' },
    { label: 'Mid-Market Enterprise', desc: 'Multi-system integration & automated testing' },
    { label: 'Global Scale', desc: 'Multi-region active-active & zero-trust' },
  ];

  const complianceOptions = [
    'Standard Commercial',
    'SOC-2 / ISO 27001',
    'HIPAA / Banking Grade'
  ];

  const currentServiceData = services.find(s => s.label === selectedService) || services[0];

  const handleApply = () => {
    const estimationSummary = `${selectedService} (${selectedScale}, Compliance: ${complianceLevel})`;
    onApplyEstimation(selectedService, estimationSummary);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-20 bg-slate-50 border-t border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-semibold uppercase">
            <Calculator className="w-3.5 h-3.5 text-cyan-600" />
            Project Estimator
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            Estimate Your Delivery Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Select parameters to calculate estimated sprint cycles, squad composition, and compliance baselines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm">
            {/* Step 1: Select Service */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-700 font-bold block mb-2.5">
                1. Service Domain
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setSelectedService(item.label)}
                    className={`p-2.5 text-left rounded-xl text-xs font-semibold transition-all border ${
                      selectedService === item.label
                        ? 'bg-cyan-50 border-cyan-500 text-cyan-900 shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Scale */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-700 font-bold block mb-2.5">
                2. Operational Scale
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {scales.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setSelectedScale(item.label)}
                    className={`p-3 text-left rounded-xl transition-all border flex flex-col justify-between ${
                      selectedScale === item.label
                        ? 'bg-cyan-50 border-cyan-500 text-cyan-900 shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs font-bold mb-0.5 block">
                      {item.label}
                    </span>
                    <span className="text-[10px] text-slate-500 leading-tight">
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Compliance Framework */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-700 font-bold block mb-2.5">
                3. Security & Governance Standard
              </label>
              <div className="flex flex-wrap gap-2">
                {complianceOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setComplianceLevel(opt)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all border ${
                      complianceLevel === opt
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold border-transparent shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-md space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold">
                ESTIMATED SCOPE
              </span>
              <span className="text-xs font-mono text-slate-400">
                #NEZVO-EST
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-[10px] text-slate-400 block font-mono">SELECTED FOCUS</span>
                <div className="text-base font-bold text-slate-900 mt-0.5">{selectedService}</div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1 mb-0.5">
                    <Clock className="w-3 h-3 text-cyan-600" />
                    TIMELINE
                  </span>
                  <span className="text-xs sm:text-sm font-black text-cyan-800 font-mono">
                    {currentServiceData.sprints}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1 mb-0.5">
                    <Layers className="w-3 h-3 text-cyan-600" />
                    SQUAD SIZING
                  </span>
                  <span className="text-xs sm:text-sm font-black text-cyan-800 font-mono">
                    {currentServiceData.architects}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-50/60 border border-cyan-200/70 space-y-1.5 text-xs text-slate-700">
                <div className="font-semibold text-cyan-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Architecture Guarantees Included</span>
                </div>
                <ul className="text-[11px] text-slate-600 space-y-0.5 pl-5 list-disc">
                  <li>Security standard: {complianceLevel}</li>
                  <li>100% Intellectual Property & Source Ownership</li>
                  <li>Zero-Downtime Automated CI/CD Deployments</li>
                </ul>
              </div>
            </div>

            <button
              onClick={handleApply}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs tracking-wider uppercase shadow-md shadow-cyan-600/20 flex items-center justify-center gap-2 transition-all"
            >
              <span>Apply Scope to Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
