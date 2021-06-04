import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StronaGlownaPage } from './strona-glowna.page';

const routes: Routes = [
  {
    path: '',
    component: StronaGlownaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StronaGlownaPageRoutingModule {}
