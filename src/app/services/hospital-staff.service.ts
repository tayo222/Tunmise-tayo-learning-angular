import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mockHospitalStaff } from '../data/mock-hospital';  // Import mock data

@Injectable({
  providedIn: 'root'
})
export class HospitalStaffService {

  // Directly specify the API URL (replace with your actual URL)
  private apiUrl = 'http://localhost:3000/hospitalStaff';  // Example API URL

  constructor(private http: HttpClient) { }

  // Retrieve all hospital staff (using mock data instead of API)
  getHospitalStaff(): Observable<any[]> {
    return of(mockHospitalStaff);  // Return the mock data as an Observable
  }

  // Retrieve a staff member by ID (using mock data instead of API)
  getHospitalStaffById(id: number): Observable<any | undefined> {
    const staff = mockHospitalStaff.find(item => item.id === id);
    return of(staff);  // Return the found staff member as an Observable
  }

  // Create: Add a new staff member (using mock data instead of API)
  createHospitalStaff(newStaff: any): Observable<any[]> {
    mockHospitalStaff.push(newStaff);  // Add the new staff member to the mock data array
    return of(mockHospitalStaff);  // Return the updated array as an Observable
  }

  // Update: Update an existing staff member (using mock data instead of API)
  updateHospitalStaff(updatedStaff: any): Observable<any[]> {
    const index = mockHospitalStaff.findIndex(item => item.id === updatedStaff.id);
    if (index !== -1) {
      mockHospitalStaff[index] = updatedStaff;  // Update the staff member in the mock data
    }
    return of(mockHospitalStaff);  // Return the updated array as an Observable
  }

  // Delete: Remove a staff member by ID (using mock data instead of API)
  deleteHospitalStaff(id: number): Observable<any | undefined> {
    const index = mockHospitalStaff.findIndex(item => item.id === id);
    if (index !== -1) {
      const removedStaff = mockHospitalStaff.splice(index, 1)[0];  // Remove the staff member
      return of(removedStaff);  // Return the removed staff member as an Observable
    }
    return of(undefined);  // Return undefined if staff member not found
  }
}
