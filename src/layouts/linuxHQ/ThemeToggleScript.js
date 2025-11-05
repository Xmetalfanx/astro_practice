// Get references to the theme toggle button and the light/dark icons
const themeToggle = document.getElementById("theme-toggle");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

// Retrieve the current theme from localStorage or default to "light"
const currentTheme = localStorage.getItem("theme") || "light";

// Set the initial theme on the document's root element
document.documentElement.setAttribute("data-theme", currentTheme);
// Update the color-scheme property to match the current theme
document.documentElement.style.colorScheme = currentTheme;

// Add a function to update the preferred-color-scheme meta tag
function updatePreferredColorScheme(theme) {
	let metaTag = document.querySelector('meta[name="color-scheme"]');
	if (!metaTag) {
		metaTag = document.createElement("meta");
		metaTag.name = "color-scheme";
		document.head.appendChild(metaTag);
	}
	metaTag.content = theme;
}

// Update the meta tag on initial load
updatePreferredColorScheme(currentTheme);

// Update the visibility of the icons based on the current theme
if (currentTheme === "dark") {
	lightIcon.style.display = "none"; // Hide the light icon
	darkIcon.style.display = "block"; // Show the dark icon
} else {
	lightIcon.style.display = "block"; // Show the light icon
	darkIcon.style.display = "none"; // Hide the dark icon
}

// Add a click event listener to the theme toggle button
themeToggle.addEventListener("click", () => {
	// Determine the new theme based on the current theme
	const newTheme =
		document.documentElement.getAttribute("data-theme") === "light"
			? "dark"
			: "light";

	// Update the theme on the document's root element
	document.documentElement.setAttribute("data-theme", newTheme);

	// Update the color-scheme property to match the new theme
	document.documentElement.style.colorScheme = newTheme;

	// Save the new theme to localStorage
	localStorage.setItem("theme", newTheme);

	// Update the preferred-color-scheme meta tag
	updatePreferredColorScheme(newTheme);

	// Update the visibility of the icons based on the new theme
	if (newTheme === "dark") {
		lightIcon.style.display = "none"; // Hide the light icon
		darkIcon.style.display = "block"; // Show the dark icon
	} else {
		lightIcon.style.display = "block"; // Show the light icon
		darkIcon.style.display = "none"; // Hide the dark icon
	}
});

// Try 2 below

// const themeToggle = document.querySelector(".theme-toggle");
// const root = document.documentElement;

// // Check localStorage for saved preference
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme) {
//   root.setAttribute("data-theme", savedTheme);
// }

// // Set initial button text
// updateButtonText();

// themeToggle.addEventListener("click", () => {
//   // Cycle through states: system → light → dark → system...
//   const currentTheme = root.getAttribute("data-theme");

//   if (!currentTheme) {
//     // Currently using system preference - force light
//     root.setAttribute("data-theme", "light");
//     localStorage.setItem("theme", "light");
//   } else if (currentTheme === "light") {
//     // Currently light - force dark
//     root.setAttribute("data-theme", "dark");
//     localStorage.setItem("theme", "dark");
//   } else {
//     // Currently dark - revert to system
//     root.removeAttribute("data-theme");
//     localStorage.removeItem("theme");
//   }

//   // Update the visibility of the icons based on the new theme
//   if (currentTheme === "dark") {
//     lightIcon.style.display = "none"; // Hide the light icon
//     darkIcon.style.display = "block"; // Show the dark icon
//   } else {
//     lightIcon.style.display = "block"; // Show the light icon
//     darkIcon.style.display = "none"; // Hide the dark icon
//   }

//   updateButtonText();
// });

// function updateButtonText() {
//   const currentTheme = root.getAttribute("data-theme");
//   themeToggle.textContent = currentTheme
//     ? `Theme: ${currentTheme}`
//     : "Theme: System";
// }
