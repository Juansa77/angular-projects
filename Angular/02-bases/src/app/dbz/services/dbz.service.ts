import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { v4 as uuid } from "uuid"


@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [{
    name: "Krilin",
    power: 2000,
    id: uuid(),
  },
  {
    name: "Goku",
    power: 9500,
    id: uuid(),
  },
  {
    name: "Vegeta",
    power: 7500,
    id: uuid()
  }
  ]

  onNewCharacter(character: Character): void {
    //*Destructurinf; le metemos el id al abjeto character y creamos otro objeto
    const newCharacter: Character = { id: uuid(), ...character }
    console.log(newCharacter)
    this.characters.push(newCharacter)
  }

  deleteCharacterById(id: string) {
   this.characters= this.characters.filter(character => character.id !== id)
  }
}

