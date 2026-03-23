import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, Instagram, Zap, ArrowRight, 
  MessageCircle, Send, Info, Cpu, Globe, Rocket, Code2, Database
} from 'lucide-react';

// React Router
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";

// Components
import { Navbar } from './components/Navbar';
import Team from './components/team';
import About from "./components/About";
import WhatIsWayZenTech from "./components/WhatIsWayZenTech"; 
import { ProjectForm } from './components/ProjectForm';
import { Portfolio } from './components/Portfolio';
import { Techalien } from './components/Techalien';
import ServicesPage from './components/ServicesPage';
import { AdminDashboard } from './components/AdminDashboard';
import { UnlockPortalSection } from './components/UnlockPortalSection';

// --- HELPER: SMOOTH SCROLL TO TOP ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
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
      <header className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center px-4 md:px-6 pt-24 md:pt-20 overflow-hidden bg-white">
        <TechGrid />
        <Floating3DSpace />
        
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-4 md:mb-6 inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]"
          >
            <Zap size={10} className="animate-bounce" /> Innovation Foundry
          </motion.div>
          
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-[130px] font-black tracking-tighter text-slate-950 leading-[0.9] md:leading-[0.85] mb-6 md:mb-10"
          >
            WayZen<span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-500 italic">Tech</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl lg:text-2xl text-slate-500 max-w-xs md:max-w-2xl mx-auto font-medium leading-relaxed px-2"
          >
            Engineering <span className="text-slate-900 font-bold underline decoration-blue-500/30">AI Systems</span>, Scalable MERN Apps & Premium Academic Projects.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 pt-10 md:pt-16 px-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("request").scrollIntoView({ behavior: "smooth" })} 
              className="w-full sm:w-auto group bg-slate-950 text-white px-8 md:px-12 py-4 md:py-6 rounded-[20px] md:rounded-[24px] font-bold flex items-center justify-center gap-3 shadow-2xl hover:bg-blue-600 transition-all"
            >
              Start Request <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/what-is-wayzentech')} 
              className="w-full sm:w-auto group bg-white text-slate-950 border-2 border-slate-100 px-8 md:px-12 py-4 md:py-6 rounded-[20px] md:rounded-[24px] font-bold flex items-center justify-center gap-3 hover:border-blue-500 transition-all shadow-lg"
            >
              <Info size={18} className="text-blue-500" /> What is WayZenTech?
            </motion.button>
          </div>
        </div>
      </header>
      
      <Portfolio />
      <UnlockPortalSection upiId="9398724704@ybl" />
      
      <section id="request" className="py-16 md:py-32 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[32px] md:rounded-[60px] overflow-hidden shadow-2xl">
          <ProjectForm />
        </div>
      </section>

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
            {/* Fixed the Error here: Using className for responsive sizing instead of md:size */}
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
    <div className="antialiased font-sans bg-white relative overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-is-wayzentech" element={<WhatIsWayZenTech />} />
        </Routes>
      </AnimatePresence>

      <Techalien />

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