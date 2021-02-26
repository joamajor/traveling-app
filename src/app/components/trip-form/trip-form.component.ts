import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Trip } from '../../models/trip';
import { User } from '../../models/user';
import { TripService } from '../../services/trip.service';
import { AuthService } from '../../services/auth.service';

import { PlacesComponent } from '../places/places.component';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.scss'],
})
export class TripFormComponent implements OnInit {

  @Input() public trip: Trip;
  public user: User;

  private _modal: any;
  public submitted: boolean = false;
  public form: FormGroup;

  constructor(
    private modalController: ModalController,
    private router: Router,
    private tripService: TripService,
    private authService: AuthService
  ) {
    this.form = new FormGroup({
      destination: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.maxLength(200)),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    
  }

  async handleDestination() {
    if(!this._modal) {
      const placesModal = await this.modalController.create({
        component: PlacesComponent
      });
  
      placesModal.onDidDismiss().then((res: any) => {
        if(res.data) {
          this.f.destination.setValue(res.data.place.description);
        }
      });
  
      this._modal = placesModal;
  
      await placesModal.present();
    }
  }

  get f() { return this.form.controls; }

  async submit() {
    this.submitted = true;

    if(!this.form.valid) {
      return;
    }

    console.log(this.form.value);
  }
}
