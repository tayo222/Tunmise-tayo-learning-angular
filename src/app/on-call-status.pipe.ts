import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'onCallStatus'
})
export class OnCallStatusPipe implements PipeTransform {

  constructor() {
    console.log("Custom Pipe Initialized - Version 2.0");
  }

  transform(isOnCall: boolean): string {
    return isOnCall ? 'Available for Duty' : 'Off Duty';
  }
}
