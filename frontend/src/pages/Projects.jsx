import { Link } from 'react-router-dom';

const defaultProjects = [
  {
    _id: '1',
    title: 'Zomato-Style Food Ordering Platform',
    type: 'Web + Mobile App',
    url: null,
    problem: 'A restaurant chain with 8 locations had no centralized system — orders were taken on WhatsApp, receipts handwritten, and there was zero real-time visibility across branches.',
    solution: 'Built a full-stack platform with a customer-facing ordering app, restaurant admin dashboard, kitchen display screens, and a centralized owner panel showing live sales across all branches.',
    features: ['Multi-Branch Live Dashboard', 'Customer App with Real-Time Order Tracking', 'Kitchen Display System', 'GST-Compliant Billing', 'Online Payment (UPI + Card)', 'Loyalty Points System'],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Razorpay', 'AWS'],
  },
  {
    _id: '2',
    title: 'GeoTrace - Fleet Tracking Platform',
    type: 'SaaS Platform',
    url: null,
    problem: 'A logistics company managing 50+ delivery drivers had no way to track real-time locations, verify attendance, or generate automated route reports — costing them time and money daily.',
    solution: 'Developed GeoTrace, a real-time fleet tracking SaaS with a web dashboard for managers, driver mobile app, geofencing alerts, and automated daily distance and attendance reports.',
    features: ['Real-Time GPS Tracking', 'Geofence Zone Alerts', 'Driver App (Android)', 'Automated Daily Reports', 'Route Replay History', 'WhatsApp Notifications'],
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Google Maps API', 'Firebase', 'Socket.io'],
  },
  {
    _id: '3',
    title: 'Multi-Vendor Wholesale Marketplace',
    type: 'E-Commerce Platform',
    url: null,
    problem: 'A wholesale market association wanted to take their 200+ vendors online but found existing platforms too expensive, too generic, and not suited for bulk ordering with custom pricing.',
    solution: 'Built a custom multi-vendor marketplace with bulk order flows, vendor-specific pricing tiers, credit-based ordering, offline-to-online catalog migration, and a seller app.',
    features: ['200+ Vendor Onboarding', 'Bulk Order Management', 'Tiered Pricing Engine', 'Credit & Payment Tracking', 'Seller Mobile App', 'Buyer Loyalty Program'],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS S3'],
  },
  {
    _id: '4',
    title: 'Hospital Staff & Attendance System',
    type: 'Internal Tool',
    url: null,
    problem: 'A 300-bed hospital was managing staff shifts, attendance, and payroll on Excel spreadsheets — leading to errors, disputes, and hours of manual reconciliation every month.',
    solution: 'Developed a biometric-integrated staff management system with shift scheduling, real-time attendance tracking, leave management, automated payroll, and management reports.',
    features: ['Biometric Integration', 'Smart Shift Scheduling', 'Leave & Holiday Management', 'Automated Payroll Calculation', 'Department-Wise Reports', 'Employee Self-Service Portal'],
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'NGINX'],
  },
];

export default function Projects({ projects }) {
  const data = projects && projects.length > 0 ? projects : defaultProjects;

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 80, background: 'linear-gradient(135deg, #070711 0%, #12121E 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 0%, rgba(123,47,190,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-label">Portfolio</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: 12 }}>
            Our <span className="text-gradient">Projects</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: 580, margin: '20px auto 0' }}>
            Real problems, real solutions. Explore the digital products we've built that are driving results.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <span className="badge">{data.length} Projects</span>
            <span className="badge">Production Grade</span>
            <span className="badge">Indian Market</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {data.map((project, i) => (
            <div key={project._id || i} className="card" style={{ padding: '36px 40px' }}>
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <span className="section-label" style={{ marginBottom: 8, display: 'block', textAlign: 'left' }}>{project.type}</span>
                  <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', margin: 0 }}>{project.title}</h2>
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '8px 20px' }}>
                      View Live →
                    </a>
                  ) : (
                    <span className="badge-coming-soon">Case Study Coming Soon</span>
                  )}
                </div>
              </div>

              {/* Problem & Solution */}
              <div className="grid-2" style={{ gap: 28, marginBottom: 28 }}>
                <div style={{ background: 'rgba(255,50,50,0.05)', border: '1px solid rgba(255,50,50,0.15)', borderRadius: 12, padding: 20 }}>
                  <p style={{ color: '#ff7777', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700, marginBottom: 10 }}>🔴 The Problem</p>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>{project.problem}</p>
                </div>
                <div style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.15)', borderRadius: 12, padding: 20 }}>
                  <p style={{ color: 'var(--color-primary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700, marginBottom: 10 }}>🟢 Our Solution</p>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>{project.solution}</p>
                </div>
              </div>

              {/* Features & Tech Stack */}
              <div className="grid-2" style={{ gap: 28 }}>
                {project.features && project.features.length > 0 && (
                  <div>
                    <p style={{ color: '#8A8AA0', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12, fontWeight: 600 }}>Features Delivered</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {project.features.map((f, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#c0c0d0', fontSize: '0.9rem' }}>
                          <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.techStack && project.techStack.length > 0 && (
                  <div>
                    <p style={{ color: '#8A8AA0', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12, fontWeight: 600 }}>Tech Stack</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {project.techStack.map((tech, j) => (
                        <span key={j} className="badge" style={{ fontSize: '0.85rem' }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: 16 }}>
            Want Us to Build <span className="text-gradient">Your Project?</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 32 }}>Get a free consultation and project estimate.</p>
          <Link to="/contact" className="btn btn-primary">Start Your Project →</Link>
        </div>
      </section>
    </div>
  );
}
