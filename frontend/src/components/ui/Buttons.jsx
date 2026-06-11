import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../../lib/utils';

export function MagneticButton({ children, className, strength = 0.3, ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function PrimaryButton({ children, className, as: Component = 'button', ...props }) {
  return (
    <Component
      className={cn(
        'inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[0.95rem]',
        'bg-gradient-to-r from-cyan-400 to-purple-500 text-white',
        'shadow-btn-primary hover:shadow-btn-primary-hover',
        'transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]',
        'relative overflow-hidden group',
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  );
}

export function OutlineButton({ children, className, as: Component = 'button', ...props }) {
  return (
    <Component
      className={cn(
        'inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[0.95rem]',
        'border border-cyan-400/30 text-cyan-400 bg-transparent',
        'hover:bg-cyan-400/10 hover:border-cyan-400 hover:-translate-y-0.5',
        'transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function GhostButton({ children, className, as: Component = 'button', ...props }) {
  return (
    <Component
      className={cn(
        'inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm',
        'border border-white/10 text-[#8A8AA0] bg-transparent',
        'hover:text-white hover:border-white/20 hover:bg-white/5',
        'transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
