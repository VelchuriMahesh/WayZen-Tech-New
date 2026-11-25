"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, TrendingUp, Video, 
  CheckCircle2, ArrowRight, ChevronDown, 
  Bot, Layers, MessageCircle, Sparkles,
  Rocket, Receipt
} from 'lucide-react';

const services = [
  {
    id: "web",
    num: "01",
    title: "Website Development",
    icon: Globe,
    tagline: "High-performance digital architecture & conversion engines.",
    categories: [
      "Real Estate Portals", 
      "E-commerce Ecosystems", 
      "Corporate Branding & SaaS", 
      "LMS & Education Platforms", 
      "High-Converting Portfolios"
    ],
    details: "We don't build generic template sites; we engineer high-velocity digital assets. Optimized for sub-second load times, technical SEO domination, and consumer psychological conversion.",
    metrics: "< 0.8s FCP • 99/100 Lighthouse • SEO Native",
    color: "#cdd32c"
  },
  {
    id: "ads",
    num: "02",
    title: "Performance Ads",
    icon: TrendingUp,
    tagline: "Engineered for qualified lead generation & customer acquisition.",
    categories: [
      "End-to-End Meta & Google Ads Setup",
      "6–7 High-Impact Creative Formats",
      "Algorithmic Audience Retargeting",
      "Real-Time Conversion Tracking & Attribution"
    ],
    details: "Stop burning marketing budgets on vanity metrics. We construct precision paid media funnels designed to deliver predictable customer acquisition cost (CAC) and maximum return on ad spend (ROAS).",
    metrics: "250% Avg. ROAS • Zero Ad Wastage • Daily Audit",
    color: "#cdd32c"
  },
  {
    id: "content",
    num: "03",
    title: "Content & Media Editing",
    icon: Video,
    tagline: "Visual storytelling that commands attention and stops the scroll.",
    categories: [
      "Professional Reel & Short-Form Video Editing",
      "High-Fidelity Commercial Poster Design",
      "Brand Identity & Social Media Management",
      "Continuous Website Assets & Maintenance"
    ],
    details: "Your brand is judged by the fidelity of its visual output. We produce punchy, retention-optimized short-form content and striking brand collateral that turns passive viewers into loyal clients.",
    metrics: "4K Motion Graphics • 1080x1920 Viral Formats • 24h Turnaround",
    color: "#cdd32c"
  },
  {
    id: "ai",
    num: "04",
    title: "AI & Business Automation",
    icon: Bot,
    tagline: "Autonomous workflows and intelligent conversational pipelines.",
    categories: [
      "Custom OpenAI / LLM Model Integration",
      "24/7 WhatsApp AI Sales & Support Bots",
      "Automated Lead Capture & CRM Sync",
      "Repetitive Task & Operations Automation"
    ],
    details: "Eliminate manual data entry and missed leads. We engineer custom AI agents that interact with customers, qualify inquiries on WhatsApp, and automate your back-office operations seamlessly.",
    metrics: "70% Manual Time Saved • 24/7 Zero Latency • API Connected",
    color: "#cdd32c"
  },
  {
    id: "software",
    num: "05",
    title: "Custom Software & Mobile",
    icon: Layers,
    tagline: "Scalable MERN architectures, native apps & business tools.",
    categories: [
      "Cross-Platform iOS & Android (Flutter / React Native)",
      "Custom Billing & Inventory Management",
      "Internal Business Admin & Analytics Dashboards",
      "Secure Cloud Backends & API Infrastructure"
    ],
    details: "When off-the-shelf software doesn't fit your workflow, we construct bespoke software solutions tailored to your exact operational parameters with uncompromising security and speed.",
    metrics: "Zero Subscription Fees • 100% Owned Code • Cloud Native",
    color: "#cdd32c"
  }
];

