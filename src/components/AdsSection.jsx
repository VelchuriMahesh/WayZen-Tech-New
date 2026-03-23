import React from 'react';
import { motion } from 'framer-motion';
import { 
    Instagram, Facebook, Linkedin, Youtube, 
    Twitter, Send, Zap, Target, BarChart3, MousePointer2 
} from 'lucide-react';

const platforms = [
    { icon: <Instagram size={28} />, label: "Instagram", color: "text-[#E4405F]", bg: "bg-[#E4405F]/10" },
    { icon: <Facebook size={28} />, label: "Meta", color: "text-[#1877F2]", bg: "bg-[#1877F2]/10" },
    { icon: <Linkedin size={28} />, label: "LinkedIn", color: "text-[#0A66C2]", bg: "bg-[#0A66C2]/10" },
    { icon: <Youtube size={28} />, label: "YouTube", color: "text-[#FF0000]", bg: "bg-[#FF0000]/10" },
    { icon: <Twitter size={28} />, label: "X.com", color: "text-[#000000]", bg: "bg-slate-100" },
    { icon: <Send size={28} />, label: "TikTok", color: "text-[#00F2EA]", bg: "bg-[#00F2EA]/10" },
];

export const AdsSection = () => {
    
    // This matches the id="request" in your ProjectForm
    const handleScrollToForm = () => {
        const element = document.getElementById('request');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4"
                    >
                        Ad-Tech Ecosystem
                    </motion.div>
                    <h2 className="text-slate-900 text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9]">
                        Digital Media <br/>
                        <span className="text-blue-600 underline decoration-8 underline-offset-[12px]">Dominance.</span>
                    </h2>
                </div>

                {/* Vibrant Social Marquee */}
                <div className="relative mb-20 border-y border-slate-100 py-10 bg-slate-50/30">
                    <motion.div 
                        animate={{ x: [0, -1200] }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        className="flex items-center gap-20 whitespace-nowrap"
                    >
                        {[...platforms, ...platforms].map((p, i) => (
                            <div key={i} className="flex items-center gap-5 group cursor-pointer">
                                <div className={`p-4 rounded-2xl transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-125 shadow-sm ${p.bg} ${p.color}`}>
                                    {p.icon}
                                </div>
                                <span className="text-slate-900 font-black uppercase italic tracking-tighter text-2xl">
                                    {p.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                    {/* Fades for smooth edges */}
                    <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
                </div>

                {/* Medium-Length Strategic Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <motion.div whileHover={{ y: -10 }} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 group transition-all">
                        <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                            <Target size={28} />
                        </div>
                        <h4 className="text-slate-900 text-2xl font-black italic uppercase tracking-tighter">Precision AI</h4>
                        <p className="text-slate-500 mt-4 leading-relaxed font-medium">We use neural mapping to find customers based on behavior, not just keywords.</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -10 }} className="p-10 rounded-[3rem] bg-slate-900 text-white shadow-2xl shadow-slate-300 relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                                <Zap size={28} />
                            </div>
                            <h4 className="text-2xl font-black italic uppercase tracking-tighter">Instant Scale</h4>
                            <p className="text-slate-400 mt-4 leading-relaxed font-medium">Breakthrough the noise with high-frequency ad delivery that scales with your ROI.</p>
                        </div>
                        <BarChart3 className="absolute -right-8 -bottom-8 text-white/5 group-hover:scale-110 transition-transform" size={180} />
                    </motion.div>

                    <motion.div whileHover={{ y: -10 }} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 group transition-all">
                        <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
                            <BarChart3 size={28} />
                        </div>
                        <h4 className="text-slate-900 text-2xl font-black italic uppercase tracking-tighter">ROI Mastery</h4>
                        <p className="text-slate-500 mt-4 leading-relaxed font-medium">Clear, transparent dashboard reporting that tracks every single conversion.</p>
                    </motion.div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <motion.button 
                        onClick={handleScrollToForm}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full font-black uppercase italic tracking-widest text-lg shadow-xl shadow-blue-600/30 flex items-center gap-3 mx-auto transition-colors"
                    >
                        Launch Your Campaign <MousePointer2 size={20} />
                    </motion.button>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-6 italic">
                        No credit card required to start onboarding
                    </p>
                </div>

            </div>
        </section>
    );
};