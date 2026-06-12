import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ExternalLink, Loader2, Check, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ScrollReveal, StaggerReveal, StaggerItem, SectionHeader, Badge } from '../components/ui/Motion';
import { publicAPI } from '../api';

const ProductsBackground = lazy(() => import('../components/3d/PageBackgrounds').then(m => ({ default: m.ProductsBackground })));

const SERVICE_OPTIONS = ['Web Development', 'Mobile App', 'Restaurant System', 'GPS Tracking', 'Automation', 'E-Commerce', 'Admin Dashboard', 'SaaS', 'Other'];

// ===== CANONICAL PRODUCT LIST (updated with websiteUrl mocks and sorted) =====
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
    websiteUrl: 'https://menu.genzteck.com',
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
    websiteUrl: 'https://standee.genzteck.com',
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
    websiteUrl: 'https://geotrace.genzteck.com',
  },
];

// Individual Product Card Component for clean 3D Mouse Tilt isolation
function ProductCard({ product, isEven, handleRequestDemo }) {
  const cardRef = useRef(null);
  const [imgFailed, setImgFailed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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

  const getFallbackImage = (productName) => {
    if (productName.includes('GeoTrace')) {
      return 'https://images.unsplash.com/photo-1508847154043-be12a26c86c5?auto=format&fit=crop&w=800&q=80';
    }
    if (productName.includes('OneTap')) {
      return 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80';
    }
    if (productName.includes('Menu')) {
      return 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80';
    }
    if (productName.includes('Standee')) {
      return 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80';
    }
    return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80';
  };

  const imgUrl = imgFailed ? getFallbackImage(product.name) : product.image;

  return (
    <ScrollReveal className="py-28 md:py-32 border-b border-white/[0.05] last:border-none relative z-10">
      {/* Background glow orb wash behind the card */}
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none opacity-[0.03] transition-opacity duration-1000 group-hover:opacity-[0.06] z-0"
        style={{
          background: `radial-gradient(circle, ${product.color} 0%, transparent 70%)`
        }}
      />

      <div className={`flex flex-col lg:flex-row gap-16 items-center relative z-10 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        
        {/* Image side - Upgraded with premium 3D tilt wrapper */}
        <div className="lg:w-[54%] w-full flex justify-center">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
              handleMouseLeave();
              setHovered(false);
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            className="w-full relative rounded-3xl overflow-hidden glass p-3 border border-white/[0.08] group transition-all duration-300 shadow-2xl hover:border-white/20"
            style={{ 
              boxShadow: hovered 
                ? `0 25px 70px -10px rgba(0,0,0,0.7), 0 0 50px ${product.color}25`
                : `0 20px 50px -12px rgba(0,0,0,0.5), 0 0 30px ${product.color}10`
            }}
          >
            {/* Animated border glow overlay */}
            <div 
              className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
              style={{
                padding: '1.5px',
                background: `linear-gradient(90deg, ${product.color}, #7B2FBE, ${product.color})`,
                backgroundSize: '200% 200%',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                animation: 'shimmer 3s linear infinite',
                transform: 'translateZ(5px)'
              }}
            />

            {/* Sweeping reflection shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl bg-zinc-950 border border-white/[0.04]"
              style={{ 
                background: product.accentColor,
                transform: 'translateZ(20px)',
                transformStyle: 'preserve-3d'
              }}>
              {!isLoaded && !imgFailed && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm z-10">
                  <Loader2 className="animate-spin text-cyan-400" size={24} />
                </div>
              )}
              <img
                src={imgUrl}
                alt={`${product.name} mockup`}
                className={`w-full h-full object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-108 ${isLoaded ? 'blur-0 scale-100' : 'blur-md scale-105'}`}
                onLoad={() => setIsLoaded(true)}
                onError={() => {
                  setImgFailed(true);
                  setIsLoaded(true);
                }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-75" />
            </div>

            {/* Status badge */}
            <div className="absolute top-6 left-6 z-20" style={{ transform: 'translateZ(35px)' }}>
              <Badge variant="live">● Live & Ready</Badge>
            </div>
          </motion.div>
        </div>

        {/* Content side */}
        <div className="lg:w-[46%] w-full flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">{product.emoji}</span>
            <Badge variant="default">{product.tagline}</Badge>
          </div>
          <h2 className="text-[clamp(1.8rem,2.5vw,2.4rem)] font-bold font-heading mb-5 leading-tight text-white">
            {product.name}
          </h2>
          <p className="text-[#8A8AA0] text-base sm:text-lg leading-relaxed mb-8 font-light">
            {product.shortDescription || product.description}
          </p>

          {/* Features grid */}
          {product.features?.length > 0 && (
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: product.color }}>
                Key Features
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2.5 text-sm text-[#c0c0d0] font-light">
                    <CheckCircle size={14} style={{ color: product.color, flexShrink: 0 }} />
                    <span className="truncate">{f}</span>
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

          {/* CTAs ordered as: Request a Demo | Visit Product */}
          <div className="flex gap-4 flex-wrap items-center">
            <button
              onClick={() => handleRequestDemo(product)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm hover:-translate-y-0.5 active:scale-[0.98] transition-all shadow-lg hover:shadow-[0_10px_20px_-10px_rgba(6,182,212,0.3)] border border-white/5"
              style={{ background: `linear-gradient(135deg, ${product.color}, #7B2FBE)` }}
            >
              Request a Demo <ArrowRight size={14} />
            </button>
            <motion.a
              href={product.websiteUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ y: 0 }}
              className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-[#8A8AA0] hover:text-white border border-white/10 bg-white/[0.03] overflow-hidden group shadow-[0_4px_0_0_rgba(255,255,255,0.08)] active:translate-y-[4px] active:shadow-[0_0_0_0_transparent] transition-all duration-200"
            >
              {/* Shimmer sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              Visit Product <ExternalLink size={14} className="group-hover:rotate-12 transition-transform duration-300" />
            </motion.a>
          </div>
        </div>

      </div>
    </ScrollReveal>
  );
}

export default function Products({ products }) {
  const data = products?.length > 0 ? products : defaultProducts;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', demoType: '', message: '' });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const handleRequestDemo = (product) => {
    let demoType = '';
    if (product.name.includes('Menu')) demoType = 'Restaurant System';
    else if (product.name.includes('GeoTrace')) demoType = 'GPS Tracking';
    else if (product.name.includes('Standee')) demoType = 'Automation';
    else if (product.name.includes('OneTap')) demoType = 'SaaS';

    setForm({ name: '', email: '', phone: '', demoType, message: '' });
    setStatus('idle');
    setIsModalOpen(true);
  };

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await publicAPI.submitDemoRequest(form);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }} className="relative overflow-hidden">
      
      {/* Soft Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none z-0" />

      {/* Floating Background Gradient Orbs */}
      <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[130px] pointer-events-none z-0 animate-float-slow" />
      <div className="absolute top-[45%] right-[-15%] w-[650px] h-[650px] rounded-full bg-purple-500/5 blur-[140px] pointer-events-none z-0 animate-float" />
      <div className="absolute top-[75%] left-[-15%] w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[130px] pointer-events-none z-0 animate-float-slow" />

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
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold font-heading leading-[1.1] mb-6">
            Products Built by <span className="text-gradient">GenzTeck</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8A8AA0] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light mb-8">
            Powerful digital products designed to help businesses operate smarter, grow faster, and deliver better customer experiences.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4 justify-center flex-wrap items-center">
            <button
              onClick={() => handleRequestDemo({ name: 'General Inquiry' })}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-white text-sm hover:-translate-y-0.5 active:scale-[0.98] transition-all bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg hover:shadow-[0_10px_20px_-10px_rgba(6,182,212,0.3)] border border-white/5"
            >
              Request a Custom Demo <ArrowRight size={14} />
            </button>
            <Link
              to="/demos"
              className="relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#8A8AA0] hover:text-white border border-white/10 bg-white/[0.03] overflow-hidden group shadow-[0_4px_0_0_rgba(255,255,255,0.08)] active:translate-y-[4px] active:shadow-[0_0_0_0_transparent] transition-all duration-200"
            >
              {/* Shimmer sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              Browse Website Demos <ExternalLink size={14} className="group-hover:rotate-12 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products list - each rendered as an alternating premium card layout */}
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {data.map((product, i) => (
          <ProductCard
            key={product._id || i}
            product={product}
            isEven={i % 2 === 0}
            handleRequestDemo={handleRequestDemo}
          />
        ))}
      </div>

      {/* Request Demo Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md pointer-events-none"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[650px] bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl z-10 overflow-hidden glass cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-[#8A8AA0] hover:text-white transition-colors p-2 rounded-full border border-white/5 hover:bg-white/5"
              >
                <X size={16} />
              </button>

              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.05)_0%,transparent_60%)] pointer-events-none" />

              {status === 'success' ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center mx-auto mb-5 shadow-[0_0_15px_rgba(52,211,153,0.15)]">
                    <Check size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-xl mb-3">Demo Request Sent!</h3>
                  <p className="text-[#8A8AA0] leading-relaxed text-sm font-light">We will reach out within 24 hours to schedule your personalized product showcase.</p>
                  <button onClick={() => setIsModalOpen(false)} className="mt-8 px-6 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black text-xs font-bold uppercase tracking-wider transition-all">
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="font-heading font-bold text-white text-2xl mb-1.5 flex items-center gap-2">
                      <Sparkles size={20} className="text-cyan-400" /> Request a Demo
                    </h3>
                    <p className="text-[#8A8AA0] text-sm font-light">Tell us about your business goals and we will set up a private showcase.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8A8AA0] mb-2">Your Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Rahul Sharma"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#5A5A7A] focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8A8AA0] mb-2">Phone Number *</label>
                        <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#5A5A7A] focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8A8AA0] mb-2">Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#5A5A7A] focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8A8AA0] mb-2">Which Industry Demo Are You Interested In? *</label>
                      <div className="relative">
                        <select name="demoType" value={form.demoType} onChange={handleChange} required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all appearance-none cursor-pointer">
                          <option value="" className="bg-slate-950 text-white">Select a demo...</option>
                          {SERVICE_OPTIONS.map(s => <option key={s} value={s} className="bg-slate-950 text-white">{s}</option>)}
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#8A8AA0]">
                          ▾
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8A8AA0] mb-2">Tell Us About Your Business</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                        placeholder="What features are you looking to customize?"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#5A5A7A] focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all resize-none" />
                    </div>
                    {status === 'error' && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
                        Something went wrong. Please try again or WhatsApp us directly.
                      </div>
                    )}
                    <button type="submit" disabled={status === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-btn-primary hover:shadow-btn-primary-hover">
                      {status === 'loading' ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <>Request Demo <ArrowRight size={18} /></>}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 text-center relative z-10" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold font-heading mb-4 text-white">
              Need a <span className="text-gradient">Custom Product</span>?
            </h2>
            <p className="text-[#8A8AA0] mb-10 text-lg max-w-xl mx-auto font-light">
              We also build bespoke products from the ground up tailored to your exact specifications.
            </p>
            <div className="flex gap-4 justify-center flex-wrap items-center">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 transition-all text-base">
                Let's Build Together <ArrowRight size={18} />
              </Link>
              <Link to="/demos"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border border-white/10 bg-white/[0.02] text-[#8A8AA0] hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all text-base">
                Browse Website Demos <ExternalLink size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
