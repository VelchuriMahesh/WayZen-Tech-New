import React from 'react';
import { motion } from 'framer-motion';

export const Global3DLogo = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[1] flex items-center justify-center overflow-hidden transform-gpu select-none"
      style={{ perspective: 1200 }}
    >
      {/* High-Tech Amber/Lime & Cyan Ambient Glow Field */}
      <div className="absolute w-[300px] sm:w-[480px] md:w-[650px] aspect-square rounded-full bg-[#cdd32c]/20 blur-[90px] sm:blur-[120px] pointer-events-none scale-90 transform-gpu" />
      <div className="absolute w-[220px] sm:w-[360px] md:w-[500px] aspect-square rounded-full bg-blue-500/15 blur-[100px] pointer-events-none transform-gpu" />

      {/* 3D Rotating Logo Container with Continuous 360° Y-Axis Rotation */}
      <motion.div
        animate={{ 
          rotateY: [0, 360],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 14, 
          ease: "linear" 
        }}
        style={{ 
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
          rotateX: 10,
          rotateZ: -4
        }}
        className="relative w-[280px] sm:w-[420px] md:w-[580px] lg:w-[700px] aspect-[1024/847] flex items-center justify-center transform-gpu"
      >
        {/* Front Face: Crisp White Glowing 3D Logo Mark */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: "visible" }}
        >
          <img 
            src="/logo-white.png" 
            alt="WayZenTech 3D Logo" 
            className="w-full h-full object-contain opacity-60 sm:opacity-45 md:opacity-35 select-none pointer-events-none transform-gpu drop-shadow-[0_0_35px_rgba(205,211,44,0.45)]"
          />
        </div>

        {/* Reverse Face: 3D Depth Layer for Seamless 360° Full Revolution */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            backfaceVisibility: "visible",
            transform: "rotateY(180deg) translateZ(1px)" 
          }}
        >
          <img 
            src="/logo-white.png" 
            alt="WayZenTech 3D Logo Reverse" 
            className="w-full h-full object-contain opacity-55 sm:opacity-40 md:opacity-30 select-none pointer-events-none transform-gpu drop-shadow-[0_0_30px_rgba(205,211,44,0.4)]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Global3DLogo;
