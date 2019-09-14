import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IngressService } from '../services/ingress.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.page.html',
  styleUrls: ['./edit-user-profile.page.scss'],
})
export class EditUserProfilePage implements OnInit {

  constructor(private storage: Storage
    , private formBuilder: FormBuilder
    , private ingressService: IngressService
    , private alertController: AlertController
    , private router: Router) {

    this.editProfileForm = this.formBuilder.group({
      phoneNum: [null, Validators.required],
      email: [null, Validators.required]
    });
  }

  userDetails: any;
  editProfileForm: FormGroup;
  status = true;
  async ngOnInit() {
    this.userDetails = await this.storage.get('allUserData');
    this.editProfileForm.controls['email'].setValue(this.userDetails.emailId);
    this.editProfileForm.controls['phoneNum'].setValue(this.userDetails.phoneNum);
  }

  updateUserProfile() {
    this.ingressService.updateUserProfile({
      userId: this.userDetails.userId
      , userFullName: this.userDetails.userFullName
      , emailId: this.userDetails.emailid
    }).subscribe((res) => {
      console.log("edit profile response", res);
      this.generalPopup();
    })

  }

  async generalPopup() {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert-box booking-done-popup',
      message: 'Your Profile details have been successfully updated',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.router.navigateByUrl('/tabs/profile');
          }
        }
      ]
    });

    await alert.present();
  }

}

