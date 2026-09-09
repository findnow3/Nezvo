import React, { useState } from 'react';
import { Calculator, ArrowRight, Layers, Clock, ShieldCheck } from 'lucide-react';

export default function ProjectEstimator({ onApplyEstimation }) {
  const [selectedService, setSelectedService] = useState('Custom Web Application');
  const [selectedScale, setSelectedScale] = useState('MVP / Core Launch');

  const services = [
    { label: 'Custom Web Application', timeline: '4-8 Weeks', squad: '2 Full-Stack Devs + 1 UI/UX' },
    { label: 'Mobile App (iOS & Android)', timeline: '6-10 Weeks', squad: '2 Mobile Devs + 1 Backend' },
    { label: 'Cloud Infrastructure & DevOps', timeline: '2-4 Weeks', squad: '1 DevOps Architect' },
    { label: 'AI Integration & Automation', timeline: '3-6 Weeks', squad: '1 AI Engineer + 1 Backend' },
    { label: 'UI/UX & Product Design', timeline: '2-3 Weeks', squad: '1 Senior Product Designer' },
    { label: 'Backend & Database Architecture', timeline: '3-5 Weeks', squad: '2 Backend Engineers' },
  ];

  const scales = [
    { label: 'MVP / Core Launch', desc: 'Core feature set to validate market demand' },
    { label: 'Growth Scale', desc: 'Comprehensive feature set with integrations' },
    { label: 'Enterprise Custom', desc: 'Multi-tenant infrastructure with dedicated SLAs' },
  ];

  const currentServiceData = services.find(s => s.label === selectedService) || services[0];

  const handleApply = () => {
    const estimationSummary = `${selectedService} (${selectedScale})`;
    onApplyEstimation(selectedService, estimationSummary);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-16 sm:py-20 bg-white border-t border-b border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold">
            PROJECT PLANNER
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            Quick Timeline & Resource Estimator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Select your project type to view realistic delivery estimates and recommended team composition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Options */}
          <div className="lg:col-span-7 space-y-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-700 font-bold block mb-2">
                1. Project Domain
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setSelectedService(item.label)}
                    className={`p-2.5 text-left rounded-xl text-xs font-semibold transition-all border ${
                      selectedService === item.label
                        ? 'bg-cyan-50 border-cyan-500 text-cyan-900 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-700 font-bold block mb-2">
                2. Project Stage
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {scales.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setSelectedScale(item.label)}
                    className={`p-2.5 text-left rounded-xl transition-all border flex flex-col justify-between ${
                      selectedScale === item.label
                        ? 'bg-cyan-50 border-cyan-500 text-cyan-900 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
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
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold">
                ESTIMATED PLAN
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Direct Estimate
              </span>
            </div>

            <div>
              <span className="text-[10px] text-slate-500 block font-mono">SELECTED PROJECT</span>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{selectedService}</div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1 mb-0.5">
                  <Clock className="w-3 h-3 text-cyan-600" />
                  TIMELINE
                </span>
                <span className="text-xs font-black text-cyan-800 font-mono">
                  {currentServiceData.timeline}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1 mb-0.5">
                  <Layers className="w-3 h-3 text-cyan-600" />
                  TEAM
                </span>
                <span className="text-xs font-black text-cyan-800 font-mono">
                  {currentServiceData.squad}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>What Is Always Included:</span>
              </div>
              <ul className="text-[11px] text-slate-500 space-y-0.5 pl-4 list-disc">
                <li>Full source code & 100% IP ownership</li>
                <li>Weekly sprint demos & staging URL</li>
                <li>Free bug-fixing warranty after launch</li>
              </ul>
            </div>

            <button
              onClick={handleApply}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs tracking-wide uppercase shadow-sm flex items-center justify-center gap-1.5 transition-all"
            >
              <span>Discuss This Scope With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
