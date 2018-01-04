import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-litter-star',
  templateUrl: './litter-star.component.html',
  styleUrls: ['./litter-star.component.css']
})
export class LitterStarComponent implements OnInit {
  max: number = 10;
  rate: number = 7;
  isReadonly: boolean = true;

  constructor() { }

  ngOnInit() {
  }
}
