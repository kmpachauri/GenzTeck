import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Suspense, lazy } from 'react';
import { ScrollReveal, StaggerReveal, StaggerItem, SectionHeader, PageHeader, Badge } from '../components/ui/Motion';
import { GlassCard, TiltCard } from '../components/ui/Cards';

const AboutBackground = lazy(() => import('../components/3d/PageBackgrounds').then(m => ({ default: m.AboutBackground })));

const values = [
  { icon: '🚀', title: 'Innovation First', desc: 'We build tomorrow\'s solutions today, always staying ahead of the technology curve with cutting-edge tools.', color: '#00D4FF' },
  { icon: '🎯', title: 'Client-Centric', desc: 'Every line of code is written with your business goals in mind. Your success is our primary metric.', color: '#7B2FBE' },
  { icon: '⚡', title: 'Speed & Quality', desc: 'Rapid delivery without compromising on code quality, security, or scalability. No tradeoffs.', color: '#00FF88' },
  { icon: '🔒', title: 'Security by Design', desc: 'Security isn\'t an afterthought — it\'s baked into every layer of what we build from day one.', color: '#FF6B6B' },
];

const capabilities = [
  'Custom Web & Mobile App Development',
  'Restaurant & Food Business Automation',
  'Admin Dashboards & CRM Systems',
  'Real-Time Geo-Tracking Platforms',
  'AI-Powered Business Automation',
  'E-Commerce & Multi-Vendor Platforms',
  'SaaS Product Development',
  'API Integration & Third-Party Connectivity',
];

const whyDiff = [
  { title: 'Gen Z Perspective', desc: 'We think like the next generation — digital-native, mobile-first, and always connected.' },
  { title: 'Full-Stack Expertise', desc: 'From UI pixels to database schemas, we own every layer of your product.' },
  { title: 'Transparent Pricing', desc: 'No hidden costs, no surprise invoices. Clear milestones and honest quotes.' },
  { title: 'Post-Launch Support', desc: 'We don\'t disappear after go-live. Ongoing maintenance, updates, and growth support.' },
  { title: 'Indian Market Focus', desc: 'Built specifically for Indian businesses with ₹-friendly pricing and local market insight.' },
  { title: 'Scalable Architecture', desc: 'Every product we build is ready to grow from 100 to 100,000 users without a rebuild.' },
];

