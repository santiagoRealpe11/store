import { computed, Injectable, signal } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart = signal<ProductModel[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  });
  
  constructor() {}

  addToCart(product: ProductModel) {
    this.cart.update((state) => [...state, product]);
  }
}
