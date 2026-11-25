import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Code2, Rocket, GraduationCap, Smartphone, 
  ArrowRight, ShieldCheck, Sparkles, MessageCircle,
  Compass, Cpu
} from 'lucide-react';

const WayZenAbout = () => {
  const navigate = useNavigate();

  const brandPillars = [
    {
      word: "WAY",
      title: "The Path",
      icon: Compass,
      desc: "Clear trajectory, direct engineer-to-client collaboration on WhatsApp, and transparent execution without agency bureaucracy."
    },
    {
      word: "ZEN",
      title: "Mastery & Focus",
      icon: ShieldCheck,
      desc: "Clutter-free codebases, sub-second loading speeds, and robust architectural calm under high production traffic."
    },
    {
      word: "TECH",
      title: "Next-Gen Engineering",
      icon: Cpu,
      desc: "Future-proof frameworks: reactive MERN web systems, autonomous AI agents, and enterprise cloud deployments."
    }
  ];

  const stats = [
    { label: "Global Projects", value: "65+", desc: "Web, AI & Software Deployments" },
    { label: "Production Frameworks", value: "12+", desc: "React, Next.js, Node, Python, Flutter" },
    { label: "Academic Success", value: "100%", desc: "B.Tech & M.Tech IEEE R&D Support" },
    { label: "Engineer Sync", value: "24/7", desc: "Direct WhatsApp Line & Fast Support" },
  ];

  const disciplines = [
    {
      title: "Enterprise Software",
      icon: Code2,
      desc: "Scalable MERN architectures, distributed cloud backends, and high-traffic SaaS ecosystems built to process millions of transactions.",
      tag: "Architectural Scale"
    },
    {
      title: "Hyper-Growth SEO & Ads",
      icon: Rocket,
      desc: "Dominating Google search results and precision Meta & Google ad funnels engineered for predictable customer acquisition cost (CAC).",
      tag: "Measurable ROI"
    },
    {
      title: "Academic Incubator",
      icon: GraduationCap,
      desc: "Premium B.Tech & M.Tech R&D support with end-to-end IEEE documentation, paper publications, source code, and 1-on-1 deployment guidance.",
      tag: "Research & IEEE"
    },
    {
      title: "Native Mobile Systems",
      icon: Smartphone,
      desc: "Ultra-responsive cross-platform iOS and Android applications engineered with Flutter and React Native for fluid 120Hz experiences.",
      tag: "Native Fluidity"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0101] text-white pt-28 md:pt-36 pb-32 md:pb-28 px-4 md:px-8 relative overflow-hidden font-sans">
      
      {/* 1. PIVOTROOTS ORBITAL SVG ACCENT & PROMINENT BACKGROUND LOGO */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -top-36 -right-36 w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-20" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="350" stroke="#cdd32c" strokeWidth="1" strokeDasharray="8 8" className="animate-make-line" />
          <circle cx="400" cy="400" r="240" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.2" />
        </svg>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#cdd32c]/5 rounded-full blur-[140px]" />

        {/* PROMINENT BACKGROUND LOGO - VISIBLE IN MOBILE & WEB */}
        <div className="absolute top-28 sm:top-36 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[750px] aspect-[1024/847] pointer-events-none z-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#cdd32c]/10 rounded-full blur-[90px] pointer-events-none scale-75" />
          <img 
            src="/logo-watermark.png" 
            alt="WayZenTech Background Logo" 
            className="w-full h-full object-contain opacity-22 sm:opacity-18 md:opacity-20 filter drop-shadow-[0_0_40px_rgba(205,211,44,0.18)] select-none"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HERO SECTION */}
        <header className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cdd32c]/10 border border-[#cdd32c]/30 text-[#cdd32c] text-[10px] md:text-xs font-mono font-black uppercase tracking-widest mb-6">
            <Sparkles size={12} />
            <span>[ COMPANY_IDENTITY / MANIFESTO ]</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.95] text-white mb-6">
            THE WAY TO <br />
            <span className="text-[#cdd32c]">NEXT-GEN TECH.</span>
          </h1>

          <p className="text-slate-300 text-base md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            We don't build generic corporate websites. We <span className="text-white font-bold">engineer high-velocity digital assets</span> that dominate search rankings, automate daily workflows, and accelerate commercial growth.
          </p>
        </header>

        {/* BRAND PILLARS: WAY • ZEN • TECH */}
        <section className="mb-24 md:mb-32">
          <div className="text-center mb-10">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#cdd32c] font-black">
              [ THE ARCHITECTURE OF OUR NAME ]
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brandPillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#141419] border border-white/10 rounded-[28px] p-8 relative overflow-hidden group hover:border-[#cdd32c]/60 transition-all shadow-xl"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black font-mono text-[#cdd32c]">
                      {p.word}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-[#cdd32c] group-hover:text-[#0a0101] text-white flex items-center justify-center transition-colors">
                      <IconComp size={22} />
                    </div>
                  </div>

                  <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3">
                    {p.title}
                  </h3>

                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* EDITORIAL QUOTE BLOCK */}
        <section className="mb-24 md:mb-32 bg-[#edf1f2] text-[#0a0101] rounded-[36px] p-8 md:p-16 border border-[#d5d5d5] relative overflow-hidden shadow-2xl">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-slate-500 block">
              EDITORIAL PERSPECTIVE
            </span>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-snug">
              “Most agencies deliver digital brochures that look pretty and convert nobody. We approach web and software development as <span className="bg-[#cdd32c] px-2 py-0.5">performance engineering</span> — every micro-interaction, line of code, and layout hierarchy is measured by its impact on user action.”
            </blockquote>
            <div className="pt-2 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#0a0101]" />
              <p className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold">
                WayZenTech Engineering Principle • Narasaraopet HQ
              </p>
            </div>
          </div>
        </section>

        {/* STATS MATRIX */}
        <section className="mb-24 md:mb-32 py-12 px-6 bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="text-3xl md:text-6xl font-black text-[#cdd32c] font-mono tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                  {stat.label}
                </div>
                <p className="text-[10px] text-slate-400 font-light hidden sm:block">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* THE ARSENAL: 4 PILLARS */}
        <section className="mb-24 md:mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#cdd32c] font-black block mb-2">
                [ THE ARSENAL ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
                Core Disciplines.
              </h2>
            </div>
            <p className="text-slate-400 text-xs md:text-sm font-light max-w-md">
              Full-lifecycle digital product development from rapid architectural prototyping to high-scale commercial deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {disciplines.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  onClick={() => navigate('/services')}
                  className="p-8 md:p-10 bg-[#141419] border border-white/10 rounded-[28px] hover:border-[#cdd32c]/60 transition-all group cursor-pointer shadow-xl text-left"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 group-hover:bg-[#cdd32c] group-hover:text-[#0a0101] text-[#cdd32c] flex items-center justify-center transition-colors">
                      <IconComp size={26} />
                    </div>
                    <span className="text-[10px] font-mono border border-white/20 px-3 py-1 rounded-full text-slate-300 uppercase tracking-widest">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-light">
                    {item.desc}
                  </p>

                  <div className="flex items-center text-xs font-black tracking-widest group-hover:text-[#cdd32c] transition-colors uppercase gap-2">
                    <span>EXPLORE CAPABILITIES</span>
                    <ArrowRight size={15} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* BOTTOM CTA: FULL-WIDTH PIVOTROOTS ACTION CARD */}
        <section className="bg-[#101014] border border-white/10 rounded-[36px] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#cdd32c] font-black">
              [ NEXT STEP ]
            </span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
              FUTURE IS <span className="text-[#cdd32c]">WAYZEN.</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed">
              Have an ambitious vision for a website, software platform, or AI workflow? Let's bring it to life with precision.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' }), 300);
                }}
                className="bg-[#cdd32c] hover:bg-white text-[#0a0101] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#cdd32c]/20"
              >
                <span>Start Your Project</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => window.open('https://wa.me/919398724704', '_blank')}
                className="bg-white/10 hover:bg-[#25D366] hover:text-black text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp (+91 9398724704)</span>
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default WayZenAbout;
