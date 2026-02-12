import { Component } from '@angular/core'

@Component({
  selector: 'app-child',
  imports: [],
  template: `
    <p>
      child works!
    </p>
  `,
  styles: `
  :host {
    background-color: rgb(255, 255, 255);
    display: block;
    padding: 10px;
    border: 1px solid black;
    --fundo-branco: rgb(255, 255, 255);
  }

  :host(:hover) {
    background-color: rgb(241, 99, 99);
  }

  :host([tema="primario"]) {
    background-color: rgb(0, 0, 0);
  }

  :host([tema="secundario"]) {
    background-color: rgb(99, 99, 241);
  }

  :host(.ativo) {
    border: 3px solid green;
  }

  :host-context(.tema-escuro) {
    border: 1px solid #555;
    color: white;
    background-color: #333;
  }

  p{
    font-family: cursive;
  }`,
})
export class Child {

}
