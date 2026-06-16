import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Zap, Shield, Users, Code, Smartphone, Globe, BarChart3, ChevronDown, Play, Sparkles, ExternalLink, X, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard, TiltCard } from '../components/ui/Cards';
import { ScrollReveal, StaggerReveal, StaggerItem, SectionHeader, CountUpStat } from '../components/ui/Motion';
import { Badge } from '../components/ui/Motion';

const MotionLink = motion(Link);

// Lazy-load the heavy 3D scene
const Hero3DScene = lazy(() => import('../components/3d/Hero3DScene'));

// ===== DATA =====
const defaultServices = [
  { _id: '1', title: 'Website Development', shortDescription: 'Custom websites built to convert visitors into customers with pixel-perfect design.', icon: '🌐', color: '#00D4FF' },
  { _id: '2', title: 'Mobile App Development', shortDescription: 'Native and cross-platform apps for Android and iOS users love.', icon: '📱', color: '#7B2FBE' },
  { _id: '3', title: 'Custom Software', shortDescription: 'Bespoke software systems tailored to your unique business workflows.', icon: '⚙️', color: '#00FF88' },
  { _id: '4', title: 'Landing Pages', shortDescription: 'High-converting pages designed to capture leads and drive real sales.', icon: '🚀', color: '#FF6B6B' },
  { _id: '5', title: 'Automation Systems', shortDescription: 'Automate repetitive workflows to save time, reduce errors, and scale.', icon: '🤖', color: '#00D4FF' },
  { _id: '6', title: 'UI/UX Design', shortDescription: 'Beautiful, intuitive designs that delight users and drive conversions.', icon: '🎨', color: '#7B2FBE' },
];

const defaultProducts = [
  { _id: '1', name: 'QR & NFC Digital Menu', shortDescription: 'Complete restaurant digitalization — smart menus to kitchen management system.', status: 'live', icon: '🍽️', color: '#00D4FF', image: '/images/qr_menu_mockup.png' },
  { _id: '2', name: 'GeoTrace', shortDescription: 'Real-time GPS fleet tracking with geofencing, alerts, and driver management.', status: 'live', icon: '🗺️', color: '#7B2FBE', image: '/images/geotrace_mockup.png' },
  { _id: '3', name: 'NFC Smart Standee', shortDescription: 'One tap to connect customers to Instagram, Google Reviews, WhatsApp, and more.', status: 'live', icon: '📲', color: '#00FF88', image: '/images/nfc_standee_mockup.png' },
  { _id: '4', name: 'OneTap', shortDescription: 'Smart landing pages with 30+ premium themes. One link for everything you need.', status: 'live', icon: '⚡', color: '#FF6B6B', image: '/images/onetap_mockup.png' },
];

