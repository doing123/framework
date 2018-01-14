import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-list',
  templateUrl: './more-list.component.html',
  styleUrls: ['./more-list.component.css']
})
export class MoreListComponent implements OnInit {

  items: object[] = [{
    name: '地址',
    type: 'text',
    value: '华强北'
  }, {
    name: '姓名',
    type: 'text',
    value: ''
  }, {
    name: '年龄',
    type: 'number',
    value: ''
  }, {
    name: '昵称',
    type: 'text',
    value: ''
  }];
  buttons: string[] = ['上一步'];

  constructor() { }

  ngOnInit() {
  }

}
