/**
 * NagrikAI - Main Layout & Utility Controller
 */

// Theme Handling
function initTheme() {
  const savedTheme = localStorage.getItem("nagrik_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  const toggleBtn = document.getElementById("themeToggleBtn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("nagrik_theme", nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  if (icon) {
    if (theme === "dark") {
      icon.className = "fa-solid fa-sun";
    } else {
      icon.className = "fa-solid fa-moon";
    }
  }
}

// Toast Notifications
function showToast(title, message, type = "info", duration = 4000) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  const iconMap = {
    success: "fa-circle-check",
    error: "fa-circle-exclamation",
    warning: "fa-triangle-exclamation",
    info: "fa-circle-info"
  };

  toast.innerHTML = `
    <i class="fa-solid ${iconMap[type] || 'fa-bell'} toast-icon"></i>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
    <button class="toast-close" aria-label="Close" onclick="this.parentElement.remove()">&times;</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Mobile Menu
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
  }
}

// Language Selector Handler
function initLanguageSelector() {
  const langSelect = document.getElementById("globalLangSelect");
  if (langSelect) {
    langSelect.value = localStorage.getItem("nagrik_lang") || "en";
    langSelect.addEventListener("change", (e) => {
      setLanguage(e.target.value);
      showToast(
        "Language Changed",
        `NagrikAI interface set to ${langSelect.options[langSelect.selectedIndex].text}`,
        "info"
      );
    });
  }
}

// Highlight Current Active Page
function highlightActiveNav() {
  const path = window.location.pathname;
  const navItems = document.querySelectorAll(".nav-link");
  navItems.forEach(item => {
    const href = item.getAttribute("href");
    if (href && (path.endsWith(href) || (path.endsWith("/") && href === "index.html"))) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Global Init
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  initLanguageSelector();
  highlightActiveNav();
});

window.showToast = showToast;
