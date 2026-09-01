/**
 * BizzLoop Global Header Component (components/header.js)
 * Single Source of Truth for Global Navigation across Homepage and all Internal Pages
 */

const BizzLoopHeader = (() => {
  'use strict';

  function getBasePath() {
    if (typeof window === 'undefined') return '';
    const path = window.location.pathname;
    
    let cleanPath = path;
    if (cleanPath.endsWith('/index.html')) cleanPath = cleanPath.slice(0, -11);
    if (cleanPath.endsWith('.html')) cleanPath = cleanPath.substring(0, cleanPath.lastIndexOf('/'));
    
    const segments = cleanPath.split('/').filter(Boolean);
    const isGhPages = segments.length > 0 && (segments[0] === 'bizzloop-website' || segments[0] === 'Scalenova-Website');
    const relevantSegments = isGhPages ? segments.slice(1) : segments;
    
    const depth = relevantSegments.length;
    if (depth === 0) return '';
    return '../'.repeat(depth);
  }

  function detectCurrentPage() {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname;
    const hash = window.location.hash;

    if (path.includes('/services')) return 'services';
    if (path.includes('/plans')) return 'pricing';
    if (path.includes('/careers')) return 'careers';
    if (path.includes('/affiliate')) return 'partner';
    if (path.includes('/blog')) return 'insights';
    if (path.includes('/contact')) return 'contact';
    if (path.includes('/privacy')) return 'privacy';
    if (path.includes('/terms')) return 'terms';
    if (path.includes('/cookies')) return 'cookies';
    if (path.includes('/gdpr')) return 'gdpr';

    if (hash === '#services') return 'services';
    if (hash === '#managed' || hash === '#workflow' || hash === '#loop') return 'workflow';
    if (hash === '#pricing') return 'pricing';

    return 'home';
  }

  function getLogoHtml(basePath) {
    return `
      <a href="${basePath}index.html#" class="flex items-center gap-3 group" aria-label="BizzLoop Home">
        <svg class="w-9 h-9 shrink-0 transition-transform group-hover:scale-105" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="20" width="70" height="44" rx="22" stroke="#1451D8" stroke-width="12" fill="none"/>
          <rect x="25" y="56" width="70" height="44" rx="22" stroke="#04A5C2" stroke-width="12" fill="none"/>
          <path d="M25 42 A22 22 0 0 1 47 20 H73 A22 22 0 0 1 95 42" stroke="#1451D8" stroke-width="12" fill="none" stroke-linecap="round"/>
          <circle cx="60" cy="60" r="7" fill="#10B981"/>
        </svg>
        <div class="flex flex-col">
          <span class="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">Bizz<span class="text-brand-500">Loop</span></span>
          <span class="text-[8px] font-extrabold tracking-widest text-cyan-600 uppercase mt-0.5 font-mono">MANAGED SERVICES PLATFORM</span>
        </div>
      </a>
    `;
  }

  // 5 Streamlined Primary Desktop Navigation Links
  function getNavItems(basePath) {
    return [
      { id: 'services', label: 'Services', href: `${basePath}services/`, icon: 'ti ti-apps' },
      { id: 'workflow', label: 'How It Works', href: `${basePath}index.html#workflow`, icon: 'ti ti-repeat' },
      { id: 'pricing', label: 'Plans', href: `${basePath}plans/`, icon: 'ti ti-currency-pound' },
      { id: 'insights', label: 'Insights', href: `${basePath}blog/`, icon: 'ti ti-book-2' },
      { id: 'careers', label: 'Careers', href: `${basePath}careers/`, icon: 'ti ti-briefcase', badge: 'Hiring' }
    ];
  }

  function getDesktopNavHtml(basePath, activePage) {
    const items = getNavItems(basePath);

    return `
      <nav class="hidden lg:flex items-center gap-1.5 bg-slate-100/90 backdrop-blur-md p-1.5 rounded-full border border-slate-200/80 text-xs font-bold text-slate-700" aria-label="Global Navigation">
        ${items.map(item => {
          const isCurrent = activePage === item.id;
          const activeClass = isCurrent ? 'bg-white text-brand-600 shadow-sm' : 'hover:text-brand-600 hover:bg-white/80';
          const href = item.href;

          return `
            <a href="${href}" class="px-3.5 py-1.5 rounded-full ${activeClass} transition-all flex items-center gap-1.5" data-nav-id="${item.id}">
              <i class="${item.icon} text-sm text-slate-400"></i>
              <span>${item.label}</span>
              ${item.badge ? `<span class="bg-brand-100 text-brand-600 text-[9px] font-extrabold px-1.5 py-0.2 rounded-full">${item.badge}</span>` : ''}
            </a>
          `;
        }).join('')}
      </nav>
    `;
  }

  function getActionsHtml(basePath) {
    return `
      <div class="hidden sm:flex items-center gap-3">
        <a href="https://wa.me/447586476247?text=Hi%20BizzLoop%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20Business%20Services%20Platform." target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center hover:scale-105 transition-transform" aria-label="WhatsApp Quick Connect">
          <i class="ti ti-brand-whatsapp text-lg"></i>
        </a>
        <a href="${basePath}contact/" class="btn-primary text-xs px-5 py-2.5 flex items-center gap-1.5 shadow-sm">
          <span>Get Started</span>
          <i class="ti ti-arrow-right text-xs"></i>
        </a>
      </div>

      <!-- Mobile Hamburger Toggle -->
      <button id="menu-btn" type="button" class="lg:hidden w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 focus:outline-none" aria-label="Toggle Mobile Navigation">
        <i class="ti ti-menu-2 text-xl"></i>
      </button>
    `;
  }

  function getMobileDrawerHtml(basePath, activePage) {
    return `
      <!-- Mobile Overlay Backdrop -->
      <div id="mobile-overlay" class="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300 lg:hidden"></div>

      <!-- Mobile Navigation Side Drawer -->
      <div id="mobile-drawer" class="fixed inset-y-0 right-0 max-w-xs w-full bg-white z-50 shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between p-6 border-l border-slate-200 overflow-y-auto" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
        <div class="space-y-6">
          <div class="flex justify-between items-center pb-4 border-b border-slate-100">
            <div class="flex items-center gap-2">
              <span class="text-xl font-black text-slate-900">Bizz<span class="text-brand-500">Loop</span></span>
            </div>
            <button id="mobile-drawer-close" type="button" class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900" aria-label="Close Menu">
              <i class="ti ti-x text-sm"></i>
            </button>
          </div>

          <nav class="flex flex-col space-y-1.5 font-bold text-xs text-slate-800">
            <a href="${basePath}index.html#" class="mob-nav-link flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition ${activePage === 'home' ? 'bg-blue-50/70 text-brand-600' : ''}">
              <span class="flex items-center gap-2.5"><i class="ti ti-home text-brand-500 text-sm"></i> Home</span>
              <i class="ti ti-chevron-right text-slate-300 text-xs"></i>
            </a>
            <a href="${basePath}services/" class="mob-nav-link flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition ${activePage === 'services' ? 'bg-blue-50/70 text-brand-600' : ''}">
              <span class="flex items-center gap-2.5"><i class="ti ti-apps text-brand-500 text-sm"></i> Services</span>
              <i class="ti ti-chevron-right text-slate-300 text-xs"></i>
            </a>
            <a href="${basePath}index.html#workflow" class="mob-nav-link flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition ${activePage === 'workflow' ? 'bg-blue-50/70 text-brand-600' : ''}">
              <span class="flex items-center gap-2.5"><i class="ti ti-repeat text-cyan-600 text-sm"></i> How It Works</span>
              <i class="ti ti-chevron-right text-slate-300 text-xs"></i>
            </a>
            <a href="${basePath}plans/" class="mob-nav-link flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition ${activePage === 'pricing' ? 'bg-blue-50/70 text-brand-600' : ''}">
              <span class="flex items-center gap-2.5"><i class="ti ti-currency-pound text-brand-500 text-sm"></i> Plans & Pricing</span>
              <i class="ti ti-chevron-right text-slate-300 text-xs"></i>
            </a>
            <a href="${basePath}blog/" class="mob-nav-link flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition ${activePage === 'insights' ? 'bg-blue-50/70 text-brand-600' : ''}">
              <span class="flex items-center gap-2.5"><i class="ti ti-book-2 text-indigo-500 text-sm"></i> Knowledgebase & Blog</span>
              <i class="ti ti-chevron-right text-slate-300 text-xs"></i>
            </a>
            <a href="${basePath}careers/" class="mob-nav-link flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition ${activePage === 'careers' ? 'bg-blue-50/70 text-brand-600' : ''}">
              <span class="flex items-center gap-2.5"><i class="ti ti-briefcase text-brand-500 text-sm"></i> Careers & Internships</span>
              <span class="bg-brand-50 text-brand-600 text-[9px] px-2 py-0.5 rounded-full font-bold">Hiring</span>
            </a>
            <a href="${basePath}affiliate/" class="mob-nav-link flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition ${activePage === 'partner' ? 'bg-blue-50/70 text-brand-600' : ''}">
              <span class="flex items-center gap-2.5"><i class="ti ti-handshake text-emerald-600 text-sm"></i> Partner Programme (20%)</span>
              <i class="ti ti-chevron-right text-slate-300 text-xs"></i>
            </a>
            <a href="${basePath}contact/" class="mob-nav-link flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition ${activePage === 'contact' ? 'bg-blue-50/70 text-brand-600' : ''}">
              <span class="flex items-center gap-2.5"><i class="ti ti-headset text-cyan-600 text-sm"></i> Contact & Demo</span>
              <i class="ti ti-chevron-right text-slate-300 text-xs"></i>
            </a>
          </nav>
        </div>

        <div class="pt-6 border-t border-slate-100 space-y-2 mt-6">
          <a href="https://wa.me/447586476247?text=Hi%20BizzLoop%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20Business%20Services%20Platform." target="_blank" rel="noopener noreferrer" class="w-full py-3 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 flex items-center justify-center gap-2">
            <i class="ti ti-brand-whatsapp text-base"></i>
            <span>Chat on WhatsApp</span>
          </a>
          <a href="${basePath}contact/" class="w-full py-3 rounded-xl text-xs btn-primary flex items-center justify-center gap-2">
            <span>Get Started</span>
            <i class="ti ti-arrow-right text-xs"></i>
          </a>
        </div>
      </div>
    `;
  }

  function render(containerId = 'global-header', mobileContainerId = 'global-mobile-nav', explicitActivePage = null) {
    const basePath = getBasePath();
    const activePage = explicitActivePage || detectCurrentPage();

    const headerContainer = document.getElementById(containerId) || document.querySelector('header');
    if (headerContainer) {
      headerContainer.id = 'global-header';
      headerContainer.className = 'fixed top-0 inset-x-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 px-4 sm:px-8 py-3.5';
      headerContainer.setAttribute('aria-label', 'Main Navigation');
      headerContainer.innerHTML = `
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          ${getLogoHtml(basePath)}
          ${getDesktopNavHtml(basePath, activePage)}
          ${getActionsHtml(basePath)}
        </div>
      `;
    }

    let mobileContainer = document.getElementById(mobileContainerId);
    if (!mobileContainer) {
      mobileContainer = document.createElement('div');
      mobileContainer.id = mobileContainerId;
      document.body.appendChild(mobileContainer);
    }
    mobileContainer.innerHTML = getMobileDrawerHtml(basePath, activePage);

    initMobileNav();
    initScrollObserver();
  }

  function setActivePage(pageId) {
    if (typeof document === 'undefined') return;
    document.querySelectorAll('#global-header [data-nav-id]').forEach(el => {
      if (el.dataset.navId === pageId) {
        el.classList.add('bg-white', 'text-brand-600', 'shadow-sm');
        el.classList.remove('hover:bg-white/80');
      } else {
        el.classList.remove('bg-white', 'text-brand-600', 'shadow-sm');
        el.classList.add('hover:bg-white/80');
      }
    });
  }

  function initMobileNav() {
    if (typeof document === 'undefined') return;
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
        if (document.body) document.body.style.overflow = 'hidden';
      } else {
        mobileDrawer.classList.add('translate-x-full');
        if (mobileOverlay) mobileOverlay.classList.add('opacity-0', 'pointer-events-none');
        if (document.body) document.body.style.overflow = '';
      }
    }

    menuBtn.onclick = (e) => { e.preventDefault(); toggle(true); };
    if (closeBtn) closeBtn.onclick = (e) => { e.preventDefault(); toggle(false); };
    if (mobileOverlay) mobileOverlay.onclick = (e) => { e.preventDefault(); toggle(false); };
    navLinks.forEach(link => link.addEventListener('click', () => toggle(false)));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer && !mobileDrawer.classList.contains('translate-x-full')) {
        toggle(false);
      }
    });
  }

  function initScrollObserver() {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    const navbar = document.getElementById('global-header');
    if (!navbar) return;

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        const updateNavbar = () => {
          if (window.scrollY > 40) {
            navbar.classList.add('shadow-md');
          } else {
            navbar.classList.remove('shadow-md');
          }
          ticking = false;
        };

        if (typeof requestAnimationFrame !== 'undefined') {
          requestAnimationFrame(updateNavbar);
        } else {
          updateNavbar();
        }
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function init(explicitActivePage = null) {
    const activePage = explicitActivePage || detectCurrentPage();
    
    const header = document.getElementById('global-header');
    if (!header || !header.firstElementChild) {
      render('global-header', 'global-mobile-nav', activePage);
    } else {
      initMobileNav();
      initScrollObserver();
      if (activePage) setActivePage(activePage);
    }
  }

  return {
    init,
    render,
    setActivePage,
    getBasePath
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopHeader;
}
