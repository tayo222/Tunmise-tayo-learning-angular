import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HighlightOnFocusDirective} from "../highlight-on-focus.directive";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HighlightOnFocusDirective
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
