import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Suspense, lazy } from 'react';
import { StaggerReveal, StaggerItem } from '../components/ui/Motion';

const DemoVideosBackground = lazy(() => import('../components/3d/PageBackgrounds').then(m => ({ default: m.DemoVideosBackground })));

const defaultVideos = [
  { _id: '1', title: 'Admin Panel Overview' },
  { _id: '2', title: 'Restaurant Ordering System' },
  { _id: '3', title: 'GeoTrace Fleet Tracking' },
  { _id: '4', title: 'OneTap Setup & Demo' },
  { _id: '5', title: 'Mobile App Walkthrough' },
  { _id: '6', title: 'Kitchen Display System' },
  { _id: '7', title: 'Automation Workflow Demo' },
  { _id: '8', title: 'CRM Dashboard Tour' },
  { _id: '9', title: 'QR Menu Ordering Demo' },
  { _id: '10', title: 'GPS Live Tracking Demo' },
  { _id: '11', title: 'NFC Smart Standee Setup' },
  { _id: '12', title: 'E-Commerce Store Demo' },
];

const accentColors = ['#00D4FF', '#7B2FBE', '#FF6B6B', '#00FF88'];

function VideoCard({ video, i }) {
  const accent = accentColors[i % accentColors.length];

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="glass rounded-2xl border border-white/[0.08] overflow-hidden group cursor-pointer hover:border-cyan-400/20 transition-colors duration-300"
    >
      {/* Thumbnail */}
      <div className="aspect-video relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${accent}15, rgba(0,0,0,0.5))` }}>
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
      </div>
      {/* Info */}
      <div className="p-4">
        <h3 className="text-white font-medium text-sm leading-tight group-hover:text-cyan-400 transition-colors">{video.title}</h3>
      </div>
    </motion.div>
  );
}

export default function DemoVideos({ videos }) {
  const data = videos?.length > 0 ? videos : defaultVideos;

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
            Watch walkthroughs of systems, demos, and digital products built by GenzTeck.
          </motion.p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" staggerDelay={0.06}>
            {data.map((video, i) => (
              <StaggerItem key={video._id || i}>
                <VideoCard video={video} i={i} />
              </StaggerItem>
            ))}
          </StaggerReveal>
          {data.length === 0 && (
            <div className="text-center py-24">
              <p className="text-[#8A8AA0]">No demo videos are available right now.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
