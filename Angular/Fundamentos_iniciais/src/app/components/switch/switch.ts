import { Component } from '@angular/core';

type UserRole = 'view' | 'editor' | 'admin';

@Component({
  selector: 'app-switch',
  imports: [],
  templateUrl: './switch.html',
  styleUrl: './switch.css',
})
export class Switch {
  userRole = 'view' as UserRole;

  setUserRole(role: UserRole) {
    this.userRole = role
  }
}
