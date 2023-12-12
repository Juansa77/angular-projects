import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validators.service';
// import * as customValidators from 'src/app/shared/validators/validators.functions';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup= this.fb.group({
    name:["", [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern) ]],
    email:["", [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidator]],
    userName: ["", [Validators.required, this.validatorsService.cantBeStrider]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    password2: ["", [Validators.required]],
  },
  //* objeto para validadores grupales en todos los campois
  {
    //* validador grupal
    validators:[
      this.validatorsService.isFieldOneEqualsFieldTwo("password","password2"),
    ]
  })

  constructor(private fb: FormBuilder,
    public validatorsService: ValidatorsService,
    private emailValidator: EmailValidatorService ){}


  isValidField(field:string){
   return this.validatorsService.isValidField(this.myForm, field)
  }
  onSubmit(){
    this.myForm.markAllAsTouched()
  }
}
