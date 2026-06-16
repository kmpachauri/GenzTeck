import { useState } from 'react';
import { Link } from 'react-router-dom';
import { publicAPI } from '../api';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Send, Loader2, Check, MessageCircle, Star } from 'lucide-react';
import { Suspense, lazy } from 'react';
import { ScrollReveal, StaggerReveal, StaggerItem, SectionHeader, Badge } from '../components/ui/Motion';
import { GlassCard } from '../components/ui/Cards';

const ContactBackground = lazy(() => import('../components/3d/PageBackgrounds').then(m => ({ default: m.ContactBackground })));

// Custom social SVG icon components since lucide-react does not export them in this version
const LinkedinIcon = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const GoogleIcon = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5 16.25 5 12C5 7.9 8.2 4.73 12.2 4.73C15.29 4.73 17.1 6.7 17.1 6.7L19 4.72C19 4.72 16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12C2.03 17.05 6.16 22 12.39 22C17.6 22 21.54 18.33 21.54 12.91C21.54 11.76 21.35 11.1 21.35 11.1Z" />
  </svg>
);

const WhatsAppIcon = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CONTACT = {
  email: 'info.genzteck@gmail.com',
  phone: '+91 87695 92668',
  phoneHref: '+918769592668',
  whatsapp: '+918769592668',
  instagram: 'https://www.instagram.com/genzteck_com',
  facebook: 'https://www.facebook.com/share/1LpRPBaGaP/',
  linkedin: 'https://www.linkedin.com/company/genztecknology/',
  googleReview: 'https://g.page/r/CV6AhPIhEk6XEAI/review',
  address: 'B-54, Shri Shyam Residency, Dadudayal Nagar, Mansarovar, Jaipur (Raj.) - 302020',
};

const SERVICES = [
  'Website Development',
  'Mobile App',
  'Restaurant System',
  'E-Commerce',
  'Admin Dashboard / CRM',
  'AI & Automation',
  'NFC/QR Products',
  'SaaS Development',
  'Other'
];

const BUDGETS = [
  'Below ₹10,000',
  '₹10,000 - ₹25,000',
  '₹25,000 - ₹40,000',
  '₹40,000 - ₹75,000',
  '₹75,000+',
  'Discuss on Call'
];

const TIMELINES = [
  '1 day / 24 hours (can be extra charged)',
  '2-3 days (based on availability)',
  '7 days',
  '14 days',
  '3-4 weeks',
  '2-3 months',
  '4-5 months',
  'Flexible'
];

