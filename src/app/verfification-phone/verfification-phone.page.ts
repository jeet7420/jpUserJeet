import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verfification-phone',
  templateUrl: './verfification-phone.page.html',
  styleUrls: ['./verfification-phone.page.scss'],
})
export class VerfificationPhonePage implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  continueClick(){
    this.router.navigateByUrl('/tabs/home');
  }

}
