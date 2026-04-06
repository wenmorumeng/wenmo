(function() {
  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");

  if (!toggle) {
    return;
  }

  function syncButton(theme) {
    var pressed = theme === "dark";
    toggle.setAttribute("aria-pressed", String(pressed));
    toggle.setAttribute("title", pressed ? "切换到浅色模式" : "切换到深色模式");
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    syncButton(theme);
  }

  var activeTheme = root.getAttribute("data-theme") || "light";
  syncButton(activeTheme);

  toggle.addEventListener("click", function() {
    var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });
})();

