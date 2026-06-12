import { useState } from 'react';
import DemoLayout, { useDemo } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { Bed, Star, MapPin, Compass, Tv, Wifi, Utensils, ShieldCheck, ChevronRight } from 'lucide-react';

function HotelContent() {
  const { brandName } = useDemo();
  const [stay, setStay] = useState({ name: '', checkin: '', checkout: '', roomType: 'Deluxe Ocean Room' });
  const [stayStatus, setStayStatus] = useState('idle');

  const rooms = [
    { title: 'Deluxe Ocean Vista', price: '$220', size: '450 sqft', view: 'Ocean Front', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
    { title: 'Executive Imperial Suite', price: '$450', size: '780 sqft', view: 'Panoramic Skyline', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80' },
    { title: 'Private Sanctuary Villa', price: '$850', size: '1,200 sqft', view: 'Private Beach / Pool', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80' }
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    setStayStatus('loading');
    setTimeout(() => {
      setStayStatus('success');
    }, 1100);
  };

  return (
    <div className="bg-[#0a0f1d] text-[#d1d7e0] min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-[#c29b63]/15 bg-[#0a0f1d]/90 backdrop-blur-md sticky top-[68px] z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-heading font-bold text-xl tracking-wider text-[#c29b63] flex items-center gap-1.5">
            <Compass size={20} className="text-[#c29b63]" />
            {brandName}
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#a5abb5]">
            <a href="#about" className="hover:text-[#c29b63] transition-colors">Our Resort</a>
            <a href="#rooms" className="hover:text-[#c29b63] transition-colors">Rooms & Suites</a>
            <a href="#amenities" className="hover:text-[#c29b63] transition-colors">Amenities</a>
            <a href="#booking" className="hover:text-[#c29b63] transition-colors">Reservations</a>
          </div>
          <a
            href="#booking"
            className="bg-[#c29b63] hover:bg-[#b08852] text-black px-4.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
          >
            Book Stay
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-28 md:py-36 text-center overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-[#c29b63] text-xs font-bold tracking-[6px] uppercase block">
            A Sanctuary of Tranquility
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-white leading-tight">
            Escape to Pure Luxury At <span className="font-semibold text-[#c29b63]">{brandName}</span>
          </h1>
          <p className="text-[#a5abb5] text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Nestled in pristine locations, our boutique rooms, world-class spas, and Michelin-star dining are curated to offer an unforgettable vacation.
          </p>
          <div className="pt-4">
            <a
              href="#rooms"
              className="bg-transparent border border-[#c29b63] hover:bg-[#c29b63] hover:text-black text-[#c29b63] px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block"
            >
              Discover Rooms
            </a>
          </div>
        </div>
      </header>

      {/* Accreditations */}
      <section className="bg-[#0d1428] border-y border-[#c29b63]/10 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-around items-center gap-6 text-sm text-[#a5abb5]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-[#c29b63]" size={18} />
            <span>5-Star Luxury Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-[#c29b63]" size={18} />
            <span>World Luxury Hotel Winner</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-[#c29b63]" size={18} />
            <span>Private Sandy Beach Access</span>
          </div>
        </div>
      </section>

      {/* Luxury Rooms Showcase */}
      <section className="py-24 max-w-6xl mx-auto px-6" id="rooms">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#c29b63] text-xs font-bold tracking-[3px] uppercase">
            Boutique Lodging
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">
            Boutique Rooms & Suites
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((rm, idx) => (
            <div key={idx} className="bg-[#0d1428]/50 border border-[#c29b63]/10 rounded-2xl overflow-hidden group hover:border-[#c29b63]/30 transition-all duration-300">
              <div className="h-60 overflow-hidden relative">
                <img src={rm.img} alt={rm.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-lg border border-white/10 text-xs font-bold text-[#c29b63]">
                  {rm.price} / Night
                </div>
              </div>
              <div className="p-6.5 space-y-4">
                <h3 className="text-lg font-bold font-heading text-white">{rm.title}</h3>
                <div className="flex gap-4 text-xs text-[#a5abb5]">
                  <span>Size: {rm.size}</span>
                  <span>•</span>
                  <span>View: {rm.view}</span>
                </div>
                <a
                  href="#booking"
                  onClick={() => setStay(prev => ({ ...prev, roomType: rm.title }))}
                  className="w-full text-center py-2.5 rounded-xl border border-[#c29b63]/30 text-[#c29b63] hover:bg-[#c29b63] hover:text-black transition-all font-bold text-xs uppercase tracking-wider block"
                >
                  Select Room
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 bg-[#0d1428]/40 border-y border-[#0d1428]" id="amenities">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#c29b63] text-xs font-bold tracking-[3px] uppercase">
              Resort Experience
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Premium Guest Amenities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { title: 'World Class Spa', desc: 'Indulge in botanical facials, massages, and sauna chambers.', icon: <Heart size={20} /> },
              { title: 'Michelin Star Dining', desc: 'Gourmet organic dishes cooked by international culinary leads.', icon: <Utensils size={20} /> },
              { title: 'Infinity Heat Pool', desc: 'A stunning horizon pool facing beach sunsets.', icon: <Tv size={20} /> },
              { title: 'Super-Fi Connectivity', desc: 'Fiber gigabit wireless available across all suites and beaches.', icon: <Wifi size={20} /> }
            ].map((am, idx) => (
              <div key={idx} className="bg-[#0d1428] border border-[#c29b63]/10 p-6 rounded-2xl space-y-3">
                <div className="w-10 h-10 bg-[#c29b63]/15 text-[#c29b63] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#c29b63]/25">
                  {am.icon}
                </div>
                <h3 className="font-heading font-bold text-white text-base">{am.title}</h3>
                <p className="text-[#a5abb5] text-xs font-light leading-relaxed">{am.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-24 max-w-4xl mx-auto px-6" id="booking">
        <div className="bg-[#0d1428] rounded-3xl border border-[#c29b63]/20 p-8 md:p-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[#c29b63] text-xs font-bold tracking-[3px] uppercase">
              Stay Reservation
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Book Your Sanctuary Stay
            </h2>
            <p className="text-[#a5abb5] text-sm font-light mt-3">
              Book your stay with us. We will contact you within 1 hour to finalize reservation details.
            </p>
          </div>

          {stayStatus === 'success' ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#c29b63]/10 border border-[#c29b63]/30 flex items-center justify-center mx-auto mb-5 text-[#c29b63] text-3xl">
                ✓
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Booking Logged</h3>
              <p className="text-[#a5abb5] mt-2 max-w-sm mx-auto text-sm leading-relaxed">
                Thank you, {stay.name}. We have registered your request for the {stay.roomType} checking in on {stay.checkin}.
              </p>
              <button
                onClick={() => { setStayStatus('idle'); setStay({ name: '', checkin: '', checkout: '', roomType: 'Deluxe Ocean Room' }); }}
                className="mt-6 text-[#c29b63] text-xs uppercase tracking-wider font-bold hover:underline"
              >
                Book Another Stay
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#a5abb5] uppercase tracking-wider mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={stay.name}
                  onChange={(e) => setStay(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. John Jacob"
                  className="w-full bg-[#0a0f1d] border border-[#c29b63]/30 rounded-xl px-4 py-3 text-white placeholder-[#585e6b] text-sm focus:outline-none focus:border-[#c29b63]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#a5abb5] uppercase tracking-wider mb-2">Room Type Selection</label>
                <select
                  value={stay.roomType}
                  onChange={(e) => setStay(prev => ({ ...prev, roomType: e.target.value }))}
                  className="w-full bg-[#0a0f1d] border border-[#c29b63]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#c29b63] text-sm"
                >
                  {rooms.map((r, i) => <option key={i} value={r.title}>{r.title}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#a5abb5] uppercase tracking-wider mb-2">Check-in Date</label>
                <input
                  type="date"
                  required
                  value={stay.checkin}
                  onChange={(e) => setStay(prev => ({ ...prev, checkin: e.target.value }))}
                  className="w-full bg-[#0a0f1d] border border-[#c29b63]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#c29b63] text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#a5abb5] uppercase tracking-wider mb-2">Check-out Date</label>
                <input
                  type="date"
                  required
                  value={stay.checkout}
                  onChange={(e) => setStay(prev => ({ ...prev, checkout: e.target.value }))}
                  className="w-full bg-[#0a0f1d] border border-[#c29b63]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#c29b63] text-sm"
                />
              </div>
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={stayStatus === 'loading'}
                  className="w-full bg-[#c29b63] hover:bg-[#b08852] text-black py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-all"
                >
                  {stayStatus === 'loading' ? 'Checking Availability...' : 'Request Booking Stay'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050811] border-t border-[#c29b63]/10 py-12 text-center text-xs text-[#a5abb5]">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <div className="font-heading font-bold text-base text-[#c29b63]">🏨 {brandName}</div>
          <p>© {new Date().getFullYear()} {brandName}. Bespoke hospitality.</p>
        </div>
      </footer>
    </div>
  );
}

export default function HotelDemo() {
  return (
    <DemoLayout defaultBrand="The Grand Haven Hotel" slug="hotel">
      <HotelContent />
    </DemoLayout>
  );
}
