import { useState } from 'react';
import DemoLayout, { useDemo } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { Building, MapPin, BedDouble, Bath, Maximize, Search, CheckCircle, Phone } from 'lucide-react';

function RealEstateContent() {
  const { brandName } = useDemo();
  const [filterType, setFilterType] = useState('all');
  const [inquiry, setInquiry] = useState({ name: '', email: '', phone: '', property: '' });
  const [inquiryStatus, setInquiryStatus] = useState('idle');

  const properties = [
    { id: 1, title: 'Modernist Lakeside Villa', type: 'villa', price: '$1,850,000', beds: 4, baths: 5, size: '4,200 sqft', loc: 'Lake Arrowhead, CA', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'Downtown Glass Penthouse', type: 'penthouse', price: '$2,450,000', beds: 3, baths: 3.5, size: '2,900 sqft', loc: 'Downtown Seattle, WA', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Scandinavian Minimalist House', type: 'house', price: '$920,000', beds: 3, baths: 2, size: '2,100 sqft', loc: 'Portland, OR', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80' },
    { id: 4, title: 'Ultra-Luxury Sunset Estate', type: 'villa', price: '$5,900,000', beds: 6, baths: 8, size: '8,400 sqft', loc: 'Beverly Hills, CA', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80' },
    { id: 5, title: 'Urban Loft Apartment', type: 'apartment', price: '$680,000', beds: 2, baths: 2, size: '1,350 sqft', loc: 'Brooklyn, NY', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80' },
    { id: 6, title: 'Pacific Crest Cabin', type: 'house', price: '$750,000', beds: 2, baths: 2, size: '1,800 sqft', loc: 'Bend, OR', img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80' },
  ];

  const filteredProperties = filterType === 'all'
    ? properties
    : properties.filter(p => p.type === filterType);

  const handleInquiry = (e) => {
    e.preventDefault();
    setInquiryStatus('loading');
    setTimeout(() => {
      setInquiryStatus('success');
    }, 1000);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-cyan-500/10 bg-slate-950/90 backdrop-blur-md sticky top-[68px] z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-heading font-extrabold text-xl tracking-tight text-cyan-400 flex items-center gap-1.5">
            <Building size={20} className="text-cyan-400" />
            {brandName}
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">Brokerage</a>
            <a href="#properties" className="hover:text-cyan-400 transition-colors">Properties</a>
            <a href="#analytics" className="hover:text-cyan-400 transition-colors">Market Stats</a>
            <a href="#inquiry" className="hover:text-cyan-400 transition-colors">Consultation</a>
          </div>
          <a
            href="#inquiry"
            className="bg-cyan-500 hover:bg-cyan-600 text-black px-4.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
          >
            Inquire Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-28 md:py-36 text-center overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-950/70 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-cyan-400 text-xs font-bold tracking-[5px] uppercase block">
            Exclusive Living Spaces
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
            Discover Exceptional Estates With <span className="text-cyan-400">{brandName}</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Representing the finest architectural marvels, boutique residences, and high-growth investment portfolios across elite locations.
          </p>
          <div className="pt-4">
            <a
              href="#properties"
              className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] inline-flex items-center gap-2"
            >
              <span>Explore Listings</span>
              <Search size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Market Stats Banner */}
      <section className="bg-slate-900 border-y border-slate-800 py-12" id="analytics">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-heading font-black text-cyan-400">$3.2B+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Total Sales Vol</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-black text-cyan-400">14%</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Avg Yearly ROI</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-black text-cyan-400">98.5%</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-black text-cyan-400">1,200+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Homes Transacted</div>
          </div>
        </div>
      </section>

      {/* Properties Catalog */}
      <section className="py-24 max-w-6xl mx-auto px-6" id="properties">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">
              Curated Portfolio
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Featured Brokerage Properties
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {['all', 'villa', 'penthouse', 'house', 'apartment'].map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all ${
                  filterType === t
                    ? 'bg-cyan-500 text-black'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProperties.map((p) => (
            <div
              key={p.id}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden group hover:border-cyan-500/35 transition-all duration-300"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-cyan-400 font-bold font-heading">
                  {p.price}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold font-heading text-white">{p.title}</h3>
                <p className="flex items-center gap-1 text-slate-400 text-xs font-light">
                  <MapPin size={12} className="text-cyan-400" />
                  <span>{p.loc}</span>
                </p>

                {/* Specs */}
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

      {/* Trust & Brokerage section */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-900" id="about">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
              alt="Brokerage meeting"
              className="rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute -inset-2 rounded-2xl border border-cyan-400/20 transform -rotate-1 pointer-events-none" />
          </div>
          <div className="space-y-6">
            <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">
              Elite Brokerage
            </span>
            <h2 className="text-3xl font-heading font-bold text-white">
              Why Invest With {brandName}?
            </h2>
            <p className="text-slate-400 leading-relaxed font-light text-sm">
              We operate at the upper echelons of the real estate market. Our brokers possess deep local insights, legal knowledge, and transaction wisdom to ensure your purchase or sale is secure, private, and highly profitable.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-cyan-400 flex-shrink-0" />
                <span>Off-Market private listings database</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-cyan-400 flex-shrink-0" />
                <span>Comprehensive investment valuation models</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-cyan-400 flex-shrink-0" />
                <span>Bespoke legal assistance & absolute confidentiality</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 max-w-4xl mx-auto px-6" id="inquiry">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 md:p-12 relative">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">
              Consultation Inquiry
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Book A Private Viewing
            </h2>
            <p className="text-slate-400 text-sm font-light mt-3">
              Fill in your contact parameters. Our managing broker will get in touch within 2 hours.
            </p>
          </div>

          {inquiryStatus === 'success' ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-5 text-cyan-400 text-3xl">
                ✓
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Inquiry Sent Successfully</h3>
              <p className="text-slate-300 mt-2 max-w-sm mx-auto text-sm leading-relaxed">
                Thank you, {inquiry.name}. We will reach out to you shortly at {inquiry.email}.
              </p>
              <button
                onClick={() => { setInquiryStatus('idle'); setInquiry({ name: '', email: '', phone: '', property: '' }); }}
                className="mt-6 text-cyan-400 text-xs uppercase tracking-wider font-bold hover:underline"
              >
                Inquire About Another Estate
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleInquiry} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={inquiry.name}
                  onChange={(e) => setInquiry(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. Robert Vance"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-800 text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={inquiry.email}
                  onChange={(e) => setInquiry(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="e.g. robert@vance.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-800 text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                <input
                  type="text"
                  required
                  value={inquiry.phone}
                  onChange={(e) => setInquiry(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="e.g. +1 (555) 987-6543"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-800 text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Select Estate of Interest</label>
                <select
                  value={inquiry.property}
                  onChange={(e) => setInquiry(prev => ({ ...prev, property: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 text-sm"
                >
                  <option value="">General Brokerage Inquiry</option>
                  {properties.map(p => <option key={p.id} value={p.title}>{p.title}</option>)}
                </select>
              </div>
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={inquiryStatus === 'loading'}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-black py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-all"
                >
                  {inquiryStatus === 'loading' ? 'Submitting Inquiry...' : 'Submit Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <div className="font-heading font-bold text-base text-cyan-400">🏢 {brandName}</div>
          <p>© {new Date().getFullYear()} {brandName}. High-end real estate brokerage.</p>
        </div>
      </footer>
    </div>
  );
}

export default function RealEstateDemo() {
  return (
    <DemoLayout defaultBrand="Luxe Living Estates" slug="real-estate">
      <RealEstateContent />
    </DemoLayout>
  );
}
