'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var DEBOUNCE_INTERVAL = 500;

  var onEscDown = function (evt, func) {
    if (evt.keyCode === ESC_KEYCODE) {
      func();
    }
  };

  var debounce = function (fun) {
    var lastTimeout = null;
    return function () {
      var args = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        fun.apply(null, args);
      }, DEBOUNCE_INTERVAL);
    };
  };

  window.utils = {
    onEscDown: onEscDown,
    debounce: debounce
  };
})();
