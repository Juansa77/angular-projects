import { Component } from '@angular/core';

@Component({
  selector: 'app-herores-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 45;
  get capitalizeName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`

  }

  changeHero():void{
    this.name="Spiderman"

  }

  changeAge():void{
    this.age=25
  }

  resentForm():void{
    this.age=45
    this.name="ironman"
  }
}
