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
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!service) return null;

  const IconComponent = ICON_MAP[service.icon] || Layers;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Soft translucent backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col animate-fadeIn">
        {/* Top Accent Gradient Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600" />

        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-cyan-100/70 border border-cyan-200 flex items-center justify-center text-cyan-700">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-cyan-700 font-bold uppercase tracking-wider block">
                SERVICE SPECIFICATION // {service.number}
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {service.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white hover:bg-slate-100 text-slate-400 hover:text-slate-700 border border-slate-200 transition-colors shadow-sm"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto custom-scrollbar">
          {/* Tagline & Overview */}
          <div className="space-y-2">
            <p className="text-sm sm:text-base font-semibold text-cyan-800">
              {service.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {service.fullOverview}
            </p>
          </div>

          {/* Core Capabilities */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              Core Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium leading-snug">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2.5 font-bold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-600" />
              Primary Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {service.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-cyan-50 text-cyan-800 border border-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Workflow Steps */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-bold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-cyan-600" />
              Execution Blueprint
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {service.workflow.slice(0, 3).map((w, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="font-mono text-[10px] font-bold text-cyan-700 bg-cyan-100/60 px-1.5 py-0.5 rounded">
                    STAGE {w.step}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 mt-1">
                    {w.title}
                  </h4>
                  <p className="text-[11px] text-slate-600">
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & Metrics */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row justify-between gap-4">
            <div className="space-y-1.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                Deliverables Included
              </h4>
              <ul className="space-y-1 text-xs text-slate-700">
                {service.deliverables.slice(0, 2).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:border-l sm:border-slate-200 sm:pl-4 flex flex-col justify-center">
              <span className="text-[11px] font-mono text-slate-500 font-semibold uppercase">
                Enterprise Benchmark
              </span>
              <span className="text-xs font-bold text-slate-900 mt-0.5">
                {service.metrics}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onSelectForInquiry(service.title);
              onClose();
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-xs tracking-wide shadow-md shadow-cyan-600/20 transition-all"
          >
            <span>Consult on this Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
