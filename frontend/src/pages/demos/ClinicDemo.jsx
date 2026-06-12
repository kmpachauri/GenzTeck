import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DemoLayout, { useDemo, DemoLink } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { 
  Activity, 
  ShieldCheck, 
  Heart, 
  Users, 
  Star, 
  Stethoscope, 
  Check, 
  Calendar, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Award, 
  Clock, 
  HelpCircle,
  Menu as MenuIcon, 
  X 
} from 'lucide-react';

function ClinicNavbar({ isMobileOpen, setIsMobileOpen }) {
  const { brandName } = useDemo();
  return (
    <nav className="border-b border-cyan-500/10 bg-slate-950/95 backdrop-blur-md sticky top-[68px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">
        <DemoLink to="home" className="font-heading font-extrabold text-2xl tracking-tight text-cyan-455 flex items-center gap-1.5">
          <Activity size={24} className="text-cyan-400 animate-pulse" />
          <span className="text-white truncate max-w-[150px] sm:max-w-[250px] md:max-w-none">{brandName}</span>
        </DemoLink>
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-400">
          <DemoLink to="home" activeClassName="text-cyan-400 font-bold" className="hover:text-cyan-400 transition-colors">Home</DemoLink>
          <DemoLink to="about" activeClassName="text-cyan-400 font-bold" className="hover:text-cyan-400 transition-colors">About Us</DemoLink>
          <DemoLink to="departments" activeClassName="text-cyan-400 font-bold" className="hover:text-cyan-400 transition-colors">Specialties</DemoLink>
          <DemoLink to="doctors" activeClassName="text-cyan-400 font-bold" className="hover:text-cyan-400 transition-colors">Doctors</DemoLink>
          <DemoLink to="appointment" activeClassName="text-cyan-400 font-bold" className="hover:text-cyan-400 transition-colors">Wellness Packages</DemoLink>
          <DemoLink to="contact" activeClassName="text-cyan-400 font-bold" className="hover:text-cyan-400 transition-colors">Contact</DemoLink>
        </div>
        <div className="hidden lg:block">
          <DemoLink to="appointment" className="bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            Book Visit
          </DemoLink>
        </div>
        <button className="lg:hidden text-white hover:text-cyan-400" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-cyan-500/10 py-6 px-6 space-y-4 flex flex-col">
          <DemoLink to="home" onClick={() => setIsMobileOpen(false)} activeClassName="text-cyan-400" className="text-sm font-semibold text-slate-400">Home</DemoLink>
          <DemoLink to="about" onClick={() => setIsMobileOpen(false)} activeClassName="text-cyan-400" className="text-sm font-semibold text-slate-400">About Us</DemoLink>
          <DemoLink to="departments" onClick={() => setIsMobileOpen(false)} activeClassName="text-cyan-400" className="text-sm font-semibold text-slate-400">Specialties</DemoLink>
          <DemoLink to="doctors" onClick={() => setIsMobileOpen(false)} activeClassName="text-cyan-400" className="text-sm font-semibold text-slate-400">Doctors</DemoLink>
          <DemoLink to="appointment" onClick={() => setIsMobileOpen(false)} activeClassName="text-cyan-400" className="text-sm font-semibold text-slate-400">Wellness Packages</DemoLink>
          <DemoLink to="contact" onClick={() => setIsMobileOpen(false)} activeClassName="text-cyan-400" className="text-sm font-semibold text-slate-400">Contact</DemoLink>
          <DemoLink to="appointment" onClick={() => setIsMobileOpen(false)} className="bg-cyan-500 text-black text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider">
            Book Visit
          </DemoLink>
        </div>
      )}
    </nav>
  );
}

