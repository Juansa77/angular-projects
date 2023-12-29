import { Component, OnInit, inject, signal } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css'],
})
export class UserInfoPageComponent implements OnInit {
  ngOnInit(): void {
    this.loadUser(this.userID());
  }

  loadUser(id: number) {
    if (id <= 0) return;
    this.userID.set(id);
    this.currentUser.set(undefined)
    this.userService.getUserById(id).subscribe(user =>{
    this.currentUser.set(user)
    })
  }

  private userService = inject(UsersServiceService);
  public userID = signal(1);

  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);
}
