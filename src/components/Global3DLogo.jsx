import React from 'react';

export const Global3DLogo = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] flex items-center justify-center overflow-hidden transform-gpu select-none">
      {/* CLEAN STATIC LOGO WATERMARK - ZERO BACKGROUND SHADE, ZERO ROTATION DISTORTION */}
      <div className="relative w-[300px] sm:w-[480px] md:w-[680px] lg:w-[820px] aspect-[1024/847] flex items-center justify-center transform-gpu">
        <img 
          src="/logo-white.png" 
          alt="WayZenTech Background Logo" 
          className="w-full h-full object-contain opacity-25 sm:opacity-22 md:opacity-20 select-none pointer-events-none transform-gpu"
        />
      </div>
    </div>
  );
};

export default Global3DLogo;
