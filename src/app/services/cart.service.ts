import { Injectable } from '@angular/core';
import { Dish } from '../modals/Dish';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartDishes: Dish[] = [];

  constructor() { }


  addDishToCart(dish: Dish): void {

    let found: boolean = false;
    for (var i = 0; i < this.cartDishes.length; i++) {
      if (this.cartDishes[i].dishId === dish.dishId) {
        this.cartDishes[i].noOfPeople += 2;
        found = true;
        break;
      }
    }
    if (!found) {
      dish.noOfPeople = 2;
      this.cartDishes.push(dish);
    }

  }

  removeDishFromCart(dish: Dish): void {
    for (var i = 0; i < this.cartDishes.length; i++) {
      if (this.cartDishes[i].dishId === dish.dishId) {
        this.cartDishes[i].noOfPeople -= 2;
        break;
      }
    }
  }

  getCartQuantity(dishId: number): number{
    for (var i = 0; i < this.cartDishes.length; i++) {
      if (this.cartDishes[i].dishId === dishId) {
        return this.cartDishes[i].noOfPeople;
      }
    }
    return 0;
  }
}
