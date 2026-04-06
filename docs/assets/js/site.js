const root = document.documentElement;
const body = document.body;
const storageKey = "blog-theme";

function applyTheme(theme) {
  if (theme === "dark") {
    body.classList.add("is-dark");
  } else {
    body.classList.remove("is-dark");
  }

  const toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.textContent = body.classList.contains("is-dark") ? "日间" : "夜间";
  }
}

function initTheme() {
  const saved = localStorage.getItem(storageKey);
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (systemPrefersDark ? "dark" : "light"));

  const toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const nextTheme = body.classList.contains("is-dark") ? "light" : "dark";
      localStorage.setItem(storageKey, nextTheme);
      applyTheme(nextTheme);
    });
  }
}

function initSidebarTabs() {
  const buttons = document.querySelectorAll("[data-tab-target]");
  const panels = document.querySelectorAll("[data-tab-panel]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tabTarget;

      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.tabPanel === target));
    });
  });
}

function initSearch() {
  const input = document.querySelector("[data-search-input]");
  const cards = [...document.querySelectorAll(".js-post-card")];
  const empty = document.querySelector("[data-search-empty]");

  if (!input || cards.length === 0) {
    if (input) {
      input.setAttribute("disabled", "disabled");
      input.placeholder = "当前页面没有文章列表";
    }
    return;
  }

  input.addEventListener("input", () => {
    const keyword = input.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const text = card.dataset.searchText.toLowerCase();
      const visible = keyword === "" || text.includes(keyword);
      card.hidden = !visible;
      if (visible) {
        visibleCount += 1;
      }
    });

    if (empty) {
      empty.hidden = visibleCount !== 0;
    }
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
  const progress = ((now - start) / (end - start + 1)) * 100;
  const percent = Math.max(0, Math.min(100, progress));

  text.textContent = `${percent.toFixed(2)}%`;
  bar.style.width = `${percent}%`;
}

function initToc() {
  const content = document.querySelector("[data-post-content]");
  const toc = document.querySelector("[data-post-toc]");
  const empty = document.querySelector("[data-toc-empty]");

  if (!content || !toc) {
    return;
  }

  const headings = [...content.querySelectorAll("h2, h3, h4")];
  if (headings.length === 0) {
    return;
  }

  if (empty) {
    empty.hidden = true;
  }

  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = `section-${index + 1}`;
    }

    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    link.style.setProperty("--toc-depth", String(Number(heading.tagName.slice(1)) - 1));
    toc.appendChild(link);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSidebarTabs();
  initSearch();
  initYearProgress();
  initToc();
});
