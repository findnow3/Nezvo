import React from 'react';
import { TESTIMONIALS } from '../data/websiteData';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold">
            CLIENT PARTNERSHIPS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            Trusted By Engineering Leadership Worldwide
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            See how high-growth scale-ups and enterprise institutions build on Nezvo Infotech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-400/40 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <Quote className="w-7 h-7 text-cyan-500/40 mb-3" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-5 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-cyan-400/40"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-cyan-700 font-mono font-medium">
                    {t.role}
                  </p>
                  <span className="text-[10px] text-slate-500">
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
