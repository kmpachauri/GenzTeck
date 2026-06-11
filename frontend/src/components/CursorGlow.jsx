import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const speed = 0.08;
      current.current.x += (pos.current.x - current.current.x) * speed;
      current.current.y += (pos.current.y - current.current.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor-glow fixed top-0 left-0 z-[1] pointer-events-none hidden lg:block"
      style={{ willChange: 'transform' }}
    />
  );
}
