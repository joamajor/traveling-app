import { Component, Input, OnInit } from '@angular/core';

import { Trip } from '../../models/trip';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss'],
})
export class TripCardComponent implements OnInit {

  @Input() public trip: Trip;
  public duration: number;

  constructor() {
  }

  ngOnInit() {
    this.duration = Math.round((this.trip.startDate.getMilliseconds() - this.trip.endDate.getMilliseconds())/86400000)
    ;
  }

}
