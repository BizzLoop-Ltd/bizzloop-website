/**
 * BizzLoop OS Plans & Technical Entitlement Matrix (js/plans-data.js)
 * Aligned strictly with BIZZLOOP_PLAN_MATRIX.md (BIZZLOOP LTD, Co. No: 17319641)
 * Currency: GBP (£) | Tax: UK VAT (20% standard rate)
 */

const BizzLoopPlans = {
  currency: '£',
  currencyCode: 'GBP',
  vatRate: 0.20,
  annualSavingsRatio: '16.7%',
  annualSavingsText: '2 Months Free · Save 16.7%',
  tiers: [
    {
      id: 'starter',
      name: 'Starter OS',
      target: 'Startups, Sole Traders, Clinics & Consultants',
      description: 'The essential business engine to capture enquiries, organise customer leads, and send HMRC-ready UK VAT invoices.',
      pricing: {
        monthly: 149,
        monthlyGross: 178.80,
        annualTotal: 1490,
        annualMonthlyEquiv: 124.17,
        annualSavingsAmount: 298
      },
      userSeats: 'Up to 5 User Seats',
      storage: '5 GB Document Vault',
      infrastructure: 'Dedicated Isolated Subdomain & Database',
      popular: false,
      ctaText: 'Get Started with Starter',
      keyBenefits: [
        'Centralised Customer Workspace & CRM',
        'Lead Capture & Automatic Routing',
        'HMRC-ready Invoicing & Basic Payments',
        'Website & Landing Page Integration',
        'Standard Email & Ticket Support'
      ],
      stackEntitlements: [
        { name: 'Frappe Framework v15 Core', included: true },
        { name: 'BizzLoop Client Experience', included: true },
        { name: 'Core Finance & Invoicing', included: true },
        { name: 'Sales Quotations & Orders', included: true },
        { name: 'Frappe CRM (Leads & Deals)', included: true },
        { name: 'Frappe Payments (Stripe / Bank Feeds)', included: true },
        { name: 'Document Vault (5 GB)', included: true },
        { name: 'Stock & Inventory Movement', included: false },
        { name: 'HRMS (Staff & Attendance)', included: false },
        { name: 'Helpdesk & Support Queues', included: false },
        { name: 'Executive BI & Analytics', included: false },
        { name: 'Manufacturing (BOM)', included: false }
      ],
      workspaceHubs: [
        '1. Command Centre (Executive Summary & Launchers)',
        '2. Sales Hub (Enquiry Tracking & Deal Pipeline)',
        '3. Customer Hub (Contact Directory & Client Logs)',
        '4. Billing & Finance (UK VAT Invoices & Incomes)',
        '11. Client Self-Service Portal'
      ]
    },
    {
      id: 'growth',
      name: 'Growth OS',
      target: 'Growing SMEs, Agencies, Trade & Multi-Team Businesses',
      description: 'The complete connected system for scaling businesses needing multi-user collaboration, inventory, staff management, and automated workflows.',
      pricing: {
        monthly: 349,
        monthlyGross: 418.80,
        annualTotal: 3490,
        annualMonthlyEquiv: 290.83,
        annualSavingsAmount: 698
      },
      userSeats: 'Up to 15 User Seats',
      storage: '25 GB Document Vault',
      infrastructure: 'Dedicated High-Performance Cloud Instance',
      popular: true,
      badge: 'MOST POPULAR',
      ctaText: 'Deploy Growth OS',
      keyBenefits: [
        'Everything in Starter OS included',
        'Inventory & Multi-Warehouse Stock Tracking',
        'Team HR, Attendance & Leave Approvals',
        'Project Task Boards & Milestone Collaboration',
        'Helpdesk Support Ticket System',
        'Guided Onboarding & Priority Support'
      ],
      stackEntitlements: [
        { name: 'Frappe Framework v15 Core', included: true },
        { name: 'BizzLoop Client Experience', included: true },
        { name: 'Full Financials & Ledger Accounts', included: true },
        { name: 'Sales & Purchase Order Workflows', included: true },
        { name: 'Frappe CRM (Pipelines & Task Routing)', included: true },
        { name: 'Frappe Payments (Multi-Gateway)', included: true },
        { name: 'Document Vault (25 GB)', included: true },
        { name: 'Stock & Inventory Movement', included: true },
        { name: 'HRMS (Staff, Leave & Attendance)', included: true },
        { name: 'Helpdesk & Ticket SLA Queues', included: true },
        { name: 'Team Insights & Dashboards', included: true },
        { name: 'Manufacturing (BOM)', included: false }
      ],
      workspaceHubs: [
        '1. Command Centre',
        '2. Sales Hub',
        '3. Customer Hub',
        '4. Billing & Finance',
        '5. Operations & Task Boards',
        '6. Team & Staff (HR)',
        '7. Products & Stock Movement',
        '8. Support & Helpdesk Centre',
        '11. Client Self-Service Portal'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise OS',
      target: 'Multi-Branch Operations, Established Firms & Enterprises',
      description: 'Full-scale enterprise capability with advanced business intelligence, custom domain integration, custom workflows, and dedicated technical leadership.',
      pricing: {
        monthly: 749,
        monthlyGross: 898.80,
        annualTotal: 7490,
        annualMonthlyEquiv: 624.17,
        annualSavingsAmount: 1498
      },
      userSeats: 'Unlimited User Seats',
      storage: '100 GB Document Vault',
      infrastructure: 'Dedicated Cloud Environment & Custom Domain Support',
      popular: false,
      ctaText: 'Deploy Enterprise OS',
      keyBenefits: [
        'Everything in Growth OS included',
        'Executive BI & Custom SQL Analytics',
        'Multi-Branch & Multi-Entity Management',
        'Full Payroll & Staff Training (LMS)',
        'VoIP Telephony Call Logging Integration',
        'Dedicated Technical Lead & Priority SLA'
      ],
      stackEntitlements: [
        { name: 'Frappe Framework v15 Core', included: true },
        { name: 'BizzLoop Client Experience', included: true },
        { name: 'Full Accounting & Asset Management', included: true },
        { name: 'Multi-Currency Trading & Purchasing', included: true },
        { name: 'Automated Lead Routing & Scoring', included: true },
        { name: 'Multi-Gateway & Subscription Billing', included: true },
        { name: 'Document Vault (100 GB)', included: true },
        { name: 'Multi-Warehouse, Batch & Serial Tracking', included: true },
        { name: 'Full Payroll & Performance HRMS', included: true },
        { name: 'Custom SLA & Automated Queues', included: true },
        { name: 'Executive BI & SQL Visualiser', included: true },
        { name: 'Staff LMS & SOP Training Modules', included: true }
      ],
      workspaceHubs: [
        '1. Command Centre',
        '2. Sales Hub',
        '3. Customer Hub',
        '4. Billing & Finance',
        '5. Operations & Tasks',
        '6. Team & Staff (HR)',
        '7. Products & Stock',
        '8. Support Centre',
        '9. Executive BI Hub',
        '10. Learning & Training LMS',
        '11. Client Portal'
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopPlans;
}
