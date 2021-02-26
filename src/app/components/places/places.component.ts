import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
})
export class PlacesComponent implements OnInit {

  private autocompleteService: any;
  public places: any[] = [];

  constructor(
    private modalController: ModalController
  ) {

  }

  ngOnInit() {
    
    this.autocompleteService = new google.maps.places.AutocompleteService();
  }

  search(event: any) {
    const options = {
      input: event.srcElement.value
    };

    this.autocompleteService.getPlacePredictions(options, (predictions, status) => {
      if(status == google.maps.places.PlacesServiceStatus.OK && predictions) {
        this.places = [];

        predictions.forEach((prediction: any) => {
          this.places.push(prediction);
        });
      } else {
        this.places = [];
      }
    });
  }

  public selectPlace(place) {
    this.modalController.dismiss({
      place: place
    });
  }

  public closeModal() {
    console.log('close')
    this.modalController.dismiss();
  }
}
