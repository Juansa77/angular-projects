import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../interfaces/country';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {


  constructor(private http: HttpClient) {
   this.loadFromLocalStorage();
  }


  private apiUrl: string = 'https://restcountries.com/v3.1';


  //* Para persistencia local
  public cacheStore:CacheStore={
    byCapital:{term:"", countries:[]},
    byCountries:{term:"", countries:[]},
    byRegion:{region:"", countries:[]}
  }
//* Métodos para salvar y cargar datos

  private saveToLocalStorage (){
localStorage.setItem("cacheStore", JSON.stringify(this.cacheStore))
  }

  private loadFromLocalStorage (){
    if(!localStorage.getItem("cacheStore"))return;
    this.cacheStore= JSON.parse(localStorage.getItem("cacheStore")!)
  }



  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([])),
     // delay(2000)
      );
  }

  //*Buscar country por alpha code

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    //* En el return del get indicamos que va a recibir un array de interfaz country
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      //*Of contruye un observable del error y genera el error con la condición que digamos
      //*En este caso, le decimos que si regresa un array vacio es un error
      catchError((error) => of(null))
    );
  }

  //* Primero tipamos que va a recibir un observable con arreglo de la interfaz Country
  searchCapital(term: string): Observable<Country[]> {
    const url =`${this.apiUrl}/capital/${term}`
   return this.getCountriesRequest(url).pipe(
    tap(countries => this.cacheStore.byCapital = {term, countries}),
    tap(()=>this.saveToLocalStorage())
   );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url =`${this.apiUrl}/name/${term}`
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStore.byCountries = {term, countries}),
      tap(()=>this.saveToLocalStorage())
     );
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url =`${this.apiUrl}/region/${region}`
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStore.byRegion = {region, countries}),
      tap(()=>this.saveToLocalStorage())
     );
  }
}
