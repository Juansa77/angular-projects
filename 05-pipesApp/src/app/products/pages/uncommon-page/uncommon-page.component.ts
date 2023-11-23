import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //* i18nSelect-----
  public name: string = 'Juansa';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = { male: 'him', female: 'her' };

  changeClient(): void {
    this.name = 'Mawi';
    this.gender = 'female';
  }

  //*i18nPluralPipe-----

  public clients: string[] = ['Antonio', 'María', 'Almu', 'Fernando'];

  public clientsMap = {
    '=0': ' no waitlist',
    '=1': ' one client in waitlist',
    '=2': ' two clients in waitlist',
    '=3': ' three clients in waitlist',
    '=4': ' four clients in waitlist',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //*Key Value Pipe-----
  public person = {
    name: 'Juansa',
    age: 45,
    address: 'Sevilla',
  };

  //*Async Pipe-----

  public myObservableTimer:Observable<number> = interval(2000);

  public promiseValue:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have data in promise');
    }, 3500);
  });
}
