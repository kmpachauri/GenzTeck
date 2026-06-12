import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DemoLayout, { useDemo, DemoLink } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Trophy, 
  Users, 
  BookOpen, 
  Star, 
  Sparkles, 
  Check, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle,
  Calendar,
  Menu as MenuIcon, 
  X 
} from 'lucide-react';

function SchoolNavbar({ isMobileOpen, setIsMobileOpen }) {
  const { brandName } = useDemo();
  return (
    <nav className="border-b border-[#66fcf1]/10 bg-[#0b0c10]/95 backdrop-blur-md sticky top-[68px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">
        <DemoLink to="home" className="font-heading font-extrabold text-2xl tracking-tight text-[#66fcf1] flex items-center gap-1.5">
          <GraduationCap size={24} className="text-[#66fcf1] animate-pulse" />
          <span className="text-white truncate max-w-[150px] sm:max-w-[250px] md:max-w-none">{brandName}</span>
        </DemoLink>
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#c5c6c7]">
          <DemoLink to="home" activeClassName="text-[#66fcf1] font-bold" className="hover:text-[#66fcf1] transition-colors">Home</DemoLink>
          <DemoLink to="about" activeClassName="text-[#66fcf1] font-bold" className="hover:text-[#66fcf1] transition-colors">About Us</DemoLink>
          <DemoLink to="courses" activeClassName="text-[#66fcf1] font-bold" className="hover:text-[#66fcf1] transition-colors">Programs</DemoLink>
          <DemoLink to="faculty" activeClassName="text-[#66fcf1] font-bold" className="hover:text-[#66fcf1] transition-colors">Mentors</DemoLink>
          <DemoLink to="results" activeClassName="text-[#66fcf1] font-bold" className="hover:text-[#66fcf1] transition-colors font-semibold">Results</DemoLink>
          <DemoLink to="contact" activeClassName="text-[#66fcf1] font-bold" className="hover:text-[#66fcf1] transition-colors">Contact</DemoLink>
        </div>
        <div className="hidden lg:block">
          <DemoLink to="contact" className="bg-[#66fcf1] hover:bg-[#45a29e] text-black px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(102,252,241,0.2)]">
            Apply Now
          </DemoLink>
        </div>
        <button className="lg:hidden text-white hover:text-[#66fcf1]" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-[#0b0c10] border-b border-[#66fcf1]/10 py-6 px-6 space-y-4 flex flex-col">
          <DemoLink to="home" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#66fcf1]" className="text-sm font-semibold text-zinc-400">Home</DemoLink>
          <DemoLink to="about" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#66fcf1]" className="text-sm font-semibold text-zinc-400">About Us</DemoLink>
          <DemoLink to="courses" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#66fcf1]" className="text-sm font-semibold text-zinc-400">Programs</DemoLink>
          <DemoLink to="faculty" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#66fcf1]" className="text-sm font-semibold text-zinc-400">Mentors</DemoLink>
          <DemoLink to="results" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#66fcf1]" className="text-sm font-semibold text-zinc-400">Results</DemoLink>
          <DemoLink to="contact" onClick={() => setIsMobileOpen(false)} activeClassName="text-[#66fcf1]" className="text-sm font-semibold text-zinc-400">Contact</DemoLink>
          <DemoLink to="contact" onClick={() => setIsMobileOpen(false)} className="bg-[#66fcf1] text-black text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider">
            Apply Now
          </DemoLink>
        </div>
      )}
    </nav>
  );
}

