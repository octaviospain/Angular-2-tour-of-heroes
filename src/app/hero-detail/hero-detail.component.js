import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import 'rxjs/add/operator/switchMap';
export var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'my-hero-detail',
                    templateUrl: './hero-detail.component.html',
                    styleUrls: ['./hero-detail.component.css']
                },] },
    ];
    /** @nocollapse */
    HeroDetailComponent.ctorParameters = [
        { type: HeroService, },
        { type: ActivatedRoute, },
        { type: Location, },
    ];
    HeroDetailComponent.propDecorators = {
        'hero': [{ type: Input },],
    };
    return HeroDetailComponent;
}());
//# sourceMappingURL=hero-detail.component.js.map