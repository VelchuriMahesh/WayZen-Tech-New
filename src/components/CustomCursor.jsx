import React, { useEffect, useRef } from 'react';

/**
 * High-Performance Hardware-Accelerated Ambient Cursor Follower
 * - ZERO React state re-renders on mousemove
 * - Never hides native OS cursor (instant 0ms hardware response)
 * - Uses requestAnimationFrame with transform: translate3d() on dedicated GPU layer
 * - No expensive mix-blend-mode calculations
 */
export const CustomCursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });
  const isHovered = useRef(false);
  const isClicking = useRef(false);
  const isVisible = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    if (typeof window === 'undefined') return;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const onMouseMove = (e) => {
      pos.current.targetX = e.clientX;
      pos.current.targetY = e.clientY;
      if (!isVisible.current) {
        isVisible.current = true;
        ring.style.opacity = '1';
        dot.style.opacity = '1';
      }
    };

    const onMouseDown = () => {
      isClicking.current = true;
    };

    const onMouseUp = () => {
      isClicking.current = false;
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      ring.style.opacity = '0';
      dot.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible.current = true;
      ring.style.opacity = '1';
      dot.style.opacity = '1';
    };

    // Passive listener for hover detection without deep DOM climbing
    const onMouseOver = (e) => {
      const el = e.target;
      if (!el) return;
      const tagName = el.tagName;
      if (
        tagName === 'BUTTON' ||
        tagName === 'A' ||
        tagName === 'INPUT' ||
        tagName === 'TEXTAREA' ||
        el.getAttribute?.('role') === 'button' ||
        el.classList?.contains('cursor-pointer')
      ) {
        isHovered.current = true;
      } else {
        isHovered.current = false;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    // Smooth Lerp loop on GPU via requestAnimationFrame
    const loop = () => {
      if (isVisible.current) {
        // Linear interpolation for silky smooth ring following
        pos.current.x += (pos.current.targetX - pos.current.x) * 0.22;
        pos.current.y += (pos.current.targetY - pos.current.y) * 0.22;

        const size = isHovered.current ? 48 : 30;
        const scale = isClicking.current ? 0.8 : 1;
        const ringX = pos.current.x - size / 2;
        const ringY = pos.current.y - size / 2;

        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;
        ring.style.width = `${size}px`;
        ring.style.height = `${size}px`;
        ring.style.backgroundColor = isHovered.current ? 'rgba(205, 211, 44, 0.2)' : 'rgba(205, 211, 44, 0.05)';
        ring.style.borderColor = isHovered.current ? '#cdd32c' : 'rgba(205, 211, 44, 0.5)';

        // Dot tracks target directly with 0 lag
        const dotX = pos.current.targetX - 3;
        const dotY = pos.current.targetY - 3;
        dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Smooth Ambient Follower Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border border-[#cdd32c]/50 bg-[#cdd32c]/5 pointer-events-none opacity-0 transition-opacity duration-300 will-change-transform shadow-[0_0_15px_rgba(205,211,44,0.25)]"
        style={{
          width: '30px',
          height: '30px',
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />

      {/* Center Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#cdd32c] pointer-events-none opacity-0 transition-opacity duration-200 will-change-transform shadow-[0_0_8px_#cdd32c]"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />
    </div>
  );
};

export default CustomCursor;
