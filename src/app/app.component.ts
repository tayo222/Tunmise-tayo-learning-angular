import { Component } from "@angular/core"; // No need for OnInit if you're not using it
import { RouterOutlet } from '@angular/router';
import {HospitalListComponent} from "./hospital-list/hospital-list.component";
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HospitalListComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hospital User Management';
}
