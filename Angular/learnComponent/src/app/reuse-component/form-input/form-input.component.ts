import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  private _item: object = {
    name: '标签',
    type: 'text',
    value: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

  getDefaultValue(key: string, value: string): string {
    if (value === '') {
      const map: object = {
        name: '标签',
        type: 'text',
        value: ''
      };
      return map[key];
    } else {
      return value;
    }
  }

  @Input()
  set item(item: object) {
    Object.keys(item).map(i => {
      item[i] = this.getDefaultValue(i, item[i]);
    });
    this._item = item;
  }

  get item(): object {
    return this._item;
  }
}
