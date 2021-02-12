import { Component, OnInit } from '@angular/core';

import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProduct();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProduct() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
