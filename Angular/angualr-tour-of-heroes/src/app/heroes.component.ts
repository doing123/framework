import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-heroes',
  // 反引号包裹的组件模板可以把<h1>、<h2>和<div>元素各放在一行上，模板字面量
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  // styles: [],
})

// 生命周期钩子
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  // 注入HeroService
  constructor(private heroService: HeroService,
              private router: Router) {
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  // 添加onSelect方法，用于将用户点选的英雄赋值给selectedHero属性
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }

}


