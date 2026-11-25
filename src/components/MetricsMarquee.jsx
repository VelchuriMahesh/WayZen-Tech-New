import React from 'react';
import { Sparkles, Zap, Award, Layers, Cpu, ShieldCheck } from 'lucide-react';

export const MetricsMarquee = () => {
  const metricsRow1 = [
    { number: "140+", label: "Projects Engineered", icon: Zap, sub: "Across Web, AI & Cloud Platforms" },
    { number: "99.99%", label: "Operational Uptime", icon: ShieldCheck, sub: "High-Concurrency Architectures" },
    { number: "12+", label: "Modern Frameworks", icon: Layers, sub: "MERN, Next.js, Python, Flutter" },
    { number: "100%", label: "On-Time Success", icon: Award, sub: "Production-Grade Releases" },
    { number: "0.1s", label: "Zero-Lag Latency", icon: Cpu, sub: "Sub-Second Global Execution" },
    { number: "24/7", label: "Direct Engineer Sync", icon: Sparkles, sub: "WhatsApp Real-Time Dev Desk" },
  ];

  const keywordsRow2 = [
    "AI AUTOMATION PIPELINES",
    "•",
    "HIGH-CONVERSION MERN PLATFORMS",
    "•",
    "SCALABLE SAAS ARCHITECTURES",
    "•",
    "SUB-SECOND CORE WEB VITALS",
    "•",
    "AUTONOMOUS WHATSAPP AGENTS",
    "•",
    "ENTERPRISE POS & BILLING SUITES",
    "•",
    "ZERO-BLOAT CLEAN CODE",
    "•",
  ];

  return (
    <section className="relative py-14 sm:py-20 md:py-28 bg-[#0a0101] text-white overflow-hidden border-y border-white/10 select-none">
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#cdd32c]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Top Editorial Eyebrow */}
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-[#cdd32c] text-[10px] font-mono font-black uppercase tracking-[0.25em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#cdd32c] animate-ping" />
            Quantifiable Scale & Benchmarks
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            PROVEN <span className="text-[#cdd32c] italic">VELOCITY.</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md md:text-right">
          Engineering high-speed digital assets measured in uptime, real conversion revenue, and zero architectural debt.
        </p>
      </div>

      {/* MARQUEE ROW 1: OVERSIZED METRIC STATS */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap mb-6 sm:mb-8">
        <div className="flex animate-marquee shrink-0 items-center gap-8 sm:gap-14">
          {[...metricsRow1, ...metricsRow1].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`m1-${idx}`}
                className="group relative flex items-center gap-5 sm:gap-7 px-6 sm:px-8 py-5 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#cdd32c]/50 transition-colors"
              >
                <div className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#cdd32c] font-sans group-hover:scale-105 transition-transform">
                  {item.number}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base tracking-tight uppercase">
                    <Icon size={14} className="text-[#cdd32c]" />
                    <span>{item.label}</span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-light mt-0.5 tracking-wider">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MARQUEE ROW 2: RUNNING TECHNICAL CAPABILITIES RIBBON */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap">
        <div className="flex animate-marquee-reverse shrink-0 items-center gap-6 sm:gap-10">
          {[...keywordsRow2, ...keywordsRow2].map((text, idx) => (
            <span
              key={`k1-${idx}`}
              className="text-xs sm:text-sm font-mono font-black uppercase tracking-[0.25em] text-white/50 hover:text-[#cdd32c] transition-colors"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};
