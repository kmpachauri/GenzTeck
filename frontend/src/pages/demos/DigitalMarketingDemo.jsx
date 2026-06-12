import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DemoLayout, { useDemo, DemoLink } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Search, 
  Zap, 
  BarChart2, 
  Check, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Star, 
  Clock, 
  Globe, 
  HelpCircle,
  Mail,
  DollarSign,
  Menu as MenuIcon, 
  X 
} from 'lucide-react';

function DMNavbar({ isMobileOpen, setIsMobileOpen }) {
  const { brandName } = useDemo();
  return (
    <nav className="border-b border-[#a855f7]/15 bg-[#070714]/95 backdrop-blur-md sticky top-[68px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">
        <DemoLink to="home" className="font-heading font-extrabold text-2xl tracking-tight text-white flex items-center gap-1.5">
          <TrendingUp size={24} className="text-[#a855f7] animate-pulse" />
          <span className="truncate max-w-[150px] sm:max-w-[250px] md:max-w-none">{brandName}</span>
        </DemoLink>
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#8b98b0]">
          <DemoLink to="home" activeClassName="text-white font-bold" className="hover:text-white transition-colors">Home</DemoLink>
          <DemoLink to="about" activeClassName="text-white font-bold" className="hover:text-white transition-colors">About Us</DemoLink>
          <DemoLink to="services" activeClassName="text-white font-bold" className="hover:text-white transition-colors">Services</DemoLink>
          <DemoLink to="cases" activeClassName="text-white font-bold" className="hover:text-white transition-colors font-semibold">Case Studies</DemoLink>
          <DemoLink to="pricing" activeClassName="text-white font-bold" className="hover:text-white transition-colors">Pricing</DemoLink>
          <DemoLink to="contact" activeClassName="text-white font-bold" className="hover:text-white transition-colors">Contact</DemoLink>
        </div>
        <div className="hidden lg:block">
          <DemoLink to="contact" className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:brightness-110">
            Free Audit
          </DemoLink>
        </div>
        <button className="lg:hidden text-white hover:text-[#a855f7]" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-[#070714] border-b border-[#a855f7]/15 py-6 px-6 space-y-4 flex flex-col">
          <DemoLink to="home" onClick={() => setIsMobileOpen(false)} activeClassName="text-white" className="text-sm font-semibold text-zinc-400">Home</DemoLink>
          <DemoLink to="about" onClick={() => setIsMobileOpen(false)} activeClassName="text-white" className="text-sm font-semibold text-zinc-400">About Us</DemoLink>
          <DemoLink to="services" onClick={() => setIsMobileOpen(false)} activeClassName="text-white" className="text-sm font-semibold text-zinc-400">Services</DemoLink>
          <DemoLink to="cases" onClick={() => setIsMobileOpen(false)} activeClassName="text-white" className="text-sm font-semibold text-zinc-400">Case Studies</DemoLink>
          <DemoLink to="pricing" onClick={() => setIsMobileOpen(false)} activeClassName="text-white" className="text-sm font-semibold text-zinc-400">Pricing</DemoLink>
          <DemoLink to="contact" onClick={() => setIsMobileOpen(false)} activeClassName="text-white" className="text-sm font-semibold text-zinc-400">Contact</DemoLink>
          <DemoLink to="contact" onClick={() => setIsMobileOpen(false)} className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider">
            Free Audit
          </DemoLink>
        </div>
      )}
    </nav>
  );
}

