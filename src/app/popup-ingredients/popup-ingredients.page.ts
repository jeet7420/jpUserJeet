import { Component, OnInit } from '@angular/core';
import { AlertController , ModalController} from '@ionic/angular';

@Component({
  selector: 'app-popup-ingredients',
  templateUrl: './popup-ingredients.page.html',
  styleUrls: ['./popup-ingredients.page.scss'],
})
export class PopupIngredientsPage implements OnInit {

  constructor(
    private modalController : ModalController
  ) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
