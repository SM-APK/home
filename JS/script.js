// Sidebar Toggle
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const body = document.body;
const blurOverlay = document.getElementById('blurOverlay');

// Sidebar toggle functionality
hamburger.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    blurOverlay.classList.toggle('active');  // Toggle blur overlay visibility
    document.querySelector('main')?.classList.toggle('blur-content');
});

// Close sidebar on outside click
document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !hamburger.contains(e.target)) {
        sideMenu.classList.remove('active');
        blurOverlay.classList.remove('active');  // Remove blur overlay
        document.querySelector('main')?.classList.remove('blur-content');
    }
});

// Dark Mode Toggle with localStorage
const toggle = document.getElementById('themeToggle');
const themeText = document.getElementById('themeText');

// Check for saved theme setting in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    themeText.textContent = 'Dark';
    toggle.checked = true;
} else {
    body.classList.remove('dark');
    themeText.textContent = 'Light';
    toggle.checked = false;
}

toggle.addEventListener('change', () => {
    body.classList.toggle('dark');
    themeText.textContent = toggle.checked ? 'Dark' : 'Light';
    localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');  // Save theme in localStorage
});
// script.js
document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
  });
  