function DMFooter() {
  const { brandName } = useDemo();
  return (
    <footer className="bg-[#04040d] border-t border-[#a855f7]/10 py-16 text-xs text-[#8b98b0] font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
            <TrendingUp size={18} className="text-[#a855f7]" />
            {brandName}
          </span>
          <p className="leading-relaxed text-[#8b98b0]">
            A performance marketing agency engineered to scale search visibility, paid ad metrics, and conversion rates.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Agency Links</h4>
          <ul className="space-y-2 flex flex-col font-semibold">
            <DemoLink to="home" className="hover:text-white transition-colors">Home</DemoLink>
            <DemoLink to="about" className="hover:text-white transition-colors">About Us</DemoLink>
            <DemoLink to="services" className="hover:text-white transition-colors">Services</DemoLink>
            <DemoLink to="contact" className="hover:text-white transition-colors">Free Audit</DemoLink>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Channels</h4>
          <p className="text-[#8b98b0]">SEO Strategy</p>
          <p className="text-[#8b98b0]">Meta & Google Ads</p>
          <p className="text-[#a855f7] font-semibold">Conversion Rate Tuning</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Operational Desk</h4>
          <p className="flex items-center gap-2 text-[#8b98b0]"><MapPin size={12} className="text-[#a855f7]" /> 890 Tech Blvd, Silicon City</p>
          <p className="flex items-center gap-2 text-[#8b98b0]"><Phone size={12} className="text-[#a855f7]" /> +1 (555) 901-2345</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-8 border-t border-[#a855f7]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {brandName}. High-speed digital growth.</p>
        <div className="flex gap-4 text-slate-500">
          <a href="#" className="hover:text-[#a855f7]">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

function DMInnerHeader({ title, subtitle }) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0f0f26] via-[#070714] to-[#070714] border-b border-[#a855f7]/10 text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#a855f7]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tight">{title}</h1>
        <p className="text-[#8b98b0] text-base font-light max-w-xl mx-auto">{subtitle}</p>
        <div className="flex justify-center items-center gap-2 text-xs text-zinc-500 mt-6">
          <DemoLink to="home" className="hover:text-white">Home</DemoLink>
          <span>/</span>
          <span className="text-[#a855f7] capitalize">{title}</span>
        </div>
      </div>
    </section>
  );
}

function DMFAQ({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="py-24 bg-[#070714] border-t border-[#a855f7]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#a855f7] text-xs font-bold tracking-[3px] uppercase">Agency Q&A</span>
          <h2 className="text-3xl font-heading font-black text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#0f0f26]/40 border border-white/5 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 font-heading font-bold text-white flex justify-between items-center hover:bg-[#0f0f26]/85 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-[#a855f7]">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-[#8b98b0] leading-relaxed font-light border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ROAS Calculator Widget
function ROASCalculator() {
  const [adSpend, setAdSpend] = useState('');
  const [revenue, setRevenue] = useState('');
  const [roas, setRoas] = useState(null);

  const calculateROAS = (e) => {
    e.preventDefault();
    if (!adSpend || !revenue) return;
    const score = (revenue / adSpend).toFixed(1);
    setRoas(score);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 bg-[#0f0f26] border border-white/5 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-2xl font-heading font-black text-white uppercase">ROAS & ROI Calculator</h3>
        <p className="text-[#8b98b0] text-sm font-light mt-3 leading-relaxed">
          Verify your attribution return curves instantly. Our media buyers configure targeted ad scaling models based on these targets.
        </p>
      </div>
      <form onSubmit={calculateROAS} className="bg-[#070714] border border-[#a855f7]/20 p-6 rounded-2xl space-y-4 shadow-2xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-500">Monthly Ad Spend ($)</label>
            <input type="number" required value={adSpend} onChange={(e) => setAdSpend(e.target.value)} placeholder="e.g. 5000" className="w-full bg-[#0f0f26] border border-white/5 px-4 py-2.5 rounded-xl text-white focus:outline-none" />
          </div>
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-500">Sales Revenue ($)</label>
            <input type="number" required value={revenue} onChange={(e) => setRevenue(e.target.value)} placeholder="e.g. 20000" className="w-full bg-[#0f0f26] border border-white/5 px-4 py-2.5 rounded-xl text-white focus:outline-none" />
          </div>
        </div>
        <button type="submit" className="w-full bg-[#a855f7] hover:bg-[#a855f7]/90 text-white py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider">Calculate ROAS</button>
        {roas && (
          <div className="mt-4 pt-4 border-t border-white/5 text-center animate-fadeIn">
            <div className="text-xs text-[#8b98b0]">Your ROAS Metric:</div>
            <div className="text-3xl font-black text-[#a855f7] mt-1">{roas}x</div>
          </div>
        )}
      </form>
    </div>
  );
}

// 1. HOME VIEW
function HomeView() {
  const { brandName } = useDemo();
  return (
    <div className="space-y-0 animate-fadeIn">
      {/* 2. Hero Section */}
      <header className="relative py-32 md:py-48 text-center overflow-hidden flex items-center justify-center min-h-[85vh]">
        <div className="absolute inset-0 bg-[#070714]/80 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80')" }} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#070714] via-transparent to-transparent z-15 pointer-events-none" />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-[#a855f7] text-xs font-bold tracking-[5px] uppercase bg-[#a855f7]/10 border border-[#a855f7]/20 px-4 py-1.5 rounded-full inline-block">
            Data-Backed Performance Agency
          </span>
          <h1 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-heading font-black text-white leading-tight uppercase">
            Scale Traffic & ROAS With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#ec4899]">{brandName}</span>
          </h1>
          <p className="text-[#8b98b0] text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Performance search engine optimization, granular creative ad checks, and high-conversion landing page structures.
          </p>

          {/* Interactive Audit Box */}
          <div className="bg-[#0f0f26]/90 backdrop-blur-md border border-[#a855f7]/20 p-4 rounded-3xl max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center shadow-2xl mt-8 text-left text-xs">
            <div className="md:col-span-2">
              <label className="block text-[10px] text-slate-500 uppercase font-black mb-1">Your Website URL</label>
              <input type="url" placeholder="https://yourbrand.com" className="w-full bg-[#070714] border border-[#a855f7]/30 text-white rounded-xl px-3 py-2 text-xs focus:outline-none" />
            </div>
            <DemoLink to="contact" className="w-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_10px_rgba(168,85,247,0.2)] text-center">
              Generate Audit
            </DemoLink>
          </div>
        </div>
      </header>

      {/* 3. Trust Stats */}
      <section className="bg-[#070714] border-y border-[#a855f7]/10 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-[#0f0f26]/55 rounded-2xl border border-white/5 hover:border-[#a855f7]/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white">$24M+</div>
            <div className="text-xs text-[#8b98b0] uppercase tracking-wider mt-2">Client Sales Logged</div>
          </div>
          <div className="p-6 bg-[#0f0f26]/55 rounded-2xl border border-white/5 hover:border-[#a855f7]/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white">4.1x</div>
            <div className="text-xs text-[#8b98b0] uppercase tracking-wider mt-2">Average ROAS Secured</div>
          </div>
          <div className="p-6 bg-[#0f0f26]/55 rounded-2xl border border-white/5 hover:border-[#a855f7]/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white">310%</div>
            <div className="text-xs text-[#8b98b0] uppercase tracking-wider mt-2">Average Organic Lift</div>
          </div>
          <div className="p-6 bg-[#0f0f26]/55 rounded-2xl border border-white/5 hover:border-[#a855f7]/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white">96%</div>
            <div className="text-xs text-[#8b98b0] uppercase tracking-wider mt-2">Monthly Retention</div>
          </div>
        </div>
      </section>

      {/* 4. About Preview */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-[#a855f7] text-xs font-bold tracking-[3px] uppercase flex items-center gap-2">
            <Zap size={14} /> Performance Marketing Thesis
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight uppercase font-heading">
            Scaling Revenue, Optimizing Attributions
          </h2>
          <p className="text-[#8b98b0] leading-relaxed font-light text-sm md:text-base">
            {brandName} works strictly under mathematical verification models. We analyze search trends, construct high-speed landing templates, and coordinate Meta/TikTok ad scripts to keep acquisition costs low.
          </p>
          <DemoLink to="about" className="text-[#a855f7] font-extrabold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 hover:underline group">
            <span>Our Attribution Philosophy</span> 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </DemoLink>
        </div>
        <div className="relative group">
          <div className="absolute -inset-2 rounded-2xl border border-[#a855f7]/10 transform rotate-1 pointer-events-none group-hover:rotate-0 transition-transform duration-300" />
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Dashboard metrics view" className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3] border border-white/5" />
        </div>
      </section>

      {/* 5. Services Preview */}
      <section className="py-24 bg-[#0f0f26]/50 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#a855f7] text-xs font-bold tracking-[3px] uppercase">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase font-heading">Growth Channels</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { title: 'Search Engine Optimization', desc: 'Technical scripts, keyword matrices, and link indexing structures.', icon: <Search className="text-[#a855f7]" /> },
              { title: 'Performance Ad Channels', desc: 'Rapid ad script testing, custom audience modeling on Meta and Google.', icon: <Zap className="text-[#a855f7]" /> },
              { title: 'CRO Funnel Tuning', desc: 'Granular A/B tests on landing layouts, forms, and checkouts.', icon: <BarChart2 className="text-[#a855f7]" /> }
            ].map((s, idx) => (
              <div key={idx} className="bg-[#070714] border border-white/5 p-8 rounded-2xl space-y-4 hover:border-[#a855f7]/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#a855f7]/10 border border-[#a855f7]/20 flex items-center justify-center group-hover:bg-[#a855f7] group-hover:text-white transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-white">{s.title}</h3>
                <p className="text-[#8b98b0] text-xs font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Case Studies Showcase */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#a855f7] text-xs font-bold tracking-[3px] uppercase">Results</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading">Case Studies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { client: 'Veloce Logistics', result: '+320% Lead Vol', desc: 'Overhauled organic search architecture, scaling monthly leads from 800 to 3,400.' },
            { client: 'Thread & Trend', result: '4.8x Blended ROAS', desc: 'Engineered high-converting creative ad testing pipelines, reducing CAC by 35%.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0f0f26] border border-white/5 p-8 rounded-2xl flex flex-col justify-between hover:border-[#a855f7]/20 transition-all duration-300">
              <div className="space-y-4">
                <div className="text-2xl font-heading font-black text-[#a855f7]">{item.result}</div>
                <h4 className="text-white font-bold font-heading text-lg">{item.client}</h4>
                <p className="text-[#8b98b0] text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Industry Specific Widget (ROAS Calculator) */}
      <section className="py-24 bg-[#0f0f26]/30 border-t border-zinc-900">
        <ROASCalculator />
      </section>

      {/* 8. Process (How We Work) */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#a855f7] text-xs font-bold tracking-[3px] uppercase">Strategy</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading">Our Scaling Process</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Data Audit', desc: 'Site speed checks, tracking pixel validations, and search trends.' },
            { step: '02', title: 'Funnel Setup', desc: 'Blueprinting high-speed landing layouts and A/B test splits.' },
            { step: '03', title: 'Ad Launch', desc: 'Drafting high-click ad creative copies and audience configs.' },
            { step: '04', title: 'Attributions Check', desc: 'Calibrating spend towards high-ROAS hooks and search keywords.' }
          ].map((p, i) => (
            <div key={i} className="bg-[#0f0f26]/20 border border-white/5 p-8 rounded-2xl relative space-y-3">
              <span className="text-[#a855f7]/10 text-5xl font-heading font-black block">{p.step}</span>
              <h3 className="font-heading font-bold text-white text-base">{p.title}</h3>
              <p className="text-[#8b98b0] text-xs font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Pricing Retainer Packages */}
      <section className="py-24 bg-[#0f0f26]/40 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#a855f7] text-xs font-bold tracking-[3px] uppercase">Retainers</span>
            <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading">Agency Packages</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Standard Scaling', price: '$2,500', features: ['Technical SEO setup', 'Meta or Google ad checks', 'Monthly attribution audits'] },
              { name: 'Omni Growth Pro', price: '$5,000', features: ['Full omni-channel coverage', '24/7 ad spend monitoring', 'Landing page A/B scripting'], featured: true },
              { name: 'Custom Enterprise', price: 'Custom', features: ['Full custom platform setups', 'Dedicated media buyer team', 'Dynamic creative production'] }
            ].map((pkg, idx) => (
              <div key={idx} className={`bg-[#070714] border rounded-2xl p-8 flex flex-col justify-between relative ${pkg.featured ? 'border-[#a855f7] shadow-xl' : 'border-white/5'}`}>
                {pkg.featured && <span className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full font-sans">Recommended</span>}
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">{pkg.name}</h3>
                  <div className="text-3xl font-heading font-black text-[#a855f7] mt-4 mb-6">{pkg.price}<span className="text-slate-500 text-sm font-light">/mo</span></div>
                  <ul className="space-y-3 mb-8 text-xs text-[#8b98b0] font-light">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2"><Check size={14} className="text-[#a855f7]" /> {f}</li>
                    ))}
                  </ul>
                </div>
                <DemoLink to="pricing" className={`w-full py-3 rounded-xl font-bold uppercase text-xs text-center tracking-wider transition-all duration-300 ${pkg.featured ? 'bg-[#a855f7] text-white shadow-[0_0_10px_rgba(168,85,247,0.2)]' : 'bg-[#0f0f26] hover:bg-[#0f0f26]/85 text-white'}`}>
                  Review Retainer
                </DemoLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { name: 'Sarah Miller', quote: `Syn Digital doubled our lead pipeline inside 60 days. The landing page conversions rose from 2% to 5.4% post A/B checks.`, role: 'Logistics Director' },
            { name: 'Michael Chen', quote: `Remarkable ROAS mapping. Their attribution checks allowed us to safely scale Meta spending to $50k monthly while preserving ROI.`, role: 'E-commerce Founder' },
            { name: 'Sophia Loren', quote: `Deep technical SEO reports. Organic traffic has grown by 180% and keyword ranks have stabilized inside top 3 slot logs.`, role: 'Marketing Manager' }
          ].map((t, idx) => (
            <div key={idx} className="bg-[#0f0f26]/40 border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="flex text-[#a855f7]">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[#8b98b0] text-sm italic font-light leading-relaxed">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-white text-sm">{t.name}</h4>
                <span className="text-xs text-slate-550">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ Section */}
      <DMFAQ 
        faqs={[
          { q: 'What attribution model do you use?', a: 'We employ multi-touch attribution models backed by UTM logs and platform pixel diagnostics to map ROAS precisely.' },
          { q: 'Is ad spend included in retainer fees?', a: 'Ad spend is billed directly by Google and Meta to client accounts. Retainers cover agency setup and optimizations.' },
          { q: 'Do you require long-term retainers?', a: 'We work under flexible monthly rolling contracts post the initial 90-day setup phase.' }
        ]}
      />

      {/* 12. Strong CTA */}
      <section className="py-24 relative overflow-hidden bg-[#070714] border-t border-[#a855f7]/10 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Request Your Performance Audit</h2>
          <p className="text-[#8b98b0] max-w-xl mx-auto font-light font-sans">Book a diagnostic walkthrough session. We analyze search ranks, page speeds, and ad accounts.</p>
          <div className="pt-4">
            <DemoLink to="contact" className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:brightness-110">
              Get Free Growth Audit
            </DemoLink>
          </div>
        </div>
      </section>
    </div>
  );
}

// 2. ABOUT VIEW
function AboutView() {
  const { brandName } = useDemo();
  return (
    <div className="space-y-0 animate-fadeIn bg-[#070714]">
      <DMInnerHeader title="About Us" subtitle={`Learn how ${brandName} structures performance advertising pipelines.`} />
      
      {/* 1. Performance Thesis */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-[#a855f7] text-xs font-bold tracking-[3px] uppercase">The Vision</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase">Scaling Revenue, Optimizing Attributions</h2>
          <p className="text-[#8b98b0] leading-relaxed font-light text-sm md:text-base">
            {brandName} works strictly under mathematical verification models. We analyze search trends, construct high-speed landing templates, and coordinate Meta/TikTok ad scripts to keep acquisition costs low.
          </p>
          <p className="text-[#8b98b0] leading-relaxed font-light text-sm md:text-base">
            Our team comprises senior search strategists, copywriters, and media buyers who align attribution networks to match client scale requirements.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Attributions check" className="rounded-2xl border border-slate-800 shadow-2xl w-full object-cover aspect-[4/3]" />
        </div>
      </section>

      {/* 2. Core Pillars */}
      <section className="py-24 bg-[#0f0f26] border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#a855f7] text-xs font-bold tracking-[3px] uppercase">Standards</span>
            <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading font-light font-heading">Our Core Pillars</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Granular UTM Tracking', desc: 'Attribution pipelines protecting marketing spend configurations.' },
              { title: 'Conversion-Speed Focus', desc: 'Landing templates engineered under 1.5s load limits to raise conversions.' },
              { title: 'A/B Creative testing', desc: 'Weekly ad copy check sequences to lower customer acquisition costs.' }
            ].map((p, i) => (
              <div key={i} className="bg-[#070714] border border-white/5 p-8 rounded-2xl space-y-3">
                <h3 className="text-lg font-bold font-heading text-white font-heading">{p.title}</h3>
                <p className="text-[#8b98b0] text-xs font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Team Showcase */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#a855f7] text-xs font-bold tracking-[3px] uppercase">Mentors</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading font-light font-heading">Growth Advisors</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" alt="Advisor 1" className="rounded-2xl object-cover w-full aspect-square border border-white/5" />
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80" alt="Advisor 2" className="rounded-2xl object-cover w-full aspect-square border border-white/5" />
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80" alt="Advisor 3" className="rounded-2xl object-cover w-full aspect-square border border-white/5" />
        </div>
      </section>

      {/* 4. Credentials */}
      <section className="py-24 bg-[#0f0f26] border-t border-zinc-905 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-6">
          <span className="text-[#a855f7] text-xs font-bold tracking-[3px] uppercase">Accreditations</span>
          <h2 className="text-2xl font-heading font-bold text-white uppercase font-heading font-light">Certified Growth Partners</h2>
          <p className="text-[#8b98b0] text-xs leading-relaxed max-w-xl mx-auto font-light font-sans">
            Sync Digital is a Google Premier Partner and badged Meta Business Partner. We audit spend configurations under strict criteria.
          </p>
        </div>
      </section>

      {/* 5. About FAQ */}
      <DMFAQ 
        faqs={[
          { q: 'What spend ranges do you manage?', a: 'We manage monthly ad campaigns starting at $10k scaling up to $250k across search and social.' },
          { q: 'Do you create ad videos?', a: 'Yes. Our creative team produces high-speed script copies, hook variations, and graphic overlays.' }
        ]}
      />
    </div>
  );
}

// 3. SERVICES VIEW
function ServicesView() {
  return (
    <div className="space-y-0 animate-fadeIn bg-[#070714]">
      <DMInnerHeader title="Growth Channels" subtitle="Explore performance marketing capabilities." />

      {/* 1. Capabilities Grid */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Search Engine Optimization', desc: 'Technical scripts, keyword matrices, and link indexing structures.', icon: <Search size={18} /> },
          { title: 'Performance Ad Channels', desc: 'Paid social setups, search bidding, and custom attribution models.', icon: <Zap size={18} /> },
          { title: 'CRO Funnel Tuning', desc: 'Granular A/B tests on landing layouts, forms, and checkouts.', icon: <BarChart2 size={18} /> }
        ].map((s, i) => (
          <div key={i} className="bg-[#0f0f26] border border-white/5 p-8 rounded-2xl space-y-4">
            <div className="w-12 h-12 bg-[#a855f7]/10 border border-[#a855f7]/20 text-[#a855f7] rounded-lg flex items-center justify-center">
              {s.icon}
            </div>
            <h3 className="text-xl font-heading font-bold text-white font-heading">{s.title}</h3>
            <p className="text-[#8b98b0] text-sm font-light leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </section>

      {/* 2. SEO vs Paid matrix */}
      <section className="py-24 bg-[#0f0f26]/30 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-4">
          <h3 className="text-2xl font-heading font-bold text-white uppercase font-heading font-light">Organic vs Paid channels</h3>
          <p className="text-[#8b98b0] text-sm font-light max-w-md mx-auto">
            We balance search engine optimization for compounding long-term returns with paid ads for instant volume calibration.
          </p>
        </div>
      </section>

      {/* 3. Funnel optimization */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-zinc-900 text-center space-y-4">
        <h3 className="text-xl font-heading font-bold text-white uppercase font-heading">Funnel Optimization Steps</h3>
        <p className="text-[#8b98b0] text-xs leading-relaxed max-w-xl mx-auto font-light">
          We test checkout form fields, value propositions, and page speed scripts to double conversions without scaling ad budgets.
        </p>
      </section>

      {/* 4. Services FAQ */}
      <DMFAQ 
        faqs={[
          { q: 'How long does SEO take to yield leads?', a: 'Technical ranking adjustments compounding over 90 to 120 days typically yield solid organic lead lifts.' },
          { q: 'Do you optimize Shopify checkouts?', a: 'Yes. We customize liquid script blocks and checkout flows to raise shopping cart completions.' }
        ]}
      />
    </div>
  );
}

// 4. CASES VIEW
function CasesView() {
  const caseStudies = [
    { client: 'Veloce Logistics', result: '+320% Lead Vol', desc: 'Overhauled organic search architecture, scaling monthly leads from 800 to 3,400.' },
    { client: 'Thread & Trend', result: '4.8x Blended ROAS', desc: 'Engineered high-converting creative ad testing pipelines, reducing CAC by 35%.' }
  ];

  return (
    <div className="space-y-0 animate-fadeIn bg-[#070714]">
      <DMInnerHeader title="ROI Case Studies" subtitle="Proven growth metrics we have delivered." />

      {/* 1. Cases Grid */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((cs, idx) => (
          <div key={idx} className="bg-[#0f0f26] border border-white/5 p-8 rounded-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-2xl font-heading font-black text-[#a855f7]">{cs.result}</div>
              <h4 className="text-white font-bold font-heading text-lg">{cs.client}</h4>
              <p className="text-[#8b98b0] text-xs font-light leading-relaxed">{cs.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 2. Interactive Calculator */}
      <section className="py-24 bg-[#0f0f26]/30 border-t border-zinc-900">
        <ROASCalculator />
      </section>

      {/* 3. Case Studies FAQ */}
      <DMFAQ 
        faqs={[
          { q: 'Can we contact former case clients?', a: 'Under privacy rules, client names are coded, but we can arrange coordinator reviews under NDAs.' },
          { q: 'What is average ROAS lift?', a: 'Most e-commerce accounts see a 40% ROAS lift inside the initial 90 days of pixel and checkout tuning.' }
        ]}
      />
    </div>
  );
}

// 5. PRICING VIEW
function PricingView() {
  return (
    <div className="space-y-0 animate-fadeIn bg-[#070714]">
      <DMInnerHeader title="Pricing Packages" subtitle="Clear, ROI-aligned agency retainer structures." />

      {/* 1. Pricing Cards */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { name: 'Standard Scaling', price: '$2,500', items: ['Dedicated SEO optimization', 'Meta or Google ad coordination', 'Monthly attribution audits'] },
          { name: 'Omni Growth Pro', price: '$5,000', items: ['Full omni-channel coverage', '24/7 ad spend monitoring', 'Landing page A/B scripting'], featured: true }
        ].map((pkg, idx) => (
          <div key={idx} className={`bg-[#0f0f26] border rounded-2xl p-8 flex flex-col justify-between ${pkg.featured ? 'border-[#a855f7]' : 'border-white/5'}`}>
            <div>
              <h3 className="text-lg font-bold font-heading text-white">{pkg.name}</h3>
              <div className="text-3xl font-heading font-black text-[#a855f7] mt-4 mb-6">{pkg.price}<span className="text-zinc-500 text-sm">/mo</span></div>
              <ul className="space-y-3 mb-8 text-xs text-[#8b98b0]">
                {pkg.items.map((f, i) => (
                  <li key={i} className="flex items-center gap-2"><Check size={14} className="text-[#a855f7]" /> {f}</li>
                ))}
              </ul>
            </div>
            <DemoLink to="contact" className="w-full bg-[#a855f7] text-white py-3 rounded-xl font-bold uppercase text-xs text-center block transition-all">Sign retainer</DemoLink>
          </div>
        ))}
      </section>

      {/* 2. Retainer comparison matrix */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-[#a855f7]/10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#a855f7] text-xs font-bold tracking-[3px] uppercase">Details Matrix</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading font-light font-heading">Retainer Features</h2>
        </div>
        <div className="overflow-x-auto border border-white/5 rounded-2xl bg-[#0f0f26]">
          <table className="w-full text-left text-[#8b98b0] text-xs md:text-sm">
            <thead className="bg-[#0f0f26] text-white font-heading font-bold uppercase tracking-wider text-[10px] border-b border-white/5">
              <tr>
                <th className="p-6">Feature</th>
                <th className="p-6">Standard</th>
                <th className="p-6">Pro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#070714]">
              <tr>
                <td className="p-6 font-bold">Attribution verification</td>
                <td className="p-6 text-[#a855f7]">✓</td>
                <td className="p-6 text-[#a855f7]">✓</td>
              </tr>
              <tr>
                <td className="p-6 font-bold">Landing page A/B tests</td>
                <td className="p-6 text-zinc-550">−</td>
                <td className="p-6 text-[#a855f7]">✓</td>
              </tr>
              <tr>
                <td className="p-6 font-bold">Dedicated media buyer</td>
                <td className="p-6 text-zinc-550">−</td>
                <td className="p-6 text-[#a855f7]">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Pricing FAQ */}
      <DMFAQ 
        faqs={[
          { q: 'Is there an onboarding setup fee?', a: 'No onboarding fees. Retainer cycles start on active contract signature dates.' },
          { q: 'What happens if we pause spending?', a: 'Agency retainers are set for optimization labor. If spends pause, labor is directed towards technical SEO updates.' }
        ]}
      />
    </div>
  );
}

// 6. CONTACT VIEW
function ContactView() {
  const { brandName } = useDemo();
  const [form, setForm] = useState({ name: '', website: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', website: '' });
  };

  return (
    <div className="space-y-0 animate-fadeIn bg-[#070714]">
      <DMInnerHeader title="Request Audit" subtitle={`Book a private search audit session with ${brandName} partners.`} />
      
      {/* 1. Direct coordinates */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase font-heading">Our HQ</h3>
            <p className="text-[#8b98b0] font-light flex items-center gap-2"><MapPin size={16} className="text-[#a855f7]" /> 890 Tech Blvd, Silicon City</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase font-heading">Audit Desk</h3>
            <p className="text-[#8b98b0] font-light flex items-center gap-2"><Phone size={16} className="text-[#a855f7]" /> +1 (555) 901-2345</p>
            <p className="text-[#8b98b0] font-light mt-2">Email: audit@{brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Lounge hours</h3>
            <div className="text-xs text-slate-400 space-y-1 font-light font-sans">
              <p>Monday - Friday: 09:00 AM - 06:00 PM</p>
              <p>Virtual consults: 24/7 client hotline logs</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0f0f26] p-8 rounded-2xl border border-white/5">
          <h3 className="font-heading font-bold text-xl text-white mb-6 uppercase">Send a Message</h3>
          {sent ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-center text-xs font-semibold">
              Thank you! Audit request logged. Growth report will be sent within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#8b98b0] mb-1.5 uppercase font-heading">Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-[#070714] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#8b98b0] mb-1.5 uppercase font-heading">Website URL</label>
                <input type="url" required value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className="w-full bg-[#070714] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white py-3 rounded-xl font-bold uppercase text-xs tracking-wider">
                Generate Growth Audit
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 2. Mock map */}
      <section className="py-24 bg-[#0f0f26]/30 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-[#0f0f26] border border-white/5 rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-heading font-bold text-white uppercase font-heading">Our HQ Location</h4>
              <p className="text-[#8b98b0] text-xs max-w-md leading-relaxed font-light font-sans">
                Located in the technology district. Underground valet parking is provided at our executive gates.
              </p>
            </div>
            <div className="w-full md:w-80 h-48 rounded-2xl bg-[#070714] border border-white/5 relative flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=500&q=80')" }} />
              <div className="relative z-10 text-center space-y-2 font-sans">
                <MapPin size={24} className="text-[#a855f7] mx-auto" />
                <span className="text-[10px] text-zinc-550 uppercase tracking-widest block">37.7749° N, 122.4194° W</span>
                <span className="text-xs text-white font-bold font-heading">Sync Digital HQ Towers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function DigitalMarketingDemo() {
  const { subpage: urlSubpage } = useParams();
  const subpage = urlSubpage || 'home';
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const renderSubpage = () => {
    switch (subpage) {
      case 'about': return <AboutView />;
      case 'services': return <ServicesView />;
      case 'cases': return <CasesView />;
      case 'pricing': return <PricingView />;
      case 'contact': return <ContactView />;
      case 'home':
      default: return <HomeView />;
    }
  };

  return (
    <DemoLayout defaultBrand="Sync Digital Group" slug="digital-marketing" currentSubpage={subpage}>
      <div className="bg-[#070714] text-[#a9b2c3] min-h-screen font-sans">
        <DMNavbar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
        <main>{renderSubpage()}</main>
        <DMFooter />
      </div>
    </DemoLayout>
  );
}
