import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DemoLayout, { useDemo, DemoLink } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ArrowRight, MessageSquare, Star, MapPin, Phone, Coffee, UtensilsCrossed, ShieldCheck, Heart, Sparkles, Award, Menu as MenuIcon, X, Check } from 'lucide-react';

function RestaurantNavbar({ isMobileOpen, setIsMobileOpen }) {
  const { brandName } = useDemo();
  return (
    <nav className="border-b border-[#D97706]/15 bg-[#0b0704]/95 backdrop-blur-md sticky top-[68px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">
        <DemoLink to="home" className="font-heading font-extrabold text-2xl tracking-tight text-[#FBBF24] flex items-center gap-2">
          🍳 {brandName}
        </DemoLink>
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#D1C7BD]">
          <DemoLink to="home" activeClassName="text-[#FBBF24]" className="hover:text-[#FBBF24] transition-colors">Home</DemoLink>
          <DemoLink to="about" activeClassName="text-[#FBBF24]" className="hover:text-[#FBBF24] transition-colors">Our Story</DemoLink>
          <DemoLink to="menu" activeClassName="text-[#FBBF24]" className="hover:text-[#FBBF24] transition-colors">Menu</DemoLink>
          <DemoLink to="gallery" activeClassName="text-[#FBBF24]" className="hover:text-[#FBBF24] transition-colors">Gallery</DemoLink>
          <DemoLink to="reservations" activeClassName="text-[#FBBF24]" className="hover:text-[#FBBF24] transition-colors">Reservations</DemoLink>
          <DemoLink to="contact" activeClassName="text-[#FBBF24]" className="hover:text-[#FBBF24] transition-colors">Contact</DemoLink>
        </div>
        <div className="hidden lg:block">
          <DemoLink to="reservations" className="bg-[#D97706] hover:bg-[#B45309] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all">
            Book a Table
          </DemoLink>
        </div>
        <button className="lg:hidden text-white hover:text-[#FBBF24]" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-[#0b0704] border-b border-[#D97706]/15 py-6 px-6 space-y-4 flex flex-col">
          <DemoLink to="home" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#FBBF24]" className="text-sm font-semibold text-[#D1C7BD]">Home</DemoLink>
          <DemoLink to="about" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#FBBF24]" className="text-sm font-semibold text-[#D1C7BD]">Our Story</DemoLink>
          <DemoLink to="menu" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#FBBF24]" className="text-sm font-semibold text-[#D1C7BD]">Menu</DemoLink>
          <DemoLink to="gallery" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#FBBF24]" className="text-sm font-semibold text-[#D1C7BD]">Gallery</DemoLink>
          <DemoLink to="reservations" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#FBBF24]" className="text-sm font-semibold text-[#D1C7BD]">Reservations</DemoLink>
          <DemoLink to="contact" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#FBBF24]" className="text-sm font-semibold text-[#D1C7BD]">Contact</DemoLink>
          <DemoLink to="reservations" onClick={() => setIsMobileOpen(false)} className="bg-[#D97706] text-white text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider">
            Book a Table
          </DemoLink>
        </div>
      )}
    </nav>
  );
}

