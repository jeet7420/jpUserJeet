import { Component, OnInit } from '@angular/core';
import { AlertController , ModalController} from '@ionic/angular';
import { Router } from '@angular/router';
import { PopupIngredientsPage } from '../popup-ingredients/popup-ingredients.page';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: any;
  constructor(
    private alertController: AlertController,
    private modalController : ModalController,
    private router: Router
  ) {
    this.cart = [0];
    console.log('length of this.cart', this.cart.length);
  }


  paymentModeChange() {
    console.log("Only Online payment mode is available at the moment"); // to be converted to alert
  }

  ngOnInit() {

  }

  async generalPopup() {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert-box booking-done-popup',
      message: 'Your booking has been confirmed',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.router.navigateByUrl('/tabs/profile/booking-history');
          }
        }
      ]
    });

    await alert.present();
  }

  invokePaymentHandler() {
    this.generalPopup();
  }

  
  async detailPopup() {
    const modal = await this.modalController.create({
      component: PopupIngredientsPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) { 
        //this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
}
