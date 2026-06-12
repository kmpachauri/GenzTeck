import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DemoLayout, { useDemo, DemoLink } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { 
  Flame, 
  Dumbbell, 
  Zap, 
  Award, 
  Check, 
  Star, 
  ArrowRight, 
  Users, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Calculator, 
  Heart, 
  Activity, 
  Sparkles, 
  TrendingUp, 
  HelpCircle,
  Menu as MenuIcon, 
  X 
} from 'lucide-react';

function GymNavbar({ isMobileOpen, setIsMobileOpen }) {
  const { brandName } = useDemo();
  return (
    <nav className="border-b border-emerald-500/15 bg-zinc-950/95 backdrop-blur-md sticky top-[68px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">
        <DemoLink to="home" className="font-heading font-extrabold text-2xl tracking-tight text-emerald-400 flex items-center gap-1.5">
          <Flame className="fill-current text-emerald-400 animate-pulse" size={24} />
          <span className="truncate max-w-[150px] sm:max-w-[250px] md:max-w-none">{brandName}</span>
        </DemoLink>
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-zinc-400">
          <DemoLink to="home" activeClassName="text-emerald-400 font-bold" className="hover:text-emerald-400 transition-colors">Home</DemoLink>
          <DemoLink to="about" activeClassName="text-emerald-400 font-bold" className="hover:text-emerald-400 transition-colors">About Us</DemoLink>
          <DemoLink to="memberships" activeClassName="text-emerald-400 font-bold" className="hover:text-emerald-400 transition-colors">Memberships</DemoLink>
          <DemoLink to="trainers" activeClassName="text-emerald-400 font-bold" className="hover:text-emerald-400 transition-colors">Trainers</DemoLink>
          <DemoLink to="schedule" activeClassName="text-emerald-400 font-bold" className="hover:text-emerald-400 transition-colors">Schedule</DemoLink>
          <DemoLink to="contact" activeClassName="text-emerald-400 font-bold" className="hover:text-emerald-400 transition-colors">Contact</DemoLink>
        </div>
        <div className="hidden lg:block">
          <DemoLink to="memberships" className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            Join Club
          </DemoLink>
        </div>
        <button className="lg:hidden text-white hover:text-emerald-400" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-emerald-500/15 py-6 px-6 space-y-4 flex flex-col">
          <DemoLink to="home" onClick={() => setIsMobileOpen(false)} activeClassName="text-emerald-400" className="text-sm font-semibold text-zinc-400">Home</DemoLink>
          <DemoLink to="about" onClick={() => setIsMobileOpen(false)} activeClassName="text-emerald-400" className="text-sm font-semibold text-zinc-400">About Us</DemoLink>
          <DemoLink to="memberships" onClick={() => setIsMobileOpen(false)} activeClassName="text-emerald-400" className="text-sm font-semibold text-zinc-400">Memberships</DemoLink>
          <DemoLink to="trainers" onClick={() => setIsMobileOpen(false)} activeClassName="text-emerald-400" className="text-sm font-semibold text-zinc-400">Trainers</DemoLink>
          <DemoLink to="schedule" onClick={() => setIsMobileOpen(false)} activeClassName="text-emerald-400" className="text-sm font-semibold text-zinc-400">Schedule</DemoLink>
          <DemoLink to="contact" onClick={() => setIsMobileOpen(false)} activeClassName="text-emerald-400" className="text-sm font-semibold text-zinc-400">Contact</DemoLink>
          <DemoLink to="memberships" onClick={() => setIsMobileOpen(false)} className="bg-emerald-500 text-black text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider">
            Join Club
          </DemoLink>
        </div>
      )}
    </nav>
  );
}

