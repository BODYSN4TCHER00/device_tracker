import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DeviceListComponent, GoogleMapComponent, FontAwesomeModule],
  template: `
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-12 p-3 bg-primary text-white">
          <h1 class="mb-0 d-flex align-items-center">
            <fa-icon [icon]="faSatelliteDish" class="me-2"></fa-icon>
            Mobile Device Tracker
          </h1>
        </div>
        <div class="col-md-4 p-0 h-100 border-end">
          <app-device-list></app-device-list>
        </div>
        <div class="col-md-8 p-0 h-100">
          <app-google-map></app-google-map>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
    }
    .h-100 {
      height: 100%;
    }
  `]
})
export class AppComponent {
  title = 'device-tracker-app';
  faSatelliteDish = faSatelliteDish;
}