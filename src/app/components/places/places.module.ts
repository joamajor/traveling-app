import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PlacesComponent } from './places.component';


@NgModule({
  declarations: [
    PlacesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PlacesComponent
  ]
})
export class PlacesModule { }
