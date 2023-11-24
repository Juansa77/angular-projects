import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFlyPipe'
})

export class CanFlyPipe implements PipeTransform {
  transform(value:boolean):string {
    console.log(value)
    return value ? "Flying hero":"Cant fly"
  }

}
