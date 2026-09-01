/**
 * BizzLoop Global Configuration & Constants (js/config.js)
 * Official Entity: BIZZLOOP LTD (Company No. 17319641)
 * Position: Managed Business Services Platform
 */

const BizzLoopConfig = {
  company: {
    name: 'BIZZLOOP LTD',
    brandName: 'BizzLoop',
    tagline: 'Manage your customers, digital presence, marketing and business workflows through one connected platform.',
    category: 'Managed Business Services Platform',
    companyNumber: '17319641',
    incorporatedIn: 'England & Wales',
    registeredCountry: 'United Kingdom',
    email: 'info@bizzloop.co.uk',
    phoneDisplay: '+44 7586 476247',
    whatsappNumber: '447586476247',
    whatsappUrl: 'https://wa.me/447586476247?text=Hello%20BizzLoop%20team,%20I%20would%20like%20to%20learn%20more%20about%20your%20Managed%20Business%20Services%20Platform.',
    websiteUrl: 'https://bizzloop.co.uk',
    year: new Date().getFullYear()
  },
  socials: {
    linkedin: 'https://www.linkedin.com/company/bizzloopltd/',
    instagram: 'https://www.instagram.com/bizzloopltd?utm_source=qr'
  },
  commercial: {
    currency: 'GBP',
    currencySymbol: '£',
    annualDiscountPercent: 16.7, // 10 months billed for 12 months service (2 months free)
    annualDiscountLabel: 'Save 16.7% · 2 Months Free',
    plans: {
      starter: {
        id: 'starter',
        name: 'Starter Plan',
        monthly: 149,
        annualTotal: 1490,
        annualMonthlyEquivalent: 124.17,
        userSeats: 'Up to 5 Users',
        storage: '5 GB Vault'
      },
      growth: {
        id: 'growth',
        name: 'Growth Plan',
        monthly: 349,
        annualTotal: 3490,
        annualMonthlyEquivalent: 290.83,
        userSeats: 'Up to 15 Users',
        storage: '25 GB Vault',
        popular: true
      },
      enterprise: {
        id: 'enterprise',
        name: 'Enterprise Plan',
        monthly: 749,
        annualTotal: 7490,
        annualMonthlyEquivalent: 624.17,
        userSeats: 'Unlimited Users',
        storage: '100 GB Vault'
      }
    }
  },
  endpoints: {
    formWebhook: ''
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopConfig;
}
