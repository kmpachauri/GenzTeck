import { useState } from 'react';
import DemoLayout, { useDemo } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, Heart, Star, Calendar, Clock, Check } from 'lucide-react';

function SalonContent() {
  const { brandName } = useDemo();
  const [selectedCat, setSelectedCat] = useState('hair');
  const [appointment, setAppointment] = useState({ name: '', date: '', artist: '' });
  const [bookStatus, setBookStatus] = useState('idle');

  const services = {
    hair: [
      { name: 'Signature Haircut & Style', price: '$85+', time: '60 min', desc: 'Consultation, wash, designer cut, and blowout tailored to your facial structure.' },
      { name: 'Balayage & Color Correction', price: '$220+', time: '180 min', desc: 'Hand-painted color highlights for a seamless, sun-kissed natural growth blend.' },
      { name: 'Keratin Smoothing Infusion', price: '$300+', time: '120 min', desc: 'Eliminates frizz, restores damaged hair cuticles, and provides mirror-like shine.' },
    ],
    spa: [
      { name: 'Deep Cleanse Hydrafacial', price: '$150', time: '75 min', desc: 'Multi-step skin resurfacing, pore extraction, and botanical serum hydration.' },
      { name: 'Hot Stone Renewal Massage', price: '$125', time: '60 min', desc: 'Heated volcanic stones placed along chakras to melt tension and stress away.' },
      { name: 'Rose Petal Scrub & Soak', price: '$95', time: '45 min', desc: 'Organic rose extract body exfoliation followed by a calming mineral salt bath.' },
    ],
    nails: [
      { name: 'Luxury Gel Manicure', price: '$65', time: '45 min', desc: 'Nail shaping, cuticle therapy, organic scrub, massage, and long-lasting gel polish.' },
      { name: 'Paraffin Pedicure Healing', price: '$85', time: '60 min', desc: 'Warm paraffin wax soak, exfoliating scrub, hot stones, and nail grooming.' },
    ]
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setBookStatus('loading');
    setTimeout(() => {
      setBookStatus('success');
    }, 1200);
  };

  return (
    <div className="bg-[#0f0b0a] text-[#ecdcd6] min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-amber-600/10 bg-[#0f0b0a]/90 backdrop-blur-md sticky top-[68px] z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-heading font-semibold text-xl tracking-wide text-amber-300 flex items-center gap-1.5">
            <Scissors size={18} className="rotate-90 text-amber-400" />
            {brandName}
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#c7b2aa]">
            <a href="#about" className="hover:text-amber-300 transition-colors">Experience</a>
            <a href="#services" className="hover:text-amber-300 transition-colors">Treatments</a>
            <a href="#before-after" className="hover:text-amber-300 transition-colors font-semibold">Transformations</a>
            <a href="#booking" className="hover:text-amber-300 transition-colors">Appointments</a>
          </div>
          <a
            href="#booking"
            className="bg-gradient-to-r from-amber-500 to-amber-700 hover:brightness-110 text-black px-4.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
          >
            Book Session
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-28 md:py-36 text-center overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/65 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-amber-400 text-xs font-bold tracking-[6px] uppercase block">
            Aura & Radiance
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-white leading-tight">
            Reveal Your Ultimate Glow At <span className="font-bold text-amber-300">{brandName}</span>
          </h1>
          <p className="text-[#c7b2aa] text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            A premium beauty sanctuary where top artistic stylists, organic clinical formulas, and luxurious pampering meet.
          </p>
          <div className="pt-4">
            <a
              href="#services"
              className="bg-transparent border border-amber-400 hover:bg-amber-400 hover:text-black text-amber-300 px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block"
            >
              View Price Menu
            </a>
          </div>
        </div>
      </header>

      {/* Highlights */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8" id="about">
        <div className="bg-[#181211] border border-amber-900/10 p-8 rounded-2xl space-y-3 text-center">
          <Sparkles className="mx-auto text-amber-400" size={24} />
          <h3 className="text-lg font-bold font-heading text-white">Award-Winning Stylists</h3>
          <p className="text-[#c7b2aa] text-sm font-light leading-relaxed">
            Our team comprises artists certified in high-end global styling techniques.
          </p>
        </div>
        <div className="bg-[#181211] border border-amber-900/10 p-8 rounded-2xl space-y-3 text-center">
          <Heart className="mx-auto text-amber-400" size={24} />
          <h3 className="text-lg font-bold font-heading text-white">100% Organic Products</h3>
          <p className="text-[#c7b2aa] text-sm font-light leading-relaxed">
            Strictly cruelty-free, vegan, and sulfate-free botanical skin and hair care.
          </p>
        </div>
        <div className="bg-[#181211] border border-amber-900/10 p-8 rounded-2xl space-y-3 text-center">
          <Calendar className="mx-auto text-amber-400" size={24} />
          <h3 className="text-lg font-bold font-heading text-white">Luxury Experience</h3>
          <p className="text-[#c7b2aa] text-sm font-light leading-relaxed">
            Sip complimentary organic wine, herbal teas, and enjoy heated massage lounge tables.
          </p>
        </div>
      </section>

      {/* Service Menu */}
      <section className="py-24 bg-[#181211]/60" id="services">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-[3px] uppercase">
              Beauty Menu
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Select Treatments & Rituals
            </h2>
          </div>

          <div className="flex justify-center gap-3 mb-12">
            {['hair', 'spa', 'nails'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
                  selectedCat === cat
                    ? 'bg-amber-400 text-black font-extrabold'
                    : 'bg-[#181211] text-[#c7b2aa] border border-amber-900/20 hover:border-amber-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services[selectedCat].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#181211] border border-amber-900/10 p-6.5 rounded-2xl flex flex-col justify-between hover:border-amber-400/20 transition-all duration-300"
              >
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
        </div>
      </section>

      {/* Before / After Transformation */}
      <section className="py-24 max-w-6xl mx-auto px-6" id="before-after">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-bold tracking-[3px] uppercase">
            Transformations
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">
            Glow Transformations
          </h2>
          <p className="text-[#c7b2aa] text-sm font-light mt-3">
            Swipe or hover to inspect results crafted by our senior artistic team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Platinum Balayage Treatment', artist: 'Artistic Lead Elena', before: 'https://images.unsplash.com/photo-1595894154567-023c92f2254c?auto=format&fit=crop&w=400&q=80', after: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=400&q=80' },
            { title: 'Nail Extension & Crystal Art', artist: 'Nail Specialist Clara', before: 'https://images.unsplash.com/photo-1604654894610-df4906b241af?auto=format&fit=crop&w=400&q=80', after: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?auto=format&fit=crop&w=400&q=80' },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#181211] border border-amber-900/10 p-6 rounded-2xl space-y-4">
              <h3 className="text-base font-bold font-heading text-white">{item.title}</h3>
              <p className="text-[11px] text-amber-400/80 -mt-2">Created by: {item.artist}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-black/60 px-2 py-0.5 rounded text-[9px] uppercase tracking-wider text-[#c7b2aa]">Before</span>
                  <img src={item.before} alt="Before" className="rounded-xl w-full aspect-square object-cover" />
                </div>
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-amber-500 text-black px-2 py-0.5 rounded text-[9px] uppercase tracking-wider font-extrabold">After</span>
                  <img src={item.after} alt="After" className="rounded-xl w-full aspect-square object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment Booking */}
      <section className="py-24 max-w-4xl mx-auto px-6" id="booking">
        <div className="bg-[#181211] rounded-3xl border border-amber-900/25 p-8 md:p-12 relative">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-amber-400 text-xs font-bold tracking-[3px] uppercase">
              Reservations
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Book A Beauty Session
            </h2>
            <p className="text-[#c7b2aa] text-sm font-light mt-3">
              Book your time block. We will call you within 15 minutes to secure and coordinate specifications.
            </p>
          </div>

          {bookStatus === 'success' ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-5 text-amber-400 text-3xl">
                ✓
              </div>
              <h3 className="text-xl font-bold font-heading text-white font-heading">Slot Requested!</h3>
              <p className="text-[#c7b2aa] mt-2 max-w-sm mx-auto text-sm leading-relaxed">
                Thank you, {appointment.name}. We will review and coordinate your session with {appointment.artist} shortly.
              </p>
              <button
                onClick={() => { setBookStatus('idle'); setAppointment({ name: '', date: '', artist: '' }); }}
                className="mt-6 text-amber-400 text-xs uppercase tracking-wider font-bold hover:underline"
              >
                Book Another Service
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#c7b2aa] uppercase tracking-wider mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={appointment.name}
                  onChange={(e) => setAppointment(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. Elena Smith"
                  className="w-full bg-[#0f0b0a] border border-amber-900/30 rounded-xl px-4 py-3 text-white placeholder-white/10 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#c7b2aa] uppercase tracking-wider mb-2">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={appointment.date}
                  onChange={(e) => setAppointment(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full bg-[#0f0b0a] border border-amber-900/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#c7b2aa] uppercase tracking-wider mb-2">Preferred Artist</label>
                <select
                  value={appointment.artist}
                  onChange={(e) => setAppointment(prev => ({ ...prev, artist: e.target.value }))}
                  className="w-full bg-[#0f0b0a] border border-amber-900/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 text-sm"
                >
                  <option value="Elena">Elena (Hair Artistic Lead)</option>
                  <option value="Clara">Clara (Nail Specialist)</option>
                  <option value="Sophia">Sophia (Facials & Skin)</option>
                </select>
              </div>
              <div className="md:col-span-3 mt-4">
                <button
                  type="submit"
                  disabled={bookStatus === 'loading'}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-700 text-black py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-all"
                >
                  {bookStatus === 'loading' ? 'Checking Roster...' : 'Request Appointment'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080505] border-t border-amber-900/10 py-12 text-center text-xs text-[#8A8AA0]">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <div className="font-heading font-bold text-base text-amber-400">✨ {brandName}</div>
          <p>© {new Date().getFullYear()} {brandName}. Elegance & Sanctuary.</p>
        </div>
      </footer>
    </div>
  );
}

export default function SalonDemo() {
  return (
    <DemoLayout defaultBrand="Aura Beauty Spa" slug="salon">
      <SalonContent />
    </DemoLayout>
  );
}
