# BizzLoop Website — ScaleNova Reference Architecture Audit & Master Implementation Plan

> **Official Document**: `BIZZLOOP_WEBSITE_SCALE_NOVA_REFERENCE_AUDIT.md`  
> **Target Entity**: `BIZZLOOP LTD` (Company No. `17319641`, Registered in England & Wales, UK)  
> **Reference Model**: `ScaleNova-Pvt-Ltd/Scalenova-Website` (Modular Multi-Page Architecture)  
> **Current Date**: September 2026  
> **Status**: Forensic Inspection & Engineering Roadmap (Pre-Implementation Phase)

---

## 1. Executive Summary

This document establishes the official engineering roadmap to rebuild and refine the **BizzLoop** website (`https://bizzloop.co.uk`) using the production architecture, component modularity, and conversion-focused UX of the **ScaleNova** website (`ScaleNova-Pvt-Ltd/Scalenova-Website`) as the reference standard.

### Core Mandate & Brand Independence Principle
* **Engineering Standard**: Adopt ScaleNova's proven directory-level multi-page routing (MPA with progressive enhancement), shared design tokens, centralized form handling engine, clean breadcrumb systems, and zero-dependency static performance.
* **Distinct Brand & Business Identity**: BizzLoop is **NOT** a clone of ScaleNova. BizzLoop operates as a **UK Managed Business Services Platform & Operating System** tailored for British SMEs, sole traders, and expanding enterprises.
* **Key Differentiators**:
  * **Brand Visuals**: Royal/Electric Blue (`#1451D8`), Cyan (`#04A5C2`), Emerald (`#10B981`), Amber (`#F59E0B`), Inter & Plus Jakarta Sans typography.
  * **Commercials**: GBP (`£`) pricing tiers (Starter £149/mo, Growth £349/mo, Enterprise £749/mo + VAT) with 16.7% annual discounts (2 months free).
  * **Offerings**: 8 core managed service streams (CRM, Business Management, Website & Lead Capture, SEO, Digital Marketing, Social Media, Automation, Reporting) structured across 4 pillars (Technology, Management, Growth, Support) and a 9-step growth loop.
  * **Compliance & Legal**: UK Companies House registration (`17319641`), UK GDPR / PECR compliance, UK statutory workplace standards, London/Manchester hybrid operations.

---

## 2. ScaleNova Reference Architecture Audit

### 2.1 ScaleNova Repository Breakdown (`ScaleNova-Pvt-Ltd/Scalenova-Website`)
The ScaleNova repository represents a production-grade, indexable static architecture with clean directory-level URLs and separated data modules:

