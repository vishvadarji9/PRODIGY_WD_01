document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navContainer = document.querySelector('.nav-container ul li ');

    menuIcon.addEventListener('click', function() {
        navContainer.classList.toggle('show');
    });

    
    const navLinks = navContainer.querySelectorAll('ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navContainer.classList.remove('show');
        });
    });
});
