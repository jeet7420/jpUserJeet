import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BOOKING_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  getAllBookingsUrl = BOOKING_URL + '/getAllBookings'
  createBookingUrl = BOOKING_URL + '/book';

  constructor(private httpClient: HttpClient) { }


  getAllBookings(userId) {
    var options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };
    let payload = {
      userId: userId
    }
    return this.httpClient.post(this.getAllBookingsUrl
      , payload
      , options
    );

  }

  createBooking(bookingdetails) {
    var options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };

    return this.httpClient.post(this.createBookingUrl
      , bookingdetails
      , options
    );
  }

}
