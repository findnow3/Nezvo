import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, ArrowRight, Layers, Clock, ShieldCheck, DollarSign } from 'lucide-react';

export default function ProjectEstimator({ onApplyEstimation }) {
  const [selectedService, setSelectedService] = useState('Enterprise Cloud & DevOps');
  const [selectedScale, setSelectedScale] = useState('Mid-Market Enterprise');
  const [complianceLevel, setComplianceLevel] = useState('SOC-2 / ISO 27001');

  const services = [
    { label: 'Custom Enterprise Software', sprints: '8-14 Sprints', architects: '4-6 Specialists' },
    { label: 'Enterprise Cloud & DevOps', sprints: '4-8 Sprints', architects: '2-4 Cloud Architects' },
    { label: 'AI & Machine Learning Engine', sprints: '6-12 Sprints', architects: '3-5 AI Engineers' },
    { label: 'Cybersecurity & Compliance', sprints: '4-6 Sprints', architects: '2-3 SecOps Specialists' },
    { label: 'Mobile Product Engineering', sprints: '6-10 Sprints', architects: '3-5 Mobile Engineers' },
    { label: 'Strategic IT Consulting', sprints: '2-4 Sprints', architects: '1-2 Principal CTOs' },
  ];

  const scales = [
    { label: 'High-Growth Scale-Up', desc: 'Single-region, high velocity, modular setup' },
    { label: 'Mid-Market Enterprise', desc: 'Multi-system integration, high availability, strict testing' },
    { label: 'Global Distributed Scale', desc: 'Multi-region active-active, petabyte scale, zero-trust' },
  ];

  const complianceOptions = [
    'Standard Commercial Grade',
    'SOC-2 / ISO 27001 Certified',
    'HIPAA / PCI-DSS Banking Grade'
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
    <section id="estimator" className="py-24 bg-[#030712] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold uppercase">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            Interactive Scope Planner
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Estimate Your Engineering Roadmap
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Select your architectural requirements to calculate suggested delivery sprints, engineering squad sizing, and governance protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-[#080e1e]/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
            {/* Step 1: Select Service */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-3">
                1. Target Service Domain
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {services.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setSelectedService(item.label)}
                    className={`p-3 text-left rounded-xl text-xs font-semibold transition-all border ${
                      selectedService === item.label
                        ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-950/40'
                        : 'bg-[#040813] border-white/5 text-slate-300 hover:border-cyan-500/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Scale */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-3">
                2. Operational Scale & Complexity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {scales.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setSelectedScale(item.label)}
                    className={`p-3.5 text-left rounded-xl transition-all border flex flex-col justify-between ${
                      selectedScale === item.label
                        ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-md shadow-cyan-950/40'
                        : 'bg-[#040813] border-white/5 text-slate-300 hover:border-cyan-500/30'
                    }`}
                  >
                    <span className="text-xs font-bold mb-1 block">
                      {item.label}
                    </span>
                    <span className="text-[10px] text-slate-400 leading-tight">
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Compliance Framework */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-3">
                3. Security & Governance Standard
              </label>
              <div className="flex flex-wrap gap-2.5">
                {complianceOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setComplianceLevel(opt)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all border ${
                      complianceLevel === opt
                        ? 'bg-cyan-500 text-black font-bold border-cyan-400'
                        : 'bg-[#040813] text-slate-300 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0a1226] via-[#080e1e] to-[#050914] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  PROJECT SCOPE PREVIEW
                </span>
                <span className="text-xs font-mono text-slate-400">
                  REF #NEZVO-EST
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[11px] text-slate-400 block font-mono">SELECTED FOCUS</span>
                  <div className="text-lg font-bold text-white mt-0.5">{selectedService}</div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#030712] border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5 mb-1">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      ESTIMATED TIMELINE
                    </span>
                    <span className="text-sm font-black text-cyan-300 font-mono">
                      {currentServiceData.sprints}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#030712] border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5 mb-1">
                      <Layers className="w-3 h-3 text-cyan-400" />
                      RECOMMENDED SQUAD
                    </span>
                    <span className="text-sm font-black text-cyan-300 font-mono">
                      {currentServiceData.architects}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#030712] border border-cyan-500/20 space-y-2">
                  <div className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Included Architecture Standards</span>
                  </div>
                  <ul className="text-[11px] text-slate-400 space-y-1 pl-6 list-disc">
                    <li>Zero-Downtime Automated CI/CD Deployments</li>
                    <li>Security Baseline: {complianceLevel}</li>
                    <li>100% Intellectual Property & Source Ownership</li>
                    <li>Full Telemetry & Distributed Tracing Integration</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={handleApply}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs tracking-wider uppercase shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <span>Lock In Scope & Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-slate-500 text-center font-mono">
                No credit card required. Free NDA & architectural proposal included.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
