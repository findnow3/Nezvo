import React from 'react';
import { CASE_STUDIES } from '../data/websiteData';
import { CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold">
            PROVEN RESULTS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            Featured Project Case Studies
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Real solutions engineered for performance, scale, and clear business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((project, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-400/50 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200 inline-block mb-3">
                  {project.category}
                </span>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {project.desc}
                </p>

                <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/60 flex items-start gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-emerald-900">
                    {project.outcome}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                {project.stack.map((tech, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
