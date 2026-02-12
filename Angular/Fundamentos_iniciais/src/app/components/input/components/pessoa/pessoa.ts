import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core'
import { IPessoa } from '../../input'

@Component({
  selector: 'app-pessoa',
  imports: [],
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css',
})

export class Pessoa implements OnChanges, OnInit {
  @Input() pessoa!: IPessoa

  @Output() removerPessoaEmit = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)

    if(changes['pessoa'].currentValue) {
      console.log('Pessoa atualizada:', changes['pessoa'].currentValue)
    }
  }

  removerPessoa(pessoaId: number) {
    this.removerPessoaEmit.emit(pessoaId)
  }
}
