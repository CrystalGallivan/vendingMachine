import VendingController from "./components/VendingController.js";


//PRIVATE




//PUBLIC
class App {

  constructor() {
    this.controllers = {
      vendingController: new VendingController()


    }

  }

}


window['app'] = new App()