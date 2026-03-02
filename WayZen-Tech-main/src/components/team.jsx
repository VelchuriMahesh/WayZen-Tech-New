import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { Sparkles, Linkedin, Instagram, ArrowDown } from 'lucide-react';

// ✅ FIX: Move outside to resolve ESLint dependency warning
const ROLE_PRIORITY = {
  "co-founder": 1,
  "ceo": 2,
  "founder": 3,
  "cto": 4,
  "creative director": 5,
  "manager": 6,
  "developer": 7
};

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const snap = await getDocs(collection(db, "team"));
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      const sortedData = data.sort((a, b) => {
        const priorityA = ROLE_PRIORITY[a.role?.toLowerCase()] || 99;
        const priorityB = ROLE_PRIORITY[b.role?.toLowerCase()] || 99;
        return priorityA - priorityB;
      });

      setTeam(sortedData);
    };
    fetchTeam();
  }, []); // Safely empty

  return (
    <div className="bg-[#02020a] min-h-screen py-16 md:py-24 px-4 md:px-6 overflow-hidden relative selection:bg-indigo-500">
      
      {/* --- VIBRANT TECH BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[-10%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-600/20 blur-[100px] md:blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-fuchsia-600/20 blur-[100px] md:blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto mb-16 md:mb-20 relative z-10 text-center md:text-left px-4">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <span className="h-[1px] w-12 bg-indigo-500"></span>
            <span className="text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Our Visionaries</span>
        </div>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white text-5xl md:text-8xl font-black tracking-tighter leading-none"
        >
          MEET THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400">
            CREATIVES
          </span>
        </motion.h2>
      </div>

      {/* --- TEAM GRID / STACK --- */}
      {/* On mobile: Vertical Reveal Stack | On Desktop: Horizontal Scroll */}
      <div className="relative z-10 flex flex-col md:flex-row md:flex-nowrap gap-12 md:gap-8 overflow-x-hidden md:overflow-x-auto no-scrollbar pb-24 pt-5 md:snap-x md:snap-mandatory px-2 md:px-4 cursor-grab active:cursor-grabbing">
        {team.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="md:snap-center shrink-0 w-full md:w-[420px]"
          >
            <div className="group relative aspect-[4/5] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-slate-900/40 backdrop-blur-md border border-white/10 shadow-2xl">
              
              {/* MOVING PHOTO (Ken Burns Effect) */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  x: [0, -10, 0],
                  y: [0, -5, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* HEAVY GRADIENT OVERLAY (Protects Text Visibility) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#02020a] via-[#02020a]/40 to-transparent opacity-90 group-hover:via-indigo-900/30 transition-all duration-500" />

              {/* Content Box */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="relative z-20">
                  
                  {/* GLASS ROLE BADGE: Ensures CEO/Role is always visible */}
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-xl bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30">
                    <Sparkles size={14} className="text-indigo-400" />
                    <p className="text-indigo-300 font-black text-[10px] md:text-xs uppercase tracking-[0.2em]">
                        {member.role}
                    </p>
                  </div>
                  
                  <h3 className="text-white text-4xl md:text-5xl font-black tracking-tighter mb-6 group-hover:text-indigo-200 transition-colors">
                    {member.name}
                  </h3>

                  {/* Social Action Bar */}
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500">
                     <button className="p-4 bg-white/10 hover:bg-indigo-600 backdrop-blur-md rounded-2xl text-white transition-all shadow-xl">
                        <Linkedin size={20} />
                     </button>
                     <button className="p-4 bg-white/10 hover:bg-fuchsia-600 backdrop-blur-md rounded-2xl text-white transition-all shadow-xl">
                        <Instagram size={20} />
                     </button>
                     <div className="h-[1px] flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Floating Index Number */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-inner">
                 <span className="text-indigo-300 font-mono text-sm font-black">
                    /0{index + 1}
                 </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER ACCENT */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-indigo-500/30 font-black tracking-widest text-[10px] uppercase relative z-10 mt-10">
         <div className="flex items-center gap-2">
            <p className="hidden md:block">Drag to explore</p>
            <p className="md:hidden">Scroll to discover</p>
            <ArrowDown size={14} className="md:hidden animate-bounce" />
         </div>
         <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping delay-75"></div>
            <div className="w-2 h-2 rounded-full bg-fuchsia-500 animate-ping delay-150"></div>
         </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Team;