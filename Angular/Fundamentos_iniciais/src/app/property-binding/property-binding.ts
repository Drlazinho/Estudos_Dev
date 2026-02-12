import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})

export class PropertyBinding {
  // Property Binding
  texto = 'Texto atual';
  inputType = 'password';
  inputDisabled = true;
  enabledText = 'Habilitar input';
  disabledText = 'Desabilitar input';

  // Event Binding
  changeEnabled() {
    this.inputDisabled = !this.inputDisabled;
  }
}
