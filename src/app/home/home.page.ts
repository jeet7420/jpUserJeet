import { Component, OnInit } from '@angular/core';
//import { ModalController, AlertController } from 'ionic-angular';
import { ModalController, AlertController } from '@ionic/angular';
import { GetLocationPopUpPage } from '../get-location-pop-up/get-location-pop-up.page';
import { PopupsPage } from '../popups/popups.page';
import { Chef } from '../modals/Chef';
import { Router } from '@angular/router';
import { LocationService} from 'src/app/services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private location: string;
  slider: any;
  availableChefs: Chef[];
  private _bookingTimeDesc = '';
  private _addressDesc = '';
  private _lattitude = '';
  private _longitude = '';
  private _bookingStartTime;
  private _bookingEndTime: string = ""; 
  //Configuration for each Slider
  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true,
    loop: true,
  };

  sliderOffers: any;
  //Configuration for each Slider
  sliderOffersOptions = {
    initialSlide: 0,
    slidesPerView: 6,
    autoplay: false,
    loop: false,
  };


  constructor(public modalController: ModalController,
    public alertController: AlertController,
    private locationService: LocationService,
    private router: Router) {
    this.slider = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [0, 0, 0]
    }

    this.sliderOffers = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          "title": "veg only",
          "icon": "vegonly.svg",
          "type": "ionic",
          "id": "0"
        },
        {
          "title": "local",
          "icon": "local.svg",
          "type": "ionic",
          "id": "1"
        },
        {
          "title": "north indian",
          "icon": "northindian.svg",
          "type": "ionic",
          "id": "2"
        },
        {
          "title": "best in class",
          "icon": "bestinclass.svg",
          "type": "ionic",
          "id": "3"
        }, {
          "title": "new chefs",
          "icon": "newchef.svg",
          "type": "ionic",
          "id": "0"
        },
        {
          "title": "pocket friendly",
          "icon": "pocketfriendly.svg",
          "type": "ionic",
          "id": "4"
        }
      ]
    }

    this.getAvailableChefs();

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
    if(this.locationService.getSelectedLocation()==null) {
      this.location="Location";
      console.log(this.location);
    }
    else {
      this.location=this.locationService.getSelectedLocation().displayAddress;
      console.log(this.location);
    }
  }

  ionViewDidEnter() {
    if(this.locationService.getSelectedLocation()==null) {
      this.location="Location";
      console.log(this.location);
    }
    else {
      this.location=this.locationService.getSelectedLocation().displayAddress;
      console.log(this.location);
    }
  }


  getAvailableChefs() {
    this.availableChefs = [{
      chefFullName: "Jacob Thomas",
      comments: "Mater Chef, Delhi",
      averageRating: 4.3,
      bestPrepList: ["Chicken Butter masala", "kheer"]

    },
    {
      chefFullName: "Milind Kumar",
      comments: "Ravishing Desserts",
      averageRating: 4.1,
      bestPrepList: ["Double ka Meetha", "kheer"]

    },
    {
      chefFullName: "Altaf Azhar",
      comments: "Non veg Paradise",
      averageRating: 4.1,
      bestPrepList: ["Mutton keema", "Chicken Rezala"]

    }];
  }

  openChefDetails() {
    this.router.navigateByUrl('/tabs/chef-profile');
  }

  showAddressModal() {
    console.log("check");
    this.router.navigateByUrl('/tabs/getLocationPopup');
  }

}