function GymFooter() {
  const { brandName } = useDemo();
  return (
    <footer className="bg-zinc-950 border-t border-emerald-500/15 py-16 text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <span className="font-heading font-black text-xl text-emerald-400 flex items-center gap-1.5">
            <Flame className="fill-current text-emerald-400" size={20} />
            {brandName}
          </span>
          <p className="leading-relaxed font-light text-zinc-400">
            A high-performance training compound engineered to sculpt muscle, burn fat, and develop elite athletic disciplines.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Gym Links</h4>
          <ul className="space-y-2 flex flex-col">
            <DemoLink to="home" className="hover:text-emerald-400 transition-colors">Home</DemoLink>
            <DemoLink to="about" className="hover:text-emerald-400 transition-colors">About Us</DemoLink>
            <DemoLink to="memberships" className="hover:text-emerald-400 transition-colors">Pricing Packages</DemoLink>
            <DemoLink to="schedule" className="hover:text-emerald-400 transition-colors">Timetables</DemoLink>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Features</h4>
          <p className="text-zinc-400">24/7 Premium Access</p>
          <p className="text-zinc-400">High-Performance Weights</p>
          <p className="text-emerald-400 font-semibold">Sauna & Cryotherapy Included</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Contact Info</h4>
          <p className="flex items-center gap-2 text-zinc-400"><MapPin size={12} className="text-emerald-400" /> 456 Power Lane, Fitness City</p>
          <p className="flex items-center gap-2 text-zinc-400"><Phone size={12} className="text-emerald-400" /> +1 (555) 345-6789</p>
          <p className="text-zinc-400 underline">support@{brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {brandName}. Shred limits, conquer targets.</p>
        <div className="flex gap-4 text-zinc-400">
          <a href="#" className="hover:text-emerald-400">Instagram</a>
          <a href="#" className="hover:text-emerald-400">YouTube</a>
          <a href="#" className="hover:text-emerald-400">TikTok</a>
        </div>
      </div>
    </footer>
  );
}

function GymInnerHeader({ title, subtitle }) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 border-b border-emerald-500/10 text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tight">{title}</h1>
        <p className="text-zinc-400 text-base font-light max-w-xl mx-auto">{subtitle}</p>
        <div className="flex justify-center items-center gap-2 text-xs text-zinc-500 mt-6">
          <DemoLink to="home" className="hover:text-emerald-400">Home</DemoLink>
          <span>/</span>
          <span className="text-emerald-400 capitalize">{title}</span>
        </div>
      </div>
    </section>
  );
}

function GymFAQ({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">Q&A Desk</span>
          <h2 className="text-3xl font-heading font-black text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 font-heading font-bold text-white flex justify-between items-center hover:bg-zinc-900/60 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-emerald-400">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed font-light border-t border-zinc-800/50 pt-4">
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

function GymCTA({ title, desc, btnText, linkTo }) {
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950 border-t border-emerald-500/10 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white leading-tight uppercase">{title}</h2>
        <p className="text-zinc-400 max-w-xl mx-auto font-light">{desc}</p>
        <div className="pt-4">
          <DemoLink to={linkTo} className="bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-3.5 rounded-xl font-extrabold uppercase text-xs tracking-wider transition-all inline-block shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            {btnText}
          </DemoLink>
        </div>
      </div>
    </section>
  );
}

// BMI Calculator Sub-Component
function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState('');

  const calcBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) return;
    const hMeter = height / 100;
    const score = (weight / (hMeter * hMeter)).toFixed(1);
    setBmi(score);
    if (score < 18.5) setBmiStatus('Underweight (Needs Clean Bulking)');
    else if (score < 25) setBmiStatus('Healthy Weight (Maintain & Tone)');
    else if (score < 30) setBmiStatus('Overweight (Targeted Fat Shred)');
    else setBmiStatus('Obese (Athletic Conditioning Required)');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-2xl font-heading font-black text-white uppercase">Fitness BMI Index</h3>
        <p className="text-zinc-400 text-sm font-light mt-3 leading-relaxed">
          Find your metabolic metric instantly. Our elite coaching panel targets programming based on this exact body configuration.
        </p>
        <div className="mt-6 flex items-center gap-3 text-xs text-emerald-400 font-semibold">
          <Activity size={16} />
          <span>Unlock custom programming guides post calculation.</span>
        </div>
      </div>
      <form onSubmit={calcBMI} className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl space-y-4 shadow-2xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] uppercase font-bold text-zinc-400">Weight (kg)</label>
            <input type="number" required value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="e.g. 75" className="w-full bg-zinc-900 border border-zinc-800 px-4 py-2.5 rounded-xl text-white focus:outline-none focus:border-emerald-500 transition-colors" />
          </div>
          <div>
            <label className="text-[10px] uppercase font-bold text-zinc-400">Height (cm)</label>
            <input type="number" required value={height} onChange={(e) => setHeight(e.target.value)} placeholder="e.g. 180" className="w-full bg-zinc-900 border border-zinc-800 px-4 py-2.5 rounded-xl text-white focus:outline-none focus:border-emerald-500 transition-colors" />
          </div>
        </div>
        <button type="submit" className="w-full bg-emerald-400 hover:bg-emerald-500 text-black py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-colors">
          Calculate BMI
        </button>
        {bmi && (
          <div className="mt-4 pt-4 border-t border-zinc-800 text-center animate-fadeIn">
            <div className="text-xs text-zinc-500">Your Calculated Score:</div>
            <div className="text-3xl font-black text-emerald-400 mt-1">{bmi}</div>
            <div className="text-xs text-zinc-300 font-semibold mt-1 uppercase tracking-wider">{bmiStatus}</div>
          </div>
        )}
      </form>
    </div>
  );
}

