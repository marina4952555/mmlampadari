(function () {
  'use strict';

  const sliderBlock = document.querySelector('.main-content');
  const sliderBtns = document.querySelectorAll('.main-content__slider-btn');
  const sliderBGClasses = ['main-content--bg-1', 'main-content--bg-2', 'main-content--bg-3'];

  for (let i = 0; i < sliderBtns.length; i++) {
    sliderBtns[i].addEventListener('click', () => {
    changeActiveBg(i);
    });
  }

  function changeActiveBg(index) {
    for (const bgClass of sliderBGClasses) {
      if (sliderBlock.classList.contains(bgClass)) {
        sliderBlock.classList.remove(bgClass);
      }

      sliderBlock.classList.add(sliderBGClasses[index]);
    }
  }
})()