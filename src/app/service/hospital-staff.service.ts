import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import hospitalStaff from '../Data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class HospitalStaffService {

  constructor() { }

  getHospitalStaff(): Observable<any[]> {
    return of(hospitalStaff);
  }
}
