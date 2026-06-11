import { useState } from 'react';
import { ShieldCheck, CreditCard, Lock, CheckCircle, AlertCircle } from 'lucide-react';
import './Payment.css';

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
  name: '',
  mobile: '',
  email: '',
  serviceCategory: '',
  amount: '',
  note: '',
};

export default function Payment() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
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

    // Razorpay will be integrated here
    // For now, simulate the payment initiation
    setTimeout(() => {
      setStatus('error');
      setErrMsg('Payment gateway not yet integrated. Please contact us on WhatsApp to complete your payment.');
    }, 800);
  };

  const selectedService = SERVICE_CATEGORIES.find(s => s.value === form.serviceCategory);

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 60, background: 'linear-gradient(135deg, #070711 0%, #12121E 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-label">Secure Payment</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: 12 }}>
            Pay for Your <span className="text-gradient">Service</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', marginTop: 16, maxWidth: 500, margin: '16px auto 0' }}>
            Fast, secure payments via Razorpay. Your transaction is encrypted and protected.
          </p>
          <div className="payment-trust-badges">
            <span><ShieldCheck size={14} /> SSL Secured</span>
            <span><Lock size={14} /> 256-bit Encrypted</span>
            <span><CreditCard size={14} /> Razorpay Powered</span>
          </div>
        </div>
      </section>

      {/* Payment Form */}
      <section className="section">
        <div className="container" style={{ maxWidth: 640 }}>
          <div className="payment-card card" style={{ position: 'relative', zIndex: 1 }}>
            <div className="payment-card-header">
              <CreditCard size={20} />
              <span>Payment Details</span>
            </div>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle size={56} color="var(--color-green)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: 10 }}>Payment Successful!</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>Thank you! We'll get in touch with you shortly.</p>
                <button className="btn btn-outline" style={{ marginTop: 24 }} onClick={() => { setForm(initialForm); setStatus('idle'); }}>
                  Make Another Payment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {status === 'error' && errMsg && (
                  <div className="payment-error-banner">
                    <AlertCircle size={16} /> {errMsg}
                  </div>
                )}

                {/* Name & Mobile */}
                <div className="payment-row">
                  <div className="form-group">
                    <label className="form-label">Full Name <span className="required-star">*</span></label>
                    <input
                      type="text"
                      className={`form-input${errors.name ? ' input-error' : ''}`}
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                    />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Mobile Number <span className="required-star">*</span></label>
                    <input
                      type="tel"
                      className={`form-input${errors.mobile ? ' input-error' : ''}`}
                      placeholder="98765 43210"
                      maxLength={10}
                      value={form.mobile}
                      onChange={e => set('mobile', e.target.value.replace(/\D/g, ''))}
                    />
                    {errors.mobile && <span className="field-error">{errors.mobile}</span>}
                  </div>
                </div>

                {/* Email */}
                <div className="form-group">
                  <label className="form-label">Email Address <span className="required-star">*</span></label>
                  <input
                    type="email"
                    className={`form-input${errors.email ? ' input-error' : ''}`}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                {/* Service Category */}
                <div className="form-group">
                  <label className="form-label">Service Category <span className="required-star">*</span></label>
                  <select
                    className={`form-select${errors.serviceCategory ? ' input-error' : ''}`}
                    value={form.serviceCategory}
                    onChange={e => set('serviceCategory', e.target.value)}
                  >
                    <option value="">Select a service...</option>
                    {SERVICE_CATEGORIES.map(s => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                  {errors.serviceCategory && <span className="field-error">{errors.serviceCategory}</span>}
                </div>

                {/* Amount */}
                <div className="form-group">
                  <label className="form-label">Amount (₹) <span className="required-star">*</span></label>
                  <div className="payment-preset-amounts">
                    {PRESET_AMOUNTS.map(amt => (
                      <button
                        key={amt}
                        type="button"
                        className={`preset-amount-btn${Number(form.amount) === amt ? ' active' : ''}`}
                        onClick={() => set('amount', String(amt))}
                      >
                        ₹{amt.toLocaleString('en-IN')}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    className={`form-input${errors.amount ? ' input-error' : ''}`}
                    placeholder="Or enter custom amount e.g. 5000"
                    min="1"
                    value={form.amount}
                    onChange={e => set('amount', e.target.value)}
                    style={{ marginTop: 10 }}
                  />
                  {errors.amount && <span className="field-error">{errors.amount}</span>}
                </div>

                {/* Note */}
                <div className="form-group">
                  <label className="form-label">Note <span style={{ color: 'var(--color-text-dim)', fontWeight: 400 }}>(Optional)</span></label>
                  <textarea
                    className="form-textarea"
                    rows={3}
                    placeholder="Any additional info about your payment or project..."
                    value={form.note}
                    onChange={e => set('note', e.target.value)}
                    style={{ minHeight: 80 }}
                  />
                </div>

                {/* Order Summary */}
                {form.amount && form.serviceCategory && (
                  <div className="payment-summary">
                    <div className="payment-summary-title">Order Summary</div>
                    <div className="payment-summary-row">
                      <span>Service</span>
                      <span>{selectedService?.label || '—'}</span>
                    </div>
                    <div className="payment-summary-row">
                      <span>Name</span>
                      <span>{form.name || '—'}</span>
                    </div>
                    <div className="payment-summary-divider" />
                    <div className="payment-summary-row total">
                      <span>Total Amount</span>
                      <span>₹{Number(form.amount).toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary payment-submit-btn"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    'Processing...'
                  ) : (
                    <><Lock size={16} /> Pay {form.amount ? `₹${Number(form.amount).toLocaleString('en-IN')}` : 'Now'} Securely</>
                  )}
                </button>

                <p className="payment-footer-note">
                  <ShieldCheck size={13} /> Your payment is secured by Razorpay with 256-bit SSL encryption. We never store your card details.
                </p>
              </form>
            )}
          </div>

          {/* Help */}
          <div style={{ textAlign: 'center', marginTop: 32, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            Need help? <a href="https://wa.me/918769592668" target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)' }}>WhatsApp us</a> or email <a href="mailto:info.genzteck@gmail.com" style={{ color: 'var(--color-primary)' }}>info.genzteck@gmail.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}
