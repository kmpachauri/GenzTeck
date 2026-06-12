import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingSocial from './components/FloatingSocial';
import CursorGlow from './components/CursorGlow';
import { useScrollProgress, useScrollToTop, usePublicData } from './hooks/usePublicData';
import { ArrowUp } from 'lucide-react';

// Pages — lazy loaded for performance
const Home        = lazy(() => import('./pages/Home'));
const About       = lazy(() => import('./pages/About'));
const Services    = lazy(() => import('./pages/Services'));
const Products    = lazy(() => import('./pages/Products'));
const Projects    = lazy(() => import('./pages/Projects'));
const Demos       = lazy(() => import('./pages/Demos'));
const DemoVideos  = lazy(() => import('./pages/DemoVideos'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Blog        = lazy(() => import('./pages/Blog'));
const BlogPost    = lazy(() => import('./pages/BlogPost'));
const Contact     = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));
const Payment     = lazy(() => import('./pages/Payment'));

// Dynamic Demo Preview Pages
const RestaurantDemo      = lazy(() => import('./pages/demos/RestaurantDemo'));
const GymDemo             = lazy(() => import('./pages/demos/GymDemo'));
const RealEstateDemo      = lazy(() => import('./pages/demos/RealEstateDemo'));
const SalonDemo           = lazy(() => import('./pages/demos/SalonDemo'));
const ClinicDemo          = lazy(() => import('./pages/demos/ClinicDemo'));
const SchoolDemo          = lazy(() => import('./pages/demos/SchoolDemo'));
const HotelDemo           = lazy(() => import('./pages/demos/HotelDemo'));
const ConstructionDemo     = lazy(() => import('./pages/demos/ConstructionDemo'));
const DigitalMarketingDemo = lazy(() => import('./pages/demos/DigitalMarketingDemo'));
const EcommerceDemo        = lazy(() => import('./pages/demos/EcommerceDemo'));

// Page fallback
function PageSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--color-bg)' }}>
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />
        <p className="text-[#8A8AA0] text-sm">Loading...</p>
      </div>
    </div>
  );
}

function ScrollRestoration() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// Premium loading screen
function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-400/10 blur-[80px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-purple-500/10 blur-[60px]" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-glow-cyan">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
          </div>
          <span className="font-heading font-bold text-3xl text-white tracking-tight">
            Genz<span className="text-gradient">Teck</span>
          </span>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-48 h-[2px] rounded-full overflow-hidden bg-white/5"
        >
          <div className="loading-bar-fill h-full rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[#8A8AA0] text-xs tracking-widest uppercase"
        >
          Initializing experience...
        </motion.p>
      </div>
    </motion.div>
  );
}

function AppContent() {
  const { data, loading } = usePublicData();
  const scrollProgress = useScrollProgress();
  const { visible, scrollToTop } = useScrollToTop();
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();

  // Hide header and footer when viewing templates (sub-routes of /demos/)
  const isDemoPreview = location.pathname.startsWith('/demos/') && location.pathname !== '/demos/';

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Loading Screen */}
      <AnimatePresence>
        {showLoader && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {/* Cursor Glow */}
      <CursorGlow />

      <ScrollRestoration />
      {!isDemoPreview && <Navbar settings={data.settings} />}

      <main>
        <Suspense fallback={<PageSkeleton />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/"               element={<Home data={data} />} />
              <Route path="/about"          element={<About />} />
              <Route path="/services"       element={<Services services={data.services} />} />
              <Route path="/products"       element={<Products products={data.products} />} />
              <Route path="/projects"       element={<Projects projects={data.projects} />} />
              
              {/* Main Demos Page */}
              <Route path="/demos"          element={<Demos demos={data.demos} />} />

              {/* 10 Interactive Live Demo Website Templates & Nested Subpages */}
              <Route path="/demos/restaurant"                 element={<RestaurantDemo subpage="home" />} />
              <Route path="/demos/restaurant/:subpage"         element={<RestaurantDemo />} />

              <Route path="/demos/gym"                        element={<GymDemo subpage="home" />} />
              <Route path="/demos/gym/:subpage"                element={<GymDemo />} />

              <Route path="/demos/real-estate"                element={<RealEstateDemo subpage="home" />} />
              <Route path="/demos/real-estate/:subpage"        element={<RealEstateDemo />} />

              <Route path="/demos/salon"                      element={<SalonDemo subpage="home" />} />
              <Route path="/demos/salon/:subpage"             element={<SalonDemo />} />

              <Route path="/demos/clinic"                     element={<ClinicDemo subpage="home" />} />
              <Route path="/demos/clinic/:subpage"            element={<ClinicDemo />} />

              <Route path="/demos/school"                     element={<SchoolDemo subpage="home" />} />
              <Route path="/demos/school/:subpage"            element={<SchoolDemo />} />

              <Route path="/demos/hotel"                      element={<HotelDemo subpage="home" />} />
              <Route path="/demos/hotel/:subpage"             element={<HotelDemo />} />

              <Route path="/demos/construction"               element={<ConstructionDemo subpage="home" />} />
              <Route path="/demos/construction/:subpage"      element={<ConstructionDemo />} />

              <Route path="/demos/digital-marketing"          element={<DigitalMarketingDemo subpage="home" />} />
              <Route path="/demos/digital-marketing/:subpage"  element={<DigitalMarketingDemo />} />

              <Route path="/demos/ecommerce"                  element={<EcommerceDemo subpage="home" />} />
              <Route path="/demos/ecommerce/:subpage"          element={<EcommerceDemo />} />

              <Route path="/demo-videos"    element={<DemoVideos videos={data.demoVideos} />} />
              <Route path="/testimonials"   element={<Testimonials testimonials={data.testimonials} />} />
              <Route path="/blog"           element={<Blog blogs={data.blogs} />} />
              <Route path="/blog/:slug"     element={<BlogPost />} />
              <Route path="/contact"        element={<Contact settings={data.settings} />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/refund-policy"  element={<RefundPolicy />} />
              <Route path="/payment"        element={<Payment />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      {!isDemoPreview && <Footer settings={data.settings} />}
      {!isDemoPreview && <FloatingSocial settings={data.settings} />}

      {/* Back to Top */}
      <AnimatePresence>
        {visible && !isDemoPreview && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            id="back-to-top-btn"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
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
