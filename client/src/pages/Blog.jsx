import { Link } from 'react-router-dom';

const defaultBlogs = [
  { _id: '1', slug: 'why-every-restaurant-needs-a-pos-system', title: 'Why Every Restaurant Needs a Modern POS System in 2025', category: 'Restaurant Tech', excerpt: 'Paper bills and WhatsApp orders are costing your restaurant more than you think. Here\'s how a modern POS system transforms operations, reduces errors, and increases profits.', readTime: '5 min read', date: '2025-05-20', author: 'GenzTeck Team' },
  { _id: '2', slug: 'real-time-fleet-tracking-for-logistics', title: 'How Real-Time Fleet Tracking Cuts Logistics Costs by 20%', category: 'Geo Tracking', excerpt: 'Indian logistics companies lose crores every year to inefficient routing, fuel theft, and unaccountable drivers. GPS tracking changes the equation entirely.', readTime: '7 min read', date: '2025-05-12', author: 'GenzTeck Team' },
  { _id: '3', slug: 'building-saas-for-indian-market', title: 'Building SaaS Products Specifically for the Indian Market', category: 'SaaS Development', excerpt: 'What works in the US doesn\'t always work in India. Here\'s our playbook for building SaaS products that resonate with Indian SMBs — from UPI payments to regional language support.', readTime: '8 min read', date: '2025-04-28', author: 'GenzTeck Team' },
  { _id: '4', slug: 'react-native-vs-flutter-2025', title: 'React Native vs Flutter in 2025: Which Should You Choose?', category: 'Mobile Development', excerpt: 'A no-BS comparison of React Native and Flutter for Indian startups. We compare performance, ecosystem, developer availability, and cost of development.', readTime: '6 min read', date: '2025-04-15', author: 'GenzTeck Team' },
  { _id: '5', slug: 'ai-automation-for-small-businesses', title: 'AI Automation Tools That Small Businesses Can Afford in 2025', category: 'AI & Automation', excerpt: 'AI isn\'t just for big tech companies anymore. Here\'s a practical guide to affordable AI automation tools that Indian SMBs can implement today to save time and money.', readTime: '6 min read', date: '2025-04-02', author: 'GenzTeck Team' },
];

const categoryColors = {
  'Restaurant Tech': '#FF6B6B',
  'Geo Tracking': '#4ECDC4',
  'SaaS Development': 'var(--color-secondary)',
  'Mobile Development': 'var(--color-primary)',
  'AI & Automation': '#FFD700',
};

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

export default function Blog({ blogs }) {
  const data = blogs && blogs.length > 0 ? blogs : defaultBlogs;

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 80, background: 'linear-gradient(135deg, #070711 0%, #12121E 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 40% 0%, rgba(0,212,255,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-label">Knowledge Hub</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: 12 }}>
            GenzTeck <span className="text-gradient">Blog</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: 580, margin: '20px auto 0' }}>
            Insights, tutorials, and deep-dives on technology, startups, and digital transformation for Indian businesses.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section">
        <div className="container">
          {data.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--color-text-muted)' }}>
              <span style={{ fontSize: '3rem' }}>📝</span>
              <p style={{ marginTop: 16 }}>No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <>
              {/* Featured post */}
              <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 40, padding: 40, alignItems: 'center' }}>
                <div style={{ height: 280, background: 'linear-gradient(135deg, #0d0d2b 0%, #1a0533 50%, #0a1a2e 100%)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '5rem' }}>✍️</span>
                </div>
                <div>
                  <span className="badge" style={{ marginBottom: 16, display: 'inline-block', background: `${categoryColors[data[0].category] || 'var(--color-primary)'}22`, color: categoryColors[data[0].category] || 'var(--color-primary)', border: `1px solid ${categoryColors[data[0].category] || 'var(--color-primary)'}44` }}>
                    {data[0].category}
                  </span>
                  <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', lineHeight: 1.3, marginBottom: 16 }}>{data[0].title}</h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 24, fontSize: '0.95rem' }}>{data[0].excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{formatDate(data[0].date)}</span>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>·</span>
                    <span style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 600 }}>{data[0].readTime}</span>
                  </div>
                  <Link to={`/blog/${data[0].slug}`} className="btn btn-primary" style={{ textDecoration: 'none' }}>
                    Read Full Article →
                  </Link>
                </div>
              </div>

              {/* Rest of posts */}
              <div className="grid-3" style={{ gap: 28 }}>
                {data.slice(1).map((post, i) => (
                  <Link key={post._id || i} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = ''; }}>
                      {/* Post thumbnail placeholder */}
                      <div style={{ height: 160, background: 'linear-gradient(135deg, #12121E 0%, #1a1a30 100%)', borderRadius: '12px 12px 0 0', margin: '-24px -24px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '2.5rem' }}>{['💡', '🚀', '📱', '🤖'][i % 4]}</span>
                      </div>
                      <span className="badge" style={{ marginBottom: 12, alignSelf: 'flex-start', background: `${categoryColors[post.category] || 'var(--color-primary)'}22`, color: categoryColors[post.category] || 'var(--color-primary)', border: `1px solid ${categoryColors[post.category] || 'var(--color-primary)'}44` }}>
                        {post.category}
                      </span>
                      <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1rem', lineHeight: 1.4, marginBottom: 12, flex: 1 }}>{post.title}</h3>
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: 16 }}>{post.excerpt?.slice(0, 120)}...</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>{formatDate(post.date)}</span>
                        <span style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 600 }}>Read More →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
