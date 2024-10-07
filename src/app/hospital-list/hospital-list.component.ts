import { Component, OnInit } from '@angular/core';
import { HospitalListItemComponent } from '../hospital-list-item/hospital-list-item.component';
import { HospitalStaffService } from '../services/hospital-staff.service';

@Component({
  selector: 'app-hospital-list',
  standalone: true,
  imports: [
    HospitalListItemComponent
  ],
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  hospitalStaff: any[] = [];

  constructor(private hospitalStaffService: HospitalStaffService) {}

  ngOnInit(): void {
    // Fetch hospital staff data using the service
    this.hospitalStaffService.getHospitalStaff().subscribe(
      staff => {
        this.hospitalStaff = staff; // Assign fetched staff to the component property
      },
      error => {
        console.error('Error fetching hospital staff:', error); // Handle errors here
      }
    );
  }

  // Read: Get a staff member by ID
  readStaffById(id: number): void {
    this.hospitalStaffService.getHospitalStaffById(id).subscribe(
      staff => {
        console.log('Fetched Staff:', staff); // Log the fetched staff member
      },
      error => {
        console.error('Error fetching staff by ID:', error);
      }
    );
  }

  // Create: Add a new staff member
  addStaff(newStaff: any): void {
    this.hospitalStaffService.createHospitalStaff(newStaff).subscribe(
      updatedList => {
        this.hospitalStaff = updatedList; // Update the displayed staff list
      },
      error => {
        console.error('Error adding new staff:', error);
      }
    );
  }

  // Update: Update an existing staff member
  updateStaff(updatedStaff: any): void {
    this.hospitalStaffService.updateHospitalStaff(updatedStaff).subscribe(
      updatedList => {
        this.hospitalStaff = updatedList; // Update the displayed staff list
      },
      error => {
        console.error('Error updating staff:', error);
      }
    );
  }

  // Delete: Remove a staff member by ID
  deleteStaff(id: number): void {
    this.hospitalStaffService.deleteHospitalStaff(id).subscribe(
      removedStaff => {
        console.log('Removed Staff:', removedStaff); // Log the removed staff
        this.hospitalStaff = this.hospitalStaff.filter(staff => staff.id !== id); // Update the displayed staff list
      },
      error => {
        console.error('Error deleting staff:', error);
      }
    );
  }
}
