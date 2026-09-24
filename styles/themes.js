function setTheme(sheet) {
    // Change the hyperlink ref of the CSS link directly
    document.getElementById('theme-style').href = sheet;
    // Save the preference in local storage
    localStorage.setItem('theme_preference', sheet);
}

// Check for saved preference when page loads up
window.onload = function() {
    const savedTheme = localStorage.getItem('theme_preference');
    if (savedTheme) {
        document.getElementById('theme-style').href = savedTheme;
    }
};