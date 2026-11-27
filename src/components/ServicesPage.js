"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, 
  CheckCircle2, ArrowRight, ChevronDown, 
  Bot, MessageCircle, Sparkles,
  Receipt, Smartphone, Search,
  Share2, Server, Film
} from 'lucide-react';

const services = [
  {
    id: "web",
    num: "01",
    title: "Website Development",
    icon: Globe,
    image: "/services/web-showcase.png",
    tagline: "High-performance digital architecture & conversion engines.",
    categories: [
      "Static High-Speed Landing Pages (0.4s FCP)",
      "Dynamic Database Web Apps & Portals",
      "Corporate Branding & Enterprise SaaS",
      "LMS & Real Estate Interactive Portals",
      "Google Core Web Vitals 99/100 Guarantee"
    ],
    details: "We discard generic templates. Every website is custom-architected for sub-second load times, fluid micro-interactions, responsive precision across mobile and desktop, and Google Core Web Vitals dominance.",
    metrics: "< 0.8s FCP • 99/100 Lighthouse • SEO Native",
    color: "#cdd32c"
  },
  {
    id: "ai",
    num: "02",
    title: "AI & Business Automation",
    icon: Bot,
    image: "/services/ai-showcase.png",
    tagline: "Autonomous workflows & intelligent conversational pipelines.",
    categories: [
      "24/7 WhatsApp AI Sales & Support Bots",
      "Document & Invoice OCR Data Extraction",
      "Zero-Touch CRM & Lead Routing Pipelines",
      "Custom OpenAI / LLM Fine-Tuning",
      "Automated Follow-Ups & Notifications"
    ],
    details: "Replace repetitive manual operations with custom AI agents. From conversational WhatsApp bots that qualify leads around the clock to automated invoice extraction and autonomous CRM lead routing.",
    metrics: "70% Manual Time Saved • 320ms Latency • API Connected",
    color: "#cdd32c"
  },
  {
    id: "mobile",
    num: "03",
    title: "iOS & Android App Development",
    icon: Smartphone,
    image: "/services/mobile-showcase.png",
    tagline: "Silk-smooth 60fps native apps with Flutter & React Native.",
    categories: [
      "Cross-Platform Unified Codebase (Flutter / React Native)",
      "Seamless In-App UPI & Razorpay Payment Integration",
      "Offline-First SQLite Caching & Instant Cloud Bridge",
      "Push Notifications, Biometrics & Hardware Sync",
      "Guaranteed Google Play & Apple AppStore Submission"
    ],
    details: "Reach mobile users on both platforms with a unified, high-performance codebase. Engineered with native device hardware access, real-time push alerts, fluid 60 FPS transitions, and robust offline caching.",
    metrics: "60 FPS Native • iOS 18 Ready • Android 15",
    color: "#cdd32c"
  },
  {
    id: "seo",
    num: "04",
    title: "Digital Marketing & SEO",
    icon: Search,
    image: "/services/seo-showcase.png",
    tagline: "Algorithm-proof organic search visibility & high-ROAS funnels.",
    categories: [
      "Technical SEO Architecture & Google Core Web Vitals",
      "Local SEO & Google Map Pack Top 3 Domination",
      "Meta & Google Ads Precision Conversion Funnels",
      "Structured Schema Markup & Semantic Indexing",
      "Multi-Touch Attribution Tracking & ROAS Optimization"
    ],
    details: "We don't chase vanity traffic. We optimize your technical architecture, local Google Map Pack signals, and structured JSON-LD schemas so ready-to-buy customers discover your business first.",
    metrics: "250% Avg. ROAS • Top 3 Google Ranks • Daily Audit",
    color: "#cdd32c"
  },
  {
    id: "billing",
    num: "05",
    title: "Custom Software & Billing (POS)",
    icon: Receipt,
    image: "/services/billing-showcase.png",
    tagline: "Tailor-made POS, GST invoicing, barcode sync & WhatsApp receipts.",
    categories: [
      "3-Second Counter Sales & Barcode Scanner Sync",
      "Automated Paperless WhatsApp PDF Invoice Dispatch",
      "Live Multi-Item Stock Caching & Low-Stock Alerts",
      "Multi-Branch Centralized Cloud Analytics Dashboard",
      "Zero Monthly SaaS Fees & 100% Offline Resilience"
    ],
    details: "Rigid commercial billing software slows businesses down. We engineer bespoke POS systems, inventory management engines, and automated WhatsApp invoice dispatchers built around your exact daily workflow.",
    metrics: "3-Sec Invoice • Thermal Ready • 100% Offline",
    color: "#cdd32c"
  },
  {
    id: "social",
    num: "06",
    title: "Social Media Management",
    icon: Share2,
    image: "/services/social-showcase.png",
    tagline: "Viral brand positioning, content calendars & audience retention.",
    categories: [
      "Strategic Brand Content Calendars & Carousels",
      "Active Audience Engagement & Follower Funnels",
      "High-Impact Commercial Poster & Banner Design",
      "Multi-Platform Distribution (Instagram, LinkedIn, Meta)",
      "Monthly Competitor Benchmark & Growth Analytics"
    ],
    details: "Elevate your brand presence across Instagram, LinkedIn, and Meta with data-driven social calendars, aesthetic visual collateral, and strategic community management that turns passive scrollers into paying clients.",
    metrics: "3x Engagement Lift • Daily Analytics • 100% Consistency",
    color: "#cdd32c"
  },
  {
    id: "video",
    num: "07",
    title: "Video Shooting & Editing",
    icon: Film,
    image: "/services/video-showcase.png",
    tagline: "Cinematic 4K brand reels, commercial trailers & high-retention cuts.",
    categories: [
      "On-Location 4K Professional Video Shoots & Lighting",
      "Viral Short-Form Reels, Shorts & TikTok Pacing",
      "Dynamic Commercial Motion Graphics & 3D Title VFX",
      "Professional Color Grading & Sound Engineering",
      "Rapid 24h Turnaround for Daily Social Feeds"
    ],
    details: "Visual storytelling that commands attention and stops the scroll. We produce retention-optimized short-form reels, high-fidelity promotional commercials, and striking motion graphics that elevate your brand authority.",
    metrics: "4K Motion Graphics • 1080x1920 Viral Formats • 24h Turnaround",
    color: "#cdd32c"
  },
  {
    id: "it",
    num: "08",
    title: "IT & Technical Services",
    icon: Server,
    image: "/services/it-showcase.png",
    tagline: "Cloud DevOps, server deployment, SSL security & 24/7 tech desk.",
    categories: [
      "Cloud VPS & Dedicated Server Setup (AWS / Hostinger / Docker)",
      "Domain, DNS Configuration, SSL Hardening & DDoS Defense",
      "REST / GraphQL API Bridges & Database Maintenance",
      "Automated Daily Cloud Backups & Disaster Recovery",
      "24/7 Emergency Developer Support Desk on WhatsApp"
    ],
    details: "Complete technical peace of mind. We manage Linux cloud servers, custom domain architectures, SSL certificates, API bridges, and provide on-demand technical engineering support so your business never goes down.",
    metrics: "99.99% Uptime • 24/7 Dev Desk • Zero-Downtime Deploy",
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

  // Render the central PivotRoots circular animation composition for each service (Full frame image, zero text/design overlays)
  const renderCircleVisual = (serviceId) => {
    const currentItem = services.find(s => s.id === serviceId);
    return (
      <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 flex items-center justify-center mx-auto my-6">
        {/* Outer Concentric Animated Orbit Rings */}
        <div className="absolute -inset-4 sm:-inset-5 rounded-full border border-dashed border-[#cdd32c]/30 animate-spin-slow pointer-events-none" />
        <div className="absolute -inset-7 rounded-full border border-white/10 pointer-events-none" />
        
        {/* Ambient Backlight Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#cdd32c]/20 to-transparent blur-xl opacity-60 pointer-events-none" />

        {/* Main Portal Sphere */}
        <motion.div
          key={`circle-portal-${serviceId}`}
          initial={{ scale: 0.88, rotate: -4, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.88, rotate: 4, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#cdd32c]/50 shadow-[0_0_50px_rgba(205,211,44,0.25)] flex items-center justify-center select-none bg-[#101014] group"
        >
          {/* FULL FRAME 3D ILLUSTRATION IMAGE - ZERO OVERLAYS, NO TEXT, NO DESIGN */}
          {currentItem?.image && (
            <img 
              src={currentItem.image} 
              alt={currentItem.title} 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover select-none transform-gpu transition-transform duration-700 group-hover:scale-105"
            />
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
          <circle cx="400" cy="400" r="350" stroke="#cdd32c" strokeWidth="1" strokeDasharray="8 8" />
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
          />
        </svg>

        {/* PROMINENT BACKGROUND LOGO - HARDWARE ACCELERATED */}
        <div className="absolute top-16 sm:top-24 md:top-28 left-1/2 -translate-x-1/2 w-[300px] sm:w-[480px] md:w-[700px] aspect-[1024/847] pointer-events-none z-0 flex items-center justify-center transform-gpu">
          <div className="absolute inset-0 bg-[#cdd32c]/15 rounded-full blur-3xl pointer-events-none scale-75 transform-gpu" />
          <img 
            src="/logo-watermark.png" 
            alt="WayZenTech Background Logo" 
            className="w-full h-full object-contain opacity-25 sm:opacity-20 md:opacity-22 select-none transform-gpu"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER: PIVOTROOTS EDITORIAL CONTRAST --- */}
        <header className="mb-12 md:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cdd32c]/10 border border-[#cdd32c]/30 text-[#cdd32c] text-[10px] md:text-xs font-mono font-black uppercase tracking-widest mb-4">
            <Sparkles size={12} />
            <span>[ WAYZEN_CAPABILITIES / 08_VERTICALS ]</span>
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
        <div className="lg:hidden space-y-3.5 mb-20 text-left">
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
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
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
                      <h3 className="font-black text-base sm:text-lg text-white leading-tight mt-0.5">
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
                      className="px-4 sm:px-5 pb-6 border-t border-white/5 pt-4"
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
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Navigation Items (Scrollable when 8 items) */}
          <div className="lg:col-span-5 space-y-2.5 sticky top-32 max-h-[calc(100vh-9rem)] overflow-y-auto pr-2">
            {services.map((item) => {
              const isSelected = activeTab.id === item.id;
              const IconComp = item.icon;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveTab(item)}
                  whileHover={{ x: 6 }}
                  className={`cursor-pointer p-4 xl:p-5 rounded-2xl transition-all border text-left relative overflow-hidden ${
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

                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                      isSelected 
                        ? "bg-[#cdd32c] text-[#0a0101] shadow-lg shadow-[#cdd32c]/30" 
                        : "bg-white/5 text-slate-400"
                    }`}>
                      <IconComp size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono tracking-widest uppercase text-[#cdd32c] font-black">
                          {item.num} • SERVICE
                        </span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#cdd32c]" />
                        )}
                      </div>
                      <h3 className="text-base xl:text-lg font-black uppercase tracking-tight text-white mt-0.5 truncate">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-xs mt-0.5 line-clamp-1 font-light">
                        {item.tagline}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Architectural Service Detail with PivotRoots Circular Animation */}
          <div className="lg:col-span-7 bg-[#101014] rounded-[32px] p-8 md:p-10 border border-white/10 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
            
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

                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-3">
                  {activeTab.title}
                </h2>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4 border-l-2 border-[#cdd32c] pl-5 font-light">
                  {activeTab.details}
                </p>

                {/* --- PIVOTROOTS CENTRAL ANIMATED CIRCULAR PORTAL --- */}
                {renderCircleVisual(activeTab.id)}

                <h4 className="text-xs font-mono uppercase tracking-widest text-[#cdd32c] font-black mb-3">
                  [ DELIVERABLE SCOPE & CAPABILITIES ]
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {activeTab.categories.map((feat, i) => (
                    <motion.div 
                      key={feat}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-[#cdd32c]/40 transition-all"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#cdd32c] shrink-0" />
                      <span className="text-slate-200 text-xs sm:text-sm font-medium">{feat}</span>
                    </motion.div>
                  ))}
                </div>

                {/* BOTTOM ACTION BAR */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-5 border-t border-white/10">
                  <button
                    onClick={handleStartProject}
                    className="w-full sm:w-auto bg-[#cdd32c] hover:bg-white text-[#0a0101] px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#cdd32c]/20 cursor-pointer"
                  >
                    <span>Request Project Scope</span>
                    <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={() => window.open(`https://wa.me/919398724704?text=Hi%20WayZenTech,%20I%20want%20to%20discuss%20${encodeURIComponent(activeTab.title)}`, '_blank')}
                    className="w-full sm:w-auto bg-white/10 hover:bg-[#25D366] hover:text-black text-white border border-white/20 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
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
