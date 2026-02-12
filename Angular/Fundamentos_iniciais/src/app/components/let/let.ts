import { CommonModule } from '@angular/common'
import { Component } from '@angular/core';

@Component({
  selector: 'app-let',
  imports: [CommonModule],
  templateUrl: './let.html',
  styleUrl: './let.css',
})
export class Let {
pessoas = [
    {
      id: 0,
      nome: 'Felipe',
      idade: 28,
      endereco: { rua: 'Rua de Tal', numero: '123' },
    },
    { id: 1, nome: 'Laura', idade: 25 },
  ];

  removerPessoa() {
    this.pessoas.pop();
  }

  pegarQuantidadePessoas() {
    return this.pessoas.length;
  }
}