```
ScaleNova-Website/
├── index.html                           # Canonical Homepage
├── 404.html                              # Custom 404 Error Handler
├── sitemap.xml                           # XML Sitemap for search crawlers
├── robots.txt                            # Search crawler instructions
│
├── features/                             # Features Hub & Subpages
│   ├── index.html                        # Features Hub (All 8 Modules)
│   ├── crm-sales/index.html              # CRM & Sales Pipeline Page
│   ├── business-operations/index.html    # ERP & Operational Workflows Page
│   ├── finance-tracking/index.html       # Finance & Unified Invoicing Page
│   ├── projects-tasks/index.html         # Projects & Task Delivery Page
│   ├── people-operations/index.html      # HR & Attendance Page
│   ├── business-intelligence/index.html  # Business Intelligence Analytics Page
│   ├── executive-dashboard/index.html    # Executive Control Cockpit Page
│   └── mobile-access/index.html          # Mobile PWA Access Page
│
├── plans/                                # Pricing & Commercial Hub
│   ├── index.html                        # Plans Overview Matrix (Core, Growth, Elite)
│   ├── core-os/index.html                # Core OS Plan Detail Page
│   ├── growth-os/index.html              # Growth OS Plan Detail Page (Most Popular)
│   └── elite-os/index.html               # Elite OS Plan Detail Page
│
├── careers/                              # Careers & Candidate Portal
│   └── index.html                        # 6 Open Roles + Candidate Modal Application
│
├── affiliate/                            # Partner Programme Hub
│   └── index.html                        # Partner Proposition + Embedded Application Form
│
├── blog/                                 # Knowledgebase & Insights Hub
│   ├── index.html                        # Blog Directory (8 Articles)
│   ├── how-indian-msmes-stop-lead-leakage/index.html
│   ├── mastering-cash-flow-visibility-unified-invoicing/index.html
│   ├── running-inventory-on-excel-stifles-growth/index.html
│   ├── why-business-owners-need-executive-bi-dashboards/index.html
│   ├── practical-digital-transformation-indian-msmes/index.html
│   ├── 5-business-workflows-msmes-should-automate/index.html
│   ├── overcoming-operational-bottlenecks-msme-expansion/index.html
│   └── simplifying-employee-attendance-leave-tracking/index.html
│
├── contact/                              # Direct Contact & Live Demo Booking
│   └── index.html                        # Demo Booking Form + WhatsApp/Email Channels
│
├── legal/
│   ├── privacy/index.html                # Privacy & Data Protection Policy
│   ├── terms/index.html                  # Terms of Service & Commercial Conditions
│   └── refunds/index.html                # Cancellation & Refund Policy
│
├── css/
│   ├── style.css                         # Core CSS reset, ambient canvas, tokens, variables
│   └── components.css                    # Reusable UI primitives (buttons, cards, badges)
│
├── js/
│   ├── config.js                         # Global metadata, endpoints, brand constants
│   ├── features-data.js                  # 8 Core Features data source
│   ├── plans-data.js                     # 3 Commercial Plan tiers data source
│   ├── pricing.js                        # Pricing calculation engine (Monthly/Annual toggle)
│   ├── careers-data.js                   # Job listings & internship definitions
│   ├── affiliate-data.js                 # Partner categories & revenue share data
│   ├── blog-data.js                      # 8 Knowledgebase articles data
│   ├── forms-service.js                  # Centralized form submission, UTM parsing & validation
│   ├── modal-engine.js                   # Modal & SPA overlay manager
│   ├── 3d-hero.js                        # Canvas background animation
│   └── app.js                            # App initialization, mobile drawer, scroll spy
│
└── assets/                               # Optimized SVGs, PNGs, and JPG dashboards
```

---

## 3. ScaleNova Full Function & Feature Inventory

| Area / Feature | Implementation in ScaleNova | Technical Characteristics |
| :--- | :--- | :--- |
| **Sticky Navigation** | Glassmorphism container (`backdrop-blur-md`, `bg-white/85`), floating pill links, active link highlighting, mobile hamburger drawer. | Pure CSS transitions, zero external JS libraries for basic navigation. |
| **Theme & Dark Mode** | Clean dark/light mode toggle persistence via `localStorage` with `dark:` class Tailwind tokens. | Flawless contrast across all cards and text. |
| **Hero Section** | Dual-headline value prop, animated action badge, interactive CTA buttons (Primary: Book Demo, Secondary: Explore Features), social proof metrics. | Minimalist aesthetic with high visual hierarchy. |
| **Features System** | 8 structured cards with custom icons, color accents, step-by-step workflow bars, miniature UI preview boxes, and dedicated subpages. | Clean URL structure (`/features/<slug>/`). |
| **Pricing Engine** | Interactive Monthly/Annual billing toggle with auto-calculated savings (Save 16.7%), tier badges, stack entitlements matrix, direct CTA linking. | Dynamic calculation in `js/pricing.js` with zero page flicker. |
| **Modals System** | SPA modal overlay for fast interactive previews without losing place, synchronized with hash routing (`#modal-...`). | Accessible `aria-modal`, keyboard ESC handling, backdrop click closure. |
| **Form 1: Book Demo** | Located at `/contact/` and in demo modals. Captures Name, Company, Work Email, Phone, Industry, Plan, and Notes. | Validated in `js/forms-service.js` with short friendly success states. |
| **Form 2: Careers** | Located at `/careers/`. Opens a candidate application modal with target role pre-filled, resume file validation (up to 5MB, `.pdf/.doc/.docx`). | Client-side file size and MIME-type validation. |
| **Form 3: Partner/Affiliate** | Located at `/affiliate/`. Full embedded partner intake form with Partner Category dropdown, client reach estimate, and consent. | In-place confirmation state. |
| **WhatsApp CTA** | Canonical shortened prefilled message on floating button and CTAs: `Hi ScaleNova, I'd like to learn more about your Business OS and services.` | 100% uniformity across all 30 HTML pages. |
| **Blog & SEO** | 8 rich long-form articles with structured schema (`Article`, `BreadcrumbList`), reading time, author badges, and related links. | Fully indexable static pages. |
| **Security Posture** | Zero backend tokens or database keys embedded in frontend JS; safe fallback simulation mode; sanitized inputs. | Secure for static GitHub Pages hosting. |

