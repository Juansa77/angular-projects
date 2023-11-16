import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../interfaces/country';
import { catchError, delay, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private http: HttpClient) {}

  private apiUrl: string = 'https://restcountries.com/v3.1';

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
  searchCapital(capital: string): Observable<Country[]> {
    const url =`${this.apiUrl}/capital/${capital}`
   return this.getCountriesRequest(url)
  }

  searchCountry(country: string): Observable<Country[]> {
    const url =`${this.apiUrl}/name/${country}`
    return this.getCountriesRequest(url)
  }

  searchRegion(region: string): Observable<Country[]> {
    const url =`${this.apiUrl}/region/${region}`
    return this.getCountriesRequest(url)
  }
}
