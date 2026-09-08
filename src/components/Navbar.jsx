import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Shield, Terminal, PhoneCall, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenContact, onSelectService }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Services (6)', href: '#services' },
    { label: 'About & Experience (8)', href: '#about' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/85 backdrop-blur-xl border-b border-cyan-500/15 py-3 shadow-2xl shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-400/40 transition-all duration-300">
            <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center relative overflow-hidden">
              <span className="font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200 text-lg">
                N
              </span>
              <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              NEZVO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400 font-extrabold">INFOTECH</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5">
              Next-Gen Tech Systems
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#080e1e]/60 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs lg:text-sm font-medium text-slate-300 hover:text-cyan-400 px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onOpenContact()}
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 rounded-full group-hover:opacity-90 transition-opacity" />
            <span className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-[#030712] text-xs font-semibold text-white tracking-wide group-hover:bg-opacity-80 transition-all duration-200">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Consult an Architect</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#030712]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/60"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
