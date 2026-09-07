/**
 * Interactive Bilingual Application Controller
 * Thanchanok Tan-in (Data Science & Analytics Intern)
 */

(function () {
  'use strict';

  // Application State
  const state = {
    lang: localStorage.getItem('portfolio_lang') || 'th',
    theme: localStorage.getItem('portfolio_theme') || 'dev-dark',
    projectFilter: 'all',
    hubTab: 'publications',
    currentSkillIdx: 0,
    allSkills: [],
    mobileMenuOpen: false
  };

  // Populate flattened skills list for carousel navigation
  function initSkillsList() {
    state.allSkills = [];
    if (!PORTFOLIO_DATA || !PORTFOLIO_DATA.skills) return;
    PORTFOLIO_DATA.skills.forEach(group => {
      group.items.forEach(item => {
        state.allSkills.push({
          ...item,
          categoryName: group.category
        });
      });
    });
  }

  // Theme Management (3-way: Developer Dark, Executive Dark, Analytic Light)
  function setTheme(themeName, notify = false) {
    state.theme = themeName;
    localStorage.setItem('portfolio_theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);

    // Update active indicators on all theme toggle buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
      if (btn.getAttribute('data-theme-val') === themeName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (notify) {
      const themeTitles = {
        'dev-dark': state.lang === 'th' ? 'ธีม: 🛠️ Developer Dark' : 'Theme: 🛠️ Developer Dark',
        'exec-dark': state.lang === 'th' ? 'ธีม: 💼 Executive Dark' : 'Theme: 💼 Executive Dark',
        'analytic-light': state.lang === 'th' ? 'ธีม: 📊 Analytic Light' : 'Theme: 📊 Analytic Light'
      };
      showToast(themeTitles[themeName] || themeName, 'palette');
    }
  }

  // Helper to retrieve translated text from object or fallback
  function t(field) {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[state.lang] || field['th'] || field['en'] || '';
  }

  // Toast Notification System
  function showToast(message, iconName = 'check-circle') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast flex items-center gap-3 bg-slate-900/95 border border-cyan-500/40 text-white px-4 py-3 rounded-xl shadow-xl backdrop-blur-md';
    toast.innerHTML = `
      <i data-lucide="${iconName}" class="w-5 h-5 text-cyan-400 shrink-0"></i>
      <span class="text-sm font-medium">${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Copy to clipboard helper
  function copyText(text, label) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        const msg = state.lang === 'th'
          ? `คัดลอก ${label}: ${text} สำเร็จ!`
          : `Copied ${label}: ${text} to clipboard!`;
        showToast(msg, 'check');
      }).catch(() => fallbackCopy(text, label));
    } else {
      fallbackCopy(text, label);
    }
  }

  function fallbackCopy(text, label) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    const msg = state.lang === 'th'
      ? `คัดลอก ${label}: ${text} สำเร็จ!`
      : `Copied ${label}: ${text} to clipboard!`;
    showToast(msg, 'check');
  }

  // Set Language
  function setLanguage(newLang) {
    state.lang = newLang;
    localStorage.setItem('portfolio_lang', newLang);

    // Update document title & html lang attribute
    document.documentElement.lang = newLang;
    if (newLang === 'th') {
      document.body.classList.add('lang-th');
      document.title = `${PORTFOLIO_DATA.profile.name.th} | Data Science & Analytics Intern Portfolio`;
    } else {
      document.body.classList.remove('lang-th');
      document.title = `${PORTFOLIO_DATA.profile.name.en} | Data Science & Analytics Intern Portfolio`;
    }

    renderAll();
    if (window.lucide) window.lucide.createIcons();
  }

  // Render Navigation
  function renderNav() {
    const nav = PORTFOLIO_DATA.ui.nav;
    document.getElementById('nav-brand-title').textContent = t(nav.brandTitle);
    document.getElementById('nav-brand-sub').textContent = t(nav.brandSubtitle);

    document.getElementById('nav-link-about').textContent = t(nav.about);
    document.getElementById('nav-link-skills').textContent = t(nav.skills);
    document.getElementById('nav-link-projects').textContent = t(nav.projects);
    document.getElementById('nav-link-experience').textContent = t(nav.experience);
    document.getElementById('nav-link-honors').textContent = t(nav.honors);
    document.getElementById('nav-link-contact').textContent = t(nav.contact);

    // Mobile nav links
    document.getElementById('mobile-link-about').textContent = t(nav.about);
    document.getElementById('mobile-link-skills').textContent = t(nav.skills);
    document.getElementById('mobile-link-projects').textContent = t(nav.projects);
    document.getElementById('mobile-link-experience').textContent = t(nav.experience);
    document.getElementById('mobile-link-honors').textContent = t(nav.honors);
    document.getElementById('mobile-link-contact').textContent = t(nav.contact);

    // Compact Language switch button label (TH / EN)
    const activeLangLabel = state.lang === 'th' ? 'TH' : 'EN';
    const langBtn = document.getElementById('lang-switch-btn');
    if (langBtn) {
      langBtn.innerHTML = `
        <i data-lucide="globe" class="w-3.5 h-3.5 text-cyan-400 shrink-0"></i>
        <span class="font-extrabold text-xs tracking-wider">${activeLangLabel}</span>
      `;
    }
    const mobileLangBtn = document.getElementById('mobile-lang-switch-btn');
    if (mobileLangBtn) {
      mobileLangBtn.innerHTML = `
        <i data-lucide="globe" class="w-4 h-4 text-cyan-400 shrink-0"></i>
        <span class="font-extrabold text-sm tracking-wider">${activeLangLabel}</span>
      `;
    }

    document.getElementById('nav-resume-btn-text').textContent = t(nav.downloadResume);
    const navTranscriptBtn = document.getElementById('nav-transcript-btn-text');
    if (navTranscriptBtn) navTranscriptBtn.textContent = t(nav.viewTranscript);
    const mobileTranscriptBtn = document.getElementById('mobile-transcript-btn-text');
    if (mobileTranscriptBtn) mobileTranscriptBtn.textContent = t(nav.viewTranscript);
  }

  // Render Hero Section
  function renderHero() {
    const profile = PORTFOLIO_DATA.profile;
    const hero = PORTFOLIO_DATA.ui.hero;

    document.getElementById('hero-status-badge').textContent = t(profile.statusBadge);
    document.getElementById('hero-greeting').textContent = t(hero.greeting);
    document.getElementById('hero-name').textContent = t(profile.name);
    document.getElementById('hero-nickname').textContent = t(hero.subGreeting);
    document.getElementById('hero-role').textContent = t(profile.role);
    document.getElementById('hero-affiliation').textContent = t(hero.roleTag);
    document.getElementById('hero-headline').textContent = t(profile.headline);
    document.getElementById('hero-target-roles').textContent = t(hero.targetRoles);

    // CTA Buttons (Preserve internal icons by updating text span if present)
    const ctaProjEl = document.getElementById('hero-cta-projects-text');
    if (ctaProjEl) ctaProjEl.textContent = t(hero.ctaProjects);
    else {
      const btn = document.getElementById('hero-cta-projects');
      if (btn) btn.innerHTML = `<i data-lucide="layers" class="w-4 h-4 shrink-0"></i><span id="hero-cta-projects-text">${t(hero.ctaProjects)}</span>`;
    }

    const ctaContactEl = document.getElementById('hero-cta-contact-text');
    if (ctaContactEl) ctaContactEl.textContent = t(hero.ctaContact);
    else {
      const btn = document.getElementById('hero-cta-contact');
      if (btn) btn.innerHTML = `<i data-lucide="mail" class="w-4 h-4 text-cyan-400 shrink-0"></i><span id="hero-cta-contact-text">${t(hero.ctaContact)}</span>`;
    }

    const ctaResumeEl = document.getElementById('hero-cta-resume-text');
    if (ctaResumeEl) {
      ctaResumeEl.textContent = t(hero.ctaResume);
    }

    const ctaTranscriptEl = document.getElementById('hero-cta-transcript-text');
    if (ctaTranscriptEl) ctaTranscriptEl.textContent = t(hero.ctaTranscript);
    else {
      const btn = document.getElementById('hero-cta-transcript');
      if (btn) btn.innerHTML = `<i data-lucide="graduation-cap" class="w-4 h-4 text-emerald-300 shrink-0"></i><span id="hero-cta-transcript-text">${t(hero.ctaTranscript)}</span>`;
    }

    // Quick contact details
    document.getElementById('hero-email-val').textContent = profile.contact.email;
    document.getElementById('hero-phone-val').textContent = profile.contact.phoneDisplay || profile.contact.phone;

    // Stat counters
    const statsContainer = document.getElementById('hero-stats-container');
    if (statsContainer) {
      statsContainer.innerHTML = profile.stats.map(stat => `
        <div class="glass-card p-4 sm:p-5 rounded-2xl border border-slate-700/50 text-center hover:border-cyan-500/40 transition">
          <div class="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400 tracking-tight">
            ${stat.value}
          </div>
          <div class="text-xs sm:text-sm font-semibold text-slate-200 mt-1">${t(stat.label)}</div>
          <div class="text-[11px] sm:text-xs text-slate-400 mt-0.5">${t(stat.subtext)}</div>
        </div>
      `).join('');
    }
  }

  // Render About & Education
  function renderAboutEducation() {
    const profile = PORTFOLIO_DATA.profile;
    const edu = PORTFOLIO_DATA.education;
    const sec = PORTFOLIO_DATA.ui.sections.about;

    document.getElementById('sec-about-title').textContent = t(sec.title);
    document.getElementById('sec-about-sub').textContent = t(sec.subtitle);

    document.getElementById('about-bio-text').textContent = t(profile.bio);

    // Education UI Labels
    const lbls = PORTFOLIO_DATA.educationLabels;
    if (lbls) {
      const secTitleEl = document.getElementById('edu-section-title');
      if (secTitleEl) secTitleEl.textContent = t(lbls.sectionTitle);
      const gpaxLblEl = document.getElementById('edu-gpax-label');
      if (gpaxLblEl) gpaxLblEl.textContent = t(lbls.gpaLabel);
      const txBtnLblEl = document.getElementById('edu-transcript-btn-label');
      if (txBtnLblEl) txBtnLblEl.textContent = t(lbls.viewTranscriptBtn);
      const univLblEl = document.getElementById('edu-lbl-university');
      if (univLblEl) univLblEl.textContent = t(lbls.universityLabel);
      const facLblEl = document.getElementById('edu-lbl-faculty');
      if (facLblEl) facLblEl.textContent = t(lbls.facultyLabel);
      const deptLblEl = document.getElementById('edu-lbl-department');
      if (deptLblEl) deptLblEl.textContent = t(lbls.departmentLabel);
      const majorLblEl = document.getElementById('edu-lbl-major');
      if (majorLblEl) majorLblEl.textContent = t(lbls.majorLabel);
      const cwTitleEl = document.getElementById('edu-coursework-label');
      if (cwTitleEl) cwTitleEl.textContent = t(lbls.relevantCourseworkTitle);
    }

    // Education card values
    const univEl = document.getElementById('edu-university');
    if (univEl) univEl.textContent = t(edu.university);
    const facEl = document.getElementById('edu-faculty');
    if (facEl) facEl.textContent = t(edu.faculty);
    const deptEl = document.getElementById('edu-dept');
    if (deptEl) deptEl.textContent = t(edu.department);
    const majorEl = document.getElementById('edu-major');
    if (majorEl) majorEl.textContent = t(edu.major);
    const badgeEl = document.getElementById('edu-status-badge');
    if (badgeEl) badgeEl.textContent = t(edu.yearLevel);
    const periodEl = document.getElementById('edu-period');
    if (periodEl) periodEl.textContent = t(edu.period);
    const gpaxEl = document.getElementById('edu-gpax');
    if (gpaxEl) gpaxEl.textContent = edu.gpax;

    // Relevant Coursework chips
    const coursesContainer = document.getElementById('edu-courses-container');
    if (coursesContainer) {
      coursesContainer.innerHTML = edu.relevantCourses.map(course => `
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-800/80 border border-slate-700 text-cyan-300 hover:border-cyan-500/50 hover:bg-slate-800 transition">
          <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-cyan-400"></i>
          ${t(course)}
        </span>
      `).join('');
    }
  }

  // Render Skills Section (5 High-Level Category Cards with Deep-Dive Modal)
  function renderSkills() {
    initSkillsList();
    const sec = PORTFOLIO_DATA.ui.sections.skills;
    const titleEl = document.getElementById('sec-skills-title');
    if (titleEl) titleEl.textContent = t(sec.title);
    const subEl = document.getElementById('sec-skills-sub');
    if (subEl) subEl.textContent = t(sec.subtitle);

    const skillsContainer = document.getElementById('skills-grid-container');
    if (!skillsContainer) return;

    skillsContainer.innerHTML = PORTFOLIO_DATA.skills.map((cat, catIdx) => `
      <div class="category-card glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5 transition duration-300 group cursor-pointer"
           data-category-index="${catIdx}"
           role="button"
           tabindex="0"
           title="${state.lang === 'th' ? 'คลิกเพื่อดูเจาะลึกทักษะและการใช้งานจริง' : 'Click to explore deep-dive tools & use cases'}">
        <div>
          <!-- Header: Icon & Category Title -->
          <div class="flex items-start gap-4 mb-4 border-b border-slate-800/80 pb-4">
            <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition">
              <i data-lucide="${cat.icon}" class="w-6 h-6"></i>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                  ${t(cat.badge)}
                </span>
                <span class="text-xs text-slate-400 font-mono">${String(catIdx + 1).padStart(2, '0')} / ${String(PORTFOLIO_DATA.skills.length).padStart(2, '0')}</span>
              </div>
              <h3 class="text-base sm:text-lg font-extrabold text-white group-hover:text-cyan-300 transition leading-snug">
                ${t(cat.shortTitle || cat.category)}
              </h3>
            </div>
          </div>

          <!-- Category Mission & Overview -->
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
            ${t(cat.summary)}
          </p>

          <!-- Key Tools Pills Showcase -->
          <div class="mb-5">
            <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i data-lucide="wrench" class="w-3.5 h-3.5 text-cyan-400"></i>
              <span>${state.lang === 'th' ? 'เครื่องมือหลักในหมวดนี้' : 'Key Tools & Technologies'}</span>
            </div>
            <div class="flex flex-wrap gap-1.5">
              ${cat.keyTools ? cat.keyTools.map(kt => `
                <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800/90 text-slate-200 border border-slate-700/80 group-hover:border-cyan-500/40 transition">
                  ${kt}
                </span>
              `).join('') : ''}
            </div>
          </div>
        </div>

        <!-- Action Target: Deep-dive Link Button -->
        <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:text-cyan-300">
          <span class="inline-flex items-center gap-1.5 text-slate-400 font-normal">
            <i data-lucide="layers" class="w-3.5 h-3.5 text-cyan-400"></i>
            <span>${cat.items.length} ${state.lang === 'th' ? 'เครื่องมือหลัก' : 'Core Tools'}</span>
          </span>
          <span class="inline-flex items-center gap-1.5 bg-cyan-500/10 group-hover:bg-cyan-500 group-hover:text-slate-950 px-3 py-1.5 rounded-xl border border-cyan-500/30 transition duration-200">
            <span>${state.lang === 'th' ? 'เจาะลึกทักษะ' : 'Explore Deep-Dive'}</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"></i>
          </span>
        </div>
      </div>
    `).join('');

    // Attach click and enter handlers to category cards
    skillsContainer.querySelectorAll('.category-card').forEach(card => {
      const handleOpen = () => {
        const idx = parseInt(card.getAttribute('data-category-index'), 10);
        if (!isNaN(idx)) openSkillModal(idx);
      };
      card.addEventListener('click', handleOpen);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      });
    });
  }

  // Render Projects Section
  function renderProjects() {
    const sec = PORTFOLIO_DATA.ui.sections.projects;
    document.getElementById('sec-projects-title').textContent = t(sec.title);
    document.getElementById('sec-projects-sub').textContent = t(sec.subtitle);

    // Update filter buttons label
    document.getElementById('filter-btn-all').textContent = t(sec.filterAll);
    document.getElementById('filter-btn-ml').textContent = t(sec.filterML);
    document.getElementById('filter-btn-bi').textContent = t(sec.filterBI);
    document.getElementById('filter-btn-data-mining').textContent = t(sec.filterMining);

    const container = document.getElementById('projects-grid-container');
    if (!container) return;

    const filtered = PORTFOLIO_DATA.projects.filter(p => {
      if (state.projectFilter === 'all') return true;
      return p.category === state.projectFilter;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12 text-slate-400">
          <i data-lucide="folder-search" class="w-12 h-12 mx-auto mb-3 text-slate-600"></i>
          <p class="text-base">${state.lang === 'th' ? 'ไม่พบโปรเจกต์ในหมวดหมู่นี้' : 'No projects found in this category'}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(project => `
      <div class="glass-card rounded-2xl border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/40 transition">
        <div>
          <!-- Badges header -->
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
              ${t(project.badge)}
            </span>
            ${project.awardBadge ? `
              <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300">
                ${t(project.awardBadge)}
              </span>
            ` : ''}
          </div>

          <!-- Title -->
          <h3 class="text-lg sm:text-xl font-bold text-white mb-3 hover:text-cyan-400 transition">
            ${t(project.title)}
          </h3>

          <!-- Problem & Solution -->
          <div class="space-y-3 mb-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div class="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              <span class="font-bold text-slate-200 block mb-1 text-xs uppercase tracking-wider text-cyan-400">
                🎯 ${state.lang === 'th' ? 'ที่มาและโจทย์ปัญหา (Problem Context)' : 'Problem Statement'}
              </span>
              <p class="text-slate-300">${t(project.problem)}</p>
            </div>
            <div class="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              <span class="font-bold text-slate-200 block mb-1 text-xs uppercase tracking-wider text-emerald-400">
                💡 ${state.lang === 'th' ? 'แนวทางแก้ไขและผลงานที่พัฒนา (Implementation)' : 'Methodology & Solution'}
              </span>
              <p class="text-slate-300">${t(project.solution)}</p>
            </div>
          </div>

          <!-- Measurable Metrics -->
          <div class="grid grid-cols-3 gap-2 mb-5">
            ${project.metrics.map(m => `
              <div class="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/40 text-center">
                <div class="text-sm sm:text-base font-extrabold text-cyan-300">${m.value}</div>
                <div class="text-[10px] text-slate-400 mt-0.5 leading-tight">${t(m.label)}</div>
              </div>
            `).join('')}
          </div>

          <!-- Tech Stack Badges -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${project.techStack.map(tech => `
              <span class="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-800 border border-slate-700 text-slate-300">
                ${tech}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Action Links -->
        <div class="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2.5">
          ${project.links.map(link => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition shadow-sm">
              <i data-lucide="${link.icon || 'external-link'}" class="w-3.5 h-3.5"></i>
              ${t(link.label)}
            </a>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // Render Experience Section
  function renderExperience() {
    const sec = PORTFOLIO_DATA.ui.sections.experience;
    document.getElementById('sec-experience-title').textContent = t(sec.title);
    document.getElementById('sec-experience-sub').textContent = t(sec.subtitle);

    const container = document.getElementById('experience-timeline-container');
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.workExperience.map(exp => `
      <div class="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                ${t(exp.type)}
              </span>
              <span class="text-xs text-slate-400 flex items-center gap-1">
                <i data-lucide="calendar" class="w-3.5 h-3.5 text-cyan-400"></i>
                ${t(exp.period)}
              </span>
            </div>
            <h3 class="text-xl font-bold text-white">${t(exp.role)}</h3>
            <p class="text-sm font-medium text-slate-300 mt-0.5">${t(exp.organization)}</p>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="text-xs px-3 py-1 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-medium">
              Verified Experience
            </span>
          </div>
        </div>

        <p class="text-sm text-slate-300 mb-6 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800">
          ${t(exp.summary)}
        </p>

        <!-- 4 Key Pillars -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          ${exp.highlights.map((item, idx) => `
            <div class="bg-slate-900/70 p-4 rounded-xl border border-slate-800/80 hover:border-cyan-500/30 transition">
              <h4 class="text-sm font-bold text-cyan-300 mb-1.5 flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-[10px]">
                  ${idx + 1}
                </span>
                ${t(item.title)}
              </h4>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${t(item.detail)}</p>
            </div>
          `).join('')}
        </div>

        <!-- Tech Stack -->
        <div class="flex flex-wrap items-center gap-2 pt-2">
          <span class="text-xs font-semibold text-slate-400">Core Technologies:</span>
          ${exp.techStack.map(tech => `
            <span class="px-2.5 py-1 text-xs rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
              ${tech}
            </span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // Render Honors & Hub Section
  function renderHub() {
    const sec = PORTFOLIO_DATA.ui.sections.honors;
    document.getElementById('sec-honors-title').textContent = t(sec.title);
    document.getElementById('sec-honors-sub').textContent = t(sec.subtitle);

    // Tab buttons
    document.getElementById('tab-btn-publications').textContent = t(sec.tabPublications);
    document.getElementById('tab-btn-awards').textContent = t(sec.tabAwards);
    document.getElementById('tab-btn-activities').textContent = t(sec.tabActivities);

    const container = document.getElementById('hub-content-container');
    if (!container) return;

    const data = PORTFOLIO_DATA.honorsAndActivities;

    if (state.hubTab === 'publications') {
      container.innerHTML = data.publications.map(pub => `
        <div class="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
              International Conference Proceeding
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center gap-1.5">
              <i data-lucide="award" class="w-3.5 h-3.5"></i>
              ${t(pub.award)}
            </span>
          </div>

          <h3 class="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
            "${t(pub.title)}"
          </h3>

          <div class="text-xs sm:text-sm text-slate-300 space-y-1 mb-4">
            <p><strong class="text-slate-100">${state.lang === 'th' ? 'คณะผู้วิจัย:' : 'Authors:'}</strong> ${pub.authors}</p>
            <p><strong class="text-slate-100">${state.lang === 'th' ? 'การประชุม:' : 'Conference:'}</strong> ${t(pub.conference)} (${t(pub.venue)})</p>
            <p><strong class="text-slate-100">${state.lang === 'th' ? 'กลุ่มสาขา & รหัสบทความ:' : 'Track & Paper ID:'}</strong> ${pub.track} | ${pub.year}</p>
          </div>

          <div class="bg-slate-900/70 p-4 rounded-xl border border-slate-800 mb-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <span class="font-bold text-cyan-400 block mb-1 uppercase tracking-wider text-xs">
              🔬 ${state.lang === 'th' ? 'บทคัดย่อและสาระสำคัญของงานวิจัย (Research Summary)' : 'Research Abstract & Contribution'}
            </span>
            <p>${t(pub.summary)}</p>
          </div>

          <div class="flex flex-wrap gap-3">
            ${pub.links.map(link => `
              <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
                 class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 transition">
                <i data-lucide="external-link" class="w-4 h-4"></i>
                ${t(link.label)}
              </a>
            `).join('')}
          </div>
        </div>
      `).join('');
    } else if (state.hubTab === 'awards') {
      container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${data.awards.map(award => `
            <div class="glass-card p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between gap-2 mb-3">
                  <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/15 border border-amber-500/30 text-amber-300">
                    ${award.badge}
                  </span>
                  <span class="text-xs text-slate-400">${t(award.date)}</span>
                </div>
                <h3 class="text-lg font-bold text-white mb-2 leading-snug">${t(award.title)}</h3>
                <p class="text-xs sm:text-sm font-medium text-cyan-300 mb-3">${t(award.organization)}</p>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">${t(award.detail)}</p>
              </div>
              ${award.pdfLink ? `
                <div class="pt-4 border-t border-slate-800/80">
                  <a href="${award.pdfLink}" target="_blank" rel="noopener noreferrer" 
                     class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition">
                    <i data-lucide="award" class="w-3.5 h-3.5"></i>
                    ${state.lang === 'th' ? 'ดูเกียรติบัตรรางวัล (PDF)' : 'View Certificate (PDF)'}
                  </a>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      `;
    } else if (state.hubTab === 'activities') {
      container.innerHTML = `
        <div class="space-y-4">
          ${data.activities.map(act => {
        const certUrl = act.certificateLink || act.pdfLink || act.certificateUrl;
        return `
            <div class="glass-card p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 class="text-base sm:text-lg font-bold text-white">${t(act.event)}</h3>
                <span class="text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full w-fit">
                  ${t(act.period)}
                </span>
              </div>
              <div class="text-xs sm:text-sm font-semibold text-cyan-400 mb-2">
                Role: ${t(act.role)}
              </div>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ${t(act.detail)}
              </p>
              ${certUrl ? `
                <div class="pt-3 mt-3 border-t border-slate-800/80">
                  <a href="${certUrl}" target="_blank" rel="noopener noreferrer" 
                     class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition shadow-sm active:scale-95 group/cert"
                     title="${state.lang === 'th' ? 'เปิดดูเกียรติบัตร (PDF) ในแท็บใหม่' : 'Open Certificate (PDF) in new tab'}">
                    <i data-lucide="award" class="w-3.5 h-3.5 text-indigo-400 group-hover/cert:scale-110 transition-transform"></i>
                    <span>${state.lang === 'th' ? 'ดูเกียรติบัตรการเข้าร่วม (PDF)' : 'View Certificate (PDF)'}</span>
                    <i data-lucide="external-link" class="w-3 h-3 text-indigo-400/80"></i>
                  </a>
                </div>
              ` : ''}
            </div>
          `;
      }).join('')}
        </div>
      `;
    }
  }

  // Render Contact Section
  function renderContact() {
    const profile = PORTFOLIO_DATA.profile;
    const sec = PORTFOLIO_DATA.ui.sections.contact;

    document.getElementById('sec-contact-title').textContent = t(sec.title);
    document.getElementById('sec-contact-sub').textContent = t(sec.subtitle);

    document.getElementById('contact-direct-title').textContent = t(sec.directInfoTitle);
    document.getElementById('contact-form-title').textContent = t(sec.formTitle);

    document.getElementById('contact-email-text').textContent = profile.contact.email;
    document.getElementById('contact-phone-text').textContent = profile.contact.phoneDisplay || profile.contact.phone;
    document.getElementById('contact-location-text').textContent = t(profile.contact.location);
    document.getElementById('contact-period-text').textContent = t(profile.internshipPeriod);

    // Form labels and placeholders
    document.getElementById('form-label-name').textContent = t(sec.nameLabel);
    document.getElementById('form-label-email').textContent = t(sec.emailLabel);
    document.getElementById('form-label-subject').textContent = t(sec.subjectLabel);
    document.getElementById('form-label-message').textContent = t(sec.messageLabel);
    const formLabelLink = document.getElementById('form-label-link');
    if (formLabelLink && sec.linkLabel) formLabelLink.textContent = t(sec.linkLabel);
    const formInputLink = document.getElementById('form-link');
    if (formInputLink && sec.linkPlaceholder) formInputLink.placeholder = t(sec.linkPlaceholder);
    document.getElementById('form-submit-btn-text').textContent = t(sec.sendBtn);
  }

  // Render Footer
  function renderFooter() {
    const footer = PORTFOLIO_DATA.ui.footer;
    document.getElementById('footer-copyright').textContent = t(footer.copyright);
    document.getElementById('footer-tagline').textContent = t(footer.tagline);
  }

  // Render Resume Modal Content
  // Render Resume Modal Content (A4 Single-Page Recruiter Layout)
  function renderResumeModal() {
    const profile = PORTFOLIO_DATA.profile;
    const edu = PORTFOLIO_DATA.education;
    const lang = state.lang;
    const isTh = lang === 'th';

    const modalBody = document.getElementById('resume-modal-content');
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div class="printable-resume-page p-5 sm:p-8 space-y-3.5 text-slate-200 dark:text-slate-200">
        <!-- 1. Resume Header & Contact Details -->
        <div class="border-b border-slate-700/60 print:border-slate-300 pb-3.5 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
          <div class="flex flex-col sm:flex-row items-center sm:items-center gap-4 text-center sm:text-left">
            <!-- Profile Photo Enlarged (w-32 h-32 sm:w-36 sm:h-36 / ~140px) -->
            <img src="./assets/images/1-pic.jpg" onerror="this.onerror=null; this.src='./1-pic.jpg';" alt="${t(profile.name)}" class="w-32 h-32 sm:w-36 sm:h-36 print:w-24 print:h-24 rounded-2xl border-2 border-slate-700/80 dark:border-slate-700 print:border-slate-400 object-cover shrink-0 shadow-lg">
            <div class="space-y-1">
              <h2 class="text-xl sm:text-2xl font-extrabold text-white dark:text-white print:text-black leading-tight">
                ${t(profile.name)} <span class="text-xs font-normal text-slate-400 print:text-slate-600">(${t(profile.nickname)})</span>
              </h2>
              <div class="text-[11px] sm:text-xs text-slate-300 dark:text-slate-300 print:text-black font-medium">
                ${t(edu.university)}
              </div>
            </div>
          </div>

          <!-- Contact Channels & Icon-Only Social Links -->
          <div class="flex flex-col items-center sm:items-end text-[11px] text-slate-300 dark:text-slate-300 print:text-black space-y-1.5 shrink-0 text-center sm:text-right">
            <div class="flex items-center gap-1.5 justify-center sm:justify-end">
              <i data-lucide="mail" class="w-3.5 h-3.5 text-cyan-400 print:hidden"></i>
              <span>thanchanok.tan@ku.th</span>
              <span class="mx-1 text-slate-600 print:text-slate-400">|</span>
              <i data-lucide="phone" class="w-3.5 h-3.5 text-emerald-400 print:hidden"></i>
              <span>+66 62-539-3445</span>
            </div>
            <div class="flex items-center gap-1.5 justify-center sm:justify-end">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-400 print:hidden"></i>
              <span>${isTh ? 'กรุงเทพฯ & ปริมณฑล / ขอนแก่น' : 'Bangkok Metropolitan Area / Khon Kaen'}</span>
            </div>
            <!-- Icon-Only Social Links (GitHub & LinkedIn) -->
            <div class="flex items-center gap-2 justify-center sm:justify-end pt-1">
              <a href="https://github.com/thanchanok-tan-in" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" title="GitHub Profile" class="p-2 rounded-xl text-slate-200 dark:text-slate-200 hover:text-cyan-400 dark:hover:text-cyan-300 print:text-black bg-slate-800/80 hover:bg-slate-700/80 print:bg-transparent border border-slate-700/60 print:border-none shadow-sm transition-all duration-200 hover:scale-105 inline-flex items-center justify-center">
                <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/thanchanok-tan-in-464a52362/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" title="LinkedIn Profile" class="p-2 rounded-xl text-sky-400 dark:text-sky-400 hover:text-sky-300 print:text-black bg-slate-800/80 hover:bg-slate-700/80 print:bg-transparent border border-slate-700/60 print:border-none shadow-sm transition-all duration-200 hover:scale-105 inline-flex items-center justify-center">
                <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- 2. Profile -->
        <div>
          <h4 class="printable-section-header text-[11px] font-bold uppercase tracking-wider text-cyan-400 dark:text-cyan-400 print:text-black mb-1 flex items-center gap-1.5">
            <i data-lucide="user" class="w-3.5 h-3.5 text-cyan-400 print:hidden"></i>
            <span>${isTh ? 'ประวัติโดยย่อ (Profile)' : 'Profile'}</span>
          </h4>
          <p class="text-[11px] text-slate-300 dark:text-slate-300 print:text-black leading-relaxed bg-slate-900/60 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 printable-section-box">
            ${isTh ? 'นิสิตวิทยาการข้อมูลชั้นปีที่ 4 (เกรดเฉลี่ยสะสม 3.66) คณะวิทยาศาสตร์และวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ มุ่งมั่นและเชี่ยวชาญด้าน Data Analytics, Business Intelligence (BI) และ Exploratory Data Analysis (EDA) มีทักษะการทำความสะอาดข้อมูล เขียนคำสั่ง SQL ขั้นสูง วิเคราะห์ทางสถิติด้วย Python/R และสร้างแดชบอร์ดระดับบริหาร (Looker Studio, Power BI, Tableau) เพื่อเปลี่ยนข้อมูลซับซ้อนเป็นข้อมูลเชิงลึกที่นำไปใช้ตัดสินใจได้จริง' : '4th-year Data Science undergraduate (GPAX 3.66) at Faculty of Science and Engineering, Kasetsart University. Passionate about Data Analytics, Business Intelligence (BI), and Exploratory Data Analysis (EDA). Skilled in transforming complex datasets into actionable strategic insights through systematic data cleaning, advanced SQL querying, statistical analysis in Python/R, and building interactive executive dashboards (Looker Studio, Power BI, Tableau).'}
          </p>
        </div>

        <!-- 3. Education -->
        <div>
          <h4 class="printable-section-header text-[11px] font-bold uppercase tracking-wider text-cyan-400 dark:text-cyan-400 print:text-black mb-1 flex items-center gap-1.5">
            <i data-lucide="graduation-cap" class="w-3.5 h-3.5 text-cyan-400 print:hidden"></i>
            <span>${isTh ? 'ประวัติการศึกษา (Education)' : 'Education'}</span>
          </h4>
          <div class="bg-slate-900/60 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 printable-section-box text-[11px] space-y-0.5">
            <div class="flex justify-between items-center font-bold text-white dark:text-white print:text-black">
              <span class="printable-degree-title text-emerald-300 dark:text-emerald-300 print:text-black font-extrabold text-xs sm:text-sm">
                Bachelor of Science in Data Science (B.Sc. Data Science)
              </span>
              <span class="text-cyan-400 dark:text-cyan-400 print:text-black font-extrabold text-xs">Cumulative GPA: ${edu.gpax}</span>
            </div>
            <div class="text-slate-300 dark:text-slate-300 print:text-black font-medium">
              Kasetsart University (Chalermphrakiat Sakon Nakhon Campus) • Faculty of Science and Engineering
            </div>
            <div class="text-slate-400 print:text-slate-800 text-[10px]">
              Department of Computer Science and Information | Senior Undergraduate (2023 – Present, Expected: 2027)
            </div>
          </div>
        </div>

        <!-- 4. Experience -->
        <div>
          <h4 class="printable-section-header text-[11px] font-bold uppercase tracking-wider text-cyan-400 dark:text-cyan-400 print:text-black mb-1 flex items-center gap-1.5">
            <i data-lucide="briefcase" class="w-3.5 h-3.5 text-cyan-400 print:hidden"></i>
            <span>${isTh ? 'ประสบการณ์การทำงาน (Experience)' : 'Experience'}</span>
          </h4>
          <div class="bg-slate-900/60 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 printable-section-box text-[11px] space-y-1">
            <div class="flex justify-between items-center font-bold text-white dark:text-white print:text-black">
              <span class="printable-role-title text-cyan-300 dark:text-white print:text-black font-extrabold text-xs">
                Data Analyst (Freelance / Project-based)
              </span>
              <span class="text-cyan-400 dark:text-cyan-400 print:text-black text-[11px] font-semibold">Aug 2026 – Sep 2026</span>
            </div>
            <div class="text-slate-300 dark:text-slate-300 print:text-black font-medium">
              Office of the Secretary, Faculty of Liberal Arts and Management Science, Kasetsart University (CSC)
            </div>
            <ul class="list-disc list-inside space-y-0.5 text-slate-300 dark:text-slate-300 print:text-black text-[10.5px]">
              <li>Architected relational data schemas in Google Sheets integrating personnel records, civil service promotions, and KPI budgets with 100% data validation.</li>
              <li>Engineered interactive Looker Studio executive dashboards synchronized in real-time with Google Sheets, providing operational transparency for management.</li>
              <li>Delivered executive summary analytics comparing actual expenditures versus planned budgets (Actual vs. Target), reducing tracking search time by 65%.</li>
            </ul>
          </div>
        </div>

        <!-- 5. Achievements & Projects -->
        <div>
          <h4 class="printable-section-header text-[11px] font-bold uppercase tracking-wider text-cyan-400 dark:text-cyan-400 print:text-black mb-1 flex items-center gap-1.5">
            <i data-lucide="trophy" class="w-3.5 h-3.5 text-cyan-400 print:hidden"></i>
            <span>${isTh ? 'ผลงานและการแข่งขัน (Achievements & Projects)' : 'Achievements & Projects'}</span>
          </h4>
          <div class="space-y-1.5 text-[11px]">

            <!-- Sub-section 1: International Competitions & Hackathons -->
            <div class="bg-slate-900/60 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 printable-section-box">
              <div class="flex justify-between items-center font-bold text-white dark:text-white print:text-black mb-0.5">
                <span class="text-amber-300 dark:text-amber-300 print:text-black font-bold">
                  ${isTh ? 'ผลงานระดับนานาชาติ: Edge-Native Privacy-Preserving Fall Detection System (NVIDIA Jetson)' : 'International Hackathon: Edge-Native Privacy-Preserving Fall Detection System (NVIDIA Jetson)'}
                </span>
                <span class="text-amber-400 dark:text-amber-400 print:text-black text-[10px] font-extrabold border border-amber-500/30 print:border-black px-1.5 py-0.5 rounded shrink-0">
                  ICSTI-MJU 2026 Bronze Medal
                </span>
              </div>
              <p class="text-slate-300 dark:text-slate-300 print:text-black leading-normal text-[10.5px]">
                Developed an edge-native computer vision pipeline executing 100% on-device on NVIDIA Jetson hardware utilizing skeleton pose estimation optimized with TensorRT (94.8% accuracy, 30+ FPS) to ensure complete user privacy. Accepted & presented at ICSTI-MJU 2026 conference.
              </p>
            </div>

            <!-- Sub-section 2: National Competitions & Awards -->
            <div class="bg-slate-900/60 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 printable-section-box">
              <div class="flex justify-between items-center font-bold text-white dark:text-white print:text-black mb-0.5">
                <span class="text-cyan-300 dark:text-cyan-300 print:text-black font-bold">
                  ${isTh ? 'ผลงานการแข่งขัน: Sustainable Energy Consumption Anomaly Engine (ENGiHack 2026)' : 'National Competition: Sustainable Energy Consumption Anomaly Engine (ENGiHack 2026)'}
                </span>
                <span class="text-cyan-400 dark:text-cyan-400 print:text-black text-[10px] font-extrabold border border-cyan-500/30 print:border-black px-1.5 py-0.5 rounded shrink-0">
                  2nd Runner-up (BDI × THackle)
                </span>
              </div>
              <p class="text-slate-300 dark:text-slate-300 print:text-black leading-normal text-[10.5px]">
                Trained machine learning models in Python (Scikit-Learn) and Orange Data Mining to detect industrial energy anomalies and optimize peak load patterns, deploying an interactive Streamlit simulation web app.
              </p>
            </div>

            <!-- Sub-section 3: Key Projects -->
            <div class="bg-slate-900/60 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 printable-section-box">
              <div class="flex justify-between items-center font-bold text-white dark:text-white print:text-black mb-0.5">
                <span class="text-cyan-300 dark:text-cyan-300 print:text-black font-bold">
                  ${isTh ? 'ผลงานโปรเจกต์: Thailand Petroleum Price Tracker & Spatial Analytics Platform' : 'Key Project: Thailand Petroleum Price Tracker & Spatial Analytics Platform'}
                </span>
                <span class="text-slate-400 print:text-slate-800 text-[10px] shrink-0">Full-Stack BI & GIS</span>
              </div>
              <p class="text-slate-300 dark:text-slate-300 print:text-black leading-normal text-[10.5px]">
                Engineered interactive spatial web dashboard (PHP, MySQL, Leaflet.js, GeoJSON, Chart.js) tracking 8 retail fuel types across 77 Thai provinces with 30-day price spread KPI metrics and distributor comparisons (PTT vs. Bangchak).
              </p>
            </div>

          </div>
        </div>

        <!-- 6. Skills / Tech Stack -->
        <div>
          <h4 class="printable-section-header text-[11px] font-bold uppercase tracking-wider text-cyan-400 dark:text-cyan-400 print:text-black mb-1 flex items-center gap-1.5">
            <i data-lucide="code-2" class="w-3.5 h-3.5 text-cyan-400 print:hidden"></i>
            <span>${isTh ? 'ทักษะทางเทคนิค (Skills / Tech Stack)' : 'Skills / Tech Stack'}</span>
          </h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10.5px]">
            <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800 printable-section-box">
              <strong class="text-cyan-300 dark:text-cyan-300 print:text-black block mb-0.5 font-bold">Languages & DB</strong>
              Python, SQL, R, PHP, PostgreSQL, MySQL
            </div>
            <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800 printable-section-box">
              <strong class="text-cyan-300 dark:text-cyan-300 print:text-black block mb-0.5 font-bold">BI & Dashboards</strong>
              Looker Studio, Power BI, Tableau, Excel
            </div>
            <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800 printable-section-box">
              <strong class="text-cyan-300 dark:text-cyan-300 print:text-black block mb-0.5 font-bold">AI, ML & Edge</strong>
              Scikit-Learn, Edge AI (TensorRT), GenAI
            </div>
            <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800 printable-section-box">
              <strong class="text-cyan-300 dark:text-cyan-300 print:text-black block mb-0.5 font-bold">Antigravity & Tools</strong>
              Google Antigravity, Git, GitHub, Jupyter
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // Skill Category Deep-Dive Modal & Carousel Navigation (Categories 1 - 6)
  // =========================================================================
  function openSkillModal(catIdx) {
    if (!PORTFOLIO_DATA || !PORTFOLIO_DATA.skills || PORTFOLIO_DATA.skills.length === 0) return;
    if (typeof catIdx !== 'number' || isNaN(catIdx)) catIdx = 0;
    if (catIdx < 0) catIdx = 0;
    if (catIdx >= PORTFOLIO_DATA.skills.length) catIdx = PORTFOLIO_DATA.skills.length - 1;
    state.currentCategoryIdx = catIdx;

    renderSkillModalContent();
    const modal = document.getElementById('skill-modal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
    if (window.lucide) window.lucide.createIcons();
  }

  function closeSkillModal() {
    const modal = document.getElementById('skill-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  }

  function prevSkill() {
    if (!PORTFOLIO_DATA || !PORTFOLIO_DATA.skills || PORTFOLIO_DATA.skills.length === 0) return;
    const total = PORTFOLIO_DATA.skills.length;
    state.currentCategoryIdx = (state.currentCategoryIdx - 1 + total) % total;
    renderSkillModalContent();
    if (window.lucide) window.lucide.createIcons();
  }

  function nextSkill() {
    if (!PORTFOLIO_DATA || !PORTFOLIO_DATA.skills || PORTFOLIO_DATA.skills.length === 0) return;
    const total = PORTFOLIO_DATA.skills.length;
    state.currentCategoryIdx = (state.currentCategoryIdx + 1) % total;
    renderSkillModalContent();
    if (window.lucide) window.lucide.createIcons();
  }

  function renderSkillModalContent() {
    const container = document.getElementById('skill-modal-content');
    if (!container || !PORTFOLIO_DATA.skills || PORTFOLIO_DATA.skills.length === 0) return;

    const cat = PORTFOLIO_DATA.skills[state.currentCategoryIdx];
    const total = PORTFOLIO_DATA.skills.length;
    const currentNum = state.currentCategoryIdx + 1;

    // Counter badge in modal header
    const counterEl = document.getElementById('skill-modal-counter');
    if (counterEl) {
      counterEl.textContent = `${state.lang === 'th' ? 'หมวดที่' : 'Category'} ${currentNum} / ${total}`;
    }

    container.innerHTML = `
      <div class="carousel-slide-fade space-y-6">
        <!-- Category Header Banner -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-lg shadow-cyan-500/10">
              <i data-lucide="${cat.icon || 'code-2'}" class="w-7 h-7"></i>
            </div>
            <div>
              <div class="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1 flex items-center gap-2">
                <span>${t(cat.badge)}</span>
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono">${currentNum} OF ${total}</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-white">
                ${t(cat.category)}
              </h3>
            </div>
          </div>
        </div>

        <!-- Category Overview -->
        <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>${t(cat.summary)}</p>
        </div>

        <!-- All Tools Detailed Cards in This Category -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <i data-lucide="layers" class="w-4 h-4 text-cyan-400"></i>
            <span>${state.lang === 'th' ? 'เครื่องมือและความเชี่ยวชาญในหมวดนี้' : 'Core Tools & Capabilities in this Domain'} (${cat.items.length})</span>
          </h4>

          ${cat.items.map(tool => `
            <div class="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition space-y-3.5">
              <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <i data-lucide="${tool.icon || 'check-circle'}" class="w-4 h-4"></i>
                  </div>
                  <h5 class="text-sm sm:text-base font-bold text-white">${tool.name}</h5>
                </div>
                ${tool.tag ? `<span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">${tool.tag}</span>` : ''}
              </div>

              <!-- Tool Summary -->
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ${t(tool.summary)}
              </p>

              <!-- Applied Use Cases -->
              <div>
                <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-400"></i>
                  <span>${state.lang === 'th' ? 'การประยุกต์ใช้งานจริง (Applied Use Cases)' : 'Applied Use Cases'}</span>
                </div>
                <div class="space-y-1.5">
                  ${tool.useCases ? tool.useCases.map(uc => `
                    <div class="flex items-start gap-2 text-xs text-slate-300">
                      <i data-lucide="arrow-right-circle" class="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5"></i>
                      <span class="leading-relaxed">${t(uc)}</span>
                    </div>
                  `).join('') : ''}
                </div>
              </div>

              <!-- Related Projects -->
              ${tool.relatedProjects && tool.relatedProjects.length > 0 ? `
                <div class="pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-2 text-[11px]">
                  <span class="text-slate-400">${state.lang === 'th' ? 'โปรเจกต์ที่เกี่ยวข้อง:' : 'Related Projects:'}</span>
                  ${tool.relatedProjects.map(rp => `
                    <span class="px-2 py-0.5 rounded-md bg-slate-800 text-cyan-300 border border-slate-700 text-[10px] font-semibold">${rp}</span>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // =========================================================================
  function openTranscript() {
    const summaryPane = document.getElementById('transcript-summary-pane');
    if (summaryPane) {
      const modal = document.getElementById('transcript-modal');
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
      if (typeof window.showTranscriptSummary === 'function') {
        window.showTranscriptSummary();
      } else {
        const summaryBtn = document.getElementById('transcript-view-summary-btn');
        if (summaryBtn) summaryBtn.click();
      }
      if (window.lucide) window.lucide.createIcons();
      return;
    }
    renderTranscriptModal();
    const modal = document.getElementById('transcript-modal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
    if (window.lucide) window.lucide.createIcons();
  }

  function closeTranscript() {
    const modal = document.getElementById('transcript-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  }

  function renderTranscriptModal() {
    const container = document.getElementById('transcript-summary-content') || document.getElementById('transcript-modal-content');
    if (!container || !PORTFOLIO_DATA.transcript) return;

    const tr = PORTFOLIO_DATA.transcript;
    const s = tr.studentInfo;
    const isTh = state.lang === 'th';

    container.innerHTML = `
      <div class="printable-resume-page p-6 sm:p-10 space-y-8 bg-slate-950 text-slate-100">
        <!-- University & Header -->
        <div class="border-b-2 border-slate-700/80 pb-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-2xl bg-[#006633] p-0.5 shadow-xl flex items-center justify-center shrink-0 border border-[#00A859]/40">
              <div class="w-full h-full bg-[#005A36] rounded-[14px] flex items-center justify-center font-black text-white text-2xl shadow-inner">
                KU
              </div>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl font-black text-white tracking-tight">
                ${isTh ? s.universityTh : s.universityEn}
              </h2>
              <div class="text-sm font-semibold text-cyan-400 mt-0.5">
                ${isTh ? s.facultyTh : s.facultyEn} | ${isTh ? s.departmentTh : s.departmentEn}
              </div>
              <div class="text-xs text-slate-400 mt-0.5">
                ${isTh ? s.programTh : s.programEn}
              </div>
            </div>
          </div>

          <!-- Cumulative GPAX Card -->
          <div class="bg-gradient-to-br from-cyan-950/50 to-indigo-950/50 border border-cyan-500/40 rounded-2xl p-4 text-center min-w-[180px] shadow-lg">
            <div class="text-xs font-bold uppercase tracking-wider text-cyan-300">
              ${isTh ? 'เกรดเฉลี่ยสะสม (GPAX)' : 'Cumulative GPAX'}
            </div>
            <div class="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-emerald-300 to-indigo-300 my-1">
              ${s.gpax}
            </div>

            <!-- 
            <div class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
              <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
              ${isTh ? 'เกรดเฉลี่ยสะสมระดับดีเยี่ยม' : 'Undergraduate Senior'}
            </div>
            -->
            

          </div>
        </div>

        <!-- Student Meta Data Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
          <div>
            <span class="text-slate-400 block">${isTh ? 'ชื่อ-นามสกุล' : 'Student Name'}</span>
            <strong class="text-white text-sm">${isTh ? s.nameTh : s.nameEn}</strong>
          </div>
          <div>
            <span class="text-slate-400 block">${isTh ? 'สถานภาพการศึกษา' : 'Academic Standing'}</span>
            <strong class="text-emerald-400 text-sm">${isTh ? s.statusTh : s.statusEn}</strong>
          </div>
          <div>
            <span class="text-slate-400 block">${isTh ? 'หน่วยกิตสะสมที่สอบผ่าน' : 'Total Credits Completed'}</span>
            <strong class="text-white text-sm">${isTh ? s.creditsEarned : s.creditsEarnedEn}</strong>
          </div>
          <div>
            <span class="text-slate-400 block">${isTh ? 'กำหนดสำเร็จการศึกษา' : 'Expected Graduation'}</span>
            <strong class="text-cyan-400 text-sm">${isTh ? s.expectedGraduation : s.expectedGraduation}</strong>
          </div>
        </div>

        <!-- Coursework Domain Tables -->
        <div class="space-y-6">
          <div class="flex items-center justify-between">
            <h3 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <i data-lucide="book-check" class="w-5 h-5 text-cyan-400"></i>
              <span>${isTh ? 'ผลการเรียนรายวิชาสำคัญทางวิทยาการข้อมูลและการวิเคราะห์' : 'Core Relevant Academic Coursework'}</span>
            </h3>
            <span class="text-xs text-slate-400 font-mono">* Official Record Summary</span>
          </div>

          ${tr.domains.map(dom => `
            <div class="rounded-xl border border-slate-800 overflow-hidden bg-slate-900/40">
              <div class="bg-slate-800/80 px-4 py-2.5 text-xs sm:text-sm font-bold text-cyan-300 border-b border-slate-800 flex items-center justify-between">
                <span>${t(dom.domainTitle)}</span>
                <span class="text-[11px] font-normal text-slate-400">KU B.Sc. Curriculum</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr class="border-b border-slate-800 text-slate-400 bg-slate-950/60">
                      <th class="py-2.5 px-4 font-semibold w-24">Course Code</th>
                      <th class="py-2.5 px-4 font-semibold">Course Title</th>
                      <th class="py-2.5 px-4 font-semibold text-center w-20">Credits</th>
                      <th class="py-2.5 px-4 font-semibold text-center w-20">Grade</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-800/60">
                    ${dom.courses.map(c => `
                      <tr class="hover:bg-slate-800/40 transition">
                        <td class="py-2.5 px-4 font-mono text-cyan-400 font-bold">${c.code}</td>
                        <td class="py-2.5 px-4 text-slate-200 font-medium">
                          ${isTh ? c.nameTh : c.nameEn}
                        </td>
                        <td class="py-2.5 px-4 text-center text-slate-300">${c.credits}</td>
                        <td class="py-2.5 px-4 text-center">
                          <span class="inline-block px-2.5 py-0.5 rounded font-bold text-xs ${c.grade === 'A' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'}">
                            ${c.grade}
                          </span>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Footer Verification / Academic Status Note -->
        <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div class="flex items-center gap-2">
            <i data-lucide="shield-check" class="w-4 h-4 text-emerald-400 shrink-0"></i>
            <span>
              ${isTh
        ? 'ข้อมูลการศึกษาและผลการเรียนได้รับการตรวจสอบตามหลักสูตรวิทยาศาสตรบัณฑิต มหาวิทยาลัยเกษตรศาสตร์'
        : 'Academic records verified against Kasetsart University undergraduate curriculum standards.'}
            </span>
          </div>
          <div class="font-mono text-cyan-400 font-semibold whitespace-nowrap">
            Status: Active & In Good Standing
          </div>
        </div>
      </div>
    `;
  }

  // Master Render
  function renderAll() {
    renderNav();
    renderHero();
    renderAboutEducation();
    renderSkills();
    renderProjects();
    renderExperience();
    renderHub();
    renderContact();
    renderFooter();
    renderResumeModal();
  }

  // Event Listeners Setup
  function setupEvents() {
    // Theme Switchers
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const themeVal = btn.getAttribute('data-theme-val');
        if (themeVal) setTheme(themeVal, true);
      });
    });

    // Language toggles
    document.getElementById('lang-switch-btn').addEventListener('click', () => {
      setLanguage(state.lang === 'th' ? 'en' : 'th');
    });
    document.getElementById('mobile-lang-switch-btn').addEventListener('click', () => {
      setLanguage(state.lang === 'th' ? 'en' : 'th');
      closeMobileMenu();
    });

    // Mobile menu toggles
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
    const closeMenuBtn = document.getElementById('close-mobile-menu-btn');

    function openMobileMenu() {
      state.mobileMenuOpen = true;
      mobileMenuDrawer.classList.remove('hidden');
    }
    function closeMobileMenu() {
      state.mobileMenuOpen = false;
      mobileMenuDrawer.classList.add('hidden');
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Project filters
    const filterBtns = [
      { id: 'filter-btn-all', category: 'all' },
      { id: 'filter-btn-ml', category: 'ml' },
      { id: 'filter-btn-bi', category: 'bi' },
      { id: 'filter-btn-data-mining', category: 'data-mining' }
    ];

    filterBtns.forEach(btnInfo => {
      const btn = document.getElementById(btnInfo.id);
      if (btn) {
        btn.addEventListener('click', () => {
          state.projectFilter = btnInfo.category;
          filterBtns.forEach(b => {
            const el = document.getElementById(b.id);
            if (el) el.classList.remove('active');
          });
          btn.classList.add('active');
          renderProjects();
          if (window.lucide) window.lucide.createIcons();
        });
      }
    });

    // Hub tabs
    const hubTabs = [
      { id: 'tab-btn-publications', tab: 'publications' },
      { id: 'tab-btn-awards', tab: 'awards' },
      { id: 'tab-btn-activities', tab: 'activities' }
    ];

    hubTabs.forEach(tInfo => {
      const btn = document.getElementById(tInfo.id);
      if (btn) {
        btn.addEventListener('click', () => {
          state.hubTab = tInfo.tab;
          hubTabs.forEach(tb => {
            const el = document.getElementById(tb.id);
            if (el) el.classList.remove('active');
          });
          btn.classList.add('active');
          renderHub();
          if (window.lucide) window.lucide.createIcons();
        });
      }
    });

    // Copy to clipboard buttons
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        copyText(PORTFOLIO_DATA.profile.contact.email, 'Email');
      });
    }

    const copyPhoneBtn = document.getElementById('copy-phone-btn');
    if (copyPhoneBtn) {
      copyPhoneBtn.addEventListener('click', () => {
        copyText(PORTFOLIO_DATA.profile.contact.phone, 'Phone');
      });
    }

    // Resume Modal Open/Close/Print
    const openResumeBtns = [
      document.getElementById('nav-resume-btn'),
      document.getElementById('hero-cta-resume')
    ].filter(Boolean);
    const resumeModal = document.getElementById('resume-modal');
    const closeResumeModalBtn = document.getElementById('close-resume-modal-btn');
    const printResumeBtn = document.getElementById('print-resume-modal-btn');

    function openResume() {
      renderResumeModal();
      if (resumeModal) resumeModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      if (window.lucide) window.lucide.createIcons();
    }

    function closeResume() {
      if (resumeModal) resumeModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    openResumeBtns.forEach(btn => {
      if (btn) btn.addEventListener('click', openResume);
    });
    if (closeResumeModalBtn) closeResumeModalBtn.addEventListener('click', closeResume);
    if (resumeModal) {
      resumeModal.addEventListener('click', (e) => {
        if (e.target === resumeModal) closeResume();
      });
    }

    if (printResumeBtn) {
      printResumeBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Skill Modal Carousel Controls & Events
    const skillModal = document.getElementById('skill-modal');
    const prevSkillBtn = document.getElementById('skill-modal-prev');
    const nextSkillBtn = document.getElementById('skill-modal-next');
    const closeSkillModalBtn = document.getElementById('close-skill-modal-btn');

    if (prevSkillBtn) prevSkillBtn.addEventListener('click', prevSkill);
    if (nextSkillBtn) nextSkillBtn.addEventListener('click', nextSkill);
    if (closeSkillModalBtn) closeSkillModalBtn.addEventListener('click', closeSkillModal);
    if (skillModal) {
      skillModal.addEventListener('click', (e) => {
        if (e.target === skillModal) closeSkillModal();
      });
    }

    // Academic Transcript Modal Controls & Events
    const transcriptModal = document.getElementById('transcript-modal');
    const openTranscriptBtns = [
      document.getElementById('nav-transcript-btn'),
      document.getElementById('mobile-transcript-btn'),
      document.getElementById('hero-cta-transcript'),
      document.getElementById('edu-transcript-btn')
    ];
    const closeTranscriptModalBtn = document.getElementById('close-transcript-modal-btn');
    const printTranscriptBtn = document.getElementById('print-transcript-btn');

    openTranscriptBtns.forEach(btn => {
      if (btn) btn.addEventListener('click', openTranscript);
    });
    if (closeTranscriptModalBtn) closeTranscriptModalBtn.addEventListener('click', closeTranscript);
    if (transcriptModal) {
      transcriptModal.addEventListener('click', (e) => {
        if (e.target === transcriptModal) closeTranscript();
      });
    }
    if (printTranscriptBtn) {
      printTranscriptBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Global Keyboard Navigation for Modals
    document.addEventListener('keydown', (e) => {
      if (skillModal && !skillModal.classList.contains('hidden')) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prevSkill();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          nextSkill();
        } else if (e.key === 'Escape') {
          closeSkillModal();
        }
      } else if (transcriptModal && !transcriptModal.classList.contains('hidden')) {
        if (e.key === 'Escape') {
          closeTranscript();
        }
      } else if (resumeModal && !resumeModal.classList.contains('hidden')) {
        if (e.key === 'Escape') {
          closeResume();
        }
      }
    });

    // Contact Form Submit Handler (Google Sheets Integration + Loading State + Success Confirmation)
    // Target Google Sheet: https://docs.google.com/spreadsheets/d/1kHbd42dbWjEdYw75_NIV_yKFl_lbhDkUBhHLOffDAUc/edit?gid=0#gid=0
    // To connect live, deploy your Google Apps Script as a Web App (access: Anyone) and set the URL below or window.GOOGLE_SCRIPT_WEBHOOK_URL
    const GOOGLE_SCRIPT_WEBHOOK_URL = window.GOOGLE_SCRIPT_WEBHOOK_URL || 'https://script.google.com/macros/s/AKfycbydldhsND5eJbfLvRhTK4mE02RNrxEaDxPYVrxOEJJEBagmynm_wD_trJj1tMXW1WAN/exec';

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('form-name');
        const emailInput = document.getElementById('form-email');
        const subjectInput = document.getElementById('form-subject');
        const linkInput = document.getElementById('form-link');
        const messageInput = document.getElementById('form-message');
        const submitBtn = document.getElementById('form-submit-btn');
        const statusBox = document.getElementById('form-status-box');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const subject = subjectInput ? subjectInput.value.trim() : '';
        const link = linkInput ? linkInput.value.trim() : '';
        const message = messageInput ? messageInput.value.trim() : '';
        const isTh = state.lang === 'th';

        if (!name || !email || !message) {
          showToast(isTh ? 'กรุณากรอกข้อมูลให้ครบถ้วน' : 'Please fill in all required fields', 'alert-circle');
          return;
        }

        // Disable submit button & render visual loading spinner
        const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.classList.add('opacity-80', 'cursor-not-allowed');
          submitBtn.innerHTML = `
            <svg class="animate-spin h-4 w-4 text-slate-950 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>${isTh ? 'กำลังส่งข้อมูล...' : 'Sending Message...'}</span>
          `;
        }

        if (statusBox) {
          statusBox.classList.add('hidden');
          statusBox.innerHTML = '';
        }

        const scriptURL = GOOGLE_SCRIPT_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbydldhsND5eJbfLvRhTK4mE02RNrxEaDxPYVrxOEJJEBagmynm_wD_trJj1tMXW1WAN/exec";

        const formData = new FormData(contactForm);
        if (!formData.has('name')) formData.append('name', name);
        if (!formData.has('email')) formData.append('email', email);
        if (!formData.has('subject')) formData.append('subject', subject);
        if (!formData.has('message')) formData.append('message', message);
        if (!formData.has('link')) formData.append('link', link);
        if (!formData.has('timestamp')) formData.append('timestamp', new Date().toISOString());

        try {
          await fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors', // สำคัญมาก: ช่วยให้ส่งข้อมูลเข้า Google Apps Script ได้โดยไม่ถูก browser บล็อก
            body: new URLSearchParams(formData)
          });

          const successText = isTh ? 'ส่งข้อความเรียบร้อยแล้ว' : 'Message sent successfully';
          alert('ส่งข้อความเรียบร้อยแล้ว / Message sent successfully');

          if (statusBox) {
            statusBox.className = 'p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 dark:text-emerald-300 text-xs sm:text-sm font-semibold flex items-center gap-2 mt-2';
            statusBox.innerHTML = `
              <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0"></i>
              <span>${successText}</span>
            `;
            statusBox.classList.remove('hidden');
          }

          showToast(successText, 'check-circle-2');
          contactForm.reset();
        } catch (err) {
          alert('เกิดข้อผิดพลาดในการส่งข้อมูล: ' + err.message);
          if (statusBox) {
            statusBox.className = 'p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-400 dark:text-rose-300 text-xs sm:text-sm font-semibold flex items-center gap-2 mt-2';
            statusBox.innerHTML = `
              <i data-lucide="alert-circle" class="w-4 h-4 text-rose-400 shrink-0"></i>
              <span>${err.message}</span>
            `;
            statusBox.classList.remove('hidden');
          }
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-80', 'cursor-not-allowed');
            submitBtn.innerHTML = originalBtnHtml;
          }
          if (window.lucide) window.lucide.createIcons();
        }
      });
    }

    // Scroll Progress & Back to Top
    window.addEventListener('scroll', () => {
      const scrollProgress = document.getElementById('scroll-progress');
      const backToTop = document.getElementById('back-to-top');

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      if (scrollProgress) scrollProgress.style.width = `${progress}%`;

      if (backToTop) {
        if (window.scrollY > 400) {
          backToTop.classList.remove('opacity-0', 'pointer-events-none');
          backToTop.classList.add('opacity-100');
        } else {
          backToTop.classList.add('opacity-0', 'pointer-events-none');
          backToTop.classList.remove('opacity-100');
        }
      }
    });

    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // Initialization
  document.addEventListener('DOMContentLoaded', () => {
    initSkillsList();
    setTheme(state.theme);
    setLanguage(state.lang);
    setupEvents();
    if (window.lucide) window.lucide.createIcons();
  });

})();
