import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/projects', label: 'Projects' },
  {
    label: 'More',
    children: [
      { to: '/demos', label: 'Demos' },
      { to: '/demo-videos', label: 'Demo Videos' },
      { to: '/testimonials', label: 'Testimonials' },
      { to: '/blog', label: 'Blog' },
    ]
  },
  { to: '/contact', label: 'Contact' },
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
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-text">Genz<span className="navbar-logo-accent">Teck</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar-links" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className={`navbar-dropdown ${dropdownOpen ? 'open' : ''}`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="navbar-link navbar-dropdown-trigger" aria-expanded={dropdownOpen} aria-haspopup="true">
                  {link.label}
                  <ChevronDown size={14} className="dropdown-arrow" />
                </button>
                <div className="navbar-dropdown-menu" role="menu">
                  {link.children.map(child => (
                    <NavLink key={child.to} to={child.to} className="navbar-dropdown-item" role="menuitem">
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="navbar-cta">
          <Link to="/payment" className="btn btn-outline btn-sm">Pay Now</Link>
          <Link to="/contact" className="btn btn-primary btn-sm">Get Started</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          id="mobile-menu-toggle"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile ${mobileOpen ? 'open' : ''}`} role="dialog" aria-label="Mobile navigation">
        <nav className="navbar-mobile-links">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="navbar-mobile-group">
                <span className="navbar-mobile-group-label">{link.label}</span>
                {link.children.map(child => (
                  <NavLink
                    key={child.to}
                    to={child.to}
                    className={({ isActive }) => `navbar-mobile-link ${isActive ? 'active' : ''}`}
                  >
                    {child.label}
                  </NavLink>
                ))}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `navbar-mobile-link ${isActive ? 'active' : ''}`}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            )
          )}
          <Link to="/payment" className="btn btn-outline" style={{ marginTop: 8, justifyContent: 'center' }}>
            💳 Pay Now
          </Link>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 8, justifyContent: 'center' }}>
            Get Started →
          </Link>
        </nav>
      </div>
    </header>
  );
}
