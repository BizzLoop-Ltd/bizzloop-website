/**
 * BizzLoop Partner & Affiliate Programme Data (js/affiliate-data.js)
 * For UK Business Advisors, Accountants, Web Agencies & IT Consultants
 */

const BizzLoopAffiliate = {
  headline: 'Partner With BizzLoop',
  subheading: 'Earn 20% recurring revenue share by introducing UK businesses to modern, connected Business Operating Systems.',
  commissionRate: '20% Recurring',
  highlights: [
    { title: '20% Recurring Revenue', desc: 'Earn every single month or year your referred client maintains an active BizzLoop subscription.' },
    { title: 'No Revenue Cap', desc: 'No limits on your earning potential — scale as many client accounts as your network allows.' },
    { title: 'Dedicated Partner Lead', desc: 'Direct access to our UK technical team for client demonstrations and custom requirements.' },
    { title: 'Full Onboarding Handled', desc: 'We take care of initial customer setup, training, and ongoing technical support.' }
  ],
  partnerTypes: [
    {
      title: 'Digital Marketing & Web Agencies',
      icon: 'ti ti-device-laptop',
      desc: 'Offer your clients a ready-made CRM, lead routing engine, and back-office operations alongside your web design and marketing retainers.'
    },
    {
      title: 'Accountants & Bookkeepers',
      icon: 'ti ti-calculator',
      desc: 'Help your small business clients get their billing, invoices, stock records, and customer documentation organized cleanly in real time.'
    },
    {
      title: 'Business Coaches & Advisors',
      icon: 'ti ti-user-star',
      desc: 'Provide your consulting clients with an operational framework that eliminates admin waste and enables sustainable scaling.'
    },
    {
      title: 'IT & Operations Consultants',
      icon: 'ti ti-settings-code',
      desc: 'Deploy high-reliability business systems without needing to maintain fragile servers or complex open-source setups.'
    }
  ],
  steps: [
    { step: '01', title: 'Join Partner Network', desc: 'Apply online in under 2 minutes. We will review your application and send your partner kit.' },
    { step: '02', title: 'Introduce Clients', desc: 'Refer UK business owners who need simpler CRM, operations, or automated lead workflows.' },
    { step: '03', title: 'We Onboard & Support', desc: 'Our UK team delivers the product demo, configures their workspace, and provides training.' },
    { step: '04', title: 'Earn Recurring Payouts', desc: 'Receive your 20% commission directly into your UK bank account every month.' }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopAffiliate;
}
