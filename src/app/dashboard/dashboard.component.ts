import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];
    private heroesToShow = 4;

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => {
                if (heroes.length < this.heroesToShow)
                    this.heroesToShow = heroes.length;

                this.selectRandomHeroes(this.heroesToShow, heroes);
            });
    }

    selectRandomHeroes(numHeroes: number, allHeroes: Hero[]) {
        for (var n = 0; n < numHeroes; n++) {
            let random = Math.floor(Math.random() * allHeroes.length);
            this.heroes[n] = allHeroes[random];
        }
    }
}