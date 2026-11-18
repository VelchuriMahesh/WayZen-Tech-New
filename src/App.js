import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, Instagram, Zap, ArrowRight, 
  MessageCircle, Send, Info, Cpu, Globe, Rocket, Code2, Database,
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

// --- BACKGROUND: TECH GRID ---
const TechGrid = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:40px_40px]" />
    <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
  </div>
);

// --- 3D FLOATING ELEMENTS (Responsive Icons) ---
const Floating3DSpace = () => {
  const elements = [
    { icon: <Cpu className="w-5 h-5 md:w-8 md:h-8" />, color: "text-blue-500", top: "15%", left: "5%", delay: 0 },
    { icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />, color: "text-indigo-500", top: "10%", right: "8%", delay: 1 },
    { icon: <Rocket className="w-6 h-6 md:w-10 md:h-10" />, color: "text-purple-500", bottom: "20%", left: "5%", delay: 2 },
    { icon: <Code2 className="w-6 h-6 md:w-8 md:h-8" />, color: "text-emerald-500", bottom: "25%", right: "5%", delay: 3 },
    { icon: <Database className="w-5 h-5 md:w-6 md:h-6" />, color: "text-pink-500", top: "40%", left: "2%", delay: 1.5, hideMobile: true },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [0.8, 1, 0.8],
            rotateY: 360,
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            delay: el.delay,
            ease: "easeInOut" 
          }}
          style={{ 
            position: 'absolute', 
            top: el.top, 
            left: el.left, 
            right: el.right, 
            bottom: el.bottom,
          }}
          className={`${el.color} ${el.hideMobile ? 'hidden md:block' : 'block'} filter blur-[0.5px] md:blur-0`}
        >
          <div className="bg-white/40 backdrop-blur-sm p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl border border-white/20">
            {el.icon}
          </div>
        </motion.div>
      ))}
    </div>
  );
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
    <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          
          {/* Left Column: Story & Vision */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-widest">
              <ShieldCheck size={12} /> Technology Foundry
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Engineering the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Digital Solutions</span>
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              WayZenTech is a premier software engineering and AI collective based in India. We combine deep technical rigor with commercial focus — building high-speed business websites, reactive web applications, automated AI pipelines, and custom software systems designed to scale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1">Direct Engineering Sync</h4>
                <p className="text-xs text-slate-400">No account managers or middle layers. Talk directly to developers on WhatsApp.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1">Scalable Clean Architecture</h4>
                <p className="text-xs text-slate-400">Built with modern tech stacks tested for speed, SEO, and robust reliability.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => navigate('/about')}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30"
              >
                <span>Read Full Company Story</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => window.open('https://wa.me/919398724704', '_blank')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
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
                className="p-6 md:p-8 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/10 flex flex-col justify-between"
              >
                <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  {stat.value}
                </div>
                <div className="mt-4">
                  <h4 className="text-sm md:text-base font-bold text-white">{stat.label}</h4>
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

