import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Users, Code, Smartphone, Globe, BarChart3, ChevronDown, Play, Sparkles, ExternalLink } from 'lucide-react';
import { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard, TiltCard } from '../components/ui/Cards';
import { ScrollReveal, StaggerReveal, StaggerItem, SectionHeader, CountUpStat } from '../components/ui/Motion';
import { Badge } from '../components/ui/Motion';

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
  { _id: '1', name: 'QR & NFC Digital Menu', shortDescription: 'Complete restaurant digitalization — smart menus to kitchen management system.', status: 'live', icon: '🍽️', color: '#00D4FF' },
  { _id: '2', name: 'GeoTrace', shortDescription: 'Real-time GPS fleet tracking with geofencing, alerts, and driver management.', status: 'live', icon: '🗺️', color: '#7B2FBE' },
  { _id: '3', name: 'NFC Smart Standee', shortDescription: 'One tap to connect customers to Instagram, Google Reviews, WhatsApp, and more.', status: 'live', icon: '📲', color: '#00FF88' },
  { _id: '4', name: 'OneTap', shortDescription: 'Smart landing pages with 30+ premium themes. One link for everything you need.', status: 'live', icon: '⚡', color: '#FF6B6B' },
];

const defaultProjects = [
  { _id: '1', title: 'Prakrit Astro', type: 'Astrology Platform', url: 'https://prakritastro.com', problem: 'Needed a premium digital presence for astrological consultations and services.' },
  { _id: '2', title: 'Axora Homes', type: 'Real Estate Website', url: 'https://axora.homes', problem: 'Required a high-converting real estate platform to showcase premium properties.' },
  { _id: '3', title: 'Zaira Restaurant', type: 'Restaurant Website', url: 'https://zairarestaurant.com', problem: 'Wanted a stunning digital presence with online ordering and QR menu system.' },
];

