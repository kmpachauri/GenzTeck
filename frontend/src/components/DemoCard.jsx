import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function DemoCard({ template }) {
  const navigate = useNavigate();
  const [brandName, setBrandName] = useState('');

  const handlePreview = (e) => {
    e.preventDefault();
    const finalBrand = brandName.trim() || template.defaultBrand;
    navigate(`/demos/${template.slug}?brand=${encodeURIComponent(finalBrand)}`);
  };

  // Border glow styles based on template config
  const glowMap = {
    cyan: 'hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
    green: 'hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
    purple: 'hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    amber: 'hover:border-amber-400/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]'
  };

  const ringMap = {
    cyan: 'focus:border-cyan-400 focus:ring-cyan-400/20',
    green: 'focus:border-emerald-400 focus:ring-emerald-400/20',
    purple: 'focus:border-purple-500 focus:ring-purple-500/20',
    amber: 'focus:border-amber-400 focus:ring-amber-400/20'
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
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`glass rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col h-full group transition-all duration-300 ${glowStyle}`}
    >
      {/* Card Header Image */}
      <div className="relative h-48 md:h-52 w-full overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-t from-[#070711] via-transparent to-transparent z-10" />
        <img
          src={template.image}
          alt={template.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            // Fallback gradient
            e.target.parentNode.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)';
            e.target.style.display = 'none';
          }}
        />
        {/* Category & Badge */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <span className="text-[10px] font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md text-white border border-white/10 px-2.5 py-1 rounded-full">
            {template.category}
          </span>
          <span className="text-[10px] font-bold tracking-wider uppercase bg-cyan-500/20 backdrop-blur-md text-cyan-400 border border-cyan-500/30 px-2.5 py-1 rounded-full animate-pulse-dot">
            Interactive
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-white transition-colors">
          {template.title}
        </h3>
        <p className="text-[#8A8AA0] text-sm leading-relaxed mb-5 flex-1">
          {template.description}
        </p>

        {/* Feature Tags */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {template.features.slice(0, 4).map((feat, index) => (
            <div key={index} className="flex items-center gap-1.5 text-xs text-[#8A8AA0]">
              <CheckCircle2 size={12} className="text-emerald-400 flex-shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>

        {/* Brand Name Input Form */}
        <form onSubmit={handlePreview} className="mt-auto space-y-4">
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8A8AA0]">
              Enter Your Brand Name
            </label>
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder={`e.g. ${template.defaultBrand}`}
              className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#5A5A7A] focus:outline-none focus:ring-2 transition-all ${ringStyle}`}
            />
          </div>

          <button
            type="submit"
            className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] ${btnStyle}`}
          >
            <span>Open Live Preview</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}
