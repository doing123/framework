import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//如果忘了写圆括号，会导致一个很难诊断的错误
@Injectable()

//HeroService可以从任何地方获取Hero数据--Web服务、本地存储或模拟数据源
export class HeroService {
  //获取英雄数据，添加一个getHeroes的桩数据
  //getHeroes(): void {}
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    })
  }
}
