import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Users, Cpu, Info, MessageSquare } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-2xl border-b border-slate-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <motion.div 
          onClick={() => handleNavigation('/')}
          className="cursor-pointer flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-200 shadow-sm flex-shrink-0">
            <img src="/logo.png" alt="WayZenTech Official Logo" className="w-full h-full object-cover" />
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

          <button
            onClick={() => {
              if (location.pathname === '/') {
                document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/');
                setTimeout(() => document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' }), 300);
              }
            }}
            className="ml-4 bg-slate-950 text-white hover:bg-blue-600 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-md active:scale-95"
          >
            Start Project
          </button>
        </div>

        {/* MOBILE TOP CTA */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => window.open('https://wa.me/919398724704', '_blank')}
            className="bg-emerald-500 text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
          >
            <MessageSquare size={12} /> WhatsApp
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-700">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 shadow-xl"
          >
            <div className="p-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link.path)}
                  className={`w-full text-left flex items-center gap-4 p-3.5 rounded-2xl font-bold transition-colors ${
                    isActive(link.path) ? "bg-blue-50 text-blue-600" : "bg-slate-50 text-slate-700"
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