// 1. HOME VIEW
function HomeView() {
  const { brandName } = useDemo();
  return (
    <div className="space-y-0 animate-fadeIn">
      {/* 2. Premium Hero Section */}
      <header className="relative py-32 md:py-48 text-center overflow-hidden flex items-center justify-center min-h-[85vh]">
        <div className="absolute inset-0 bg-black/75 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80')" }} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-15 pointer-events-none" />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-emerald-400 text-xs font-bold tracking-[5px] uppercase bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full inline-block">
            Elite Conditioning Complex
          </span>
          <h1 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-heading font-black text-white leading-none uppercase">
            Forge Supreme Strength at <span className="text-emerald-400">{brandName}</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Unrivaled athletic zones, contrast recovery cells, and master coaching panels engineered to transform your body architecture.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <DemoLink to="memberships" className="bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-3.5 rounded-xl font-extrabold uppercase text-xs tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Claim Day Pass
            </DemoLink>
            <DemoLink to="schedule" className="bg-transparent border border-white/20 hover:border-white hover:bg-white hover:text-black text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all duration-300">
              Class Schedule
            </DemoLink>
          </div>
        </div>
      </header>

      {/* 3. Trust / Stat Cards */}
      <section className="bg-zinc-950 border-y border-zinc-900 py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/40 hover:border-emerald-500/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-emerald-400">12k sqft</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-2">Modern Compound</div>
          </div>
          <div className="p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/40 hover:border-emerald-500/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-emerald-400">12+</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-2">Elite Coaches</div>
          </div>
          <div className="p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/40 hover:border-emerald-500/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-emerald-400">98%</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-2">Success Rate</div>
          </div>
          <div className="p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/40 hover:border-emerald-500/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-emerald-400">24/7</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-2">Member Unlock</div>
          </div>
        </div>
      </section>

      {/* 4. About Preview */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase flex items-center gap-2">
            <Activity size={14} /> The Compound Culture
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white leading-tight uppercase">
            Where Discipline Meets Scientific Training
          </h2>
          <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base">
            We avoid the vanity culture of standard commercial clubs. {brandName} was engineered to provide high-performance weightlifting zones, elite biomechanical advice, and medical-grade recovery resources.
          </p>
          <DemoLink to="about" className="text-emerald-400 font-extrabold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 hover:underline group">
            <span>Our Training Philosophy</span> 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </DemoLink>
        </div>
        <div className="relative group">
          <div className="absolute -inset-2 rounded-2xl border border-emerald-500/10 transform rotate-1 pointer-events-none group-hover:rotate-0 transition-transform duration-300" />
          <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80" alt="Training zone" className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3] border border-zinc-850" />
        </div>
      </section>

      {/* 5. Services / Programs Preview */}
      <section className="py-24 bg-zinc-900/50 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">Compound Pillars</span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase">Our Performance Tiers</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { title: 'Olympic Weightlifting', desc: 'Deadlift platforms, bumper plates, custom chalk blocks, and premium knurled bars.', icon: <Dumbbell className="text-emerald-400" /> },
              { title: 'HIIT Conditioning', desc: 'Heart-rate mapped zones to optimize metabolic output and fat burn curves.', icon: <Zap className="text-emerald-400" /> },
              { title: 'Athletic Recovery', desc: 'Contrast cold tubs, cryotherapy chambers, and infrared dry saunas.', icon: <Award className="text-emerald-400" /> }
            ].map((s, idx) => (
              <div key={idx} className="bg-zinc-950 border border-zinc-850 p-8 rounded-2xl space-y-4 hover:border-emerald-500/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-white">{s.title}</h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Transformations Gallery */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">Proven Performance</span>
          <h2 className="text-3xl font-heading font-black text-white uppercase">Client Transformations</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Alex Rivers', goal: 'Muscle Gain', stat: '+8.5 kg', before: '14% BF', after: '9% BF', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80' },
            { name: 'Marcus Vance', goal: 'Fat Shred', stat: '-12.0 kg', before: '24% BF', after: '12% BF', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
            { name: 'Jessica K.', goal: 'Strength & Tone', stat: '+15kg squat', before: '22% BF', after: '18% BF', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/20 transition-all duration-300">
              <div className="h-60 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                <span className="absolute top-4 right-4 bg-emerald-500 text-black text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider z-20 shadow-lg">
                  {item.stat}
                </span>
              </div>
              <div className="p-6 space-y-3 relative z-20">
                <div className="flex justify-between items-center">
                  <h4 className="font-heading font-bold text-white text-base">{item.name}</h4>
                  <span className="text-xs text-zinc-400 font-light italic">{item.goal}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-zinc-800 text-center text-xs">
                  <div>
                    <div className="text-zinc-500">Before</div>
                    <div className="text-zinc-300 font-bold">{item.before}</div>
                  </div>
                  <div>
                    <div className="text-emerald-400">After</div>
                    <div className="text-emerald-400 font-bold">{item.after}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Industry Specific widget (BMI) */}
      <section className="py-24 bg-zinc-900/30 border-t border-zinc-900">
        <BMICalculator />
      </section>

      {/* 8. Process (How We Work) */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">The Journey</span>
          <h2 className="text-3xl font-heading font-black text-white uppercase">Your Path to Growth</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Consultation', desc: 'Biometric testing and historical baseline configuration with our panel.' },
            { step: '02', title: 'Programming', desc: 'Dynamic split programming tailored specifically for your target objectives.' },
            { step: '03', title: 'Execution', desc: 'Coached weight sessions ensuring absolute postural mechanics and load safety.' },
            { step: '04', title: 'Calibration', desc: 'Bi-weekly check-ins to monitor muscle growth metrics and optimize diets.' }
          ].map((p, i) => (
            <div key={i} className="bg-zinc-900/20 border border-zinc-850 p-8 rounded-2xl relative space-y-3 hover:border-emerald-500/10 transition-colors">
              <span className="text-emerald-400/10 text-5xl font-heading font-black block">{p.step}</span>
              <h3 className="font-heading font-bold text-white text-base">{p.title}</h3>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Pricing Packages / Memberships Preview */}
      <section className="py-24 bg-zinc-900/50 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">Access Tiers</span>
            <h2 className="text-3xl font-heading font-black text-white uppercase">Club Membership</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Standard Club', price: '$29', features: ['General Floor Access', 'Locker access', '1 Coach consultation'] },
              { name: 'Elite Conditioning', price: '$59', features: ['24/7 Door Unlock', 'All Class Timetables included', 'Sauna & Cryotherapy Access'], featured: true },
              { name: 'Platinum Coach', price: '$99', features: ['All Elite features', '2 Weekly Personal Coach hours', 'Custom Diet Programming'] }
            ].map((pkg, idx) => (
              <div key={idx} className={`bg-zinc-950 border rounded-2xl p-8 flex flex-col justify-between relative ${pkg.featured ? 'border-emerald-500 shadow-xl' : 'border-zinc-850'}`}>
                {pkg.featured && <span className="absolute top-0 right-8 -translate-y-1/2 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Popular</span>}
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">{pkg.name}</h3>
                  <div className="text-3xl font-heading font-black text-white mt-4 mb-6">{pkg.price}<span className="text-zinc-500 text-sm font-light">/mo</span></div>
                  <ul className="space-y-3 mb-8 text-xs text-zinc-400">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2"><Check size={14} className="text-emerald-400" /> {f}</li>
                    ))}
                  </ul>
                </div>
                <DemoLink to="memberships" className={`w-full py-3 rounded-xl font-bold uppercase text-xs text-center tracking-wider transition-all duration-300 ${pkg.featured ? 'bg-emerald-500 hover:bg-emerald-600 text-black shadow-[0_0_10px_rgba(16,185,129,0.2)]' : 'bg-zinc-850 hover:bg-zinc-800 text-white'}`}>
                  Join Club
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
            { name: 'Sarah Miller', quote: `The trainers here are on another level. Biomechanical coaching saved my lower back, and I squatted my PR in 3 months.`, role: 'Competitive Lifter' },
            { name: 'Michael Chen', quote: `Best equipment layout in the city. The recovery dry sauna and contrast baths are worth the membership price alone.`, role: 'Fitness Enthusiast' },
            { name: 'Sophia Loren', quote: `Clean, focused environment with zero gym clutter. Highly recommend the Elite Conditioning membership.`, role: 'Athletic Trainer' }
          ].map((t, idx) => (
            <div key={idx} className="bg-zinc-900/40 border border-zinc-800/60 p-6 rounded-2xl space-y-4 hover:border-emerald-500/10 transition-colors">
              <div className="flex text-emerald-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-zinc-300 text-sm italic font-light leading-relaxed">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-white text-sm">{t.name}</h4>
                <span className="text-xs text-zinc-500">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ Section */}
      <GymFAQ 
        faqs={[
          { q: 'Is there a contract or signup fee?', a: 'None of our memberships have long-term contracts. You can pause or cancel anytime through our online dashboard or visiting the desk.' },
          { q: 'Are personal coaching hours included?', a: 'Standard packages include an initial setup, while Platinum packages include 2 weekly coaching hours. Additional coach packs are available.' },
          { q: 'Do you offer guest day passes?', a: 'Yes. We offer single day passes for $15, which are fully refunded if you join any monthly club tier within 48 hours.' }
        ]}
      />

      {/* 12. Strong CTA */}
      <GymCTA 
        title="Ready to Unleash Your Core Power?" 
        desc="Claim your first coached workout slot today. Zero contract commitments. 100% focused results." 
        btnText="Get Day Pass Now" 
        linkTo="memberships" 
      />
    </div>
  );
}

