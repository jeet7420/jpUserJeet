import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerfificationPhonePage } from './verfification-phone.page';

const routes: Routes = [
  {
    path: '',
    component: VerfificationPhonePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerfificationPhonePage]
})
export class VerfificationPhonePageModule {}
