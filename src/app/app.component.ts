import { Component } from "@angular/core"; // No need for OnInit if you're not using it
import { RouterOutlet } from '@angular/router';
import {HospitalListComponent} from "./hospital-list/hospital-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HospitalListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hospital User Management';
}
