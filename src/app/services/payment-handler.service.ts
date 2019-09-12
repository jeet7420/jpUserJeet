import { Injectable } from '@angular/core';
import { RAZORPAY_KEY } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

declare var RazorpayCheckout: any;
@Injectable({
  providedIn: 'root'
})



export class PaymentHandlerService {

  razor_key: any;
  constructor(private alertController : AlertController
    , private router: Router) {
    this.razor_key = RAZORPAY_KEY;
   }

  payWithRazor(paymentObject) {
    var options = {
      description: 'Jeerapowder booking payment',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR', // your 3 letter currency code
      key: this.razor_key, // your Key Id from Razorpay dashboard
      amount: paymentObject.amount, // Payment amount in smallest denomiation e.g. cents for USD
      name: paymentObject.customerName,
      prefill: {
        email: paymentObject.customerEmail,
        contact: paymentObject.customerPhone,
        name: paymentObject.customerName
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          this.generalPopup('Payment Cancelled.')
        }
      }
    };

    var successCallback = function (payment_id) {
      this.generalPopup('Payment Successful.')
      
    };

    var cancelCallback = function (error) {
      this.generalPopup(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

  async generalPopup(text) {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert-box booking-done-popup',
      message: text,
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
}