---

## 4. BizzLoop Current Architecture & Problem Identification

### 4.1 Current BizzLoop State (`BizzLoop-Ltd/bizzloop-website`)
* **Repository Layout**: Single monolithic `index.html` (1,245 lines) with static scripts in `/js/` and styles in `/css/`.
* **Zero Dedicated Subpages**: Features, Plans, Careers, Partner, Blog, and Legal policies are completely locked inside JavaScript-driven modals (`<div id="demoModal">`, `<div id="careersModal">`, `<div id="blogAllModal">`, `<div id="privacyModal">`, etc.).

### 4.2 Critical Problems Identified in BizzLoop

```
Current BizzLoop Limitation
┌─────────────────────────────────────────────────────────────┐
│  Single Monolithic index.html (1,245 lines)                  │
│  ├── ❌ No dedicated URLs for Google/Bing Indexing           │
│  ├── ❌ Modal-inside-modal nesting breaks mobile viewports  │
│  ├── ❌ Browser Back/Forward navigation breaks user flow    │
│  ├── ❌ High cognitive load with all content in one bundle  │
│  └── ❌ Harder for multiple developers to maintain          │
└─────────────────────────────────────────────────────────────┘
                               ↓
Recommended Target Model (ScaleNova Reference)
┌─────────────────────────────────────────────────────────────┐
│  Dedicated Multi-Page Directory Architecture (MPA)          │
│  ├── ✅ /services/ & /services/<slug>/ for search discovery │
│  ├── ✅ /plans/ & /plans/<slug>/ for clear purchasing       │
│  ├── ✅ /careers/ with dedicated modal application flow      │
│  ├── ✅ /affiliate/ with dedicated in-page partner form      │
│  ├── ✅ /blog/ & /blog/<slug>/ for UK SME content authority │
│  ├── ✅ /contact/ for high-converting consultation intake   │
│  └── ✅ Clean /privacy/, /terms/, /gdpr/, /cookies/ pages   │
└─────────────────────────────────────────────────────────────┘
```

1. **SEO & Discoverability Deficit**: Search engines cannot index individual BizzLoop services (e.g., *UK Business CRM*, *SME Invoicing & Workflow Automation*, *Managed Web & Lead Intake*) because they lack standalone URLs.
2. **Mobile UX Friction**: When a mobile user opens the Careers portal modal and then taps "Apply Now", a second modal opens on top of the first modal, creating scroll lock and viewport jumping.
3. **Conversion Bottleneck**: Visitors looking for pricing details or specific services are forced into modal popups rather than bookmarkable, shareable pages.
4. **Form Fragmentation**: Demo form exists in a modal, partner application is buried in a modal, and general contact is lacking a dedicated `/contact/` landing page.

---

## 5. Side-by-Side Comparison: ScaleNova vs. BizzLoop

