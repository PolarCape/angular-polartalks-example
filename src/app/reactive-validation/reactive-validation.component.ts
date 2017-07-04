import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.css'],
})
export class ReactiveValidationComponent implements OnInit {
  complexForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.complexForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required]],
      gender: 'Male'
    });
  }

  ngOnInit() {}

  submitForm(value: any): void {
    console.log('Reactive Form Data: ');
    console.log(value);
  }
}
