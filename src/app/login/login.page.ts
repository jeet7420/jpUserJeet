import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  redirect: string;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {    
      this.redirect = params['redirect'] || '/tabs/home';
      console.log('query params: ', this.redirect);
    })
  }

  continueClick() {
    console.log("login event", this.redirect);
    this.router.navigate(["/tabs/otp"], {
      queryParams: {
        callerPage: this.redirect
      }
    });
  }

}
