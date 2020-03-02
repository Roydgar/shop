import { Injectable } from '@angular/core';
import { Product } from '../../products/models/product.model';
import { CartItem } from '../../cart/models/cart-item';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CartService {

  private channel = new Subject<CartItem[]>();
  private channel$ = this.channel.asObservable();
  private cartItems: CartItem[] = [];

  constructor() {
  }

  totalPrice(): number {
    return this.cartItems.reduce((sum, item) => (sum + item.product.price) * item.quantity, 0);
  }

  deleteItem(index: number): void {
    this.cartItems = this.cartItems.splice(index, 1);
  }

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity++;
  }

  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 0) {
      this.cartItems[index].quantity--;
    }
  }

  publishProduct(product: Product): void {
    this.cartItems.push(new CartItem(product, 1));
    this.channel.next(this.cartItems);
  }

  clearProducts(): void {
    this.cartItems = [];
    this.channel.next(this.cartItems);
  }

  getChannel(): Observable<CartItem[]> {
    return this.channel$;
  }
}
