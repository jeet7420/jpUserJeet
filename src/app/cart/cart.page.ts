import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: any;
  constructor(private alertController: AlertController,
    private router: Router) {
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

}
