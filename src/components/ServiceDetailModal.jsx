import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Smartphone, Cloud, Cpu, TrendingUp, ShieldCheck, Check } from 'lucide-react';

const ICON_MAP = {
  Layers: Layers,
  Smartphone: Smartphone,
  Cloud: Cloud,
  Cpu: Cpu,
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck,
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
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-10 my-auto max-h-[85vh] flex flex-col animate-fadeIn">
        <div className="h-1 w-full bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600" />

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100/70 border border-cyan-200 flex items-center justify-center text-cyan-700">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-cyan-700 font-bold uppercase tracking-wider block">
                SERVICE // {service.number}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                {service.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-400 hover:text-slate-700 border border-slate-200 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-5 overflow-y-auto custom-scrollbar">
          <div>
            <p className="text-xs sm:text-sm font-semibold text-cyan-800 mb-1">
              {service.tagline}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              {service.fullOverview}
            </p>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-bold">
              Scope & Features Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 text-xs text-slate-700"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-bold">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {service.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-cyan-50 text-cyan-800 border border-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              What You Receive
            </h4>
            <ul className="space-y-1 text-xs text-slate-700">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-cyan-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onSelectForInquiry(service.title);
              onClose();
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-xs tracking-wide shadow-sm transition-all"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
