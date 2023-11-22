import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css'],
})
export class BasicPageComponent {
  public nameLower: string = 'juansa';
  public nameUpper: string = 'JUANSA';
  public fullName: string = 'JuANsa gArCia';
  public customDate: Date =new Date()
}
