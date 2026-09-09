import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../data/websiteData';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-12 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[5px] flex items-center justify-center">
                  <span className="font-mono font-black text-cyan-400 text-xs">N</span>
                </div>
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                NEZVO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400 font-extrabold">INFOTECH</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Software engineering, mobile app development, and cloud solutions built with modern technology and clean architecture.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold">
              Services
            </h4>
            <ul className="space-y-1 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-cyan-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold">
              Company
            </h4>
            <ul className="space-y-1 text-xs">
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">About Nezvo</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">Our Work Ethic</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition-colors">Timeline Estimator</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold">
              Office
            </h4>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-start gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.office.address}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                <span className="font-mono text-[11px] text-cyan-400">{CONTACT_INFO.office.email}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                <span className="font-mono text-[11px]">{CONTACT_INFO.office.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Nezvo Infotech. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
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
