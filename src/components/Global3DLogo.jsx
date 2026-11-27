import React from 'react';
import { motion } from 'framer-motion';

export const Global3DLogo = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden transform-gpu select-none"
      style={{ perspective: 1200 }}
    >
      {/* Dynamic Ambient Glow Field */}
      <div className="absolute w-[320px] sm:w-[500px] md:w-[700px] aspect-square rounded-full bg-[#cdd32c]/15 blur-3xl pointer-events-none scale-75 transform-gpu" />
      <div className="absolute w-[240px] sm:w-[380px] md:w-[520px] aspect-square rounded-full bg-blue-500/10 blur-[100px] pointer-events-none transform-gpu" />

      {/* 3D Rotating Logo Container with Continuous 360° Rotation */}
      <motion.div
        animate={{ 
          rotateY: [0, 360],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 16, 
          ease: "linear" 
        }}
        style={{ 
          transformStyle: "preserve-3d",
          transformOrigin: "center center"
        }}
        className="relative w-[300px] sm:w-[460px] md:w-[640px] lg:w-[780px] aspect-[1024/847] flex items-center justify-center transform-gpu"
      >
        {/* Front Face of the 3D Logo */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: "visible" }}
        >
          <img 
            src="/logo-watermark.png" 
            alt="WayZenTech 3D Logo" 
            className="w-full h-full object-contain opacity-45 sm:opacity-35 md:opacity-28 select-none pointer-events-none transform-gpu drop-shadow-[0_0_35px_rgba(205,211,44,0.35)]"
          />
        </div>

        {/* Back Face for realistic 3D depth when rotating through 180 degrees */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            backfaceVisibility: "visible",
            transform: "rotateY(180deg) translateZ(1px)" 
          }}
        >
          <img 
            src="/logo-watermark.png" 
            alt="WayZenTech 3D Logo Reverse" 
            className="w-full h-full object-contain opacity-40 sm:opacity-30 md:opacity-24 select-none pointer-events-none transform-gpu drop-shadow-[0_0_35px_rgba(205,211,44,0.3)]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Global3DLogo;