function ClinicFooter() {
  const { brandName } = useDemo();
  return (
    <footer className="bg-slate-950 border-t border-cyan-500/15 py-16 text-xs text-slate-500 font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <span className="font-heading font-extrabold text-xl tracking-tight text-cyan-400 flex items-center gap-1.5">
            <Activity size={20} className="text-cyan-400" />
            {brandName}
          </span>
          <p className="leading-relaxed text-slate-400">
            A trusted clinical network focused on professional diagnostic systems, intensive care, and family wellness packages.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 flex flex-col font-semibold">
            <DemoLink to="home" className="hover:text-cyan-400 transition-colors">Home</DemoLink>
            <DemoLink to="about" className="hover:text-cyan-400 transition-colors">About Us</DemoLink>
            <DemoLink to="departments" className="hover:text-cyan-400 transition-colors">Departments</DemoLink>
            <DemoLink to="appointment" className="hover:text-cyan-400 transition-colors">Appointments</DemoLink>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Accreditation</h4>
          <p className="text-slate-400 font-light">NABH Certified Diagnostics</p>
          <p className="text-slate-400 font-light">FDA Certified Laboratory</p>
          <p className="text-cyan-400 font-semibold">24/7 Pharmacy Roster</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Address</h4>
          <p className="flex items-center gap-2 text-slate-400"><MapPin size={12} className="text-cyan-400" /> 101 Medical Center, Diagnostics City</p>
          <p className="flex items-center gap-2 text-slate-400"><Phone size={12} className="text-cyan-400" /> +1 (555) 678-9012</p>
          <p className="text-slate-400 underline">support@{brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {brandName}. Dedicated clinical care.</p>
        <div className="flex gap-4 text-slate-400">
          <a href="#" className="hover:text-cyan-400">LinkedIn</a>
          <a href="#" className="hover:text-cyan-400">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

function ClinicInnerHeader({ title, subtitle }) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-cyan-500/10 text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white uppercase tracking-tight">{title}</h1>
        <p className="text-slate-400 text-base font-light max-w-xl mx-auto">{subtitle}</p>
        <div className="flex justify-center items-center gap-2 text-xs text-slate-500 mt-6">
          <DemoLink to="home" className="hover:text-cyan-400">Home</DemoLink>
          <span>/</span>
          <span className="text-cyan-400 capitalize">{title}</span>
        </div>
      </div>
    </section>
  );
}

function ClinicFAQ({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Help Desk</span>
          <h2 className="text-3xl font-heading font-bold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 font-heading font-bold text-white flex justify-between items-center hover:bg-slate-900/60 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-cyan-400">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed font-light border-t border-slate-800/50 pt-4">
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
        <div className="absolute inset-0 bg-slate-950/70 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80')" }} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-950 via-transparent to-transparent z-15 pointer-events-none" />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-cyan-400 text-xs font-bold tracking-[5px] uppercase bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            Accredited Clinical Panel
          </span>
          <h1 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight uppercase">
            Committed to Your Family's Wellness At <span className="text-cyan-400">{brandName}</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            State-of-the-art diagnostic facilities, specialized pediatric/cardiac wards, and top licensed practitioners.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <DemoLink to="departments" className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3.5 rounded-xl font-extrabold uppercase text-xs tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Our Specialties
            </DemoLink>
            <DemoLink to="appointment" className="bg-transparent border border-white/20 hover:border-white hover:bg-white hover:text-black text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all duration-300">
              Wellness Packages
            </DemoLink>
          </div>
        </div>
      </header>

      {/* 3. Stat Cards */}
      <section className="bg-slate-950 border-y border-slate-900 py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800/40 hover:border-cyan-500/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-cyan-400">18+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-2">Active Specialists</div>
          </div>
          <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800/40 hover:border-cyan-500/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-cyan-400">12k+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-2">Patients Treated</div>
          </div>
          <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800/40 hover:border-cyan-500/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-cyan-400">99.2%</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-2">Diagnostic Accuracy</div>
          </div>
          <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800/40 hover:border-cyan-500/20 transition-all">
            <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-cyan-400">15+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-2">Years Service</div>
          </div>
        </div>
      </section>

      {/* 4. About Preview */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase flex items-center gap-2">
            <Award size={14} /> Trust & Safety Standard
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight uppercase">
            Somatic Precision & Patient-First Care
          </h2>
          <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">
            At {brandName}, our diagnostic workflows and surgical panels operate under strict international criteria. We coordinate multi-disciplinary doctor checks to guarantee holistic treatment evaluations.
          </p>
          <DemoLink to="about" className="text-cyan-400 font-extrabold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 hover:underline group">
            <span>Learn About Our Care Standards</span> 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </DemoLink>
        </div>
        <div className="relative group">
          <div className="absolute -inset-2 rounded-2xl border border-cyan-500/10 transform rotate-1 pointer-events-none group-hover:rotate-0 transition-transform duration-300" />
          <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" alt="Consulting cabinet" className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3] border border-slate-850" />
        </div>
      </section>

      {/* 5. Specialties Preview */}
      <section className="py-24 bg-slate-900/50 border-y border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Specialty Wards</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase">Clinical Departments</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              { title: 'Cardiology', desc: 'Heart checks, blood pressure monitoring, ECG scans, and arterial care.', icon: <Heart className="text-cyan-400" /> },
              { title: 'Pediatrics', desc: 'Newborn checkups, child immunizations, and developmental tracking.', icon: <Users className="text-cyan-400" /> },
              { title: 'Orthopedics', desc: 'Joint alignment, spine diagnostics, ligament surgery, and rehab.', icon: <Stethoscope className="text-cyan-400" /> },
              { title: 'Pathology Lab', desc: 'Blood count audits, metabolic analysis, and diagnostic sweeps.', icon: <Activity className="text-cyan-400" /> }
            ].map((s, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-850 p-6 rounded-2xl space-y-4 hover:border-cyan-500/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="text-base font-bold font-heading text-white">{s.title}</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Gallery / Infrastructure */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Infrastructure</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading">Advanced Wards</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80" alt="Diagnostics ward" className="rounded-2xl object-cover w-full aspect-square border border-slate-800" />
          <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80" alt="MRI lab" className="rounded-2xl object-cover w-full aspect-square border border-slate-800" />
          <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80" alt="Specialist cabinet" className="rounded-2xl object-cover w-full aspect-square border border-slate-800" />
        </div>
      </section>

      {/* 7. Industry Specific Widget (Wellness Panels) */}
      <section className="py-24 bg-slate-900/30 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 bg-slate-900 border border-slate-800 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Preventative Care</span>
            <h3 className="text-2xl font-heading font-bold text-white uppercase mt-2">General Wellness Panels</h3>
            <p className="text-slate-400 text-xs font-light leading-relaxed mt-4">
              Schedule preventive blood sweeps. We deliver comprehensive reports outlining metabolic indicators within 24 hours.
            </p>
          </div>
          <div className="bg-slate-950 border border-slate-850 p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>Basic Blood Count</span>
              <span className="text-cyan-400 font-bold">Included</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>Metabolic profiling</span>
              <span className="text-cyan-400 font-bold">Included</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>Cholesterol Panels</span>
              <span className="text-cyan-400 font-bold">Included</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Process (How We Work) */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Patient Steps</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase font-heading">Consultation Flow</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Slot Booking', desc: 'Secure your diagnostic slot online via our encrypted medical scheduler.' },
            { step: '02', title: 'Consultation', desc: 'Discussing history, symptoms, and checking basic physical configurations.' },
            { step: '03', title: 'Lab Sampling', desc: 'Collecting blood counts or scanning indicators inside our sterile labs.' },
            { step: '04', title: 'Report Delivery', desc: 'Secured PDF delivery and on-desk consultations to map recovery plans.' }
          ].map((p, i) => (
            <div key={i} className="bg-slate-900/20 border border-slate-850 p-8 rounded-2xl relative space-y-3 hover:border-cyan-500/10 transition-colors">
              <span className="text-cyan-400/10 text-5xl font-heading font-black block">{p.step}</span>
              <h3 className="font-heading font-bold text-white text-base">{p.title}</h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Wellness Packages Pricing */}
      <section className="py-24 bg-slate-900/50 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Wellness pricing</span>
            <h2 className="text-3xl font-heading font-bold text-white uppercase">Diagnostic Panels</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Basic Panel', price: '$99', features: ['Complete blood counts', 'Liver & kidney metrics', 'General GP consult review'] },
              { name: 'Cardiac Screening', price: '$249', features: ['Cardiac marker profiling', 'Resting ECG scan', 'Treadmill stress assessment'], featured: true },
              { name: 'Executive Checkup', price: '$390', features: ['Full systemic profiling', 'MRI scan reviews', 'Senior advisory consult'] }
            ].map((pkg, idx) => (
              <div key={idx} className={`bg-slate-950 border rounded-2xl p-8 flex flex-col justify-between relative ${pkg.featured ? 'border-cyan-500 shadow-xl' : 'border-slate-850'}`}>
                {pkg.featured && <span className="absolute top-0 right-8 -translate-y-1/2 bg-cyan-500 text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Recommended</span>}
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">{pkg.name}</h3>
                  <div className="text-3xl font-heading font-black text-cyan-400 mt-4 mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8 text-xs text-slate-400 font-light">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2"><Check size={14} className="text-cyan-400" /> {f}</li>
                    ))}
                  </ul>
                </div>
                <DemoLink to="appointment" className={`w-full py-3 rounded-xl font-bold uppercase text-xs text-center tracking-wider transition-all duration-300 ${pkg.featured ? 'bg-cyan-500 hover:bg-cyan-600 text-black shadow-[0_0_10px_rgba(6,182,212,0.2)]' : 'bg-slate-850 hover:bg-slate-800 text-white'}`}>
                  Book Panel
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
            { name: 'Sarah Miller', quote: `The cardiology screening was handled with total precision. Dr. Lin explained my ECG readings very clearly and mapped out my target cardio targets.`, role: 'Active Client' },
            { name: 'Michael Chen', quote: `Diagnostic laboratory returns were remarkably fast. I got my liver panel figures inside my email box within 12 hours of checkup.`, role: 'Corporate Executive' },
            { name: 'Sophia Loren', quote: `Cleanest clinic facility I have visited. The pediatric ward staff are extremely gentle, and immunizations were painless for my child.`, role: 'Parent' }
          ].map((t, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-4">
              <div className="flex text-cyan-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 text-sm italic font-light leading-relaxed">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-white text-sm">{t.name}</h4>
                <span className="text-xs text-slate-500">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ Section */}
      <ClinicFAQ 
        faqs={[
          { q: 'Do you accept health insurance?', a: 'Yes. We work directly with major international and corporate insurance groups. Please present your provider card at our check-in desk.' },
          { q: 'What is diagnostic report turnaround time?', a: 'Basic blood sweeps and biochemistry are delivered inside 24 hours. Advanced pathology markers may require 48-72 hours.' },
          { q: 'Are walk-ins allowed?', a: 'Emergency walk-ins are routed directly to our diagnostic wards. General wellness checkups require online bookings.' }
        ]}
      />

      {/* 12. Strong CTA */}
      <section className="py-24 relative overflow-hidden bg-slate-950 border-t border-cyan-500/10 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-white uppercase">Prioritize Your Health Assets Today</h2>
          <p className="text-slate-400 max-w-xl mx-auto font-light">Book your wellness screening or GP consult slot online. Fast diagnostic feedback guaranteed.</p>
          <div className="pt-4">
            <DemoLink to="appointment" className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Schedule Appointment Slot
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
      <ClinicInnerHeader title="About Us" subtitle={`Learn about our health mission and safety certifications at ${brandName}.`} />
      
      {/* 1. Ethos Detailed */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">The Ethos</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase">Trust, Safety & Patient Comfort</h2>
          <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">
            At {brandName}, our diagnostics and operational plans are mapped with extreme detail to secure absolute comfort and recovery. We provide continuous digital pathology updates so you are always informed.
          </p>
          <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">
            We collaborate with FDA-registered lab suppliers to maintain clean, highly sterile testing pipelines across all cardiology and pathology divisions.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" alt="Doctor group" className="rounded-2xl border border-slate-800 shadow-2xl w-full object-cover aspect-[4/3]" />
        </div>
      </section>

      {/* 2. Core Pillars */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Standards</span>
            <h2 className="text-3xl font-heading font-bold text-white uppercase">Clinical Pillars</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Pathological Safety', desc: 'Weekly diagnostic equipment calibration to secure absolute statistical accuracy.' },
              { title: 'Somatic Comfort', desc: 'Spacious wards and sterile consult lounges to minimize clinical anxiety.' },
              { title: 'HIPAA Confidentiality', desc: 'Secure cloud databases protecting patient details and test reports.' }
            ].map((p, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-3">
                <h3 className="text-lg font-bold font-heading text-white">{p.title}</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Facility / Ward Showcase */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Wards</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase">Our Diagnostics Wards</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80" alt="Ward 1" className="rounded-2xl object-cover w-full aspect-square border border-slate-800" />
          <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80" alt="Ward 2" className="rounded-2xl object-cover w-full aspect-square border border-slate-800" />
          <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80" alt="Ward 3" className="rounded-2xl object-cover w-full aspect-square border border-slate-800" />
        </div>
      </section>

      {/* 4. Credentials */}
      <section className="py-24 bg-slate-900 border-t border-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-6">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Accreditations</span>
          <h2 className="text-2xl font-heading font-bold text-white uppercase">Accredited Health Professionals</h2>
          <p className="text-slate-400 text-xs leading-relaxed max-w-xl mx-auto font-light">
            Metro Health doctors maintain verified residency credentials and board certifications. We perform weekly cleanliness sanitization reviews.
          </p>
        </div>
      </section>

      {/* 5. About FAQ */}
      <ClinicFAQ 
        faqs={[
          { q: 'Is the laboratory FDA-registered?', a: 'Yes. All biochemistry diagnostic reagents and analyzers are FDA-approved to ensure clinical standards.' },
          { q: 'What emergency resources do you have?', a: 'We have fully stocked cardiac life-support wards and 24/7 on-call diagnostic technicians.' }
        ]}
      />
    </div>
  );
}

// 3. DEPARTMENTS VIEW
function DepartmentsView() {
  return (
    <div className="space-y-0 animate-fadeIn bg-slate-950">
      <ClinicInnerHeader title="Clinical Specialties" subtitle="Browse our main dedicated healthcare units." />

      {/* 1. Specialties Wards Grid */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Cardiology', desc: 'Heart checks, blood pressure monitors, ECG sweeps, and artery therapy.' },
          { title: 'Pediatrics', desc: 'Newborn care, juvenile immunization calendars, and general physics growth check.' },
          { title: 'Orthopedics', desc: 'Spine correction, ligament restoration, complex fracture repairs.' },
          { title: 'Pathology Lab', desc: 'Advanced blood counts, metabolic panels, and tumor markers.' }
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/20 transition-all">
            <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg flex items-center justify-center mb-4">
              <Stethoscope size={18} />
            </div>
            <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
            <p className="text-slate-400 text-xs font-light leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* 2. Cardiac Technology Showcase */}
      <section className="py-24 bg-slate-900/30 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-4">
          <h3 className="text-2xl font-heading font-bold text-white">Diagnostics Imaging Wards</h3>
          <p className="text-slate-400 text-sm font-light max-w-md mx-auto">
            Our diagnostic machinery includes high-frequency ultrasound and multi-slice CT scanners to map anatomical layers accurately.
          </p>
        </div>
      </section>

      {/* 3. Immunization timelines */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-slate-900 text-center space-y-4">
        <h3 className="text-xl font-heading font-bold text-white uppercase">Pediatric Protocols</h3>
        <p className="text-slate-400 text-xs leading-relaxed max-w-xl mx-auto font-light">
          We maintain pediatric check charts outlining immunization schedules starting at infancy. Talk to Dr. James Anderson for developmental guidelines.
        </p>
      </section>

      {/* 4. Specialty FAQ */}
      <ClinicFAQ 
        faqs={[
          { q: 'Do you require referrals for Orthopedics?', a: 'No referral is needed. You can schedule orthopedic assessments directly via our wellness package desk.' },
          { q: 'Is cardiac stress testing safe?', a: 'Stress tests are continuously supervised by Dr. Sarah Lin with active ECG tracking to ensure safety.' }
        ]}
      />
    </div>
  );
}

// 4. DOCTORS VIEW
function DoctorsView() {
  return (
    <div className="space-y-0 animate-fadeIn bg-slate-950">
      <ClinicInnerHeader title="Specialist Physicians" subtitle="Meet our senior licensed medical panel." />
      
      {/* 1. Bio Grid */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Dr. Sarah Lin', specialty: 'Chief Cardiologist', exp: '14+ Yrs', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80' },
          { name: 'Dr. James Anderson', specialty: 'Pediatrics Head', exp: '10+ Yrs', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80' },
          { name: 'Dr. Elena Rostova', specialty: 'Senior Orthopedic Surgeon', exp: '16+ Yrs', img: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=400&q=80' }
        ].map((doc, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-cyan-500/20 transition-all">
            <div className="h-64 overflow-hidden bg-slate-950">
              <img src={doc.img} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-103 transition-all duration-500" />
            </div>
            <div className="p-6 space-y-1">
              <h3 className="font-heading font-bold text-white text-lg">{doc.name}</h3>
              <span className="text-xs text-cyan-400 font-semibold block">{doc.specialty}</span>
              <p className="text-slate-500 text-[11px]">Experience: {doc.exp}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 2. Advisory standards */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-6">
          <span className="text-cyan-400 text-xs font-bold tracking-[3px] uppercase">Standards</span>
          <h2 className="text-3xl font-heading font-bold text-white uppercase">Clinical Standards</h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed max-w-xl mx-auto">
            Our doctors meet twice weekly to review diagnostic charts for complex cases, coordinating treatments to maximize recovery speeds.
          </p>
        </div>
      </section>

      {/* 3. Doctors consult FAQ */}
      <ClinicFAQ 
        faqs={[
          { q: 'Can I select my consulting doctor?', a: 'Yes. You can request specific physicians during appointment scheduling, subject to schedule roster availability.' },
          { q: 'Are phone consultations available?', a: 'Yes. We offer secure telehealth consults for report reviews and prescription renewals.' }
        ]}
      />
    </div>
  );
}

// 5. APPOINTMENT VIEW
function AppointmentView() {
  const [apt, setApt] = useState({ name: '', date: '', dept: 'General Medicine' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setApt({ name: '', date: '', dept: 'General Medicine' });
  };

  return (
    <div className="space-y-0 animate-fadeIn bg-slate-950">
      <ClinicInnerHeader title="Wellness Packages" subtitle="Book preventative diagnostics and schedule doctor consultations." />

      {/* 1. Preventative health packages */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { name: 'Basic Wellness Panel', price: '$99', items: ['Complete Blood Count', 'Cholesterol profiling', 'GP Consultation review'] },
          { name: 'Cardiac Screening', price: '$249', items: ['Resting ECG Scan', 'Treadmill stress check', 'Cardiologist review'] }
        ].map((pkg, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold font-heading text-white">{pkg.name}</h3>
              <div className="text-3xl font-heading font-black text-cyan-400 mt-4 mb-6">{pkg.price}</div>
              <ul className="space-y-3 mb-8 text-xs text-slate-400">
                {pkg.items.map((f, i) => (
                  <li key={i} className="flex items-center gap-2"><Check size={14} className="text-cyan-400" /> {f}</li>
                ))}
              </ul>
            </div>
            <a href="#scheduler" className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl text-xs text-center block tracking-wide border border-slate-750">Select Package</a>
          </div>
        ))}
      </section>

      {/* 2. Interactive Appointment Request */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-slate-900" id="scheduler">
        <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800">
          <h3 className="text-2xl font-heading font-black text-white text-center mb-8">Schedule Private Consultation</h3>
          {sent ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-center text-xs font-semibold">
              Thank you! Your appointment request has been registered. We will email your slot details.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Full Name</label>
                <input type="text" required value={apt.name} onChange={(e) => setApt({ ...apt, name: e.target.value })} placeholder="e.g. John Doe" className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Preferred Date</label>
                <input type="date" required value={apt.date} onChange={(e) => setApt({ ...apt, date: e.target.value })} className="w-full bg-slate-950 border border-slate-855 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Department</label>
                <select value={apt.dept} onChange={(e) => setApt({ ...apt, dept: e.target.value })} className="w-full bg-slate-950 border border-slate-855 rounded-xl px-4 py-3 text-white text-sm focus:outline-none">
                  <option value="General Medicine">General Medicine</option>
                  <option value="Cardiology">Cardiology</option>
                </select>
              </div>
              <div className="md:col-span-3">
                <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-black py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider">
                  Request Roster Slot
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 3. Insurance partners */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 border-t border-slate-900 text-center space-y-4">
        <h3 className="text-xl font-heading font-bold text-white uppercase">Supported Insurance Providers</h3>
        <p className="text-slate-450 text-xs leading-relaxed max-w-xl mx-auto font-light">
          We process direct billing with all major national health insurance entities. Contact our billing desk at +1 (555) 678-9012 to verify coverage limits.
        </p>
      </section>

      {/* 4. Booking FAQ */}
      <ClinicFAQ 
        faqs={[
          { q: 'How do I reschedule my appointment?', a: 'You can reschedule appointments up to 4 hours prior to slot start via the dashboard link provided in your email.' },
          { q: 'Do you charge booking fees?', a: 'No online booking fee. Consultation fees are settled directly at the clinic desk post visit.' }
        ]}
      />
    </div>
  );
}

// 6. CONTACT VIEW
function ContactView() {
  const { brandName } = useDemo();
  return (
    <div className="space-y-0 animate-fadeIn bg-slate-950">
      <ClinicInnerHeader title="Contact Desk" subtitle={`Connect with the patient coordination desk at ${brandName}.`} />
      
      {/* 1. Address / Direct lines */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Our Clinic</h3>
            <p className="text-slate-405 font-light flex items-center gap-2"><MapPin size={16} className="text-cyan-400" /> 101 Medical Center, Diagnostics City</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Phones</h3>
            <p className="text-slate-400 font-light flex items-center gap-2"><Phone size={16} className="text-cyan-400" /> +1 (555) 678-9012</p>
            <p className="text-slate-405 font-light mt-2">Email: contact@{brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase font-heading">Emergency Services</h3>
            <div className="text-xs text-slate-400 space-y-1 font-light">
              <p>24/7 Cardiac Response Ward</p>
              <p>Emergency ambulance response: +1 (555) 999-1234</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex flex-col justify-center text-center space-y-4">
          <Clock size={32} className="text-cyan-400 mx-auto" />
          <h4 className="font-heading font-bold text-white text-lg uppercase">Diagnostic Report Pickup</h4>
          <p className="text-slate-400 text-xs font-light leading-relaxed">
            Report counters are open Monday to Friday, 08:00 AM to 06:00 PM. Secured digital downloads are available via PDF credentials.
          </p>
        </div>
      </section>

      {/* 2. Mock map */}
      <section className="py-24 bg-slate-905 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-heading font-bold text-white uppercase font-heading">Clinic Location</h4>
              <p className="text-slate-400 text-xs max-w-md leading-relaxed font-light">
                Conveniently located near the highway. Ambulance zones are clearly marked. Patient parking is free inside the gated lot.
              </p>
            </div>
            <div className="w-full md:w-80 h-48 rounded-2xl bg-slate-950 border border-slate-850 relative flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=500&q=80')" }} />
              <div className="relative z-10 text-center space-y-2">
                <MapPin size={24} className="text-cyan-405 mx-auto" />
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block">45.4215° N, 75.6972° W</span>
                <span className="text-xs text-white font-bold">Diagnostics Health Center</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ClinicDemo() {
  const { subpage: urlSubpage } = useParams();
  const subpage = urlSubpage || 'home';
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const renderSubpage = () => {
    switch (subpage) {
      case 'about': return <AboutView />;
      case 'departments': return <DepartmentsView />;
      case 'doctors': return <DoctorsView />;
      case 'appointment': return <AppointmentView />;
      case 'contact': return <ContactView />;
      case 'home':
      default: return <HomeView />;
    }
  };

  return (
    <DemoLayout defaultBrand="Metro Health Clinic" slug="clinic" currentSubpage={subpage}>
      <div className="bg-slate-950 text-slate-105 min-h-screen font-sans">
        <ClinicNavbar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
        <main>{renderSubpage()}</main>
        <ClinicFooter />
      </div>
    </DemoLayout>
  );
}
