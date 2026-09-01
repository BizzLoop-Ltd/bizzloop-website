/**
 * BizzLoop Pricing Engine (js/pricing.js)
 * Interactive Monthly / Annual Pricing Toggle in GBP (£)
 */

const BizzLoopPricing = (() => {
  'use strict';

  let currentCycle = 'monthly'; // 'monthly' | 'yearly'

  const planPricing = {
    starter: {
      monthly: '£149',
      annualTotal: '£1,490',
      periodMonthly: '/month',
      periodAnnual: '/year',
      savingsText: '2 Months Free · Save £298'
    },
    growth: {
      monthly: '£349',
      annualTotal: '£3,490',
      periodMonthly: '/month',
      periodAnnual: '/year',
      savingsText: '2 Months Free · Save £698'
    },
    enterprise: {
      monthly: '£749',
      annualTotal: '£7,490',
      periodMonthly: '/month',
      periodAnnual: '/year',
      savingsText: '2 Months Free · Save £1,498'
    }
  };

  function setBillingCycle(cycle) {
    if (cycle !== 'monthly' && cycle !== 'yearly' && cycle !== 'annual') return;
    currentCycle = (cycle === 'annual' || cycle === 'yearly') ? 'yearly' : 'monthly';
    const isAnnual = currentCycle === 'yearly';

    // 1. Update Switch Button UI
    const switchBtn = document.getElementById('billingSwitchBtn');
    const monthlyLabel = document.getElementById('billingLabelMonthly');
    const yearlyLabel = document.getElementById('billingLabelYearly');
    const billingSubtitle = document.getElementById('billingCycleSubtitle');

    if (switchBtn) {
      switchBtn.setAttribute('aria-checked', isAnnual ? 'true' : 'false');
      if (isAnnual) {
        switchBtn.classList.add('active');
      } else {
        switchBtn.classList.remove('active');
      }
    }

    if (monthlyLabel && yearlyLabel) {
      if (isAnnual) {
        yearlyLabel.classList.add('active');
        monthlyLabel.classList.remove('active');
        yearlyLabel.setAttribute('aria-pressed', 'true');
        monthlyLabel.setAttribute('aria-pressed', 'false');
      } else {
        monthlyLabel.classList.add('active');
        yearlyLabel.classList.remove('active');
        monthlyLabel.setAttribute('aria-pressed', 'true');
        yearlyLabel.setAttribute('aria-pressed', 'false');
      }
    }

    if (billingSubtitle) {
      billingSubtitle.textContent = isAnnual 
        ? 'Annual commitment gives you 12 months for the price of 10 (16.7% discount).'
        : 'Monthly rolling subscription. Adjust or cancel anytime with 30 days notice.';
    }

    // 2. Update Plan Prices in DOM with smooth transition
    ['starter', 'growth', 'enterprise'].forEach(tierKey => {
      const data = planPricing[tierKey];
      const priceEls = document.querySelectorAll(`.price-val-${tierKey}`);
      const periodEls = document.querySelectorAll(`.price-period-${tierKey}`);

      priceEls.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(-3px)';
        el.style.transition = 'all 0.15s ease';

        setTimeout(() => {
          el.textContent = isAnnual ? data.annualTotal : data.monthly;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 120);
      });

      periodEls.forEach(el => {
        el.textContent = isAnnual ? data.periodAnnual : data.periodMonthly;
      });
    });

    // 3. Toggle savings badges
    document.querySelectorAll('.plan-savings-badge').forEach(el => {
      if (isAnnual) {
        el.classList.remove('hidden');
        el.style.opacity = '0';
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transition = 'opacity 0.2s ease';
        }, 120);
      } else {
        el.classList.add('hidden');
      }
    });
  }

  function toggle() {
    setBillingCycle(currentCycle === 'monthly' ? 'yearly' : 'monthly');
  }

  let isInitialized = false;

  function init() {
    if (isInitialized) return;
    isInitialized = true;

    const switchBtn = document.getElementById('billingSwitchBtn');
    const monthlyLabel = document.getElementById('billingLabelMonthly');
    const yearlyLabel = document.getElementById('billingLabelYearly');

    if (switchBtn) {
      switchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggle();
      });
      switchBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    }

    if (monthlyLabel) {
      monthlyLabel.addEventListener('click', (e) => {
        e.preventDefault();
        setBillingCycle('monthly');
      });
    }

    if (yearlyLabel) {
      yearlyLabel.addEventListener('click', (e) => {
        e.preventDefault();
        setBillingCycle('yearly');
      });
    }

    // Default to monthly
    setBillingCycle('monthly');
  }

  return {
    init,
    toggle,
    setBillingCycle,
    isAnnual: () => currentCycle === 'yearly'
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopPricing;
}
