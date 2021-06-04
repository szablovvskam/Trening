import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SettingsPage} from '../settings/settings.page';

@Component({
  selector: 'app-strona-glowna',
  templateUrl: './strona-glowna.page.html',
  styleUrls: ['./strona-glowna.page.scss'],
})
export class StronaGlownaPage implements OnInit {
  results: any;

  // constructor(private modalController:ModalController) { }
  constructor() {}

  ngOnInit() {
    fetch('./assets/excercises/excercises.json').then(res => res.json()).then(json => {
      console.log('results::',json);
      this.results = json.excercises;
    });
  }

  // OpenModal()
  // {
  //   this.modalController.create({component:SettingsPage}).then((modalElement)=>{
  //     modalElement.present();
  //   })
  // }

}
