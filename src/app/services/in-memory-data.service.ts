import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { mockHospitalStaff } from '../data/mock-hospital';  // Correct path to mock.hospital.ts

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return { hospitalStaff: mockHospitalStaff };  // Using the imported mock data
  }
}
