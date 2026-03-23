import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, ShieldCheck } from 'lucide-react';

export const WhatsAppFooterCTA = ({ phoneNumber = "8310474966" }) => {
  const handleChat = () => {
    const url = `https://wa.me/${phoneNumber}?text=Hello WayZenTech, I would like to discuss a project!`;
    window.open(url, '_blank');
  };

  return (
    <section className="w-full bg-gray-50/50 py-12 px-4 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Optional Section Header */}
        <div className="text-center mb-6">
          <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-widest">Quick Support</h3>
          <p className="text-gray-800 font-medium">Have questions? We are active now.</p>
        </div>

        <motion.div
          whileHover={{ y: -5 }}
          onClick={handleChat}
          className="relative cursor-pointer group bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden"
        >
          {/* Main Layout Container */}
          <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6">
            
            {/* Left Side: Icon & Info */}
            <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
              <div className="relative">
                <div className="bg-[#25D366] p-4 rounded-2xl shadow-lg shadow-emerald-200">
                  <MessageCircle size={32} className="text-white" fill="currentColor" />
                </div>
                {/* Status Indicator */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
              </div>

              <div>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    Official WhatsApp
                  </span>
                  <span className="flex items-center gap-1 text-gray-400 text-xs">
                    <ShieldCheck size={12} /> Secure
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Chat with WayZenTech
                </h2>
                <p className="text-gray-500 text-sm">
                  Typically responds in less than 5 minutes
                </p>
              </div>
            </div>

            {/* Right Side: Button */}
            <div className="w-full md:w-auto">
              <div className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-md group-hover:shadow-xl">
                <span>Start Conversation</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-emerald-50 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};