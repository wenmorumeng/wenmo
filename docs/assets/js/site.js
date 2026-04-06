const storageKey = "wenmo-theme";

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("is-dark", isDark);

  const label = document.querySelector("[data-theme-label]");
  if (label) {
    label.textContent = isDark ? "日光" : "夜色";
  }
}

function initTheme() {
  const saved = localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));

  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) {
    return;
  }

  toggle.addEventListener("click", () => {
    const next = document.body.classList.contains("is-dark") ? "light" : "dark";
    localStorage.setItem(storageKey, next);
    applyTheme(next);
  });
}

function initSidebarTabs() {
  const buttons = [...document.querySelectorAll("[data-tab-target]")];
  const panels = [...document.querySelectorAll("[data-tab-panel]")];

  if (buttons.length === 0 || panels.length === 0) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tabTarget;
      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.tabPanel === target));
    });
  });
}

function initYearProgress() {
  const text = document.querySelector("[data-year-progress-text]");
  const bar = document.querySelector("[data-year-progress-bar]");

  if (!text || !bar) {
    return;
  }

  const now = new Date();
  const year = now.getFullYear();
  const start = new Date(year, 0, 1, 0, 0, 0);
  const end = new Date(year, 11, 31, 23, 59, 59);
  const percent = ((now - start) / (end - start + 1)) * 100;
  const clamped = Math.max(0, Math.min(100, percent));

  text.textContent = `${clamped.toFixed(2)}%`;
  bar.style.width = `${clamped}%`;
}

function initToc() {
  const content = document.querySelector("[data-post-content]");
  const toc = document.querySelector("[data-post-toc]");
  const empty = document.querySelector("[data-toc-empty]");
  const tocButton = document.querySelector('[data-tab-target="toc"]');

  if (!toc || !tocButton) {
    return;
  }

  if (!content) {
    tocButton.setAttribute("disabled", "disabled");
    tocButton.style.opacity = "0.45";
    return;
  }

  const headings = [...content.querySelectorAll("h2, h3, h4")];
  if (headings.length === 0) {
    tocButton.setAttribute("disabled", "disabled");
    tocButton.style.opacity = "0.45";
    return;
  }

  if (empty) {
    empty.hidden = true;
  }

  const links = headings.map((heading, index) => {
    if (!heading.id) {
      heading.id = `section-${index + 1}`;
    }

    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    link.style.setProperty("--toc-depth", String(Number(heading.tagName.slice(1)) - 1));
    toc.appendChild(link);
    return link;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = headings.indexOf(entry.target);
        if (index === -1) {
          return;
        }

        if (entry.isIntersecting) {
          links.forEach((link) => link.classList.remove("is-current"));
          links[index].classList.add("is-current");
        }
      });
    },
    {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    }
  );

  headings.forEach((heading) => observer.observe(heading));
}

function initTopbar() {
  const topbar = document.querySelector("[data-topbar]");
  if (!topbar) {
    return;
  }

  const onScroll = () => {
    topbar.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSidebarTabs();
  initYearProgress();
  initToc();
  initTopbar();
});
