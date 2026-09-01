/**
 * BizzLoop Main Application (js/app.js)
 * Master initialization, UI rendering, ROI calculator, scroll listeners, and dynamic components
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

  // 3. Render 8 "BizzLoop in Action" Cards
  renderActionCards();

  // 4. Render Core Platform Capabilities
  renderPlatformFeatures();

  // 5. Render UK Industry Solutions
  renderSolutions();

  // 6. Render Careers Portal
  renderCareersPortal();

  // 7. Render Partner Programme
  renderAffiliatePortal();

  // 8. Render Knowledge & Blog Articles
  renderBlogPortal();

  // 9. Scroll Listeners (Progress bar, Navbar glassmorphism, Back to top)
  initScrollHandlers();

  // 10. Reveal Animations & Counters
  initIntersectionObservers();

  // 11. Interactive UK SME ROI & Savings Calculator
  initRoiCalculator();

  // 12. FAQ Accordion Logic
  initFaqAccordion();

  // 13. Mobile Navigation Drawer
  initMobileNav();

  // 14. Cookie Consent Logic
  initCookieConsent();

  // 15. URL Hash Router Listener
  handleInitialHash();
});

// Render 8 "BizzLoop in Action" Cards
function renderActionCards() {
  const container = document.getElementById('actionCardsGrid');
  if (!container || typeof BizzLoopActionCards === 'undefined') return;

  container.innerHTML = BizzLoopActionCards.map((card, index) => `
    <div class="action-card reveal reveal-delay-${(index % 4) + 1} group" onclick="BizzLoopModals.openActionCardDetail('${card.id}')">
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-black font-mono tracking-wider" style="color:${card.color}">${card.number}</span>
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider" style="background:${card.bgLight}; color:${card.color}">
            ${card.badge}
          </span>
        </div>

        <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl shadow-md transition-transform duration-300 group-hover:scale-110" style="background:${card.color}">
          <i class="${card.icon}"></i>
        </div>

        <div>
          <h3 class="text-lg font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors">${card.title}</h3>
          <p class="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">${card.summary}</p>
        </div>

        <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-600">
          <span class="flex items-center gap-1.5"><i class="ti ti-chart-dots" style="color:${card.color}"></i> ${card.metrics.label}: <strong>${card.metrics.value}</strong></span>
          <span class="text-brand-600 font-bold group-hover:translate-x-1 transition-transform">Explore →</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Core Platform Features
function renderPlatformFeatures() {
  const container = document.getElementById('platformFeaturesGrid');
  if (!container || typeof BizzLoopFeatures === 'undefined') return;

  container.innerHTML = BizzLoopFeatures.map((feat, index) => `
    <div class="bl-card bl-card-interactive reveal reveal-delay-${(index % 3) + 1} flex flex-col justify-between" onclick="BizzLoopModals.openDemoModal('${feat.title}')">
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg shadow-sm" style="background:${feat.color}">
            <i class="${feat.icon}"></i>
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono">${feat.badge}</span>
        </div>

        <div>
          <h3 class="text-base font-extrabold text-slate-900">${feat.title}</h3>
          <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">${feat.summary}</p>
        </div>

        <ul class="space-y-1.5 pt-1 text-xs text-slate-600 font-medium">
          ${feat.highlights.map(h => `
            <li class="flex items-center gap-2">
              <i class="ti ti-check text-brand-500 text-xs shrink-0"></i>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
        <span>Request Demo</span>
        <span>→</span>
      </div>
    </div>
  `).join('');
}

// Render UK Industry Solutions
function renderSolutions() {
  const container = document.getElementById('solutionsGrid');
  if (!container || typeof BizzLoopSolutions === 'undefined') return;

  container.innerHTML = BizzLoopSolutions.map((sol, index) => `
    <div class="bl-card bl-card-interactive reveal reveal-delay-${(index % 3) + 1} flex flex-col justify-between" onclick="BizzLoopModals.openDemoModal('${sol.title}')">
      <div class="space-y-3.5">
        <div class="flex items-center justify-between">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base shadow-sm" style="background:${sol.color}">
            <i class="${sol.icon}"></i>
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-brand-600 border border-blue-100">${sol.badge}</span>
        </div>

        <div>
          <h3 class="text-base font-extrabold text-slate-900">${sol.title}</h3>
          <p class="text-xs text-slate-500 mt-1 leading-relaxed">${sol.summary}</p>
        </div>

        <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 leading-normal space-y-1">
          <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">The Solution:</div>
          <div>${sol.solution}</div>
        </div>

        <ul class="space-y-1 text-xs text-slate-700 font-medium">
          ${sol.benefits.map(b => `<li class="flex items-center gap-1.5"><i class="ti ti-check text-emerald-500 text-xs"></i> <span>${b}</span></li>`).join('')}
        </ul>
      </div>

      <div class="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
        <span>Explore Blueprint</span>
        <span>→</span>
      </div>
    </div>
  `).join('');
}

// Render Careers Portal inside Careers Modal
function renderCareersPortal() {
  const container = document.getElementById('careersPortalContent');
  if (!container || typeof BizzLoopCareers === 'undefined') return;

  const { culture, roles } = BizzLoopCareers;

  container.innerHTML = `
    <div class="p-6 sm:p-10 space-y-8">
      <!-- Header -->
      <div class="flex items-start justify-between pb-4 border-b border-slate-100">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-brand-500 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100">Careers & Internships</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">${culture.headline}</h2>
          <p class="text-xs text-slate-500 max-w-xl mt-1">${culture.subheading}</p>
        </div>
        <button onclick="BizzLoopModals.close('careersModal')" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors" aria-label="Close">
          <i class="ti ti-x text-lg"></i>
        </button>
      </div>

      <!-- Culture Perks Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        ${culture.perks.map(p => `
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-1.5">
            <div class="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-500 mx-auto shadow-sm">
              <i class="${p.icon} text-lg"></i>
            </div>
            <h4 class="text-xs font-bold text-slate-900">${p.title}</h4>
            <p class="text-[10px] text-slate-400 leading-tight">${p.desc}</p>
          </div>
        `).join('')}
      </div>

      <!-- Roles Grid -->
      <div class="space-y-4">
        <h3 class="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Open UK Positions & Internships</h3>
        <div class="grid sm:grid-cols-2 gap-4">
          ${roles.map(role => `
            <div class="bl-card p-5 flex flex-col justify-between space-y-4 border-slate-200">
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${role.type.includes('Internship') ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-blue-50 text-brand-600 border border-blue-200'}">${role.type}</span>
                  <span class="text-xs font-mono font-bold text-slate-700">${role.salary}</span>
                </div>
                <h4 class="text-base font-bold text-slate-900">${role.title}</h4>
                <p class="text-xs text-slate-500 leading-relaxed">${role.summary}</p>
                <div class="flex items-center gap-2 text-[11px] text-slate-400 font-medium pt-1">
                  <span><i class="ti ti-map-pin text-brand-500"></i> ${role.location}</span>
                  <span>·</span>
                  <span><i class="ti ti-category text-cyan-600"></i> ${role.category}</span>
                </div>
              </div>
              <button onclick="BizzLoopModals.applyForRole('${role.title}', '${role.type}')" class="btn-primary w-full py-2.5 text-xs">Apply for this Role</button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Render Partner / Affiliate Portal
function renderAffiliatePortal() {
  const container = document.getElementById('affiliatePortalContent');
  if (!container || typeof BizzLoopAffiliate === 'undefined') return;

  const aff = BizzLoopAffiliate;

  container.innerHTML = `
    <div class="p-6 sm:p-10 space-y-8">
      <!-- Header -->
      <div class="flex items-start justify-between pb-4 border-b border-slate-100">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">Partner Programme</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">${aff.headline}</h2>
          <p class="text-xs text-slate-500 max-w-xl mt-1">${aff.subheading}</p>
        </div>
        <button onclick="BizzLoopModals.close('affiliateModal')" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors" aria-label="Close">
          <i class="ti ti-x text-lg"></i>
        </button>
      </div>

      <!-- Highlights Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        ${aff.highlights.map(h => `
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <h4 class="text-xs font-bold text-slate-900">${h.title}</h4>
            <p class="text-[11px] text-slate-500 leading-tight">${h.desc}</p>
          </div>
        `).join('')}
      </div>

      <!-- Steps -->
      <div class="space-y-3">
        <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">How Partnership Works</h3>
        <div class="grid sm:grid-cols-4 gap-3">
          ${aff.steps.map(s => `
            <div class="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
              <span class="text-base font-extrabold text-brand-500 font-mono">${s.step}</span>
              <h4 class="text-xs font-bold text-slate-900">${s.title}</h4>
              <p class="text-[11px] text-slate-500 leading-tight">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Application Form -->
      <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
        <h3 class="text-sm font-bold text-slate-900">Apply to Become a Registered Partner</h3>
        <form onsubmit="BizzLoopForms.handlePartnerSubmit(event)" class="space-y-3">
          <div class="grid sm:grid-cols-2 gap-3">
            <div><label class="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Full Name *</label><input type="text" name="partner_name" required class="bl-input"></div>
            <div><label class="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Work Email *</label><input type="email" name="partner_email" required class="bl-input"></div>
          </div>
          <div class="grid sm:grid-cols-2 gap-3">
            <div><label class="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Company / Agency Name *</label><input type="text" name="partner_company" required class="bl-input"></div>
            <div><label class="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Partner Type *</label>
              <select name="partner_type" required class="bl-select">
                <option value="Digital Agency">Digital Marketing / Web Agency</option>
                <option value="Accountant">Accountant / Bookkeeper</option>
                <option value="Business Coach">Business Coach / Consultant</option>
                <option value="IT Consultant">IT / Operations Consultant</option>
              </select>
            </div>
          </div>
          <div><label class="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Brief Notes / Expected Referrals</label><textarea name="partner_notes" rows="2" class="bl-textarea" placeholder="Tell us briefly about your client base..."></textarea></div>
          <button type="submit" class="btn-primary w-full py-3 text-xs">Submit Partner Application</button>
        </form>
      </div>
    </div>
  `;
}

// Render Knowledge & Blog Portal
function renderBlogPortal() {
  const container = document.getElementById('blogPortalContent');
  if (!container || typeof BizzLoopBlog === 'undefined') return;

  container.innerHTML = `
    <div class="p-6 sm:p-10 space-y-8">
      <!-- Header -->
      <div class="flex items-start justify-between pb-4 border-b border-slate-100">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-brand-500 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100">UK SME Insights</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Growth & Operations Knowledgebase</h2>
          <p class="text-xs text-slate-500 max-w-xl mt-1">Practical strategies, benchmarks, and automation guides for British small business founders.</p>
        </div>
        <button onclick="BizzLoopModals.close('blogAllModal')" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors" aria-label="Close">
          <i class="ti ti-x text-lg"></i>
        </button>
      </div>

      <!-- Articles Grid -->
      <div class="grid sm:grid-cols-3 gap-5">
        ${BizzLoopBlog.map(art => `
          <div class="bl-card p-5 flex flex-col justify-between space-y-4 cursor-pointer hover:border-brand-300" onclick="BizzLoopModals.openBlogArticle('${art.id}')">
            <div class="space-y-2">
              <span class="text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">${art.category}</span>
              <h3 class="text-sm font-bold text-slate-900 leading-snug hover:text-brand-600">${art.title}</h3>
              <p class="text-xs text-slate-500 line-clamp-3">${art.summary}</p>
            </div>
            <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>${art.readTime}</span>
              <span class="text-brand-600 font-bold">Read Guide →</span>
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
  // Reveal animations
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Animated counters
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

// ROI Calculator
function initRoiCalculator() {
  const slider = document.getElementById('hours-slider');
  const sliderVal = document.getElementById('slider-val');
  const hoursSavedEl = document.getElementById('monthly-hours-saved');
  const valueSavedEl = document.getElementById('monthly-value-saved');

  if (!slider) return;

  function updateCalculation() {
    const hoursPerWeek = parseFloat(slider.value) || 20;
    if (sliderVal) sliderVal.textContent = `${hoursPerWeek} hrs/week`;

    // Formula: ~65% administrative overhead eliminated by BizzLoop automation
    const monthlyHoursSaved = Math.round(hoursPerWeek * 4.33 * 0.65);
    // Average UK SME staff cost ~£22/hr
    const monthlyValueSaved = Math.round(monthlyHoursSaved * 22);

    if (hoursSavedEl) hoursSavedEl.textContent = monthlyHoursSaved;
    if (valueSavedEl) valueSavedEl.textContent = `£${monthlyValueSaved.toLocaleString()}`;
  }

  slider.addEventListener('input', updateCalculation);
  updateCalculation();
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

      // Close all items
      faqItems.forEach(fi => {
        fi.classList.remove('active');
        const c = fi.querySelector('.faq-content');
        if (c) c.style.maxHeight = null;
      });

      // Toggle clicked item
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
    '#accessibility': 'accessibilityModal',
    '#demo': 'demoModal'
  };

  if (modalMap[hash] && typeof BizzLoopModals !== 'undefined') {
    setTimeout(() => BizzLoopModals.open(modalMap[hash]), 200);
  }
}
window.addEventListener('hashchange', handleInitialHash);
