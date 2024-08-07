function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        if (darkModeToggle) darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('darkMode', null);
            } else {
                body.classList.add('dark-mode');
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('darkMode', 'enabled');
            }
        });
    }
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initDarkMode);