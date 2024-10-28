import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMobileAlt, faTabletAlt, faBatteryFull, faBatteryThreeQuarters, faBatteryHalf, faBatteryQuarter, faClock, faMapMarkerAlt, faSearch, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface Device {
  id: number;
  name: string;
  type: string;
  lastSeen: string;
  batteryLevel: number;
  location: string;
}

@Component({
  selector: 'app-device-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div class="device-list p-3">
      <div class="mb-4">
        <div class="input-group">
          <span class="input-group-text bg-primary text-white">
            <fa-icon [icon]="faSearch"></fa-icon>
          </span>
          <input type="text" class="form-control" placeholder="Search devices...">
        </div>
      </div>
      <div class="device-cards">
        <div *ngFor="let device of devices" 
             class="device-card mb-3 rounded shadow-sm"
             [class.active]="selectedDevice === device"
             (click)="toggleDeviceSelection(device)">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">
              <fa-icon [icon]="device.type === 'Smartphone' ? faMobileAlt : faTabletAlt" class="me-2" [class.text-primary]="selectedDevice !== device" [class.text-white]="selectedDevice === device"></fa-icon>
              {{ device.name }}
            </h5>
            <fa-icon [icon]="selectedDevice === device ? faChevronUp : faChevronDown" [class.text-white]="selectedDevice === device"></fa-icon>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span [class.text-muted]="selectedDevice !== device" [class.text-white-50]="selectedDevice === device">
                {{ device.type }}
              </span>
              <span [ngClass]="getBatteryClass(device.batteryLevel)">
                <fa-icon [icon]="getBatteryIcon(device.batteryLevel)" class="me-1"></fa-icon>
                {{ device.batteryLevel }}%
              </span>
            </div>
            <div [class.d-none]="selectedDevice !== device">
              <div class="mb-2 text-info">
                <fa-icon [icon]="faClock" class="me-2"></fa-icon>
                Last seen: {{ device.lastSeen }}
              </div>
              <div class="mb-3 text-warning">
                <fa-icon [icon]="faMapMarkerAlt" class="me-2"></fa-icon>
                Location: {{ device.location }}
              </div>
              <button class="btn btn-primary btn-sm w-100" (click)="findDevice(device); $event.stopPropagation();">
                Locate Device
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .device-list {
      height: calc(100vh - 60px);
      overflow-y: auto;
    }
    .device-cards {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    .device-card {
      background-color: #f8f9fa;
      border: 1px solid #e9ecef;
      transition: all 0.3s ease;
    }
    .device-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 6px rgba(0,0,0,0.1) !important;
    }
    .device-card.active {
      background-color: #007bff;
      border-color: #007bff;
      color: white;
    }
    .card-header {
      background-color: rgba(0,0,0,0.03);
      border-bottom: 1px solid rgba(0,0,0,0.125);
      padding: 0.75rem 1rem;
    }
    .device-card.active .card-header {
      background-color: rgba(255,255,255,0.1);
      border-bottom-color: rgba(255,255,255,0.2);
    }
    .card-body {
      padding: 1rem;
    }
    .btn-primary {
      background-color: #0056b3;
      border-color: #0056b3;
    }
    .btn-primary:hover {
      background-color: #004085;
      border-color: #004085;
    }
  `]
})
export class DeviceListComponent implements OnInit {
  devices: Device[] = [
    { id: 2, name: 'Samsung Galaxy S21', type: 'Smartphone', lastSeen: '2023-10-22 14:45', batteryLevel: 60, location: 'Office' },
    { id: 3, name: 'iPad Pro', type: 'Tablet', lastSeen: '2023-10-22 12:00', batteryLevel: 90, location: 'School' },
    { id: 4, name: 'Google Pixel 5', type: 'Smartphone', lastSeen: '2023-10-22 16:15', batteryLevel: 45, location: 'Gym' },
  ];

  selectedDevice: Device | null = null;

  faMobileAlt = faMobileAlt;
  faTabletAlt = faTabletAlt;
  faBatteryFull = faBatteryFull;
  faBatteryThreeQuarters = faBatteryThreeQuarters;
  faBatteryHalf = faBatteryHalf;
  faBatteryQuarter = faBatteryQuarter;
  faClock = faClock;
  faMapMarkerAlt = faMapMarkerAlt;
  faSearch = faSearch;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  constructor() { }

  ngOnInit(): void { }

  toggleDeviceSelection(device: Device) {
    if (this.selectedDevice === device) {
      this.selectedDevice = null;
    } else {
      this.selectedDevice = device;
    }
  }

  findDevice(device: Device) {
    console.log(`Finding device: ${device.name}`);
    // Here you would implement the logic to locate the device on the map
  }

  getBatteryIcon(batteryLevel: number) {
    if (batteryLevel > 75) return this.faBatteryFull;
    if (batteryLevel > 50) return this.faBatteryThreeQuarters;
    if (batteryLevel > 25) return this.faBatteryHalf;
    return this.faBatteryQuarter;
  }

  getBatteryClass(batteryLevel: number) {
    if (batteryLevel > 75) return 'text-success';
    if (batteryLevel > 50) return 'text-info';
    if (batteryLevel > 25) return 'text-warning';
    return 'text-danger';
  }
}