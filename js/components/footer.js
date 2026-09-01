/**
 * BizzLoop Global Footer Component (components/footer.js)
 * Single Source of Truth for Global Footer across Homepage and all Internal Pages
 */

const BizzLoopFooter = (() => {
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

  function getFooterHtml(basePath) {
    const currentYear = new Date().getFullYear();

    return `
      <div class="max-w-7xl mx-auto space-y-12">
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          
          <!-- Brand Column -->
          <div class="lg:col-span-2 space-y-4">
            <a href="${basePath}index.html#" class="flex items-center gap-3" aria-label="BizzLoop Home">
              <svg class="w-8 h-8 shrink-0" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="25" y="20" width="70" height="44" rx="22" stroke="#1451D8" stroke-width="12" fill="none"/>
                <rect x="25" y="56" width="70" height="44" rx="22" stroke="#04A5C2" stroke-width="12" fill="none"/>
                <path d="M25 42 A22 22 0 0 1 47 20 H73 A22 22 0 0 1 95 42" stroke="#1451D8" stroke-width="12" fill="none" stroke-linecap="round"/>
                <circle cx="60" cy="60" r="7" fill="#10B981"/>
              </svg>
              <span class="text-2xl font-black text-white">Bizz<span class="text-cyan-400">Loop</span></span>
            </a>
            <p class="text-slate-400 text-xs leading-relaxed max-w-sm">
              Managed Business Services Platform connecting digital presence, customer management, marketing, and operational workflows.
            </p>
            <div class="flex items-center gap-3 pt-1">
              <a href="https://www.linkedin.com/company/bizzloopltd/" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-500 hover:text-white flex items-center justify-center transition-colors text-slate-300" aria-label="LinkedIn"><i class="ti ti-brand-linkedin text-sm"></i></a>
              <a href="https://www.instagram.com/bizzloopltd?utm_source=qr" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors text-slate-300" aria-label="Instagram"><i class="ti ti-brand-instagram text-sm"></i></a>
              <a href="https://wa.me/447586476247?text=Hi%20BizzLoop%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20Business%20Services%20Platform." target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors text-slate-300" aria-label="WhatsApp"><i class="ti ti-brand-whatsapp text-sm"></i></a>
            </div>
          </div>

          <!-- Services Column -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider font-mono">Services</h4>
            <ul class="space-y-2 text-slate-400 font-medium">
              <li><a href="${basePath}services/crm-customer-management/" class="hover:text-white transition flex items-center gap-1.5"><i class="ti ti-users text-xs text-brand-400"></i><span>CRM & Customers</span></a></li>
              <li><a href="${basePath}services/business-management/" class="hover:text-white transition flex items-center gap-1.5"><i class="ti ti-layout-kanban text-xs text-cyan-400"></i><span>Business Operations</span></a></li>
              <li><a href="${basePath}services/website-lead-capture/" class="hover:text-white transition flex items-center gap-1.5"><i class="ti ti-browser-check text-xs text-emerald-400"></i><span>Websites & Leads</span></a></li>
              <li><a href="${basePath}services/seo-search-visibility/" class="hover:text-white transition flex items-center gap-1.5"><i class="ti ti-search text-xs text-purple-400"></i><span>SEO & Visibility</span></a></li>
              <li><a href="${basePath}services/digital-marketing/" class="hover:text-white transition flex items-center gap-1.5"><i class="ti ti-chart-arrows-vertical text-xs text-amber-400"></i><span>Digital Marketing</span></a></li>
              <li><a href="${basePath}services/automation-workflows/" class="hover:text-white transition flex items-center gap-1.5"><i class="ti ti-bolt text-xs text-emerald-400"></i><span>Automation Workflows</span></a></li>
              <li><a href="${basePath}services/reporting-visibility/" class="hover:text-white transition flex items-center gap-1.5"><i class="ti ti-dashboard text-xs text-blue-400"></i><span>Reporting Cockpit</span></a></li>
            </ul>
          </div>

          <!-- Company Column -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider font-mono">Company</h4>
            <ul class="space-y-2 text-slate-400 font-medium">
              <li><a href="${basePath}plans/" class="hover:text-white transition flex items-center gap-1.5"><i class="ti ti-currency-pound text-xs text-brand-400"></i><span>Plans & Pricing</span></a></li>
              <li><a href="${basePath}careers/" class="hover:text-white transition flex items-center gap-1.5"><i class="ti ti-briefcase text-xs text-brand-400"></i><span>Careers</span> <span class="text-[9px] bg-brand-500/30 text-brand-300 px-1.5 py-0.2 rounded-full font-bold">Hiring</span></a></li>
              <li><a href="${basePath}affiliate/" class="hover:text-white transition flex items-center gap-1.5"><i class="ti ti-handshake text-xs text-emerald-400"></i><span>Partner Programme (20%)</span></a></li>
              <li><a href="${basePath}blog/" class="hover:text-white transition flex items-center gap-1.5"><i class="ti ti-book-2 text-xs text-indigo-400"></i><span>Knowledgebase & Blog</span></a></li>
              <li><a href="${basePath}contact/" class="hover:text-white transition flex items-center gap-1.5"><i class="ti ti-headset text-xs text-cyan-400"></i><span>Book Consultation</span></a></li>
            </ul>
          </div>

          <!-- Legal & UK Entity Details -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider font-mono">Legal & Entity</h4>
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-[11px] space-y-1 font-mono text-slate-300">
              <p class="font-bold text-white">BIZZLOOP LTD</p>
              <p>Company No: <strong>17319641</strong></p>
              <p>England & Wales</p>
              <p><a href="mailto:info@bizzloop.co.uk" class="text-cyan-400 hover:underline">info@bizzloop.co.uk</a></p>
            </div>
            <div class="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-400">
              <a href="${basePath}privacy/" class="hover:text-white transition">Privacy</a>
              <span>·</span>
              <a href="${basePath}terms/" class="hover:text-white transition">Terms</a>
              <span>·</span>
              <a href="${basePath}cookies/" class="hover:text-white transition">Cookies</a>
              <span>·</span>
              <a href="${basePath}gdpr/" class="hover:text-white transition">UK GDPR</a>
            </div>
          </div>

        </div>

        <div class="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>&copy; <span class="dynamic-year">${currentYear}</span> BIZZLOOP LTD. All rights reserved. Registered in England & Wales.</div>
          <div>Managed Business Services Platform.</div>
        </div>

      </div>
    `;
  }

  function render(containerId = 'global-footer') {
    const basePath = getBasePath();
    const footerContainer = document.getElementById(containerId) || document.querySelector('footer');
    if (footerContainer) {
      footerContainer.id = 'global-footer';
      footerContainer.className = 'bg-slate-900 text-slate-400 border-t border-slate-800 py-14 sm:py-18 px-4 sm:px-8 mt-auto text-xs';
      footerContainer.innerHTML = getFooterHtml(basePath);
    }
  }

  function init() {
    render('global-footer');
  }

  return {
    init,
    render,
    getBasePath
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopFooter;
}
