class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }

  createCard() {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('place-card');

    const pictureElement = document.createElement('div');
    pictureElement.classList.add('place-card__image');
    pictureElement.setAttribute('style', 'background-image');
    pictureElement.style.backgroundImage = (`url(${this.link})`);
    pictureElement.dataset.url = this.link

    const delButton = document.createElement('button');
    delButton.classList.add('place-card__delete-icon');

    pictureElement.appendChild(delButton);
    const textContainer = document.createElement('div');
    textContainer.classList.add('place-card__description');

    const textTitle = document.createElement('h3');
    textTitle.classList.add('place-card__name');
    textTitle.textContent = this.name;

    const likeBtn = document.createElement('button');
    likeBtn.classList.add('place-card__like-icon');


    textContainer.appendChild(textTitle);
    textContainer.appendChild(likeBtn);

    cardContainer.appendChild(pictureElement);
    cardContainer.appendChild(textContainer);

    this.cardElement = cardContainer;
    return this.cardElement;
  }

  setEventListeners() {
    this
      .cardElement
      .querySelector('.place-card__like-icon')
      .addEventListener('click', this.like);

    this
      .cardElement
      .querySelector('.place-card__delete-icon')
      .addEventListener('click', () => {
        this.removeCard(this);
      });





  }

  deleteEventListeners() {
    this
      .cardElement
      .querySelector('.place-card__like-icon')
      .removeEventListener('click', this.like);
    this
      .cardElement
      .querySelector('.place-card__delete-icon')
      .removeEventListener('click', () => {
        this.removeCard(this);
      });
  }

  like(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }

  removeCard() {
    this.deleteEventListeners();
    this.cardElement.remove();
  }
}