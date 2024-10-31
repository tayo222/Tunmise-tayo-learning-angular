import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html', // Ensure this path is correct
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  // This indicates it's a standalone component
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  modifyForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.modifyForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      department: ['', Validators.required],
      role: ['', Validators.required],
      isOnCall: [false],
      imageUrl: ['', Validators.required]
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.modifyForm.valid) {
      console.log("Form Data:", this.modifyForm.value);
      // Add your logic to update data here
    } else {
      console.log("Form is invalid.");
    }
  }
}
