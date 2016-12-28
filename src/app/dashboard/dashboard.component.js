import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
export var DashboardComponent = (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashboardComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'my-dashboard',
                    templateUrl: './dashboard.component.html',
                    styleUrls: ['./dashboard.component.css']
                },] },
    ];
    /** @nocollapse */
    DashboardComponent.ctorParameters = [
        { type: HeroService, },
    ];
    return DashboardComponent;
}());
//# sourceMappingURL=dashboard.component.js.map