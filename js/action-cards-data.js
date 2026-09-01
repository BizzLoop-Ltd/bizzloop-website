/**
 * BizzLoop in Action - 8 Interactive UI Cards Data (js/action-cards-data.js)
 * Connects CRM + ERP + Lead Capture + Website + Social + Marketing + SEO + Automation
 */

const BizzLoopActionCards = [
  {
    id: 'crm',
    number: '01',
    title: 'CRM & Pipeline',
    tagline: 'Keep every lead, contact and conversation organised in one place.',
    badge: 'Customer Hub',
    color: '#1451D8',
    bgLight: '#EFF6FF',
    icon: 'ti ti-users',
    summary: 'Manage leads, contacts, opportunities, customer history and sales pipeline in a single clear view.',
    metrics: { label: 'Response Rate', value: '98%', note: 'Within 5 minutes' },
    features: [
      'Visual sales pipelines and custom deal stages',
      'Unified interaction logs, notes, and call recordings',
      'Automated customer tagging and segmentation',
      'Follow-up reminders so no prospect goes cold'
    ],
    deepDive: {
      headline: 'Transform Client Relationships From Cold Leads to Loyal Advocates',
      problem: 'UK small businesses lose up to 35% of qualified leads simply because follow-ups are delayed or notes are scattered across WhatsApp, spreadsheets, and sticky notes.',
      solution: 'BizzLoop CRM captures incoming enquiries automatically, creates a rich contact record, and assigns immediate follow-up tasks to your team with full historical visibility.',
      keyCapabilities: [
        'Multi-stage deal tracking with drag-and-drop Kanban boards',
        'Direct WhatsApp and email communication logging',
        'Automatic quotation generation directly from deal cards',
        'Custom customer attributes and UK compliance notes'
      ]
    }
  },
  {
    id: 'erp',
    number: '02',
    title: 'ERP & Operations',
    tagline: 'Connect daily business operations, stock, invoices and core processes.',
    badge: 'Operations Hub',
    color: '#04A5C2',
    bgLight: '#E0F7FA',
    icon: 'ti ti-building-warehouse',
    summary: 'Manage purchasing, supplier orders, inventory stock levels, VAT invoicing, and business records.',
    metrics: { label: 'Admin Saved', value: '140h', note: 'Per month average' },
    features: [
      'HMRC-compliant UK VAT invoicing and payment receipts',
      'Real-time multi-warehouse stock balances and alerts',
      'Purchase order workflows and supplier directories',
      'Automated operational task scheduling across staff'
    ],
    deepDive: {
      headline: 'Unify Invoicing, Stock, and Daily Administration',
      problem: 'Operating front-end sales separately from back-end stock and accounting leads to invoice delays, duplicate orders, and cash-flow blindspots.',
      solution: 'When a deal closes in BizzLoop, the system automatically creates the corresponding invoice, reserves stock, and triggers delivery or service schedules in one clean loop.',
      keyCapabilities: [
        'Auto-calculation of UK VAT (20% and zero-rated items)',
        'Low-stock threshold triggers and automatic reordering',
        'Multi-currency support for international UK traders',
        'Complete audit trails and exportable financial ledgers'
      ]
    }
  },
  {
    id: 'lead-capture',
    number: '03',
    title: 'Lead Capture',
    tagline: 'Capture enquiries from your website and digital channels automatically.',
    badge: 'Growth Engine',
    color: '#10B981',
    bgLight: '#ECFDF5',
    icon: 'ti ti-magnet',
    summary: 'Turn website visitors, ad clicks, and directory searches into qualified sales enquiries instantly.',
    metrics: { label: 'Enquiry Capture', value: '3.4x', note: 'Higher conversion' },
    features: [
      'High-converting interactive enquiry forms and booking widgets',
      'Instant WhatsApp and SMS team lead alert webhooks',
      'UTM campaign and referral source tracking',
      'Automated qualification quizzes and intake surveys'
    ],
    deepDive: {
      headline: 'Zero Lead Leakage Across Every Customer Touchpoint',
      problem: 'Prospects who fill out a contact form often wait hours or days for a response, by which time they have contacted a competitor.',
      solution: 'BizzLoop Lead Capture delivers real-time notifications to your phone or desktop within seconds of submission, while sending the prospect an instant confirmation email and WhatsApp text.',
      keyCapabilities: [
        'Embeddable smart forms with conditional question logic',
        'Spam protection and verified UK phone number formatting',
        'Automated routing to the correct team member based on industry or service type',
        'Instant confirmation popups and automated booking links'
      ]
    }
  },
  {
    id: 'website',
    number: '04',
    title: 'Website Engine',
    tagline: 'Build a fast, professional online presence engineered to convert.',
    badge: 'Digital Presence',
    color: '#8B5CF6',
    bgLight: '#F5F3FF',
    icon: 'ti ti-browser-check',
    summary: 'A modern, mobile-first website connected directly to your CRM, lead forms, and service catalogue.',
    metrics: { label: 'Page Speed', value: '99/100', note: 'Mobile Google score' },
    features: [
      'Mobile-first responsive architecture tested on all devices',
      'Integrated service pages, portfolio galleries, and reviews',
      'Built-in SSL, fast UK CDN hosting, and custom domains',
      'Direct sync with your live product and service pricing'
    ],
    deepDive: {
      headline: 'A Modern Business Website That Truly Generates Enquiries',
      problem: 'Most small business websites are static digital brochures that do not connect to back-office systems or convert visitors into paying clients.',
      solution: 'BizzLoop provides modern, conversion-focused website architecture designed specifically for UK service providers and growing companies, directly wired into your operational loop.',
      keyCapabilities: [
        'Clean, accessible design tokens and modern typography',
        'Seamless integration with lead forms and live calendars',
        'Structured schema markup for UK local business indexing',
        'Zero bloated plugins or fragile third-party page builders'
      ]
    }
  },
  {
    id: 'social-media',
    number: '05',
    title: 'Social Media Hub',
    tagline: 'Plan, organize and align your multi-channel social activity.',
    badge: 'Brand Visibility',
    color: '#F59E0B',
    bgLight: '#FFFBEB',
    icon: 'ti ti-share',
    summary: 'Coordinate LinkedIn, Instagram, and digital posts in a structured calendar aligned with your sales goals.',
    metrics: { label: 'Consistency', value: '4x', note: 'Posting regularity' },
    features: [
      'Visual content calendar and campaign scheduling boards',
      'Pre-approved brand templates and promotional copy drafts',
      'Lead campaign coordination across social channels',
      'Centralized asset vault for banners, logos, and case studies'
    ],
    deepDive: {
      headline: 'Coordinate Brand Visibility Without the Chaos',
      problem: 'Business owners struggle to maintain consistent social visibility because content planning is disconnected from their day-to-day work.',
      solution: 'The BizzLoop Social Media Hub gives you a clean editorial calendar where you can draft, schedule, and review your company updates alongside active sales promotions.',
      keyCapabilities: [
        'Monthly and weekly visual scheduling views',
        'Asset library with automatic resizing for LinkedIn and Instagram',
        'Direct link from social campaigns to specific website landing pages',
        'Team collaboration and approval workflows for agency partners'
      ]
    }
  },
  {
    id: 'digital-marketing',
    number: '06',
    title: 'Digital Marketing',
    tagline: 'Connect customer journeys, campaigns and automated follow-ups.',
    badge: 'Lifecycle Marketing',
    color: '#1451D8',
    bgLight: '#EFF6FF',
    icon: 'ti ti-chart-arrows-vertical',
    summary: 'Coordinate email campaigns, customer re-engagement loops, and promotional announcements seamlessly.',
    metrics: { label: 'Re-engagement', value: '+42%', note: 'Repeat business' },
    features: [
      'Automated email welcome sequences and onboarding flows',
      'Customer re-engagement triggers based on purchase history',
      'Segmented promotional campaigns for specific client types',
      'Transparent click, open, and revenue attribution metrics'
    ],
    deepDive: {
      headline: 'Drive Repeat Business and Maximise Customer Lifetime Value',
      problem: 'Most UK SMEs only market to prospects once, neglecting their existing client base which holds the highest-margin repeat revenue.',
      solution: 'BizzLoop automatically identifies dormant customers, milestone dates, and service renewal cycles, triggering timely, personalised marketing messages.',
      keyCapabilities: [
        'Automated review request workflows following completed jobs',
        'Segmented broadcasts to existing customer lists',
        'Personalised merge tags (Name, Service, Renewal Date)',
        'Full GDPR consent tracking and one-click unsubscribe handling'
      ]
    }
  },
  {
    id: 'seo',
    number: '07',
    title: 'SEO & Visibility',
    tagline: 'Improve your local search visibility and attract high-intent traffic.',
    badge: 'Search Presence',
    color: '#04A5C2',
    bgLight: '#E0F7FA',
    icon: 'ti ti-search',
    summary: 'Technical on-page SEO, local UK business search alignment, and structured data optimization.',
    metrics: { label: 'Organic Growth', value: '+85%', note: '6-month benchmark' },
    features: [
      'UK local business schema markup and geo-tagging',
      'Semantic heading hierarchy, meta tags, and Open Graph cards',
      'Core Web Vitals optimisation for lightning-fast mobile scores',
      'Content keyword strategy templates for UK service niches'
    ],
    deepDive: {
      headline: 'Sustainable Organic Search Ranking for UK Marketplaces',
      problem: 'Many agencies make false promises like "Rank #1 on Google in 24 hours". Sustainable growth requires solid technical architecture and local relevance.',
      solution: 'BizzLoop builds your digital presence on clean, semantic HTML5, high-speed CDN assets, and structured schema so search engines accurately index your UK business services.',
      keyCapabilities: [
        'Local authority signals and UK geo-targeting metadata',
        'Fast server response times under 200ms',
        'Automatic XML sitemap and robots.txt generation',
        'Accessible, mobile-optimised content structures'
      ]
    }
  },
  {
    id: 'automation',
    number: '08',
    title: 'Business Automation',
    tagline: 'Connect repetitive processes and eliminate hours of manual admin.',
    badge: 'Smart Autopilot',
    color: '#10B981',
    bgLight: '#ECFDF5',
    icon: 'ti ti-bolt',
    summary: 'Automate invoice reminders, lead routing, task creation, and cross-department data synchronization.',
    metrics: { label: 'Tasks Synced', value: '1,420', note: 'Monthly avg per team' },
    features: [
      'Trigger-based auto-responders for new customer enquiries',
      'Overdue payment reminders with direct online payment links',
      'Staff appointment reminders and calendar synchronisation',
      'Real-time webhook notifications to mobile and desktop'
    ],
    deepDive: {
      headline: 'Put Repetitive Business Routines on Autopilot',
      problem: 'Administrative drag slows down growing businesses. Staff spend hours copying contact info, sending invoice reminders, and checking project statuses.',
      solution: 'BizzLoop Automation handles routine communications, ledger updates, and status changes behind the scenes, allowing your team to focus on serving customers.',
      keyCapabilities: [
        'Visual workflow builder with If/Then trigger logic',
        'Pre-built automation recipes for UK trade and professional services',
        'Automated receipt generation and balance updates',
        'Instant exception alerts when high-value actions need human attention'
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopActionCards;
}
