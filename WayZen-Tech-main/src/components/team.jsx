import React, { useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Linkedin, Instagram, Zap, Box, Share2 } from 'lucide-react';

const Team = () => {
  const [team, setTeam] = useState([]);
  const containerRef = useRef(null);
  
  // Track scroll for "Drawing" the rope effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  useEffect(() => {
    const fetchTeam = async () => {
      const snap = await getDocs(collection(db, "team"));
      setTeam(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchTeam();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] py-20 relative overflow-hidden">
      
      {/* 1. BACKGROUND TECH GRID */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* 2. THE CENTRAL NEURAL ROPE (SVG) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 z-0">
        <svg className="h-full w-20 -ml-10 overflow-visible">
          {/* Static Background Path */}
          <line x1="40" y1="0" x2="40" y2="100%" stroke="#1e1e1e" strokeWidth="2" />
          
          {/* Animated Glowing Rope */}
          <motion.line 
            x1="40" y1="0" x2="40" y2="100%" 
            stroke="#3b82f6" 
            strokeWidth="3" 
            style={{ pathLength }}
            strokeDasharray="0 1"
          />
          {/* Moving Glow Pulse */}
          <motion.circle r="4" fill="#60a5fa" cx="40">
            <motion.animate 
              attributeName="cy" 
              values="0%;100%" 
              dur="3s" 
              repeatCount="indefinite" 
            />
          </motion.circle>
        </svg>
      </div>

      {/* 3. CONTENT LAYER */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* WAYZEN CORE HUB */}
        <div className="flex flex-col items-center mb-32">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="relative w-24 h-24 md:w-32 md:h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)] border-4 border-white/20"
          >
            <Zap size={40} className="text-white fill-white animate-pulse" />
            {/* Orbital Rings */}
            <div className="absolute inset-0 border border-blue-500 rounded-full animate-ping opacity-20" />
            <div className="absolute -inset-4 border border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
          </motion.div>
          <h2 className="mt-8 text-white text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
            WayZen<span className="text-blue-500">Core</span>
          </h2>
          <div className="text-blue-400 text-[10px] font-bold tracking-[0.5em] uppercase mt-2">Neural Network Active</div>
        </div>

        {/* TEAM BRANCHES */}
        <div className="space-y-40">
          {team.map((member, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={member.id} className="relative flex flex-col items-center">
                
                {/* BRANCH LINE (SVG) */}
                <svg className={`absolute top-0 h-20 w-1/2 overflow-visible pointer-events-none ${isEven ? 'right-1/2' : 'left-1/2'}`}>
                  <motion.path
                    d={isEven 
                      ? "M 100 0 Q 100 40, 0 40" 
                      : "M 0 0 Q 0 40, 100 40"
                    }
                    fill="transparent"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="10,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.4 }}
                    viewport={{ once: true }}
                  />
                </svg>

                {/* MEMBER CARD */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ type: "spring", damping: 20 }}
                  className={`w-full max-w-sm ${isEven ? 'md:mr-auto' : 'md:ml-auto'} group`}
                >
                  <div className="bg-[#0f0f13] border border-white/5 rounded-[2rem] p-3 md:p-4 shadow-2xl relative overflow-hidden transition-all hover:border-blue-500/50">
                    
                    {/* Member Image Area */}
                    <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-6">
                      <img 
                        src={member.img} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-4 left-4 bg-blue-600 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                        {member.role}
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="px-4 pb-4 flex justify-between items-end">
                      <div>
                        <h3 className="text-white text-2xl font-black uppercase tracking-tight italic">
                          {member.name}
                        </h3>
                        <p className="text-slate-500 text-xs mt-1 uppercase font-bold tracking-widest">Node_{index.toString().padStart(2, '0')}</p>
                      </div>

                      {/* Socials */}
                      <div className="flex gap-2">
                        <a href="#" className="w-10 h-10 bg-white/5 hover:bg-blue-600 rounded-xl flex items-center justify-center text-white transition-all">
                          <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/5 hover:bg-pink-600 rounded-xl flex items-center justify-center text-white transition-all">
                          <Instagram size={18} />
                        </a>
                      </div>
                    </div>

                    {/* Tech Corners (Decorative) */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/20 rounded-tr-[2rem]" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/20 rounded-bl-[2rem]" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM TERMINATOR */}
        <div className="flex flex-col items-center mt-40">
           <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)]" />
           <div className="text-slate-700 text-[8px] font-bold uppercase tracking-[1em] mt-8">End of Neural Chain</div>
        </div>
      </div>

    </div>
  );
};

export default Team;