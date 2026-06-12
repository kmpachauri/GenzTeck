import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DemoLayout, { useDemo, DemoLink } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Scissors, 
  Heart, 
  Star, 
  Calendar, 
  Clock, 
  Check, 
  MapPin, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Coffee, 
  HelpCircle,
  Menu as MenuIcon, 
  X 
} from 'lucide-react';

function SalonNavbar({ isMobileOpen, setIsMobileOpen }) {
  const { brandName } = useDemo();
  return (
    <nav className="border-b border-amber-600/10 bg-[#0f0b0a]/95 backdrop-blur-md sticky top-[68px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">
        <DemoLink to="home" className="font-heading font-semibold text-2xl tracking-wide text-amber-300 flex items-center gap-1.5">
          <Scissors size={22} className="rotate-90 text-amber-400 animate-pulse" />
          <span className="truncate max-w-[150px] sm:max-w-[250px] md:max-w-none">{brandName}</span>
        </DemoLink>
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#c7b2aa]">
          <DemoLink to="home" activeClassName="text-amber-300 font-bold" className="hover:text-amber-300 transition-colors">Home</DemoLink>
          <DemoLink to="about" activeClassName="text-amber-300 font-bold" className="hover:text-amber-300 transition-colors">Our Studio</DemoLink>
          <DemoLink to="services" activeClassName="text-amber-300 font-bold" className="hover:text-amber-300 transition-colors">Treatments</DemoLink>
          <DemoLink to="packages" activeClassName="text-amber-300 font-bold" className="hover:text-amber-300 transition-colors">Packages</DemoLink>
          <DemoLink to="gallery" activeClassName="text-amber-300 font-bold" className="hover:text-amber-300 transition-colors">Gallery</DemoLink>
          <DemoLink to="contact" activeClassName="text-amber-300 font-bold" className="hover:text-amber-300 transition-colors">Contact</DemoLink>
        </div>
        <div className="hidden lg:block">
          <DemoLink to="contact" className="bg-gradient-to-r from-amber-500 to-amber-700 hover:brightness-110 text-black px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            Book Now
          </DemoLink>
        </div>
        <button className="lg:hidden text-white hover:text-amber-300" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-[#0f0b0a] border-b border-amber-600/10 py-6 px-6 space-y-4 flex flex-col">
          <DemoLink to="home" onClick={() => setIsMobileOpen(false)} activeClassName="text-amber-300" className="text-sm font-semibold text-[#c7b2aa]">Home</DemoLink>
          <DemoLink to="about" onClick={() => setIsMobileOpen(false)} activeClassName="text-amber-300" className="text-sm font-semibold text-[#c7b2aa]">Our Studio</DemoLink>
          <DemoLink to="services" onClick={() => setIsMobileOpen(false)} activeClassName="text-amber-300" className="text-sm font-semibold text-[#c7b2aa]">Treatments</DemoLink>
          <DemoLink to="packages" onClick={() => setIsMobileOpen(false)} activeClassName="text-amber-300" className="text-sm font-semibold text-[#c7b2aa]">Packages</DemoLink>
          <DemoLink to="gallery" onClick={() => setIsMobileOpen(false)} activeClassName="text-amber-300" className="text-sm font-semibold text-[#c7b2aa]">Gallery</DemoLink>
          <DemoLink to="contact" onClick={() => setIsMobileOpen(false)} activeClassName="text-amber-300" className="text-sm font-semibold text-[#c7b2aa]">Contact</DemoLink>
          <DemoLink to="contact" onClick={() => setIsMobileOpen(false)} className="bg-gradient-to-r from-amber-500 to-amber-700 text-black text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider">
            Book Now
          </DemoLink>
        </div>
      )}
    </nav>
  );
}

