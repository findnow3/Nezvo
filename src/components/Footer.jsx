import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Shield, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/websiteData';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-14 pb-10 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-sky-500 to-blue-600 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                  <span className="font-mono font-black text-cyan-400 text-sm">N</span>
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                NEZVO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400 font-extrabold">INFOTECH</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Next-generation enterprise software, cloud infrastructure, and autonomous AI systems built for planetary scale and mission-critical reliability.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">
              Capabilities
            </h4>
            <ul className="space-y-1.5 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-cyan-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">
              Organization
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">10+ Years History</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">120+ Shipped Systems</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">SOC-2 & ISO Compliance</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition-colors">Project Estimator</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">
              Contact
            </h4>
            <div className="space-y-1.5 text-xs">
              <p className="text-slate-300 font-medium">Inquiries:</p>
              <p className="text-cyan-400 font-mono text-[11px]">consulting@nezvoinfotech.com</p>
              <p className="text-slate-300 font-medium pt-1">Direct Hotline:</p>
              <p className="text-slate-400 font-mono text-[11px]">+1 (800) 842-NEZVO</p>
              <button
                onClick={onOpenContact}
                className="mt-2.5 px-3.5 py-1.5 rounded-xl bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-600 font-semibold text-xs transition-all w-full flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Nezvo Infotech. All Rights Reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Shield className="w-3 h-3 text-emerald-400" />
              SOC-2 Type II Certified
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a href="#hero" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#hero" className="hover:text-slate-300">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors ml-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
