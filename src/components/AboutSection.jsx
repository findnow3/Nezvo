import React from 'react';
import { ABOUT_PILLARS } from '../data/websiteData';
import { 
  Award, Shield, Users, Clock, Zap, CheckCircle2, TrendingUp, Cpu, 
  Terminal, FileCode2, History, Sparkles, ArrowRight 
} from 'lucide-react';

const PILLAR_ICONS = {
  p1: Clock,
  p2: FileCode2,
  p3: TrendingUp,
  p4: Users,
  p5: Shield,
  p6: Zap,
  p7: Cpu,
  p8: Terminal
};

export default function AboutSection({ onOpenContact }) {
  const milestones = [
    { year: "2014", title: "Foundation", desc: "Established by veteran distributed systems architects." },
    { year: "2018", title: "Cloud Scale", desc: "Formed dedicated multi-cloud DevOps and Kubernetes squads." },
    { year: "2022", title: "SOC-2 & Global Hubs", desc: "Achieved SOC-2 Type II and ISO 27001 certifications across all hubs." },
    { year: "2026", title: "Autonomous AI", desc: "Engineering production LLM, RAG, and agentic platforms worldwide." }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-cyan-600" />
            Who We Are
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            8 Foundational Pillars of Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700">
              Enterprise Experience
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            A decade of architectural discipline, rapid delivery, and enduring enterprise partnerships.
          </p>
        </div>

        {/* 8-Pillars Modern Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {ABOUT_PILLARS.map((pillar, index) => {
            const IconComp = PILLAR_ICONS[pillar.id] || Award;
            return (
              <div
                key={pillar.id}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-cyan-500/40 hover:bg-white shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-cyan-700 bg-cyan-100/60 px-2 py-0.5 rounded">
                      PILLAR 0{index + 1}
                    </span>
                    <IconComp className="w-4 h-4 text-cyan-600" />
                  </div>

                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                      {pillar.metric}
                    </span>
                    <span className="text-xs font-bold text-cyan-700 font-mono">
                      {pillar.unit}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.highlight}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 font-medium">
                    {pillar.badge}
                  </span>
                  <span className="text-[10px] font-semibold text-cyan-700">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Streamlined Milestones & Heritage (2014 – 2026) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 mb-10">
          <div className="flex items-center gap-2 mb-6">
            <History className="w-4 h-4 text-cyan-600" />
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Company Milestones & Evolution (2014 – 2026)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {milestones.map((m, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="text-xl font-black text-cyan-700 font-mono">
                  {m.year}
                </div>
                <div className="h-0.5 w-12 bg-cyan-500 rounded" />
                <h4 className="text-xs font-bold text-slate-900 pt-1">
                  {m.title}
                </h4>
                <p className="text-xs text-slate-600">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Compliance & Accreditations Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-4 px-6 rounded-2xl bg-slate-100/70 border border-slate-200 text-xs text-slate-700">
          <div className="flex items-center gap-1.5 font-semibold">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>ISO/IEC 27001 Certified</span>
          </div>
          <div className="flex items-center gap-1.5 font-semibold">
            <Shield className="w-4 h-4 text-cyan-600" />
            <span>SOC-2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-1.5 font-semibold">
            <Award className="w-4 h-4 text-amber-600" />
            <span>AWS Advanced Partner</span>
          </div>
          <div className="flex items-center gap-1.5 font-semibold">
            <Award className="w-4 h-4 text-blue-600" />
            <span>Google Cloud Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
