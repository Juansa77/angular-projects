import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
constructor(public gifsService: GifsService){

}
//*Aquí accedemos al servicio para que nos dé la lista de tags
get tags(){
  return this.gifsService.tagsHistory
}
//*Método para que vuelva a hacer búsqueda al pulsar en tag
searchTag(tag:string){
  return this.gifsService.searchTag(tag)
}

}
