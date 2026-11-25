import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Linkedin, Instagram, Sparkles, ArrowRight, ShieldCheck, 
  MessageCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const defaultTeam = [
  {
    id: "lead-01",
    num: "01",
    name: "Mahesh Velchuri",
    role: "Founder & Lead Systems Architect",
    category: "systems",
    status: "ONLINE // HYDERABAD_HQ",
    headline: "Architecting high-throughput MERN systems, reactive frontends & distributed cloud backends.",
    bio: "Pioneering commercial-grade software architectures that combine sub-second execution with rigorous SEO engineering. Direct engineer collaboration without bureaucratic intermediaries.",
    stacks: ["React", "Node.js", "Python", "Next.js", "MongoDB", "Distributed Cloud"],
    impact: "65+ Production Deployments • < 0.8s Latency",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech"
  },
  {
    id: "lead-02",
    num: "02",
    name: "AI & Neural Systems Desk",
    role: "Lead AI & Automation Architect",
    category: "ai",
    status: "ACTIVE // BOT_ROUTING",
    headline: "Custom LLMs, autonomous WhatsApp business agents & self-healing workflows.",
    bio: "Specializing in OpenAI and Groq model pipelines, multi-step agentic workflows, and automated customer qualification engines that eliminate 70%+ manual operations.",
    stacks: ["LLM Pipelines", "OpenAI / Groq", "WhatsApp Business API", "Vector DBs", "FastAPI"],
    impact: "70% Manual Work Reduced • 24/7 Zero Latency",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech"
  },
  {
    id: "lead-03",
    num: "03",
    name: "Interface & Experience Lab",
    role: "Principal Product & Interaction Designer",
    category: "ux",
    status: "ONLINE // DESIGN_FOUNDRY",
    headline: "Sensory UI/UX, micro-interactions & conversion-optimized visual design systems.",
    bio: "Designing interfaces that stop the scroll and drive commercial conversion. Harmonizing extreme typography contrast with silky smooth 60fps micro-animations.",
    stacks: ["Figma Systems", "Framer Motion", "Tailwind CSS", "Micro-Interactions", "Design Systems"],
    impact: "3.2x Higher Interaction • Native 60fps Fluidity",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech"
  },
  {
    id: "lead-04",
    num: "04",
    name: "Deployment & Operations Desk",
    role: "Head of Engineering Operations & SLA",
    category: "ops",
    status: "ONLINE // 24/7_SUPPORT",
    headline: "Guaranteed 100% on-time deployment, round-the-clock developer WhatsApp sync & SLA uptime.",
    bio: "Ensuring zero-downtime migrations, automated CI/CD deployment pipelines, and continuous monitoring. You get a dedicated developer WhatsApp line from day one.",
    stacks: ["CI/CD Pipelines", "Vercel / AWS", "Docker", "SLA Monitoring", "GitHub Actions"],
    impact: "100% On-Time Delivery • 24/7 Instant Sync",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/way_zentech"
  }
];

const categories = [
  { id: "all", label: "All Architects", count: "04" },
  { id: "systems", label: "Systems & Cloud", count: "01" },
  { id: "ai", label: "AI & Automation", count: "01" },
  { id: "ux", label: "UI/UX & Product", count: "01" },
  { id: "ops", label: "Operations & SLA", count: "01" }
];

const principles = [
  {
    num: "01",
    title: "Direct Engineer Sync",
    desc: "No account managers playing telephone. You communicate directly with the software engineer typing your code on WhatsApp."
  },
  {
    num: "02",
    title: "Commercial-First Architecture",
    desc: "Every line of code is measured by tangible business outcomes: page load speeds, SEO domination, and conversion rates."
  },
  {
    num: "03",
    title: "Continuous Live Staging",
    desc: "Interactive staging links delivered throughout development. Test features in real-time before production rollout."
  },
  {
    num: "04",
    title: "100% Code Sovereignty",
    desc: "Full Git repository ownership, clean documentation, zero locked-in recurring maintenance traps."
  }
];

