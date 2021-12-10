/* SHOW MENU */ 
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

/* MENU VISIBLE */
/* VALIDATE IF CONSTANT EXISTS */
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add("show-menu")
    })
}

/* MENU VISIBLE */
/* VALIDATE IF CONSTANT EXISTS */
if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove("show-menu")
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav__link")

function linkAction(){
    const navMenu = document.getElementById("nav-menu")
    // the show-menu class is removed when you click on a nav link
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* CHANGE BACKGROUND HEADER */ 
function scrollHeader(){
    const header = document.getElementById('header')
    // when scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* NEW SWIPER */
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',
    slidesPerView: 'auto',
    centeredSlides: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true
    },
    breakpoints: {
        992: {
          spaceBetween: 80
        },
    },
});