import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'],
})
export class MarkersPageComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-5.988, 37.38);
  public currentLng: number = this.currentLngLat.lng;
  public currentLat: number = this.currentLngLat.lat;

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'ELement HTML not found';
    console.log(this.divMap);
    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    // const markerHtml = document.createElement("div");
    // markerHtml.innerHTML= "Juansa García"
    // const marker = new Marker({ color: 'red', element:markerHtml })
    //   .setLngLat(this.currentLngLat)
    //   .addTo(this.map);
  }
}
