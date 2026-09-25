// NOTE: Script copied and adapted from https://philreynolds.dev/posts/2021/theme-toggle
const btn = document.querySelector("#theme-toggle");

// check to see if OS preferences for light or dark mode
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");

// check to see if local storage has a theme preference
let currentTheme = localStorage.getItem("theme");

function setTheme() {
    //if no local storage check against system preferences
    if (currentTheme === null) {
        if (prefersDarkScheme.matches) {
            currentTheme = "dark"
        } else if (prefersLightScheme.matches) {
            currentTheme = "light"
        } else {
            // if no preferences, default to dark theme
            currentTheme = "dark"
        }
        setTheme()
    } else if (currentTheme === "dark") {
        // Updated to trigger your light-dark() CSS setup
        document.documentElement.style.colorScheme = "dark";
    } else if (currentTheme === "light") {
        document.documentElement.style.colorScheme = "light";
    }
}

// Run the function immediately on page load so other pages remember the theme
setTheme();

btn.addEventListener("click", function () {
    if (currentTheme === "dark") {
        currentTheme = "light"
        setTheme()
    } else {
        currentTheme = "dark";
        setTheme()
    }
    localStorage.setItem("theme", currentTheme);
});