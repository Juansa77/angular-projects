import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent  implements OnInit{
  constructor(private countriesService: CountriesService){}
  ngOnInit(): void {
  this.countries = this.countriesService.cacheStore.byCountries.countries;
  this.initialValue = this.countriesService.cacheStore.byCountries.term
  }


  public initialValue:string=""
  public countries: Country[]=[]

  searchByCountry(term:string){
this.countriesService.searchCountry(term).subscribe(countries=>
  this.countries=countries)
  }
}
