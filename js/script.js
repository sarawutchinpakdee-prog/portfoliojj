/* ==========================================================================
   script.js
   ----------------------------------------------------------------------
   Render ข้อมูลจาก data.js + Theme toggle + Navbar + Scroll reveal +
   Typing effect (hero role, goal terminal) + Contact form + Back to top
   ========================================================================== */

const ICONS = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
  layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>',
  palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 2-2 2 2 0 0 1 2-2h1a4 4 0 0 0 4-4 10 10 0 0 0-9-10z"/></svg>',
  braces: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 3a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2M16 3a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2"/></svg>',
  server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="7" rx="1"/><rect x="2" y="14" width="20" height="7" rx="1"/><path d="M6 7h.01M6 18h.01"/></svg>',
  terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
  hexagon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg>',
  table: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L2 19l3 3 7.1-7.1a4 4 0 0 0 5.6-5.6l-2.8 2.8-2-2z"/></svg>',
  branch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>',
  pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>',
  bot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 16v0M16 16v0"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.9A17.7 17.7 0 0 1 19 2c0 2.4-.9 6.9-4 9.9A22.2 22.2 0 0 1 12 15z"/></svg>',
  gamepad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="13" r="1"/><circle cx="18" cy="11" r="1"/><rect x="2" y="6" width="20" height="12" rx="6"/></svg>',
  trending: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
};

function icon(name) {
  return ICONS[name] || "";
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderHero();
  renderSocials();
  renderAbout();
  renderSkills();
  renderProjects();
  renderTimeline();
  renderInterests();
  renderGoal();
  initNavbar();
  initRevealOnScroll();
  initContactForm();
  initBackToTop();
});

/* ------------------------------ Theme -------------------------------------- */
function initTheme() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("themeToggle");
  const stored = localStorage.getItem("jj-portfolio-theme");
  root.setAttribute("data-theme", stored || "dark");

  toggleBtn.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("jj-portfolio-theme", next);
  });
}

/* ------------------------------ Hero ---------------------------------------- */
function renderHero() {
  document.getElementById("heroDesc").textContent = profileData.heroDescription;
  typeRoles(document.getElementById("roleTyped"), profileData.roles);
}

function typeRoles(el, roles) {
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1500);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(tick, deleting ? 35 : 65);
  }

  tick();
}

/* ------------------------------ Social render ------------------------------ */
function socialButtonHTML(social, variant = "icon") {
  if (variant === "row") {
    return `
      <a class="contact-link" href="${social.url}" target="_blank" rel="noopener noreferrer">
        <span class="contact-link__icon">${icon(social.icon)}</span>
        <span>
          <span class="contact-link__name">${social.name}</span><br />
          <span class="contact-link__handle">${social.handle}</span>
        </span>
      </a>`;
  }
  return `
    <a class="social-btn" href="${social.url}" target="_blank" rel="noopener noreferrer" aria-label="${social.name}" title="${social.name}: ${social.handle}">
      ${icon(social.icon)}
    </a>`;
}

function renderSocials() {
  document.getElementById("heroSocials").innerHTML = socialLinks.map((s) => socialButtonHTML(s)).join("");
  document.getElementById("footerSocials").innerHTML = socialLinks.map((s) => socialButtonHTML(s)).join("");
  document.getElementById("contactSocials").innerHTML = socialLinks.map((s) => socialButtonHTML(s, "row")).join("");
  document.getElementById("footerMotto").textContent = `"${profileData.motto}"`;
}

/* ------------------------------ About --------------------------------------- */
function renderAbout() {
  document.getElementById("aboutText").textContent = profileData.aboutText;
  document.getElementById("aboutMotto").textContent = `"${profileData.motto}"`;

  const items = [
    ["name", `นาย ${profileData.fullName}`],
    ["nickname", profileData.nickname],
    ["education", profileData.education],
    ["major", profileData.majorEn],
    ["career_goal", profileData.careerGoal],
  ];

  document.getElementById("infoList").innerHTML = items
    .map(([label, value]) => `<li><span class="label">${label}</span><span class="value">${value}</span></li>`)
    .join("");
}

/* ------------------------------ Skills --------------------------------------- */
function renderSkills() {
  document.getElementById("skillsGrid").innerHTML = skillGroups
    .map(
      (group) => `
      <div class="card skill-card">
        <div class="skill-card__head">
          <span class="skill-card__icon">${icon(group.icon)}</span>
          <h3 class="skill-card__title">${group.category}</h3>
        </div>
        <div class="skill-card__list">
          ${group.items
            .map((item) => `<div class="skill-chip">${icon(item.icon)}<span>${item.name}</span></div>`)
            .join("")}
        </div>
      </div>`
    )
    .join("");
}

