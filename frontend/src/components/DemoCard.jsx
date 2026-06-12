import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function DemoCard({ template }) {
  const navigate = useNavigate();
  const [brandName, setBrandName] = useState('');
  const cardRef = useRef(null);

  // Motion values for the dynamic 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handlePreview = (e) => {
    e.preventDefault();
    const finalBrand = brandName.trim() || template.defaultBrand;
    navigate(`/demos/${template.slug}?brand=${encodeURIComponent(finalBrand)}`);
  };

  // Refined vertical elevation shadow glow styles (enhanced intensity)
  const glowMap = {
    cyan: 'hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(6,182,212,0.35)]',
    green: 'hover:border-emerald-400/50 hover:shadow-[0_20px_60px_rgba(16,185,129,0.35)]',
    purple: 'hover:border-purple-500/50 hover:shadow-[0_20px_60px_rgba(168,85,247,0.35)]',
    amber: 'hover:border-amber-400/50 hover:shadow-[0_20px_60px_rgba(245,158,11,0.35)]'
  };

  const ringMap = {
    cyan: 'focus:border-cyan-400 focus:ring-cyan-400/20',
    green: 'focus:border-emerald-400 focus:ring-emerald-400/20',
    purple: 'focus:border-purple-500 focus:ring-purple-500/20',
    amber: 'focus:border-amber-400 focus:ring-amber-400/20'
  };

  // Group-hover input glow mappings
  const inputHoverMap = {
    cyan: 'group-hover:border-cyan-500/30 group-hover:bg-cyan-950/10',
    green: 'group-hover:border-emerald-500/30 group-hover:bg-emerald-950/10',
    purple: 'group-hover:border-purple-500/30 group-hover:bg-purple-950/10',
    amber: 'group-hover:border-amber-500/30 group-hover:bg-amber-950/10'
  };

  const btnMap = {
    cyan: 'bg-cyan-500 hover:bg-cyan-600 text-black shadow-glow-cyan',
    green: 'bg-emerald-500 hover:bg-emerald-600 text-black shadow-glow-green',
    purple: 'bg-purple-600 hover:bg-purple-700 text-white shadow-glow-purple',
    amber: 'bg-amber-500 hover:bg-amber-600 text-black shadow-glow-amber'
  };

  const glowStyle = glowMap[template.glowColor] || glowMap.cyan;
  const ringStyle = ringMap[template.glowColor] || ringMap.cyan;
  const btnStyle = btnMap[template.glowColor] || btnMap.cyan;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -10,
        scale: 1.015,
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      className={`glass rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col h-full group relative transition-all duration-300 ${glowStyle} shadow-lg`}
    >
      {/* Sweeping Light Shine Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

      {/* Dynamic full card background wash glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none z-0 rounded-[inherit]"
        style={{
          backgroundColor: 
            template.glowColor === 'green' ? '#10b981' : 
            template.glowColor === 'cyan' ? '#06b6d4' : 
            template.glowColor === 'purple' ? '#a855f7' : 
            '#f59e0b'
        }}
      />

      {/* Radial center glow background */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 rounded-[inherit]"
        style={{
          background: `radial-gradient(circle at center, ${
            template.glowColor === 'green' ? 'rgba(16,185,129,0.08)' : 
            template.glowColor === 'cyan' ? 'rgba(6,182,212,0.08)' : 
            template.glowColor === 'purple' ? 'rgba(168,85,247,0.08)' : 
            'rgba(245,158,11,0.08)'
          } 0%, transparent 70%)`
        }}
      />

      {/* Card Header Image (Larger Area) */}
      <div className="relative h-60 sm:h-64 md:h-72 w-full overflow-hidden bg-zinc-900 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#070711] via-transparent to-transparent z-10" />
        <img
          src={template.image}
          alt={template.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          onError={(e) => {
            e.target.onerror = null;
            e.target.parentNode.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)';
            e.target.style.display = 'none';
          }}
        />
        {/* Category & Badge */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <span className="text-[10px] font-bold tracking-wider uppercase bg-slate-900/60 backdrop-blur-md text-white border border-white/10 px-2.5 py-1 rounded-full">
            {template.category}
          </span>
          <span className="text-[10px] font-bold tracking-wider uppercase bg-cyan-500/20 backdrop-blur-md text-cyan-400 border border-cyan-500/30 px-2.5 py-1 rounded-full animate-pulse-dot flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-ping" />
            Interactive
          </span>
        </div>
      </div>

      {/* Card Content with Premium Spacing */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-10">
        <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {template.title}
        </h3>
        <p className="text-[#8A8AA0] text-sm leading-relaxed mb-6 flex-1 font-light">
          {template.description}
        </p>

        {/* Feature Tags */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {template.features.slice(0, 4).map((feat, index) => (
            <div key={index} className="flex items-center gap-2 text-xs text-[#8A8AA0]">
              <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>

        {/* Brand Name Input Form */}
        <form onSubmit={handlePreview} className="mt-auto space-y-5">
          <div className="space-y-2">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8A8AA0]">
              Enter Your Brand Name
            </label>
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder={`e.g. ${template.defaultBrand}`}
              className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#5A5A7A] focus:outline-none focus:ring-2 transition-all ${ringStyle} ${inputHoverMap[template.glowColor] || inputHoverMap.cyan}`}
            />
          </div>

          <button
            type="submit"
            className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.01] active:scale-[0.99] relative overflow-hidden group/btn ${btnStyle}`}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
            <span className="relative z-10 flex items-center gap-2">
              Launch Live Demo
              <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
            </span>
          </button>
        </form>
      </div>
    </motion.div>
  );
}
