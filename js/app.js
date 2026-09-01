/**
 * BizzLoop Main Application (js/app.js)
 * Master initialization, UI rendering, compact service cards, workflow pipelines, and animations
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Dynamic Year Sync
  const yearEls = document.querySelectorAll('.dynamic-year');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => el.textContent = currentYear);

  // 2. Initialize Pricing & Workflow Engines
  if (typeof BizzLoopPricing !== 'undefined') BizzLoopPricing.init();
  if (typeof BizzLoopWorkflowEngine !== 'undefined') BizzLoopWorkflowEngine.init();

  // 3. Render 8 Compact Service Cards
  renderCompactServiceCards();

  // 4. Render 4-Part Managed Business Services Composition
  renderManagedServices();

  // 5. Render "One Connected Loop" Step Journey
  renderLoopSteps();

  // 6. Render Full SPA Portal Drawers (Careers, Affiliate, Blog)
  renderCareersPortal();
  renderAffiliatePortal();
  renderBlogPortal();

  // 7. Scroll Listeners (Progress bar, Navbar glassmorphism, Back to top)
  initScrollHandlers();

  // 8. Reveal Animations & Counters
  initIntersectionObservers();

  // 9. FAQ Accordion Logic
  initFaqAccordion();

  // 10. Mobile Navigation Drawer
  initMobileNav();

  // 11. Cookie Consent Logic
  initCookieConsent();

  // 12. URL Hash Router Listener
  handleInitialHash();
});

// Render 8 Compact Service Cards (Icon + Short Heading + Two-Line Description + Workflow Pipeline + Mini UI Preview)
function renderCompactServiceCards() {
  const container = document.getElementById('compactServicesGrid');
  if (!container || typeof BizzLoopActionCards === 'undefined') return;

  container.innerHTML = BizzLoopActionCards.map((card, index) => `
    <div class="service-card-compact reveal reveal-delay-${(index % 4) + 1} group">
      <div class="space-y-3">
        <!-- Top: Icon & Number -->
        <div class="flex items-center justify-between">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base shadow-sm transition-transform duration-300 group-hover:scale-110" style="background:${card.color}">
            <i class="${card.icon}"></i>
          </div>
          <span class="text-xs font-black font-mono tracking-wider" style="color:${card.color}">${card.number}</span>
        </div>

        <!-- Heading & 2-Line Description -->
        <div>
          <h3 class="text-base font-extrabold text-slate-900 leading-tight group-hover:text-brand-600 transition-colors">${card.title}</h3>
          <p class="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">${card.description}</p>
        </div>

        <!-- Miniature UI Demo Snippet -->
        <div class="mini-ui-snippet">
          <div class="flex items-center justify-between text-[9px] font-bold uppercase tracking-wider mb-1 font-mono">
            <span style="color:${card.color}">${card.miniUI.tag}</span>
            <span class="text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded">${card.miniUI.status}</span>
          </div>
          <div class="font-bold text-slate-800 text-[11px] truncate">${card.miniUI.title}</div>
          <div class="text-slate-400 text-[10px] truncate mt-0.5">${card.miniUI.detail}</div>
        </div>

        <!-- Workflow Pipeline Component -->
        <div class="workflow-pipeline-bar">
          <div class="hidden sm:flex items-center justify-between text-[10px]">
            <span class="pipeline-step">${card.workflow[0]}</span>
            <i class="ti ti-arrow-right pipeline-arrow text-[10px]"></i>
            <span class="pipeline-step">${card.workflow[1]}</span>
            <i class="ti ti-arrow-right pipeline-arrow text-[10px]"></i>
            <span class="pipeline-step">${card.workflow[2]}</span>
            <i class="ti ti-arrow-right pipeline-arrow text-[10px]"></i>
            <span class="pipeline-step text-brand-600">${card.workflow[3]}</span>
          </div>
          <!-- Mobile Stacked Workflow -->
          <div class="flex sm:hidden flex-col items-center gap-1 text-[10px] py-1">
            <span class="pipeline-step">${card.workflow[0]}</span>
            <i class="ti ti-arrow-down pipeline-arrow text-[9px]"></i>
            <span class="pipeline-step">${card.workflow[1]}</span>
            <i class="ti ti-arrow-down pipeline-arrow text-[9px]"></i>
            <span class="pipeline-step">${card.workflow[2]}</span>
            <i class="ti ti-arrow-down pipeline-arrow text-[9px]"></i>
            <span class="pipeline-step text-brand-600">${card.workflow[3]}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Render 4-Part Managed Business Services Composition (Technology, Management, Growth, Support)
function renderManagedServices() {
  const container = document.getElementById('managedServicesGrid');
  if (!container || typeof BizzLoopManagedServices === 'undefined') return;

  container.innerHTML = BizzLoopManagedServices.map((srv, index) => `
    <div class="bl-card bl-card-interactive reveal reveal-delay-${index + 1} flex flex-col justify-between p-6 space-y-4">
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-white text-lg shadow-sm" style="background:${srv.color}">
            <i class="${srv.icon}"></i>
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full font-mono" style="background:${srv.bgLight}; color:${srv.color}">
            ${srv.badge}
          </span>
        </div>

        <div>
          <h3 class="text-lg font-extrabold text-slate-900">${srv.title}</h3>
          <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">${srv.desc}</p>
        </div>
      </div>

      <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
        <span>Managed Service</span>
        <span>→</span>
      </div>
    </div>
  `).join('');
}

// Render "One Connected Loop" 9-Step Journey
function renderLoopSteps() {
  const container = document.getElementById('loopStepsGrid');
  if (!container || typeof BizzLoopLoopSteps === 'undefined') return;

  container.innerHTML = BizzLoopLoopSteps.map((s, index) => `
    <div class="p-3 rounded-2xl bg-white border border-slate-200 text-center space-y-1 shadow-sm transition-transform duration-200 hover:-translate-y-1">
      <div class="w-6 h-6 rounded-full bg-blue-50 text-brand-600 font-bold font-mono text-[10px] flex items-center justify-center mx-auto">
        ${s.step}
      </div>
      <div class="text-xs font-black text-slate-900">${s.title}</div>
      <div class="text-[9px] text-slate-400 font-medium">${s.desc}</div>
    </div>
  `).join('');
}

// Render Careers Portal Drawer
function renderCareersPortal() {
  const container = document.getElementById('careersPortalContent');
  if (!container || typeof BizzLoopCareers === 'undefined') return;

  container.innerHTML = `
    <div class="p-6 sm:p-10 space-y-8">
      <div class="flex items-start justify-between pb-4 border-b border-slate-100">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-brand-500 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100">We Are Hiring</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">${BizzLoopCareers.culture.headline}</h2>
          <p class="text-xs text-slate-500 mt-0.5">${BizzLoopCareers.culture.subheading}</p>
        </div>
        <button onclick="BizzLoopModals.close('careersModal')" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors" aria-label="Close">
          <i class="ti ti-x text-lg"></i>
        </button>
      </div>

      <!-- Perks Grid -->
      <div class="grid sm:grid-cols-4 gap-3">
        ${BizzLoopCareers.culture.perks.map(p => `
          <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <i class="${p.icon} text-brand-500 text-base"></i>
            <h4 class="text-xs font-bold text-slate-900">${p.title}</h4>
            <p class="text-[10px] text-slate-500 leading-snug">${p.desc}</p>
          </div>
        `).join('')}
      </div>

      <!-- Open Roles Grid -->
      <div class="space-y-4">
        <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider">Open Opportunities (Full-Time & Paid Internships)</h3>
        <div class="grid sm:grid-cols-2 gap-4">
          ${BizzLoopCareers.roles.map(r => `
            <div class="p-5 rounded-2xl border border-slate-200 hover:border-brand-500 hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-bold uppercase tracking-wider ${r.type.includes('Intern') ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-brand-50 text-brand-700 border-brand-200'} px-2 py-0.5 rounded-full border">${r.type}</span>
                  <span class="text-[10px] font-mono text-slate-400 font-bold">${r.salary}</span>
                </div>
                <h4 class="text-base font-extrabold text-slate-900">${r.title}</h4>
                <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">${r.summary}</p>
              </div>
              <button onclick="BizzLoopModals.applyForRole('${r.title}', '${r.type}')" class="btn-secondary w-full py-2.5 text-xs">Apply for this Role →</button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Render Affiliate Portal Drawer
function renderAffiliatePortal() {
  const container = document.getElementById('affiliatePortalContent');
  if (!container || typeof BizzLoopAffiliate === 'undefined') return;

  container.innerHTML = `
    <div class="p-6 sm:p-10 space-y-8">
      <div class="flex items-start justify-between pb-4 border-b border-slate-100">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">${BizzLoopAffiliate.commissionRate}</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">${BizzLoopAffiliate.headline}</h2>
          <p class="text-xs text-slate-500 mt-0.5">${BizzLoopAffiliate.subheading}</p>
        </div>
        <button onclick="BizzLoopModals.close('affiliateModal')" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors" aria-label="Close">
          <i class="ti ti-x text-lg"></i>
        </button>
      </div>

      <!-- Highlights Grid -->
      <div class="grid sm:grid-cols-4 gap-3">
        ${BizzLoopAffiliate.highlights.map(h => `
          <div class="p-3.5 rounded-2xl bg-emerald-50/40 border border-emerald-100 space-y-1">
            <h4 class="text-xs font-bold text-slate-900">${h.title}</h4>
            <p class="text-[10px] text-slate-500 leading-snug">${h.desc}</p>
          </div>
        `).join('')}
      </div>

      <!-- Partner Types -->
      <div class="space-y-3">
        <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider">Who Should Partner</h3>
        <div class="grid sm:grid-cols-2 gap-3">
          ${BizzLoopAffiliate.partnerTypes.map(pt => `
            <div class="p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <div class="flex items-center gap-2">
                <i class="${pt.icon} text-brand-500 text-base"></i>
                <h4 class="text-xs font-bold text-slate-900">${pt.title}</h4>
              </div>
              <p class="text-[11px] text-slate-500 leading-relaxed">${pt.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Step Progression -->
      <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
        <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">How the Partner Programme Works</h4>
        <div class="grid sm:grid-cols-4 gap-3">
          ${BizzLoopAffiliate.steps.map(s => `
            <div class="space-y-1 text-center sm:text-left">
              <span class="text-xs font-black font-mono text-brand-500">${s.step}</span>
              <h5 class="text-xs font-bold text-slate-900">${s.title}</h5>
              <p class="text-[10px] text-slate-500 leading-snug">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
        <p class="text-xs text-slate-400">Monthly recurring payouts directly into your UK bank account.</p>
        <button onclick="BizzLoopModals.openDemoModal('Partner Network Application')" class="btn-primary px-6 py-2.5 text-xs">Apply for Partner Network →</button>
      </div>
    </div>
  `;
}

// Render Blog Portal Drawer
function renderBlogPortal() {
  const container = document.getElementById('blogPortalContent');
  if (!container || typeof BizzLoopBlog === 'undefined') return;

  container.innerHTML = `
    <div class="p-6 sm:p-10 space-y-8">
      <div class="flex items-start justify-between pb-4 border-b border-slate-100">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-brand-500 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100">Knowledgebase</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">UK Business Growth & Operations Guides</h2>
          <p class="text-xs text-slate-500 mt-0.5">Practical insights and workflow strategies for growing business teams.</p>
        </div>
        <button onclick="BizzLoopModals.close('blogAllModal')" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors" aria-label="Close">
          <i class="ti ti-x text-lg"></i>
        </button>
      </div>

      <!-- Articles Grid -->
      <div class="grid sm:grid-cols-3 gap-5">
        ${BizzLoopBlog.map(art => `
          <div class="bl-card p-5 space-y-3 flex flex-col justify-between hover:shadow-md transition-all">
            <div class="space-y-2">
              <span class="text-[10px] font-bold uppercase tracking-wider text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full">${art.category}</span>
              <h4 class="text-sm font-extrabold text-slate-900 line-clamp-2 leading-tight">${art.title}</h4>
              <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed">${art.excerpt}</p>
            </div>
            <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span class="text-[10px] text-slate-400 font-mono">${art.readTime}</span>
              <button onclick="BizzLoopModals.openBlogArticle('${art.id}')" class="text-xs font-bold text-brand-600 hover:underline">Read Article →</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Scroll Handlers
function initScrollHandlers() {
  const progressBar = document.getElementById('scroll-progress');
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('btt');
  const mobileStickyCta = document.getElementById('mobile-sticky-cta');

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

        // 1. Reading Progress
        if (progressBar && totalHeight > 0) {
          progressBar.style.width = ((scrollY / totalHeight) * 100) + '%';
        }

        // 2. Navbar Styling
        if (navbar) {
          if (scrollY > 40) {
            navbar.classList.add('bl-glass-strong', 'shadow-sm');
            navbar.classList.remove('bg-transparent');
          } else {
            navbar.classList.remove('bl-glass-strong', 'shadow-sm');
            navbar.classList.add('bg-transparent');
          }
        }

        // 3. Back to Top Button
        if (backToTopBtn) {
          if (scrollY > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.pointerEvents = 'auto';
          } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.pointerEvents = 'none';
          }
        }

        // 4. Mobile Sticky CTA
        if (mobileStickyCta) {
          if (scrollY > 400) {
            mobileStickyCta.style.opacity = '1';
            mobileStickyCta.style.pointerEvents = 'auto';
          } else {
            mobileStickyCta.style.opacity = '0';
            mobileStickyCta.style.pointerEvents = 'none';
          }
        }

        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Intersection Observers (Reveal & Animated Counters)
function initIntersectionObservers() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.target || 0;
        const duration = 1800;
        const start = performance.now();

        function step(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(eased * target);
          el.textContent = value >= 1000 ? value.toLocaleString() : value;
          if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));
}

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-accordion-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      faqItems.forEach(fi => {
        fi.classList.remove('active');
        const c = fi.querySelector('.faq-content');
        if (c) c.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

// Mobile Menu Drawer
function initMobileNav() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const navLinks = document.querySelectorAll('.mob-nav-link');

  if (!menuBtn || !mobileDrawer) return;

  function toggle(open) {
    if (open) {
      mobileDrawer.classList.remove('translate-x-full');
      if (mobileOverlay) mobileOverlay.classList.remove('opacity-0', 'pointer-events-none');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer.classList.add('translate-x-full');
      if (mobileOverlay) mobileOverlay.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    }
  }

  menuBtn.addEventListener('click', () => toggle(true));
  if (closeBtn) closeBtn.addEventListener('click', () => toggle(false));
  if (mobileOverlay) mobileOverlay.addEventListener('click', () => toggle(false));
  navLinks.forEach(link => link.addEventListener('click', () => toggle(false)));
}

// Cookie Consent Logic (UK PECR / GDPR compliant)
function initCookieConsent() {
  const banner = document.getElementById('cookie-consent-banner');
  const acceptBtn = document.getElementById('cookie-accept-btn');
  const essentialBtn = document.getElementById('cookie-essential-btn');

  if (!banner) return;

  const existingConsent = localStorage.getItem('bizzloop_cookie_consent');
  if (!existingConsent) {
    setTimeout(() => banner.classList.add('show'), 1500);
  }

  function setChoice(choice) {
    localStorage.setItem('bizzloop_cookie_consent', choice);
    banner.classList.remove('show');
  }

  if (acceptBtn) acceptBtn.addEventListener('click', () => setChoice('all'));
  if (essentialBtn) essentialBtn.addEventListener('click', () => setChoice('essential'));
}

// URL Hash Router
function handleInitialHash() {
  const hash = window.location.hash;
  if (!hash) return;

  const modalMap = {
    '#about': 'aboutModal',
    '#careers': 'careersModal',
    '#partner': 'affiliateModal',
    '#blog': 'blogAllModal',
    '#privacy': 'privacyModal',
    '#terms': 'termsModal',
    '#gdpr': 'gdprModal',
    '#cookie-policy': 'cookieModal',
    '#demo': 'demoModal'
  };

  if (modalMap[hash] && typeof BizzLoopModals !== 'undefined') {
    setTimeout(() => BizzLoopModals.open(modalMap[hash]), 200);
  }
}
window.addEventListener('hashchange', handleInitialHash);
