import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, Monitor, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { ScrollReveal, StaggerReveal, StaggerItem, SectionHeader, Badge } from '../components/ui/Motion';
import { GlassCard, TiltCard } from '../components/ui/Cards';

const ProjectsBackground = lazy(() => import('../components/3d/PageBackgrounds').then(m => ({ default: m.ProjectsBackground })));

const defaultProjects = [
  {
    _id: '1',
    title: 'Prakrit Astro',
    type: 'Astrology Platform',
    url: 'https://prakritastro.com',
    image: '/images/projects_mockup.png',
    color: '#7B2FBE',
    problem: 'Needed a premium digital presence for astrological consultations with online booking and payment.',
    solution: 'Built a stunning astrology website with appointment booking, payment integration, and a content-rich blog.',
    features: ['Appointment Booking System', 'Online Payment Integration', 'Astrology Blog', 'Services Showcase', 'Admin Dashboard'],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Razorpay'],
    result: '3x more consultation bookings within 60 days of launch.',
  },
  {
    _id: '2',
    title: 'Axora Homes',
    type: 'Real Estate Website',
    url: 'https://axora.homes',
    image: null,
    color: '#00D4FF',
    problem: 'Required a high-converting real estate platform to showcase luxury properties to premium buyers.',
    solution: 'Developed a visually stunning real estate website with property listings, virtual tours, and lead capture.',
    features: ['Property Listings & Search', 'Lead Capture Forms', 'Virtual Tour Support', 'Agent Profiles', 'Admin CMS'],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'AWS'],
    result: 'Qualified leads up 200% within the first month.',
  },
  {
    _id: '3',
    title: 'Zaira Restaurant',
    type: 'Restaurant Website + Ordering',
    url: 'https://zairarestaurant.com',
    image: null,
    color: '#FF6B6B',
    problem: 'Wanted a premium digital presence with live online ordering and a QR-based table ordering system.',
    solution: 'Built a full restaurant ecosystem — website, online ordering, QR menus, and kitchen display system.',
    features: ['Restaurant Website', 'Online Ordering System', 'QR Table Menu', 'Kitchen Display System', 'Order Analytics'],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io'],
    result: 'Online ordering revenue increased 40% in the first quarter.',
  },
  {
    _id: '4',
    title: 'Zaira Online Ordering',
    type: 'Online Food Ordering Platform',
    url: null,
    image: null,
    color: '#00FF88',
    problem: 'Needed a standalone online ordering platform that customers could access directly via link or QR code.',
    solution: 'Built a standalone ordering app with category filtering, cart, live order tracking, and payment.',
    features: ['Category-Based Menu', 'Smart Cart System', 'Live Order Tracking', 'UPI/Card Payment', 'Order History'],
    technologies: ['React.js', 'Node.js', 'Socket.io', 'Razorpay'],
    result: 'Average order value increased 25% vs. phone orders.',
  },
];

export default function Projects({ projects }) {
  const data = projects?.length > 0 ? projects : defaultProjects;

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070711 0%, #0D1A14 100%)' }}>
        <Suspense fallback={null}>
          <ProjectsBackground />
        </Suspense>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-[3px] uppercase mb-5">
            <span className="w-6 h-px bg-cyan-400" />Portfolio<span className="w-6 h-px bg-cyan-400" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold font-heading leading-[1.1] mb-6">
            Real Projects, <span className="text-gradient">Real Results</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8A8AA0] text-xl max-w-2xl mx-auto leading-relaxed">
            From astrology platforms to restaurant systems — see what we've built for businesses like yours.
          </motion.p>
        </div>
      </section>

      {/* Case Studies */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="flex flex-col gap-16">
          {data.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={project._id || i} delay={0.05 * i}>
                <div className="glass rounded-3xl border border-white/[0.08] overflow-hidden hover:border-cyan-400/20 transition-all duration-300 group">
                  <div className={`flex flex-col lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Mockup Visual */}
                    <div className="lg:w-2/5 relative overflow-hidden"
                      style={{ minHeight: 280, background: `linear-gradient(135deg, ${project.color}10, rgba(0,0,0,0.3))` }}>
                      {project.image ? (
                        <img src={project.image} alt={project.title}
                          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                          {/* Premium placeholder with browser frame */}
                          <div className="w-full max-w-xs">
                            <div className="bg-[#1A1A2E] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                              {/* Browser bar */}
                              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#12121E] border-b border-white/5">
                                <div className="flex gap-1.5">
                                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                                </div>
                                <div className="flex-1 mx-3 bg-[#070711] rounded text-xs text-[#5A5A7A] px-2 py-1 truncate">
                                  {project.url || 'genzteck.com/project'}
                                </div>
                              </div>
                              {/* Fake content */}
                              <div className="p-4 space-y-3">
                                <div className="h-24 rounded-lg" style={{ background: `${project.color}15` }} />
                                <div className="flex gap-2">
                                  <div className="h-3 flex-1 rounded bg-white/5" />
                                  <div className="h-3 w-16 rounded bg-white/5" />
                                </div>
                                <div className="h-3 w-3/4 rounded bg-white/5" />
                                <div className="h-3 w-1/2 rounded bg-white/5" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <Badge variant="purple" className="absolute top-4 left-4">{project.type}</Badge>
                    </div>

                    {/* Content */}
                    <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-between">
                      <div>
                        <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-2">{project.title}</h2>

                        <div className="flex flex-col gap-6 mt-6">
                          {/* Problem */}
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#5A5A7A] mb-2">The Challenge</p>
                            <p className="text-[#c0c0d0] text-sm leading-relaxed">{project.problem || 'Building a premium digital presence for a growing business.'}</p>
                          </div>
                          {/* Solution */}
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#5A5A7A] mb-2">Our Solution</p>
                            <p className="text-[#c0c0d0] text-sm leading-relaxed">{project.solution || 'A complete digital solution with modern design and powerful features.'}</p>
                          </div>
                          {/* Features */}
                          {project.features?.length > 0 && (
                            <div>
                              <p className="text-xs font-bold uppercase tracking-wider text-[#5A5A7A] mb-2">Key Features Built</p>
                              <div className="grid grid-cols-2 gap-1.5">
                                {project.features.map((f, j) => (
                                  <div key={j} className="flex items-center gap-2 text-xs text-[#8A8AA0]">
                                    <CheckCircle size={12} className="text-emerald-400 flex-shrink-0" />
                                    {f}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {/* Tech */}
                          {project.technologies?.length > 0 && (
                            <div className="flex gap-2 flex-wrap">
                              {project.technologies.map((t, j) => (
                                <Badge key={j} variant="default">{t}</Badge>
                              ))}
                            </div>
                          )}
                          {/* Result */}
                          {project.result && (
                            <div className="p-4 rounded-xl" style={{ background: `${project.color}10`, borderLeft: `3px solid ${project.color}` }}>
                              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: project.color }}>Result</p>
                              <p className="text-white text-sm font-medium">{project.result}</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-3 mt-8 flex-wrap">
                        {project.url ? (
                          <a href={project.url} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white hover:-translate-y-0.5 transition-all"
                            style={{ background: `linear-gradient(135deg, ${project.color}, #7B2FBE)` }}>
                            View Live <ExternalLink size={13} />
                          </a>
                        ) : null}
                        <Badge variant="amber">📄 Case Study Coming Soon</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold font-heading mb-4">
              Want Your Project to Be <span className="text-gradient">Next?</span>
            </h2>
            <p className="text-[#8A8AA0] mb-10 text-lg max-w-xl mx-auto">
              Let's build something that makes an impact for your business and your customers.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 transition-all text-base">
              Start a Project <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
