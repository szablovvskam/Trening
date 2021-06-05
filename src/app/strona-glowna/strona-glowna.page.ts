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

  constructor(private modalController:ModalController) { }

  ngOnInit() {
    fetch('./assets/excercises/excercises.json').then(res => res.json()).then(json => {
      console.log('results::',json);
      this.results = json.excercises;
    });
  }

  OpenModal()
  {
    this.modalController.create({component:SettingsPage}).then((modalElement)=>{
      modalElement.present();
    })
  }

  // async presentModal() {
  //   const enterAnimation = (baseEl: any) => {
  //     const backdropAnimation = this.animationCtrl.create()
  //       .addElement(baseEl.querySelector('ion-backdrop')!)
  //       .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

  //     const wrapperAnimation = this.animationCtrl.create()
  //       .addElement(baseEl.querySelector('.modal-wrapper')!)
  //       .keyframes([
  //         { offset: 0, opacity: '4', transform: 'scale(2)' },
  //         { offset: 1, opacity: '4', transform: 'scale(3)' }
  //       ]);

  //     return this.animationCtrl.create()
  //       .addElement(baseEl)
  //       .easing('ease-in-out')
  //       .duration(500)
  //       .addAnimation([backdropAnimation, wrapperAnimation]);
  //   }

  //   const leaveAnimation = (baseEl: any) => {
  //     return enterAnimation(baseEl).direction('reverse');
  //   }

  //   const modal = await this.modalController.create({
  //     component: SettingsPage,
  //     enterAnimation,
  //     leaveAnimation
  //   });

  // }
}