| Architecture Area | ScaleNova Reference Architecture | Current BizzLoop State | Recommended BizzLoop Direction |
| :--- | :--- | :--- | :--- |
| **Structure** | Modular Multi-Page Architecture (30 standalone HTML files). | Monolithic single-page (`index.html`) with 13 modals. | **Rebuild**: Adopt directory-level MPA with dedicated subpages. |
| **Header & Nav** | Glassmorphism sticky header with pill navigation, mobile slide-out drawer, breadcrumb trail on subpages. | Fixed sticky header with SPA hash triggers (`#services`, `#pricing`). | **Improve**: Implement unified header across all pages with UK contact info. |
| **Services / Features** | 8 modular cards + 8 dedicated detail pages (`/features/<slug>/`). | 8 Action Cards rendered in DOM + 4 Managed Pillars + 9-step loop. | **Create Dedicated Pages**: Build `/services/` hub + 8 subpages (`/services/<slug>/`). |
| **Pricing & Plans** | 3 tiers (Core, Growth, Elite) with interactive monthly/annual toggle + 3 dedicated plan pages. | 3 tiers (Starter £149, Growth £349, Enterprise £749) with toggle + modal details. | **Rebuild**: Build `/plans/` hub + 3 dedicated plan pages (`/plans/<slug>/`). |
| **Careers Hub** | Standalone `/careers/` page with 6 roles + modal application + resume validation. | Embedded modal (`#careersModal`) with dynamic JS rendering. | **Rebuild**: Build dedicated `/careers/` page with application modal. |
| **Partner Programme** | Standalone `/affiliate/` page with 4 partner types + embedded intake form. | Embedded modal (`#affiliateModal`) with dynamic JS rendering. | **Rebuild**: Build dedicated `/affiliate/` page with embedded partner form. |
| **Blog / Knowledgebase** | Standalone `/blog/` hub + 8 standalone long-form articles (`/blog/<slug>/`). | Embedded modal (`#blogAllModal`) + reader modal (`#blogArticleModal`). | **Rebuild**: Build dedicated `/blog/` hub + standalone article pages (`/blog/<slug>/`). |
| **Contact & Booking** | Standalone `/contact/` page + Form 1 + WhatsApp CTA + Phone/Email channels. | Contact section on homepage + Demo modal. | **Create New**: Build dedicated `/contact/` page with comprehensive booking form. |
| **Legal & Compliance** | Standalone `/privacy/`, `/terms/`, `/refunds/` pages. | Modals (`#privacyModal`, `#termsModal`, `#cookieModal`, `#gdprModal`). | **Rebuild**: Build standalone `/privacy/`, `/terms/`, `/gdpr/`, `/cookies/` pages. |
| **Forms Handling** | Centralized `js/forms-service.js` with client validation, file handling, UTM parsing. | Basic submit handlers in `js/forms-service.js` using generic alerts. | **Improve**: Standardize with friendly inline success states and zero secrets. |
| **WhatsApp CTA** | Canonical short message: `Hi ScaleNova, I'd like to learn more about your Business OS and services.` | Message: `Hello BizzLoop team, I would like to learn more about your Managed Business Services Platform.` | **Improve**: Standardize canonical short message across all pages: `Hi BizzLoop, I'd like to learn more about your Business Services Platform.` |
| **Design System** | Violet (`#7F00FF`), Steel Blue (`#4682B4`), Plus Jakarta Sans, dark mode support. | Electric/Royal Blue (`#1451D8`), Cyan (`#04A5C2`), Inter & Plus Jakarta Sans. | **Keep & Elevate**: Retain BizzLoop's distinct UK blue identity with refined card tokens. |
| **SEO & Meta** | Semantic HTML5, OpenGraph, Twitter Cards, Schema.org (`Organization`, `SoftwareApplication`, `Article`). | Schema.org on homepage only; zero indexable subpage URLs. | **Rebuild**: Comprehensive Schema.org & canonical metadata for every subpage. |

---

## 6. Proposed BizzLoop Architecture & Directory Map

