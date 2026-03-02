import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Globe, ShieldCheck, TrendingUp } from 'lucide-react';

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Main Large Card */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-8 p-12 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden group border border-white/10"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-8">
                <Award size={18} /> Established Engineering Legacy
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
                2+ Years of <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
                  Technical Mastery.
                </span>
              </h2>
              <p className="text-slate-400 text-xl max-w-xl leading-relaxed font-medium">
                Bridging the gap between ambitious research and production ecosystems. 
                We don't just build code; we architect solutions that scale.
              </p>
            </div>
            {/* Animated Background Decoration */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/30 blur-[120px] rounded-full" 
            />
          </motion.div>

          {/* High-Impact Stats Card */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-4 p-10 bg-blue-600 rounded-[3rem] text-white flex flex-col justify-center items-center text-center shadow-2xl shadow-blue-200 relative overflow-hidden group"
          >
            <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               className="relative z-10"
            >
              <h3 className="text-8xl font-black mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                35+
              </h3>
              <p className="font-black uppercase tracking-[0.2em] text-xs opacity-90">Successful Deliveries</p>
              <div className="mt-6 flex items-center justify-center gap-2 bg-white/20 py-2 px-4 rounded-full backdrop-blur-md">
                <TrendingUp size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Industry & Research</span>
              </div>
            </motion.div>
            {/* Shine effect */}
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            />
          </motion.div>

          {/* Bottom Row - Features */}
          {[
            { icon: <Zap className="text-yellow-400" />, title: "Rapid Delivery", desc: "6-month complexity reduced to weeks." },
            { icon: <Globe className="text-blue-500" />, title: "Global Reach", desc: "Serving clients from BTM to Worldwide." },
            { icon: <ShieldCheck className="text-emerald-500" />, title: "Clean Architecture", desc: "Documentation & MLOps standard." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10, backgroundColor: "#f8fafc" }}
              className="md:col-span-4 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col gap-4 transition-all duration-300"
            >
              <div className="p-4 bg-white rounded-2xl shadow-sm w-fit group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-black text-slate-900 uppercase tracking-tight text-lg">{feature.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};