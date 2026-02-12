import { Component, OnDestroy, OnInit } from '@angular/core'

@Component({
  selector: 'app-botao-flat',
  imports: [],
  template: `
 <button class="btn btn-flat" (click)="limpar()">Limpar filtro {{ counter }}</button>
  `,
  styles: `
  .btn {
  /* Variables */
  --primary-orange: #f55a00;
  --white: #ffffff;

  /* Typography & Spacing */
  font-family: Arial, sans-serif;
  padding: 12px 25px;
  font-size: 1em;
  font-weight: bold;

  /* Shaping & Behavior */
  border-radius: 8px;
  cursor: pointer;
  min-width: 150px;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.3s ease; /* Added for smoother interaction */
}

.btn-flat {
  background-color: var(--white);
  border: 2px solid var(--primary-orange);
  color: var(--primary-orange);
}
  `,
})
export class BotaoFlat implements OnInit, OnDestroy {
  counter = 2

  limpar() {
    this.counter++
    console.log('Limpar')
  }
  ngOnInit() {
      this.counter += 10
  }
  ngOnDestroy() {

  }
}
