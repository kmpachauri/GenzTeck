import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Suspense, lazy } from 'react';
import { ScrollReveal, StaggerReveal, StaggerItem, SectionHeader, Badge } from '../components/ui/Motion';

const DemoVideosBackground = lazy(() => import('../components/3d/PageBackgrounds').then(m => ({ default: m.DemoVideosBackground })));

const defaultCategories = ['All', 'Admin Panels', 'Mobile Apps', 'Restaurant Systems', 'GeoTrace', 'OneTap', 'Automation'];

const defaultVideos = [
  { _id: '1', title: 'Admin Panel Overview', category: 'Admin Panels', duration: 'Coming Soon' },
  { _id: '2', title: 'Restaurant Ordering System', category: 'Restaurant Systems', duration: 'Coming Soon' },
  { _id: '3', title: 'GeoTrace Fleet Tracking', category: 'GeoTrace', duration: 'Coming Soon' },
  { _id: '4', title: 'OneTap Setup & Demo', category: 'OneTap', duration: 'Coming Soon' },
  { _id: '5', title: 'Mobile App Walkthrough', category: 'Mobile Apps', duration: 'Coming Soon' },
  { _id: '6', title: 'Kitchen Display System', category: 'Restaurant Systems', duration: 'Coming Soon' },
  { _id: '7', title: 'Automation Workflow Demo', category: 'Automation', duration: 'Coming Soon' },
  { _id: '8', title: 'CRM Dashboard Tour', category: 'Admin Panels', duration: 'Coming Soon' },
  { _id: '9', title: 'QR Menu Ordering Demo', category: 'Restaurant Systems', duration: 'Coming Soon' },
  { _id: '10', title: 'GPS Live Tracking Demo', category: 'GeoTrace', duration: 'Coming Soon' },
  { _id: '11', title: 'NFC Smart Standee Setup', category: 'OneTap', duration: 'Coming Soon' },
  { _id: '12', title: 'E-Commerce Store Demo', category: 'Admin Panels', duration: 'Coming Soon' },
];

// Category color map
const categoryColors = {
  'Admin Panels': '#00D4FF',
  'Mobile Apps': '#7B2FBE',
  'Restaurant Systems': '#FF6B6B',
  'GeoTrace': '#00FF88',
  'OneTap': '#00D4FF',
  'Automation': '#7B2FBE',
};

function VideoCard({ video, i }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="glass rounded-2xl border border-white/[0.08] overflow-hidden group cursor-pointer hover:border-cyan-400/20 transition-colors duration-300"
    >
      {/* Thumbnail */}
      <div className="aspect-video relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${categoryColors[video.category] || '#00D4FF'}15, rgba(0,0,0,0.5))` }}>
        {/* Cinematic placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
          {/* Fake scanlines */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 3px)',
              backgroundSize: '100% 3px',
            }}
          />
          {/* Play button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-cyan-400/20 group-hover:border-cyan-400/50 transition-all duration-300"
          >
            <Play size={22} className="text-white ml-1 group-hover:text-cyan-400 transition-colors" fill="currentColor" />
          </motion.div>
        </div>
        {/* Duration/Coming Soon badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="amber">Coming Soon</Badge>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full text-white/80"
            style={{ background: `${categoryColors[video.category] || '#00D4FF'}25`, border: `1px solid ${categoryColors[video.category] || '#00D4FF'}30` }}>
            {video.category}
          </span>
        </div>
      </div>
      {/* Info */}
      <div className="p-4">
        <h3 className="text-white font-medium text-sm leading-tight group-hover:text-cyan-400 transition-colors">{video.title}</h3>
        <p className="text-[#5A5A7A] text-xs mt-1.5">{video.duration}</p>
      </div>
    </motion.div>
  );
}

export default function DemoVideos({ videos }) {
  const data = videos?.length > 0 ? videos : defaultVideos;
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? data : data.filter(v => v.category === activeCategory);

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070711 0%, #0D0717 100%)' }}>
        <Suspense fallback={null}>
          <DemoVideosBackground />
        </Suspense>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-purple-400 text-xs font-semibold tracking-[3px] uppercase mb-5">
            <span className="w-6 h-px bg-purple-400" />Video Library<span className="w-6 h-px bg-purple-400" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold font-heading leading-[1.1] mb-6">
            Demo <span className="text-gradient">Videos</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8A8AA0] text-xl max-w-2xl mx-auto leading-relaxed">
            Watch real walkthroughs of systems built by GenzTeck. Coming soon — subscribe for early access.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-white/[0.05] sticky top-[70px] z-50 bg-grid"
        style={{ backdropFilter: 'blur(20px)', background: 'rgba(7,7,17,0.9)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {defaultCategories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  activeCategory === cat
                    ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30'
                    : 'border border-white/[0.08] text-[#8A8AA0] hover:text-white hover:bg-white/5'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" staggerDelay={0.06}>
            {filtered.map((video, i) => (
              <StaggerItem key={video._id || i}>
                <VideoCard video={video} i={i} />
              </StaggerItem>
            ))}
          </StaggerReveal>
          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-[#8A8AA0]">No videos in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
