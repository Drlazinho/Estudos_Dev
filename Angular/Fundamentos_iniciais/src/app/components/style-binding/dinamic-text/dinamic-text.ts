import { Component } from '@angular/core'

@Component({
  selector: 'app-dinamic-text',
  imports: [],
  template: `
  <p [style.font-size.rem]="tamanhoTextoRem">dinamic-text works!</p>
<button (click)="aumentarTexto()">Tamanho +</button>
<button (click)="diminuirTexto()">Tamanho -</button>

  `,
  styles: ``,
})

export class DinamicText {
  tamanhoTextoRem = 1.2;

  aumentarTexto() {
    this.tamanhoTextoRem = Math.min(this.tamanhoTextoRem + 0.2, 3) // Limite máximo de 3rem
  }

  diminuirTexto() {
    this.tamanhoTextoRem = Math.max(this.tamanhoTextoRem - 0.2, 0.5) // Limite mínimo de 0.5rem
  }
}
