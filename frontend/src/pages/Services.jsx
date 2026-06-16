import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { ScrollReveal, StaggerReveal, StaggerItem, SectionHeader, Badge } from '../components/ui/Motion';
import { TiltCard, GlassCard } from '../components/ui/Cards';

const BlueprintBackground = lazy(() => import('../components/3d/PageBackgrounds').then(m => ({ default: m.BlueprintBackground })));

const defaultServices = [
  { _id: '1', icon: '🌐', color: '#00D4FF', title: 'Custom Web Development', shortDescription: 'Tailored web applications built from scratch with modern frameworks and pixel-perfect design.', features: ['Responsive Design', 'SEO Optimized', 'Performance Tuned', 'CMS Integration', 'API Ready'], idealFor: ['Startups', 'Enterprises', 'E-Commerce Brands'] },
  { _id: '2', icon: '📱', color: '#7B2FBE', title: 'Mobile App Development', shortDescription: 'Native and cross-platform mobile apps for iOS & Android that users love.', features: ['React Native / Flutter', 'Offline Support', 'Push Notifications', 'App Store Deployment', 'Analytics Built-In'], idealFor: ['Consumer Apps', 'Business Tools', 'On-Demand Services'] },
  { _id: '3', icon: '🍽️', color: '#00FF88', title: 'Restaurant Tech Solutions', shortDescription: 'Complete digital transformation for food businesses — from ordering to kitchen display.', features: ['Online Ordering System', 'POS Integration', 'Table Management', 'Kitchen Display System', 'Loyalty Programs'], idealFor: ['Restaurants', 'Cloud Kitchens', 'Food Chains'] },
  { _id: '4', icon: '📊', color: '#FF6B6B', title: 'Admin Dashboards & CRM', shortDescription: 'Powerful internal tools that give your team complete visibility and control.', features: ['Real-Time Analytics', 'Role-Based Access', 'Data Export', 'Custom Reports', 'Automation Workflows'], idealFor: ['Operations Teams', 'Sales Departments', 'Management'] },
  { _id: '5', icon: '🗺️', color: '#00D4FF', title: 'Geo-Tracking Platforms', shortDescription: 'Real-time location tracking and fleet management solutions built for scale.', features: ['Live GPS Tracking', 'Route Optimization', 'Geofencing Alerts', 'Driver App', 'History Playback'], idealFor: ['Logistics', 'Delivery Services', 'Field Teams'] },
  { _id: '6', icon: '🤖', color: '#7B2FBE', title: 'AI & Automation', shortDescription: 'Intelligent automation that eliminates repetitive tasks and unlocks business insights.', features: ['AI Chatbots', 'Workflow Automation', 'Data Extraction', 'Report Generation', 'Smart Alerts'], idealFor: ['HR Teams', 'Finance Departments', 'Customer Support'] },
  { _id: '7', icon: '🛒', color: '#00FF88', title: 'E-Commerce Platforms', shortDescription: 'Full-featured online stores and multi-vendor marketplaces built to convert.', features: ['Product Catalog', 'Secure Checkout', 'Inventory Management', 'Multi-Vendor Support', 'Analytics'], idealFor: ['Retailers', 'Wholesalers', 'Marketplace Owners'] },
  { _id: '8', icon: '☁️', color: '#00D4FF', title: 'SaaS Development', shortDescription: 'End-to-end SaaS product development from MVP to full-scale platform.', features: ['Multi-Tenancy', 'Subscription Billing', 'User Management', 'API-First Design', 'White Labeling'], idealFor: ['Tech Startups', 'B2B Founders', 'SaaS Entrepreneurs'] },
  { _id: '9', icon: '🔗', color: '#7B2FBE', title: 'API & Integration Services', shortDescription: 'Seamlessly connect your tools, platforms, and third-party services.', features: ['REST & GraphQL APIs', 'Webhook Setup', 'Payment Gateways', 'WhatsApp Integration', 'CRM Sync'], idealFor: ['Businesses with Legacy Systems', 'Multi-Platform Companies'] },
  { _id: '10', icon: '🛡️', color: '#00FF88', title: 'Cybersecurity & DevOps', shortDescription: 'Secure, scalable infrastructure with automated deployments and monitoring.', features: ['SSL & Security Hardening', 'CI/CD Pipelines', 'Docker & Kubernetes', 'Uptime Monitoring', 'Backup Systems'], idealFor: ['Production Apps', 'Fintech', 'Healthcare Tech'] },
];

