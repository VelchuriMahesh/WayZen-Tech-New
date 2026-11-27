import React from 'react';
import { motion } from 'framer-motion';

export const Global3DLogo = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[1] flex items-center justify-center overflow-hidden transform-gpu select-none"
      style={{ perspective: 1200 }}
    >
      {/* 3D ROTATING LOGO CONTAINER: CLEAN 360° Y-AXIS ROTATION - ZERO BACKGROUND SHADE, ZERO TILT WOBBLE */}
      <motion.div
        animate={{ 
          rotateY: [0, 360],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 18, 
          ease: "linear" 
        }}
        style={{ 
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
          rotateX: 0,
          rotateZ: 0
        }}
        className="relative w-[280px] sm:w-[440px] md:w-[620px] lg:w-[760px] aspect-[1024/847] flex items-center justify-center transform-gpu"
      >
        {/* Front Face: Perfectly upright clean white logo watermark */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden" 
          }}
        >
          <img 
            src="/logo-white.png" 
            alt="WayZenTech 3D Logo" 
            className="w-full h-full object-contain opacity-25 sm:opacity-22 md:opacity-20 select-none pointer-events-none transform-gpu"
          />
        </div>

        {/* Back Face: Seamlessly oriented so text always reads forward throughout 360° spin */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            transform: "rotateY(180deg) translateZ(1px)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
        >
          <img 
            src="/logo-white.png" 
            alt="WayZenTech 3D Logo Reverse" 
            className="w-full h-full object-contain opacity-25 sm:opacity-22 md:opacity-20 select-none pointer-events-none transform-gpu"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Global3DLogo;
