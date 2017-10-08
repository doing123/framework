import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

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
    <hero-detail [hero]="selectedHero"></hero-detail>
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
  `],
  providers: [HeroService]
})

//生命周期钩子
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  //注入HeroService
  constructor(private heroService:HeroService){ }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void{
    this.getHeroes();
  }

  //添加onSelect方法，用于将用户点选的英雄赋值给selectedHero属性
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }


}


