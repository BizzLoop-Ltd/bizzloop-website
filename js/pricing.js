/**
 * BizzLoop Pricing Engine (js/pricing.js)
 * Interactive Monthly / Annual Pricing Toggle in GBP (£)
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
      savingsText: 'Save £298 (2 Months Free)'
    },
    growth: {
      monthly: '£349',
      annualTotal: '£3,490',
      periodMonthly: '/month',
      periodAnnual: '/year',
      savingsText: 'Save £698 (2 Months Free)'
    },
    enterprise: {
      monthly: '£749',
      annualTotal: '£7,490',
      periodMonthly: '/month',
      periodAnnual: '/year',
      savingsText: 'Save £1,498 (2 Months Free)'
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
    const toggleSwitchBtn = document.getElementById('billingSwitchBtn');
    const labelMonthly = document.getElementById('billingLabelMonthly');
    const labelYearly = document.getElementById('billingLabelYearly');
    const billingSubtitle = document.getElementById('billingCycleSubtitle');

    if (toggleSwitchBtn) {
      toggleSwitchBtn.setAttribute('aria-checked', isAnnual.toString());
      const thumb = toggleSwitchBtn.querySelector('.pricing-switch-thumb');
      if (thumb) {
        if (isAnnual) {
          toggleSwitchBtn.classList.add('bg-brand-500');
          toggleSwitchBtn.classList.remove('bg-slate-300');
          thumb.classList.add('translate-x-6');
          thumb.classList.remove('translate-x-0.5');
        } else {
          toggleSwitchBtn.classList.remove('bg-brand-500');
          toggleSwitchBtn.classList.add('bg-slate-300');
          thumb.classList.remove('translate-x-6');
          thumb.classList.add('translate-x-0.5');
        }
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
