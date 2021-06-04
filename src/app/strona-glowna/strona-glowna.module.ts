import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StronaGlownaPageRoutingModule } from './strona-glowna-routing.module';

import { StronaGlownaPage } from './strona-glowna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StronaGlownaPageRoutingModule
  ],
  declarations: [StronaGlownaPage]
})
export class StronaGlownaPageModule {}
