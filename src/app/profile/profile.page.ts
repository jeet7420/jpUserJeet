import { Component, OnInit } from '@angular/core';
import { IngressService } from '../services/ingress.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private ingressService: IngressService) { }

  ngOnInit() {
  }

  onLogoutClick() {
    console.log("Logout event");
    this.ingressService.logout();
  }

}
