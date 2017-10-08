import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id:</label>{{hero.id}}</div>
      <div>
        <label>name:</label>
        <input [(ngModel)]="hero.name" placeholder="please input a name!">
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  //通过在hero属性前加上@Input装饰器，表明它是一个输入属性
  //它所做的一切就是通过它的输入属性hero接收一个英雄对象，然后把这个属性绑定到自己的模板中
  @Input() hero: Hero;
}
