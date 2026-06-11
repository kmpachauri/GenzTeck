import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { publicAPI } from '../api';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowLeft, User } from 'lucide-react';
import { Badge } from '../components/ui/Motion';
import { BlogBackground } from '../components/3d/PageBackgrounds';

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
      <div className="pt-24 pb-4 border-b border-white/[0.05]">
        <div className="max-w-[860px] mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[#8A8AA0] hover:text-cyan-400 text-sm transition-colors duration-200">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />
          <p className="text-[#8A8AA0] text-sm">Loading article...</p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-32 gap-5 text-center px-6">
          <span className="text-6xl">😕</span>
          <h2 className="font-heading font-bold text-white text-2xl">Post Not Found</h2>
          <p className="text-[#8A8AA0]">{error}</p>
          <Link to="/blog" className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold text-sm">
            Back to Blog
          </Link>
        </div>
      ) : post ? (
        <article>
          {/* Post Hero */}
          <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #070711 0%, #0D0D1E 100%)' }}>
            <BlogBackground />
            <div className="max-w-[860px] mx-auto px-6 py-16 relative z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="flex items-center gap-3 flex-wrap mb-6">
                  {post.category && <Badge variant="purple">{post.category}</Badge>}
                  {post.readTime && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#8A8AA0]">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  )}
                  {post.date && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#8A8AA0]">
                      <Calendar size={12} /> {formatDate(post.date)}
                    </span>
                  )}
                </div>
                <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-bold font-heading text-white leading-tight mb-6">
                  {post.title}
                </h1>
                {post.excerpt && (
                  <p className="text-[#c0c0d0] text-lg leading-relaxed border-l-2 border-cyan-400 pl-5">
                    {post.excerpt}
                  </p>
                )}
              </motion.div>
            </div>
          </section>

          {/* Post Content */}
          <section className="py-16">
            <div className="max-w-[860px] mx-auto px-6">
              <div className="mb-12 h-px bg-white/[0.06]" />
              <div
                className="prose-content"
                style={{ color: '#c0c0d0', lineHeight: 1.9, fontSize: '1.05rem' }}
                dangerouslySetInnerHTML={{ __html: post.content || post.body || '<p>Content coming soon...</p>' }}
              />
              <style>{`
                .prose-content h2 { font-family: var(--font-heading); color: white; font-size: 1.5rem; font-weight: 700; margin: 2.5rem 0 1rem; }
                .prose-content h3 { font-family: var(--font-heading); color: rgba(200,200,220,1); font-size: 1.2rem; font-weight: 600; margin: 2rem 0 0.75rem; }
                .prose-content p { margin-bottom: 1.25rem; }
                .prose-content ul, .prose-content ol { padding-left: 1.5rem; margin-bottom: 1.25rem; }
                .prose-content li { margin-bottom: 0.5rem; }
                .prose-content strong { color: white; font-weight: 600; }
                .prose-content a { color: #00D4FF; text-decoration: none; }
                .prose-content a:hover { text-decoration: underline; }
                .prose-content code { background: rgba(0,212,255,0.1); padding: 2px 6px; border-radius: 4px; font-size: 0.9em; color: #00D4FF; font-family: monospace; }
                .prose-content blockquote { border-left: 3px solid #00D4FF; padding-left: 1rem; margin: 1.5rem 0; color: #8A8AA0; font-style: italic; }
              `}</style>
            </div>
          </section>

          {/* Author Card */}
          <section className="py-12" style={{ background: 'var(--color-surface)' }}>
            <div className="max-w-[860px] mx-auto px-6">
              <div className="glass rounded-2xl border border-white/[0.08] p-6 flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl font-heading flex-shrink-0">
                  GT
                </div>
                <div>
                  <p className="text-white font-semibold font-heading mb-1">{post.author || 'GenzTeck Team'}</p>
                  <p className="text-[#8A8AA0] text-sm">Full-Stack Development & Business Automation Experts at GenzTeck</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 text-center">
            <div className="max-w-[860px] mx-auto px-6">
              <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold font-heading text-white mb-4">
                Ready to Build Something <span className="text-gradient">Like This?</span>
              </h2>
              <p className="text-[#8A8AA0] mb-10 text-lg">
                Get a free consultation and project estimate from GenzTeck.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/contact"
                  className="px-7 py-3.5 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:-translate-y-0.5 transition-all shadow-btn-primary">
                  Start a Project →
                </Link>
                <Link to="/blog"
                  className="px-7 py-3.5 rounded-full font-semibold border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all">
                  Read More Articles
                </Link>
              </div>
            </div>
          </section>
        </article>
      ) : null}
    </div>
  );
}
