import { Component, NgZone, ViewChild, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { NavController , ViewController, IonicPage} from 'ionic-angular';
import { DOCUMENT } from '@angular/common';
import { FormControl } from "@angular/forms";
import { MapsAPILoader, MarkerManager } from '@agm/core';
import {google} from 'google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { ModalController } from '@ionic/angular';
import { GetAddressPage } from '../get-address/get-address.page';
import { Router } from '@angular/router';
import { last } from 'rxjs/operators';
import { Location } from 'src/app/modals/Location';
import { LocationService} from 'src/app/services/location.service';

declare let google:google;
declare let geolocation: Geolocation;

@IonicPage()
@Component({
  selector: 'app-get-location-pop-up',
  templateUrl: './get-location-pop-up.page.html',
  styleUrls: ['./get-location-pop-up.page.scss'],
})
export class GetLocationPopUpPage implements OnInit{

  GoogleAutocomplete: any;
  autocomplete: any;
  autocompleteItems: any;
  map: any;
  geocoder: any;
  markers: any;
  data: any;
  location: Location;
  locArr: Location[];

  constructor(/*public viewCtrl: ViewController, */private zone: NgZone, private router: Router
    , private locationService: LocationService) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
    this.geocoder = new google.maps.Geocoder;
    this.markers = [];
    this.data = { adress: '', lt: '', lng: '' };
  }

  ionViewDidEnter() {
    /*this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.9011, lng: -56.1645 },
      zoom: 15
    });*/
  }

  ngOnInit() {
    //this.location = this.locationService.getTestLocations();
    //console.log(this.location.locationId);
    //console.log(this.location.address);
    this.locArr = this.locationService.getAllLocations();
    //console.log(this.locArr[0].address);
  }

  updateSearchResults() {
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
      (predictions, status) => {
        console.log(predictions);
        console.log(status);
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);

          });
        });
      });
  }

  selectSearchResult(item) {
    this.clearMarkers();
    this.autocompleteItems = [];

    this.geocoder.geocode({ 'placeId': item.place_id }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK' && results[0]) {
        let position = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        /*let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map,
        });*/
        //this.markers.push(marker);
        //this.map.setCenter(results[0].geometry.location);
        this.data = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
          adress: item.description
        };
        
        //console.log(this.data.lat);
        //console.log(this.data.lng);
        //console.log(this.data.adress);
        this.router.navigate(['/tabs/getAddress'], {
          queryParams: {
            lat: this.data.lat,
            lng: this.data.lng,
            address: this.data.adress,
          }
        });
      }
    })
  }

  CloseModal() {
    //this.viewCtrl.dismiss();
  }

  SaveSelectedPlace() {
    if (this.data != '' && this.data != null)
      console.log('comment in below line');
    //this.viewCtrl.dismiss(this.data);
  }

  clearMarkers() {
    this.markers = [];
  }

}
