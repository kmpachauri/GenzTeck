import { Link } from 'react-router-dom';

const values = [
  { icon: '🚀', title: 'Innovation First', desc: 'We build tomorrow\'s solutions today, always staying ahead of the technology curve.' },
  { icon: '🎯', title: 'Client-Centric', desc: 'Every line of code is written with your business goals in mind. Your success is our metric.' },
  { icon: '⚡', title: 'Speed & Quality', desc: 'Rapid delivery without compromising on code quality, security, or scalability.' },
  { icon: '🔒', title: 'Security by Design', desc: 'Security isn\'t an afterthought — it\'s baked into every layer of what we build.' },
];

const services = [
  'Custom Web & Mobile App Development',
  'Restaurant & Food Business Automation',
  'Admin Dashboards & CRM Systems',
  'Real-Time Geo-Tracking Platforms',
  'AI-Powered Business Automation',
  'E-Commerce & Multi-Vendor Platforms',
  'SaaS Product Development',
  'API Integration & Third-Party Connectivity',
];

const whyUs = [
  { title: 'Gen Z Perspective', desc: 'We think like the next generation — digital-native, mobile-first, and always connected.' },
  { title: 'Full-Stack Expertise', desc: 'From UI pixels to database schemas, we own every layer of your product.' },
  { title: 'Transparent Pricing', desc: 'No hidden costs, no surprise invoices. Clear milestones and honest quotes.' },
  { title: 'Post-Launch Support', desc: 'We don\'t disappear after go-live. Ongoing maintenance, updates, and growth support.' },
  { title: 'Indian Market Focus', desc: 'Built specifically for Indian businesses with ₹-friendly pricing and local market insight.' },
  { title: 'Scalable Architecture', desc: 'Every product we build is ready to grow from 100 to 100,000 users without a rebuild.' },
];

const techStack = [
  { category: 'Frontend', items: ['React.js', 'React Native', 'Next.js', 'Vite'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'] },
  { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'VPS Hosting', 'Docker', 'CI/CD'] },
  { category: 'AI & Automation', items: ['OpenAI API', 'Gemini API', 'n8n', 'Custom ML'] },
  { category: 'Tools', items: ['Socket.io', 'Stripe', 'Razorpay', 'Twilio'] },
];

export default function About() {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 80, background: 'linear-gradient(135deg, #070711 0%, #12121E 50%, #0a0a1a 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-label">Our Story</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: 12 }}>
            About <span className="text-gradient">GenzTeck</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: 600, margin: '20px auto 0' }}>
            A tech studio built by the next generation, for the next generation of businesses.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 40, alignItems: 'center' }}>
            <div>
              <span className="section-label">Our Purpose</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontFamily: 'var(--font-heading)', color: '#fff', margin: '12px 0 20px' }}>
                Who is GenzTeck?
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 20 }}>
                GenzTeck is a full-stack technology studio founded by young Indian developers who believe every business — from a local restaurant to a growing startup — deserves world-class software at a fair price.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                We combine modern design sensibilities with robust engineering to create digital products that don't just work — they <em>wow</em>. Our team brings fresh perspectives, cutting-edge tech, and a deep understanding of what Indian businesses actually need.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="card" style={{ borderLeft: '3px solid var(--color-primary)' }}>
                <h3 style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', marginBottom: 10 }}>🎯 Our Mission</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>
                  To democratize premium software for Indian businesses by delivering cutting-edge, scalable, and affordable digital solutions that drive real growth.
                </p>
              </div>
              <div className="card" style={{ borderLeft: '3px solid var(--color-secondary)' }}>
                <h3 style={{ color: 'var(--color-secondary)', fontFamily: 'var(--font-heading)', marginBottom: 10 }}>🔭 Our Vision</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>
                  To become India's most trusted Gen Z tech partner — building the digital infrastructure that powers the next decade of Indian entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Capabilities</span>
            <h2 className="section-title">What We Build</h2>
          </div>
          <div className="grid-2" style={{ gap: 16, marginTop: 40 }}>
            {services.map((s, i) => (
              <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px' }}>
                <span style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>✦</span>
                <span style={{ color: '#e0e0e0', fontWeight: 500 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Edge</span>
            <h2 className="section-title">Why We're Different</h2>
          </div>
          <div className="grid-3" style={{ marginTop: 40 }}>
            {whyUs.map((item, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Core Values</span>
            <h2 className="section-title">What Drives Us</h2>
          </div>
          <div className="grid-2" style={{ gap: 24, marginTop: 40 }}>
            {values.map((v, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>{v.icon}</span>
                <div>
                  <h3 style={{ color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: 8 }}>{v.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Philosophy */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Philosophy</span>
            <h2 className="section-title">Technology Philosophy</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: 600, margin: '16px auto 0', textAlign: 'center', lineHeight: 1.7 }}>
              We believe technology should be invisible to the end user but powerful under the hood. Our stack is chosen for reliability, performance, and long-term maintainability.
            </p>
          </div>
          <div className="grid-3" style={{ marginTop: 40 }}>
            {techStack.map((t, i) => (
              <div key={i} className="card">
                <h3 style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', marginBottom: 16, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: 1 }}>{t.category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {t.items.map((item, j) => (
                    <span key={j} className="badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(123,47,190,0.1) 100%)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: 16 }}>
            Ready to Build Something <span className="text-gradient">Amazing?</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 32, fontSize: '1.1rem' }}>
            Let's talk about your project and how GenzTeck can help bring your vision to life.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '14px 36px' }}>
            Start a Conversation →
          </Link>
        </div>
      </section>
    </div>
  );
}
