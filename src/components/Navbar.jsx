import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Menu, X, Home, Users, Cpu,  Info } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { id: 'home', label: 'Home', path: '/', icon: <Home size={18} /> },
    { id: 'about', label: 'About', path: '/about', icon: <Info size={18} /> },
    { id: 'services', label: 'Services', path: '/services', icon: <Cpu size={18} /> },
    { id: 'team', label: 'Our Team', path: '/team', icon: <Users size={18} /> },
  ];

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/70 backdrop-blur-2xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <motion.div 
          onClick={() => handleNavigation('/')}
          className="cursor-pointer flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-200 shadow-sm flex-shrink-0">
            <img src="logo.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase italic">
            WayZen<span className="text-blue-600">Tech</span>
          </span>
        </motion.div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.path)}
              className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                isActive(link.path) 
                ? "text-blue-600 bg-blue-50" 
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="px-4 border-l border-slate-200 ml-2 flex items-center gap-4">
            <button
              onClick={() => handleNavigation('/admin')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all border-2 ${
                isActive('/admin')
                ? "bg-slate-950 border-slate-950 text-white shadow-2xl"
                : "bg-white border-blue-600 text-blue-600 hover:bg-blue-600"
              }`}
            >
              <ShieldCheck size={14} /> System Access
            </button>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
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
            className="md:hidden bg-white border-b border-slate-200"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link.path)}
                  className={`w-full text-left flex items-center gap-4 p-4 rounded-2xl font-bold ${
                    isActive(link.path) ? "bg-blue-50 text-blue-600" : "bg-slate-50"
                  }`}
                >
                  {link.icon} {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};