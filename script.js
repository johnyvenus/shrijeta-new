document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('primary-nav-menu');

    if (!menuToggle || !navMenu) {
        return;
    }

    const toggleMenu = () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('is-open');
        document.body.classList.toggle('no-scroll', !isExpanded);
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close the menu when the ESC key is pressed
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
            toggleMenu();
        }
    });

    // Close the menu when a navigation link is clicked
    navMenu.addEventListener('click', (e) => {
        if (e.target.matches('a')) {
            toggleMenu();
        }
    });
});
