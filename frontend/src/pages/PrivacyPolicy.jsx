import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'introduction', title: '1. Introduction', content: `GenzTeck ("we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (genzteck.in) or engage our services.\n\nBy using our website or services, you agree to the collection and use of information as described in this policy.` },
  { id: 'information-we-collect', title: '2. Information We Collect', content: `We collect information that you voluntarily provide when you fill out contact forms, request demos, or engage with our services:\n\n• Personal Identification: Name, email address, phone number\n• Business Information: Company name, business type, industry\n• Project Information: Service requirements, budget range, project timeline\n• Communication Data: Messages, inquiries, and feedback you send us\n• Usage Data: How you interact with our website (pages visited, time spent)\n• Technical Data: IP address, browser type, device information, referral source` },
  { id: 'how-we-use', title: '3. How We Use Your Information', content: `We use the information we collect for the following purposes:\n\n• Service Delivery: To respond to inquiries, process requests, and provide services\n• Communication: To contact you via phone, email, or WhatsApp\n• Project Management: To manage your project, send updates, and coordinate deliverables\n• Marketing: To send you relevant information about our services (you can opt out at any time)\n• Improvement: To analyze usage patterns and improve our website and services\n• Legal Compliance: To comply with applicable laws and regulations\n\nWe do not sell, rent, or trade your personal information to third parties for marketing purposes.` },
  { id: 'data-storage', title: '4. Data Storage & Security', content: `Your data is stored on secure servers hosted on reputable cloud platforms (AWS / VPS). We implement appropriate technical and organizational security measures including:\n\n• SSL/TLS encryption for all data in transit\n• Encrypted storage for sensitive information\n• Access controls limiting who can view your data\n• Regular security audits and vulnerability assessments\n\nWe retain your personal data for as long as necessary to provide our services, or as required by law.` },
  { id: 'cookies', title: '5. Cookies & Tracking', content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience:\n\n• Essential Cookies: Required for the website to function properly\n• Analytics Cookies: Help us understand how visitors interact with our site (Google Analytics)\n• Preference Cookies: Remember your preferences and settings\n\nYou can control cookies through your browser settings. By continuing to use our website, you consent to our use of cookies.` },
  { id: 'third-party', title: '6. Third-Party Services', content: `We may share your information with trusted third-party service providers including:\n\n• Communication: WhatsApp Business API, email service providers\n• Analytics: Google Analytics for website performance tracking\n• Payment: Razorpay for processing payments (they have their own privacy policies)\n• Cloud Hosting: AWS or VPS providers for data storage and hosting` },
  { id: 'your-rights', title: '7. Your Rights', content: `You have the following rights regarding your personal data:\n\n• Access: Request a copy of the personal data we hold about you\n• Correction: Request correction of inaccurate or incomplete data\n• Deletion: Request deletion of your personal data ("right to be forgotten")\n• Portability: Request transfer of your data in a machine-readable format\n• Objection: Object to processing of your data for marketing purposes\n\nTo exercise any of these rights, contact us at info.genzteck@gmail.com` },
  { id: 'contact', title: '8. Contact Us', content: `GenzTeck\nEmail: info.genzteck@gmail.com\nPhone: +91 87695 92668\nAddress: B-54, Shri Shyam Residency, Dadudayal Nagar, Mansarovar, Jaipur (Rajasthan) - 302020\n\nThis Privacy Policy was last updated on January 1, 2025. We reserve the right to update this policy at any time.` },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout title={<>Privacy <span className="text-gradient">Policy</span></>} effectiveDate="January 1, 2025">
      {sections.map((section) => (
        <div key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          {section.content.split('\n').map((line, i) => {
            if (!line.trim()) return null;
            if (line.startsWith('•')) return <p key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}><span style={{ color: '#00D4FF', flexShrink: 0 }}>•</span><span>{line.slice(1).trim()}</span></p>;
            return <p key={i}>{line}</p>;
          })}
        </div>
      ))}
    </LegalLayout>
  );
}
