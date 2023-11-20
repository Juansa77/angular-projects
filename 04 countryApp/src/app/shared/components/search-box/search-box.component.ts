import { Component, EventEmitter, Input, Output, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy{
  @Input()
  public initialValue:string="";

@Input()
public placeholder:string=""
public debouncerSuscription?: Subscription;

private debouncer:Subject<string>=new Subject<string>();

//* OnInit para el debouncer en searchbox, retraso de 0,3 seg en emitir el valor
ngOnInit(): void {
this.debouncerSuscription = this.debouncer.pipe(
  debounceTime(300)
).subscribe(value => {
this.onDebounce.emit(value)
})
}
//**Método on destroy para desuscribirte al evento cada vez que se destruye el componente */
ngOnDestroy(): void {
this.debouncerSuscription?.unsubscribe()
}


onKeyPress(searchTerm:string):void{

this.debouncer.next(searchTerm)
}


//*Funcionalidad desactivada
@Output()
public onValue = new EventEmitter<string>()


//*Funcionalidad actual
@Output()
public onDebounce = new EventEmitter<string>()

emitValue(value:string):void{
  this.onValue.emit(value)
}
}



