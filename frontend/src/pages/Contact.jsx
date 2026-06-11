import { useState } from 'react';
import { publicAPI } from '../api';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Send, Loader2, Check, MessageCircle } from 'lucide-react';
import { Suspense, lazy } from 'react';
import { ScrollReveal, StaggerReveal, StaggerItem, SectionHeader, Badge } from '../components/ui/Motion';
import { GlassCard } from '../components/ui/Cards';

const ContactBackground = lazy(() => import('../components/3d/PageBackgrounds').then(m => ({ default: m.ContactBackground })));

const SERVICES = ['Website Development', 'Mobile App', 'Restaurant System', 'GPS Tracking', 'E-Commerce', 'Admin Dashboard / CRM', 'AI & Automation', 'NFC/QR Products', 'SaaS Development', 'Other'];
const BUDGETS = ['Under ₹25,000', '₹25,000 - ₹50,000', '₹50,000 - ₹1,00,000', '₹1,00,000 - ₹3,00,000', '₹3,00,000+', 'Discuss on Call'];
const TIMELINES = ['ASAP (within 2 weeks)', '1 month', '2-3 months', '3+ months', 'Flexible'];

export default function Contact({ settings }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', businessName: '',
    service: '', budget: '', timeline: '', message: ''
  });
  const [status, setStatus] = useState('idle');

  const email = settings?.email || 'info.genzteck@gmail.com';
  const phone = settings?.phone || '+91 87695 92668';
  const address = settings?.address || 'B-54, Shri Shyam Residency, Dadudayal Nagar, Mansarovar, Jaipur (Raj.) - 302020';

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await publicAPI.submitContact(form);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const contactMethods = [
    { icon: <Mail size={20} />, label: 'Email Us', value: email, href: `mailto:${email}`, color: '#00D4FF' },
    { icon: <Phone size={20} />, label: 'Call Us', value: phone, href: `tel:+918769592668`, color: '#00FF88' },
    { icon: <MessageCircle size={20} />, label: 'WhatsApp', value: 'Quick Chat Support', href: 'https://wa.me/918769592668?text=Hi GenzTeck! I\'d like to discuss a project.', color: '#25D366' },
    { icon: <MapPin size={20} />, label: 'Our Location', value: 'Mansarovar, Jaipur, Raj.', href: 'https://maps.google.com', color: '#7B2FBE' },
  ];

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070711 0%, #0D0D1E 100%)' }}>
        <Suspense fallback={null}>
          <ContactBackground />
        </Suspense>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-[3px] uppercase mb-5">
            <span className="w-6 h-px bg-cyan-400" />Mission Control<span className="w-6 h-px bg-cyan-400" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold font-heading leading-[1.1] mb-6">
            Let's Build Something <span className="text-gradient">Together</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8A8AA0] text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Tell us about your project and we'll get back to you within 24 hours with a custom plan and quote.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex gap-3 justify-center flex-wrap">
            <Badge variant="live">● We respond within 24 hours</Badge>
            <Badge variant="green">Free Consultation</Badge>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left — Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <ScrollReveal>
                <h2 className="text-2xl font-bold font-heading text-white mb-2">Get In Touch</h2>
                <p className="text-[#8A8AA0] text-sm leading-relaxed mb-6">
                  Multiple ways to reach us. We're always here to help you grow your business.
                </p>
              </ScrollReveal>

              <StaggerReveal staggerDelay={0.1}>
                {contactMethods.map((method, i) => (
                  <StaggerItem key={i}>
                    <a href={method.href} target={method.href.startsWith('http') ? '_blank' : '_self'}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-5 glass rounded-2xl border border-white/[0.08] hover:border-white/20 transition-all duration-200 group">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:scale-110 transition-transform"
                        style={{ background: `${method.color}15`, color: method.color }}>
                        {method.icon}
                      </div>
                      <div>
                        <p className="text-[#5A5A7A] text-xs uppercase tracking-wider font-semibold mb-0.5">{method.label}</p>
                        <p className="text-white text-sm font-medium">{method.value}</p>
                      </div>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerReveal>

              {/* Office Hours */}
              <ScrollReveal delay={0.3}>
                <GlassCard className="p-6">
                  <h3 className="text-white font-heading font-bold mb-4">⏰ Office Hours</h3>
                  <div className="flex flex-col gap-2.5 text-sm">
                    {[
                      { days: 'Monday – Saturday', hours: '9:00 AM – 7:00 PM IST' },
                      { days: 'Sunday', hours: '10:00 AM – 2:00 PM IST' },
                      { days: 'Emergency Support', hours: '24/7 for active clients' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between text-[#8A8AA0]">
                        <span>{item.days}</span>
                        <span className="text-white">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>

              {/* Quick WhatsApp CTA */}
              <ScrollReveal delay={0.4}>
                <a
                  href="https://wa.me/918769592668?text=Hi GenzTeck! I'd like to discuss a project."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold text-white border border-[#25D366]/30 hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-all duration-200 group"
                  style={{ background: 'rgba(37, 211, 102, 0.07)' }}
                  id="whatsapp-cta-contact"
                >
                  <span className="text-xl">💬</span>
                  <div className="text-left">
                    <div className="text-sm font-bold" style={{ color: '#25D366' }}>Chat on WhatsApp</div>
                    <div className="text-xs text-[#8A8AA0]">Fastest response guaranteed</div>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-[#25D366] group-hover:translate-x-1 transition-transform" />
                </a>
              </ScrollReveal>
            </div>

            {/* Right — Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="glass rounded-3xl border border-white/[0.08] p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,255,0.04)_0%,transparent_60%)]" />
                  <div className="relative z-10">
                    <AnimatePresence mode="wait">
                      {status === 'success' ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-12"
                        >
                          <div className="w-20 h-20 rounded-full bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center mx-auto mb-6">
                            <Check size={36} className="text-emerald-400" />
                          </div>
                          <h3 className="font-heading font-bold text-white text-2xl mb-3">Message Sent! 🚀</h3>
                          <p className="text-[#8A8AA0] max-w-sm mx-auto leading-relaxed">
                            Thanks for reaching out! We'll review your project details and get back to you within 24 hours with a custom plan.
                          </p>
                          <p className="text-cyan-400 text-sm mt-4">Check your WhatsApp & email for our response.</p>
                          <button onClick={() => setStatus('idle')} className="mt-8 text-[#8A8AA0] text-sm hover:text-white transition-colors">
                            Send another message
                          </button>
                        </motion.div>
                      ) : (
                        <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-5">
                          <div>
                            <h3 className="font-heading font-bold text-white text-xl mb-1">Project Inquiry Form</h3>
                            <p className="text-[#8A8AA0] text-sm">Fill in the details and we'll craft a custom solution for you.</p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Full Name *</label>
                              <input name="name" value={form.name} onChange={handleChange} required placeholder="Rahul Sharma"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#5A5A7A] focus:outline-none glow-input transition-all"
                                id="contact-name" />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Business Name</label>
                              <input name="businessName" value={form.businessName} onChange={handleChange} placeholder="Your Company"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#5A5A7A] focus:outline-none glow-input transition-all"
                                id="contact-business" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Email Address *</label>
                              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@company.com"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#5A5A7A] focus:outline-none glow-input transition-all"
                                id="contact-email" />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Phone / WhatsApp *</label>
                              <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#5A5A7A] focus:outline-none glow-input transition-all"
                                id="contact-phone" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">What Do You Need? *</label>
                            <select name="service" value={form.service} onChange={handleChange} required
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none glow-input transition-all appearance-none cursor-pointer"
                              id="contact-service">
                              <option value="">Select a service...</option>
                              {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Budget Range</label>
                              <select name="budget" value={form.budget} onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none glow-input transition-all appearance-none cursor-pointer"
                                id="contact-budget">
                                <option value="">Select budget...</option>
                                {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Timeline</label>
                              <select name="timeline" value={form.timeline} onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none glow-input transition-all appearance-none cursor-pointer"
                                id="contact-timeline">
                                <option value="">Select timeline...</option>
                                {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Tell Us About Your Project *</label>
                            <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                              placeholder="Describe your project, what problem it solves, who your users are, and any specific features you need..."
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#5A5A7A] focus:outline-none glow-input transition-all resize-none"
                              id="contact-message" />
                          </div>
                          {status === 'error' && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
                              Something went wrong. Please try WhatsApp or email us directly.
                            </div>
                          )}
                          <button type="submit" disabled={status === 'loading'}
                            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed text-base shadow-btn-primary hover:shadow-btn-primary-hover"
                            id="contact-submit-btn">
                            {status === 'loading' ? <><Loader2 size={18} className="animate-spin" />Sending...</> : <><Send size={18} />Send Project Inquiry</>}
                          </button>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
