import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Import Observable and of
import { mockHospitalStaff } from '../data/mock-hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalStaffService {

  constructor() { }

  // Method to return an Observable of the hospital staff array
  getHospitalStaff(): Observable<any[]> {
    return of(mockHospitalStaff); // Wrap the mock data in an Observable
  }
}
