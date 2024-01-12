import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
template: `<section  [ngClass]="['w-full', cssClass]" ><ng-content/></section>`
})
export class HeavyLoadersFastComponent {

constructor(){
  console.log("heavy loader fast created")
}

  @Input({required:true}) cssClass!:string;
}
