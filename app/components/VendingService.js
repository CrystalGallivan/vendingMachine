import Vending from "../models/Vending.js";

//PRIVATE


let _vending = [
  new Vending({ description: 'Cookies' })
]
//PUBLIC
export default class VendingService {
  constructor() {

  }
  get Vending() {
    return _vending.map(vending => new Vending(vending))

  }
  selectVending(id) {
    let vendingIndex = _vending.findIndex(v => v.id == id)
    _vending.splice(vendingIndex, 1)
  }
}
