(function () {

  'use script'

  const slideDown = document.querySelector('.slide-down');
  const slideToggle = document.querySelector('.main-content__slide-down__button');
  const popupDown = document.querySelector('.popup');
  const popupToggle = document.querySelector('.nav__user-in__text');
  const popupClosed = document.querySelector('.popup__button');

  slideToggle.addEventListener('click', function() {
    if (slideDown.classList.contains('slide-down--closed')) {
      slideDown.classList.remove('slide-down--closed');
      slideDown.classList.add('slide-down--active');
      slideToggle.classList.remove('main-content__slide-down__button--closed');
      slideToggle.classList.add('main-content__slide-down__button--opened');
    } else {
      slideDown.classList.add('slide-down--closed');
      slideDown.classList.remove('slide-down--active');
      slideToggle.classList.add('main-content__slide-down__button--closed');
      slideToggle.classList.remove('main-content__slide-down__button--opened');
    }
  }); 

  popupToggle.addEventListener('click', function() {
    if (popupDown.classList.contains('popup--closed')) {
      popupDown.classList.remove('popup--closed');
      popupDown.classList.add('.popup--show');
    } else {
      popupDown.classList.add('popup--closed');
      popupDown.classList.remove('.popup--show');
    }
  }); 

  popupClosed.addEventListener('click', function() {
    if (popupDown.classList.contains('popup--closed')) {
      popupDown.classList.remove('popup--closed');
      popupDown.classList.add('.popup--show');
    } else {
      popupDown.classList.add('popup--closed');
      popupDown.classList.remove('.popup--show');
    }
  });
}());