import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { HeroSearchService } from '../hero-search.service';
import { Hero }              from '../hero';
import { HeroService } from "../hero.service";

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css'],
    providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {

    categories: Set<String>;
    selectedCategory: string;
    genders: string[] = ["Male", "Female"];
    selectedGender: string;
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(private heroSearchService: HeroSearchService,
                private heroService: HeroService,
                private router: Router) {}

    // Push a search term into the observable stream.
    search(term: string, category: string, gender: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.categories = this.heroService.getCategories();

        this.heroes = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.heroSearchService.search(term, this.selectedCategory, this.selectedGender)
                // or the observable of empty heroes if no search term
                : Observable.of<Hero[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
