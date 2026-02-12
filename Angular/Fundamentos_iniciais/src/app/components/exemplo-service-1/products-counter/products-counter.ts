import { Component, inject } from '@angular/core';
import { ProductsService } from '../services/products.service'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-products-counter',
  imports: [AsyncPipe],
  templateUrl: './products-counter.html',
  styleUrl: './products-counter.css',
})
export class ProductsCounter {
  readonly _productsService = inject(ProductsService);
}
