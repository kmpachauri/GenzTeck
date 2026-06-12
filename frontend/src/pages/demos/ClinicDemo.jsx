import { useState } from 'react';
import DemoLayout, { useDemo } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Heart, Users, Star, Stethoscope, Check, CalendarCheck } from 'lucide-react';

function ClinicContent() {
  const { brandName } = useDemo();
  const [apt, setApt] = useState({ name: '', phone: '', specialty: 'General Medicine', date: '' });
  const [aptStatus, setAptStatus] = useState('idle');

  const doctors = [
    { name: 'Dr. Sarah Lin', specialty: 'Chief Cardiologist', exp: '14+ Yrs', rating: 4.9, img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80' },
    { name: 'Dr. James Anderson', specialty: 'Pediatrician Specialist', exp: '10+ Yrs', rating: 4.8, img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Dr. Elena Rostova', specialty: 'Senior Orthopedic Surgeon', exp: '16+ Yrs', rating: 5.0, img: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=400&q=80' }
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    setAptStatus('loading');
    setTimeout(() => {
      setAptStatus('success');
    }, 1000);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-cyan-500/10 bg-slate-950/90 backdrop-blur-md sticky top-[68px] z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-heading font-extrabold text-xl tracking-tight text-cyan-400 flex items-center gap-1.5">
            <Activity size={20} className="text-cyan-400 animate-pulse" />
            {brandName}
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-400">
            <a href="#specialties" className="hover:text-cyan-400 transition-colors">Specialties</a>
            <a href="#doctors" className="hover:text-cyan-400 transition-colors">Doctors</a>
            <a href="#packages" className="hover:text-cyan-400 transition-colors font-semibold">Health Packages</a>
            <a href="#booking" className="hover:text-cyan-400 transition-colors">Appointments</a>
          </div>
          <a
            href="#booking"
            className="bg-cyan-500 hover:bg-cyan-600 text-black px-4.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
          >
            Book Appointment
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-28 md:py-36 text-center overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-950/70 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-cyan-400 text-xs font-bold tracking-[4px] uppercase block">
            Compassionate Healthcare
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
            Comprehensive Medical Care At <span className="text-cyan-400">{brandName}</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Providing state-of-the-art diagnostics, specialized treatment units, and top certified physicians to ensure your family's health and wellness.
          </p>
          <div className="pt-4">
            <a
              href="#booking"
              className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] inline-flex items-center gap-2"
            >
              <span>Schedule Visit</span>
              <CalendarCheck size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Trust badging / Accreditations */}
      <section className="bg-slate-900 border-y border-slate-800 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-around items-center gap-6 text-sm text-slate-400 font-semibold">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-cyan-400" size={18} />
            <span>NABH Accredited Facility</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-cyan-400" size={18} />
            <span>FDA Approved Equipment</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-cyan-400" size={18} />
            <span>24/7 Emergency Care Roster</span>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-24 max-w-6xl mx-auto px-6" id="specialties">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">
            Specialties
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">
            Specialized Care Departments
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'Cardiology', desc: 'Heart checks, ECGs, blood pressure management, and cardiovascular rehabilitation.' },
            { title: 'Pediatrics', desc: 'Comprehensive neonatal support, vaccinations, physical diagnostics, and adolescent health.' },
            { title: 'Orthopedics', desc: 'Spinal therapy, joint replacements, complex fractures care, and athletic bone recovery.' },
            { title: 'General Medicine', desc: 'Routine seasonal checkups, blood counts, internal pathology, and preventative guidance.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800 p-6.5 rounded-2xl hover:border-cyan-500/25 transition-all">
              <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope size={18} />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctor Cards */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-900" id="doctors">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">
              Physicians
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Meet Our Specialist Doctor Panel
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doc, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden group">
                <div className="h-64 overflow-hidden bg-slate-950">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-heading font-bold text-lg text-white">{doc.name}</h3>
                    <div className="flex items-center gap-1 text-yellow-500 text-xs">
                      <Star size={12} fill="currentColor" />
                      <span>{doc.rating}</span>
                    </div>
                  </div>
                  <p className="text-cyan-400 text-xs font-semibold">{doc.specialty}</p>
                  <p className="text-slate-400 text-xs font-light">Experience: <strong className="text-slate-300">{doc.exp}</strong></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Health Packages */}
      <section className="py-24 max-w-6xl mx-auto px-6" id="packages">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">
            Preventative Care
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">
            Preventative Health Check Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Basic Wellness Check', price: '$99', items: ['Complete Blood Count (CBC)', 'Cholesterol profile', 'Fasting glucose', 'GP Consultation Review'] },
            { name: 'Cardiac Wellness Screening', price: '$249', items: ['All Basic wellness tests', 'Resting Electrocardiogram (ECG)', 'Treadmill stress test', 'Cardiologist Consultation'] },
            { name: 'Executive Family Panel', price: '$399', items: ['Full systemic blood diagnostics', 'Thyroid profiling', 'Liver & kidney metrics', 'Senior Consultant Review'] }
          ].map((pkg, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold font-heading text-white">{pkg.name}</h3>
                <div className="text-3xl font-heading font-black text-cyan-400 mt-3 mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8 text-xs text-slate-400 font-light">
                  {pkg.items.map((it, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={12} className="text-cyan-400 flex-shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#booking"
                onClick={() => setApt(prev => ({ ...prev, specialty: pkg.name }))}
                className="bg-slate-850 hover:bg-slate-800 border border-slate-700 text-white font-bold py-2.5 rounded-xl text-center text-xs uppercase tracking-wide block transition-all"
              >
                Book Package
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment CTA Form */}
      <section className="py-24 max-w-4xl mx-auto px-6" id="booking">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 md:p-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">
              Schedule Visit
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Book A Medical Consultation
            </h2>
            <p className="text-slate-400 text-sm font-light mt-3">
              Enter your appointment variables. Our patient coordination desk will email/WhatsApp you slot allocations.
            </p>
          </div>

          {aptStatus === 'success' ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-5 text-cyan-400 text-3xl">
                ✓
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Booking Registered</h3>
              <p className="text-slate-300 mt-2 max-w-sm mx-auto text-sm leading-relaxed">
                Thank you, {apt.name}. We have logged your request for the {apt.specialty} department on {apt.date}.
              </p>
              <button
                onClick={() => { setAptStatus('idle'); setApt({ name: '', phone: '', specialty: 'General Medicine', date: '' }); }}
                className="mt-6 text-cyan-400 text-xs uppercase tracking-wider font-bold hover:underline"
              >
                Book Another Appointment
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Patient Full Name</label>
                <input
                  type="text"
                  required
                  value={apt.name}
                  onChange={(e) => setApt(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. Richard Hendricks"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-800 text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                <input
                  type="text"
                  required
                  value={apt.phone}
                  onChange={(e) => setApt(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="e.g. +1 (555) 987-6543"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-800 text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Select Specialty Department</label>
                <select
                  value={apt.specialty}
                  onChange={(e) => setApt(prev => ({ ...prev, specialty: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 text-sm"
                >
                  <option value="General Medicine">General Medicine</option>
                  <option value="Cardiology">Cardiology Unit</option>
                  <option value="Pediatrics">Pediatrics Unit</option>
                  <option value="Orthopedics">Orthopedics Unit</option>
                  <option value="Basic Wellness Check">Wellness Package: Basic</option>
                  <option value="Cardiac Wellness Screening">Wellness Package: Cardiac</option>
                  <option value="Executive Family Panel">Wellness Package: Executive</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Preferred Appointment Date</label>
                <input
                  type="date"
                  required
                  value={apt.date}
                  onChange={(e) => setApt(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 text-sm"
                />
              </div>
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={aptStatus === 'loading'}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-black py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-all"
                >
                  {aptStatus === 'loading' ? 'Checking Rosters...' : 'Request Slot Appointment'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <div className="font-heading font-bold text-base text-cyan-400">🏥 {brandName}</div>
          <p>© {new Date().getFullYear()} {brandName}. Dedicated clinical hospitality.</p>
        </div>
      </footer>
    </div>
  );
}

export default function ClinicDemo() {
  return (
    <DemoLayout defaultBrand="Metro Health Clinic" slug="clinic">
      <ClinicContent />
    </DemoLayout>
  );
}
