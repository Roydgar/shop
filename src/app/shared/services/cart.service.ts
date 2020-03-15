import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { CartItem } from '../../cart/models/cart-item';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class CartService {

  private channel = new Subject<CartItem[]>();
  private channel$ = this.channel.asObservable();
  private cartItems: CartItem[] = [];

  constructor() {
  }

  totalPrice(): number {
    return this.cartItems.reduce((sum, item) => (sum + item.product.price) * item.quantity, 0);
  }

  deleteItem(cartItemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== cartItemId);
    this.channel.next(this.cartItems);
  }

  increaseQuantity(cartItemId: number): void {
    this.findById(cartItemId).quantity++;
  }

  decreaseQuantity(cartItemId: number): void {
    const cartItem = this.findById(cartItemId);
    if (cartItem.quantity > 0) {
      cartItem.quantity--;
    }

    if (cartItem.quantity === 0) {
      this.deleteItem(cartItemId);
    }
  }

  publishProduct(product: Product): void {
    const cartItem = this.findById(product.id);
    if (cartItem === null) {
      this.cartItems.push(new CartItem(product.id, product, 1));
      this.channel.next(this.cartItems);
    } else {
      cartItem.quantity++;
    }
  }

  clearProducts(): void {
    this.cartItems = [];
    this.channel.next(this.cartItems);
  }

  getChannel(): Observable<CartItem[]> {
    return this.channel$;
  }

  private findById(cartItemId: number): CartItem | null {
    return this.cartItems.find(item => item.id === cartItemId) || null;
  }
}
