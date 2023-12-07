import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  public myForm:FormGroup= this.fb.group({
    name: ["", [Validators.required,Validators.minLength(3)]],
    favouriteGames: this.fb.array([
      ["Metal Gear", Validators.required],
      ["Alan Wake", Validators.required],
      ["Death Stranding", Validators.required]

    ])
  })

  constructor(private fb: FormBuilder){}

  get gameList(){
    return this.myForm.get("favouriteGames") as FormArray
  }

  onSubmit():void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return
    }

    console.log(this.myForm.value)
    this.myForm.reset()
  }
}
