import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router
    , private route: ActivatedRoute
    , private formBuilder: FormBuilder) { 

    this.loginForm = this.formBuilder.group({
      phoneNumber: [null, Validators.required]
    });

  }
  redirect: string;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {   
      this.loginForm.controls['phoneNumber'].setValue(""); 
      this.redirect = params['redirect'] || '/tabs/home';
      console.log('query params: ', this.redirect);
    })
  }

  continueClick() {
    console.log("login event", this.redirect);
    this.router.navigate(["/otp"], {
      queryParams: {
        callerPage: this.redirect,
        phoneNumber: this.loginForm.get("phoneNumber").value
      }
    });
  }

}
