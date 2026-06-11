import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Calendar, User, Tag, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { ScrollReveal, StaggerReveal, StaggerItem, SectionHeader, Badge } from '../components/ui/Motion';

const BlogBackground = lazy(() => import('../components/3d/PageBackgrounds').then(m => ({ default: m.BlogBackground })));

const defaultBlogs = [
  { _id: '1', slug: 'how-qr-menu-transforms-restaurants', title: 'How a QR Digital Menu Can Transform Your Restaurant Business', excerpt: 'Discover how restaurants across India are cutting costs, speeding up service, and delighting customers with smart QR menu systems.', category: 'Restaurant Tech', readTime: '5 min read', date: '2025-01-15', color: '#FF6B6B', emoji: '🍽️' },
  { _id: '2', slug: 'gps-fleet-tracking-for-indian-logistics', title: 'GPS Fleet Tracking: The Game Changer for Indian Logistics Companies', excerpt: 'Learn how real-time GPS tracking is helping logistics companies reduce fuel costs, improve delivery times, and eliminate theft.', category: 'Fleet Tech', readTime: '7 min read', date: '2025-01-10', color: '#00D4FF', emoji: '🗺️' },
  { _id: '3', slug: 'nfc-digital-business-cards-replace-paper', title: 'Why Smart NFC Business Cards Are Replacing Paper Cards in 2025', excerpt: 'Paper business cards are dying. See why smart NFC standees and digital cards are the future of business networking.', category: 'NFC Technology', readTime: '4 min read', date: '2025-01-05', color: '#00FF88', emoji: '📲' },
  { _id: '4', slug: 'custom-software-vs-off-shelf-india', title: 'Custom Software vs Off-the-Shelf Tools: What\'s Right for Your Business?', excerpt: 'A practical guide to help Indian business owners decide when to build custom software versus buying a ready-made solution.', category: 'Business Tech', readTime: '6 min read', date: '2024-12-28', color: '#7B2FBE', emoji: '💡' },
  { _id: '5', slug: 'onetap-smart-link-pages', title: 'OneTap: One Link That Does Everything for Your Business', excerpt: 'How GenzTeck\'s OneTap smart pages are helping professionals and businesses share everything with a single tap.', category: 'Product Updates', readTime: '3 min read', date: '2024-12-20', color: '#00D4FF', emoji: '⚡' },
  { _id: '6', slug: 'ai-automation-for-small-businesses-india', title: 'How AI Automation is Helping Small Indian Businesses Scale in 2025', excerpt: 'Practical examples of how small and medium businesses across India are using AI tools to automate processes and grow faster.', category: 'AI & Automation', readTime: '8 min read', date: '2024-12-15', color: '#7B2FBE', emoji: '🤖' },
];

