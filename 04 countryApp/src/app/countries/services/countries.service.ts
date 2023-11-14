import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../interfaces/country';


@Injectable({providedIn: 'root'})
export class CountriesService {
  constructor(private http: HttpClient) { }

  private apiUrl:string="https://restcountries.com/v3.1"

  //* Primero tipamos que va a recibir un observable con arreglo de la interfaz Country
  searchCapital(term:string):Observable<Country[]>{
    //* En el return del get indicamos que va a recibir un array de interfaz country
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
  }

}


