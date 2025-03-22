document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const opacity = 1 - (scrollPosition / windowHeight);

        hero.style.opacity = Math.max(opacity, 0);
    });
});