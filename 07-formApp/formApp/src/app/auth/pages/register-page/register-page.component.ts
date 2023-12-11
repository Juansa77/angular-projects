import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from 'src/app/shared/validators/validators.functions';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup= this.fb.group({
    name:["", [Validators.required ]],
    email:["", [Validators.required]],
    userName: ["", [Validators.required, cantBeStrider]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    password2: ["", [Validators.required]],
  })

  constructor(private fb: FormBuilder ){}


  isValidField(field:string){
    //TODO: Obtener validacion
  }
  onSubmit(){
    this.myForm.markAllAsTouched()
  }
}
