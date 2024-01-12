import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template:`<h1 class="text-3xl mb-5" [title]>{{title}}</h1>`,
  styles: ``,

})
export class TitleComponent {

//  public title:string="";
@Input({required:true}) title:string=""

@Input({transform:booleanAttribute}) withShadow:boolean=false;
}
