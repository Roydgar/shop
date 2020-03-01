import { Injectable } from '@angular/core';
import { Product } from '../../products/model/product.model';

@Injectable()
export class CartService {

  cartProducts: Product[] = [];

  constructor() {
  }

  addProduct(product: Product): void {
    this.cartProducts.push(product);
  }

  clearProducts(): void {
    this.cartProducts = [];
  }

  getProducts(): Product[] {
    return [];
  }

  isEmpty() {
    return this.cartProducts.length === 0;
  }

}
