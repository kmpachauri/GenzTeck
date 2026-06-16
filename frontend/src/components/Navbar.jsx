import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/projects', label: 'Portfolio' },
  { to: '/demos', label: 'Demos' },
  {
    label: 'More',
    children: [
      { to: '/about', label: 'About' },
      { to: '/testimonials', label: 'Testimonials' },
      { to: '/demo-videos', label: 'Demo Videos' },
      { to: '/contact', label: 'Contact' },
    ]
  }
];

export default function Navbar({ settings }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[1000] transition-all duration-300',
        scrolled
          ? 'glass-strong border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10 flex items-center gap-2">
          <img src="/images/company-logo.png" alt="GenzTeck Logo" className="w-8 h-8 rounded-lg object-cover" />
          <span className="font-heading font-bold text-xl text-white">
            Genz<span className="text-gradient">Teck</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    'text-[#8A8AA0] hover:text-white hover:bg-white/5'
                  )}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={14} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-44 glass-strong rounded-xl border border-white/[0.08] p-1.5 shadow-card"
                      role="menu"
                    >
                      {link.children.map(child => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) => cn(
                            'flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all duration-150',
                            isActive
                              ? 'text-cyan-400 bg-cyan-400/10'
                              : 'text-[#8A8AA0] hover:text-white hover:bg-white/5'
                          )}
                          role="menuitem"
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group',
                  isActive
                    ? 'text-white'
                    : 'text-[#8A8AA0] hover:text-white hover:bg-white/5'
                )}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg bg-white/[0.08]"
                        style={{ zIndex: -1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/demos"
            className="px-5 py-2.5 rounded-full text-sm font-semibold border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:text-white transition-all duration-200"
          >
            Browse Demos
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg border border-white/[0.08] text-[#8A8AA0] hover:text-white hover:bg-white/5 transition-all duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          id="mobile-menu-toggle"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden overflow-hidden glass-strong border-t border-white/[0.08]"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <nav className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="py-2">
                    <p className="text-xs font-semibold text-[#5A5A7A] uppercase tracking-wider px-3 mb-2">
                      {link.label}
                    </p>
                    {link.children.map(child => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) => cn(
                          'block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150',
                          isActive
                            ? 'text-cyan-400 bg-cyan-400/10'
                            : 'text-[#8A8AA0] hover:text-white hover:bg-white/5'
                        )}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) => cn(
                      'px-3 py-3 rounded-lg text-sm font-medium transition-all duration-150',
                      isActive
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-[#8A8AA0] hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <div className="pt-2 pb-1 flex flex-col gap-2">
                <Link
                  to="/demos"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 hover:bg-cyan-500/10 transition-all"
                >
                  Browse Demos
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white"
                >
                  Get Started →
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
