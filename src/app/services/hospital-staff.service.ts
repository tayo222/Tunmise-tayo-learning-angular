import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockHospitalStaff } from '../data/mock-hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalStaffService {

  constructor() { }

  // Retrieve all hospital staff
  getHospitalStaff(): Observable<any[]> {
    return of(mockHospitalStaff);
  }

  // Retrieve a staff member by ID
  getHospitalStaffById(id: number): Observable<any | undefined> {
    const staff = mockHospitalStaff.find(item => item.id === id);
    return of(staff);
  }

  // Create: Add a new staff member
  createHospitalStaff(newStaff: any): Observable<any[]> {
    mockHospitalStaff.push(newStaff); // Add the new staff member to the array
    return of(mockHospitalStaff); // Return the updated array wrapped in an Observable
  }

  // Update: Update an existing staff member
  updateHospitalStaff(updatedStaff: any): Observable<any[]> {
    const index = mockHospitalStaff.findIndex(item => item.id === updatedStaff.id);
    if (index !== -1) {
      mockHospitalStaff[index] = updatedStaff; // Update the staff member in the array
    }
    return of(mockHospitalStaff); // Return the updated array wrapped in an Observable
  }
  addHospitalStaff(newStaff: any): Observable<any[]> {
    // Generate a new ID for the new staff member
    const newId = mockHospitalStaff.length ? Math.max(...mockHospitalStaff.map(staff => staff.id)) + 1 : 1;

    // Assign the new ID to the new staff member
    const staffWithId = { ...newStaff, id: newId };

    // Add the new staff member to the mock data array
    mockHospitalStaff.push(staffWithId);

    // Return the updated array wrapped in an Observable
    return of(mockHospitalStaff);
  }

  // Delete: Remove a staff member by ID
  deleteHospitalStaff(id: number): Observable<any | undefined> {
    const index = mockHospitalStaff.findIndex(item => item.id === id);
    if (index !== -1) {
      const removedStaff = mockHospitalStaff.splice(index, 1)[0]; // Remove the staff member
      return of(removedStaff); // Return the removed staff member wrapped in an Observable
    }
    return of(undefined); // Return undefined wrapped in an Observable if not found
  }

  // You don't need this empty deleteStaff method. You can directly call deleteHospitalStaff.
}
