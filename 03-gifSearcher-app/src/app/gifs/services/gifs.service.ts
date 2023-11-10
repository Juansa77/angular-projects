import { Injectable } from '@angular/core';
import { GHIPY_API_KEY } from 'src/app/enviroment/apiKey';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL } from 'src/app/enviroment/giphyUrl';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';


//*En el root porque es global
@Injectable({ providedIn: 'root' })
export class GifsService {
  public gifList: Gif[]=[]
  private url: string = API_URL;
  private apiKey: string = GHIPY_API_KEY;
  //*------SERVICIO PARA CAPTURAR LOS DATOS DEL SEARCH INPUT Y COMUNICARLO ENTRE COMPONENTES
  //*Definimos la propiedad donde almacenamos las búsquedas
  private _tagHistory: string[] = [];
  constructor(private http: HttpClient) {this.loadLocalHistory()}
  //*Añadir un nuevo tag al array, que se manejará desde searchbox

  //* Método para validaciones del input
  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    //*Filter para no tener búsquedas repetidas
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag != tag);

    }

    //*Limitamos a 10 los resultados hacendo un splice de los index 0 a 10
    this._tagHistory = this._tagHistory.splice(0, 10);
    this.saveToLocalStorage()
  }


//*Método para grabar en Localstorage  las búsquedas

private saveToLocalStorage():void{
  localStorage.setItem("history", JSON.stringify(this._tagHistory))
}

//* Salvar las búsquedas en local

private loadLocalHistory():void{
if(!localStorage.getItem("history"))return

//* NonNull operator ! al final para decirle que siempre le vendrá DATA
  this._tagHistory = JSON.parse(localStorage.getItem("history")!)
  if(this._tagHistory.length ===0) return
  //*llamamos a searchTag con el primer valor de búsqueda del historial
  this.searchTag(this._tagHistory[0])
}

  public searchTag(tag: string): void {
    //*Usamos unshift para agregar nuevo elemento al principo de array
    //*Validaciones para el formulario

    if (tag.length === 0) return;
    this.organizeHistory(tag);
    this._tagHistory.unshift(tag);
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);
//*Llámada HTTP
    this.http.get<SearchResponse>(`${this.url}/search`, {params}).subscribe((resp) => {
      this.gifList =resp.data

    });
    //*Método clásico JS
    // fetch(
    //   'http://api.giphy.com/v1/gifs/search?
    //   .then((resp) => resp.json())
    //   .then((data) => console.log(data));
  }

  //*Getter para capturar el taghistory
  get tagsHistory() {
    //* Obtenemos una copia del  tagHistory con spread por seguridad
    return [...this._tagHistory];
  }
}
