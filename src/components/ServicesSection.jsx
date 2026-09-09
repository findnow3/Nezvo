import React from 'react';
import { SERVICES } from '../data/websiteData';
import { Layers, Cloud, Cpu, ShieldCheck, Smartphone, TrendingUp, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

const ICON_MAP = {
  Layers: Layers,
  Cloud: Cloud,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Smartphone: Smartphone,
  TrendingUp: TrendingUp,
};

export default function ServicesSection({ onOpenServiceModal }) {
  return (
    <section id="services" className="py-20 sm:py-24 bg-slate-50 border-t border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            6 Specialized Services{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700">
              Built For Enterprise Scale
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Click any service to view architectural workflows, deliverables, and technical capabilities.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Layers;
            return (
              <div
                key={service.id}
                onClick={() => onOpenServiceModal(service)}
                className="group cursor-pointer rounded-2xl p-6 sm:p-7 bg-white border border-slate-200/90 hover:border-cyan-500/40 shadow-sm hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Icon & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200/60 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-200 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-cyan-600/40 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors mb-1.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-700 mb-3">
                    {service.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Key Capabilities Preview */}
                  <div className="space-y-1.5 mb-5">
                    {service.capabilities.slice(0, 3).map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Tech Stack & Click Trigger */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-cyan-50 text-cyan-700 border border-cyan-200">
                        +{service.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-cyan-700 group-hover:text-cyan-800 pt-1">
                    <span className="flex items-center gap-1">
                      <span>View Specifications</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-cyan-50 via-sky-50 to-blue-50 border border-cyan-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              Need a multi-disciplinary squad across Cloud, AI, and Software?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We frequently assemble cross-functional teams tailored directly to enterprise roadmap milestones.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-xs tracking-wide shadow-md shadow-cyan-600/20 transition-all"
          >
            Request Custom Scope
          </a>
        </div>
      </div>
    </section>
  );
}
