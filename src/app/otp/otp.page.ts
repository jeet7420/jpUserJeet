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
  inputPhoneNumber: any;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.callerPage = params['callerPage'] || '/tabs/home';
      this.inputPhoneNumber = params['phoneNumber'];
    });
  }
  verifyOTP() {
    console.log("Inside verify OTP");
    let devFlag = DEV_FLAG;

    var verifyUserPayload = {
      "loginMode": "P",
      "phoneNum": this.inputPhoneNumber
    }
    if (devFlag) {
      this.ingressProvider.login(verifyUserPayload).subscribe((resp) => {
        console.log(resp);
        this.userData = resp;
        if (this.userData.recordStatus === 1) {
          this.storage.set('loggedInUser', this.userData.userId);
          this.ingressProvider.getUserProfile(this.userData.userId).subscribe((resp) => {
            let allData = resp;
            console.log('all data', allData);
            this.storage.set('allUserData', allData);
          });
          this.router.navigateByUrl(this.callerPage);
        }
        else if (this.userData.recordStatus === 2) {
          this.router.navigate(['/signup'], {
            queryParams: {
              phoneNumber: this.inputPhoneNumber,
              callerPage: this.callerPage
            }
          });
        }
      });
    }
  }
}
