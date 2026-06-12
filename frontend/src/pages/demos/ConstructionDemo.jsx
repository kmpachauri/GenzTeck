import { useState } from 'react';
import DemoLayout, { useDemo } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { HardHat, Compass, FileText, CheckCircle, Flame, Hammer, Eye } from 'lucide-react';

function ConstructionContent() {
  const { brandName } = useDemo();
  const [filterType, setFilterType] = useState('all');
  const [quote, setQuote] = useState({ name: '', budget: '$50,000 - $100,000', details: '', phone: '' });
  const [quoteStatus, setQuoteStatus] = useState('idle');

  const projects = [
    { title: 'The Concrete Canopy Villa', category: 'residential', loc: 'Los Angeles, CA', year: '2025', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
    { title: 'Nexus Headquarters Tower', category: 'commercial', loc: 'Chicago, IL', year: '2024', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
    { title: 'Victorian Loft Restoration', category: 'renovation', loc: 'London, UK', year: '2026', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80' }
  ];

  const filtered = filterType === 'all' ? projects : projects.filter(p => p.category === filterType);

  const handleQuote = (e) => {
    e.preventDefault();
    setQuoteStatus('loading');
    setTimeout(() => {
      setQuoteStatus('success');
    }, 1000);
  };

  return (
    <div className="bg-[#111116] text-[#e2e2e9] min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-[#f35c24]/15 bg-[#111116]/95 backdrop-blur-md sticky top-[68px] z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-heading font-extrabold text-xl tracking-tight text-[#f35c24] flex items-center gap-1.5">
            <HardHat size={20} className="text-[#f35c24]" />
            {brandName}
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#a6a6b5]">
            <a href="#services" className="hover:text-[#f35c24] transition-colors">Capabilities</a>
            <a href="#projects" className="hover:text-[#f35c24] transition-colors">Portfolio</a>
            <a href="#transformations" className="hover:text-[#f35c24] transition-colors font-semibold">Renovations</a>
            <a href="#quote" className="hover:text-[#f35c24] transition-colors">Quote Request</a>
          </div>
          <a
            href="#quote"
            className="bg-[#f35c24] hover:bg-[#d64713] text-white px-4.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
          >
            Get Estimate
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-28 md:py-36 text-center overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-[#f35c24] text-xs font-bold tracking-[5px] uppercase block">
            Solid Architecture & interiors
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight uppercase">
            Engineering Marvels Crafted by <span className="text-[#f35c24]">{brandName}</span>
          </h1>
          <p className="text-[#a6a6b5] text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Delivering structural integrity, stunning interior styling, material sourcing excellence, and sustainable designs globally.
          </p>
          <div className="pt-4">
            <a
              href="#projects"
              className="bg-[#f35c24] hover:bg-[#d64713] text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block shadow-[0_0_20px_rgba(243,92,36,0.3)]"
            >
              Explore Portfolio
            </a>
          </div>
        </div>
      </header>

      {/* Stats Banner */}
      <section className="bg-[#181822] border-y border-[#f35c24]/10 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-heading font-black text-[#f35c24]">180+</div>
            <div className="text-xs text-[#a6a6b5] uppercase tracking-wider mt-1">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-black text-[#f35c24]">100%</div>
            <div className="text-xs text-[#a6a6b5] uppercase tracking-wider mt-1">Safety Record</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-black text-[#f35c24]">25 Yrs</div>
            <div className="text-xs text-[#a6a6b5] uppercase tracking-wider mt-1">Structural Warranty</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-black text-[#f35c24]">15+</div>
            <div className="text-xs text-[#a6a6b5] uppercase tracking-wider mt-1">Global Design Awards</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 max-w-6xl mx-auto px-6" id="services">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#f35c24] text-xs font-bold tracking-[3px] uppercase">
            Capabilities
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">
            Our Building & Design Scope
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Architectural Blueprinting', desc: 'Custom design planning, zoning approvals, structural drafts, and 3D modeling.', icon: <Compass size={20} /> },
            { title: 'General Construction Contracting', desc: 'Project management, excavation, concrete casting, masonry, and safety reviews.', icon: <Hammer size={20} /> },
            { title: 'Interior & Material Curation', desc: 'Bespoke fit-outs, Italian marble sourcing, custom timber works, lighting plans.', icon: <Eye size={20} /> }
          ].map((s, i) => (
            <div key={i} className="bg-[#181822] border border-[#f35c24]/10 p-8 rounded-2xl space-y-4 hover:border-[#f35c24]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#f35c24]/10 border border-[#f35c24]/20 text-[#f35c24] rounded-lg flex items-center justify-center">
                {s.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white">{s.title}</h3>
              <p className="text-[#a6a6b5] text-sm font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-24 bg-[#181822]/40 border-y border-[#181822]" id="projects">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-[#f35c24] text-xs font-bold tracking-[3px] uppercase">
                Case Studies
              </span>
              <h2 className="text-3xl font-heading font-bold text-white mt-1">
                Explore Selected Projects
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['all', 'residential', 'commercial', 'renovation'].map((c) => (
                <button
                  key={c}
                  onClick={() => setFilterType(c)}
                  className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all ${
                    filterType === c
                      ? 'bg-[#f35c24] text-white'
                      : 'bg-[#181822] text-[#a6a6b5] border border-white/5 hover:border-white/10'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <div key={i} className="bg-[#181822]/50 border border-white/5 rounded-2xl overflow-hidden group hover:border-[#f35c24]/20 transition-all duration-300">
                <div className="h-56 overflow-hidden relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-[#f35c24] border border-[#f35c24]/20">
                    {p.category}
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold font-heading text-white">{p.title}</h3>
                  <div className="flex justify-between text-xs text-[#a6a6b5] font-light">
                    <span>Loc: {p.loc}</span>
                    <span>Year: {p.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renovation Before/After */}
      <section className="py-24 max-w-6xl mx-auto px-6" id="transformations">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#f35c24] text-xs font-bold tracking-[3px] uppercase">
            Renovations
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">
            Before & After Renovation Showcases
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Warehouse to Luxury Apartment conversion', before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80', after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80' }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#181822] border border-white/5 p-6 rounded-2xl space-y-4 md:col-span-2">
              <h3 className="text-base font-bold font-heading text-white text-center mb-2">{item.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-black/60 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-red-400 border border-red-500/20">Initial Structure</span>
                  <img src={item.before} alt="Before" className="rounded-xl w-full aspect-[16/10] object-cover" />
                </div>
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-[#f35c24] text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Completed Fit-out</span>
                  <img src={item.after} alt="After" className="rounded-xl w-full aspect-[16/10] object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Estimate Request */}
      <section className="py-24 max-w-4xl mx-auto px-6" id="quote">
        <div className="bg-[#181822] rounded-3xl border border-[#f35c24]/20 p-8 md:p-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[#f35c24] text-xs font-bold tracking-[3px] uppercase">
              Get Quote
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Estimate Your Building / Design Project
            </h2>
            <p className="text-[#a6a6b5] text-sm font-light mt-3">
              Describe your project dimensions and budget threshold. Our estimators will schedule a structural call within 24 hours.
            </p>
          </div>

          {quoteStatus === 'success' ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#f35c24]/10 border border-[#f35c24]/30 flex items-center justify-center mx-auto mb-5 text-[#f35c24] text-3xl">
                ✓
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Quote Request Received!</h3>
              <p className="text-[#a6a6b5] mt-2 max-w-sm mx-auto text-sm leading-relaxed">
                Thank you, {quote.name}. We have logged your request for a project budget of {quote.budget}.
              </p>
              <button
                onClick={() => { setQuoteStatus('idle'); setQuote({ name: '', budget: '$50,000 - $100,000', details: '', phone: '' }); }}
                className="mt-6 text-[#f35c24] text-xs uppercase tracking-wider font-bold hover:underline"
              >
                Inquire For Another Build
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleQuote} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#a6a6b5] uppercase tracking-wider mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={quote.name}
                  onChange={(e) => setQuote(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. Samuel Henderson"
                  className="w-full bg-[#111116] border border-white/5 rounded-xl px-4 py-3 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-[#f35c24]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#a6a6b5] uppercase tracking-wider mb-2">Phone Number</label>
                <input
                  type="text"
                  required
                  value={quote.phone}
                  onChange={(e) => setQuote(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="e.g. +1 (555) 987-6543"
                  className="w-full bg-[#111116] border border-white/5 rounded-xl px-4 py-3 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-[#f35c24]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#a6a6b5] uppercase tracking-wider mb-2">Select Project Budget Tier</label>
                <select
                  value={quote.budget}
                  onChange={(e) => setQuote(prev => ({ ...prev, budget: e.target.value }))}
                  className="w-full bg-[#111116] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f35c24] text-sm"
                >
                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                  <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                  <option value="$250,000 - $500,000">$250,000 - $500,000</option>
                  <option value="$500,000+">$500,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#a6a6b5] uppercase tracking-wider mb-2">Project Brief Details</label>
                <input
                  type="text"
                  required
                  value={quote.details}
                  onChange={(e) => setQuote(prev => ({ ...prev, details: e.target.value }))}
                  placeholder="e.g. Full residential kitchen & living room fit-out"
                  className="w-full bg-[#111116] border border-white/5 rounded-xl px-4 py-3 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-[#f35c24]"
                />
              </div>
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={quoteStatus === 'loading'}
                  className="w-full bg-[#f35c24] hover:bg-[#d64713] text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-all"
                >
                  {quoteStatus === 'loading' ? 'Evaluating Specifications...' : 'Submit Quote Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b0b0e] border-t border-[#f35c24]/10 py-12 text-center text-xs text-[#a6a6b5]">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <div className="font-heading font-bold text-base text-[#f35c24]">🏗️ {brandName}</div>
          <p>© {new Date().getFullYear()} {brandName}. Architectural & Interior craftsmanship.</p>
        </div>
      </footer>
    </div>
  );
}

export default function ConstructionDemo() {
  return (
    <DemoLayout defaultBrand="Nova Design & Build" slug="construction">
      <ConstructionContent />
    </DemoLayout>
  );
}
