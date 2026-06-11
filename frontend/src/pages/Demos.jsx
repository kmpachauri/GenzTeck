import { useState } from 'react';
import { Link } from 'react-router-dom';
import { publicAPI } from '../api';
import { Send, CheckCircle, AlertCircle, Filter } from 'lucide-react';
import './Demos.css';

const defaultDemos = [
  { _id: '1', title: 'Astro Website Landing Page With Admin Panel', description: 'A complete astrology business website with integrated admin panel for managing services and content.', features: ['Landing page', 'Admin panel', 'Service management', 'Lead capture'], status: 'coming-soon' },
  { _id: '2', title: 'Bakery E-commerce System', description: 'Full e-commerce system for bakeries with product catalog, cart, and order management.', features: ['Product catalog', 'Shopping cart', 'Order management', 'Admin panel'], status: 'coming-soon' },
  { _id: '3', title: 'Reminder System', description: 'Smart reminder and notification system for businesses to follow up with clients automatically.', features: ['Scheduled reminders', 'WhatsApp notifications', 'Email alerts', 'Dashboard'], status: 'coming-soon' },
  { _id: '4', title: 'CRM Demo', description: 'Customer Relationship Management system to track leads, clients, and follow-ups.', features: ['Lead management', 'Client profiles', 'Follow-up tracking', 'Reports'], status: 'coming-soon' },
  { _id: '5', title: 'Booking System Demo', description: 'Online appointment booking system with calendar management and client notifications.', features: ['Calendar booking', 'SMS/Email confirmations', 'Admin calendar', 'Client management'], status: 'coming-soon' },
  { _id: '6', title: 'Restaurant Ordering Demo', description: 'Complete restaurant ordering system with QR menu, waiter app, and kitchen display.', features: ['QR menu', 'Table ordering', 'Kitchen display', 'Bill management'], status: 'coming-soon' },
];

const initialRequest = { name: '', phone: '', email: '', businessType: '', demoInterestedIn: '', message: '' };

export default function Demos({ demos }) {
  const demoList = demos?.length ? demos : defaultDemos;
  const [form, setForm] = useState(initialRequest);
  const [reqStatus, setReqStatus] = useState(null);
  const [errMsg, setErrMsg] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      setErrMsg('Name, phone and email are required.');
      setReqStatus('error');
      return;
    }
    setReqStatus('loading');
    try {
      await publicAPI.submitDemoRequest(form);
      setReqStatus('success');
      setForm(initialRequest);
    } catch (err) {
      setErrMsg(err?.response?.data?.message || 'Something went wrong. Please try again.');
      setReqStatus('error');
    }
  };

  return (
    <div className="demos-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <div className="section-label">Interactive Demos</div>
          <h1 className="display-2">See Our Systems <span className="text-gradient">In Action</span></h1>
          <p className="page-hero-subtitle">Real systems built by GenzTeck — request early access to our upcoming live demos.</p>
        </div>
      </section>

      {/* Demo Cards */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Available Demos</div>
            <h2 className="section-title">Coming <span className="text-gradient">Soon</span></h2>
            <p className="section-subtitle">Our demo showcase is launching soon. Request access below to be notified first.</p>
          </div>
          <div className="demos-grid">
            {demoList.map(demo => (
              <div key={demo._id} className="card demo-card">
                <div className="demo-card-header">
                  <span className="badge badge-coming-soon">⏳ Coming Soon</span>
                </div>
                <div className="demo-mockup">
                  <div className="demo-mockup-inner">
                    <div className="demo-mockup-bar" />
                    <div className="demo-mockup-lines">
                      {[80, 60, 90, 50].map((w, i) => <div key={i} className="demo-mockup-line" style={{ width: `${w}%` }} />)}
                    </div>
                  </div>
                </div>
                <h3 className="demo-title">{demo.title}</h3>
                <p className="card-text">{demo.description}</p>
                <div className="feature-list" style={{ marginTop: 16 }}>
                  {(demo.features || []).map((f, i) => (
                    <div key={i} className="feature-item">
                      <span className="feature-check">✓</span> {f}
                    </div>
                  ))}
                </div>
                <button className="btn btn-outline btn-sm" style={{ marginTop: 20, width: '100%', justifyContent: 'center' }}
                  onClick={() => document.getElementById('demo-request-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Request Demo Access
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="section bg-grid" id="demo-request-form">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Request Access</div>
            <h2 className="section-title">Request a <span className="text-gradient">Demo</span></h2>
            <p className="section-subtitle">Fill out the form and we'll schedule a personalized demo for you.</p>
          </div>
          <div className="demo-request-wrapper">
            <div className="card">
              {reqStatus === 'success' ? (
                <div className="contact-success">
                  <CheckCircle size={48} color="var(--color-green)" />
                  <h3>Request Received! 🎉</h3>
                  <p>We'll contact you shortly to schedule your demo.</p>
                  <button className="btn btn-outline" onClick={() => setReqStatus(null)}>Submit Another Request</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {reqStatus === 'error' && (
                    <div className="form-error-banner">
                      <AlertCircle size={16} /> {errMsg}
                    </div>
                  )}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input id="demo-req-name" name="name" type="text" className="form-input" placeholder="Your name" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone *</label>
                      <input id="demo-req-phone" name="phone" type="tel" className="form-input" placeholder="+91 99999 99999" value={form.phone} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input id="demo-req-email" name="email" type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Business Type</label>
                      <input id="demo-req-btype" name="businessType" type="text" className="form-input" placeholder="e.g. Restaurant, Retail, SaaS" value={form.businessType} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Demo Interested In</label>
                    <select id="demo-req-interest" name="demoInterestedIn" className="form-select" value={form.demoInterestedIn} onChange={handleChange}>
                      <option value="">Select a demo...</option>
                      {demoList.map(d => <option key={d._id} value={d.title}>{d.title}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea id="demo-req-message" name="message" className="form-textarea" placeholder="Any specific requirements or questions?" value={form.message} onChange={handleChange} rows={4} />
                  </div>
                  <button type="submit" className="btn btn-primary" id="demo-req-submit" disabled={reqStatus === 'loading'} style={{ width: '100%', justifyContent: 'center' }}>
                    {reqStatus === 'loading' ? 'Submitting...' : <><Send size={16} /> Request Demo</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
