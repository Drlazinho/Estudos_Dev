import { Component } from '@angular/core';

@Component({
  selector: 'app-square-popup',
  imports: [],
  template: `
    <div class="quadrado" [style.left.%]="posicaoHorizontal"></div>
    <div class="popup" [style.top]="alturaPopup + 'vh'" [style.right]="'10px'">
      Popup Dinamico
    </div>

    <button (click)="moverQuadrado()">Mover Quadrado</button>
    <button (click)="togglePopup()">Toggle Popup</button>
  `,
  styles: `
    .quadrado {
      width: 50px;
      height: 50px;
      background-color: blue;
      position: relative;
      transition: left 0.5s ease;
      margin-top: 20px;
    }

    .popup {
      position: fixed;
      background-color: lightgray;
      padding: 15px;
      border-radius: 8px;
      transform: translateY(-100%);
      transition: transform 0.3s ease-out, top 0.3s ease-out;
    }
  `,
})
export class SquarePopup {
  posicaoHorizontal: number = 0;
  alturaPopup: number = 0;

  moverQuadrado() {
    this.posicaoHorizontal = (this.posicaoHorizontal + 10) % 100;
  }

  togglePopup() {
    this.alturaPopup = this.alturaPopup === -10 ? 10 : -10;
  }
}
