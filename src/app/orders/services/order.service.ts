import { Inject, Injectable } from '@angular/core';
import { CartService } from '../../shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ordersAPI } from '../orders.config';
import { OrderModel } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private cartService: CartService,
              private http: HttpClient,
              @Inject(ordersAPI) private baseUrl: string) {
  }

  composeOrderFromCart() {
    return new OrderModel(
      this.cartService.cartItems,
      this.cartService.totalPrice,
      this.cartService.totalQuantity);
  }

  getOrders(): Promise<OrderModel[]> {
    return this.http.get<OrderModel[]>(this.baseUrl).toPromise();
  }

  getOrderById(id: number): Promise<OrderModel> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.get<OrderModel>(url).toPromise();
  }

  createOrder(order: OrderModel): Promise<OrderModel> {
    const body = JSON.stringify(order);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    const orderModel$ = this.http.post<OrderModel>(this.baseUrl, body, options).toPromise();
    this.cartService.clearCart();
    return orderModel$;
  }

  updateOrder(order: OrderModel): Promise<OrderModel> {
    const url = `${this.baseUrl}/${order.id}`;
    const body = JSON.stringify(order);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put<OrderModel>(url, body, options).toPromise();
  }

}
