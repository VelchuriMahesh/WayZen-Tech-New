import React, { useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Linkedin, Instagram, Sparkles, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const defaultTeam = [
  {
    id: "lead-01",
    name: "Mahesh Velchuri",
    role: "Founder & Lead Architect",
    bio: "Full-Stack System Architect specializing in reactive MERN architectures, distributed cloud infrastructure, and commercial conversion algorithms.",
    img: "/logo.png",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech",
    specialty: "Distributed Systems & Cloud Architecture"
  },
  {
    id: "lead-02",
    name: "AI & Systems Engine",
    role: "AI & Automation Lead",
    bio: "Pioneering custom LLM model integrations, autonomous WhatsApp customer funnels, and enterprise automation pipelines that cut 70%+ manual tasks.",
    img: "/logo.png",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech",
    specialty: "Neural Workflows & Autonomous Bots"
  },
  {
    id: "lead-03",
    name: "Interface & Experience Lab",
    role: "Principal Product Designer",
    bio: "Architecting high-converting digital interfaces, micro-interaction systems, and brand design guidelines tailored for maximum audience retention.",
    img: "/logo.png",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech",
    specialty: "Micro-Interactions & Conversion UX"
  },
  {
    id: "lead-04",
    name: "Delivery & Operations Desk",
    role: "Head of Engineering Operations",
    bio: "Guaranteed 100% on-time deployment, round-the-clock engineer WhatsApp communication, and dedicated 24/7 post-launch maintenance.",
    img: "/logo.png",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech",
    specialty: "24/7 SLA & Agile Deployment"
  }
];

const Team = () => {
  const navigate = useNavigate();
  const [team, setTeam] = useState(defaultTeam);
  const containerRef = useRef(null);
  
  // Track scroll for drawing the central PivotRoots neural line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const snap = await getDocs(collection(db, "team"));
        if (!snap.empty) {
          const fetchedDocs = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setTeam(fetchedDocs);
        }
      } catch (error) {
        console.warn("Using offline resilient team database:", error);
      }
    };
    fetchTeam();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0101] text-white pt-28 md:pt-36 pb-32 md:pb-28 px-4 md:px-8 relative overflow-hidden font-sans">
      
      {/* 1. PIVOTROOTS ORBITAL SVG MOTIF & BACKGROUND LOGO */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -top-32 -left-32 w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-20" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="360" stroke="#cdd32c" strokeWidth="1" strokeDasharray="8 8" className="animate-make-line" />
          <circle cx="400" cy="400" r="220" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.2" />
        </svg>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#cdd32c]/5 rounded-full blur-[140px]" />

        {/* PROMINENT BACKGROUND LOGO - VISIBLE IN MOBILE & WEB */}
        <div className="absolute top-16 sm:top-24 md:top-28 left-1/2 -translate-x-1/2 w-[300px] sm:w-[480px] md:w-[700px] aspect-[1024/847] pointer-events-none z-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#cdd32c]/15 rounded-full blur-[70px] md:blur-[120px] pointer-events-none scale-75" />
          <img 
            src="/logo-watermark.png" 
            alt="WayZenTech Background Logo" 
            className="w-full h-full object-contain opacity-25 sm:opacity-20 md:opacity-22 filter drop-shadow-[0_0_35px_rgba(205,211,44,0.2)] select-none"
          />
        </div>
      </div>

      {/* 2. THE CENTRAL NEURAL SPINE (SVG) */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-48 bottom-24 w-1 z-0 pointer-events-none">
        <svg className="h-full w-20 -ml-10 overflow-visible">
          <line x1="40" y1="0" x2="40" y2="100%" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="4 4" />
          
          <motion.line 
            x1="40" y1="0" x2="40" y2="100%" 
            stroke="#cdd32c" 
            strokeWidth="3" 
            style={{ pathLength }}
            strokeDasharray="0 1"
          />
          <motion.circle r="5" fill="#cdd32c" cx="40">
            <motion.animate 
              attributeName="cy" 
              values="0%;100%" 
              dur="4s" 
              repeatCount="indefinite" 
            />
          </motion.circle>
        </svg>
      </div>

      {/* 3. CONTENT LAYER */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <header className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cdd32c]/10 border border-[#cdd32c]/30 text-[#cdd32c] text-[10px] md:text-xs font-mono font-black uppercase tracking-widest mb-4">
            <Sparkles size={12} />
            <span>[ WAYZEN_FOUNDRY / CORE_ENGINEERS ]</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] text-white">
            THE ARCHITECTS OF <br />
            <span className="text-[#cdd32c]">NEXT-GEN TECH.</span>
          </h1>

          <p className="text-slate-400 mt-5 text-sm md:text-lg font-light leading-relaxed">
            No bloated account management. You collaborate directly with principal systems engineers, AI specialists, and digital product builders.
          </p>
        </header>

        {/* WAYZEN CORE ORBITAL HUB */}
        <div className="flex flex-col items-center mb-24 md:mb-32">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="relative w-28 h-28 md:w-36 md:h-36 bg-[#cdd32c] text-[#0a0101] rounded-full flex flex-col items-center justify-center shadow-[0_0_60px_rgba(205,211,44,0.4)] border-4 border-white/20"
          >
            <span className="text-2xl md:text-3xl font-black tracking-tighter font-mono">01</span>
            <span className="text-[9px] font-mono font-black uppercase tracking-widest mt-1">FOUNDRY</span>
            
            {/* Spinning Orbital Rings */}
            <div className="absolute -inset-4 border border-[#cdd32c]/40 rounded-full animate-[spin_12s_linear_infinite] border-dashed" />
            <div className="absolute -inset-8 border border-white/10 rounded-full" />
          </motion.div>
          
          <h2 className="mt-8 text-white text-3xl md:text-5xl font-black uppercase tracking-tight">
            WayZen<span className="text-[#cdd32c]">Foundry</span>
          </h2>
          <div className="text-slate-400 text-[11px] font-mono font-bold tracking-[0.3em] uppercase mt-2">
            100% In-House Engineering & Delivery
          </div>
        </div>

        {/* TEAM MEMBERS GRID */}
        <div className="space-y-16 md:space-y-28">
          {team.map((member, index) => {
            const isEven = index % 2 === 0;
            const indexStr = (index + 1).toString().padStart(2, '0');

            return (
              <div key={member.id} className="relative flex flex-col items-center">
                
                {/* Horizontal branch line to central spine */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 border-t border-dashed border-[#cdd32c]/40 ${
                  isEven ? 'right-1/2 w-28' : 'left-1/2 w-28'
                }`} />

                {/* MEMBER CARD */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-80px", once: true }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className={`w-full max-w-md ${isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} group`}
                >
                  <div className="bg-[#141419] border border-white/10 rounded-[28px] p-6 md:p-8 shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-[#cdd32c]/60 hover:shadow-[0_15px_40px_rgba(205,211,44,0.12)]">
                    
                    {/* Watermark Numeral */}
                    <div className="absolute top-4 right-6 text-5xl font-black font-mono text-white/5 select-none pointer-events-none group-hover:text-[#cdd32c]/10 transition-colors">
                      {indexStr}
                    </div>

                    {/* Member Top Bar: Role & Tag */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cdd32c]/10 border border-[#cdd32c]/30 text-[#cdd32c] text-[10px] font-mono font-black uppercase tracking-wider">
                        <ShieldCheck size={11} />
                        {member.role || "Core Engineer"}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                        Node_{indexStr}
                      </span>
                    </div>

                    {/* Member Name & Specialty */}
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-2">
                      {member.name}
                    </h3>
                    
                    <p className="text-xs font-mono text-[#cdd32c] uppercase tracking-wider mb-4">
                      {member.specialty || "High-Performance Systems"}
                    </p>

                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light mb-6">
                      {member.bio || "Dedicated systems specialist driving commercial execution and client technical architecture."}
                    </p>

                    {/* Bottom Action Bar */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <button
                        onClick={() => window.open('https://wa.me/919398724704', '_blank')}
                        className="text-[11px] font-black uppercase tracking-wider text-slate-400 group-hover:text-white transition-colors flex items-center gap-1.5"
                      >
                        <MessageCircle size={14} className="text-[#cdd32c]" />
                        <span>Direct Sync</span>
                      </button>

                      <div className="flex gap-2">
                        <a 
                          href={member.linkedin || "https://linkedin.com"} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="LinkedIn Profile"
                          className="w-9 h-9 bg-white/5 hover:bg-[#cdd32c] hover:text-[#0a0101] rounded-xl flex items-center justify-center text-white transition-all border border-white/10"
                        >
                          <Linkedin size={15} />
                        </a>
                        <a 
                          href={member.instagram || "https://instagram.com/way_zentech"} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="Instagram Profile"
                          className="w-9 h-9 bg-white/5 hover:bg-[#cdd32c] hover:text-[#0a0101] rounded-xl flex items-center justify-center text-white transition-all border border-white/10"
                        >
                          <Instagram size={15} />
                        </a>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="mt-28 text-center bg-[#101014] border border-white/10 rounded-[32px] p-8 md:p-14 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
              Ready to collaborate with our engineering desk?
            </h3>
            <p className="text-slate-400 text-sm md:text-base font-light">
              Get direct developer access. No sales middlemen. Start your web, software, or AI automation project today.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' }), 300);
                }}
                className="bg-[#cdd32c] hover:bg-white text-[#0a0101] px-8 py-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#cdd32c]/20"
              >
                <span>Start Project Request</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => window.open('https://wa.me/919398724704', '_blank')}
                className="bg-white/10 hover:bg-[#25D366] hover:text-black text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Lead Engineer</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
