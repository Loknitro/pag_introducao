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

/* Rolagem até o início */
const startLink = document.querySelector('a[href="#ini"]');

startLink.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector("#ini");

    target.scrollIntoView({behavior: "smooth"})
});

/* Rolagem até o sobre */
const sobreLink = document.querySelector('a[href="#sobre"]');

sobreLink.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector("#sobre");

    target.scrollIntoView({behavior: "smooth"})
});

/* Rolagem até o sobre */
const expLink = document.querySelector('a[href="#experiencia"]');

expLink.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector("#experiencia");

    target.scrollIntoView({behavior: "smooth"})
});
