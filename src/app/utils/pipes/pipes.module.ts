import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripImagePipe } from './trip-image.pipe';
import { UserImagePipe } from './user-image.pipe';


@NgModule({
  declarations: [
    TripImagePipe,
    UserImagePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TripImagePipe,
    UserImagePipe
  ]
})
export class PipesModule { }
