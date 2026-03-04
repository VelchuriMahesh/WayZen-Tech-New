"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, TrendingUp, Instagram, Video, 
  CheckCircle2, ArrowRight, Zap, MousePointer2, ChevronDown 
} from 'lucide-react';

const services = [
  {
    id: "web",
    title: "Website Development",
    icon: Globe,
    tagline: "High-performance digital architecture.",
    categories: ["Real Estate Portals", "E-commerce Ecosystems", "Corporate Branding", "LMS & Education", "Professional Portfolios"],
    details: "We don't just build sites; we build conversion engines. Optimized for speed, SEO, and user psychology.",
    color: "blue"
  },
  {
    id: "ads",
    title: "Performance Ads",
    icon: TrendingUp,
    tagline: "Engineered for lead & sales generation.",
    features: [
      "End-to-End Meta & Google Ads Setup",
      "6–7 High-Impact Creatives",
      "Advanced Audience Research",
      "Consistent, Measurable Results"
    ],
    details: "Stop burning budget. Start scaling with data-backed advertising strategies tailored to your business goals.",
    color: "purple"
  },
  {
    id: "content",
    title: "Content & Editing",
    icon: Video,
    tagline: "Visual storytelling that stops the scroll.",
    features: [
        "Professional Reel & Short-form Editing",
        "High-Quality Creative Poster Design",
        "Social Media Management",
        "Website Maintenance"
    ],
    details: "Your brand is only as good as its content. We provide high-end editing that turns viewers into customers.",
    color: "emerald"
  }
];

export default function ServicesPage() {
  // Defaults to the first item in the new list (Website Development)
  const [activeTab, setActiveTab] = useState(services[0]);
  const [expandedMobileId, setExpandedMobileId] = useState(services[0].id);

  const toggleMobile = (id) => {
    setExpandedMobileId(expandedMobileId === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-[#050505] text-white py-12 md:py-24 px-4 md:px-6 relative overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
        <img src="/logo.png" alt="" className="w-[300px] md:w-[800px] h-auto object-contain" />
      </div>
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 blur-[80px] md:blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <header className="mb-12 md:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black tracking-tighter"
            >
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">EXPERTISE.</span>
            </motion.h2>
            <p className="text-gray-400 mt-4 max-w-xl font-mono uppercase tracking-widest text-xs md:text-sm">Precision solutions for modern business.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 px-4 py-2 md:px-6 md:py-3 rounded-full backdrop-blur-md self-start lg:self-auto"
          >
            <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-white flex items-center gap-2">
              <Zap size={14} className="text-yellow-400 animate-pulse" />
              WayZenTech Never Disappoints
            </p>
          </motion.div>
        </header>

        {/* --- MOBILE VIEW --- */}
        <div className="lg:hidden space-y-4">
          {services.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <button 
                onClick={() => toggleMobile(item.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${expandedMobileId === item.id ? "bg-blue-600 text-white" : "bg-white/5 text-blue-400"}`}>
                    <item.icon size={20} />
                  </div>
                  <span className="font-bold text-lg">{item.title}</span>
                </div>
                <ChevronDown className={`transition-transform duration-300 ${expandedMobileId === item.id ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {expandedMobileId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-6"
                  >
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed border-l-2 border-blue-500 pl-4">
                      {item.details}
                    </p>
                    
                    <div className="space-y-3">
                      {(item.features || item.categories).map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-gray-200 bg-white/5 p-3 rounded-lg">
                          {item.id === 'web' ? <MousePointer2 size={14} className="text-blue-500" /> : <CheckCircle2 size={14} className="text-emerald-500" />}
                          {feat}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          <a href="https://instagram.com/way_zentech" className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-pink-500/30 mt-6">
            <div className="flex items-center gap-3">
              <Instagram className="text-pink-500" size={20} />
              <span className="font-bold text-sm">Follow @way_zentech</span>
            </div>
            <ArrowRight size={18} />
          </a>
        </div>

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-4">
            {services.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => setActiveTab(item)}
                className={`cursor-pointer p-8 rounded-3xl transition-all border ${
                  activeTab.id === item.id 
                  ? "bg-white/10 border-white/20 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.05)]" 
                  : "bg-transparent border-transparent grayscale opacity-50 hover:opacity-100"
                }`}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center gap-6">
                  <div className={`p-4 rounded-2xl ${activeTab.id === item.id ? "bg-blue-600/20" : "bg-white/5"}`}>
                    <item.icon className={`w-8 h-8 ${activeTab.id === item.id ? "text-blue-400" : "text-white"}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1 uppercase tracking-wider font-medium">{item.tagline}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.a 
              href="https://instagram.com/way_zentech"
              target="_blank"
              className="flex items-center justify-between p-8 rounded-3xl bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-pink-500/30 group mt-12"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <Instagram className="text-pink-500" />
                <span className="font-bold">Follow @way_zentech</span>
              </div>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </div>

          <div className="lg:col-span-7 bg-white/5 rounded-[40px] p-12 border border-white/10 backdrop-blur-xl min-h-[550px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                   <Zap className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                   <span className="text-xs font-mono uppercase tracking-[0.3em] text-blue-400 italic">Advanced Service Detail</span>
                </div>

                <h2 className="text-5xl font-black mb-6 uppercase italic tracking-tighter text-blue-500">{activeTab.title}</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-10 border-l-2 border-blue-500/50 pl-6">{activeTab.details}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(activeTab.features || activeTab.categories).map((feat, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={feat} 
                      className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-transparent hover:border-blue-500/20 transition-all"
                    >
                      {activeTab.id === 'web' ? <MousePointer2 className="w-4 h-4 text-blue-500" /> : <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                      <span className="text-gray-300 italic font-medium">{feat}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}