import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-chef-profile',
  templateUrl: './chef-profile.page.html',
  styleUrls: ['./chef-profile.page.scss'],
})
export class ChefProfilePage implements OnInit {

  accordionList = [
    {
      "name": "Starter",
      "open": true,
      "children": [
        {
          "dishId": 1,
          "img": "../../assets/products/product-0.jpg",
          "dishName": "Starter A",
          "dishCostPerPerson": 50,
          "course": "In Starters",
          "rating": 4,
          "selected": false,
          "noOfPeople": 0
        },
        {
          "dishId": 2,
          "img": "../../assets/products/product-0.jpg",
          "dishName": "Starter B",
          "dishCostPerPerson": 55,
          "course": "In Starters",
          "rating": 4,
          "selected": false,
          "noOfPeople": 0
        }
      ]
    },
    {
      "name": "Main Course",
      "open": true,
      "children": [
        {
          "dishId": 3,
          "img": "../../assets/products/product-0.jpg",
          "dishName": "Main Course A",
          "dishCostPerPerson": 40,
          "course": "In Starters",
          "rating": 4,
          "selected": false,
          "noOfPeople": 0
        },
        {
          "dishId": 4,
          "img": "../../assets/products/product-0.jpg",
          "dishName": "Main Course B",
          "dishCostPerPerson": 60,
          "course": "In Desserts",
          "rating": 4,
          "selected": false,
          "noOfPeople": 0
        }
      ]
    },
    {
      "name": "Desert",
      "open": true,
      "children": [
        {
          "dishId": 5,
          "img": "../../assets/products/product-0.jpg",
          "dishName": "Desert A",
          "dishCostPerPerson": 65,
          "course": "In Desserts",
          "rating": 4,
          "selected": false,
          "noOfPeople": 0
        },
        {
          "dishId": 6,
          "img": "../../assets/products/product-0.jpg",
          "dishName": "Desert B",
          "dishCostPerPerson": 45,
          "course": "In Desserts",
          "rating": 4,
          "selected": false,
          "noOfPeople": 0
        }
      ]
    },
    {
      "name": "Accompaniments",
      "open": true,
      "children": [
        {
          "dishId": 7,
          "img": "../../assets/products/product-0.jpg",
          "dishName": "Accompaniment A",
          "dishCostPerPerson": 100,
          "course": "In Accompaniments",
          "rating": 4,
          "selected": false,
          "noOfPeople": 0
        },
        {
          "dishId": 8,
          "img": "../../assets/products/product-0.jpg",
          "dishName": "Accompaniment B",
          "dishCostPerPerson": 30,
          "course": "In Accompaniments",
          "rating": 4,
          "selected": false,
          "noOfPeople": 0
        }
      ]
    }
  ];

  constructor(private router: Router
    , private cartService: CartService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.cartService.setChefDetails(1,200);
  }
 

  public captureName(event: any): void {
    console.log(`Captured name by event value: ${event}`);
  }

  toggleAccordion(i) {
    if (this.accordionList[i].open) this.accordionList[i].open = false; else this.accordionList[i].open = true;
  }

  addItem(i, k) {
    this.accordionList[i].children[k].selected = true;
    this.cartService.addDishToCart(this.accordionList[i].children[k]);
  }
  addItemQty(i, k) {
    this.accordionList[i].children[k].noOfPeople++;
    this.cartService.addDishToCart(this.accordionList[i].children[k]);
  }
  removeItemQty(i, k) {
    if (this.accordionList[i].children[k].noOfPeople > 1) {
      this.accordionList[i].children[k].noOfPeople--;
      this.cartService.addDishToCart(this.accordionList[i].children[k]);
    } else {
      this.accordionList[i].children[k].selected = false;
      this.cartService.removeDishFromCart(this.accordionList[i].children[k]);
    }


  }
  continueToCart() {

    this.router.navigateByUrl('/tabs/cart');
  }

}
