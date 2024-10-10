import { Component, OnInit } from '@angular/core';
import { HospitalStaffService } from '../services/hospital-staff.service';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-hospital-list',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  hospitalStaff: any[] = []; // Ensure this is populated

  constructor(private hospitalStaffService: HospitalStaffService) {}

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

}
