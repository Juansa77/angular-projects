import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //* i18nSelect
  public name: string = 'Juansa';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = { male: 'him', female: 'her' };

  changeClient(): void {
    this.name = 'Mawi';
    this.gender = 'female';
  }
}