```
bizzloop-website/
├── index.html                                 # Canonical Homepage (Hero, 8 Services, 4 Pillars, 9-Step Loop, Pricing, FAQ)
├── 404.html                                    # Custom UK Branded 404 Page
├── sitemap.xml                                 # Auto-generated XML Sitemap (All 26+ URLs)
├── robots.txt                                  # Crawler Indexing Directives
│
├── services/                                   # Managed Services Hub & Detail Pages
│   ├── index.html                              # Services Hub Overview (8 Core Services & 4 Pillars)
│   ├── crm-customer-management/index.html      # 01. CRM & Customer Workspace
│   ├── business-management/index.html          # 02. Operations & Task Coordination
│   ├── website-lead-capture/index.html         # 03. High-Conversion Websites & Intake
│   ├── seo-search-visibility/index.html        # 04. Technical & Local UK SEO
│   ├── digital-marketing/index.html            # 05. Targeted Campaigns & Lead Nurturing
│   ├── social-media/index.html                 # 06. Content Hub & Social Management
│   ├── automation-workflows/index.html         # 07. Task Automation & Smart Triggers
│   └── reporting-visibility/index.html         # 08. Real-Time Business Cockpit & BI
│
├── plans/                                      # Pricing & Commercial Hub
│   ├── index.html                              # Commercial Overview (Starter £149, Growth £349, Enterprise £749)
│   ├── starter/index.html                      # Starter Plan Dedicated Page (£149/mo · Up to 5 Users)
│   ├── growth/index.html                       # Growth Plan Dedicated Page (£349/mo · Up to 15 Users · Most Popular)
│   └── enterprise/index.html                   # Enterprise Plan Dedicated Page (£749/mo · Unlimited Users)
│
├── careers/                                    # Careers & Talent Acquisition
│   └── index.html                              # 6 UK Roles/Internships + Candidate Application Modal (Form 2)
│
├── affiliate/                                  # Partner & Advisor Programme
│   └── index.html                              # 20% Recurring Share + Embedded Partner Application Form (Form 3)
│
├── blog/                                       # UK SME Knowledgebase & Business Guides
│   ├── index.html                              # Blog Hub (Categories: Growth, Operations, CRM, Tech)
│   ├── why-uk-smes-need-connected-systems/index.html
│   ├── turn-website-into-lead-engine/index.html
│   ├── crm-vs-erp-explained-simply/index.html
│   └── stopping-admin-overload-uk-businesses/index.html
│
├── contact/                                    # Direct Contact & Live Demo Intake
│   └── index.html                              # Book Demo Form (Form 1) + Direct UK Channels
│
├── legal/
│   ├── privacy/index.html                      # UK Privacy Policy (Data Protection Act 2018)
│   ├── terms/index.html                        # Terms & Commercial Conditions (England & Wales)
│   ├── cookies/index.html                      # Cookie Policy & PECR Compliance
│   └── gdpr/index.html                         # UK GDPR Compliance Statement
│
├── css/
│   ├── style.css                               # Design Tokens, Ambient Canvas, CSS Grid, Typography
│   └── components.css                          # Reusable UI Primitives (bl-btn-primary, bl-card, badges)
│
├── js/
│   ├── config.js                               # Entity Constants (BIZZLOOP LTD, Co No 17319641, UK Contacts)
│   ├── action-cards-data.js                    # 8 Core Services, 4 Pillars, 9-Step Loop Definitions
│   ├── plans-data.js                           # Verified Commercial Tiers in GBP (£)
│   ├── pricing.js                              # Monthly/Annual Billing Calculator (16.7% Savings)
│   ├── careers-data.js                         # UK Job Roles, Internships, Living Wage Standards
│   ├── affiliate-data.js                       # Partner Types, Revenue Share & Workflow Steps
│   ├── blog-data.js                            # Practical Business Insights & Guides
│   ├── forms-service.js                        # Unified Form Handler (Validation, File Checking, UTMs)
│   ├── modal-engine.js                         # Lightweight Modal Engine & Hash Router
│   └── app.js                                  # Global App Bootstrapper, Drawer, FAQ Accordions
│
└── assets/                                     # SVG Logos, Favicons, and UI Illustrations
```

