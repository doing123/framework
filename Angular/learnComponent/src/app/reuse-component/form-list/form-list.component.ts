import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  _items: object[] = [{
    name: '账号',
    type: 'text',
    value: 'doing'
  }, {
    name: '账号11',
    type: 'text',
    value: 'doing11'
  }, {
    name: '账号22',
    type: 'text',
    value: 'doing11'
  }];

  _buttons: string[] = ['下一步'];

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  set items(items: object[]) {
    if (typeof(items) !== 'undefined') {
      this._items = items;
    }
  }

  get items(): object[] {
    return this._items;
  }

  @Input()
  set buttons(button: string[]) {
    if (typeof(button) !== 'undefined') {
      this._buttons = button;
    }
  }

  get buttons(): string[] {
    return this._buttons;
  }

}
