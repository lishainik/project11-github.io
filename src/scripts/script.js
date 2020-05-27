import "../pages/index.css";

const newCardClass = (name, link) => (new Card(name, link))
const clearForms = () => {
  document.forms.new.reset()
  document.forms.edit.reset()
  const errors = document.querySelectorAll('.popup__error');
  errors.forEach(element => {
    element.textContent = '';
  })
}
const mestoApi = new Api ({
  baseUrl: 'https://praktikum.tk/cohort10',
  headers: {
    authorization: '11386148-b0e9-4e4e-b679-7abe03ee8409',
    'Content-Type': 'application/json'
  }
})

const errorMsg = { noInput: 'Это обязательное поле', inputLength: 'Должно быть от 2 до 30 символов', notUrl: 'Здесь должна быть ссылка' }
const placesContainer = new CardList(document.querySelector('.places-list'), newCardClass, mestoApi)
const placePopup = new Popup(document.querySelector('.place__popup'), clearForms);
const profilePopup = new Popup(document.querySelector('.profile__popup'), clearForms)
const imagePopup = new ImagePopup(document.querySelector('.popup__picture-zoom'))
const profile = new UserInfo(document.querySelector('.user-info__name'), document.querySelector('.user-info__job'), document.querySelector('.user-info__photo'), mestoApi);
const validatorPlaces = new FormValidator(document.forms.new, errorMsg)
const validatorProfile = new FormValidator(document.forms.edit, errorMsg)



function submitCardForm(event) {

  event.preventDefault();
  const form = document.forms.new;
  const name = form.elements.name;
  const link = form.elements.link;
  const card = new Card(name.value, link.value);
  placesContainer.addCard(card.createCard());
  card.setEventListeners();
  clearForms()
  placePopup.close(event);
}


function submitProfile(event) {
  event.preventDefault();
  const form = document.forms.edit;
  const name = form.elements.name;
  const profession = form.elements.profession;
  profile.submitUserInfo(name.value, profession.value)
  clearForms()
  profilePopup.close(event)
}

document.forms.new.addEventListener('submit', submitCardForm)

document.forms.edit.addEventListener('submit', submitProfile)


document.querySelector('.user-info__button').addEventListener('click', function () {
  placePopup.open();
});

document.querySelector('.user-info__edit-button').addEventListener('click', function () {
  profilePopup.open()
  const form = document.forms.edit;
  const name = form.elements.name;
  const profession = form.elements.profession;
  name.value = profile.getName();
  profession.value = profile.getProfession();
  validatorProfile.setSubmitButtonState(true);
})

document.querySelector('.places-list').addEventListener('click', function (event) {
  if (event.target.classList.contains('place-card__image')) {
    imagePopup.open(event);
  }

})

validatorPlaces.setEventListeners();
validatorProfile.setEventListeners();

placesContainer.render();


placePopup.setEventListeners();
profilePopup.setEventListeners();
imagePopup.setEventListeners();
profile.setUserInfo();