---

## 7. BizzLoop Content & Positioning Model

### 7.1 Entity & Commercial Truths
* **Company**: `BIZZLOOP LTD` (Company No. `17319641`)
* **Jurisdiction**: Registered in England & Wales, United Kingdom.
* **Positioning**: *Managed Business Services Platform* — connecting CRM, digital presence, marketing, and business workflows into one unified loop.
* **Target Audience**: UK Sole Traders, Consultancies, Trade Businesses, Growing Agencies, and Expanding SMEs.

### 7.2 Service Matrix (The 8 Loops)

| # | Service Name | Problem Addressed | What BizzLoop Delivers | Business Outcome | Target User |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **01** | **CRM & Customer Workspace** | Lost leads, scattered notes, no central contact history. | Unified customer profiles, deal pipelines, enquiry logs, communication records. | 100% follow-up rate, zero lead drop-off. | Sales teams, consultants, service firms. |
| **02** | **Business Management** | Task chaos, missed delivery deadlines, uncoordinated team operations. | Kanban task boards, operational records, project milestones, staff allocation. | Predictable service delivery & team clarity. | Operations directors, project managers. |
| **03** | **Website & Lead Capture** | Static websites that fail to generate structured leads. | High-converting web presence, mobile intake forms, instant notification sync. | Steady stream of qualified commercial enquiries. | Any UK business wanting online growth. |
| **04** | **SEO & Search Visibility** | Low Google rankings, invisible to local and national customers. | On-page technical SEO, structured metadata, local search profiles, keyword strategy. | Sustainable organic search traffic and inbound interest. | Local services, specialized B2B firms. |
| **05** | **Digital Marketing** | Irregular marketing, lack of customer nurture campaigns. | Targeted outreach, email marketing sequences, lifecycle marketing campaigns. | Higher client retention & repeat business. | Growth-focused founders, marketing leads. |
| **06** | **Social Media Management** | Inconsistent posting, detached from core sales pipeline. | Content scheduling, brand alignment, cross-channel engagement tracking. | Consistent brand authority across LinkedIn & Instagram. | B2B brands, creative studios. |
| **07** | **Automation & Workflows** | Hours wasted on manual data entry, payment chasing, and copying information. | Automated invoice chasers, instant lead routing, trigger-based task creation. | 15+ hours reclaimed per staff member weekly. | Fast-paced operational teams. |
| **08** | **Reporting & Business Visibility** | Flying blind without clear metrics on revenue, leads, and staff workload. | Live executive dashboards, sales pipeline metrics, operational health reporting. | Confident, data-driven management decisions. | Managing Directors, business owners. |

---

## 8. BizzLoop Design System & UI Specifications

### 8.1 Color System (Distinct UK Identity)
* **Primary Brand Blue**: `#1451D8` (`--bl-brand-500` - Royal / Electric Blue)
* **Primary Hover / Active**: `#1D4ED8` (`--bl-brand-600`), `#1E40AF` (`--bl-brand-700`)
* **Brand Light Tints**: `#EFF6FF` (`--bl-brand-50`), `#DBEAFE` (`--bl-brand-100`)
* **Accent Cyan**: `#04A5C2` (Operations & Management highlights)
* **Accent Emerald**: `#10B981` (Growth, Automation & Success states)
* **Accent Amber**: `#F59E0B` (Support & Attention badges)
* **Accent Purple**: `#8B5CF6` (SEO & Analytics highlights)
* **Accent Rose / Pink**: `#EC4899` (Social & Creative highlights)
* **Neutrals**: Dark Slate `#0F172A`, Slate `#475569`, Muted Slate `#94A3B8`, Light Surface `#F8FAFC`, Pure White `#FFFFFF`.

