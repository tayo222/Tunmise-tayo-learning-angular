import { Component } from '@angular/core';
import {HospitalListItemComponent} from "../hospital-list-item/hospital-list-item.component";

@Component({
  selector: 'app-hospital-list',
  standalone: true,
  imports: [
    HospitalListItemComponent
  ],
  templateUrl: './hospital-list.component.html',
  styleUrl: './hospital-list.component.css'
})
export class HospitalListComponent {
  hospitalStaff = [
    { id: 1, firstName: 'Dr. Alice', lastName: 'Smith', department: 'Cardiology', role: 'Doctor', isOnCall: true },
    { id: 2, firstName: 'Nurse John', lastName: 'Doe', department: 'Pediatrics', role: 'Nurse', isOnCall: false },
    { id: 3, firstName: 'Dr. Sarah', lastName: 'Lee', department: 'Neurology', role: 'Doctor', isOnCall: true },
    { id: 4, firstName: 'Technician Bob', lastName: 'Brown', department: 'Radiology', role: 'Technician', isOnCall: false },
    { id: 5, firstName: 'Dr. Emily', lastName: 'Johnson', department: 'Surgery', role: 'Surgeon', isOnCall: true }
  ];


}
