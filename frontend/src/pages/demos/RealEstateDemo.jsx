import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DemoLayout, { useDemo, DemoLink } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { 
  Building, 
  MapPin, 
  BedDouble, 
  Bath, 
  Maximize, 
  Search, 
  CheckCircle, 
  Phone, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  DollarSign, 
  Calendar, 
  Sparkles, 
  HelpCircle,
  Menu as MenuIcon, 
  X 
} from 'lucide-react';

function RealEstateNavbar({ isMobileOpen, setIsMobileOpen }) {
  const { brandName } = useDemo();
  return (
    <nav className="border-b border-cyan-500/10 bg-slate-950/95 backdrop-blur-md sticky top-[68px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">
        <DemoLink to="home" className="font-heading font-extrabold text-2xl tracking-tight text-cyan-400 flex items-center gap-1.5">
          <Building size={24} className="text-cyan-400 animate-pulse" />
          <span className="truncate max-w-[150px] sm:max-w-[250px] md:max-w-none">{brandName}</span>
        </DemoLink>
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-400">
          <DemoLink to="home" activeClassName="text-cyan-400 font-bold" className="hover:text-cyan-400 transition-colors">Home</DemoLink>
          <DemoLink to="about" activeClassName="text-cyan-400 font-bold" className="hover:text-cyan-400 transition-colors">About</DemoLink>
          <DemoLink to="properties" activeClassName="text-cyan-400 font-bold" className="hover:text-cyan-400 transition-colors">Properties</DemoLink>
          <DemoLink to="gallery" activeClassName="text-cyan-400 font-bold" className="hover:text-cyan-400 transition-colors">Gallery</DemoLink>
          <DemoLink to="agents" activeClassName="text-cyan-400 font-bold" className="hover:text-cyan-400 transition-colors">Agents</DemoLink>
          <DemoLink to="contact" activeClassName="text-cyan-400 font-bold" className="hover:text-cyan-400 transition-colors">Contact</DemoLink>
        </div>
        <div className="hidden lg:block">
          <DemoLink to="contact" className="bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            Inquire Now
          </DemoLink>
        </div>
        <button className="lg:hidden text-white hover:text-cyan-400" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-cyan-500/10 py-6 px-6 space-y-4 flex flex-col">
          <DemoLink to="home" onClick={() => setIsMobileOpen(false)} activeClassName="text-cyan-400" className="text-sm font-semibold text-slate-400">Home</DemoLink>
          <DemoLink to="about" onClick={() => setIsMobileOpen(false)} activeClassName="text-cyan-400" className="text-sm font-semibold text-slate-400">About</DemoLink>
          <DemoLink to="properties" onClick={() => setIsMobileOpen(false)} activeClassName="text-cyan-400" className="text-sm font-semibold text-slate-400">Properties</DemoLink>
          <DemoLink to="gallery" onClick={() => setIsMobileOpen(false)} activeClassName="text-cyan-400" className="text-sm font-semibold text-slate-400">Gallery</DemoLink>
          <DemoLink to="agents" onClick={() => setIsMobileOpen(false)} activeClassName="text-cyan-400" className="text-sm font-semibold text-slate-400">Agents</DemoLink>
          <DemoLink to="contact" onClick={() => setIsMobileOpen(false)} activeClassName="text-cyan-400" className="text-sm font-semibold text-slate-400">Contact</DemoLink>
          <DemoLink to="contact" onClick={() => setIsMobileOpen(false)} className="bg-cyan-500 text-black text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider">
            Inquire Now
          </DemoLink>
        </div>
      )}
    </nav>
  );
}

