import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, ArrowRight, MessageCircle, Info, Cpu, 
  ShieldCheck, Sparkles, Compass, CheckCircle2
} from 'lucide-react';

// React Router
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";

// Components
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import Team from './components/team';
import About from "./components/About";
import WhatIsWayZenTech from "./components/WhatIsWayZenTech"; 
import { ProjectForm } from './components/ProjectForm';
import { Portfolio } from './components/Portfolio';
import { Techalien } from './components/Techalien';
import ServicesPage from './components/ServicesPage';
import { AdminDashboard } from './components/AdminDashboard';
import { SeoPageTemplate } from './components/SeoPageTemplate';
import { InnovativeServicesShowcase } from './components/InnovativeServicesShowcase';
import { JourneyConnector } from './components/JourneyConnector';
import { CustomCursor } from './components/CustomCursor';
import { MetricsMarquee } from './components/MetricsMarquee';
import { PivotPreFooter } from './components/PivotPreFooter';
import { PivotFooter } from './components/PivotFooter';

// SEO Manager (Background execution only - Zero UI change)
import { SEOHandler } from './seo/SEOHandler';
import { seoContentDatabase } from './seo/seoContentData';

// --- HELPER: SMOOTH SCROLL TO TOP ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// --- DYNAMIC SEO ROUTE RENDERER ---
const SeoRoutePage = () => {
  const location = useLocation();
  let path = location.pathname;
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  const content = seoContentDatabase[path] || seoContentDatabase[location.pathname];
  if (content) {
    return <SeoPageTemplate pageData={content} />;
  }
  return <ServicesPage />;
};

