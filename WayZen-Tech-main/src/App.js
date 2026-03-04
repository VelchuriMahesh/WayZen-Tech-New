import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, Instagram, Zap, ArrowRight, 
  MessageCircle, Send, ShieldCheck 
} from 'lucide-react';

// Components
import { Navbar } from './components/Navbar';
import Team from './components/team';
import { About } from './components/About';
import { ProjectForm } from './components/ProjectForm';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { Techalien } from './components/Techalien';
import ServicesPage from './components/ServicesPage';
import { CyberPaymentModal } from './components/CyberPaymentModal';
import { UnlockPortalSection } from './components/UnlockPortalSection';
import { AdminDashboard } from './components/AdminDashboard';

// --- NEW MOBILE-FRIENDLY FOOTER WHATSAPP SECTION ---
const WhatsAppFooterSection = ({ phoneNumber = "919398724704" }) => {
  const handleChat = () => {
    const url = `https://wa.me/${phoneNumber}?text=Hello WayZenTech, I would like to discuss a project!`;
    window.open(url, '_blank');
  };

  return (
    <section className="w-full bg-slate-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={handleChat}
          className="group cursor-pointer relative bg-white border border-slate-200 rounded-[32px] p-6 md:p-10 shadow-xl shadow-slate-200/50 overflow-hidden transition-all hover:border-emerald-400"
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl group-hover:bg-emerald-100 transition-colors" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              {/* WhatsApp Icon */}
              <div className="relative">
                <div className="bg-[#25D366] p-5 rounded-2xl shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle size={38} className="text-white" fill="currentColor" />
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
                </span>
              </div>

              <div>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Online Now</span>
                  <div className="flex items-center gap-1 text-slate-400 text-[10px] font-bold uppercase tracking-tighter">
                    <ShieldCheck size={12} /> Verified Support
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Need instant help? <br className="hidden md:block" /> 
                  <span className="text-emerald-500">Chat with WayZenTech</span>
                </h2>
                <p className="text-slate-500 mt-2 font-medium">
                  We usually respond in less than 5 minutes.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-[#25D366] hover:bg-[#1eb956] text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-emerald-200/50 transition-all active:scale-95">
                Start WhatsApp Chat <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- ADVANCED GRID BACKGROUND ---
const TechGrid = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    <motion.div 
      animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
      transition={{ duration: 8, repeat: Infinity }}
      className="absolute -top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full"
    />
  </div>
);

// SOCIAL FLOW BACKGROUND
const SocialFlowBackground = () => {
  const iconPool = [
    { Icon: Instagram, color: "text-pink-500" },
    { Icon: MessageCircle, color: "text-emerald-500" },
  ];

  const nodes = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => {
      const config = iconPool[Math.floor(Math.random() * iconPool.length)];
      return {
        id: i,
        ...config,
        startX: (Math.random() - 0.5) * 1500,
        startY: (Math.random() - 0.5) * 1500,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
        size: 20 + Math.random() * 30,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-40">
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          initial={{ x: node.startX, y: node.startY, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: [0,0.8,0.8,0], scale: [0.4,1,0.1] }}
          transition={{ duration: node.duration, repeat: Infinity, delay: node.delay }}
          className={`absolute ${node.color}`}
        >
          <node.Icon size={node.size} strokeWidth={1}/>
        </motion.div>
      ))}
    </div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const renderContent = () => {
    if(activeTab === "admin") return <AdminDashboard />;
    if(activeTab === "team") return <Team />;
    if(activeTab === "services") return <ServicesPage />;

    return(
      <motion.div key="home" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        {/* --- HERO SECTION --- */}
        <header className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden bg-slate-50">
          <TechGrid />
          <SocialFlowBackground />
          <div className="relative z-20 max-w-6xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Innovation Hub v2.0</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} 
              className="text-6xl md:text-9xl font-black tracking-tighter text-slate-950"
            >
              WayZen<span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-500">Tech</span>
            </motion.h1>
            
            <motion.p className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium tracking-tight mt-4">
              Architecting high-performance <span className="text-slate-900 font-bold">AI Systems</span> & Software Solutions.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-12">
              <button onClick={() => document.getElementById("request").scrollIntoView({behavior: "smooth"})} className="bg-slate-950 text-white px-10 py-5 rounded-[20px] font-bold transition-all hover:shadow-2xl flex items-center gap-3">
                Start Your Request <ArrowRight size={20} />
              </button>
              <button onClick={() => document.getElementById("activation-portal").scrollIntoView({behavior: "smooth"})} className="bg-white border border-slate-200 px-10 py-5 rounded-[20px] font-bold flex items-center gap-3 hover:bg-slate-50 shadow-sm transition-all">
                <Zap size={20} className="text-blue-600 fill-blue-600" /> Pay & Unlock
              </button>
            </div>
          </div>
        </header>

        <About />
        <Experience />
        <div className="bg-white rounded-t-[60px] overflow-hidden">
          <Portfolio />
        </div>
        <section id="activation-portal" className="py-24 bg-white">
          <UnlockPortalSection upiId="9398724704@ybl" />
        </section>
        <section id="request" className="py-24 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto bg-slate-900 rounded-[50px] overflow-hidden shadow-2xl">
            <ProjectForm />
          </div>
        </section>
      </motion.div>
    );
  };

  return (
    <div className="antialiased font-sans bg-white relative">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
      
      <CyberPaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} upiId="9398724704@ybl" />
      
      {/* 
          WHATSAPP SECTION - PLACED DIRECTLY ABOVE FOOTER 
          Visible only on home content to maintain clean layout 
      */}
      {activeTab === "home" && <WhatsAppFooterSection phoneNumber="919398724704" />}

      <Techalien />

      <footer className="pt-24 pb-12 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-black tracking-tighter uppercase italic">WayZen<span className="text-blue-500">Tech</span></h3>
              <p className="text-slate-400 text-sm">Next-generation software for business.</p>
            </div>
            <div className="space-y-3">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Connect</p>
              <p className="text-slate-100 text-sm flex items-center gap-2"><Mail size={16} className="text-blue-500" /> wayzentech@gmail.com</p>
              <p className="text-slate-100 text-sm flex items-center gap-2"><Phone size={16} className="text-blue-500" /> +91 9398724704</p>
            </div>
            <div className="space-y-4">
              <a href="https://instagram.com/way_zentech" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/5 px-5 py-3 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <Instagram size={18} className="text-pink-500" />
                <span className="text-sm font-bold">@way_zentech</span>
              </a>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 text-center">
            <div className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-black">© 2024 WAYZENTECH SOLUTIONS</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;