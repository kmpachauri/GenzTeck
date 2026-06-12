import { useState } from 'react';
import { ArrowRight, ExternalLink, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal, StaggerReveal, StaggerItem, Badge, CountUpStat } from '../components/ui/Motion';

const MotionLink = motion(Link);

const TestimonialsBackground = lazy(() => import('../components/3d/PageBackgrounds').then(m => ({ default: m.TestimonialsBackground })));

const defaultTestimonials = [
  { _id: '1', name: 'Rahul Sharma', businessName: 'Prakrit Astro', rating: 5, type: 'Web Development', reviewText: 'GenzTeck built our astrology website in just 2 weeks. Our online consultation inquiries have tripled since launch! The design quality is exceptional and the admin panel is very easy to use.' },
  { _id: '2', name: 'Priya Patel', businessName: 'Nidhi Decor', rating: 5, type: 'Web Development', reviewText: 'The e-commerce and interior showcase site they built is exactly what we envisioned. Clean, product-focused, and it converts really well. Our catalog inquiries are up 200% since launch. Best investment we made this year.' },
  { _id: '3', name: 'Amit Rao', businessName: 'RLP Digital', rating: 5, type: 'Mobile App', reviewText: 'The mobile app developed for our members has greatly streamlined volunteer training, updates, and custom poster templates. Highly professional team and smooth experience!' },
  { _id: '4', name: 'Deepak Agarwal', businessName: 'DA Logistics', rating: 5, type: 'SaaS Products', reviewText: 'The tracking dashboard has completely transformed how we manage our fleet. We can track all 25 vehicles in real time, get instant alerts, and our fuel costs have reduced by 15%. Absolutely worth every rupee.' },
  { _id: '5', name: 'Sneha Verma', businessName: 'Sneha\'s Boutique', rating: 5, type: 'E-Commerce', reviewText: 'My boutique\'s online store was built beautifully. The product management is so simple that even I can update it myself. Sales have been great since launch! Highly recommended.' },
  { _id: '6', name: 'Ashish Kumar', businessName: 'TechSphere Pvt Ltd', rating: 5, type: 'Other', reviewText: 'We needed a complex CRM system with multi-user roles and advanced reporting. GenzTeck delivered an incredible product in 6 weeks. Their technical expertise is outstanding.' },
];

const GOOGLE_REVIEW_URL = 'https://g.page/r/CV6AhPIhEk6XEAI/review';
const categories = ['All', 'Web Development', 'Mobile App', 'E-Commerce', 'SaaS Products', 'Other'];

function normalizeType(type = 'Other') {
  if (type === 'GeoTrace') return 'SaaS Products';
  if (type === 'Custom Software') return 'Other';
  return categories.includes(type) ? type : 'Other';
}

