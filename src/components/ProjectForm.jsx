import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

// Background Moving Letters - Now restricted to its parent container
const WayzenAlertBackground = () => {
  const rows = [1, 2, 3, 4]; // Fewer rows needed since it's just for the form area
  const text = "WAYZEN WAYZEN WAYZEN WAYZEN WAYZEN ";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Moving Text Rows */}
      <div className="flex flex-col justify-around h-full opacity-20">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ x: i % 2 === 0 ? "-50%" : "0%" }}
            animate={{ x: i % 2 === 0 ? "0%" : "-50%" }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap flex"
          >
            <span className="text-[15vw] font-black text-blue-500/40 tracking-tighter leading-none uppercase italic select-none">
              {text}
            </span>
            <span className="text-[15vw] font-black text-blue-500/40 tracking-tighter leading-none uppercase italic select-none">
              {text}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Alert Scanning Line Effect - restricted to form area */}
      <motion.div 
        animate={{ translateY: ['0%', '500%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10"
      />
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
    type: 'Software Development' 
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
      setFormData({ name: '', email: '', message: '', type: 'Software Development' });
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to send request.");
      setLoading(false);
    }
  };

  return (
    /* OUTER WRAPPER: Limits the animation to this section only */
    <div className="relative w-full min-h-[800px] flex items-center justify-center p-6 md:p-12 bg-slate-950 overflow-hidden rounded-[3rem]">
      
      {/* 1. BACKGROUND ANIMATION (Absolute to this container) */}
      <WayzenAlertBackground />

      {/* 2. THE FORM (Centered in the middle) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 w-full max-w-2xl bg-slate-900/80 backdrop-blur-xl border border-blue-500/20 rounded-3xl shadow-2xl overflow-hidden"
      >
        {sent ? (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="p-12 text-center text-white flex flex-col items-center justify-center min-h-[400px]"
          >
            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 border border-emerald-500/50">
              <CheckCircle2 size={40} className="text-emerald-500" />
            </div>
            <h2 className="text-2xl font-black mb-2 uppercase italic">Data Received</h2>
            <p className="text-slate-400 text-sm">Transmission logged in WayZen Dashboard.</p>
            <button 
              onClick={() => setSent(false)} 
              className="mt-6 text-blue-400 text-xs font-bold uppercase tracking-widest hover:underline"
            >
              New Transmission
            </button>
          </motion.div>
        ) : (
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-1 bg-blue-600"></div>
              <div>
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Initialize Project</h2>
                <div className="flex items-center gap-2">
                  <AlertCircle size={10} className="text-blue-500 animate-pulse" />
                  <span className="text-[9px] text-blue-500 font-bold uppercase tracking-widest">System Ready</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-blue-400/70 uppercase tracking-widest ml-1">Identity</label>
                  <input 
                    placeholder="Your Name" 
                    className="w-full p-4 bg-black/40 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 transition-all" 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-blue-400/70 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    placeholder="mail@domain.com" 
                    type="email" 
                    className="w-full p-4 bg-black/40 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 transition-all" 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-blue-400/70 uppercase tracking-widest ml-1">Project Details</label>
                <textarea 
                  placeholder="Describe the mission..." 
                  className="w-full p-4 bg-black/40 border border-white/10 rounded-xl text-white h-32 outline-none focus:border-blue-500 transition-all resize-none" 
                  value={formData.message} 
                  onChange={e => setFormData({...formData, message: e.target.value})} 
                  required 
                />
              </div>

              <button 
                disabled={loading}
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-500 p-4 rounded-xl text-white font-black flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={18} />}
                {loading ? "UPLOADING..." : "SUBMIT REQUEST"}
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};