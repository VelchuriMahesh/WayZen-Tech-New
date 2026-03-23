"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Target, GraduationCap, ArrowUpRight, 
  Zap, Globe, Code2, Cpu, 
  Layers, MessageSquare,
  Trophy, Smartphone, PenTool,
  Home, Briefcase 
} from "lucide-react";

// --- 1. MAGICAL GLOW TRAIL ---
const MagicTrail = () => {
  const [trail, setTrail] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for mobile
    const checkMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsMobile(checkMobile);
    
    if (checkMobile) return;

    const handleMove = (e) => {
      const newPoint = { x: e.clientX, y: e.clientY, id: Math.random() };
      setTrail((prev) => [...prev.slice(-8), newPoint]);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []); // Only runs on mount

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[999] overflow-hidden">
      <AnimatePresence>
        {trail.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.6, scale: 0 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute",
              left: p.x,
              top: p.y,
              width: 12,
              height: 12,
              background: i % 2 === 0 ? "#3b82f6" : "#ec4899",
              borderRadius: "50%",
              filter: "blur(8px)",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

// --- 2. PRISMATIC CARD ---
const FeatureCard = ({ title, desc, icon: Icon, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative group h-full min-h-[300px] md:h-[420px] w-full cursor-pointer"
  >
    <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-[2rem] opacity-10 group-hover:opacity-100 blur-lg transition duration-500`} />
    
    <div className="relative h-full bg-[#030712]/90 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-7 md:p-10 flex flex-col justify-between overflow-hidden text-left">
      <div className="z-10 text-left">
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-2xl`}>
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="z-10 flex items-center justify-between mt-6">
        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-indigo-400">WayZen Foundry</span>
        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
          <ArrowUpRight size={16} />
        </div>
      </div>
      <Icon size={120} className="hidden sm:block absolute -bottom-10 -right-10 text-white/[0.02] group-hover:text-white/[0.05] transition-colors" />
    </div>
  </motion.div>
);

const WhatIsWayZenTech = () => {
  const navigate = useNavigate();

  // UseCallback for performance and to satisfy linting
  const handleNav = useCallback((item) => {
    if (item.path === "whatsapp") {
      window.open('https://wa.me/919398724704', '_blank');
    } else {
      navigate(item.path);
    }
  }, [navigate]);

  const navItems = [
    { label: "Home", icon: <Home size={18} />, path: "/" },
    { label: "Work", icon: <Briefcase size={18} />, path: "/services" },
    { label: "Talk", icon: <MessageSquare size={18} />, path: "whatsapp" },
  ];

  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-blue-500/40 overflow-x-hidden">
      <MagicTrail />

      {/* AMBIENT BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-5%] left-[-10%] w-[80%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-10%] w-[80%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-24 z-10 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Premium Tech Lab // v5.0</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-[130px] font-black italic uppercase leading-[0.9] md:leading-[0.75] tracking-tighter mb-8 text-left">
            ELITE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 text-left">
              FOUNDRY.
            </span>
          </h1>

          <p className="max-w-xl text-slate-400 text-base md:text-2xl font-light leading-relaxed mb-10 text-left">
            WayZenTech is an India-based engineering engine architecting <span className="text-white font-medium">supreme digital assets</span> for global founders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('/')}
              className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-xl"
            >
              Back to Launchpad
            </button>
            <button 
              onClick={() => window.open('https://wa.me/919398724704', '_blank')}
              className="w-full sm:w-auto px-10 py-5 border border-white/20 font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-white/5 transition-all backdrop-blur-md"
            >
              Contact HQ
            </button>
          </div>
        </motion.div>
      </section>

      {/* PRISMATIC GRID SECTION */}
      <section className="relative z-10 py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard title="App Forge" desc="MERN & Next.js systems engineered for infinite scalability and speed." icon={Code2} color="from-blue-600 to-indigo-500" delay={0.1} />
          <FeatureCard title="Growth Alpha" desc="Performance analytics and aggressive marketing to dominate market share." icon={Target} color="from-purple-600 to-pink-500" delay={0.2} />
          <FeatureCard title="IEEE Labs" desc="Elite research and project support following global industrial standards." icon={GraduationCap} color="from-emerald-500 to-teal-500" delay={0.3} />
          <FeatureCard title="Core Infra" desc="Resilient cloud architectures and secure DevOps pipelines." icon={Cpu} color="from-orange-500 to-red-500" delay={0.4} />
          <FeatureCard title="Mobile Lab" desc="Native experiences optimized for high-performance and fluid UX." icon={Smartphone} color="from-cyan-500 to-blue-500" delay={0.5} />
          <FeatureCard title="Design Lab" desc="Advanced UI/UX architecting focused on conversion and beauty." icon={PenTool} color="from-pink-500 to-rose-500" delay={0.6} />
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative z-10 py-20 bg-white text-black rounded-t-[40px] md:rounded-t-[100px] mt-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-12 text-center">
          {[
            { v: "140+", l: "Projects", i: <Zap /> },
            { v: "ELITE", l: "Partners", i: <Globe /> },
            { v: "GLOBAL", l: "Scale", i: <Trophy /> },
            { v: "0.1s", l: "Latency", i: <Layers /> },
          ].map((s, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="mb-3 text-blue-600 scale-125 md:scale-150">{s.i}</div>
              <div className="text-3xl md:text-5xl font-black italic tracking-tighter mb-1">{s.v}</div>
              <div className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM NAVIGATION DOCK */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-1 p-1.5 bg-black/70 backdrop-blur-3xl border border-white/10 rounded-full shadow-2xl">
        {navItems.map((item, i) => (
          <div 
            key={i} 
            onClick={() => handleNav(item)}
            className="px-5 py-3 md:px-8 md:py-4 rounded-full text-white/70 hover:text-white hover:bg-white/10 cursor-pointer transition-all flex items-center gap-3 group active:scale-90"
          >
            {item.icon}
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest">{item.label}</span>
          </div>
        ))}
      </nav>

      <footer className="relative z-10 py-20 pb-32 text-center opacity-30 text-[8px] font-mono tracking-[0.3em] uppercase px-6">
        WayZenTech Foundry // © 2024 Engineering Supremacy
      </footer>
    </div>
  );
};

export default WhatIsWayZenTech;