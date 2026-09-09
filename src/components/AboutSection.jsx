import React from 'react';
import { ABOUT_PILLARS } from '../data/websiteData';
import { 
  Award, Shield, Users, Clock, Zap, CheckCircle2, TrendingUp, Cpu, 
  Terminal, FileCode2, ArrowRight 
} from 'lucide-react';

const PILLAR_ICONS = {
  p1: Clock,
  p2: FileCode2,
  p3: Shield,
  p4: Users,
  p5: Zap,
  p6: CheckCircle2,
  p7: Cpu,
  p8: Terminal
};

export default function AboutSection({ onOpenContact }) {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold">
            WHY WORK WITH US
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            8 Foundational Pillars of Our Work Ethic
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Engineering discipline, direct communication, and rapid turnaround for your software vision.
          </p>
        </div>

        {/* 8 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {ABOUT_PILLARS.map((pillar, index) => {
            const IconComp = PILLAR_ICONS[pillar.id] || Award;
            return (
              <div
                key={pillar.id}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-cyan-400 hover:bg-white shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-cyan-700 bg-cyan-100/60 px-2 py-0.5 rounded">
                      0{index + 1}
                    </span>
                    <IconComp className="w-4 h-4 text-cyan-600" />
                  </div>

                  <div className="flex items-baseline gap-1 mb-1.5">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono">
                      {pillar.metric}
                    </span>
                    <span className="text-xs font-bold text-cyan-700 font-mono">
                      {pillar.unit}
                    </span>
                  </div>

                  <h3 className="text-xs font-bold text-slate-900 mb-1">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.highlight}
                  </p>
                </div>

                <div className="pt-2.5 mt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-slate-500 font-medium">{pillar.badge}</span>
                  <span className="text-cyan-700 font-semibold">Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Work Model Callout */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Need to build an MVP or scale an existing product?
            </h4>
            <p className="text-xs text-slate-600">
              We offer both fixed-scope sprint delivery and dedicated monthly engineering squads.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-all shadow-sm flex items-center gap-1.5"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
