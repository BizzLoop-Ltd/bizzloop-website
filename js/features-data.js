/**
 * BizzLoop Core Platform Features Data (js/features-data.js)
 * High-level architecture categories & deep-dive modal data
 */

const BizzLoopFeatures = [
  {
    id: 'customer-management',
    icon: 'ti ti-users-group',
    title: 'Customer Management (CRM)',
    badge: 'Front-Office',
    color: '#1451D8',
    summary: 'Full customer lifecycle tracking from initial enquiry to repeat contract.',
    highlights: ['Lead capture & qualification', 'Complete communication history', 'Deal pipeline Kanban', 'Instant quote generation'],
    description: 'Keep your entire customer journey organised. BizzLoop replaces fragmented contact spreadsheets and lost emails with a unified customer command centre.',
    submodules: [
      { name: 'Lead Pipeline', desc: 'Customisable deal stages, conversion probability, and automatic reminders.' },
      { name: 'Contact 360°', desc: 'Unified view of every email, call log, invoice, and support note for every client.' },
      { name: 'Quotation Engine', desc: 'Create professional UK VAT quotes in seconds and convert them to live invoices upon approval.' }
    ]
  },
  {
    id: 'business-management',
    icon: 'ti ti-building-store',
    title: 'Operations & ERP',
    badge: 'Back-Office',
    color: '#04A5C2',
    summary: 'Centralise core operations, invoicing, stock management, and purchasing.',
    highlights: ['HMRC-ready VAT invoices', 'Inventory balances & stock alerts', 'Supplier purchase orders', 'Staff job assignments'],
    description: 'Connect your operational administration directly to your sales pipeline. Eliminate manual re-keying and avoid costly inventory mistakes.',
    submodules: [
      { name: 'Billing & Invoicing', desc: 'Generate UK VAT compliant invoices with integrated online payment links.' },
      { name: 'Stock & Inventory', desc: 'Track multi-location stock, low-stock threshold triggers, and batch records.' },
      { name: 'Supplier Management', desc: 'Maintain supplier catalogues, issue purchase orders, and track deliveries.' }
    ]
  },
  {
    id: 'growth-marketing',
    icon: 'ti ti-trending-up',
    title: 'Digital Marketing & Growth',
    badge: 'Acquisition',
    color: '#10B981',
    summary: 'Attract high-intent UK customers with integrated campaigns, SEO, and social.',
    highlights: ['Multi-touch email campaigns', 'Social media calendar planning', 'Local UK SEO strategy', 'Customer re-engagement loops'],
    description: 'Grow your business predictably. Coordinate digital marketing initiatives directly alongside your operational capacity.',
    submodules: [
      { name: 'Campaign Engine', desc: 'Create targeted customer broadcasts based on purchase history and service needs.' },
      { name: 'Local SEO Suite', desc: 'Optimise for local UK searches, Google Business profile links, and high-intent keywords.' },
      { name: 'Review Collection', desc: 'Automate post-service customer feedback and 5-star Google review requests.' }
    ]
  },
  {
    id: 'online-presence',
    icon: 'ti ti-device-desktop',
    title: 'Website & Lead Engine',
    badge: 'Digital Storefront',
    color: '#8B5CF6',
    summary: 'A fast, modern online presence engineered specifically to capture enquiries.',
    highlights: ['Mobile-first responsiveness', 'Instant lead webhook routing', 'Structured UK business schema', 'Fast CDN hosting'],
    description: 'Transform your website from an idle brochure into your hardest-working sales representative.',
    submodules: [
      { name: 'Interactive Intake Forms', desc: 'High-conversion booking forms with conditional field logic.' },
      { name: 'Service Catalogues', desc: 'Present clear pricing, client testimonials, and case studies.' },
      { name: 'Instant Team Alerts', desc: 'Direct WhatsApp and email notifications as soon as an enquiry lands.' }
    ]
  },
  {
    id: 'automation-workflows',
    icon: 'ti ti-cpu',
    title: 'Workflow Automation',
    badge: 'Efficiency',
    color: '#F59E0B',
    summary: 'Automate repetitive daily routines, follow-ups, and cross-department syncing.',
    highlights: ['Auto-replies & notifications', 'Payment chase sequences', 'Staff scheduling triggers', 'Cross-system data sync'],
    description: 'Save 140+ hours every month. Let BizzLoop handle administrative housekeeping while you focus on delivering high-value work.',
    submodules: [
      { name: 'Smart Auto-Chasers', desc: 'Polite, automated invoice reminders with direct online payment options.' },
      { name: 'Task Orchestration', desc: 'Automatically assign internal jobs and checklists when a customer signs.' },
      { name: 'Webhook Integrations', desc: 'Connect to external payment gateways, WhatsApp bots, and messaging channels.' }
    ]
  },
  {
    id: 'reporting-bi',
    icon: 'ti ti-chart-bar',
    title: 'Business Intelligence & Reports',
    badge: 'Visibility',
    color: '#1451D8',
    summary: 'Clear, real-time metrics showing revenue, conversion rates, and team capacity.',
    highlights: ['Executive revenue summaries', 'Conversion rate tracking', 'Staff productivity insights', 'Cash flow forecasting'],
    description: 'Make informed business decisions with confidence. Eliminate end-of-month reporting panic with live, auto-updating dashboards.',
    submodules: [
      { name: 'Financial Overview', desc: 'Monthly recurring revenue, outstanding invoices, and VAT summaries.' },
      { name: 'Pipeline Health', desc: 'Track where prospects drop off and identify your highest-converting lead channels.' },
      { name: 'Capacity Planning', desc: 'Monitor staff workload to plan hiring and project commitments accurately.' }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopFeatures;
}
