import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DemoLayout, { useDemo, DemoLink } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { 
  HardHat, 
  Compass, 
  Hammer, 
  Eye, 
  CheckCircle, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Clock, 
  HelpCircle,
  Calendar,
  Sparkles,
  Menu as MenuIcon, 
  X 
} from 'lucide-react';

function ConstructionNavbar({ isMobileOpen, setIsMobileOpen }) {
  const { brandName } = useDemo();
  return (
    <nav className="border-b border-[#f35c24]/15 bg-[#111116]/95 backdrop-blur-md sticky top-[68px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">
        <DemoLink to="home" className="font-heading font-extrabold text-2xl tracking-tight text-[#f35c24] flex items-center gap-1.5">
          <HardHat size={24} className="text-[#f35c24] animate-pulse" />
          <span className="text-white truncate max-w-[150px] sm:max-w-[250px] md:max-w-none">{brandName}</span>
        </DemoLink>
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#a6a6b5]">
          <DemoLink to="home" activeClassName="text-[#f35c24] font-bold" className="hover:text-[#f35c24] transition-colors">Home</DemoLink>
          <DemoLink to="about" activeClassName="text-[#f35c24] font-bold" className="hover:text-[#f35c24] transition-colors">About Us</DemoLink>
          <DemoLink to="services" activeClassName="text-[#f35c24] font-bold" className="hover:text-[#f35c24] transition-colors">Capabilities</DemoLink>
          <DemoLink to="projects" activeClassName="text-[#f35c24] font-bold" className="hover:text-[#f35c24] transition-colors">Portfolio</DemoLink>
          <DemoLink to="process" activeClassName="text-[#f35c24] font-bold" className="hover:text-[#f35c24] transition-colors">Our Process</DemoLink>
          <DemoLink to="contact" activeClassName="text-[#f35c24] font-bold" className="hover:text-[#f35c24] transition-colors">Contact</DemoLink>
        </div>
        <div className="hidden lg:block">
          <DemoLink to="contact" className="bg-[#f35c24] hover:bg-[#d64713] text-white px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(243,92,36,0.2)]">
            Get Estimate
          </DemoLink>
        </div>
        <button className="lg:hidden text-white hover:text-[#f35c24]" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-[#111116] border-b border-[#f35c24]/15 py-6 px-6 space-y-4 flex flex-col">
          <DemoLink to="home" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#f35c24]" className="text-sm font-semibold text-zinc-400">Home</DemoLink>
          <DemoLink to="about" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#f35c24]" className="text-sm font-semibold text-zinc-400">About Us</DemoLink>
          <DemoLink to="services" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#f35c24]" className="text-sm font-semibold text-zinc-400">Capabilities</DemoLink>
          <DemoLink to="projects" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#f35c24]" className="text-sm font-semibold text-zinc-400">Portfolio</DemoLink>
          <DemoLink to="process" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#f35c24]" className="text-sm font-semibold text-zinc-400">Our Process</DemoLink>
          <DemoLink to="contact" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#f35c24]" className="text-sm font-semibold text-zinc-400">Contact</DemoLink>
          <DemoLink to="contact" onClick={() => setIsMobileOpen(false)} className="bg-[#f35c24] text-white text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider">
            Get Estimate
          </DemoLink>
        </div>
      )}
    </nav>
  );
}

