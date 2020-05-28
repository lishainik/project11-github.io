export default class UserInfo {

  constructor (nameElement, professionElement, avatarElement, api) {
    this.api = api
    this.nameElement = nameElement
    this.professionElement = professionElement
    this.avatarElement = avatarElement
  }

  setUserInfo() {
    this.api.getProfileInfo()
    .then ((result) => {
      this.name = result.name 
      this.profession = result.about
      this.avatar = result.avatar
      this.updateUserInfo()
    })
  }

  submitUserInfo(name, link) {
    this.api. submitProfileInfo (name, link)
    .then ((result) => {
      this.name = result.name 
      this.profession = result.about
      this.avatar = result.avatar
      this.updateUserInfo()
    }) 
  }

  updateUserInfo() {
    this.nameElement.textContent = this.name;
    this.professionElement.textContent = this.profession;
    this.avatarElement.style.backgroundImage = (`url(${this.avatar})`);
  }

  getName() {
    return this.name
  }

  getProfession() {
    return this.profession
  }
};