import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Cloud, Cpu, ShieldCheck, Smartphone, TrendingUp, Zap, Sparkles, Terminal, Check } from 'lucide-react';

const ICON_MAP = {
  Layers: Layers,
  Cloud: Cloud,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Smartphone: Smartphone,
  TrendingUp: TrendingUp,
};

export default function ServiceDetailModal({ service, onClose, onSelectForInquiry }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!service) return null;

  const IconComponent = ICON_MAP[service.icon] || Layers;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#080e1e] border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-950/60 overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col">
        {/* Glowing header bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500" />

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/10 bg-[#060b17]/80">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
                  SERVICE SPECIFICATION // {service.number}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                {service.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar">
          {/* Tagline & Full Overview */}
          <div className="space-y-3">
            <p className="text-lg font-medium text-cyan-300">
              {service.tagline}
            </p>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {service.fullOverview}
            </p>
          </div>

          {/* Key Capabilities */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Core Capabilities & Scope
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#040813] border border-white/5 hover:border-cyan-500/20 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Badges */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              Supported Tech Stack & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-cyan-950/40 text-cyan-200 border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 5-Step Engineering Workflow */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              Execution & Delivery Workflow
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {service.workflow.map((w, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#040813] border border-white/5 relative group hover:border-cyan-500/30 transition-all"
                >
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                    PHASE {w.step}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-2 mb-1">
                    {w.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-2xl bg-[#040813] border border-cyan-500/20">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 font-semibold">
                Guaranteed Deliverables
              </h4>
              <ul className="space-y-2">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 font-semibold">
                  Proven Enterprise Benchmark
                </h4>
                <p className="text-sm font-semibold text-slate-200">
                  {service.metrics}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-slate-400">
                Backed by Nezvo Infotech's 99.99% Reliability Guarantee & Dedicated Solution Architect.
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 sm:p-8 bg-[#060b17] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Need customized architectural scoping? We provide an initial technical roadmap free of obligation.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 transition-colors w-full sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onSelectForInquiry(service.title);
                onClose();
              }}
              className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-cyan-500/25 transition-all w-full sm:w-auto"
            >
              <span>Request Consultation For This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
