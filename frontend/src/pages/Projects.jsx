import { useState, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, SectionHeader, Badge } from '../components/ui/Motion';

const ProjectsBackground = lazy(() => import('../components/3d/PageBackgrounds').then(m => ({ default: m.ProjectsBackground })));

const defaultProjects = [
  {
    _id: '1',
    title: 'Prakrit Astro',
    type: 'Astrology Platform',
    url: 'https://prakritastro.com',
    image: 'https://images.unsplash.com/photo-1515942696888-c54ed430a967?auto=format&fit=crop&w=800&q=80',
    color: '#7B2FBE',
    category: 'web',
    problem: 'Needed a premium digital presence for astrological consultations with online booking and payment.',
    solution: 'Built a stunning astrology website with appointment booking, payment integration, and a content-rich blog.',
    features: ['Appointment Booking System', 'Online Payment Integration', 'Astrology Blog', 'Services Showcase', 'Admin Dashboard'],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Razorpay'],
    result: '3x more consultation bookings within 60 days of launch.',
  },
  {
    _id: '2',
    title: 'Nidhi Decor',
    type: 'Interior & E-Commerce',
    url: 'https://axora.homes',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    color: '#00D4FF',
    category: 'web',
    problem: 'Needed an elegant e-commerce layout for decoration and interior design products to showcase options and capture buyer inquiries.',
    solution: 'Nidhi Decor is an ecommerce-style website for decoration and interior design products/services, built with a clean product-focused layout, inquiry flow, and modern responsive UI.',
    features: ['Product Showcase Grid', 'Interior Styling Gallery', 'Instant Inquiry Flow', 'Responsive Design UI', 'Custom Admin Panel'],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    result: '2x increase in interior consultation inquiries within 30 days.',
  },
  {
    _id: '3',
    title: 'RLP Digital Mobile App',
    type: 'Mobile App',
    url: null,
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80',
    color: '#00FF88',
    category: 'mobile',
    problem: 'Local political party needed a secure, high-engagement mobile hub to train volunteers, share news, issue member ID cards, and design banners.',
    solution: 'RLP Digital is a mobile app built for a local political party to provide training videos, live updates, customized poster templates, digital ID cards, and member-focused digital tools.',
    features: ['Training videos', 'Live updates', 'Custom poster templates', 'Digital ID card', 'Member profile system', 'Admin-managed content'],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
    result: 'Engaged over 50,000 active members with automated digital ID generations.',
  }
];

export default function Projects({ projects }) {
  const data = projects?.length > 0 ? projects : defaultProjects;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = data.filter(p => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }} className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070711 0%, #0D1A14 100%)' }}>
        <Suspense fallback={null}>
          <ProjectsBackground />
        </Suspense>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-[3px] uppercase mb-5">
            <span className="w-6 h-px bg-cyan-400" />Our Work<span className="w-6 h-px bg-cyan-400" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold font-heading leading-[1.1] mb-6">
            Our Work, <span className="text-gradient">Real Results</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8A8AA0] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            From mobile apps and e-commerce platforms to custom dashboards — see our client-ready software products.
          </motion.p>
        </div>
      </section>

      {/* Case Studies */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16">
        
        {/* Category Filters */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap relative z-20">
          {[
            { id: 'all', label: 'All Work' },
            { id: 'web', label: 'Websites' },
            { id: 'mobile', label: 'Mobile Apps' }
          ].map(chip => (
            <button
              key={chip.id}
              onClick={() => setActiveCategory(chip.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                activeCategory === chip.id
                  ? 'bg-cyan-500 border-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'bg-white/5 border-white/10 text-[#8A8AA0] hover:border-white/20 hover:text-white'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-16 relative z-10">
          {filteredProjects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={project._id || i} delay={0.05 * i}>
                <div className="glass rounded-3xl border border-white/[0.08] overflow-hidden hover:border-cyan-400/20 transition-all duration-300 group">
                  <div className={`flex flex-col lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Mockup Visual */}
                    <div className="lg:w-2/5 relative overflow-hidden flex"
                      style={{ minHeight: 280, background: `linear-gradient(135deg, ${project.color}10, rgba(0,0,0,0.3))` }}>
                      {project.image ? (
                        <img src={project.image} alt={project.title}
                          className="w-full h-full object-cover opacity-80 group-hover:scale-103 transition-transform duration-700" loading="lazy" />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                          <div className="w-full max-w-xs">
                            <div className="bg-[#1A1A2E] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
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
                              <div className="p-4 space-y-3">
                                <div className="h-24 rounded-lg" style={{ background: `${project.color}15` }} />
                                <div className="flex gap-2">
                                  <div className="h-3 flex-1 rounded bg-white/5" />
                                  <div className="h-3 w-16 rounded bg-white/5" />
                                </div>
                                <div className="h-3 w-3/4 rounded bg-white/5" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <Badge variant="purple" className="absolute top-4 left-4">{project.type}</Badge>
                    </div>

                    {/* Content */}
                    <div className="lg:w-3/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                      <div>
                        <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-2">{project.title}</h2>

                        <div className="flex flex-col gap-6 mt-6">
                          {/* Problem */}
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#5A5A7A] mb-2">The Challenge</p>
                            <p className="text-[#c0c0d0] text-sm leading-relaxed font-light">{project.problem || 'Building a premium digital presence for a growing business.'}</p>
                          </div>
                          {/* Solution */}
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#5A5A7A] mb-2">Our Solution</p>
                            <p className="text-[#c0c0d0] text-sm leading-relaxed font-light">{project.solution || 'A complete digital solution with modern design and powerful features.'}</p>
                          </div>
                          {/* Features */}
                          {project.features?.length > 0 && (
                            <div>
                              <p className="text-xs font-bold uppercase tracking-wider text-[#5A5A7A] mb-2">Key Features Built</p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {project.features.map((f, j) => (
                                  <div key={j} className="flex items-center gap-2 text-xs text-[#8A8AA0]">
                                    <CheckCircle size={12} className="text-emerald-400 flex-shrink-0" />
                                    <span>{f}</span>
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
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white hover:-translate-y-0.5 transition-all shadow-md"
                            style={{ background: `linear-gradient(135deg, ${project.color}, #7B2FBE)` }}>
                            View Project <ExternalLink size={13} />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                            📱 Mobile App Project
                          </span>
                        )}
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
      <section className="py-24 text-center border-t border-white/[0.04]" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <ScrollReveal>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold font-heading mb-4 text-white uppercase">
              Want a similar website or app for your business?
            </h2>
            <p className="text-[#8A8AA0] mb-10 text-lg max-w-xl mx-auto font-light">
              Let's build a custom solution that elevates your brand and drives digital results.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 transition-all text-base">
              Contact GenzTeck <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
