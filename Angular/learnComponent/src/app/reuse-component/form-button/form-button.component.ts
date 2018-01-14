import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit {

  private _buttonText = '注册';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  @Input()
  set buttonText(buttonText: string) {
    if (buttonText !== '') {
      this._buttonText = buttonText;
    }
  }

  get buttonText() {
    return this._buttonText;
  }

  onClick() {
    let flag = '/next';
    if (this._buttonText === '上一步') {
      flag = '/';
    }
    this.router.navigate([flag]);
  }
}
