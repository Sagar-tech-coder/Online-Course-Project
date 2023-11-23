let textDelete = document.querySelector(".text-delete");
let smallHeading = document.querySelector(".sm-heading");
let contactText = document.querySelector("#contact-text");
let showPopup = document.querySelector(".popup-container");
let closePopup = document.querySelector(".fa-regular");
let c = document.querySelector("#maincontainer");
const overlay = document.querySelector(".overlay");

textDelete.addEventListener("click", function(){
    smallHeading.remove();
});

// contactText.addEventListener("click", function(){
//   // c.style.filter = "blur(5px)";
//   // body.style.filter = blur("2px");
//   // document.body.style.filter = "blur(5px)";
//   document.querySelector(".popup-container").style.display = "block";
//   // showPopup.classList.add("active");
//   overlay.classList.add("overlayactive");
// });

closePopup.addEventListener("click", function(){
  document.querySelector(".popup-container").style.display = "none";
  showPopup.classList.remove("active");
  overlay.classList.remove("overlayactive");
});

// function blur(){
//   document.body.style.filter = "blur(5px)";
// };




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