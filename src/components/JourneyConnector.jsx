"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ArrowRight, Cpu, Users, Zap, MessageCircle, 
  Sparkles, Compass, Rocket 
} from 'lucide-react';

export const JourneyConnector = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  if (path === '/admin') return null;

  // Determine connected next chapters based on current route
  const getConnections = () => {
    if (path === '/services' || path.startsWith('/web-') || path.startsWith('/ai-') || path.startsWith('/seo') || path.startsWith('/billing') || path.startsWith('/custom-') || path.startsWith('/ecommerce') || path.startsWith('/digital-') || path.startsWith('/mobile-') || path.startsWith('/google-') || path.startsWith('/local-')) {
      return [
        {
          tag: "Next Chapter 01",
          title: "Meet the Engineering Team",
          desc: "Connect directly with the developers, AI engineers, and system architects building your product.",
          link: "/team",
          icon: Users
        },
        {
          tag: "Next Chapter 02",
          title: "Start Your Project Request",
          desc: "Get an immediate architectural roadmap, timeline estimate, and itemized quotation.",
          link: "/#request",
          icon: Zap
        }
      ];
    }

    if (path === '/about') {
      return [
        {
          tag: "Next Chapter 01",
          title: "Explore Core Capabilities",
          desc: "Discover our 5 distinct engineering styles: Web Platforms, Neural AI, Native Mobile & Growth.",
          link: "/services",
          icon: Cpu
        },
        {
          tag: "Next Chapter 02",
          title: "Meet the Team",
          desc: "Learn about the minds powering WayZenTech and talk directly to our lead engineers.",
          link: "/team",
          icon: Users
        }
      ];
    }

    if (path === '/team') {
      return [
        {
          tag: "Next Chapter 01",
          title: "Start a Project with Us",
          desc: "Collaborate directly with our engineering core. Zero account managers, 100% technical focus.",
          link: "/#request",
          icon: Rocket
        },
        {
          tag: "Next Chapter 02",
          title: "Our Engineering Services",
          desc: "Inspect the frameworks, APIs, and modern architectures we deploy for global clients.",
          link: "/services",
          icon: Cpu
        }
      ];
    }

    if (path === '/what-is-wayzentech') {
      return [
        {
          tag: "Next Chapter 01",
          title: "Explore Production Services",
          desc: "See how we apply our philosophy into custom web, AI, mobile, and software solutions.",
          link: "/services",
          icon: Cpu
        },
        {
          tag: "Next Chapter 02",
          title: "Request a Direct Quote",
          desc: "Submit your project requirements and talk with our engineering desk on WhatsApp.",
          link: "/#request",
          icon: Zap
        }
      ];
    }

    // Default connection (Home page bottom or fallback)
    return [
      {
        tag: "Next Chapter 01",
        title: "Explore Core Services",
        desc: "Interactive showcase of our 5 distinct engineering styles, benchmarks, and deliverables.",
        link: "/services",
        icon: Cpu
      },
      {
        tag: "Next Chapter 02",
        title: "Company Story & Pillars",
        desc: "Discover why we build different: 'The Way to the Next Generation of Technology.'",
        link: "/about",
        icon: Compass
      }
    ];
  };

  const connections = getConnections();

  const handleAction = (link) => {
    if (link.startsWith('/#')) {
      if (path === '/') {
        document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' });
        }, 350);
      }
    } else {
      navigate(link);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-[#0a0101] text-white relative overflow-hidden border-t border-white/10 font-sans">
      
      {/* Background Orbital Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#cdd32c]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cdd32c]/10 border border-[#cdd32c]/30 text-[#cdd32c] text-[10px] font-mono font-black uppercase tracking-widest mb-3">
            <Compass size={12} className="animate-spin" /> [ INTERCONNECTED_ECOSYSTEM ]
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            CONTINUE YOUR <span className="text-[#cdd32c]">JOURNEY</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-light">
            Every part of WayZenTech is seamless. Explore our connected capabilities below.
          </p>
        </div>

        {/* 2-Card Connection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {connections.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAction(item.link)}
                className="group cursor-pointer p-6 sm:p-8 rounded-[28px] bg-[#141419] border border-white/10 hover:border-[#cdd32c]/60 shadow-xl backdrop-blur-xl transition-all flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#cdd32c] bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {item.tag}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-[#cdd32c] group-hover:text-[#0a0101] text-white flex items-center justify-center transition-all">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#cdd32c] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono font-black uppercase tracking-wider text-[#cdd32c] flex items-center gap-1.5">
                    <Sparkles size={13} /> Explore Chapter
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#cdd32c] group-hover:text-[#0a0101] text-white flex items-center justify-center transition-all group-hover:translate-x-1.5 shadow">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Direct WhatsApp Quick Sync Bar */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#141419] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#cdd32c]/10 text-[#cdd32c] border border-[#cdd32c]/30 flex items-center justify-center shrink-0">
              <MessageCircle size={20} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white">Have a specific project in mind?</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-light">Talk directly with our lead developers on WhatsApp anytime.</p>
            </div>
          </div>

          <button
            onClick={() => window.open('https://wa.me/919398724704?text=Hi%20WayZenTech,%20I%20am%20exploring%20your%20website%20and%20want%20to%20connect', '_blank')}
            className="w-full sm:w-auto bg-[#cdd32c] hover:bg-white text-[#0a0101] px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shrink-0 shadow-md active:scale-95 cursor-pointer"
          >
            <MessageCircle size={14} />
            <span>Instant WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default JourneyConnector;
