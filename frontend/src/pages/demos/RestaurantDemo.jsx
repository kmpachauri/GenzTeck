import { useState } from 'react';
import DemoLayout, { useDemo } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ArrowRight, MessageSquare, Star, Phone, MapPin, Coffee, UtensilsCrossed, ShieldCheck } from 'lucide-react';

function RestaurantContent() {
  const { brandName } = useDemo();
  const [selectedCategory, setSelectedCategory] = useState('mains');
  const [reservation, setReservation] = useState({ name: '', date: '', time: '', guests: '2' });
  const [reserveStatus, setReserveStatus] = useState('idle');

  const menuItems = {
    starters: [
      { name: 'Crispy Calamari', price: '$14.99', desc: 'Lightly battered calamari served with zesty citrus aioli and fresh herbs.' },
      { name: 'Truffle Burrata', price: '$16.50', desc: 'Creamy burrata cheese, heirloom cherry tomatoes, wild arugula, and aged balsamic glaze.' },
      { name: 'Avocado Crostini', price: '$12.00', desc: 'Toasted sourdough topped with smashed avocado, feta cheese crumbles, and microgreens.' },
    ],
    mains: [
      { name: 'Pan-Seared Salmon', price: '$28.99', desc: 'Atlantic salmon fillet served with lemon-herb quinoa, asparagus, and garlic butter sauce.' },
      { name: 'Signature Prime Ribeye', price: '$42.50', desc: '14oz aged ribeye steak cooked to perfection, served with truffle mash and red wine reduction.' },
      { name: 'Wild Mushroom Risotto', price: '$24.00', desc: 'Creamy arborio rice with chanterelle, shiitake mushrooms, truffle oil, and shaved parmesan.' },
    ],
    desserts: [
      { name: 'Warm Lava Cake', price: '$10.99', desc: 'Decadent chocolate cake with a molten center, served with Madagascan vanilla bean gelato.' },
      { name: 'New York Cheesecake', price: '$9.50', desc: 'Classic velvety cheesecake with a graham cracker crust and fresh raspberry coulis.' },
      { name: 'Espresso Tiramisu', price: '$11.00', desc: 'Layers of espresso-soaked ladyfingers, creamy mascarpone, and dusted cocoa powder.' },
    ],
    drinks: [
      { name: 'Cucumber Basil Gimlet', price: '$13.00', desc: 'Premium botanical gin, muddled English cucumber, fresh basil, and freshly squeezed lime juice.' },
      { name: 'Smoked Bourbon Old Fashioned', price: '$15.00', desc: 'Small-batch bourbon, aromatic bitters, orange peel, smoked with cherrywood chips.' },
      { name: 'Tropical Mango Mocktail', price: '$8.50', desc: 'Fresh mango purée, mint leaves, club soda, and a splash of organic coconut water.' },
    ]
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setReserveStatus('loading');
    setTimeout(() => {
      setReserveStatus('success');
    }, 1200);
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(`Hi ${brandName}, I would like to make an inquiry and see if you have any specials today!`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <div className="bg-[#0b0704] text-[#F3EFE9] min-h-screen">
      {/* Dynamic Navbar */}
      <nav className="border-b border-[#D97706]/15 bg-[#0b0704]/90 backdrop-blur-md sticky top-[68px] z-40 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-heading font-bold text-xl tracking-tight text-[#FBBF24]">
            🍳 {brandName}
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#D1C7BD]">
            <a href="#about" className="hover:text-[#FBBF24] transition-colors">Our Story</a>
            <a href="#menu" className="hover:text-[#FBBF24] transition-colors">Menu</a>
            <a href="#reservation" className="hover:text-[#FBBF24] transition-colors">Table Booking</a>
            <a href="#gallery" className="hover:text-[#FBBF24] transition-colors">Gallery</a>
          </div>
          <a
            href="#reservation"
            className="bg-[#D97706] hover:bg-[#B45309] text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
          >
            Reserve Table
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-28 md:py-36 overflow-hidden flex items-center justify-center text-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="relative z-20 max-w-4xl px-6">
          <span className="text-[#FBBF24] text-xs font-bold tracking-[4px] uppercase mb-4 block">
            Welcome to Gastronomy Heaven
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
            Taste the Culinary Magic at <span className="text-[#FBBF24]">{brandName}</span>
          </h1>
          <p className="text-[#D1C7BD] text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Experience hand-crafted dishes cooked with passion, organic farm-to-table ingredients, and an ambient atmosphere built for lasting memories.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#menu"
              className="bg-transparent border border-[#FBBF24] hover:bg-[#FBBF24] hover:text-black text-[#FBBF24] px-8 py-3.5 rounded-xl font-bold transition-all text-sm"
            >
              Explore Menu
            </a>
            <a
              href="#reservation"
              className="bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-3.5 rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2"
            >
              <span>Book A Table</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Trust / Stats Banner */}
      <section className="bg-[#120D0A] border-y border-[#D97706]/10 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-heading font-bold text-[#FBBF24]">100%</div>
            <div className="text-xs text-[#D1C7BD] uppercase tracking-wider mt-1">Fresh Ingredients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-bold text-[#FBBF24]">24+</div>
            <div className="text-xs text-[#D1C7BD] uppercase tracking-wider mt-1">Unique Recipes</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-bold text-[#FBBF24]">5 Star</div>
            <div className="text-xs text-[#D1C7BD] uppercase tracking-wider mt-1">Guest Ratings</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-bold text-[#FBBF24]">12+</div>
            <div className="text-xs text-[#D1C7BD] uppercase tracking-wider mt-1">Years Experience</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" id="about">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-[#FBBF24] text-xs font-bold tracking-[2px] uppercase">
            <UtensilsCrossed size={14} /> Our Culinary Story
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
            Crafting Gastronomic Excellence Everyday
          </h2>
          <p className="text-[#D1C7BD] leading-relaxed font-light">
            Founded with a vision of celebrating rich local produce and modern culinary art, {brandName} has grown into a beloved dining landmark. Our chefs blend traditional techniques with avant-garde flavor profiles to offer a feast for all senses.
          </p>
          <p className="text-[#D1C7BD] leading-relaxed font-light">
            Whether it is an intimate candlelit dinner, a cheerful family brunch, or a corporate dining event, we promise stellar hospitality and culinary masterpieces that linger on your palate.
          </p>
          <div className="pt-4">
            <button
              onClick={handleWhatsAppOrder}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold px-6 py-3 rounded-xl transition-all text-sm"
            >
              <MessageSquare size={18} />
              <span>Ask Specials on WhatsApp</span>
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-2 rounded-2xl border border-[#D97706]/20 transform rotate-2 pointer-events-none" />
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
            alt="Delicious dish"
            className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] relative z-10"
          />
        </div>
      </section>

      {/* Interactive Menu Section */}
      <section className="py-24 bg-[#120D0A]" id="menu">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#FBBF24] text-xs font-bold tracking-[3px] uppercase">
              Curated Menu
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-2">
              Explore Our Exquisite Menu
            </h2>
            <p className="text-[#D1C7BD] font-light mt-4">
              Browse through our chef's hand-picked selections. Select a category below to explore.
            </p>
          </div>

          {/* Menu Categories Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.keys(menuItems).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#D97706] text-white'
                    : 'bg-[#1b1511] text-[#D1C7BD] border border-[#D97706]/10 hover:border-[#D97706]/35'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems[selectedCategory].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1b1511]/45 p-6 rounded-xl border border-[#D97706]/10 flex flex-col justify-between hover:border-[#D97706]/20 transition-all"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-heading font-bold text-lg text-white">{item.name}</h3>
                  <span className="text-[#FBBF24] font-bold font-heading">{item.price}</span>
                </div>
                <p className="text-[#D1C7BD] text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-24 max-w-4xl mx-auto px-6" id="reservation">
        <div className="bg-[#1b1511] rounded-3xl border border-[#D97706]/20 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#D97706]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[#FBBF24] text-xs font-bold tracking-[3px] uppercase">
              Reservations
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Book A Table At {brandName}
            </h2>
            <p className="text-[#D1C7BD] text-sm font-light mt-3">
              Secure your table instantly online. We will confirm your slot via SMS/WhatsApp.
            </p>
          </div>

          {reserveStatus === 'success' ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5 text-emerald-400 text-3xl">
                ✓
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Booking Request Received!</h3>
              <p className="text-[#D1C7BD] mt-2 max-w-sm mx-auto text-sm leading-relaxed">
                Thank you, {reservation.name}. We have logged your request for a table of {reservation.guests} on {reservation.date} at {reservation.time}.
              </p>
              <button
                onClick={() => { setReserveStatus('idle'); setReservation({ name: '', date: '', time: '', guests: '2' }); }}
                className="mt-6 text-[#FBBF24] text-xs uppercase tracking-wider font-bold hover:underline"
              >
                Make Another Booking
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#D1C7BD] uppercase tracking-wider mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={reservation.name}
                  onChange={(e) => setReservation(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. John Doe"
                  className="w-full bg-[#0b0704] border border-[#D97706]/20 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#FBBF24] text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#D1C7BD] uppercase tracking-wider mb-2">Guests Count</label>
                <select
                  value={reservation.guests}
                  onChange={(e) => setReservation(prev => ({ ...prev, guests: e.target.value }))}
                  className="w-full bg-[#0b0704] border border-[#D97706]/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FBBF24] text-sm appearance-none"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="4">4 People</option>
                  <option value="6">6 People</option>
                  <option value="8">8+ People</option>
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
                    className="w-full bg-[#0b0704] border border-[#D97706]/20 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#FBBF24] text-sm"
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
                    className="w-full bg-[#0b0704] border border-[#D97706]/20 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#FBBF24] text-sm"
                  />
                </div>
              </div>
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={reserveStatus === 'loading'}
                  className="w-full bg-[#D97706] hover:bg-[#B45309] text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2"
                >
                  {reserveStatus === 'loading' ? 'Securing Slot...' : 'Confirm My Reservation'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-[#120D0A]" id="gallery">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[#FBBF24] text-xs font-bold tracking-[3px] uppercase">
              Visual Delight
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Captured Moments
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80"
              alt="Platter"
              className="rounded-xl object-cover w-full aspect-square hover:scale-[1.03] transition-all duration-300 border border-white/5"
            />
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80"
              alt="Burger gourmet"
              className="rounded-xl object-cover w-full aspect-square hover:scale-[1.03] transition-all duration-300 border border-white/5"
            />
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=500&q=80"
              alt="Cocktail pouring"
              className="rounded-xl object-cover w-full aspect-square hover:scale-[1.03] transition-all duration-300 border border-white/5"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[#FBBF24] text-xs font-bold tracking-[3px] uppercase">
            Reviews
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">
            What Our Patrons Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Sarah M.', quote: `Absolutely stellar experience at ${brandName}! The ribeye steak was melted in my mouth, and the service was warm and attentive. Def coming back.`, role: 'Food Critic' },
            { name: 'David K.', quote: `I booked ${brandName} for an anniversary dinner and they decorated the table beautifully. The Wild Mushroom Risotto was exceptional.`, role: 'Regular Patron' },
            { name: 'Elena R.', quote: `Order on WhatsApp was incredibly convenient. We ordered a bunch of desserts and drinks for an office party and they delivered hot and fresh!`, role: 'Local Resident' },
          ].map((t, idx) => (
            <div key={idx} className="bg-[#1b1511]/40 border border-[#D97706]/10 p-6 rounded-xl relative">
              <div className="flex items-center gap-1 text-[#FBBF24] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[#D1C7BD] text-sm italic font-light leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-sm text-white">{t.name}</h4>
                <span className="text-xs text-[#8A8AA0]">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080504] border-t border-[#D97706]/10 py-12 text-center text-xs text-[#8A8AA0]">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <div className="font-heading font-bold text-base text-[#FBBF24]">🍳 {brandName}</div>
          <div className="flex justify-center gap-6">
            <span className="flex items-center gap-1"><MapPin size={12} className="text-[#FBBF24]" /> 123 Gourmet Blvd, Food City</span>
            <span className="flex items-center gap-1"><Phone size={12} className="text-[#FBBF24]" /> +1 (555) 987-6543</span>
          </div>
          <p>© {new Date().getFullYear()} {brandName}. Handcrafted with love.</p>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <button
        onClick={handleWhatsAppOrder}
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-black w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
        title="Order via WhatsApp"
      >
        <MessageSquare size={26} className="fill-current text-black" />
      </button>
    </div>
  );
}

export default function RestaurantDemo() {
  return (
    <DemoLayout defaultBrand="Spice Garden" slug="restaurant">
      <RestaurantContent />
    </DemoLayout>
  );
}
