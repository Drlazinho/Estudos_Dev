import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  onButtonClick() {
    console.log('O botão foi clicado!');
  }

  onInput(event : Event) {

    const value = (event.target as HTMLInputElement).value;
    console.log('Valor do input:', value);
  }
  onFocus(event : Event) {

    const value = (event.target as HTMLInputElement).value;
    console.log('Valor do input:', value);
  }
  
  onBlur(event : Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log('Valor do input:', value);
  }
}
