import React, { useState } from 'react';
import { ABOUT_PILLARS } from '../data/websiteData';
import { 
  Award, Shield, Users, Clock, Zap, CheckCircle2, TrendingUp, Cpu, 
  ChevronRight, Building2, Globe, Sparkles, Terminal, FileCode2, History 
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
  const [selectedPillarId, setSelectedPillarId] = useState(ABOUT_PILLARS[0].id);

  const selectedPillar = ABOUT_PILLARS.find(p => p.id === selectedPillarId) || ABOUT_PILLARS[0];

  const milestones = [
    { year: "2014", title: "Inception & Core Foundation", desc: "Nezvo Infotech founded by veteran distributed systems architects." },
    { year: "2017", title: "Cloud-Native Expansion", desc: "Formed dedicated Kubernetes & AWS DevOps engineering squads." },
    { year: "2020", title: "Global Delivery & Security", desc: "Achieved SOC-2 Type II and ISO 27001 certifications across all hubs." },
    { year: "2023", title: "Enterprise AI Incubation Lab", desc: "Pioneered proprietary LLM fine-tuning and agentic workflow pipelines." },
    { year: "2026", title: "Next-Gen Autonomous Systems", desc: "Managing 120+ global enterprise systems with sub-millisecond reliability." }
  ];

  return (
    <section id="about" className="relative py-28 bg-[#040813] text-white overflow-hidden border-t border-b border-cyan-500/10">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            Who We Are & Enterprise Track Record
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            8 Key Pillars of Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Industry Experience & Mastery
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Founded with a vision to eliminate technical fragility, Nezvo Infotech pairs world-class engineering discipline with rapid execution for forward-thinking enterprises.
          </p>
        </div>

        {/* Executive Overview Card */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-[#080e1e]/90 border border-cyan-500/20 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
            <Building2 className="w-96 h-96 text-cyan-400" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                ORGANIZATIONAL IDENTITY & ETHOS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Engineering software systems that don't just function—they dominate their market sectors.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                At Nezvo Infotech, we reject bloated legacy frameworks and generic cookie-cutter code. We believe software architecture is an art of precision, resilience, and mathematical optimization. Over our 10+ years in the industry, our multidisciplinary teams of cloud architects, AI researchers, and distributed systems engineers have built solutions trusted by banking institutions, healthcare pioneers, and high-frequency platforms across 18 countries.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Zero-Vendor Lock-in Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>100% IP & Source Code Ownership</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Transparent Fixed & Agile Models</span>
                </div>
              </div>
            </div>

            {/* Quick Stats Widget */}
            <div className="lg:col-span-4 bg-[#040813]/80 border border-white/10 rounded-2xl p-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                GLOBAL OPERATIONAL FOOTPRINT
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-xs text-slate-400">Headquarters</span>
                  <span className="text-xs font-bold text-slate-200">Global Tech Hub</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-xs text-slate-400">Active Engineering Squads</span>
                  <span className="text-xs font-bold text-cyan-400 font-mono">18 Dedicated Pods</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-xs text-slate-400">Average Engineer Tenure</span>
                  <span className="text-xs font-bold text-slate-200 font-mono">4.6 Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">Compliance Accreditations</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">SOC-2 • ISO 27001</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 8 Main Experience Pillars (Interactive Grid + Deep Viewer) */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Explore The 8 Foundational Experience Pillars</span>
            </h3>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Select any pillar to inspect details
            </span>
          </div>

          {/* 8 Pillar Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ABOUT_PILLARS.map((pillar, index) => {
              const IconComp = PILLAR_ICONS[pillar.id] || Award;
              const isSelected = selectedPillarId === pillar.id;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0b152d] border-cyan-400 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                      : 'bg-[#080e1e]/70 border-white/10 hover:border-cyan-500/30 hover:bg-[#0c1427]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                        PILLAR 0{index + 1}
                      </span>
                      <IconComp className={`w-5 h-5 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                    </div>

                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className="text-2xl sm:text-3xl font-black text-white font-mono">
                        {pillar.metric}
                      </span>
                      <span className="text-xs font-semibold text-cyan-300 font-mono">
                        {pillar.unit}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-100 mb-1 leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                      {pillar.highlight}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">{pillar.badge}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Pillar Deep-Dive Focus Panel */}
          {selectedPillar && (
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#080e1e] via-[#091226] to-[#080e1e] border border-cyan-500/30 shadow-2xl backdrop-blur-md animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">
                      {selectedPillar.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                      {selectedPillar.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {selectedPillar.title}
                  </h3>
                </div>

                <div className="flex items-baseline gap-2 bg-[#040813] px-5 py-3 rounded-2xl border border-cyan-500/20 shrink-0">
                  <span className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono">
                    {selectedPillar.metric}
                  </span>
                  <span className="text-xs uppercase font-mono text-slate-400 font-semibold">
                    {selectedPillar.unit}
                  </span>
                </div>
              </div>

              <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                    Operational Context & Impact
                  </h4>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    {selectedPillar.highlight}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                    Engineering Philosophy & Standard
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {selectedPillar.detail}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Company Evolution Milestones (2014 - 2026) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#080e1e]/60 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-8">
            <History className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              A Decade of Continuous Innovation (2014 – 2026)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative space-y-2 group">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200 font-mono">
                  {m.year}
                </div>
                <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500/60 to-transparent group-hover:from-cyan-400 transition-all" />
                <h4 className="text-xs font-bold text-slate-200 pt-1">
                  {m.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Compliance & Accreditations Banner */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-12 py-6 px-8 rounded-2xl bg-[#030712]/80 border border-white/5">
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            Enterprise Verification:
          </span>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>ISO/IEC 27001:2022 Certified</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>SOC-2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Award className="w-4 h-4 text-amber-400" />
            <span>AWS Advanced Tier Partner</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Award className="w-4 h-4 text-blue-400" />
            <span>Google Cloud Certified Architects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
