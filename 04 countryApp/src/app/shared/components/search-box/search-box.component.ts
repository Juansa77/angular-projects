import { Component, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit{


@Input()
public placeholder:string=""


private debouncer:Subject<string>=new Subject<string>();

ngOnInit(): void {
this.debouncer.pipe(
  debounceTime(300)
).subscribe(value => {
this.onDebounce.emit(value)
})
}

onKeyPress(searchTerm:string):void{

this.debouncer.next(searchTerm)
}

@Output()
public onValue = new EventEmitter<string>()

@Output()
public onDebounce = new EventEmitter<string>()

emitValue(value:string):void{
  this.onValue.emit(value)
}
}



