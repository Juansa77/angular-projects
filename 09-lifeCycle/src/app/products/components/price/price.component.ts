import { Component, Input, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: [
  ]
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{
ngOnInit(): void {
  console.log("Price component, componente hijo","ngOnInit")
 this.interval$= interval(1000).subscribe(value=> console.log(`Tick: ${value}`))

}

constructor(){
  console.log("Price component, componente hijo","constructor")
}
ngOnChanges(changes: SimpleChanges): void {
  console.log("Price component, componente hijo",{changes})
  console.log("Price component, componente hijo",'OnChanges')
}
ngOnDestroy(): void {
  console.log("Price component, componente hijo","OnDestroy")
  this.interval$?.unsubscribe()
}
@Input()
public price:number=0

public interval$ ?: Subscription;

}
