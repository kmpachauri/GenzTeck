import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Suspense, lazy } from 'react';
import { ScrollReveal, StaggerReveal, StaggerItem } from '../components/ui/Motion';

const DemoVideosBackground = lazy(() => import('../components/3d/PageBackgrounds').then(m => ({ default: m.DemoVideosBackground })));

const defaultVideos = [
  { _id: '1', title: 'Astrology Admin Panel', description: 'Booking, customer, service, and enquiry management walkthrough.' },
  { _id: '2', title: 'Direct Selling Admin Panel', description: 'Team, member, payout, product, and reporting dashboard walkthrough.' },
  { _id: '3', title: 'Direct Selling Website', description: 'Public website, product showcase, lead flow, and conversion sections.' },
  { _id: '4', title: 'Bakery/Cafe Admin Panel', description: 'Menu, orders, billing, inventory, and daily operations dashboard.' },
];

const accentColors = ['#00D4FF', '#7B2FBE', '#FF6B6B', '#00FF88'];

function getYouTubeId(url = '') {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^?&/]+)/);
  return match?.[1] || '';
}

function VideoCard({ video, i }) {
  const accent = accentColors[i % accentColors.length];
  const videoUrl = video.videoUrl || video.youtubeUrl || video.url || '';
  const youtubeId = getYouTubeId(videoUrl);
  const thumbnail = video.thumbnail || video.thumbnailUrl || (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : '');
  const CardTag = videoUrl ? 'a' : 'div';
  const cardProps = videoUrl ? { href: videoUrl, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <CardTag
        {...cardProps}
        className="block h-full glass rounded-2xl border border-white/[0.08] overflow-hidden group hover:border-cyan-400/25 transition-colors duration-300"
      >
        <div
          className="aspect-video relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${accent}1f, rgba(0,0,0,0.72))` }}
        >
          {thumbnail && (
            <img
              src={thumbnail}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070711] via-[#070711]/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 rounded-full bg-white/12 border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-cyan-400/20 group-hover:border-cyan-400/50 transition-all duration-300"
            >
              <Play size={22} className="text-white ml-1 group-hover:text-cyan-400 transition-colors" fill="currentColor" />
            </motion.div>
          </div>
          {!thumbnail && (
            <div className="absolute inset-x-5 bottom-5">
              <div className="h-1.5 w-20 rounded-full mb-3" style={{ background: accent }} />
              <div className="h-2 w-3/4 rounded-full bg-white/12 mb-2" />
              <div className="h-2 w-1/2 rounded-full bg-white/8" />
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-white font-heading font-semibold text-base leading-tight group-hover:text-cyan-400 transition-colors">{video.title}</h3>
          {video.description && (
            <p className="text-[#8A8AA0] text-sm leading-relaxed mt-2">{video.description}</p>
          )}
        </div>
      </CardTag>
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
            Watch premium walkthroughs of real business panels, websites, and digital systems built by GenzTeck.
          </motion.p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.06}>
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

      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#080814] p-8 md:p-10">
              <Suspense fallback={null}>
                <DemoVideosBackground />
              </Suspense>
              <motion.div
                className="absolute -right-16 -top-20 w-72 h-72 rounded-full border border-cyan-400/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute right-10 bottom-8 hidden md:grid grid-cols-3 gap-2 opacity-70"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                {[0, 1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="w-12 h-8 rounded-lg border border-cyan-400/20 bg-cyan-400/10" />
                ))}
              </motion.div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,255,0.18)_0%,transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(123,47,190,0.18)_0%,transparent_50%)]" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="max-w-2xl">
                  <p className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-[3px] mb-4">
                    <Sparkles size={14} /> Interactive Demo Gallery
                  </p>
                  <h2 className="font-heading font-bold text-white text-2xl md:text-4xl leading-tight mb-3">
                    Explore demos, then launch your own project
                  </h2>
                  <p className="text-[#8A8AA0] text-sm md:text-base leading-relaxed">
                    Browse live-style demos across business categories, then start a custom build with the exact features your business needs.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 shrink-0">
                  <Link
                    to="/demos"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:-translate-y-0.5 transition-all shadow-btn-primary hover:shadow-btn-primary-hover whitespace-nowrap"
                  >
                    Browse Demos <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold border border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.1] hover:border-cyan-400/35 hover:-translate-y-0.5 transition-all whitespace-nowrap"
                  >
                    Start Your Project <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
