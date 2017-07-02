import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-with-param',
  templateUrl: './route-with-param.component.html',
  styleUrls: ['./route-with-param.component.css']
})
export class RouteWithParamComponent implements OnInit {

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {}

}
