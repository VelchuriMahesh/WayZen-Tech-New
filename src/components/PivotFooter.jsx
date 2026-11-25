import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PivotFooter = () => {
  const navigate = useNavigate();
  const [activeCity, setActiveCity] = useState('hyderabad');

  const cityData = {
    hyderabad: {
      label: "Hyderabad (HQ)",
      address: "Hitech City Innovation Zone, Hyderabad, Telangana - 500081",
      phone: "+91 9398724704",
      timing: "Direct Sync: 24/7 Priority Desk",
      status: "Engineering Core & AI Foundry Active"
    },
    vijayawada: {
      label: "Vijayawada / AP Hub",
      address: "Main Tech Corridor, Narasaraopet, Palnadu / Vijayawada Region, AP - 522601",
      phone: "+91 9398724704",
      timing: "Direct Sync: Mon - Sat 9:00 AM - 9:00 PM",
      status: "Regional Web, POS & Business Systems Active"
    },
    bangalore: {
      label: "Bangalore",
      address: "Koramangala Tech Nexus, Bangalore, Karnataka - 560034",
      phone: "+91 9398724704",
      timing: "Direct Sync: 24/7 Cloud Support",
      status: "Enterprise Scalability & SaaS Pod Active"
    },
    global: {
      label: "Global Remote",
      address: "Cloud Foundry Serving Clients in India, USA, UK, UAE & Global Markets",
      phone: "+91 9398724704",
      timing: "Worldwide WhatsApp Dev Sync",
      status: "Autonomous Distributed Engineering Squad"
    }
  };

  const current = cityData[activeCity];

  return (
    <footer className="relative bg-[#0a0101] text-white pt-16 sm:pt-20 md:pt-28 pb-12 px-6 overflow-hidden border-t border-white/10">
      
      {/* Background Subtle Watermark */}
      <div className="absolute right-[-5%] bottom-[-5%] text-[14vw] font-black text-white/[0.02] tracking-tighter select-none pointer-events-none">
        WAYZEN
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* PIVOTROOTS STYLE CENTERED CITY / HUB SWITCHER PILL */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-[0.3em] text-[#cdd32c] mb-4">
            Presence // Regional Engineering Hubs
          </p>

          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-white/5 border border-white/15 gap-1.5 max-w-full">
            {Object.keys(cityData).map((key) => {
              const isActive = activeCity === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCity(key)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive 
                      ? "bg-[#cdd32c] text-[#0a0101] font-black shadow-lg shadow-[#cdd32c]/20 scale-105" 
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cityData[key].label}
                </button>
              );
            })}
          </div>

          {/* DYNAMIC HUB LOCATION DETAILS */}
          <motion.div
            key={activeCity}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 max-w-xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center"
          >
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
              <MapPin size={15} className="text-[#cdd32c] shrink-0" />
              <span>{current.address}</span>
            </div>
            <div className="mt-2 text-[10px] sm:text-xs font-mono text-[#cdd32c] flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#cdd32c] animate-pulse" />
              <span>{current.status}</span>
            </div>
          </motion.div>
        </div>

        {/* THREE-COLUMN INQUIRY & BRAND ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 pt-10 border-t border-white/10 mb-14">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black italic tracking-tight uppercase text-white">
              WAYZEN<span className="text-[#cdd32c]">TECH</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              “The Way to the Next Generation of Technology.” High-velocity software foundry engineering AI systems, scalable MERN web applications, and enterprise digital solutions.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('/what-is-wayzentech')}
                className="text-xs font-mono font-bold text-[#cdd32c] hover:underline flex items-center gap-1.5 tracking-wider uppercase"
              >
                <span>Read Full Origin Story</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Col 2: Business & Technical Inquiries */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-black uppercase tracking-[0.25em] text-[#cdd32c]">
              Direct Engineering Sync
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a 
                href="tel:+919398724704" 
                className="flex items-center gap-3 text-slate-300 hover:text-[#cdd32c] transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-[#cdd32c]">
                  <Phone size={14} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Direct Call</div>
                  <div className="font-bold">+91 9398724704</div>
                </div>
              </a>

              <a 
                href="mailto:wayzentech@gmail.com" 
                className="flex items-center gap-3 text-slate-300 hover:text-[#cdd32c] transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-[#cdd32c]">
                  <Mail size={14} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Official Email</div>
                  <div className="font-bold">wayzentech@gmail.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Col 3: Social & Instant WhatsApp */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-black uppercase tracking-[0.25em] text-[#cdd32c]">
              Connect Instantly
            </h4>
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => window.open('https://wa.me/919398724704', '_blank')}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-[#25D366] hover:text-black border border-white/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-[#25D366] group-hover:text-black transition-colors" />
                  <span className="text-xs font-bold uppercase tracking-wider">Chat on WhatsApp</span>
                </div>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://instagram.com/way_zentech"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 border border-white/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Instagram size={18} className="text-pink-400 group-hover:text-white transition-colors" />
                  <span className="text-xs font-bold uppercase tracking-wider">@way_zentech</span>
                </div>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT STRIP */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[10px] text-slate-500 font-mono uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} WayZenTech Collective. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>The Way to Next-Gen Tech</span>
            <span>•</span>
            <span className="text-slate-400">Zero Technical Debt</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