// --- COMPONENT: ABOUT COMPANY HIGHLIGHT ON HOMEPAGE ---
const AboutCompanyHighlight = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Global Deliveries", value: "65+", desc: "Web, AI & Software Projects" },
    { label: "On-Time Success", value: "100%", desc: "Production Ready Deployments" },
    { label: "Engineering Frameworks", value: "12+", desc: "MERN, Python, Next.js, Flutter" },
    { label: "Support & Maintenance", value: "24/7", desc: "Dedicated Engineer Sync" }
  ];

  return (
    <section className="py-16 md:py-28 px-4 md:px-6 bg-[#0a0101] text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          
          {/* Left Column: Story & Vision */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cdd32c]/10 border border-[#cdd32c]/30 text-[#cdd32c] text-[10px] font-mono font-black uppercase tracking-widest">
              <ShieldCheck size={12} /> Technology Foundry
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight text-white">
              Engineering the Next Generation of <span className="text-[#cdd32c] italic">Digital Assets</span>
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
              WayZenTech is an India-based engineering foundry combining deep algorithmic rigor with commercial focus — architecting high-speed business websites, reactive web applications, automated AI pipelines, and custom software systems designed to scale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1 uppercase tracking-wide">Direct Engineering Sync</h4>
                <p className="text-xs text-slate-400">No account managers or middle layers. Talk directly to developers on WhatsApp.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1 uppercase tracking-wide">Scalable Clean Architecture</h4>
                <p className="text-xs text-slate-400">Built with modern tech stacks tested for speed, SEO, and robust reliability.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => navigate('/about')}
                className="bg-[#cdd32c] hover:bg-white text-[#0a0101] px-8 py-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#cdd32c]/20"
              >
                <span>Read Full Company Story</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => window.open('https://wa.me/919398724704', '_blank')}
                className="bg-white/10 hover:bg-[#25D366] hover:text-black text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle size={16} />
                <span>Talk with Engineers</span>
              </button>
            </div>
          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 bg-white/[0.03] hover:bg-white/[0.06] rounded-3xl border border-white/10 hover:border-[#cdd32c]/40 transition-colors flex flex-col justify-between"
              >
                <div className="text-3xl md:text-5xl font-black text-[#cdd32c] font-sans">
                  {stat.value}
                </div>
                <div className="mt-4">
                  <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-tight">{stat.label}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// --- PIVOTROOTS INSPIRED INTERACTIVE HERO ---
const PivotHero = () => {
  const navigate = useNavigate();
  const [isBallExpanded, setIsBallExpanded] = useState(false);

  return (
    <header className="relative min-h-screen flex flex-col justify-between items-center px-5 md:px-12 pt-28 sm:pt-32 md:pt-36 pb-12 overflow-hidden bg-[#070a12] text-white select-none">
      
      {/* Background Liquid Smoke Media / Atmospheric Gradient */}
      <div className="absolute inset-0 pointer-events-none z-0 transform-gpu">
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-[#cdd32c]/10 blur-[120px] rounded-full transform-gpu" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] bg-blue-600/15 blur-[120px] rounded-full transform-gpu" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#070a12_75%)]" />
      </div>

      {/* SVG Dotted Orbital Lines (Hardware Accelerated) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-25" viewBox="0 0 1440 900" fill="none">
        <ellipse cx="720" cy="450" rx="600" ry="320" stroke="#cdd32c" strokeWidth="1.5" strokeDasharray="12 12" />
        <ellipse cx="720" cy="450" rx="380" ry="200" stroke="#ffffff" strokeWidth="1" strokeDasharray="8 8" opacity="0.4" />
      </svg>

      {/* PROMINENT BACKGROUND LOGO EMBLEM - VISIBLE ON MOBILE & WEB */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden transform-gpu">
        <motion.div 
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-[300px] sm:w-[480px] md:w-[680px] lg:w-[840px] aspect-[1024/847] flex items-center justify-center"
        >
          {/* Hardware GPU Ambient Glow behind the logo */}
          <div className="absolute inset-0 bg-[#cdd32c]/15 rounded-full blur-3xl pointer-events-none scale-75 transform-gpu" />
          
          <img 
            src="/logo-watermark.png" 
            alt="WayZenTech Background Logo" 
            className="w-full h-full object-contain opacity-25 sm:opacity-20 md:opacity-22 select-none pointer-events-none transform-gpu"
          />
        </motion.div>
      </div>

      {/* TOP PILL BADGE */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#cdd32c] text-[10px] sm:text-xs font-mono font-black uppercase tracking-[0.3em] backdrop-blur-md shadow-lg"
      >
        <span className="w-2 h-2 rounded-full bg-[#cdd32c] animate-ping" />
        <span>WayZenTech // Next-Gen Digital Foundry</span>
      </motion.div>

      {/* CENTERPIECE: STACKED 900-WEIGHT H1 + INTERACTIVE EXPANDING CIRCLE (THE BALL) */}
      <div className="relative z-10 max-w-5xl mx-auto text-center my-auto py-6 sm:py-8">
        
        {/* Main Stacked 900-Weight Headline (PivotRoots style) */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.88] text-white"
        >
          <span>THE WAY</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-white/70">TO THE</span> <br />
          <span className="text-[#cdd32c] drop-shadow-[0_0_40px_rgba(205,211,44,0.3)]">NEXT GENERATION</span> <br />
          <span className="text-white">OF TECHNOLOGY.</span>
        </motion.h1>

        {/* PIVOTROOTS EXPANDING PORTAL CIRCLE (THE BALL) */}
        <div className="mt-8 sm:mt-12 relative flex justify-center items-center">
          
          <motion.div
            layout
            onClick={() => setIsBallExpanded(!isBallExpanded)}
            whileHover={{ scale: isBallExpanded ? 1 : 1.05 }}
            className={`cursor-pointer transition-all duration-500 overflow-hidden relative shadow-2xl ${
              isBallExpanded 
                ? "w-full max-w-2xl rounded-3xl md:rounded-[40px] bg-[#cdd32c] text-[#0a0101] p-6 sm:p-8 border-2 border-white"
                : "w-48 sm:w-60 h-14 sm:h-16 rounded-full bg-[#cdd32c] text-[#0a0101] flex items-center justify-center gap-2 border-2 border-[#cdd32c] hover:bg-white transition-colors"
            }`}
          >
            {!isBallExpanded ? (
              <div className="flex items-center gap-2 text-xs font-mono font-black uppercase tracking-widest">
                <Sparkles size={14} className="animate-spin text-[#0a0101]" />
                <span>Tap to Reveal Core</span>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4 text-center"
              >
                <div className="flex items-center justify-between border-b border-[#0a0101]/20 pb-2">
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#0a0101]/60">
                    The Meaning of WayZenTech
                  </span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsBallExpanded(false); }}
                    className="text-[10px] font-mono font-black uppercase tracking-widest bg-[#0a0101] text-white px-2.5 py-0.5 rounded-full"
                  >
                    Close ✕
                  </button>
                </div>

                <p className="text-base sm:text-2xl font-black uppercase tracking-tight text-[#0a0101] leading-snug">
                  “The Way to the Next Generation of Technology.”
                </p>

                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="p-2.5 rounded-xl bg-[#0a0101] text-white text-center">
                    <span className="text-[#cdd32c] text-[10px] font-mono font-black block">WAY</span>
                    <span className="text-xs font-bold">The Path</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0a0101] text-white text-center">
                    <span className="text-[#cdd32c] text-[10px] font-mono font-black block">ZEN</span>
                    <span className="text-xs font-bold">Mastery</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0a0101] text-white text-center">
                    <span className="text-[#cdd32c] text-[10px] font-mono font-black block">TECH</span>
                    <span className="text-xs font-bold">Next-Gen</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

        </div>

        {/* CTA BUTTONS ROW */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5 sm:gap-5 pt-8 w-full sm:w-auto px-4">
          <motion.button 
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => document.getElementById("request")?.scrollIntoView({ behavior: "smooth" })} 
            className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-2xl bg-white text-[#0a0101] hover:bg-[#cdd32c] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-2xl transition-all"
          >
            <Zap size={15} className="fill-[#0a0101]" />
            <span>Start Your Project</span>
            <ArrowRight size={15} />
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate('/what-is-wayzentech')} 
            className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-2xl bg-white/5 text-white border border-white/20 hover:border-[#cdd32c] hover:text-[#cdd32c] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm transition-all backdrop-blur-md"
          >
            <Info size={15} />
            <span>What is WayZenTech?</span>
          </motion.button>
        </div>

      </div>

      {/* PIVOTROOTS 3D FLIP SCROLL PROMPT */}
      <div className="relative z-10 pt-6 text-center select-none">
        <div className="inline-block animate-scrolly text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">
          Scroll to Explore ↓
        </div>
      </div>

    </header>
  );
};

// --- PIVOTROOTS STYLE BRAND PILLARS SECTION ---
const PivotBrandPillars = () => {
  const pillars = [
    {
      num: "01",
      letter: "WAY",
      title: "The Path",
      tagline: "Strategic Vision & Trajectory",
      description: "Every transformative product begins with clarity of direction. We engineer precise technological roadmaps that guide ideas from initial concept to high-scale digital reality.",
      icon: <Compass className="w-7 h-7 text-[#0a0101]" />,
      badges: ["Strategic Architecture", "Market Trajectory", "User Journey Blueprint"],
    },
    {
      num: "02",
      letter: "ZEN",
      title: "Mastery",
      tagline: "Architectural Precision & Purity",
      description: "True mastery is eliminating chaos and complexity. We engineer clean-code architectures with zero bloat, sub-second latency, rigorous security protocols, and 99.99% operational uptime.",
      icon: <ShieldCheck className="w-7 h-7 text-[#0a0101]" />,
      badges: ["Architectural Purity", "Sub-Second Latency", "99.99% Reliability"],
    },
    {
      num: "03",
      letter: "TECH",
      title: "Next-Gen",
      tagline: "AI Systems & Future-Ready Tech",
      description: "Leveraging tomorrow's engineering today. Autonomous AI workflows, cloud-native microservices, reactive MERN web applications, and intelligent systems built for infinite scale.",
      icon: <Cpu className="w-7 h-7 text-[#0a0101]" />,
      badges: ["Generative AI Systems", "Scalable Cloud MERN", "Autonomous Agents"],
    }
  ];

  return (
    <section id="brand-meaning" className="relative py-16 sm:py-24 md:py-32 px-5 md:px-10 bg-[#ffffff] text-[#0a0101] overflow-hidden">
      
      {/* Background Subtle Circular Wireframe */}
      <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] rounded-full border border-slate-200/80 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* PIVOTROOTS TILTED OVERSIZED EDITORIAL QUOTE */}
        <div className="mb-14 sm:mb-20 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-black uppercase tracking-[0.25em] text-[#0a0101]/60 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#cdd32c]" />
            Brand Philosophy // Core Pillars
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#0a0101] leading-[1.05]">
            “A TRANSFORMATIONAL <span className="underline decoration-[#cdd32c] decoration-8">DIGITAL FOUNDRY</span>, POWERED BY CODE, FUELED BY INNOVATION.”
          </h2>
          
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
            Born to eliminate mediocrity in software development. We bridge visionary strategy, architectural perfection, and next-gen engineering under one unified standard.
          </p>
        </div>

        {/* 3 CIRCULAR ACCENTED PILLAR CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative rounded-3xl md:rounded-[36px] p-7 sm:p-9 bg-[#edf1f2] border border-slate-300/70 hover:border-[#cdd32c] hover:bg-white shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Oversized Watermark Numerals (PivotRoots 25em style) */}
              <div className="absolute -right-4 -bottom-6 text-7xl sm:text-8xl md:text-9xl font-black text-[#cdd32c]/20 group-hover:text-[#cdd32c]/35 transition-colors select-none pointer-events-none">
                {p.num}
              </div>

              <div>
                {/* Top Row: Circular Icon + Pillar Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-full bg-white group-hover:bg-[#cdd32c] flex items-center justify-center shadow-md transition-colors">
                    {p.icon}
                  </div>
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/80 border border-slate-300 text-[#0a0101]">
                    {p.letter}
                  </span>
                </div>

                {/* Identity */}
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0a0101]">
                  {p.title}
                </h3>
                <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wide">
                  {p.tagline}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mt-4">
                  {p.description}
                </p>
              </div>

              {/* Badges */}
              <div className="pt-6 mt-6 border-t border-slate-300/60 flex flex-wrap gap-1.5 relative z-10">
                {p.badges.map((b, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white text-slate-800 text-[10px] font-bold shadow-2xs"
                  >
                    <CheckCircle2 size={11} className="text-[#0a0101]" />
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- COMPONENT: HOME PAGE ---
const HomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* 1. PIVOTROOTS INSPIRED INTERACTIVE HERO */}
      <PivotHero />
      
      {/* 2. PIVOTROOTS STYLE BRAND PILLARS (WAY / ZEN / TECH) */}
      <PivotBrandPillars />

      {/* 3. HORIZONTAL INFINITE KINETIC MARQUEE */}
      <MetricsMarquee />
      
      {/* 4. INNOVATIVE 5-STYLE INTERACTIVE SERVICES SHOWCASE */}
      <InnovativeServicesShowcase />

      {/* 5. ABOUT COMPANY HIGHLIGHT */}
      <AboutCompanyHighlight />

      {/* 6. FEATURED PROJECTS PORTFOLIO */}
      <Portfolio />
      
      {/* 7. PROJECT INQUIRY FORM */}
      <section id="request" className="py-16 md:py-32 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[32px] md:rounded-[60px] overflow-hidden shadow-2xl">
          <ProjectForm />
        </div>
      </section>

      {/* 8. PIVOTROOTS SIGNATURE PRE-FOOTER BANNER */}
      <PivotPreFooter />
    </motion.div>
  );
};

// --- MASTER CONTENT WRAPPER ---
function AppContent() {
  const location = useLocation();

  return (
    <div className="antialiased font-sans bg-[#0a0101] text-white relative overflow-x-hidden pb-20 md:pb-0">
      {/* GLOBAL SCREEN BACKGROUND LOGO WATERMARK - HARDWARE ACCELERATED (0ms SCROLL LATENCY) */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden transform-gpu will-change-transform">
        <div className="relative w-[340px] sm:w-[540px] md:w-[740px] lg:w-[900px] aspect-[1024/847]">
          {/* Hardware-accelerated GPU ambient glow */}
          <div className="absolute inset-0 bg-[#cdd32c]/10 rounded-full blur-3xl transform-gpu pointer-events-none scale-90" />
          <img 
            src="/logo-watermark.png" 
            alt="" 
            className="w-full h-full object-contain opacity-[0.14] sm:opacity-[0.11] select-none pointer-events-none transform-gpu"
          />
        </div>
      </div>

      {/* PIVOTROOTS MIX-BLEND DIFFERENCE CUSTOM CURSOR */}
      <CustomCursor />

      <ScrollToTop />
      <SEOHandler />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Base Approved Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-is-wayzentech" element={<WhatIsWayZenTech />} />

          {/* Service Target URLs (Mapping 30-Keyword Master Strategy) */}
          <Route path="/web-development" element={<SeoRoutePage />} />
          <Route path="/website-development" element={<SeoRoutePage />} />
          <Route path="/mobile-app-development" element={<SeoRoutePage />} />
          <Route path="/ai-development" element={<SeoRoutePage />} />
          <Route path="/ai-automation" element={<SeoRoutePage />} />
          <Route path="/business-automation" element={<SeoRoutePage />} />
          <Route path="/whatsapp-automation" element={<SeoRoutePage />} />
          <Route path="/digital-marketing" element={<SeoRoutePage />} />
          <Route path="/seo" element={<SeoRoutePage />} />
          <Route path="/local-seo" element={<SeoRoutePage />} />
          <Route path="/google-ads" element={<SeoRoutePage />} />
          <Route path="/billing-software" element={<SeoRoutePage />} />
          <Route path="/custom-software-development" element={<SeoRoutePage />} />
          <Route path="/ecommerce-development" element={<SeoRoutePage />} />

          {/* Location Target URLs (Mapping 30-Keyword Master Strategy) */}
          <Route path="/web-development-company-palnadu" element={<SeoRoutePage />} />
          <Route path="/website-development-company-vijayawada" element={<SeoRoutePage />} />
          <Route path="/digital-marketing-agency-vijayawada" element={<SeoRoutePage />} />
          <Route path="/seo-company-guntur-palnadu" element={<SeoRoutePage />} />
          <Route path="/web-development-company-hyderabad" element={<SeoRoutePage />} />
          <Route path="/ai-automation-company-hyderabad" element={<SeoRoutePage />} />
          <Route path="/web-development-company-bangalore" element={<SeoRoutePage />} />
          <Route path="/digital-marketing-agency-bangalore" element={<SeoRoutePage />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </AnimatePresence>

      {/* INTER-PAGE ECOSYSTEM JOURNEY CONNECTOR */}
      <JourneyConnector />

      {/* FLOATING ACTION HUB (CALL, WHATSAPP, AI CHATBOT) */}
      <Techalien />

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <MobileBottomNav />

      {/* PIVOTROOTS STYLE DYNAMIC CITY / HUB SWITCHER FOOTER */}
      <PivotFooter />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}