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
    favoriteGames: this.fb.array([
      ["Metal Gear", Validators.required],
      ["Alan Wake", Validators.required],
      ["Death Stranding", Validators.required]

    ])
  })

  constructor(private fb: FormBuilder){}

  get favoriteGames(){
    return this.myForm.get("favoriteGames") as FormArray
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  isValidFieldInArray(formArray:FormArray, index:number){
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  getFieldError(field: string): string | null {
    //si el formulario no tiene ese campo o no tiene errores, return null
    if (!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};

    for (const iterator of Object.keys(errors)) {
      switch (iterator) {
        case 'required':
          return 'This field is required';

        case 'minlength':
          return `This field requires at least ${errors['minlength'].requiredLength} characters`;
      }
    }

    return null;
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
