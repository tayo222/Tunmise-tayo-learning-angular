import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hospital-list-item',
  standalone: true,
  imports: [],
  templateUrl: './hospital-list-item.component.html',
  styleUrl: './hospital-list-item.component.css'
})
export class HospitalListItemComponent {
  @Input() staff: {
    id: number;
    firstName: string;
    lastName: string;
    department: string;
    role: string;
    isOnCall?: boolean;
  } | undefined;
}
