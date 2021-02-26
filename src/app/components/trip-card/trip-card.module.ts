import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TripCardComponent } from './trip-card.component';
import { PipesModule } from '../../utils/pipes/pipes.module';

@NgModule({
  declarations: [
    TripCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    TripCardComponent
  ]
})
export class TripCardModule { }
