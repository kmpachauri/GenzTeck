import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/ui/Motion';

export default function LegalLayout({ title, effectiveDate, children }) {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070711 0%, #0D0D1E 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,47,190,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-purple-400 text-xs font-semibold tracking-[3px] uppercase mb-5">
            <span className="w-6 h-px bg-purple-400" />Legal<span className="w-6 h-px bg-purple-400" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-heading leading-[1.1] mb-4">
            {title}
          </motion.h1>
          {effectiveDate && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-[#8A8AA0] text-sm">
              Effective Date: {effectiveDate}
            </motion.p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-[860px] mx-auto px-6">
          <ScrollReveal>
            <div className="glass rounded-3xl border border-white/[0.08] p-8 md:p-12 prose-legal">
              <style>{`
                .prose-legal h2 {
                  font-family: var(--font-heading);
                  font-size: 1.25rem;
                  font-weight: 700;
                  color: white;
                  margin-top: 2.5rem;
                  margin-bottom: 1rem;
                  padding-bottom: 0.5rem;
                  border-bottom: 1px solid rgba(255,255,255,0.08);
                }
                .prose-legal h3 {
                  font-family: var(--font-heading);
                  font-size: 1rem;
                  font-weight: 600;
                  color: rgba(200,200,220,1);
                  margin-top: 1.5rem;
                  margin-bottom: 0.5rem;
                }
                .prose-legal p { color: #8A8AA0; line-height: 1.8; margin-bottom: 1rem; font-size: 0.95rem; }
                .prose-legal ul { color: #8A8AA0; font-size: 0.95rem; padding-left: 1.5rem; margin-bottom: 1rem; }
                .prose-legal li { margin-bottom: 0.5rem; line-height: 1.7; }
                .prose-legal a { color: #00D4FF; text-decoration: none; }
                .prose-legal a:hover { text-decoration: underline; }
                .prose-legal strong { color: rgba(200,200,220,1); font-weight: 600; }
              `}</style>
              {children}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
