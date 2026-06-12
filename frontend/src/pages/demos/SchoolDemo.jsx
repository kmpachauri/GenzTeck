import { useState } from 'react';
import DemoLayout, { useDemo } from '../../components/DemoLayout';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Users, BookOpen, Star, Sparkles, Check, CheckCircle2 } from 'lucide-react';

function SchoolContent() {
  const { brandName } = useDemo();
  const [enroll, setEnroll] = useState({ studentName: '', grade: 'Class 11-12 (IIT-JEE/NEET)', phone: '', email: '' });
  const [enrollStatus, setEnrollStatus] = useState('idle');

  const courses = [
    { title: 'IIT-JEE/NEET Prime Prep', duration: '2 Year Program', level: 'High School / Graduates', desc: 'Rigorous physics, chemistry, biology, and maths syllabus coverage with daily practice sheets and full weekly diagnostics.' },
    { title: 'Foundation Excellence Course', duration: '1 Year Program', level: 'Class 8 - 10 Students', desc: 'Build logical reasoning, mathematical foundations, and basic scientific principles to crack national talent exams early.' },
    { title: 'SAT & AP Calculus Prep', duration: '6 Month Crash Course', level: 'Abroad Aspirants', desc: 'Focus on quantitative reasoning, reading comprehension, writing mechanics, and advanced AP subject testing.' }
  ];

  const handleEnrollment = (e) => {
    e.preventDefault();
    setEnrollStatus('loading');
    setTimeout(() => {
      setEnrollStatus('success');
    }, 1000);
  };

  return (
    <div className="bg-[#0b0c10] text-[#c5c6c7] min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-[#66fcf1]/10 bg-[#0b0c10]/95 backdrop-blur-md sticky top-[68px] z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-heading font-extrabold text-xl tracking-tight text-[#66fcf1] flex items-center gap-1.5">
            <GraduationCap size={20} className="text-[#66fcf1]" />
            {brandName}
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#c5c6c7]">
            <a href="#courses" className="hover:text-[#66fcf1] transition-colors">Programs</a>
            <a href="#stats" className="hover:text-[#66fcf1] transition-colors">Achievements</a>
            <a href="#faculty" className="hover:text-[#66fcf1] transition-colors">Mentors</a>
            <a href="#admissions" className="hover:text-[#66fcf1] transition-colors">Admissions</a>
          </div>
          <a
            href="#admissions"
            className="bg-[#66fcf1] hover:bg-[#45a29e] text-black px-4.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
          >
            Apply Online
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-28 md:py-36 text-center overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-[#66fcf1] text-xs font-bold tracking-[5px] uppercase block">
            Nurturing Brilliant Minds
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
            Unlock Academic Excellence at <span className="text-[#66fcf1]">{brandName}</span>
          </h1>
          <p className="text-[#c5c6c7] text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Delivering personalized mentoring, scientifically designed study materials, and a proven track record of securing admissions in global top-tier universities.
          </p>
          <div className="pt-4">
            <a
              href="#admissions"
              className="bg-[#66fcf1] hover:bg-[#45a29e] text-black px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(102,252,241,0.3)] inline-flex items-center gap-2"
            >
              <span>Admission Registration</span>
              <BookOpen size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Stats Achiever Banner */}
      <section className="bg-[#1f2833] border-y border-[#45a29e]/15 py-12" id="stats">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-heading font-black text-[#66fcf1]">98.6%</div>
            <div className="text-xs text-[#c5c6c7] uppercase tracking-wider mt-1">Board Exam Pass Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-black text-[#66fcf1]">540+</div>
            <div className="text-xs text-[#c5c6c7] uppercase tracking-wider mt-1">IIT / NEET Selections</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-black text-[#66fcf1]">15+</div>
            <div className="text-xs text-[#c5c6c7] uppercase tracking-wider mt-1">National Olympiad Ranks</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-heading font-black text-[#66fcf1]">100%</div>
            <div className="text-xs text-[#c5c6c7] uppercase tracking-wider mt-1">Individual Mentoring</div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-24 max-w-6xl mx-auto px-6" id="courses">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#66fcf1] text-xs font-bold tracking-[3px] uppercase">
            Study Streams
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">
            Our Top Coaching & School Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((c, idx) => (
            <div key={idx} className="bg-[#1f2833]/30 border border-[#45a29e]/15 p-8 rounded-2xl flex flex-col justify-between hover:border-[#66fcf1]/30 transition-all duration-300">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-[#66fcf1] uppercase bg-[#66fcf1]/10 px-3 py-1 rounded-full border border-[#66fcf1]/20">
                  {c.level}
                </span>
                <h3 className="text-xl font-heading font-bold text-white mt-4 mb-2">{c.title}</h3>
                <span className="text-xs text-[#8a8b8c] font-semibold">{c.duration}</span>
                <p className="text-[#c5c6c7] text-sm font-light leading-relaxed mt-4">{c.desc}</p>
              </div>
              <a
                href="#admissions"
                className="mt-6 text-[#66fcf1] text-xs uppercase tracking-wider font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Enroll Details</span>
                <Trophy size={12} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Mentors / Faculty */}
      <section className="py-24 bg-[#1f2833]/20 border-y border-[#1f2833]" id="faculty">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#66fcf1] text-xs font-bold tracking-[3px] uppercase">
              Mentor Panel
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Learn From Expert Academicians
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Prof. Alok Verma', subject: 'Senior Physics Lead', degree: 'M.Tech, IIT Kharagpur', exp: '12+ Yrs', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
              { name: 'Dr. Meera Sen', subject: 'Organic Chemistry Head', degree: 'Ph.D, IISc Bangalore', exp: '15+ Yrs', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
              { name: 'Prof. David Miller', subject: 'Advanced Mathematics Mentor', degree: 'M.Sc, Cambridge University', exp: '10+ Yrs', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' }
            ].map((fac, idx) => (
              <div key={idx} className="bg-[#1f2833]/30 border border-[#45a29e]/10 rounded-2xl overflow-hidden group">
                <div className="h-64 overflow-hidden bg-zinc-900">
                  <img
                    src={fac.img}
                    alt={fac.name}
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-heading font-bold text-lg text-white">{fac.name}</h3>
                  <p className="text-[#66fcf1] text-xs font-semibold">{fac.subject}</p>
                  <p className="text-[#c5c6c7] text-xs font-light">{fac.degree}</p>
                  <p className="text-[#8a8b8c] text-[11px] font-light">Experience: {fac.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Testimonial Badging */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#66fcf1] text-xs font-bold tracking-[3px] uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">
            Successful Alumni Speak
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { quote: `Mentors at ${brandName} simplified physics equations. Weekly test diagnostics and personal reviews helped me achieve AIR 45 in IIT-JEE.`, name: 'Rohan Malhotra', uni: 'IIT Bombay (CSE)' },
            { quote: `${brandName} foundation courses prepared me early. The logical reasoning classes helped me crack KVPY and NTSE exams smoothly in class 10.`, name: 'Sneha Roy', uni: 'National Scholar' },
            { quote: `The doubt clearing panels and mock interviews for abroad colleges were stellar. Got my SAT score to 1580 and secured admissions at UC Berkeley!`, name: 'Kabir Mehta', uni: 'UC Berkeley Student' }
          ].map((t, idx) => (
            <div key={idx} className="bg-[#1f2833]/35 border border-[#45a29e]/10 p-6.5 rounded-xl space-y-4">
              <div className="flex text-yellow-500 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 text-xs italic font-light leading-relaxed">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-xs text-white">{t.name}</h4>
                <span className="text-[10px] text-[#66fcf1]">{t.uni}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Online Admission Registration */}
      <section className="py-24 max-w-4xl mx-auto px-6" id="admissions">
        <div className="bg-[#1f2833] rounded-3xl border border-[#45a29e]/20 p-8 md:p-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[#66fcf1] text-xs font-bold tracking-[3px] uppercase">
              Admissions open
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Apply For Admission Evaluation
            </h2>
            <p className="text-[#c5c6c7] text-sm font-light mt-3">
              Submit details to schedule an evaluation test. Our counseling desk will contact you with test details.
            </p>
          </div>

          {enrollStatus === 'success' ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#66fcf1]/10 border border-[#66fcf1]/30 flex items-center justify-center mx-auto mb-5 text-[#66fcf1] text-3xl">
                ✓
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Application Logged!</h3>
              <p className="text-[#c5c6c7] mt-2 max-w-sm mx-auto text-sm leading-relaxed">
                Thank you. We have registered {enroll.studentName} for class evaluation for {enroll.grade}. We will contact you at {enroll.phone}.
              </p>
              <button
                onClick={() => { setEnrollStatus('idle'); setEnroll({ studentName: '', grade: 'Class 11-12 (IIT-JEE/NEET)', phone: '', email: '' }); }}
                className="mt-6 text-[#66fcf1] text-xs uppercase tracking-wider font-bold hover:underline"
              >
                Register Another Student
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleEnrollment} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#c5c6c7] uppercase tracking-wider mb-2">Student Full Name</label>
                <input
                  type="text"
                  required
                  value={enroll.studentName}
                  onChange={(e) => setEnroll(prev => ({ ...prev, studentName: e.target.value }))}
                  placeholder="e.g. Priyanshu Sharma"
                  className="w-full bg-[#0b0c10] border border-[#45a29e]/30 rounded-xl px-4 py-3 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-[#66fcf1]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#c5c6c7] uppercase tracking-wider mb-2">Phone Number</label>
                <input
                  type="text"
                  required
                  value={enroll.phone}
                  onChange={(e) => setEnroll(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full bg-[#0b0c10] border border-[#45a29e]/30 rounded-xl px-4 py-3 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-[#66fcf1]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#c5c6c7] uppercase tracking-wider mb-2">Select Target Program</label>
                <select
                  value={enroll.grade}
                  onChange={(e) => setEnroll(prev => ({ ...prev, grade: e.target.value }))}
                  className="w-full bg-[#0b0c10] border border-[#45a29e]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#66fcf1] text-sm"
                >
                  <option value="Class 11-12 (IIT-JEE/NEET)">Class 11-12 (IIT-JEE/NEET)</option>
                  <option value="Foundation (Class 8-10)">Foundation (Class 8-10)</option>
                  <option value="SAT & AP Calculus Program">SAT & AP Program</option>
                  <option value="Class 1-10 Secondary school">Class 1-10 Secondary School</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#c5c6c7] uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={enroll.email}
                  onChange={(e) => setEnroll(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="e.g. parent@gmail.com"
                  className="w-full bg-[#0b0c10] border border-[#45a29e]/30 rounded-xl px-4 py-3 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-[#66fcf1]"
                />
              </div>
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={enrollStatus === 'loading'}
                  className="w-full bg-[#66fcf1] hover:bg-[#45a29e] text-black py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-all"
                >
                  {enrollStatus === 'loading' ? 'Submitting Registration...' : 'Submit Evaluation Application'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b0c10] border-t border-[#45a29e]/10 py-12 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <div className="font-heading font-bold text-base text-[#66fcf1]">🎓 {brandName}</div>
          <p>© {new Date().getFullYear()} {brandName}. Educational mentorship excellence.</p>
        </div>
      </footer>
    </div>
  );
}

export default function SchoolDemo() {
  return (
    <DemoLayout defaultBrand="Apex Academy" slug="school">
      <SchoolContent />
    </DemoLayout>
  );
}
