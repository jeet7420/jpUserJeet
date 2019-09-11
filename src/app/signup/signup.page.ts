import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IngressService } from '../services/ingress.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private route: ActivatedRoute
    , private formBuilder: FormBuilder
    , private ingressService: IngressService
    , private storage: Storage
    , private router: Router
    , private alertController : AlertController) {

    this.registerForm = this.formBuilder.group({
      phoneNumber: [null, Validators.required],
      email: [null, Validators.required],
      fullName: [null, Validators.required]
    });
  }

  inputPhoneNumber: any;
  callerPage: string;
  registerForm: FormGroup;
  registerResponse : any;

  ngOnInit() {

    this.route.queryParams.subscribe(params => {

      this.callerPage = params['callerPage'] || '/tabs/home';
      this.inputPhoneNumber = params['phoneNumber'];
      this.registerForm.controls['phoneNumber'].setValue(this.inputPhoneNumber);
    });
  }

  signUpClick() {
    console.log('signup Click');
    let payload = {
      "userFullName": this.registerForm.get('fullName').value,
      "loginMode": "P",
      "phoneNum": this.registerForm.get('phoneNumber').value,
      "emailId": this.registerForm.get('email').value,
      "phoneVerificationStatus": true,
      "emailVerificationStatus": false
    }

    this.ingressService.register(payload).subscribe((resp) => {
      console.log('register response', resp);
      this.registerResponse = resp;
      if(this.registerResponse.recordStatus === 5){
        this.storage.set('loggedInUser', this.registerResponse.userId);
        this.router.navigateByUrl(this.callerPage);
      }else if (this.registerResponse.recordStatus === 4){
        this.generalPopup('An account with same phone number or email already exists');
        this.router.navigateByUrl(this.callerPage);
      }
      else {
        this.generalPopup('Something went wrong. <br>Please contact support.');
        this.router.navigateByUrl(this.callerPage);
      }
    });


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
          }
        }
      ]
    });

    await alert.present();
  }

}
