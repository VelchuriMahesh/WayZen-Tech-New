"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ArrowRight, Cpu, Users, Info, Zap, MessageCircle, 
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
          icon: Users,
          gradient: "from-blue-600 to-indigo-600",
          accent: "text-blue-400"
        },
        {
          tag: "Next Chapter 02",
          title: "Start Your Project Request",
          desc: "Get an immediate architectural roadmap, timeline estimate, and itemized quotation.",
          link: "/#request",
          icon: Zap,
          gradient: "from-emerald-600 to-teal-600",
          accent: "text-emerald-400"
        }
      ];
    }

    if (path === '/about') {
      return [
        {
          tag: "Next Chapter 01",
          title: "Explore Core Capabilities",
          desc: "Discover our 5 distinct engineering styles: Web Platforms, Neural AI, Native Mobile & POS.",
          link: "/services",
          icon: Cpu,
          gradient: "from-blue-600 to-indigo-600",
          accent: "text-blue-400"
        },
        {
          tag: "Next Chapter 02",
          title: "Meet the Team",
          desc: "Learn about the minds powering WayZenTech and talk directly to our lead engineers.",
          link: "/team",
          icon: Users,
          gradient: "from-purple-600 to-pink-600",
          accent: "text-purple-400"
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
          icon: Rocket,
          gradient: "from-blue-600 to-cyan-500",
          accent: "text-cyan-400"
        },
        {
          tag: "Next Chapter 02",
          title: "Our Engineering Services",
          desc: "Inspect the frameworks, APIs, and modern architectures we deploy for global clients.",
          link: "/services",
          icon: Cpu,
          gradient: "from-indigo-600 to-purple-600",
          accent: "text-indigo-400"
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
          icon: Cpu,
          gradient: "from-blue-600 to-indigo-600",
          accent: "text-blue-400"
        },
        {
          tag: "Next Chapter 02",
          title: "Request a Direct Quote",
          desc: "Submit your project requirements and talk with our engineering desk on WhatsApp.",
          link: "/#request",
          icon: Zap,
          gradient: "from-emerald-600 to-teal-600",
          accent: "text-emerald-400"
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
        icon: Cpu,
        gradient: "from-blue-600 to-indigo-600",
        accent: "text-blue-400"
      },
      {
        tag: "Next Chapter 02",
        title: "The WayZen Philosophy",
        desc: "Discover why we build different: 'The Way to the Next Generation of Technology.'",
        link: "/what-is-wayzentech",
        icon: Info,
        gradient: "from-indigo-600 to-purple-600",
        accent: "text-indigo-400"
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
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-slate-950 text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background Cyber Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-3">
            <Compass size={12} className="animate-pulse" /> Seamless Ecosystem
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Continue Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Journey</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">
            Every part of WayZenTech is interconnected. Choose your next destination below.
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
                className="group cursor-pointer p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 hover:border-blue-400/50 shadow-xl backdrop-blur-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                      {item.tag}
                    </span>
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-transform`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className={`text-xs font-black uppercase tracking-wider ${item.accent} flex items-center gap-1.5`}>
                    <Sparkles size={13} /> Explore Now
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-blue-600 text-white flex items-center justify-center transition-all group-hover:translate-x-1.5 shadow">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Direct WhatsApp Quick Sync Bar */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <MessageCircle size={20} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white">Have a specific question in mind?</p>
              <p className="text-[10px] sm:text-xs text-slate-400">Talk directly with our lead developers on WhatsApp anytime.</p>
            </div>
          </div>

          <button
            onClick={() => window.open('https://wa.me/919398724704?text=Hi%20WayZenTech,%20I%20am%20exploring%20your%20website%20and%20want%20to%20connect', '_blank')}
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shrink-0 shadow-md active:scale-95"
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
