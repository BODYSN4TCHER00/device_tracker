import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private deviceFoundSource = new Subject<{lat: number, lng: number}>();

  deviceFound$ = this.deviceFoundSource.asObservable();

  constructor() { }

  findDevice(location: {lat: number, lng: number}) {
    this.deviceFoundSource.next(location);
  }
}