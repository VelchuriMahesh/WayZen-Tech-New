import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, Sparkles, MessageCircle } from 'lucide-react';

// Background Moving Letters - Restricted to form container
const WayzenAlertBackground = () => {
  const rows = [1, 2, 3];
  const text = "WAYZENTECH • THE WAY TO NEXT-GEN TECH • ";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="flex flex-col justify-around h-full opacity-10">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ x: i % 2 === 0 ? "-50%" : "0%" }}
            animate={{ x: i % 2 === 0 ? "0%" : "-50%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap flex"
          >
            <span className="text-[12vw] font-black font-mono text-[#cdd32c] tracking-tighter leading-none uppercase select-none">
              {text}
            </span>
            <span className="text-[12vw] font-black font-mono text-[#cdd32c] tracking-tighter leading-none uppercase select-none">
              {text}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0101] via-transparent to-[#0a0101]" />
    </div>
  );
};

export const ProjectForm = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '', 
    type: 'Website Development' 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await addDoc(collection(db, "requests"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        type: formData.type,
        createdAt: serverTimestamp(),
        status: 'new'
      });
      setSent(true);
      setLoading(false);
      setFormData({ name: '', email: '', message: '', type: 'Website Development' });
    } catch (err) {
      console.error("Error submitting form:", err);
      // Fallback direct WhatsApp redirect if Firestore rules or network blip
      window.open(
        `https://wa.me/919398724704?text=Hi%20WayZenTech,%20I%20am%20${encodeURIComponent(formData.name)}%20(${encodeURIComponent(formData.email)}).%20Project:%20${encodeURIComponent(formData.type)}.%20Details:%20${encodeURIComponent(formData.message)}`,
        '_blank'
      );
      setSent(true);
      setLoading(false);
    }
  };

  return (
    <div id="request" className="relative w-full min-h-[750px] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-[#0a0101] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 my-10">
      
      {/* 1. BACKGROUND ANIMATION */}
      <WayzenAlertBackground />

      {/* 2. THE FORM CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-20 w-full max-w-2xl bg-[#141419]/90 backdrop-blur-2xl border border-white/15 rounded-[28px] md:rounded-[36px] shadow-2xl overflow-hidden"
      >
        {sent ? (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="p-8 md:p-14 text-center text-white flex flex-col items-center justify-center min-h-[420px]"
          >
            <div className="w-20 h-20 bg-[#cdd32c]/10 rounded-full flex items-center justify-center mb-6 border-2 border-[#cdd32c]">
              <CheckCircle2 size={40} className="text-[#cdd32c]" />
            </div>
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#cdd32c] mb-2">
              [ TRANSMISSION LOGGED ]
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-2">
              Project Initialized
            </h2>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed font-light mb-6">
              Our principal engineering desk has received your brief. A lead architect will contact you within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => setSent(false)} 
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-all"
              >
                Send Another Request
              </button>
              <button 
                onClick={() => window.open('https://wa.me/919398724704', '_blank')}
                className="px-6 py-3 bg-[#cdd32c] hover:bg-white text-[#0a0101] text-xs font-black uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={15} />
                <span>Instant WhatsApp Sync</span>
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="p-6 sm:p-8 md:p-12 text-left">
            
            {/* Form Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cdd32c]/10 border border-[#cdd32c]/30 text-[#cdd32c] text-[10px] font-mono font-black uppercase tracking-widest mb-3">
                <Sparkles size={11} /> [ INITIALIZE_PROJECT / CLIENT_SYNC ]
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Start Your Project
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 font-light">
                Direct engineer consultation. Free architectural scope & transparent pricing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              {/* Project Type Select */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#cdd32c] font-black">
                  Service Vertical
                </label>
                <select
                  value={formData.type}
                  onChange={e => setFormData({...formData, type: e.target.value})}
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white text-xs sm:text-sm outline-none focus:border-[#cdd32c] transition-all cursor-pointer"
                >
                  <option value="Website Development" className="bg-[#141419] text-white">Website Development (Portals, E-commerce, Corporate)</option>
                  <option value="AI & Business Automation" className="bg-[#141419] text-white">AI Automation & Autonomous WhatsApp Bots</option>
                  <option value="Performance Ads & Growth" className="bg-[#141419] text-white">Performance Ads & Growth Marketing (Google/Meta)</option>
                  <option value="Custom Software & Mobile App" className="bg-[#141419] text-white">Custom Software & Mobile Apps (MERN / Flutter)</option>
                  <option value="Academic B.Tech/M.Tech R&D" className="bg-[#141419] text-white">Academic B.Tech/M.Tech IEEE Project Guidance</option>
                  <option value="Content & Media Editing" className="bg-[#141419] text-white">Content Creation & Short-Form Video Editing</option>
                </select>
              </div>

              {/* Identity & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                    Your Name / Company
                  </label>
                  <input 
                    placeholder="Mahesh Velchuri" 
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white text-xs sm:text-sm outline-none focus:border-[#cdd32c] transition-all placeholder:text-slate-600" 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                    required 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                    Email / Phone / WhatsApp
                  </label>
                  <input 
                    placeholder="contact@company.com or +91..." 
                    type="text" 
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white text-xs sm:text-sm outline-none focus:border-[#cdd32c] transition-all placeholder:text-slate-600" 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    required 
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                  Project Scope & Objectives
                </label>
                <textarea 
                  placeholder="Tell us what you want to build, target deadlines, or specific feature requirements..." 
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white text-xs sm:text-sm h-32 outline-none focus:border-[#cdd32c] transition-all resize-none placeholder:text-slate-600 font-light" 
                  value={formData.message} 
                  onChange={e => setFormData({...formData, message: e.target.value})} 
                  required 
                />
              </div>

              {/* Submit Button */}
              <button 
                disabled={loading}
                type="submit" 
                className="w-full bg-[#cdd32c] hover:bg-white text-[#0a0101] p-4.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50 shadow-lg shadow-[#cdd32c]/20 cursor-pointer"
              >
                {loading ? <Loader2 className="animate-spin text-[#0a0101]" size={18} /> : <Send size={16} />}
                <span>{loading ? "TRANSMITTING BRIEF..." : "SUBMIT PROJECT INQUIRY"}</span>
              </button>

              <div className="text-center pt-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  🔒 Zero Spam. 100% Confidential. Direct WhatsApp Access.
                </span>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
