"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var HeroesComponent = /** @class */ (function () {
    //注入HeroService
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        //this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    //添加onSelect方法，用于将用户点选的英雄赋值给selectedHero属性
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    HeroesComponent.prototype["delete"] = function (hero) {
        var _this = this;
        this.heroService["delete"](hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            //反引号包裹的组件模板可以把<h1>、<h2>和<div>元素各放在一行上，模板字面量
            templateUrl: './heroes.component.html',
            styleUrls: ['./heroes.component.css']
            //styles: [],
        })
        //生命周期钩子
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
