document.getElementById('menu-btn').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

document.querySelector('.hero-text a').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
});