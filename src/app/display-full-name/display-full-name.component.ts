import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-full-name',
  templateUrl: './display-full-name.component.html',
  styleUrls: ['./display-full-name.component.css']
})
export class DisplayFullNameComponent implements OnInit {
  @Input() firstName;
  @Input() lastName;

  constructor() { }

  ngOnInit() {
  }

}
