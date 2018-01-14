import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  max: number = 10;
  rate: number = 7;
  isReadonly: boolean = false;

  title: string = 'doing';

  // learn-chagne
  content: string = 'Hello'; // 前提：@Input/@viewChild,只有内存消耗改变时才会触发ngOnChanges
  user: { name: string } = {name: 'doing'};
}
