import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { Sparkles, Linkedin, Instagram, ShieldAlert } from 'lucide-react';

// --- BACKGROUND ALERT ANIMATION ---
const WayzenAlertBackground = () => {
  const rows = [1, 2, 3, 4, 5]; 
  const text = "WAYZEN WAYZEN WAYZEN WAYZEN WAYZEN WAYZEN WAYZEN ";

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#02020a] pointer-events-none z-0">
      {/* Moving Text Rows */}
      <div className="flex flex-col justify-around h-full opacity-30">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ x: i % 2 === 0 ? "-50%" : "0%" }}
            animate={{ x: i % 2 === 0 ? "0%" : "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap flex select-none"
          >
            <span className="text-[18vw] font-black text-blue-500/20 tracking-tighter leading-none uppercase italic border-text">
              {text}
            </span>
            <span className="text-[18vw] font-black text-blue-500/20 tracking-tighter leading-none uppercase italic border-text">
              {text}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Full Screen Scanning Laser */}
      <motion.div 
        animate={{ translateY: ['-100vh', '100vh'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/40 shadow-[0_0_20px_rgba(59,130,246,0.8)] z-50"
      />
    </div>
  );
};

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const snap = await getDocs(collection(db, "team"));
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTeam(data);
    };
    fetchTeam();
  }, []);

  const marqueeItems = [...team, ...team];

  return (
    <div className="min-h-screen py-20 overflow-hidden relative selection:bg-blue-500">
      
      {/* 1. ANIMATED BACKGROUND */}
      <WayzenAlertBackground />

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10">
        
        {/* HEADER */}
        <div className="max-w-7xl mx-auto mb-16 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-[2px] w-12 bg-blue-600"></span>
              <div className="flex items-center gap-2">
                <ShieldAlert size={14} className="text-blue-500 animate-pulse" />
                <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px]">Active Personnel</span>
              </div>
              <span className="h-[2px] w-12 bg-blue-600"></span>
          </div>
          <h2 className="text-white text-6xl md:text-8xl font-black tracking-tighter uppercase italic">
            WAYZEN <span className="text-blue-500 underline decoration-blue-500/30">CORE</span>
          </h2>
        </div>

        {/* TEAM MARQUEE */}
        <div className="relative w-full overflow-hidden">
          {/* Vignette effect on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-60 bg-gradient-to-r from-black via-black/40 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-60 bg-gradient-to-l from-black via-black/40 to-transparent z-20 pointer-events-none" />

          <motion.div 
            className="flex gap-8 md:gap-12 pr-12 w-max"
            animate={{ x: [0, "-50%"] }} 
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {marqueeItems.map((member, index) => (
              <div key={`${member.id}-${index}`} className="shrink-0 w-[300px] md:w-[400px]">
                <div className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden border-2 border-blue-500/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  
                  {/* FULL COLOR IMAGE (No Grayscale) */}
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* High-Tech Overlay on Image */}
                  <div className="absolute inset-0 bg-blue-950/10 mix-blend-overlay group-hover:bg-transparent transition-colors" />
                  
                  {/* Animated Scanline inside the card */}
                  <motion.div 
                    animate={{ top: ['-10%', '110%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[1px] bg-blue-400/30 z-10"
                  />

                  {/* Gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="relative z-20">
                      <div className="inline-block mb-3 px-4 py-1 bg-blue-600 text-white font-black text-[10px] uppercase tracking-widest skew-x-[-12deg]">
                        {member.role}
                      </div>
                      
                      <h3 className="text-white text-3xl md:text-4xl font-black tracking-tight mb-4 uppercase italic leading-none">
                        {member.name}
                      </h3>

                      <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                         <a href="#" className="p-3 bg-blue-600 hover:bg-white hover:text-blue-600 rounded-lg text-white transition-all shadow-lg">
                            <Linkedin size={20} />
                         </a>
                         <a href="#" className="p-3 bg-blue-600 hover:bg-white hover:text-blue-600 rounded-lg text-white transition-all shadow-lg">
                            <Instagram size={20} />
                         </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM LABEL */}
        <div className="mt-16 text-center relative z-10">
           <div className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600/10 border-2 border-blue-500/40 text-blue-400 rounded-xl">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">Team Promise: We Won’t Disappoint</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Team;