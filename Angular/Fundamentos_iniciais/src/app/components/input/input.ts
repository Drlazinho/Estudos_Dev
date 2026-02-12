import { Component } from '@angular/core'
import { Pessoa } from "./components/pessoa/pessoa";

export interface IPessoa {
  id: number;
  nome: string;
  idade: number;
  endereco?: {
    rua: string;
    numero: string;
  };
}

@Component({
  selector: 'app-input',
  imports: [Pessoa],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  pessoas: IPessoa[] = [
    {
      id: 0,
      nome: 'Felipe',
      idade: 28,
      endereco: { rua: 'Rua de Tal', numero: '123' },
    },
    { id: 1, nome: 'Laura', idade: 25 },
  ];

  removerPessoaEspecifica(pessoaId: number) {
    this.pessoas = this.pessoas.filter(pessoa => pessoa.id !== pessoaId);
  }

  removerPessoa() {
    this.pessoas.pop()
  }

  pegarQuantidadePessoas() {
    return this.pessoas.length
  }
}
