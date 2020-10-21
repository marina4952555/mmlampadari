(function () {

  'use script'

  const slideDown = document.querySelector('.slide-down');
  const slideToggle = document.querySelector('.main-content__slide-down__button');

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
}());