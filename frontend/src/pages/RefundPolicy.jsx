export default function RefundPolicy() {
  const sections = [
    {
      id: 'overview',
      title: '1. Overview',
      content: `At GenzTeck, we are committed to delivering high-quality software development and digital solutions. We understand that circumstances can change, and this Refund Policy outlines the terms under which refunds may be requested and processed.\n\nBy engaging GenzTeck's services or making a payment on our platform, you agree to the terms described in this Refund Policy. Please read this carefully before making any payment.`,
    },
    {
      id: 'eligibility',
      title: '2. Refund Eligibility',
      content: `Refund eligibility depends on the stage of work completed at the time of the request:\n\n• **Before Work Starts**: If you cancel your project before any work has commenced, you are eligible for a 100% refund of the amount paid.\n• **Within 48 Hours of Payment**: If work has not yet started and the request is made within 48 hours of payment, a full refund will be issued.\n• **After Work Has Started (Up to 25%)**: If less than 25% of the agreed deliverables have been completed, a partial refund may be issued for the uncompleted portion, minus a 10% administrative fee.\n• **After 25–50% Completion**: A refund of 50% of the remaining unpaid value may be considered at GenzTeck's discretion.\n• **After 50% Completion**: No refund will be issued once more than 50% of the project is complete, as significant resources, time, and third-party costs will have been incurred.\n• **Completed Projects**: No refunds are available for fully delivered and approved projects.`,
    },
    {
      id: 'non-refundable',
      title: '3. Non-Refundable Items',
      content: `The following are non-refundable under all circumstances:\n\n• **Domain Registration Fees**: Once a domain is registered on your behalf, the cost is non-refundable as it is paid directly to the domain registrar.\n• **Third-Party Licenses & Subscriptions**: Any software licenses, APIs, or subscriptions purchased specifically for your project.\n• **Hosting Costs**: Hosting fees paid to third-party providers are non-refundable.\n• **Demo Access Fees**: Early access or demo fees are non-refundable once access has been granted.\n• **Rush/Expedited Fees**: Additional fees charged for urgent or expedited delivery are non-refundable.\n• **Completed Milestones**: Any milestone that has been delivered and signed off on is non-refundable.`,
    },
    {
      id: 'process',
      title: '4. How to Request a Refund',
      content: `To request a refund, please follow these steps:\n\n• **Step 1**: Email us at info.genzteck@gmail.com with the subject line "Refund Request – [Your Name/Project Name]".\n• **Step 2**: Include your full name, registered email, payment reference/transaction ID, date of payment, and the reason for your refund request.\n• **Step 3**: Our team will review your request within 3 business days and respond with a decision.\n• **Step 4**: If approved, the refund will be processed within 7–10 business days to the original payment method.\n\nYou may also contact us via WhatsApp at +91 87695 92668 for urgent refund queries. Please keep your payment receipt and project agreement handy when making a request.`,
    },
    {
      id: 'timeline',
      title: '5. Refund Processing Timeline',
      content: `Once a refund is approved:\n\n• **UPI / Bank Transfer**: 3–5 business days\n• **Credit / Debit Card (via Razorpay)**: 5–10 business days (depends on your bank)\n• **Net Banking**: 3–7 business days\n\nGenzTeck is not responsible for delays caused by your bank or payment provider. If you have not received your refund after 10 business days, please contact your bank first, then reach out to us.`,
    },
    {
      id: 'disputes',
      title: '6. Disputes & Chargebacks',
      content: `We encourage all clients to reach out to us directly before initiating a chargeback through their bank or payment provider. Most issues can be resolved quickly through direct communication.\n\nUnauthorized chargebacks may result in:\n• Suspension of your account and access to our services\n• Additional documentation requirements\n• Legal action in severe cases of fraud\n\nIf you have a genuine dispute, we are always willing to work toward a fair resolution. Contact us at info.genzteck@gmail.com.`,
    },
    {
      id: 'revisions',
      title: '7. Revisions vs. Refunds',
      content: `Before requesting a refund, please consider requesting revisions. Our service agreements include a defined number of revision rounds. If you are not satisfied with a deliverable:\n\n• We will work with you to revise it within the agreed scope at no additional charge.\n• If the deliverable falls outside the original agreed scope, revision may be charged separately.\n\nWe believe revisions are often a better path to satisfaction than a refund, and we are committed to getting it right.`,
    },
    {
      id: 'contact',
      title: '8. Contact Us',
      content: `For any refund-related questions, please reach out:\n\n**GenzTeck**\nEmail: info.genzteck@gmail.com\nPhone / WhatsApp: +91 87695 92668\nAddress: B-54, Shri Shyam Residency, Dadudayal Nagar, Mansarovar, Jaipur (Rajasthan) - 302020\nWebsite: genzteck.in\n\nThis Refund Policy was last updated on January 1, 2025. GenzTeck reserves the right to amend this policy at any time. Continued use of our services constitutes acceptance of the updated policy.`,
    },
  ];

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 60, background: 'linear-gradient(135deg, #070711 0%, #12121E 100%)', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label">Legal</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: 12 }}>
            Refund <span className="text-gradient">Policy</span>
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
              <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, fontSize: '0.95rem' }}>
                {section.content.split('\n').map((line, i) => {
                  if (line.startsWith('•')) {
                    const text = line.slice(1).trim();
                    const parts = text.split(/\*\*(.*?)\*\*/);
                    return (
                      <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                        <span style={{ color: 'var(--color-primary)', flexShrink: 0 }}>•</span>
                        <span>{parts.map((p, j) => j % 2 === 1 ? <strong key={j} style={{ color: '#fff' }}>{p}</strong> : p)}</span>
                      </div>
                    );
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
