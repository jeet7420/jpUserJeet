import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PopupIngredientsPage } from '../popup-ingredients/popup-ingredients.page';
import { CartService } from '../services/cart.service';
import { PaymentHandlerService } from '../services/payment-handler.service';
import { BookingService } from '../services/booking.service';
import { Storage } from '@ionic/storage';
import { IMAGE_REPO } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: any;
  totalAmount: number;
  minimumOrderAmount: number;
  payableAmount: number;
  chefDetails: any;
  dishImageUrl = IMAGE_REPO + 'dish/';
  chefImageUrl = IMAGE_REPO + 'chef/';
  constructor(
    private alertController: AlertController,
    private modalController: ModalController,
    private router: Router
    , private cartService: CartService
    , private paymentHandler: PaymentHandlerService
    , private bookingService: BookingService
    , private storage: Storage
    , private route: ActivatedRoute
  ) {
    // this.cart = [0];
    // console.log('length of this.cart', this.cart.length);
  }



  paymentModeChange() {
    console.log("Only Online payment mode is available at the moment"); // to be converted to alert
  }

  ngOnInit() {

  }

  refreshCartInfo() {
    this.cart = this.cartService.getCart();
    this.chefDetails = this.cartService.getChefDetails();
    if (this.chefDetails) {
      this.minimumOrderAmount = this.chefDetails.bookingCost;
      this.totalAmount = this.cartService.getCartTotal();
      if (this.minimumOrderAmount > this.totalAmount) {
        this.payableAmount = this.minimumOrderAmount
      } else {
        this.payableAmount = this.totalAmount;
      }

    } else {
      this.minimumOrderAmount = 0;
      this.totalAmount = 0;
    }

  }
  ionViewDidEnter() {
    this.refreshCartInfo();
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

  async invokeBookingHandler() {
    //create booking payload
    const userId = await this.storage.get('loggedInUser');


    //this.bookingService.createBooking()

  }

  invokePaymentHandler() {

    let paymentObject = {
      amount: 1000,
      customerName: 'Rahul',
      customerEmail: 'Rahul@gmail.com',
      customerPhone: '7337367762'
    };
    this.paymentHandler.payWithRazor(paymentObject);
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

  deleteDishFromCart(dish) {
    console.log("delete", dish);
    this.cartService.removeDishFromCart(dish);
    this.refreshCartInfo();
  }

  async deletePopup(dish) {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert-box delete-checkpoint-popup',
      message: 'Are you sure you want to remove this dish from cart?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.deleteDishFromCart(dish);

          }
        }
      ]
    });

    await alert.present();
  }


}
