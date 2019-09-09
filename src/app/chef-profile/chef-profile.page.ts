import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chef-profile',
  templateUrl: './chef-profile.page.html',
  styleUrls: ['./chef-profile.page.scss'],
})
export class ChefProfilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  continueToCart() {

    this.router.navigateByUrl('/tabs/cart');
  }

}