function SchoolFooter() {
  const { brandName } = useDemo();
  return (
    <footer className="bg-[#0b0c10] border-t border-[#66fcf1]/15 py-16 text-xs text-slate-500 font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <span className="font-heading font-extrabold text-xl tracking-tight text-[#66fcf1] flex items-center gap-1.5">
            <GraduationCap size={20} className="text-[#66fcf1]" />
            {brandName}
          </span>
          <p className="leading-relaxed text-[#c5c6c7]">
            A goal-oriented coaching and schooling institute focused on standardizing scientific reasoning and securing board ranks.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Programs</h4>
          <ul className="space-y-2 flex flex-col font-semibold">
            <DemoLink to="home" className="hover:text-[#66fcf1] transition-colors">Home</DemoLink>
            <DemoLink to="about" className="hover:text-[#66fcf1] transition-colors">About Us</DemoLink>
            <DemoLink to="courses" className="hover:text-[#66fcf1] transition-colors">Courses</DemoLink>
            <DemoLink to="contact" className="hover:text-[#66fcf1] transition-colors">Admissions</DemoLink>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Academics</h4>
          <p className="text-[#c5c6c7]">IIT-JEE Prep course</p>
          <p className="text-[#c5c6c7]">NEET Biology Unit</p>
          <p className="text-[#66fcf1] font-semibold">National Olympiad Prep</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Registrations</h4>
          <p className="flex items-center gap-2 text-[#c5c6c7]"><MapPin size={12} className="text-[#66fcf1]" /> 567 Education Plaza, Academy City</p>
          <p className="flex items-center gap-2 text-[#c5c6c7]"><Phone size={12} className="text-[#66fcf1]" /> +1 (555) 789-0123</p>
          <p className="text-[#c5c6c7] underline">admissions@{brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-8 border-t border-[#1f2833] flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {brandName}. Educating for heights.</p>
        <div className="flex gap-4 text-slate-500">
          <a href="#" className="hover:text-[#66fcf1]">YouTube</a>
          <a href="#" className="hover:text-[#66fcf1]">Telegram</a>
        </div>
      </div>
    </footer>
  );
}

function SchoolInnerHeader({ title, subtitle }) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#1f2833]/30 via-[#0b0c10] to-[#0b0c10] border-b border-[#66fcf1]/10 text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#66fcf1]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight">{title}</h1>
        <p className="text-[#c5c6c7] text-base font-light max-w-xl mx-auto">{subtitle}</p>
        <div className="flex justify-center items-center gap-2 text-xs text-zinc-500 mt-6">
          <DemoLink to="home" className="hover:text-[#66fcf1]">Home</DemoLink>
          <span>/</span>
          <span className="text-[#66fcf1] capitalize">{title}</span>
        </div>
      </div>
    </section>
  );
}

function SchoolFAQ({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="py-24 bg-[#0b0c10] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#66fcf1] text-xs font-bold tracking-[3px] uppercase">Academy Help</span>
          <h2 className="text-3xl font-heading font-bold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#1f2833]/30 border border-[#45a29e]/15 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 font-heading font-bold text-white flex justify-between items-center hover:bg-[#1f2833]/55 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-[#66fcf1]">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-[#c5c6c7] leading-relaxed font-light border-t border-[#45a29e]/10 pt-4">
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
      {/* 2. Hero Section */}
      <header className="relative py-32 md:py-48 text-center overflow-hidden flex items-center justify-center min-h-[85vh]">
        <div className="absolute inset-0 bg-black/75 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1600&q=80')" }} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent z-15 pointer-events-none" />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-[#66fcf1] text-xs font-bold tracking-[5px] uppercase bg-[#66fcf1]/10 border border-[#66fcf1]/20 px-4 py-1.5 rounded-full inline-block">
            IIT-JEE & NEET Academy
          </span>
          <h1 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight uppercase">
            Nurturing Absolute Ranks at <span className="text-[#66fcf1]">{brandName}</span>
          </h1>
          <p className="text-[#c5c6c7] text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Doubt-clearing cells, weekly study logs, IIT-trained mentors, and individual coaching benchmarks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <DemoLink to="courses" className="bg-[#66fcf1] hover:bg-[#45a29e] text-black px-8 py-3.5 rounded-xl font-extrabold uppercase text-xs tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(102,252,241,0.2)]">
              Explore Programs
            </DemoLink>
            <DemoLink to="faculty" className="bg-transparent border border-white/20 hover:border-white hover:bg-white hover:text-black text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all duration-300">
              Meet Mentors
            </DemoLink>
          </div>
        </div>
      </header>

      {/* 3. Stat Cards */}
      <section className="bg-[#0b0c10] border-y border-[#1f2833] py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-[#1f2833]/30 rounded-2xl border border-[#45a29e]/10 hover:border-[#66fcf1]/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-[#66fcf1]">99.2%</div>
            <div className="text-xs text-[#c5c6c7] uppercase tracking-wider mt-2">Board Pass Rate</div>
          </div>
          <div className="p-6 bg-[#1f2833]/30 rounded-2xl border border-[#45a29e]/10 hover:border-[#66fcf1]/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-[#66fcf1]">480+</div>
            <div className="text-xs text-[#c5c6c7] uppercase tracking-wider mt-2">IIT Selections</div>
          </div>
          <div className="p-6 bg-[#1f2833]/30 rounded-2xl border border-[#45a29e]/10 hover:border-[#66fcf1]/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-[#66fcf1]">AIR 12</div>
            <div className="text-xs text-[#c5c6c7] uppercase tracking-wider mt-2">Highest Olympiad Rank</div>
          </div>
          <div className="p-6 bg-[#1f2833]/30 rounded-2xl border border-[#45a29e]/10 hover:border-[#66fcf1]/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-[#66fcf1]">100%</div>
            <div className="text-xs text-[#c5c6c7] uppercase tracking-wider mt-2">Doubt Resolution</div>
          </div>
        </div>
      </section>

      {/* 4. About Preview */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-[#66fcf1] text-xs font-bold tracking-[3px] uppercase flex items-center gap-2">
            <BookOpen size={14} /> Academic Standard
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight uppercase font-heading">
            Conceptual Rigor & Rank-Focused Prep
          </h2>
          <p className="text-[#c5c6c7] leading-relaxed font-light text-sm md:text-base">
            {brandName} operates at the highest academic standard. We structure courses using daily practice papers and absolute conceptual clarity to keep board students motivated and ready.
          </p>
          <DemoLink to="about" className="text-[#66fcf1] font-extrabold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 hover:underline group">
            <span>Learn About Our Pedagogy</span> 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </DemoLink>
        </div>
        <div className="relative group">
          <div className="absolute -inset-2 rounded-2xl border border-[#66fcf1]/10 transform rotate-1 pointer-events-none group-hover:rotate-0 transition-transform duration-300" />
          <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80" alt="Classroom layout" className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3] border border-[#1f2833]" />
        </div>
      </section>

      {/* 5. Program Preview */}
      <section className="py-24 bg-[#1f2833]/30 border-y border-[#1f2833]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#66fcf1] text-xs font-bold tracking-[3px] uppercase">Batches</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase font-heading">Academic Courses</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { title: 'IIT-JEE/NEET Prime Prep', duration: '2 Year Course', desc: 'Rigorous physics, chemistry, biology, and maths syllabus coverage with daily practice sheets and full weekly diagnostics.', icon: <GraduationCap className="text-[#66fcf1]" /> },
              { title: 'Foundation Excellence Course', duration: '1 Year Program', desc: 'Build logical reasoning, mathematical foundations, and basic scientific principles to crack national talent exams early.', icon: <BookOpen className="text-[#66fcf1]" /> }
            ].map((s, idx) => (
              <div key={idx} className="bg-[#0b0c10] border border-[#45a29e]/15 p-8 rounded-2xl space-y-4 hover:border-[#66fcf1]/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#66fcf1]/10 border border-[#66fcf1]/20 flex items-center justify-center group-hover:bg-[#66fcf1] group-hover:text-black transition-colors duration-300">
                  {s.icon}
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">{s.duration}</span>
                  <h3 className="text-lg font-bold font-heading text-white">{s.title}</h3>
                </div>
                <p className="text-[#c5c6c7] text-xs font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <DemoLink to="courses" className="bg-transparent border border-[#66fcf1] text-[#66fcf1] hover:bg-[#66fcf1] hover:text-black px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block">
              View All Programs
            </DemoLink>
          </div>
        </div>
      </section>

      {/* 6. Toppers Gallery */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#66fcf1] text-xs font-bold tracking-[3px] uppercase">Ranks</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading">Hall of Fame</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Rohan Malhotra', rank: 'AIR 45', exam: 'JEE Advanced 2024', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
            { name: 'Sneha Roy', rank: 'AIR 88', exam: 'NEET 2024', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
            { name: 'Aditya K.', rank: 'AIR 104', exam: 'JEE Advanced 2024', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#1f2833]/30 border border-[#45a29e]/15 rounded-2xl overflow-hidden hover:border-[#66fcf1]/20 transition-all duration-300 group">
              <div className="h-60 overflow-hidden relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500" />
                <span className="absolute top-4 right-4 bg-[#66fcf1] text-black text-xs font-black px-2.5 py-1 rounded-xl uppercase tracking-wider z-20">
                  {item.rank}
                </span>
              </div>
              <div className="p-6">
                <h4 className="font-heading font-bold text-white text-base">{item.name}</h4>
                <span className="text-xs text-slate-500 font-light block mt-1">{item.exam}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Industry Specific Widget (Doubt Clearance tracker) */}
      <section className="py-24 bg-[#1f2833]/20 border-t border-[#45a29e]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 bg-[#1f2833]/80 border border-[#45a29e]/20 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-[#66fcf1] text-xs font-bold tracking-[3px] uppercase">Doubt Desk</span>
            <h3 className="text-2xl font-heading font-bold text-white uppercase mt-2">Doubt Clearance Cell</h3>
            <p className="text-[#c5c6c7] text-sm font-light leading-relaxed mt-4">
              We allocate dedicated physical slots for doubt clearing post lectures. Students present check sheets directly to IIT-trained mentors.
            </p>
          </div>
          <div className="bg-[#0b0c10] border border-[#45a29e]/20 p-6 rounded-2xl space-y-4">
            <div className="flex justify-between items-center text-xs text-[#c5c6c7]">
              <span>Active Doubt Mentors</span>
              <span className="text-[#66fcf1] font-bold">12 Roster slots</span>
            </div>
            <div className="flex justify-between items-center text-xs text-[#c5c6c7]">
              <span>Avg Resolution Time</span>
              <span className="text-[#66fcf1] font-bold">15 Mins</span>
            </div>
            <div className="flex justify-between items-center text-xs text-[#c5c6c7]">
              <span>Resolution Rate</span>
              <span className="text-[#66fcf1] font-bold">100% Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Process (How We Work) */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#66fcf1] text-xs font-bold tracking-[3px] uppercase">Operational Steps</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading">Coaching Workflow</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Admissions test', desc: 'Baseline diagnostic test to evaluate logical math and scientific levels.' },
            { step: '02', title: 'Batch Allocation', desc: 'Assigning targeted batches matching baseline speed and goals.' },
            { step: '03', title: 'Lecture Cycle', desc: 'Core concept lectures accompanied by detailed daily practice sheets.' },
            { step: '04', title: 'Weekly calibration', desc: 'Standard board test series with analysis logs to trace ranking graphs.' }
          ].map((p, i) => (
            <div key={i} className="bg-[#1f2833]/10 border border-[#45a29e]/10 p-8 rounded-2xl relative space-y-3 hover:border-[#66fcf1]/10 transition-colors">
              <span className="text-[#66fcf1]/10 text-5xl font-heading font-black block">{p.step}</span>
              <h3 className="font-heading font-bold text-white text-base">{p.title}</h3>
              <p className="text-[#c5c6c7] text-xs font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Fee Packages */}
      <section className="py-24 bg-[#1f2833]/30 border-t border-[#45a29e]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#66fcf1] text-xs font-bold tracking-[3px] uppercase">Tuition rates</span>
            <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading">Program Packages</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Foundation Program', price: '$80', period: 'monthly', features: ['Logical reasoning training', 'Basic science modules', 'Weekly diagnostics check'] },
              { name: 'JEE/NEET Prime Prep', price: '$150', period: 'monthly', features: ['Rigorous core syllabus coverage', 'Daily practice worksheets', 'IIT mentor panels assigned', 'Full test series logs'], featured: true },
              { name: 'Target Ranker Batch', price: '$220', period: 'monthly', features: ['All Prime batch elements', 'AIR doubt clearing priority', 'One-on-one rank diagnostic session'] }
            ].map((pkg, idx) => (
              <div key={idx} className={`bg-[#0b0c10] border rounded-2xl p-8 flex flex-col justify-between relative ${pkg.featured ? 'border-[#66fcf1] shadow-xl' : 'border-[#45a29e]/10'}`}>
                {pkg.featured && <span className="absolute top-0 right-8 -translate-y-1/2 bg-[#66fcf1] text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Popular Choice</span>}
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">{pkg.name}</h3>
                  <div className="text-3xl font-heading font-black text-[#66fcf1] mt-4 mb-6">{pkg.price}<span className="text-slate-500 text-sm font-light">/{pkg.period}</span></div>
                  <ul className="space-y-3 mb-8 text-xs text-[#c5c6c7] font-light">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2"><Check size={14} className="text-[#66fcf1]" /> {f}</li>
                    ))}
                  </ul>
                </div>
                <DemoLink to="contact" className={`w-full py-3 rounded-xl font-bold uppercase text-xs text-center tracking-wider transition-all duration-300 ${pkg.featured ? 'bg-[#66fcf1] hover:bg-[#45a29e] text-black shadow-[0_0_10px_rgba(102,252,241,0.2)]' : 'bg-[#1f2833] hover:bg-[#1f2833]/85 text-white'}`}>
                  Register Admission
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
            { name: 'Rohan Malhotra', quote: `The doubt cells at Apex Academy saved my rank. I got stuck in rotation mechanics, and Prof. Alok verified my layout logic inside 10 minutes.`, role: 'AIR 45 Topper' },
            { name: 'Sneha Roy', quote: `Weekly diagnostic series mimic the actual board exams perfectly. The diagnostics summary helped me target organic chemistry leaks.`, role: 'AIR 88 Topper' },
            { name: 'Jessica K.', quote: `IIT-trained mentors are extremely motivating. The foundation program built my math logics early, helping me clear state boards easily.`, role: 'Alumni Student' }
          ].map((t, idx) => (
            <div key={idx} className="bg-[#1f2833]/30 border border-[#45a29e]/10 p-6 rounded-2xl space-y-4">
              <div className="flex text-[#66fcf1]">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[#c5c6c7] text-sm italic font-light leading-relaxed">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-white text-sm">{t.name}</h4>
                <span className="text-xs text-slate-500">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ Section */}
      <SchoolFAQ 
        faqs={[
          { q: 'Are scholarship plans available?', a: 'Yes. We run a scholarship test quarterly. Students placing in the top 10% receive up to a 50% tuition reduction.' },
          { q: 'Can I transfer batches later?', a: 'Batch transfers are allowed post-weekly calibration checks, depending on student ranking changes and faculty slots.' },
          { q: 'What is the teacher-student ratio?', a: 'We maintain a strict 1:20 ratio inside our competitive batches to ensure individual counseling focus.' }
        ]}
      />

      {/* 12. Strong CTA */}
      <section className="py-24 relative overflow-hidden bg-[#0b0c10] border-t border-[#66fcf1]/10 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(102,252,241,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold text-white uppercase">Take the First Step to Success</h2>
          <p className="text-[#c5c6c7] max-w-xl mx-auto font-light">Register for our upcoming scholarship assessment test today. Free study material included.</p>
          <div className="pt-4">
            <DemoLink to="contact" className="bg-[#66fcf1] hover:bg-[#45a29e] text-black px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block shadow-[0_0_15px_rgba(102,252,241,0.2)]">
              Register Admissions Test
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
      <SchoolInnerHeader title="About Us" subtitle={`Learn about our academic vision and teaching panel at ${brandName}.`} />
      
      {/* 1. Academy Vision */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-[#66fcf1] text-xs font-bold tracking-[3px] uppercase">The Vision</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading">Educating Ranks, Building Careers</h2>
          <p className="text-[#c5c6c7] leading-relaxed font-light text-sm md:text-base">
            {brandName} operates at the highest academic standard. We structure courses using daily practice papers and absolute conceptual clarity to keep board students motivated and ready.
          </p>
          <p className="text-[#c5c6c7] leading-relaxed font-light text-sm md:text-base">
            Our campus is equipped with smart lecture boards, individual diagnostic test cells, and a fully stocked digital library.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80" alt="Students in class" className="rounded-2xl border border-slate-800 shadow-2xl w-full object-cover aspect-[4/3]" />
        </div>
      </section>

      {/* 2. Core Pillars */}
      <section className="py-24 bg-[#1f2833]/30 border-y border-[#45a29e]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#66fcf1] text-xs font-bold tracking-[3px] uppercase">Pillars</span>
            <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading">Our Core Pillars</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Conceptual Clarity', desc: 'No mechanical memorization. We break down physics and maths to fundamental postulates.' },
              { title: 'Weekly Calibration', desc: 'Regular national-level test simulation series with detailed diagnostics logs.' },
              { title: 'Doubt Resolution', desc: 'IIT/IISc alumni coaches allocated to solve doubt check sheets directly.' }
            ].map((p, i) => (
              <div key={i} className="bg-[#1f2833]/85 border border-[#45a29e]/10 p-8 rounded-2xl space-y-3">
                <h3 className="text-lg font-bold font-heading text-white">{p.title}</h3>
                <p className="text-[#c5c6c7] text-xs font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Campus Showcase */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#66fcf1] text-xs font-bold tracking-[3px] uppercase">Campus Tour</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading">Our Infrastructure</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=500&q=80" alt="Campus library" className="rounded-2xl object-cover w-full aspect-square border border-[#1f2833]" />
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&q=80" alt="Lecture room" className="rounded-2xl object-cover w-full aspect-square border border-[#1f2833]" />
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80" alt="Lab setup" className="rounded-2xl object-cover w-full aspect-square border border-[#1f2833]" />
        </div>
      </section>

      {/* 4. Credentials */}
      <section className="py-24 bg-[#1f2833] border-t border-[#45a29e]/15 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-6">
          <span className="text-[#66fcf1] text-xs font-bold tracking-[3px] uppercase">Accreditations</span>
          <h2 className="text-2xl font-heading font-bold text-white uppercase">Accredited Academy Roster</h2>
          <p className="text-[#c5c6c7] text-xs leading-relaxed max-w-xl mx-auto font-light font-sans">
            Apex Academy is a licensed educational center complying with state board guidelines. Weekly curriculum audits are conducted by retired professors.
          </p>
        </div>
      </section>

      {/* 5. About FAQ */}
      <SchoolFAQ 
        faqs={[
          { q: 'Is hostel boarding available?', a: 'Yes. We offer secure dormitory boarding for outstation students, with on-campus library access.' },
          { q: 'What is the calendar for admissions?', a: 'Core JEE/NEET batches begin annually in April and June. Crash prep batches start in December.' }
        ]}
      />
    </div>
  );
}

// 3. COURSES VIEW
function CoursesView() {
  const list = [
    { title: 'IIT-JEE/NEET Prime Prep', duration: '2 Year Course', desc: 'Rigorous physics, chemistry, biology, and maths syllabus coverage with daily practice sheets and full weekly diagnostics.' },
    { title: 'Foundation Excellence Course', duration: '1 Year Program', desc: 'Build logical reasoning, mathematical foundations, and basic scientific principles to crack national talent exams early.' }
  ];

  return (
    <div className="space-y-0 animate-fadeIn bg-[#0b0c10]">
      <SchoolInnerHeader title="Academic Programs" subtitle="Explore our certified high school and competitive courses." />

      {/* 1. Academic programs grid */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {list.map((c, idx) => (
          <div key={idx} className="bg-[#1f2833]/30 border border-[#45a29e]/15 p-8 rounded-2xl flex flex-col justify-between hover:border-[#66fcf1]/30 transition-all">
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">{c.title}</h3>
              <span className="text-xs text-slate-400 font-semibold">{c.duration}</span>
              <p className="text-slate-300 text-sm font-light leading-relaxed mt-4">{c.desc}</p>
            </div>
            <DemoLink to="contact" className="mt-6 text-[#66fcf1] font-semibold text-xs uppercase hover:underline">Apply Program</DemoLink>
          </div>
        ))}
      </section>

      {/* 2. Interactive Batch schedule */}
      <section className="py-24 bg-[#1f2833]/20 border-t border-[#45a29e]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-4">
          <h3 className="text-2xl font-heading font-bold text-white">Interactive Batch Routines</h3>
          <div className="overflow-x-auto border border-[#45a29e]/20 rounded-2xl bg-[#0b0c10] mt-8">
            <table className="w-full text-left text-slate-350 text-xs md:text-sm">
              <thead className="bg-[#1f2833] text-white font-heading font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="p-6">Batch</th>
                  <th className="p-6">Lecture Hours</th>
                  <th className="p-6">Doubt Desk Hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1f2833]">
                <tr>
                  <td className="p-6 font-bold">Foundation Program</td>
                  <td className="p-6">04:00 PM - 06:00 PM</td>
                  <td className="p-6">06:00 PM - 07:00 PM</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold">JEE/NEET Prime Prep</td>
                  <td className="p-6">08:00 AM - 01:00 PM</td>
                  <td className="p-6">02:00 PM - 04:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Study materials preview */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-[#45a29e]/10 text-center space-y-4">
        <h3 className="text-xl font-heading font-bold text-white uppercase">Practice Sheet Archives</h3>
        <p className="text-[#c5c6c7] text-xs leading-relaxed max-w-xl mx-auto font-light">
          We draft organic study materials and diagnostic sheets. Over 10,000 chemistry and physics question databases are unlocked inside our member student portal.
        </p>
      </section>

      {/* 4. Program FAQs */}
      <SchoolFAQ 
        faqs={[
          { q: 'Is there a crash course option?', a: 'Yes. Crash batches for JEE/NEET are launched every December for board students looking for rapid concept reviews.' },
          { q: 'What boards do you support?', a: 'Our curriculum aligns with CBSE, ICSE, and major state education board requirements.' }
        ]}
      />
    </div>
  );
}

// 4. FACULTY VIEW
function FacultyView() {
  return (
    <div className="space-y-0 animate-fadeIn bg-[#0b0c10]">
      <SchoolInnerHeader title="Mentor Roster" subtitle="Learn from top IIT and IISc alumni faculty." />
      
      {/* 1. Faculty Bio Grid */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Prof. Alok Verma', subject: 'Physics Head', degree: 'M.Tech, IIT Kharagpur', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
          { name: 'Dr. Meera Sen', subject: 'Chemistry Head', degree: 'Ph.D, IISc Bangalore', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
          { name: 'Prof. David Miller', subject: 'Mathematics Head', degree: 'M.Sc, Cambridge', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' }
        ].map((fac, idx) => (
          <div key={idx} className="bg-[#1f2833]/30 border border-[#45a29e]/10 rounded-2xl overflow-hidden text-center group hover:border-[#66fcf1]/20 transition-all">
            <div className="h-64 overflow-hidden bg-zinc-900">
              <img src={fac.img} alt={fac.name} className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500" />
            </div>
            <div className="p-6 space-y-1">
              <h3 className="font-heading font-bold text-white text-lg">{fac.name}</h3>
              <span className="text-xs text-[#66fcf1] font-semibold block">{fac.subject}</span>
              <p className="text-slate-500 text-[11px]">{fac.degree}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 2. Teaching Philosophy */}
      <section className="py-24 bg-[#1f2833]/30 border-y border-[#45a29e]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-6">
          <span className="text-[#66fcf1] text-xs font-bold tracking-[3px] uppercase">Pedagogy</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase">Teaching Philosophy</h2>
          <p className="text-[#c5c6c7] text-sm font-light leading-relaxed max-w-xl mx-auto">
            We avoid mechanical route-memorization. Our coaches introduce physics mechanics and chemical bonding using concrete models, building conceptual pipelines early.
          </p>
        </div>
      </section>

      {/* 3. Faculty FAQ */}
      <SchoolFAQ 
        faqs={[
          { q: 'Are all faculty members full-time?', a: 'Yes. All senior department heads are full-time on-campus mentors, coordinating lectures and doubt desks.' },
          { q: 'Can I request 1-on-1 counseling?', a: 'Platinum and Ranker batch programs include scheduled 1-on-1 diagnostics with department heads weekly.' }
        ]}
      />
    </div>
  );
}

// 5. RESULTS VIEW
function ResultsView() {
  return (
    <div className="space-y-0 animate-fadeIn bg-[#0b0c10]">
      <SchoolInnerHeader title="Toppers Roster" subtitle="Explore rankings secured by our alumni in JEE/NEET." />
      
      {/* 1. Alumni Rank List */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { name: 'Rohan Malhotra', rank: 'AIR 45', year: 'IIT JEE 2024', board: '98.4% Board score' },
          { name: 'Sneha Roy', rank: 'AIR 88', year: 'NEET 2024', board: '99.0% Biology score' }
        ].map((t, idx) => (
          <div key={idx} className="bg-[#1f2833] border border-[#45a29e]/10 p-8 rounded-2xl text-center">
            <Trophy className="text-[#66fcf1] mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-heading font-black text-white">{t.rank}</h3>
            <h4 className="font-bold text-[#c5c6c7] text-base mt-2">{t.name}</h4>
            <span className="text-xs text-slate-500 block mt-1">{t.year} | {t.board}</span>
          </div>
        ))}
      </section>

      {/* 2. Interactive Score Distributions */}
      <section className="py-24 bg-[#1f2833]/20 border-t border-[#45a29e]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-4">
          <h3 className="text-2xl font-heading font-bold text-white uppercase">Historical selection ratios</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-[#0b0c10] border border-[#45a29e]/10 p-6 rounded-2xl">
              <div className="text-2xl font-heading font-bold text-[#66fcf1]">IIT-JEE</div>
              <div className="text-xs text-[#c5c6c7] mt-1">480+ Selections</div>
            </div>
            <div className="bg-[#0b0c10] border border-[#45a29e]/10 p-6 rounded-2xl">
              <div className="text-2xl font-heading font-bold text-[#66fcf1]">NEET</div>
              <div className="text-xs text-[#c5c6c7] mt-1">320+ Selections</div>
            </div>
            <div className="bg-[#0b0c10] border border-[#45a29e]/10 p-6 rounded-2xl">
              <div className="text-2xl font-heading font-bold text-[#66fcf1]">Olympiad</div>
              <div className="text-xs text-[#c5c6c7] mt-1">AIR 12 rank</div>
            </div>
            <div className="bg-[#0b0c10] border border-[#45a29e]/10 p-6 rounded-2xl">
              <div className="text-2xl font-heading font-bold text-[#66fcf1]">NTSE</div>
              <div className="text-xs text-[#c5c6c7] mt-1">150+ scholars</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Results FAQ */}
      <SchoolFAQ 
        faqs={[
          { q: 'Are board result verifications public?', a: 'Yes. Audited selection rolls are published on our digital results board annually.' },
          { q: 'What is our success rate in CBSE boards?', a: '100% of our enrolled students pass standard school boards, with 85% scoring above 90% aggregate.' }
        ]}
      />
    </div>
  );
}

// 6. CONTACT VIEW
function ContactView() {
  const { brandName } = useDemo();
  const [form, setForm] = useState({ name: '', phone: '', grade: 'Class 11' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '', grade: 'Class 11' });
  };

  return (
    <div className="space-y-0 animate-fadeIn bg-[#0b0c10]">
      <SchoolInnerHeader title="Register Admission" subtitle={`Apply for study programs at ${brandName} campus.`} />
      
      {/* 1. Address / Direct coordinates */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Our Campus</h3>
            <p className="text-slate-400 font-light flex items-center gap-2"><MapPin size={16} className="text-[#66fcf1]" /> 567 Education Plaza, Academy City</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Admissions Desk</h3>
            <p className="text-slate-400 font-light flex items-center gap-2"><Phone size={16} className="text-[#66fcf1]" /> +1 (555) 789-0123</p>
            <p className="text-slate-405 font-light mt-2">Email: admissions@{brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Counseling Hours</h3>
            <div className="text-xs text-slate-400 space-y-1 font-light">
              <p>Monday - Saturday: 08:00 AM - 07:00 PM</p>
              <p>Sunday: 10:00 AM - 02:00 PM</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1f2833] p-8 rounded-2xl border border-[#45a29e]/20">
          <h3 className="font-heading font-bold text-xl text-white mb-6 uppercase">Register Admission</h3>
          {sent ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-center text-xs font-semibold">
              Thank you! Registration details logged. A counselor will call you.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase">Student Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-[#0b0c10] border border-[#45a29e]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase">Phone</label>
                <input type="text" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-[#0b0c10] border border-[#45a29e]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase">Target Grade</label>
                <select value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })} className="w-full bg-[#0b0c10] border border-[#45a29e]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none">
                  <option value="Class 11">Class 11 (2-Yr JEE/NEET)</option>
                  <option value="Class 12">Class 12 (1-Yr Crash)</option>
                  <option value="Foundation">Class 8-10 (Foundation)</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-[#66fcf1] hover:bg-[#45a29e] text-black py-3 rounded-xl font-bold uppercase text-xs tracking-wider">
                Submit Registration
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 2. Mock map */}
      <section className="py-24 border-t border-[#1f2833]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-[#1f2833] border border-[#45a29e]/20 rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-heading font-bold text-white uppercase">Find Our Campus</h4>
              <p className="text-slate-400 text-xs max-w-md leading-relaxed font-light">
                Conveniently located near the municipal library. Gated parking is available for visitors.
              </p>
            </div>
            <div className="w-full md:w-80 h-48 rounded-2xl bg-[#0b0c10] border border-[#45a29e]/20 relative flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=500&q=80')" }} />
              <div className="relative z-10 text-center space-y-2">
                <MapPin size={24} className="text-[#66fcf1] mx-auto animate-bounce" />
                <span className="text-[10px] text-zinc-550 uppercase tracking-widest block">28.6139° N, 77.2090° E</span>
                <span className="text-xs text-white font-bold">Apex Academy Compound</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function SchoolDemo() {
  const { subpage: urlSubpage } = useParams();
  const subpage = urlSubpage || 'home';
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const renderSubpage = () => {
    switch (subpage) {
      case 'about': return <AboutView />;
      case 'courses': return <CoursesView />;
      case 'faculty': return <FacultyView />;
      case 'results': return <ResultsView />;
      case 'contact': return <ContactView />;
      case 'home':
      default: return <HomeView />;
    }
  };

  return (
    <DemoLayout defaultBrand="Apex Academy" slug="school" currentSubpage={subpage}>
      <div className="bg-[#0b0c10] text-[#c5c6c7] min-h-screen font-sans">
        <SchoolNavbar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
        <main>{renderSubpage()}</main>
        <SchoolFooter />
      </div>
    </DemoLayout>
  );
}
