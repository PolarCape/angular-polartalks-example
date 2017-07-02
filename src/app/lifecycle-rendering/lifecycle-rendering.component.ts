import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-rendering',
  templateUrl: './lifecycle-rendering.component.html',
  styleUrls: ['./lifecycle-rendering.component.css']
})
export class LifecycleRenderingComponent implements OnInit, AfterContentInit {

  constructor() {
    console.log('CONSTRUCTOR');
  }

  ngOnInit() {
    console.log('ON COMPONENT INITIALIZE');
  }

  ngAfterContentInit() {
    console.log('AFTER THE CONTENT IS INITIALIZED')
  }

}
