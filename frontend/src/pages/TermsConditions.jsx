import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'acceptance', title: '1. Acceptance of Terms', content: `By accessing our website (genzteck.in) or engaging GenzTeck for any services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.\n\nThese Terms apply to all clients, visitors, and parties who interact with GenzTeck in any capacity. GenzTeck reserves the right to modify these Terms at any time.` },
  { id: 'services', title: '2. Our Services', content: `GenzTeck provides technology services including but not limited to:\n\n• Custom web and mobile application development\n• Restaurant and food business technology solutions\n• GPS fleet tracking and location-based solutions\n• AI automation and business intelligence tools\n• E-commerce and marketplace platform development\n• SaaS product development\n• API integration and third-party connectivity\n• Admin dashboards and CRM systems\n\nAll services are subject to a separate project agreement or statement of work (SOW) detailing specific deliverables, timelines, and costs.` },
  { id: 'payment', title: '3. Payment Terms', content: `Payment terms will be outlined in the specific project agreement. General payment policies:\n\n• Advance Payment: A deposit (typically 30–50% of total project cost) is required before project commencement\n• Milestone Payments: For larger projects, payments are structured around defined milestones\n• Final Payment: Balance due before final code delivery or deployment\n• Currency: All payments are in Indian Rupees (₹) unless otherwise agreed\n• Payment Methods: Bank transfer (NEFT/IMPS), UPI, Razorpay, or other agreed methods\n• Late Payments: Invoices unpaid after 7 days may incur a 2% per month late fee\n• No Refund Policy: Due to the custom nature of software development, advance payments are non-refundable once project work has commenced` },
  { id: 'intellectual-property', title: '4. Intellectual Property', content: `Upon receipt of full and final payment, the Client will own all custom code, designs, and deliverables created specifically for their project.\n\nExceptions and Limitations:\n• GenzTeck retains rights to all pre-existing tools, frameworks, libraries, and methodologies\n• Open-source components remain under their respective licenses\n• GenzTeck retains the right to display the project in our portfolio unless a written NDA specifies otherwise\n• Proprietary GenzTeck SaaS products (GeoTrace, OneTap, etc.) are licensed to clients, not sold` },
  { id: 'client-responsibilities', title: '5. Client Responsibilities', content: `Clients are responsible for:\n\n• Providing timely feedback, approvals, and required content as per the agreed timeline\n• Ensuring provided content does not violate copyright or other laws\n• Nominating a primary point of contact for project communication\n• Informing GenzTeck of any changes in requirements promptly\n• Providing necessary access credentials, hosting details, or third-party accounts when required\n• Maintaining security of any credentials shared by GenzTeck upon project delivery\n\nProject delays caused by client-side delays will not be GenzTeck's responsibility and may result in adjusted timelines.` },
  { id: 'limitation', title: '6. Limitation of Liability', content: `GenzTeck's liability for any claim shall not exceed the total amount paid by the Client for the specific service giving rise to the claim.\n\nGenzTeck shall not be liable for:\n• Indirect, incidental, special, or consequential damages\n• Loss of profits, revenue, data, or business opportunities\n• Damages resulting from third-party actions or service failures\n• Bugs or issues arising from client-initiated changes after project delivery\n• Security breaches caused by the client's failure to implement recommended security practices` },
  { id: 'confidentiality', title: '7. Confidentiality', content: `Both parties agree to maintain confidentiality of any proprietary information shared during the course of the project. GenzTeck will not disclose client business data, trade secrets, or project specifics to unauthorized third parties.\n\nClients may request a formal Non-Disclosure Agreement (NDA) before project commencement. This obligation of confidentiality survives termination of the project or service agreement.` },
  { id: 'governing-law', title: '8. Governing Law', content: `These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Jaipur, Rajasthan, India.\n\nIn the event of a dispute, both parties agree to first attempt resolution through good-faith negotiation. If negotiation fails, disputes shall be submitted to binding arbitration under the Arbitration and Conciliation Act, 1996.` },
  { id: 'contact', title: '9. Contact Us', content: `For questions about these Terms and Conditions, please contact:\n\nGenzTeck\nEmail: info.genzteck@gmail.com\nPhone: +91 87695 92668\nAddress: B-54, Shri Shyam Residency, Dadudayal Nagar, Mansarovar, Jaipur (Rajasthan) - 302020\n\nThese Terms were last updated on January 1, 2025.` },
];

function RenderContent({ content }) {
  return content.split('\n').map((line, i) => {
    if (!line.trim()) return null;
    if (line.startsWith('•')) return <p key={i} style={{ display: 'flex', gap: 8, marginBottom: 6, color: '#8A8AA0' }}><span style={{ color: '#00D4FF', flexShrink: 0 }}>•</span><span>{line.slice(1).trim()}</span></p>;
    return <p key={i}>{line}</p>;
  });
}

export default function TermsConditions() {
  return (
    <LegalLayout title={<>Terms & <span className="text-gradient">Conditions</span></>} effectiveDate="January 1, 2025">
      <div className="mb-8 rounded-xl p-5 flex gap-3 items-start" style={{ background: 'rgba(255,165,0,0.08)', border: '1px solid rgba(255,165,0,0.2)' }}>
        <span className="flex-shrink-0 text-lg">⚠️</span>
        <p style={{ color: '#FFB347', margin: 0, fontSize: '0.9rem', lineHeight: 1.6 }}>
          These terms govern your use of GenzTeck's services. By proceeding with any service engagement, you agree to these terms.
        </p>
      </div>
      {sections.map(section => (
        <div key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          <RenderContent content={section.content} />
        </div>
      ))}
    </LegalLayout>
  );
}
