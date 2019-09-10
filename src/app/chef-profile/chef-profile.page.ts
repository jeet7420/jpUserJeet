import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-chef-profile',
  templateUrl: './chef-profile.page.html',
  styleUrls: ['./chef-profile.page.scss'],
})
export class ChefProfilePage implements OnInit {
  
  accordionList = [
    {
      "name" : "Starter",
      "open": true,
      "children" : [
        {
          "img" : "../../assets/products/product-0.jpg",
          "title" : "Starter A",
          "course" : "In Starters",
          "ratting" : 4 ,
          "selected" : true  ,
          "qty" : 0   
        },
        {
          "img" : "../../assets/products/product-0.jpg",
          "title" : "Starter B",
          "course" : "In Starters",
          "ratting" : 4 ,
          "selected" : false   ,
          "qty" : 0   
        }
      ]
    },
    {
      "name" : "Desert",
      "open": false,
      "children" : [
        {
          "img" : "../../assets/products/product-0.jpg",
          "title" : "Desert A",
          "course" : "In Starters",
          "ratting" : 4 ,
          "selected" : false,
          "qty" : 0
        },
        {
          "img" : "../../assets/products/product-0.jpg",
          "title" : "Desert B",
          "course" : "In Starters",
          "ratting" : 4 ,
          "selected" : false   ,
          "qty" : 0   
        }
      ]
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public captureName(event: any) : void
  {
     console.log(`Captured name by event value: ${event}`);
  }

  toggleAccordion(i){    
    if(this.accordionList[i].open) this.accordionList[i].open = false ; else this.accordionList[i].open = true ;
  }

  addItem(i,k){
    this.accordionList[i].children[k].selected = true;
  }
  addItemQty(i,k){
    this.accordionList[i].children[k].qty++;
  }
  removeItemQty(i,k){
    if(this.accordionList[i].children[k].qty > 0){
      this.accordionList[i].children[k].qty--;
    }
   
  }
  continueToCart() {

    this.router.navigateByUrl('/tabs/cart');
  }

}
