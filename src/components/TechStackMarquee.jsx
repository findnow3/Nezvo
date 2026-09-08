import React from 'react';
import { TECH_ECOSYSTEM } from '../data/websiteData';
import { Cpu, Cloud, Database, Lock, Code2, Server, Shield, Radio, Terminal, Box } from 'lucide-react';

export default function TechStackMarquee() {
  return (
    <section id="tech-stack" className="py-16 bg-[#030712] border-b border-cyan-500/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
          INFRASTRUCTURE & ECOSYSTEM
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
          Engineered With Industry-Standard Technologies
        </h3>
      </div>

      {/* Infinite scrolling row */}
      <div className="relative w-full overflow-hidden">
        {/* Left and right gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
          {[...TECH_ECOSYSTEM, ...TECH_ECOSYSTEM].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#080e1e]/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
