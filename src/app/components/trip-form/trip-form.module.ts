import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TripFormComponent } from './trip-form.component';

import { PlacesModule } from '../places/places.module';

@NgModule({
    imports: [
      CommonModule,
      IonicModule,
      FormsModule,
      ReactiveFormsModule,
      PlacesModule
    ],
    declarations: [TripFormComponent],
    exports: [TripFormComponent]
  })
  export class TripFormComponentModule {}