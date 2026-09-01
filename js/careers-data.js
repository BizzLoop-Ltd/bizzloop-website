/**
 * BizzLoop Careers & Internships Data (js/careers-data.js)
 * UK Hybrid & Remote Opportunities
 */

const BizzLoopCareers = {
  culture: {
    headline: 'Build the Future of UK Business Software',
    subheading: 'Join a passionate, pragmatic UK team building accessible business operating systems for British SMEs.',
    perks: [
      { icon: 'ti ti-map-pin', title: 'UK Hybrid & Remote', desc: 'Work flexibly from London, Manchester, or remote UK.' },
      { icon: 'ti ti-currency-pound', title: 'Competitive UK Pay', desc: 'Transparent compensation + performance bonus.' },
      { icon: 'ti ti-school', title: '£1,500 Learning Fund', desc: 'Annual budget for courses, books, and certifications.' },
      { icon: 'ti ti-heart-handshake', title: 'Full UK Benefits', desc: '28 days statutory leave, workplace pension, and health perks.' }
    ]
  },
  roles: [
    {
      id: 'bde-fulltime',
      title: 'Business Development Executive',
      type: 'Full-Time',
      category: 'Commercial & Sales',
      salary: '£28,000 – £35,000 / yr + OTE',
      location: 'London / Hybrid UK',
      summary: 'Engage UK SME founders, conduct consultative software demos, and guide business owners toward modern digital operations.',
      responsibilities: [
        'Conduct 30-minute discovery and demonstration calls with UK business owners',
        'Identify administrative and operational bottlenecks in client workflows',
        'Build and maintain strong customer relationships through the onboarding phase',
        'Collaborate with the product engineering team to feedback user requests'
      ],
      requirements: [
        '1-2 years experience in B2B sales, account management, or consultative customer success',
        'Exceptional written and spoken English communication skills',
        'Familiarity with CRM, invoicing, or operational workflows',
        'A consultative, customer-first approach to business problem solving'
      ]
    },
    {
      id: 'software-dev-fulltime',
      title: 'Software Developer (Full-Stack)',
      type: 'Full-Time',
      category: 'Engineering',
      salary: '£35,000 – £48,000 / yr',
      location: 'Remote / Hybrid UK',
      summary: 'Build and optimize client-facing web applications, workflow automation engines, and integrations for the BizzLoop ecosystem.',
      responsibilities: [
        'Develop responsive web interfaces using modern JavaScript, CSS design tokens, and semantic HTML',
        'Build webhook integrations, form pipelines, and data sync workers',
        'Maintain high system availability and robust security standards across cloud infrastructure',
        'Maintain automated test coverage and assist with continuous deployment'
      ],
      requirements: [
        '2+ years of professional full-stack development experience (JavaScript/Python/PHP)',
        'Strong knowledge of relational databases (MariaDB/PostgreSQL) and API architectures',
        'Experience building clean, accessible UI components (WCAG 2.1 standards)',
        'Familiarity with Frappe Framework or ERPNext is a major bonus'
      ]
    },
    {
      id: 'intern-bd',
      title: 'Business Development Intern',
      type: 'Paid Internship',
      category: 'Commercial',
      salary: 'Real Living Wage (£12.60/hr) · 6 Months',
      location: 'London / Hybrid UK',
      summary: 'Learn core UK SME market analysis, client outreach strategies, and consultative software demonstration.',
      responsibilities: [
        'Research UK business sectors to understand their operational software needs',
        'Assist senior consultants during live product walkthroughs',
        'Prepare customized workflow diagrams for prospective clients',
        'Maintain lead database accuracy in BizzLoop CRM'
      ],
      requirements: [
        'Recent graduate or final-year student in Business, Marketing, or related discipline',
        'Curious, organized, and enthusiastic about small business innovation',
        'Confident verbal communicator'
      ]
    },
    {
      id: 'intern-marketing',
      title: 'Digital Marketing & Content Intern',
      type: 'Paid Internship',
      category: 'Marketing',
      salary: 'Real Living Wage (£12.60/hr) · 6 Months',
      location: 'Remote / Hybrid UK',
      summary: 'Assist with SEO content writing, social media scheduling, email newsletter campaigns, and case study production.',
      responsibilities: [
        'Draft practical business guides and case studies tailored for small business owners',
        'Coordinate the BizzLoop editorial calendar across LinkedIn and Instagram',
        'Assist with on-page SEO keyword research and metadata optimisation',
        'Track campaign conversion performance and user engagement metrics'
      ],
      requirements: [
        'Strong written communication skills in natural UK English',
        'Basic familiarity with design tools, social media channels, and SEO principles',
        'Enthusiasm for storytelling and digital marketing'
      ]
    },
    {
      id: 'intern-software',
      title: 'Software Development Intern',
      type: 'Paid Internship',
      category: 'Engineering',
      salary: 'Real Living Wage (£12.60/hr) · 6 Months',
      location: 'Remote / Hybrid UK',
      summary: 'Gain hands-on coding experience building UI features, interactive dashboards, and automated testing scripts.',
      responsibilities: [
        'Contribute to frontend UI components using modern HTML, CSS tokens, and JavaScript',
        'Write automated test suites and assist with bug triaging',
        'Help document API endpoints and integration workflows',
        'Participate in daily engineering standups and code reviews'
      ],
      requirements: [
        'Foundational knowledge of HTML, CSS, JavaScript, and Git version control',
        'Degree or coding bootcamp in Computer Science, Software Engineering, or equivalent practical portfolio',
        'Keen desire to learn scalable cloud software engineering'
      ]
    },
    {
      id: 'intern-ops',
      title: 'Operations & Customer Support Intern',
      type: 'Paid Internship',
      category: 'Operations',
      salary: 'Real Living Wage (£12.60/hr) · 6 Months',
      location: 'Hybrid UK',
      summary: 'Learn business operations, customer onboarding workflows, helpdesk ticket management, and documentation.',
      responsibilities: [
        'Assist new clients with account setup and initial data import',
        'Create helpful step-by-step user tutorials and knowledge base guides',
        'Triage customer support tickets with polite, effective solutions',
        'Collect customer feedback to guide future platform improvements'
      ],
      requirements: [
        'Superb organizational and problem-solving skills',
        'Empathetic customer-first mindset',
        'Comfortable working with digital tools and web software'
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopCareers;
}
