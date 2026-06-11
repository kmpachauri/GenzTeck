import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingSocial from './components/FloatingSocial';
import { useScrollProgress, useScrollToTop, usePublicData } from './hooks/usePublicData';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Demos from './pages/Demos';
import DemoVideos from './pages/DemoVideos';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import Payment from './pages/Payment';

import { ArrowUp } from 'lucide-react';
import './App.css';

function ScrollRestoration() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppContent() {
  const { data, loading } = usePublicData();
  const scrollProgress = useScrollProgress();
  const { visible, scrollToTop } = useScrollToTop();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <div className="loading-screen">
        <div className="loading-logo">GenzTeck</div>
        <div className="loading-bar">
          <div className="loading-bar-fill" />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <ScrollRestoration />
      <Navbar settings={data.settings} />

      <main>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services services={data.services} />} />
          <Route path="/products" element={<Products products={data.products} />} />
          <Route path="/projects" element={<Projects projects={data.projects} />} />
          <Route path="/demos" element={<Demos demos={data.demos} />} />
          <Route path="/demo-videos" element={<DemoVideos videos={data.demoVideos} />} />
          <Route path="/testimonials" element={<Testimonials testimonials={data.testimonials} />} />
          <Route path="/blog" element={<Blog blogs={data.blogs} />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact settings={data.settings} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </main>

      <Footer settings={data.settings} />
      <FloatingSocial settings={data.settings} />

      {/* Back to Top */}
      {visible && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          id="back-to-top-btn"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
