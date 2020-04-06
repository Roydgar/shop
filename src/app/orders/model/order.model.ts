import { CartItem } from '../../cart';

export class OrderModel {
  constructor(public cartItems: CartItem[],
              public totalPrice: number = 0,
              public totalCount: number = 0,
              public id?: number) {
  }
}
