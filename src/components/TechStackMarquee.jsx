import React from 'react';
import { TECH_ECOSYSTEM } from '../data/websiteData';
import { Terminal } from 'lucide-react';

export default function TechStackMarquee() {
  return (
    <section id="tech-stack" className="py-12 bg-white border-b border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold">
          CORE ECOSYSTEM
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
          Engineered With Modern Industry-Standard Technologies
        </h3>
      </div>

      {/* Infinite Scrolling Ticker */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max gap-3.5 animate-marquee hover:[animation-play-state:paused]">
          {[...TECH_ECOSYSTEM, ...TECH_ECOSYSTEM].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-cyan-400 hover:bg-white transition-all shadow-sm group"
            >
              <div className="w-7 h-7 rounded-lg bg-cyan-100/70 flex items-center justify-center text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800 group-hover:text-cyan-800 transition-colors">
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
