import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar {
  progresso: number = 0;

  aumentarProgresso() {
    this.progresso = Math.min(this.progresso + 30, 300);
  }
}