// 2. ABOUT VIEW
function AboutView() {
  const { brandName } = useDemo();
  return (
    <div className="space-y-0 animate-fadeIn">
      <GymInnerHeader title="About Us" subtitle={`Discover the history, methods, and compound principles that define ${brandName}.`} />
      
      {/* 1. Core Ethos Section */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">The History</span>
          <h2 className="text-3xl font-heading font-black text-white uppercase">Shredding Limits Since 2016</h2>
          <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base">
            {brandName} was built to provide an uncompromising fitness platform. We avoid commercial gym clutter, offering instead dedicated performance zones designed for individuals serious about body composition and athletic growth.
          </p>
          <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base">
            We fuse advanced sports medicine theory with standard weight training mechanics to produce highly optimized, injury-free transformations.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80" alt="Gym floor" className="rounded-2xl border border-zinc-800 shadow-2xl w-full object-cover aspect-[4/3]" />
        </div>
      </section>

      {/* 2. Core Pillars */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">Our Standards</span>
            <h2 className="text-3xl font-heading font-black text-white uppercase">Our Core Pillars</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Biomechanical Safety', desc: 'Every lift represents an anatomical mechanism. We correct movements down to the joint angle.' },
              { title: 'Data-Driven Goals', desc: 'No guessing. We map muscle weight, metabolic rates, and performance ratios weekly.' },
              { title: 'Elite Community', desc: 'Join a network of focused athletes, fitness enthusiasts, and dedicated coaches.' }
            ].map((p, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl space-y-3">
                <h3 className="text-lg font-bold font-heading text-white">{p.title}</h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Facility Showcase Gallery */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">Inside the Gym</span>
          <h2 className="text-3xl font-heading font-black text-white uppercase">Our Compounds Zones</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden border border-zinc-800">
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&q=80" alt="Iron Rack" className="w-full aspect-video md:aspect-square object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-zinc-800">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=80" alt="Cardio Zone" className="w-full aspect-video md:aspect-square object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-zinc-800">
            <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=500&q=80" alt="Recovery baths" className="w-full aspect-video md:aspect-square object-cover" />
          </div>
        </div>
      </section>

      {/* 4. Credentials / Accreditations */}
      <section className="py-24 bg-zinc-900 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-8">
          <div className="space-y-4">
            <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">Accreditations</span>
            <h2 className="text-3xl font-heading font-black text-white uppercase">Accredited Excellence</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'NSCA Certified Panel', org: 'National Strength & Conditioning' },
              { title: 'Sports Medicine Approved', org: 'American Kinesiology Association' },
              { title: 'Gold Level Facility', org: 'International Fitness Standards' }
            ].map((aw, i) => (
              <div key={i} className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl space-y-2">
                <h3 className="font-heading font-bold text-white text-base">{aw.title}</h3>
                <p className="text-xs text-zinc-500">{aw.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Trial CTA */}
      <GymCTA 
        title="Start Your Journey Today" 
        desc="Book a free consultation session with our head conditioning programmer." 
        btnText="Book Free Consultation" 
        linkTo="contact" 
      />
    </div>
  );
}

// 3. MEMBERSHIPS (PRICING)
function MembershipsView() {
  const { brandName } = useDemo();
  return (
    <div className="space-y-0 animate-fadeIn bg-zinc-950">
      <GymInnerHeader title="Memberships" subtitle="Select your custom access tier. 100% contract-free." />

      {/* 1. Pricing Cards */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Standard Club', price: '$29', features: ['General Floor Access', 'Locker access', '1 Coach consultation'] },
          { name: 'Elite Conditioning', price: '$59', features: ['24/7 Door Unlock', 'All Class Timetables included', 'Sauna & Cryotherapy Access'], featured: true },
          { name: 'Platinum Coach', price: '$99', features: ['All Elite features', '2 Weekly Personal Coach hours', 'Custom Diet Programming'] }
        ].map((pkg, idx) => (
          <div key={idx} className={`bg-zinc-900 border rounded-2xl p-8 flex flex-col justify-between relative ${pkg.featured ? 'border-emerald-500 shadow-lg' : 'border-zinc-800'}`}>
            {pkg.featured && <span className="absolute top-0 right-8 -translate-y-1/2 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Popular</span>}
            <div>
              <h3 className="text-lg font-bold font-heading text-white">{pkg.name}</h3>
              <div className="text-3xl font-heading font-black text-white mt-4 mb-6">{pkg.price}<span className="text-zinc-500 text-sm font-light">/mo</span></div>
              <ul className="space-y-3 mb-8 text-xs text-zinc-400">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2"><Check size={14} className="text-emerald-400" /> {f}</li>
                ))}
              </ul>
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.open(`https://wa.me/919876543210?text=Interested%20in%20${pkg.name}%20at%2520${brandName}`, '_blank');
              }}
              className={`w-full py-3 rounded-xl font-bold uppercase text-xs text-center tracking-wider transition-all ${pkg.featured ? 'bg-emerald-400 hover:bg-emerald-500 text-black' : 'bg-zinc-800 hover:bg-zinc-700 text-white'}`}
            >
              Sign Up Now
            </a>
          </div>
        ))}
      </section>

      {/* 2. Membership Comparison Table */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-zinc-900">
        <div className="text-center space-y-4 mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">Details Comparison</span>
          <h2 className="text-3xl font-heading font-black text-white uppercase">Feature Matrix</h2>
        </div>
        <div className="overflow-x-auto border border-zinc-800 rounded-2xl bg-zinc-900/20">
          <table className="w-full text-left text-zinc-300 text-xs md:text-sm">
            <thead className="bg-zinc-900 text-white font-heading font-bold uppercase tracking-wider text-[10px] border-b border-zinc-800">
              <tr>
                <th className="p-6">Feature</th>
                <th className="p-6">Standard</th>
                <th className="p-6">Elite</th>
                <th className="p-6">Platinum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              <tr>
                <td className="p-6 font-bold">24/7 Door Unlock</td>
                <td className="p-6 text-zinc-500">−</td>
                <td className="p-6 text-emerald-400">✓</td>
                <td className="p-6 text-emerald-400">✓</td>
              </tr>
              <tr>
                <td className="p-6 font-bold">Locker Room access</td>
                <td className="p-6 text-emerald-400">✓</td>
                <td className="p-6 text-emerald-400">✓</td>
                <td className="p-6 text-emerald-400">✓</td>
              </tr>
              <tr>
                <td className="p-6 font-bold">Contrast Recovery Zone</td>
                <td className="p-6 text-zinc-500">−</td>
                <td className="p-6 text-emerald-400">✓</td>
                <td className="p-6 text-emerald-400">✓</td>
              </tr>
              <tr>
                <td className="p-6 font-bold">Personal Training Hours</td>
                <td className="p-6 text-zinc-500">−</td>
                <td className="p-6 text-zinc-500">−</td>
                <td className="p-6 text-emerald-400">2x / Week</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. BMI Widget */}
      <section className="py-20 bg-zinc-900/30 border-t border-zinc-900">
        <BMICalculator />
      </section>

      {/* 4. Policies */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-zinc-900 text-center space-y-6">
        <h3 className="text-xl font-heading font-bold text-white uppercase">Flexibility Guarantee</h3>
        <p className="text-zinc-400 text-xs leading-relaxed max-w-xl mx-auto font-light">
          No sign up setup fees. Cancel anytime by logging into your dashboard or sending a quick text before the billing cycle. Freezes up to 60 days are allowed per year.
        </p>
      </section>

      {/* 5. FAQ section */}
      <GymFAQ 
        faqs={[
          { q: 'Can I freeze my membership?', a: 'Yes! Elite and Platinum members can freeze billing for up to 60 days per year via dashboard.' },
          { q: 'Is there a locker fee?', a: 'Standard lockers are free. Premium permanent locker blocks with keyless RFID access are $10/month.' }
        ]}
      />
    </div>
  );
}

