const themeToggle = document.getElementById("theme-toggle");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Use saved theme OR OS preference
let theme = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");

applyTheme(theme);

themeToggle.addEventListener("click", () => {
  theme = theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme);
  applyTheme(theme);
});

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  lightIcon.style.display = theme === "dark" ? "none" : "block";
  darkIcon.style.display = theme === "dark" ? "block" : "none";
}
