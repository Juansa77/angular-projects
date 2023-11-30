import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environments';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private baseUrl: string = environments.baseUrl;
  constructor(private httpClient: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`).pipe(
      //*of es un método de rxjs, define un observable que va a devolver, en este caso, undefined
      catchError((error) => of(undefined))
    );
  }

  getSuggestions(query: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(
      `${this.baseUrl}/heroes?q=${query}&_limit=6`
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw Error('Hero id is required');
    return this.httpClient.patch<Hero>(
      `${this.baseUrl}/heroes/${hero.id}`,
      hero
    );
  }

  //*Función que utiliza el observable para devolver un booleano de confirmación
  deleteHeroById(id: string): Observable<boolean> {
    if (!id) throw Error('Hero id is required');
    return this.httpClient.delete(`${this.baseUrl}/heroes/${id}`).pipe(
      catchError((error) => of(false)),
      map((resp) => true)
    );
  }
}
