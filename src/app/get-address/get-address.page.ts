import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Location } from 'src/app/modals/Location';
import { LocationService} from 'src/app/services/location.service'

@Component({
  selector: 'app-get-address',
  templateUrl: './get-address.page.html',
  styleUrls: ['./get-address.page.scss'],
})
export class GetAddressPage implements OnInit {

  addressForm: FormGroup;
  lat: string;
  lng: string;
  address: string;
  addArr: string[];
  city: string;
  state: string;
  country: string;
  flatNumber: string;
  flatName: string;
  landmark: string;
  displayAddress: string;
  completeAddress: string;

  location: Location = {};

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private locationService: LocationService) {
    this.addressForm = this.formBuilder.group({
      flatNo: [null, Validators.required],
      flatName: [null, Validators.required],
      area: [null, Validators.required],
      landmark: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
    this.lat = params['lat'];
    this.lng = params['lng'];
    this.address = params['address'];
    this.addArr=this.address.split(',');
    //this.addArr.reverse();
    let length=this.addArr.length;
    this.displayAddress=this.addArr[0];
    if(length>0) {
      this.country=this.addArr[length-1];
    }
    if(length>1) {
      this.state=this.addArr[length-2];
    }
    if(length>2) {
      this.city=this.addArr[length-3];
    }
    console.log(this.city);
    console.log(this.state);
    console.log(this.country);
      //console.log(this.lat);
      //console.log(this.lng);
      //console.log(this.address);
    this.addressForm.controls['area'].setValue(this.address);
    })
  }

  saveAddress() {
    this.flatNumber=this.addressForm.get("flatNo").value;
    this.flatName=this.addressForm.get("flatName").value;
    this.landmark=this.addressForm.get("landmark").value;
    this.completeAddress=this.flatNumber + " " + this.flatName + " " + this.landmark + " " + this.address;
    console.log(this.completeAddress);
    this.location.locationId=1;
    this.location.address=this.completeAddress;
    this.location.displayAddress=this.displayAddress;
    this.location.landmark=this.landmark;
    this.location.city=this.city;
    this.location.state=this.state;
    this.location.country=this.country;
    this.locationService.saveSelectedLocation(this.location);
    this.locationService.addLocation(this.location);
    this.router.navigate(['/tabs/home'], {
      queryParams: {}
    });
  }
}