// --- COMPONENT: KINETIC WAVE TITLE ---
const KineticWaveTitle = () => {
  const wayzenChars = ["W", "a", "y", "Z", "e", "n"];
  const techChars = ["T", "e", "c", "h"];

  return (
    <div className="relative inline-flex items-center justify-center select-none py-2 my-2 sm:my-4">
      {/* Dynamic Multi-Color Ambient Plasma Glow */}
      <motion.div 
        animate={{
          scale: [1, 1.18, 0.92, 1],
          opacity: [0.3, 0.55, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -inset-6 sm:-inset-16 bg-gradient-to-tr from-blue-500/25 via-indigo-500/25 to-cyan-400/25 blur-2xl sm:blur-[100px] rounded-full pointer-events-none -z-10"
      />

      {/* Main Kinetic Wave Heading */}
      <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[130px] font-black tracking-tighter leading-[0.9] md:leading-[0.85] flex items-center justify-center flex-wrap">
        {/* "WayZen" in Onyx Slate */}
        <span className="inline-flex text-slate-950">
          {wayzenChars.map((char, index) => (
            <motion.span
              key={`w-${index}`}
              animate={{
                y: [0, -10, 0, 7, 0],
                rotateZ: [0, -1.2, 0, 1.2, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.12,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.16, 
                color: "#2563eb",
                transition: { duration: 0.15 } 
              }}
              className="inline-block transition-colors cursor-pointer transform-gpu"
            >
              {char}
            </motion.span>
          ))}
        </span>

        {/* "Tech" in Electric Vibrant Gradient with Neon Wave Motion */}
        <span className="inline-flex italic ml-1.5 sm:ml-2">
          {techChars.map((char, index) => (
            <motion.span
              key={`t-${index}`}
              animate={{
                y: [0, -12, 0, 9, 0],
                rotateZ: [0, 2, 0, -2, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: (wayzenChars.length + index) * 0.12,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.2, 
                rotateZ: 6,
                transition: { duration: 0.15 } 
              }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 cursor-pointer transform-gpu drop-shadow-[0_4px_16px_rgba(37,99,235,0.25)]"
            >
              {char}
            </motion.span>
          ))}
        </span>
      </h1>
    </div>
  );
};

// --- COMPONENT: HOME PAGE ---
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* 1. HERO SECTION */}
      <header className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-center items-center px-4 md:px-6 pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-white">
        <TechGrid />
        <Floating3DSpace />
        
        <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Animated Innovation Pill */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 border border-blue-500/25 text-blue-600 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] shadow-sm backdrop-blur-md"
          >
            <Sparkles size={12} className="animate-spin text-blue-600" />
            <span>The Way to the Next Generation of Technology</span>
          </motion.div>
          
          {/* KINETIC WAVE ANIMATED TITLE */}
          <KineticWaveTitle />
          
          {/* OFFICIAL BRAND PHILOSOPHY CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-xl mx-auto my-3 sm:my-4 px-2"
          >
            <div className="relative group p-4 sm:p-5 rounded-2xl md:rounded-3xl bg-slate-50/90 hover:bg-white border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all">
              <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-800 italic leading-relaxed">
                “The Way to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-black not-italic">Next Generation</span> of Technology.”
              </p>
              
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-200/60 text-[9px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-600">
                <div className="flex flex-col items-center">
                  <span className="font-black text-blue-600">WAY</span>
                  <span className="text-[8px] sm:text-[9px] text-slate-400">The Path</span>
                </div>
                <div className="flex flex-col items-center border-x border-slate-200/60">
                  <span className="font-black text-indigo-600">ZEN</span>
                  <span className="text-[8px] sm:text-[9px] text-slate-400">Mastery</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-black text-cyan-600">TECH</span>
                  <span className="text-[8px] sm:text-[9px] text-slate-400">Next-Gen</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs sm:text-sm md:text-base text-slate-500 max-w-lg mx-auto font-medium leading-relaxed px-2 mt-1"
          >
            Engineering <span className="text-slate-900 font-bold underline decoration-blue-500/40">AI Systems</span>, Scalable Web Applications & Enterprise Software Solutions.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 pt-6 sm:pt-8 w-full sm:w-auto px-4">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("request")?.scrollIntoView({ behavior: "smooth" })} 
              className="w-full sm:w-auto group bg-slate-950 text-white px-7 md:px-10 py-3.5 md:py-4 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl hover:bg-blue-600 transition-all"
            >
              <Zap size={14} className="text-yellow-400 fill-yellow-400" />
              <span>Start Request</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/what-is-wayzentech')} 
              className="w-full sm:w-auto group bg-white text-slate-900 border-2 border-slate-200/90 hover:border-blue-500 px-7 md:px-10 py-3.5 md:py-4 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Info size={15} className="text-blue-500" />
              <span>What is WayZenTech?</span>
            </motion.button>
          </div>

        </div>
      </header>
      
      {/* 2. INNOVATIVE 5-STYLE INTERACTIVE SERVICES SHOWCASE */}
      <InnovativeServicesShowcase />

      {/* 3. ABOUT COMPANY HIGHLIGHT */}
      <AboutCompanyHighlight />

      {/* 4. FEATURED PROJECTS PORTFOLIO (2 Grids Mobile 1:1, 4 Grids Web 1:1) */}
      <Portfolio />
      
      {/* 5. PROJECT INQUIRY FORM */}
      <section id="request" className="py-16 md:py-32 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[32px] md:rounded-[60px] overflow-hidden shadow-2xl">
          <ProjectForm />
        </div>
      </section>

      {/* 6. WHATSAPP CONNECT BANNER */}
      <WhatsAppFooterSection />
    </motion.div>
  );
};

// --- COMPONENT: WHATSAPP SECTION ---
const WhatsAppFooterSection = () => (
  <section className="w-full bg-slate-50 py-10 md:py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.div 
        whileHover={{ y: -5 }}
        onClick={() => window.open('https://wa.me/919398724704', '_blank')}
        className="group cursor-pointer bg-white border border-slate-200 rounded-[30px] md:rounded-[40px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 hover:border-emerald-400 transition-all shadow-xl"
      >
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
          <div className="bg-[#25D366] p-4 md:p-6 rounded-2xl md:rounded-3xl text-white shadow-lg group-hover:rotate-12 transition-transform">
            <MessageCircle className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Got Questions?</h2>
            <p className="text-sm md:text-base text-slate-500 font-bold">Chat directly with our Engineers on WhatsApp</p>
          </div>
        </div>
        <button className="w-full md:w-auto bg-[#25D366] text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-3">
          Instant Connect <Send size={16} />
        </button>
      </motion.div>
    </div>
  </section>
);

// --- MASTER CONTENT WRAPPER ---
function AppContent() {
  const location = useLocation();

  return (
    <div className="antialiased font-sans bg-white relative overflow-x-hidden pb-20 md:pb-0">
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

      {/* FOOTER */}
      <footer className="pt-20 md:pt-40 pb-8 md:pb-12 bg-slate-950 text-white relative rounded-t-[40px] md:rounded-t-[60px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 mb-16 md:mb-20">
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase">WayZen<span className="text-blue-500">Tech</span></h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xs mx-auto md:mx-0">Premium Digital Collective engineering the next generation of software and growth.</p>
            </div>
            
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <p className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px]">Contact Sync</p>
              <div className="space-y-3 md:space-y-4">
                <p className="text-xs md:text-sm flex items-center justify-center md:justify-start gap-3 text-slate-300 italic"><Mail size={14} className="text-blue-500" /> wayzentech@gmail.com</p>
                <p className="text-xs md:text-sm flex items-center justify-center md:justify-start gap-3 text-slate-300 font-bold"><Phone size={14} className="text-blue-500" /> +91 9398724704</p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 text-center md:text-left sm:col-span-2 lg:col-span-1">
              <p className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px]">Social Core</p>
              <div className="flex justify-center md:justify-start">
                <a href="https://instagram.com/way_zentech" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white/5 px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-white/10 hover:border-pink-500 transition-all group">
                  <Instagram size={20} className="text-pink-500 group-hover:scale-110 transition-transform" /> 
                  <span className="font-black text-xs md:text-sm uppercase">@way_zentech</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 md:pt-12 border-t border-white/5 text-center">
            <div className="text-[8px] md:text-[10px] text-slate-600 uppercase tracking-[0.4em] md:tracking-[0.6em] font-black">
              © 2024 WayZenTech Foundry // India HQ
            </div>
          </div>
        </div>
      </footer>
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