function BlogCard({ blog, index, featured = false }) {
  const colorMap = {
    '#00D4FF': 'default',
    '#7B2FBE': 'purple',
    '#00FF88': 'green',
    '#FF6B6B': 'red',
  };

  if (featured) {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="glass rounded-3xl border border-white/[0.08] overflow-hidden group hover:border-cyan-400/20 transition-colors md:col-span-2"
      >
        <Link to={`/blog/${blog.slug}`} className="flex flex-col md:flex-row h-full">
          {/* Visual side */}
          <div className="md:w-2/5 relative overflow-hidden" style={{ minHeight: 240, background: `linear-gradient(135deg, ${blog.color}20, rgba(0,0,0,0.5))` }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl opacity-20 group-hover:opacity-30 transition-opacity group-hover:scale-110 duration-500 block">{blog.emoji}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 hidden md:block" />
            <div className="absolute top-4 left-4">
              <Badge variant="default">{blog.category}</Badge>
            </div>
          </div>
          {/* Content side */}
          <div className="md:w-3/5 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 text-xs text-[#5A5A7A] mb-4">
                <span className="flex items-center gap-1.5"><Calendar size={12} /> {blog.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={12} /> {blog.readTime}</span>
                <Badge variant="amber">Featured</Badge>
              </div>
              <h2 className="text-white font-heading font-bold text-xl md:text-2xl leading-tight mb-4 group-hover:text-cyan-400 transition-colors">
                {blog.title}
              </h2>
              <p className="text-[#8A8AA0] text-sm leading-relaxed">{blog.excerpt}</p>
            </div>
            <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm mt-6 group-hover:gap-3 transition-all">
              Read Article <ArrowRight size={14} />
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <StaggerItem>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="glass rounded-2xl border border-white/[0.08] overflow-hidden group hover:border-cyan-400/20 transition-colors h-full flex flex-col"
      >
        <Link to={`/blog/${blog.slug}`} className="flex flex-col h-full">
          {/* Visual */}
          <div className="relative overflow-hidden" style={{ height: 160, background: `linear-gradient(135deg, ${blog.color}15, rgba(0,0,0,0.3))` }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-15 group-hover:opacity-25 group-hover:scale-110 transition-all duration-500">{blog.emoji}</span>
            </div>
            <div className="absolute top-3 left-3">
              <Badge variant="default">{blog.category}</Badge>
            </div>
          </div>
          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-3 text-xs text-[#5A5A7A] mb-3">
              <span className="flex items-center gap-1"><Calendar size={10} /> {blog.date}</span>
              <span className="flex items-center gap-1"><Clock size={10} /> {blog.readTime}</span>
            </div>
            <h3 className="text-white font-heading font-bold text-base leading-tight mb-3 group-hover:text-cyan-400 transition-colors flex-1">
              {blog.title}
            </h3>
            <p className="text-[#8A8AA0] text-xs leading-relaxed mb-4 line-clamp-3">{blog.excerpt}</p>
            <div className="flex items-center gap-1.5 text-cyan-400 text-sm font-medium group-hover:gap-2.5 transition-all mt-auto">
              Read more <ArrowRight size={13} />
            </div>
          </div>
        </Link>
      </motion.div>
    </StaggerItem>
  );
}

export default function Blog({ blogs }) {
  const data = blogs?.length > 0 ? blogs : defaultBlogs;
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const categories = ['All', ...new Set(data.map(b => b.category).filter(Boolean))];
  const filtered = data.filter(b =>
    (activeTag === 'All' || b.category === activeTag) &&
    (!search || b.title?.toLowerCase().includes(search.toLowerCase()) || b.excerpt?.toLowerCase().includes(search.toLowerCase()))
  );

  const [featured, ...rest] = filtered;

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070711 0%, #0D0D1E 100%)' }}>
        <Suspense fallback={null}>
          <BlogBackground />
        </Suspense>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-purple-400 text-xs font-semibold tracking-[3px] uppercase mb-5">
            <span className="w-6 h-px bg-purple-400" />Insights<span className="w-6 h-px bg-purple-400" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold font-heading leading-[1.1] mb-6">
            GenzTeck <span className="text-gradient">Blog</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8A8AA0] text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Tech insights, product updates, and business guides for the modern Indian entrepreneur.
          </motion.p>
          {/* Search */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="max-w-md mx-auto relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A5A7A]" />
            <input
              value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder-[#5A5A7A] focus:outline-none focus:border-cyan-400/40 transition-all"
            />
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <div className="py-8 border-b border-white/[0.05]">
        <div className="max-w-[1200px] mx-auto px-6 flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveTag(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTag === cat
                  ? 'bg-cyan-400/15 text-cyan-400 border border-cyan-400/30'
                  : 'border border-white/[0.08] text-[#8A8AA0] hover:text-white hover:bg-white/5'
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-[#8A8AA0]">
              No articles found matching your search.
            </div>
          ) : (
            <>
              {/* Featured */}
              {featured && (
                <ScrollReveal className="mb-8">
                  <BlogCard blog={featured} index={0} featured />
                </ScrollReveal>
              )}
              {/* Rest */}
              {rest.length > 0 && (
                <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
                  {rest.map((blog, i) => (
                    <BlogCard key={blog._id || i} blog={blog} index={i + 1} />
                  ))}
                </StaggerReveal>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
