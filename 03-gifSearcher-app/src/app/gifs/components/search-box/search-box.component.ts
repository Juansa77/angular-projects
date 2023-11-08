import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `<h5>Search:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="search gifs"
      (keyup.enter)="searchTag()"
      #txtTypeInput
    />`,
})
export class SearchBoxComponent {
  //*Utilizamos el decorador viewchild para apuntar a un elmento del dom por ID
  @ViewChild('txtTypeInput')
  //* Propiedad definida como un elemento HTML
  public tagInput!: ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService) {}
  searchTag() {
    //*Tomamos el valor de taginput, al que tenemos acceso gracias al decorador
    const newTag = this.tagInput.nativeElement.value;
    //*Accedemos al service para que se agrege cada búsqueda al array de búsqueda
    this.gifsService.searchTag(newTag)
    //*Borramos el valor del input
    this.tagInput.nativeElement.value=""
    console.log({ newTag });
  }
}
