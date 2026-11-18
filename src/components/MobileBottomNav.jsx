import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Cpu, Info, MessageCircle, Zap } from 'lucide-react';

export const MobileBottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartRequest = () => {
    if (location.pathname === '/') {
      document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[95] pointer-events-none">
      
      {/* Bottom Floating Bar Shell */}
      <div className="pointer-events-auto bg-white/95 backdrop-blur-2xl border-t border-slate-200/80 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] px-2 pt-1 pb-3 pb-safe">
        <div className="flex items-center justify-between max-w-sm mx-auto relative px-1">
          
          {/* 1. HOME BUTTON */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => handleNav('/')}
            className={`flex-1 flex flex-col items-center justify-center py-1 transition-colors ${
              isActive('/') ? 'text-blue-600' : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            <div className={`p-1.5 rounded-xl transition-all ${isActive('/') ? 'bg-blue-50 text-blue-600 shadow-sm' : ''}`}>
              <Home size={19} strokeWidth={isActive('/') ? 2.5 : 1.9} />
            </div>
            <span className={`text-[10px] font-bold tracking-tight uppercase mt-0.5 ${isActive('/') ? 'text-blue-600 font-black' : 'text-slate-500'}`}>
              Home
            </span>
          </motion.button>

          {/* 2. SERVICES BUTTON */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => handleNav('/services')}
            className={`flex-1 flex flex-col items-center justify-center py-1 transition-colors ${
              isActive('/services') ? 'text-blue-600' : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            <div className={`p-1.5 rounded-xl transition-all ${isActive('/services') ? 'bg-blue-50 text-blue-600 shadow-sm' : ''}`}>
              <Cpu size={19} strokeWidth={isActive('/services') ? 2.5 : 1.9} />
            </div>
            <span className={`text-[10px] font-bold tracking-tight uppercase mt-0.5 ${isActive('/services') ? 'text-blue-600 font-black' : 'text-slate-500'}`}>
              Services
            </span>
          </motion.button>

          {/* 3. MIDDLE HIGHLIGHTED CENTERPIECE BUTTON (REQUEST / START) */}
          <div className="flex-1 flex flex-col items-center justify-center -mt-6 relative">
            <motion.button
              whileTap={{ scale: 0.88 }}
              whileHover={{ scale: 1.05 }}
              onClick={handleStartRequest}
              className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,99,235,0.48)] border-4 border-white cursor-pointer active:shadow-[0_4px_15px_rgba(37,99,235,0.6)]"
              aria-label="Start Project Request"
            >
              {/* Pulsing Ambient Ring */}
              <span className="absolute -inset-1 rounded-full bg-blue-500/30 animate-ping opacity-40 pointer-events-none" />
              
              <Zap size={22} className="text-white fill-yellow-300 drop-shadow" />
            </motion.button>
            <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase mt-1">
              Request
            </span>
          </div>

          {/* 4. ABOUT BUTTON */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => handleNav('/about')}
            className={`flex-1 flex flex-col items-center justify-center py-1 transition-colors ${
              isActive('/about') ? 'text-blue-600' : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            <div className={`p-1.5 rounded-xl transition-all ${isActive('/about') ? 'bg-blue-50 text-blue-600 shadow-sm' : ''}`}>
              <Info size={19} strokeWidth={isActive('/about') ? 2.5 : 1.9} />
            </div>
            <span className={`text-[10px] font-bold tracking-tight uppercase mt-0.5 ${isActive('/about') ? 'text-blue-600 font-black' : 'text-slate-500'}`}>
              About
            </span>
          </motion.button>

          {/* 5. WHATSAPP / CHAT BUTTON */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => window.open('https://wa.me/919398724704', '_blank')}
            className="flex-1 flex flex-col items-center justify-center py-1 text-emerald-600 hover:text-emerald-700 relative"
          >
            <div className="p-1.5 rounded-xl bg-emerald-50 text-emerald-600 relative">
              <MessageCircle size={19} strokeWidth={2.3} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>
            <span className="text-[10px] font-bold tracking-tight uppercase mt-0.5 text-emerald-600">
              Chat
            </span>
          </motion.button>

        </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;
