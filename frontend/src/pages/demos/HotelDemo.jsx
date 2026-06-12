import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DemoLayout, { useDemo, DemoLink } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { 
  Bed, 
  Star, 
  MapPin, 
  Compass, 
  Tv, 
  Wifi, 
  Utensils, 
  ShieldCheck, 
  ArrowRight, 
  Award, 
  Sparkles, 
  Clock, 
  HelpCircle,
  Calendar,
  Menu as MenuIcon, 
  X,
  Check
} from 'lucide-react';

function HotelNavbar({ isMobileOpen, setIsMobileOpen }) {
  const { brandName } = useDemo();
  return (
    <nav className="border-b border-[#c29b63]/15 bg-[#0a0f1d]/95 backdrop-blur-md sticky top-[68px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">
        <DemoLink to="home" className="font-heading font-bold text-2xl tracking-wider text-[#c29b63] flex items-center gap-1.5">
          <Compass size={24} className="text-[#c29b63] animate-pulse" />
          <span className="text-white truncate max-w-[150px] sm:max-w-[250px] md:max-w-none">{brandName}</span>
        </DemoLink>
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#a5abb5]">
          <DemoLink to="home" activeClassName="text-[#c29b63] font-bold" className="hover:text-[#c29b63] transition-colors">Home</DemoLink>
          <DemoLink to="about" activeClassName="text-[#c29b63] font-bold" className="hover:text-[#c29b63] transition-colors">Our Resort</DemoLink>
          <DemoLink to="rooms" activeClassName="text-[#c29b63] font-bold" className="hover:text-[#c29b63] transition-colors">Rooms</DemoLink>
          <DemoLink to="amenities" activeClassName="text-[#c29b63] font-bold" className="hover:text-[#c29b63] transition-colors">Amenities</DemoLink>
          <DemoLink to="gallery" activeClassName="text-[#c29b63] font-bold" className="hover:text-[#c29b63] transition-colors">Gallery</DemoLink>
          <DemoLink to="contact" activeClassName="text-[#c29b63] font-bold" className="hover:text-[#c29b63] transition-colors">Contact</DemoLink>
        </div>
        <div className="hidden lg:block">
          <DemoLink to="contact" className="bg-[#c29b63] hover:bg-[#b08852] text-black px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(194,155,99,0.2)]">
            Book Stay
          </DemoLink>
        </div>
        <button className="lg:hidden text-white hover:text-[#c29b63]" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-[#0a0f1d] border-b border-[#c29b63]/15 py-6 px-6 space-y-4 flex flex-col">
          <DemoLink to="home" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#c29b63]" className="text-sm font-semibold text-[#a5abb5]">Home</DemoLink>
          <DemoLink to="about" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#c29b63]" className="text-sm font-semibold text-[#a5abb5]">Our Resort</DemoLink>
          <DemoLink to="rooms" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#c29b63]" className="text-sm font-semibold text-[#a5abb5]">Rooms</DemoLink>
          <DemoLink to="amenities" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#c29b63]" className="text-sm font-semibold text-[#a5abb5]">Amenities</DemoLink>
          <DemoLink to="gallery" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#c29b63]" className="text-sm font-semibold text-[#a5abb5]">Gallery</DemoLink>
          <DemoLink to="contact" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#c29b63]" className="text-sm font-semibold text-[#a5abb5]">Contact</DemoLink>
          <DemoLink to="contact" onClick={() => setIsMobileOpen(false)} className="bg-[#c29b63] text-black text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider">
            Book Stay
          </DemoLink>
        </div>
      )}
    </nav>
  );
}

