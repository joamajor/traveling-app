import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { UserCardComponent } from './user-card.component';

import { PipesModule } from '../../utils/pipes/pipes.module';

@NgModule({
    imports: [
      CommonModule,
      IonicModule,
      PipesModule
    ],
    declarations: [UserCardComponent],
    exports: [UserCardComponent]
  })
  export class UserCardComponentModule {}