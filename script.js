/*================ scroll sections avtive link ===================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};

/*================ scroll sections avtive link ===================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   
    let sections = document.querySelectorAll('section');
    let navLi = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            let sectionTop = section.offsetTop -150;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLi.forEach(li =>{
            li.classList.remove('active');
            document.querySelector('nav ul li a[href*='+ current +']').classList.add('active');
        })
    }) 
/*================ sticky navbar ===================== */

    let header = document.querySelector ('header');
    header.classList.toggle(sticky, window.scrollY > 100);

    /*================ remove toggle icon and navbar when click navbar link (scroll) ===================== */
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};

/*================ sscroll reveal ===================== */
ScrollReveal({ 
    /*reset: true,*/
    distance: '80px',
    durarion: 200,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin:  'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, contact form', { origin:
      'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });

/*================ typed js ===================== */
const typed = new Typed ('.multiple-text', {
    strings: ['Animes', 'Filmes', 'Noticiais do Mundo Otaku', 'e muito mais...',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


const logredBox = document.querySelector('.logred-box');
const loginLink = document.querySelector('.login-link');
const registerLink= document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logredBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logredBox.classList.remove('active');
});