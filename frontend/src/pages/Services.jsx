import { Link } from 'react-router-dom';

const defaultServices = [
  { _id: '1', icon: '🌐', title: 'Custom Web Development', shortDescription: 'Tailored web applications built from scratch with modern frameworks and pixel-perfect design.', features: ['Responsive Design', 'SEO Optimized', 'Performance Tuned', 'CMS Integration', 'API Ready'], idealFor: ['Startups', 'Enterprises', 'E-Commerce Brands'] },
  { _id: '2', icon: '📱', title: 'Mobile App Development', shortDescription: 'Native and cross-platform mobile apps for iOS & Android that users love.', features: ['React Native / Flutter', 'Offline Support', 'Push Notifications', 'App Store Deployment', 'Analytics Built-In'], idealFor: ['Consumer Apps', 'Business Tools', 'On-Demand Services'] },
  { _id: '3', icon: '🍽️', title: 'Restaurant Tech Solutions', shortDescription: 'Complete digital transformation for food businesses — from ordering to kitchen display.', features: ['Online Ordering System', 'POS Integration', 'Table Management', 'Kitchen Display System', 'Loyalty Programs'], idealFor: ['Restaurants', 'Cloud Kitchens', 'Food Chains'] },
  { _id: '4', icon: '📊', title: 'Admin Dashboards & CRM', shortDescription: 'Powerful internal tools that give your team complete visibility and control.', features: ['Real-Time Analytics', 'Role-Based Access', 'Data Export', 'Custom Reports', 'Automation Workflows'], idealFor: ['Operations Teams', 'Sales Departments', 'Management'] },
  { _id: '5', icon: '🗺️', title: 'Geo-Tracking Platforms', shortDescription: 'Real-time location tracking and fleet management solutions built for scale.', features: ['Live GPS Tracking', 'Route Optimization', 'Geofencing Alerts', 'Driver App', 'History Playback'], idealFor: ['Logistics', 'Delivery Services', 'Field Teams'] },
  { _id: '6', icon: '🤖', title: 'AI & Automation', shortDescription: 'Intelligent automation that eliminates repetitive tasks and unlocks business insights.', features: ['AI Chatbots', 'Workflow Automation', 'Data Extraction', 'Report Generation', 'Smart Alerts'], idealFor: ['HR Teams', 'Finance Departments', 'Customer Support'] },
  { _id: '7', icon: '🛒', title: 'E-Commerce Platforms', shortDescription: 'Full-featured online stores and multi-vendor marketplaces built to convert.', features: ['Product Catalog', 'Secure Checkout', 'Inventory Management', 'Multi-Vendor Support', 'Analytics'], idealFor: ['Retailers', 'Wholesalers', 'Marketplace Owners'] },
  { _id: '8', icon: '☁️', title: 'SaaS Development', shortDescription: 'End-to-end SaaS product development from MVP to full-scale platform.', features: ['Multi-Tenancy', 'Subscription Billing', 'User Management', 'API-First Design', 'White Labeling'], idealFor: ['Tech Startups', 'B2B Founders', 'SaaS Entrepreneurs'] },
  { _id: '9', icon: '🔗', title: 'API & Integration Services', shortDescription: 'Seamlessly connect your tools, platforms, and third-party services.', features: ['REST & GraphQL APIs', 'Webhook Setup', 'Payment Gateways', 'WhatsApp Integration', 'CRM Sync'], idealFor: ['Businesses with Legacy Systems', 'Multi-Platform Companies'] },
  { _id: '10', icon: '🛡️', title: 'Cybersecurity & DevOps', shortDescription: 'Secure, scalable infrastructure with automated deployments and monitoring.', features: ['SSL & Security Hardening', 'CI/CD Pipelines', 'Docker & Kubernetes', 'Uptime Monitoring', 'Backup Systems'], idealFor: ['Production Apps', 'Fintech', 'Healthcare Tech'] },
];

export default function Services({ services }) {
  const data = services && services.length > 0 ? services : defaultServices;

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 80, background: 'linear-gradient(135deg, #070711 0%, #12121E 50%, #0a0a1a 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(123,47,190,0.1) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(0,212,255,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-label">What We Offer</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: 12 }}>
            Our <span className="text-gradient">Services</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: 580, margin: '20px auto 0' }}>
            From concept to deployment — we cover the full spectrum of digital product development.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <span className="badge">{data.length} Services Available</span>
            <span className="badge">₹-Friendly Pricing</span>
            <span className="badge">Fast Delivery</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 28 }}>
            {data.map((service, i) => (
              <div key={service._id || i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 0, padding: 28 }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <span style={{ fontSize: '2.2rem' }}>{service.icon || '⚙️'}</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.15rem', margin: 0, lineHeight: 1.3 }}>{service.title}</h3>
                </div>

                {/* Description */}
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
                  {service.shortDescription || service.description}
                </p>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <div style={{ marginBottom: 16 }}>
                    <p style={{ color: '#8A8AA0', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10, fontWeight: 600 }}>What's Included</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {service.features.slice(0, 5).map((f, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#c0c0d0', fontSize: '0.9rem' }}>
                          <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Ideal For */}
                {service.idealFor && service.idealFor.length > 0 && (
                  <div style={{ marginBottom: 20 }}>
                    <p style={{ color: '#8A8AA0', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8, fontWeight: 600 }}>Ideal For</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {service.idealFor.map((tag, j) => (
                        <span key={j} className="badge" style={{ fontSize: '0.78rem' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                )}

                <Link to="/contact" className="btn btn-primary" style={{ textAlign: 'center', display: 'block', textDecoration: 'none' }}>
                  Get This Service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: 16 }}>
            Not Sure Which Service You Need?
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 32 }}>
            Talk to us and we'll figure out the best solution for your specific business challenge.
          </p>
          <Link to="/contact" className="btn btn-primary">Book a Free Consultation →</Link>
        </div>
      </section>
    </div>
  );
}