// 4. TRAINERS VIEW
function TrainersView() {
  const { brandName } = useDemo();
  return (
    <div className="space-y-0 animate-fadeIn">
      <GymInnerHeader title="Elite Trainers" subtitle="Learn from national weightlifting champions and sports nutritionists." />
      
      {/* 1. Trainers list */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Coach Marcus', role: 'Strength & Conditioning Head', specialty: 'Olympic Lifts & Hypertrophy', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
          { name: 'Coach Sophia', role: 'HIIT & Athletics Lead', specialty: 'Metabolic Cardio Shred', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
          { name: 'Coach Viktor', role: 'Combat & Boxing Specialist', specialty: 'MMA Basics & Core Power', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' }
        ].map((t, idx) => (
          <div key={idx} className="bg-zinc-900/30 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-emerald-500/20 transition-all">
            <div className="h-64 overflow-hidden bg-zinc-950">
              <img src={t.img} alt={t.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-heading font-bold text-white text-lg">{t.name}</h3>
              <span className="text-xs text-emerald-400 font-semibold block">{t.role}</span>
              <p className="text-zinc-400 text-xs font-light pt-1">Specialty: {t.specialty}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 2. Coaching Philosophy */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-6">
          <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">Our Principles</span>
          <h2 className="text-3xl font-heading font-black text-white uppercase">Coaching Standards</h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-xl mx-auto">
            Every coach at {brandName} maintains a minimum of a Bachelor's in Kinesiology or an internationally recognized coaching certification. We audit postural alignment and loading mechanics to optimize performance without joint wear.
          </p>
        </div>
      </section>

      {/* 3. Transformations Highlight */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">Results Gallery</span>
          <h2 className="text-3xl font-heading font-black text-white uppercase">Client Success Stories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { quote: `Coach Marcus fixed my deadlift setup. My lower back pain vanished, and my lifting form feels 10x more stable now.`, author: 'David L., Platinum Member' },
            { quote: `Sophia's metabolic conditioning sessions are intense but fully structured. I shredded 10kg without losing any strength.`, author: 'Maria S., Elite Member' }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl space-y-3">
              <p className="text-zinc-300 text-xs italic font-light leading-relaxed">"{item.quote}"</p>
              <div className="text-[10px] uppercase font-bold text-emerald-400">— {item.author}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Trainer Q&A */}
      <GymFAQ 
        faqs={[
          { q: 'How do I book personal hours?', a: 'Once registered in the Platinum tier, you can select and book coaching slots directly inside our online scheduler.' },
          { q: 'Can I swap coaches anytime?', a: 'Absolutely. We offer complete flexibility to swap trainers based on your schedule requirements.' }
        ]}
      />

      {/* 5. CTA */}
      <GymCTA 
        title="Work with the Best" 
        desc="Book your initial assessment slot now and begin targeted muscular development." 
        btnText="Select Trainer" 
        linkTo="contact" 
      />
    </div>
  );
}

// 5. SCHEDULE VIEW
function ScheduleView() {
  const [activeDay, setActiveDay] = useState('mon');

  const days = {
    mon: [
      { name: 'HIIT Conditioning', time: '08:00 AM', coach: 'Sophia' },
      { name: 'Olympic Cleans', time: '10:00 AM', coach: 'Marcus' },
      { name: 'Mobility Yoga', time: '05:00 PM', coach: 'Elena' }
    ],
    wed: [
      { name: 'Boxing Sparks', time: '09:00 AM', coach: 'Viktor' },
      { name: 'Core Shredder', time: '11:00 AM', coach: 'Sophia' },
      { name: 'Power Lifting', time: '06:00 PM', coach: 'Marcus' }
    ],
    fri: [
      { name: 'Conditioning Drill', time: '08:00 AM', coach: 'Sophia' },
      { name: 'Cleans & Snatch', time: '10:00 AM', coach: 'Marcus' },
      { name: 'Yoga Flow', time: '05:00 PM', coach: 'Elena' }
    ]
  };

  return (
    <div className="space-y-0 animate-fadeIn bg-zinc-950">
      <GymInnerHeader title="Timetables" subtitle="Explore our flexible weekly class structures." />

      {/* 1. Timetable selection */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex justify-center gap-4 mb-10 border-b border-zinc-900 pb-4">
          {['mon', 'wed', 'fri'].map((d) => (
            <button
              key={d}
              onClick={() => setActiveDay(d)}
              className={`px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
                activeDay === d ? 'bg-emerald-500 text-black' : 'bg-zinc-900 text-zinc-400 hover:border-zinc-700'
              }`}
            >
              {d === 'mon' ? 'Monday' : d === 'wed' ? 'Wednesday' : 'Friday'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {days[activeDay].map((c, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-3 hover:border-emerald-500/15 transition-all">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block">{c.time}</span>
              <h3 className="text-lg font-bold font-heading text-white">{c.name}</h3>
              <p className="text-zinc-500 text-xs">Coach: <strong className="text-zinc-300">{c.coach}</strong></p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Class Descriptions */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">Class Details</span>
            <h2 className="text-3xl font-heading font-black text-white uppercase">Class Descriptions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Olympic Cleans', desc: 'Technical focus on clean and jerk/snatch biomechanics. Recommended for experienced lifters.' },
              { title: 'HIIT Conditioning', desc: 'Maximum heart-rate interval drills targeting lactic threshold and endurance.' },
              { title: 'Mobility Yoga', desc: 'Active structural recovery and deep myofascial release to restore posture.' }
            ].map((cl, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-850 p-6 rounded-2xl space-y-3">
                <h4 className="font-heading font-bold text-white text-base">{cl.title}</h4>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">{cl.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Booking Guidelines */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-4">
        <h3 className="text-xl font-heading font-bold text-white uppercase">Booking Guidelines</h3>
        <p className="text-zinc-400 text-xs leading-relaxed max-w-xl mx-auto font-light">
          Class registrations open 48 hours prior to start. Standard members can register for up to 3 classes weekly, while Elite and Platinum members have unlimited registrations.
        </p>
      </section>

      {/* 4. Schedule Q&A */}
      <GymFAQ 
        faqs={[
          { q: 'What happens if I miss a registered class?', a: 'Please cancel registrations at least 2 hours before start to allow waitlisted members to fill the slot.' },
          { q: 'Are walk-ins allowed?', a: 'If a class is not fully booked, walk-ins are welcome. However, we recommend registering online to secure a slot.' }
        ]}
      />

      {/* 5. Trial CTA */}
      <GymCTA 
        title="Claim Your Trial Class Slot" 
        desc="Book a free trial class under our elite conditioning coaching panel." 
        btnText="Register For Class" 
        linkTo="contact" 
      />
    </div>
  );
}

// 6. CONTACT VIEW
function ContactView() {
  const { brandName } = useDemo();
  const [form, setForm] = useState({ name: '', email: '', msg: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', msg: '' });
  };

  return (
    <div className="space-y-0 animate-fadeIn">
      <GymInnerHeader title="Contact Us" subtitle={`Connect with our front desk at ${brandName}.`} />
      
      {/* 1. Address / Phone / Form */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Our Compound</h3>
            <p className="text-zinc-405 font-light flex items-center gap-2"><MapPin size={16} className="text-emerald-400" /> 456 Power Lane, Fitness City</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Connect</h3>
            <p className="text-zinc-400 font-light flex items-center gap-2"><Phone size={16} className="text-emerald-400" /> +1 (555) 345-6789</p>
            <p className="text-zinc-405 font-light mt-2">Email: contact@{brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Hours of Operation</h3>
            <div className="text-xs text-zinc-400 space-y-1 font-light">
              <p>Monday - Friday: 05:00 AM - 11:00 PM</p>
              <p>Saturday - Sunday: 07:00 AM - 09:00 PM</p>
              <p className="text-emerald-400 font-semibold mt-1">24/7 RFID Keycard access for Elite Members</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-850">
          <h3 className="font-heading font-bold text-xl text-white mb-6 uppercase">Send a Message</h3>
          {sent ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-center text-xs font-semibold">
              Thank you! Message received. Our operations team will call you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase">Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400" />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400" />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase">Message</label>
                <textarea required rows={4} value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400 resize-none" />
              </div>
              <button type="submit" className="w-full bg-emerald-400 hover:bg-emerald-500 text-black py-3 rounded-xl font-bold uppercase text-xs tracking-wider">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 2. Mock Interactive Map */}
      <section className="py-24 bg-zinc-905 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-heading font-black text-white uppercase">Find Our Location</h4>
              <p className="text-zinc-400 text-xs max-w-md leading-relaxed font-light">
                Located in the heart of the Fitness District. 100+ free parking spaces are available for member vehicles directly behind the main building compound.
              </p>
            </div>
            <div className="w-full md:w-80 h-48 rounded-2xl bg-zinc-950 border border-zinc-850 relative flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=500&q=80')" }} />
              <div className="relative z-10 text-center space-y-2">
                <MapPin size={24} className="text-emerald-400 mx-auto" />
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">45.4215° N, 75.6972° W</span>
                <span className="text-xs text-white font-bold">Fitness City Complex</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function GymDemo() {
  const { subpage: urlSubpage } = useParams();
  const subpage = urlSubpage || 'home';
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const renderSubpage = () => {
    switch (subpage) {
      case 'about': return <AboutView />;
      case 'memberships': return <MembershipsView />;
      case 'trainers': return <TrainersView />;
      case 'schedule': return <ScheduleView />;
      case 'contact': return <ContactView />;
      case 'home':
      default: return <HomeView />;
    }
  };

  return (
    <DemoLayout defaultBrand="Iron Temple Gym" slug="gym" currentSubpage={subpage}>
      <div className="bg-zinc-950 text-zinc-100 min-h-screen">
        <GymNavbar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
        <main>{renderSubpage()}</main>
        <GymFooter />
      </div>
    </DemoLayout>
  );
}
