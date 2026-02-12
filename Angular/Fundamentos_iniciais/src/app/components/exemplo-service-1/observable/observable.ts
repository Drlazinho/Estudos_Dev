import { AsyncPipe } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription, tap } from 'rxjs'

@Component({
  selector: 'app-observable',
  imports: [AsyncPipe],
  templateUrl: './observable.html',
  styleUrl: './observable.css',
})

export class ObservableComponent implements OnInit, OnDestroy {
  meuObservable$!: Observable<number>;
  meuSubs!: Subscription;
  observableLista$!: Observable<any[]>;

  ngOnInit() {
    this.criarObservable();
    this.inscricao1();
    this.criarObservableLista();
    this.inscricaoListaMaiuscula();
    this.inscricaoNumerosImpares();
  }

  //Sempre que criamos uma inscrição, é importante lembrar de cancelá-la quando o componente for destruído, para evitar vazamentos de memória.
  ngOnDestroy() {
    this.meuSubs.unsubscribe();
  }

  criarObservable() {
    this.meuObservable$ = new Observable<number>((subscriber) => {
      console.log('Observable criado');
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);

      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 4000);
    });
  }

  inscricao1() {
    this.meuSubs =this.meuObservable$.subscribe((value) => {
      console.log(value);
    });
  }

  criarObservableLista() {
    this.observableLista$ = new Observable<any[]>((subscriber) => {

      setTimeout(() => {
      subscriber.next(['Lázaro', 'Cris', 'Leon']);
      }, 3000)
      setTimeout(() => {
      subscriber.next(['Lázaro', 'Leon']);
      }, 5000)
    })
  }

  // Manipulando os dados emitidos por um Observable usando operadores de transformação, como o map, para criar uma nova versão dos dados antes de se inscrever neles.
  inscricaoListaMaiuscula() {
    this.observableLista$.pipe(
      map(lista => {
        return lista.map((nome) => nome.toUpperCase())
      })
    ).subscribe((lista) => {
      console.log('Lista de nomes atualizada', lista), lista;
    })
  }

  // Filtrando os dados emitidos por um Observable usando operadores de filtragem, como o filter, para se inscrever apenas em determinados valores que atendam a uma condição específica.
  // O Tap é um operador que permite executar efeitos colaterais para depuração ou outras finalidades, sem modificar os dados que estão sendo transmitidos pelo Observable.
  inscricaoNumerosImpares() {
    this.meuObservable$.pipe(tap((numero) => {
      console.log('Número recebido', numero);
    }),filter((numero) => numero % 2 === 1)).subscribe((numero) => {
      console.log('Numero impar', numero);
    })
  }
}
