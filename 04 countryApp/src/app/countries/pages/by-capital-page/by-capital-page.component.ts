import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',

})
export class ByCapitalPageComponent implements OnInit {

  public initialValue:string=""
  ngOnInit(): void {
  this.countries = this.countriesService.cacheStore.byCapital.countries
  this.initialValue = this.countriesService.cacheStore.byCapital.term
  }

  constructor(private countriesService: CountriesService ){}

public countries:Country[]=[]

//* Propiedad para carga de spinner
public isLoading: boolean= false



//*Función que utiliza la función del servicio
  searchByCapital(term:string):void{
    this.isLoading=true
  this.countriesService.searchCapital(term).subscribe(countries =>{
    this.countries =countries
  this.isLoading=false
  }
    )
  }
}
