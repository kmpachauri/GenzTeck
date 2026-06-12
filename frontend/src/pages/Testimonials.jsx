import { useState } from 'react';
import { Star, Quote, Filter, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal, StaggerReveal, StaggerItem, SectionHeader, Badge, CountUpStat } from '../components/ui/Motion';
import { GlassCard } from '../components/ui/Cards';

const TestimonialsBackground = lazy(() => import('../components/3d/PageBackgrounds').then(m => ({ default: m.TestimonialsBackground })));

const defaultTestimonials = [
  { _id: '1', name: 'Rahul Sharma', businessName: 'Prakrit Astro', rating: 5, type: 'Web Development', reviewText: 'GenzTeck built our astrology website in just 2 weeks. Our online consultation inquiries have tripled since launch! The design quality is exceptional and the admin panel is very easy to use.' },
  { _id: '2', name: 'Priya Patel', businessName: 'Nidhi Decor', rating: 5, type: 'Web Development', reviewText: 'The e-commerce and interior showcase site they built is exactly what we envisioned. Clean, product-focused, and it converts really well. Our catalog inquiries are up 200% since launch. Best investment we made this year.' },
  { _id: '3', name: 'Amit Rao', businessName: 'RLP Digital', rating: 5, type: 'Mobile App', reviewText: 'The mobile app developed for our members has greatly streamlined volunteer training, updates, and custom poster templates. Highly professional team and smooth experience!' },
  { _id: '4', name: 'Deepak Agarwal', businessName: 'DA Logistics', rating: 5, type: 'GeoTrace', reviewText: 'GeoTrace has completely transformed how we manage our fleet. We can track all 25 vehicles in real time, get instant alerts, and our fuel costs have reduced by 15%. Absolutely worth every rupee.' },
  { _id: '5', name: 'Sneha Verma', businessName: 'Sneha\'s Boutique', rating: 5, type: 'E-Commerce', reviewText: 'My boutique\'s online store was built beautifully. The product management is so simple that even I can update it myself. Sales have been great since launch! Highly recommended.' },
  { _id: '6', name: 'Ashish Kumar', businessName: 'TechSphere Pvt Ltd', rating: 5, type: 'Custom Software', reviewText: 'We needed a complex CRM system with multi-user roles and advanced reporting. GenzTeck delivered an incredible product in 6 weeks. Their technical expertise is outstanding.' },
];

const ratingBreakdown = [
  { stars: 5, percent: 94 },
  { stars: 4, percent: 4 },
  { stars: 3, percent: 1 },
  { stars: 2, percent: 0 },
  { stars: 1, percent: 1 },
];

function TestimonialCard({ t, delay = 0 }) {
  return (
    <StaggerItem>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="glass rounded-2xl border border-white/[0.08] p-7 h-full flex flex-col relative overflow-hidden group hover:border-cyan-400/20 transition-colors"
      >
        <div className="absolute top-4 right-4 text-cyan-400/10 group-hover:text-cyan-400/20 transition-colors">
          <Quote size={36} />
        </div>
        {/* Stars */}
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: t.rating || 5 }).map((_, i) => (
            <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
          ))}
        </div>
        <p className="text-[#c0c0d0] text-sm leading-relaxed mb-6 flex-1 italic">"{t.reviewText}"</p>
        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {t.name?.charAt(0) || 'C'}
          </div>
          <div>
            <div className="text-white font-semibold text-sm">{t.name}</div>
            <div className="text-[#8A8AA0] text-xs">{t.businessName}</div>
          </div>
          {t.type && <Badge variant="default" className="ml-auto">{t.type}</Badge>}
        </div>
      </motion.div>
    </StaggerItem>
  );
}

export default function Testimonials({ testimonials }) {
  const data = testimonials?.length > 0 ? testimonials : defaultTestimonials;
  const [filter, setFilter] = useState('All');

  const types = ['All', ...new Set(data.map(t => t.type || 'General').filter(Boolean))];
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
            {types.map(t => (
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
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold font-heading mb-4">
              Join Our <span className="text-gradient">Happy Clients</span>
            </h2>
            <p className="text-[#8A8AA0] mb-10 text-lg max-w-xl mx-auto">
              Start your project with GenzTeck and experience the difference that quality, speed, and dedication makes.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 transition-all text-base">
              Get Started Today →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
