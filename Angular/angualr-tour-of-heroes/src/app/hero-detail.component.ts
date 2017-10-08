import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';


import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  //通过在hero属性前加上@Input装饰器，表明它是一个输入属性
  //它所做的一切就是通过它的输入属性hero接收一个英雄对象，然后把这个属性绑定到自己的模板中
  //@Input() hero:Hero;
  hero:Hero;

  //注入HeroService和ActivatedRouter服务到构造函数，将它们的值保存到私有变量中
  constructor(private heroService:HeroService,
              private route:ActivatedRoute,
              private location:Location) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params:ParamMap) => this.heroService.getHero(+params.get('id')))//+为了转成数字
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
