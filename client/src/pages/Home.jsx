import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Users, Code, Smartphone, Globe, BarChart3, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import './Home.css';

// Default data if backend is empty
const defaultServices = [
  { _id: '1', title: 'Website Development', shortDescription: 'Custom websites built to convert visitors into customers.', icon: '🌐' },
  { _id: '2', title: 'Mobile App Development', shortDescription: 'Native and cross-platform apps for Android and iOS.', icon: '📱' },
  { _id: '3', title: 'Custom Software', shortDescription: 'Bespoke software tailored to your unique business needs.', icon: '⚙️' },
  { _id: '4', title: 'Landing Pages', shortDescription: 'High-converting pages designed to capture leads and drive sales.', icon: '🚀' },
  { _id: '5', title: 'Automation Systems', shortDescription: 'Automate workflows to save time and reduce errors.', icon: '🤖' },
  { _id: '6', title: 'UI/UX Design', shortDescription: 'Beautiful, intuitive designs that delight and convert.', icon: '🎨' },
];

const defaultProducts = [
  { _id: '1', name: 'QR & NFC Menu System', shortDescription: 'Complete restaurant digitalization — menus to kitchen management.', status: 'live' },
  { _id: '2', name: 'GeoTrace', shortDescription: 'Real-time GPS fleet tracking with geofencing and alerts.', status: 'live' },
  { _id: '3', name: 'NFC Smart Standee', shortDescription: 'One tap to connect customers to your Instagram, Google Reviews, and more.', status: 'live' },
  { _id: '4', name: 'OneTap', shortDescription: 'Smart landing pages with 30+ themes. One link for everything.', status: 'live' },
];

const defaultProjects = [
  { _id: '1', title: 'Prakrit Astro', type: 'Astrology Platform', url: 'https://prakritastro.com' },
  { _id: '2', title: 'Axora Homes', type: 'Real Estate Website', url: 'https://axora.homes' },
  { _id: '3', title: 'Zaira Restaurant', type: 'Restaurant Website', url: 'https://zairarestaurant.com' },
];

const defaultTestimonials = [
  { _id: '1', name: 'Rahul Sharma', businessName: 'Prakrit Astro', rating: 5, reviewText: 'GenzTeck built our website in just 2 weeks. Our online inquiries have tripled since launch!' },
  { _id: '2', name: 'Priya Patel', businessName: 'Axora Homes', rating: 5, reviewText: 'The real estate website they built is exactly what we envisioned. Clean, professional, and it converts.' },
  { _id: '3', name: 'Chef Meera', businessName: 'Zaira Restaurant', rating: 5, reviewText: 'Our online ordering system has been a game changer. Customers love the QR menu!' },
];