### 8.2 Typography & Iconography
* **Primary Font**: `Inter`, `-apple-system`, `sans-serif` (Crisp readability, professional British tone).
* **Display / Headings Font**: `Plus Jakarta Sans` (Modern geometric weight).
* **Monospace Font**: `JetBrains Mono` (Entity numbers, pricing codes, metadata).
* **Icon Suite**: `@tabler/icons-webfont` (Clean, geometric line icons).

### 8.3 UI Component Styling Tokens
* **Buttons**:
  * `.bl-btn-primary`: Solid Royal Blue background (`#1451D8`), white text, rounded-xl (`12px`), smooth hover elevation (`shadow-md shadow-blue-500/20`).
  * `.bl-btn-secondary`: White background, border `1px solid #E2E8F0`, slate-700 text, hover:bg-slate-50.
* **Cards**:
  * `.bl-card`: White surface, subtle border `1px solid #E2E8F0`, shadow `0 4px 20px rgba(15, 23, 42, 0.04)`, rounded-2xl (`16px`).
  * `.bl-card:hover`: Border color `#BFDBFE`, shadow `0 12px 32px rgba(20, 81, 216, 0.08)`, subtle `-2px` translateY.

---

## 9. Form Architecture & Security Strategy

### 9.1 The 3 Canonical Website Forms

```
Form 1: Book Demo & Strategy Call
├── Locations: /contact/ and Demo Modals
├── Fields: First Name, Last Name, Work Email, Phone/WhatsApp, Business Name, Team Size, Interest Area, Notes, Consent
├── Validation: Email syntax, UK/Intl Phone format, required fields check
└── Action: ScaleNovaForms.handleDemoSubmit(event) -> Friendly Success State

Form 2: Career Candidate Application
├── Locations: /careers/ (Triggered by 'Apply Now' buttons)
├── Fields: Target Role (Auto-filled), Full Name, Email, Phone, Work Preference, Resume Upload (Max 5MB), Cover Note, Consent
├── Validation: Resume format (.pdf, .doc, .docx), File size (< 5MB), required checks
└── Action: ScaleNovaForms.handleCareerSubmit(event) -> Friendly Success State

Form 3: Partner / Affiliate Application
├── Locations: /affiliate/ (Embedded Section #affiliate-apply-form)
├── Fields: Full Name, Company/Firm Name, Work Email, Phone, Partner Category, Client Reach, Strategy Notes, Consent
├── Validation: Category selection, email format, required checks
└── Action: ScaleNovaForms.handleAffiliateSubmit(event) -> Friendly Success State
```

### 9.2 Security & Data Protection Standard
1. **Zero Secret Exposure**: Public JavaScript and HTML must contain **NO** API tokens, Frappe API secrets, database passwords, or Google Cloud service keys.
2. **Safe Dev/Production Fallback**: When `BizzLoopConfig.endpoints.formWebhook` is empty, forms execute clean local simulation mode with realistic loading spinners and instant feedback.
3. **UK GDPR / PECR Compliance**:
   * Explicit consent checkboxes on every form.
   * Cookie banner with "Essential Only" and "Accept All" controls.
   * Prominent legal disclosures referencing BIZZLOOP LTD (Company No. 17319641).

---

## 10. Phased Implementation Roadmap

