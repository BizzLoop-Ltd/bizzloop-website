/**
 * BizzLoop Core Services & Action Cards (js/action-cards-data.js)
 * 8 Compact, benefit-focused service cards with workflow pipelines & miniature UI previews
 */

const BizzLoopActionCards = [
  {
    id: 'crm',
    number: '01',
    title: 'CRM & Customer Management',
    color: '#1451D8',
    bgLight: '#EFF6FF',
    icon: 'ti ti-users',
    description: 'Keep leads, contacts, enquiries and customer information organised in one connected workspace.',
    workflow: ['Lead', 'Contact', 'Opportunity', 'Customer'],
    miniUI: {
      tag: 'New Enquiry',
      title: 'John Smith · Design Studio',
      detail: 'Website Form · Follow-up Today',
      status: 'Active Deal'
    }
  },
  {
    id: 'business-management',
    number: '02',
    title: 'Business Management',
    color: '#04A5C2',
    bgLight: '#E0F7FA',
    icon: 'ti ti-layout-kanban',
    description: 'Bring important business activities, tasks, records and operational workflows together in one place.',
    workflow: ['Request', 'Task', 'Operation', 'Completion'],
    miniUI: {
      tag: 'Operations Task',
      title: 'Client Project Milestones',
      detail: 'Team Assigned · 4/5 Complete',
      status: 'In Progress'
    }
  },
  {
    id: 'website',
    number: '03',
    title: 'Website & Lead Capture',
    color: '#10B981',
    bgLight: '#ECFDF5',
    icon: 'ti ti-browser-check',
    description: 'Create a professional digital presence designed to turn website visitors into structured business enquiries.',
    workflow: ['Visitor', 'Website', 'Enquiry', 'Lead'],
    miniUI: {
      tag: 'Lead Engine',
      title: 'Conversion-Ready Intake',
      detail: 'Mobile Optimised · Instant Sync',
      status: 'Ready'
    }
  },
  {
    id: 'seo',
    number: '04',
    title: 'SEO & Search Visibility',
    color: '#8B5CF6',
    bgLight: '#F5F3FF',
    icon: 'ti ti-search',
    description: 'Build a stronger online presence with structured, search-friendly content and ongoing optimisation.',
    workflow: ['Search', 'Discover', 'Visit', 'Enquiry'],
    miniUI: {
      tag: 'Search Visibility',
      title: 'Technical & Local SEO',
      detail: 'Structured Metadata & Sitemaps',
      status: 'Optimised'
    }
  },
  {
    id: 'digital-marketing',
    number: '05',
    title: 'Digital Marketing',
    color: '#F59E0B',
    bgLight: '#FFFBEB',
    icon: 'ti ti-chart-arrows-vertical',
    description: 'Plan and manage digital marketing activity designed to attract, engage and retain customers.',
    workflow: ['Audience', 'Campaign', 'Engagement', 'Lead'],
    miniUI: {
      tag: 'Marketing Flow',
      title: 'Targeted Outreach',
      detail: 'Engaged Prospects · Lifecycle',
      status: 'Active'
    }
  },
  {
    id: 'social-media',
    number: '06',
    title: 'Social Media',
    color: '#EC4899',
    bgLight: '#FDF2F8',
    icon: 'ti ti-share',
    description: 'Organise your social presence and connect content activity with broader customer and marketing workflows.',
    workflow: ['Content', 'Publish', 'Engage', 'Customer'],
    miniUI: {
      tag: 'Content Hub',
      title: 'Editorial Calendar',
      detail: 'Scheduled Posts & Updates',
      status: 'Synced'
    }
  },
  {
    id: 'automation',
    number: '07',
    title: 'Automation & Workflows',
    color: '#10B981',
    bgLight: '#ECFDF5',
    icon: 'ti ti-bolt',
    description: 'Reduce repetitive work by connecting recurring tasks, notifications and business processes.',
    workflow: ['Trigger', 'Automation', 'Action', 'Result'],
    miniUI: {
      tag: 'Smart Autopilot',
      title: 'Enquiry Auto-Routing',
      detail: 'Task Assigned · Notification Sent',
      status: 'Automated'
    }
  },
  {
    id: 'reporting',
    number: '08',
    title: 'Reporting & Business Visibility',
    color: '#1451D8',
    bgLight: '#EFF6FF',
    icon: 'ti ti-chart-pie',
    description: 'Turn business activity into clearer information so teams can understand performance and make better decisions.',
    workflow: ['Data', 'Analyse', 'Insight', 'Decision'],
    miniUI: {
      tag: 'Live Dashboard',
      title: 'Monthly Overview',
      detail: 'Enquiries, Tasks & Team Flow',
      status: 'Updated'
    }
  }
];

// Managed Business Services 4-Part Structure
const BizzLoopManagedServices = [
  {
    id: 'tech',
    number: '01',
    title: 'Technology',
    badge: 'Digital Platform',
    icon: 'ti ti-cpu',
    color: '#1451D8',
    bgLight: '#EFF6FF',
    desc: 'Connected cloud business platform, modern websites, and digital workspace infrastructure.'
  },
  {
    id: 'management',
    number: '02',
    title: 'Management',
    badge: 'Operations',
    icon: 'ti ti-users',
    color: '#04A5C2',
    bgLight: '#E0F7FA',
    desc: 'Customer records, enquiry tracking, operational task coordination, and team workflows.'
  },
  {
    id: 'growth',
    number: '03',
    title: 'Growth',
    badge: 'Acquisition',
    icon: 'ti ti-trending-up',
    color: '#10B981',
    bgLight: '#ECFDF5',
    desc: 'Structured SEO foundations, digital marketing campaigns, social presence, and lead capture.'
  },
  {
    id: 'support',
    number: '04',
    title: 'Support',
    badge: 'Managed Services',
    icon: 'ti ti-headset',
    color: '#F59E0B',
    bgLight: '#FFFBEB',
    desc: 'Ongoing system assistance, setup guidance, workflow configuration, and managed services.'
  }
];

// One Connected Loop Visual Journey (9 Steps)
const BizzLoopLoopSteps = [
  { step: '1', title: 'Discover', desc: 'Search & Visibility' },
  { step: '2', title: 'Visit', desc: 'Website Experience' },
  { step: '3', title: 'Enquire', desc: 'Capture Form' },
  { step: '4', title: 'Capture', desc: 'Structured Lead' },
  { step: '5', title: 'Manage', desc: 'CRM Workspace' },
  { step: '6', title: 'Market', desc: 'Nurture Campaign' },
  { step: '7', title: 'Convert', desc: 'Deal Signed' },
  { step: '8', title: 'Retain', desc: 'Service Delivery' },
  { step: '9', title: 'Grow', desc: 'Connected Scale' }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    BizzLoopActionCards,
    BizzLoopManagedServices,
    BizzLoopLoopSteps
  };
}