function HotelFooter() {
  const { brandName } = useDemo();
  return (
    <footer className="bg-[#050811] border-t border-[#c29b63]/15 py-16 text-xs text-[#a5abb5] font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <span className="font-heading font-bold text-xl tracking-wider text-[#c29b63] flex items-center gap-1.5">
            <Compass size={18} className="text-[#c29b63]" />
            {brandName}
          </span>
          <p className="leading-relaxed text-[#a5abb5]">
            A luxury ocean-front resort designed for high-end tranquility, private sand beach access, and Michelin dining guides.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 flex flex-col font-semibold">
            <DemoLink to="home" className="hover:text-[#c29b63] transition-colors">Home</DemoLink>
            <DemoLink to="about" className="hover:text-[#c29b63] transition-colors">Our Resort</DemoLink>
            <DemoLink to="rooms" className="hover:text-[#c29b63] transition-colors">Luxury Rooms</DemoLink>
            <DemoLink to="contact" className="hover:text-[#c29b63] transition-colors">Booking Desk</DemoLink>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Lodging</h4>
          <p className="text-[#a5abb5]">Ocean Vista Deluxe</p>
          <p className="text-[#a5abb5]">Skyline Imperial Suite</p>
          <p className="text-[#c29b63] font-semibold">Private Beach Sanctuary</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Operational Desk</h4>
          <p className="flex items-center gap-2 text-[#a5abb5]"><MapPin size={12} className="text-[#c29b63]" /> 123 Resort Blvd, Sand City</p>
          <p className="flex items-center gap-2 text-[#a5abb5]"><Phone size={12} className="text-[#c29b63]" /> +1 (555) 789-0123</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {brandName}. High hospitality sanctuary.</p>
        <div className="flex gap-4 text-slate-500">
          <a href="#" className="hover:text-[#c29b63]">Instagram</a>
          <a href="#" className="hover:text-[#c29b63]">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

function HotelInnerHeader({ title, subtitle }) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a0f1d] via-[#050811] to-[#050811] border-b border-[#c29b63]/10 text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#c29b63]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white uppercase tracking-tight">{title}</h1>
        <p className="text-[#a5abb5] text-base font-light max-w-xl mx-auto">{subtitle}</p>
        <div className="flex justify-center items-center gap-2 text-xs text-zinc-500 mt-6">
          <DemoLink to="home" className="hover:text-[#c29b63]">Home</DemoLink>
          <span>/</span>
          <span className="text-[#c29b63] capitalize">{title}</span>
        </div>
      </div>
    </section>
  );
}

function HotelFAQ({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="py-24 bg-[#0a0f1d] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#c29b63] text-xs font-bold tracking-[3px] uppercase">Concierge Desk</span>
          <h2 className="text-3xl font-heading font-bold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#0d1428] border border-[#c29b63]/10 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 font-heading font-bold text-white flex justify-between items-center hover:bg-[#0d1428]/85 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-[#c29b63]">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-[#a5abb5] leading-relaxed font-light border-t border-[#c29b63]/5 pt-4">
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
      {/* 2. Premium Hero Section */}
      <header className="relative py-32 md:py-48 text-center overflow-hidden flex items-center justify-center min-h-[85vh]">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80')" }} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent z-15 pointer-events-none" />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-[#c29b63] text-xs font-bold tracking-[5px] uppercase bg-[#c29b63]/10 border border-[#c29b63]/20 px-4 py-1.5 rounded-full inline-block">
            5-Star Resort Sanctuary
          </span>
          <h1 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-heading font-light text-white leading-tight uppercase">
            Indulge in absolute Peace At <span className="font-semibold text-[#c29b63]">{brandName}</span>
          </h1>
          <p className="text-[#a5abb5] text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Pristine beachfront properties, world-class thermal spas, and certified Michelin star culinary centers.
          </p>

          {/* Interactive Check Box */}
          <div className="bg-[#0d1428]/90 backdrop-blur-md border border-[#c29b63]/20 p-4 rounded-3xl max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center shadow-2xl mt-8 text-left text-xs">
            <div>
              <label className="block text-[10px] text-slate-500 uppercase font-black mb-1">Check-In</label>
              <input type="date" className="w-full bg-[#0a0f1d] border border-[#c29b63]/30 text-white rounded-xl px-3 py-2 text-xs focus:outline-none" />
            </div>
            <div>
              <label className="block text-[10px] text-slate-500 uppercase font-black mb-1">Check-Out</label>
              <input type="date" className="w-full bg-[#0a0f1d] border border-[#c29b63]/30 text-white rounded-xl px-3 py-2 text-xs focus:outline-none" />
            </div>
            <div>
              <label className="block text-[10px] text-slate-500 uppercase font-black mb-1">Guests</label>
              <select className="w-full bg-[#0a0f1d] border border-[#c29b63]/30 text-white rounded-xl px-3 py-2 text-xs focus:outline-none">
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>4 Adults (Suite)</option>
              </select>
            </div>
            <DemoLink to="rooms" className="w-full bg-[#c29b63] hover:bg-[#b08852] text-black py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_10px_rgba(194,155,99,0.2)] text-center">
              Check Suites
            </DemoLink>
          </div>
        </div>
      </header>

      {/* 3. Trust Stats */}
      <section className="bg-[#0a0f1d] border-y border-[#c29b63]/10 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-[#0d1428]/55 rounded-2xl border border-[#c29b63]/10 hover:border-[#c29b63]/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-[#c29b63]">400m</div>
            <div className="text-xs text-[#a5abb5] uppercase tracking-wider mt-2">Private Sand Beach</div>
          </div>
          <div className="p-6 bg-[#0d1428]/55 rounded-2xl border border-[#c29b63]/10 hover:border-[#c29b63]/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-[#c29b63]">2 Michelin</div>
            <div className="text-xs text-[#a5abb5] uppercase tracking-wider mt-2">Dining Outlets</div>
          </div>
          <div className="p-6 bg-[#0d1428]/55 rounded-2xl border border-[#c29b63]/10 hover:border-[#c29b63]/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-[#c29b63]">99.8%</div>
            <div className="text-xs text-[#a5abb5] uppercase tracking-wider mt-2">Luxury Rating</div>
          </div>
          <div className="p-6 bg-[#0d1428]/55 rounded-2xl border border-[#c29b63]/10 hover:border-[#c29b63]/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-[#c29b63]">24/7</div>
            <div className="text-xs text-[#a5abb5] uppercase tracking-wider mt-2">Butler Roster</div>
          </div>
        </div>
      </section>

      {/* 4. About Preview */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-[#c29b63] text-xs font-bold tracking-[3px] uppercase flex items-center gap-2">
            <Sparkles size={14} /> Luxury Serenity Standard
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-light text-white leading-tight uppercase font-heading">
            Tranquility Built Over <span className="font-semibold text-[#c29b63]">Ocean Horizons</span>
          </h2>
          <p className="text-[#a5abb5] leading-relaxed font-light text-sm md:text-base">
            {brandName} is a high-end ocean sanctuary designed to prioritize client relaxation. We structure rooms with private views, thermal bath cabins, and 24/7 personalized concierge transit.
          </p>
          <DemoLink to="about" className="text-[#c29b63] font-extrabold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 hover:underline group">
            <span>Explore Our Resort Grounds</span> 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </DemoLink>
        </div>
        <div className="relative group">
          <div className="absolute -inset-2 rounded-2xl border border-[#c29b63]/10 transform rotate-1 pointer-events-none group-hover:rotate-0 transition-transform duration-300" />
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" alt="Resort pool horizon" className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3] border border-[#c29b63]/10" />
        </div>
      </section>

      {/* 5. Luxury Rooms Preview */}
      <section className="py-24 bg-[#0d1428]/50 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#c29b63] text-xs font-bold tracking-[3px] uppercase">Lodging</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase font-heading font-light">Luxury Suites</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Ocean Vista Deluxe', price: '$220', view: 'Ocean Front', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
              { title: 'Skyline Imperial Suite', price: '$450', view: 'Skyline Panoramic', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80' }
            ].map((r, idx) => (
              <div key={idx} className="bg-[#0a0f1d] border border-[#c29b63]/10 rounded-2xl overflow-hidden group hover:border-[#c29b63]/20 transition-all duration-300">
                <div className="h-60 overflow-hidden relative">
                  <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 right-4 bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 text-xs font-bold text-[#c29b63]">
                    {r.price} / Night
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold font-heading text-white">{r.title}</h3>
                  <p className="text-xs text-[#a5abb5]">View: {r.view}</p>
                  <DemoLink to="rooms" className="w-full text-center py-2.5 rounded-xl border border-[#c29b63]/30 text-[#c29b63] hover:bg-[#c29b63] hover:text-black transition-all font-bold text-xs uppercase block">Select Room</DemoLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Showcase Gallery */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#c29b63] text-xs font-bold tracking-[3px] uppercase">Atmosphere</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading font-light">Resort Captures</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80" alt="Resort 1" className="rounded-2xl object-cover w-full aspect-square border border-[#c29b63]/10" />
          <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=500&q=80" alt="Resort 2" className="rounded-2xl object-cover w-full aspect-square border border-[#c29b63]/10" />
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80" alt="Resort 3" className="rounded-2xl object-cover w-full aspect-square border border-[#c29b63]/10" />
        </div>
      </section>

      {/* 7. Industry Specific Widget (Luxury Services list) */}
      <section className="py-24 bg-[#0d1428]/30 border-t border-[#c29b63]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 bg-[#0d1428] border border-[#c29b63]/20 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-[#c29b63] text-xs font-bold tracking-[3px] uppercase">Services</span>
            <h3 className="text-2xl font-heading font-bold text-white uppercase mt-2">Bespoke Guest Assets</h3>
            <p className="text-[#a5abb5] text-sm font-light leading-relaxed mt-4">
              We allocate dedicated butler teams for each Skyline suite to coordinate airport transit, restaurant reservations, and private yacht charters.
            </p>
          </div>
          <div className="bg-[#0a0f1d] border border-[#c29b63]/20 p-6 rounded-2xl space-y-4 text-xs text-[#a5abb5]">
            <div className="flex justify-between items-center">
              <span>Private Gated Helipad</span>
              <span className="text-[#c29b63] font-bold">Available</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Yacht Charter booking desk</span>
              <span className="text-[#c29b63] font-bold">24/7 access</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Private Butler Assigned</span>
              <span className="text-[#c29b63] font-bold">Skyline Suites</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Process (How We Work) */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#c29b63] text-xs font-bold tracking-[3px] uppercase">Arrival Flow</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading font-light">Our Booking Journey</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Reservation request', desc: 'Secure your suite package online via our encrypted concierge portal.' },
            { step: '02', title: 'Concierge Verification', desc: 'Discussing transport requirements and custom meal check cards.' },
            { step: '03', title: 'Private Transit', desc: 'Secure pickup at the airport lounge by our professional chauffeur.' },
            { step: '04', title: 'Suite Welcome', desc: 'Keyless biometric RFID card handovers and room service introduction.' }
          ].map((p, i) => (
            <div key={i} className="bg-[#0d1428]/10 border border-[#c29b63]/10 p-8 rounded-2xl relative space-y-3">
              <span className="text-[#c29b63]/10 text-5xl font-heading font-black block">{p.step}</span>
              <h3 className="font-heading font-bold text-white text-base">{p.title}</h3>
              <p className="text-[#a5abb5] text-xs font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Packages/Plans pricing */}
      <section className="py-24 bg-[#0d1428]/40 border-t border-[#c29b63]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#c29b63] text-xs font-bold tracking-[3px] uppercase">Rates</span>
            <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading font-light">Resort packages</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Ocean Vista Package', price: '$220', features: ['Ocean balcony view deluxe suite', 'Complimentary organic breakfast', 'Standard pool access'] },
              { name: 'Skyline Imperial Package', price: '$450', features: ['Skyline panoramic luxury suite', '24/7 Assigned Private butler', 'Michelin dining access included', 'Helipad transit'], featured: true },
              { name: 'VIP Beach Sanctuary', price: '$890', features: ['Detached sand villa property', 'Private pool and beach borders', 'Exclusive yacht cruise hours'] }
            ].map((pkg, idx) => (
              <div key={idx} className={`bg-[#0a0f1d] border rounded-2xl p-8 flex flex-col justify-between relative ${pkg.featured ? 'border-[#c29b63] shadow-xl' : 'border-[#c29b63]/10'}`}>
                {pkg.featured && <span className="absolute top-0 right-8 -translate-y-1/2 bg-[#c29b63] text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full font-sans">Premium Stay</span>}
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">{pkg.name}</h3>
                  <div className="text-3xl font-heading font-black text-[#c29b63] mt-4 mb-6">{pkg.price}<span className="text-slate-500 text-sm font-light">/night</span></div>
                  <ul className="space-y-3 mb-8 text-xs text-[#a5abb5] font-light">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2"><Check size={14} className="text-[#c29b63]" /> {f}</li>
                    ))}
                  </ul>
                </div>
                <DemoLink to="contact" className={`w-full py-3 rounded-xl font-bold uppercase text-xs text-center tracking-wider transition-all duration-300 ${pkg.featured ? 'bg-[#c29b63] hover:bg-[#b08852] text-black' : 'bg-[#0d1428] hover:bg-[#0d1428]/85 text-white'}`}>
                  Book Package
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
            { name: 'Sarah Miller', quote: `The ocean vista suite was an absolute dream. Flawless room service, clean pool beds, and highly professional concierge help.`, role: 'Private Guest' },
            { name: 'Michael Chen', quote: `The private butler resolved all yacht tour bookings instantly. We spent 3 days on the water without having to coordinate coordinates.`, role: 'Corporate Partner' },
            { name: 'Sophia Loren', quote: `Unbelievable dining recipes. The Michelin star restaurant on-site serves organic sea bass cooked to absolute perfection.`, role: 'Food Critic' }
          ].map((t, idx) => (
            <div key={idx} className="bg-[#0d1428]/40 border border-[#c29b63]/10 p-6 rounded-2xl space-y-4">
              <div className="flex text-[#c29b63]">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[#a5abb5] text-sm italic font-light leading-relaxed">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-white text-sm">{t.name}</h4>
                <span className="text-xs text-slate-550">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ Section */}
      <HotelFAQ 
        faqs={[
          { q: 'What are standard check-in hours?', a: 'Check-in opens at 03:00 PM. Check-out is scheduled by 11:00 AM. Late check-out requests are subject to schedule availability.' },
          { q: 'Is airport transit free?', a: 'Yes. All Skyline suite and detached villa reservations include complimentary airport lounge pickup services.' },
          { q: 'Do you allow pets?', a: 'Yes. Gated sand villa properties allow pets up to 25lbs. Concierge desk arranges organic pet sitting services.' }
        ]}
      />

      {/* 12. Strong CTA */}
      <section className="py-24 relative overflow-hidden bg-[#0a0f1d] border-t border-[#c29b63]/15 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,155,99,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-light text-white uppercase font-heading">Book Your Sanctuary Stay</h2>
          <p className="text-[#a5abb5] max-w-xl mx-auto font-light">Secure your luxury suite package online today. Gated airport transfer and private butler welcome included.</p>
          <div className="pt-4">
            <DemoLink to="contact" className="bg-[#c29b63] hover:bg-[#b08852] text-black px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block shadow-[0_0_15px_rgba(194,155,99,0.2)]">
              Secure Reservation Stay
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
    <div className="space-y-0 animate-fadeIn bg-[#0a0f1d]">
      <HotelInnerHeader title="Our Resort" subtitle={`Learn about luxury facilities and history at ${brandName}.`} />
      
      {/* 1. History Detailed */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-[#c29b63] text-xs font-bold tracking-[3px] uppercase">The Sanctuary</span>
          <h2 className="text-3xl font-heading font-bold text-white">Bespoke Comfort & Serenity</h2>
          <p className="text-[#a5abb5] leading-relaxed font-light text-sm md:text-base">
            {brandName} operates in high-end hospitality. We structure rooms with private views, ocean balconies, and advanced thermal spas to keep your vacation fully restorative.
          </p>
          <p className="text-[#a5abb5] leading-relaxed font-light text-sm md:text-base">
            Established in 2012, our property has hosted corporate retreats and high-profile guests looking for absolute privacy and shoreline beauty.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" alt="Pool layout" className="rounded-2xl border border-slate-800 shadow-2xl w-full object-cover aspect-[4/3]" />
        </div>
      </section>

      {/* 2. Core service standards */}
      <section className="py-24 bg-[#0d1428] border-y border-[#c29b63]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#c29b63] text-xs font-bold tracking-[3px] uppercase">Standards</span>
            <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading font-light">Service Standards</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Biometric RFID Keys', desc: 'Secure building unlock and private elevator codes linked to your check-in card.' },
              { title: 'Michelin Star Recipes', desc: 'Daily organic seafood selections harvested by local fishers and styled by chefs.' },
              { title: 'Thermal Spa Healing', desc: 'Contrast cold plunge beds and heated mud saunas to optimize blood pressure.' }
            ].map((p, i) => (
              <div key={i} className="bg-[#0a0f1d] border border-[#c29b63]/10 p-8 rounded-2xl space-y-3">
                <h3 className="text-lg font-bold font-heading text-white">{p.title}</h3>
                <p className="text-[#a5abb5] text-xs font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Resort Architecture */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#c29b63] text-xs font-bold tracking-[3px] uppercase">Property Grounds</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading font-light">resort architecture</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80" alt="Resort structure" className="rounded-2xl object-cover w-full aspect-square border border-[#c29b63]/10" />
          <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=500&q=80" alt="Boutique lobby" className="rounded-2xl object-cover w-full aspect-square border border-[#c29b63]/10" />
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80" alt="Beachfront property" className="rounded-2xl object-cover w-full aspect-square border border-[#c29b63]/10" />
        </div>
      </section>

      {/* 4. Credentials */}
      <section className="py-24 bg-[#0d1428] border-t border-[#c29b63]/15 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-6">
          <span className="text-[#c29b63] text-xs font-bold tracking-[3px] uppercase">Accreditations</span>
          <h2 className="text-2xl font-heading font-bold text-white uppercase font-heading font-light">Five-Star Accreditations</h2>
          <p className="text-[#a5abb5] text-xs leading-relaxed max-w-xl mx-auto font-light font-sans">
            Grand Haven is a certified five-star resort registry member. Regular guest service and kitchen audits are executed by international inspectors.
          </p>
        </div>
      </section>

      {/* 5. About FAQ */}
      <HotelFAQ 
        faqs={[
          { q: 'Is the beach open 24 hours?', a: 'Yes. Member beachfront paths are monitored by active security personnel 24/7.' },
          { q: 'How far is the resort from the airport?', a: 'We are located 18 miles from the international airport terminals, which is roughly 25 minutes of private transit.' }
        ]}
      />
    </div>
  );
}

// 3. ROOMS VIEW
function RoomsView() {
  const list = [
    { title: 'Ocean Vista Deluxe', price: '$220', view: 'Ocean Front', size: '650 sqft', capacity: '2 Adults', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
    { title: 'Skyline Imperial Suite', price: '$450', view: 'Skyline Panoramic', size: '1,200 sqft', capacity: '4 Adults', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <div className="space-y-0 animate-fadeIn bg-[#0a0f1d]">
      <HotelInnerHeader title="Rooms & Suites" subtitle="Explore details of premium stays." />

      {/* 1. Rooms Cards Grid */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {list.map((r, idx) => (
          <div key={idx} className="bg-[#0d1428] border border-[#c29b63]/10 rounded-2xl overflow-hidden group hover:border-[#c29b63]/30 transition-all">
            <div className="h-60 overflow-hidden relative">
              <img src={r.img} alt={r.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-lg border border-white/10 text-xs font-bold text-[#c29b63]">
                {r.price} / Night
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-bold font-heading text-white">{r.title}</h3>
              <p className="text-xs text-[#a5abb5]">View: {r.view} | Size: {r.size} | Capacity: {r.capacity}</p>
              <DemoLink to="contact" className="w-full text-center py-2.5 rounded-xl border border-[#c29b63]/30 text-[#c29b63] hover:bg-[#c29b63] hover:text-black transition-all font-bold text-xs uppercase block">Select Room</DemoLink>
            </div>
          </div>
        ))}
      </section>

      {/* 2. Room comparison matrix */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-[#c29b63]/10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#c29b63] text-xs font-bold tracking-[3px] uppercase">Compare Suites</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading font-light">Feature Matrix</h2>
        </div>
        <div className="overflow-x-auto border border-[#c29b63]/15 rounded-2xl bg-[#0d1428]">
          <table className="w-full text-left text-[#a5abb5] text-xs md:text-sm">
            <thead className="bg-[#0d1428] text-white font-heading font-bold uppercase tracking-wider text-[10px] border-b border-[#c29b63]/15">
              <tr>
                <th className="p-6">Feature</th>
                <th className="p-6">Ocean Vista</th>
                <th className="p-6">Skyline Imperial</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0a0f1d]">
              <tr>
                <td className="p-6 font-bold">Private Balcony View</td>
                <td className="p-6 text-[#c29b63]">✓</td>
                <td className="p-6 text-[#c29b63]">✓</td>
              </tr>
              <tr>
                <td className="p-6 font-bold">Assigned Butler Team</td>
                <td className="p-6 text-zinc-550">−</td>
                <td className="p-6 text-[#c29b63]">✓</td>
              </tr>
              <tr>
                <td className="p-6 font-bold">Michelin Dining Pass</td>
                <td className="p-6 text-zinc-550">−</td>
                <td className="p-6 text-[#c29b63]">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Concierge Services */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-[#c29b63]/10 text-center space-y-4">
        <h3 className="text-xl font-heading font-bold text-white uppercase">Personalized Room setups</h3>
        <p className="text-[#a5abb5] text-xs leading-relaxed max-w-xl mx-auto font-light">
          We arrange personalized floral decors and sommelier paired welcome bottles prior to guest check-in. Inquire with concierge desk post reservation.
        </p>
      </section>

      {/* 4. Rooms FAQ */}
      <HotelFAQ 
        faqs={[
          { q: 'Is there a minimum night stay requirement?', a: 'Standard stays require a 1-night minimum. Holiday packages may require a 3-night reservation block.' },
          { q: 'What is the child policy for rooms?', a: 'Children under 12 stay free of charge using existing bedding configurations. Rollaway beds are $50/night.' }
        ]}
      />
    </div>
  );
}

// 4. AMENITIES VIEW
function AmenitiesView() {
  return (
    <div className="space-y-0 animate-fadeIn bg-[#0a0f1d]">
      <HotelInnerHeader title="Resort Amenities" subtitle="Browse guest features." />
      
      {/* 1. Amenities Grid */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {[
          { title: 'World Class Spa', desc: 'Infrared saunas, mud baths, massage specialists.', icon: <Compass size={18} /> },
          { title: 'Michelin Dining', desc: 'Culinary recipes cooked by top world chefs.', icon: <Utensils size={18} /> },
          { title: 'Private Sand Beach', desc: 'Dedicated shoreline beds and wait staff.', icon: <Star size={18} /> },
          { title: 'Yacht Charters', desc: 'Secure boating excursions on ocean horizon.', icon: <Award size={18} /> }
        ].map((am, idx) => (
          <div key={idx} className="bg-[#0d1428] border border-[#c29b63]/10 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 bg-[#c29b63]/15 text-[#c29b63] rounded-full flex items-center justify-center mx-auto mb-4">
              {am.icon}
            </div>
            <h3 className="font-heading font-bold text-white text-base">{am.title}</h3>
            <p className="text-[#a5abb5] text-xs font-light">{am.desc}</p>
          </div>
        ))}
      </section>

      {/* 2. Spa rituals details */}
      <section className="py-24 bg-[#0d1428]/30 border-t border-[#c29b63]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-4">
          <h3 className="text-2xl font-heading font-bold text-white">Thermal Spa wellness</h3>
          <p className="text-[#a5abb5] text-sm font-light max-w-md mx-auto">
            Our spa employs premium organic minerals. Thermal mud sessions and salt therapy baths are structured to restore skin hydration.
          </p>
        </div>
      </section>

      {/* 3. Yacht excursions */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-[#c29b63]/10 text-center space-y-4">
        <h3 className="text-xl font-heading font-bold text-white uppercase">Yacht Excursions</h3>
        <p className="text-[#a5abb5] text-xs leading-relaxed max-w-xl mx-auto font-light">
          Bespoke sunset cruises leave the guest pier daily. Reservations are required at least 24 hours prior via the lobby coordination desk.
        </p>
      </section>

      {/* 4. Amenities FAQ */}
      <HotelFAQ 
        faqs={[
          { q: 'Is pool access free for kids?', a: 'Yes. All family children under supervised guidance have full access to our beachfront pool properties.' },
          { q: 'Do you rent snorkeling equipment?', a: 'Snorkeling masks, fins, and paddleboards are provided free of charge at our beachfront gear desk.' }
        ]}
      />
    </div>
  );
}

// 5. GALLERY VIEW
function GalleryView() {
  const images = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80'
  ];

  return (
    <div className="space-y-0 animate-fadeIn">
      <HotelInnerHeader title="Media Showcase" subtitle="Visual captures of beachfront and suites." />
      
      {/* 1. Image Grid */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div key={idx} className="group overflow-hidden rounded-2xl relative border border-[#c29b63]/10 bg-[#0d1428]">
            <img src={img} alt="Resort photo" className="w-full aspect-square object-cover transition-transform duration-700 ease-out group-hover:scale-108" />
          </div>
        ))}
      </section>

      {/* 2. Suite Tour Layout */}
      <section className="py-24 bg-[#0d1428]/30 border-t border-[#c29b63]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 bg-[#0d1428] border border-[#c29b63]/25 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-[#c29b63] text-xs font-bold tracking-[3px] uppercase">Virtual Tour</span>
            <h3 className="text-xl font-heading font-bold text-white uppercase mt-2">Suite Virtual Walkthrough</h3>
            <p className="text-[#a5abb5] text-xs font-light leading-relaxed mt-3">
              Explore room maps and balcony vistas remotely via our encrypted guest virtual walkthrough streams.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#c29b63]/20 relative aspect-video bg-black flex items-center justify-center">
            <span className="bg-black/85 text-[#c29b63] text-[10px] font-black uppercase px-2.5 py-1.5 rounded-full border border-[#c29b63]/20 z-15">Launch Virtual Walkthrough</span>
          </div>
        </div>
      </section>

      {/* 3. Booking CTA */}
      <section className="py-24 text-center">
        <DemoLink to="contact" className="bg-[#c29b63] hover:bg-[#b08852] text-black px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block shadow-[0_0_15px_rgba(194,155,99,0.2)]">
          Book Stay Online
        </DemoLink>
      </section>
    </div>
  );
}

// 6. CONTACT VIEW
function ContactView() {
  const { brandName } = useDemo();
  const [stay, setStay] = useState({ name: '', checkin: '', checkout: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setStay({ name: '', checkin: '', checkout: '' });
  };

  return (
    <div className="space-y-0 animate-fadeIn bg-[#0a0f1d]">
      <HotelInnerHeader title="Book Stay" subtitle={`Request reservation slots at ${brandName}.`} />
      
      {/* 1. Address / Phones */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Our Resort</h3>
            <p className="text-[#a5abb5] font-light flex items-center gap-2"><MapPin size={16} className="text-[#c29b63]" /> 123 Resort Blvd, Sand City</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase font-heading">Reservations Desk</h3>
            <p className="text-[#a5abb5] font-light flex items-center gap-2"><Phone size={16} className="text-[#c29b63]" /> +1 (555) 789-0123</p>
            <p className="text-[#a5abb5] font-light mt-2">Email: concierge@{brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Check-In details</h3>
            <div className="text-xs text-zinc-400 space-y-1 font-light">
              <p>Lobby Check-in desk opens at 03:00 PM</p>
              <p>In-suite checking available for Skyline package guests</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0d1428] p-8 rounded-2xl border border-[#c29b63]/25">
          <h3 className="font-heading font-bold text-xl text-white mb-6 uppercase">Request Booking</h3>
          {sent ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-center text-xs font-semibold font-sans">
              Thank you! Stay request logged. Concierge panel will call within 1 hour.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#a5abb5] mb-1.5 uppercase">Name</label>
                <input type="text" required value={stay.name} onChange={(e) => setStay({ ...stay, name: e.target.value })} className="w-full bg-[#0a0f1d] border border-[#c29b63]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#a5abb5] mb-1.5 uppercase">Check-in</label>
                  <input type="date" required value={stay.checkin} onChange={(e) => setStay({ ...stay, checkin: e.target.value })} className="w-full bg-[#0a0f1d] border border-[#c29b63]/30 rounded-xl px-4 py-2 text-white focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#a5abb5] mb-1.5 uppercase">Check-out</label>
                  <input type="date" required value={stay.checkout} onChange={(e) => setStay({ ...stay, checkout: e.target.value })} className="w-full bg-[#0a0f1d] border border-[#c29b63]/30 rounded-xl px-4 py-2 text-white focus:outline-none" />
                </div>
              </div>
              <button type="submit" className="w-full bg-[#c29b63] hover:bg-[#b08852] text-black py-3 rounded-xl font-bold uppercase text-xs tracking-wider">
                Request Stay Reservation
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 2. Mock map */}
      <section className="py-24 bg-[#0d1428]/30 border-t border-[#c29b63]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-[#0d1428] border border-[#c29b63]/20 rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-heading font-bold text-white uppercase">Property Directions</h4>
              <p className="text-[#a5abb5] text-xs max-w-md leading-relaxed font-light">
                Follow beachfront boulevard signs. Private gated valet check-in is located directly under the entry gates.
              </p>
            </div>
            <div className="w-full md:w-80 h-48 rounded-2xl bg-[#0a0f1d] border border-[#c29b63]/25 relative flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=500&q=80')" }} />
              <div className="relative z-10 text-center space-y-2">
                <MapPin size={24} className="text-[#c29b63] mx-auto" />
                <span className="text-[10px] text-zinc-550 uppercase tracking-widest block">24.4539° N, 54.3773° E</span>
                <span className="text-xs text-white font-bold">Grand Haven Gated Gates</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function HotelDemo() {
  const { subpage: urlSubpage } = useParams();
  const subpage = urlSubpage || 'home';
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const renderSubpage = () => {
    switch (subpage) {
      case 'about': return <AboutView />;
      case 'rooms': return <RoomsView />;
      case 'amenities': return <AmenitiesView />;
      case 'gallery': return <GalleryView />;
      case 'contact': return <ContactView />;
      case 'home':
      default: return <HomeView />;
    }
  };

  return (
    <DemoLayout defaultBrand="The Grand Haven Hotel" slug="hotel" currentSubpage={subpage}>
      <div className="bg-[#0a0f1d] text-[#d1d7e0] min-h-screen font-sans">
        <HotelNavbar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
        <main>{renderSubpage()}</main>
        <HotelFooter />
      </div>
    </DemoLayout>
  );
}
