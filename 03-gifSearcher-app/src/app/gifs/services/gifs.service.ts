import { Injectable } from '@angular/core';

//*En el root porque es global
@Injectable({providedIn: 'root'})
export class GifsService {



  //*------SERVICIO PARA CAPTURAR LOS DATOS DEL SEARCH INPUT Y COMUNICARLO ENTRE COMPONENTES
//*Definimos la propiedad donde almacenamos las búsquedas
  private _tagHistory: string[]=[]
  constructor() { }
//*Añadir un nuevo tag al array, que se manejará desde searchbox
  public searchTag(tag:string):void{
    //*Usamos unshift para agregar nuevo elemento al principo de array
    this._tagHistory.unshift(tag)
  }

  //*Getter para capturar el taghistory
  get tagsHistory(){
    //* Obtenemos una copia del  tagHistory con spread por seguridad
    return [...this._tagHistory]
  }


}
