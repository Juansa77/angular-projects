import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/Countries.service';
import { Region } from '../../interfaces/country.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent {


  public myForm: FormGroup= this.fb.group({
    region:["", Validators.required],
    country:["", Validators.required],
    borders:["", Validators.required],
  })

get regions(): Region[]{
  return this.countriesServices.regions;
}

constructor(private fb: FormBuilder, private countriesServices: CountriesService){}

}
