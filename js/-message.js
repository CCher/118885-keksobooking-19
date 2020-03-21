'use strict';

(function () {
  var errorPopup = document.querySelector('#error')
                  .content.querySelector('.error');
  var successPopup = document.querySelector('#success')
                    .content.querySelector('.success');

  var showErrorMessage = function () {
    document.body.appendChild(errorPopup);
    errorPopup.addEventListener('click', function () {
      closeErrorPopup();
    });
  };

  var closeErrorPopup = function () {
    errorPopup.remove();
  };

  var successMessage = function () {
    document.body.appendChild(successPopup);
    successPopup.addEventListener('click', function () {
      closeSuccessPopup();
    });
  };

  var closeSuccessPopup = function () {
    successPopup.remove();
  };

  window.message = {
    showError: showErrorMessage,
    showSuccess: successMessage
  };
})();

