import { useState, Suspense, lazy } from 'react';
import { publicAPI } from '../api';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, Check, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal, StaggerReveal, StaggerItem, SectionHeader } from '../components/ui/Motion';
import { demoTemplates } from '../data/demoTemplates';
import DemoCard from '../components/DemoCard';

const DemosBackground = lazy(() => import('../components/3d/PageBackgrounds').then(m => ({ default: m.DemosBackground })));

const SERVICE_OPTIONS = ['Web Development', 'Mobile App', 'Restaurant System', 'GPS Tracking', 'Automation', 'E-Commerce', 'Admin Dashboard', 'SaaS', 'Other'];

export default function Demos() {
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
      {/* Hero Header Section */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070711 0%, #08121A 100%)' }}>
        <Suspense fallback={null}>
          <DemosBackground />
        </Suspense>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-[3px] uppercase mb-5">
            <span className="w-6 h-px bg-cyan-400" />Interactive Showcases<span className="w-6 h-px bg-cyan-400" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(1.8rem,5vw,4.5rem)] font-bold font-heading leading-[1.1] mb-6">
            Explore Our Live <span className="text-gradient">Website Demos</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8A8AA0] text-xl max-w-2xl mx-auto leading-relaxed">
            Test and customize premium web templates built for high conversion. Enter your brand name in any card below to see it live instantly!
          </motion.p>
        </div>
      </section>

      {/* Demo Cards Grid Section */}
      <section className="py-24 relative z-10 bg-slate-950/20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <SectionHeader
            label="Live Demonstrations"
            title={<>Website <span className="text-gradient">Demo Gallery</span></>}
            subtitle="Each template features responsive, high-performance UI suitable for modern businesses."
          />

          {/* Premium glassmorphism info note card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 mb-12 max-w-3xl mx-auto glass p-6 rounded-2xl border border-white/[0.08] shadow-[0_12px_40px_-5px_rgba(0,0,0,0.4)] text-left relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 pointer-events-none" />
            <div className="flex gap-4 items-start relative z-10">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <Sparkles size={18} className="text-cyan-400" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-base mb-1.5 flex items-center gap-2">
                  Front-end preview only
                  <span className="text-[10px] font-semibold bg-cyan-400/10 text-cyan-400 px-2.5 py-0.5 rounded border border-cyan-400/20 uppercase tracking-wider">
                    Template Note
                  </span>
                </h4>
                <p className="text-[#8A8AA0] text-xs sm:text-sm leading-relaxed font-light">
                  These demos are front-end only: design, pages, and UI interactions in the browser. They do not include a real CMS, database, auth, or payment backend. The demo code is built as a rapid template — your paid GenzTeck website is finished, tested, and deployed for production with your real content and integrations.
                </p>
              </div>
            </div>
          </motion.div>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10" staggerDelay={0.05}>
            {demoTemplates.map((template, idx) => (
              <StaggerItem key={template.slug} direction="up">
                <DemoCard template={template} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Early Access / Personalized Request Form */}
      <section className="py-28 bg-grid relative z-10 border-t border-white/[0.04]" id="request-demo">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <SectionHeader
            label="Custom Specifications"
            title={<>Request a <span className="text-gradient">Personalized Setup</span></>}
            subtitle="Need something tailored specifically to your backend flows? Tell us about your business goals and we will set up a private demo."
          />
          <ScrollReveal>
            <div className="glass rounded-3xl border border-white/[0.08] p-5 sm:p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.04)_0%,transparent_60%)]" />
              <div className="relative z-10">
                {status === 'success' ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center mx-auto mb-5">
                      <Check size={28} className="text-emerald-400" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-xl mb-3">Demo Request Sent!</h3>
                    <p className="text-[#8A8AA0] leading-relaxed">We will reach out within 24 hours to schedule your personalized business showcase.</p>
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
                      <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Which Industry Demo Are You Interested In? *</label>
                      <select name="demoType" value={form.demoType} onChange={handleChange} required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none glow-input transition-all appearance-none cursor-pointer">
                        <option value="" className="bg-slate-950 text-white">Select a demo...</option>
                        {SERVICE_OPTIONS.map(s => <option key={s} value={s} className="bg-slate-950 text-white">{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Tell Us About Your Business</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                        placeholder="What kind of business do you have? What features are you looking to customize?"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#5A5A7A] focus:outline-none glow-input transition-all resize-none" />
                    </div>
                    {status === 'error' && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
                        Something went wrong. Please try again or WhatsApp us directly.
                      </div>
                    )}
                    <button type="submit" disabled={status === 'loading'}
                      className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                      {status === 'loading' ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <>Request Personalized Demo <ArrowRight size={18} /></>}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 relative z-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#080814] p-8 md:p-10">
              <Suspense fallback={null}>
                <DemosBackground />
              </Suspense>
              <motion.div
                className="absolute -right-14 -top-16 h-44 w-44 rounded-full border border-cyan-400/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute right-8 bottom-8 hidden md:block w-40 rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="h-2 w-20 rounded-full bg-cyan-400/40 mb-4" />
                <div className="space-y-2">
                  <div className="h-7 rounded-lg bg-white/10" />
                  <div className="h-7 rounded-lg bg-purple-400/15" />
                  <div className="h-7 rounded-lg bg-cyan-400/15" />
                </div>
              </motion.div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,255,0.18)_0%,transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(123,47,190,0.18)_0%,transparent_50%)]" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="max-w-2xl">
                  <p className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-[3px] mb-4">
                    <Rocket size={14} /> Ready to Build
                  </p>
                  <h2 className="font-heading font-bold text-white text-2xl md:text-4xl leading-tight mb-3">
                    Found a demo you like? Let's turn it into your real website.
                  </h2>
                  <p className="text-[#8A8AA0] text-sm md:text-base leading-relaxed">
                    We will customize the design, content, features, admin panel, and integrations around your business goals.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:-translate-y-0.5 transition-all shadow-btn-primary hover:shadow-btn-primary-hover whitespace-nowrap"
                >
                  Start Your Project <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
