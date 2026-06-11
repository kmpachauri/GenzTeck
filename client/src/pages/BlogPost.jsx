import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { publicAPI } from '../api';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await publicAPI.get(`/blogs/${slug}`);
        setPost(res.data?.blog || res.data);
      } catch (err) {
        setError(err?.response?.data?.message || 'Blog post not found.');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  function formatDate(dateStr) {
    try {
      return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch { return dateStr; }
  }

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Back Nav */}
      <div style={{ paddingTop: 100, paddingBottom: 20 }}>
        <div className="container">
          <Link to="/blog" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.9rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--color-primary)'}
            onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}>
            ← Back to Blog
          </Link>
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <div style={{ width: 40, height: 40, border: '3px solid rgba(0,212,255,0.2)', borderTop: '3px solid var(--color-primary)', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }} />
          <p style={{ color: 'var(--color-text-muted)' }}>Loading article...</p>
        </div>
      ) : error ? (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <span style={{ fontSize: '4rem' }}>😕</span>
          <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', margin: '20px 0 12px' }}>Post Not Found</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 28 }}>{error}</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      ) : post ? (
        <article>
          {/* Post Hero */}
          <section style={{ paddingBottom: 60, paddingTop: 20 }}>
            <div className="container" style={{ maxWidth: 840 }}>
              {/* Meta */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24, flexWrap: 'wrap' }}>
                {post.category && <span className="badge">{post.category}</span>}
                {post.readTime && <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{post.readTime}</span>}
                {post.date && <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{formatDate(post.date)}</span>}
                {post.author && <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>by {post.author}</span>}
              </div>

              {/* Title */}
              <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.25, marginBottom: 20 }}>
                {post.title}
              </h1>

              {/* Excerpt */}
              {post.excerpt && (
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: 40, borderLeft: '3px solid var(--color-primary)', paddingLeft: 20 }}>
                  {post.excerpt}
                </p>
              )}

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 40 }} />

              {/* Content */}
              <div style={{ color: '#c8c8d8', lineHeight: 1.9, fontSize: '1.05rem' }}
                dangerouslySetInnerHTML={{ __html: post.content || post.body || '<p>Content coming soon...</p>' }}
              />
            </div>
          </section>

          {/* Author Card */}
          <section style={{ padding: '40px 0', background: 'var(--color-surface)' }}>
            <div className="container" style={{ maxWidth: 840 }}>
              <div className="card" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.2rem', flexShrink: 0 }}>GT</div>
                <div>
                  <p style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)', margin: '0 0 4px' }}>{post.author || 'GenzTeck Team'}</p>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: 0 }}>Full-Stack Development & Business Automation Experts at GenzTeck</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ padding: '60px 0', textAlign: 'center' }}>
            <div className="container">
              <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: 16 }}>
                Ready to Build Something <span className="text-gradient">Like This?</span>
              </h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 28 }}>
                Get a free consultation and project estimate from GenzTeck.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Start a Project →</Link>
                <Link to="/blog" className="btn btn-outline">Read More Articles</Link>
              </div>
            </div>
          </section>
        </article>
      ) : null}

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
