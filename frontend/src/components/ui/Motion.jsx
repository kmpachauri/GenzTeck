import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

// ===== SCROLL REVEAL WRAPPER =====
export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.7,
  once = true,
  ...props
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-10% 0px' });

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ===== STAGGER CHILDREN REVEAL =====
export function StaggerReveal({ children, className, staggerDelay = 0.1, parentDelay = 0, ...props }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: parentDelay } },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ===== STAGGER CHILD ITEM =====
export function StaggerItem({ children, className, direction = 'up', ...props }) {
  const directionMap = {
    up: { y: 30 },
    left: { x: 30 },
    right: { x: -30 },
    scale: { scale: 0.9 },
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directionMap[direction] },
        visible: { opacity: 1, y: 0, x: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ===== COUNT UP STATS =====
export function CountUpStat({ end, suffix = '', prefix = '', duration = 2, label, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div className="text-3xl md:text-4xl font-bold font-heading text-gradient">
        {prefix}{count}{suffix}
      </div>
      {label && <div className="text-sm text-[#8A8AA0] mt-1">{label}</div>}
    </div>
  );
}

// ===== PAGE TRANSITION WRAPPER =====
export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ===== SECTION WRAPPER =====
export function SectionWrapper({ children, className, id, grid = false, ...props }) {
  return (
    <section
      id={id}
      className={cn(
        'py-24 md:py-32 relative',
        grid && 'bg-grid',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

// ===== SECTION HEADER =====
export function SectionHeader({ label, title, subtitle, className, align = 'center' }) {
  const alignMap = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  };

  return (
    <ScrollReveal className={cn('flex flex-col mb-16', alignMap[align], className)}>
      {label && (
        <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-[3px] uppercase mb-4">
          <span className="w-6 h-px bg-cyan-400" />
          {label}
          <span className="w-6 h-px bg-cyan-400" />
        </div>
      )}
      <h2 className="text-3xl md:text-[2.75rem] font-bold font-heading leading-[1.15] mb-4 max-w-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#8A8AA0] text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}

// ===== PAGE HEADER =====
export function PageHeader({ label, title, subtitle, badge, children, className }) {
  return (
    <section
      className={cn(
        'pt-32 pb-20 relative overflow-hidden text-center',
        className
      )}
    >
      <div className="container mx-auto px-6 relative z-10">
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-[3px] uppercase mb-5"
          >
            <span className="w-6 h-px bg-cyan-400" />
            {label}
            <span className="w-6 h-px bg-cyan-400" />
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold font-heading leading-[1.1] mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8A8AA0] text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-3 justify-center mt-8 flex-wrap"
          >
            {badge}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

// ===== BADGE =====
export function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    green: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    amber: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
    red: 'bg-red-500/10 text-red-400 border-red-500/20',
    live: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    'coming-soon': 'bg-amber-400/10 text-amber-400 border-amber-400/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border tracking-wide',
        variants[variant] || variants.default,
        className
      )}
    >
      {children}
    </span>
  );
}
