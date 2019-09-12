import { Component, OnInit } from '@angular/core';
import { RatingModule } from 'ng-starrating';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.page.html',
  styleUrls: ['./booking-history.page.scss'],
})
export class BookingHistoryPage implements OnInit {

  upcomingBookings: any;
  completedBookings: any;
  inProgressBooking: any;
  cancelledBooking: any;
  allBookings: any;
  constructor(private router: Router
    , private bookingService: BookingService) {

    // this.upcomingBookings = [
    //   {
    //     "bookingId": 1,
    //     "chefName": "Jacob Thoman",
    //     "comments": "Master Chef",
    //     "bookingTime": "10:10:10",
    //     "chefImageUrl": "",
    //     "totalAmount":200

    //   }];

    // this.completedBookings = [
    //   {
    //     "bookingId": 2,
    //     "chefName": "Yuri Gagrin",
    //     "comments": "Master Chef",
    //     "bookingTime": "10:10:10",
    //     "chefImageUrl": "",
    //     "totalAmount":400,
    //     "rating":3

    //   },
    //   {
    //     "bookingId": 3,
    //     "chefName": "Albert Einstein",
    //     "comments": "Dessert Paradise",
    //     "bookingTime": "10:10:10",
    //     "chefImageUrl": "",
    //     "totalAmount":250,
    //     "rating":5


    //   },
    //   {
    //     "bookingId": 4,
    //     "chefName": "Thoman Edison",
    //     "comments": "Non Veg Magician",
    //     "bookingTime": "10:10:10",
    //     "chefImageUrl": "",
    //     "totalAmount":600,
    //     "rating":4

    //   }];


  }

  ngOnInit() {
    this.bookingService.getAllBookings(1).subscribe((resp) => {
      this.allBookings = resp
      console.log('all', this.allBookings);

      this.upcomingBookings = this.allBookings.filter(booking => booking.bookingStatus === 'Inactive');
      this.completedBookings = this.allBookings.filter(booking => booking.bookingStatus === 'Completed');
      this.inProgressBooking = this.allBookings.filter(booking => booking.bookingStatus === 'In Progress');
      this.cancelledBooking = this.allBookings.filter(booking => booking.bookingStatus === 'Cancelled');
      console.log('upcoming', this.upcomingBookings);
      console.log('completed', this.completedBookings);
    });

  }
  openBookingDetails() {
    this.router.navigateByUrl('/booking-details');

  }


}
