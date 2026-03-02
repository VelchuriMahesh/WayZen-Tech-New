import React from 'react';
import { motion } from 'framer-motion';
import { 
    GraduationCap, 
    TrendingUp, 
    Rocket, 
    Users, 
    Briefcase, 
    CheckCircle2, 
    Globe
} from 'lucide-react';

export const TrustSection = () => {
    const academicFeatures = [
        "Complete End-to-End Project Build",
        "IEEE & Springer Research Papers",
        "60+ Page Technical Documentation",
        "Professional PPT & Viva Prep",
        "Personalized Project Guidance"
    ];

    return (
        <section className="bg-white py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] bg-blue-50 px-4 py-2 rounded-full"
                    >
                        The Wayzen Advantage
                    </motion.span>
                    <h2 className="text-slate-900 text-5xl md:text-7xl font-black italic uppercase tracking-tighter mt-6 leading-none">
                        Engineered for <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Excellence.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    
                    {/* COLUMN 1: B.TECH ACADEMIC */}
                    <motion.div whileHover={{ y: -10 }} className="p-8 rounded-[3.5rem] bg-slate-50 border border-slate-100 relative group overflow-hidden shadow-sm">
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-100">
                                <GraduationCap size={32} />
                            </div>
                            <h3 className="text-slate-900 text-3xl font-black italic uppercase tracking-tighter mb-6">
                                B.Tech Elite <br/> <span className="text-blue-600">Package</span>
                            </h3>
                            <div className="space-y-4">
                                {academicFeatures.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-slate-600 font-bold text-sm">
                                        <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* COLUMN 2: DIGITAL ADS */}
                    <motion.div whileHover={{ y: -10 }} className="p-8 rounded-[3.5rem] bg-slate-900 text-white relative group overflow-hidden shadow-2xl">
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-16 h-16 bg-white/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                                <TrendingUp size={32} />
                            </div>
                            <h3 className="text-white text-3xl font-black italic uppercase tracking-tighter mb-6">
                                Growth <br/> <span className="text-emerald-400">Ecosystem</span>
                            </h3>
                            <p className="text-slate-400 font-medium mb-8 text-sm leading-relaxed">
                                High-converting sales machines using algorithmic data targeting and multi-platform omnipresence.
                            </p>
                            <div className="mt-auto bg-white/5 p-4 rounded-2xl border border-white/10">
                                <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-2">Platform Performance</div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "92%" }} transition={{duration: 1.5}} className="h-full bg-emerald-400" />
                                </div>
                            </div>
                        </div>
                        <Globe className="absolute -right-20 -bottom-20 text-white/5 rotate-12" size={300} />
                    </motion.div>

                    {/* COLUMN 3: WE ARE HIRING */}
                    <motion.div 
                        whileHover={{ y: -10 }} 
                        className="p-8 rounded-[3.5rem] bg-indigo-600 text-white relative group overflow-hidden shadow-xl shadow-indigo-100"
                    >
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-16 h-16 bg-white text-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                                <Briefcase size={32} />
                            </div>
                            <h3 className="text-white text-3xl font-black italic uppercase tracking-tighter mb-4">
                                Join the <br/> <span className="text-indigo-200">Mission</span>
                            </h3>

                            <div className="space-y-4 mt-4 mb-8">
                                <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-100 opacity-70">Full Time</span>
                                        <span className="bg-white text-indigo-600 text-[8px] font-black px-2 py-1 rounded">2025-2026</span>
                                    </div>
                                    <p className="font-black text-sm italic uppercase tracking-tight">Software Engineer / AI Researcher</p>
                                </div>

                                <div className="bg-indigo-700/50 p-4 rounded-2xl border border-white/10">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-100 opacity-70">Part Time</span>
                                        <span className="bg-indigo-400 text-white text-[8px] font-black px-2 py-1 rounded">University Hub</span>
                                    </div>
                                    <p className="font-black text-sm italic uppercase tracking-tight">Earn While You Learn Program</p>
                                </div>
                            </div>

                            <a 
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdesnKFbYga5Zr-kDgmZd_-HvLRkSk6Gkt-kIFKH8RizP7SMA/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto w-full py-5 bg-white text-indigo-600 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-indigo-50 transition-all hover:shadow-2xl active:scale-95"
                            >
                                Apply Now <Rocket size={16} />
                            </a>
                        </div>
                        <Users className="absolute -right-12 -top-12 text-white/10" size={200} />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};