import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

//* Tipo para controlar los valores aceptado


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css'],
})
export class ByRegionPageComponent  implements OnInit {
  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
 this.countries = this.countriesService.cacheStore.byRegion.countries
 this.selectedRegion= this.countriesService.cacheStore.byRegion.region
  }

  public countries: Country[] = [];
  public selectedRegion?:Region;

  public initialValue:string=""
  //*Controlar los valores aceptados

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  searchByRegion(region: Region) {
    this.selectedRegion=region
    this.countriesService
      .searchRegion(region)
      .subscribe((countries) => (this.countries = countries));
  }
}
