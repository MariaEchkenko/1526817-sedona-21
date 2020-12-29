var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
const buttonForm = document.querySelector(".review-form__button");
const errorPopup = document.querySelector(".modal--error");
const successPopup = document.querySelector(".modal--success");


// Mobile menu

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Popup

buttonForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  successPopup.classList.add("modal--show");
});
