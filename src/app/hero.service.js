import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
export var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(HEROES);
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    HeroService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    HeroService.ctorParameters = [];
    return HeroService;
}());
//# sourceMappingURL=hero.service.js.map