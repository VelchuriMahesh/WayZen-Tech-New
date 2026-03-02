import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Zap } from 'lucide-react';

export const WhatsAppUnique = ({ phoneNumber = "8310474966" }) => {
  const handleChat = () => {
    const url = `https://wa.me/${phoneNumber}?text=Hello WayZenTech, I would like to discuss a project!`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-8 left-8 z-[9999]">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        className="relative group cursor-pointer"
        onClick={handleChat}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-75 animate-pulse"></div>
        <div className="relative flex items-center gap-4 bg-white/10 backdrop-blur-2xl border border-white/20 px-6 py-3 rounded-full shadow-2xl">
          <div className="bg-emerald-500 p-2 rounded-full text-white">
            <MessageCircle size={22} fill="white" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest leading-none">Live Chat</span>
            <span className="text-sm font-bold text-slate-800">WayZen Connect</span>
          </div>
          <Zap size={14} className="text-blue-500" />
        </div>
      </motion.div>
    </div>
  );
};