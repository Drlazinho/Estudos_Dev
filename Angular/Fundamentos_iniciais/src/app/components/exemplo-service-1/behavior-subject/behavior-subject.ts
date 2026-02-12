import { Component, OnInit } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-behavior-subject',
  imports: [],
  templateUrl: './behavior-subject.html',
  styleUrl: './behavior-subject.css',
})
export class BehaviorSubjectComponent implements OnInit {
  meuBehaviorSubject$: BehaviorSubject<string> = new BehaviorSubject<string>('Valor Inicial');

  ngOnInit(): void {
    this.primeiraInscricao()
  }

  primeiraInscricao() {
    this.meuBehaviorSubject$.subscribe((value) => {
      console.log('Primeira inscrição:', value)
    })
  }

  emitirValor() {
    this.meuBehaviorSubject$.next('Novo Valor Emitido!')
  }

  segundaInscricao() {
    this.meuBehaviorSubject$.subscribe((value) => {
      console.log('Segunda inscrição:', value)
    })
  }
}
