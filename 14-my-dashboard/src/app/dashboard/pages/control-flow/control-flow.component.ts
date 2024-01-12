import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = "A"| "B" |"C" | "D" | "E" | "F"

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {

public showContent = signal(false);
public grade = signal<Grade>("A")

public frameworks = signal(["Angular", "Vue", "Svelte", "Qwik", "React"])
public frameworks2 = signal([])

public toogleContent(){
  this.showContent.update( value => !value)
}



}
