import { Component, OnInit, computed, inject, signal } from '@angular/core';
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
    this.currentUser.set(undefined);
    this.userService.getUserById(id).subscribe({
      next: (user) => {
        this.currentUser.set(user);
        this.userWasFound.set(true);
      },
      error: () => this.userWasFound.set(false)
    });
  }

  private userService = inject(UsersServiceService);
  public userID = signal(1);

  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);
  public fullName = computed<string>(() => {
    if (!this.currentUser()) return 'user not found';
    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  });
}
