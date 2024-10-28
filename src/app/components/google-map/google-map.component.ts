import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMapsModule],
  template: `
    <google-map height="100%"
                width="100%"
                [center]="center"
                [zoom]="zoom">
    </google-map>
  `,
  styles: [`
    :host {
      display: block;
      height: calc(100vh - 60px);
    }
  `]
})
export class GoogleMapComponent implements OnInit {
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;

  constructor() { }

  ngOnInit(): void { }
}