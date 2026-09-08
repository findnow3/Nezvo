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
    <section id="services" className="relative py-28 bg-[#030712] text-white overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 font-mono text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Enterprise Solutions Suite
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            6 Specialized Core Services{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Built For Enterprise Scale
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Click on any card below to explore deep architectural blueprints, supported tech stacks, implementation workflows, and quantifiable business outcomes.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Layers;
            return (
              <div
                key={service.id}
                onClick={() => onOpenServiceModal(service)}
                className="group relative cursor-pointer rounded-3xl p-7 sm:p-8 bg-[#080e1e]/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-950/50 flex flex-col justify-between overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-indigo-500/0 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  {/* Top row: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0c1427] border border-cyan-500/20 group-hover:border-cyan-400/50 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 shadow-lg transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="font-mono text-3xl font-black text-slate-700 group-hover:text-cyan-400/40 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 font-medium mb-4">
                    {service.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Key Capabilities Preview */}
                  <div className="space-y-2 mb-6">
                    {service.capabilities.slice(0, 3).map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Tech Stack Chips & Click Prompt */}
                <div className="pt-5 border-t border-white/10 space-y-4">
                  {/* Stack pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-[#040813] text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.techStack.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-[10px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20">
                        +{service.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Click trigger action */}
                  <div className="flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 pt-1">
                    <span className="flex items-center gap-1.5">
                      <span>Click to view full architecture</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#080e1e] to-indigo-950/40 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Looking for a custom cross-domain architecture?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              We frequently assemble cross-functional squads combining AI, Cloud, and High-Speed Custom Backends.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs tracking-wide transition-all shadow-lg shadow-cyan-500/20"
          >
            Request Custom Scope Analysis
          </a>
        </div>
      </div>
    </section>
  );
}
