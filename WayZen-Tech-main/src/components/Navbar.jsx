import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight, Menu } from 'lucide-react';

export const Navbar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'team', label: 'Our Team' },
    { id: 'services', label: 'Our Service' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6">
      {/* Main Glass Container */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between w-full max-w-7xl px-5 py-2.5 bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] ring-1 ring-slate-900/5"
      >
        
        {/* BRAND / LOGO SECTION */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => setActiveTab('home')}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            {/* The Logo Image - Referencing /logo.png from the public folder */}
            <div className="w-11 h-11 rounded-xl overflow-hidden border border-slate-100 bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
              <img 
                src="/logo.png" 
                alt="WayZen Tech Logo" 
                className="w-full h-full object-contain p-1" // Use object-contain if the logo has text/is rectangular
                onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=W&background=2563eb&color=fff"; }} // Fallback if image fails
              />
            </div>
            
            {/* Subtle Online Status Dot */}
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
          </motion.div>
          
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 leading-none">
              WayZen<span className="text-blue-600">Tech</span>
            </span>
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.15em] uppercase mt-1">
              Innovate Daily
            </span>
          </div>
        </div>

        {/* NAVIGATION LINKS (DESKTOP) */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center bg-slate-100/50 p-1.5 rounded-xl mr-4 border border-slate-200/50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-lg ${
                  activeTab === item.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-white shadow-sm rounded-lg z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="h-6 w-px bg-slate-200 mx-2" />

          {/* INSTAGRAM ICON */}
          <motion.a 
            whileHover={{ y: -2, color: "#E1306C" }}
            href="https://instagram.com/way_zentech" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 text-slate-400 transition-colors"
          >
            <Instagram size={20} />
          </motion.a>

          {/* CTA BUTTON */}
          <motion.a 
            href="#request"
            whileHover={{ scale: 1.02, backgroundColor: '#2563eb' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('home')} 
            className="ml-4 bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-900/10 hover:shadow-blue-500/20"
          >
            Book Appointment
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer text-slate-600">
          <Menu size={24} />
        </div>
      </motion.div>
    </nav>
  );
};