export default function Services({ services }) {
  const data = services?.length > 0 ? services : defaultServices;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#070711]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#070711] via-[#0D0D1E] to-[#0A0A1A] z-0 pointer-events-none" />

      <Suspense fallback={null}>
        <BlueprintBackground />
      </Suspense>

      {/* Hero */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden z-10"
        style={{ background: 'transparent' }}>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-[3px] uppercase mb-5">
            <span className="w-6 h-px bg-cyan-400" />What We Offer<span className="w-6 h-px bg-cyan-400" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold font-heading leading-[1.1] mb-6">
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8A8AA0] text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            From concept to deployment — we cover the full spectrum of digital product development.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex gap-3 justify-center flex-wrap">
            <Badge variant="amber">Fast Delivery</Badge>
          </motion.div>
        </div>

        {/* Cyber Divider & Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent z-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-[1px]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070711] to-transparent pointer-events-none z-10" />
      </section>

      {/* Services Grid */}
      <section className="py-28 bg-[#070711] relative z-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <StaggerReveal
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            staggerDelay={0.07}
          >
            {data.map((service, i) => (
              <StaggerItem key={service._id || i}>
                <TiltCard className="h-full group" intensity={6}>
                  <div className="h-full glass rounded-2xl border border-white/[0.08] p-8 flex flex-col hover:border-cyan-400/25 transition-all duration-300 relative overflow-hidden">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: `linear-gradient(90deg, transparent, ${service.color || '#00D4FF'}, transparent)` }} />

                    {/* Header */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border border-white/10 flex-shrink-0"
                        style={{ background: `${service.color || '#00D4FF'}15` }}>
                        {service.icon || '⚙️'}
                      </div>
                      <h3 className="font-heading font-bold text-white text-lg leading-tight">{service.title}</h3>
                    </div>

                    <p className="text-[#8A8AA0] text-sm leading-relaxed mb-5 flex-1">
                      {service.shortDescription || service.description}
                    </p>

                    {/* Features */}
                    {service.features?.length > 0 && (
                      <div className="mb-5">
                        <p className="text-[#5A5A7A] text-xs uppercase tracking-wider font-semibold mb-3">What's Included</p>
                        <ul className="flex flex-col gap-2">
                          {service.features.slice(0, 5).map((f, j) => (
                            <li key={j} className="flex items-center gap-2 text-[#c0c0d0] text-sm">
                              <CheckCircle size={14} className="text-cyan-400 flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Ideal For */}
                    {service.idealFor?.length > 0 && (
                      <div className="mb-6">
                        <p className="text-[#5A5A7A] text-xs uppercase tracking-wider font-semibold mb-2">Ideal For</p>
                        <div className="flex flex-wrap gap-2">
                          {service.idealFor.map((tag, j) => (
                            <Badge key={j} variant="default">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:-translate-y-0.5 transition-all duration-200">
                      Get This Service <ArrowRight size={14} />
                    </Link>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-[#070711] z-10"
        style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-transparent p-8 md:p-10 text-center">
              <motion.div
                className="absolute -right-14 -top-16 h-44 w-44 rounded-full border border-cyan-400/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute left-8 bottom-8 hidden md:grid grid-cols-2 gap-2 opacity-70"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                {[0, 1, 2, 3].map(item => (
                  <div key={item} className="h-8 w-16 rounded-lg border border-cyan-400/20 bg-cyan-400/10" />
                ))}
              </motion.div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,255,0.18)_0%,transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(123,47,190,0.18)_0%,transparent_50%)]" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <p className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-[3px] mb-4">
                  <Sparkles size={14} /> Plan With Confidence
                </p>
                <h2 className="text-[clamp(1.8rem,3vw,2.7rem)] font-bold font-heading mb-4">
                  Not Sure Which Service You Need?
                </h2>
                <p className="text-[#8A8AA0] mb-9 text-lg max-w-2xl mx-auto">
                  Talk to us, or browse our demos first to understand what your digital experience can look like.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 transition-all text-base w-full sm:w-auto">
                    Book a Free Consultation <ArrowRight size={18} />
                  </Link>
                  <Link to="/demos"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold border border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.1] hover:border-cyan-400/35 hover:-translate-y-0.5 transition-all text-base w-full sm:w-auto">
                    Browse Demos <ArrowRight size={18} />
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
