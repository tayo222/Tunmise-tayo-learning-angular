import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { HospitalStaffService } from '../services/hospital-staff.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hospital-list',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  hospitalStaff: any[] = []; // Ensure this is populated

  constructor(
    private hospitalStaffService: HospitalStaffService,
    private router: Router // Inject Router for navigation
  ) {}

  ngOnInit(): void {
    this.fetchAllStaff();
  }

  fetchAllStaff(): void {
    this.hospitalStaffService.getHospitalStaff().subscribe(
      staff => {
        this.hospitalStaff = staff;
      },
      error => {
        console.error('Error fetching staff:', error);
      }
    );
  }

  editStaff(id: number): void {
    // Navigate to the ModifyComponent for editing the selected staff member
    this.router.navigate(['/form', { id }]); // Ensure this matches your routing setup
  }

  deleteStaff(id: number): void {
    if (confirm('Are you sure you want to delete this staff member?')) {
      this.hospitalStaffService.deleteHospitalStaff(id).subscribe({
        next: () => {
          console.log('Staff member deleted successfully');
          this.fetchAllStaff(); // Refresh the list after deletion
        },
        error: (error) => {
          console.error('Error deleting staff member:', error);
        }
      });
    }
  }

}
