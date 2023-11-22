import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
   public menuItems: MenuItem[]=[]

  constructor() { }

  ngOnInit(): void { this.menuItems = [
    {
      label: 'Angular Pipes',
      icon: 'pi pi-desktop',

      items: [
        {
          label: 'Text and dates',
          icon: 'pi pi-align-left',
          routerLink:"/"

        },
        {
          label: 'Numbers',
          icon: 'pi pi-dollar',
          routerLink:"/numbers"
        },
        {
          label: 'Uncommon',
          icon: 'pi pi-globe',
          routerLink:"/uncommon"
        },
      ],
    },
    {
      label: 'Custom Pipes',
      icon: 'pi-pi-cog',
      items: [
        {
          label: 'Another element',
          icon: 'pi-pi-cog',
        },
      ],
    },
  ];

  }

}
