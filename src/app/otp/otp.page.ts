import { Component, OnInit } from '@angular/core';
import { DEV_FLAG } from 'src/environments/environment';
import { IngressService } from '../services/ingress.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  userData: any;
  constructor(private ingressProvider: IngressService
    , private router: Router
    , private storage: Storage
    , private route: ActivatedRoute) { }

  callerPage: string;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.callerPage = params['callerPage'] || '/tabs/home';
      console.log('query params otp: ', this.callerPage);
    });
  }
  verifyOTP() {
    console.log("Inside verify OTP");
    let devFlag = DEV_FLAG;

    var verifyUserPayload = {
      "loginMode": "P",
      "phoneNum": "7337367761"
    }
    if (devFlag) {
      this.ingressProvider.login(verifyUserPayload).subscribe((resp) => {
        console.log(resp);
        this.userData = resp;
        if (this.userData.recordStatus === 1) {
          this.storage.set('loggedInUser', this.userData.userId);
          this.router.navigateByUrl(this.callerPage);
        }
      });
    }
  }
}
