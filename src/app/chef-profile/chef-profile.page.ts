import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { SelectionService } from '../services/selection.service';
import { IMAGE_REPO } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-chef-profile',
  templateUrl: './chef-profile.page.html',
  styleUrls: ['./chef-profile.page.scss'],
})
export class ChefProfilePage implements OnInit {


  chefId: any;
  chefDetails: any;
  allDishes: any;
  starters: any;
  mainCourse: any;
  desserts: any;
  accompaniment: any;
  accordionList: any;
  dishImageUrl = IMAGE_REPO + 'dish/';
  chefImageUrl = IMAGE_REPO + 'chef/';
  dataLoadComplete = false;
  isCartEmpty = true;

  constructor(private router: Router
    , private cartService: CartService
    , private route: ActivatedRoute
    , private selectionService: SelectionService
    , private alertController: AlertController) { }

  ngOnInit() {
  }


  ionViewDidEnter() {
    this.route.queryParams.subscribe(params => {
      this.chefId = params['chefDetails'];
      this.selectionService.fetchChefDetails(this.chefId).subscribe((resp) => {
        this.chefDetails = resp;
        console.log("chef profile ion v", this.chefDetails);
        let chefD = this.cartService.getChefDetails();
        if (chefD.chefId && chefD.chefId  != this.chefId) {
          this.isCartEmpty = false;
        } else {
          this.isCartEmpty = true;
        }
        this.allDishes = this.chefDetails.allDishes;
        this.addRemainJSONProperties();
        this.addCartdishes();
        this.seperateDishes(this.allDishes);
        this.accordionList = [
          {
            "name": "Starter",
            "open": true,
            "children": this.starters
          },
          {
            "name": "Main Course",
            "open": true,
            "children": this.mainCourse
          },
          {
            "name": "Desert",
            "open": true,
            "children": this.desserts
          },
          {
            "name": "Accompaniments",
            "open": true,
            "children": this.accompaniment
          }
        ];
      })
    });
    this.dataLoadComplete = true;
  }

  addCartdishes() {
    let chefInCart = this.cartService.getChefDetails();
    if (chefInCart.chefId == this.chefId) {
      let cartDishes = this.cartService.getCart();
      for (var i = 0; i < cartDishes.length; i++) {
        for (var j = 0; j < this.allDishes.length; j++) {
          if (cartDishes[i].dishId == this.allDishes[j].dishId) {
            this.allDishes[j].noOfPeople = cartDishes[i].noOfPeople;
            this.allDishes[j].selected = true;
            break;
          }
        }
      }
    }
  }
  addRemainJSONProperties() {
    let tempDish;
    for (var i = 0; i < this.allDishes.length; i++) {
      tempDish = this.allDishes[i];
      tempDish.selected = false;
      tempDish.noOfPeople = 0;
      this.allDishes[i] = tempDish;
    }

  }
  seperateDishes(allDishes) {

    this.starters = allDishes.filter(dish => dish.dishCategory == 1);
    this.mainCourse = allDishes.filter(dish => dish.dishCategory == 2);
    this.desserts = allDishes.filter(dish => dish.dishCategory == 4);
    this.accompaniment = allDishes.filter(dish => dish.dishCategory == 3);
    // console.log('starter', this.starters);
    // console.log('mainCourse', this.mainCourse);
    // console.log('desserts', this.desserts);
    // console.log('accompaniment', this.accompaniment);


  }


  public captureName(event: any): void {
    console.log(`Captured name by event value: ${event}`);
  }

  toggleAccordion(i) {
    if (this.accordionList[i].open) this.accordionList[i].open = false; else this.accordionList[i].open = true;
  }

  addItem(i, k) {
    this.cartService.setChefDetails(this.chefDetails);
    if (!this.isCartEmpty) {
      this.twoButtonPopup(i, k);
    }
    else {
      this.accordionList[i].children[k].selected = true;
      this.cartService.addDishToCart(this.accordionList[i].children[k]);
    }
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

  // refreshCart() {
  //   return this.twoButtonPopup();
  // }
  navigateToCart() {
    this.router.navigate(['/tabs/cart'], {
      queryParams: {
        chefDetails: this.chefDetails
      }
    });
  }

  async twoButtonPopup(i, k) {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert-box clear-cart-popup two-button-popup',
      message: 'Cart Contains dishes from another chef, <br>Are you sure you want to clear cart and add dishes from this chef ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('navigate to home');
            this.router.navigateByUrl('/tabs/home');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Refreshing Cart');
            this.cartService.clearCart();
            this.accordionList[i].children[k].selected = true;
            this.cartService.addDishToCart(this.accordionList[i].children[k]);

          }
        }
      ]
    });

    await alert.present();
  }

}
