import { Link } from 'react-router-dom';

const defaultProducts = [
  {
    _id: '1',
    name: 'GeoTrace',
    status: 'live',
    shortDescription: 'A real-time fleet and field agent tracking platform with live maps, geofencing, route history, and intelligent alerts built for Indian logistics companies.',
    features: ['Live GPS Tracking on Map', 'Driver Mobile App (Android)', 'Geofencing & Zone Alerts', 'Route History Playback', 'Multi-Vehicle Dashboard', 'Attendance & Shift Management', 'WhatsApp Alert Integration', 'Data Export & Reports'],
    useCases: ['Logistics Companies', 'Delivery Services', 'Field Sales Teams', 'Security Patrol', 'School Buses'],
    websiteUrl: null,
  },
  {
    _id: '2',
    name: 'OneTap POS',
    status: 'live',
    shortDescription: 'An all-in-one point-of-sale and restaurant management system designed specifically for Indian restaurants, dhabas, and cloud kitchens.',
    features: ['Touch POS Interface', 'Table & Token Management', 'Kitchen Display System (KDS)', 'Online Order Integration', 'GST Billing & Invoicing', 'Inventory Management', 'Staff & Shift Tracking', 'Daily Sales Reports'],
    useCases: ['QSR Chains', 'Fine Dining', 'Cloud Kitchens', 'Food Courts', 'Cafes & Bakeries'],
    websiteUrl: null,
  },
  {
    _id: '3',
    name: 'BizPanel',
    status: 'coming-soon',
    shortDescription: 'A universal business management SaaS platform that brings CRM, project management, invoicing, and team collaboration into one clean dashboard.',
    features: ['CRM & Lead Management', 'Project & Task Tracking', 'Invoicing & Payments', 'Team Collaboration Tools', 'Custom Workflows', 'Client Portal', 'AI Report Generation', 'Multi-Branch Support'],
    useCases: ['Agencies', 'Consultancies', 'Freelancers', 'SMBs', 'Service Companies'],
    websiteUrl: null,
  },
  {
    _id: '4',
    name: 'ShopEase',
    status: 'coming-soon',
    shortDescription: 'A multi-vendor e-commerce platform tailored for Indian markets with UPI-first checkout, regional language support, and hyperlocal delivery management.',
    features: ['Multi-Vendor Marketplace', 'UPI & Card Checkout', 'Hyperlocal Delivery', 'Seller App', 'Inventory Sync', 'Coupon & Offer Engine', 'Review & Rating System', 'Analytics Dashboard'],
    useCases: ['Local Market Aggregators', 'Wholesale Platforms', 'D2C Brands', 'Category Marketplaces'],
    websiteUrl: null,
  },
];

const statusConfig = {
  live: { label: 'Live', className: 'badge-live' },
  'coming-soon': { label: 'Coming Soon', className: 'badge-coming-soon' },
  beta: { label: 'Beta', className: 'badge' },
};

export default function Products({ products }) {
  const data = products && products.length > 0 ? products : defaultProducts;

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 80, background: 'linear-gradient(135deg, #070711 0%, #12121E 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center top, rgba(0,212,255,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-label">Our Products</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: 12 }}>
            Built by GenzTeck, <span className="text-gradient">For Everyone</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: 580, margin: '20px auto 0' }}>
            Our in-house products solve real problems for Indian businesses — available as ready-to-deploy solutions.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {data.map((product, i) => {
            const status = statusConfig[product.status] || statusConfig['coming-soon'];
            const isEven = i % 2 === 0;
            return (
              <div key={product._id || i} className="card" style={{ padding: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
                {/* Left */}
                <div style={{ order: isEven ? 0 : 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', margin: 0 }}>{product.name}</h2>
                    <span className={status.className}>{status.label}</span>
                  </div>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 28 }}>
                    {product.shortDescription || product.description}
                  </p>

                  {/* Use Cases */}
                  {product.useCases && product.useCases.length > 0 && (
                    <div style={{ marginBottom: 28 }}>
                      <p style={{ color: '#8A8AA0', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12, fontWeight: 600 }}>Perfect For</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {product.useCases.map((uc, j) => (
                          <span key={j} className="badge" style={{ fontSize: '0.85rem' }}>{uc}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    {product.websiteUrl ? (
                      <a href={product.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Visit Product →
                      </a>
                    ) : null}
                    <Link to="/contact" className="btn btn-outline">Request a Demo</Link>
                  </div>
                </div>

                {/* Right - Features */}
                <div style={{ order: isEven ? 1 : 0 }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', padding: 28 }}>
                    <p style={{ color: 'var(--color-primary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 20, fontWeight: 600 }}>Key Features</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      {(product.features || []).map((f, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: '#c0c0d0', fontSize: '0.9rem', lineHeight: 1.4 }}>
                          <span style={{ color: 'var(--color-primary)', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: 16 }}>
            Need a <span className="text-gradient">Custom Product</span>?
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 32 }}>
            We also build bespoke products from the ground up tailored to your exact specifications.
          </p>
          <Link to="/contact" className="btn btn-primary">Let's Build Together →</Link>
        </div>
      </section>
    </div>
  );
}
