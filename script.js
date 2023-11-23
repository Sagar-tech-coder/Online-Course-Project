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