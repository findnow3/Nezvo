import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Shield, Heart, Terminal, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/websiteData';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02050c] text-slate-400 border-t border-cyan-500/15 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/25">
                <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
                  <span className="font-mono font-black text-cyan-400 text-base">N</span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                NEZVO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400 font-extrabold">INFOTECH</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Next-generation enterprise software, hyper-scalable cloud engineering, and autonomous machine learning systems. Turning complex architectural challenges into decisive competitive advantage.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">
              Core Capabilities (6)
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-cyan-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company & Experience */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">
              Enterprise Experience
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">10+ Years Industry History</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">120+ Shipped Platforms</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">ISO 27001 & SOC-2 Compliance</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">AI & Emerging Tech Labs</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">24/7 Global SRE Operations</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition-colors">Scope & Timeline Calculator</a></li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-slate-300 font-medium">Inquiries & Proposals:</p>
              <p className="text-cyan-400 font-mono">consulting@nezvoinfotech.com</p>
              <p className="text-slate-300 font-medium pt-2">Direct Phone Hotline:</p>
              <p className="text-slate-300 font-mono">+1 (800) 842-NEZVO</p>
              <button
                onClick={onOpenContact}
                className="mt-3 px-4 py-2 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-500 hover:text-black font-semibold text-xs transition-all w-full flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Discovery Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Nezvo Infotech. All Rights Reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              SOC-2 Type II Certified
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#hero" className="hover:text-slate-300">Terms of Service</a>
            <a href="#hero" className="hover:text-slate-300">Security Architecture</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors ml-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
