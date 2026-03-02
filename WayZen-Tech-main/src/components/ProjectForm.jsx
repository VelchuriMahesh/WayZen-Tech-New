import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

// Use "export const" so App.js can find it
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
      // We save to the "requests" collection so it shows in your Admin Dashboard
      await addDoc(collection(db, "requests"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        type: formData.type,
        createdAt: serverTimestamp(), // This allows the Admin to sort by date
        status: 'new'
      });

      setSent(true);
      setLoading(false);
      // Reset form
      setFormData({ name: '', email: '', message: '', type: 'Software Development' });
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to send request. Please try again.");
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="p-12 text-center text-white flex flex-col items-center justify-center min-h-[400px]"
      >
        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} className="text-emerald-500" />
        </div>
        <h2 className="text-3xl font-black mb-2">Request Transmitted</h2>
        <p className="text-slate-400 max-w-xs mx-auto">
          Your project details have been sent to the WayZenTech Admin Dashboard.
        </p>
        <button 
          onClick={() => setSent(false)} 
          className="mt-8 text-blue-400 font-bold hover:underline"
        >
          Send another request?
        </button>
      </motion.div>
    );
  }

  return (
    <div className="p-8 md:p-12">
      <div className="mb-10">
        <h2 className="text-4xl font-black text-white mb-2 uppercase tracking-tighter">Start a Project</h2>
        <p className="text-slate-400 font-medium">Fill out the details below to reach our dashboard.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest ml-1">Full Name</label>
            <input 
              placeholder="John Doe" 
              className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-blue-500/50 transition-all" 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})} 
              required 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest ml-1">Email Address</label>
            <input 
              placeholder="john@example.com" 
              type="email" 
              className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-blue-500/50 transition-all" 
              value={formData.email} 
              onChange={e => setFormData({...formData, email: e.target.value})} 
              required 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest ml-1">Message / Requirements</label>
          <textarea 
            placeholder="Tell us about your vision..." 
            className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white h-40 outline-none focus:border-blue-500/50 transition-all resize-none" 
            value={formData.message} 
            onChange={e => setFormData({...formData, message: e.target.value})} 
            required 
          />
        </div>

        <button 
          disabled={loading}
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-500 p-5 rounded-2xl text-white font-black flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
          {loading ? "Processing..." : "Submit to WayZen Dashboard"}
        </button>
      </form>
    </div>
  );
};