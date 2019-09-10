import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopupIngredientsPage } from './popup-ingredients.page';

const routes: Routes = [
  {
    path: '',
    component: PopupIngredientsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PopupIngredientsPage]
})
export class PopupIngredientsPageModule {}
