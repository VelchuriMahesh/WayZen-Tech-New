import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, Instagram, Zap, ArrowRight, ChevronDown, 
  Facebook, MessageCircle, Twitter, Linkedin, Youtube, 
  Share2, Globe, Send, ShieldCheck
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
import { WhatsAppUnique } from './components/WhatsAppUnique';

// --- ADVANCED GRID BACKGROUND COMPONENT ---
const TechGrid = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    <motion.div 
      animate={{ 
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.2, 1] 
      }}
      transition={{ duration: 8, repeat: Infinity }}
      className="absolute -top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full"
    />
  </div>
);

// SOCIAL FLOW BACKGROUND
const SocialFlowBackground = () => {
  const iconPool = [
    { Icon: Instagram, color: "text-pink-500" },
    { Icon: Facebook, color: "text-blue-600" },
    { Icon: MessageCircle, color: "text-emerald-500" },
    { Icon: Twitter, color: "text-sky-400" },
    { Icon: Linkedin, color: "text-blue-800" },
    { Icon: Youtube, color: "text-red-600" },
    { Icon: Send, color: "text-cyan-500" },
    { Icon: Share2, color: "text-purple-500" },
    { Icon: Globe, color: "text-slate-400" },
  ];

  const nodes = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => {
      const config = iconPool[Math.floor(Math.random() * iconPool.length)];
      const angle = Math.random() * Math.PI * 2;
      const distance = 800;
      const startX = Math.cos(angle) * distance;
      const startY = Math.sin(angle) * distance;

      return {
        id: i,
        ...config,
        startX,
        startY,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 10,
        size: 20 + Math.random() * 30,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-40">
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          initial={{ x: node.startX, y: node.startY, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, y: 0, opacity: [0,0.8,0.8,0], scale: [0.4,1,0.1], rotate: 360 }}
          transition={{ duration: node.duration, repeat: Infinity, delay: node.delay, ease:"easeIn" }}
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
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Innovation Hub v2.0</span>
            </motion.div>

            {/* Main Title Styling */}
            <div className="relative mb-6">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="text-6xl md:text-9xl font-black tracking-tighter text-slate-950"
              >
                WayZen<span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-500">Tech</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium tracking-tight mt-4"
              >
                Architecting high-performance <span className="text-slate-900 font-bold">AI Systems</span> & Software Solutions.
              </motion.p>
            </div>

            {/* --- ADVANCED ENERGY SPARK CONTAINER --- */}
            <div className="relative w-full max-w-lg mx-auto h-24 flex items-center justify-center">
              <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              
              <div className="relative flex items-center justify-center">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "300px" }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent relative z-20"
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, -50 - (Math.random() * 30)], 
                        x: [0, (Math.random() - 0.5) * 60],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                      }}
                      transition={{ duration: 2 + Math.random(), repeat: Infinity, delay: i * 0.3 }}
                      className="absolute left-1/2 w-1 h-1 bg-blue-500 rounded-full blur-[1px]"
                    />
                  ))}

                  <svg className="absolute inset-0 w-full h-24 overflow-visible pointer-events-none -top-12">
                    <motion.path
                      d="M 60 48 Q 110 10 150 48 T 240 48"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2"
                      animate={{ 
                        pathLength: [0, 1, 0], 
                        opacity: [0, 1, 0, 0.9, 0],
                        x: [-2, 2, 0],
                      }}
                      transition={{ duration: 0.4, repeat: Infinity, repeatDelay: Math.random() * 2 }}
                      className="blur-[1px]"
                    />
                  </svg>
                </motion.div>

                <motion.div 
                  animate={{ opacity: [0.1, 0.4, 0.1], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute w-80 h-20 bg-blue-500/20 blur-[80px] rounded-full z-0"
                />
                
                <motion.div 
                  animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] }}
                  transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 1 }}
                  className="absolute w-2 h-2 bg-white rounded-full z-30 shadow-[0_0_20px_#3b82f6]"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{opacity:0, y:20}} 
              animate={{opacity:1, y:0}} 
              transition={{delay: 0.6}}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8"
            >
              <button 
                onClick={() => document.getElementById("request").scrollIntoView({behavior: "smooth"})} 
                className="group relative overflow-hidden bg-slate-950 text-white px-10 py-5 rounded-[20px] font-bold transition-all hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Request <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button 
                onClick={() => document.getElementById("activation-portal").scrollIntoView({behavior: "smooth"})} 
                className="bg-white border border-slate-200 px-10 py-5 rounded-[20px] font-bold flex items-center gap-3 hover:bg-slate-50 transition-all shadow-sm"
              >
                <Zap size={20} className="text-blue-600 fill-blue-600" /> Pay & Unlock
              </button>
            </motion.div>
          </div>

          <motion.div animate={{y:[0, 8, 0]}} transition={{duration: 2, repeat: Infinity}} className="absolute bottom-8 text-slate-300">
            <ChevronDown size={30} />
          </motion.div>
        </header>

        {/* --- Content Sections --- */}
        <About />
        <Experience />
        <div className="bg-white rounded-t-[60px] shadow-[0_-30px_100px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
          <Portfolio />
        </div>
        <section id="activation-portal" className="py-24 bg-white">
          <UnlockPortalSection upiId="9398724704@ybl" />
        </section>
        <section id="request" className="py-24 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto bg-slate-900 rounded-[50px] overflow-hidden shadow-2xl shadow-blue-900/10">
            <ProjectForm />
          </div>
        </section>
      </motion.div>
    );
  };

  return (
    <div className="antialiased font-sans bg-white relative selection:bg-blue-600 selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
      <CyberPaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} upiId="9398724704@ybl" />
      <WhatsAppUnique phoneNumber="919398724704" />
      <Techalien />

      <footer className="pt-24 pb-12 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-black tracking-tighter uppercase">WayZen<span className="text-blue-500">Tech</span></h3>
              <p className="text-slate-400 text-sm max-w-[200px]">Next-generation software for the next generation of business.</p>
            </div>
            <div className="space-y-3">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Connect</p>
              <p className="text-slate-100 text-sm flex items-center gap-2 font-medium"><Mail size={16} className="text-blue-500" /> wayzentech@gmail.com</p>
              <p className="text-slate-100 text-sm flex items-center gap-2 font-medium"><Phone size={16} className="text-blue-500" /> +91 9398724704</p>
            </div>
            <div className="space-y-4">
              <a href="https://instagram.com/way_zentech" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/5 px-5 py-3 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <Instagram size={18} className="text-pink-500" />
                <span className="text-sm font-bold">@way_zentech</span>
              </a>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-black">© 2025 WAYZENTECH SOLUTIONS</div>
            <button onClick={() => { setActiveTab("admin"); window.scrollTo(0, 0); }} className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-[10px] uppercase font-black tracking-widest group">
              <ShieldCheck size={14} className="group-hover:text-blue-500" /> System Access
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;