const techStack = ['React', 'Node.js', 'MongoDB', 'React Native', 'Express', 'AWS', 'Firebase', 'Flutter', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'];

const processSteps = [
  { num: '01', title: 'Discovery Call', desc: 'We understand your business, goals, and requirements in a focused consultation.' },
  { num: '02', title: 'Design & Plan', desc: 'We design the UI and create a detailed project plan with timeline and milestones.' },
  { num: '03', title: 'Development', desc: 'Our team builds your product using modern, scalable technology stack.' },
  { num: '04', title: 'Test & Launch', desc: 'Thorough testing across devices, then go live with full handover and support.' },
];

const faqs = [
  { q: 'How long does it take to build a website?', a: 'Most websites take 2–4 weeks from design to launch. Complex projects like e-commerce or web apps may take 4–8 weeks depending on features.' },
  { q: 'Do you provide ongoing support after launch?', a: 'Yes! We offer ongoing support and maintenance packages. We also provide a 30-day free support period after every project launch.' },
  { q: 'What is your pricing model?', a: 'We work on project-based pricing. After a discovery call, we provide a detailed quote. We also offer monthly retainer packages for ongoing work.' },
  { q: 'Can I update content myself after the website is done?', a: 'Absolutely. Every project includes an admin panel where you can update text, images, products, and other content without any coding.' },
  { q: 'Do you work with clients outside India?', a: 'Yes! We work with businesses globally. All communication is remote-friendly and we accommodate different time zones.' },
  { q: 'What technologies do you use?', a: 'We primarily use React, Node.js, MongoDB, and React Native. We choose the best technology based on your specific project requirements.' },
];

const whyUs = [
  { icon: <Zap size={24} />, title: 'Fast Delivery', desc: 'We deliver projects on time, every time. No delays, no excuses.' },
  { icon: <Shield size={24} />, title: 'Quality First', desc: 'Every project is built with attention to detail, performance, and scalability.' },
  { icon: <Users size={24} />, title: 'Dedicated Team', desc: 'A focused team works on your project from start to finish.' },
  { icon: <Code size={24} />, title: 'Modern Tech', desc: 'We use the latest, most reliable technologies for every project.' },
  { icon: <Smartphone size={24} />, title: 'Mobile First', desc: 'Everything we build is fully responsive and mobile-optimized.' },
  { icon: <Globe size={24} />, title: 'End-to-End', desc: 'From design to deployment, we handle every aspect of your project.' },
];

function FAQ({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item ${openIdx === i ? 'open' : ''}`}>
          <button className="faq-question" onClick={() => setOpenIdx(openIdx === i ? null : i)} aria-expanded={openIdx === i}>
            <span>{faq.q}</span>
            <ChevronDown size={18} className="faq-arrow" />
          </button>
          {openIdx === i && <div className="faq-answer">{faq.a}</div>}
        </div>
      ))}
    </div>
  );
}

export default function Home({ data }) {
  const services = data?.services?.length ? data.services.slice(0, 6) : defaultServices;
  const products = data?.products?.length ? data.products : defaultProducts;
  const projects = data?.projects?.length ? data.projects.slice(0, 3) : defaultProjects;
  const testimonials = data?.testimonials?.length ? data.testimonials : defaultTestimonials;

  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-grid-overlay" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow animate-in">
              <span className="hero-eyebrow-dot" />
              Trusted by Growing Businesses Across India
            </div>
            <h1 className="hero-title animate-in">
              We Build <span className="text-gradient">Software</span><br />
              That Grows Your<br />Business
            </h1>
            <p className="hero-subtitle animate-in">
              Custom websites, mobile apps, automation systems, QR/NFC products & digital solutions — built for modern businesses that mean business.
            </p>
            <div className="hero-actions animate-in">
              <Link to="/contact" className="btn btn-primary btn-lg" id="hero-cta-primary">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="btn btn-outline btn-lg" id="hero-cta-secondary">
                See Our Work
              </Link>
            </div>
            <div className="hero-stats animate-in">
              <div className="hero-stat">
                <div className="hero-stat-value">50+</div>
                <div className="hero-stat-label">Projects Delivered</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">4.9★</div>
                <div className="hero-stat-label">Client Rating</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">24hr</div>
                <div className="hero-stat-label">Response Time</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll to explore</span>
          <ChevronDown size={16} className="hero-scroll-arrow" />
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="section bg-grid" id="services-preview">
        <div className="container">
          <div className="section-header">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
            <p className="section-subtitle">From idea to launch, we provide end-to-end digital services that help businesses grow online and offline.</p>
          </div>
          <div className="grid-3">
            {services.map(service => (
              <div key={service._id} className="card service-card">
                <div className="card-icon">{service.icon || '⚙️'}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-text">{service.shortDescription}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 48 }}>
            <Link to="/services" className="btn btn-outline" id="view-all-services-btn">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS PREVIEW ===== */}
      <section className="section" id="products-preview">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Products</div>
            <h2 className="section-title">Ready-Made <span className="text-gradient">Digital Products</span></h2>
            <p className="section-subtitle">Plug-and-play digital products for restaurants, businesses, and fleets — deploy in days, not months.</p>
          </div>
          <div className="grid-2 products-grid">
            {products.map(product => (
              <div key={product._id} className="card product-card">
                <div className="product-card-header">
                  <div>
                    <span className={`badge badge-${product.status === 'live' ? 'live' : 'coming-soon'}`}>
                      {product.status === 'live' ? '● Live' : '⏳ Coming Soon'}
                    </span>
                  </div>
                </div>
                <h3 className="product-card-title">{product.name}</h3>
                <p className="card-text">{product.shortDescription}</p>
                {product.websiteUrl && (
                  <a href={product.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" style={{ marginTop: 16 }}>
                    Visit Site <ArrowRight size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 48 }}>
            <Link to="/products" className="btn btn-outline" id="view-all-products-btn">
              Explore All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS PREVIEW ===== */}
      <section className="section bg-grid" id="projects-preview">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Portfolio</div>
            <h2 className="section-title">Recent <span className="text-gradient">Projects</span></h2>
            <p className="section-subtitle">Real projects, real results. See what we've built for businesses like yours.</p>
          </div>
          <div className="grid-3">
            {projects.map(project => (
              <div key={project._id} className="card project-card">
                <div className="project-card-type">{project.type}</div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.problem || `A premium ${project.type.toLowerCase()} built with modern technology.`}</p>
                <div className="project-card-actions">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                      View Live <ArrowRight size={14} />
                    </a>
                  )}
                  <span className="badge badge-coming-soon">Case Study Soon</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 48 }}>
            <Link to="/projects" className="btn btn-outline" id="view-all-projects-btn">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section why-section" id="why-genzteck">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Why GenzTeck</div>
            <h2 className="section-title">Built Different, <span className="text-gradient">For Results</span></h2>
            <p className="section-subtitle">We're not just another agency. We're your dedicated tech partner obsessed with your business success.</p>
          </div>
          <div className="grid-3">
            {whyUs.map((item, i) => (
              <div key={i} className="card why-card">
                <div className="why-icon">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section bg-grid" id="process">
        <div className="container">
          <div className="section-header">
            <div className="section-label">How We Work</div>
            <h2 className="section-title">Our <span className="text-gradient">Process</span></h2>
            <p className="section-subtitle">A streamlined process that keeps you informed and in control from start to finish.</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, i) => (
              <div key={i} className="process-step">
                <div className="process-num">{step.num}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
                {i < processSteps.length - 1 && <div className="process-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="section" id="tech-stack">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Technology</div>
            <h2 className="section-title">Built on <span className="text-gradient">Modern Tech</span></h2>
            <p className="section-subtitle">We use industry-leading technologies to build fast, scalable, and maintainable products.</p>
          </div>
          <div className="tech-grid">
            {techStack.map((tech, i) => (
              <div key={i} className="tech-badge">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS PREVIEW ===== */}
      <section className="section bg-grid" id="testimonials-preview">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Social Proof</div>
            <h2 className="section-title">What Clients <span className="text-gradient">Say About Us</span></h2>
          </div>
          <div className="grid-3">
            {testimonials.map(t => (
              <div key={t._id} className="testimonial-card">
                <div className="testimonial-stars">{'★'.repeat(t.rating || 5)}</div>
                <p className="testimonial-text">"{t.reviewText}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name?.charAt(0) || 'C'}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    {t.businessName && <div className="testimonial-business">{t.businessName}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 48 }}>
            <Link to="/testimonials" className="btn btn-outline" id="view-all-testimonials-btn">
              Read All Reviews <Star size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DEMOS PREVIEW ===== */}
      <section className="section" id="demos-preview">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Live Demos</div>
            <h2 className="section-title">See Our Systems <span className="text-gradient">In Action</span></h2>
            <p className="section-subtitle">Interactive demos of real systems built by GenzTeck. Coming soon — request early access.</p>
          </div>
          <div className="demos-preview-grid">
            {['Astro Website + Admin Panel', 'Bakery E-commerce', 'CRM System', 'Booking System', 'Restaurant Ordering', 'Reminder System'].map((demo, i) => (
              <div key={i} className="card demo-preview-card">
                <span className="badge badge-coming-soon">Coming Soon</span>
                <h4 style={{ marginTop: 16, fontSize: '1rem' }}>{demo}</h4>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 48 }}>
            <Link to="/demos" className="btn btn-outline" id="view-demos-btn">
              Request a Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section bg-grid" id="faq">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Questions</div>
            <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
          </div>
          <div className="faq-container">
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="section contact-cta-section" id="cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-glow" />
            <div className="section-label">Ready to Start?</div>
            <h2 className="cta-title">Let's Build Something <span className="text-gradient">Amazing Together</span></h2>
            <p className="cta-subtitle">Tell us about your project and we'll get back to you within 24 hours with a free consultation.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg" id="cta-contact-btn">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/919999999999?text=Hi GenzTeck! I'd like to discuss a project." target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg" id="cta-whatsapp-btn">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
