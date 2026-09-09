import React, { useEffect, useRef, useState } from 'react';
import { HERO_CHAPTERS } from '../data/websiteData';
import { 
  Play, Pause, ArrowRight, Sparkles, CheckCircle2, 
  Activity, Shield, Cpu, Cloud, Layers, Terminal, ChevronRight 
} from 'lucide-react';

const CHAPTER_ICONS = [Cloud, Cpu, Layers, Shield];

export default function HeroScrollytelling({ onSelectService, onOpenContact }) {
  const canvasRef = useRef(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [isPlayingAutoTour, setIsPlayingAutoTour] = useState(true);
  const mousePosRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Auto-tour rotation every 6 seconds if active
  useEffect(() => {
    if (!isPlayingAutoTour) return;
    const interval = setInterval(() => {
      setActiveChapterIndex((prev) => (prev + 1) % HERO_CHAPTERS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPlayingAutoTour]);

  // Track mouse coordinates for interactive canvas parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 60;
      mousePosRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 40;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 60 FPS Generative Fluid Mesh & Particle Wave Canvas
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

    // Floating particles
    const particleCount = Math.min(65, Math.floor(window.innerWidth / 20));
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1.2,
        alpha: Math.random() * 0.45 + 0.25,
        hue: Math.random() > 0.5 ? 199 : 224, // Cyan to Royal Blue
      });
    }

    let animId;
    let step = 0;

    const render = () => {
      step += 0.008;

      // Smooth mouse lerp
      mousePosRef.current.x += (mousePosRef.current.targetX - mousePosRef.current.x) * 0.05;
      mousePosRef.current.y += (mousePosRef.current.targetY - mousePosRef.current.y) * 0.05;
      const mx = mousePosRef.current.x;
      const my = mousePosRef.current.y;

      // Clear with soft light canvas
      ctx.clearRect(0, 0, width, height);

      // 1. Draw flowing fluid wave currents (Light-theme modern waves)
      const waveCount = 3;
      const waves = [
        { y: height * 0.65, amplitude: 35, frequency: 0.0022, speed: 0.012, color: 'rgba(2, 132, 199, 0.08)' },
        { y: height * 0.72, amplitude: 50, frequency: 0.0018, speed: 0.008, color: 'rgba(37, 99, 235, 0.06)' },
        { y: height * 0.80, amplitude: 40, frequency: 0.0026, speed: 0.015, color: 'rgba(99, 102, 241, 0.05)' }
      ];

      waves.forEach((w, idx) => {
        ctx.beginPath();
        ctx.moveTo(0, height);
        for (let x = 0; x <= width; x += 12) {
          const waveY = w.y +
            Math.sin(x * w.frequency + step * w.speed * 80 + idx) * w.amplitude +
            Math.cos(x * 0.001 + step) * 15 +
            my * (idx * 0.3 + 0.2);
          if (x === 0) ctx.lineTo(x, waveY);
          else ctx.lineTo(x, waveY);
        }
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = w.color;
        ctx.fill();
      });

      // 2. Draw subtle floating particles & synaptic connectors
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const drawX = p.x + mx * 0.25;
        const drawY = p.y + my * 0.25;

        // Draw particle
        ctx.beginPath();
        ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 55%, ${p.alpha})`;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.18;
            ctx.beginPath();
            ctx.moveTo(drawX, drawY);
            ctx.lineTo(p2.x + mx * 0.25, p2.y + my * 0.25);
            ctx.strokeStyle = `rgba(2, 132, 199, ${lineAlpha})`;
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

  const currentChapter = HERO_CHAPTERS[activeChapterIndex] || HERO_CHAPTERS[0];
  const ActiveIcon = CHAPTER_ICONS[activeChapterIndex] || Cloud;

  return (
    <section
      id="hero"
      className="relative w-full min-h-[88vh] lg:min-h-[92vh] bg-gradient-to-b from-white via-slate-50 to-slate-100 flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 60 FPS Light-Theme Generative Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-light-grid pointer-events-none opacity-40 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Top Floating Badge & Interactive Auto-Tour Control */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span className="text-xs font-semibold text-slate-800 tracking-wide">
              {currentChapter.badge}
            </span>
          </div>

          <button
            onClick={() => setIsPlayingAutoTour(!isPlayingAutoTour)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
              isPlayingAutoTour
                ? 'bg-cyan-50 text-cyan-700 border-cyan-300 shadow-sm'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
            title="Toggle Focus Tour"
          >
            {isPlayingAutoTour ? (
              <>
                <Pause className="w-3 h-3 fill-current" />
                <span>Auto-Tour On</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-current" />
                <span>Resume Tour</span>
              </>
            )}
          </button>
        </div>

        {/* Dynamic Chapter Focus Pills Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {HERO_CHAPTERS.map((chap, idx) => {
            const Icon = CHAPTER_ICONS[idx] || Cloud;
            const isSelected = activeChapterIndex === idx;
            return (
              <button
                key={chap.id}
                onClick={() => {
                  setActiveChapterIndex(idx);
                  setIsPlayingAutoTour(false);
                }}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 text-white border-transparent shadow-md shadow-cyan-600/25 scale-105'
                    : 'bg-white/80 text-slate-600 border-slate-200 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                <span>{chap.category}</span>
              </button>
            );
          })}
        </div>

        {/* Main Hero Typography & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h1
            key={currentChapter.title}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12] transition-all duration-300"
          >
            {currentChapter.title.split(' ').slice(0, 2).join(' ')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700">
              {currentChapter.title.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          <p
            key={currentChapter.subtitle}
            className="max-w-2xl mx-auto text-sm sm:text-lg text-slate-600 font-normal leading-relaxed transition-all duration-300"
          >
            {currentChapter.subtitle}
          </p>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-xl mx-auto pt-2 pb-2">
            {currentChapter.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-4 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all text-center"
              >
                <div className="text-lg sm:text-2xl lg:text-3xl font-black text-cyan-600 font-mono tracking-tight">
                  {m.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href={currentChapter.ctaTarget}
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-cyan-600/25 hover:shadow-cyan-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>{currentChapter.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenContact()}
              className="px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-300/80 hover:border-cyan-500/40 shadow-sm transition-all flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-cyan-600" />
              <span>Talk to an Architect</span>
            </button>
          </div>
        </div>

        {/* Live System Telemetry HUD Bar */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-slate-700 font-semibold uppercase tracking-wider text-[11px]">
              Active Systems: All Pods Healthy
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-500 font-mono text-[11px]">
            <span>Latency: <strong className="text-slate-800">&lt; 12ms</strong></span>
            <span>•</span>
            <span>Uptime: <strong className="text-emerald-600">99.99%</strong></span>
            <span>•</span>
            <span>Certifications: <strong className="text-cyan-700">SOC-2 • ISO</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
