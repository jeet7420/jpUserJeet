import { NgModule ,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChefProfilePage } from './chef-profile.page';

import { IonicRatingModule } from "ionic-rating";


const routes: Routes = [
  {
    path: '',
    component: ChefProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChefProfilePage ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChefProfilePageModule {}
