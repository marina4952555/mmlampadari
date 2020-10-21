(function () {

  'use script'

  const popupDown = document.querySelector('.popup');
  const popupToggle = document.querySelector('.nav__user-in__text');
  const popupClosed = document.querySelector('.popup__button');

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