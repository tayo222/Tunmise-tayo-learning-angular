import { Component } from '@angular/core';
import { HospitalListItemComponent } from '../hospital-list-item/hospital-list-item.component';
import hospitalStaff from '../Data/mock-content'; // Adjust the path if necessary

@Component({
  selector: 'app-hospital-list',
  standalone: true,
  imports: [
    HospitalListItemComponent
  ],
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent {
  hospitalStaff = hospitalStaff; // Assign the imported array to the component property
}
