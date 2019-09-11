import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TERMS_OF_USE_URL, PRIVACY_POLICY_URL, ABOUT_URL } from 'src/environments/environment';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(private alertController: AlertController
    , private iab: InAppBrowser) { }

  iabRef: any;
  ngOnInit() {
  }

  async twoButtonPopup() {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert-box phone-popup two-button-popup',
      message: 'Please contact support on <br> +91 7337367761',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Call Us',
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
      message: 'Upcoming functionality',
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

  openSysBrowser(choice) {
    let url="";
    if (choice === 'pp')
      url = PRIVACY_POLICY_URL;
    else if (choice === 'tnc')
      url = TERMS_OF_USE_URL;
    else if (choice === 'about')
      url = ABOUT_URL;

    this.iabRef = this.iab.create(url, "_system");
  }

}
