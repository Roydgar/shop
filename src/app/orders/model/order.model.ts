import { CartItem } from '../../cart';

export interface Order {
  cartItems: CartItem[];
  totalPrice: number;
  totalCount: number;
  id?: number;
}

export class OrderModel implements Order {
  constructor(public cartItems: CartItem[],
              public totalPrice: number = 0,
              public totalCount: number = 0,
              public id?: number) {
  }
}
