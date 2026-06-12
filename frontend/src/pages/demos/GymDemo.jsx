import { useState } from 'react';
import DemoLayout, { useDemo } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { Flame, Calculator, Check, Dumbbell, Calendar, Award, Star, MessageSquare } from 'lucide-react';

function GymContent() {
  const { brandName } = useDemo();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiStatus, setBmiStatus] = useState('');
  const [activeDay, setActiveDay] = useState('monday');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) return;
    const hMeter = height / 100;
    const bmi = (weight / (hMeter * hMeter)).toFixed(1);
    setBmiResult(bmi);

    if (bmi < 18.5) {
      setBmiStatus('Underweight (Time to bulk up!)');
    } else if (bmi >= 18.5 && bmi < 25) {
      setBmiStatus('Normal/Healthy weight (Excellent shape!)');
    } else if (bmi >= 25 && bmi < 30) {
      setBmiStatus('Overweight (Let\'s burn some fat!)');
    } else {
      setBmiStatus('Obese (We can help you transform!)');
    }
  };

  const schedule = {
    monday: [
      { name: 'Strength Conditioning', time: '07:00 AM - 08:30 AM', coach: 'Coach Marcus' },
      { name: 'Cardio Blast HIIT', time: '09:00 AM - 10:00 AM', coach: 'Coach Sophia' },
      { name: 'Power Yoga', time: '05:00 PM - 06:00 PM', coach: 'Coach Elena' },
    ],
    wednesday: [
      { name: 'Boxing & MMA Basics', time: '08:00 AM - 09:30 AM', coach: 'Coach Viktor' },
      { name: 'Core & Glutes Shred', time: '10:00 AM - 11:00 AM', coach: 'Coach Sophia' },
      { name: 'Pilates Flow', time: '06:00 PM - 07:00 PM', coach: 'Coach Elena' },
    ],
    friday: [
      { name: 'Olympic Weightlifting', time: '07:00 AM - 09:00 AM', coach: 'Coach Marcus' },
      { name: 'Full Body HIIT Circuit', time: '09:30 AM - 10:30 AM', coach: 'Coach Sophia' },
      { name: 'Zumba Cardio Party', time: '05:30 PM - 06:30 PM', coach: 'Coach Clara' },
    ]
  };

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-emerald-500/15 bg-zinc-950/95 backdrop-blur-md sticky top-[68px] z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-heading font-extrabold text-xl tracking-tight text-emerald-400 flex items-center gap-1.5">
            <Flame className="fill-current text-emerald-400" size={20} />
            {brandName}
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-zinc-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#schedule" className="hover:text-emerald-400 transition-colors">Schedules</a>
            <a href="#bmi" className="hover:text-emerald-400 transition-colors">BMI Calculator</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">Memberships</a>
          </div>
          <a
            href="#pricing"
            className="bg-emerald-500 hover:bg-emerald-600 text-black px-4.5 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wide transition-all"
          >
            Join Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-28 md:py-36 text-center overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/75 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-emerald-400 text-xs font-bold tracking-[5px] uppercase block">
            Unleash Your Limits
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-none uppercase">
            Transform Your Body At <span className="text-emerald-400">{brandName}</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            State-of-the-art weights, elite coaching, certified nutrition experts, and a community built to push you past your limits.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="#pricing"
              className="bg-emerald-400 hover:bg-emerald-500 text-black px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all"
            >
              Get Free Day Pass
            </a>
            <a
              href="#bmi"
              className="bg-transparent border border-emerald-400 hover:bg-emerald-400/10 text-emerald-400 px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span>Calculate BMI</span>
              <Calculator size={14} />
            </a>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8" id="about">
        <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
            <Dumbbell size={22} />
          </div>
          <h3 className="text-lg font-bold font-heading text-white">Elite Equipment</h3>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            Top-tier machines, custom free weight zone, olympic platforms, and dedicated functional zones.
          </p>
        </div>
        <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
            <Award size={22} />
          </div>
          <h3 className="text-lg font-bold font-heading text-white">Certified Coaches</h3>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            Our trainers are certified professionals dedicated to mapping your goals, forms, and nutrition.
          </p>
        </div>
        <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
            <Calendar size={22} />
          </div>
          <h3 className="text-lg font-bold font-heading text-white">Flexible Schedules</h3>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            Open 24/7 with dozens of HIIT, Strength, MMA, and Yoga classes weekly to match your calendar.
          </p>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-900" id="schedule">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">
              Class Schedule
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Find Your Classes & Workouts
            </h2>
          </div>

          <div className="flex justify-center gap-3 mb-10">
            {['monday', 'wednesday', 'friday'].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
                  activeDay === day
                    ? 'bg-emerald-500 text-black'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schedule[activeDay].map((c, idx) => (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-800/80 p-6 rounded-xl space-y-3">
                <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-wider">{c.time}</h4>
                <h3 className="text-lg font-bold font-heading text-white">{c.name}</h3>
                <p className="text-zinc-400 text-xs font-light">Lead by: <strong className="text-zinc-300">{c.coach}</strong></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BMI Calculator Widget */}
      <section className="py-24 max-w-4xl mx-auto px-6" id="bmi">
        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">
              Health Analytics
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mt-2">
              Calculate Your Body Mass Index (BMI)
            </h2>
            <p className="text-zinc-400 text-sm font-light mt-3 leading-relaxed">
              Use this instant calculator to identify your body fat classification based on your height and weight. Our trainers can design a program based on your index.
            </p>
          </div>

          <form onSubmit={calculateBMI} className="bg-zinc-950/80 border border-zinc-800 p-6 rounded-2xl space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase text-zinc-400 mb-1">Weight (KG)</label>
                <input
                  type="number"
                  required
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 70"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-white placeholder-zinc-700 text-sm focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase text-zinc-400 mb-1">Height (CM)</label>
                <input
                  type="number"
                  required
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="e.g. 175"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-white placeholder-zinc-700 text-sm focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-400 hover:bg-emerald-500 text-black py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all"
            >
              Calculate Now
            </button>

            {bmiResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 pt-4 border-t border-zinc-800/80 text-center"
              >
                <div className="text-xs text-zinc-400">Your BMI Score:</div>
                <div className="text-3xl font-heading font-black text-emerald-400 mt-1">{bmiResult}</div>
                <div className="text-xs font-semibold text-zinc-300 mt-1">{bmiStatus}</div>
              </motion.div>
            )}
          </form>
        </div>
      </section>

      {/* Transformations Gallery */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">
            Success Stories
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">
            Real Transformations
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: 'Michael Jordan', change: 'Lost 15kg & Built Lean Muscle', time: '6 Months', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80' },
            { name: 'Amanda Sterling', change: 'Toned Core & Tripled Endurance', time: '4 Months', image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80' },
          ].map((t, idx) => (
            <div key={idx} className="bg-zinc-900/30 border border-zinc-800 rounded-2xl overflow-hidden group">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-500 text-black font-extrabold text-[10px] uppercase px-3 py-1 rounded-full">
                  {t.time}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-white text-lg">{t.name}</h3>
                <p className="text-emerald-400 text-sm mt-1">{t.change}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing / Membership Packages */}
      <section className="py-24 bg-zinc-900/30 border-t border-zinc-900" id="pricing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-400 text-xs font-bold tracking-[3px] uppercase">
              Pricing Plans
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Select Your Membership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Basic Club', price: '$29', features: ['Gym Floor Access', 'Basic Locker Access', '1 Free Trainer Consultation', 'Cardio Gym Zone'] },
              { name: 'Elite Performance', price: '$59', features: ['24/7 Access to All Zones', 'Full Class Schedules Access', 'Monthly Progress Evaluation', 'Towel & Sauna Access'], featured: true },
              { name: 'Platinum Coach', price: '$99', features: ['All Elite features Included', '2 Weekly Personal Coach Sessions', 'Custom Diet & Meal Planning', 'Free Recovery Drinks'] }
            ].map((p, idx) => (
              <div
                key={idx}
                className={`bg-zinc-900 border rounded-2xl p-8 flex flex-col justify-between relative ${
                  p.featured
                    ? 'border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.1)]'
                    : 'border-zinc-800'
                }`}
              >
                {p.featured && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">{p.name}</h3>
                  <div className="flex items-baseline mt-4 mb-6">
                    <span className="text-4xl font-heading font-black text-white">{p.price}</span>
                    <span className="text-zinc-500 text-sm ml-1">/ month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm text-zinc-400">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-400 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={`#contact`}
                  onClick={(e) => {
                    e.preventDefault();
                    const msg = encodeURIComponent(`Hi ${brandName}, I'm interested in signing up for the ${p.name} plan!`);
                    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
                  }}
                  className={`w-full py-3 rounded-xl font-bold uppercase text-xs tracking-wider text-center transition-all ${
                    p.featured
                      ? 'bg-emerald-400 hover:bg-emerald-500 text-black'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 text-center text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <div className="font-heading font-bold text-base text-emerald-400">💪 {brandName}</div>
          <p>© {new Date().getFullYear()} {brandName}. Built for athletic performance.</p>
        </div>
      </footer>
    </div>
  );
}

export default function GymDemo() {
  return (
    <DemoLayout defaultBrand="Iron Temple Gym" slug="gym">
      <GymContent />
    </DemoLayout>
  );
}
