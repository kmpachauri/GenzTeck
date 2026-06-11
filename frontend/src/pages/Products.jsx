import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ExternalLink, Zap, Map, Smartphone, Tablet } from 'lucide-react';
import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { ScrollReveal, StaggerReveal, StaggerItem, SectionHeader, Badge } from '../components/ui/Motion';
import { GlassCard } from '../components/ui/Cards';

const ProductsBackground = lazy(() => import('../components/3d/PageBackgrounds').then(m => ({ default: m.ProductsBackground })));

// ===== CANONICAL PRODUCT LIST (from brief) =====
const defaultProducts = [
  {
    _id: '1',
    name: 'QR & NFC Digital Menu + Order Management',
    status: 'live',
    emoji: '🍽️',
    tagline: 'Complete Restaurant Digitalization',
    shortDescription: 'Transform your restaurant with a complete digital system — from QR/NFC menus to live kitchen management. Everything your food business needs in one powerful platform.',
    image: '/images/qr_menu_mockup.png',
    color: '#00D4FF',
    accentColor: 'rgba(0,212,255,0.1)',
    features: [
      'QR & NFC Smart Menu System',
      'Customer Online Order Page',
      'Full Admin Panel & Analytics',
      'Waiter Management Panel',
      'Kitchen Display System (KDS)',
      'Live Order Status Tracking',
      'Table & Order Management',
      'GST Billing & Invoice Flow',
      'White-Label Branding Ready',
    ],
    idealFor: ['Restaurants', 'Cloud Kitchens', 'Cafes', 'Food Chains'],
    websiteUrl: null,
  },
  {
    _id: '2',
    name: 'GeoTrace',
    status: 'live',
    emoji: '🗺️',
    tagline: 'Real-Time Fleet Intelligence',
    shortDescription: 'Enterprise-grade GPS fleet tracking platform with live maps, geofencing, alerts, and comprehensive fleet analytics. Built specifically for Indian logistics companies.',
    image: '/images/geotrace_mockup.png',
    color: '#7B2FBE',
    accentColor: 'rgba(123,47,190,0.1)',
    features: [
      'Live GPS Tracking on Map',
      'Real-Time Geofencing Alerts',
      'Engine On/Off Monitoring',
      'Temperature & AC Monitoring',
      'Fuel Level Monitoring',
      'Driver Mobile App (Android)',
      'Route History Playback',
      'Fleet Dashboard & Reports',
      'WhatsApp Alert Integration',
    ],
    idealFor: ['Logistics Companies', 'Delivery Services', 'Field Sales', 'School Buses'],
    websiteUrl: null,
  },
  {
    _id: '3',
    name: 'NFC / QR Smart Standee',
    status: 'live',
    emoji: '📲',
    tagline: 'One Tap, Infinite Connections',
    shortDescription: 'A premium smart standee that connects customers to your Instagram, Google Reviews, WhatsApp, menus, and any link — with a single tap or scan.',
    image: '/images/nfc_standee_mockup.png',
    color: '#00FF88',
    accentColor: 'rgba(0,255,136,0.1)',
    features: [
      'Instagram Direct Link',
      'Google Review Link',
      'WhatsApp Chat Link',
      'Custom Landing Page Link',
      'Restaurant Menu Link',
      'UPI Payment Link',
      'Facebook Page Link',
      'YouTube Channel Link',
      'Any Custom Business Link',
    ],
    idealFor: ['Retail Shops', 'Restaurants', 'Salons', 'Hotels', 'Events'],
    websiteUrl: null,
  },
  {
    _id: '4',
    name: 'OneTap',
    status: 'live',
    emoji: '⚡',
    tagline: 'Your Digital Identity, One Tap Away',
    shortDescription: 'Smart NFC/QR-powered landing pages with 30+ premium themes. One link that connects your audience to everything — social, WhatsApp, reviews, and more.',
    image: '/images/onetap_mockup.png',
    color: '#FF6B6B',
    accentColor: 'rgba(255,107,107,0.1)',
    features: [
      'One-Page Premium Landing Page',
      'Full Admin Dashboard',
      '30+ Beautiful Themes',
      'Social Media Links',
      'WhatsApp Direct Link',
      'Instagram & Facebook',
      'Google Review Link',
      'QR & NFC Card Integration',
      'Lifetime Free Hosting',
    ],
    idealFor: ['Professionals', 'Creators', 'Businesses', 'Freelancers'],
    websiteUrl: 'https://onetap.genzteck.com',
  },
];

