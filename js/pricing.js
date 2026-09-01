/**
 * BizzLoop Pricing Engine (js/pricing.js)
 * Interactive Monthly / Annual Pricing Toggle in GBP (£)
 * Fully compatible with both /plans/ hub and homepage.
 */

const BizzLoopPricing = (() => {
  'use strict';

  let currentCycle = 'monthly'; // 'monthly' | 'yearly'

  const planPricing = {
    starter: {
      monthly: '£149',
      annualTotal: '£1,490',
      periodMonthly: '/ month + VAT',
      periodAnnual: '/ year + VAT (Save £298)',
      periodMonthlyShort: '/month',
      periodAnnualShort: '/year',
      subtextMonthly: 'Billed monthly · Cancel anytime',
      subtextAnnual: 'Billed annually (£1,490/yr) · 2 Months Free',
      savingsText: '2 Months Free · Save £298'
    },
    growth: {
      monthly: '£349',
      annualTotal: '£3,490',
      periodMonthly: '/ month + VAT',
      periodAnnual: '/ year + VAT (Save £698)',
      periodMonthlyShort: '/month',
      periodAnnualShort: '/year',
      subtextMonthly: 'Billed monthly · Cancel anytime',
      subtextAnnual: 'Billed annually (£3,490/yr) · 2 Months Free',
      savingsText: '2 Months Free · Save £698'
    },
    enterprise: {
      monthly: '£749',
      annualTotal: '£7,490',
      periodMonthly: '/ month + VAT',
      periodAnnual: '/ year + VAT (Save £1,498)',
      periodMonthlyShort: '/month',
      periodAnnualShort: '/year',
      subtextMonthly: 'Billed monthly · Cancel anytime',
      subtextAnnual: 'Billed annually (£7,490/yr) · 2 Months Free',
      savingsText: '2 Months Free · Save £1,498'
    }
  };

  function setBillingCycle(cycle) {
    currentCycle = (cycle === 'annual' || cycle === 'yearly') ? 'yearly' : 'monthly';
    const isAnnual = currentCycle === 'yearly';

    // 1. Update Switch / Toggle Buttons
    const switchBtns = document.querySelectorAll('#billingSwitchBtn, #billingToggleBtn, .pricing-switch-btn');
    switchBtns.forEach(btn => {
      btn.setAttribute('aria-checked', isAnnual ? 'true' : 'false');
      if (isAnnual) {
        btn.classList.add('active');
        btn.classList.remove('bg-slate-200');
      } else {
        btn.classList.remove('active');
      }
    });

    // 2. Update Labels
    const monthlyLabels = document.querySelectorAll('#billingLabelMonthly, #monthlyToggleLabel');
    const yearlyLabels = document.querySelectorAll('#billingLabelYearly, #annualToggleLabel');

    monthlyLabels.forEach(el => {
      if (isAnnual) {
        el.classList.remove('active', 'text-slate-900', 'font-extrabold');
        el.classList.add('text-slate-500');
        el.setAttribute('aria-pressed', 'false');
      } else {
        el.classList.add('active', 'text-slate-900');
        el.classList.remove('text-slate-500');
        el.setAttribute('aria-pressed', 'true');
      }
    });

    yearlyLabels.forEach(el => {
      if (isAnnual) {
        el.classList.add('active', 'text-slate-900');
        el.classList.remove('text-slate-500');
        el.setAttribute('aria-pressed', 'true');
      } else {
        el.classList.remove('active', 'text-slate-900');
        el.classList.add('text-slate-500');
        el.setAttribute('aria-pressed', 'false');
      }
    });

    const billingSubtitle = document.getElementById('billingCycleSubtitle');
    if (billingSubtitle) {
      billingSubtitle.textContent = isAnnual
        ? 'Annual commitment gives you 12 months for the price of 10 (16.7% discount).'
        : 'Monthly rolling subscription. Adjust or cancel anytime with 30 days notice.';
    }

    // 3. Update Plan Prices in DOM with smooth transition
    ['starter', 'growth', 'enterprise'].forEach(tierKey => {
      const data = planPricing[tierKey];

      const priceEls = document.querySelectorAll(`.price-val-${tierKey}, .dynamic-price-${tierKey}`);
      const periodEls = document.querySelectorAll(`.price-period-${tierKey}, .dynamic-period-${tierKey}`);
      const subtextEls = document.querySelectorAll(`.dynamic-billing-subtext-${tierKey}`);

      priceEls.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(-2px)';
        el.style.transition = 'all 0.15s ease';

        setTimeout(() => {
          el.textContent = isAnnual ? data.annualTotal : data.monthly;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 100);
      });

      periodEls.forEach(el => {
        el.textContent = isAnnual ? data.periodAnnual : data.periodMonthly;
      });

      subtextEls.forEach(el => {
        el.textContent = isAnnual ? data.subtextAnnual : data.subtextMonthly;
      });
    });

    // 4. Toggle Savings Badges
    document.querySelectorAll('.plan-savings-badge').forEach(el => {
      if (isAnnual) {
        el.classList.remove('hidden');
        el.style.display = 'inline-block';
        el.style.opacity = '1';
      } else {
        el.classList.add('hidden');
        el.style.display = 'none';
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

    // Attach to all toggle switches
    const toggleButtons = document.querySelectorAll('#billingSwitchBtn, #billingToggleBtn, .pricing-switch-btn');
    toggleButtons.forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        toggle();
      };
      btn.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      };
    });

    // Monthly label clicks
    const monthlyLabels = document.querySelectorAll('#billingLabelMonthly, #monthlyToggleLabel');
    monthlyLabels.forEach(el => {
      el.style.cursor = 'pointer';
      el.onclick = (e) => {
        e.preventDefault();
        setBillingCycle('monthly');
      };
    });

    // Yearly label clicks
    const yearlyLabels = document.querySelectorAll('#billingLabelYearly, #annualToggleLabel');
    yearlyLabels.forEach(el => {
      el.style.cursor = 'pointer';
      el.onclick = (e) => {
        e.preventDefault();
        setBillingCycle('yearly');
      };
    });

    // Initialize state
    setBillingCycle(currentCycle);
  }

  return {
    init,
    toggle,
    setBillingCycle,
    isAnnual: () => currentCycle === 'yearly'
  };
})();

// Auto-init on load
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => BizzLoopPricing.init());
  } else {
    BizzLoopPricing.init();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopPricing;
}
