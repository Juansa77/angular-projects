import { Component, signal } from '@angular/core';

type Grade = "A"| "B" |"C" | "D" | "E" | "F"

@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {

public showContent = signal(false);
public grade = signal<Grade>("A")

public toogleContent(){
  this.showContent.update( value => !value)
}



}
