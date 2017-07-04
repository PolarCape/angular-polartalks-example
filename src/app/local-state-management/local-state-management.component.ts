import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-state-management',
  templateUrl: './local-state-management.component.html',
  styleUrls: ['./local-state-management.component.css']
})
export class LocalStateManagementComponent implements OnInit {
  firstName: String = 'John';
  lastName: String = 'Doe';
  age: Number = 24;

  constructor() { }

  ngOnInit() {
  }

  changeFirstName() {
    this.firstName = 'Jane';
  }

}
