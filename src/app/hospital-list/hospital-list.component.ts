
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
  hospitalStaff = []; // Initialize the array to hold hospital staff data

  constructor(private hospitalStaffService: HospitalStaffService) {}

  ngOnInit(): void {
    // Fetch hospital staff data using the service, subscribing to the observable
    this.hospitalStaffService.getHospitalStaff().subscribe(
      staff => {
        // @ts-ignore
        this.hospitalStaff = staff; // Assign fetched staff to the component property
      },
      error => {
        console.error('Error fetching hospital staff:', error); // Handle errors here
      }
    );
  }
}
