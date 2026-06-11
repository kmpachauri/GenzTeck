import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../../lib/utils';

export function TiltCard({ children, className, intensity = 10, ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), springConfig);
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig);
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={cn('relative', className)}
      {...props}
    >
      {/* Dynamic glow follow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(0,212,255,0.08) 0%, transparent 60%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

export function GlassCard({ children, className, glowColor = 'cyan', hover = true, ...props }) {
  const glowMap = {
    cyan: 'hover:border-cyan-400/30 hover:shadow-glow-cyan',
    purple: 'hover:border-purple-500/30 hover:shadow-glow-purple',
    green: 'hover:border-emerald-400/30 hover:shadow-glow-green',
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'glass rounded-2xl border border-white/[0.08] p-8 relative overflow-hidden group transition-all duration-300',
        hover && glowMap[glowColor],
        className
      )}
      {...props}
    >
      {/* Inner glow on hover */}
      <div className="pointer-events-none absolute inset-0 bg-grad-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[inherit]" />
      {children}
    </motion.div>
  );
}

export function GradientCard({ children, className, from = '#00D4FF', to = '#7B2FBE', ...props }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn('relative rounded-2xl overflow-hidden group', className)}
      {...props}
    >
      <div
        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      />
      <div className="relative z-10 glass rounded-[inherit] border border-white/[0.08] h-full">
        {children}
      </div>
    </motion.div>
  );
}