function ConstructionFooter() {
  const { brandName } = useDemo();
  return (
    <footer className="bg-[#0b0b0e] border-t border-[#f35c24]/15 py-16 text-xs text-[#a6a6b5] font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <span className="font-heading font-extrabold text-xl tracking-tight text-[#f35c24] flex items-center gap-1.5">
            <HardHat size={18} className="text-[#f35c24]" />
            {brandName}
          </span>
          <p className="leading-relaxed text-[#a6a6b5]">
            A private contracting and engineering firm delivering architectural plans, concrete frameworks, and premium interior styling.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 flex flex-col font-semibold">
            <DemoLink to="home" className="hover:text-[#f35c24] transition-colors">Home</DemoLink>
            <DemoLink to="about" className="hover:text-[#f35c24] transition-colors">About Us</DemoLink>
            <DemoLink to="services" className="hover:text-[#f35c24] transition-colors">Services</DemoLink>
            <DemoLink to="projects" className="hover:text-[#f35c24] transition-colors">Projects</DemoLink>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Capabilities</h4>
          <p className="text-[#a6a6b5]">Residential Blueprinting</p>
          <p className="text-[#a6a6b5]">Commercial Cast Foundations</p>
          <p className="text-[#f35c24] font-semibold">Custom Walnut Joinery</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Contact Estimator</h4>
          <p className="flex items-center gap-2 text-[#a6a6b5]"><MapPin size={12} className="text-[#f35c24]" /> 567 Industrial Lane, Build City</p>
          <p className="flex items-center gap-2 text-[#a6a6b5]"><Phone size={12} className="text-[#f35c24]" /> +1 (555) 890-1234</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-8 border-t border-[#f35c24]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {brandName}. Engineering with integrity.</p>
        <div className="flex gap-4 text-slate-500">
          <a href="#" className="hover:text-[#f35c24]">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

function ConstrInnerHeader({ title, subtitle }) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#181822] via-[#111116] to-[#111116] border-b border-[#f35c24]/10 text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#f35c24]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight">{title}</h1>
        <p className="text-[#a6a6b5] text-base font-light max-w-xl mx-auto">{subtitle}</p>
        <div className="flex justify-center items-center gap-2 text-xs text-zinc-500 mt-6">
          <DemoLink to="home" className="hover:text-[#f35c24]">Home</DemoLink>
          <span>/</span>
          <span className="text-[#f35c24] capitalize">{title}</span>
        </div>
      </div>
    </section>
  );
}

function ConstructionFAQ({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="py-24 bg-[#111116] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#f35c24] text-xs font-bold tracking-[3px] uppercase">Estimator Desk</span>
          <h2 className="text-3xl font-heading font-bold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#181822]/40 border border-[#f35c24]/10 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 font-heading font-bold text-white flex justify-between items-center hover:bg-[#181822]/85 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-[#f35c24]">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-[#a6a6b5] leading-relaxed font-light border-t border-[#f35c24]/5 pt-4">
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

// 1. HOME VIEW
function HomeView() {
  const { brandName } = useDemo();
  return (
    <div className="space-y-0 animate-fadeIn">
      {/* 2. Hero Section */}
      <header className="relative py-32 md:py-48 text-center overflow-hidden flex items-center justify-center min-h-[85vh]">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80')" }} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#111116] via-transparent to-transparent z-15 pointer-events-none" />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-[#f35c24] text-xs font-bold tracking-[5px] uppercase bg-[#f35c24]/10 border border-[#f35c24]/20 px-4 py-1.5 rounded-full inline-block">
            Licensed Engineering Partners
          </span>
          <h1 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-heading font-black text-white leading-tight uppercase">
            Building Structural Marvels With <span className="text-[#f35c24]">{brandName}</span>
          </h1>
          <p className="text-[#a6a6b5] text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From industrial blueprints and foundation concrete work to high-end modernist custom interior styling.
          </p>

          {/* Interactive Estimate Calculator */}
          <div className="bg-[#181822]/90 backdrop-blur-md border border-[#f35c24]/20 p-4 rounded-3xl max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center shadow-2xl mt-8 text-left text-xs">
            <div>
              <label className="block text-[10px] text-slate-500 uppercase font-black mb-1">Project Type</label>
              <select className="w-full bg-[#111116] border border-[#f35c24]/30 text-white rounded-xl px-3 py-2 text-xs focus:outline-none">
                <option>Residential Villa</option>
                <option>Commercial HQ</option>
                <option>Interior Restoration</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] text-slate-500 uppercase font-black mb-1">Est. Sq Footage</label>
              <input type="text" placeholder="e.g. 3,500 sqft" className="w-full bg-[#111116] border border-[#f35c24]/30 text-white rounded-xl px-3 py-2 text-xs focus:outline-none" />
            </div>
            <div>
              <label className="block text-[10px] text-slate-500 uppercase font-black mb-1">Timeline</label>
              <select className="w-full bg-[#111116] border border-[#f35c24]/30 text-white rounded-xl px-3 py-2 text-xs focus:outline-none">
                <option>3 - 6 Months</option>
                <option>6 - 12 Months</option>
                <option>12+ Months</option>
              </select>
            </div>
            <DemoLink to="contact" className="w-full bg-[#f35c24] hover:bg-[#d64713] text-white py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_10px_rgba(243,92,36,0.2)] text-center">
              Get Quote
            </DemoLink>
          </div>
        </div>
      </header>

      {/* 3. Trust Stats */}
      <section className="bg-[#111116] border-y border-zinc-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-[#181822]/55 rounded-2xl border border-white/5 hover:border-[#f35c24]/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-[#f35c24]">150+</div>
            <div className="text-xs text-[#a6a6b5] uppercase tracking-wider mt-2">Structures Built</div>
          </div>
          <div className="p-6 bg-[#181822]/55 rounded-2xl border border-white/5 hover:border-[#f35c24]/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-[#f35c24]">100%</div>
            <div className="text-xs text-[#a6a6b5] uppercase tracking-wider mt-2">Safety Record</div>
          </div>
          <div className="p-6 bg-[#181822]/55 rounded-2xl border border-white/5 hover:border-[#f35c24]/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-[#f35c24]">25 Yrs</div>
            <div className="text-xs text-[#a6a6b5] uppercase tracking-wider mt-2">Slab Warranty</div>
          </div>
          <div className="p-6 bg-[#181822]/55 rounded-2xl border border-white/5 hover:border-[#f35c24]/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-[#f35c24]">10+</div>
            <div className="text-xs text-[#a6a6b5] uppercase tracking-wider mt-2">Design Awards</div>
          </div>
        </div>
      </section>

      {/* 4. About Preview */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-[#f35c24] text-xs font-bold tracking-[3px] uppercase flex items-center gap-2">
            <Sparkles size={14} /> Quality Engineering Standard
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white leading-tight uppercase font-heading">
            Architectural Precision & Concrete Integrity
          </h2>
          <p className="text-[#a6a6b5] leading-relaxed font-light text-sm md:text-base">
            {brandName} operates under strict structural compliance. We utilize core-tested concrete blends, custom heavy timbers, and sustainable solar blueprints to keep builds highly durable.
          </p>
          <DemoLink to="about" className="text-[#f35c24] font-extrabold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 hover:underline group">
            <span>Learn About Our Materials</span> 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </DemoLink>
        </div>
        <div className="relative group">
          <div className="absolute -inset-2 rounded-2xl border border-[#f35c24]/10 transform rotate-1 pointer-events-none group-hover:rotate-0 transition-transform duration-300" />
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" alt="Steel casting" className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3] border border-white/5" />
        </div>
      </section>

      {/* 5. Capabilities Preview */}
      <section className="py-24 bg-[#181822]/50 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#f35c24] text-xs font-bold tracking-[3px] uppercase">Services</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase font-heading">Our Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { title: 'Architectural Blueprinting', desc: 'Custom layout drafts, structural analysis, and municipal planning approvals.', icon: <Compass className="text-[#f35c24]" /> },
              { title: 'Contracting Construction', desc: 'Excavations, structural casting, metal framework, and utility wiring.', icon: <Hammer className="text-[#f35c24]" /> },
              { title: 'Interior Walnut Styling', desc: 'Walnut joinery curation, custom cabinets, and architectural lighting layouts.', icon: <Eye className="text-[#f35c24]" /> }
            ].map((s, idx) => (
              <div key={idx} className="bg-[#111116] border border-white/5 p-8 rounded-2xl space-y-4 hover:border-[#f35c24]/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#f35c24]/10 border border-[#f35c24]/20 flex items-center justify-center group-hover:bg-[#f35c24] group-hover:text-white transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-white">{s.title}</h3>
                <p className="text-[#a6a6b5] text-xs font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Case Studies / Showcase */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#f35c24] text-xs font-bold tracking-[3px] uppercase">Portfolio</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Modernist Lakeside Villa', location: 'Lake Como, IT', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
            { title: 'Nexus Headquarters Tower', location: 'Frankfurt, DE', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#181822] border border-white/5 rounded-2xl overflow-hidden hover:border-[#f35c24]/20 transition-all duration-300 group">
              <div className="h-60 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-550" />
                <span className="absolute bottom-4 left-4 bg-black/60 px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-bold text-white">
                  {item.location}
                </span>
              </div>
              <div className="p-6">
                <h4 className="font-heading font-bold text-white text-base">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Industry Specific Widget (Before/After restoration slider) */}
      <section className="py-24 bg-[#181822]/30 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 bg-[#181822] border border-white/5 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-[#f35c24] text-xs font-bold tracking-[3px] uppercase">Restorations</span>
            <h3 className="text-2xl font-heading font-bold text-white uppercase mt-2">Facade Updates</h3>
            <p className="text-[#a6a6b5] text-xs font-light leading-relaxed mt-3">
              We update original masonry structures using modern insulated carbon frames, increasing energy ratings by 40%.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-white/5 relative">
              <span className="bg-black/80 text-[#a6a6b5] text-[10px] font-black uppercase px-2 py-1 absolute z-15 mt-2 ml-2">Original</span>
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=250&q=80" alt="Original" className="w-full aspect-[4/3] object-cover grayscale" />
            </div>
            <div className="rounded-xl overflow-hidden border border-[#f35c24]/20 relative">
              <span className="bg-[#f35c24] text-white text-[10px] font-black uppercase px-2 py-1 absolute z-15 mt-2 ml-2">Updated</span>
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=250&q=80" alt="Updated" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Process (How We Work) */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#f35c24] text-xs font-bold tracking-[3px] uppercase">Timelines</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading">Our Framework Flow</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Data Audit', desc: 'Zoning permissions, soil density mapping, and boundary checks.' },
            { step: '02', title: 'Blueprinting', desc: 'Drafting structure models and calculating load limits.' },
            { step: '03', title: 'Excavation', desc: 'Pouring foundation concrete and erecting main iron structures.' },
            { step: '04', title: 'Fit-Out', desc: 'Wiring utility pathways and custom walnut styling.' }
          ].map((p, i) => (
            <div key={i} className="bg-[#181822]/20 border border-white/5 p-8 rounded-2xl relative space-y-3">
              <span className="text-[#f35c24]/10 text-5xl font-heading font-black block">{p.step}</span>
              <h3 className="font-heading font-bold text-white text-base">{p.title}</h3>
              <p className="text-[#a6a6b5] text-xs font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Pricing/Estimate plans */}
      <section className="py-24 bg-[#181822]/40 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#f35c24] text-xs font-bold tracking-[3px] uppercase">Pricing Tiers</span>
            <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading">Contract Packages</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Concept Design', price: '$4,900', features: ['Custom layout blueprints', 'Site zoning audits', '3D mock design maps'] },
              { name: 'Standard Build', price: 'Custom', features: ['Core concrete foundation casting', 'Licensed structural framing', 'Basic drywall & utility fit-out'], featured: true },
              { name: 'Premium Turnkey', price: 'Custom', features: ['All standard build items', 'Custom Walnut joinery fit-out', 'Solar installation plan', 'Landscaping design'] }
            ].map((pkg, idx) => (
              <div key={idx} className={`bg-[#111116] border rounded-2xl p-8 flex flex-col justify-between relative ${pkg.featured ? 'border-[#f35c24] shadow-xl' : 'border-white/5'}`}>
                {pkg.featured && <span className="absolute top-0 right-8 -translate-y-1/2 bg-[#f35c24] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full font-sans">Popular</span>}
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">{pkg.name}</h3>
                  <div className="text-3xl font-heading font-black text-[#f35c24] mt-4 mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8 text-xs text-[#a6a6b5] font-light">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle size={14} className="text-[#f35c24]" /> {f}</li>
                    ))}
                  </ul>
                </div>
                <DemoLink to="contact" className={`w-full py-3 rounded-xl font-bold uppercase text-xs text-center tracking-wider transition-all duration-300 ${pkg.featured ? 'bg-[#f35c24] hover:bg-[#d64713] text-white shadow-[0_0_10px_rgba(243,92,36,0.2)]' : 'bg-[#181822] hover:bg-[#181822]/85 text-white'}`}>
                  Request Estimate
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
            { name: 'Sarah Miller', quote: `The team executed our lake Como villa with flawless safety and precision. The walnut interior detailing exceeded all blueprints.`, role: 'Private Owner' },
            { name: 'Michael Chen', quote: `Excellent site coordination. They managed the structural concrete pours on schedule and updated our legal plans quickly.`, role: 'Commercial Director' },
            { name: 'Sophia Loren', quote: `Honest budgeting and solid slab warranty terms. The solar panel integration cut our energy bills by 50%.`, role: 'Homeowner' }
          ].map((t, idx) => (
            <div key={idx} className="bg-[#181822]/40 border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="flex text-[#f35c24]">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[#a6a6b5] text-sm italic font-light leading-relaxed">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-white text-sm">{t.name}</h4>
                <span className="text-xs text-slate-550">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ Section */}
      <ConstructionFAQ 
        faqs={[
          { q: 'What is the standard build warranty?', a: 'We provide a 25-year structural warranty on all concrete cast foundations and a 10-year warranty on roof trusses.' },
          { q: 'Do you manage zoning clearances?', a: 'Yes. Our municipal advisors handle zoning reviews and planning permissions directly with local authorities.' },
          { q: 'How do you check concrete quality?', a: 'Every concrete pour undergoes compression testing in certified laboratories prior to structural loading.' }
        ]}
      />

      {/* 12. Strong CTA */}
      <section className="py-24 relative overflow-hidden bg-[#111116] border-t border-[#f35c24]/10 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(243,92,36,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Start Building Your Vision</h2>
          <p className="text-[#a6a6b5] max-w-xl mx-auto font-light">Speak with an estimator today to review blueprints and get detailed budgeting logs.</p>
          <div className="pt-4">
            <DemoLink to="contact" className="bg-[#f35c24] hover:bg-[#d64713] text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block shadow-[0_0_15px_rgba(243,92,36,0.2)]">
              Get Project Estimate
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
    <div className="space-y-0 animate-fadeIn bg-[#111116]">
      <ConstrInnerHeader title="About Us" subtitle={`Discover the history, structural methods, and timeline at ${brandName}.`} />
      
      {/* 1. History Detailed */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-[#f35c24] text-xs font-bold tracking-[3px] uppercase">The Vision</span>
          <h2 className="text-3xl font-heading font-bold text-white">Engineering Quality Since 2012</h2>
          <p className="text-[#a6a6b5] leading-relaxed font-light text-sm md:text-base">
            {brandName} operates under strict structural compliance. We utilize core-tested concrete blends, custom heavy timbers, and sustainable solar blueprints to keep builds highly durable.
          </p>
          <p className="text-[#a6a6b5] leading-relaxed font-light text-sm md:text-base">
            Our building panel has managed large commercial casting works and residential framing structures, maintaining an spotless safety record.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" alt="Timber frame" className="rounded-2xl border border-slate-800 shadow-2xl w-full object-cover aspect-[4/3]" />
        </div>
      </section>

      {/* 2. Core Pillars */}
      <section className="py-24 bg-[#181822] border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#f35c24] text-xs font-bold tracking-[3px] uppercase">Standards</span>
            <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading font-light">Advisory Pillars</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Core Tested Concrete', desc: 'Compression tests are carried out inside certified laboratories prior to structural loading.' },
              { title: 'Eco Timber Sourcing', desc: 'Walnut joinery and structural beams are sourced from sustainable certified forestry zones.' },
              { title: 'Zoning Adherence', desc: 'Detailed compliance audits on rights-of-way, municipal limits, and utility lines.' }
            ].map((p, i) => (
              <div key={i} className="bg-[#111116] border border-white/5 p-8 rounded-2xl space-y-3">
                <h3 className="text-lg font-bold font-heading text-white">{p.title}</h3>
                <p className="text-[#a6a6b5] text-xs font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Class/Office Showcase */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#f35c24] text-xs font-bold tracking-[3px] uppercase">Studio HQ</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading font-light">Our Design office</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80" alt="Draft table" className="rounded-2xl object-cover w-full aspect-square border border-white/5" />
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80" alt="Engineering desk" className="rounded-2xl object-cover w-full aspect-square border border-white/5" />
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80" alt="Materials lounge" className="rounded-2xl object-cover w-full aspect-square border border-white/5" />
        </div>
      </section>

      {/* 4. Credentials */}
      <section className="py-24 bg-[#181822] border-t border-zinc-905 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-6">
          <span className="text-[#f35c24] text-xs font-bold tracking-[3px] uppercase">Accreditations</span>
          <h2 className="text-2xl font-heading font-bold text-white uppercase font-heading font-light">Licensed Engineering Roster</h2>
          <p className="text-[#a6a6b5] text-xs leading-relaxed max-w-xl mx-auto font-light font-sans">
            Nova Design & Build is a fully bonded and licensed general contractor. Weekly site safety diagnostics are overseen by engineers.
          </p>
        </div>
      </section>

      {/* 5. FAQ */}
      <ConstructionFAQ 
        faqs={[
          { q: 'Is the design office open to walk-ins?', a: 'Yes. We recommend scheduling consultations to verify design heads are available for blueprints.' },
          { q: 'Do you work in remote locations?', a: 'Yes. We erect structures across rural lakefronts and commercial valleys, bringing complete equipment panels.' }
        ]}
      />
    </div>
  );
}

// 3. SERVICES VIEW
function ServicesView() {
  return (
    <div className="space-y-0 animate-fadeIn bg-[#111116]">
      <ConstrInnerHeader title="Our Capabilities" subtitle="Explore details of architecture and contracting." />

      {/* 1. Capabilities Grid */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Architectural Blueprinting', desc: 'Custom layout drafts, structural analysis, and planning permissions.', icon: <Compass size={18} /> },
          { title: 'Contracting Construction', desc: 'Excavations, structural casting, metal framework, and utility wiring.', icon: <Hammer size={18} /> },
          { title: 'Interior Styling', desc: 'Custom furniture layouts, Walnut cabinetry curation, lighting maps.', icon: <Eye size={18} /> }
        ].map((s, i) => (
          <div key={i} className="bg-[#181822] border border-[#f35c24]/10 p-8 rounded-2xl space-y-4">
            <div className="w-12 h-12 bg-[#f35c24]/10 border border-[#f35c24]/20 text-[#f35c24] rounded-lg flex items-center justify-center">
              {s.icon}
            </div>
            <h3 className="text-xl font-heading font-bold text-white">{s.title}</h3>
            <p className="text-[#a6a6b5] text-sm font-light leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </section>

      {/* 2. Materials showcase */}
      <section className="py-24 bg-[#181822]/30 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-4">
          <h3 className="text-2xl font-heading font-bold text-white">Premium Material Catalog</h3>
          <p className="text-[#a6a6b5] text-sm font-light max-w-md mx-auto">
            We source natural Walnut joinery, granite slabs, and structural carbon iron to ensure build quality matches high-end design aesthetics.
          </p>
        </div>
      </section>

      {/* 3. Warranty checklist */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-zinc-900 text-center space-y-4">
        <h3 className="text-xl font-heading font-bold text-white uppercase">Warranty Checklist</h3>
        <p className="text-[#a6a6b5] text-xs leading-relaxed max-w-xl mx-auto font-light">
          Foundation waterproofing, seismic truss stabilization, and electrical insulation works carry individual warranty certifications post closing.
        </p>
      </section>

      {/* 4. Services FAQ */}
      <ConstructionFAQ 
        faqs={[
          { q: 'Do you handle plumbing and electrical layout?', a: 'Yes. All utility routing is drafted inside our architectural blueprint packages and executed by licensed electricians.' },
          { q: 'Can I select custom wood species?', a: 'Absolutely. We curate raw Walnut, White Oak, and Maple stocks directly from local mills for client reviews.' }
        ]}
      />
    </div>
  );
}

// 4. PROJECTS VIEW
function ProjectsView() {
  const list = [
    { title: 'Modernist Lakeside Villa', location: 'Lake Como, IT', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
    { title: 'Nexus Headquarters Tower', location: 'Frankfurt, DE', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <div className="space-y-0 animate-fadeIn bg-[#111116]">
      <ConstrInnerHeader title="Project Case Studies" subtitle="Explore selected built properties." />

      {/* 1. Projects Showcase Grid */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {list.map((p, i) => (
          <div key={i} className="bg-[#181822] border border-white/5 rounded-2xl overflow-hidden group hover:border-[#f35c24]/20 transition-all duration-300">
            <div className="h-56 overflow-hidden relative">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-550" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold font-heading text-white">{p.title}</h3>
              <span className="text-[#f35c24] text-xs font-semibold block uppercase mt-1">{p.location}</span>
            </div>
          </div>
        ))}
      </section>

      {/* 2. Before/after restoration */}
      <section className="py-24 bg-[#181822]/30 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-4">
          <h3 className="text-2xl font-heading font-bold text-white uppercase">Historical Restorations</h3>
          <p className="text-[#a6a6b5] text-sm font-light max-w-md mx-auto">
            We preserve load-bearing brickwork facades while updating framing and concrete slabs to meet modern energy specifications.
          </p>
        </div>
      </section>

      {/* 3. Case Studies FAQ */}
      <ConstructionFAQ 
        faqs={[
          { q: 'Can I visit current build sites?', a: 'Yes. Guided walkthroughs of active construction projects can be scheduled with the site superintendent.' },
          { q: 'What size projects do you manage?', a: 'We manage residential builds starting at 2,500 sqft and commercial cast projects up to 50,000 sqft.' }
        ]}
      />
    </div>
  );
}

// 5. PROCESS VIEW
function ProcessView() {
  return (
    <div className="space-y-0 animate-fadeIn bg-[#111116]">
      <ConstrInnerHeader title="Our Framework" subtitle="Learn step-by-step construction timelines." />

      {/* 1. Framework Timeline */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { step: '01', title: 'Data Audit', desc: 'Site maps, zoning clearances, and soil tests.' },
          { step: '02', title: 'Blueprinting', desc: 'Design drafting and engineering specs.' },
          { step: '03', title: 'Excavation', desc: 'Ground breaking and casting concrete.' },
          { step: '04', title: 'Fit-out', desc: 'Interior styling and utility wiring.' }
        ].map((item, idx) => (
          <div key={idx} className="bg-[#181822] border border-white/5 p-6 rounded-2xl space-y-3 text-center">
            <span className="text-[#f35c24]/20 text-4xl font-heading font-black block">{item.step}</span>
            <h3 className="font-heading font-bold text-white text-base">{item.title}</h3>
            <p className="text-[#a6a6b5] text-xs font-light">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* 2. Materials sourcing */}
      <section className="py-24 bg-[#181822]/30 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-4">
          <h3 className="text-2xl font-heading font-bold text-white uppercase font-heading">Materials pipeline</h3>
          <p className="text-[#a6a6b5] text-sm font-light max-w-md mx-auto">
            We secure sustainable, certified Walnut blocks and core-tested cement mixtures straight from partner plants to avoid supply lags.
          </p>
        </div>
      </section>

      {/* 3. Quality Control checklist */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-zinc-900 text-center space-y-4">
        <h3 className="text-xl font-heading font-bold text-white uppercase">QC checklist</h3>
        <p className="text-[#a6a6b5] text-xs leading-relaxed max-w-xl mx-auto font-light">
          We perform third-party structural reviews post steel framing and core-concrete casting phases to guarantee build safety.
        </p>
      </section>

      {/* 4. Process FAQ */}
      <ConstructionFAQ 
        faqs={[
          { q: 'How do weather lags affect timelines?', a: 'Timelines include scheduled weather buffers. If concrete casting is delayed, framing work is rescheduled dynamically.' },
          { q: 'What is the frequency of site reports?', a: 'We deliver detailed weekly photographic progress diaries directly to client dashboard panels.' }
        ]}
      />
    </div>
  );
}

// 6. CONTACT VIEW
function ContactView() {
  const { brandName } = useDemo();
  const [form, setForm] = useState({ name: '', phone: '', budget: '$50k - $100k' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '', budget: '$50k - $100k' });
  };

  return (
    <div className="space-y-0 animate-fadeIn bg-[#111116]">
      <ConstrInnerHeader title="Get Estimate" subtitle={`Request project pricing from ${brandName} estimators.`} />
      
      {/* 1. Address / Phones */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Our Office</h3>
            <p className="text-[#a6a6b5] font-light flex items-center gap-2"><MapPin size={16} className="text-[#f35c24]" /> 567 Industrial Lane, Build City</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Estimator Desk</h3>
            <p className="text-[#a6a6b5] font-light flex items-center gap-2"><Phone size={16} className="text-[#f35c24]" /> +1 (555) 890-1234</p>
            <p className="text-[#a6a6b5] font-light mt-2">Email: estimate@{brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Visitor Safety</h3>
            <div className="text-xs text-slate-400 space-y-1 font-light font-sans">
              <p>All visitors inside active construction boundaries require hard hats.</p>
              <p>Gated visitor parking is provided behind the design office gates.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#181822] p-8 rounded-2xl border border-[#f35c24]/20">
          <h3 className="font-heading font-bold text-xl text-white mb-6 uppercase">Get Estimate</h3>
          {sent ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-center text-xs font-semibold">
              Thank you! Your estimate request has been logged. We will reach back shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-[#111116] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Phone</label>
                <input type="text" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-[#111116] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Budget Range</label>
                <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full bg-[#111116] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none">
                  <option value="$50k - $100k">$50k - $100k</option>
                  <option value="$100k - $250k">$100k - $250k</option>
                  <option value="$250k+">$250k+</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-[#f35c24] text-white py-3 rounded-xl font-bold uppercase text-xs tracking-wider">
                Request Quote
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 2. Mock map */}
      <section className="py-24 bg-[#181822]/30 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-[#181822] border border-white/5 rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-heading font-bold text-white uppercase">Our Head Office Location</h4>
              <p className="text-slate-400 text-xs max-w-md leading-relaxed font-light">
                Located in the industrial complex. Free guest parking is available at our office gates.
              </p>
            </div>
            <div className="w-full md:w-80 h-48 rounded-2xl bg-[#111116] border border-white/5 relative flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=500&q=80')" }} />
              <div className="relative z-10 text-center space-y-2">
                <MapPin size={24} className="text-[#f35c24] mx-auto" />
                <span className="text-[10px] text-zinc-550 uppercase tracking-widest block">52.5200° N, 13.4050° E</span>
                <span className="text-xs text-white font-bold">Nova HQ Design & Build</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ConstructionDemo() {
  const { subpage: urlSubpage } = useParams();
  const subpage = urlSubpage || 'home';
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const renderSubpage = () => {
    switch (subpage) {
      case 'about': return <AboutView />;
      case 'services': return <ServicesView />;
      case 'projects': return <ProjectsView />;
      case 'process': return <ProcessView />;
      case 'contact': return <ContactView />;
      case 'home':
      default: return <HomeView />;
    }
  };

  return (
    <DemoLayout defaultBrand="Nova Design & Build" slug="construction" currentSubpage={subpage}>
      <div className="bg-[#111116] text-[#e2e2e9] min-h-screen font-sans">
        <ConstructionNavbar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
        <main>{renderSubpage()}</main>
        <ConstructionFooter />
      </div>
    </DemoLayout>
  );
}
