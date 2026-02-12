import { DecimalPipe } from '@angular/common'
import { Component } from '@angular/core';

interface IProduct {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-for',
  imports: [DecimalPipe],
  templateUrl: './for.html',
  styleUrl: './for.css',
})

export class For {
products: IProduct[] = [
    { id: 1, name: 'Laptop Pro', price: 5500.0 },
    { id: 2, name: 'Mouse Gamer', price: 250.0 },
    { id: 3, name: 'Teclado Mecânico', price: 400.0 },
  ];

  atualizarLista() {
    this.products = [
      { id: 1, name: 'Laptop Pro', price: 5500.0 },
      { id: 2, name: 'Mouse Gamer', price: 250.0 },
      { id: 3, name: 'Teclado Mecânico', price: 400.0 },
    ];
  }

  removerProduto(productId: number) {
    this.products = this.products.filter((product) => product.id !== productId);
  }
}
