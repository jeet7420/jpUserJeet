import { Component, OnInit } from '@angular/core';
import { IngressService } from '../services/ingress.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private ingressService: IngressService
    , private alertController: AlertController
    , private storage: Storage) { }


  userDetails: any;
  async ngOnInit() {
    this.userDetails = await this.storage.get('allUserData');
    console.log('profile', this.userDetails);
    }

  onLogoutClick() {
    console.log("Logout event");
    this.twoButtonPopup();
  }

  async twoButtonPopup() {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert-box logout-popup two-button-popup',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.ingressService.logout();
          }
        }
      ]
    });

    await alert.present();
  }

}
