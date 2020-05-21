
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


	/**
  * Здравствуйте. 
  * 
  * !!Необходимо убрать реализацию из класса APi
  * В целом класс правильно организован, методы класса полноценные, но реализацию надо перенести в классы которые были созданы в 8 спринте, а методы класса Api
  * вызывать из других классов.
  * Так же необходимо перенести из текущего файла вызов методов класса Api в другие классы.
  * 
  * В текущем файле должно получиться примерно такое:
  const container = document.querySelector('.places-list'); // место куда записывать карточки
  const cards = []; // массив с карточками
  const words = {ru: { validationLenght: 'Должно быть от 2 до 30 символов'}};
  const config = {authorization: "ключ",ip: "http://95.216.175.5/cohort7",}; // настройки
  const api = new Api(config);
  const card = new Card(api);
  const validation = new FormValidator({words:words});
  const cardList = new CardList({card:card, api:api});
  cardList.render(container, cards);
  const popupCard = new PopupCard({ validation:validation,api:api});
  const popupProfile = new PopupProfile({ validation:validation,api:api});
  const popupImage = new PopupImage();
   *
  * *
    * Класс Api это отдельный класс, который ничего не знает о других классах и методах
    * Вы можете только получать данные из этого класса и использовать эти данные.
    * Представьте, что я дам Вам другой класс(допустим DataBase) к внутренностям которого вы не будете иметь доступ и даже прочитать этот файл не сможете
    * предварительно скажу, что у него есть несколько методов  getInitialCards deleteCard addCard, editUserInfo, setUserInfo и так далее
    * Который только возвращает/записывает данные, а вы можете получить только обращаясь к этим методам.
    * Соответственно в классе нельзя реализовать такие методы как querySelector или обратиться к другому классу, а только обратиться к методам сервера или базы.
    * Получается отдельная обязанность. Таким же способом Вы обращаетесь к серверу. Вы не знаете, что на сервере, даже язык программирования, но вы знаете методы
    * к которым обращаетесь и способ обращения. Это и есть обязанность отдельного класса.
    

   !! После добавленияя карточки, карточка отображается с ошибками, это надо исправить.
   * 
   * работа принимается только при исправлении всех "Надо исправить"
   *
  */