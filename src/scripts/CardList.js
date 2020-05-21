class CardList {
  constructor(container, createFunc, api) {
    this.container = container;
    this.array = []
    this.createFunc = createFunc;
    this.api = api
  }

  addCard(cardElement) {
    this.array.push(cardElement);
    this.container.appendChild(cardElement);
  }

  render() {
    this.api.getCards()
    .then ((result) => {
      this.array = result
    })

    .then (() => {this.array.forEach(element => {
      const card = this.createFunc(element.name, element.link);
      this.addCard(card.createCard());
      card.setEventListeners();})
    
    });
  }
}
