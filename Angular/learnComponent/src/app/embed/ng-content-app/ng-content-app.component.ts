import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-app',
  templateUrl: './ng-content-app.component.html',
  styleUrls: ['./ng-content-app.component.css']
})
export class NgContentAppComponent implements OnInit {

  title: string = 'doing123';

  constructor() { }

  ngOnInit() {
  }

}
