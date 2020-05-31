export default class Popup {
  constructor(popupElement, cleaner) {
    this.popup = popupElement;
    this.cleaner = cleaner
  }

  open() {
    this.popup.classList.toggle('popup_is-opened');

  }



  close() {
    this.popup.classList.toggle('popup_is-opened');
    if (typeof this.cleaner === 'function') {
      this.cleaner();
    }
  }

  setEventListeners() {
    this
      .popup
      .querySelector('.popup__close')
      .addEventListener('click', () => {
        this.close(this)
      });
  }
}

