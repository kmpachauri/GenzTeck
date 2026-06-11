import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import './Footer.css';

const InstagramIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const FacebookIcon  = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const YoutubeIcon   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>;
const LinkedinIcon  = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
const GoogleIcon    = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5 16.25 5 12C5 7.9 8.2 4.73 12.2 4.73C15.29 4.73 17.1 6.7 17.1 6.7L19 4.72C19 4.72 16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12C2.03 17.05 6.16 22 12.39 22C17.6 22 21.54 18.33 21.54 12.91C21.54 11.76 21.35 11.1 21.35 11.1Z"/></svg>;
const WhatsAppIcon  = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const footerLinks = {
  services: [
    { to: '/services', label: 'Website Development' },
    { to: '/services', label: 'Mobile App Development' },
    { to: '/services', label: 'Custom Software' },
    { to: '/services', label: 'UI/UX Design' },
    { to: '/services', label: 'Automation Systems' },
    
  ],
  products: [
    { to: '/products', label: 'QR & NFC Menu System' },
    { to: '/products', label: 'GeoTrace GPS Tracking' },
    { to: '/products', label: 'NFC/QR Smart Standee' },
    { to: '/products', label: 'OneTap Smart Pages' },
    
  ],
  company: [
    { to: '/about', label: 'About GenzTeck' },
    { to: '/projects', label: 'Our Projects' },
    { to: '/demos', label: 'Request Demo' },
    { to: '/demo-videos', label: 'Demo Videos' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact Us' },
  ],
  legal: [
    { to: '/privacy-policy', label: 'Privacy Policy' },
    { to: '/terms-conditions', label: 'Terms & Conditions' },
    { to: '/refund-policy', label: 'Refund Policy' },
    { to: '/payment', label: 'Make a Payment' },
  ],
};

export default function Footer({ settings }) {
  const currentYear = new Date().getFullYear();

  const social = {
    whatsapp: settings?.whatsapp || '+918769592668',
    instagram: settings?.instagram || 'https://www.instagram.com/genz_teck',
    facebook: settings?.facebook || 'https://www.facebook.com/share/1LpRPBaGaP/',
    youtube: settings?.youtube || 'https://youtube.com/',
    linkedin: settings?.linkedin || 'https://www.linkedin.com/company/genztecknology/',
    email: settings?.email || 'info.genzteck@gmail.com',
    phone: settings?.phone || '+91 87695 92668',
    address: settings?.address || 'B-54, Shri Shyam Residency, Dadudayal Nagar, Mansarovar, Jaipur (Rajasthan) - 302020',
  };

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Genz<span>Teck</span>
            </Link>
            <p className="footer-tagline">
              We build software that grows your business. Custom websites, apps, automation, and digital products.
            </p>
            <div className="footer-social">
              <a href={`https://wa.me/${social.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="WhatsApp"><WhatsAppIcon /></a>
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram"><InstagramIcon /></a>
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook"><FacebookIcon /></a>
              <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="YouTube"><YoutubeIcon /></a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="https://g.page/r/CV6AhPIhEk6XEAI/review" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Google Review"><GoogleIcon /></a>
            </div>
            <div className="footer-contact-info">
              <a href={`mailto:${social.email}`} className="footer-contact-item">
                <Mail size={14} /> {social.email}
              </a>
              <a href="tel:+918769592668" className="footer-contact-item">
                <Phone size={14} /> {social.phone}
              </a>
              <span className="footer-contact-item">
                <MapPin size={14} /> {social.address}
              </span>
            </div>
          </div>

          {/* Services */}
          <div className="footer-links-section">
            <h4 className="footer-col-title">Services</h4>
            {footerLinks.services.map(l => (
              <Link key={l.label} to={l.to} className="footer-link">{l.label}</Link>
            ))}
          </div>

          {/* Products */}
          <div className="footer-links-section">
            <h4 className="footer-col-title">Products</h4>
            {footerLinks.products.map(l => (
              <Link key={l.label} to={l.to} className="footer-link">{l.label}</Link>
            ))}
            <a href="https://onetap.genzteck.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              OneTap <ExternalLink size={12} style={{ display: 'inline' }} />
            </a>
          </div>

          {/* Company */}
          <div className="footer-links-section">
            <h4 className="footer-col-title">Company</h4>
            {footerLinks.company.map(l => (
              <Link key={l.label} to={l.to} className="footer-link">{l.label}</Link>
            ))}
          </div>

          {/* Legal */}
          <div className="footer-links-section">
            <h4 className="footer-col-title">Legal</h4>
            {footerLinks.legal.map(l => (
              <Link key={l.label} to={l.to} className="footer-link">{l.label}</Link>
            ))}
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {currentYear} GenzTeck. All rights reserved.</p>
          <p>Built with ❤️ for growing businesses across India.</p>
        </div>
      </div>
    </footer>
  );
}
