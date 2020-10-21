"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  'use strict';

  var sliderBlock = document.querySelector('.main-content');
  var sliderBtns = document.querySelectorAll('.main-content__slider-btn');
  var sliderBGClasses = ['main-content--bg-1', 'main-content--bg-2', 'main-content--bg-3'];

  var _loop = function _loop(i) {
    sliderBtns[i].addEventListener('click', function () {
      changeActiveBg(i);
    });
  };

  for (var i = 0; i < sliderBtns.length; i++) {
    _loop(i);
  }

  function changeActiveBg(index) {
    var _iterator = _createForOfIteratorHelper(sliderBGClasses),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var bgClass = _step.value;

        if (sliderBlock.classList.contains(bgClass)) {
          sliderBlock.classList.remove(bgClass);
        }

        sliderBlock.classList.add(sliderBGClasses[index]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
})();
"use strict";

(function () {
  'use script';

  var slideDown = document.querySelector('.slide-down');
  var slideToggle = document.querySelector('.main-content__slide-down__button');
  var popupDown = document.querySelector('.popup');
  var popupToggle = document.querySelector('.nav__user-in__text');
  var popupClosed = document.querySelector('.popup__button');
  slideToggle.addEventListener('click', function () {
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
  popupToggle.addEventListener('click', function () {
    if (popupDown.classList.contains('popup--closed')) {
      popupDown.classList.remove('popup--closed');
      popupDown.classList.add('.popup--show');
    } else {
      popupDown.classList.add('popup--closed');
      popupDown.classList.remove('.popup--show');
    }
  });
  popupClosed.addEventListener('click', function () {
    if (popupDown.classList.contains('popup--closed')) {
      popupDown.classList.remove('popup--closed');
      popupDown.classList.add('.popup--show');
    } else {
      popupDown.classList.add('popup--closed');
      popupDown.classList.remove('.popup--show');
    }
  });
})();
//# sourceMappingURL=all.js.map
