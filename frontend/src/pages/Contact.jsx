import { useState } from 'react';
import { publicAPI } from '../api';

const SERVICE_OPTIONS = [
  'Web Development', 'Mobile App Development', 'Restaurant POS System',
  'Fleet / GPS Tracking', 'AI & Automation', 'E-Commerce Platform',
  'Admin Dashboard / CRM', 'SaaS Development', 'API Integration', 'Other / Custom Project',
];

const BUDGET_OPTIONS = ['Under ₹10,000', '₹10,000 – ₹25,000', '₹25,000 – ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000+'];
const TIMELINE_OPTIONS = ['ASAP (Urgent)', '1–2 Weeks', '1 Month', '2–3 Months', 'Flexible'];

const inputStyle = {
  width: '100%', background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
  padding: '12px 16px', color: '#fff', fontSize: '0.95rem', outline: 'none',
  fontFamily: 'var(--font-body)', boxSizing: 'border-box', transition: 'border-color 0.2s',
};

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'info.genzteck@gmail.com', href: 'mailto:info.genzteck@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91 87695 92668', href: 'tel:+918769592668' },
  { icon: '💬', label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/918769592668' },
  { icon: '📍', label: 'Address', value: 'B-54, Shri Shyam Residency, Dadudayal Nagar, Mansarovar, Jaipur (Raj.) - 302020', href: 'https://maps.google.com/?q=Mansarovar+Jaipur' },
  { icon: '📸', label: 'Instagram', value: '@genz_teck', href: 'https://www.instagram.com/genz_teck' },
  { icon: '💼', label: 'LinkedIn', value: 'GenzTecknology', href: 'https://www.linkedin.com/company/genztecknology/' },
  { icon: '📘', label: 'Facebook', value: 'GenzTeck Official', href: 'https://www.facebook.com/share/1LpRPBaGaP/' },
  { icon: '⭐', label: 'Google Review', value: 'Rate us on Google', href: 'https://g.page/r/CV6AhPIhEk6XEAI/review' },
];

const openingHours = [
  { day: 'Monday', time: '8:00 AM – 10:00 PM' },
  { day: 'Tuesday', time: '8:00 AM – 10:00 PM' },
  { day: 'Wednesday', time: '8:00 AM – 10:00 PM' },
  { day: 'Thursday', time: '8:00 AM – 10:00 PM' },
  { day: 'Friday', time: '8:00 AM – 10:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 10:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 10:00 PM' },
];

