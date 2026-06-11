export default function PrivacyPolicy() {
  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: `GenzTeck ("we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (genzteck.in) or engage our services.

By using our website or services, you agree to the collection and use of information as described in this policy. If you do not agree, please discontinue use of our website and services.`,
    },
    {
      id: 'information-we-collect',
      title: '2. Information We Collect',
      content: `We collect information that you voluntarily provide to us when you fill out contact forms, request demos, or engage with our services. This includes:

• **Personal Identification**: Name, email address, phone number
• **Business Information**: Company name, business type, industry
• **Project Information**: Service requirements, budget range, project timeline
• **Communication Data**: Messages, inquiries, and feedback you send us
• **Usage Data**: How you interact with our website (pages visited, time spent)
• **Technical Data**: IP address, browser type, device information, referral source

We do not collect sensitive personal data such as financial account numbers, government IDs, or health information.`,
    },
    {
      id: 'how-we-use',
      title: '3. How We Use Your Information',
      content: `We use the information we collect for the following purposes:

• **Service Delivery**: To respond to your inquiries, process requests, and provide the services you've requested
• **Communication**: To contact you via phone, email, or WhatsApp as per your preferred contact method
• **Project Management**: To manage your project, send updates, and coordinate deliverables
• **Marketing**: To send you relevant information about our services and updates (you can opt out at any time)
• **Improvement**: To analyze usage patterns and improve our website and services
• **Legal Compliance**: To comply with applicable laws and regulations

We do not sell, rent, or trade your personal information to third parties for marketing purposes.`,
    },
    {
      id: 'data-storage',
      title: '4. Data Storage & Security',
      content: `Your data is stored on secure servers hosted on reputable cloud platforms (AWS / VPS). We implement appropriate technical and organizational security measures including:

• SSL/TLS encryption for all data in transit
• Encrypted storage for sensitive information
• Access controls limiting who can view your data
• Regular security audits and vulnerability assessments

We retain your personal data for as long as necessary to provide our services, or as required by law. You may request deletion of your data at any time by contacting us.

While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but commit to informing you of any data breaches that affect your personal information.`,
    },
    {
      id: 'cookies',
      title: '5. Cookies & Tracking',
      content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies we use include:

• **Essential Cookies**: Required for the website to function properly
• **Analytics Cookies**: Help us understand how visitors interact with our site (Google Analytics)
• **Preference Cookies**: Remember your preferences and settings

You can control cookies through your browser settings. Disabling cookies may affect some website functionality. By continuing to use our website, you consent to our use of cookies.`,
    },
    {
      id: 'third-party',
      title: '6. Third-Party Services',
      content: `We may share your information with trusted third-party service providers who assist us in operating our business, including:

• **Communication**: WhatsApp Business API, email service providers
• **Analytics**: Google Analytics for website performance tracking
• **Payment**: Razorpay or Stripe for processing payments (they have their own privacy policies)
• **Cloud Hosting**: AWS or VPS providers for data storage and hosting

These third parties are contractually obligated to keep your information confidential and use it only for the purposes we specify. We are not responsible for the privacy practices of third-party websites linked from our site.`,
    },
    {
      id: 'your-rights',
      title: '7. Your Rights',
      content: `You have the following rights regarding your personal data:

• **Access**: Request a copy of the personal data we hold about you
• **Correction**: Request correction of inaccurate or incomplete data
• **Deletion**: Request deletion of your personal data ("right to be forgotten")
• **Portability**: Request transfer of your data in a machine-readable format
• **Objection**: Object to processing of your data for marketing purposes
• **Withdrawal**: Withdraw consent at any time where processing is based on consent

To exercise any of these rights, contact us at privacy@genzteck.in`,
    },
    {
      id: 'contact',
      title: '8. Contact Us',
      content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

**GenzTeck**
Email: info.genzteck@gmail.com
Phone: +91 87695 92668
Address: B-54, Shri Shyam Residency, Dadudayal Nagar, Mansarovar, Jaipur (Rajasthan) - 302020
Website: genzteck.in

This Privacy Policy was last updated on January 1, 2025. We reserve the right to update this policy at any time. Significant changes will be communicated via email or a prominent notice on our website.`,
    },
  ];

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 60, background: 'linear-gradient(135deg, #070711 0%, #12121E 100%)', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label">Legal</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: 12 }}>
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', marginTop: 16 }}>
            Last updated: January 1, 2025 · Effective immediately
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          {/* TOC */}
          <div className="card" style={{ marginBottom: 48 }}>
            <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: 16, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: 1 }}>Table of Contents</h2>
            <ol style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '0.9rem' }}
                    onMouseEnter={e => e.target.style.opacity = '0.8'}
                    onMouseLeave={e => e.target.style.opacity = '1'}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.id} id={section.id} style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.3rem', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {section.title}
              </h2>
              <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, fontSize: '0.95rem', whiteSpace: 'pre-line' }}>
                {section.content.split('\n').map((line, i) => {
                  if (line.startsWith('•')) {
                    return <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 6 }}><span style={{ color: 'var(--color-primary)', flexShrink: 0 }}>•</span><span>{line.slice(1).trim()}</span></div>;
                  }
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return <p key={i} style={{ color: '#fff', fontWeight: 600, marginBottom: 8 }}>{line.slice(2, -2)}</p>;
                  }
                  return line.trim() ? <p key={i} style={{ marginBottom: 12 }}>{line}</p> : null;
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
