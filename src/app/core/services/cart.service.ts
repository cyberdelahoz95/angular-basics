import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; // class used to apply reactivity
import { Product } from './../../core/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() {}

  addToCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
}
