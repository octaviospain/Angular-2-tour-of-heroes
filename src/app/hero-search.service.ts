import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs';
import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {

    private heroesUrl = 'api/heroes';  // URL to web api

    constructor(private http: Http) {}

    search(term: string, category: string, gender: string): Observable<Hero[]> {
        return this.http
            .get(`${this.heroesUrl}/?name=${term}`)     // use here an api call that filters the query
            .map((r: Response) => r.json().data as Hero[]);
    }
}
