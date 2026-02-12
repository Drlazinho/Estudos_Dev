import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.html',
  styleUrl: './subject.css',
})
export class SubjectComponent implements OnInit {
  meuSubject$: Subject<string> = new Subject<string>();

  ngOnInit() {
    // 1. Você emite aqui.
    // ERRO SUTIL: Ninguém está ouvindo ainda! Esse valor "Olá, Subject!" se perde no vácuo.
    this.meuSubject$.next('Olá, Subject!')

    // 2. Agora o 'Primeira inscrição' começa a ouvir.
    this.primeiraInscricao()

    // 3. Esta emissão SERÁ capturada pela 'Primeira inscrição'.
    this.meuSubject$.next('Olá, Subject! (Emitido após a 1ª inscrição)')

    setTimeout(() => {
      // 4. Se você clicar no botão antes desse tempo acabar,
      // as DUAS inscrições vão logar essa mensagem.
      // Se clicar depois, só a primeira loga.
      this.meuSubject$.next('Olá, Subject! Depois de 3 segundos')
    }, 3000)
  }

  primeiraInscricao() {
    this.meuSubject$.subscribe((value) => {
      console.log('Primeira inscrição:', value)
    })
  }

  segundaInscricao() {
    this.meuSubject$.subscribe((value) => {
      console.log('Segunda inscrição:', value)
    })
  }
}
