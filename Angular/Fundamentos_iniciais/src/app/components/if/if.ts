import { CommonModule } from '@angular/common'
import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  imports: [CommonModule],
  templateUrl: './if.html',
  styleUrl: './if.css',
})
export class If {
  userRole = 'visitante'

  setUserRole(role: string) {
    this.userRole = role
  }
}
