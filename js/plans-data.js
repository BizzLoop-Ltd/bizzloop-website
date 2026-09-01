/**
 * BizzLoop Plans & Capabilities Matrix (js/plans-data.js)
 * Clean, verified commercial tiers in GBP (£) without unsupported tax/compliance claims
 */

const BizzLoopPlans = {
  currency: '£',
  currencyCode: 'GBP',
  annualSavingsRatio: '16.7%',
  annualSavingsText: '2 Months Free · Save 16.7%',
  tiers: [
    {
      id: 'starter',
      name: 'Starter Plan',
      target: 'Small Businesses, Sole Traders & Consultants',
      description: 'The essential connected platform to capture enquiries, organise customer leads, and manage billing workflows.',
      pricing: {
        monthly: 149,
        annualTotal: 1490,
        annualMonthlyEquiv: 124.17,
        annualSavingsAmount: 298
      },
      userSeats: 'Up to 5 User Seats',
      storage: '5 GB',
      infrastructure: 'Dedicated Isolated Subdomain & Workspace',
      popular: false,
      ctaText: 'Get Started with Starter',
      keyBenefits: [
        'Centralised Customer Workspace & CRM',
        'Website Lead Capture & Smart Routing',
        'Invoices & Billing Workflows',
        'Basic Task & Operational Records',
        'Guided Onboarding & Technical Support'
      ],
      stackEntitlements: [
        { name: 'Frappe Framework v15 Core', included: true },
        { name: 'BizzLoop Client Experience', included: true },
        { name: 'Invoices & Billing Workflows', included: true },
        { name: 'Sales Quotations & Orders', included: true },
        { name: 'Frappe CRM (Leads & Contacts)', included: true },
        { name: 'Cloud Storage (5 GB)', included: true },
        { name: 'Stock & Inventory Management', included: false },
        { name: 'Team Staff & Attendance (HR)', included: false },
        { name: 'Helpdesk & Ticket Queues', included: false },
        { name: 'Executive BI & Custom Dashboards', included: false }
      ],
      workspaceHubs: [
        'Command Centre (Overview & Quick Actions)',
        'Sales & Enquiry Hub (Tracking & Deal Pipeline)',
        'Customer Hub (Contact Directory & Logs)',
        'Billing & Invoices Hub',
        'Client Self-Service Portal'
      ]
    },
    {
      id: 'growth',
      name: 'Growth Plan',
      target: 'Growing Businesses, Trade & Multi-Team Firms',
      description: 'The complete connected system for scaling businesses needing multi-user collaboration, inventory, staff records, and automated workflows.',
      pricing: {
        monthly: 349,
        annualTotal: 3490,
        annualMonthlyEquiv: 290.83,
        annualSavingsAmount: 698
      },
      userSeats: 'Up to 15 User Seats',
      storage: '25 GB',
      infrastructure: 'Dedicated Cloud Instance',
      popular: true,
      badge: 'MOST POPULAR',
      ctaText: 'Deploy Growth Plan',
      keyBenefits: [
        'Everything in Starter Plan included',
        'Stock & Inventory Management',
        'Team HR, Attendance & Leave Records',
        'Project Task Boards & Collaboration',
        'Helpdesk Support Ticket System',
        'Priority Onboarding & Dedicated Support'
      ],
      stackEntitlements: [
        { name: 'Frappe Framework v15 Core', included: true },
        { name: 'BizzLoop Client Experience', included: true },
        { name: 'Invoices & Billing Workflows', included: true },
        { name: 'Sales & Purchase Orders', included: true },
        { name: 'Frappe CRM (Pipelines & Routing)', included: true },
        { name: 'Cloud Storage (25 GB)', included: true },
        { name: 'Stock & Inventory Management', included: true },
        { name: 'Team Staff & Attendance (HR)', included: true },
        { name: 'Helpdesk & Support Queues', included: true },
        { name: 'Executive BI & Custom Dashboards', included: false }
      ],
      workspaceHubs: [
        'Command Centre',
        'Sales & Enquiry Hub',
        'Customer Hub',
        'Billing & Invoices Hub',
        'Operations & Task Boards',
        'Team & Staff Management',
        'Products & Stock Inventory',
        'Helpdesk Support Hub',
        'Client Self-Service Portal'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      target: 'Multi-Branch Operations & Established Enterprises',
      description: 'Full enterprise capability with executive reporting, custom domain support, expanded capacity, and dedicated technical leadership.',
      pricing: {
        monthly: 749,
        annualTotal: 7490,
        annualMonthlyEquiv: 624.17,
        annualSavingsAmount: 1498
      },
      userSeats: 'Unlimited User Seats',
      storage: '100 GB',
      infrastructure: 'Dedicated Cloud Environment & Custom Domain Support',
      popular: false,
      ctaText: 'Deploy Enterprise Plan',
      keyBenefits: [
        'Everything in Growth Plan included',
        'Executive Reporting & Business Intelligence',
        'Multi-Branch & Multi-Entity Management',
        'Staff Learning & Training Modules',
        'Custom Workflow Configurations',
        'Dedicated Technical Lead & Priority SLA'
      ],
      stackEntitlements: [
        { name: 'Frappe Framework v15 Core', included: true },
        { name: 'BizzLoop Client Experience', included: true },
        { name: 'Invoices & Billing Workflows', included: true },
        { name: 'Sales & Purchasing Workflows', included: true },
        { name: 'Frappe CRM (Advanced Routing)', included: true },
        { name: 'Cloud Storage (100 GB)', included: true },
        { name: 'Stock & Inventory Management', included: true },
        { name: 'Team Staff & Attendance (HR)', included: true },
        { name: 'Helpdesk & Custom Ticket Queues', included: true },
        { name: 'Executive BI & Custom Reporting', included: true }
      ],
      workspaceHubs: [
        'Command Centre',
        'Sales & Enquiry Hub',
        'Customer Hub',
        'Billing & Invoices Hub',
        'Operations & Tasks',
        'Team & Staff Management',
        'Products & Stock Inventory',
        'Helpdesk Support Hub',
        'Executive Reporting Hub',
        'Client Self-Service Portal'
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopPlans;
}
