import { Component } from '@angular/core';

/**
 * Hero class
 */
export class Hero {
  id:number;
  name:string;
}

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //反引号包裹的组件模板可以把<h1>、<h2>和<div>元素各放在一行上，模板字面量
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
          (click)="onSelect(hero)"
          [class.selected]="hero===selectedHero">
        <span class="badge">{{hero.id}}</span>{{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id:</label>{{selectedHero.id}}</div>
      <div>
        <label>name:</label>
        <input [(ngModel)]="selectedHero.name" placeholder="please input a name!">
      </div>
    </div>
    `,
  //styleUrls: ['./app.component.css']
  //任意浏览器的默认字体高度16px（16像素）。所有未经调整的浏览器都符合: 1em=16px。
  styles: [`
    .selected {
      background-color: #cfd8dc !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #eee;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #bbd8dc !important;
      color: white;
    }
    .heroes li:hover {
      color: #607d8b;
      background-color: #ddd;
      left: .2em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607d8b;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: 0.8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Tour of Heroes';
  //现在有了一Hero类，把组件hero属性的类型换成Hero。以1为id、以‘Windstorm’为名字初始化
  //hero property
  /*hero:Hero = {
   id: 1,
   name: 'Windstorm'
   };*/
  selectedHero:Hero;
  //hero array property
  heroes = HEROES;
  //添加onSelect方法，用于将用户点选的英雄赋值给selectedHero属性
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}

//创建一个由十位英雄组成的数组 hero array
const HEROES:Hero[] = [
  {id: 1, name: 'Mr doing001'},
  {id: 2, name: 'Mr doing002'},
  {id: 3, name: 'Mr doing003'},
  {id: 4, name: 'Mr doing004'},
  {id: 5, name: 'Mr doing005'},
  {id: 6, name: 'Mr doing006'},
  {id: 7, name: 'Mr doing007'},
  {id: 8, name: 'Mr doing008'},
  {id: 9, name: 'Mr doing009'},
  {id: 10, name: 'Mr doing0010'}
];


