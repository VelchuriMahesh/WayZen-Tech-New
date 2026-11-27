import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, ArrowRight, MessageCircle, Info, 
  ShieldCheck, Sparkles
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
import { Global3DLogo } from './components/Global3DLogo';
import { SitePreloader } from './components/SitePreloader';
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
    <header className="relative min-h-screen flex flex-col justify-between items-center px-5 md:px-12 pt-28 sm:pt-32 md:pt-36 pb-12 overflow-hidden bg-transparent text-white select-none">
      
      {/* Background Liquid Smoke Media / Atmospheric Gradient */}
      <div className="absolute inset-0 pointer-events-none z-0 transform-gpu">
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-[#cdd32c]/10 blur-[120px] rounded-full transform-gpu" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] bg-blue-600/15 blur-[120px] rounded-full transform-gpu" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,10,18,0.5)_75%)]" />
      </div>

      {/* SVG Dotted Orbital Lines (Hardware Accelerated) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-25" viewBox="0 0 1440 900" fill="none">
        <ellipse cx="720" cy="450" rx="600" ry="320" stroke="#cdd32c" strokeWidth="1.5" strokeDasharray="12 12" />
        <ellipse cx="720" cy="450" rx="380" ry="200" stroke="#ffffff" strokeWidth="1" strokeDasharray="8 8" opacity="0.4" />
      </svg>

      {/* TOP PILL BADGE */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#cdd32c] text-[10px] sm:text-xs font-mono font-black uppercase tracking-[0.25em] backdrop-blur-md shadow-lg"
      >
        <span className="w-2 h-2 rounded-full bg-[#cdd32c] animate-ping" />
        <span>You Dream It, We Build It.</span>
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

      {/* 2. HORIZONTAL INFINITE KINETIC MARQUEE */}
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
  const [siteLoading, setSiteLoading] = useState(true);

  return (
    <div className="antialiased font-sans bg-[#0a0101] text-white relative overflow-x-hidden pb-20 md:pb-0">
      {/* HIGH-TECH SITE PRELOADER WITH 3D ROTATING LOGO ANIMATION */}
      {siteLoading && <SitePreloader onComplete={() => setSiteLoading(false)} />}

      {/* GLOBAL 3D 360-DEGREE ROTATING LOGO - VISIBLE IN ALL TABS & MOBILE VIEW */}
      <Global3DLogo />

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