document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    let prevScrollPos = window.scrollY;

    window.addEventListener('scroll', function () {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos > prevScrollPos) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        prevScrollPos = currentScrollPos;
    });
});