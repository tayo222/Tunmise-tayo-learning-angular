import { Component, OnInit } from '@angular/core';
import { HospitalListItemComponent } from '../hospital-list-item/hospital-list-item.component';
import { HospitalStaffService } from '../services/hospital-staff.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hospital-list',
  standalone: true,
  imports: [
    HospitalListItemComponent,
    CommonModule
  ],
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  hospitalStaff: any[] = [];

  constructor(private hospitalStaffService: HospitalStaffService) {}

  ngOnInit(): void {

    this.fetchStaffById(1);
  }


  fetchStaffById(id: number): void {
    this.hospitalStaffService.getHospitalStaffById(id).subscribe(
      staff => {
        this.hospitalStaff = staff;
      },
      error => {
        console.error('Error fetching staff by ID:', error);
      }
    );
  }
}
