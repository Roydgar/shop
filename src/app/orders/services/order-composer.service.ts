import { Injectable } from '@angular/core';
import { CartService } from '../../shared';
import { OrderModel } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderComposer {

  constructor(private cartService: CartService) {
  }

  composeOrderFromCart() {
    return new OrderModel(
      this.cartService.cartItems,
      this.cartService.totalPrice,
      this.cartService.totalQuantity);
  }

}
