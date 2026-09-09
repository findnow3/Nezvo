import React from 'react';
import { SERVICES } from '../data/websiteData';
import { Layers, Smartphone, Cloud, Cpu, TrendingUp, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

const ICON_MAP = {
  Layers: Layers,
  Smartphone: Smartphone,
  Cloud: Cloud,
  Cpu: Cpu,
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck,
};

export default function ServicesSection({ onOpenServiceModal }) {
  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold">
            OUR CORE SERVICES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            What We Build & Deliver
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Click on any card to view deliverables, supported tech stack, and scope details.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Layers;
            return (
              <div
                key={service.id}
                onClick={() => onOpenServiceModal(service)}
                className="group cursor-pointer rounded-2xl p-6 bg-white border border-slate-200/90 hover:border-cyan-400/50 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200/60 flex items-center justify-center text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xl font-bold text-slate-300 group-hover:text-cyan-600/40 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-800 transition-colors mb-1">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1 mb-4">
                    {service.capabilities.slice(0, 3).map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-cyan-700 group-hover:text-cyan-800">
                  <span className="flex items-center gap-1">
                    <span>View Details</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
