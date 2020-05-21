class ImagePopup extends Popup {

  assignBackgroundImage(event) {
    const popup = this.popup;
    const picture = popup.querySelector('.popup__picture')
    const pictureUrl = event.target.dataset.url
    picture.setAttribute('src', pictureUrl);
  }

  open(event) {
    this.assignBackgroundImage(event);
    this.popup.classList.toggle('popup_is-opened');
  }
}