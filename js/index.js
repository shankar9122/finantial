var navOpen = document.querySelector(".nav__hamburger");
var navClose = document.querySelector(".close_toggle");
var menu = document.querySelector(".nav_menu");
var navContainer = document.querySelector(".nav_menu");



navOpen.addEventListener('click', () => {
    menu.classList.add('open');
    document.body.classList.add('active');
    navContainer.style.left = "0";
    navContainer.style.width = "300px";
})

navContainer.addEventListener('click', () => {
    menu.classList.remove('open');
    document.body.classList.remove('active');
    navContainer.style.left = " -300px";
});



// Fix-Navigation-------------
var navBar = document.querySelector(".header");


window.addEventListener('scroll', e => {
    var scrollHeight = window.pageYOffset;
    var navHeight = navBar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navBar.classList.add('nav_fix');
    } else {
        navBar.classList.remove("nav_fix");
    }
});

var slider = document.getElementById('glide');

if (slider) {
    new Glide(slider, {
        type: 'carousel',
        startAt: '0',
        autoplay: '2000',
        hoverpause: 'true',
        perView: '2',
        animationDuration: '800',
        AnimationTimingFunc: 'Linear',
        breakpoints: {
            768: {
                perView: 1,
            }
        }
    }).mount();
};