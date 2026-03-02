"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Zap, ArrowRight, MousePointer2 } from 'lucide-react';

export const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 1. SCROLLING WATERMARK: "WAYZEN" slides horizontally in the background
  const xMove = useTransform(scrollYProgress, [0, 1], ["30%", "-50%"]);
  
  // 2. IMAGE REVEAL: "Like Hide" shutter effect
  // This animates the clip-path from a small slit to a full reveal
  const revealMask = useTransform(scrollYProgress, [0.2, 0.4], ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"]);
  const imgScale = useTransform(scrollYProgress, [0.2, 0.5], [1.3, 1]);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative min-h-screen bg-white py-32 px-6 overflow-hidden flex items-center"
    >
      {/* --- KINETIC WATERMARK --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.h2 
          style={{ x: xMove }}
          className="text-[28vw] font-black text-slate-100/60 whitespace-nowrap uppercase tracking-tighter"
        >
          WAYZEN WAYZEN WAYZEN
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* LEFT SIDE: THE NEW DEFINITION */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px]">Mission Statement</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
              THE WAY FOR <br />
              <span className="text-blue-600">Z-GEN.</span>
            </h2>
            
            <p className="text-xl text-slate-500 max-w-lg font-light leading-relaxed">
              We are defining the smart and strategic path for the new digital generation in technology.
            </p>
          </motion.div>

          {/* BRAND BREAKDOWN */}
          <div className="grid gap-8">
            {/* WAY */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="group flex gap-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0 shadow-xl">
                <Compass className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 uppercase italic">Way</h3>
                <p className="text-slate-500 mt-1">A smart, strategic, and engineered path designed to navigate technical complexity with absolute precision.</p>
              </div>
            </motion.div>

            {/* ZEN (Z-GEN) */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="group flex gap-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 shadow-xl">
                <Zap className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-blue-600 uppercase italic">Zen (Z-Gen)</h3>
                <p className="text-slate-500 mt-1">The new digital generation. We build for the fast-paced, intuitive, and hyper-connected world of Gen-Z.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE: THE "HIDE & REVEAL" PORTRAIT */}
        <div className="relative">
          {/* Animated Tech Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-10 border-[1px] border-slate-100 rounded-full"
          />
          
          <motion.div
            style={{ clipPath: revealMask }}
            className="relative z-10 w-full max-w-[480px] aspect-[4/5] mx-auto rounded-[3rem] overflow-hidden shadow-2xl bg-slate-50"
          >
            {/* Founder Image (Natural Colors) */}
            <motion.img 
              style={{ scale: imgScale }}
              src="about.jpg" 
              alt="Mahesh Velchuri"
              className="w-full h-full object-cover"
            />
            
            {/* High-Tech Overlay when revealed */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

            {/* Founder ID Tag */}
            <div className="absolute bottom-10 left-0 right-0 px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20"
              >
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tighter">Mahesh Velchuri</h3>
                    <p className="text-blue-400 font-mono text-[9px] uppercase tracking-[0.3em] mt-1">Lead Architect & Founder</p>
                  </div>
                  <MousePointer2 className="text-white/50" size={20} />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Decorative Experience Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="absolute -top-6 -right-6 bg-white border border-slate-100 p-6 rounded-3xl shadow-xl z-20 flex flex-col items-center"
          >
            <span className="text-4xl font-black text-slate-900">2+</span>
            <span className="text-[8px] font-black uppercase tracking-widest text-blue-600">Years Exp</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};