function RestaurantFooter() {
  const { brandName } = useDemo();
  return (
    <footer className="bg-[#080504] border-t border-[#D97706]/15 py-16 text-xs text-[#8A8AA0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <span className="font-heading font-extrabold text-xl tracking-tight text-[#FBBF24]">🍳 {brandName}</span>
          <p className="leading-relaxed font-light text-[#D1C7BD]">
            Bespoke culinary experience focused on organic farm-to-table recipes, curated tasting menus, and unforgettable hospitality.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 flex flex-col">
            <DemoLink to="home" className="hover:text-white transition-colors">Home</DemoLink>
            <DemoLink to="about" className="hover:text-white transition-colors">Our Story</DemoLink>
            <DemoLink to="menu" className="hover:text-white transition-colors">Menu</DemoLink>
            <DemoLink to="reservations" className="hover:text-white transition-colors">Reservations</DemoLink>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Hours</h4>
          <p className="text-[#D1C7BD]">Mon - Fri: 11:30 AM - 10:00 PM</p>
          <p className="text-[#D1C7BD]">Sat - Sun: 10:00 AM - 11:00 PM</p>
          <p className="text-amber-400 font-semibold">Brunch: Sat & Sun 10:00 AM - 2:00 PM</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Contact Info</h4>
          <p className="flex items-center gap-2 text-[#D1C7BD]"><MapPin size={12} className="text-[#FBBF24]" /> 123 Gourmet Blvd, Food City</p>
          <p className="flex items-center gap-2 text-[#D1C7BD]"><Phone size={12} className="text-[#FBBF24]" /> +1 (555) 987-6543</p>
          <p className="text-[#D1C7BD] underline">reservations@{brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {brandName}. All rights reserved. Premium Gastronomy.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Yelp</a>
        </div>
      </div>
    </footer>
  );
}

// Subpage Inner Headers
function InnerHeader({ title, subtitle }) {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#120D0A] to-[#0b0704] border-b border-[#D97706]/10 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-3">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold text-white uppercase tracking-tight">{title}</h1>
        <p className="text-[#D1C7BD] text-base font-light max-w-xl mx-auto">{subtitle}</p>
        <div className="flex justify-center items-center gap-2 text-xs text-[#8A8AA0] mt-4">
          <DemoLink to="home" className="hover:text-[#FBBF24]">Home</DemoLink>
          <span>/</span>
          <span className="text-[#FBBF24] capitalize">{title}</span>
        </div>
      </div>
    </section>
  );
}

// FAQs Component
function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);
  const faqs = [
    { q: 'Do you cater to gluten-free or vegan diets?', a: 'Yes! Our tasting menu offers fully certified organic vegan and gluten-free adaptations. Please mention your requirements in the reservation notes.' },
    { q: 'Is there a dress code at the dining hall?', a: 'We recommend smart casual or semi-formal attire to align with the premium dining environment.' },
    { q: 'Do you accept walk-ins?', a: 'While we hold a few bar seating slots for walk-ins, we highly recommend booking reservations online to secure optimal table placements.' },
    { q: 'Can I host private corporate events?', a: 'Absolutely. We offer customized private dining packages with sommelier pairings for groups of up to 45 guests. Inquire via our contact form.' }
  ];

  return (
    <section className="py-24 bg-[#120D0A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#FBBF24] text-xs font-bold tracking-[3px] uppercase">Common Inquiries</span>
          <h2 className="text-3xl font-heading font-bold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#1b1511]/40 border border-[#D97706]/10 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 font-heading font-bold text-white flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-[#FBBF24]">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-[#D1C7BD] leading-relaxed font-light border-t border-[#D97706]/5 pt-4">
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
      {/* 2. Hero */}
      <header className="relative py-32 md:py-40 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/65 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')" }} />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-[#FBBF24] text-xs font-bold tracking-[5px] uppercase bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full inline-block">
            Bespoke Gastronomy Experience
          </span>
          <h1 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight uppercase">
            Savor the Art of Fine Dining at <span className="text-[#FBBF24]">{brandName}</span>
          </h1>
          <p className="text-[#D1C7BD] text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Experience award-winning cuisines cooked with culinary intelligence, fresh local produce, and a luxury dining setup.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <DemoLink to="menu" className="bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all">
              Explore Menu
            </DemoLink>
            <DemoLink to="reservations" className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all">
              Book Table
            </DemoLink>
          </div>
        </div>
      </header>

      {/* 3. Trust Stats */}
      <section className="bg-[#120D0A] border-y border-[#D97706]/10 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-[#FBBF24]">100%</div>
            <div className="text-xs text-[#D1C7BD] uppercase tracking-wider">Organic Partners</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-[#FBBF24]">3 Michelin</div>
            <div className="text-xs text-[#D1C7BD] uppercase tracking-wider">Star Recipes</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-[#FBBF24]">15k+</div>
            <div className="text-xs text-[#D1C7BD] uppercase tracking-wider">Happy Patrons</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-[#FBBF24]">24+</div>
            <div className="text-xs text-[#D1C7BD] uppercase tracking-wider">Signature Wines</div>
          </div>
        </div>
      </section>

      {/* 4. About Preview */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-[#FBBF24] text-xs font-bold tracking-[3px] uppercase flex items-center gap-2"><UtensilsCrossed size={14} /> Our Heritage</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">Crafting Memories, Savoring Tradition</h2>
          <p className="text-[#D1C7BD] leading-relaxed font-light">
            Every plate at {brandName} represents a chapter of our culinary story. We fuse local farm ingredients with classic European methods, offering a fresh modern twist to the dining standard.
          </p>
          <DemoLink to="about" className="text-[#FBBF24] font-bold text-sm tracking-wider uppercase inline-flex items-center gap-1.5 hover:underline">
            <span>Read Our Whole Story</span> <ArrowRight size={14} />
          </DemoLink>
        </div>
        <div className="relative">
          <div className="absolute -inset-2 rounded-2xl border border-[#D97706]/15 transform rotate-2 pointer-events-none" />
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80" alt="Dish styling" className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]" />
        </div>
      </section>

      {/* 5. Services/Menu Preview */}
      <section className="py-24 bg-[#120D0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-4 mb-16">
          <span className="text-[#FBBF24] text-xs font-bold tracking-[3px] uppercase">Menu Showcase</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Chef's Signature Selections</h2>
          <p className="text-[#D1C7BD] max-w-xl mx-auto font-light text-sm">Discover the handcrafted masterpieces that define our gastronomic reputation.</p>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Truffle Burrata Salad', price: '$18', desc: 'Fresh heirloom tomatoes, micro arugula, balsamic glaze, and pure Italian truffle oil.', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80' },
            { name: 'Pan-Seared Sea Bass', price: '$36', desc: 'Sautéed spinach, saffron cauliflower mash, and citrus brown butter emulsion.', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80' },
            { name: 'Deconstructed Tiramisu', price: '$14', desc: 'Espresso-soaked ladyfingers, velvety mascarpone cream, and organic dark cocoa.', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80' }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#1b1511]/40 border border-[#D97706]/10 rounded-2xl overflow-hidden group hover:border-[#D97706]/20 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between font-heading font-bold text-lg text-white">
                  <span>{item.name}</span>
                  <span className="text-[#FBBF24]">{item.price}</span>
                </div>
                <p className="text-[#D1C7BD] text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <DemoLink to="menu" className="bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block">
            View Full Menu
          </DemoLink>
        </div>
      </section>

      {/* 6. Featured Showcase / Gallery */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#FBBF24] text-xs font-bold tracking-[3px] uppercase">Atmosphere</span>
          <h2 className="text-3xl font-heading font-bold text-white">Our Fine Plating & Interiors</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" alt="Ribeye" className="rounded-xl object-cover w-full aspect-square border border-white/5 hover:scale-[1.02] transition-transform duration-300" />
          <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80" alt="Burger" className="rounded-xl object-cover w-full aspect-square border border-white/5 hover:scale-[1.02] transition-transform duration-300" />
          <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=500&q=80" alt="Cocktail" className="rounded-xl object-cover w-full aspect-square border border-white/5 hover:scale-[1.02] transition-transform duration-300" />
        </div>
      </section>

      {/* 7. Industry Specific Feature (Wine Pairing) */}
      <section className="py-24 bg-[#120D0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80" alt="Wine pouring" className="rounded-2xl border border-[#D97706]/15 shadow-2xl w-full object-cover aspect-[4/3]" />
          </div>
          <div className="space-y-6">
            <span className="text-[#FBBF24] text-xs font-bold tracking-[3px] uppercase flex items-center gap-2"><Sparkles size={14} /> Sommelier Pairing</span>
            <h2 className="text-3xl font-heading font-bold text-white">Curated Vintage Wine Pairing</h2>
            <p className="text-[#D1C7BD] leading-relaxed font-light">
              We offer exclusive wine pairings mapping organic Red, White, and Sparkling vintages to your specific tasting selection. Our certified sommelier handles pairings on the fly to maximize culinary harmony.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Process (Farm-to-Table Timeline) */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#FBBF24] text-xs font-bold tracking-[3px] uppercase">How We Work</span>
          <h2 className="text-3xl font-heading font-bold text-white">The Farm-to-Table Timeline</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Local Harvest', desc: 'Daily organic pickings from our trusted partners to ensure the absolute peak flavor profiles.' },
            { step: '02', title: 'Sous-Vide Curing', desc: 'Advanced cooking precision to preserve moisture, textures, and nutritional values.' },
            { step: '03', title: 'Artistic Plating', desc: 'Every plate is treated as a fresh canvas, balancing geometry, color, and culinary passion.' }
          ].map((p, i) => (
            <div key={i} className="bg-[#1b1511]/30 border border-[#D97706]/5 p-8 rounded-2xl space-y-3 relative text-center">
              <span className="text-[#D97706]/20 text-5xl font-heading font-black block">{p.step}</span>
              <h3 className="font-heading font-bold text-white text-lg">{p.title}</h3>
              <p className="text-[#D1C7BD] text-sm font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Pricing/Tasting Packages */}
      <section className="py-24 bg-[#120D0A]/50 border-t border-[#D97706]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#FBBF24] text-xs font-bold tracking-[3px] uppercase">Curated Dining</span>
            <h2 className="text-3xl font-heading font-bold text-white">Tasting Packages</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Heritage Board', price: '$85', items: ['3-Course custom selection', 'Organic salad starters', 'Standard table seating'] },
              { name: 'Michelin Journey', price: '$150', items: ['5-Course chef tasting', 'Sommelier wine pairing', 'Premium window seating'], featured: true },
              { name: 'Chef Sanctuary', price: '$220', items: ['7-Course signature board', 'Vintage wine selections', 'VIP private chef table'] }
            ].map((p, idx) => (
              <div key={idx} className={`bg-[#1b1511] border rounded-2xl p-8 flex flex-col justify-between ${p.featured ? 'border-[#FBBF24] shadow-[0_0_20px_rgba(251,191,36,0.1)]' : 'border-[#D97706]/10'}`}>
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">{p.name}</h3>
                  <div className="text-3xl font-heading font-black text-[#FBBF24] mt-4 mb-6">{p.price} <span className="text-xs text-[#8A8AA0] font-light">/ guest</span></div>
                  <ul className="space-y-3 mb-8 text-xs text-[#D1C7BD] font-light">
                    {p.items.map((f, i) => (
                      <li key={i} className="flex items-center gap-2"><Check size={14} className="text-[#FBBF24] flex-shrink-0" /> {f}</li>
                    ))}
                  </ul>
                </div>
                <DemoLink to="reservations" className="w-full bg-[#D97706] hover:bg-[#B45309] text-white py-3 rounded-xl font-bold uppercase text-xs text-center block transition-all">Book Tasting</DemoLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="py-24 bg-[#120D0A]/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { name: 'Sarah Miller', quote: `The tasting menu was an absolute explosion of textures. Outstanding wine list and extremely premium service.`, role: 'Gastronomy Critic' },
            { name: 'Michael Chen', quote: `Best ribeye I have ever tasted. The ambiance is beautifully luxurious yet cozy. We will definitely be regulars here.`, role: 'Food Enthusiast' },
            { name: 'Sophia Loren', quote: `Booked a private room for a corporate meeting. Everyone was wowed by the gourmet styling and flawless service.`, role: 'Corporate Partner' }
          ].map((t, idx) => (
            <div key={idx} className="bg-[#1b1511]/40 border border-[#D97706]/10 p-6 rounded-2xl space-y-4">
              <div className="flex text-[#FBBF24]">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[#D1C7BD] text-sm italic font-light leading-relaxed">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-white text-sm">{t.name}</h4>
                <span className="text-xs text-[#8A8AA0]">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQs */}
      <FAQSection />

      {/* 12. Strong CTA */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-[#1b1511] to-[#0b0704] text-center border-t border-[#D97706]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">Ready for an Unforgettable Culinary Experience?</h2>
          <p className="text-[#D1C7BD] max-w-xl mx-auto font-light">Join us today for a curated farm-to-table lunch, wine-tasting session, or corporate dinner.</p>
          <div className="pt-4">
            <DemoLink to="reservations" className="bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block shadow-md">Book Table Online</DemoLink>
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
      <InnerHeader title="Our Story" subtitle={`Learn about ${brandName}'s culinary mission, farm partners, and chef panel.`} />
      
      {/* Section 1: Detailed Story */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-[#FBBF24] text-xs font-bold tracking-[3px] uppercase">Since 2018</span>
          <h2 className="text-3xl font-heading font-bold text-white">Elevating the Gastronomy Landscape</h2>
          <p className="text-[#D1C7BD] leading-relaxed font-light">
            Founded by a collective of Michelin-trained chefs, {brandName} was established to challenge the standard dining format. We believe eating should engage all human senses, blending visual architecture with rich organic flavor paths.
          </p>
          <p className="text-[#D1C7BD] leading-relaxed font-light">
            Over the years, we have forged relationships with organic farmers, premium cheese houses, and global wine cellars to compile an ecosystem of authentic culinary assets.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" alt="Kitchen setup" className="rounded-2xl border border-[#D97706]/15 shadow-2xl w-full object-cover aspect-[4/3]" />
        </div>
      </section>

      {/* Section 2: Chefs Panel */}
      <section className="py-24 bg-[#120D0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-4 mb-16">
          <span className="text-[#FBBF24] text-xs font-bold tracking-[3px] uppercase">Masters of Taste</span>
          <h2 className="text-3xl font-heading font-bold text-white">Our Culinary Artists</h2>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Chef Jean-Luc', role: 'Head Executive Culinary Chef', bio: 'Over 15 years leading Michelin-star kitchens in Paris and Copenhagen.', img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80' },
            { name: 'Chef Elena Silva', role: 'Pastry & Dessert Lead', bio: 'Specialist in molecular pastry architecture and organic sugar reduction.', img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80' },
            { name: 'Marcus Sterling', role: 'Chief sommelier', bio: 'Curator of our global vintage cellars and personalized wine pairing tracks.', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' }
          ].map((chef, idx) => (
            <div key={idx} className="bg-[#1b1511]/30 border border-[#D97706]/5 rounded-2xl overflow-hidden text-center group">
              <div className="h-64 overflow-hidden">
                <img src={chef.img} alt={chef.name} className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-heading font-bold text-white text-lg">{chef.name}</h3>
                <span className="text-xs text-[#FBBF24] font-semibold block">{chef.role}</span>
                <p className="text-[#D1C7BD] text-xs font-light leading-relaxed pt-2">{chef.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Partners */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <img src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&w=800&q=80" alt="Local farm partner" className="rounded-2xl border border-white/5 w-full object-cover aspect-[4/3]" />
        </div>
        <div className="space-y-4">
          <span className="text-[#FBBF24] text-xs font-bold tracking-[3px] uppercase">Sustainability</span>
          <h2 className="text-3xl font-heading font-bold text-white">Our Farm Partners</h2>
          <p className="text-[#D1C7BD] leading-relaxed font-light text-sm">
            We collaborate with sustainable valleys and biodynamic farms within a 50-mile radius. That means daily shipments of crisp herbs, heritage roots, and premium organic oils are sent straight to our pans.
          </p>
        </div>
      </section>

      {/* Section 4: Awards */}
      <section className="py-24 bg-[#120D0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-8">
          <div className="space-y-4">
            <span className="text-[#FBBF24] text-xs font-bold tracking-[3px] uppercase">Accreditations</span>
            <h2 className="text-3xl font-heading font-bold text-white">Recognized Excellence</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: 'Best Fine Dining 2024', org: 'National Gastronomy Society', icon: <Award size={24} className="text-[#FBBF24] mx-auto" /> },
              { title: 'Organic Sourcing Accolade', org: 'Eco-Agriculture Trust', icon: <Heart size={24} className="text-[#FBBF24] mx-auto" /> },
              { title: 'Top Wine List Award', org: 'Sommelier Guild global', icon: <Sparkles size={24} className="text-[#FBBF24] mx-auto" /> }
            ].map((aw, i) => (
              <div key={i} className="bg-[#1b1511]/30 border border-[#D97706]/10 p-8 rounded-2xl space-y-3">
                {aw.icon}
                <h3 className="font-heading font-bold text-white text-lg">{aw.title}</h3>
                <p className="text-xs text-[#8A8AA0]">{aw.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// 3. MENU VIEW
function MenuView() {
  const [activeTab, setActiveTab] = useState('starters');

  const fullMenu = {
    starters: [
      { name: 'Citrus Cured Scallops', price: '$22', desc: 'Fresh Atlantic scallops cured in blood orange citrus juice, topped with avocado caviar oil and microgreens.', diet: 'Gluten-Free' },
      { name: 'Truffle Burrata & Prosciutto', price: '$19', desc: 'Creamy burrata accompanied by cured San Daniele prosciutto, wild rocket arugula, and aged balsamic glaze.', diet: 'Chef Pick' },
      { name: 'Roasted Artichoke Soup', price: '$16', desc: 'Velvety soup enriched with pine nuts, organic olive oil, and rosemary-infused house bread.', diet: 'Vegan' }
    ],
    mains: [
      { name: 'Wood-Fired Ribeye Steak', price: '$46', desc: '14oz grain-fed prime beef Ribeye cooked to order, served with smoked garlic butter and bone marrow jus.', diet: 'Chef Pick' },
      { name: 'Pan-Roasted Sea Bass', price: '$38', desc: 'Atlantic sea bass fillet, seasonal grilled asparagus, sweet potato purée, and butter saffron broth.', diet: 'Gluten-Free' },
      { name: 'Organic Porcini Tagliatelle', price: '$32', desc: 'Handmade fresh pasta, wild porcini mushrooms, white truffle oil cream, and shaved pecorino cheese.', diet: 'Vegetarian' }
    ],
    desserts: [
      { name: 'Liquid Chocolate Dome', price: '$15', desc: 'Valrhona chocolate dome melted at your table with hot salted caramel sauce, vanilla gelato.', diet: 'Chef Pick' },
      { name: 'Madagascar Crème Brûlée', price: '$12', desc: 'Velvety custard infused with organic vanilla beans, topped with a glass-like caramelized sugar crust.', diet: 'Gluten-Free' },
      { name: 'Vegan Berries Tart', price: '$13', desc: 'Almond meal crust, organic coconut cream filling, and topped with fresh wild forest berries.', diet: 'Vegan' }
    ]
  };

  return (
    <div className="space-y-0 animate-fadeIn bg-[#0f0b0a]">
      <InnerHeader title="Tasting Menu" subtitle="Browse our chef's hand-picked recipes and curated seasonal selections." />

      {/* Section 1: Categories */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex justify-center gap-4 border-b border-[#D97706]/15 pb-6 mb-12">
          {['starters', 'mains', 'desserts'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === cat ? 'bg-[#D97706] text-white' : 'bg-[#1b1511] text-[#D1C7BD] border border-[#D97706]/10 hover:border-[#D97706]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fullMenu[activeTab].map((item, i) => (
            <div key={i} className="bg-[#1b1511]/30 border border-[#D97706]/10 p-7 rounded-2xl flex flex-col justify-between hover:border-[#D97706]/25 transition-all">
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-heading font-bold text-lg text-white">{item.name}</h3>
                  <span className="text-[#FBBF24] font-bold font-heading text-lg">{item.price}</span>
                </div>
                <p className="text-[#D1C7BD] text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#FBBF24]/80 bg-[#FBBF24]/5 px-2.5 py-1 rounded-full border border-[#FBBF24]/10">
                  {item.diet}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Sommelier Pairing Guide */}
      <section className="py-16 bg-[#120D0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-4">
          <h3 className="text-2xl font-heading font-bold text-white">Looking for the Perfect Pairing?</h3>
          <p className="text-[#D1C7BD] text-sm font-light">Ask our resident sommelier Marcus Sterling for matching vintage selections to balance acidity and sweetness.</p>
        </div>
      </section>
    </div>
  );
}

// 4. GALLERY VIEW
function GalleryView() {
  const imgs = [
    { title: 'Crispy Cured Ribeye', cat: 'food', url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80' },
    { title: 'The Main Dining Hall', cat: 'interior', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80' },
    { title: 'Smoked Old Fashioned', cat: 'drinks', url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=500&q=80' },
    { title: 'Tasting Salad Prep', cat: 'food', url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80' },
    { title: 'Boutique Private Cabin', cat: 'interior', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80' },
    { title: 'Premium Red Vintage', cat: 'drinks', url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=500&q=80' }
  ];

  return (
    <div className="space-y-0 animate-fadeIn">
      <InnerHeader title="Visual Gallery" subtitle="A visual journey across our fine plating formats, luxury interiors, and sommelier cellars." />
      
      {/* Section 1: Image Grid */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {imgs.map((im, i) => (
          <div key={i} className="group overflow-hidden rounded-2xl relative border border-white/5 bg-[#1b1511]/40">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 p-5 flex flex-col justify-end">
              <span className="text-[10px] text-[#FBBF24] font-bold uppercase tracking-wider mb-1">{im.cat}</span>
              <h4 className="text-white font-bold font-heading text-base">{im.title}</h4>
            </div>
            <img src={im.url} alt={im.title} className="w-full aspect-square object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
          </div>
        ))}
      </section>
    </div>
  );
}

// 5. RESERVATIONS VIEW
function ReservationsView() {
  const { brandName } = useDemo();
  const [reservation, setReservation] = useState({ name: '', date: '', time: '', guests: '2', notes: '' });
  const [reserveStatus, setReserveStatus] = useState('idle');

  const handleBooking = (e) => {
    e.preventDefault();
    setReserveStatus('loading');
    setTimeout(() => {
      setReserveStatus('success');
    }, 1200);
  };

  return (
    <div className="space-y-0 animate-fadeIn bg-[#0f0b0a]">
      <InnerHeader title="Book A Table" subtitle={`Reserve your luxury seating at ${brandName}. Secured online slot allocation.`} />

      {/* Section 1: Form */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="bg-[#1b1511] rounded-3xl border border-[#D97706]/20 p-8 md:p-12 relative overflow-hidden">
          {reserveStatus === 'success' ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 text-3xl">✓</div>
              <h3 className="text-xl font-bold font-heading text-white">Table Reserved!</h3>
              <p className="text-[#D1C7BD] text-sm max-w-md mx-auto leading-relaxed">
                Thank you, {reservation.name}. We have registered your reservation for a table of {reservation.guests} on {reservation.date} at {reservation.time}. We will verify details shortly.
              </p>
              <button onClick={() => { setReserveStatus('idle'); setReservation({ name: '', date: '', time: '', guests: '2', notes: '' }); }} className="text-[#FBBF24] font-bold text-xs uppercase tracking-wider hover:underline">
                Make Another Booking
              </button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#D1C7BD] uppercase tracking-wider mb-2">Guest Name</label>
                <input
                  type="text"
                  required
                  value={reservation.name}
                  onChange={(e) => setReservation(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. John Doe"
                  className="w-full bg-[#0b0704] border border-[#D97706]/20 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#FBBF24]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#D1C7BD] uppercase tracking-wider mb-2">Number of Guests</label>
                <select
                  value={reservation.guests}
                  onChange={(e) => setReservation(prev => ({ ...prev, guests: e.target.value }))}
                  className="w-full bg-[#0b0704] border border-[#D97706]/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FBBF24] appearance-none"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="8">8+ Guests (Corporate)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#D1C7BD] uppercase tracking-wider mb-2">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-3 text-[#D97706] w-4 h-4 pointer-events-none" />
                  <input
                    type="date"
                    required
                    value={reservation.date}
                    onChange={(e) => setReservation(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full bg-[#0b0704] border border-[#D97706]/20 rounded-xl pl-12 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#FBBF24]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#D1C7BD] uppercase tracking-wider mb-2">Preferred Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-3 text-[#D97706] w-4 h-4 pointer-events-none" />
                  <input
                    type="time"
                    required
                    value={reservation.time}
                    onChange={(e) => setReservation(prev => ({ ...prev, time: e.target.value }))}
                    className="w-full bg-[#0b0704] border border-[#D97706]/20 rounded-xl pl-12 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#FBBF24]"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[#D1C7BD] uppercase tracking-wider mb-2">Special requests / Allergies</label>
                <textarea
                  value={reservation.notes}
                  onChange={(e) => setReservation(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="e.g. Vegetarian preference, anniversary setup, wheel-chair access..."
                  rows={4}
                  className="w-full bg-[#0b0704] border border-[#D97706]/20 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#FBBF24] resize-none"
                />
              </div>
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={reserveStatus === 'loading'}
                  className="w-full bg-[#D97706] hover:bg-[#B45309] text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center"
                >
                  {reserveStatus === 'loading' ? 'Securing Seating Slot...' : 'Confirm Table Booking'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

// 6. CONTACT VIEW
function ContactView() {
  const { brandName } = useDemo();
  const [form, setForm] = useState({ name: '', email: '', msg: '' });
  const [sent, setSent] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', msg: '' });
  };

  return (
    <div className="space-y-0 animate-fadeIn">
      <InnerHeader title="Contact Us" subtitle={`Reach out to the guest relations desk at ${brandName}.`} />
      
      {/* Section 1: Info & Form */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2">Our Location</h3>
            <p className="text-[#D1C7BD] font-light flex items-center gap-2"><MapPin size={16} className="text-[#FBBF24]" /> 123 Gourmet Blvd, Food City, FC 90210</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2">Reservations & Info</h3>
            <p className="text-[#D1C7BD] font-light flex items-center gap-2"><Phone size={16} className="text-[#FBBF24]" /> +1 (555) 987-6543</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2">Operational Hours</h3>
            <div className="text-sm text-[#D1C7BD] space-y-1 font-light">
              <p>Monday - Friday: 11:30 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1b1511] p-8 rounded-2xl border border-[#D97706]/10">
          <h3 className="font-heading font-bold text-xl text-white mb-6">Send a Message</h3>
          {sent ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-center text-xs font-semibold">
              Thank you! Your inquiry was sent successfully. We will reach back shortly.
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#D1C7BD] mb-1.5 uppercase">Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-[#0b0704] border border-[#D97706]/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#D1C7BD] mb-1.5 uppercase">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-[#0b0704] border border-[#D97706]/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#D1C7BD] mb-1.5 uppercase">Message</label>
                <textarea required rows={4} value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} className="w-full bg-[#0b0704] border border-[#D97706]/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#D97706] hover:bg-[#B45309] text-white py-3 rounded-xl font-bold uppercase text-xs tracking-wider">
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default function RestaurantDemo() {
  const { subpage: urlSubpage } = useParams();
  const subpage = urlSubpage || 'home';
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Dynamic Routing Switcher
  const renderSubpage = () => {
    switch (subpage) {
      case 'about': return <AboutView />;
      case 'menu': return <MenuView />;
      case 'gallery': return <GalleryView />;
      case 'reservations': return <ReservationsView />;
      case 'contact': return <ContactView />;
      case 'home':
      default: return <HomeView />;
    }
  };

  return (
    <DemoLayout defaultBrand="Spice Garden" slug="restaurant" currentSubpage={subpage}>
      <div className="bg-[#0b0704] text-[#F3EFE9] min-h-screen">
        <RestaurantNavbar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
        <main>{renderSubpage()}</main>
        <RestaurantFooter />
      </div>
    </DemoLayout>
  );
}
