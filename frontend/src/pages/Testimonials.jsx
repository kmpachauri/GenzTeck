import { useState } from 'react';
import './Testimonials.css';

const defaultTestimonials = [
  { _id: '1', name: 'Rahul Sharma', businessName: 'Prakrit Astro', rating: 5, type: 'text', reviewText: 'GenzTeck built our website in just 2 weeks and it looks absolutely stunning. Our online inquiries have tripled since launch!' },
  { _id: '2', name: 'Priya Patel', businessName: 'Axora Homes', rating: 5, type: 'text', reviewText: 'The real estate website they built for us is exactly what we envisioned. Clean, professional, and it converts visitors perfectly.' },
  { _id: '3', name: 'Chef Meera', businessName: 'Zaira Restaurant', rating: 5, type: 'text', reviewText: 'Our online ordering system has been a game changer. Customers love the QR menu and we save thousands in delivery app commissions.' },
  { _id: '4', name: 'Vikram Singh', businessName: 'Startup Founder', rating: 5, type: 'text', reviewText: 'The admin panel and CRM they built for us saved us 10+ hours a week. Professional team, excellent communication throughout.' },
  { _id: '5', name: 'Ananya Gupta', businessName: 'Fitness Studio', rating: 5, type: 'text', reviewText: 'Our booking system is flawless. Clients can book 24/7 and we get WhatsApp notifications instantly. Highly recommended!' },
];

const tabs = [
  { id: 'text', label: 'Text Reviews' },
  { id: 'video', label: 'Video Testimonials' },
  { id: 'photo', label: 'Photo Reviews' },
];

export default function Testimonials({ testimonials }) {
  const list = testimonials?.length ? testimonials : defaultTestimonials;
  const [activeTab, setActiveTab] = useState('text');

  const filtered = list.filter(t => t.type === activeTab);
  const counts = { text: list.filter(t => t.type === 'text').length, video: list.filter(t => t.type === 'video').length, photo: list.filter(t => t.type === 'photo').length };
  const avgRating = list.length ? (list.reduce((s, t) => s + (t.rating || 5), 0) / list.length).toFixed(1) : '5.0';

  return (
    <div className="testimonials-page">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <div className="section-label">Client Reviews</div>
          <h1 className="display-2">What Our Clients <span className="text-gradient">Say</span></h1>
          <p className="page-hero-subtitle">Real feedback from real businesses we've helped grow.</p>
          <div className="testimonials-hero-stats">
            <div className="t-stat"><span className="t-stat-val">{avgRating}★</span><span className="t-stat-label">Average Rating</span></div>
            <div className="t-stat-divider" />
            <div className="t-stat"><span className="t-stat-val">{list.length}+</span><span className="t-stat-label">Happy Clients</span></div>
            <div className="t-stat-divider" />
            <div className="t-stat"><span className="t-stat-val">100%</span><span className="t-stat-label">Satisfaction</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="t-tabs" role="tablist">
            {tabs.map(tab => (
              <button key={tab.id} className={`t-tab ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)} role="tab" aria-selected={activeTab === tab.id} id={`t-tab-${tab.id}`}>
                {tab.label}
                {counts[tab.id] > 0 && <span className="t-tab-count">{counts[tab.id]}</span>}
              </button>
            ))}
          </div>
          {filtered.length > 0 ? (
            <div className="grid-3">
              {filtered.map(t => (
                <div key={t._id} className="testimonial-card">
                  <div className="testimonial-stars">{'★'.repeat(t.rating || 5)}</div>
                  <p className="testimonial-text">"{t.reviewText}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.name?.charAt(0) || 'C'}</div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      {t.businessName && <div className="testimonial-business">{t.businessName}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="coming-soon-section">
              <div className="coming-soon-icon">🎬</div>
              <h3>Coming Soon</h3>
              <p>{activeTab === 'video' ? 'Video testimonials are being recorded and will be uploaded soon.' : 'Photo testimonials coming soon!'}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
