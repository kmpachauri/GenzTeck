export default function TermsConditions() {
  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      content: `By accessing our website (genzteck.in) or engaging GenzTeck for any services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.

These Terms apply to all clients, visitors, and parties who interact with GenzTeck in any capacity — including web development, app development, consulting, and any other services we provide.

GenzTeck reserves the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the new Terms.`,
    },
    {
      id: 'services',
      title: '2. Our Services',
      content: `GenzTeck provides technology services including but not limited to:

• Custom web and mobile application development
• Restaurant and food business technology solutions
• GPS fleet tracking and location-based solutions
• AI automation and business intelligence tools
• E-commerce and marketplace platform development
• SaaS product development
• API integration and third-party connectivity
• Admin dashboards and CRM systems

All services are subject to a separate project agreement or statement of work (SOW) that will detail specific deliverables, timelines, and costs. In case of conflict, the project agreement takes precedence over these general Terms.`,
    },
    {
      id: 'payment',
      title: '3. Payment Terms',
      content: `Payment terms will be outlined in the specific project agreement. General payment policies:

• **Advance Payment**: A deposit (typically 30–50% of total project cost) is required before project commencement
• **Milestone Payments**: For larger projects, payments are structured around defined milestones
• **Final Payment**: Balance due before final code delivery or deployment
• **Currency**: All payments are in Indian Rupees (₹) unless otherwise agreed
• **Payment Methods**: Bank transfer (NEFT/IMPS), UPI, Razorpay, or other agreed methods
• **Late Payments**: Invoices unpaid after 7 days may incur a 2% per month late fee
• **No Refund Policy**: Due to the custom nature of software development, advance payments are non-refundable once project work has commenced

Disputes regarding payments must be raised in writing within 7 days of the invoice date.`,
    },
    {
      id: 'intellectual-property',
      title: '4. Intellectual Property',
      content: `Upon receipt of full and final payment, the Client will own all custom code, designs, and deliverables created specifically for their project ("Work Product").

**Exceptions and Limitations:**
• GenzTeck retains rights to all pre-existing tools, frameworks, libraries, templates, and methodologies used during development
• Open-source components remain under their respective licenses
• GenzTeck retains the right to display the project in our portfolio unless a written NDA agreement specifies otherwise
• Any proprietary GenzTeck tools or SaaS products (GeoTrace, OneTap, etc.) are licensed to clients, not sold — their underlying code remains GenzTeck's property

The Client warrants that any content, logos, or materials provided to GenzTeck does not infringe on third-party intellectual property rights.`,
    },
    {
      id: 'client-responsibilities',
      title: '5. Client Responsibilities',
      content: `Clients are responsible for:

• Providing timely feedback, approvals, and required content as per the agreed timeline
• Ensuring provided content (text, images, data) does not violate copyright or other laws
• Nominating a primary point of contact for project communication
• Informing GenzTeck of any changes in requirements promptly
• Providing necessary access credentials, hosting details, or third-party accounts when required
• Maintaining security of any credentials shared by GenzTeck upon project delivery

Project delays caused by client-side delays in feedback or content delivery will not be GenzTeck's responsibility and may result in adjusted timelines or additional charges.`,
    },
    {
      id: 'limitation',
      title: '6. Limitation of Liability',
      content: `GenzTeck's liability for any claim arising out of or related to our services shall not exceed the total amount paid by the Client for the specific service giving rise to the claim.

GenzTeck shall not be liable for:
• Indirect, incidental, special, or consequential damages
• Loss of profits, revenue, data, or business opportunities
• Damages resulting from third-party actions or service failures (hosting, APIs, etc.)
• Bugs or issues arising from client-initiated changes after project delivery
• Security breaches caused by the client's failure to implement recommended security practices

This limitation applies regardless of the legal theory under which the claim is brought.`,
    },
    {
      id: 'confidentiality',
      title: '7. Confidentiality',
      content: `Both parties agree to maintain confidentiality of any proprietary information shared during the course of the project. GenzTeck will not disclose client business data, trade secrets, or project specifics to unauthorized third parties.

Clients may request a formal Non-Disclosure Agreement (NDA) before project commencement. We are happy to sign NDAs for sensitive projects.

This obligation of confidentiality survives termination of the project or service agreement.`,
    },
    {
      id: 'governing-law',
      title: '8. Governing Law',
      content: `These Terms and Conditions are governed by the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Jaipur, Rajasthan, India.

In the event of a dispute, both parties agree to first attempt resolution through good-faith negotiation. If negotiation fails, disputes shall be submitted to binding arbitration under the Arbitration and Conciliation Act, 1996.`,
    },
    {
      id: 'contact',
      title: '9. Contact Us',
      content: `For questions about these Terms and Conditions, please contact:

**GenzTeck**
Email: info.genzteck@gmail.com
Phone: +91 87695 92668
Address: B-54, Shri Shyam Residency, Dadudayal Nagar, Mansarovar, Jaipur (Rajasthan) - 302020
Website: genzteck.in

These Terms were last updated on January 1, 2025. By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.`,
    },
  ];

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 60, background: 'linear-gradient(135deg, #070711 0%, #12121E 100%)', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label">Legal</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: 12 }}>
            Terms & <span className="text-gradient">Conditions</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', marginTop: 16 }}>
            Last updated: January 1, 2025 · Please read carefully before engaging our services
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          {/* Disclaimer */}
          <div style={{ background: 'rgba(255,165,0,0.08)', border: '1px solid rgba(255,165,0,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 48, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>⚠️</span>
            <p style={{ color: '#FFB347', margin: 0, fontSize: '0.9rem', lineHeight: 1.6 }}>
              These terms govern your use of GenzTeck's services. By proceeding with any service engagement, you agree to these terms. For project-specific terms, refer to your signed project agreement.
            </p>
          </div>

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
              <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, fontSize: '0.95rem' }}>
                {section.content.split('\n').map((line, i) => {
                  if (line.startsWith('•')) {
                    return <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 6 }}><span style={{ color: 'var(--color-primary)', flexShrink: 0 }}>•</span><span>{line.slice(1).trim()}</span></div>;
                  }
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return <p key={i} style={{ color: '#fff', fontWeight: 600, marginBottom: 8, marginTop: 16 }}>{line.slice(2, -2)}</p>;
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
