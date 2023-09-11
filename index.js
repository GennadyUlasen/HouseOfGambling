const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    slidesPerView: 4,
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: {
      sensitivity: 1,
    },
    draggable: true,
    
  });

let mobileMenu = document.querySelector('.mobile-menu');
let logo = document.querySelector('.logo'); 
let menu = document.querySelector('.menu');
let btn = document.querySelector('.btn');
let close = document.querySelector('.close-icon');
let header = document.querySelector('.wrapper-header');
let wrapperNav = document.querySelector('.wrapper-nav');
let secondary = document.querySelector('.secondary');
let sign = document.querySelector('.sign');
let wrapperHeader = document.querySelector('.wrapper-header');


mobileMenu.addEventListener('click', handler)

function handler() {
  logo.style.display = 'none';
  menu.style.display = 'block';
  secondary.style.display = 'block';
  sign.style.display = 'block';
  mobileMenu.style.display = 'none';
  close.style.display = 'flex';
  wrapperNav.classList.add('.mobile-flex');
}

close.addEventListener('click', closeMenu);

function closeMenu () {
  logo.style.display = 'none';
  menu.style.display = 'none';
  btn.style.display = 'none';
  mobileMenu.style.display = 'block';
  secondary.style.display = 'none';
  sign.style.display = 'none';
  close.style.display = 'none'
}