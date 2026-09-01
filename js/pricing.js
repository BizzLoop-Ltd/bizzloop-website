/**
 * BizzLoop Pricing Engine (js/pricing.js)
 * Interactive Monthly / Annual Pricing Toggle with UK VAT Calculations
 */

const BizzLoopPricing = (() => {
  'use strict';

  let isAnnual = false;

  const planPricing = {
    starter: {
      monthly: '£149',
      annualTotal: '£1,490',
      periodMonthly: '/month',
      periodAnnual: '/year',
      savingsText: 'Save £298 (2 Months Free)',
      vatMonthly: '£29.80/mo VAT',
      vatAnnual: '£298.00/yr VAT'
    },
    growth: {
      monthly: '£349',
      annualTotal: '£3,490',
      periodMonthly: '/month',
      periodAnnual: '/year',
      savingsText: 'Save £698 (2 Months Free)',
      vatMonthly: '£69.80/mo VAT',
      vatAnnual: '£698.00/yr VAT'
    },
    enterprise: {
      monthly: '£749',
      annualTotal: '£7,490',
      periodMonthly: '/month',
      periodAnnual: '/year',
      savingsText: 'Save £1,498 (2 Months Free)',
      vatMonthly: '£149.80/mo VAT',
      vatAnnual: '£1,498.00/yr VAT'
    }
  };

  function setBillingPeriod(annual) {
    isAnnual = annual;
    updateUI();
  }

  function toggle() {
    isAnnual = !isAnnual;
    updateUI();
  }

  function updateUI() {
    const toggleCheckbox = document.getElementById('pricing-checkbox');
    const toggleSwitchBtn = document.getElementById('billingSwitchBtn');
    const labelMonthly = document.getElementById('billingLabelMonthly');
    const labelYearly = document.getElementById('billingLabelYearly');
    const billingSubtitle = document.getElementById('billingCycleSubtitle');

    if (toggleCheckbox) {
      toggleCheckbox.checked = isAnnual;
    }

    if (toggleSwitchBtn) {
      toggleSwitchBtn.setAttribute('aria-checked', isAnnual.toString());
      if (isAnnual) {
        toggleSwitchBtn.classList.add('active');
      } else {
        toggleSwitchBtn.classList.remove('active');
      }
    }

    if (labelMonthly && labelYearly) {
      if (isAnnual) {
        labelMonthly.classList.remove('active');
        labelYearly.classList.add('active');
        labelMonthly.setAttribute('aria-pressed', 'false');
        labelYearly.setAttribute('aria-pressed', 'true');
      } else {
        labelMonthly.classList.add('active');
        labelYearly.classList.remove('active');
        labelMonthly.setAttribute('aria-pressed', 'true');
        labelYearly.setAttribute('aria-pressed', 'false');
      }
    }

    if (billingSubtitle) {
      billingSubtitle.textContent = isAnnual 
        ? 'Annual commitment gives you 12 months for the price of 10 (16.7% discount).'
        : 'Monthly rolling subscription. Adjust or cancel anytime with 30 days notice.';
    }

    // Update Starter Plan
    document.querySelectorAll('.price-val-starter').forEach(el => {
      el.textContent = isAnnual ? planPricing.starter.annualTotal : planPricing.starter.monthly;
    });
    document.querySelectorAll('.price-period-starter').forEach(el => {
      el.textContent = isAnnual ? planPricing.starter.periodAnnual : planPricing.starter.periodMonthly;
    });

    // Update Growth Plan
    document.querySelectorAll('.price-val-growth').forEach(el => {
      el.textContent = isAnnual ? planPricing.growth.annualTotal : planPricing.growth.monthly;
    });
    document.querySelectorAll('.price-period-growth').forEach(el => {
      el.textContent = isAnnual ? planPricing.growth.periodAnnual : planPricing.growth.periodMonthly;
    });

    // Update Enterprise Plan
    document.querySelectorAll('.price-val-enterprise').forEach(el => {
      el.textContent = isAnnual ? planPricing.enterprise.annualTotal : planPricing.enterprise.monthly;
    });
    document.querySelectorAll('.price-period-enterprise').forEach(el => {
      el.textContent = isAnnual ? planPricing.enterprise.periodAnnual : planPricing.enterprise.periodMonthly;
    });

    // Toggle savings badges
    document.querySelectorAll('.plan-savings-badge').forEach(el => {
      if (isAnnual) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
  }

  function init() {
    const toggleCheckbox = document.getElementById('pricing-checkbox');
    if (toggleCheckbox) {
      toggleCheckbox.addEventListener('change', (e) => {
        setBillingPeriod(e.target.checked);
      });
    }

    const labelMonthly = document.getElementById('billingLabelMonthly');
    const labelYearly = document.getElementById('billingLabelYearly');
    const toggleSwitchBtn = document.getElementById('billingSwitchBtn');

    if (labelMonthly) labelMonthly.addEventListener('click', () => setBillingPeriod(false));
    if (labelYearly) labelYearly.addEventListener('click', () => setBillingPeriod(true));
    if (toggleSwitchBtn) toggleSwitchBtn.addEventListener('click', toggle);

    updateUI();
  }

  return {
    init,
    toggle,
    setBillingPeriod,
    isAnnual: () => isAnnual
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopPricing;
}
