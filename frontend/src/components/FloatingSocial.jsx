import { useState } from 'react';
import { X, MessageCircle, Phone, Mail } from 'lucide-react';
import './FloatingSocial.css';

const InstagramIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const FacebookIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const YoutubeIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>;
const LinkedinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function FloatingSocial({ settings }) {
  const [open, setOpen] = useState(false);

  const s = settings || {};
  const phone = (s.whatsapp || '+918769592668').replace(/\D/g, '');
  const items = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: <WhatsAppIcon />,
      href: `https://wa.me/${phone}?text=Hi GenzTeck! I found your website and I'd like to know more about your services.`,
      color: '#25D366',
      external: true
    },
    {
      id: 'instagram',
      label: 'Instagram',
      icon: <InstagramIcon />,
      href: s.instagram || 'https://www.instagram.com/genz_teck',
      color: '#E1306C',
      external: true
    },
    {
      id: 'facebook',
      label: 'Facebook',
      icon: <FacebookIcon />,
      href: s.facebook || 'https://www.facebook.com/share/1LpRPBaGaP/',
      color: '#1877F2',
      external: true
    },
    {
      id: 'youtube',
      label: 'YouTube',
      icon: <YoutubeIcon />,
      href: s.youtube || 'https://youtube.com/@genzteck',
      color: '#FF0000',
      external: true
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: <LinkedinIcon />,
      href: s.linkedin || 'https://www.linkedin.com/company/genztecknology/',
      color: '#0A66C2',
      external: true
    },
    {
      id: 'phone',
      label: 'Call Us',
      icon: <Phone size={20} />,
      href: `tel:${(s.phone || '+918769592668').replace(/\s/g, '')}`,
      color: '#00D4FF',
      external: false
    },
    {
      id: 'email',
      label: 'Email',
      icon: <Mail size={20} />,
      href: `mailto:${s.email || 'info.genzteck@gmail.com'}`,
      color: '#7B2FBE',
      external: false
    },
  ];

  return (
    <div className="floating-social" id="floating-social-drawer">
      {/* Drawer Items */}
      <div className={`floating-social-drawer ${open ? 'open' : ''}`} role="dialog" aria-label="Social media links">
        {items.map((item, i) => (
          <a
            key={item.id}
            href={item.href}
            target={item.external ? '_blank' : '_self'}
            rel={item.external ? 'noopener noreferrer' : ''}
            className="floating-social-item"
            aria-label={item.label}
            style={{ '--social-color': item.color, '--delay': `${i * 0.05}s` }}
            onClick={() => setOpen(false)}
          >
            <span className="floating-social-icon" style={{ background: item.color }}>
              {item.icon}
            </span>
            <span className="floating-social-label">{item.label}</span>
          </a>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        className={`floating-social-toggle ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close social drawer' : 'Open social media links'}
        aria-expanded={open}
        id="social-drawer-toggle"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