```
PHASE 0: Checkpoint & Safety Baseline
├── Git branch: backup-before-bizzloop-refactor
└── Verify clean working directory

PHASE 1: Core Design System & Global Assets
├── Standardize css/style.css and css/components.css design tokens
└── Verify js/config.js entity constants (BIZZLOOP LTD, GBP tiers)

PHASE 2: Shared Shell & Navigation Engine
├── Build standard Header with desktop pill navigation & mobile drawer
└── Build standard Footer with UK entity details, legal links, and social links

PHASE 3: Homepage Refinement (MPA-Aligned)
├── Update index.html with links pointing to dedicated subpages
└── Retain 8 Action Cards, 4 Pillars, 9-Step Loop, and Pricing matrix

PHASE 4: Services Hub & 8 Dedicated Service Pages
├── Build services/index.html (Hub)
└── Build 8 dedicated pages:
    ├── services/crm-customer-management/index.html
    ├── services/business-management/index.html
    ├── services/website-lead-capture/index.html
    ├── services/seo-search-visibility/index.html
    ├── services/digital-marketing/index.html
    ├── services/social-media/index.html
    ├── services/automation-workflows/index.html
    └── services/reporting-visibility/index.html

PHASE 5: Pricing Hub & 3 Dedicated Plan Pages
├── Build plans/index.html (Commercial Matrix)
└── Build 3 dedicated pages:
    ├── plans/starter/index.html
    ├── plans/growth/index.html
    └── plans/enterprise/index.html

PHASE 6: Careers & Partner Pages
├── Build careers/index.html with 6 UK roles & Candidate Application Modal
└── Build affiliate/index.html with 4 partner types & embedded Application Form

PHASE 7: Blog Hub & 4 Dedicated Knowledge Articles
├── Build blog/index.html (Knowledge Hub)
└── Build 4 standalone article pages:
    ├── blog/why-uk-smes-need-connected-systems/index.html
    ├── blog/turn-website-into-lead-engine/index.html
    ├── blog/crm-vs-erp-explained-simply/index.html
    └── blog/stopping-admin-overload-uk-businesses/index.html

PHASE 8: Contact & Legal Pages
├── Build contact/index.html with Book Demo Form
└── Build legal pages:
    ├── privacy/index.html
    ├── terms/index.html
    ├── cookies/index.html
    └── gdpr/index.html

PHASE 9: SEO, Sitemap & Link Verification
├── Generate complete sitemap.xml covering all 26+ pages
├── Configure robots.txt
└── Automated link validation script (0 broken links)

PHASE 10: Git Commit & Remote Verification
├── Commit: feat: rebuild bizzloop website with modular mpa architecture
└── Verify build on GitHub Pages
```

---

## 11. Estimated File Changes & Impact

| Category | Action | Target Files |
| :--- | :--- | :--- |
| **New Directory Structure** | Create | `services/`, `plans/`, `careers/`, `affiliate/`, `blog/`, `contact/`, `legal/` |
| **New HTML Pages** | Create (25+ files) | `services/index.html` + 8 subpages, `plans/index.html` + 3 subpages, `careers/index.html`, `affiliate/index.html`, `blog/index.html` + 4 articles, `contact/index.html`, legal subpages, `404.html` |
| **Homepage Update** | Modify | `index.html` (Refined to link cleanly to dedicated directory pages) |
| **Stylesheets** | Enhance | `css/style.css`, `css/components.css` (Refined BizzLoop design tokens) |
| **Data & Logic Modules** | Maintain & Enhance | `js/config.js`, `js/action-cards-data.js`, `js/plans-data.js`, `js/careers-data.js`, `js/affiliate-data.js`, `js/blog-data.js`, `js/forms-service.js`, `js/pricing.js`, `js/modal-engine.js`, `js/app.js` |
| **SEO & Routing** | Update | `sitemap.xml`, `robots.txt` |

---

## 12. Verification & Review Gates

Prior to initiating code execution in the BizzLoop repository, this audit and implementation master plan provides a complete blueprint.

* [x] **ScaleNova Reference Audited**: Full directory structure, forms engine, pricing matrix, and design tokens cataloged.
* [x] **BizzLoop Codebase Inspected**: Identified monolithic SPA limitations, modal stacking issues, and SEO gaps.
* [x] **Brand Independence Enforced**: Preserved BizzLoop's UK identity, GBP pricing (£149/£349/£749), Company No. 17319641, and Royal Blue visual language.
* [x] **Architecture Plan Ready**: 26+ dedicated, indexable static pages planned across `/services/`, `/plans/`, `/careers/`, `/affiliate/`, `/blog/`, `/contact/`, and legal routes.
