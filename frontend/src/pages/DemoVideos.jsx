import { useState } from 'react';
import { Play } from 'lucide-react';
import './DemoVideos.css';

const categories = ['All', 'Admin Panels', 'Mobile Apps', 'Restaurant Systems', 'GeoTrace', 'OneTap', 'Automation Systems'];

const defaultVideos = [
  { _id: '1', title: 'Restaurant Ordering System Demo', category: 'Restaurant Systems', description: 'Full walkthrough of our QR-based restaurant ordering system.', status: 'coming-soon' },
  { _id: '2', title: 'Admin Panel Walkthrough', category: 'Admin Panels', description: 'See how our custom admin panels work for content management.', status: 'coming-soon' },
  { _id: '3', title: 'OneTap Smart Page Demo', category: 'OneTap', description: 'Create your OneTap smart landing page in under 5 minutes.', status: 'coming-soon' },
  { _id: '4', title: 'GeoTrace Fleet Tracking Demo', category: 'GeoTrace', description: 'Live GPS tracking and fleet management in action.', status: 'coming-soon' },
  { _id: '5', title: 'Landing Page System Demo', category: 'Admin Panels', description: 'Building and managing landing pages with our custom system.', status: 'coming-soon' },
  { _id: '6', title: 'Mobile App Demo', category: 'Mobile Apps', description: 'Cross-platform mobile app showcase built with GenzTeck.', status: 'coming-soon' },
];

const catGradients = {
  'Admin Panels': 'linear-gradient(135deg, #00D4FF22, #0066FF22)',
  'Mobile Apps': 'linear-gradient(135deg, #7B2FBE22, #9B59B622)',
  'Restaurant Systems': 'linear-gradient(135deg, #FF6B6B22, #FF8E5322)',
  'GeoTrace': 'linear-gradient(135deg, #00FF8822, #00D4FF22)',
  'OneTap': 'linear-gradient(135deg, #FFD70022, #FF6B6B22)',
  'Automation Systems': 'linear-gradient(135deg, #7B2FBE22, #00D4FF22)',
};

export default function DemoVideos({ videos }) {
  const videoList = videos?.length ? videos : defaultVideos;
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? videoList : videoList.filter(v => v.category === activeCategory);

  return (
    <div className="demo-videos-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <div className="section-label">Demo Videos</div>
          <h1 className="display-2">Watch GenzTeck <span className="text-gradient">In Action</span></h1>
          <p className="page-hero-subtitle">Video walkthroughs of real systems built by GenzTeck — coming soon.</p>
        </div>
      </section>

      {/* Videos */}
      <section className="section">
        <div className="container">
          {/* Category Tabs */}
          <div className="cat-tabs" role="tablist">
            {categories.map(cat => (
              <button
                key={cat}
                className={`cat-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                id={`cat-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="videos-grid">
            {filtered.map(video => (
              <div key={video._id} className="video-card card">
                {/* Thumbnail */}
                <div className="video-thumbnail" style={{ background: catGradients[video.category] || 'var(--color-surface-2)' }}>
                  <div className="video-play-btn">
                    <Play size={24} fill="white" />
                  </div>
                  <div className="video-coming-soon-overlay">
                    <span className="badge badge-coming-soon">⏳ Coming Soon</span>
                  </div>
                </div>

                {/* Info */}
                <div className="video-info">
                  <span className="badge badge-primary" style={{ marginBottom: 10 }}>{video.category}</span>
                  <h3 className="video-title">{video.title}</h3>
                  <p className="card-text">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="empty-state">
              <p>No videos in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
