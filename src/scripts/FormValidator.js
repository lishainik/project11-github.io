class FormValidator {
  constructor(form, errors) {
    this.form = form;
    this.errors = errors
  }



  checkInputValidity(element) {
    const error = element.nextElementSibling;

    if (element.validity.valueMissing) {
      error.textContent = this.errors.noInput;
      return false
    }

    if ((element.validity.tooShort || element.validity.tooLong) && element.type == 'text') {
      error.textContent = this.errors.inputLength;
      return false
    }

    if (element.type == 'url' && element.validity.typeMismatch) {
      error.textContent = this.errors.notUrl;
      return false
    }

    error.textContent = '';


    return true;
  }

  setSubmitButtonState(isValidForm) {
    const button = this.form.querySelector('button')
    if (isValidForm === true) {
      button.removeAttribute('disabled')
      button.classList.remove('popup__button_disabled');
      return
    }
    if (isValidForm === false) {
      button.setAttribute('disabled', true);
      button.classList.add('popup__button_disabled');
      return
    }
  }


  setEventListeners() {
    this.form.addEventListener('input', () => {
      const inputs = Array.from(this.form.elements);
      let isValidForm = true;
      inputs.forEach((element) => {
        if (!element.classList.contains('button')) {
          if (!this.checkInputValidity(element)) {
            isValidForm = false;
          }
        }
      });
      this.setSubmitButtonState(isValidForm);
    });
  }







}