function RealEstateFooter() {
  const { brandName } = useDemo();
  return (
    <footer className="bg-slate-950 border-t border-cyan-500/15 py-16 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <span className="font-heading font-extrabold text-xl tracking-tight text-cyan-400 flex items-center gap-1.5">
            <Building size={20} className="text-cyan-400" />
            {brandName}
          </span>
          <p className="leading-relaxed font-light text-slate-400">
            A premium real estate brokerage firm dealing in high-end modernist villas, penthouses, and high-growth commercial developments.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Corporate Links</h4>
          <ul className="space-y-2 flex flex-col">
            <DemoLink to="home" className="hover:text-cyan-400 transition-colors">Home</DemoLink>
            <DemoLink to="about" className="hover:text-cyan-400 transition-colors">About Us</DemoLink>
            <DemoLink to="properties" className="hover:text-cyan-400 transition-colors">Active Listings</DemoLink>
            <DemoLink to="contact" className="hover:text-cyan-400 transition-colors">Inquiry Desk</DemoLink>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Asset Scope</h4>
          <p className="text-slate-400">Modernist Villas</p>
          <p className="text-slate-400">Sky-High Penthouses</p>
          <p className="text-cyan-400 font-semibold">Off-Market Properties Database</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Contact Broker</h4>
          <p className="flex items-center gap-2 text-slate-400"><MapPin size={12} className="text-cyan-400" /> 123 Luxury Avenue, Real City</p>
          <p className="flex items-center gap-2 text-slate-400"><Phone size={12} className="text-cyan-400" /> +1 (555) 789-0123</p>
          <p className="text-slate-450 underline">brokerage@{brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {brandName}. High-end brokerage excellence.</p>
        <div className="flex gap-4 text-slate-400">
          <a href="#" className="hover:text-cyan-400">Instagram</a>
          <a href="#" className="hover:text-cyan-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

function REInnerHeader({ title, subtitle }) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-cyan-500/10 text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white uppercase tracking-tight">{title}</h1>
        <p className="text-slate-400 text-base font-light max-w-xl mx-auto">{subtitle}</p>
        <div className="flex justify-center items-center gap-2 text-xs text-slate-500 mt-6">
          <DemoLink to="home" className="hover:text-cyan-400">Home</DemoLink>
          <span>/</span>
          <span className="text-cyan-400 capitalize">{title}</span>
        </div>
      </div>
    </section>
  );
}

function REFAQ({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Q&A Desk</span>
          <h2 className="text-3xl font-heading font-bold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 font-heading font-bold text-white flex justify-between items-center hover:bg-slate-900/60 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-cyan-400">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed font-light border-t border-slate-800/50 pt-4">
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
  const [searchQuery, setSearchQuery] = useState({ type: 'all', location: '', price: 'all' });

  return (
    <div className="space-y-0 animate-fadeIn">
      {/* 2. Hero Section */}
      <header className="relative py-32 md:py-48 text-center overflow-hidden flex items-center justify-center min-h-[85vh]">
        <div className="absolute inset-0 bg-slate-950/70 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')" }} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-950 via-transparent to-transparent z-15 pointer-events-none" />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-cyan-400 text-xs font-bold tracking-[5px] uppercase bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            Bespoke Brokerage Network
          </span>
          <h1 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
            Discover Exquisite Residences With <span className="text-cyan-400">{brandName}</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Representing the upper echelon of structural design, luxury penthouses, and high-growth investments in world-class cities.
          </p>

          {/* Interactive Search Box */}
          <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 p-4 rounded-3xl max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center shadow-2xl mt-8">
            <div>
              <label className="block text-[10px] text-slate-500 uppercase font-black text-left mb-1">Location</label>
              <input 
                type="text" 
                placeholder="e.g. Beverly Hills" 
                value={searchQuery.location} 
                onChange={(e) => setSearchQuery({ ...searchQuery, location: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-cyan-400" 
              />
            </div>
            <div>
              <label className="block text-[10px] text-slate-500 uppercase font-black text-left mb-1">Asset Type</label>
              <select 
                value={searchQuery.type} 
                onChange={(e) => setSearchQuery({ ...searchQuery, type: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-cyan-400"
              >
                <option value="all">All Properties</option>
                <option value="villa">Villas</option>
                <option value="penthouse">Penthouses</option>
                <option value="house">Minimalist Houses</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] text-slate-500 uppercase font-black text-left mb-1">Price Range</label>
              <select 
                value={searchQuery.price} 
                onChange={(e) => setSearchQuery({ ...searchQuery, price: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-cyan-400"
              >
                <option value="all">Any Price</option>
                <option value="1m">Under $1M</option>
                <option value="2m">$1M - $2.5M</option>
                <option value="above">Above $2.5M</option>
              </select>
            </div>
            <DemoLink to="properties" className="w-full bg-cyan-500 hover:bg-cyan-600 text-black py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
              <Search size={14} /> Search
            </DemoLink>
          </div>
        </div>
      </header>

      {/* 3. Stat Cards */}
      <section className="bg-slate-950 border-y border-slate-900 py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800/40 hover:border-cyan-500/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-cyan-400">$2.4B+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-2">Total Sales Vol</div>
          </div>
          <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800/40 hover:border-cyan-500/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-cyan-400">12%</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-2">Avg Capital Gain</div>
          </div>
          <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800/40 hover:border-cyan-500/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-cyan-400">98%</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-2">Client Rating</div>
          </div>
          <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800/40 hover:border-cyan-500/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-cyan-400">200+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-2">Bespoke Listings</div>
          </div>
        </div>
      </section>

      {/* 4. About Preview */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase flex items-center gap-2">
            <Sparkles size={14} /> Global Advisory Standard
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight uppercase">
            Confidentiality & Investment Excellence
          </h2>
          <p className="text-slate-450 leading-relaxed font-light text-sm md:text-base">
            Operating within elite circles, {brandName} manages real estate acquisitions for high-net-worth clients, hedge funds, and family offices. We utilize detailed municipal analytics to match assets to your portfolio requirements.
          </p>
          <DemoLink to="about" className="text-cyan-400 font-extrabold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 hover:underline group">
            <span>Learn About Our Advisory Model</span> 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </DemoLink>
        </div>
        <div className="relative group">
          <div className="absolute -inset-2 rounded-2xl border border-cyan-500/10 transform rotate-1 pointer-events-none group-hover:rotate-0 transition-transform duration-300" />
          <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80" alt="Consulting lobby" className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3] border border-slate-850" />
        </div>
      </section>

      {/* 5. Active Properties Preview */}
      <section className="py-24 bg-slate-900/50 border-y border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Curated Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase">Featured Estates</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Modernist Lakeside Villa', type: 'Villa', price: '$1,850,000', beds: 4, baths: 5, size: '4,200 sqft', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
              { title: 'Downtown Glass Penthouse', type: 'Penthouse', price: '$2,450,000', beds: 3, baths: 3.5, size: '2,900 sqft', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80' },
              { title: 'Scandinavian Minimalist House', type: 'House', price: '$920,000', beds: 3, baths: 2, size: '2,100 sqft', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80' }
            ].map((p, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden group hover:border-cyan-500/20 transition-all duration-300">
                <div className="h-56 overflow-hidden relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-550" />
                  <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-cyan-400 text-xs font-black px-3 py-1 rounded-xl border border-white/10">
                    {p.type}
                  </span>
                  <span className="absolute bottom-4 right-4 bg-cyan-500 text-black text-xs font-black px-3 py-1.5 rounded-xl">
                    {p.price}
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-base font-bold font-heading text-white">{p.title}</h3>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><BedDouble size={14} className="text-cyan-400" /> {p.beds} Beds</span>
                    <span className="flex items-center gap-1"><Bath size={14} className="text-cyan-400" /> {p.baths} Baths</span>
                    <span className="flex items-center gap-1"><Maximize size={14} className="text-cyan-400" /> {p.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <DemoLink to="properties" className="bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block">
              View All Properties
            </DemoLink>
          </div>
        </div>
      </section>

      {/* 6. Featured Neighborhood Gallery */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Elite Locations</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase">Sought-After Neighborhoods</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden relative group border border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10 p-6 flex flex-col justify-end" />
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=500&q=80" alt="Lake Como" className="w-full aspect-square object-cover group-hover:scale-105 transition-all duration-500" />
            <div className="absolute bottom-6 left-6 z-20">
              <h4 className="text-white font-heading font-bold text-lg">Lakefront Shoreline</h4>
              <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-semibold block">Average Price: $2.8M</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden relative group border border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10 p-6 flex flex-col justify-end" />
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80" alt="B Hills" className="w-full aspect-square object-cover group-hover:scale-105 transition-all duration-500" />
            <div className="absolute bottom-6 left-6 z-20">
              <h4 className="text-white font-heading font-bold text-lg">Urban Heights</h4>
              <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-semibold block">Average Price: $4.1M</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden relative group border border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10 p-6 flex flex-col justify-end" />
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=80" alt="Scandic" className="w-full aspect-square object-cover group-hover:scale-105 transition-all duration-500" />
            <div className="absolute bottom-6 left-6 z-20">
              <h4 className="text-white font-heading font-bold text-lg">Minimalist Valleys</h4>
              <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-semibold block">Average Price: $1.9M</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Industry Specific Feature (Mortgage guidance/Calculator) */}
      <section className="py-24 bg-slate-900/30 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-heading font-bold text-white uppercase">Mortgage & Leverage Calculator</h3>
            <p className="text-slate-400 text-sm font-light mt-3 leading-relaxed">
              Plan your real estate capital placement instantly. Our financial desk arranges private lines of credit with premium lenders based on these figures.
            </p>
          </div>
          <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-4">
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-450">Estimated Asset Value ($)</label>
              <input type="text" readOnly value="$1,500,000" className="w-full bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl text-white focus:outline-none" />
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-450">Required Down Payment (20%)</label>
              <input type="text" readOnly value="$300,000" className="w-full bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl text-cyan-400 font-bold focus:outline-none" />
            </div>
            <div className="text-[10px] text-slate-500 text-center uppercase tracking-widest">Calculations Based on 4.5% Prime Rate</div>
          </div>
        </div>
      </section>

      {/* 8. Process (How We Work) */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Purchasing Flow</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase">Our Acquisition Process</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Consultation', desc: 'Detailing your private asset criteria, budget capacity, and investment horizon.' },
            { step: '02', title: 'Asset Sourcing', desc: 'Curating off-market listings and scheduling confidential viewings.' },
            { step: '03', title: 'Due Diligence', desc: 'Verifying construction engineering, planning deeds, and final valuations.' },
            { step: '04', title: 'Closing desk', desc: 'Executing legal escrow agreements and title handovers with certified firms.' }
          ].map((p, i) => (
            <div key={i} className="bg-slate-900/20 border border-slate-850 p-8 rounded-2xl relative space-y-3 hover:border-cyan-500/10 transition-colors">
              <span className="text-cyan-400/10 text-5xl font-heading font-black block">{p.step}</span>
              <h3 className="font-heading font-bold text-white text-base">{p.title}</h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Broker Fee Packages */}
      <section className="py-24 bg-slate-900/50 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Service Fees</span>
            <h2 className="text-3xl font-heading font-bold text-white uppercase">Listing & Representation</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Standard Listing', fee: '1.5%', features: ['Multi-listing network posting', 'High-res structural photoshoot', 'Basic escrow guidance'] },
              { name: 'Exclusive Agent', fee: '2.5%', features: ['Off-market private circulars', '3D video virtual tour construction', 'Dedicated lead broker', 'Full structural audit'], featured: true },
              { name: 'Commercial Portfolio', fee: 'Custom', features: ['Zoning law representation', 'Tax structure advisory', 'Private asset managers assigned'] }
            ].map((pkg, idx) => (
              <div key={idx} className={`bg-slate-950 border rounded-2xl p-8 flex flex-col justify-between relative ${pkg.featured ? 'border-cyan-500 shadow-xl' : 'border-slate-850'}`}>
                {pkg.featured && <span className="absolute top-0 right-8 -translate-y-1/2 bg-cyan-500 text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Popular</span>}
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">{pkg.name}</h3>
                  <div className="text-3xl font-heading font-black text-cyan-400 mt-4 mb-6">{pkg.fee} <span className="text-slate-500 text-sm font-light">fee</span></div>
                  <ul className="space-y-3 mb-8 text-xs text-slate-400">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-400" /> {f}</li>
                    ))}
                  </ul>
                </div>
                <DemoLink to="contact" className={`w-full py-3 rounded-xl font-bold uppercase text-xs text-center tracking-wider transition-all duration-300 ${pkg.featured ? 'bg-cyan-500 hover:bg-cyan-600 text-black shadow-[0_0_10px_rgba(34,211,238,0.2)]' : 'bg-slate-850 hover:bg-slate-800 text-white'}`}>
                  Retain Advisor
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
            { name: 'Sarah Miller', quote: `The off-market database {brandName} maintains is remarkable. We secured our Beverly Hills villa completely privately within 3 weeks.`, role: 'Private Investor' },
            { name: 'Michael Chen', quote: `Unprecedented financial analytics. They modeled our ROI yield curves accurately, helping us buy two commercial buildings in downtown.`, role: 'Hedge Fund Partner' },
            { name: 'Sophia Loren', quote: `Sarah Miller is the absolute master of contract negotiation. She saved us $200k on closing and handled title logistics flawlessly.`, role: 'Estate Heir' }
          ].map((t, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-4">
              <div className="flex text-cyan-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 text-sm italic font-light leading-relaxed">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-white text-sm">{t.name}</h4>
                <span className="text-xs text-slate-500">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ Section */}
      <REFAQ 
        faqs={[
          { q: 'What is an off-market listing?', a: 'Off-market properties are high-end estates sold privately without being posted on MLS. This protects seller privacy and limits bidding circles.' },
          { q: 'Do you work with international buyers?', a: 'Yes. We represent global buyers regularly, coordinating cross-border wire documentation, currency exchange, and visa lawyers.' },
          { q: 'What are closing escrow timelines?', a: 'Residential villas close within 30-45 days, while commercial assets undergo 60-90 days of detailed planning audits before title transfer.' }
        ]}
      />

      {/* 12. Strong CTA */}
      <section className="py-24 relative overflow-hidden bg-slate-950 border-t border-cyan-500/10 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Secure Your Next Prime Asset</h2>
          <p className="text-slate-400 max-w-xl mx-auto font-light">Speak confidentially with our managing partner today to access off-market listings.</p>
          <div className="pt-4">
            <DemoLink to="contact" className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              Schedule Private Inquiry
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
    <div className="space-y-0 animate-fadeIn">
      <REInnerHeader title="About Brokerage" subtitle={`Learn how ${brandName} secures premium assets for global partners.`} />
      
      {/* 1. Ethos Detailed */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">The Brokerage</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase">Confidentiality & Investment Excellence</h2>
          <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">
            {brandName} is a private network operating in high-end real estate brokerage. Our brokers possess deep financial analytics, planning permission intelligence, and legal transaction expertise to make asset purchases completely seamless.
          </p>
          <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">
            We prioritize absolute client confidentiality. High-profile figures and corporate executives rely on our private representation to acquire large residential estates quietly.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80" alt="Private lounge" className="rounded-2xl border border-slate-800 shadow-2xl w-full object-cover aspect-[4/3]" />
        </div>
      </section>

      {/* 2. Core Pillars */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Standards</span>
            <h2 className="text-3xl font-heading font-bold text-white uppercase">Our Advisory Standards</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Confidential Escrow', desc: 'Title transfers and funds routing are completely protected by strict non-disclosure covenants.' },
              { title: 'Zoning Analysis', desc: 'We review building codes, municipal plans, and rights-of-way prior to closing.' },
              { title: 'Tax Structuring', desc: 'Structuring asset purchases through trusts or corporate structures to maximize capital efficiency.' }
            ].map((p, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-3">
                <h3 className="text-lg font-bold font-heading text-white">{p.title}</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Facility / Office Showcase */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Corporate HQ</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase">Our Executive Lounge</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80" alt="Office 1" className="rounded-2xl object-cover w-full aspect-square border border-slate-800" />
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=80" alt="Office 2" className="rounded-2xl object-cover w-full aspect-square border border-slate-800" />
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=80" alt="Office 3" className="rounded-2xl object-cover w-full aspect-square border border-slate-800" />
        </div>
      </section>

      {/* 4. Credentials */}
      <section className="py-24 bg-slate-900 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-8">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Accreditations</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading">Brokerage Credentials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Licensed Realtor', org: 'National Association of Realtors' },
              { title: 'Escrow Bonded', org: 'Real Estate Commission Board' },
              { title: 'Wealth Management Partner', org: 'Global Wealth Advisory Group' }
            ].map((w, i) => (
              <div key={i} className="bg-slate-950 border border-slate-800 p-8 rounded-2xl space-y-2">
                <h4 className="font-heading font-bold text-white text-base">{w.title}</h4>
                <p className="text-xs text-slate-500">{w.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About FAQ */}
      <REFAQ 
        faqs={[
          { q: 'How long has the brokerage been active?', a: `${brandName} was incorporated in 2016, scaling to manage over $2B in transaction volume.` },
          { q: 'Do you charge listing fees up front?', a: 'No upfront fees. All listing marketing, photography, and virtual tours are covered under the final closing commission.' }
        ]}
      />
    </div>
  );
}

// 3. PROPERTIES VIEW
function PropertiesView() {
  const [filterType, setFilterType] = useState('all');

  const list = [
    { id: 1, title: 'Modernist Lakeside Villa', type: 'villa', price: '$1,850,000', beds: 4, baths: 5, size: '4,200 sqft', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'Downtown Glass Penthouse', type: 'penthouse', price: '$2,450,000', beds: 3, baths: 3.5, size: '2,900 sqft', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Scandinavian Minimalist House', type: 'house', price: '$920,000', beds: 3, baths: 2, size: '2,100 sqft', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80' }
  ];

  const filtered = filterType === 'all' ? list : list.filter(p => p.type === filterType);

  return (
    <div className="space-y-0 animate-fadeIn bg-slate-950">
      <REInnerHeader title="Active Listings" subtitle="Browse our active residences and high-yield properties." />

      {/* 1. Filter + Grid */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex justify-center gap-3 mb-12">
          {['all', 'villa', 'penthouse', 'house'].map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                filterType === t ? 'bg-cyan-500 text-black shadow-md' : 'bg-slate-900 text-slate-400 border border-slate-800'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <div key={p.id} className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden group hover:border-cyan-500/25 transition-all">
              <div className="h-56 overflow-hidden relative">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-103 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-cyan-400 font-bold font-heading">
                  {p.price}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold font-heading text-white">{p.title}</h3>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><BedDouble size={14} className="text-cyan-400" /> {p.beds} Beds</span>
                  <span className="flex items-center gap-1"><Bath size={14} className="text-cyan-400" /> {p.baths} Baths</span>
                  <span className="flex items-center gap-1"><Maximize size={14} className="text-cyan-400" /> {p.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Virtual Tour Mock Section */}
      <section className="py-24 bg-slate-900/30 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Confidential Tours</span>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase mt-2">Remote Video Virtual Tours</h3>
            <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mt-4">
              We arrange secure video tours via encrypted streaming platforms. Get full details of structural integrity, room flow, and lighting angles without having to travel.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 aspect-video bg-black flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80')" }} />
            <div className="relative z-10 text-center space-y-3">
              <span className="bg-red-500/25 border border-red-500/40 text-red-400 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full inline-block animate-pulse">Live Streaming</span>
              <h4 className="text-white font-bold text-sm">Secure Virtual Video Feed</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Transaction process */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-zinc-900 text-center space-y-4">
        <h3 className="text-xl font-heading font-bold text-white uppercase">Escrow Timelines</h3>
        <p className="text-slate-400 text-xs leading-relaxed max-w-xl mx-auto font-light">
          Typically escrow balances require 15 days to close after structural engineering approval. Our transaction team coordinates bank wires and notary services on-site.
        </p>
      </section>

      {/* 4. Transactions FAQ */}
      <REFAQ 
        faqs={[
          { q: 'Can I purchase using an LLC?', a: 'Yes. We frequently route acquisitions through single-member LLCs, family trusts, or corporate holding assets to protect buyer identities.' },
          { q: 'Are building inspections standard?', a: 'Yes. Every transaction requires an independent structural, HVAC, and roofing audit by a certified third-party surveyor.' }
        ]}
      />
    </div>
  );
}

// 4. GALLERY VIEW
function GalleryView() {
  const photos = [
    { title: 'Lakeside Pool Deck', cat: 'Villa', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80' },
    { title: 'Grand Dining Hall', cat: 'Penthouse', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=80' },
    { title: 'Scandinavian Kitchen', cat: 'House', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=80' }
  ];

  return (
    <div className="space-y-0 animate-fadeIn">
      <REInnerHeader title="Visual Gallery" subtitle="A photographic journey through our prime residential holdings." />
      
      {/* 1. Multi category Gallery grid */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((p, idx) => (
          <div key={idx} className="group overflow-hidden rounded-2xl relative border border-slate-800 bg-slate-900">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 p-5 flex flex-col justify-end">
              <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider mb-1">{p.cat}</span>
              <h4 className="text-white font-bold font-heading text-base">{p.title}</h4>
            </div>
            <img src={p.url} alt={p.title} className="w-full aspect-square object-cover transition-transform duration-700 ease-out group-hover:scale-108" />
          </div>
        ))}
      </section>

      {/* 2. Before/After Restoration Mock */}
      <section className="py-24 bg-slate-900/30 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 bg-slate-900 border border-slate-800 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Renovations Desk</span>
            <h3 className="text-xl font-heading font-bold text-white uppercase mt-2">Restoration Yield Increase</h3>
            <p className="text-slate-400 text-xs font-light leading-relaxed mt-3">
              We design and coordinate full-scale aesthetic updates to modernist structures, raising asset value by up to 25% prior to listing.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-slate-850">
              <span className="bg-slate-950/80 text-slate-400 text-[10px] font-black uppercase px-2 py-1 absolute z-15 mt-2 ml-2">Original</span>
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=250&q=80" alt="Original" className="w-full aspect-[4/3] object-cover grayscale" />
            </div>
            <div className="rounded-xl overflow-hidden border border-cyan-500/20">
              <span className="bg-cyan-500 text-black text-[10px] font-black uppercase px-2 py-1 absolute z-15 mt-2 ml-2">Restored</span>
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=250&q=80" alt="Restored" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-24 text-center">
        <DemoLink to="contact" className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          Inquire About Property
        </DemoLink>
      </section>
    </div>
  );
}

// 5. AGENTS VIEW
function AgentsView() {
  const { brandName } = useDemo();
  return (
    <div className="space-y-0 animate-fadeIn bg-slate-950">
      <REInnerHeader title="Our Brokers" subtitle="Learn from top licensed agents negotiating major estates." />
      
      {/* 1. Licensed Agents Grid */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Sarah Miller', role: 'Chief Managing Partner', exp: '14+ Yrs', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
          { name: 'James Anderson', role: 'Commercial Real Estate Lead', exp: '10+ Yrs', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
          { name: 'Elena Rostova', role: 'Private Residential Broker', exp: '16+ Yrs', img: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=400&q=80' }
        ].map((ag, idx) => (
          <div key={idx} className="bg-slate-900/30 border border-slate-800 rounded-2xl overflow-hidden text-center group hover:border-cyan-500/20 transition-all">
            <div className="h-64 overflow-hidden">
              <img src={ag.img} alt={ag.name} className="w-full h-full object-cover object-top group-hover:scale-103 transition-all duration-550" />
            </div>
            <div className="p-6 space-y-1">
              <h3 className="font-heading font-bold text-white text-lg">{ag.name}</h3>
              <span className="text-xs text-cyan-400 font-semibold block">{ag.role}</span>
              <p className="text-slate-500 text-[11px]">Experience: {ag.exp}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 2. Advisory Philosophy */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-6">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Standards</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase">Negotiation Standards</h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed max-w-xl mx-auto">
            Every broker at {brandName} maintains a real estate license and conducts regular municipal code audits. We represent our clients in zoning boards and planning hearings to secure optimal deal structures.
          </p>
        </div>
      </section>

      {/* 3. Advisory FAQ */}
      <REFAQ 
        faqs={[
          { q: 'How do I choose an agent?', a: 'We assign agents based on asset category: residential modernist villas, penthouses, or multi-family commercial investments.' },
          { q: 'Are brokers available for off-site representation?', a: 'Yes. Our partners represent buyer interests globally, traveling to close assets and manage surveyors directly.' }
        ]}
      />
    </div>
  );
}

// 6. CONTACT VIEW
function ContactView() {
  const { brandName } = useDemo();
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', phone: '' });
  };

  return (
    <div className="space-y-0 animate-fadeIn">
      <REInnerHeader title="Book A Viewing" subtitle={`Book a private tour with a licensed broker at ${brandName}.`} />
      
      {/* 1. Address / Info */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Our Lounge</h3>
            <p className="text-slate-400 font-light flex items-center gap-2"><MapPin size={16} className="text-cyan-400" /> 123 Luxury Avenue, Real City</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Connect</h3>
            <p className="text-slate-400 font-light flex items-center gap-2"><Phone size={16} className="text-cyan-400" /> +1 (555) 789-0123</p>
            <p className="text-slate-405 font-light mt-2">Email: brokerage@{brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Private Scheduling</h3>
            <div className="text-xs text-zinc-400 space-y-1 font-light">
              <p>Monday - Friday: 09:00 AM - 06:00 PM</p>
              <p>Saturday: By Private Appointment Only</p>
              <p className="text-cyan-400 font-semibold mt-1">Virtual consults available 24/7 for offshore buyers</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <h3 className="font-heading font-bold text-xl text-white mb-6 uppercase">Send a Message</h3>
          {sent ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-center text-xs font-semibold">
              Thank you! Viewing request logged. A broker will connect shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Phone</label>
                <input type="text" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400" />
              </div>
              <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-black py-3 rounded-xl font-bold uppercase text-xs tracking-wider">
                Submit private inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 2. Mock map */}
      <section className="py-24 bg-slate-905 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-heading font-bold text-white uppercase">Our HQ Address</h4>
              <p className="text-slate-400 text-xs max-w-md leading-relaxed font-light">
                Located in the high-end banking district. Street parking is available, and private valet parking is provided at our executive gates.
              </p>
            </div>
            <div className="w-full md:w-80 h-48 rounded-2xl bg-slate-950 border border-slate-850 relative flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=500&q=80')" }} />
              <div className="relative z-10 text-center space-y-2">
                <MapPin size={24} className="text-cyan-400 mx-auto" />
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block">34.0522° N, 118.2437° W</span>
                <span className="text-xs text-white font-bold">Beverly Hills Corp Center</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function RealEstateDemo() {
  const { subpage: urlSubpage } = useParams();
  const subpage = urlSubpage || 'home';
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const renderSubpage = () => {
    switch (subpage) {
      case 'about': return <AboutView />;
      case 'properties': return <PropertiesView />;
      case 'gallery': return <GalleryView />;
      case 'agents': return <AgentsView />;
      case 'contact': return <ContactView />;
      case 'home':
      default: return <HomeView />;
    }
  };

  return (
    <DemoLayout defaultBrand="Luxe Living Estates" slug="real-estate" currentSubpage={subpage}>
      <div className="bg-slate-950 text-slate-100 min-h-screen">
        <RealEstateNavbar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
        <main>{renderSubpage()}</main>
        <RealEstateFooter />
      </div>
    </DemoLayout>
  );
}
