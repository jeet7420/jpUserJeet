import { Injectable } from '@angular/core';
import { Location } from 'src/app/modals/Location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  /*location: Location[] = [{locationId: 1,
  address: "301 Vinayaka Residency, Serilingampalli, Hyderabad, Telangana, India",
  displayAddress: "Serilingampalli",
  landmark: "Near HCU Bus Depot",
  pincode: "500019",
  city: "Hyderabad",
  state: "Telangana",
  country: "India"},

  {locationId: 2,
    address: "44S, 7th Phase South, Adarsh Nagar, Sonari, Jamshedpur, Jharkhand, India",
    displayAddress: "Adarsh Nagar",
    landmark: "Near Sonari Gurudwara",
    pincode: "831011",
    city: "Jamshedpur",
    state: "Jharkhand",
    country: "India"}];

  testLoc: Location = {locationId: 1,
    address: "301 Vinayaka Residency, Serilingampalli, Hyderabad, Telangana, India",
    displayAddress: "Serilingampalli",
    landmark: "Near HCU Bus Depot",
    pincode: "500019",
    city: "Hyderabad",
    state: "Telangana",
    country: "India"};*/

  location: Location[] = [];

  selectedLocation: Location;

  constructor() { }

  saveSelectedLocation(loc: Location): void {
    this.selectedLocation = loc;
  }
  
  getSelectedLocation(): Location {
    return this.selectedLocation;
  }

  addLocation(loc: Location): void {
    this.location.push(loc);
  }

  getAllLocations(): Location[] {
    return this.location;
  }

  /*getTestLocations(): Location {
    //return this.testLoc;
  }*/

  clearAllLocation(): void {
    this.location = [];
  }
}
