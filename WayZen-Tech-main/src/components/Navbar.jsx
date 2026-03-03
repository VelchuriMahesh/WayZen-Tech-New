import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Menu, X, Home, Users, Cpu, Instagram } from 'lucide-react';

export const Navbar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'services', label: 'Services', icon: <Cpu size={18} /> },
    { id: 'team', label: 'Our Team', icon: <Users size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/70 backdrop-blur-2xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <motion.div 
          onClick={() => { setActiveTab("home"); window.scrollTo(0,0); }}
          className="cursor-pointer flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          {/* logo.jpg integrated here */}
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-200 shadow-sm flex-shrink-0">
            <img 
              src="logo.png" 
              alt="WayZen Logo" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = "https://via.placeholder.com/40"; }} // Fallback if image is missing
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase italic">
            WayZen<span className="text-blue-600">Tech</span>
          </span>
        </motion.div>

        {/* DESKTOP LINKS & SOCIALS */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { setActiveTab(link.id); window.scrollTo(0,0); }}
              className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                activeTab === link.id 
                ? "text-blue-600 bg-blue-50" 
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* INSTAGRAM ICON LINK */}
          <div className="px-4 border-l border-slate-200 ml-2 flex items-center gap-4">
            <motion.a 
              href="https://www.instagram.com/way_zentech/" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-slate-400 hover:text-pink-600 transition-colors"
            >
              <Instagram size={22} />
            </motion.a>

            {/* THE SYSTEM ACCESS BUTTON */}
            <button
              onClick={() => { setActiveTab("admin"); window.scrollTo(0,0); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all border-2 ${
                activeTab === "admin"
                ? "bg-slate-950 border-slate-950 text-white shadow-2xl"
                : "bg-white border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <ShieldCheck size={14} className={activeTab === "admin" ? "animate-pulse" : ""} />
              System Access
            </button>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="flex items-center gap-4 md:hidden">
            <a href="https://www.instagram.com/way_zentech/" target="_blank" rel="noreferrer" className="text-slate-400">
                <Instagram size={24} />
            </a>
            <button className="text-slate-900" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { setActiveTab(link.id); setIsOpen(false); window.scrollTo(0,0); }}
                  className="w-full text-left flex items-center gap-4 p-4 rounded-2xl bg-slate-50 text-slate-900 font-bold"
                >
                  {link.icon} {link.label}
                </button>
              ))}
              
              <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://www.instagram.com/way_zentech/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-pink-50 text-pink-600 font-bold"
                  >
                    <Instagram size={20} /> Instagram
                  </a>
                  <button
                    onClick={() => { setActiveTab("admin"); setIsOpen(false); window.scrollTo(0,0); }}
                    className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-slate-950 text-white font-bold text-xs"
                  >
                    <ShieldCheck size={18} /> Admin
                  </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};