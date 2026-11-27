"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, Bot, Smartphone, Search, Receipt, 
  ShoppingBag, Home, GraduationCap, MessageSquare, 
  FileText, GitFork, Cpu, CreditCard, WifiOff, 
  Rocket, MapPin, TrendingUp, Target, Send, 
  Barcode, LayoutDashboard, Sparkles, Zap, 
  ArrowRight, ChevronLeft, ChevronRight, MessageCircle
} from 'lucide-react';

export const InnovativeServicesShowcase = () => {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const services = [
    {
      id: 'web',
      num: '01',
      shortLabel: 'Custom Web',
      category: '01 // Web Architecture',
      title: 'Custom Web & SaaS Platforms',
      tagline: 'High-speed conversion engines built with Next.js 15 & MERN.',
      route: '/web-development',
      icon: Globe,
      badge: '99/100 Core Web Vitals',
      metrics: '< 0.8s FCP • 99/100 Speed • SEO Native',
      description: 'We discard generic templates. Every web application is custom-architected for sub-second load times, fluid micro-interactions, responsive precision, and Google Core Web Vitals dominance.',
      capabilities: [
        { icon: Home, title: 'Real Estate & Portals', desc: 'Fast dynamic filtering & instant lead capture' },
        { icon: ShoppingBag, title: 'E-Commerce Ecosystems', desc: 'Sub-second checkout & payment gateway sync' },
        { icon: Globe, title: 'Corporate SaaS Platforms', desc: 'High-concurrency multi-tenant cloud architectures' },
        { icon: GraduationCap, title: 'LMS & Education Engines', desc: 'Interactive video, quiz & student dashboards' }
      ]
    },
    {
      id: 'ai',
      num: '02',
      shortLabel: 'AI Automation',
      category: '02 // Neural Intelligence',
      title: 'AI Automation & Neural Bots',
      tagline: 'Autonomous chatbots, OpenAI workflows & zero-touch pipelines.',
      route: '/ai-automation',
      icon: Bot,
      badge: '24/7 Autonomous',
      metrics: '70% Manual Time Saved • 320ms Latency • API Connected',
      description: 'Replace repetitive manual operations with custom AI agents. From conversational WhatsApp bots that qualify leads to automated invoice extraction and autonomous CRM lead routing.',
      capabilities: [
        { icon: MessageSquare, title: 'WhatsApp AI Sales Bots', desc: '24/7 real-time lead qualification & conversion' },
        { icon: FileText, title: 'Document & Invoice OCR', desc: 'Instant PDF data extraction into databases' },
        { icon: GitFork, title: 'CRM Workflow Pipelines', desc: 'Zero-touch lead routing to Google Sheets & CRM' },
        { icon: Cpu, title: 'Custom LLM Fine-Tuning', desc: 'Proprietary enterprise knowledge-base AI' }
      ]
    },
    {
      id: 'mobile',
      num: '03',
      shortLabel: 'Mobile Apps',
      category: '03 // Native Experience',
      title: 'iOS & Android Mobile Apps',
      tagline: 'Silk-smooth 60fps native apps with Flutter & React Native.',
      route: '/mobile-app-development',
      icon: Smartphone,
      badge: '60 FPS Native',
      metrics: 'iOS 18 Ready • Android 15 • Offline SQLite Sync',
      description: 'Reach mobile users on both platforms with a unified, high-performance codebase. Engineered with native device hardware access, real-time push alerts, and offline caching.',
      capabilities: [
        { icon: Smartphone, title: 'Cross-Platform Native', desc: 'Unified Flutter & React Native codebase' },
        { icon: CreditCard, title: 'In-App UPI & Razorpay', desc: 'One-tap seamless mobile checkout flows' },
        { icon: WifiOff, title: 'Offline-First Cloud Sync', desc: 'Local SQLite caching with auto cloud bridge' },
        { icon: Rocket, title: 'Play & AppStore Launch', desc: 'Guaranteed submission & store compliance' }
      ]
    },
    {
      id: 'seo',
      num: '04',
      shortLabel: 'High-Intent SEO',
      category: '04 // Search Dominance',
      title: 'High-Intent SEO & Growth',
      tagline: 'Algorithm-proof organic search visibility that captures buyers.',
      route: '/seo',
      icon: Search,
      badge: 'Google Rank #1 Ready',
      metrics: '250% Avg. ROAS • Zero Ad Wastage • Daily Audit',
      description: 'We don’t chase vanity traffic. We optimize your technical architecture, local Google Map Pack signals, and structured JSON-LD schemas so ready-to-buy customers discover your business first.',
      capabilities: [
        { icon: Search, title: 'Technical SEO & Vitals', desc: 'Google Core Web Vitals 100/100 score guarantee' },
        { icon: MapPin, title: 'Google Map Pack Domination', desc: 'Local search #1 positioning for buyer queries' },
        { icon: TrendingUp, title: 'Meta & Instagram Ads', desc: 'High-converting viral creative formats & funnels' },
        { icon: Target, title: 'Attribution & ROAS Audit', desc: 'Precision conversion tracking with zero wasted budget' }
      ]
    },
    {
      id: 'billing',
      num: '05',
      shortLabel: 'Custom Billing',
      category: '05 // Enterprise Systems',
      title: 'Custom Billing & ERP Software',
      tagline: 'Tailor-made POS, GST invoicing, barcode sync & WhatsApp receipts.',
      route: '/billing-software',
      icon: Receipt,
      badge: 'Instant WhatsApp Bills',
      metrics: '3-Sec Invoice • Thermal Ready • Zero Monthly Fees',
      description: 'Rigid commercial billing software slows businesses down. We engineer bespoke POS systems, inventory management engines, and automated WhatsApp invoice dispatchers built around your exact daily workflow.',
      capabilities: [
        { icon: Receipt, title: '3-Second GST Invoicing', desc: 'Blazing speed counter sales with barcode scanner' },
        { icon: Send, title: 'Automated WhatsApp Bills', desc: 'Paperless instant PDF invoice delivery to customers' },
        { icon: Barcode, title: 'Live Stock & Barcode Sync', desc: 'Real-time multi-item inventory & low-stock alerts' },
        { icon: LayoutDashboard, title: 'Multi-Store Dashboard', desc: 'Centralized cloud reporting for sales & staff' }
      ]
    }
  ];

  const current = services[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-[#0a0101] text-white relative overflow-hidden font-sans">
      
      {/* 1. PIVOTROOTS-INSPIRED CURVED DOTTED LIME LINE & ORBITAL MOTIFS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -top-40 -left-40 w-[800px] h-[800px] opacity-25" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="380" stroke="#cdd32c" strokeWidth="1" strokeDasharray="8 8" className="animate-make-line" />
          <circle cx="400" cy="400" r="260" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        </svg>

        {/* Winding animated dotted spline path connecting through services */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 1440 900" fill="none">
          <path 
            d="M -100 200 C 300 100, 600 500, 900 300 C 1200 100, 1400 400, 1600 300" 
            stroke="#cdd32c" 
            strokeWidth="1.5" 
            strokeDasharray="10 10"
            className="animate-pulse" 
          />
        </svg>

        {/* Soft background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#cdd32c]/5 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION: PIVOTROOTS EDITORIAL CONTRAST */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cdd32c]/10 border border-[#cdd32c]/30 text-[#cdd32c] text-[10px] md:text-xs font-mono font-black uppercase tracking-widest mb-3">
              <Sparkles size={12} />
              <span>[ CAPABILITIES // INTERACTIVE ECOSYSTEM ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-tight">
              CORE <span className="text-[#cdd32c]">SERVICES.</span>
            </h2>
            <p className="text-slate-400 mt-3 text-sm md:text-base font-light max-w-2xl leading-relaxed">
              “Ask not what technology can do for your business, ask what next-generation engineering can scale.” Explore the 5 live architectural capabilities engineered by WayZenTech.
            </p>
          </div>

          {/* Desktop Arrow Controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-[#cdd32c] hover:text-[#0a0101] border border-white/10 hover:border-[#cdd32c] text-white flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-lg"
              aria-label="Previous Service"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-xs font-mono font-bold text-[#cdd32c] px-2 tracking-widest">
              0{activeIdx + 1} / 0{services.length}
            </span>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-[#cdd32c] hover:text-[#0a0101] border border-white/10 hover:border-[#cdd32c] text-white flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-lg"
              aria-label="Next Service"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 5-SERVICE INTERACTIVE NAVIGATION PILLS (PIVOTROOTS TAB BAR) */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-3 mb-8 md:mb-12">
          {services.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeIdx === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap border ${
                  isSelected
                    ? "bg-[#cdd32c] text-[#0a0101] font-black border-[#cdd32c] shadow-[0_0_25px_rgba(205,211,44,0.35)] scale-105"
                    : "bg-white/5 hover:bg-white/10 text-slate-400 border-white/10 hover:text-white"
                }`}
              >
                <Icon size={14} className={isSelected ? "text-[#0a0101]" : "text-slate-400"} />
                <span className="whitespace-nowrap">{item.num} {item.shortLabel}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a0101]" />
                )}
              </button>
            );
          })}
        </div>

        {/* --- MAIN INTERACTIVE SHOWCASE CARD (SWIPEABLE) --- */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative min-h-[620px] lg:min-h-[580px] rounded-[32px] md:rounded-[44px] bg-[#0e0e13] border border-white/[0.08] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10"
            >
              
              {/* LEFT COLUMN: SERVICE OVERVIEW & VALUE PROPOSITION */}
              <div className="lg:col-span-4 text-left space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cdd32c]/10 text-[#cdd32c] text-[10px] font-mono font-black uppercase tracking-widest border border-[#cdd32c]/20">
                  <Zap size={11} />
                  <span>{current.category}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                  {current.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {current.description}
                </p>

                {/* Key Metric Pill */}
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#cdd32c]">
                  {current.metrics}
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                  <button
                    onClick={() => navigate(current.route)}
                    className="flex-1 bg-[#cdd32c] hover:bg-white text-[#0a0101] py-3.5 px-6 rounded-xl font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#cdd32c]/20 cursor-pointer"
                  >
                    <span>EXPLORE ARCHITECTURE</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    onClick={() => window.open('https://wa.me/919398724704?text=Hi%20WayZenTech,%20I%20want%20to%20consult%20about%20' + encodeURIComponent(current.title), '_blank')}
                    className="flex-1 bg-white/[0.05] hover:bg-[#25D366] hover:text-black text-white border border-white/15 py-3.5 px-6 rounded-xl font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle size={14} />
                    <span>WHATSAPP SYNC</span>
                  </button>
                </div>
              </div>

              {/* CENTER COLUMN: THE PIVOTROOTS-STYLE ANIMATED CIRCULAR PORTAL */}
              <div className="lg:col-span-4 flex justify-center items-center py-4 transform-gpu">
                <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 flex items-center justify-center transform-gpu">
                  
                  {/* Outer Concentric Animated Orbit Rings (Hardware GPU Accelerated) */}
                  <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-dashed border-[#cdd32c]/25 animate-spin-slow pointer-events-none transform-gpu will-change-transform" />
                  <div className="absolute -inset-8 sm:-inset-10 rounded-full border border-white/5 pointer-events-none" />

                  {/* Halftone / Radial Pulse Backdrop behind Circle */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#cdd32c]/20 to-transparent blur-2xl opacity-60 pointer-events-none transform-gpu" />

                  {/* Main Circular Portal (Framer Motion Interactive Transition) */}
                  <motion.div
                    key={`circle-${current.id}`}
                    initial={{ scale: 0.82, rotate: -8, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.82, rotate: 8, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#181824] via-[#111119] to-[#08080c] border-2 border-[#cdd32c]/40 shadow-[0_0_40px_rgba(205,211,44,0.18)] flex items-center justify-center p-6 text-center select-none transform-gpu"
                  >
                    {/* Circle Background Radial Grid Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(#cdd32c15_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
                    
                    {/* --- 1. WEB ARCHITECTURE CIRCLE VISUALS --- */}
                    {current.id === 'web' && (
                      <div className="relative z-10 space-y-3 w-full">
                        {/* 3D Browser Mockup in Circle */}
                        <div className="bg-[#09090d]/90 border border-white/15 rounded-2xl p-4 shadow-2xl font-mono text-left max-w-[240px] mx-auto backdrop-blur-md">
                          <div className="flex items-center gap-1.5 pb-2.5 border-b border-white/10">
                            <span className="w-2 h-2 rounded-full bg-rose-500" />
                            <span className="w-2 h-2 rounded-full bg-amber-500" />
                            <span className="w-2 h-2 rounded-full bg-[#cdd32c]" />
                            <span className="ml-auto text-[8px] text-slate-400">wayzentech.app</span>
                          </div>
                          <div className="pt-2.5 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] font-bold text-white">
                              <span>Core Web Vitals</span>
                              <span className="text-[#cdd32c]">99 / 100</span>
                            </div>
                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-[#cdd32c] h-full w-[99%]" />
                            </div>
                            <div className="pt-1 flex items-center justify-between text-[9px] text-slate-400">
                              <span>Next.js 15 SSR</span>
                              <span className="text-emerald-400">0.4s FCP</span>
                            </div>
                          </div>
                        </div>

                        {/* Floating Tech Chips */}
                        <div className="flex justify-center gap-1.5 flex-wrap pt-1">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#cdd32c]/20 border border-[#cdd32c]/30 text-[9px] font-mono text-[#cdd32c] font-black">
                            Next.js 15
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[9px] font-mono text-slate-200">
                            React 19
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[9px] font-mono text-slate-200">
                            MERN
                          </span>
                        </div>
                      </div>
                    )}

                    {/* --- 2. AI & NEURAL BOTS CIRCLE VISUALS --- */}
                    {current.id === 'ai' && (
                      <div className="relative z-10 space-y-3 w-full">
                        {/* Glowing Neural Core */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(52,211,153,0.3)] animate-pulse">
                          <Bot size={36} className="text-emerald-400" />
                        </div>

                        {/* Simulated Live Dialogue */}
                        <div className="bg-[#09090d]/90 border border-emerald-500/30 rounded-xl p-3 text-left max-w-[240px] mx-auto text-[10px] font-mono space-y-1 backdrop-blur-md">
                          <div className="text-slate-400 flex items-center justify-between">
                            <span>WhatsApp Lead:</span>
                            <span className="text-emerald-400">⚡ 320ms</span>
                          </div>
                          <p className="text-white font-sans text-[11px] leading-tight">
                            “Hospital ERP catalog dispatched.”
                          </p>
                        </div>

                        <div className="flex justify-center gap-1.5 pt-1">
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[9px] font-mono text-emerald-300 font-bold">
                            GPT-4o Agents
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[9px] font-mono text-slate-200">
                            24/7 Live
                          </span>
                        </div>
                      </div>
                    )}

                    {/* --- 3. MOBILE APPS CIRCLE VISUALS --- */}
                    {current.id === 'mobile' && (
                      <div className="relative z-10 space-y-3 w-full">
                        {/* 3D Smartphone Frame Mockup */}
                        <div className="w-44 bg-[#09090d]/90 border-2 border-purple-500/30 rounded-2xl p-3.5 mx-auto text-left shadow-2xl backdrop-blur-md font-mono">
                          <div className="w-16 h-2.5 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="w-1 h-1 rounded-full bg-purple-500" />
                          </div>
                          <div className="p-2 rounded-xl bg-purple-500/15 border border-purple-500/30 space-y-1">
                            <span className="text-[8px] uppercase tracking-wider text-purple-300 font-bold block">
                              Live Transaction
                            </span>
                            <p className="text-xs font-bold text-white">
                              +₹18,500 via UPI
                            </p>
                          </div>
                          <div className="pt-2 flex items-center justify-between text-[9px]">
                            <span className="text-slate-400">Fluidity</span>
                            <span className="text-purple-400 font-bold">60 FPS Native</span>
                          </div>
                        </div>

                        <div className="flex justify-center gap-1.5 pt-1">
                          <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-[9px] font-mono text-purple-300 font-bold">
                            Flutter
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[9px] font-mono text-slate-200">
                            React Native
                          </span>
                        </div>
                      </div>
                    )}

                    {/* --- 4. SEO & PERFORMANCE ADS CIRCLE VISUALS --- */}
                    {current.id === 'seo' && (
                      <div className="relative z-10 space-y-3 w-full">
                        {/* Rocket / Growth Visual */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500/10 border-2 border-amber-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                          <Rocket size={34} className="text-amber-400 animate-bounce" />
                        </div>

                        <div className="bg-[#09090d]/90 border border-amber-500/30 rounded-xl p-3 text-left max-w-[240px] mx-auto text-[10px] font-mono space-y-1 backdrop-blur-md">
                          <div className="text-slate-400 flex items-center justify-between">
                            <span>Google Rank #1:</span>
                            <span className="text-amber-400 font-bold">+250% ROAS</span>
                          </div>
                          <p className="text-white font-sans text-[11px] leading-tight">
                            Algorithmic buyer acquisition active.
                          </p>
                        </div>

                        <div className="flex justify-center gap-1.5 pt-1">
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-[9px] font-mono text-amber-300 font-bold">
                            Technical SEO
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[9px] font-mono text-slate-200">
                            Meta Ads
                          </span>
                        </div>
                      </div>
                    )}

                    {/* --- 5. BILLING & ERP CIRCLE VISUALS --- */}
                    {current.id === 'billing' && (
                      <div className="relative z-10 space-y-3 w-full">
                        {/* POS & Barcode Scanner Visual */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#cdd32c]/10 border-2 border-[#cdd32c] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(205,211,44,0.3)]">
                          <Receipt size={34} className="text-[#cdd32c]" />
                        </div>

                        <div className="bg-[#09090d]/90 border border-[#cdd32c]/30 rounded-xl p-3 text-left max-w-[240px] mx-auto text-[10px] font-mono space-y-1 backdrop-blur-md">
                          <div className="text-slate-400 flex items-center justify-between">
                            <span>GST POS Invoicing:</span>
                            <span className="text-[#cdd32c] font-bold">3 Seconds</span>
                          </div>
                          <p className="text-white font-sans text-[11px] leading-tight">
                            WhatsApp receipt auto-dispatched.
                          </p>
                        </div>

                        <div className="flex justify-center gap-1.5 pt-1">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#cdd32c]/20 border border-[#cdd32c]/40 text-[9px] font-mono text-[#cdd32c] font-bold">
                            Barcode Sync
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[9px] font-mono text-slate-200">
                            Zero Monthly Fees
                          </span>
                        </div>
                      </div>
                    )}

                  </motion.div>
                </div>
              </div>

              {/* RIGHT COLUMN: 4 FLOATING CAPABILITY CARDS (PIVOTROOTS ARCHITECTURE) */}
              <div className="lg:col-span-4 space-y-3 text-left">
                <div className="text-[10px] font-mono font-black uppercase tracking-widest text-[#cdd32c] mb-1 block">
                  [ CORE ARCHITECTURAL DISCIPLINES ]
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                  {current.capabilities.map((cap, i) => {
                    const CapIcon = cap.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#cdd32c]/60 hover:bg-[#cdd32c]/5 transition-all duration-300 group flex items-start gap-3 cursor-pointer"
                      >
                        <div className="w-9 h-9 rounded-xl bg-white/5 group-hover:bg-[#cdd32c] group-hover:text-[#0a0101] text-[#cdd32c] flex items-center justify-center shrink-0 transition-colors">
                          <CapIcon size={18} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-[#cdd32c] transition-colors leading-tight">
                            {cap.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 font-light mt-0.5 leading-snug">
                            {cap.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default InnovativeServicesShowcase;
