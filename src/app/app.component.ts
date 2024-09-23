import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { HospitalUser } from "./Shared/HospitalUser";
import { JsonPipe, NgForOf } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Hospital User Management';


  userList: HospitalUser[] = [
    {
      id: 1,
      firstName: "Dr. Alice",
      lastName: "Smith",
      department: "Cardiology",
      role: "Doctor",
      isOnCall: true
    },
    {
      id: 2,
      firstName: "Nurse John",
      lastName: "Doe",
      department: "Pediatrics",
      role: "Nurse",
      isOnCall: false
    },
    {
      id: 3,
      firstName: "Dr. Sarah",
      lastName: "Lee",
      department: "Neurology",
      role: "Doctor",
      isOnCall: true
    },
    {
      id: 4,
      firstName: "Technician Bob",
      lastName: "Brown",
      department: "Radiology",
      role: "Technician",
      isOnCall: false
    },
    {
      id: 5,
      firstName: "Admin Mary",
      lastName: "Johnson",
      department: "Administration",
      role: "Admin",
      isOnCall: false
    },
    {
      id: 6,
      firstName: "Dr. James",
      lastName: "Wilson",
      department: "Surgery",
      role: "Surgeon",
      isOnCall: true
    }
  ];


  toggleOnCallStatus(user: HospitalUser): void {
    user.isOnCall = !user.isOnCall;
  }
}
