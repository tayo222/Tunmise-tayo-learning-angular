import { Component, OnInit } from '@angular/core';
import { HospitalListItemComponent } from '../hospital-list-item/hospital-list-item.component';
import { HospitalStaffService } from '../service/hospital-staff.service';

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
    this.hospitalStaffService.getHospitalStaff().subscribe(staff => {
      this.hospitalStaff = staff;
    });
  }
}
