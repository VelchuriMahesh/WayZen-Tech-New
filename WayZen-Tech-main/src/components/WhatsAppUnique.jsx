import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';

export const WhatsAppUnique = ({ phoneNumber = "8310474966" }) => {
  const handleChat = () => {
    const url = `https://wa.me/${phoneNumber}?text=Hello WayZenTech, I would like to discuss a project!`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-max px-4">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleChat}
        className="relative cursor-pointer group"
      >
        {/* The Notification Badge (Makes it look like an unread message) */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white z-10 shadow-lg">
          1
        </div>

        {/* The Main Container */}
        <div className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.4)] border border-white/20">
          
          {/* WhatsApp Icon Circle */}
          <div className="relative">
            <div className="bg-white p-1.5 rounded-full">
               <MessageCircle size={22} className="text-[#25D366]" fill="currentColor" />
            </div>
            {/* Online Status Dot */}
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#25D366] rounded-full"></div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col pr-2">
            <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-white/80 uppercase tracking-tighter">WhatsApp Chat</span>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <span className="text-[10px] font-medium text-white/80">Online</span>
            </div>
            <span className="text-sm font-bold tracking-tight">
              Chat with WayZenTech
            </span>
          </div>

          {/* Action Arrow */}
          <div className="ml-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
            <Send size={16} />
          </div>
        </div>

        {/* Bottom Pointer (Makes it look like a speech bubble) */}
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#25D366] rotate-45 -z-10 rounded-sm"></div>
      </motion.div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-emerald-500/20 blur-2xl -z-20 scale-150"></div>
    </div>
  );
};