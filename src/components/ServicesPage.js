"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, TrendingUp, Instagram, Video, 
  CheckCircle2, ArrowRight, ChevronDown, 
  Bot, Layers, MessageCircle, Sparkles
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

  return (
    <div className="min-h-screen bg-[#0a0101] text-white pt-28 md:pt-36 pb-32 md:pb-28 px-4 md:px-8 relative overflow-hidden font-sans">
      
      {/* --- PIVOTROOTS ORBITAL SVG MOTIF & BACKGROUND LOGO EMBLEM --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -top-40 -right-40 w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-20" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="350" stroke="#cdd32c" strokeWidth="1" strokeDasharray="8 8" className="animate-make-line" />
          <circle cx="400" cy="400" r="240" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.2" />
          <circle cx="400" cy="400" r="120" stroke="#cdd32c" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#cdd32c]/5 rounded-full blur-[140px]" />

        {/* PROMINENT BACKGROUND LOGO - VISIBLE IN MOBILE & WEB */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-[300px] sm:w-[500px] md:w-[750px] aspect-[1024/847] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#cdd32c]/10 rounded-full blur-[90px] pointer-events-none scale-75" />
            <img 
              src="/logo-watermark.png" 
              alt="WayZenTech Background Logo" 
              className="w-full h-full object-contain opacity-22 sm:opacity-18 md:opacity-20 filter drop-shadow-[0_0_40px_rgba(205,211,44,0.18)] select-none"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER: PIVOTROOTS EDITORIAL CONTRAST --- */}
        <header className="mb-12 md:mb-20">
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

        {/* --- MOBILE VIEW: PIVOTROOTS ACCORDION CARDS --- */}
        <div className="lg:hidden space-y-4">
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
          
          {/* INSTAGRAM SOCIAL BAR */}
          <a 
            href="https://instagram.com/way_zentech" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 rounded-2xl bg-[#edf1f2] text-[#0a0101] border border-[#d5d5d5] mt-6 group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0a0101] text-[#cdd32c] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram size={20} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Behind The Scenes</span>
                <span className="font-black text-sm uppercase tracking-wide">Follow @way_zentech</span>
              </div>
            </div>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
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

            {/* INSTAGRAM BANNER */}
            <motion.a 
              href="https://instagram.com/way_zentech"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between p-6 rounded-2xl bg-[#edf1f2] text-[#0a0101] border border-[#d5d5d5] group mt-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0a0101] text-[#cdd32c] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram size={22} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Real-Time Updates</span>
                  <span className="font-black text-sm uppercase tracking-wide">Connect @way_zentech</span>
                </div>
              </div>
              <ArrowRight className="group-hover:translate-x-2 transition-transform text-[#0a0101]" />
            </motion.a>
          </div>

          {/* Right Column: Dynamic Architectural Service Detail */}
          <div className="lg:col-span-7 bg-[#101014] rounded-[36px] p-10 md:p-12 border border-white/10 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
            
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
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-[#cdd32c]/10 text-[#cdd32c] border border-[#cdd32c]/30 text-[10px] font-mono font-black uppercase tracking-widest">
                    Architectural Blueprint
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    ⚡ {activeTab.metrics}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                  {activeTab.title}
                </h2>

                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 border-l-2 border-[#cdd32c] pl-6 font-light">
                  {activeTab.details}
                </p>

                <h4 className="text-xs font-mono uppercase tracking-widest text-[#cdd32c] font-black mb-4">
                  [ DELIVERABLE SCOPE & CAPABILITIES ]
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-10">
                  {activeTab.categories.map((feat, i) => (
                    <motion.div 
                      key={feat}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3.5 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-[#cdd32c]/40 transition-all"
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
                    className="w-full sm:w-auto bg-[#cdd32c] hover:bg-white text-[#0a0101] px-8 py-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#cdd32c]/20"
                  >
                    <span>Request Project Scope</span>
                    <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={() => window.open(`https://wa.me/919398724704?text=Hi%20WayZenTech,%20I%20want%20to%20discuss%20${encodeURIComponent(activeTab.title)}`, '_blank')}
                    className="w-full sm:w-auto bg-white/10 hover:bg-[#25D366] hover:text-black text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
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