export default function Products({ products }) {
  const data = products?.length > 0 ? products : defaultProducts;

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070711 0%, #0D0D1E 100%)' }}>
        <Suspense fallback={null}>
          <ProductsBackground />
        </Suspense>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-[3px] uppercase mb-5">
            <span className="w-6 h-px bg-cyan-400" />Our Products<span className="w-6 h-px bg-cyan-400" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold font-heading leading-[1.1] mb-6">
            Built by GenzTeck,{' '}
            <span className="text-gradient">For Everyone</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8A8AA0] text-xl max-w-2xl mx-auto leading-relaxed">
            Our in-house products solve real problems for Indian businesses — available as ready-to-deploy solutions with full support.
          </motion.p>
        </div>
      </section>

      {/* Products — each as mini SaaS section */}
      <div className="max-w-[1200px] mx-auto px-6">
        {data.map((product, i) => {
          const isEven = i % 2 === 0;
          return (
            <ScrollReveal key={product._id || i} className="py-20 border-b border-white/[0.05] last:border-none">
              <div className={`flex flex-col lg:flex-row gap-14 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* Image side */}
                <div className="lg:w-1/2 w-full">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="relative rounded-3xl overflow-hidden"
                    style={{ boxShadow: `0 0 60px ${product.color}15, 0 20px 60px rgba(0,0,0,0.5)` }}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden rounded-3xl border border-white/[0.08]"
                      style={{ background: product.accentColor }}>
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={`${product.name} mockup`}
                          className="w-full h-full object-cover opacity-90"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-8xl opacity-30">{product.emoji}</div>
                        </div>
                      )}
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    {/* Status badge on image */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="live">● Live & Ready</Badge>
                    </div>
                  </motion.div>
                </div>

                {/* Content side */}
                <div className="lg:w-1/2 w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{product.emoji}</span>
                    <Badge variant="default">{product.tagline}</Badge>
                  </div>
                  <h2 className="text-[clamp(1.8rem,2.5vw,2.4rem)] font-bold font-heading mb-5 leading-tight">
                    {product.name}
                  </h2>
                  <p className="text-[#8A8AA0] text-lg leading-relaxed mb-8">
                    {product.shortDescription || product.description}
                  </p>

                  {/* Features grid */}
                  {product.features?.length > 0 && (
                    <div className="mb-8">
                      <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: product.color }}>
                        Key Features
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {product.features.map((f, j) => (
                          <div key={j} className="flex items-center gap-2.5 text-sm text-[#c0c0d0]">
                            <CheckCircle size={14} style={{ color: product.color, flexShrink: 0 }} />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Ideal for */}
                  {product.idealFor?.length > 0 && (
                    <div className="mb-8 flex flex-wrap gap-2">
                      {product.idealFor.map((uc, j) => (
                        <Badge key={j} variant="default">{uc}</Badge>
                      ))}
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="flex gap-3 flex-wrap">
                    {product.websiteUrl ? (
                      <a href={product.websiteUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm hover:-translate-y-0.5 transition-all"
                        style={{ background: `linear-gradient(135deg, ${product.color}, #7B2FBE)` }}>
                        Visit Product <ExternalLink size={14} />
                      </a>
                    ) : null}
                    <Link to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-white/20 text-[#8A8AA0] hover:text-white hover:border-white/30 transition-all">
                      Request a Demo <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold font-heading mb-4">
              Need a <span className="text-gradient">Custom Product</span>?
            </h2>
            <p className="text-[#8A8AA0] mb-10 text-lg max-w-xl mx-auto">
              We also build bespoke products from the ground up tailored to your exact specifications.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 transition-all text-base">
              Let's Build Together <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
