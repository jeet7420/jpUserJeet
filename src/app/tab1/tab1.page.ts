import { Component , ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  slider: any;
  //Configuration for each Slider
  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay:true,
    loop: true,
  };

  sliderOffers: any;
  //Configuration for each Slider
  sliderOffersOptions = {
    initialSlide: 0,
    slidesPerView: 5,
    autoplay:false,
    loop: false,
  };

  
  constructor(
  ) {
    this.slider = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [ 0 , 0 ,  0]
    }

    this.sliderOffers = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          "title"  : "Only on Swigguy",
          "icon" : "logo-vimeo",
          "type" : "ionic" ,
          "id" : "0"
        },
        {
          "title"  : "offers near you",
          "icon" : "logo-vimeo",
          "type" : "ionic" ,
          "id" : "1"
        },
        {
          "title"  : "express delivery",
          "icon" : "logo-vimeo",
          "type" : "ionic" ,
          "id" : "2"
        },
        {
          "title"  : "veg only",
          "icon" : "logo-vimeo",
          "type" : "ionic" ,
          "id" : "3"
        },
        {
          "title"  : "pocket friendly",
          "icon" : "logo-vimeo",
          "type" : "ionic" ,
          "id" : "4"
        },{
          "title"  : "Only on Swigguy",
          "icon" : "logo-vimeo",
          "type" : "ionic" ,
          "id" : "0"
        },
        {
          "title"  : "offers near you",
          "icon" : "logo-vimeo",
          "type" : "ionic" ,
          "id" : "1"
        },
        {
          "title"  : "express delivery",
          "icon" : "logo-vimeo",
          "type" : "ionic" ,
          "id" : "2"
        },
        {
          "title"  : "veg only",
          "icon" : "logo-vimeo",
          "type" : "ionic" ,
          "id" : "3"
        },
        {
          "title"  : "pocket friendly",
          "icon" : "logo-vimeo",
          "type" : "ionic" ,
          "id" : "4"
        },{
          "title"  : "Only on Swigguy",
          "icon" : "logo-vimeo",
          "type" : "ionic" ,
          "id" : "0"
        },
        {
          "title"  : "offers near you",
          "icon" : "logo-vimeo",
          "type" : "ionic" ,
          "id" : "1"
        },
        {
          "title"  : "express delivery",
          "icon" : "logo-vimeo",
          "type" : "ionic" ,
          "id" : "2"
        },
        {
          "title"  : "veg only",
          "icon" : "logo-vimeo",
          "type" : "ionic" ,
          "id" : "3"
        },
        {
          "title"  : "pocket friendly",
          "icon" : "logo-vimeo",
          "type" : "ionic" ,
          "id" : "4"
        }
      ]
    }
  }

}
