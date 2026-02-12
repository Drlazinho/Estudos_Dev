import { Component, inject } from '@angular/core';
import { ProductsService } from '../services/products.service'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-products-list',
  imports: [AsyncPipe],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  readonly _productsService = inject(ProductsService);

}
