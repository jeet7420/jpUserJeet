import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.page.html',
  styleUrls: ['./booking-details.page.scss'],
})
export class BookingDetailsPage implements OnInit {

  bookingDetails: any;
  constructor() {

    this.bookingDetails = {
      bookingId: 1,
      chefName: "Karunakar Malik",
      totalAmountPaid: 300,
      paymentMode: "UPI",
      paymentTime: "10 Oct, 06:12 PM",
      bookingStatus: "Completed",
      dishes: [
        {
          dishName: "ButterMasala",
          dishTotalCost: 40,
          noOfPeople: 2
        },
        {
          dishName: "Roti",
          dishTotalCost: 40,
          noOfPeople: 1
        }]
    }
  }

  ngOnInit() {
  }

}
