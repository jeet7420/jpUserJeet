import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cart : any;
  constructor() {
    this.cart = [];
    console.log('length of this.cart' , this.cart.length);
  }


  paymentModeChange(){
    console.log("Only Online payment mode is available at the moment"); // to be converted to alert
  }

}
