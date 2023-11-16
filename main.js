//header on scroll color change
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

//menu 

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

//remove menu on clixk any menu link

navbar.addEventListener('click', () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
});
//smooth scroll reveal animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    delay:400,
    // reset: true
});

sr.reveal('.home-text, .buds-text', {origin:'left'})

sr.reveal('.home-img,.buds-img', {origin:'right'})
sr.reveal('.heading',{delay:200})
sr.reveal('.specs-details .box',{origin : 'left ',interval:300 })
sr.reveal('.specs-img',{delay:600})
sr.reveal('.shop-container .box,.footer .logo ,.footer .footer-box',{interval:150 })