const websiteDemos = [
  {
    slug: 'restaurant',
    title: 'Restaurant Demo',
    category: 'RESTAURANTS',
    defaultBrand: 'Spice Garden',
    description: 'Culinary website featuring menu showcases, table reservations, and WhatsApp orders.',
    features: ['Interactive menu cards', 'Table reservation system', 'WhatsApp ordering'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    colorTheme: 'amber',
    glowColor: 'amber'
  },
  {
    slug: 'gym',
    title: 'Gym Demo',
    category: 'FITNESS',
    defaultBrand: 'Iron Temple Gym',
    description: 'Premium fitness website with membership tiers and BMI calculator.',
    features: ['Bold performance hero', 'Membership plan tiers', 'Interactive BMI calculator'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    colorTheme: 'emerald',
    glowColor: 'green'
  },
  {
    slug: 'real-estate',
    title: 'Real Estate Demo',
    category: 'REAL ESTATE',
    defaultBrand: 'Luxe Living',
    description: 'Modern real estate listings with search filter tools and contact forms.',
    features: ['Property listings grid', 'Advanced search filters', 'Consultation inquiry form'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    colorTheme: 'cyan',
    glowColor: 'cyan'
  },
  {
    slug: 'school',
    title: 'Education Demo',
    category: 'EDUCATION',
    defaultBrand: 'Apex Academy',
    description: 'Institute portal highlighting results tracker, course lists, and admissions.',
    features: ['Detailed course catalog', 'Interactive results tracker', 'Admissions Registration CTA'],
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
    colorTheme: 'blue',
    glowColor: 'cyan'
  },
  {
    slug: 'salon',
    title: 'Salon Demo',
    category: 'SALON',
    defaultBrand: 'Aura Spa',
    description: 'Spa and wellness landing page with pricing, stylized grids, and booking.',
    features: ['Treatment Pricing Grid', 'Before/After Transformation', 'Appointment Scheduler Form'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    colorTheme: 'purple',
    glowColor: 'purple'
  },
  {
    slug: 'digital-marketing',
    title: 'Portfolio Demo',
    category: 'PORTFOLIO',
    defaultBrand: 'Sync Creative',
    description: 'Agency portfolio showcase with case studies, ROI metrics, and timelines.',
    features: ['Case Studies with ROI Metrics', 'Interactive Service Timelines', 'Growth Process Roadmaps'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    colorTheme: 'purple',
    glowColor: 'purple'
  }
];

const defaultProjects = [
  { _id: '1', title: 'Prakrit Astro', type: 'Astrology Platform', url: 'https://prakritastro.com', image: '/images/projects_mockup.png', problem: 'Needed a premium digital presence for astrological consultations and services.' },
  { _id: '2', title: 'Nidhi Decor', type: 'Interior & E-Commerce', url: 'https://axora.homes', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80', problem: 'Needed an elegant e-commerce layout for decoration and interior design products to showcase options and capture buyer inquiries.' },
  { _id: '3', title: 'RLP Digital Mobile App', type: 'Mobile App', url: null, image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80', problem: 'Local political party needed a secure mobile app hub to train members, share updates, and generate customized campaign posters.' },
];

const defaultTestimonials = [
  { _id: '1', name: 'Rahul Sharma', businessName: 'Prakrit Astro', rating: 5, reviewText: 'GenzTeck built our website in just 2 weeks. Our online inquiries have tripled since launch! The design quality is exceptional.' },
  { _id: '2', name: 'Priya Patel', businessName: 'Nidhi Decor', rating: 5, reviewText: 'The product showcase site they built is exactly what we envisioned. Clean, modern, and it converts. Highly recommended!' },
  { _id: '3', name: 'Amit Rao', businessName: 'RLP Digital', rating: 5, reviewText: 'The mobile app developed for our members has streamlined volunteer training and campaign updates. Exceptional development work.' },
];

const techStack = [
  { name: 'React', icon: '⚛️' }, { name: 'Node.js', icon: '🟢' }, { name: 'MongoDB', icon: '🍃' },
  { name: 'React Native', icon: '📱' }, { name: 'Express', icon: '🚀' }, { name: 'AWS', icon: '☁️' },
  { name: 'Firebase', icon: '🔥' }, { name: 'Flutter', icon: '💙' }, { name: 'TypeScript', icon: '📘' },
  { name: 'PostgreSQL', icon: '🐘' }, { name: 'Redis', icon: '🔴' }, { name: 'Docker', icon: '🐳' },
  { name: 'Next.js', icon: '▲' }, { name: 'GraphQL', icon: '🔷' }, { name: 'Razorpay', icon: '💳' },
  { name: 'Twilio', icon: '📞' }, { name: 'OpenAI', icon: '🤖' }, { name: 'Socket.io', icon: '🔌' },
];

const processSteps = [
  { num: '01', title: 'Discovery Call', desc: 'We understand your business, goals, and requirements in a focused consultation session.', icon: '🎯' },
  { num: '02', title: 'Design & Plan', desc: 'We design the UI and create a detailed project plan with clear timeline and milestones.', icon: '✏️' },
  { num: '03', title: 'Development', desc: 'Our team builds your product using modern, scalable technology stack with daily updates.', icon: '⚙️' },
  { num: '04', title: 'Test & Launch', desc: 'Thorough testing across all devices, then go live with full handover and support.', icon: '🚀' },
];

const whyUs = [
  { icon: <Zap size={22} />, title: 'Fast Delivery', desc: 'We deliver projects on time, every time. No delays, no excuses, just results.', color: '#00D4FF' },
  { icon: <Shield size={22} />, title: 'Quality First', desc: 'Every project is built with attention to detail, performance, and long-term scalability.', color: '#7B2FBE' },
  { icon: <Users size={22} />, title: 'Dedicated Team', desc: 'A focused team works on your project from discovery to deployment and beyond.', color: '#00FF88' },
  { icon: <Code size={22} />, title: 'Modern Tech', desc: 'We use the latest, most reliable technologies chosen specifically for your project.', color: '#FF6B6B' },
  { icon: <Smartphone size={22} />, title: 'Mobile First', desc: 'Everything we build is fully responsive and optimized for all screen sizes.', color: '#00D4FF' },
  { icon: <Globe size={22} />, title: 'End-to-End', desc: 'From design to deployment, we handle every aspect of your digital product.', color: '#7B2FBE' },
];

const faqs = [
  { q: 'How long does it take to build a website?', a: 'Most websites take 2–4 weeks from design to launch. Complex projects like e-commerce or web apps may take 4–8 weeks depending on features and scope.' },
  { q: 'Do you provide ongoing support after launch?', a: 'Yes! We offer ongoing support and maintenance packages. We also provide a 30-day free support period after every project launch.' },
  { q: 'What is your pricing model?', a: 'We work on project-based pricing. After a discovery call, we provide a detailed quote. We also offer monthly retainer packages for ongoing work.' },
  { q: 'Can I update content myself after the website is done?', a: 'Absolutely. Every project includes an admin panel where you can update text, images, products, and other content without any coding knowledge.' },
  { q: 'Do you work with clients outside India?', a: 'Yes! We work with businesses globally. All communication is remote-friendly and we accommodate different time zones easily.' },
  { q: 'What technologies do you use?', a: 'We primarily use React, Node.js, MongoDB, and React Native. We choose the best technology stack based on your specific project requirements.' },
];

// ===== FAQ COMPONENT =====
function FAQItem({ faq, isOpen, onClick }) {
  return (
    <motion.div
      className="border border-white/[0.08] rounded-2xl overflow-hidden glass"
      animate={{ borderColor: isOpen ? 'rgba(0,212,255,0.25)' : 'rgba(255,255,255,0.08)' }}
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left gap-4"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-white text-[0.95rem] leading-snug">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center"
        >
          <ChevronDown size={14} className="text-[#8A8AA0]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="px-6 pb-6 text-[#8A8AA0] leading-relaxed text-sm">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ===== MAIN HOME PAGE =====
export default function Home({ data }) {
  const services = data?.services?.length ? data.services.slice(0, 6) : defaultServices;
  const products = data?.products?.length ? data.products : defaultProducts;
  const projects = data?.projects?.length ? data.projects.slice(0, 3) : defaultProjects;
  const testimonials = data?.testimonials?.length ? data.testimonials : defaultTestimonials;
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(1); // Default active (Gym Demo)
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [brandNameInput, setBrandNameInput] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % websiteDemos.length);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + websiteDemos.length) % websiteDemos.length);
  };

  const handleOpenPreview = (demo) => {
    setSelectedDemo(demo);
    setBrandNameInput('');
  };

  const handleLaunchPreview = (e) => {
    e.preventDefault();
    if (!selectedDemo) return;
    const finalBrand = brandNameInput.trim() || selectedDemo.defaultBrand;
    setSelectedDemo(null);
    navigate(`/demos/${selectedDemo.slug}?brand=${encodeURIComponent(finalBrand)}`);
  };

  const handleViewDemoDirectly = (demo) => {
    navigate(`/demos/${demo.slug}?brand=${encodeURIComponent(demo.defaultBrand)}`);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % websiteDemos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#070711]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#070711] via-[#0D0D2A] to-[#1A0A2E] z-0 pointer-events-none" />

      {/* 3D Scene */}
      <Suspense fallback={null}>
        <Hero3DScene />
      </Suspense>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden z-10" id="hero"
        style={{ background: 'transparent' }}>

        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-cyan-400/5 blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-500/8 blur-[120px]" />
          <div className="bg-grid absolute inset-0 opacity-40" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full pt-28 pb-16">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              Trusted by Growing Businesses Across India
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(2.8rem,6vw,5.2rem)] font-bold font-heading leading-[1.08] mb-6"
            >
              We Build{' '}
              <span className="text-gradient">Software</span>
              <br />
              That Grows Your
              <br />
              Business
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[#8A8AA0] text-lg leading-relaxed mb-10 max-w-xl"
            >
              Custom websites, mobile apps, automation systems, QR/NFC products & digital solutions — built for modern businesses that mean business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 transition-all duration-200"
                id="hero-cta-primary"
              >
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:-translate-y-0.5 transition-all duration-200"
                id="hero-cta-secondary"
              >
                See Our Work
              </Link>
              <Link
                to="/demos"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-purple-400/50 bg-purple-500/5 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 hover:text-white shadow-[0_4px_0_0_rgba(168,85,247,0.3),0_0_15px_rgba(168,85,247,0.15)] transition-all duration-200"
                id="hero-cta-demos"
              >
                Browse Demos
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-10 flex-wrap"
            >
              {[
                { value: '50+', label: 'Projects Delivered' },
                { value: '4.9★', label: 'Client Rating' },
                { value: '24hr', label: 'Response Time' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold font-heading text-gradient">{stat.value}</div>
                  <div className="text-[#8A8AA0] text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#5A5A7A] text-xs z-10"
        >
          <span className="tracking-widest uppercase">Scroll to explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>

        {/* Cyber Divider & Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent z-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-[1px]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070711] to-transparent pointer-events-none z-10" />
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-28 bg-[#070711] bg-grid relative z-20" id="services-preview">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="What We Do"
            title={<>Our <span className="text-gradient">Services</span></>}
            subtitle="From idea to launch, we provide end-to-end digital services that help businesses grow online and offline."
          />
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {services.map((service) => (
              <StaggerItem key={service._id}>
                <TiltCard className="group h-full">
                  <GlassCard className="h-full p-8" glowColor="cyan">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 border border-white/10"
                      style={{ background: `${service.color || '#00D4FF'}15` }}
                    >
                      {service.icon || '⚙️'}
                    </div>
                    <h3 className="font-heading font-bold text-white text-lg mb-3">{service.title}</h3>
                    <p className="text-[#8A8AA0] text-sm leading-relaxed">{service.shortDescription}</p>
                    <div className="mt-5 flex items-center gap-1.5 text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </GlassCard>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerReveal>
          <ScrollReveal className="mt-14 flex justify-center">
            <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-200" id="view-all-services-btn">
              View All Services <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WEBSITE DEMOS CAROUSEL ===== */}
      <section className="py-28 relative bg-[#070711] z-10" id="website-demos">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,47,190,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <SectionHeader
              label="Live Templates"
              title={<>Website <span className="text-gradient">Demos</span></>}
              subtitle="Pick an industry template, preview with your brand name, and see how your site could look before you commit."
            />
          </div>

          {/* Responsive 3D Carousel View - Enabled across all screen sizes */}
          <div className="flex relative justify-center items-center h-[580px] md:h-[620px] w-full overflow-hidden select-none">
            {/* Left & Right arrow controls */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/20 transition-all shadow-[0_4px_15px_rgba(0,0,0,0.5)] z-[45] cursor-pointer"
              aria-label="Previous demo"
            >
              <ChevronLeft size={20} className="sm:hidden" />
              <ChevronLeft size={24} className="hidden sm:block" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/20 transition-all shadow-[0_4px_15px_rgba(0,0,0,0.5)] z-[45] cursor-pointer"
              aria-label="Next demo"
            >
              <ChevronRight size={20} className="sm:hidden" />
              <ChevronRight size={24} className="hidden sm:block" />
            </button>

            <div
              className="relative w-[1200px] h-full flex justify-center items-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {websiteDemos.map((demo, idx) => {
                let offset = idx - activeIdx;
                if (offset < -3) offset += websiteDemos.length;
                if (offset > 2) offset -= websiteDemos.length;

                const isActive = offset === 0;
                const isVisible = Math.abs(offset) <= 1;
                
                // Calculate responsive offset multiplier
                const offsetMultiplier = windowWidth < 640 ? 300 : (windowWidth < 768 ? 345 : 395);

                return (
                  <motion.div
                    key={demo.slug}
                    className="absolute w-[280px] sm:w-[320px] md:w-[360px] pointer-events-auto cursor-pointer"
                    onClick={() => {
                      if (!isActive) {
                        setActiveIdx(idx);
                      }
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: 1000,
                    }}
                    // Swipe gesture support on touchscreens
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, info) => {
                      if (info.offset.x > 60) {
                        prevSlide();
                      } else if (info.offset.x < -60) {
                        nextSlide();
                      }
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      x: offset * offsetMultiplier,
                      scale: isActive ? 1.05 : 0.9,
                      opacity: isActive ? 1 : (isVisible ? 0.35 : 0),
                      zIndex: isActive ? 30 : (isVisible ? 20 : 10),
                      rotateY: offset * -15,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 220,
                      damping: 24,
                    }}
                  >
                    <div className={`relative rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col h-[480px] sm:h-[500px] md:h-[520px] ${
                      isActive
                        ? 'border-purple-500/40 shadow-[0_25px_50px_-12px_rgba(168,85,247,0.35)] bg-[#0c0c1e]'
                        : 'border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.4)] bg-[#0c0c1e]/80 hover:border-white/20'
                    }`}>
                      {/* Image container */}
                      <div className="relative h-36 sm:h-40 md:h-44 w-full overflow-hidden flex-shrink-0">
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-[#FF003C] text-white text-[9px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-md">
                            Featured
                          </span>
                        </div>
                        <img src={demo.image} alt={demo.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c1e] via-[#0c0c1e]/20 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                        <div className={isActive ? "" : "pointer-events-none"}>
                          <span className="text-[#FF4A60] font-semibold text-[10px] tracking-widest uppercase mb-1 block">
                            {demo.category}
                          </span>
                          <h3 className="font-heading font-bold text-white text-base sm:text-lg mb-1.5 sm:mb-2">
                            {demo.title}
                          </h3>
                          <p className="text-[#8A8AA0] text-xs leading-relaxed mb-3 sm:mb-4 line-clamp-2 font-light">
                            {demo.description}
                          </p>
                          
                          {/* Feature tags */}
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                            {demo.features.map((feat, fidx) => (
                              <span key={fidx} className="px-2.5 py-1 rounded-md border border-white/[0.06] bg-white/[0.02] text-[#8A8AA0] text-[10px] font-light truncate max-w-[110px] sm:max-w-[150px]">
                                {feat}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className={`flex flex-col gap-2 mt-auto ${isActive ? "" : "pointer-events-none"}`}>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenPreview(demo);
                            }}
                            className="w-full py-2.5 rounded-xl font-bold bg-[#8b5cf6] hover:bg-[#7c3aed] text-white shadow-glow-purple text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
                          >
                            Open Preview
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewDemoDirectly(demo);
                            }}
                            className="w-full py-2.5 rounded-xl font-bold border border-white/10 text-white hover:bg-white/5 bg-slate-900/40 text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            View Demo <ExternalLink size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Pagination & Controls - Enabled on all screen sizes */}
          <div className="flex flex-col items-center justify-center mt-6">
            <div className="flex items-center gap-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer"
                aria-label="Previous demo"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {websiteDemos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeIdx ? 'w-8 bg-[#8b5cf6]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer"
                aria-label="Next demo"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Auto advance info */}
            <div className="text-center mt-6 mb-4">
              <p className="text-[#5A5A7A] text-xs">
                Auto-advances every few seconds
              </p>
            </div>
          </div>

          {/* Explore All Demos Button - Visible on all viewports */}
          <div className="flex justify-center mt-8 md:mt-4">
            <Link to="/demos" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-200" id="view-all-demos-btn">
              Explore All Demos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS PREVIEW ===== */}
      <section className="py-28 relative bg-[#070711] z-10" id="products-preview">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,47,190,0.06)_0%,transparent_70%)]" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <SectionHeader
            label="Our Products"
            title={<>Ready-Made <span className="text-gradient">Digital Products</span></>}
            subtitle="Plug-and-play digital products for restaurants, businesses, and fleets — deploy in days, not months."
          />
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {products.map((product) => (
              <StaggerItem key={product._id}>
                <TiltCard className="h-full group">
                  <div className="h-full glass rounded-3xl border border-white/[0.08] hover:border-cyan-400/30 hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)] transition-all duration-500 overflow-hidden flex flex-col md:flex-row relative">
                    {/* Visual image mockup banner */}
                    <div className="md:w-[42%] h-48 md:h-auto relative overflow-hidden bg-slate-950 flex-shrink-0">
                      <img
                        src={product.image || '/images/projects_mockup.png'}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/images/projects_mockup.png';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0c0c1e]/90 via-transparent to-transparent" />
                    </div>

                    {/* Text Details */}
                    <div className="md:w-[58%] p-6 md:p-8 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-xl w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            {product.icon || '📦'}
                          </div>
                          <Badge variant={product.status === 'live' ? 'live' : 'coming-soon'}>
                            {product.status === 'live' ? '● Live' : '⏳ Coming Soon'}
                          </Badge>
                        </div>
                        <h3 className="font-heading font-bold text-white text-lg md:text-xl mb-2 group-hover:text-cyan-400 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-[#8A8AA0] text-xs leading-relaxed mb-6 font-light line-clamp-3">
                          {product.shortDescription}
                        </p>
                      </div>
                      <div className="flex gap-2.5 flex-wrap mt-auto">
                        {product.websiteUrl && (
                          <a href={product.websiteUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full bg-cyan-400/15 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/30 transition-all font-semibold">
                            Visit Site <ExternalLink size={11} />
                          </a>
                        )}
                        <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-white/10 text-[#8A8AA0] hover:text-white hover:border-white/20 hover:bg-white/5 transition-all font-medium">
                          Request Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerReveal>
          <ScrollReveal className="mt-14 flex justify-center">
            <Link to="/products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-200" id="view-all-products-btn">
              Explore All Products <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 bg-[#070711] bg-grid relative z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="glass rounded-3xl border border-white/[0.08] p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 50, suffix: '+', label: 'Projects Delivered' },
              { end: 4, suffix: '.9★', label: 'Average Rating' },
              { end: 30, suffix: '+', label: 'Happy Clients' },
              { end: 24, suffix: 'hr', label: 'Response Time' },
            ].map((stat, i) => (
              <CountUpStat key={i} end={stat.end} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS PREVIEW ===== */}
      <section className="py-28 relative bg-[#070711] z-10" id="projects-preview">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="Our Work"
            title={<>Our Recent <span className="text-gradient">Work</span></>}
            subtitle="Real projects, real results. See what we've built for businesses like yours."
          />
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {projects.map((project) => (
              <StaggerItem key={project._id}>
                <TiltCard className="h-full group">
                  <GlassCard className="h-full !p-0 flex flex-col justify-between overflow-hidden" glowColor="purple">
                    {/* Visual image banner */}
                    <div className="relative h-44 w-full overflow-hidden flex-shrink-0">
                      <img
                        src={project.image || '/images/projects_mockup.png'}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/images/projects_mockup.png';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c1e]/90 via-[#0c0c1e]/20 to-transparent" />
                    </div>

                    {/* Text Details */}
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <Badge variant="purple" className="mb-3">{project.type}</Badge>
                        <h3 className="font-heading font-bold text-white text-lg mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                        <p className="text-[#8A8AA0] text-xs leading-relaxed mb-4 font-light line-clamp-2">
                          {project.problem || `A premium ${project.type?.toLowerCase()} built with modern technology.`}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap mt-auto">
                        {project.url ? (
                          <a href={project.url} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                            View Project <ArrowRight size={14} />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-400/20 px-3 py-1 rounded-full">
                            📱 Mobile App Project
                          </span>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerReveal>
          <ScrollReveal className="mt-14 flex justify-center">
            <Link to="/projects" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-200" id="view-all-projects-btn">
              View Our Work <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-28 bg-[#070711] bg-grid relative z-10" id="why-genzteck">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="Why GenzTeck"
            title={<>Built Different, <span className="text-gradient">For Results</span></>}
            subtitle="We're not just another agency. We're your dedicated tech partner obsessed with your business success."
          />
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {whyUs.map((item, i) => (
              <StaggerItem key={i}>
                <GlassCard className="p-7 group" glowColor="cyan">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-white/10 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${item.color}15`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-[#8A8AA0] text-sm leading-relaxed">{item.desc}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>



      {/* ===== TECH STACK ===== */}
      <section className="py-24 bg-[#070711] bg-grid overflow-hidden relative z-10" id="tech-stack">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="Technology"
            title={<>Built on <span className="text-gradient">Modern Tech</span></>}
            subtitle="We use industry-leading technologies to build fast, scalable, and maintainable products."
          />
        </div>
        {/* Marquee */}
        <div className="relative overflow-hidden flex flex-col gap-5 py-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070711] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070711] to-transparent z-10 pointer-events-none" />
          
          {/* Row 1: Forward Direction */}
          <div className="flex gap-4 animate-marquee whitespace-nowrap cursor-pointer">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full glass border border-white/[0.08] text-[#8A8AA0] text-sm font-medium hover:text-white hover:border-cyan-400/30 transition-all duration-200 flex-shrink-0"
              >
                <span>{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>

          {/* Row 2: Reverse Direction */}
          <div className="flex gap-4 animate-marquee-reverse whitespace-nowrap cursor-pointer">
            {[...techStack, ...techStack].reverse().map((tech, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full glass border border-white/[0.08] text-[#8A8AA0] text-sm font-medium hover:text-white hover:border-cyan-400/30 transition-all duration-200 flex-shrink-0"
              >
                <span>{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS PREVIEW ===== */}
      <section className="py-28 overflow-hidden" id="testimonials-preview">
        <div className="max-w-[1200px] mx-auto px-6 mb-12">
          <SectionHeader
            label="Social Proof"
            title={<>What Clients <span className="text-gradient">Say About Us</span></>}
          />
        </div>

        {/* Infinite 3D Auto-Scrolling Testimonial Marquee */}
        <div className="relative overflow-hidden py-6 select-none">
          {/* Gradient fade edge masks for smooth premium visual blend */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-r from-[#070711] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-l from-[#070711] to-transparent z-20 pointer-events-none" />

          {/* Marquee Row - Infinite auto-scroll enabled on all screens */}
          <div className="flex gap-6 animate-marquee-slow whitespace-nowrap cursor-pointer hover:[animation-play-state:paused] active:[animation-play-state:paused] py-4">
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, index) => (
              <div key={`${t._id}-${index}`} className="w-[300px] sm:w-[340px] md:w-[380px] shrink-0 h-full whitespace-normal inline-block">
                <TiltCard
                  intensity={12}
                  className="h-full w-full"
                >
                  <div className="glass rounded-3xl border border-white/[0.08] p-8 relative overflow-hidden h-full flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_15px_35px_rgba(0,212,255,0.15)] hover:bg-white/[0.02] group">
                    {/* Glowing blur orb */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-500 pointer-events-none" />

                    {/* Floating Quote Icon */}
                    <Quote className="absolute right-6 top-6 text-cyan-400/5 w-14 h-14 pointer-events-none group-hover:text-cyan-400/10 group-hover:scale-110 transition-all duration-300" />

                    {/* Star Ratings */}
                    <div className="relative z-10 flex items-center justify-between mb-6">
                      <div className="flex gap-0.5">
                        {Array.from({ length: t.rating || 5 }).map((_, i) => (
                          <Star key={i} size={15} className="text-amber-400 fill-amber-400 group-hover:scale-110 transition-transform duration-300" />
                        ))}
                      </div>
                    </div>

                    {/* Review text */}
                    <div className="relative z-10 mb-8 min-h-[72px] flex items-center">
                      <p className="text-[#c0c0d0] group-hover:text-white text-[0.925rem] leading-relaxed italic transition-colors duration-300">
                        "{t.reviewText}"
                      </p>
                    </div>

                    {/* Client Info Block */}
                    <div className="relative z-10 flex items-center gap-4 border-t border-white/[0.05] pt-5 mt-auto">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-base shadow-[0_4px_12px_rgba(0,212,255,0.2)] flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                          {t.name?.charAt(0) || 'C'}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-cyan-500 border-2 border-[#070711] flex items-center justify-center text-[10px] text-white">
                          ✨
                        </div>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-[0.95rem] tracking-wide group-hover:text-cyan-400 transition-colors duration-300">
                          {t.name}
                        </div>
                        {t.businessName && (
                          <div className="text-[#8A8AA0] text-xs font-medium mt-0.5 group-hover:text-purple-300 transition-colors duration-300">
                            {t.businessName}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>

        <ScrollReveal className="mt-10 flex justify-center">
          <Link to="/testimonials" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-200" id="view-all-testimonials-btn">
            Read All Reviews <Star size={16} />
          </Link>
        </ScrollReveal>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-28" id="process">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="How We Work"
            title={<>Our <span className="text-gradient">Process</span></>}
            subtitle="A streamlined process that keeps you informed and in control from start to finish."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-cyan-400/20 hidden lg:block" />
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl border border-white/[0.08] p-6 text-center relative hover:border-cyan-400/25 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/20 flex items-center justify-center mx-auto mb-5 text-2xl group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="text-xs font-bold text-cyan-400 tracking-[3px] mb-2">{step.num}</div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">{step.title}</h3>
                  <p className="text-[#8A8AA0] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-28" id="faq">
        <div className="max-w-[800px] mx-auto px-6">
          <SectionHeader
            label="Questions"
            title={<>Frequently Asked <span className="text-gradient">Questions</span></>}
          />
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-28 relative overflow-hidden bg-[#070711] z-10" id="cta">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="glass rounded-3xl border border-cyan-400/15 p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.06)_0%,transparent_70%)]" />
              <div className="relative z-10">
                <Badge variant="default" className="mb-6">Ready to Start?</Badge>
                <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-heading mb-6">
                  Let's Build Something{' '}
                  <span className="text-gradient">Amazing Together</span>
                </h2>
                <p className="text-[#8A8AA0] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                  Tell us about your project and we'll get back to you within 24 hours with a free consultation.
                </p>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 transition-all duration-200 text-base"
                    id="cta-contact-btn"
                  >
                    Start Your Project <ArrowRight size={18} />
                  </Link>
                  <MotionLink
                    to="/demos"
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ y: 0 }}
                    className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:text-white overflow-hidden group shadow-[0_4px_0_0_rgba(0,212,255,0.2),0_0_15px_rgba(0,212,255,0.1)] active:translate-y-[4px] active:shadow-[0_0_0_0_transparent] transition-all duration-200 text-base"
                  >
                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                    Browse Demos <ExternalLink size={18} className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                  </MotionLink>
                  <a
                    href="https://wa.me/918769592668?text=Hi GenzTeck! I'd like to discuss a project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border border-white/20 text-white hover:bg-white/5 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-200 text-base"
                    id="cta-whatsapp-btn"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Preview Customization Modal */}
      <AnimatePresence>
        {selectedDemo && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDemo(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />
            
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-md glass rounded-3xl border border-white/[0.08] p-8 overflow-hidden z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 pointer-events-none" />
              
              <button
                onClick={() => setSelectedDemo(null)}
                className="absolute top-4 right-4 text-[#8A8AA0] hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="relative z-10">
                <Badge variant="purple" className="mb-4">Live Customization</Badge>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  Preview {selectedDemo.title}
                </h3>
                <p className="text-[#8A8AA0] text-sm mb-6 leading-relaxed font-light">
                  Enter your brand name below to see the template instantly personalized for your business.
                </p>

                <form onSubmit={handleLaunchPreview} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[#8A8AA0] uppercase tracking-wider">
                      Your Brand Name
                    </label>
                    <input
                      type="text"
                      value={brandNameInput}
                      onChange={(e) => setBrandNameInput(e.target.value)}
                      placeholder={`e.g. ${selectedDemo.defaultBrand}`}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#5A5A7A] focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all"
                      autoFocus
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDemo(null)}
                      className="flex-1 py-3 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all text-sm uppercase tracking-wider cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider cursor-pointer"
                    >
                      Launch Preview
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
