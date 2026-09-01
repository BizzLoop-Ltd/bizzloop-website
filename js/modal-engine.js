/**
 * BizzLoop Unified Modal & SPA Overlay Engine (js/modal-engine.js)
 * Manages modal drawers, deep linking, accessibility focus traps, and full reader overlays
 */

const BizzLoopModals = (() => {
  'use strict';

  let activeModalId = null;

  function open(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    if (activeModalId && activeModalId !== modalId) {
      close(activeModalId, false);
    }

    modal.classList.add('open');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    activeModalId = modalId;

    const closeBtn = modal.querySelector('button, [tabindex="0"]');
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 50);
    }
  }

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

  function openDemoModal(prefillTopic = '') {
    const modal = document.getElementById('demoModal');
    if (!modal) return;
    
    const topicSelect = document.getElementById('demoTopicSelect');
    if (topicSelect && prefillTopic) {
      topicSelect.value = prefillTopic;
    }
    open('demoModal');
  }

  function openPlanDetail(planId) {
    if (typeof BizzLoopPlans === 'undefined') return;
    const plan = BizzLoopPlans.tiers.find(t => t.id === planId);
    if (!plan) return;

    const container = document.getElementById('planDetailContent');
    if (!container) return;

    container.innerHTML = `
      <div class="p-6 sm:p-8 space-y-6">
        <div class="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-brand-500 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100 font-mono">Plan Entitlements</span>
              ${plan.popular ? '<span class="text-[9px] font-extrabold uppercase tracking-widest text-white bg-brand-500 px-2.5 py-0.5 rounded-full">MOST POPULAR</span>' : ''}
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">${plan.name}</h2>
            <p class="text-xs text-slate-500 font-medium mt-0.5">Target: ${plan.target}</p>
          </div>
          <button onclick="BizzLoopModals.close('planDetailModal')" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors" aria-label="Close">
            <i class="ti ti-x text-lg"></i>
          </button>
        </div>

        <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-cyan-50/40 to-emerald-50/40 border border-blue-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <div class="flex items-baseline gap-1.5">
              <span class="text-3xl font-extrabold text-slate-900">£${plan.pricing.monthly}</span>
              <span class="text-xs text-slate-500 font-semibold">/ month</span>
            </div>
            <p class="text-[11px] text-slate-500 mt-0.5">Annual commitment: <strong>£${plan.pricing.annualTotal} / year</strong> (Save 16.7% · 2 Months Free)</p>
          </div>
          <div class="text-left sm:text-right text-xs text-slate-600 font-medium space-y-0.5">
            <div><i class="ti ti-users mr-1 text-brand-500"></i><strong>${plan.userSeats}</strong></div>
            <div><i class="ti ti-folder mr-1 text-cyan-600"></i><strong>${plan.storage}</strong></div>
          </div>
        </div>

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

        <div class="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-xs text-slate-400">Clear monthly or annual subscription. Zero setup fees.</p>
          <div class="flex items-center gap-2 w-full sm:w-auto">
            <button onclick="BizzLoopModals.close('planDetailModal')" class="btn-secondary px-5 py-2.5 text-xs w-full sm:w-auto">Close</button>
            <button onclick="BizzLoopModals.openDemoModal('${plan.name}');" class="btn-primary px-6 py-2.5 text-xs w-full sm:w-auto">Choose ${plan.name} →</button>
          </div>
        </div>
      </div>
    `;

    open('planDetailModal');
  }

  function openCareersPage() {
    open('careersModal');
  }

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

  function openAffiliatePage() {
    open('affiliateModal');
  }

  function openBlogAllArticles() {
    open('blogAllModal');
  }

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

  function openAboutPage() {
    open('aboutModal');
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeModalId) {
      close(activeModalId);
    }
  });

  return {
    open,
    close,
    openDemoModal,
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