const techStack = [
  { category: 'Frontend', items: ['React.js', 'React Native', 'Next.js', 'Vite'], icon: '⚛️', color: '#00D4FF' },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'], icon: '🟢', color: '#00FF88' },
  { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'], icon: '🍃', color: '#7B2FBE' },
  { category: 'Cloud & DevOps', items: ['AWS', 'VPS Hosting', 'Docker', 'CI/CD'], icon: '☁️', color: '#00D4FF' },
  { category: 'AI & Automation', items: ['OpenAI API', 'Gemini API', 'n8n', 'Custom ML'], icon: '🤖', color: '#FF6B6B' },
  { category: 'Integrations', items: ['Socket.io', 'Stripe', 'Razorpay', 'Twilio'], icon: '🔗', color: '#7B2FBE' },
];

const timeline = [
  { year: '2022', title: 'GenzTeck Founded', desc: 'Started as a small team of passionate developers building solutions for local businesses in Jaipur.' },
  { year: '2023', title: 'First Products Launched', desc: 'Launched GeoTrace and the QR/NFC Menu System. First 10 clients onboarded successfully.' },
  { year: '2024', title: 'Expanding Capabilities', desc: 'Grew the team, expanded services, launched OneTap, and delivered 50+ projects across India.' },
  { year: '2025+', title: 'The Future', desc: 'Building enterprise-grade SaaS products and expanding our product ecosystem for Indian businesses.' },
];

export default function About() {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <section className="relative pt-32 pb-20 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070711 0%, #0D0D1E 50%, #0A0A1A 100%)' }}>
        <Suspense fallback={null}>
          <AboutBackground />
        </Suspense>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,47,190,0.08)_0%,transparent_70%)]" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-purple-400 text-xs font-semibold tracking-[3px] uppercase mb-5">
            <span className="w-6 h-px bg-purple-400" />Our Story<span className="w-6 h-px bg-purple-400" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold font-heading leading-[1.1] mb-6">
            About <span className="text-gradient">GenzTeck</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8A8AA0] text-xl max-w-2xl mx-auto leading-relaxed">
            A tech studio built by the next generation, for the next generation of Indian businesses.
          </motion.p>
        </div>
      </section>

      {/* Who We Are + Mission/Vision */}
      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-[3px] uppercase mb-5">
                <span className="w-6 h-px bg-cyan-400" />Our Purpose
              </div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold font-heading mb-6">Who is GenzTeck?</h2>
              <p className="text-[#8A8AA0] leading-relaxed mb-5 text-lg">
                GenzTeck is a full-stack technology studio founded by young Indian developers who believe every business — from a local restaurant to a growing startup — deserves world-class software at a fair price.
              </p>
              <p className="text-[#8A8AA0] leading-relaxed">
                We combine modern design sensibilities with robust engineering to create digital products that don't just work — they <em className="text-white not-italic font-medium">wow</em>. Our team brings fresh perspectives, cutting-edge tech, and a deep understanding of what Indian businesses actually need.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className="flex flex-col gap-5">
              <GlassCard className="p-6 border-l-2 border-l-cyan-400">
                <h3 className="text-cyan-400 font-heading font-bold mb-3">🎯 Our Mission</h3>
                <p className="text-[#8A8AA0] leading-relaxed text-sm">
                  To democratize premium software for Indian businesses by delivering cutting-edge, scalable, and affordable digital solutions that drive real growth.
                </p>
              </GlassCard>
              <GlassCard className="p-6 border-l-2 border-l-purple-500">
                <h3 className="text-purple-400 font-heading font-bold mb-3">🔭 Our Vision</h3>
                <p className="text-[#8A8AA0] leading-relaxed text-sm">
                  To become India's most trusted Gen Z tech partner — building the digital infrastructure that powers the next decade of Indian entrepreneurship.
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 bg-grid">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader label="Journey" title={<>Our <span className="text-gradient">Story</span></>} />
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-purple-500/40 to-transparent -translate-x-1/2" />
            <div className="flex flex-col gap-8">
              {timeline.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={`flex gap-8 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                      {i % 2 === 0 ? (
                        <GlassCard className="p-6 inline-block text-left max-w-sm">
                          <Badge variant={i === 3 ? 'purple' : 'default'} className="mb-3">{item.year}</Badge>
                          <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-[#8A8AA0] text-sm leading-relaxed">{item.desc}</p>
                        </GlassCard>
                      ) : <div />}
                    </div>
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#070711] mt-3 relative z-10 shadow-glow-cyan ml-6 md:ml-0" />
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      {i % 2 !== 0 ? (
                        <GlassCard className="p-6 inline-block text-left max-w-sm">
                          <Badge variant="purple" className="mb-3">{item.year}</Badge>
                          <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-[#8A8AA0] text-sm leading-relaxed">{item.desc}</p>
                        </GlassCard>
                      ) : (
                        /* Mobile version */
                        <GlassCard className="p-6 text-left max-w-sm md:hidden">
                          <Badge variant={i === 3 ? 'purple' : 'default'} className="mb-3">{item.year}</Badge>
                          <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-[#8A8AA0] text-sm leading-relaxed">{item.desc}</p>
                        </GlassCard>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader label="Core Values" title={<>What <span className="text-gradient">Drives Us</span></>} />
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <GlassCard className="p-8 flex gap-6 items-start" glowColor="cyan">
                  <div className="text-3xl flex-shrink-0">{v.icon}</div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg mb-2">{v.title}</h3>
                    <p className="text-[#8A8AA0] text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-28 bg-grid">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader label="Capabilities" title={<>What We <span className="text-gradient">Build</span></>} />
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.06}>
            {capabilities.map((s, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-4 p-5 glass rounded-xl border border-white/[0.08] hover:border-cyan-400/25 transition-all duration-300 group">
                  <CheckCircle size={18} className="text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-[#c0c0d0] font-medium text-sm">{s}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader label="Our Edge" title={<>Why We're <span className="text-gradient">Different</span></>} />
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {whyDiff.map((item, i) => (
              <StaggerItem key={i}>
                <GlassCard className="p-7" glowColor="purple">
                  <h3 className="text-cyan-400 font-heading font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-[#8A8AA0] text-sm leading-relaxed">{item.desc}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-28 bg-grid">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="Philosophy"
            title={<>Technology <span className="text-gradient">Philosophy</span></>}
            subtitle="We believe technology should be invisible to the end user but powerful under the hood. Our stack is chosen for reliability, performance, and long-term maintainability."
          />
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {techStack.map((t, i) => (
              <StaggerItem key={i}>
                <GlassCard className="p-7" glowColor="cyan">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl">{t.icon}</span>
                    <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: t.color }}>{t.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t.items.map((item, j) => (
                      <Badge key={j} variant="default">{item}</Badge>
                    ))}
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(123,47,190,0.06) 100%)' }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold font-heading mb-5">
              Ready to Build Something <span className="text-gradient">Amazing?</span>
            </h2>
            <p className="text-[#8A8AA0] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Let's talk about your project and how GenzTeck can help bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 transition-all text-base"
            >
              Start a Conversation <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
