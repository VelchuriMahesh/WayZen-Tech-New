"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, Bot, Smartphone, Search, Receipt, 
  ArrowRight, MessageCircle, Sparkles, ChevronLeft, ChevronRight,
  CheckCircle2, Terminal, Zap, ExternalLink, Bell, Share2
} from 'lucide-react';

export const InnovativeServicesShowcase = () => {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const services = [
    {
      id: 'web',
      category: 'Style 01 // Web Architecture',
      title: 'Custom Web & SaaS Platforms',
      tagline: 'High-speed conversion engines built with Next.js & MERN.',
      route: '/web-development',
      icon: Globe,
      color: 'from-blue-600 via-indigo-600 to-cyan-500',
      badge: 'Performance 100/100',
      description: 'We discard generic templates. Every website is custom-architected for sub-second load times, fluid micro-interactions, responsive precision, and Google Core Web Vitals dominance.',
      deliverables: ['Headless Next.js & React 19', 'Full Custom UI/UX Design', 'Database & Cloud API Sync', 'High-Converting Sales Funnels'],
      type: 'browser'
    },
    {
      id: 'ai',
      category: 'Style 02 // Neural Intelligence',
      title: 'AI Automation & Neural Bots',
      tagline: 'Autonomous chatbots, OpenAI workflows & zero-touch pipelines.',
      route: '/ai-automation',
      icon: Bot,
      color: 'from-emerald-500 via-teal-600 to-cyan-500',
      badge: '24/7 Autonomous',
      description: 'Replace repetitive manual operations with custom AI agents. From conversational WhatsApp bots that qualify leads to autonomous invoice processing and automated CRM pipelines.',
      deliverables: ['Custom LLM & GPT Agents', 'Official WhatsApp Bot Sync', 'Automated Lead Qualification', 'Document & Invoice OCR'],
      type: 'terminal'
    },
    {
      id: 'mobile',
      category: 'Style 03 // Native Experience',
      title: 'iOS & Android Mobile Apps',
      tagline: 'Silk-smooth 60fps native apps with Flutter & React Native.',
      route: '/mobile-app-development',
      icon: Smartphone,
      color: 'from-purple-600 via-pink-600 to-rose-500',
      badge: '60 FPS Native',
      description: 'Reach mobile users on both platforms with a unified, high-performance codebase. Engineered with native device hardware access, real-time push alerts, and offline caching.',
      deliverables: ['Cross-Platform Flutter/React Native', 'App Store & Play Store Publishing', 'Offline-First Cloud Sync', 'Razorpay & UPI In-App Pay'],
      type: 'mobile'
    },
    {
      id: 'seo',
      category: 'Style 04 // Search Dominance',
      title: 'High-Intent SEO & Growth',
      tagline: 'Algorithm-proof organic search visibility that captures buyers.',
      route: '/seo',
      icon: Search,
      color: 'from-amber-500 via-orange-500 to-red-500',
      badge: 'Google Rank #1 Ready',
      description: 'We don’t do vanity keywords. We optimize your technical architecture, local Google Map Pack signals, and structured JSON-LD schemas so ready-to-buy customers discover you first.',
      deliverables: ['Technical SEO & Core Web Vitals', 'Google Business Profile Domination', 'Structured JSON-LD Schemas', 'High-ROI PPC Ad Campaigns'],
      type: 'search'
    },
    {
      id: 'billing',
      category: 'Style 05 // Enterprise Systems',
      title: 'Custom Billing & ERP Software',
      tagline: 'Tailor-made POS, GST invoicing, barcode sync & WhatsApp receipts.',
      route: '/billing-software',
      icon: Receipt,
      color: 'from-cyan-600 via-blue-600 to-indigo-700',
      badge: 'Instant WhatsApp Invoicing',
      description: 'Rigid commercial billing software slows businesses down. We engineer bespoke POS systems, inventory management engines, and automated WhatsApp invoice dispatchers built around your exact daily workflow.',
      deliverables: ['Quick GST Invoicing in 3 Seconds', 'Barcode & Thermal Printer Ready', 'Automated WhatsApp PDF Invoices', 'Stock & Low-Inventory Alerts'],
      type: 'pos'
    }
  ];

  const current = services[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + services.length) % services.length);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleNext(); // Swiped left -> next
    } else if (diff < -50) {
      handlePrev(); // Swiped right -> prev
    }
    setTouchStart(null);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background Cybernetic Wave Grids */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-[#cdd32c] text-[10px] font-mono font-black uppercase tracking-[0.25em] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#cdd32c] animate-ping" />
              Capabilities // Interactive Ecosystem
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              CORE <span className="text-[#cdd32c] italic">SERVICES.</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-2 font-light leading-relaxed">
              “Ask not what technology can do for your business, ask what next-generation engineering can scale.” Swipe or tap through our 5 live presentation architectures.
            </p>
          </div>

          {/* Desktop Arrow Controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-[#cdd32c] hover:text-[#0a0101] border border-white/10 hover:border-[#cdd32c] text-white flex items-center justify-center transition-all active:scale-90"
              aria-label="Previous Service"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-xs font-mono font-bold text-[#cdd32c] px-2">
              0{activeIdx + 1} / 0{services.length}
            </span>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-[#cdd32c] hover:text-[#0a0101] border border-white/10 hover:border-[#cdd32c] text-white flex items-center justify-center transition-all active:scale-90"
              aria-label="Next Service"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 5-SERVICE INTERACTIVE NAVIGATION PILLS */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 md:mb-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeIdx === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all border ${
                  isSelected
                    ? "bg-[#cdd32c] text-[#0a0101] font-black border-[#cdd32c] shadow-[0_0_20px_rgba(205,211,44,0.35)] scale-105"
                    : "bg-white/5 hover:bg-white/10 text-slate-400 border-white/10 hover:text-white"
                }`}
              >
                <Icon size={14} className={isSelected ? "text-[#0a0101]" : "text-slate-400"} />
                <span>{item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a0101] animate-ping" />
                )}
              </button>
            );
          })}
        </div>

        {/* SWIPEABLE SHOWCASE CARD CONTAINER */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative min-h-[560px] md:min-h-[500px] rounded-3xl md:rounded-[40px] bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-5 sm:p-8 md:p-12 backdrop-blur-2xl overflow-hidden shadow-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              
              {/* LEFT COLUMN: SERVICE OVERVIEW & DELIVERABLES */}
              <div className="lg:col-span-6 space-y-5 text-left">
                
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                    {current.category}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30 flex items-center gap-1">
                    <Zap size={11} /> {current.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
                  {current.title}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                  {current.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {current.deliverables.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 font-semibold"
                    >
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={() => navigate(current.route)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-3.5 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all active:scale-95"
                  >
                    <span>Explore Full Specs</span>
                    <ArrowRight size={15} />
                  </button>

                  <button
                    onClick={() => window.open('https://wa.me/919398724704?text=Hi%20WayZenTech,%20I%20want%20to%20consult%20about%20' + encodeURIComponent(current.title), '_blank')}
                    className="flex-1 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 py-3.5 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <MessageCircle size={15} className="text-emerald-400" />
                    <span>WhatsApp Inquire</span>
                  </button>
                </div>

              </div>

              {/* RIGHT COLUMN: DISTINCT PRESENTATION MOCKUP FOR EACH SERVICE */}
              <div className="lg:col-span-6 w-full flex items-center justify-center">
                
                {/* 1. WEB STYLE: BROWSER WINDOW MOCKUP */}
                {current.type === 'browser' && (
                  <div className="w-full max-w-md bg-slate-900 rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl overflow-hidden font-mono">
                    <div className="p-3 bg-slate-950 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <div className="px-3 py-0.5 rounded-md bg-slate-800 text-[10px] text-slate-300 flex items-center gap-1.5 border border-white/5 truncate max-w-[200px]">
                        <span className="text-emerald-400">🔒</span> https://client.wayzentech.app
                      </div>
                      <ExternalLink size={12} className="text-slate-400" />
                    </div>
                    
                    <div className="p-5 space-y-4">
                      <div className="flex items-center justify-between border-b border-white/5 pb-3">
                        <div>
                          <p className="text-[10px] text-slate-400">CORE WEB VITALS</p>
                          <p className="text-xl font-bold text-emerald-400">99 / 100 Speed</p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                          0.4s
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-slate-300 font-sans">
                          <span>Framework Architecture</span>
                          <span className="text-blue-400 font-mono">Next.js 15 + React 19</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-300 font-sans">
                          <span>Rendering Strategy</span>
                          <span className="text-purple-400 font-mono">Edge SSR + Static ISR</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-300 font-sans">
                          <span>Security Protocol</span>
                          <span className="text-emerald-400 font-mono">A+ SSL + DDoS Shield</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-300 font-sans flex items-center gap-2">
                        <Sparkles size={14} className="text-blue-400 shrink-0" />
                        <span>Engineered for conversion, high concurrency & enterprise scale.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. AI STYLE: NEURAL WORKFLOW TERMINAL */}
                {current.type === 'terminal' && (
                  <div className="w-full max-w-md bg-slate-950 rounded-2xl md:rounded-3xl border-2 border-emerald-500/30 shadow-[0_0_35px_rgba(16,185,129,0.2)] overflow-hidden font-mono">
                    <div className="p-3 bg-emerald-950/40 border-b border-emerald-500/20 flex items-center justify-between text-xs text-emerald-400">
                      <div className="flex items-center gap-2">
                        <Terminal size={14} />
                        <span className="font-bold">WAYZEN_AI_NODE v4.2</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    </div>

                    <div className="p-5 space-y-3 text-xs leading-relaxed">
                      <div className="text-slate-400">
                        <span className="text-emerald-400">system:</span> Listening to WhatsApp Business Gateway...
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                        <p className="text-[10px] text-slate-500 uppercase font-bold">User WhatsApp Query:</p>
                        <p className="text-white mt-1 font-sans">"Hi, I need quotation for Hospital Billing Software."</p>
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-300">
                        <p className="text-[10px] text-emerald-400 uppercase font-bold flex items-center gap-1.5">
                          <Bot size={12} /> Autonomous AI Agent:
                        </p>
                        <p className="text-white mt-1 font-sans">
                          "Hello! WayZenTech Hospital ERP includes OPD/IPD billing, GST reports, and WhatsApp receipts. Generating catalog..."
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-emerald-400 pt-1">
                        <span>Status: Lead Tagged & Synced to CRM</span>
                        <span className="text-slate-400">Response: 320ms</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. MOBILE STYLE: SMARTPHONE FRAME MOCKUP */}
                {current.type === 'mobile' && (
                  <div className="w-[260px] sm:w-[280px] bg-slate-900 rounded-[44px] border-[6px] border-slate-800 p-3 shadow-2xl relative font-sans">
                    {/* Dynamic Island Notch */}
                    <div className="w-24 h-4 bg-black rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-slate-800 mr-2" />
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    </div>

                    <div className="bg-slate-950 rounded-[32px] p-4 text-white space-y-3.5 border border-white/5">
                      {/* Push Notification Simulator */}
                      <div className="p-2.5 rounded-2xl bg-white/10 border border-white/15 flex items-start gap-2 shadow-md">
                        <div className="p-1.5 rounded-lg bg-pink-500 text-white shrink-0">
                          <Bell size={12} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-white">New Sale Received</p>
                          <p className="text-[9px] text-slate-300">+₹18,500 via Razorpay UPI</p>
                        </div>
                      </div>

                      {/* App Content Preview */}
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-500/30">
                        <p className="text-[10px] font-mono text-purple-300 uppercase">Live Performance</p>
                        <p className="text-lg font-black text-white mt-0.5">60 FPS Native</p>
                        <p className="text-[10px] text-slate-300 mt-1">Flutter & React Native cross-compiled for iOS & Android.</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
                        <div className="p-2 bg-white/5 rounded-xl border border-white/5">
                          <p className="text-slate-400">Offline</p>
                          <p className="text-emerald-400 font-bold">100% Sync</p>
                        </div>
                        <div className="p-2 bg-white/5 rounded-xl border border-white/5">
                          <p className="text-slate-400">Deploy</p>
                          <p className="text-blue-400 font-bold">Play & AppStore</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. SEO STYLE: GOOGLE SEARCH RADAR */}
                {current.type === 'search' && (
                  <div className="w-full max-w-md bg-white text-slate-900 rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-2xl font-sans text-left space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 border-b border-slate-100 pb-3">
                      <span className="font-bold text-blue-600 text-sm">G</span>
                      <span className="text-slate-800">google.com/search?q=best+web+development...</span>
                    </div>

                    {/* Google #1 Search Card */}
                    <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                        <span className="w-3.5 h-3.5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[8px]">W</span>
                        <span>https://www.wayzentechofficial.com</span>
                      </div>
                      <h4 className="text-sm md:text-base font-black text-blue-700 hover:underline cursor-pointer">
                        WayZenTech — #1 Web & AI Development Company
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        Leading digital engineering foundry delivering custom websites, AI workflows, and enterprise software.
                      </p>
                      <div className="flex items-center gap-2 text-[10px] text-amber-600 font-bold pt-1">
                        <span>★★★★★ 5.0 (65+ Reviews)</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-emerald-600 font-bold">Verified Google Schema</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700">
                        <span className="block text-[9px] text-slate-500 uppercase">Organic Traffic</span>
                        <span className="font-black text-sm text-blue-900">+340% YoY</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700">
                        <span className="block text-[9px] text-slate-500 uppercase">Intent Targeting</span>
                        <span className="font-black text-sm text-emerald-900">Commercial 100%</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. BILLING STYLE: DIGITAL POS & INVOICE SIMULATOR */}
                {current.type === 'pos' && (
                  <div className="w-full max-w-md bg-slate-900 rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl p-5 md:p-6 text-white font-mono text-left space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <p className="text-[10px] text-slate-400">WAYZENTECH POS ENGINE</p>
                        <p className="text-sm font-bold text-cyan-400">INVOICE #WZT-8842</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase">
                        GST Verified
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-300">
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span>1x Commercial Web Engine</span>
                        <span className="text-white font-bold">₹24,999</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span>1x AI Lead Dispatcher</span>
                        <span className="text-white font-bold">₹12,499</span>
                      </div>
                      <div className="flex justify-between py-1 text-slate-400 text-[11px]">
                        <span>GST @ 18%</span>
                        <span>₹6,749</span>
                      </div>
                      <div className="flex justify-between py-2 border-t-2 border-white/20 text-sm font-black text-emerald-400">
                        <span>TOTAL AMOUNT</span>
                        <span>₹44,247</span>
                      </div>
                    </div>

                    {/* Instant WhatsApp Receipt Pill */}
                    <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300">
                      <div className="flex items-center gap-2">
                        <Share2 size={14} className="text-emerald-400" />
                        <span>PDF Invoice Sent via WhatsApp</span>
                      </div>
                      <CheckCircle2 size={14} className="text-emerald-400" />
                    </div>
                  </div>
                )}

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Mobile Swipe Indicators & Next/Prev Controls */}
          <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    activeIdx === i 
                    ? "w-8 bg-blue-500" 
                    : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] md:text-xs font-mono text-slate-400 uppercase tracking-widest hidden sm:inline">
                Swipe card or tap buttons
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InnovativeServicesShowcase;
