import { Injectable } from '@angular/core';
import { CartItem } from '../../cart/models/cart-item';
import { Subject } from 'rxjs';
import { ProductModel } from '../../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  totalPrice: number;
  totalQuantity: number;
  cartItems: CartItem[] = [];
  private channel = new Subject<CartItem[]>();
  channel$ = this.channel.asObservable();

  constructor() {
  }

  addProduct(product: ProductModel): void {
    const cartItem = this.findById(product.id);
    if (cartItem === null) {
      this.cartItems.push(new CartItem(product.id, product, 1));
    } else {
      cartItem.quantity++;
    }

    this.updateCartData();
  }

  deleteItem(cartItemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== cartItemId);
    this.updateCartData();
  }

  increaseQuantity(cartItemId: number): void {
    this.findById(cartItemId).quantity++;
    this.updateCartData();
  }

  decreaseQuantity(cartItemId: number): void {
    const cartItem = this.findById(cartItemId);
    if (cartItem.quantity > 0) {
      cartItem.quantity--;
    }

    if (cartItem.quantity === 0) {
      this.deleteItem(cartItemId);
    }

    this.updateCartData();
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCartData();
  }

  private findById(cartItemId: number): CartItem | null {
    return this.cartItems.find(item => item.id === cartItemId) || null;
  }

  private updateCartData() {
    this.calculateQuantity();
    this.calculateTotalPrice();

    this.cartItems = this.cartItems.map(cartItem => Object.assign({}, cartItem));
    this.channel.next(this.cartItems);
  }

  private calculateQuantity(): void {
    this.totalQuantity = this.cartItems.reduce((sum, current) => sum + current.quantity, 0);
  }

  private calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((sum, item) => (sum + item.product.price) * item.quantity, 0);
  }
}