function SalonFooter() {
  const { brandName } = useDemo();
  return (
    <footer className="bg-[#080505] border-t border-amber-900/10 py-16 text-xs text-[#8A8AA0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <span className="font-heading font-semibold text-xl tracking-wide text-amber-300 flex items-center gap-1.5">
            <Scissors size={20} className="rotate-90 text-amber-400" />
            {brandName}
          </span>
          <p className="leading-relaxed font-light text-[#c7b2aa]">
            A private organic beauty studio specialized in luxury hair styling, advanced facials, and relaxing massage therapies.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 flex flex-col">
            <DemoLink to="home" className="hover:text-amber-300 transition-colors">Home</DemoLink>
            <DemoLink to="about" className="hover:text-amber-300 transition-colors">Our Studio</DemoLink>
            <DemoLink to="services" className="hover:text-amber-300 transition-colors">Treatments</DemoLink>
            <DemoLink to="contact" className="hover:text-amber-300 transition-colors">Reservations</DemoLink>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Philosophy</h4>
          <p className="text-[#c7b2aa]">Vegan Botanical Facials</p>
          <p className="text-[#c7b2aa]">Cruelty-Free Balayage</p>
          <p className="text-amber-400 font-semibold">Complimentary Organic Wine</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Studio Info</h4>
          <p className="flex items-center gap-2 text-[#c7b2aa]"><MapPin size={12} className="text-amber-400" /> 789 Glamour Road, Beauty City</p>
          <p className="flex items-center gap-2 text-[#8A8AA0]"><Phone size={12} className="text-amber-400" /> +1 (555) 567-8901</p>
          <p className="text-[#8A8AA0] underline">salon@{brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-8 border-t border-amber-900/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {brandName}. Elegance & Organic care.</p>
        <div className="flex gap-4 text-zinc-550">
          <a href="#" className="hover:text-amber-300">Instagram</a>
          <a href="#" className="hover:text-amber-300">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}

function SalonInnerHeader({ title, subtitle }) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#181211] via-[#0f0b0a] to-[#0f0b0a] border-b border-amber-900/10 text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white uppercase tracking-tight">{title}</h1>
        <p className="text-[#c7b2aa] text-base font-light max-w-xl mx-auto">{subtitle}</p>
        <div className="flex justify-center items-center gap-2 text-xs text-zinc-500 mt-6">
          <DemoLink to="home" className="hover:text-amber-300">Home</DemoLink>
          <span>/</span>
          <span className="text-amber-300 capitalize">{title}</span>
        </div>
      </div>
    </section>
  );
}

