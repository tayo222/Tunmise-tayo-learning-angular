import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalStaffService } from '../services/hospital-staff.service';
import { HospitalUser } from '../Shared/HospitalUser';
import {HighlightOnFocusDirective} from "../highlight-on-focus.directive";
import {MatFormField} from "@angular/material/form-field";
import {MatCheckbox} from "@angular/material/checkbox"; // Import your interface here

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, HighlightOnFocusDirective, MatFormField, MatCheckbox],
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  modifyForm!: FormGroup;
  staffId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private hospitalStaffService: HospitalStaffService
  ) {}

  ngOnInit(): void {
    this.modifyForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      department: ['', Validators.required],
      role: ['', Validators.required],
      isOnCall: [false],
      imageUrl: ['', Validators.required]
    });

    this.route.paramMap.subscribe(params => {
      this.staffId = +params.get('id')!;
      this.loadStaffData(this.staffId);
    });
  }

  loadStaffData(id: number): void {
    this.hospitalStaffService.getHospitalStaffById(id).subscribe(staff => {
      if (staff) {
        this.modifyForm.patchValue({
          firstName: staff.firstName,
          lastName: staff.lastName,
          department: staff.department,
          role: staff.role,
          isOnCall: staff.isOnCall,
          imageUrl: staff.imageUrl
        });
      }
    });
  }

  onSubmit(): void {
    if (this.modifyForm.valid) {
      const updatedStaff: HospitalUser = { // Use the interface here
        id: this.staffId || undefined, // Use undefined for new staff
        ...this.modifyForm.value
      };

      if (this.staffId) {
        // Update existing staff
        this.hospitalStaffService.updateHospitalStaff(updatedStaff).subscribe({
          next: () => {
            console.log('Staff member updated successfully');
            this.router.navigate(['/hospital-list']);
          },
          error: (error) => {
            console.error('Error updating staff member:', error);
          }
        });
      } else {
        // Add new staff member
        this.hospitalStaffService.addHospitalStaff(updatedStaff).subscribe({
          next: () => {
            console.log('New staff member added successfully');
            this.router.navigate(['/hospital-list']);
          },
          error: (error) => {
            console.error('Error adding new staff member:', error);
          }
        });
      }
    } else {
      console.log("Form is invalid.");
    }
  }
}
