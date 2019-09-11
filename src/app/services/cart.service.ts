import { Injectable } from '@angular/core';
import { Dish } from '../modals/Dish';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartDishes: Dish[] = [];

  constructor() { }


  addDishToCart(dish: Dish): void {
    //console.log("in cart service",dish);

    let found: boolean = false;
    for (var i = 0; i < this.cartDishes.length; i++) {
      if (this.cartDishes[i].dishId === dish.dishId) {
        this.cartDishes[i].noOfPeople = dish.noOfPeople;
        found = true;
        break;
      }
    }
    if (!found) {
      dish.noOfPeople = 1;
      this.cartDishes.push(dish);
    }

    console.log(this.cartDishes);

  }

  removeDishFromCart(dish: Dish): void {
    this.cartDishes = this.cartDishes.filter(item => item.dishId !== dish.dishId);
  }


  getCartQuantity(dishId: number): number {
    for (var i = 0; i < this.cartDishes.length; i++) {
      if (this.cartDishes[i].dishId === dishId) {
        return this.cartDishes[i].noOfPeople;
      }
    }
    return 0;
  }
}
