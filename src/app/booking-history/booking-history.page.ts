import { Component, OnInit } from '@angular/core';
import { RatingModule } from 'ng-starrating';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.page.html',
  styleUrls: ['./booking-history.page.scss'],
})
export class BookingHistoryPage implements OnInit {

  upcomingBookings: any;
  completedBookings: any;
  constructor(private router: Router) {

    this.upcomingBookings = [
      {
        "bookingId": 1,
        "chefName": "Jacob Thoman",
        "comments": "Master Chef",
        "bookingTime": "10:10:10",
        "chefImageUrl": "",
        "totalAmount":200

      }];

    this.completedBookings = [
      {
        "bookingId": 2,
        "chefName": "Yuri Gagrin",
        "comments": "Master Chef",
        "bookingTime": "10:10:10",
        "chefImageUrl": "",
        "totalAmount":400,
        "rating":3

      },
      {
        "bookingId": 3,
        "chefName": "Albert Einstein",
        "comments": "Dessert Paradise",
        "bookingTime": "10:10:10",
        "chefImageUrl": "",
        "totalAmount":250,
        "rating":5


      },
      {
        "bookingId": 4,
        "chefName": "Thoman Edison",
        "comments": "Non Veg Magician",
        "bookingTime": "10:10:10",
        "chefImageUrl": "",
        "totalAmount":600,
        "rating":4

      }];


  }

  ngOnInit() {
  }
  openBookingDetails(){
    this.router.navigateByUrl('/booking-details');
    
  }


}
