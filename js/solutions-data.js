/**
 * BizzLoop Solutions Data (js/solutions-data.js)
 * Tailored UK SME industry blueprints
 */

const BizzLoopSolutions = [
  {
    id: 'small-businesses',
    title: 'Small Businesses & Sole Traders',
    badge: 'Lean & Organised',
    icon: 'ti ti-briefcase',
    color: '#1451D8',
    summary: 'Replace messy spreadsheets and fragmented apps with a single, simple workspace.',
    painPoint: 'Spending weekends catching up on lost quotes, manual receipts, and unreplied WhatsApp messages.',
    solution: 'BizzLoop Starter gives you instant enquiry capture, organized customer histories, and one-click UK VAT invoices so you can get paid faster.',
    benefits: [
      'Centralised client phone numbers, addresses, and job history',
      'One-click HMRC-ready invoices with Stripe payment buttons',
      'Automatic booking confirmations and calendar sync'
    ]
  },
  {
    id: 'service-businesses',
    title: 'Service & Trade Contractors',
    badge: 'Field & Office Sync',
    icon: 'ti ti-tool',
    color: '#04A5C2',
    summary: 'Manage client enquiries, job dispatch, quotes, and on-site follow-ups seamlessly.',
    painPoint: 'Difficulty tracking which engineer visited which client, delayed job sign-offs, and late invoice delivery.',
    solution: 'Equip your team with mobile job sheets, real-time status updates, and automated customer notifications when technicians are en route.',
    benefits: [
      'Instant quote-to-job conversion with customer e-signatures',
      'Automated reminder texts before appointment dates',
      'Inventory tracking for tools, materials, and spare parts'
    ]
  },
  {
    id: 'local-businesses',
    title: 'Local Clinics, Salons & Studios',
    badge: 'Local Presence & Bookings',
    icon: 'ti ti-map-pin',
    color: '#10B981',
    summary: 'Generate high-intent local enquiries, handle patient/client intake, and reduce no-shows.',
    painPoint: 'High appointment no-show rates and time-consuming manual diary management across multiple therapists/practitioners.',
    solution: 'Turn your website into a 24/7 self-service booking engine with automated SMS reminders and integrated medical/client notes.',
    benefits: [
      'Local UK SEO optimization to capture local search traffic',
      'Smart SMS/Email appointment reminders that cut no-shows by 75%',
      'GDPR-compliant client consultation forms and records'
    ]
  },
  {
    id: 'growing-companies',
    title: 'Fast-Growing Limited Companies',
    badge: 'Scale Without Chaos',
    icon: 'ti ti-trending-up',
    color: '#8B5CF6',
    summary: 'Connect sales pipelines, team tasks, stock movement, and multi-user permissions.',
    painPoint: 'Departments operating in silos — sales promises delivery dates that stock and operations cannot fulfill.',
    solution: 'Growth OS bridges sales, stock, operations, and HR into one connected loop with real-time visibility.',
    benefits: [
      'Role-based permissions for up to 15 concurrent team members',
      'Real-time inventory levels synchronized across sales and purchasing',
      'Staff leave approval workflows and team task Kanban boards'
    ]
  },
  {
    id: 'professional-services',
    title: 'Agencies & Professional Services',
    badge: 'Client Excellence',
    icon: 'ti ti-building',
    color: '#F59E0B',
    summary: 'Manage prospective client pitches, retainers, milestones, and customer portals.',
    painPoint: 'Losing track of project scope creep, manual billable hour calculations, and disorganised client files.',
    solution: 'Give clients a polished self-service portal while tracking project milestones, recurring retainers, and support tickets in one place.',
    benefits: [
      'Dedicated client portal for invoice downloads and support tickets',
      'Automated monthly recurring retainer billing and direct debits',
      'Central document vault for contracts, briefs, and assets'
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopSolutions;
}
