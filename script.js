let textDelete = document.querySelector(".text-delete");
let smallHeading = document.querySelector(".sm-heading");

textDelete.addEventListener("click", function(){
    smallHeading.remove();
})

/* Menu JS */
/*
const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.menu-btn');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener("click", show());
closeMenu.addEventListener("click", close());

function show(){
    mainMenu.style.display = 'flex';
    // mainMenu.style.top = '';
};

function close(){
    mainMenu.style.top = '-100%';
};
*/

/* Swipper slider JS */

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });