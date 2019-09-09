import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { PopupsPage } from '../popups/popups.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slider: any;
  //Configuration for each Slider
  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay:true,
    loop: true,
  };

  sliderOffers: any;
  //Configuration for each Slider
  sliderOffersOptions = {
    initialSlide: 0,
    slidesPerView: 6,
    autoplay:false,
    loop: false,
  };

  
  constructor(
    public modalController: ModalController,
    public alertController : AlertController
  ) {
    this.slider = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [ 0 , 0 ,  0]
    }

    this.sliderOffers = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          "title"  : "veg only",
          "icon" : "vegonly.svg",
          "type" : "ionic" ,
          "id" : "0"
        },
        {
          "title"  : "local",
          "icon" : "local.svg",
          "type" : "ionic" ,
          "id" : "1"
        },
        {
          "title"  : "north indian",
          "icon" : "northindian.svg",
          "type" : "ionic" ,
          "id" : "2"
        },
        {
          "title"  : "best in class",
          "icon" : "bestinclass.svg",
          "type" : "ionic" ,
          "id" : "3"
        },{
          "title"  : "new chefs",
          "icon" : "newchef.svg",
          "type" : "ionic" ,
          "id" : "0"
        },
        {
          "title"  : "pocket friendly",
          "icon" : "pocketfriendly.svg",
          "type" : "ionic" ,
          "id" : "4"
        }
      ]
    }
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: PopupsPage
    });
    return await modal.present();
  }



  async confirmationPopup() {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert-box confirmation-popup',
      message: 'The default pricing includes one starter, one main course and one dessert,selecting more than one item in each section would add to the costs.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
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
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
