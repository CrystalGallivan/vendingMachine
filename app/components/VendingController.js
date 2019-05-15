import VendingService from "./VendingService.js";


//PRIVATE
let _vendingService = new VendingService

function drawVending() {
  let vendings = _vendingService.Vending
  let template = ``
  for (let i = 0; i < vendings.length; i++) {
    let vending = vendings[i];
    template += `
    <li>Select<button class="btn btn-info" onclick="app.controllers.vendingController.selectVending()"></button>></li> `

  }
  document.querySelector('vending').innerHTML = template
}


//PUBLIC
export default class VendingController {
  constructor() {
    drawVending()
  }

}
