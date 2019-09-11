import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { INGRESS_URL } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IngressService {
  loggedInUserId: any;

  constructor(private httpClient: HttpClient
    , private storage: Storage
    , private router: Router) { }

  loginUrl = INGRESS_URL + '/login';
  registerUrl = INGRESS_URL + '/register';


  login(userDetails) {
    console.log("Inside Login");
    var options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };
    return this.httpClient.post(this.loginUrl
      , userDetails
      , options
    );
  }

  register(userDetails) {
    console.log('inside register');
    var options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };
    return this.httpClient.post(this.registerUrl
      , userDetails
      , options
    );
  }


  logout(): Promise<boolean> {
    return this.storage.remove('loggedInUser').then(() => {
      this.loggedInUserId = null;
      console.log("logout");
      this.router.navigate(['/tabs/home']);
      return true;
    });
  }

  async getToken() {
    if (!this.loggedInUserId) {
      console.log("storage token");
      await this.storage.ready();
      const token = await this.storage.get('loggedInUser');
      if (token) {
        console.log("storage token recieved");
        this.loggedInUserId = token;
      }
    }
    return this.loggedInUserId;
  }
}
