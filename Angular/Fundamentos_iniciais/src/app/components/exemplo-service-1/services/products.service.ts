import { Inject, Injectable } from '@angular/core'
import { BehaviorSubject, map } from 'rxjs'

@Injectable({
  providedIn: 'root',
})

export class ProductsService {
  private products = new BehaviorSubject<any[]>([
    { id: 1, nome: 'Mouse', preco: 100 },
    { id: 2, nome: 'Monitor', preco: 1000 },
  ]);

  readonly products$ = this.products.asObservable().pipe(
    map((products) => structuredClone(products)),
  );

  adicionarProduto(id: number, nome: string, preco: number) {
    const newProductsList = [...this.products.getValue(), { id, nome, preco }]

    this.products.next(newProductsList)
  }

  removerProduto(id: number) {
    const newProductsList = this.products.getValue().filter(product => product.id !== id)

    this.products.next(newProductsList)
  }
}
