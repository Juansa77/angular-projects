import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  //*Inyectamos el servicio de gifs
  constructor(private gifsService: GifsService) { }

  //* Creamos un getter para acceder al servicio; hacemos el get para no cambiar la data
  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
