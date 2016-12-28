import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from "@angular/router";
export var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'my-heroes',
                    templateUrl: './heroes.component.html',
                    styleUrls: ['./heroes.component.css']
                },] },
    ];
    /** @nocollapse */
    HeroesComponent.ctorParameters = [
        { type: Router, },
        { type: HeroService, },
    ];
    return HeroesComponent;
}());
//# sourceMappingURL=heroes.component.js.map