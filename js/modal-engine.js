/**
 * BizzLoop Unified Modal & SPA Overlay Engine (js/modal-engine.js)
 * Manages modal drawers, deep linking, accessibility focus traps, and full reader overlays
 */

const BizzLoopModals = (() => {
  'use strict';

  let activeModalId = null;

  // Open any modal by ID
  function open(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    // Close any currently active modal first
    if (activeModalId && activeModalId !== modalId) {
      close(activeModalId, false);
    }

    modal.classList.add('open');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    activeModalId = modalId;

    // Focus the first actionable element or close button
    const closeBtn = modal.querySelector('button, [tabindex="0"]');
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 50);
    }
  }

  // Close modal by ID
  function close(modalId, updateHash = true) {
    const id = modalId || activeModalId;
    if (!id) return;

    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove('open');
      setTimeout(() => {
        if (!modal.classList.contains('open')) {
          modal.classList.add('hidden');
        }
      }, 300);
    }

    if (activeModalId === id) {
      activeModalId = null;
      document.body.style.overflow = '';
    }

    if (updateHash && window.location.hash.startsWith('#modal-')) {
      history.replaceState(null, null, ' ');
    }
  }

  // 1. Open Demo / Consultation Modal
  function openDemoModal(prefillTopic = '') {
    const modal = document.getElementById('demoModal');
    if (!modal) return;
    
    const topicSelect = document.getElementById('demoTopicSelect');
    if (topicSelect && prefillTopic) {
      topicSelect.value = prefillTopic;
    }
    open('demoModal');
  }

  // 2. Open "BizzLoop in Action" Card Detail
  function openActionCardDetail(cardId) {
    if (typeof BizzLoopActionCards === 'undefined') return;
    const card = BizzLoopActionCards.find(c => c.id === cardId);
    if (!card) return;

    const container = document.getElementById('actionDetailContent');
    if (!container) return;

    container.innerHTML = `
      <div class="p-6 sm:p-8 space-y-6">
        <!-- Header -->
        <div class="flex items-start justify-between pb-4 border-b border-slate-100">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl shadow-md" style="background:${card.color}">
              <i class="${card.icon}"></i>
            </div>
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">Module ${card.number} · ${card.badge}</span>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">${card.title}</h2>
            </div>
          </div>
          <button onclick="BizzLoopModals.close('actionDetailModal')" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors" aria-label="Close">
            <i class="ti ti-x text-lg"></i>
          </button>
        </div>

        <!-- Tagline & Highlight -->
        <div class="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center justify-between">
          <p class="text-sm font-semibold text-slate-700">${card.tagline}</p>
          <span class="px-3 py-1 rounded-full text-xs font-bold text-brand-600 bg-white border border-blue-200 shrink-0 font-mono">
            ${card.metrics.label}: ${card.metrics.value}
          </span>
        </div>

        <!-- Problem & Solution Deep Dive -->
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="p-5 rounded-2xl bg-red-50/40 border border-red-100 space-y-2">
            <div class="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
              <i class="ti ti-alert-circle"></i> The Traditional Headache
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">${card.deepDive.problem}</p>
          </div>
          <div class="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-100 space-y-2">
            <div class="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wider">
              <i class="ti ti-check"></i> The BizzLoop Connected Way
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">${card.deepDive.solution}</p>
          </div>
        </div>

        <!-- Key Capabilities -->
        <div class="space-y-3 pt-2">
          <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider">Core Capabilities Included</h4>
          <div class="grid sm:grid-cols-2 gap-2.5">
            ${card.deepDive.keyCapabilities.map(cap => `
              <div class="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium">
                <i class="ti ti-circle-check text-brand-500 text-sm mt-0.5 shrink-0"></i>
                <span>${cap}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span class="text-xs text-slate-400 font-medium">Part of the unified BizzLoop OS Stack</span>
          <div class="flex items-center gap-2 w-full sm:w-auto">
            <button onclick="BizzLoopModals.close('actionDetailModal')" class="btn-secondary px-5 py-2.5 text-xs w-full sm:w-auto">Back</button>
            <button onclick="BizzLoopModals.openDemoModal('${card.title}');" class="btn-primary px-6 py-2.5 text-xs w-full sm:w-auto">See It in Action →</button>
          </div>
        </div>
      </div>
    `;

    open('actionDetailModal');
  }

  // 3. Open Plan Details Modal
  function openPlanDetail(planId) {
    if (typeof BizzLoopPlans === 'undefined') return;
    const plan = BizzLoopPlans.tiers.find(t => t.id === planId);
    if (!plan) return;

    const container = document.getElementById('planDetailContent');
    if (!container) return;

    container.innerHTML = `
      <div class="p-6 sm:p-8 space-y-6">
        <!-- Header -->
        <div class="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-brand-500 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100">Tier Breakdown</span>
              ${plan.popular ? '<span class="text-[9px] font-extrabold uppercase tracking-widest text-white bg-brand-500 px-2.5 py-0.5 rounded-full">MOST POPULAR</span>' : ''}
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">${plan.name}</h2>
            <p class="text-xs text-slate-500 font-medium mt-0.5">Target: ${plan.target}</p>
          </div>
          <button onclick="BizzLoopModals.close('planDetailModal')" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors" aria-label="Close">
            <i class="ti ti-x text-lg"></i>
          </button>
        </div>

        <!-- Pricing Banner -->
        <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-cyan-50/40 to-emerald-50/40 border border-blue-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <div class="flex items-baseline gap-1.5">
              <span class="text-3xl font-extrabold text-slate-900">£${plan.pricing.monthly}</span>
              <span class="text-xs text-slate-500 font-semibold">/ month (exc. VAT)</span>
            </div>
            <p class="text-[11px] text-slate-500 mt-0.5">Annual commitment: <strong>£${plan.pricing.annualTotal} / year</strong> (10 months equivalent · Save 16.7%)</p>
          </div>
          <div class="text-left sm:text-right text-xs text-slate-600 font-medium space-y-0.5">
            <div><i class="ti ti-users mr-1 text-brand-500"></i><strong>${plan.userSeats}</strong></div>
            <div><i class="ti ti-folder mr-1 text-cyan-600"></i><strong>${plan.storage}</strong></div>
          </div>
        </div>

        <!-- Stack Entitlement Matrix -->
        <div class="space-y-3">
          <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Application Stack Entitlements</h4>
          <div class="grid sm:grid-cols-2 gap-2">
            ${plan.stackEntitlements.map(item => `
              <div class="flex items-center justify-between p-2.5 rounded-xl border ${item.included ? 'bg-white border-slate-200/80 text-slate-800' : 'bg-slate-50/60 border-slate-100 text-slate-400 opacity-60'} text-xs">
                <span>${item.name}</span>
                <span class="font-bold ${item.included ? 'text-emerald-600' : 'text-slate-300'}">${item.included ? '✅ Included' : '❌ Not in Plan'}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Navigation Hubs -->
        <div class="space-y-3">
          <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Included Workspace Hubs</h4>
          <div class="grid sm:grid-cols-2 gap-2">
            ${plan.workspaceHubs.map(hub => `
              <div class="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium">
                <i class="ti ti-layout-grid text-brand-500"></i>
                <span>${hub}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-xs text-slate-400">All prices subject to standard UK VAT (20%). No setup fees.</p>
          <div class="flex items-center gap-2 w-full sm:w-auto">
            <button onclick="BizzLoopModals.close('planDetailModal')" class="btn-secondary px-5 py-2.5 text-xs w-full sm:w-auto">Close</button>
            <button onclick="BizzLoopModals.openDemoModal('${plan.name}');" class="btn-primary px-6 py-2.5 text-xs w-full sm:w-auto">Choose ${plan.name} →</button>
          </div>
        </div>
      </div>
    `;

    open('planDetailModal');
  }

  // 4. Open Careers Full Portal
  function openCareersPage() {
    open('careersModal');
  }

  // 5. Apply for Role
  function applyForRole(roleTitle, roleType) {
    const modal = document.getElementById('careerAppModal');
    if (!modal) return;

    const titleEl = document.getElementById('careerModalTitle');
    const badgeEl = document.getElementById('targetRoleBadge');
    const hiddenInput = document.getElementById('appRoleInput');
    const prefSelect = document.getElementById('appPref');

    if (titleEl) titleEl.textContent = `Apply for ${roleTitle}`;
    if (badgeEl) badgeEl.textContent = roleTitle;
    if (hiddenInput) hiddenInput.value = roleTitle;
    if (prefSelect && roleType) prefSelect.value = roleType;

    open('careerAppModal');
  }

  // 6. Open Partner / Affiliate Modal
  function openAffiliatePage() {
    open('affiliateModal');
  }

  // 7. Open Blog / Insights Modal
  function openBlogAllArticles() {
    open('blogAllModal');
  }

  // 8. Open Blog Article Reader
  function openBlogArticle(articleId) {
    if (typeof BizzLoopBlog === 'undefined') return;
    const article = BizzLoopBlog.find(a => a.id === articleId);
    if (!article) return;

    const container = document.getElementById('blogArticleContent');
    if (!container) return;

    container.innerHTML = `
      <div class="p-6 sm:p-10 space-y-6">
        <div class="flex items-start justify-between pb-4 border-b border-slate-100">
          <div class="space-y-1">
            <span class="text-[10px] font-bold uppercase tracking-wider text-brand-500 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100">${article.category} · ${article.readTime}</span>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">${article.title}</h1>
            <p class="text-xs text-slate-400 font-mono">By ${article.author} (${article.role}) · Published ${article.date}</p>
          </div>
          <button onclick="BizzLoopModals.close('blogArticleModal')" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors" aria-label="Close">
            <i class="ti ti-x text-lg"></i>
          </button>
        </div>

        <div class="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-4 font-medium">
          ${article.content}
        </div>

        <div class="pt-6 border-t border-slate-100 flex items-center justify-between">
          <button onclick="BizzLoopModals.close('blogArticleModal')" class="btn-secondary px-5 py-2 text-xs">Back to Articles</button>
          <button onclick="BizzLoopModals.openDemoModal();" class="btn-primary px-6 py-2 text-xs">Book a Free Demo →</button>
        </div>
      </div>
    `;

    open('blogArticleModal');
  }

  // 9. Open About Us Page Modal
  function openAboutPage() {
    open('aboutModal');
  }

  // Handle ESC key to close active modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeModalId) {
      close(activeModalId);
    }
  });

  return {
    open,
    close,
    openDemoModal,
    openActionCardDetail,
    openPlanDetail,
    openCareersPage,
    applyForRole,
    openAffiliatePage,
    openBlogAllArticles,
    openBlogArticle,
    openAboutPage
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopModals;
}
