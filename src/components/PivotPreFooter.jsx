import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PivotPreFooter = () => {
  const navigate = useNavigate();

  const handleStartProject = () => {
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
    <section className="relative w-full bg-[#cdd32c] text-[#0a0101] py-14 sm:py-20 md:py-24 px-6 overflow-hidden select-none">
      {/* Background Dotted Orbital Contour */}
      <svg className="absolute -right-20 -bottom-20 w-[400px] h-[400px] pointer-events-none opacity-20" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="180" fill="none" stroke="#0a0101" strokeWidth="2" strokeDasharray="8 8" className="animate-make-line" />
      </svg>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
        
        {/* Left Side: Statement */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-black uppercase tracking-[0.3em] text-[#0a0101]/70 mb-3">
            <Zap size={14} className="fill-[#0a0101] text-[#0a0101]" />
            Launchpad Protocol // Next-Gen Sync
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-[#0a0101] leading-none mb-4">
            HAVE A PRODUCT TO <span className="underline decoration-[#0a0101]/40">ENGINEER?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-light text-[#0a0101]/80 leading-relaxed">
            Talk directly with our core engineering foundry. No sales layers, no fluff — only pure architecture, clean code, and market dominance.
          </p>
        </div>

        {/* Right Side: Action Trigger Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full md:w-auto">
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleStartProject}
            className="px-8 py-4 sm:py-5 rounded-2xl bg-[#0a0101] text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl hover:bg-black transition-all"
          >
            <span>Start Your Project</span>
            <ArrowUpRight size={18} className="text-[#cdd32c]" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => window.open('https://wa.me/919398724704', '_blank')}
            className="px-8 py-4 sm:py-5 rounded-2xl bg-white/70 hover:bg-white text-[#0a0101] border-2 border-[#0a0101]/20 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all shadow-sm"
          >
            <MessageCircle size={16} />
            <span>WhatsApp Dev Desk</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
};
