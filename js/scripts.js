/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or use default
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        html.classList.add(currentTheme);
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        if (html.classList.contains('dark-mode')) {
            html.classList.remove('dark-mode');
            html.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            html.classList.remove('light-mode');
            html.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});