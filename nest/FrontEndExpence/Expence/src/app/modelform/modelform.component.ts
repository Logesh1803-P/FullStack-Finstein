import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.scss']
})
export class ModelformComponent implements OnInit {
 
  personalDetailsForm!: FormGroup;
  value:any;

  cityOptions = [
    { label: 'New York', value: 'New York' },
    { label: 'Los Angeles', value: 'Los Angeles' },
    // Add more city options as needed
  ];

  stateOptions = [
    { label: 'California', value: 'California' },
    { label: 'Texas', value: 'Texas' },
    // Add more state options as needed
  ];

  countryOptions = [
    { label: 'United States', value: 'United States' },
    { label: 'Canada', value: 'Canada' },
    // Add more country options as needed
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.personalDetailsForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  get form(){
    return this.personalDetailsForm.controls;
  }

  saveForm(): void {
    if (this.personalDetailsForm.valid) {
      console.log('Form submitted:', this.personalDetailsForm.value);
      // Add logic for saving the form data
    }
  }
}
