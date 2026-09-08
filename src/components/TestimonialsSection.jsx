import React from 'react';
import { TESTIMONIALS } from '../data/websiteData';
import { Quote, Star, Building, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#040813] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            CLIENT SATISFACTION & TRUST
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Trusted By Engineering Leaders Worldwide
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Discover why Fortune 500 enterprises and hyper-growth unicorns rely on Nezvo Infotech for mission-critical software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#080e1e]/80 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between backdrop-blur-xl relative group shadow-xl"
            >
              <div>
                <Quote className="w-8 h-8 text-cyan-500/40 mb-4 group-hover:text-cyan-400 transition-colors" />
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-cyan-400/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {t.author}
                  </h4>
                  <p className="text-xs text-cyan-400 font-mono">
                    {t.role}
                  </p>
                  <span className="text-[11px] text-slate-400">
                    {t.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