function TestimonialCard({ t, delay = 0 }) {
  const type = normalizeType(t.type);

  return (
    <StaggerItem className="h-full">
      <motion.div
        whileHover={{ y: -10, rotateX: 1.5, rotateY: -1.5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="h-full rounded-2xl border border-white/[0.08] p-7 flex flex-col relative overflow-hidden group bg-white/[0.035] hover:bg-white/[0.055] hover:border-amber-400/30 transition-all duration-300 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.12)_0%,transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(0,212,255,0.08)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full border border-amber-400/10 group-hover:border-amber-400/25 group-hover:scale-125 transition-all duration-500" />
        <div className="absolute top-5 right-5 text-amber-400/10 group-hover:text-amber-400/25 transition-colors">
          <Quote size={42} />
        </div>
        <div className="relative z-10 flex items-start justify-between gap-4 mb-5">
          <div className="flex gap-0.5">
            {Array.from({ length: t.rating || 5 }).map((_, i) => (
              <Star key={i} size={15} className="text-amber-400 fill-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.25)]" />
            ))}
          </div>
          {type && <Badge variant="default">{type}</Badge>}
        </div>
        <p className="relative z-10 text-[#d8d8e8] text-sm leading-relaxed mb-7 flex-1">"{t.reviewText}"</p>
        <div className="relative z-10 flex items-center gap-3 pt-5 border-t border-white/[0.08]">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-[0_12px_30px_rgba(0,212,255,0.18)] group-hover:scale-105 transition-transform">
            {t.name?.charAt(0) || 'C'}
          </div>
          <div className="min-w-0">
            <div className="text-white font-semibold text-sm">{t.name}</div>
            <div className="text-[#8A8AA0] text-xs">{t.businessName}</div>
          </div>
        </div>
      </motion.div>
    </StaggerItem>
  );
}

export default function Testimonials({ testimonials }) {
  const data = (testimonials?.length > 0 ? testimonials : defaultTestimonials).map(t => ({ ...t, type: normalizeType(t.type) }));
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? data : data.filter(t => (t.type || 'General') === filter);

  const avgRating = (data.reduce((s, t) => s + (t.rating || 5), 0) / data.length).toFixed(1);

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070711 0%, #0D0D1A 100%)' }}>
        <Suspense fallback={null}>
          <TestimonialsBackground />
        </Suspense>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-[3px] uppercase mb-5">
            <span className="w-6 h-px bg-amber-400" />Client Stories<span className="w-6 h-px bg-amber-400" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold font-heading leading-[1.1] mb-6">
            Trusted by <span className="text-gradient">Real Businesses</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8A8AA0] text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Don't take our word for it — hear directly from business owners who've transformed their digital presence with GenzTeck.
          </motion.p>
          {/* Overall rating badge */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-4 px-6 py-4 glass rounded-2xl border border-amber-400/20">
            <div>
              <div className="text-4xl font-bold font-heading text-amber-400">{avgRating}</div>
              <div className="text-[#8A8AA0] text-xs mt-0.5">out of 5.0</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="flex gap-0.5 mb-1">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} className="text-amber-400 fill-amber-400" />)}
              </div>
              <div className="text-[#8A8AA0] text-xs">{data.length} verified reviews</div>
            </div>
          </motion.div>
          <motion.a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group relative mt-6 mx-auto flex w-full max-w-xl items-center justify-between gap-4 overflow-hidden rounded-3xl border border-amber-400/20 bg-white/[0.04] p-4 text-left shadow-[0_24px_80px_rgba(0,0,0,0.25)]"
          >
            <motion.div
              className="absolute -right-12 -top-16 h-36 w-36 rounded-full border border-amber-400/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.18)_0%,transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(0,212,255,0.1)_0%,transparent_50%)] opacity-80" />
            <div className="relative z-10 flex items-center gap-4 min-w-0">
              <div className="h-12 w-12 rounded-2xl bg-amber-400 text-[#11111A] flex items-center justify-center shadow-[0_0_35px_rgba(251,191,36,0.35)]">
                <Star size={22} className="fill-current" />
              </div>
              <div className="min-w-0">
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map(s => <Star key={s} size={13} className="text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-white font-heading font-semibold text-sm md:text-base">Love our work? Rate us on Google</p>
                <p className="text-[#8A8AA0] text-xs md:text-sm">Your review helps more businesses discover GenzTeck.</p>
              </div>
            </div>
            <div className="relative z-10 h-10 w-10 rounded-xl border border-white/10 bg-white/[0.06] flex items-center justify-center text-amber-300 group-hover:bg-amber-400 group-hover:text-[#11111A] transition-colors flex-shrink-0">
              <ExternalLink size={17} />
            </div>
          </motion.a>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="py-16 border-y border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <CountUpStat end={30} suffix="+" label="Happy Clients" />
          <CountUpStat end={50} suffix="+" label="Projects Completed" />
          <CountUpStat end={100} suffix="%" label="Would Recommend" />
          <CountUpStat end={24} suffix="hr" label="Avg Response Time" />
        </div>
      </div>

      {/* Filter */}
      <section className="py-10 border-b border-white/[0.05]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-2 flex-wrap">
            {categories.map(t => (
              <button key={t} onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === t
                    ? 'bg-amber-400/15 text-amber-400 border border-amber-400/30'
                    : 'border border-white/[0.08] text-[#8A8AA0] hover:text-white hover:bg-white/5'
                }`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08} key={filter}>
            {filtered.map((t, i) => (
              <TestimonialCard key={t._id || i} t={t} />
            ))}
          </StaggerReveal>
          {filtered.length === 0 && (
            <div className="text-center py-24 text-[#8A8AA0]">No reviews in this category yet.</div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-8 md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.13)_0%,transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(0,212,255,0.12)_0%,transparent_50%)]" />
              <div className="relative z-10">
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold font-heading mb-4">
                  Join Our <span className="text-gradient">Happy Clients</span>
                </h2>
                <p className="text-[#8A8AA0] mb-10 text-lg max-w-2xl mx-auto">
                  Start your project with GenzTeck or browse our demo gallery to see what we can build for your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 transition-all text-base w-full sm:w-auto">
                    Get Started Today <ArrowRight size={18} />
                  </Link>
                  <MotionLink
                    to="/demos"
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ y: 0 }}
                    className="relative inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:text-white overflow-hidden group shadow-[0_4px_0_0_rgba(0,212,255,0.2),0_0_15px_rgba(0,212,255,0.1)] active:translate-y-[4px] active:shadow-[0_0_0_0_transparent] transition-all duration-200 text-base w-full sm:w-auto"
                  >
                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                    Browse Demos <ExternalLink size={18} className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                  </MotionLink>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-6 relative overflow-hidden rounded-3xl border border-amber-400/15 bg-[#0B0B16] p-7 md:p-8 text-left">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.16)_0%,transparent_42%),radial-gradient(ellipse_at_bottom_right,rgba(0,212,255,0.1)_0%,transparent_48%)]" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/12 border border-amber-400/25 flex items-center justify-center flex-shrink-0">
                    <Star size={24} className="text-amber-400 fill-amber-400" />
                  </div>
                  <div>
                    <div className="flex gap-1 mb-2">
                      {[1,2,3,4,5].map(s => <Star key={s} size={15} className="text-amber-400 fill-amber-400" />)}
                    </div>
                    <h3 className="font-heading font-bold text-white text-xl mb-1">Worked with GenzTeck?</h3>
                    <p className="text-[#8A8AA0] text-sm leading-relaxed max-w-2xl">
                      Your Google review helps other business owners choose a reliable tech partner with confidence.
                    </p>
                  </div>
                </div>
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-amber-400 text-[#11111A] hover:bg-amber-300 hover:-translate-y-0.5 transition-all whitespace-nowrap"
                >
                  Rate Us on Google <ExternalLink size={17} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
