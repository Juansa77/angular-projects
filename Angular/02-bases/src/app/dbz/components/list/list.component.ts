import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: "Trunks",
    power: 10,
  }]
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()

  onDeleteCharacterEmitter(id?: string): void {
    //emitir ID
    if(!id) return
    this.onDelete.emit(id)
  }
}
