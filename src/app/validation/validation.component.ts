import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
})
export class ValidationComponent implements OnInit {
  name: string;
  surname: string;
  gender: string;

  constructor() {
    this.name = '';
    this.surname = '';
    this.gender = '';
  }

  ngOnInit() {}

  submitForm(formValue) {
    console.log(formValue);
  }
}
