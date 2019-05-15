



export default class Vending {
  constructor(description, id) {
    this.item = 'Cookies' || description
    this.id = id || Math.floor(Math.random() * 1000000)
  }
}