/* ------------------------------ Projects --------------------------------------- */
function renderProjects() {
  document.getElementById("projectsGrid").innerHTML = projectsData
    .map(
      (project) => `
      <article class="card project-card">
        <div class="project-card__image">
          ${project.image ? `<img src="${project.image}" alt="${project.title}" loading="lazy" />` : `<span>${project.title.slice(0, 2).toUpperCase()}</span>`}
        </div>
        <div class="project-card__body">
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__desc">${project.description}</p>
          <div class="project-card__tech">
            ${project.technologies.map((t) => `<span class="tech-chip">${t}</span>`).join("")}
          </div>
          <div class="project-card__actions">
            <a class="btn btn--primary btn--sm" href="${project.demoUrl}" target="_blank" rel="noopener noreferrer">${icon("external")} Demo</a>
            <a class="btn btn--outline btn--sm" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">${icon("github")} GitHub</a>
          </div>
        </div>
      </article>`
    )
    .join("");
}

/* ------------------------------ Timeline --------------------------------------- */
function renderTimeline() {
  document.getElementById("timeline").innerHTML = educationData
    .map(
      (item) => `
      <div class="timeline-item">
        <div class="card timeline-item__card">
          <span class="timeline-item__period">${item.period}</span>
          <h3 class="timeline-item__school">${item.school}</h3>
          <p class="timeline-item__detail">${item.detail}</p>
        </div>
      </div>`
    )
    .join("");
}

/* ------------------------------ Interests --------------------------------------- */
function renderInterests() {
  document.getElementById("interestsGrid").innerHTML = interestsData
    .map(
      (item) => `
      <div class="card interest-card">
        <h3 class="interest-card__title">${item.emoji} ${item.title}</h3>
        <p class="interest-card__desc">${item.description}</p>
      </div>`
    )
    .join("");
}

/* ------------------------------ Goal --------------------------------------- */
function renderGoal() {
  document.getElementById("goalText").textContent = profileData.goalText;

  const labels = {
    student: "student",
    learning: "learning",
    building_projects: "building_projects",
    improving_skills: "improving_skills",
    full_stack_developer: "full_stack_developer",
  };

  document.getElementById("goalPath").innerHTML = journeySteps
    .map((step, i) => {
      const isLast = i === journeySteps.length - 1;
      const el = isLast ? `<span class="final">${labels[step]}</span>` : `<span>${labels[step]}</span>`;
      return i < journeySteps.length - 1 ? `${el}<span class="arrow">-&gt;</span>` : el;
    })
    .join("");
}

function typeGoalConsole() {
  const el = document.getElementById("goalConsole");
  if (!el || el.dataset.typed) return;
  el.dataset.typed = "true";

  const lines = [
    "$ whoami",
    profileData.nickname,
    "",
    "$ cat goal.txt",
    `> ${profileData.careerGoal}`,
    "",
    "$ node build.js --stack frontend,backend,database,cloud",
    "[ok] frontend ......... in progress",
    "[ok] backend .......... in progress",
    "[ok] database .......... learning",
    "[..] cloud ............ queued",
    "",
    `$ echo "${profileData.motto}"`,
    profileData.motto,
  ];

  let li = 0;
  let ci = 0;
  el.textContent = "";

  function tick() {
    if (li >= lines.length) {
      el.innerHTML += '<span class="caret">_</span>';
      return;
    }
    const line = lines[li];
    if (ci <= line.length) {
      const done = lines.slice(0, li).join("\n");
      el.textContent = (done ? done + "\n" : "") + line.slice(0, ci);
      ci++;
      setTimeout(tick, 18);
    } else {
      li++;
      ci = 0;
      setTimeout(tick, 90);
    }
  }
  tick();
}

/* ------------------------------ Navbar (scroll state + mobile menu) --------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav__link");
  const sections = document.querySelectorAll("main section[id]");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 12);
  });

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
    navToggle.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
      navToggle.classList.remove("active");
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active-link", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ------------------------------ Scroll reveal + skill bars ------------------ */
function initRevealOnScroll() {
  const revealEls = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = entry.target.getAttribute("data-reveal-delay") || 0;
        setTimeout(() => entry.target.classList.add("is-visible"), delay);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));

  const goalSection = document.querySelector(".goal");
  if (goalSection) {
    const goalObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          typeGoalConsole();
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );
    goalObserver.observe(goalSection);
  }
}

/* ------------------------------ Contact form --------------------------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = "กรุณากรอกข้อมูลให้ครบทุกช่อง";
      status.className = "form__status error";
      return;
    }

    /* ยังไม่มี Backend — จำลองการส่งข้อความสำเร็จที่ฝั่ง Frontend
       เมื่อเชื่อมต่อ Backend/Email service แล้ว ให้แทนที่ส่วนนี้ด้วยการเรียก API จริง */
    status.className = "form__status success";
    status.textContent = `ขอบคุณครับคุณ ${name} ข้อความของคุณถูกส่งเรียบร้อยแล้ว 🎉`;
    form.reset();
  });
}

/* ------------------------------ Back to top ----------------------------------- */
function initBackToTop() {
  const btn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 480);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
