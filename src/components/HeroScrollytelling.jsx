import React, { useEffect, useRef, useState } from 'react';
import { HERO_DATA } from '../data/websiteData';
import { ArrowRight, Sparkles, Layers, Smartphone, Cloud, Cpu, CheckCircle } from 'lucide-react';

const CAPABILITIES = [
  { id: 'web', label: 'Web Applications', icon: Layers, desc: 'Full-stack React, Next.js & Node.js platforms' },
  { id: 'mobile', label: 'Mobile Apps', icon: Smartphone, desc: 'Cross-platform iOS & Android with Flutter' },
  { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud, desc: 'AWS setup, Docker & automated CI/CD' },
  { id: 'ai', label: 'AI Solutions', icon: Cpu, desc: 'Custom OpenAI, chatbots & document RAG' },
];

export default function HeroScrollytelling({ onSelectService, onOpenContact }) {
  const canvasRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  // 60 FPS Light-Theme Fluid Wave & Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const count = Math.min(45, Math.floor(window.innerWidth / 30));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.35 + 0.15,
        hue: Math.random() > 0.5 ? 199 : 220,
      });
    }

    let animId;
    let step = 0;

    const render = () => {
      step += 0.006;
      ctx.clearRect(0, 0, width, height);

      // Fluid Wave Layers
      const waves = [
        { y: height * 0.68, amp: 30, freq: 0.002, speed: 0.01, color: 'rgba(2, 132, 199, 0.06)' },
        { y: height * 0.76, amp: 40, freq: 0.0016, speed: 0.008, color: 'rgba(37, 99, 235, 0.05)' },
        { y: height * 0.84, amp: 35, freq: 0.0024, speed: 0.012, color: 'rgba(99, 102, 241, 0.04)' }
      ];

      waves.forEach((w, idx) => {
        ctx.beginPath();
        ctx.moveTo(0, height);
        for (let x = 0; x <= width; x += 16) {
          const waveY = w.y + Math.sin(x * w.freq + step * w.speed * 80 + idx) * w.amp;
          if (x === 0) ctx.lineTo(x, waveY);
          else ctx.lineTo(x, waveY);
        }
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = w.color;
        ctx.fill();
      });

      // Subtle Floating Particles & Connectors
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 55%, ${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(2, 132, 199, ${(1 - dist / 100) * 0.12})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  const activeCapability = CAPABILITIES[activeTab];

  return (
    <section
      id="hero"
      className="relative w-full min-h-[82vh] lg:min-h-[86vh] bg-gradient-to-b from-white via-slate-50 to-slate-100 flex items-center justify-center pt-24 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      <div className="absolute top-1/4 -left-16 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-16 w-80 h-80 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
          <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          <span className="text-xs font-semibold text-slate-700">
            {HERO_DATA.badge}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15] max-w-4xl mx-auto">
          Building Reliable{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700">
            Software & AI Solutions
          </span>{' '}
          for Growing Businesses
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {HERO_DATA.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-cyan-600/25 transition-all"
          >
            <span>{HERO_DATA.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => onOpenContact()}
            className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-300 shadow-sm transition-all"
          >
            {HERO_DATA.ctaSecondary}
          </button>
        </div>

        {/* 3 Real Metrics */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto mt-10">
          {HERO_DATA.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 rounded-xl bg-white/90 border border-slate-200/80 shadow-sm"
            >
              <div className="text-xl sm:text-2xl font-black text-cyan-700 font-mono">
                {m.value}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Capabilities Interactive Pills */}
        <div className="mt-10 pt-6 border-t border-slate-200/70 max-w-2xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            {CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                    isSelected
                      ? 'bg-cyan-50 text-cyan-900 border-cyan-400 shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-700' : 'text-slate-400'}`} />
                  <span>{cap.label}</span>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-slate-500 font-medium">
            {activeCapability.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
