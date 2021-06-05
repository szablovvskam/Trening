import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  // results: any;

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  //   fetch('./assets/excercises/excercises.json').then(res => res.json()).then(json => {
  //     console.log('results::',json);
  //     this.results = json.excercises;
  //   });
   }

  CloseModal()
  {
    this.modalController.dismiss();
  }

}
