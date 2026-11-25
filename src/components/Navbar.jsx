import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, MessageSquare, Instagram, ArrowUpRight, 
  MapPin, Zap 
} from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [socialToggle, setSocialToggle] = useState(0); // 0 = WhatsApp, 1 = Instagram
  const navigate = useNavigate();
  const location = useLocation();

  // Rotate top-right social pill every 4 seconds (like PivotRoots)
  useEffect(() => {
    const timer = setInterval(() => {
      setSocialToggle((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Lock body scroll when full-screen menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { num: '01', label: 'Home', subtitle: 'The Strategic Launchpad', path: '/' },
    { num: '02', label: 'Services', subtitle: 'Web, AI & Software Solutions', path: '/services' },
    { num: '03', label: 'About', subtitle: 'Our Origin & Engineering Philosophy', path: '/about' },
    { num: '04', label: 'Our Team', subtitle: 'Systems Architects & Developers', path: '/team' },
    { num: '05', label: 'What is WayZenTech?', subtitle: 'Meaning & Three Pillars', path: '/what-is-wayzentech' },
  ];

  const handleNav = (path) => {
    navigate(path);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartProject = () => {
    setIsOpen(false);
    const req = document.getElementById('request');
    if (req) {
      req.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
  };

  return (
    <>
      {/* FIXED TOP HEADER */}
      <header className="fixed top-0 left-0 w-full z-[999] transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-18 md:h-22 flex items-center justify-between">
          
          {/* BRAND LOGO */}
          <motion.div 
            onClick={() => handleNav('/')}
            className="cursor-pointer flex items-center gap-3 group select-none"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl overflow-hidden border border-slate-200 shadow-sm flex-shrink-0 bg-white p-0.5 group-hover:border-[#cdd32c] transition-colors">
              <img src="/logo.png" alt="WayZenTech" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-[#0a0101] uppercase italic">
              WAYZEN<span className="text-[#cdd32c] drop-shadow-sm">TECH</span>
            </span>
          </motion.div>

          {/* RIGHT ACTIONS: ROTATING SOCIAL PILL + PIVOTROOTS 4-LINE ASYMMETRICAL HAMBURGER */}
          <div className="flex items-center gap-3 sm:gap-6">
            
            {/* PIVOTROOTS ROTATING SOCIAL PILL */}
            <div className="relative h-9 overflow-hidden">
              <AnimatePresence mode="wait">
                {socialToggle === 0 ? (
                  <motion.button
                    key="whatsapp"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => window.open('https://wa.me/919398724704', '_blank')}
                    className="h-9 px-3.5 sm:px-4 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#075e54] text-[10px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-2 hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
                    </span>
                    <MessageSquare size={13} />
                    <span className="hidden sm:inline">WhatsApp Live</span>
                    <span className="sm:hidden">WhatsApp</span>
                  </motion.button>
                ) : (
                  <motion.button
                    key="instagram"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => window.open('https://instagram.com/way_zentech', '_blank')}
                    className="h-9 px-3.5 sm:px-4 rounded-full bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 border border-pink-500/30 text-pink-700 text-[10px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-600 hover:text-white transition-all shadow-sm"
                  >
                    <Instagram size={13} />
                    <span>@way_zentech</span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* PIVOTROOTS ASYMMETRICAL 4-LINE HAMBURGER BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-12 h-10 flex flex-col justify-between py-1 items-end cursor-pointer group focus:outline-none z-[1001]"
              aria-label="Toggle Navigation Drawer"
            >
              {/* Line 1: 40px width -> rotates 45deg */}
              <motion.span
                animate={isOpen ? { rotate: 45, y: 12, width: 36, backgroundColor: '#0a0101' } : { rotate: 0, y: 0, width: 40, backgroundColor: '#0a0101' }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="h-[2.5px] rounded-full origin-center"
              />

              {/* Line 2: 22px width -> slides off-canvas left */}
              <motion.span
                animate={isOpen ? { x: -50, opacity: 0 } : { x: 0, opacity: 1, width: 22, backgroundColor: '#0a0101' }}
                transition={{ duration: 0.25 }}
                className="h-[2.5px] rounded-full"
              />

              {/* Line 3: 40px width -> rotates -45deg */}
              <motion.span
                animate={isOpen ? { rotate: -45, y: -12, width: 36, backgroundColor: '#0a0101' } : { rotate: 0, y: 0, width: 40, backgroundColor: '#0a0101' }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="h-[2.5px] rounded-full origin-center"
              />

              {/* Line 4: 18px width -> slides off-canvas left */}
              <motion.span
                animate={isOpen ? { x: -50, opacity: 0 } : { x: 0, opacity: 1, width: 18, backgroundColor: '#0a0101' }}
                transition={{ duration: 0.25 }}
                className="h-[2.5px] rounded-full"
              />
            </button>

          </div>

        </div>
      </header>

      {/* FULL-SCREEN PIVOTROOTS-INSPIRED NAVIGATION DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 95% 40px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 95% 40px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 95% 40px)" }}
            transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
            className="fixed inset-0 z-[998] bg-[#cdd32c] text-[#0a0101] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto select-none pt-24 md:pt-32"
          >
            {/* Background Dotted Orbital Contour */}
            <svg className="absolute -left-20 -top-20 w-[500px] h-[500px] pointer-events-none opacity-20" viewBox="0 0 500 500">
              <circle cx="250" cy="250" r="230" fill="none" stroke="#0a0101" strokeWidth="2" strokeDasharray="10 10" className="animate-make-line" />
            </svg>

            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start relative z-10">
              
              {/* LEFT COLUMN: PIVOTROOTS-STYLE STACKED 900-WEIGHT NAVIGATION LINKS */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <div className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-[0.3em] text-[#0a0101]/60 mb-6">
                  WayZenTech Navigation // Index
                </div>

                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.num}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.06, duration: 0.4 }}
                      onClick={() => handleNav(link.path)}
                      className="group cursor-pointer block border-b border-[#0a0101]/15 pb-3 sm:pb-4"
                    >
                      <div className="flex items-baseline gap-3 sm:gap-6">
                        <span className="text-xs sm:text-sm font-mono font-black text-[#0a0101]/40">
                          {link.num}
                        </span>
                        
                        <div className="flex-1">
                          <div className={`text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight transition-all duration-300 ${
                            isActive 
                              ? "text-[#0a0101] underline decoration-[#0a0101] decoration-4" 
                              : "text-[#0a0101]/85 group-hover:text-[#0a0101] group-hover:translate-x-2"
                          }`}>
                            {link.label}
                          </div>

                          {/* PIVOTROOTS TRACKING-COLLAPSE BRACKETED SUBTITLE ON HOVER */}
                          <div className="text-[10px] sm:text-xs font-mono text-[#0a0101]/60 uppercase tracking-[6px] group-hover:tracking-normal transition-all duration-300 mt-1 font-bold">
                            [ {link.subtitle} ]
                          </div>
                        </div>

                        <ArrowUpRight size={22} className="text-[#0a0101]/30 group-hover:text-[#0a0101] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* RIGHT COLUMN: REGIONAL HUBS + DIRECT SYNC */}
              <div className="lg:col-span-5 space-y-8 bg-[#0a0101] text-white p-6 sm:p-8 rounded-3xl shadow-2xl">
                
                <div>
                  <div className="inline-flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-[0.25em] text-[#cdd32c] mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cdd32c] animate-ping" />
                    Engineering HQ & Hubs
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase">
                    Connect Directly with Engineers
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Zero bureaucracy. Talk with core full-stack architects and AI engineers ready to build your vision.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-3 text-slate-300">
                    <MapPin size={15} className="text-[#cdd32c]" />
                    <span>Hyderabad (HQ) • Vijayawada • Bangalore • Global Remote</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 font-bold">
                    <Phone size={15} className="text-[#cdd32c]" />
                    <span>+91 9398724704</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 italic">
                    <Mail size={15} className="text-[#cdd32c]" />
                    <span>wayzentech@gmail.com</span>
                  </div>
                </div>

                {/* ACTION BUTTONS IN DRAWER */}
                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    onClick={handleStartProject}
                    className="w-full py-4 rounded-xl bg-[#cdd32c] text-[#0a0101] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-lg"
                  >
                    <Zap size={14} className="fill-[#0a0101]" />
                    <span>Start Project Request</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsOpen(false);
                      window.open('https://wa.me/919398724704', '_blank');
                    }}
                    className="w-full py-4 rounded-xl bg-white/10 hover:bg-[#25D366] hover:text-black border border-white/20 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp Direct Desk</span>
                  </button>
                </div>

              </div>

            </div>

            {/* DRAWER FOOTER QUOTE */}
            <div className="max-w-6xl mx-auto w-full pt-8 border-t border-[#0a0101]/20 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#0a0101]/70">
              <span>“The Way to the Next Generation of Technology.”</span>
              <span>© {new Date().getFullYear()} WayZenTech Collective</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
