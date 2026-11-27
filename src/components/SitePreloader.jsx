import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SitePreloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth progress counter from 0 to 100% over ~1.4s
    const startTime = Date.now();
    const duration = 1400; // ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          if (onComplete) onComplete();
        }, 300);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="site-preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            y: '-100%',
            opacity: 0.9,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-[#070a12] flex flex-col items-center justify-center overflow-hidden select-none pointer-events-auto"
        >
          {/* Subtle Ambient Tech Glow Field */}
          <div className="absolute w-[340px] sm:w-[480px] aspect-square rounded-full bg-[#cdd32c]/10 blur-[100px] pointer-events-none" />
          <div className="absolute w-[260px] sm:w-[380px] aspect-square rounded-full bg-blue-500/10 blur-[90px] pointer-events-none" />

          {/* Central Logo & Tech Ring */}
          <div className="relative flex flex-col items-center justify-center z-10">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d121f] border border-[#cdd32c]/30 text-[#cdd32c] text-[10px] sm:text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(205,211,44,0.15)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#cdd32c] animate-ping" />
              <span>You Dream It, We Build It.</span>
            </motion.div>

            {/* 3D Rotating Logo Container */}
            <div 
              className="relative w-[180px] sm:w-[240px] md:w-[280px] aspect-[1024/847] flex items-center justify-center mb-8"
              style={{ perspective: 1000 }}
            >
              {/* Outer Orbiting Cyber Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-[-20px] sm:inset-[-30px] rounded-full border border-dashed border-[#cdd32c]/25 pointer-events-none"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute inset-[-8px] sm:inset-[-14px] rounded-full border border-[#cdd32c]/15 pointer-events-none"
              />

              {/* 3D Continuous 360° Rotating Logo */}
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  scale: [0.95, 1.02, 0.95]
                }}
                transition={{ 
                  rotateY: { repeat: Infinity, duration: 6, ease: "linear" },
                  scale: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                }}
                style={{ 
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center"
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Front Face */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                  <img 
                    src="/logo-white.png" 
                    alt="WayZenTech Loading" 
                    className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(205,211,44,0.4)]"
                  />
                </div>

                {/* Reverse Face (Correctly Oriented via scaleX(-1)) */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ 
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden" 
                  }}
                >
                  <img 
                    src="/logo-white.png" 
                    alt="WayZenTech Loading Reverse" 
                    className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(205,211,44,0.4)]"
                    style={{ transform: "scaleX(-1)" }}
                  />
                </div>
              </motion.div>
            </div>

            {/* High-Tech Progress Bar */}
            <div className="w-[200px] sm:w-[260px] flex flex-col items-center gap-2">
              <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#cdd32c]/60 via-[#cdd32c] to-[#e4eb34] shadow-[0_0_12px_#cdd32c]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>

              {/* Percentage & Micro-Text */}
              <div className="w-full flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span className="tracking-widest uppercase text-[#cdd32c]">INITIALIZING</span>
                <span className="font-semibold text-white tracking-wider">{progress}%</span>
              </div>
            </div>
          </div>

          {/* Bottom Branding */}
          <div className="absolute bottom-8 text-center text-[11px] font-mono tracking-widest text-gray-500 uppercase">
            WayZenTech // Next-Gen Digital Foundry
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SitePreloader;
