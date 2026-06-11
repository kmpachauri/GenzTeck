import { useState } from 'react';
import { ShieldCheck, CreditCard, Lock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, Badge } from '../components/ui/Motion';

const SERVICE_CATEGORIES = [
  { value: 'early-demo-access', label: '🎯 Early Demo Access' },
  { value: 'web-development', label: '🌐 Website Development' },
  { value: 'app-development', label: '📱 Mobile App Development' },
  { value: 'meta-ads', label: '📣 Meta Ads Setup (Facebook / Instagram)' },
  { value: 'google-business', label: '🗺️ Google Business Profile Setup' },
  { value: 'admin-panel', label: '🖥️ Admin Panel / CRM Development' },
  { value: 'automation', label: '🤖 Automation System' },
  { value: 'qr-nfc', label: '📲 QR / NFC System' },
  { value: 'landing-page', label: '🚀 Landing Page Development' },
  { value: 'other', label: '⚙️ Other / Custom Project' },
];

const PRESET_AMOUNTS = [499, 999, 1999, 4999, 9999, 24999];

const initialForm = {
  name: '', mobile: '', email: '', serviceCategory: '', amount: '', note: '',
};

export default function Payment() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [errMsg, setErrMsg] = useState('');

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => ({ ...e, [k]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.mobile.trim()) e.mobile = 'Mobile number is required.';
    else if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\s/g, ''))) e.mobile = 'Enter a valid 10-digit Indian mobile number.';
    if (!form.email.trim()) e.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.serviceCategory) e.serviceCategory = 'Please select a service category.';
    if (!form.amount) e.amount = 'Please enter or select an amount.';
    else if (isNaN(form.amount) || Number(form.amount) < 1) e.amount = 'Enter a valid amount (minimum ₹1).';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    setErrMsg('');
    setTimeout(() => {
      setStatus('error');
      setErrMsg('Payment gateway not yet integrated. Please contact us on WhatsApp to complete your payment.');
    }, 800);
  };

  const selectedService = SERVICE_CATEGORIES.find(s => s.value === form.serviceCategory);

  const inputClass = (field) =>
    `w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder-[#5A5A7A] focus:outline-none glow-input transition-all ${
      errors[field] ? 'border-red-500/50' : 'border-white/10'
    }`;

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070711 0%, #0D0D1E 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-[3px] uppercase mb-5">
            <span className="w-6 h-px bg-cyan-400" />Secure Payment<span className="w-6 h-px bg-cyan-400" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold font-heading leading-[1.1] mb-5">
            Pay for Your <span className="text-gradient">Service</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8A8AA0] text-lg max-w-md mx-auto leading-relaxed mb-8">
            Fast, secure payments via Razorpay. Your transaction is encrypted and protected.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-3 flex-wrap">
            {[<><ShieldCheck size={13} /> SSL Secured</>, <><Lock size={13} /> 256-bit Encrypted</>, <><CreditCard size={13} /> Razorpay Powered</>].map((badge, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium glass border border-emerald-400/20 text-emerald-400">
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Payment Form */}
      <section className="py-16">
        <div className="max-w-[600px] mx-auto px-6">
          <ScrollReveal>
            <div className="glass rounded-3xl border border-white/[0.08] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.04)_0%,transparent_60%)]" />
              <div className="relative z-10">
                {/* Card Header */}
                <div className="flex items-center gap-3 px-8 py-5 border-b border-white/[0.08]">
                  <div className="w-9 h-9 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                    <CreditCard size={16} className="text-cyan-400" />
                  </div>
                  <span className="font-heading font-bold text-white">Payment Details</span>
                </div>

                <div className="p-8">
                  <AnimatePresence mode="wait">
                    {status === 'success' ? (
                      <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-10">
                        <div className="w-16 h-16 rounded-full bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center mx-auto mb-5">
                          <CheckCircle size={28} className="text-emerald-400" />
                        </div>
                        <h3 className="font-heading font-bold text-white text-xl mb-3">Payment Successful!</h3>
                        <p className="text-[#8A8AA0] text-sm">Thank you! We'll get in touch with you shortly.</p>
                        <button onClick={() => { setForm(initialForm); setStatus('idle'); }}
                          className="mt-6 px-5 py-2.5 rounded-full text-sm border border-white/15 text-[#8A8AA0] hover:text-white hover:border-white/30 transition-all">
                          Make Another Payment
                        </button>
                      </motion.div>
                    ) : (
                      <form key="form" onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                        {status === 'error' && errMsg && (
                          <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
                            <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                            <span>{errMsg}</span>
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Full Name *</label>
                            <input id="payment-name" type="text" className={inputClass('name')}
                              placeholder="Rahul Sharma" value={form.name} onChange={e => set('name', e.target.value)} />
                            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Mobile Number *</label>
                            <input id="payment-mobile" type="tel" className={inputClass('mobile')}
                              placeholder="98765 43210" maxLength={10} value={form.mobile}
                              onChange={e => set('mobile', e.target.value.replace(/\D/g, ''))} />
                            {errors.mobile && <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Email Address *</label>
                          <input id="payment-email" type="email" className={inputClass('email')}
                            placeholder="you@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Service Category *</label>
                          <select id="payment-service" className={`${inputClass('serviceCategory')} appearance-none cursor-pointer`}
                            value={form.serviceCategory} onChange={e => set('serviceCategory', e.target.value)}>
                            <option value="">Select a service...</option>
                            {SERVICE_CATEGORIES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                          </select>
                          {errors.serviceCategory && <p className="text-red-400 text-xs mt-1">{errors.serviceCategory}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Amount (₹) *</label>
                          <div className="grid grid-cols-3 gap-2 mb-3">
                            {PRESET_AMOUNTS.map(amt => (
                              <button key={amt} type="button" onClick={() => set('amount', String(amt))}
                                className={`py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                                  Number(form.amount) === amt
                                    ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/40'
                                    : 'border border-white/10 text-[#8A8AA0] hover:text-white hover:bg-white/5'
                                }`}>
                                ₹{amt.toLocaleString('en-IN')}
                              </button>
                            ))}
                          </div>
                          <input id="payment-amount" type="number" className={inputClass('amount')}
                            placeholder="Or enter custom amount e.g. 5000" min="1" value={form.amount}
                            onChange={e => set('amount', e.target.value)} />
                          {errors.amount && <p className="text-red-400 text-xs mt-1">{errors.amount}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider mb-2">Note <span className="text-[#5A5A7A] font-normal">(Optional)</span></label>
                          <textarea id="payment-note" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#5A5A7A] focus:outline-none glow-input transition-all resize-none"
                            rows={3} placeholder="Any additional info about your payment or project..."
                            value={form.note} onChange={e => set('note', e.target.value)} />
                        </div>

                        {/* Order Summary */}
                        {form.amount && form.serviceCategory && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                            className="rounded-xl p-5 border border-cyan-400/15" style={{ background: 'rgba(0,212,255,0.05)' }}>
                            <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">Order Summary</p>
                            <div className="flex justify-between text-sm text-[#8A8AA0] mb-2">
                              <span>Service</span><span className="text-white">{selectedService?.label || '—'}</span>
                            </div>
                            <div className="flex justify-between text-sm text-[#8A8AA0] mb-3">
                              <span>Client</span><span className="text-white">{form.name || '—'}</span>
                            </div>
                            <div className="h-px bg-white/10 mb-3" />
                            <div className="flex justify-between font-bold">
                              <span className="text-white">Total Amount</span>
                              <span className="text-gradient text-lg">₹{Number(form.amount).toLocaleString('en-IN')}</span>
                            </div>
                          </motion.div>
                        )}

                        <button id="payment-submit-btn" type="submit" disabled={status === 'loading'}
                          className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed text-base shadow-btn-primary hover:shadow-btn-primary-hover">
                          {status === 'loading'
                            ? <><Loader2 size={18} className="animate-spin" />Processing...</>
                            : <><Lock size={16} />Pay {form.amount ? `₹${Number(form.amount).toLocaleString('en-IN')}` : 'Now'} Securely</>}
                        </button>

                        <p className="text-center text-xs text-[#5A5A7A] flex items-center justify-center gap-1.5">
                          <ShieldCheck size={12} /> Your payment is secured by Razorpay with 256-bit SSL encryption.
                        </p>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="text-center mt-8 text-[#8A8AA0] text-sm">
            Need help?{' '}
            <a href="https://wa.me/918769592668" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              WhatsApp us
            </a>{' '}
            or email{' '}
            <a href="mailto:info.genzteck@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              info.genzteck@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
