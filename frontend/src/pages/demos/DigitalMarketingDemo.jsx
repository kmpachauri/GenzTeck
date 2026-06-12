import { useState } from 'react';
import DemoLayout, { useDemo } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, TrendingUp, Search, MessageSquare, Zap, BarChart2, Star } from 'lucide-react';

function DigitalMarketingContent() {
  const { brandName } = useDemo();
  const [audit, setAudit] = useState({ name: '', email: '', website: '' });
  const [auditStatus, setAuditStatus] = useState('idle');

  const caseStudies = [
    { client: 'Veloce Logistics Corp', result: '+320% Lead Volume', service: 'SEO & Content Funnel', desc: 'Overhauled organic search architecture and built a targeted informational hub, scaling monthly leads from 800 to 3,400.' },
    { client: 'Thread & Trend Apparel', result: '4.8x Blended ROAS', service: 'Paid Social Performance', desc: 'Engineered high-converting creative ad testing pipelines on Meta and TikTok, reducing customer acquisition costs by 35%.' },
    { client: 'Apex Biotech Solutions', result: '-42% Demo Acquisition Cost', service: 'Search Ads (PPC)', desc: 'Refined high-intent search query bids and optimized landing pages, yielding a massive surge in enterprise demo bookings.' }
  ];

  const handleAudit = (e) => {
    e.preventDefault();
    setAuditStatus('loading');
    setTimeout(() => {
      setAuditStatus('success');
    }, 1000);
  };

  return (
    <div className="bg-[#070714] text-[#a9b2c3] min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-[#a855f7]/15 bg-[#070714]/95 backdrop-blur-md sticky top-[68px] z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
            <TrendingUp size={20} className="text-[#a855f7]" />
            {brandName}
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#8b98b0]">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#cases" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#process" className="hover:text-white transition-colors">Our Process</a>
            <a href="#audit" className="hover:text-white transition-colors font-semibold">Free Audit</a>
          </div>
          <a
            href="#audit"
            className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white px-4.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
          >
            Request Audit
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-28 md:py-36 text-center overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[#070714]/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-[#a855f7] text-xs font-bold tracking-[5px] uppercase block">
            Hyper Growth Partner
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-tight">
            Scale Revenue & Customers With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#ec4899]">{brandName}</span>
          </h1>
          <p className="text-[#8b98b0] text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Data-backed performance marketing, mathematical search engine optimization, and conversion-optimized funnels designed for scaling brands.
          </p>
          <div className="pt-4">
            <a
              href="#audit"
              className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              Get Free Growth Audit
            </a>
          </div>
        </div>
      </header>

      {/* Stats Banner */}
      <section className="bg-[#0f0f26] border-y border-[#a855f7]/10 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-heading font-black text-white">$45M+</div>
            <div className="text-xs text-[#8b98b0] uppercase tracking-wider mt-1">Client Revenue Generated</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-black text-white">3.8x</div>
            <div className="text-xs text-[#8b98b0] uppercase tracking-wider mt-1">Average ROAS Secured</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-black text-white">412%</div>
            <div className="text-xs text-[#8b98b0] uppercase tracking-wider mt-1">Average Organic Traffic Lift</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-black text-white">96%</div>
            <div className="text-xs text-[#8b98b0] uppercase tracking-wider mt-1">Monthly Client Retention</div>
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="py-24 max-w-6xl mx-auto px-6" id="services">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#a855f7] text-xs font-bold tracking-[3px] uppercase">
            Services
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">
            Data-Driven Scaling Frameworks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Search Engine Optimization', desc: 'Advanced technical crawls, semantic content generation, and authority backlinks scaling organic leads.', icon: <Search size={18} /> },
            { title: 'Performance Ad Channels', desc: 'High-frequency creative testing across Meta, TikTok, and Google Ads to reduce CAC.', icon: <Zap size={18} /> },
            { title: 'CRO & Funnel Engineering', desc: 'Optimizing landing pages, checkout scripts, and UI metrics to turn traffic into raw customers.', icon: <BarChart2 size={18} /> }
          ].map((s, i) => (
            <div key={i} className="bg-[#0f0f26]/60 border border-white/5 p-8 rounded-2xl space-y-4 hover:border-[#a855f7]/25 transition-all">
              <div className="w-12 h-12 bg-[#a855f7]/10 border border-[#a855f7]/20 text-[#a855f7] rounded-lg flex items-center justify-center">
                {s.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white">{s.title}</h3>
              <p className="text-[#8b98b0] text-sm font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-[#0f0f26]/30 border-y border-[#0f0f26]" id="cases">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#a855f7] text-xs font-bold tracking-[3px] uppercase">
              ROI Case Studies
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Proven Results We Have Delivered
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-[#0f0f26] border border-white/5 p-8 rounded-2xl flex flex-col justify-between hover:border-[#a855f7]/15 transition-all">
                <div className="space-y-4">
                  <div className="text-2xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#ec4899]">
                    {cs.result}
                  </div>
                  <h4 className="text-white font-bold font-heading text-lg">{cs.client}</h4>
                  <p className="text-xs text-[#a855f7] font-semibold">{cs.service}</p>
                  <p className="text-[#8b98b0] text-xs font-light leading-relaxed">{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section className="py-24 max-w-6xl mx-auto px-6" id="process">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#a855f7] text-xs font-bold tracking-[3px] uppercase">
            Framework
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">
            Our 4-Step Scaling Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Deep Data Audit', desc: 'Analyze attribution pipelines, pixel codes, search health, and competitive weaknesses.' },
            { step: '02', title: 'Funnel Blueprint', desc: 'Design landing pages, creative assets, bid profiles, and keywords mappings.' },
            { step: '03', title: 'Execution Launch', desc: 'Launch multi-channel performance ad tests and search index indexing optimizations.' },
            { step: '04', title: 'Optimize & Scale', desc: 'Consolidate budget to high-performing variables, increasing ROI monthly.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0f0f26]/60 border border-white/5 p-6 rounded-2xl space-y-3 relative">
              <span className="text-[#a855f7]/40 text-4xl font-heading font-black block">{item.step}</span>
              <h3 className="font-heading font-bold text-white text-base">{item.title}</h3>
              <p className="text-[#8b98b0] text-xs font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Free Audit Form */}
      <section className="py-24 max-w-4xl mx-auto px-6" id="audit">
        <div className="bg-[#0f0f26] rounded-3xl border border-[#a855f7]/20 p-8 md:p-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[#a855f7] text-xs font-bold tracking-[3px] uppercase">
              Consultation
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Request Your Free Revenue Audit
            </h2>
            <p className="text-[#8b98b0] text-sm font-light mt-3">
              Submit details. We will conduct a comprehensive audit on your search, pixels, and traffic funnel at no charge.
            </p>
          </div>

          {auditStatus === 'success' ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/30 flex items-center justify-center mx-auto mb-5 text-[#a855f7] text-3xl">
                ✓
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Audit Requested!</h3>
              <p className="text-[#8b98b0] mt-2 max-w-sm mx-auto text-sm leading-relaxed">
                Thank you, {audit.name}. We will review the search and funnel data for {audit.website} and email you within 24 hours.
              </p>
              <button
                onClick={() => { setAuditStatus('idle'); setAudit({ name: '', email: '', website: '' }); }}
                className="mt-6 text-[#a855f7] text-xs uppercase tracking-wider font-bold hover:underline"
              >
                Inquire For Another Brand
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleAudit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#8b98b0] uppercase tracking-wider mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={audit.name}
                  onChange={(e) => setAudit(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. Richard Hendriks"
                  className="w-full bg-[#070714] border border-white/5 rounded-xl px-4 py-3 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-[#a855f7]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#8b98b0] uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={audit.email}
                  onChange={(e) => setAudit(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="e.g. rich@piedpiper.com"
                  className="w-full bg-[#070714] border border-white/5 rounded-xl px-4 py-3 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-[#a855f7]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#8b98b0] uppercase tracking-wider mb-2">Website URL</label>
                <input
                  type="url"
                  required
                  value={audit.website}
                  onChange={(e) => setAudit(prev => ({ ...prev, website: e.target.value }))}
                  placeholder="e.g. https://piedpiper.com"
                  className="w-full bg-[#070714] border border-white/5 rounded-xl px-4 py-3 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-[#a855f7]"
                />
              </div>
              <div className="md:col-span-3 mt-4">
                <button
                  type="submit"
                  disabled={auditStatus === 'loading'}
                  className="w-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-all"
                >
                  {auditStatus === 'loading' ? 'Analyzing Attributions...' : 'Generate Audit Report'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#04040d] border-t border-[#a855f7]/10 py-12 text-center text-xs text-[#8b98b0]">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <div className="font-heading font-bold text-base text-[#a855f7]">📈 {brandName}</div>
          <p>© {new Date().getFullYear()} {brandName}. High performance digital growth.</p>
        </div>
      </footer>
    </div>
  );
}

export default function DigitalMarketingDemo() {
  return (
    <DemoLayout defaultBrand="Sync Digital Group" slug="digital-marketing">
      <DigitalMarketingContent />
    </DemoLayout>
  );
}
