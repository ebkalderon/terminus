/**
 * Theme Switcher - Runtime theme switching with localStorage persistence
 */
class ThemeSwitcher {
  constructor() {
    this.themes = {
      terminus: "🔥 Terminus",
      "tokyo-night": "🌃 Tokyo Night",
      "solarized-dark": "🌅 Solarized",
      nord: "❄️ Nord",
      "one-dark": "🌙 One Dark",
      "gruvbox-dark": "🍂 Gruvbox",
      "oled-abyss": "🌑 OLED Abyss",
      "solar-flare": "☀️ Solar Flare",
    };

    this.currentTheme = this.getStoredTheme();
    this.originalTheme = this.currentTheme; // Track the persistent theme
    this.init();
  }

  getStoredTheme() {
    // Priority: localStorage > system preference > default
    const stored = localStorage.getItem("theme");
    if (stored && this.themes[stored]) {
      return stored;
    }

    // Fallback if no system preference detected
    return document.body.getAttribute("data-theme");
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.createThemeSelector();
  }

  applyTheme(themeName) {
    if (!this.themes[themeName]) return;

    document.body.setAttribute("data-theme", themeName);
    localStorage.setItem("theme", themeName);
    this.currentTheme = themeName;
    this.originalTheme = themeName; // Track the "real" theme

    // Update selector if it exists
    const selector = document.querySelector(".theme-selector select");
    if (selector) {
      selector.value = themeName;
    }

    // Update meta theme-color for browser chrome
    this.updateMetaThemeColor(themeName);
  }

  previewTheme(themeName) {
    if (!this.themes[themeName]) return;

    // Store original theme if not already stored
    if (!this.originalTheme) {
      this.originalTheme = this.currentTheme;
    }

    // Apply preview theme (but don't save to localStorage)
    document.body.setAttribute("data-theme", themeName);
    this.updateMetaThemeColor(themeName);
  }

  restoreTheme() {
    if (
      this.originalTheme &&
      this.originalTheme !== document.body.getAttribute("data-theme")
    ) {
      document.body.setAttribute("data-theme", this.originalTheme);
      this.updateMetaThemeColor(this.originalTheme);
    }
  }

  updateMetaThemeColor(themeName) {
    const themeColors = {
      terminus: "#211f1a",
      "tokyo-night": "#1a1b26",
      "solarized-dark": "#002b36",
      nord: "#2e3440",
      "one-dark": "#282c34",
      "gruvbox-dark": "#282828",
      "oled-abyss": "#000000",
      "solar-flare": "#ffffff",
    };

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme && themeColors[themeName]) {
      metaTheme.setAttribute("content", themeColors[themeName]);
    }
  }

  createThemeSelector() {
    // Find the menu items list to add theme selector
    const menuItems = document.querySelector(".main-menu-items");
    if (!menuItems) {
      console.warn("Could not find menu to add theme selector");
      return;
    }

    const selectorHTML = `
            <li class="theme-selector">
                <a href="#" class="theme-trigger" aria-expanded="false" aria-haspopup="true">
                    Theme ↓<span class="sr-only"> (click to change theme)</span>
                </a>
                <ul class="theme-dropdown" role="menu">
                    ${Object.entries(this.themes)
        .map(
          ([key, name]) =>
            `<li><a href="#" class="theme-option ${key === this.currentTheme ? "terminus" : ""}" data-theme="${key}" role="menuitem">${name}</a></li>`,
        )
        .join("")}
                </ul>
            </li>
        `;

    menuItems.insertAdjacentHTML("beforeend", selectorHTML);

    // Add event listeners
    const trigger = menuItems.querySelector(".theme-trigger");
    const dropdown = menuItems.querySelector(".theme-dropdown");
    const options = menuItems.querySelectorAll(".theme-option");

    // Show dropdown on hover and click
    const showDropdown = () => {
      dropdown.classList.add("show");
      trigger.setAttribute("aria-expanded", "true");
    };

    const hideDropdown = () => {
      dropdown.classList.remove("show");
      trigger.setAttribute("aria-expanded", "false");
    };

    // Toggle dropdown on click
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const isOpen = dropdown.classList.contains("show");
      if (isOpen) {
        hideDropdown();
      } else {
        showDropdown();
      }
    });

    // Get the selector container for hover management
    const selector = menuItems.querySelector(".theme-selector");

    // Show on hover (with slight delay to prevent flicker)
    let hoverTimeout;
    selector.addEventListener("mouseenter", () => {
      clearTimeout(hoverTimeout);
      showDropdown();
    });

    // Hide when leaving the entire selector area (with small delay)
    selector.addEventListener("mouseleave", () => {
      hoverTimeout = setTimeout(() => {
        hideDropdown();
        this.restoreTheme(); // Restore original theme when closing dropdown
      }, 100);
    });

    // Cancel hide if mouse re-enters
    selector.addEventListener("mouseenter", () => {
      clearTimeout(hoverTimeout);
    });

    // Theme selection and preview
    options.forEach((option) => {
      // Preview theme on hover
      option.addEventListener("mouseenter", (e) => {
        const previewTheme = e.target.dataset.theme;
        this.previewTheme(previewTheme);
      });

      // Apply theme permanently on click
      option.addEventListener("click", (e) => {
        e.preventDefault();
        const theme = e.target.dataset.theme;
        this.applyTheme(theme);

        // Update current selection highlighting
        options.forEach((opt) => opt.classList.remove("current"));
        e.target.classList.add("current");

        // Close dropdown
        hideDropdown();
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".theme-selector")) {
        hideDropdown();
        this.restoreTheme(); // Restore original theme when clicking outside
      }
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => new ThemeSwitcher());
} else {
  new ThemeSwitcher();
}
