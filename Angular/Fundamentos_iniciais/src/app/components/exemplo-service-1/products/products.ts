import { Component, inject } from '@angular/core';
import { ProductsService } from '../services/products.service'
import { ProductsList } from "../products-list/products-list";
import { ProductsCounter } from "../products-counter/products-counter";
import { ObservableComponent } from '../observable/observable'

@Component({
  selector: 'app-products',
  imports: [ProductsList, ProductsCounter, ObservableComponent],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productList : any[]= []

  readonly _productsService = inject(ProductsService);

  ngOnInit() {
    this._productsService.products$.subscribe((productList) => {
      this.productList = productList;
    })
  }

  criarProduto() {
    this._productsService.adicionarProduto(3, 'Teclado', 300);
  }

  removerProduto(id: number) {
    this._productsService.removerProduto(id);
  }

  modificarLista() {
   this.productList = []
  }
}
