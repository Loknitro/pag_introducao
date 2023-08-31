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


const previous = document.querySelector(".b")
const next = document.querySelector(".n")
const textoCarousel =  document.querySelector(".carousel-content").children
let currentIndex = 0;

if(currentIndex === 0 ) {
    previous.style.opacity = 0;
    previous.style.cursor = 'default';
}

next.addEventListener("click", function(event) {
    if(currentIndex == 0) {
        textoCarousel[currentIndex++].classList.remove('main')
        textoCarousel[currentIndex].style.animation = 'fadeInRight 2.5s out'
        textoCarousel[currentIndex].classList.add('main')
        //TODO: This bullshit

        previous.style.opacity = 1
        previous.style.cursor = 'pointer'

        if (currentIndex === textoCarousel.length - 1) {
            next.style.opacity = 0;
            next.style.cursort = 'default'
        }

    }
});