function SalonFAQ({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="py-24 bg-[#0f0b0a] border-t border-amber-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-amber-400 text-xs font-bold tracking-[3px] uppercase">Studio Help</span>
          <h2 className="text-3xl font-heading font-semibold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#181211] border border-amber-900/10 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 font-heading font-bold text-white flex justify-between items-center hover:bg-[#181211]/80 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-amber-400">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-[#c7b2aa] leading-relaxed font-light border-t border-amber-900/5 pt-4">
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
        <div className="absolute inset-0 bg-black/65 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80')" }} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0f0b0a] via-transparent to-transparent z-15 pointer-events-none" />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-amber-400 text-xs font-bold tracking-[5px] uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full inline-block">
            Bespoke Wellness & Beauty
          </span>
          <h1 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-heading font-light text-white leading-tight">
            Indulge in Pure Organic Glow at <span className="font-bold text-amber-300">{brandName}</span>
          </h1>
          <p className="text-[#c7b2aa] text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Where senior artistic hair designers, organic skin therapy, and luxury lounge hospitality come together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <DemoLink to="services" className="bg-gradient-to-r from-amber-500 to-amber-700 text-black px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              View Treatments
            </DemoLink>
            <DemoLink to="packages" className="bg-transparent border border-white/20 hover:border-white hover:bg-white hover:text-black text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all duration-300">
              Wellness Packages
            </DemoLink>
          </div>
        </div>
      </header>

      {/* 3. Trust Stats */}
      <section className="bg-[#0f0b0a] border-y border-amber-900/10 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-[#181211]/55 rounded-2xl border border-amber-900/10 hover:border-amber-400/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-amber-300">100%</div>
            <div className="text-xs text-[#c7b2aa] uppercase tracking-wider mt-2">Organic Botanical</div>
          </div>
          <div className="p-6 bg-[#181211]/55 rounded-2xl border border-amber-900/10 hover:border-amber-400/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-amber-300">15+</div>
            <div className="text-xs text-[#c7b2aa] uppercase tracking-wider mt-2">Expert Stylists</div>
          </div>
          <div className="p-6 bg-[#181211]/55 rounded-2xl border border-amber-900/10 hover:border-amber-400/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-amber-300">4.9 Star</div>
            <div className="text-xs text-[#c7b2aa] uppercase tracking-wider mt-2">Client Rating</div>
          </div>
          <div className="p-6 bg-[#181211]/55 rounded-2xl border border-amber-900/10 hover:border-amber-400/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-amber-300">8k+</div>
            <div className="text-xs text-[#c7b2aa] uppercase tracking-wider mt-2">Happy Clients</div>
          </div>
        </div>
      </section>

      {/* 4. About Preview */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-amber-400 text-xs font-bold tracking-[3px] uppercase flex items-center gap-2">
            <Sparkles size={14} /> Clean Beauty Standard
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-light text-white leading-tight uppercase">
            A Sanctuary Built For <span className="font-bold text-amber-300">Botanical Care</span>
          </h2>
          <p className="text-[#c7b2aa] leading-relaxed font-light text-sm md:text-base">
            {brandName} was constructed to replace toxic salon products with premium organic components. We utilize sulfate-free botanical hair colors, vegan facial clays, and cruelty-free base minerals.
          </p>
          <DemoLink to="about" className="text-amber-300 font-extrabold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 hover:underline group">
            <span>Discover Our Studio Philosophy</span> 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </DemoLink>
        </div>
        <div className="relative group">
          <div className="absolute -inset-2 rounded-2xl border border-amber-500/10 transform rotate-1 pointer-events-none group-hover:rotate-0 transition-transform duration-300" />
          <img src="https://images.unsplash.com/photo-1595894154567-023c92f2254c?auto=format&fit=crop&w=800&q=80" alt="Studio spa chair" className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3] border border-amber-900/10" />
        </div>
      </section>

      {/* 5. Treatments Preview */}
      <section className="py-24 bg-[#181211]/50 border-y border-amber-900/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-[3px] uppercase">Rituals</span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white uppercase">Featured Treatments</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { title: 'Artistic Hair Sculpt', desc: 'Symmetric haircuts, herbal wash treatments, and custom blowout architecture.', icon: <Scissors className="text-amber-400" /> },
              { title: 'Hydrafacial Rejuvenation', desc: 'Resurfacing treatments using organic plant-based serums and gentle extraction.', icon: <Sparkles className="text-amber-400" /> },
              { title: 'Rosemary Oil Scalp Spa', desc: 'Deep follicle nourishment using raw rosemary, mint oils, and head massage.', icon: <Heart className="text-amber-400" /> }
            ].map((s, idx) => (
              <div key={idx} className="bg-[#0f0b0a] border border-amber-900/10 p-8 rounded-2xl space-y-4 hover:border-amber-400/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-450 group-hover:text-black transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-white">{s.title}</h3>
                <p className="text-[#c7b2aa] text-xs font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <DemoLink to="services" className="bg-transparent border border-amber-400 text-amber-300 hover:bg-amber-450 hover:text-black px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block">
              View All Treatments
            </DemoLink>
          </div>
        </div>
      </section>

      {/* 6. Transformations Gallery */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-amber-400 text-xs font-bold tracking-[3px] uppercase">Studio Work</span>
          <h2 className="text-3xl font-heading font-semibold text-white uppercase">Styling Results</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Honey Balayage Highlight', artist: 'Elena', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=400&q=80' },
            { title: 'Warm Rosewood Tone', artist: 'Elena', img: 'https://images.unsplash.com/photo-1595894154567-023c92f2254c?auto=format&fit=crop&w=400&q=80' },
            { title: 'Botanical Skin Resurfacing', artist: 'Clara', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80' }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#181211] border border-amber-900/10 rounded-2xl overflow-hidden hover:border-amber-400/20 transition-all duration-300 group">
              <div className="h-60 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h4 className="font-heading font-bold text-white text-base">{item.title}</h4>
                <span className="text-xs text-amber-450 font-light block mt-1">Lead Artist: {item.artist}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Industry Specific Widget (Ritual Timeline) */}
      <section className="py-24 bg-[#181211]/30 border-t border-amber-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 bg-[#181211] border border-amber-900/20 p-8 md:p-12 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-heading font-semibold text-white uppercase">Personalized Hair & Skin Rituals</h3>
            <p className="text-[#c7b2aa] text-sm font-light mt-3 leading-relaxed">
              We compile personal hair and skin diagnostics. Every client receives a custom treatment routine outlining product formulations.
            </p>
          </div>
          <div className="bg-[#0f0b0a] border border-amber-900/20 p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 text-xs text-[#c7b2aa]">
              <span className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">1</span>
              <span>Postural & Scalp Assessment</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#c7b2aa]">
              <span className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">2</span>
              <span>Custom pH Balanced Botanical Washing</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#c7b2aa]">
              <span className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">3</span>
              <span>Post-care Organic Conditioning Oil allocation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Process (How We Work) */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-amber-400 text-xs font-bold tracking-[3px] uppercase">The Experience</span>
          <h2 className="text-3xl font-heading font-semibold text-white uppercase">Our Studio Ritual</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Consultation', desc: 'Discussing hair history, color goals, and checking scalp oil balances.' },
            { step: '02', title: 'Botanical Wash', desc: 'Heated massage tables with deep rosemary and mint oil hydration.' },
            { step: '03', title: 'Aesthetic Cut', desc: 'Precision styling matching your facial angles and hair texture.' },
            { step: '04', title: 'Style & Wine', desc: 'Final blowouts accompanied by complementary organic wine or tea.' }
          ].map((p, i) => (
            <div key={i} className="bg-[#181211]/20 border border-amber-900/10 p-8 rounded-2xl relative space-y-3">
              <span className="text-amber-500/10 text-5xl font-heading font-black block">{p.step}</span>
              <h3 className="font-heading font-bold text-white text-base">{p.title}</h3>
              <p className="text-[#c7b2aa] text-xs font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Packages Preview */}
      <section className="py-24 bg-[#181211]/50 border-t border-amber-900/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-[3px] uppercase">Beauty Packs</span>
            <h2 className="text-3xl font-heading font-semibold text-white uppercase">Curated Packages</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Bridal Essentials', price: '$299', features: ['Bridal hair trial & styling', 'Airbrush wedding makeup', 'Gel luxury manicure'] },
              { name: 'Restorative Ritual', price: '$180', features: ['Deep Cleanse Hydrafacial', 'Hot Stone Renewal Massage', 'Rose petal soak'], featured: true },
              { name: 'Hair Wellness Pack', price: '$240', features: ['Organic color balayage', 'Scalp hydration mask', 'Designer blowdry styling'] }
            ].map((pkg, idx) => (
              <div key={idx} className={`bg-[#0f0b0a] border rounded-2xl p-8 flex flex-col justify-between relative ${pkg.featured ? 'border-amber-500 shadow-xl' : 'border-amber-900/10'}`}>
                {pkg.featured && <span className="absolute top-0 right-8 -translate-y-1/2 bg-amber-500 text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Popular</span>}
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">{pkg.name}</h3>
                  <div className="text-3xl font-heading font-black text-amber-300 mt-4 mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8 text-xs text-[#c7b2aa]">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2"><Check size={14} className="text-amber-400" /> {f}</li>
                    ))}
                  </ul>
                </div>
                <DemoLink to="packages" className={`w-full py-3 rounded-xl font-bold uppercase text-xs text-center tracking-wider transition-all duration-300 ${pkg.featured ? 'bg-amber-450 hover:brightness-110 text-black' : 'bg-[#181211] hover:bg-[#181211]/85 text-white'}`}>
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
            { name: 'Sarah Miller', quote: `The balayage results are stunning. Elena blended the tones perfectly, and my hair feels healthier than ever.`, role: 'Model' },
            { name: 'Michael Chen', quote: `Excellent service. The heated massage chairs during the botanical wash are incredible. Highly recommend the hair wellness package.`, role: 'Client' },
            { name: 'Sophia Loren', quote: `Best hydrafacial I have had. All vegan formulas, clean smells, and my skin had a gorgeous glow for days.`, role: 'Aesthetician' }
          ].map((t, idx) => (
            <div key={idx} className="bg-[#181211]/40 border border-amber-900/10 p-6 rounded-2xl space-y-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[#c7b2aa] text-sm italic font-light leading-relaxed">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-white text-sm">{t.name}</h4>
                <span className="text-xs text-zinc-550">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ Section */}
      <SalonFAQ 
        faqs={[
          { q: 'Do you accept walk-ins?', a: 'We recommend booking online slots to secure optimal times. However, we hold a few walk-in slots for basic cuts and washes daily.' },
          { q: 'What organic color brands do you use?', a: 'We utilize certified ammonia-free and botanical colors enriched with argan and rosemary oil to prevent hair cuticle damage.' },
          { q: 'What is your cancellation policy?', a: 'Please reschedule or cancel appointments at least 24 hours prior. Cancellations within 12 hours undergo a 50% reservation fee.' }
        ]}
      />

      {/* 12. Strong CTA */}
      <section className="py-24 relative overflow-hidden bg-[#0f0b0a] border-t border-amber-900/10 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-semibold text-white uppercase">Experience Clean Beauty Care</h2>
          <p className="text-[#c7b2aa] max-w-xl mx-auto font-light">Book your organic treatment today. Complimentary wine and head massages included.</p>
          <div className="pt-4">
            <DemoLink to="contact" className="bg-gradient-to-r from-amber-500 to-amber-700 text-black px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block shadow-md">
              Secure Appointment Slot
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
      <SalonInnerHeader title="Our Studio" subtitle={`Discover the history, organic methods, and team at ${brandName}.`} />
      
      {/* 1. Sanctuary Story */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-amber-400 text-xs font-bold tracking-[3px] uppercase">The Sanctuary</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase">Elegance & Safety Focused</h2>
          <p className="text-[#c7b2aa] leading-relaxed font-light text-sm md:text-base">
            {brandName} was built to provide a toxic-free beauty sanctuary. We curate clean hair colors, vegan facials, and organic spa scrubs that enhance your look without compromising on health.
          </p>
          <p className="text-[#c7b2aa] leading-relaxed font-light text-sm md:text-base">
            Our team comprises senior stylists certified in advanced European cutting styles and molecular facial therapy techniques.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1595894154567-023c92f2254c?auto=format&fit=crop&w=800&q=80" alt="Spa setup" className="rounded-2xl border border-amber-900/10 shadow-2xl w-full object-cover aspect-[4/3]" />
        </div>
      </section>

      {/* 2. Organic Values */}
      <section className="py-24 bg-[#181211]/30 border-y border-amber-900/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-[3px] uppercase">Core values</span>
            <h2 className="text-3xl font-heading font-semibold text-white uppercase">Our Studio Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Sulfate-Free Formulas', desc: 'No harsh detergents. We wash using coconut-derived cleaners and tea tree extracts.' },
              { title: 'Cruelty-Free Testing', desc: 'Every compound we stock is certified vegan and organic, with zero animal trials.' },
              { title: 'Heated Comfort', desc: 'Heated massage cushions and somatic sound loops to support client nervous system rest.' }
            ].map((v, i) => (
              <div key={i} className="bg-[#181211] border border-amber-900/10 p-8 rounded-2xl space-y-3">
                <h3 className="text-lg font-bold font-heading text-white">{v.title}</h3>
                <p className="text-[#c7b2aa] text-xs font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Facility Showcase */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-amber-400 text-xs font-bold tracking-[3px] uppercase">Our Studio</span>
          <h2 className="text-3xl font-heading font-semibold text-white uppercase">The Lounge & Rooms</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=500&q=80" alt="Room 1" className="rounded-2xl object-cover w-full aspect-square border border-amber-900/10" />
          <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=500&q=80" alt="Room 2" className="rounded-2xl object-cover w-full aspect-square border border-amber-900/10" />
          <img src="https://images.unsplash.com/photo-1595894154567-023c92f2254c?auto=format&fit=crop&w=500&q=80" alt="Room 3" className="rounded-2xl object-cover w-full aspect-square border border-amber-900/10" />
        </div>
      </section>

      {/* 4. Credentials */}
      <section className="py-24 bg-[#181211] border-t border-amber-900/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-6">
          <span className="text-amber-400 text-xs font-bold tracking-[3px] uppercase">Accreditations</span>
          <h2 className="text-2xl font-heading font-semibold text-white uppercase">Licensed Beauty Professionals</h2>
          <p className="text-[#c7b2aa] text-xs leading-relaxed max-w-xl mx-auto font-light">
            All team members maintain cosmetology credentials. We perform weekly sanitation audits and carry organic cosmetic certifications.
          </p>
        </div>
      </section>

      {/* 5. FAQ */}
      <SalonFAQ 
        faqs={[
          { q: 'Is the studio child-friendly?', a: 'To maintain a relaxing sanctuary atmosphere for spa clients, we kindly request children are only brought during dedicated styling times.' },
          { q: 'Do you offer loyalty discounts?', a: 'Yes. Aura Beauty Club members receive a 10% credit back on all services, applicable for future treatments.' }
        ]}
      />
    </div>
  );
}

// 3. SERVICES VIEW
function ServicesView() {
  const [selectedCat, setSelectedCat] = useState('hair');

  const list = {
    hair: [
      { name: 'Signature Haircut & Style', price: '$85+', time: '60 min', desc: 'Consultation, wash, designer cut, and blowout tailored to your facial structure.' },
      { name: 'Balayage & Color Correction', price: '$220+', time: '180 min', desc: 'Hand-painted color highlights for a seamless, sun-kissed natural growth blend.' }
    ],
    spa: [
      { name: 'Deep Cleanse Hydrafacial', price: '$150', time: '75 min', desc: 'Multi-step skin resurfacing, pore extraction, and botanical serum hydration.' },
      { name: 'Hot Stone Renewal Massage', price: '$120', time: '60 min', desc: 'Deep muscle relaxation using hot volcanic basalt stones and organic argan oils.' }
    ]
  };

  return (
    <div className="space-y-0 animate-fadeIn bg-[#0f0b0a]">
      <SalonInnerHeader title="Treatments Menu" subtitle="Browse our certified hair and skin rejuvenation treatments." />

      {/* 1. Filter + Grid */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex justify-center gap-3 mb-10">
          {['hair', 'spa'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
                selectedCat === cat ? 'bg-amber-400 text-black shadow-md' : 'bg-[#181211] text-[#c7b2aa] border border-amber-900/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {list[selectedCat].map((item, idx) => (
            <div key={idx} className="bg-[#181211] border border-amber-900/10 p-6 rounded-2xl flex flex-col justify-between hover:border-amber-400/20 transition-all duration-300">
              <div className="flex justify-between items-start mb-3 gap-4">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">{item.name}</h3>
                  <span className="text-[10px] text-amber-400/70 font-semibold">{item.time} duration</span>
                </div>
                <span className="text-amber-300 font-bold font-heading text-lg">{item.price}</span>
              </div>
              <p className="text-[#c7b2aa] text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Master Colorist Consultation */}
      <section className="py-24 bg-[#181211]/30 border-t border-amber-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-4">
          <h3 className="text-2xl font-heading font-semibold text-white">Need a Color Correction?</h3>
          <p className="text-[#c7b2aa] text-sm font-light max-w-md mx-auto">
            Book a complimentary 15-minute diagnostic session with Lead Stylist Elena. We analyze cuticle porosity and skin tone matching.
          </p>
        </div>
      </section>

      {/* 3. Hair Health guidelines */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-amber-900/10 text-center space-y-4">
        <h3 className="text-xl font-heading font-semibold text-white uppercase">Aftercare Guidelines</h3>
        <p className="text-[#c7b2aa] text-xs leading-relaxed max-w-xl mx-auto font-light">
          We recommend waiting 48 hours before washing hair post balayage color treatment. Use sulfate-free botanical shampoos to lock in tone brightness.
        </p>
      </section>

      {/* 4. Service FAQ */}
      <SalonFAQ 
        faqs={[
          { q: 'Is the hydrafacial safe for sensitive skin?', a: 'Absolutely. We adjust suction parameters and employ organic aloe and chamomile base serums to prevent skin redness.' },
          { q: 'How long does balayage color last?', a: 'Balayage is designed for soft grow-out. Typically clients visit for touch-ups every 12 to 16 weeks.' }
        ]}
      />
    </div>
  );
}

// 4. PACKAGES VIEW
function PackagesView() {
  const { brandName } = useDemo();
  return (
    <div className="space-y-0 animate-fadeIn bg-[#0f0b0a]">
      <SalonInnerHeader title="Beauty Packages" subtitle="Select our seasonal bridal, bridal party, or restorative packages." />
      
      {/* 1. Packages Cards */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Bridal Essentials', price: '$299', items: ['Bridal hair trial & styling', 'Airbrush wedding makeup', 'Gel luxury manicure'] },
          { name: 'Restorative Ritual', price: '$180', items: ['Deep Cleanse Hydrafacial', 'Hot Stone Renewal Massage', 'Rose petal soak'], featured: true },
          { name: 'Studio Glow Trio', price: '$260', items: ['Signature Haircut & blowout', 'Hydrafacial express treatment', 'Complimentary organic wine'] }
        ].map((pkg, idx) => (
          <div key={idx} className={`bg-[#181211] border rounded-2xl p-8 flex flex-col justify-between ${pkg.featured ? 'border-amber-500 shadow-lg' : 'border-amber-900/10'}`}>
            <div>
              <h3 className="text-lg font-bold font-heading text-white">{pkg.name}</h3>
              <div className="text-3xl font-heading font-black text-amber-300 mt-4 mb-6">{pkg.price}</div>
              <ul className="space-y-3 mb-8 text-xs text-[#c7b2aa]">
                {pkg.items.map((f, i) => (
                  <li key={i} className="flex items-center gap-2"><Check size={14} className="text-amber-400" /> {f}</li>
                ))}
              </ul>
            </div>
            <DemoLink to="contact" className="w-full bg-amber-400 text-black py-3 rounded-xl font-bold uppercase text-xs text-center block transition-all">Book Package</DemoLink>
          </div>
        ))}
      </section>

      {/* 2. Ritual comparison matrix */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-amber-900/10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-amber-400 text-xs font-bold tracking-[3px] uppercase">Service Inclusions</span>
          <h2 className="text-3xl font-heading font-semibold text-white uppercase font-heading">Ritual comparison</h2>
        </div>
        <div className="overflow-x-auto border border-amber-900/10 rounded-2xl bg-[#181211]/30">
          <table className="w-full text-left text-[#c7b2aa] text-xs md:text-sm">
            <thead className="bg-[#181211] text-white font-heading font-bold uppercase tracking-wider text-[10px] border-b border-amber-900/10">
              <tr>
                <th className="p-6">Feature</th>
                <th className="p-6">Bridal Essentials</th>
                <th className="p-6">Restorative Ritual</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-900/10">
              <tr>
                <td className="p-6 font-bold">Heated Lounge Seating</td>
                <td className="p-6 text-amber-400">✓</td>
                <td className="p-6 text-amber-400">✓</td>
              </tr>
              <tr>
                <td className="p-6 font-bold">Complementary Organic Wine</td>
                <td className="p-6 text-amber-400">✓</td>
                <td className="p-6 text-amber-400">✓</td>
              </tr>
              <tr>
                <td className="p-6 font-bold">Post-care clay pack</td>
                <td className="p-6 text-zinc-550">−</td>
                <td className="p-6 text-amber-400">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Group Booking options */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-amber-900/10 text-center space-y-4">
        <h3 className="text-xl font-heading font-semibold text-white uppercase">Bridal Parties & Group Bookings</h3>
        <p className="text-[#c7b2aa] text-xs leading-relaxed max-w-xl mx-auto font-light">
          We cater to group bookings of up to 8 guests. Perfect for bridal parties or corporate spa retreats. Inquire at least 3 weeks prior.
        </p>
      </section>

      {/* 4. Package booking FAQ */}
      <SalonFAQ 
        faqs={[
          { q: 'Can I swap items inside a package?', a: 'Minor swaps (e.g. manicure instead of facial express) are allowed. Speak to guest relations during check-in.' },
          { q: 'Are tips included in package pricing?', a: 'Pricing excludes gratuity. Standard tips are 15-20% of the base package rate.' }
        ]}
      />
    </div>
  );
}

// 5. GALLERY VIEW
function GalleryView() {
  const photos = [
    { url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=500&q=80', title: 'Honey Balayage Highlight' },
    { url: 'https://images.unsplash.com/photo-1595894154567-023c92f2254c?auto=format&fit=crop&w=500&q=80', title: 'Warm Rosewood Tone' },
    { url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=500&q=80', title: 'Botanical Skin Facial' }
  ];

  return (
    <div className="space-y-0 animate-fadeIn">
      <SalonInnerHeader title="Visual Gallery" subtitle="Explore real hair styling and makeup results created by our stylists." />
      
      {/* 1. Image Grid */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((p, idx) => (
          <div key={idx} className="group overflow-hidden rounded-2xl relative border border-amber-900/10 bg-[#181211]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 p-5 flex flex-col justify-end">
              <h4 className="text-white font-bold font-heading text-base">{p.title}</h4>
            </div>
            <img src={p.url} alt={p.title} className="w-full aspect-square object-cover transition-transform duration-700 ease-out group-hover:scale-108" />
          </div>
        ))}
      </section>

      {/* 2. Before/After Restoration Mock */}
      <section className="py-24 bg-[#181211]/30 border-t border-amber-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 bg-[#181211] border border-amber-900/20 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-amber-400 text-xs font-bold tracking-[3px] uppercase">Color Restoration</span>
            <h3 className="text-xl font-heading font-semibold text-white uppercase mt-2">Cuticle correction</h3>
            <p className="text-[#c7b2aa] text-xs font-light leading-relaxed mt-3">
              We restore cuticles damaged by metal dyes and hard heat tools using deep organic moisture repair sequences.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-amber-900/10">
              <span className="bg-black/80 text-slate-400 text-[10px] font-black uppercase px-2 py-1 absolute z-15 mt-2 ml-2">Damaged</span>
              <img src="https://images.unsplash.com/photo-1595894154567-023c92f2254c?auto=format&fit=crop&w=250&q=80" alt="Damaged" className="w-full aspect-[4/3] object-cover grayscale" />
            </div>
            <div className="rounded-xl overflow-hidden border border-amber-500/20">
              <span className="bg-amber-400 text-black text-[10px] font-black uppercase px-2 py-1 absolute z-15 mt-2 ml-2">Restored</span>
              <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=250&q=80" alt="Restored" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-24 text-center">
        <DemoLink to="contact" className="bg-amber-400 text-black px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block">
          Request Booking Slot
        </DemoLink>
      </section>
    </div>
  );
}

// 6. CONTACT VIEW
function ContactView() {
  const { brandName } = useDemo();
  const [form, setForm] = useState({ name: '', date: '', artist: 'Elena' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', date: '', artist: 'Elena' });
  };

  return (
    <div className="space-y-0 animate-fadeIn">
      <SalonInnerHeader title="Book Appointment" subtitle={`Reserve your time slot at ${brandName} studio.`} />
      
      {/* 1. Address / Info */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Our Studio</h3>
            <p className="text-[#c7b2aa] font-light flex items-center gap-2"><MapPin size={16} className="text-amber-400" /> 789 Glamour Road, Beauty City</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Connect</h3>
            <p className="text-[#c7b2aa] font-light flex items-center gap-2"><Phone size={16} className="text-amber-400" /> +1 (555) 567-8901</p>
            <p className="text-[#c7b2aa] font-light mt-2">Email: contact@{brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Operational Hours</h3>
            <div className="text-xs text-zinc-400 space-y-1 font-light">
              <p>Monday - Friday: 09:00 AM - 08:00 PM</p>
              <p>Saturday: 09:00 AM - 06:00 PM</p>
              <p className="text-amber-450 font-semibold mt-1">Sip organic wine or herbal teas during all visits</p>
            </div>
          </div>
        </div>

        <div className="bg-[#181211] p-8 rounded-2xl border border-amber-900/20">
          <h3 className="font-heading font-bold text-xl text-white mb-6 uppercase font-heading">Book Appointment</h3>
          {sent ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-center text-xs font-semibold">
              Thank you! Your appointment request has been logged. We will call you to confirm.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#c7b2aa] mb-1.5 uppercase">Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-[#0f0b0a] border border-amber-900/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#c7b2aa] mb-1.5 uppercase">Preferred Date</label>
                <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full bg-[#0f0b0a] border border-amber-900/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#c7b2aa] mb-1.5 uppercase">Stylist</label>
                <select value={form.artist} onChange={(e) => setForm({ ...form, artist: e.target.value })} className="w-full bg-[#0f0b0a] border border-amber-900/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400">
                  <option value="Elena">Elena (Hair Artistic Lead)</option>
                  <option value="Clara">Clara (Nail Lead)</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-amber-700 text-black py-3 rounded-xl font-bold uppercase text-xs tracking-wider">
                Request Appointment Slot
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 2. Mock Map */}
      <section className="py-24 bg-[#181211]/30 border-t border-amber-900/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-[#181211] border border-amber-900/20 rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-heading font-semibold text-white uppercase">Our Studio Location</h4>
              <p className="text-[#c7b2aa] text-xs max-w-md leading-relaxed font-light">
                Located in the premium shopping square. Free parking is available for guests inside the underground garage.
              </p>
            </div>
            <div className="w-full md:w-80 h-48 rounded-2xl bg-[#0f0b0a] border border-amber-900/20 relative flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=500&q=80')" }} />
              <div className="relative z-10 text-center space-y-2">
                <MapPin size={24} className="text-amber-450 mx-auto" />
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">34.0522° N, 118.2437° W</span>
                <span className="text-xs text-white font-bold">Aura Beauty District</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function SalonDemo() {
  const { subpage: urlSubpage } = useParams();
  const subpage = urlSubpage || 'home';
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const renderSubpage = () => {
    switch (subpage) {
      case 'about': return <AboutView />;
      case 'services': return <ServicesView />;
      case 'packages': return <PackagesView />;
      case 'gallery': return <GalleryView />;
      case 'contact': return <ContactView />;
      case 'home':
      default: return <HomeView />;
    }
  };

  return (
    <DemoLayout defaultBrand="Aura Beauty Spa" slug="salon" currentSubpage={subpage}>
      <div className="bg-[#0f0b0a] text-[#ecdcd6] min-h-screen font-sans">
        <SalonNavbar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
        <main>{renderSubpage()}</main>
        <SalonFooter />
      </div>
    </DemoLayout>
  );
}
