import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../interfaces/country';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private http: HttpClient) {}

  private apiUrl: string = 'https://restcountries.com/v3.1';



  //*Buscar country por alpha code

  searchCountryByAlphaCode(code:string): Observable<Country | null>{
  //* En el return del get indicamos que va a recibir un array de interfaz country
  return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`).pipe(
    map(countries =>
      countries.length> 0  ? countries[0]:null
    ),
    //*Of contruye un observable del error y genera el error con la condición que digamos
    //*En este caso, le decimos que si regresa un array vacio es un error
    catchError((error) => of(null))
  );
  }

  //* Primero tipamos que va a recibir un observable con arreglo de la interfaz Country
  searchCapital(term: string): Observable<Country[]> {
    //* En el return del get indicamos que va a recibir un array de interfaz country
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`).pipe(
      //*Of contruye un observable del error y genera el error con la condición que digamos
      //*En este caso, le decimos que si regresa un array vacio es un error
      catchError((error) => of([]))
    );
  }

  searchCountry(term:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`).pipe(
      //*Of contruye un observable del error y genera el error con la condición que digamos
      //*En este caso, le decimos que si regresa un array vacio es un error
      catchError((error) => of([]))
    );
  }

  searchRegion(region:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`).pipe(
      //*Of contruye un observable del error y genera el error con la condición que digamos
      //*En este caso, le decimos que si regresa un array vacio es un error
      catchError((error) => of([]))
    );
  }
}