export default function Contact({ settings }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', businessName: '',
    service: '', budget: '', timeline: '', message: ''
  });
  const [status, setStatus] = useState('idle');

  const email = CONTACT.email;
  const phone = CONTACT.phone;
  const whatsapp = CONTACT.whatsapp.replace(/\D/g, '');
  const address = settings?.address || CONTACT.address;
  const instagram = CONTACT.instagram;
  const facebook = CONTACT.facebook;
  const linkedin = CONTACT.linkedin;

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
    { icon: <Phone size={20} />, label: 'Call Us', value: phone, href: `tel:${CONTACT.phoneHref}`, color: '#00FF88' },
    { icon: <MessageCircle size={20} />, label: 'WhatsApp', value: phone, href: `https://wa.me/${whatsapp}?text=Hi GenzTeck! I'd like to discuss a project.`, color: '#25D366' },
    { icon: <MapPin size={20} />, label: 'Our Location', value: address, href: 'https://maps.google.com', color: '#7B2FBE' },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#070711]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#070711] via-[#0D0D1E] to-[#0A0A1A] z-0 pointer-events-none" />

      <Suspense fallback={null}>
        <ContactBackground />
      </Suspense>

      {/* Hero */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden z-10"
        style={{ background: 'transparent' }}>
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

        {/* Cyber Divider & Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent z-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-[1px]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070711] to-transparent pointer-events-none z-10" />
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#070711] relative z-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Left — Contact Form (Swapped to Left) */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="left">
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
                            <div className="relative">
                              <select name="service" value={form.service} onChange={handleChange} required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none glow-input transition-all appearance-none cursor-pointer"
                                id="contact-service">
                                <option value="" className="bg-slate-950 text-white">Select a service...</option>
                                {SERVICES.map(s => <option key={s} value={s} className="bg-slate-950 text-white">{s}</option>)}
                              </select>
                              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#8A8AA0]">
                                ▾
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Budget Range</label>
                              <div className="relative">
                                <select name="budget" value={form.budget} onChange={handleChange}
                                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none glow-input transition-all appearance-none cursor-pointer"
                                  id="contact-budget">
                                  <option value="" className="bg-slate-950 text-white">Select budget...</option>
                                  {BUDGETS.map(b => <option key={b} value={b} className="bg-slate-950 text-white">{b}</option>)}
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#8A8AA0]">
                                  ▾
                                </div>
                              </div>
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Timeline</label>
                              <div className="relative">
                                <select name="timeline" value={form.timeline} onChange={handleChange}
                                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none glow-input transition-all appearance-none cursor-pointer"
                                  id="contact-timeline">
                                  <option value="" className="bg-slate-950 text-white">Select timeline...</option>
                                  {TIMELINES.map(t => <option key={t} value={t} className="bg-slate-950 text-white">{t}</option>)}
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#8A8AA0]">
                                  ▾
                                </div>
                              </div>
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

            {/* Right — Contact Info (Swapped to Right) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Social profiles & review links */}
              <ScrollReveal direction="right">
                <GlassCard className="p-6">
                  <h3 className="text-white font-heading font-bold mb-3 flex items-center gap-2">
                    <Star size={16} className="text-amber-400 fill-amber-400" /> Connect With Us
                  </h3>
                  <p className="text-[#8A8AA0] text-xs mb-5">
                    Follow GenzTeck on social media, chat on WhatsApp, or leave us a review on Google Business.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={linkedin}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-white/[0.05] hover:border-cyan-400/30 bg-white/[0.02] hover:bg-cyan-950/10 transition-all text-[#8A8AA0] hover:text-white"
                    >
                      <LinkedinIcon size={15} className="text-cyan-400" />
                      <span className="text-xs font-semibold">LinkedIn</span>
                    </a>
                    <a
                      href={instagram}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-white/[0.05] hover:border-pink-500/30 bg-white/[0.02] hover:bg-pink-950/10 transition-all text-[#8A8AA0] hover:text-white"
                    >
                      <InstagramIcon size={15} className="text-pink-500" />
                      <span className="text-xs font-semibold">Instagram</span>
                    </a>
                    <a
                      href={facebook}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-white/[0.05] hover:border-blue-500/30 bg-white/[0.02] hover:bg-blue-950/10 transition-all text-[#8A8AA0] hover:text-white"
                    >
                      <FacebookIcon size={15} className="text-blue-500" />
                      <span className="text-xs font-semibold">Facebook</span>
                    </a>
                    <a
                      href={`https://wa.me/${whatsapp}?text=Hi GenzTeck! I'd like to discuss a project.`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-white/[0.05] hover:border-[#25D366]/30 bg-white/[0.02] hover:bg-emerald-950/10 transition-all text-[#8A8AA0] hover:text-white"
                    >
                      <WhatsAppIcon size={15} className="text-[#25D366]" />
                      <span className="text-xs font-semibold">WhatsApp</span>
                    </a>
                    <a
                      href={CONTACT.googleReview}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-white/[0.05] hover:border-amber-400/30 bg-white/[0.02] hover:bg-amber-950/10 transition-all text-[#8A8AA0] hover:text-white col-span-2 justify-center"
                    >
                      <GoogleIcon size={15} className="text-amber-400" />
                      <span className="text-xs font-bold uppercase tracking-wider">Review Us on Google</span>
                    </a>
                  </div>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <h2 className="text-2xl font-bold font-heading text-white mb-2">Get In Touch</h2>
                <p className="text-[#8A8AA0] text-sm leading-relaxed mb-6">
                  Multiple ways to reach us. We're always here to help you grow your business.
                </p>
              </ScrollReveal>

              <StaggerReveal staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactMethods.map((method, i) => (
                  <StaggerItem key={i} className="h-full">
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : '_self'}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="h-full flex items-center gap-4 p-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200 group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:scale-105 transition-transform"
                        style={{ background: `${method.color}18`, color: method.color }}
                      >
                        {method.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[#7A7A96] text-[11px] uppercase tracking-wider font-semibold mb-1">{method.label}</p>
                        <p className="text-white text-sm font-medium leading-snug break-words">{method.value}</p>
                      </div>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerReveal>

            </div>
            
          </div>
        </div>
      </section>

      <section className="pb-20 bg-[#070711] relative z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <div className="glass rounded-3xl border border-white/[0.08] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(123,47,190,0.12)_0%,transparent_55%)]" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[3px] mb-3">Preview Our Work</p>
                  <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-2">Explore ready-made business demos</h2>
                  <p className="text-[#8A8AA0] text-sm md:text-base leading-relaxed max-w-2xl">
                    Browse website demos for restaurants, hotels, clinics, schools, real estate, salons, gyms, and more.
                  </p>
                </div>
                <Link
                  to="/demos"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:-translate-y-0.5 transition-all shadow-btn-primary hover:shadow-btn-primary-hover whitespace-nowrap"
                >
                  Browse Demos <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
