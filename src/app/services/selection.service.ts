import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SELECTION_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  constructor(private httpClient: HttpClient) { }
  selectionUrl = SELECTION_URL;


  fetchChefs(location, time) {
    let fetchChefUrl = this.selectionUrl + '/allProfile'
    console.log('Fetching all chefs');
    var options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };
    let payload = {
      "location": {
        "latitude": location.latitude,
        "longitude": location.longitude
      },
      "bookingStartTime": time.bookingStartTime,
      "bookingEndTime": time.bookingEndTime
    }

    console.log(payload);
    return this.httpClient.post(fetchChefUrl
      , payload
      , options
    );


  }

  fetchChefDetails(chefId) {

    let fetchChefDetailsUrl = this.selectionUrl + '/profile/' + chefId;
    console.log('Fetching Chef details',fetchChefDetailsUrl);
    var options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };

    return this.httpClient.post(fetchChefDetailsUrl,{});



  }
}