const Team = () => {
  const navigate = useNavigate();
  const [team, setTeam] = useState(defaultTeam);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const snap = await getDocs(collection(db, "team"));
        if (!snap.empty) {
          const fetchedDocs = snap.docs.map((doc, idx) => ({
            id: doc.id,
            num: (idx + 1).toString().padStart(2, '0'),
            name: doc.data().name || "Core Architect",
            role: doc.data().role || "Systems Engineer",
            category: doc.data().category || "systems",
            status: "ONLINE // VERIFIED",
            headline: doc.data().specialty || "High-performance systems engineering.",
            bio: doc.data().bio || "Dedicated systems specialist driving commercial execution and client technical architecture.",
            stacks: doc.data().stacks || ["React", "Node.js", "Cloud"],
            impact: doc.data().impact || "Production Verified",
            linkedin: doc.data().linkedin || "https://linkedin.com",
            instagram: doc.data().instagram || "https://instagram.com/way_zentech"
          }));
          setTeam(fetchedDocs);
        }
      } catch (error) {
        console.warn("Using offline resilient team database:", error);
      }
    };
    fetchTeam();
  }, []);

  const filteredTeam = activeFilter === "all" 
    ? team 
    : team.filter(m => m.category === activeFilter);

  // Founder profile for the spotlight hero card
  const founder = team.find(m => m.category === "systems") || team[0];

  return (
    <div className="min-h-screen bg-[#0a0101] text-white pt-28 md:pt-36 pb-32 md:pb-28 px-4 md:px-8 relative overflow-hidden font-sans">
      
      {/* 1. BACKGROUND SVG ORBITAL MOTIFS & PROMINENT LOGO WATERMARK */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -top-36 -right-36 w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-20" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="360" stroke="#cdd32c" strokeWidth="1" strokeDasharray="8 8" className="animate-make-line" />
          <circle cx="400" cy="400" r="220" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.2" />
        </svg>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#cdd32c]/5 rounded-full blur-[140px]" />

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

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER: PIVOTROOTS EDITORIAL CONTRAST --- */}
        <header className="mb-14 md:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cdd32c]/10 border border-[#cdd32c]/30 text-[#cdd32c] text-[10px] md:text-xs font-mono font-black uppercase tracking-widest mb-4">
            <Sparkles size={12} />
            <span>[ THE_FOUNDRY / ARCHITECTS_&_ENGINEERS ]</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.92]">
                THE CORE <span className="text-[#cdd32c]">MINDS.</span>
              </h1>
              <p className="text-slate-400 mt-4 max-w-2xl font-light text-sm md:text-lg leading-relaxed">
                Zero middle managers or sales proxies. You partner directly with principal full-stack engineers, AI model builders, and digital product architects.
              </p>
            </div>

            {/* LIVE ENGINEER DESK BADGE */}
            <div className="bg-[#141419] border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-md self-start lg:self-auto flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#cdd32c] animate-ping" />
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                  Direct Engineer Desk Active
                </p>
                <p className="text-[9px] font-mono text-[#cdd32c]">
                  WhatsApp Hotline: +91 9398724704
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* --- FOUNDER & PRINCIPAL ARCHITECT SPOTLIGHT --- */}
        {founder && (
          <section className="mb-16 md:mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#101014] border-2 border-[#cdd32c]/40 rounded-[32px] md:rounded-[44px] p-6 sm:p-10 md:p-14 relative overflow-hidden shadow-[0_20px_50px_rgba(205,211,44,0.08)]"
            >
              {/* Watermark Tag */}
              <div className="absolute top-6 right-8 text-6xl md:text-8xl font-black font-mono text-white/5 select-none pointer-events-none">
                01
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                
                {/* Left: Holographic Monogram / Avatar Frame */}
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
                  <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-br from-[#1c1c24] to-[#0a0101] border-2 border-[#cdd32c] p-2 flex items-center justify-center shadow-2xl group">
                    
                    {/* Inner Graphic / Logo Emblem */}
                    <div className="w-full h-full rounded-2xl bg-[#0a0101] flex flex-col items-center justify-center relative overflow-hidden p-4">
                      <img 
                        src="/logo-watermark.png" 
                        alt="Mahesh Velchuri" 
                        className="w-24 h-24 object-contain opacity-90 group-hover:scale-105 transition-transform"
                      />
                      <span className="text-[9px] font-mono font-black text-[#cdd32c] tracking-widest uppercase mt-2">
                        WAYZEN_FOUNDER
                      </span>
                    </div>

                    {/* Corner Accent Pointers */}
                    <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#cdd32c]" />
                    <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#cdd32c]" />
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-[#cdd32c] animate-pulse" />
                    <span>{founder.status}</span>
                  </div>
                </div>

                {/* Right: Architectural Biography & Direct Sync */}
                <div className="lg:col-span-8 text-left space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cdd32c]/10 text-[#cdd32c] text-[10px] font-mono font-black uppercase tracking-widest">
                    <ShieldCheck size={12} />
                    <span>FOUNDER & PRINCIPAL SYSTEMS ARCHITECT</span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                    {founder.name}
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed border-l-2 border-[#cdd32c] pl-4">
                    {founder.headline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {founder.bio}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#cdd32c] block mb-2 font-bold">
                      [ PRODUCTION TECH STACKS ]
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {founder.stacks.map((stk, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                          {stk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => window.open('https://wa.me/919398724704?text=Hi%20Mahesh,%20I%20want%20to%20discuss%20a%20project%20directly', '_blank')}
                      className="w-full sm:w-auto bg-[#cdd32c] hover:bg-white text-[#0a0101] px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#cdd32c]/20 cursor-pointer"
                    >
                      <MessageCircle size={15} />
                      <span>Talk with Founder on WhatsApp</span>
                    </button>
                    
                    <div className="flex gap-2 w-full sm:w-auto justify-center">
                      <a 
                        href={founder.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-11 h-11 bg-white/5 hover:bg-[#cdd32c] hover:text-[#0a0101] rounded-xl flex items-center justify-center text-white transition-all border border-white/10"
                        title="LinkedIn"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a 
                        href={founder.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-11 h-11 bg-white/5 hover:bg-[#cdd32c] hover:text-[#0a0101] rounded-xl flex items-center justify-center text-white transition-all border border-white/10"
                        title="Instagram"
                      >
                        <Instagram size={16} />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </section>
        )}

        {/* --- INTERACTIVE CATEGORY FILTER PILLS --- */}
        <div className="mb-10 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider shrink-0 transition-all cursor-pointer flex items-center gap-2 border ${
                  isActive 
                    ? "bg-[#cdd32c] text-[#0a0101] border-[#cdd32c] shadow-md shadow-[#cdd32c]/20" 
                    : "bg-white/5 text-slate-300 border-white/10 hover:border-white/25"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                  isActive ? "bg-[#0a0101] text-[#cdd32c]" : "bg-white/10 text-slate-400"
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* --- ARCHITECTURAL DOSSIER GRID (ALL CORE DISCIPLINES) --- */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredTeam.map((member, idx) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-[#141419] border border-white/10 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between text-left hover:border-[#cdd32c]/60 transition-all duration-300 shadow-xl group"
                >
                  <div>
                    {/* Top Status & Node Bar */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#cdd32c]">
                        NODE_{member.num} • {member.category.toUpperCase()}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#cdd32c] animate-pulse" />
                    </div>

                    {/* Member Name & Role */}
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#cdd32c] transition-colors mb-1">
                      {member.name}
                    </h3>
                    
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 font-bold">
                      {member.role}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Stacks */}
                    <div className="mb-6 space-y-1.5">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 block">
                        Tech Stacks
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.stacks.map((stk, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                            {stk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Sync Bar */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => window.open(`https://wa.me/919398724704?text=Hi%20WayZenTech,%20I%20want%20to%20connect%20with%20${encodeURIComponent(member.name)}`, '_blank')}
                      className="text-xs font-black uppercase tracking-wider text-[#cdd32c] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <MessageCircle size={14} />
                      <span>Direct Sync</span>
                    </button>

                    <div className="flex gap-1.5">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#cdd32c] hover:text-[#0a0101] flex items-center justify-center text-white transition-all border border-white/10"
                        title="LinkedIn"
                      >
                        <Linkedin size={13} />
                      </a>
                      <a 
                        href={member.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#cdd32c] hover:text-[#0a0101] flex items-center justify-center text-white transition-all border border-white/10"
                        title="Instagram"
                      >
                        <Instagram size={13} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* --- FOUNDRY PROTOCOLS: WHY OUR TEAM MODEL OUTPERFORMS AGENCIES --- */}
        <section className="mb-24 text-left">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#cdd32c] font-black block mb-2">
              [ THE FOUNDRY STANDARD ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              Why Our Model Outperforms Agencies.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((pr, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-[#141419] border border-white/10 hover:border-[#cdd32c]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black font-mono text-[#cdd32c] block mb-3">
                    {pr.num}
                  </span>
                  <h3 className="text-base font-bold uppercase tracking-tight text-white mb-2">
                    {pr.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- BOTTOM CALL TO ACTION: START PROJECT --- */}
        <section className="bg-[#101014] border border-white/10 rounded-[36px] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#cdd32c] font-black">
              [ COLLABORATE WITH THE FOUNDRY ]
            </span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
              READY TO BUILD WITH <span className="text-[#cdd32c]">OUR CORE?</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed">
              No sales reps. Direct architectural review, transparent pricing, and rapid delivery.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' }), 300);
                }}
                className="bg-[#cdd32c] hover:bg-white text-[#0a0101] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#cdd32c]/20 cursor-pointer"
              >
                <span>Initialize Project Request</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => window.open('https://wa.me/919398724704', '_blank')}
                className="bg-white/10 hover:bg-[#25D366] hover:text-black text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>Talk to Lead Architect (+91 9398724704)</span>
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Team;
