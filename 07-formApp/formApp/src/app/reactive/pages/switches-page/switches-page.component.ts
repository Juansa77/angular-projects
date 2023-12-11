import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styles: [],
})
export class SwitchesPageComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });


public person ={
  gender:"F",
  wantNotifications:false
}

  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
this.myForm.reset(this.person)
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }


  getFieldError(field: string): string | null {
    //si el formulario no tiene ese campo o no tiene errores, return null
    if (!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};

    for (const iterator of Object.keys(errors)) {
      switch (iterator) {
        case 'required':
          return 'Debes aceptar las condiciones de uso';
      }
    }

    return null;
  }


  onSave(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;}

      const {  termsAndConditions, ...newPerson} = this.myForm.value
      this.person  = newPerson
      console.log(this.person)
      console.log(this.myForm.value)
      this.myForm.reset();
  }
}