export default function Contact({ settings }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', businessName: '', serviceRequired: '', budgetRange: '', timeline: '', projectDetails: '', preferredContactMethod: 'whatsapp' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      await publicAPI.submitLead(form);
      setStatus('success');
      setForm({ name: '', phone: '', email: '', businessName: '', serviceRequired: '', budgetRange: '', timeline: '', projectDetails: '', preferredContactMethod: 'whatsapp' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err?.response?.data?.message || 'Something went wrong. Please try again or WhatsApp us directly.');
    }
  };

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 80, background: 'linear-gradient(135deg, #070711 0%, #12121E 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-label">Get in Touch</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: 12 }}>
            Let's Build <span className="text-gradient">Together</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: 540, margin: '20px auto 0' }}>
            Tell us about your project and get a free consultation within 24 hours.
          </p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 60, alignItems: 'flex-start' }}>
            {/* Left: Form */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.6rem', marginBottom: 8 }}>Start Your Project</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 32 }}>Fill in the details below and we'll get back to you within 24 hours.</p>

              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: 48, background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: 16 }}>
                  <span style={{ fontSize: '3.5rem' }}>🎉</span>
                  <h3 style={{ color: '#fff', fontFamily: 'var(--font-heading)', margin: '16px 0 10px' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                    Thanks for reaching out! Our team will contact you within 24 hours via your preferred method.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn btn-outline" style={{ marginTop: 20 }}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div className="grid-2" style={{ gap: 16 }}>
                    <div>
                      <label style={{ color: '#c0c0d0', fontSize: '0.85rem', marginBottom: 6, display: 'block' }}>Your Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Rahul Sharma" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ color: '#c0c0d0', fontSize: '0.85rem', marginBottom: 6, display: 'block' }}>Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" style={inputStyle} />
                    </div>
                  </div>
                  <div className="grid-2" style={{ gap: 16 }}>
                    <div>
                      <label style={{ color: '#c0c0d0', fontSize: '0.85rem', marginBottom: 6, display: 'block' }}>Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ color: '#c0c0d0', fontSize: '0.85rem', marginBottom: 6, display: 'block' }}>Business Name</label>
                      <input name="businessName" value={form.businessName} onChange={handleChange} placeholder="Your Company Pvt. Ltd." style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={{ color: '#c0c0d0', fontSize: '0.85rem', marginBottom: 6, display: 'block' }}>Service Required *</label>
                    <select name="serviceRequired" value={form.serviceRequired} onChange={handleChange} required style={inputStyle}>
                      <option value="">Select a service...</option>
                      {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="grid-2" style={{ gap: 16 }}>
                    <div>
                      <label style={{ color: '#c0c0d0', fontSize: '0.85rem', marginBottom: 6, display: 'block' }}>Budget Range</label>
                      <select name="budgetRange" value={form.budgetRange} onChange={handleChange} style={inputStyle}>
                        <option value="">Select budget...</option>
                        {BUDGET_OPTIONS.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ color: '#c0c0d0', fontSize: '0.85rem', marginBottom: 6, display: 'block' }}>Timeline</label>
                      <select name="timeline" value={form.timeline} onChange={handleChange} style={inputStyle}>
                        <option value="">Select timeline...</option>
                        {TIMELINE_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ color: '#c0c0d0', fontSize: '0.85rem', marginBottom: 6, display: 'block' }}>Project Details *</label>
                    <textarea name="projectDetails" value={form.projectDetails} onChange={handleChange} required rows={5} placeholder="Tell us about your project — what you want to build, any specific features, current challenges..." style={{ ...inputStyle, resize: 'vertical', minHeight: 130 }} />
                  </div>
                  <div>
                    <label style={{ color: '#c0c0d0', fontSize: '0.85rem', marginBottom: 10, display: 'block' }}>Preferred Contact Method</label>
                    <div style={{ display: 'flex', gap: 20 }}>
                      {['phone', 'email', 'whatsapp'].map(method => (
                        <label key={method} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', color: form.preferredContactMethod === method ? 'var(--color-primary)' : 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: form.preferredContactMethod === method ? 600 : 400 }}>
                          <input type="radio" name="preferredContactMethod" value={method} checked={form.preferredContactMethod === method} onChange={handleChange} style={{ accentColor: 'var(--color-primary)' }} />
                          {method.charAt(0).toUpperCase() + method.slice(1)}
                        </label>
                      ))}
                    </div>
                  </div>
                  {status === 'error' && (
                    <div style={{ background: 'rgba(255,50,50,0.1)', border: '1px solid rgba(255,50,50,0.3)', borderRadius: 8, padding: '12px 16px', color: '#ff7777', fontSize: '0.9rem' }}>
                      {errorMsg}
                    </div>
                  )}
                  <button type="submit" className="btn btn-primary" disabled={status === 'loading'} style={{ fontSize: '1.05rem', padding: '14px 32px', cursor: status === 'loading' ? 'not-allowed' : 'pointer', opacity: status === 'loading' ? 0.7 : 1 }}>
                    {status === 'loading' ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Contact Info */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.6rem', marginBottom: 8 }}>Contact Information</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 32 }}>Reach us through any of these channels — we're always online.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
                {contactInfo.map((info, i) => (
                  <a key={i} href={info.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '16px 20px', transition: 'border-color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = ''}>
                      <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{info.icon}</span>
                      <div>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: 0.8, margin: '0 0 2px', fontWeight: 600 }}>{info.label}</p>
                        <p style={{ color: '#fff', margin: 0, fontWeight: 500, fontSize: '0.9rem' }}>{info.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Opening Hours */}
              <div className="card" style={{ marginBottom: 24 }}>
                <h3 style={{ color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: 16, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 8 }}>🕐 Opening Hours</h3>
                {openingHours.map(({ day, time }) => {
                  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
                  const isToday = day === today;
                  return (
                    <div key={day} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.88rem' }}>
                      <span style={{ color: isToday ? 'var(--color-primary)' : 'var(--color-text-muted)', fontWeight: isToday ? 700 : 400 }}>{day}{isToday ? ' (Today)' : ''}</span>
                      <span style={{ color: isToday ? '#fff' : 'var(--color-text-muted)', fontWeight: isToday ? 600 : 400 }}>{time}</span>
                    </div>
                  );
                })}
              </div>

              {/* Quick Stats */}
              <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(123,47,190,0.08))', border: '1px solid rgba(0,212,255,0.15)' }}>
                <h3 style={{ color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: 20, fontSize: '1rem' }}>Why Contact Us?</h3>
                {['Free consultation with no obligation', 'Response within 24 hours guaranteed', 'Transparent pricing, no hidden costs', 'Dedicated project manager assigned', 'NDA signing available on request'].map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: i < 4 ? 12 : 0, color: '#c0c0d0', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>✓</span> {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