const defaultTestimonials = [
  { _id: '1', name: 'Rahul Sharma', businessName: 'Prakrit Astro', rating: 5, reviewText: 'GenzTeck built our website in just 2 weeks. Our online inquiries have tripled since launch! The design quality is exceptional.' },
  { _id: '2', name: 'Priya Patel', businessName: 'Axora Homes', rating: 5, reviewText: 'The real estate website they built is exactly what we envisioned. Clean, professional, and it converts. Best investment we made.' },
  { _id: '3', name: 'Chef Meera', businessName: 'Zaira Restaurant', rating: 5, reviewText: 'Our online ordering system has been a game changer. Customers love the QR menu! Revenue up 40% since launch.' },
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

  return (
    <div style={{ background: 'var(--color-bg)' }}>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden" id="hero"
        style={{ background: 'linear-gradient(135deg, #070711 0%, #0D0D2A 50%, #1A0A2E 100%)' }}>

        {/* 3D Scene */}
        <Suspense fallback={null}>
          <Hero3DScene />
        </Suspense>

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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#5A5A7A] text-xs"
        >
          <span className="tracking-widest uppercase">Scroll to explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-28 bg-grid relative" id="services-preview">
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

      {/* ===== PRODUCTS PREVIEW ===== */}
      <section className="py-28 relative" id="products-preview">
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
                  <div className="h-full glass rounded-2xl border border-white/[0.08] p-8 hover:border-cyan-400/25 transition-all duration-300 relative overflow-hidden">
                    <div className="flex items-start justify-between mb-5">
                      <div className="text-3xl">{product.icon || '📦'}</div>
                      <Badge variant={product.status === 'live' ? 'live' : 'coming-soon'}>
                        {product.status === 'live' ? '● Live' : '⏳ Coming Soon'}
                      </Badge>
                    </div>
                    <h3 className="font-heading font-bold text-white text-xl mb-3">{product.name}</h3>
                    <p className="text-[#8A8AA0] text-sm leading-relaxed mb-6">{product.shortDescription}</p>
                    <div className="flex gap-3 flex-wrap">
                      {product.websiteUrl && (
                        <a href={product.websiteUrl} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 hover:bg-cyan-400/20 transition-all">
                          Visit <ExternalLink size={12} />
                        </a>
                      )}
                      <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full border border-white/10 text-[#8A8AA0] hover:text-white hover:border-white/20 transition-all">
                        Request Demo
                      </Link>
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
      <section className="py-20 bg-grid">
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
      <section className="py-28 relative" id="projects-preview">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="Portfolio"
            title={<>Recent <span className="text-gradient">Projects</span></>}
            subtitle="Real projects, real results. See what we've built for businesses like yours."
          />
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {projects.map((project) => (
              <StaggerItem key={project._id}>
                <TiltCard className="h-full group">
                  <GlassCard className="h-full p-8" glowColor="purple">
                    <Badge variant="purple" className="mb-4">{project.type}</Badge>
                    <h3 className="font-heading font-bold text-white text-xl mb-3">{project.title}</h3>
                    <p className="text-[#8A8AA0] text-sm leading-relaxed mb-6">
                      {project.problem || `A premium ${project.type?.toLowerCase()} built with modern technology.`}
                    </p>
                    <div className="flex items-center gap-3 flex-wrap mt-auto">
                      {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                          View Live <ArrowRight size={14} />
                        </a>
                      )}
                      <Badge variant="amber">Case Study Soon</Badge>
                    </div>
                  </GlassCard>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerReveal>
          <ScrollReveal className="mt-14 flex justify-center">
            <Link to="/projects" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-200" id="view-all-projects-btn">
              View All Projects <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-28 bg-grid" id="why-genzteck">
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

      {/* ===== TECH STACK ===== */}
      <section className="py-24 bg-grid overflow-hidden" id="tech-stack">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="Technology"
            title={<>Built on <span className="text-gradient">Modern Tech</span></>}
            subtitle="We use industry-leading technologies to build fast, scalable, and maintainable products."
          />
        </div>
        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070711] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070711] to-transparent z-10" />
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
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
        </div>
      </section>

      {/* ===== TESTIMONIALS PREVIEW ===== */}
      <section className="py-28" id="testimonials-preview">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="Social Proof"
            title={<>What Clients <span className="text-gradient">Say About Us</span></>}
          />
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {testimonials.map((t) => (
              <StaggerItem key={t._id}>
                <GlassCard className="p-7 h-full" glowColor="cyan">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating || 5 }).map((_, i) => (
                      <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-[#c0c0d0] text-sm leading-relaxed mb-6 italic">"{t.reviewText}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {t.name?.charAt(0) || 'C'}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      {t.businessName && <div className="text-[#8A8AA0] text-xs">{t.businessName}</div>}
                    </div>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerReveal>
          <ScrollReveal className="mt-14 flex justify-center">
            <Link to="/testimonials" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-200" id="view-all-testimonials-btn">
              Read All Reviews <Star size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== DEMOS PREVIEW ===== */}
      <section className="py-28 bg-grid" id="demos-preview">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="Live Demos"
            title={<>See Our Systems <span className="text-gradient">In Action</span></>}
            subtitle="Interactive demos of real systems built by GenzTeck. Coming soon — request early access."
          />
          <StaggerReveal className="grid grid-cols-2 md:grid-cols-3 gap-5" staggerDelay={0.07}>
            {['Astro Website + Admin Panel', 'Bakery E-commerce', 'CRM System', 'Booking System', 'Restaurant Ordering', 'Reminder System'].map((demo, i) => (
              <StaggerItem key={i}>
                <div className="glass rounded-2xl border border-white/[0.08] p-6 text-center relative overflow-hidden group hover:border-cyan-400/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/3 to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Badge variant="amber" className="mb-3">Coming Soon</Badge>
                  <h4 className="text-white font-medium text-sm mt-2">{demo}</h4>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
          <ScrollReveal className="mt-14 flex justify-center">
            <Link to="/demos" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-200" id="view-demos-btn">
              Request a Demo <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
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
      <section className="py-28 relative overflow-hidden" id="cta">
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
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 transition-all duration-200 text-base"
                    id="cta-contact-btn"
                  >
                    Start Your Project <ArrowRight size={18} />
                  </Link>
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
    </div>
  );
}
