import { useState } from 'react';
import { publicAPI } from '../api';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Loader2, Check } from 'lucide-react';
import { Suspense, lazy } from 'react';
import { ScrollReveal, StaggerReveal, StaggerItem, SectionHeader, Badge } from '../components/ui/Motion';
import { GlassCard } from '../components/ui/Cards';

const DemosBackground = lazy(() => import('../components/3d/PageBackgrounds').then(m => ({ default: m.DemosBackground })));

const defaultDemos = [
  { _id: '1', title: 'Astro Website + Admin Panel', description: 'A complete astrology business website with appointment booking, blog, and admin panel.', features: ['Custom Website', 'Admin Panel', 'Booking System', 'Blog'] },
  { _id: '2', title: 'Bakery E-Commerce System', description: 'Full e-commerce platform for bakeries with product catalog, cart, and online ordering.', features: ['Product Catalog', 'Online Cart', 'Order Tracking', 'Payment Integration'] },
  { _id: '3', title: 'Reminder System', description: 'Automated SMS and WhatsApp reminder system for appointments and follow-ups.', features: ['SMS Reminders', 'WhatsApp Messages', 'Scheduling', 'Contact Management'] },
  { _id: '4', title: 'CRM Demo', description: 'Customer relationship management system with lead tracking and pipeline management.', features: ['Lead Management', 'Pipeline View', 'Email Integration', 'Reports'] },
  { _id: '5', title: 'Booking System Demo', description: 'Online appointment and slot booking system suitable for any service business.', features: ['Slot Booking', 'Calendar View', 'Email Notifications', 'Admin Panel'] },
  { _id: '6', title: 'Restaurant Ordering Demo', description: 'Complete QR-based table ordering system with kitchen display and order management.', features: ['QR Menu', 'Table Orders', 'Kitchen Display', 'Live Status'] },
];

const SERVICE_OPTIONS = ['Web Development', 'Mobile App', 'Restaurant System', 'GPS Tracking', 'Automation', 'E-Commerce', 'Admin Dashboard', 'SaaS', 'Other'];

export default function Demos({ demos }) {
  const data = demos?.length > 0 ? demos : defaultDemos;
  const [form, setForm] = useState({ name: '', email: '', phone: '', demoType: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await publicAPI.submitDemoRequest(form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', demoType: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070711 0%, #0A1A0F 100%)' }}>
        <Suspense fallback={null}>
          <DemosBackground />
        </Suspense>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-emerald-400 text-xs font-semibold tracking-[3px] uppercase mb-5">
            <span className="w-6 h-px bg-emerald-400" />Innovation Lab<span className="w-6 h-px bg-emerald-400" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold font-heading leading-[1.1] mb-6">
            See Our <span className="text-gradient">Systems</span> in Action
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8A8AA0] text-xl max-w-2xl mx-auto leading-relaxed">
            Interactive live demos of real systems built by GenzTeck. Coming soon — request early access now.
          </motion.p>
        </div>
      </section>

      {/* Demo Cards */}
      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader label="Live Demos" title={<>Coming <span className="text-gradient">Soon</span></>} />
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {data.map((demo, i) => (
              <StaggerItem key={demo._id || i}>
                <div className="glass rounded-2xl border border-white/[0.08] p-7 relative overflow-hidden group hover:border-emerald-400/25 transition-all duration-300 h-full flex flex-col">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="amber">Coming Soon</Badge>
                    <div className="w-8 h-8 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">
                      <span className="text-emerald-400 text-xs">▶</span>
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">{demo.title}</h3>
                  <p className="text-[#8A8AA0] text-sm leading-relaxed mb-5 flex-1">
                    {demo.description || `A fully functional ${demo.title} demo.`}
                  </p>
                  {demo.features?.length > 0 && (
                    <div className="flex flex-col gap-1.5">
                      {demo.features.slice(0, 4).map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-[#8A8AA0]">
                          <CheckCircle size={12} className="text-emerald-400 flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-28 bg-grid" id="request-demo">
        <div className="max-w-[700px] mx-auto px-6">
          <SectionHeader label="Get Early Access" title={<>Request a <span className="text-gradient">Live Demo</span></>} subtitle="Fill in the details below and we'll set up a personalized demo for your business." />
          <ScrollReveal>
            <div className="glass rounded-3xl border border-white/[0.08] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,136,0.04)_0%,transparent_60%)]" />
              <div className="relative z-10">
                {status === 'success' ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center mx-auto mb-5">
                      <Check size={28} className="text-emerald-400" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-xl mb-3">Demo Request Sent!</h3>
                    <p className="text-[#8A8AA0] leading-relaxed">We'll reach out within 24 hours to schedule your personalized demo.</p>
                    <button onClick={() => setStatus('idle')} className="mt-6 text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
                      Submit another request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Your Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Rahul Sharma"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#5A5A7A] focus:outline-none glow-input transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Phone Number *</label>
                        <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#5A5A7A] focus:outline-none glow-input transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#5A5A7A] focus:outline-none glow-input transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Which Demo Are You Interested In? *</label>
                      <select name="demoType" value={form.demoType} onChange={handleChange} required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none glow-input transition-all appearance-none cursor-pointer">
                        <option value="">Select a demo...</option>
                        {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Tell Us About Your Business</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                        placeholder="What kind of business do you have? What problem are you trying to solve?"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#5A5A7A] focus:outline-none glow-input transition-all resize-none" />
                    </div>
                    {status === 'error' && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
                        Something went wrong. Please try again or WhatsApp us directly.
                      </div>
                    )}
                    <button type="submit" disabled={status === 'loading'}
                      className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                      {status === 'loading' ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <>Request Demo <ArrowRight size={18} /></>}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
