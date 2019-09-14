import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {google} from 'google-maps';

import { GetLocationPopUpPage } from './get-location-pop-up.page';
import { SavedAddressComponent } from '../components/saved-address/saved-address.component';

const routes: Routes = [
  {
    path: '',
    component: GetLocationPopUpPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //IonicPageModule.forChild(GetLocationPopUpPage),
    RouterModule.forChild(routes)
  ],
  declarations: [GetLocationPopUpPage, SavedAddressComponent]
})
export class GetLocationPopUpPageModule {}
