import React, { useEffect, useRef, useState } from 'react';
import { HERO_CHAPTERS } from '../data/websiteData';
import { Play, Pause, ChevronDown, Sparkles, Zap, Shield, ArrowRight, Compass, Eye } from 'lucide-react';

export default function HeroScrollytelling({ onSelectService, onOpenContact }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Smooth lerp progress for 60fps rendering
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const animFrameIdRef = useRef(null);

  // Handle Scroll Progress (driven by user scrolling)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      // If user scrolls past the hero section, ensure video mode stops immediately
      if (rect.bottom <= window.innerHeight || -rect.top >= totalScrollable) {
        if (isPlayingVideo) {
          setIsPlayingVideo(false);
        }
      }

      // If video mode is not running, calculate progress from scroll
      if (!isPlayingVideo) {
        const progress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
        targetProgressRef.current = progress;
        setScrollProgress(progress);

        // Map progress to chapter index (0, 1, 2, 3)
        if (progress < 0.25) {
          setActiveChapterIndex(0);
        } else if (progress < 0.5) {
          setActiveChapterIndex(1);
        } else if (progress < 0.75) {
          setActiveChapterIndex(2);
        } else {
          setActiveChapterIndex(3);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlayingVideo]);

  // Immediately pause video mode if the user manually scrolls or touches the viewport
  useEffect(() => {
    if (!isPlayingVideo) return;

    const handleUserScroll = () => {
      setIsPlayingVideo(false);
    };

    window.addEventListener('wheel', handleUserScroll, { passive: true });
    window.addEventListener('touchmove', handleUserScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleUserScroll);
      window.removeEventListener('touchmove', handleUserScroll);
    };
  }, [isPlayingVideo]);

  // Auto-play Video Mode (Virtual 60 FPS animation that loops seamlessly without locking or hijacking browser scroll)
  useEffect(() => {
    let animId;

    if (isPlayingVideo) {
      const step = () => {
        // If hero section has been scrolled out of view, automatically pause video
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          if (rect.bottom < 50 || rect.top > window.innerHeight) {
            setIsPlayingVideo(false);
            return;
          }
        }

        // Advance virtual video progress smoothly
        let next = targetProgressRef.current + 0.0018;
        if (next >= 1.0) {
          next = 0; // seamless continuous loop back to Chapter 1
          currentProgressRef.current = 0;
        }
        targetProgressRef.current = next;
        setScrollProgress(next);

        // Update active chapter in lockstep with virtual video progress
        if (next < 0.25) {
          setActiveChapterIndex(0);
        } else if (next < 0.5) {
          setActiveChapterIndex(1);
        } else if (next < 0.75) {
          setActiveChapterIndex(2);
        } else {
          setActiveChapterIndex(3);
        }

        animId = requestAnimationFrame(step);
      };

      animId = requestAnimationFrame(step);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isPlayingVideo]);

  const toggleVideoMode = () => {
    if (!isPlayingVideo) {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.bottom < 100 || rect.top > window.innerHeight) {
          window.scrollTo({ top: containerRef.current.offsetTop, behavior: 'smooth' });
        }
      }
      setIsPlayingVideo(true);
    } else {
      setIsPlayingVideo(false);
    }
  };

  // Jump directly to chapter
  const jumpToChapter = (index) => {
    if (isPlayingVideo) {
      setIsPlayingVideo(false);
    }
    if (!containerRef.current) return;
    const totalScrollable = containerRef.current.clientHeight - window.innerHeight;
    const targetScroll = containerRef.current.offsetTop + (index / 3.2) * totalScrollable;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  // 3D Cinematic Canvas Animation Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate 3D cyber nodes
    const nodeCount = 130;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * 2200,
        y: (Math.random() - 0.5) * 1400,
        z: Math.random() * 3200 - 800,
        origZ: Math.random() * 3200 - 800,
        radius: Math.random() * 2.8 + 1.2,
        pulseSpeed: Math.random() * 0.04 + 0.01,
        phase: Math.random() * Math.PI * 2,
        colorIndex: Math.floor(Math.random() * 3)
      });
    }

    // Tunnel Rings geometry (creates the forward warp video effect)
    const ringCount = 20;
    const rings = [];
    for (let i = 0; i < ringCount; i++) {
      rings.push({
        z: i * 220,
        sides: 8, // Octagonal cyber corridor
        radius: 420 + Math.sin(i * 0.4) * 80,
      });
    }

    // Main 60 FPS Render Loop
    const render = (now) => {

      // Smooth camera interpolation
      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * 0.08;
      const p = currentProgressRef.current;

      // Clear with dark cinematic backdrop
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const fov = 460;

      // Cinematic camera trajectory based on scroll progress
      const cameraZ = p * 2600;
      const cameraYaw = Math.sin(p * Math.PI * 2) * 0.25;
      const cameraPitch = Math.cos(p * Math.PI * 1.5) * 0.15;
      const roll = Math.sin(p * Math.PI * 3) * 0.08;

      // Color scheme transitions across the 4 chapters
      let mainHue = 195; // Cyan
      let secondaryHue = 220; // Sky
      if (p > 0.25 && p <= 0.5) {
        const factor = (p - 0.25) / 0.25;
        mainHue = 195 + factor * (255 - 195); // transitioning to Indigo
        secondaryHue = 220 + factor * (280 - 220);
      } else if (p > 0.5 && p <= 0.75) {
        const factor = (p - 0.5) / 0.25;
        mainHue = 255 - factor * 70; // transitioning to Neon Sky
        secondaryHue = 280 - factor * 80;
      } else if (p > 0.75) {
        const factor = (p - 0.75) / 0.25;
        mainHue = 185 + factor * 20; // transitioning to Emerald/Teal
        secondaryHue = 200 + factor * 10;
      }

      // 1. Draw 3D Tunnel Ribs (The "video fly-through" effect)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(roll);

      for (let i = 0; i < rings.length; i++) {
        const ring = rings[i];
        let relZ = (ring.z - (cameraZ % 4400) + 4400) % 4400 - 400;
        if (relZ <= 10) continue;

        const scale = fov / relZ;
        const ringRadius = ring.radius * scale;
        const alpha = Math.min(1, Math.max(0, (relZ - 50) / 100)) * (1 - relZ / 4000) * 0.6;

        ctx.beginPath();
        ctx.strokeStyle = `hsla(${mainHue}, 85%, 60%, ${alpha})`;
        ctx.lineWidth = Math.max(1, 2.5 * scale);

        // Compute rotated octagon points
        for (let s = 0; s <= ring.sides; s++) {
          const angle = (s / ring.sides) * Math.PI * 2 + cameraYaw + i * 0.05;
          const px = Math.cos(angle) * ringRadius;
          const py = Math.sin(angle) * ringRadius;

          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Connect longitudinal corridor lines every 2 rings
        if (i % 2 === 0 && alpha > 0.15) {
          ctx.beginPath();
          ctx.strokeStyle = `hsla(${secondaryHue}, 90%, 65%, ${alpha * 0.35})`;
          ctx.lineWidth = 1;
          for (let s = 0; s < ring.sides; s += 2) {
            const angle = (s / ring.sides) * Math.PI * 2 + cameraYaw + i * 0.05;
            const px = Math.cos(angle) * ringRadius;
            const py = Math.sin(angle) * ringRadius;
            ctx.moveTo(px, py);
            ctx.lineTo(px * 1.25, py * 1.25);
          }
          ctx.stroke();
        }
      }
      ctx.restore();

      // 2. Draw 3D Floating Particles & Neural Data Links
      const projectedNodes = [];
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        // Move with camera depth
        let relZ = (node.z - cameraZ * 1.2 + 6000) % 3600 - 300;
        if (relZ <= 15) continue;

        const scale = fov / relZ;
        // Apply camera yaw & pitch
        const rx = node.x * Math.cos(cameraYaw) - (node.y) * Math.sin(cameraYaw);
        const ry = node.y * Math.cos(cameraPitch) + rx * Math.sin(cameraPitch);

        const px = cx + rx * scale;
        const py = cy + ry * scale;

        if (px < -50 || px > width + 50 || py < -50 || py > height + 50) continue;

        const pulse = Math.sin(now * node.pulseSpeed + node.phase) * 0.5 + 0.5;
        const alpha = Math.min(1, Math.max(0, 1 - relZ / 3200));

        projectedNodes.push({ px, py, scale, alpha, pulse, z: relZ });

        // Draw individual glowing node
        ctx.beginPath();
        const rad = Math.max(1.2, node.radius * scale * (1 + pulse * 0.3));
        ctx.arc(px, py, rad, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${mainHue + (node.colorIndex * 20)}, 95%, 65%, ${alpha * 0.85})`;
        ctx.shadowBlur = 12 * scale;
        ctx.shadowColor = `hsla(${mainHue}, 90%, 60%, 0.9)`;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Draw dynamic synaptic lines between nearby nodes
      ctx.beginPath();
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n1 = projectedNodes[i];
          const n2 = projectedNodes[j];
          const dx = n1.px - n2.px;
          const dy = n1.py - n2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * n1.alpha * n2.alpha * 0.3;
            ctx.strokeStyle = `hsla(${secondaryHue}, 80%, 65%, ${lineAlpha})`;
            ctx.moveTo(n1.px, n1.py);
            ctx.lineTo(n2.px, n2.py);
          }
        }
      }
      ctx.stroke();

      // 3. Central Energy Nebula Core (Cinematic bloom)
      const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, width * 0.45);
      grad.addColorStop(0, `hsla(${mainHue}, 100%, 60%, ${0.12 + Math.sin(now * 0.002) * 0.03})`);
      grad.addColorStop(0.4, `hsla(${secondaryHue}, 90%, 50%, 0.05)`);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Loop frame
      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  const currentChapter = HERO_CHAPTERS[activeChapterIndex] || HERO_CHAPTERS[0];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-[220vh] sm:h-[380vh] bg-[#030712] text-white"
    >
      {/* Sticky Cinematic Viewport */}
      <div className="sticky top-0 h-screen h-[100dvh] w-full overflow-hidden flex flex-col justify-between">
        {/* Interactive 3D Canvas Background (Video-like 60fps scrub) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />

        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-25 z-0" />
        <div className="absolute inset-0 scanline pointer-events-none opacity-20 z-0" />
        <div className="absolute inset-x-0 top-0 h-28 sm:h-32 bg-gradient-to-b from-[#030712] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent pointer-events-none z-10" />

        {/* Top Controls Bar */}
        <div className="relative z-20 pt-16 sm:pt-20 px-4 sm:px-12 flex items-center justify-end pointer-events-auto">

          {/* Video Play/Pause toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleVideoMode}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-300 border ${
                isPlayingVideo
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-neon-cyan'
                  : 'bg-[#080e1e]/70 text-slate-300 border-white/10 hover:border-cyan-400/40'
              }`}
              title="Continuous Video Mode (Infinite Loop)"
            >
              {isPlayingVideo ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause Video</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Play Video Walkthrough</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Center: Dynamic Transforming Hero Narrative Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-8 my-auto w-full pointer-events-auto">
          <div className="space-y-3 sm:space-y-6 text-center">
            {/* Chapter Header Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 backdrop-blur-lg shadow-lg shadow-cyan-950/40">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-cyan-300 font-bold">
                {currentChapter.chapter} // {currentChapter.phase}
              </span>
              <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
              <span className="text-[10px] sm:text-xs text-slate-300 font-medium">
                {currentChapter.tag}
              </span>
            </div>

            {/* Dynamic Headline with Smooth Transition Effect */}
            <h1
              key={currentChapter.title}
              className="text-2xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.12] sm:leading-[1.08] text-white drop-shadow-2xl transition-all duration-500"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                {currentChapter.title.split(' ').slice(0, 2).join(' ')}{' '}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 font-extrabold underline decoration-cyan-500/30 decoration-wavy">
                {currentChapter.title.split(' ').slice(2).join(' ')}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              key={currentChapter.subtitle}
              className="max-w-3xl mx-auto text-xs sm:text-base lg:text-xl text-slate-300 font-normal leading-relaxed transition-all duration-500 drop-shadow line-clamp-2 sm:line-clamp-none"
            >
              {currentChapter.subtitle}
            </p>

            {/* Key Metrics / Highlights Grid for Current Chapter */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 max-w-2xl mx-auto pt-1 sm:pt-2 pb-1 sm:pb-4">
              {currentChapter.highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="bg-[#080e1e]/70 border border-cyan-500/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 backdrop-blur-md shadow-lg shadow-black/40 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="text-base sm:text-2xl lg:text-3xl font-black text-cyan-300 tracking-tight font-mono">
                    {h.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5 sm:mt-1 truncate">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-1 sm:pt-2">
              <a
                href={currentChapter.ctaTarget}
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-5 py-2.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-bold text-xs sm:text-base tracking-wide shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>{currentChapter.ctaText}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => onOpenContact()}
                className="px-4 py-2.5 sm:px-7 sm:py-4 rounded-full bg-[#080e1e]/80 hover:bg-[#0c162e] text-slate-200 hover:text-white font-semibold text-xs sm:text-base border border-white/15 hover:border-cyan-400/40 backdrop-blur-md transition-all duration-200 flex items-center gap-1.5 sm:gap-2"
              >
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                <span>Talk to Nezvo Experts</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Scrubber & Chapter Navigation Bar */}
        <div className="relative z-20 pb-4 sm:pb-8 px-4 sm:px-12 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pointer-events-auto">
          {/* Timeline Status */}
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 animate-bounce" />
            <span>CINEMATIC TIMELINE • {Math.round(scrollProgress * 100)}%</span>
          </div>

          {/* Chapter Timeline Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#080e1e]/80 border border-white/10 rounded-full p-1 sm:p-1.5 backdrop-blur-md shadow-xl">
            {HERO_CHAPTERS.map((chap, idx) => (
              <button
                key={chap.id}
                onClick={() => jumpToChapter(idx)}
                className={`flex items-center gap-1 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono transition-all duration-300 ${
                  activeChapterIndex === idx
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-md shadow-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>0{idx + 1}</span>
                <span className="hidden md:inline">{chap.phase.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Video Scrub Progress Line */}
          <div className="hidden lg:flex items-center gap-3 w-48">
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full transition-all duration-150"
                style={{ width: `${Math.max(5, scrollProgress * 100)}%` }}
              />
            </div>
            <span className="font-mono text-xs text-cyan-300 min-w-[32px]">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
