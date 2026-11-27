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
  ArrowRight, ChevronLeft, ChevronRight, MessageCircle,
  Share2, Video, Server, ShieldCheck, Instagram, Film,
  HardDrive, Award
} from 'lucide-react';

export const InnovativeServicesShowcase = () => {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const services = [
    {
      id: 'web',
      num: '01',
      shortLabel: 'Website Development',
      category: '01 // WEB ARCHITECTURE',
      title: 'Website Development (Static & Dynamic)',
      tagline: 'High-speed conversion engines built with Next.js 15 & MERN.',
      route: '/web-development',
      icon: Globe,
      image: '/services/web-showcase.png',
      badge: 'Static vs Dynamic Architecture',
      metrics: '< 0.8s FCP • 99/100 Speed • SEO Native',
      description: 'We discard generic templates. Every website is custom-architected for sub-second load times, fluid micro-interactions, responsive precision, and Google Core Web Vitals dominance.',
      capabilities: [
        { icon: Home, title: 'Static High-Speed Landing Pages', desc: 'Pre-rendered ultra-fast landing pages with 0.4s FCP' },
        { icon: ShoppingBag, title: 'Dynamic Database Web Apps', desc: 'Full-stack MERN & Next.js 15 reactive cloud systems' },
        { icon: Globe, title: 'Corporate Branding & SaaS', desc: 'High-concurrency multi-tenant cloud platforms' },
        { icon: GraduationCap, title: 'LMS & Real Estate Portals', desc: 'Interactive property filtering & instant lead capture' }
      ]
    },
    {
      id: 'ai',
      num: '02',
      shortLabel: 'AI & Automation',
      category: '02 // NEURAL INTELLIGENCE',
      title: 'AI & Automation Pipelines',
      tagline: 'Autonomous chatbots, OpenAI workflows & zero-touch pipelines.',
      route: '/ai-automation',
      icon: Bot,
      image: '/services/ai-showcase.png',
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
      shortLabel: 'iOS & Android Apps',
      category: '03 // NATIVE EXPERIENCE',
      title: 'iOS & Android App Development',
      tagline: 'Silk-smooth 60fps native apps with Flutter & React Native.',
      route: '/mobile-app-development',
      icon: Smartphone,
      image: '/services/mobile-showcase.png',
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
      shortLabel: 'Digital Marketing & SEO',
      category: '04 // SEARCH DOMINANCE',
      title: 'Digital Marketing & SEO Domination',
      tagline: 'Algorithm-proof organic search visibility that captures buyers.',
      route: '/seo',
      icon: Search,
      image: '/services/seo-showcase.png',
      badge: 'Google Rank #1 Ready',
      metrics: '250% Avg. ROAS • Top 3 Google Ranks • Daily Audit',
      description: 'We don’t chase vanity traffic. We optimize your technical architecture, local Google Map Pack signals, and structured JSON-LD schemas so ready-to-buy customers discover your business first.',
      capabilities: [
        { icon: Search, title: 'Technical SEO & Vitals', desc: 'Google Core Web Vitals 100/100 score guarantee' },
        { icon: MapPin, title: 'Google Map Pack Domination', desc: 'Local search #1 positioning for buyer queries' },
        { icon: TrendingUp, title: 'Meta & Google Ads Funnels', desc: 'High-converting viral creative formats & funnels' },
        { icon: Target, title: 'Attribution & ROAS Audit', desc: 'Precision conversion tracking with zero wasted budget' }
      ]
    },
    {
      id: 'billing',
      num: '05',
      shortLabel: 'Billing Software (POS)',
      category: '05 // RETAIL ARCHITECTURE',
      title: 'Custom Software Billing Setup (POS)',
      tagline: 'Tailor-made POS, GST invoicing, barcode sync & WhatsApp receipts.',
      route: '/billing-software',
      icon: Receipt,
      image: '/services/billing-showcase.png',
      badge: 'Zero Monthly SaaS Fees',
      metrics: '3-Sec Invoice • Thermal Ready • 100% Offline',
      description: 'Rigid commercial billing software slows businesses down. We engineer bespoke POS systems, inventory management engines, and automated WhatsApp invoice dispatchers built around your exact daily workflow.',
      capabilities: [
        { icon: Receipt, title: '3-Second GST Invoicing', desc: 'Blazing speed counter sales with barcode scanner' },
        { icon: Send, title: 'Automated WhatsApp PDF Bills', desc: 'Paperless instant PDF invoice delivery to customers' },
        { icon: Barcode, title: 'Live Stock & Barcode Sync', desc: 'Real-time multi-item inventory & low-stock alerts' },
        { icon: LayoutDashboard, title: 'Multi-Store Dashboard', desc: 'Centralized cloud reporting for sales & staff' }
      ]
    },
    {
      id: 'social',
      num: '06',
      shortLabel: 'Social Media',
      category: '06 // BRAND INFLUENCE',
      title: 'Social Media Management',
      tagline: 'Viral brand positioning, content calendars & audience retention.',
      route: '/digital-marketing',
      icon: Share2,
      image: '/services/social-showcase.png',
      badge: 'Commercial Growth',
      metrics: '3x Engagement Lift • Daily Analytics • 100% Consistency',
      description: 'Elevate your brand presence across Instagram, LinkedIn, and Meta with data-driven social calendars, aesthetic visual collateral, and strategic community management.',
      capabilities: [
        { icon: Instagram, title: 'Brand Content Calendars', desc: 'Scheduled viral posts, carousels & promotional assets' },
        { icon: TrendingUp, title: 'Audience Engagement & Growth', desc: 'Active community interaction & targeted follower growth' },
        { icon: Target, title: 'Commercial Poster Design', desc: 'High-converting graphic banners for campaigns' },
        { icon: Award, title: 'Multi-Platform Distribution', desc: 'Unified scheduling across Meta, LinkedIn & Twitter' }
      ]
    },
    {
      id: 'video',
      num: '07',
      shortLabel: 'Video Shooting & Editing',
      category: '07 // MEDIA PRODUCTION',
      title: 'Video Shooting & High-Fidelity Editing',
      tagline: 'Cinematic 4K brand reels, commercial trailers & high-retention cuts.',
      route: '/digital-marketing',
      icon: Video,
      image: '/services/video-showcase.png',
      badge: '4K Commercial Grade',
      metrics: '4K Motion Graphics • 1080x1920 Viral Formats • 24h Turnaround',
      description: 'Visual storytelling that commands attention and stops the scroll. We produce retention-optimized short-form reels, high-fidelity promotional commercials, and striking motion graphics.',
      capabilities: [
        { icon: Film, title: 'Cinematic Video Shoots', desc: 'On-location 4K professional camera shoots & lighting' },
        { icon: Video, title: 'Viral Reel & Shorts Editing', desc: 'High-retention pacing, subtitles & sound design' },
        { icon: Sparkles, title: 'Commercial Motion Graphics', desc: 'Dynamic 3D title cards, VFX & product animations' },
        { icon: Send, title: 'Rapid 24h Turnaround', desc: 'Fast post-production pipeline for daily social content' }
      ]
    },
    {
      id: 'it',
      num: '08',
      shortLabel: 'IT & Technical Services',
      category: '08 // INFRASTRUCTURE CORE',
      title: 'IT & Technical Infrastructure Services',
      tagline: 'Cloud DevOps, server deployment, SSL security & 24/7 tech desk.',
      route: '/custom-software-development',
      icon: Server,
      image: '/services/it-showcase.png',
      badge: '99.99% Cloud Uptime',
      metrics: '99.99% Uptime • 24/7 Dev Desk • Zero-Downtime Deploy',
      description: 'Complete technical peace of mind. We manage Linux cloud servers, custom domain architectures, SSL certificates, API bridges, and provide on-demand technical engineering support.',
      capabilities: [
        { icon: Server, title: 'Cloud Server & VPS Setup', desc: 'AWS, DigitalOcean, Hostinger & Docker containerization' },
        { icon: ShieldCheck, title: 'Domain, DNS & SSL Hardening', desc: 'Enterprise security, firewall setup & DDoS defense' },
        { icon: HardDrive, title: 'API Bridges & Database Ops', desc: 'MongoDB, PostgreSQL, Firebase & Redis maintenance' },
        { icon: MessageSquare, title: '24/7 Engineering Dev Desk', desc: 'Direct WhatsApp emergency technical support' }
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
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    setTouchStart(null);
  };

  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-transparent text-white overflow-hidden select-none">
      
      {/* Background Organic Winding Spline Path (PivotRoots signature) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0" viewBox="0 0 1440 900" fill="none">
        <path
          d="M -100 250 C 300 50, 600 650, 1000 300 C 1300 50, 1500 550, 1600 400"
          stroke="#cdd32c"
          strokeWidth="1.5"
          strokeDasharray="10 10"
        />
        <circle cx="1000" cy="300" r="180" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.1" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* --- TOP SECTION HEADER WITH PIVOTROOTS EDITORIAL TYPOGRAPHY --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 md:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#cdd32c] text-[10px] sm:text-xs font-mono font-black uppercase tracking-[0.25em] mb-4">
              <Sparkles size={12} />
              <span>[ CAPABILITIES // INTERACTIVE ECOSYSTEM ]</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-tight">
              CORE <span className="text-[#cdd32c] italic">SERVICES.</span>
            </h2>
            
            <p className="mt-3 text-xs sm:text-sm text-slate-400 font-light max-w-xl">
              “Ask not what technology can do for your business, ask what next-generation engineering can scale.” Explore the 8 live architectural capabilities engineered by WayZenTech.
            </p>
          </div>

          {/* Service Carousel Navigation Arrows & Count */}
          <div className="flex items-center gap-3 self-start lg:self-end">
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

        {/* 8-SERVICE INTERACTIVE NAVIGATION PILLS (PIVOTROOTS TAB BAR) */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-3 mb-8 md:mb-12">
          {services.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeIdx === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap border ${
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

              {/* CENTER COLUMN: SQUARE FRAME (FULL IMAGE, ZERO TEXT/DESIGN ON IMAGE) */}
              <div className="lg:col-span-4 flex justify-center items-center py-4 transform-gpu">
                <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-square flex items-center justify-center transform-gpu">
                  
                  {/* Ambient Glow behind Square Frame */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#cdd32c]/20 via-[#cdd32c]/5 to-transparent blur-2xl opacity-60 pointer-events-none transform-gpu" />

                  {/* Subtle Decorative Outer Dashed Border Line */}
                  <div className="absolute -inset-3 rounded-[28px] border border-dashed border-[#cdd32c]/25 pointer-events-none" />

                  {/* Main Square Portal Frame */}
                  <motion.div
                    key={`square-${current.id}`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#cdd32c]/40 bg-gradient-to-b from-[#161620] via-[#0f0f16] to-[#08080c] shadow-[0_0_50px_rgba(205,211,44,0.2)] flex items-center justify-center p-3 sm:p-4 select-none transform-gpu group"
                  >
                    {/* Corner Bracket Tech Accents */}
                    <span className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#cdd32c]/70 pointer-events-none" />
                    <span className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#cdd32c]/70 pointer-events-none" />
                    <span className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#cdd32c]/70 pointer-events-none" />
                    <span className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#cdd32c]/70 pointer-events-none" />

                    {/* FULL 3D ILLUSTRATION IMAGE - 100% UNCLIPPED, NO TEXT, NO DESIGN */}
                    {current.image && (
                      <img 
                        src={current.image} 
                        alt={current.title} 
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-contain select-none transform-gpu transition-transform duration-500 group-hover:scale-105"
                      />
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
