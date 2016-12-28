import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    }
];
export var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forRoot(routes)],
                    exports: [RouterModule]
                },] },
    ];
    /** @nocollapse */
    AppRoutingModule.ctorParameters = [];
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map