export default function ServicesPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(services[0]);
  const [expandedMobileId, setExpandedMobileId] = useState(services[0].id);

  const toggleMobile = (id) => {
    setExpandedMobileId(expandedMobileId === id ? null : id);
  };

  const handleStartProject = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  // Render the central PivotRoots circular animation composition for each service
  const renderCircleVisual = (serviceId) => {
    return (
      <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 flex items-center justify-center mx-auto my-6">
        {/* Outer Concentric Animated Orbit Rings */}
        <div className="absolute -inset-4 sm:-inset-5 rounded-full border border-dashed border-[#cdd32c]/25 animate-spin-slow pointer-events-none" />
        <div className="absolute -inset-7 rounded-full border border-white/5 pointer-events-none" />
        
        {/* Ambient Backlight Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#cdd32c]/20 to-transparent blur-xl opacity-60 pointer-events-none" />

        {/* Main Portal Sphere */}
        <motion.div
          key={`circle-portal-${serviceId}`}
          initial={{ scale: 0.85, rotate: -6, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.85, rotate: 6, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#181824] via-[#111119] to-[#08080c] border-2 border-[#cdd32c]/40 shadow-[0_0_40px_rgba(205,211,44,0.18)] flex items-center justify-center p-5 text-center select-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#cdd32c15_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

          {/* Web Architecture Visual */}
          {serviceId === 'web' && (
            <div className="relative z-10 space-y-2.5 w-full font-mono">
              <div className="bg-[#09090d]/90 border border-white/15 rounded-xl p-3 max-w-[200px] mx-auto text-left shadow-xl">
                <div className="flex items-center gap-1 pb-1.5 border-b border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cdd32c]" />
                  <span className="ml-auto text-[7px] text-slate-400">wayzentech.app</span>
                </div>
                <div className="pt-1.5 space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-white">
                    <span>Speed Score</span>
                    <span className="text-[#cdd32c]">99/100</span>
                  </div>
                  <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-[#cdd32c] h-full w-[99%]" />
                  </div>
                  <span className="text-[8px] text-emerald-400 block pt-0.5">Next.js 15 • 0.4s FCP</span>
                </div>
              </div>
              <div className="flex justify-center gap-1 text-[8px]">
                <span className="px-2 py-0.5 rounded-full bg-[#cdd32c]/20 border border-[#cdd32c]/30 text-[#cdd32c] font-black">
                  Next.js 15
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-slate-200">
                  React 19
                </span>
              </div>
            </div>
          )}

          {/* Performance Ads Visual */}
          {serviceId === 'ads' && (
            <div className="relative z-10 space-y-2.5 w-full font-mono">
              <div className="w-14 h-14 rounded-full bg-amber-500/10 border-2 border-amber-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(251,191,36,0.3)]">
                <Rocket size={28} className="text-amber-400 animate-bounce" />
              </div>
              <div className="bg-[#09090d]/90 border border-amber-500/30 rounded-xl p-2.5 max-w-[200px] mx-auto text-left text-[9px]">
                <div className="flex justify-between text-slate-400">
                  <span>Growth Engine:</span>
                  <span className="text-amber-400 font-bold">+250% ROAS</span>
                </div>
                <p className="text-white text-[10px] font-sans mt-0.5">Algorithmic buyer targeting</p>
              </div>
              <div className="flex justify-center gap-1 text-[8px]">
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold">
                  Meta & Google Ads
                </span>
              </div>
            </div>
          )}

          {/* Content & Media Visual */}
          {serviceId === 'content' && (
            <div className="relative z-10 space-y-2.5 w-full font-mono">
              <div className="w-14 h-14 rounded-full bg-purple-500/10 border-2 border-purple-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(168,85,247,0.3)]">
                <Video size={28} className="text-purple-400" />
              </div>
              <div className="bg-[#09090d]/90 border border-purple-500/30 rounded-xl p-2.5 max-w-[200px] mx-auto text-left text-[9px]">
                <div className="flex justify-between text-slate-400">
                  <span>Viral Short-Form:</span>
                  <span className="text-purple-400 font-bold">4K 60FPS</span>
                </div>
                <p className="text-white text-[10px] font-sans mt-0.5">High-retention reel collateral</p>
              </div>
              <div className="flex justify-center gap-1 text-[8px]">
                <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-bold">
                  Motion Graphics
                </span>
              </div>
            </div>
          )}

          {/* AI Automation Visual */}
          {serviceId === 'ai' && (
            <div className="relative z-10 space-y-2.5 w-full font-mono">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border-2 border-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(52,211,153,0.3)] animate-pulse">
                <Bot size={28} className="text-emerald-400" />
              </div>
              <div className="bg-[#09090d]/90 border border-emerald-500/30 rounded-xl p-2.5 max-w-[200px] mx-auto text-left text-[9px]">
                <div className="flex justify-between text-slate-400">
                  <span>WhatsApp AI Agent:</span>
                  <span className="text-emerald-400 font-bold">⚡ 320ms</span>
                </div>
                <p className="text-white text-[10px] font-sans mt-0.5">Lead qualified & synced</p>
              </div>
              <div className="flex justify-center gap-1 text-[8px]">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                  GPT-4o Workflows
                </span>
              </div>
            </div>
          )}

          {/* Custom Software & Billing Visual */}
          {serviceId === 'software' && (
            <div className="relative z-10 space-y-2.5 w-full font-mono">
              <div className="w-14 h-14 rounded-full bg-[#cdd32c]/10 border-2 border-[#cdd32c] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(205,211,44,0.3)]">
                <Receipt size={28} className="text-[#cdd32c]" />
              </div>
              <div className="bg-[#09090d]/90 border border-[#cdd32c]/30 rounded-xl p-2.5 max-w-[200px] mx-auto text-left text-[9px]">
                <div className="flex justify-between text-slate-400">
                  <span>GST Billing POS:</span>
                  <span className="text-[#cdd32c] font-bold">3 Seconds</span>
                </div>
                <p className="text-white text-[10px] font-sans mt-0.5">WhatsApp invoice dispatched</p>
              </div>
              <div className="flex justify-center gap-1 text-[8px]">
                <span className="px-2 py-0.5 rounded-full bg-[#cdd32c]/20 text-[#cdd32c] font-bold">
                  Flutter & MERN
                </span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0101] text-white pt-28 md:pt-36 pb-32 md:pb-28 px-4 md:px-8 relative overflow-hidden font-sans">
      
      {/* --- PIVOTROOTS ORBITAL SVG MOTIF & BACKGROUND LOGO EMBLEM --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -top-40 -right-40 w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-20" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="350" stroke="#cdd32c" strokeWidth="1" strokeDasharray="8 8" className="animate-make-line" />
          <circle cx="400" cy="400" r="240" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.2" />
          <circle cx="400" cy="400" r="120" stroke="#cdd32c" strokeWidth="1" strokeDasharray="4 4" />
        </svg>

        {/* Winding animated dotted spline path */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 1440 900" fill="none">
          <path 
            d="M -100 250 C 350 150, 700 600, 1000 350 C 1300 150, 1500 450, 1700 350" 
            stroke="#cdd32c" 
            strokeWidth="1.5" 
            strokeDasharray="10 10"
            className="animate-pulse" 
          />
        </svg>

        {/* PROMINENT BACKGROUND LOGO - VISIBLE ABOVE THE FOLD IN MOBILE & WEB */}
        <div className="absolute top-16 sm:top-24 md:top-28 left-1/2 -translate-x-1/2 w-[300px] sm:w-[480px] md:w-[700px] aspect-[1024/847] pointer-events-none z-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#cdd32c]/15 rounded-full blur-[70px] md:blur-[120px] pointer-events-none scale-75" />
          <img 
            src="/logo-watermark.png" 
            alt="WayZenTech Background Logo" 
            className="w-full h-full object-contain opacity-25 sm:opacity-20 md:opacity-22 filter drop-shadow-[0_0_35px_rgba(205,211,44,0.2)] select-none"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER: PIVOTROOTS EDITORIAL CONTRAST --- */}
        <header className="mb-12 md:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cdd32c]/10 border border-[#cdd32c]/30 text-[#cdd32c] text-[10px] md:text-xs font-mono font-black uppercase tracking-widest mb-4">
            <Sparkles size={12} />
            <span>[ WAYZEN_CAPABILITIES / 05_VERTICALS ]</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.95]">
                OUR <span className="text-[#cdd32c]">EXPERTISE.</span>
              </h1>
              <p className="text-slate-400 mt-4 max-w-2xl font-light text-sm md:text-lg leading-relaxed">
                Precision engineering and high-velocity digital capabilities. From conversion-driven web architectures to autonomous AI pipelines, every asset is built for tangible business return.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-md self-start lg:self-auto flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#cdd32c] animate-pulse" />
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
                100% On-Time Production Deployments
              </p>
            </div>
          </div>
        </header>

        {/* --- MOBILE VIEW: ACCORDION WITH ANIMATED CIRCULAR PORTALS --- */}
        <div className="lg:hidden space-y-4 mb-20 text-left">
          {services.map((item) => {
            const isExpanded = expandedMobileId === item.id;
            const IconComponent = item.icon;

            return (
              <div 
                key={item.id} 
                className={`overflow-hidden rounded-2xl border transition-all ${
                  isExpanded 
                    ? "bg-[#141419] border-[#cdd32c]/60 shadow-[0_10px_30px_rgba(205,211,44,0.1)]" 
                    : "bg-white/5 border-white/10"
                }`}
              >
                <button 
                  onClick={() => toggleMobile(item.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3.5 pr-2">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-black transition-colors ${
                      isExpanded ? "bg-[#cdd32c] text-[#0a0101]" : "bg-white/10 text-[#cdd32c]"
                    }`}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#cdd32c] block">
                        {item.num} • SERVICE
                      </span>
                      <h3 className="font-black text-lg text-white leading-tight mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                    isExpanded ? "bg-[#cdd32c] border-[#cdd32c] text-[#0a0101] rotate-180" : "border-white/20 text-slate-400"
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-6 border-t border-white/5 pt-4"
                    >
                      {/* PivotRoots Animated Circular Portal in Mobile Accordion */}
                      {renderCircleVisual(item.id)}

                      <p className="text-slate-300 text-xs sm:text-sm mb-4 leading-relaxed font-light border-l-2 border-[#cdd32c] pl-3.5">
                        {item.details}
                      </p>

                      <div className="mb-4 inline-block bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-mono text-[#cdd32c]">
                        ⚡ {item.metrics}
                      </div>
                      
                      <div className="space-y-2 mb-5">
                        {item.categories.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                            <CheckCircle2 size={13} className="text-[#cdd32c] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 pt-2">
                        <button
                          onClick={handleStartProject}
                          className="w-full bg-[#cdd32c] hover:bg-white text-[#0a0101] py-3 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-[#cdd32c]/20"
                        >
                          <span>Start This Project</span>
                          <ArrowRight size={14} />
                        </button>
                        <button
                          onClick={() => window.open(`https://wa.me/919398724704?text=Hi%20WayZenTech,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(item.title)}`, '_blank')}
                          className="w-full bg-white/10 hover:bg-[#25D366] hover:text-black text-white border border-white/15 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                        >
                          <MessageCircle size={14} />
                          <span>WhatsApp Inquire</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* --- DESKTOP VIEW: PIVOTROOTS SPLIT-SCREEN EDITORIAL SHOWCASE --- */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Navigation Items */}
          <div className="lg:col-span-5 space-y-3 sticky top-36">
            {services.map((item) => {
              const isSelected = activeTab.id === item.id;
              const IconComp = item.icon;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveTab(item)}
                  whileHover={{ x: 8 }}
                  className={`cursor-pointer p-6 rounded-2xl transition-all border text-left relative overflow-hidden ${
                    isSelected 
                      ? "bg-[#141419] border-[#cdd32c] shadow-[0_10px_40px_rgba(205,211,44,0.15)]" 
                      : "bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <motion.div 
                      layoutId="activeServiceBar"
                      className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#cdd32c]" 
                    />
                  )}

                  <div className="flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                      isSelected 
                        ? "bg-[#cdd32c] text-[#0a0101] shadow-lg shadow-[#cdd32c]/30" 
                        : "bg-white/5 text-slate-400"
                    }`}>
                      <IconComp size={26} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono tracking-widest uppercase text-[#cdd32c] font-black">
                          {item.num} • SPECIALIZATION
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#cdd32c] animate-ping" />
                        )}
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tight text-white mt-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-xs mt-1 line-clamp-1 font-light">
                        {item.tagline}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Architectural Service Detail with PivotRoots Circular Animation */}
          <div className="lg:col-span-7 bg-[#101014] rounded-[36px] p-8 md:p-12 border border-white/10 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
            
            {/* Top Right Decorative Watermark Numeral */}
            <div className="absolute top-6 right-8 text-7xl font-black font-mono text-white/5 select-none pointer-events-none">
              {activeTab.num}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="text-left"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#cdd32c]/10 text-[#cdd32c] border border-[#cdd32c]/30 text-[10px] font-mono font-black uppercase tracking-widest">
                    Architectural Blueprint
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    ⚡ {activeTab.metrics}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
                  {activeTab.title}
                </h2>

                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-4 border-l-2 border-[#cdd32c] pl-6 font-light">
                  {activeTab.details}
                </p>

                {/* --- PIVOTROOTS CENTRAL ANIMATED CIRCULAR PORTAL --- */}
                {renderCircleVisual(activeTab.id)}

                <h4 className="text-xs font-mono uppercase tracking-widest text-[#cdd32c] font-black mb-4">
                  [ DELIVERABLE SCOPE & CAPABILITIES ]
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
                  {activeTab.categories.map((feat, i) => (
                    <motion.div 
                      key={feat}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3.5 bg-white/5 p-3.5 rounded-xl border border-white/5 hover:border-[#cdd32c]/40 transition-all"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#cdd32c] shrink-0" />
                      <span className="text-slate-200 text-sm font-medium">{feat}</span>
                    </motion.div>
                  ))}
                </div>

                {/* BOTTOM ACTION BAR */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-white/10">
                  <button
                    onClick={handleStartProject}
                    className="w-full sm:w-auto bg-[#cdd32c] hover:bg-white text-[#0a0101] px-8 py-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#cdd32c]/20 cursor-pointer"
                  >
                    <span>Request Project Scope</span>
                    <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={() => window.open(`https://wa.me/919398724704?text=Hi%20WayZenTech,%20I%20want%20to%20discuss%20${encodeURIComponent(activeTab.title)}`, '_blank')}
                    className="w-full sm:w-auto bg-white/10 hover:bg-[#25D366] hover:text-black text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle size={16} />
                    <span>Talk Directly with Engineer</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
