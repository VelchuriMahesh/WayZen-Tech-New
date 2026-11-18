import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, Users, Cpu, Info, MessageSquare, Zap, ArrowRight, Phone, Sparkles 
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { id: 'home', label: 'Home', subtitle: 'Main portal & showcase', path: '/', icon: <Home size={18} /> },
    { id: 'services', label: 'Services', subtitle: 'Web, AI & Software solutions', path: '/services', icon: <Cpu size={18} /> },
    { id: 'about', label: 'About', subtitle: 'Our story & technology vision', path: '/about', icon: <Info size={18} /> },
    { id: 'team', label: 'Our Team', subtitle: 'Engineers & architects', path: '/team', icon: <Users size={18} /> },
  ];

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartProject = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/85 backdrop-blur-2xl border-b border-slate-200/60 shadow-sm transition-all duration-300">
      
      {/* Sleek Animated Top Accent Gradient */}
      <div className="h-[2.5px] w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 opacity-90 animate-gradient" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <motion.div 
          onClick={() => handleNavigation('/')}
          className="cursor-pointer flex items-center gap-2.5 md:gap-3 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-xl overflow-hidden border border-slate-200 shadow-sm flex-shrink-0 bg-white p-0.5 group-hover:border-blue-400 transition-colors">
            <img src="/logo.png" alt="WayZenTech Logo" className="w-full h-full object-contain" />
            <span className="absolute inset-0 rounded-xl ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900 uppercase italic">
            WayZen<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Tech</span>
          </span>
        </motion.div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.path)}
              className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                isActive(link.path) 
                ? "text-blue-600 bg-blue-50 shadow-sm" 
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={handleStartProject}
            className="ml-3 bg-slate-950 text-white hover:bg-blue-600 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-md active:scale-95 flex items-center gap-2"
          >
            <Zap size={13} className="text-yellow-400 fill-yellow-400" />
            <span>Start Project</span>
          </button>
        </div>

        {/* MOBILE TOP BAR ACTIONS */}
        <div className="flex md:hidden items-center gap-2">
          
          {/* Animated WhatsApp Live Pill */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => window.open('https://wa.me/919398724704', '_blank')}
            className="relative px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-sm active:bg-emerald-100 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <MessageSquare size={12} className="text-emerald-600" />
            <span>WhatsApp</span>
          </motion.button>

          {/* Morphing Animated Hamburger Button */}
          <motion.button 
            whileTap={{ scale: 0.88 }}
            onClick={() => setIsOpen(!isOpen)} 
            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200/80 flex flex-col items-center justify-center gap-1.5 transition-colors border border-slate-200/60"
            aria-label="Toggle navigation menu"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="w-5 h-0.5 bg-slate-800 rounded-full origin-center"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-slate-800 rounded-full"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="w-5 h-0.5 bg-slate-800 rounded-full origin-center"
            />
          </motion.button>
        </div>
      </div>

      {/* ANIMATED MOBILE MENU OVERLAY / DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-2xl overflow-hidden"
          >
            <div className="p-5 space-y-2.5">
              
              {/* Menu Links with Staggered Entrance */}
              {navLinks.map((link, idx) => {
                const active = isActive(link.path);
                return (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.25 }}
                    onClick={() => handleNavigation(link.path)}
                    className={`w-full text-left flex items-center justify-between p-3.5 rounded-2xl transition-all ${
                      active 
                      ? "bg-blue-50/90 text-blue-600 border border-blue-200/80 shadow-sm" 
                      : "bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2 rounded-xl ${active ? "bg-blue-600 text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200/60"}`}>
                        {link.icon}
                      </div>
                      <div>
                        <div className="font-bold text-sm tracking-tight">{link.label}</div>
                        <div className="text-[10px] text-slate-400 font-normal">{link.subtitle}</div>
                      </div>
                    </div>
                    <ArrowRight size={16} className={`transition-transform ${active ? "text-blue-600 translate-x-0.5" : "text-slate-400"}`} />
                  </motion.button>
                );
              })}

              {/* Action Buttons in Drawer */}
              <div className="pt-3 grid grid-cols-2 gap-2.5 border-t border-slate-100 mt-2">
                <button
                  onClick={handleStartProject}
                  className="w-full bg-slate-950 active:bg-blue-600 text-white py-3.5 px-3 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Zap size={14} className="text-yellow-400 fill-yellow-400" />
                  <span>Start Project</span>
                </button>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    window.open('https://wa.me/919398724704', '_blank');
                  }}
                  className="w-full bg-emerald-500 active:bg-emerald-600 text-white py-3.5 px-3 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare size={14} />
                  <span>Chat Direct</span>
                </button>
              </div>

              {/* Contact Footer in Drawer */}
              <div className="pt-2 text-center">
                <a 
                  href="tel:+919398724704" 
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 py-1"
                >
                  <Phone size={12} className="text-blue-500" /> Direct Sync: +91 9398724704
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
