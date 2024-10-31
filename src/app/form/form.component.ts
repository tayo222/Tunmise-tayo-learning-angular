import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  staff = {
    id: null,
    firstName: '',
    lastName: '',
    department: '',
    role: '',
    isOnCall: false,
    imageUrl: ''
  };
  modifyForm: any;

  onSubmit() {
    console.log("Submitted Staff Data:", this.staff);
  }
}
