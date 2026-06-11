import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'overview', title: '1. Overview', content: `This Refund Policy outlines the terms under which GenzTeck ("we", "our", "us") handles refund requests for services and products. By engaging GenzTeck for any service, you agree to this policy.\n\nDue to the nature of custom software development — where we invest time, resources, and expertise from the moment a project begins — our refund policy reflects the reality of delivering bespoke digital products.` },
  { id: 'custom-development', title: '2. Custom Development Projects', content: `For all custom web, mobile, software, and automation development projects:\n\n• Advance deposits / project initiation fees are non-refundable once project work has formally commenced\n• If you cancel a project before work begins, you may receive a full refund of any advance payment within 7 days of payment\n• Milestone payments are non-refundable once the corresponding milestone has been delivered and approved by the client\n• If GenzTeck is unable to deliver the agreed scope, we will work to resolve the issue or provide a partial refund proportional to work not completed\n• Refund requests must be submitted in writing within 7 days of the triggering event` },
  { id: 'products', title: '3. GenzTeck Products (GeoTrace, QR Menu, OneTap, NFC Standee)', content: `For our proprietary digital products and SaaS subscriptions:\n\n• Monthly subscriptions are non-refundable for the current billing period\n• Annual subscriptions may receive a prorated refund for unused months, minus a setup and processing fee of ₹999\n• Hardware products (NFC Standees, Smart Cards) are non-refundable after delivery if they are working as described\n• Defective hardware will be replaced at no cost within 30 days of delivery\n• If a product is significantly different from what was described, we will issue a full refund` },
  { id: 'eligible-refunds', title: '4. When You Are Eligible for a Refund', content: `You may be eligible for a full or partial refund if:\n\n• GenzTeck fails to deliver the agreed scope within the agreed timeline without prior client approval of delays\n• The delivered product has critical functionality defects that cannot be resolved within 30 days\n• We are unable to start work within 14 days of the agreed start date without client-side delays\n• A payment was made in error (duplicate charge, incorrect amount) — please contact us immediately\n\nIn all cases, refund requests must be submitted in writing to info.genzteck@gmail.com` },
  { id: 'non-eligible', title: '5. Non-Refundable Situations', content: `Refunds will not be provided in the following circumstances:\n\n• Client changes their mind after project work has commenced\n• Client is unhappy with design direction after approved design mockups were built upon\n• Project delays caused by the client (not providing content, approvals, or access)\n• Client requests features outside the original agreed scope without additional payment\n• Client-side technical issues or hosting problems not caused by GenzTeck\n• After 30 days from project delivery for any reason other than a critical defect` },
  { id: 'process', title: '6. Refund Request Process', content: `To request a refund:\n\n1. Email us at info.genzteck@gmail.com with subject "Refund Request — [Your Name]"\n2. Include your project name, invoice number, reason for refund, and supporting documentation\n3. We will acknowledge receipt within 48 hours and investigate the request\n4. A decision will be communicated within 7 business days\n5. Approved refunds will be processed within 5-10 business days to the original payment method` },
  { id: 'contact', title: '7. Questions & Disputes', content: `If you have questions about our refund policy or wish to dispute a charge, please contact us:\n\nGenzTeck\nEmail: info.genzteck@gmail.com\nPhone: +91 87695 92668\nWhatsApp: +91 87695 92668\n\nThis Refund Policy was last updated on January 1, 2025. We are committed to fair treatment of all clients and will resolve disputes in good faith.` },
];

function RenderContent({ content }) {
  let listItems = [];
  const result = [];
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    if (!line.trim()) {
      if (listItems.length > 0) {
        result.push(<ul key={`ul-${i}`}>{listItems}</ul>);
        listItems = [];
      }
      return;
    }
    if (line.startsWith('•')) {
      listItems.push(<li key={i}>{line.slice(1).trim()}</li>);
    } else if (/^\d+\./.test(line)) {
      if (listItems.length > 0) { result.push(<ul key={`ul-${i}`}>{listItems}</ul>); listItems = []; }
      result.push(<p key={i}>{line}</p>);
    } else {
      if (listItems.length > 0) { result.push(<ul key={`ul-${i}`}>{listItems}</ul>); listItems = []; }
      result.push(<p key={i}>{line}</p>);
    }
  });
  if (listItems.length > 0) result.push(<ul key="ul-final">{listItems}</ul>);
  return <>{result}</>;
}

export default function RefundPolicy() {
  return (
    <LegalLayout title={<>Refund <span className="text-gradient">Policy</span></>} effectiveDate="January 1, 2025">
      {sections.map(section => (
        <div key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          <RenderContent content={section.content} />
        </div>
      ))}
    </LegalLayout>
  );
}
